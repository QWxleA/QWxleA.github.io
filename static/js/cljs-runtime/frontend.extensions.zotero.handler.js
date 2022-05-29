goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57747){
var state_val_57748 = (state_57747[(1)]);
if((state_val_57748 === (7))){
var inst_57662 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_57747__$1 = state_57747;
var statearr_57749_58010 = state_57747__$1;
(statearr_57749_58010[(2)] = inst_57662);

(statearr_57749_58010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (20))){
var inst_57742 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
var statearr_57750_58011 = state_57747__$1;
(statearr_57750_58011[(2)] = inst_57742);

(statearr_57750_58011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (27))){
var inst_57696 = (state_57747[(7)]);
var inst_57712 = (state_57747[(8)]);
var inst_57712__$1 = cljs.core.seq(inst_57696);
var state_57747__$1 = (function (){var statearr_57751 = state_57747;
(statearr_57751[(8)] = inst_57712__$1);

return statearr_57751;
})();
if(inst_57712__$1){
var statearr_57752_58012 = state_57747__$1;
(statearr_57752_58012[(1)] = (29));

} else {
var statearr_57753_58013 = state_57747__$1;
(statearr_57753_58013[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (1))){
var inst_57653 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_57654 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_57655 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_57654);
var state_57747__$1 = (function (){var statearr_57754 = state_57747;
(statearr_57754[(9)] = inst_57653);

(statearr_57754[(10)] = inst_57655);

return statearr_57754;
})();
var G__57755_58014 = type;
var G__57755_58015__$1 = (((G__57755_58014 instanceof cljs.core.Keyword))?G__57755_58014.fqn:null);
switch (G__57755_58015__$1) {
case "notes":
var statearr_57756_58017 = state_57747__$1;
(statearr_57756_58017[(1)] = (3));


break;
case "attachments":
var statearr_57757_58018 = state_57747__$1;
(statearr_57757_58018[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57755_58015__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (24))){
var inst_57698 = (state_57747[(11)]);
var inst_57699 = (state_57747[(12)]);
var inst_57701 = (inst_57699 < inst_57698);
var inst_57702 = inst_57701;
var state_57747__$1 = state_57747;
if(cljs.core.truth_(inst_57702)){
var statearr_57758_58019 = state_57747__$1;
(statearr_57758_58019[(1)] = (26));

} else {
var statearr_57759_58020 = state_57747__$1;
(statearr_57759_58020[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (4))){
var state_57747__$1 = state_57747;
var statearr_57760_58021 = state_57747__$1;
(statearr_57760_58021[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_57760_58021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (15))){
var state_57747__$1 = state_57747;
var statearr_57761_58022 = state_57747__$1;
(statearr_57761_58022[(2)] = null);

(statearr_57761_58022[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (21))){
var inst_57682 = (state_57747[(13)]);
var inst_57695 = cljs.core.seq(inst_57682);
var inst_57696 = inst_57695;
var inst_57697 = null;
var inst_57698 = (0);
var inst_57699 = (0);
var state_57747__$1 = (function (){var statearr_57762 = state_57747;
(statearr_57762[(14)] = inst_57697);

(statearr_57762[(11)] = inst_57698);

(statearr_57762[(12)] = inst_57699);

(statearr_57762[(7)] = inst_57696);

return statearr_57762;
})();
var statearr_57763_58023 = state_57747__$1;
(statearr_57763_58023[(2)] = null);

(statearr_57763_58023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (31))){
var inst_57732 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
var statearr_57764_58024 = state_57747__$1;
(statearr_57764_58024[(2)] = inst_57732);

(statearr_57764_58024[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (32))){
var inst_57712 = (state_57747[(8)]);
var inst_57716 = cljs.core.chunk_first(inst_57712);
var inst_57717 = cljs.core.chunk_rest(inst_57712);
var inst_57718 = cljs.core.count(inst_57716);
var inst_57696 = inst_57717;
var inst_57697 = inst_57716;
var inst_57698 = inst_57718;
var inst_57699 = (0);
var state_57747__$1 = (function (){var statearr_57765 = state_57747;
(statearr_57765[(14)] = inst_57697);

(statearr_57765[(11)] = inst_57698);

(statearr_57765[(12)] = inst_57699);

(statearr_57765[(7)] = inst_57696);

return statearr_57765;
})();
var statearr_57766_58025 = state_57747__$1;
(statearr_57766_58025[(2)] = null);

(statearr_57766_58025[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (33))){
var inst_57689 = (state_57747[(15)]);
var inst_57712 = (state_57747[(8)]);
var inst_57721 = cljs.core.first(inst_57712);
var inst_57722 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_57723 = [inst_57689,false,false];
var inst_57724 = cljs.core.PersistentHashMap.fromArrays(inst_57722,inst_57723);
var inst_57725 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57721,inst_57724);
var inst_57726 = cljs.core.next(inst_57712);
var inst_57696 = inst_57726;
var inst_57697 = null;
var inst_57698 = (0);
var inst_57699 = (0);
var state_57747__$1 = (function (){var statearr_57767 = state_57747;
(statearr_57767[(14)] = inst_57697);

(statearr_57767[(11)] = inst_57698);

(statearr_57767[(12)] = inst_57699);

(statearr_57767[(7)] = inst_57696);

(statearr_57767[(16)] = inst_57725);

return statearr_57767;
})();
var statearr_57768_58026 = state_57747__$1;
(statearr_57768_58026[(2)] = null);

(statearr_57768_58026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (13))){
var inst_57676 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
if(cljs.core.truth_(inst_57676)){
var statearr_57769_58027 = state_57747__$1;
(statearr_57769_58027[(1)] = (14));

} else {
var statearr_57770_58028 = state_57747__$1;
(statearr_57770_58028[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (22))){
var state_57747__$1 = state_57747;
var statearr_57771_58029 = state_57747__$1;
(statearr_57771_58029[(2)] = null);

(statearr_57771_58029[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (29))){
var inst_57712 = (state_57747[(8)]);
var inst_57714 = cljs.core.chunked_seq_QMARK_(inst_57712);
var state_57747__$1 = state_57747;
if(inst_57714){
var statearr_57772_58030 = state_57747__$1;
(statearr_57772_58030[(1)] = (32));

} else {
var statearr_57773_58031 = state_57747__$1;
(statearr_57773_58031[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (6))){
var inst_57660 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_57747__$1 = state_57747;
var statearr_57774_58032 = state_57747__$1;
(statearr_57774_58032[(2)] = inst_57660);

(statearr_57774_58032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (28))){
var inst_57734 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
var statearr_57775_58033 = state_57747__$1;
(statearr_57775_58033[(2)] = inst_57734);

(statearr_57775_58033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (25))){
var inst_57736 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
var statearr_57776_58034 = state_57747__$1;
(statearr_57776_58034[(2)] = inst_57736);

(statearr_57776_58034[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (34))){
var inst_57729 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
var statearr_57777_58035 = state_57747__$1;
(statearr_57777_58035[(2)] = inst_57729);

(statearr_57777_58035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (17))){
var inst_57682 = (state_57747[(13)]);
var inst_57680 = (state_57747[(2)]);
var inst_57681 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_57680);
var inst_57682__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_57681);
var inst_57683 = cljs.core.not_empty(inst_57682__$1);
var state_57747__$1 = (function (){var statearr_57778 = state_57747;
(statearr_57778[(13)] = inst_57682__$1);

return statearr_57778;
})();
if(cljs.core.truth_(inst_57683)){
var statearr_57779_58036 = state_57747__$1;
(statearr_57779_58036[(1)] = (18));

} else {
var statearr_57780_58037 = state_57747__$1;
(statearr_57780_58037[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (3))){
var state_57747__$1 = state_57747;
var statearr_57781_58039 = state_57747__$1;
(statearr_57781_58039[(2)] = frontend.extensions.zotero.api.notes);

(statearr_57781_58039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (12))){
var inst_57671 = (state_57747[(17)]);
var state_57747__$1 = state_57747;
var statearr_57782_58040 = state_57747__$1;
(statearr_57782_58040[(2)] = inst_57671);

(statearr_57782_58040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (2))){
var inst_57659 = (state_57747[(2)]);
var state_57747__$1 = (function (){var statearr_57783 = state_57747;
(statearr_57783[(18)] = inst_57659);

return statearr_57783;
})();
var G__57784_58041 = type;
var G__57784_58042__$1 = (((G__57784_58041 instanceof cljs.core.Keyword))?G__57784_58041.fqn:null);
switch (G__57784_58042__$1) {
case "notes":
var statearr_57785_58044 = state_57747__$1;
(statearr_57785_58044[(1)] = (6));


break;
case "attachments":
var statearr_57786_58045 = state_57747__$1;
(statearr_57786_58045[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57784_58042__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (23))){
var inst_57739 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
var statearr_57787_58046 = state_57747__$1;
(statearr_57787_58046[(2)] = inst_57739);

(statearr_57787_58046[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (19))){
var state_57747__$1 = state_57747;
var statearr_57788_58047 = state_57747__$1;
(statearr_57788_58047[(2)] = null);

(statearr_57788_58047[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (11))){
var inst_57655 = (state_57747[(10)]);
var inst_57673 = (inst_57655 > (0));
var state_57747__$1 = state_57747;
var statearr_57789_58048 = state_57747__$1;
(statearr_57789_58048[(2)] = inst_57673);

(statearr_57789_58048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (9))){
var inst_57666 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_57747__$1 = state_57747;
var statearr_57790_58049 = state_57747__$1;
(statearr_57790_58049[(2)] = inst_57666);

(statearr_57790_58049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (5))){
var inst_57665 = (state_57747[(2)]);
var state_57747__$1 = (function (){var statearr_57794 = state_57747;
(statearr_57794[(19)] = inst_57665);

return statearr_57794;
})();
var G__57795_58050 = type;
var G__57795_58051__$1 = (((G__57795_58050 instanceof cljs.core.Keyword))?G__57795_58050.fqn:null);
switch (G__57795_58051__$1) {
case "notes":
var statearr_57796_58053 = state_57747__$1;
(statearr_57796_58053[(1)] = (9));


break;
case "attachments":
var statearr_57797_58054 = state_57747__$1;
(statearr_57797_58054[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57795_58051__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (14))){
var inst_57653 = (state_57747[(9)]);
var inst_57659 = (state_57747[(18)]);
var inst_57678 = (inst_57659.cljs$core$IFn$_invoke$arity$1 ? inst_57659.cljs$core$IFn$_invoke$arity$1(inst_57653) : inst_57659.call(null,inst_57653));
var state_57747__$1 = state_57747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57747__$1,(17),inst_57678);
} else {
if((state_val_57748 === (26))){
var inst_57697 = (state_57747[(14)]);
var inst_57698 = (state_57747[(11)]);
var inst_57699 = (state_57747[(12)]);
var inst_57696 = (state_57747[(7)]);
var inst_57689 = (state_57747[(15)]);
var inst_57704 = cljs.core._nth(inst_57697,inst_57699);
var inst_57705 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_57706 = [inst_57689,false,false];
var inst_57707 = cljs.core.PersistentHashMap.fromArrays(inst_57705,inst_57706);
var inst_57708 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57704,inst_57707);
var inst_57709 = (inst_57699 + (1));
var tmp57791 = inst_57697;
var tmp57792 = inst_57698;
var tmp57793 = inst_57696;
var inst_57696__$1 = tmp57793;
var inst_57697__$1 = tmp57791;
var inst_57698__$1 = tmp57792;
var inst_57699__$1 = inst_57709;
var state_57747__$1 = (function (){var statearr_57798 = state_57747;
(statearr_57798[(14)] = inst_57697__$1);

(statearr_57798[(11)] = inst_57698__$1);

(statearr_57798[(12)] = inst_57699__$1);

(statearr_57798[(7)] = inst_57696__$1);

(statearr_57798[(20)] = inst_57708);

return statearr_57798;
})();
var statearr_57799_58055 = state_57747__$1;
(statearr_57799_58055[(2)] = null);

(statearr_57799_58055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (16))){
var inst_57745 = (state_57747[(2)]);
var state_57747__$1 = state_57747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57747__$1,inst_57745);
} else {
if((state_val_57748 === (30))){
var state_57747__$1 = state_57747;
var statearr_57800_58056 = state_57747__$1;
(statearr_57800_58056[(2)] = null);

(statearr_57800_58056[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (10))){
var inst_57668 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_57747__$1 = state_57747;
var statearr_57801_58057 = state_57747__$1;
(statearr_57801_58057[(2)] = inst_57668);

(statearr_57801_58057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (18))){
var inst_57665 = (state_57747[(19)]);
var inst_57689 = (state_57747[(15)]);
var inst_57685 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_57686 = [page_name];
var inst_57687 = cljs.core.PersistentHashMap.fromArrays(inst_57685,inst_57686);
var inst_57688 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57665,inst_57687);
var inst_57689__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_57688);
var state_57747__$1 = (function (){var statearr_57802 = state_57747;
(statearr_57802[(15)] = inst_57689__$1);

return statearr_57802;
})();
if(cljs.core.truth_(inst_57689__$1)){
var statearr_57803_58058 = state_57747__$1;
(statearr_57803_58058[(1)] = (21));

} else {
var statearr_57804_58059 = state_57747__$1;
(statearr_57804_58059[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57748 === (8))){
var inst_57671 = (state_57747[(17)]);
var inst_57671__$1 = (state_57747[(2)]);
var state_57747__$1 = (function (){var statearr_57805 = state_57747;
(statearr_57805[(17)] = inst_57671__$1);

return statearr_57805;
})();
if(cljs.core.truth_(inst_57671__$1)){
var statearr_57806_58060 = state_57747__$1;
(statearr_57806_58060[(1)] = (11));

} else {
var statearr_57807_58061 = state_57747__$1;
(statearr_57807_58061[(1)] = (12));

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
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0 = (function (){
var statearr_57808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57808[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__);

(statearr_57808[(1)] = (1));

return statearr_57808;
});
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1 = (function (state_57747){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57747);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57809){var ex__27576__auto__ = e57809;
var statearr_57810_58063 = state_57747;
(statearr_57810_58063[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57747[(4)]))){
var statearr_57811_58065 = state_57747;
(statearr_57811_58065[(1)] = cljs.core.first((state_57747[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58067 = state_57747;
state_57747 = G__58067;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__ = function(state_57747){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1.call(this,state_57747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57812 = f__27596__auto__();
(statearr_57812[(6)] = c__27595__auto__);

return statearr_57812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
var G__57814 = arguments.length;
switch (G__57814) {
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

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__57815){
var map__57816 = p__57815;
var map__57816__$1 = cljs.core.__destructure_map(map__57816);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57816__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57816__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57816__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57861){
var state_val_57862 = (state_57861[(1)]);
if((state_val_57862 === (7))){
var inst_57836 = (state_57861[(2)]);
var state_57861__$1 = state_57861;
var statearr_57863_58071 = state_57861__$1;
(statearr_57863_58071[(2)] = inst_57836);

(statearr_57863_58071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (1))){
var inst_57819 = (state_57861[(7)]);
var inst_57820 = (state_57861[(8)]);
var inst_57818 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_57819__$1 = cljs.core.__destructure_map(inst_57818);
var inst_57820__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57819__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_57821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57819__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_57822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57819__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_57823 = clojure.string.lower_case(inst_57820__$1);
var inst_57824 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_57823) : frontend.db.page_exists_QMARK_.call(null,inst_57823));
var state_57861__$1 = (function (){var statearr_57864 = state_57861;
(statearr_57864[(9)] = inst_57821);

(statearr_57864[(10)] = inst_57822);

(statearr_57864[(7)] = inst_57819__$1);

(statearr_57864[(8)] = inst_57820__$1);

return statearr_57864;
})();
if(cljs.core.truth_(inst_57824)){
var statearr_57865_58073 = state_57861__$1;
(statearr_57865_58073[(1)] = (2));

} else {
var statearr_57866_58074 = state_57861__$1;
(statearr_57866_58074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (4))){
var inst_57822 = (state_57861[(10)]);
var inst_57820 = (state_57861[(8)]);
var inst_57840 = (state_57861[(2)]);
var inst_57841 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_57820,inst_57822);
var inst_57842 = frontend.extensions.zotero.handler.add(inst_57820,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_57861__$1 = (function (){var statearr_57867 = state_57861;
(statearr_57867[(11)] = inst_57841);

(statearr_57867[(12)] = inst_57840);

return statearr_57867;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57861__$1,(8),inst_57842);
} else {
if((state_val_57862 === (15))){
var inst_57859 = (state_57861[(2)]);
var state_57861__$1 = state_57861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57861__$1,inst_57859);
} else {
if((state_val_57862 === (13))){
var inst_57820 = (state_57861[(8)]);
var inst_57855 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57820)].join('');
var inst_57856 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57855,new cljs.core.Keyword(null,"success","success",1890645906));
var state_57861__$1 = state_57861;
var statearr_57868_58076 = state_57861__$1;
(statearr_57868_58076[(2)] = inst_57856);

(statearr_57868_58076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (6))){
var inst_57821 = (state_57861[(9)]);
var inst_57820 = (state_57861[(8)]);
var inst_57831 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_57832 = [inst_57820,inst_57821];
var inst_57833 = cljs.core.PersistentHashMap.fromArrays(inst_57831,inst_57832);
var inst_57834 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_57833);
var state_57861__$1 = state_57861;
var statearr_57869_58077 = state_57861__$1;
(statearr_57869_58077[(2)] = inst_57834);

(statearr_57869_58077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (3))){
var inst_57821 = (state_57861[(9)]);
var inst_57820 = (state_57861[(8)]);
var inst_57838 = frontend.extensions.zotero.handler.create_page(inst_57820,inst_57821);
var state_57861__$1 = state_57861;
var statearr_57870_58078 = state_57861__$1;
(statearr_57870_58078[(2)] = inst_57838);

(statearr_57870_58078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (12))){
var inst_57853 = (state_57861[(2)]);
var state_57861__$1 = (function (){var statearr_57871 = state_57861;
(statearr_57871[(13)] = inst_57853);

return statearr_57871;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_57872_58079 = state_57861__$1;
(statearr_57872_58079[(1)] = (13));

} else {
var statearr_57873_58080 = state_57861__$1;
(statearr_57873_58080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (2))){
var inst_57826 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_57861__$1 = state_57861;
if(cljs.core.truth_(inst_57826)){
var statearr_57874_58081 = state_57861__$1;
(statearr_57874_58081[(1)] = (5));

} else {
var statearr_57875_58082 = state_57861__$1;
(statearr_57875_58082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (11))){
var state_57861__$1 = state_57861;
var statearr_57878_58083 = state_57861__$1;
(statearr_57878_58083[(2)] = null);

(statearr_57878_58083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (9))){
var inst_57847 = (state_57861[(2)]);
var state_57861__$1 = (function (){var statearr_57880 = state_57861;
(statearr_57880[(14)] = inst_57847);

return statearr_57880;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_57883_58084 = state_57861__$1;
(statearr_57883_58084[(1)] = (10));

} else {
var statearr_57884_58085 = state_57861__$1;
(statearr_57884_58085[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (5))){
var inst_57821 = (state_57861[(9)]);
var inst_57822 = (state_57861[(10)]);
var inst_57819 = (state_57861[(7)]);
var inst_57820 = (state_57861[(8)]);
var inst_57828 = (function (){var map__57817 = inst_57819;
var page_name = inst_57820;
var properties = inst_57821;
var abstract_note = inst_57822;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_57829 = frontend.handler.page.delete_BANG_(inst_57820,inst_57828);
var state_57861__$1 = state_57861;
var statearr_57888_58086 = state_57861__$1;
(statearr_57888_58086[(2)] = inst_57829);

(statearr_57888_58086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (14))){
var state_57861__$1 = state_57861;
var statearr_57891_58087 = state_57861__$1;
(statearr_57891_58087[(2)] = null);

(statearr_57891_58087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (10))){
var inst_57820 = (state_57861[(8)]);
var inst_57849 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_57820);
var inst_57850 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_57861__$1 = (function (){var statearr_57892 = state_57861;
(statearr_57892[(15)] = inst_57849);

return statearr_57892;
})();
var statearr_57893_58088 = state_57861__$1;
(statearr_57893_58088[(2)] = inst_57850);

(statearr_57893_58088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57862 === (8))){
var inst_57820 = (state_57861[(8)]);
var inst_57844 = (state_57861[(2)]);
var inst_57845 = frontend.extensions.zotero.handler.add(inst_57820,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_57861__$1 = (function (){var statearr_57894 = state_57861;
(statearr_57894[(16)] = inst_57844);

return statearr_57894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57861__$1,(9),inst_57845);
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
var frontend$extensions$zotero$handler$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$handler$state_machine__27573__auto____0 = (function (){
var statearr_57896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57896[(0)] = frontend$extensions$zotero$handler$state_machine__27573__auto__);

(statearr_57896[(1)] = (1));

return statearr_57896;
});
var frontend$extensions$zotero$handler$state_machine__27573__auto____1 = (function (state_57861){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57861);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57898){var ex__27576__auto__ = e57898;
var statearr_57899_58089 = state_57861;
(statearr_57899_58089[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57861[(4)]))){
var statearr_57900_58090 = state_57861;
(statearr_57900_58090[(1)] = cljs.core.first((state_57861[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58091 = state_57861;
state_57861 = G__58091;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__27573__auto__ = function(state_57861){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__27573__auto____1.call(this,state_57861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__27573__auto____0;
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57901 = f__27596__auto__();
(statearr_57901[(6)] = c__27595__auto__);

return statearr_57901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57970){
var state_val_57971 = (state_57970[(1)]);
if((state_val_57971 === (7))){
var inst_57966 = (state_57970[(2)]);
var state_57970__$1 = state_57970;
var statearr_57972_58093 = state_57970__$1;
(statearr_57972_58093[(2)] = inst_57966);

(statearr_57972_58093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (1))){
var inst_57907 = frontend.extensions.zotero.api.all_top_items();
var state_57970__$1 = state_57970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57970__$1,(2),inst_57907);
} else {
if((state_val_57971 === (4))){
var inst_57968 = (state_57970[(2)]);
var state_57970__$1 = state_57970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57970__$1,inst_57968);
} else {
if((state_val_57971 === (15))){
var inst_57939 = (state_57970[(7)]);
var inst_57954 = (state_57970[(2)]);
var inst_57955 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_57956 = cljs.core.next(inst_57939);
var inst_57918 = inst_57956;
var inst_57919 = null;
var inst_57920 = (0);
var inst_57921 = (0);
var state_57970__$1 = (function (){var statearr_57973 = state_57970;
(statearr_57973[(8)] = inst_57919);

(statearr_57973[(9)] = inst_57918);

(statearr_57973[(10)] = inst_57921);

(statearr_57973[(11)] = inst_57920);

(statearr_57973[(12)] = inst_57955);

(statearr_57973[(13)] = inst_57954);

return statearr_57973;
})();
var statearr_57977_58094 = state_57970__$1;
(statearr_57977_58094[(2)] = null);

(statearr_57977_58094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (13))){
var inst_57939 = (state_57970[(7)]);
var inst_57948 = cljs.core.first(inst_57939);
var inst_57949 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_57950 = [false,false];
var inst_57951 = cljs.core.PersistentHashMap.fromArrays(inst_57949,inst_57950);
var inst_57952 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_57948,inst_57951);
var state_57970__$1 = state_57970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57970__$1,(15),inst_57952);
} else {
if((state_val_57971 === (6))){
var inst_57939 = (state_57970[(7)]);
var inst_57918 = (state_57970[(9)]);
var inst_57939__$1 = cljs.core.seq(inst_57918);
var state_57970__$1 = (function (){var statearr_57978 = state_57970;
(statearr_57978[(7)] = inst_57939__$1);

return statearr_57978;
})();
if(inst_57939__$1){
var statearr_57979_58095 = state_57970__$1;
(statearr_57979_58095[(1)] = (9));

} else {
var statearr_57980_58096 = state_57970__$1;
(statearr_57980_58096[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (3))){
var inst_57921 = (state_57970[(10)]);
var inst_57920 = (state_57970[(11)]);
var inst_57923 = (inst_57921 < inst_57920);
var inst_57924 = inst_57923;
var state_57970__$1 = state_57970;
if(cljs.core.truth_(inst_57924)){
var statearr_57981_58097 = state_57970__$1;
(statearr_57981_58097[(1)] = (5));

} else {
var statearr_57982_58098 = state_57970__$1;
(statearr_57982_58098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (12))){
var inst_57939 = (state_57970[(7)]);
var inst_57943 = cljs.core.chunk_first(inst_57939);
var inst_57944 = cljs.core.chunk_rest(inst_57939);
var inst_57945 = cljs.core.count(inst_57943);
var inst_57918 = inst_57944;
var inst_57919 = inst_57943;
var inst_57920 = inst_57945;
var inst_57921 = (0);
var state_57970__$1 = (function (){var statearr_57985 = state_57970;
(statearr_57985[(8)] = inst_57919);

(statearr_57985[(9)] = inst_57918);

(statearr_57985[(10)] = inst_57921);

(statearr_57985[(11)] = inst_57920);

return statearr_57985;
})();
var statearr_57986_58099 = state_57970__$1;
(statearr_57986_58099[(2)] = null);

(statearr_57986_58099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (2))){
var inst_57909 = (state_57970[(2)]);
var inst_57911 = cljs.core.reset_BANG_(progress,(30));
var inst_57916 = cljs.core.seq(inst_57909);
var inst_57918 = inst_57916;
var inst_57919 = null;
var inst_57920 = (0);
var inst_57921 = (0);
var state_57970__$1 = (function (){var statearr_57987 = state_57970;
(statearr_57987[(8)] = inst_57919);

(statearr_57987[(9)] = inst_57918);

(statearr_57987[(10)] = inst_57921);

(statearr_57987[(11)] = inst_57920);

(statearr_57987[(14)] = inst_57911);

return statearr_57987;
})();
var statearr_57988_58100 = state_57970__$1;
(statearr_57988_58100[(2)] = null);

(statearr_57988_58100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (11))){
var inst_57962 = (state_57970[(2)]);
var state_57970__$1 = state_57970;
var statearr_57989_58101 = state_57970__$1;
(statearr_57989_58101[(2)] = inst_57962);

(statearr_57989_58101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (9))){
var inst_57939 = (state_57970[(7)]);
var inst_57941 = cljs.core.chunked_seq_QMARK_(inst_57939);
var state_57970__$1 = state_57970;
if(inst_57941){
var statearr_57990_58102 = state_57970__$1;
(statearr_57990_58102[(1)] = (12));

} else {
var statearr_57991_58103 = state_57970__$1;
(statearr_57991_58103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (5))){
var inst_57919 = (state_57970[(8)]);
var inst_57921 = (state_57970[(10)]);
var inst_57927 = cljs.core._nth(inst_57919,inst_57921);
var inst_57929 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_57930 = [false,false];
var inst_57931 = cljs.core.PersistentHashMap.fromArrays(inst_57929,inst_57930);
var inst_57932 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_57927,inst_57931);
var state_57970__$1 = state_57970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57970__$1,(8),inst_57932);
} else {
if((state_val_57971 === (14))){
var inst_57959 = (state_57970[(2)]);
var state_57970__$1 = state_57970;
var statearr_57995_58107 = state_57970__$1;
(statearr_57995_58107[(2)] = inst_57959);

(statearr_57995_58107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (10))){
var state_57970__$1 = state_57970;
var statearr_57996_58108 = state_57970__$1;
(statearr_57996_58108[(2)] = null);

(statearr_57996_58108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57971 === (8))){
var inst_57919 = (state_57970[(8)]);
var inst_57918 = (state_57970[(9)]);
var inst_57921 = (state_57970[(10)]);
var inst_57920 = (state_57970[(11)]);
var inst_57934 = (state_57970[(2)]);
var inst_57935 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_57936 = (inst_57921 + (1));
var tmp57992 = inst_57919;
var tmp57993 = inst_57918;
var tmp57994 = inst_57920;
var inst_57918__$1 = tmp57993;
var inst_57919__$1 = tmp57992;
var inst_57920__$1 = tmp57994;
var inst_57921__$1 = inst_57936;
var state_57970__$1 = (function (){var statearr_57997 = state_57970;
(statearr_57997[(15)] = inst_57935);

(statearr_57997[(8)] = inst_57919__$1);

(statearr_57997[(9)] = inst_57918__$1);

(statearr_57997[(10)] = inst_57921__$1);

(statearr_57997[(11)] = inst_57920__$1);

(statearr_57997[(16)] = inst_57934);

return statearr_57997;
})();
var statearr_57998_58109 = state_57970__$1;
(statearr_57998_58109[(2)] = null);

(statearr_57998_58109[(1)] = (3));


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
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0 = (function (){
var statearr_57999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57999[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__);

(statearr_57999[(1)] = (1));

return statearr_57999;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1 = (function (state_57970){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57970);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58000){var ex__27576__auto__ = e58000;
var statearr_58001_58110 = state_57970;
(statearr_58001_58110[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57970[(4)]))){
var statearr_58003_58111 = state_57970;
(statearr_58003_58111[(1)] = cljs.core.first((state_57970[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58112 = state_57970;
state_57970 = G__58112;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__ = function(state_57970){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1.call(this,state_57970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58005 = f__27596__auto__();
(statearr_58005[(6)] = c__27595__auto__);

return statearr_58005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
