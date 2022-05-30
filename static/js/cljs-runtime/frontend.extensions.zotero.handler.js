goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57692){
var state_val_57693 = (state_57692[(1)]);
if((state_val_57693 === (7))){
var inst_57606 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_57692__$1 = state_57692;
var statearr_57694_57930 = state_57692__$1;
(statearr_57694_57930[(2)] = inst_57606);

(statearr_57694_57930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (20))){
var inst_57687 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57695_57931 = state_57692__$1;
(statearr_57695_57931[(2)] = inst_57687);

(statearr_57695_57931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (27))){
var inst_57656 = (state_57692[(7)]);
var inst_57640 = (state_57692[(8)]);
var inst_57656__$1 = cljs.core.seq(inst_57640);
var state_57692__$1 = (function (){var statearr_57697 = state_57692;
(statearr_57697[(7)] = inst_57656__$1);

return statearr_57697;
})();
if(inst_57656__$1){
var statearr_57698_57934 = state_57692__$1;
(statearr_57698_57934[(1)] = (29));

} else {
var statearr_57699_57935 = state_57692__$1;
(statearr_57699_57935[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (1))){
var inst_57597 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_57598 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_57599 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_57598);
var state_57692__$1 = (function (){var statearr_57700 = state_57692;
(statearr_57700[(9)] = inst_57597);

(statearr_57700[(10)] = inst_57599);

return statearr_57700;
})();
var G__57701_57937 = type;
var G__57701_57938__$1 = (((G__57701_57937 instanceof cljs.core.Keyword))?G__57701_57937.fqn:null);
switch (G__57701_57938__$1) {
case "notes":
var statearr_57702_57940 = state_57692__$1;
(statearr_57702_57940[(1)] = (3));


break;
case "attachments":
var statearr_57703_57941 = state_57692__$1;
(statearr_57703_57941[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57701_57938__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (24))){
var inst_57643 = (state_57692[(11)]);
var inst_57642 = (state_57692[(12)]);
var inst_57645 = (inst_57643 < inst_57642);
var inst_57646 = inst_57645;
var state_57692__$1 = state_57692;
if(cljs.core.truth_(inst_57646)){
var statearr_57704_57942 = state_57692__$1;
(statearr_57704_57942[(1)] = (26));

} else {
var statearr_57705_57943 = state_57692__$1;
(statearr_57705_57943[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (4))){
var state_57692__$1 = state_57692;
var statearr_57707_57944 = state_57692__$1;
(statearr_57707_57944[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_57707_57944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (15))){
var state_57692__$1 = state_57692;
var statearr_57708_57945 = state_57692__$1;
(statearr_57708_57945[(2)] = null);

(statearr_57708_57945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (21))){
var inst_57626 = (state_57692[(13)]);
var inst_57639 = cljs.core.seq(inst_57626);
var inst_57640 = inst_57639;
var inst_57641 = null;
var inst_57642 = (0);
var inst_57643 = (0);
var state_57692__$1 = (function (){var statearr_57709 = state_57692;
(statearr_57709[(11)] = inst_57643);

(statearr_57709[(8)] = inst_57640);

(statearr_57709[(12)] = inst_57642);

(statearr_57709[(14)] = inst_57641);

return statearr_57709;
})();
var statearr_57710_57946 = state_57692__$1;
(statearr_57710_57946[(2)] = null);

(statearr_57710_57946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (31))){
var inst_57677 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57711_57947 = state_57692__$1;
(statearr_57711_57947[(2)] = inst_57677);

(statearr_57711_57947[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (32))){
var inst_57656 = (state_57692[(7)]);
var inst_57661 = cljs.core.chunk_first(inst_57656);
var inst_57662 = cljs.core.chunk_rest(inst_57656);
var inst_57663 = cljs.core.count(inst_57661);
var inst_57640 = inst_57662;
var inst_57641 = inst_57661;
var inst_57642 = inst_57663;
var inst_57643 = (0);
var state_57692__$1 = (function (){var statearr_57712 = state_57692;
(statearr_57712[(11)] = inst_57643);

(statearr_57712[(8)] = inst_57640);

(statearr_57712[(12)] = inst_57642);

(statearr_57712[(14)] = inst_57641);

return statearr_57712;
})();
var statearr_57713_57948 = state_57692__$1;
(statearr_57713_57948[(2)] = null);

(statearr_57713_57948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (33))){
var inst_57633 = (state_57692[(15)]);
var inst_57656 = (state_57692[(7)]);
var inst_57666 = cljs.core.first(inst_57656);
var inst_57667 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_57668 = [inst_57633,false,false];
var inst_57669 = cljs.core.PersistentHashMap.fromArrays(inst_57667,inst_57668);
var inst_57670 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57666,inst_57669);
var inst_57671 = cljs.core.next(inst_57656);
var inst_57640 = inst_57671;
var inst_57641 = null;
var inst_57642 = (0);
var inst_57643 = (0);
var state_57692__$1 = (function (){var statearr_57714 = state_57692;
(statearr_57714[(11)] = inst_57643);

(statearr_57714[(8)] = inst_57640);

(statearr_57714[(12)] = inst_57642);

(statearr_57714[(16)] = inst_57670);

(statearr_57714[(14)] = inst_57641);

return statearr_57714;
})();
var statearr_57715_57949 = state_57692__$1;
(statearr_57715_57949[(2)] = null);

(statearr_57715_57949[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (13))){
var inst_57620 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
if(cljs.core.truth_(inst_57620)){
var statearr_57716_57950 = state_57692__$1;
(statearr_57716_57950[(1)] = (14));

} else {
var statearr_57717_57951 = state_57692__$1;
(statearr_57717_57951[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (22))){
var state_57692__$1 = state_57692;
var statearr_57718_57952 = state_57692__$1;
(statearr_57718_57952[(2)] = null);

(statearr_57718_57952[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (29))){
var inst_57656 = (state_57692[(7)]);
var inst_57659 = cljs.core.chunked_seq_QMARK_(inst_57656);
var state_57692__$1 = state_57692;
if(inst_57659){
var statearr_57720_57953 = state_57692__$1;
(statearr_57720_57953[(1)] = (32));

} else {
var statearr_57721_57954 = state_57692__$1;
(statearr_57721_57954[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (6))){
var inst_57604 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_57692__$1 = state_57692;
var statearr_57722_57955 = state_57692__$1;
(statearr_57722_57955[(2)] = inst_57604);

(statearr_57722_57955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (28))){
var inst_57679 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57723_57956 = state_57692__$1;
(statearr_57723_57956[(2)] = inst_57679);

(statearr_57723_57956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (25))){
var inst_57681 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57724_57957 = state_57692__$1;
(statearr_57724_57957[(2)] = inst_57681);

(statearr_57724_57957[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (34))){
var inst_57674 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57725_57958 = state_57692__$1;
(statearr_57725_57958[(2)] = inst_57674);

(statearr_57725_57958[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (17))){
var inst_57626 = (state_57692[(13)]);
var inst_57624 = (state_57692[(2)]);
var inst_57625 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_57624);
var inst_57626__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_57625);
var inst_57627 = cljs.core.not_empty(inst_57626__$1);
var state_57692__$1 = (function (){var statearr_57726 = state_57692;
(statearr_57726[(13)] = inst_57626__$1);

return statearr_57726;
})();
if(cljs.core.truth_(inst_57627)){
var statearr_57727_57959 = state_57692__$1;
(statearr_57727_57959[(1)] = (18));

} else {
var statearr_57728_57960 = state_57692__$1;
(statearr_57728_57960[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (3))){
var state_57692__$1 = state_57692;
var statearr_57729_57961 = state_57692__$1;
(statearr_57729_57961[(2)] = frontend.extensions.zotero.api.notes);

(statearr_57729_57961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (12))){
var inst_57615 = (state_57692[(17)]);
var state_57692__$1 = state_57692;
var statearr_57730_57962 = state_57692__$1;
(statearr_57730_57962[(2)] = inst_57615);

(statearr_57730_57962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (2))){
var inst_57603 = (state_57692[(2)]);
var state_57692__$1 = (function (){var statearr_57731 = state_57692;
(statearr_57731[(18)] = inst_57603);

return statearr_57731;
})();
var G__57732_57963 = type;
var G__57732_57964__$1 = (((G__57732_57963 instanceof cljs.core.Keyword))?G__57732_57963.fqn:null);
switch (G__57732_57964__$1) {
case "notes":
var statearr_57734_57966 = state_57692__$1;
(statearr_57734_57966[(1)] = (6));


break;
case "attachments":
var statearr_57735_57967 = state_57692__$1;
(statearr_57735_57967[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57732_57964__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (23))){
var inst_57684 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57736_57968 = state_57692__$1;
(statearr_57736_57968[(2)] = inst_57684);

(statearr_57736_57968[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (19))){
var state_57692__$1 = state_57692;
var statearr_57737_57969 = state_57692__$1;
(statearr_57737_57969[(2)] = null);

(statearr_57737_57969[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (11))){
var inst_57599 = (state_57692[(10)]);
var inst_57617 = (inst_57599 > (0));
var state_57692__$1 = state_57692;
var statearr_57738_57970 = state_57692__$1;
(statearr_57738_57970[(2)] = inst_57617);

(statearr_57738_57970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (9))){
var inst_57610 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_57692__$1 = state_57692;
var statearr_57739_57971 = state_57692__$1;
(statearr_57739_57971[(2)] = inst_57610);

(statearr_57739_57971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (5))){
var inst_57609 = (state_57692[(2)]);
var state_57692__$1 = (function (){var statearr_57743 = state_57692;
(statearr_57743[(19)] = inst_57609);

return statearr_57743;
})();
var G__57744_57972 = type;
var G__57744_57973__$1 = (((G__57744_57972 instanceof cljs.core.Keyword))?G__57744_57972.fqn:null);
switch (G__57744_57973__$1) {
case "notes":
var statearr_57745_57975 = state_57692__$1;
(statearr_57745_57975[(1)] = (9));


break;
case "attachments":
var statearr_57747_57976 = state_57692__$1;
(statearr_57747_57976[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57744_57973__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (14))){
var inst_57597 = (state_57692[(9)]);
var inst_57603 = (state_57692[(18)]);
var inst_57622 = (inst_57603.cljs$core$IFn$_invoke$arity$1 ? inst_57603.cljs$core$IFn$_invoke$arity$1(inst_57597) : inst_57603.call(null,inst_57597));
var state_57692__$1 = state_57692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57692__$1,(17),inst_57622);
} else {
if((state_val_57693 === (26))){
var inst_57633 = (state_57692[(15)]);
var inst_57643 = (state_57692[(11)]);
var inst_57640 = (state_57692[(8)]);
var inst_57642 = (state_57692[(12)]);
var inst_57641 = (state_57692[(14)]);
var inst_57648 = cljs.core._nth(inst_57641,inst_57643);
var inst_57649 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_57650 = [inst_57633,false,false];
var inst_57651 = cljs.core.PersistentHashMap.fromArrays(inst_57649,inst_57650);
var inst_57652 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57648,inst_57651);
var inst_57653 = (inst_57643 + (1));
var tmp57740 = inst_57640;
var tmp57741 = inst_57642;
var tmp57742 = inst_57641;
var inst_57640__$1 = tmp57740;
var inst_57641__$1 = tmp57742;
var inst_57642__$1 = tmp57741;
var inst_57643__$1 = inst_57653;
var state_57692__$1 = (function (){var statearr_57748 = state_57692;
(statearr_57748[(11)] = inst_57643__$1);

(statearr_57748[(8)] = inst_57640__$1);

(statearr_57748[(20)] = inst_57652);

(statearr_57748[(12)] = inst_57642__$1);

(statearr_57748[(14)] = inst_57641__$1);

return statearr_57748;
})();
var statearr_57749_57977 = state_57692__$1;
(statearr_57749_57977[(2)] = null);

(statearr_57749_57977[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (16))){
var inst_57690 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57692__$1,inst_57690);
} else {
if((state_val_57693 === (30))){
var state_57692__$1 = state_57692;
var statearr_57750_57978 = state_57692__$1;
(statearr_57750_57978[(2)] = null);

(statearr_57750_57978[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (10))){
var inst_57612 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_57692__$1 = state_57692;
var statearr_57752_57979 = state_57692__$1;
(statearr_57752_57979[(2)] = inst_57612);

(statearr_57752_57979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (18))){
var inst_57633 = (state_57692[(15)]);
var inst_57609 = (state_57692[(19)]);
var inst_57629 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_57630 = [page_name];
var inst_57631 = cljs.core.PersistentHashMap.fromArrays(inst_57629,inst_57630);
var inst_57632 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57609,inst_57631);
var inst_57633__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_57632);
var state_57692__$1 = (function (){var statearr_57753 = state_57692;
(statearr_57753[(15)] = inst_57633__$1);

return statearr_57753;
})();
if(cljs.core.truth_(inst_57633__$1)){
var statearr_57754_57980 = state_57692__$1;
(statearr_57754_57980[(1)] = (21));

} else {
var statearr_57755_57981 = state_57692__$1;
(statearr_57755_57981[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (8))){
var inst_57615 = (state_57692[(17)]);
var inst_57615__$1 = (state_57692[(2)]);
var state_57692__$1 = (function (){var statearr_57756 = state_57692;
(statearr_57756[(17)] = inst_57615__$1);

return statearr_57756;
})();
if(cljs.core.truth_(inst_57615__$1)){
var statearr_57757_57982 = state_57692__$1;
(statearr_57757_57982[(1)] = (11));

} else {
var statearr_57758_57983 = state_57692__$1;
(statearr_57758_57983[(1)] = (12));

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
var statearr_57759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57759[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__);

(statearr_57759[(1)] = (1));

return statearr_57759;
});
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1 = (function (state_57692){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57692);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57760){var ex__27576__auto__ = e57760;
var statearr_57761_57984 = state_57692;
(statearr_57761_57984[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57692[(4)]))){
var statearr_57762_57985 = state_57692;
(statearr_57762_57985[(1)] = cljs.core.first((state_57692[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57986 = state_57692;
state_57692 = G__57986;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__ = function(state_57692){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1.call(this,state_57692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57763 = f__27596__auto__();
(statearr_57763[(6)] = c__27595__auto__);

return statearr_57763;
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
var G__57765 = arguments.length;
switch (G__57765) {
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

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__57766){
var map__57767 = p__57766;
var map__57767__$1 = cljs.core.__destructure_map(map__57767);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57767__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57767__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57767__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57812){
var state_val_57813 = (state_57812[(1)]);
if((state_val_57813 === (7))){
var inst_57787 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57814_57988 = state_57812__$1;
(statearr_57814_57988[(2)] = inst_57787);

(statearr_57814_57988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (1))){
var inst_57770 = (state_57812[(7)]);
var inst_57771 = (state_57812[(8)]);
var inst_57769 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_57770__$1 = cljs.core.__destructure_map(inst_57769);
var inst_57771__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57770__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_57772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57770__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_57773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57770__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_57774 = clojure.string.lower_case(inst_57771__$1);
var inst_57775 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_57774) : frontend.db.page_exists_QMARK_.call(null,inst_57774));
var state_57812__$1 = (function (){var statearr_57815 = state_57812;
(statearr_57815[(7)] = inst_57770__$1);

(statearr_57815[(9)] = inst_57772);

(statearr_57815[(10)] = inst_57773);

(statearr_57815[(8)] = inst_57771__$1);

return statearr_57815;
})();
if(cljs.core.truth_(inst_57775)){
var statearr_57816_57989 = state_57812__$1;
(statearr_57816_57989[(1)] = (2));

} else {
var statearr_57817_57990 = state_57812__$1;
(statearr_57817_57990[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (4))){
var inst_57773 = (state_57812[(10)]);
var inst_57771 = (state_57812[(8)]);
var inst_57791 = (state_57812[(2)]);
var inst_57792 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_57771,inst_57773);
var inst_57793 = frontend.extensions.zotero.handler.add(inst_57771,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_57812__$1 = (function (){var statearr_57818 = state_57812;
(statearr_57818[(11)] = inst_57791);

(statearr_57818[(12)] = inst_57792);

return statearr_57818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(8),inst_57793);
} else {
if((state_val_57813 === (15))){
var inst_57810 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57812__$1,inst_57810);
} else {
if((state_val_57813 === (13))){
var inst_57771 = (state_57812[(8)]);
var inst_57806 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57771)].join('');
var inst_57807 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57806,new cljs.core.Keyword(null,"success","success",1890645906));
var state_57812__$1 = state_57812;
var statearr_57819_57991 = state_57812__$1;
(statearr_57819_57991[(2)] = inst_57807);

(statearr_57819_57991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (6))){
var inst_57772 = (state_57812[(9)]);
var inst_57771 = (state_57812[(8)]);
var inst_57782 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_57783 = [inst_57771,inst_57772];
var inst_57784 = cljs.core.PersistentHashMap.fromArrays(inst_57782,inst_57783);
var inst_57785 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_57784);
var state_57812__$1 = state_57812;
var statearr_57820_57992 = state_57812__$1;
(statearr_57820_57992[(2)] = inst_57785);

(statearr_57820_57992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (3))){
var inst_57772 = (state_57812[(9)]);
var inst_57771 = (state_57812[(8)]);
var inst_57789 = frontend.extensions.zotero.handler.create_page(inst_57771,inst_57772);
var state_57812__$1 = state_57812;
var statearr_57821_57993 = state_57812__$1;
(statearr_57821_57993[(2)] = inst_57789);

(statearr_57821_57993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (12))){
var inst_57804 = (state_57812[(2)]);
var state_57812__$1 = (function (){var statearr_57822 = state_57812;
(statearr_57822[(13)] = inst_57804);

return statearr_57822;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_57823_57994 = state_57812__$1;
(statearr_57823_57994[(1)] = (13));

} else {
var statearr_57824_57995 = state_57812__$1;
(statearr_57824_57995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (2))){
var inst_57777 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_57812__$1 = state_57812;
if(cljs.core.truth_(inst_57777)){
var statearr_57825_57996 = state_57812__$1;
(statearr_57825_57996[(1)] = (5));

} else {
var statearr_57826_57997 = state_57812__$1;
(statearr_57826_57997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (11))){
var state_57812__$1 = state_57812;
var statearr_57827_57998 = state_57812__$1;
(statearr_57827_57998[(2)] = null);

(statearr_57827_57998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (9))){
var inst_57798 = (state_57812[(2)]);
var state_57812__$1 = (function (){var statearr_57828 = state_57812;
(statearr_57828[(14)] = inst_57798);

return statearr_57828;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_57829_57999 = state_57812__$1;
(statearr_57829_57999[(1)] = (10));

} else {
var statearr_57830_58000 = state_57812__$1;
(statearr_57830_58000[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (5))){
var inst_57770 = (state_57812[(7)]);
var inst_57772 = (state_57812[(9)]);
var inst_57773 = (state_57812[(10)]);
var inst_57771 = (state_57812[(8)]);
var inst_57779 = (function (){var map__57768 = inst_57770;
var page_name = inst_57771;
var properties = inst_57772;
var abstract_note = inst_57773;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_57780 = frontend.handler.page.delete_BANG_(inst_57771,inst_57779);
var state_57812__$1 = state_57812;
var statearr_57831_58001 = state_57812__$1;
(statearr_57831_58001[(2)] = inst_57780);

(statearr_57831_58001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (14))){
var state_57812__$1 = state_57812;
var statearr_57832_58002 = state_57812__$1;
(statearr_57832_58002[(2)] = null);

(statearr_57832_58002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (10))){
var inst_57771 = (state_57812[(8)]);
var inst_57800 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_57771);
var inst_57801 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_57812__$1 = (function (){var statearr_57833 = state_57812;
(statearr_57833[(15)] = inst_57800);

return statearr_57833;
})();
var statearr_57834_58003 = state_57812__$1;
(statearr_57834_58003[(2)] = inst_57801);

(statearr_57834_58003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (8))){
var inst_57771 = (state_57812[(8)]);
var inst_57795 = (state_57812[(2)]);
var inst_57796 = frontend.extensions.zotero.handler.add(inst_57771,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_57812__$1 = (function (){var statearr_57835 = state_57812;
(statearr_57835[(16)] = inst_57795);

return statearr_57835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(9),inst_57796);
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
var statearr_57836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57836[(0)] = frontend$extensions$zotero$handler$state_machine__27573__auto__);

(statearr_57836[(1)] = (1));

return statearr_57836;
});
var frontend$extensions$zotero$handler$state_machine__27573__auto____1 = (function (state_57812){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57812);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57837){var ex__27576__auto__ = e57837;
var statearr_57838_58004 = state_57812;
(statearr_57838_58004[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57812[(4)]))){
var statearr_57839_58005 = state_57812;
(statearr_57839_58005[(1)] = cljs.core.first((state_57812[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58006 = state_57812;
state_57812 = G__58006;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__27573__auto__ = function(state_57812){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__27573__auto____1.call(this,state_57812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__27573__auto____0;
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57840 = f__27596__auto__();
(statearr_57840[(6)] = c__27595__auto__);

return statearr_57840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_57898){
var state_val_57899 = (state_57898[(1)]);
if((state_val_57899 === (7))){
var inst_57894 = (state_57898[(2)]);
var state_57898__$1 = state_57898;
var statearr_57900_58007 = state_57898__$1;
(statearr_57900_58007[(2)] = inst_57894);

(statearr_57900_58007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (1))){
var inst_57841 = frontend.extensions.zotero.api.all_top_items();
var state_57898__$1 = state_57898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57898__$1,(2),inst_57841);
} else {
if((state_val_57899 === (4))){
var inst_57896 = (state_57898[(2)]);
var state_57898__$1 = state_57898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57898__$1,inst_57896);
} else {
if((state_val_57899 === (15))){
var inst_57869 = (state_57898[(7)]);
var inst_57884 = (state_57898[(2)]);
var inst_57885 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_57886 = cljs.core.next(inst_57869);
var inst_57850 = inst_57886;
var inst_57851 = null;
var inst_57852 = (0);
var inst_57853 = (0);
var state_57898__$1 = (function (){var statearr_57901 = state_57898;
(statearr_57901[(8)] = inst_57851);

(statearr_57901[(9)] = inst_57884);

(statearr_57901[(10)] = inst_57850);

(statearr_57901[(11)] = inst_57885);

(statearr_57901[(12)] = inst_57852);

(statearr_57901[(13)] = inst_57853);

return statearr_57901;
})();
var statearr_57902_58008 = state_57898__$1;
(statearr_57902_58008[(2)] = null);

(statearr_57902_58008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (13))){
var inst_57869 = (state_57898[(7)]);
var inst_57878 = cljs.core.first(inst_57869);
var inst_57879 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_57880 = [false,false];
var inst_57881 = cljs.core.PersistentHashMap.fromArrays(inst_57879,inst_57880);
var inst_57882 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_57878,inst_57881);
var state_57898__$1 = state_57898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57898__$1,(15),inst_57882);
} else {
if((state_val_57899 === (6))){
var inst_57850 = (state_57898[(10)]);
var inst_57869 = (state_57898[(7)]);
var inst_57869__$1 = cljs.core.seq(inst_57850);
var state_57898__$1 = (function (){var statearr_57903 = state_57898;
(statearr_57903[(7)] = inst_57869__$1);

return statearr_57903;
})();
if(inst_57869__$1){
var statearr_57904_58009 = state_57898__$1;
(statearr_57904_58009[(1)] = (9));

} else {
var statearr_57905_58010 = state_57898__$1;
(statearr_57905_58010[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (3))){
var inst_57852 = (state_57898[(12)]);
var inst_57853 = (state_57898[(13)]);
var inst_57855 = (inst_57853 < inst_57852);
var inst_57856 = inst_57855;
var state_57898__$1 = state_57898;
if(cljs.core.truth_(inst_57856)){
var statearr_57906_58011 = state_57898__$1;
(statearr_57906_58011[(1)] = (5));

} else {
var statearr_57907_58012 = state_57898__$1;
(statearr_57907_58012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (12))){
var inst_57869 = (state_57898[(7)]);
var inst_57873 = cljs.core.chunk_first(inst_57869);
var inst_57874 = cljs.core.chunk_rest(inst_57869);
var inst_57875 = cljs.core.count(inst_57873);
var inst_57850 = inst_57874;
var inst_57851 = inst_57873;
var inst_57852 = inst_57875;
var inst_57853 = (0);
var state_57898__$1 = (function (){var statearr_57908 = state_57898;
(statearr_57908[(8)] = inst_57851);

(statearr_57908[(10)] = inst_57850);

(statearr_57908[(12)] = inst_57852);

(statearr_57908[(13)] = inst_57853);

return statearr_57908;
})();
var statearr_57909_58013 = state_57898__$1;
(statearr_57909_58013[(2)] = null);

(statearr_57909_58013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (2))){
var inst_57843 = (state_57898[(2)]);
var inst_57844 = cljs.core.reset_BANG_(progress,(30));
var inst_57849 = cljs.core.seq(inst_57843);
var inst_57850 = inst_57849;
var inst_57851 = null;
var inst_57852 = (0);
var inst_57853 = (0);
var state_57898__$1 = (function (){var statearr_57910 = state_57898;
(statearr_57910[(8)] = inst_57851);

(statearr_57910[(10)] = inst_57850);

(statearr_57910[(12)] = inst_57852);

(statearr_57910[(14)] = inst_57844);

(statearr_57910[(13)] = inst_57853);

return statearr_57910;
})();
var statearr_57911_58014 = state_57898__$1;
(statearr_57911_58014[(2)] = null);

(statearr_57911_58014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (11))){
var inst_57892 = (state_57898[(2)]);
var state_57898__$1 = state_57898;
var statearr_57912_58015 = state_57898__$1;
(statearr_57912_58015[(2)] = inst_57892);

(statearr_57912_58015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (9))){
var inst_57869 = (state_57898[(7)]);
var inst_57871 = cljs.core.chunked_seq_QMARK_(inst_57869);
var state_57898__$1 = state_57898;
if(inst_57871){
var statearr_57913_58016 = state_57898__$1;
(statearr_57913_58016[(1)] = (12));

} else {
var statearr_57914_58017 = state_57898__$1;
(statearr_57914_58017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (5))){
var inst_57851 = (state_57898[(8)]);
var inst_57853 = (state_57898[(13)]);
var inst_57858 = cljs.core._nth(inst_57851,inst_57853);
var inst_57859 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_57860 = [false,false];
var inst_57861 = cljs.core.PersistentHashMap.fromArrays(inst_57859,inst_57860);
var inst_57862 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_57858,inst_57861);
var state_57898__$1 = state_57898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57898__$1,(8),inst_57862);
} else {
if((state_val_57899 === (14))){
var inst_57889 = (state_57898[(2)]);
var state_57898__$1 = state_57898;
var statearr_57918_58018 = state_57898__$1;
(statearr_57918_58018[(2)] = inst_57889);

(statearr_57918_58018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (10))){
var state_57898__$1 = state_57898;
var statearr_57920_58019 = state_57898__$1;
(statearr_57920_58019[(2)] = null);

(statearr_57920_58019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57899 === (8))){
var inst_57851 = (state_57898[(8)]);
var inst_57850 = (state_57898[(10)]);
var inst_57852 = (state_57898[(12)]);
var inst_57853 = (state_57898[(13)]);
var inst_57864 = (state_57898[(2)]);
var inst_57865 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_57866 = (inst_57853 + (1));
var tmp57915 = inst_57851;
var tmp57916 = inst_57850;
var tmp57917 = inst_57852;
var inst_57850__$1 = tmp57916;
var inst_57851__$1 = tmp57915;
var inst_57852__$1 = tmp57917;
var inst_57853__$1 = inst_57866;
var state_57898__$1 = (function (){var statearr_57921 = state_57898;
(statearr_57921[(8)] = inst_57851__$1);

(statearr_57921[(15)] = inst_57865);

(statearr_57921[(10)] = inst_57850__$1);

(statearr_57921[(16)] = inst_57864);

(statearr_57921[(12)] = inst_57852__$1);

(statearr_57921[(13)] = inst_57853__$1);

return statearr_57921;
})();
var statearr_57922_58020 = state_57898__$1;
(statearr_57922_58020[(2)] = null);

(statearr_57922_58020[(1)] = (3));


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
var statearr_57923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57923[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__);

(statearr_57923[(1)] = (1));

return statearr_57923;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1 = (function (state_57898){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_57898);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e57926){var ex__27576__auto__ = e57926;
var statearr_57927_58021 = state_57898;
(statearr_57927_58021[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_57898[(4)]))){
var statearr_57928_58022 = state_57898;
(statearr_57928_58022[(1)] = cljs.core.first((state_57898[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58023 = state_57898;
state_57898 = G__58023;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__ = function(state_57898){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1.call(this,state_57898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_57929 = f__27596__auto__();
(statearr_57929[(6)] = c__27595__auto__);

return statearr_57929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
