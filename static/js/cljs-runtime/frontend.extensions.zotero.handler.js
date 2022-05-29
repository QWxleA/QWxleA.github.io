goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48545){
var state_val_48547 = (state_48545[(1)]);
if((state_val_48547 === (7))){
var inst_48448 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_48545__$1 = state_48545;
var statearr_48549_48871 = state_48545__$1;
(statearr_48549_48871[(2)] = inst_48448);

(statearr_48549_48871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (20))){
var inst_48537 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
var statearr_48552_48872 = state_48545__$1;
(statearr_48552_48872[(2)] = inst_48537);

(statearr_48552_48872[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (27))){
var inst_48489 = (state_48545[(7)]);
var inst_48506 = (state_48545[(8)]);
var inst_48506__$1 = cljs.core.seq(inst_48489);
var state_48545__$1 = (function (){var statearr_48553 = state_48545;
(statearr_48553[(8)] = inst_48506__$1);

return statearr_48553;
})();
if(inst_48506__$1){
var statearr_48554_48874 = state_48545__$1;
(statearr_48554_48874[(1)] = (29));

} else {
var statearr_48555_48875 = state_48545__$1;
(statearr_48555_48875[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (1))){
var inst_48433 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_48438 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_48439 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_48438);
var state_48545__$1 = (function (){var statearr_48556 = state_48545;
(statearr_48556[(9)] = inst_48439);

(statearr_48556[(10)] = inst_48433);

return statearr_48556;
})();
var G__48557_48876 = type;
var G__48557_48877__$1 = (((G__48557_48876 instanceof cljs.core.Keyword))?G__48557_48876.fqn:null);
switch (G__48557_48877__$1) {
case "notes":
var statearr_48558_48879 = state_48545__$1;
(statearr_48558_48879[(1)] = (3));


break;
case "attachments":
var statearr_48559_48880 = state_48545__$1;
(statearr_48559_48880[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48557_48877__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (24))){
var inst_48492 = (state_48545[(11)]);
var inst_48491 = (state_48545[(12)]);
var inst_48494 = (inst_48492 < inst_48491);
var inst_48495 = inst_48494;
var state_48545__$1 = state_48545;
if(cljs.core.truth_(inst_48495)){
var statearr_48562_48881 = state_48545__$1;
(statearr_48562_48881[(1)] = (26));

} else {
var statearr_48563_48882 = state_48545__$1;
(statearr_48563_48882[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (4))){
var state_48545__$1 = state_48545;
var statearr_48564_48883 = state_48545__$1;
(statearr_48564_48883[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_48564_48883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (15))){
var state_48545__$1 = state_48545;
var statearr_48565_48885 = state_48545__$1;
(statearr_48565_48885[(2)] = null);

(statearr_48565_48885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (21))){
var inst_48472 = (state_48545[(13)]);
var inst_48486 = cljs.core.seq(inst_48472);
var inst_48489 = inst_48486;
var inst_48490 = null;
var inst_48491 = (0);
var inst_48492 = (0);
var state_48545__$1 = (function (){var statearr_48568 = state_48545;
(statearr_48568[(7)] = inst_48489);

(statearr_48568[(11)] = inst_48492);

(statearr_48568[(12)] = inst_48491);

(statearr_48568[(14)] = inst_48490);

return statearr_48568;
})();
var statearr_48569_48887 = state_48545__$1;
(statearr_48569_48887[(2)] = null);

(statearr_48569_48887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (31))){
var inst_48526 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
var statearr_48570_48888 = state_48545__$1;
(statearr_48570_48888[(2)] = inst_48526);

(statearr_48570_48888[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (32))){
var inst_48506 = (state_48545[(8)]);
var inst_48510 = cljs.core.chunk_first(inst_48506);
var inst_48511 = cljs.core.chunk_rest(inst_48506);
var inst_48512 = cljs.core.count(inst_48510);
var inst_48489 = inst_48511;
var inst_48490 = inst_48510;
var inst_48491 = inst_48512;
var inst_48492 = (0);
var state_48545__$1 = (function (){var statearr_48571 = state_48545;
(statearr_48571[(7)] = inst_48489);

(statearr_48571[(11)] = inst_48492);

(statearr_48571[(12)] = inst_48491);

(statearr_48571[(14)] = inst_48490);

return statearr_48571;
})();
var statearr_48572_48890 = state_48545__$1;
(statearr_48572_48890[(2)] = null);

(statearr_48572_48890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (33))){
var inst_48480 = (state_48545[(15)]);
var inst_48506 = (state_48545[(8)]);
var inst_48515 = cljs.core.first(inst_48506);
var inst_48516 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_48517 = [inst_48480,false,false];
var inst_48518 = cljs.core.PersistentHashMap.fromArrays(inst_48516,inst_48517);
var inst_48519 = frontend.handler.editor.api_insert_new_block_BANG_(inst_48515,inst_48518);
var inst_48520 = cljs.core.next(inst_48506);
var inst_48489 = inst_48520;
var inst_48490 = null;
var inst_48491 = (0);
var inst_48492 = (0);
var state_48545__$1 = (function (){var statearr_48573 = state_48545;
(statearr_48573[(16)] = inst_48519);

(statearr_48573[(7)] = inst_48489);

(statearr_48573[(11)] = inst_48492);

(statearr_48573[(12)] = inst_48491);

(statearr_48573[(14)] = inst_48490);

return statearr_48573;
})();
var statearr_48574_48892 = state_48545__$1;
(statearr_48574_48892[(2)] = null);

(statearr_48574_48892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (13))){
var inst_48464 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
if(cljs.core.truth_(inst_48464)){
var statearr_48575_48894 = state_48545__$1;
(statearr_48575_48894[(1)] = (14));

} else {
var statearr_48576_48895 = state_48545__$1;
(statearr_48576_48895[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (22))){
var state_48545__$1 = state_48545;
var statearr_48577_48896 = state_48545__$1;
(statearr_48577_48896[(2)] = null);

(statearr_48577_48896[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (29))){
var inst_48506 = (state_48545[(8)]);
var inst_48508 = cljs.core.chunked_seq_QMARK_(inst_48506);
var state_48545__$1 = state_48545;
if(inst_48508){
var statearr_48582_48897 = state_48545__$1;
(statearr_48582_48897[(1)] = (32));

} else {
var statearr_48583_48899 = state_48545__$1;
(statearr_48583_48899[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (6))){
var inst_48446 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_48545__$1 = state_48545;
var statearr_48586_48901 = state_48545__$1;
(statearr_48586_48901[(2)] = inst_48446);

(statearr_48586_48901[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (28))){
var inst_48528 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
var statearr_48587_48902 = state_48545__$1;
(statearr_48587_48902[(2)] = inst_48528);

(statearr_48587_48902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (25))){
var inst_48530 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
var statearr_48588_48903 = state_48545__$1;
(statearr_48588_48903[(2)] = inst_48530);

(statearr_48588_48903[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (34))){
var inst_48523 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
var statearr_48589_48904 = state_48545__$1;
(statearr_48589_48904[(2)] = inst_48523);

(statearr_48589_48904[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (17))){
var inst_48472 = (state_48545[(13)]);
var inst_48470 = (state_48545[(2)]);
var inst_48471 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_48470);
var inst_48472__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_48471);
var inst_48473 = cljs.core.not_empty(inst_48472__$1);
var state_48545__$1 = (function (){var statearr_48590 = state_48545;
(statearr_48590[(13)] = inst_48472__$1);

return statearr_48590;
})();
if(cljs.core.truth_(inst_48473)){
var statearr_48591_48905 = state_48545__$1;
(statearr_48591_48905[(1)] = (18));

} else {
var statearr_48592_48907 = state_48545__$1;
(statearr_48592_48907[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (3))){
var state_48545__$1 = state_48545;
var statearr_48593_48909 = state_48545__$1;
(statearr_48593_48909[(2)] = frontend.extensions.zotero.api.notes);

(statearr_48593_48909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (12))){
var inst_48457 = (state_48545[(17)]);
var state_48545__$1 = state_48545;
var statearr_48594_48910 = state_48545__$1;
(statearr_48594_48910[(2)] = inst_48457);

(statearr_48594_48910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (2))){
var inst_48445 = (state_48545[(2)]);
var state_48545__$1 = (function (){var statearr_48595 = state_48545;
(statearr_48595[(18)] = inst_48445);

return statearr_48595;
})();
var G__48596_48911 = type;
var G__48596_48912__$1 = (((G__48596_48911 instanceof cljs.core.Keyword))?G__48596_48911.fqn:null);
switch (G__48596_48912__$1) {
case "notes":
var statearr_48597_48914 = state_48545__$1;
(statearr_48597_48914[(1)] = (6));


break;
case "attachments":
var statearr_48598_48915 = state_48545__$1;
(statearr_48598_48915[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48596_48912__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (23))){
var inst_48534 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
var statearr_48599_48916 = state_48545__$1;
(statearr_48599_48916[(2)] = inst_48534);

(statearr_48599_48916[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (19))){
var state_48545__$1 = state_48545;
var statearr_48600_48917 = state_48545__$1;
(statearr_48600_48917[(2)] = null);

(statearr_48600_48917[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (11))){
var inst_48439 = (state_48545[(9)]);
var inst_48459 = (inst_48439 > (0));
var state_48545__$1 = state_48545;
var statearr_48601_48918 = state_48545__$1;
(statearr_48601_48918[(2)] = inst_48459);

(statearr_48601_48918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (9))){
var inst_48452 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_48545__$1 = state_48545;
var statearr_48602_48919 = state_48545__$1;
(statearr_48602_48919[(2)] = inst_48452);

(statearr_48602_48919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (5))){
var inst_48451 = (state_48545[(2)]);
var state_48545__$1 = (function (){var statearr_48608 = state_48545;
(statearr_48608[(19)] = inst_48451);

return statearr_48608;
})();
var G__48609_48920 = type;
var G__48609_48921__$1 = (((G__48609_48920 instanceof cljs.core.Keyword))?G__48609_48920.fqn:null);
switch (G__48609_48921__$1) {
case "notes":
var statearr_48610_48923 = state_48545__$1;
(statearr_48610_48923[(1)] = (9));


break;
case "attachments":
var statearr_48611_48927 = state_48545__$1;
(statearr_48611_48927[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48609_48921__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (14))){
var inst_48445 = (state_48545[(18)]);
var inst_48433 = (state_48545[(10)]);
var inst_48468 = (inst_48445.cljs$core$IFn$_invoke$arity$1 ? inst_48445.cljs$core$IFn$_invoke$arity$1(inst_48433) : inst_48445.call(null,inst_48433));
var state_48545__$1 = state_48545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48545__$1,(17),inst_48468);
} else {
if((state_val_48547 === (26))){
var inst_48489 = (state_48545[(7)]);
var inst_48492 = (state_48545[(11)]);
var inst_48480 = (state_48545[(15)]);
var inst_48491 = (state_48545[(12)]);
var inst_48490 = (state_48545[(14)]);
var inst_48498 = cljs.core._nth(inst_48490,inst_48492);
var inst_48499 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_48500 = [inst_48480,false,false];
var inst_48501 = cljs.core.PersistentHashMap.fromArrays(inst_48499,inst_48500);
var inst_48502 = frontend.handler.editor.api_insert_new_block_BANG_(inst_48498,inst_48501);
var inst_48503 = (inst_48492 + (1));
var tmp48604 = inst_48489;
var tmp48605 = inst_48491;
var tmp48606 = inst_48490;
var inst_48489__$1 = tmp48604;
var inst_48490__$1 = tmp48606;
var inst_48491__$1 = tmp48605;
var inst_48492__$1 = inst_48503;
var state_48545__$1 = (function (){var statearr_48614 = state_48545;
(statearr_48614[(7)] = inst_48489__$1);

(statearr_48614[(11)] = inst_48492__$1);

(statearr_48614[(12)] = inst_48491__$1);

(statearr_48614[(20)] = inst_48502);

(statearr_48614[(14)] = inst_48490__$1);

return statearr_48614;
})();
var statearr_48615_48928 = state_48545__$1;
(statearr_48615_48928[(2)] = null);

(statearr_48615_48928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (16))){
var inst_48540 = (state_48545[(2)]);
var state_48545__$1 = state_48545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48545__$1,inst_48540);
} else {
if((state_val_48547 === (30))){
var state_48545__$1 = state_48545;
var statearr_48618_48929 = state_48545__$1;
(statearr_48618_48929[(2)] = null);

(statearr_48618_48929[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (10))){
var inst_48454 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_48545__$1 = state_48545;
var statearr_48619_48932 = state_48545__$1;
(statearr_48619_48932[(2)] = inst_48454);

(statearr_48619_48932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (18))){
var inst_48480 = (state_48545[(15)]);
var inst_48451 = (state_48545[(19)]);
var inst_48476 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_48477 = [page_name];
var inst_48478 = cljs.core.PersistentHashMap.fromArrays(inst_48476,inst_48477);
var inst_48479 = frontend.handler.editor.api_insert_new_block_BANG_(inst_48451,inst_48478);
var inst_48480__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_48479);
var state_48545__$1 = (function (){var statearr_48620 = state_48545;
(statearr_48620[(15)] = inst_48480__$1);

return statearr_48620;
})();
if(cljs.core.truth_(inst_48480__$1)){
var statearr_48621_48933 = state_48545__$1;
(statearr_48621_48933[(1)] = (21));

} else {
var statearr_48622_48934 = state_48545__$1;
(statearr_48622_48934[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48547 === (8))){
var inst_48457 = (state_48545[(17)]);
var inst_48457__$1 = (state_48545[(2)]);
var state_48545__$1 = (function (){var statearr_48623 = state_48545;
(statearr_48623[(17)] = inst_48457__$1);

return statearr_48623;
})();
if(cljs.core.truth_(inst_48457__$1)){
var statearr_48624_48936 = state_48545__$1;
(statearr_48624_48936[(1)] = (11));

} else {
var statearr_48625_48937 = state_48545__$1;
(statearr_48625_48937[(1)] = (12));

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
var statearr_48626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48626[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__);

(statearr_48626[(1)] = (1));

return statearr_48626;
});
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1 = (function (state_48545){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48545);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48627){var ex__27576__auto__ = e48627;
var statearr_48628_48942 = state_48545;
(statearr_48628_48942[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48545[(4)]))){
var statearr_48629_48943 = state_48545;
(statearr_48629_48943[(1)] = cljs.core.first((state_48545[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48944 = state_48545;
state_48545 = G__48944;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__ = function(state_48545){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1.call(this,state_48545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48630 = f__27596__auto__();
(statearr_48630[(6)] = c__27595__auto__);

return statearr_48630;
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
var G__48640 = arguments.length;
switch (G__48640) {
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

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__48641){
var map__48642 = p__48641;
var map__48642__$1 = cljs.core.__destructure_map(map__48642);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48642__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48642__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48642__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48689){
var state_val_48690 = (state_48689[(1)]);
if((state_val_48690 === (7))){
var inst_48663 = (state_48689[(2)]);
var state_48689__$1 = state_48689;
var statearr_48691_48989 = state_48689__$1;
(statearr_48691_48989[(2)] = inst_48663);

(statearr_48691_48989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (1))){
var inst_48646 = (state_48689[(7)]);
var inst_48645 = (state_48689[(8)]);
var inst_48644 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_48645__$1 = cljs.core.__destructure_map(inst_48644);
var inst_48646__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48645__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_48647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48645__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_48648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48645__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_48649 = clojure.string.lower_case(inst_48646__$1);
var inst_48650 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_48649) : frontend.db.page_exists_QMARK_.call(null,inst_48649));
var state_48689__$1 = (function (){var statearr_48692 = state_48689;
(statearr_48692[(7)] = inst_48646__$1);

(statearr_48692[(8)] = inst_48645__$1);

(statearr_48692[(9)] = inst_48647);

(statearr_48692[(10)] = inst_48648);

return statearr_48692;
})();
if(cljs.core.truth_(inst_48650)){
var statearr_48693_48990 = state_48689__$1;
(statearr_48693_48990[(1)] = (2));

} else {
var statearr_48694_48991 = state_48689__$1;
(statearr_48694_48991[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (4))){
var inst_48646 = (state_48689[(7)]);
var inst_48648 = (state_48689[(10)]);
var inst_48667 = (state_48689[(2)]);
var inst_48668 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_48646,inst_48648);
var inst_48669 = frontend.extensions.zotero.handler.add(inst_48646,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_48689__$1 = (function (){var statearr_48695 = state_48689;
(statearr_48695[(11)] = inst_48668);

(statearr_48695[(12)] = inst_48667);

return statearr_48695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48689__$1,(8),inst_48669);
} else {
if((state_val_48690 === (15))){
var inst_48687 = (state_48689[(2)]);
var state_48689__$1 = state_48689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48689__$1,inst_48687);
} else {
if((state_val_48690 === (13))){
var inst_48646 = (state_48689[(7)]);
var inst_48683 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48646)].join('');
var inst_48684 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48683,new cljs.core.Keyword(null,"success","success",1890645906));
var state_48689__$1 = state_48689;
var statearr_48696_48993 = state_48689__$1;
(statearr_48696_48993[(2)] = inst_48684);

(statearr_48696_48993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (6))){
var inst_48646 = (state_48689[(7)]);
var inst_48647 = (state_48689[(9)]);
var inst_48658 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_48659 = [inst_48646,inst_48647];
var inst_48660 = cljs.core.PersistentHashMap.fromArrays(inst_48658,inst_48659);
var inst_48661 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_48660);
var state_48689__$1 = state_48689;
var statearr_48699_48996 = state_48689__$1;
(statearr_48699_48996[(2)] = inst_48661);

(statearr_48699_48996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (3))){
var inst_48646 = (state_48689[(7)]);
var inst_48647 = (state_48689[(9)]);
var inst_48665 = frontend.extensions.zotero.handler.create_page(inst_48646,inst_48647);
var state_48689__$1 = state_48689;
var statearr_48700_48997 = state_48689__$1;
(statearr_48700_48997[(2)] = inst_48665);

(statearr_48700_48997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (12))){
var inst_48681 = (state_48689[(2)]);
var state_48689__$1 = (function (){var statearr_48701 = state_48689;
(statearr_48701[(13)] = inst_48681);

return statearr_48701;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_48702_48998 = state_48689__$1;
(statearr_48702_48998[(1)] = (13));

} else {
var statearr_48703_48999 = state_48689__$1;
(statearr_48703_48999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (2))){
var inst_48653 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_48689__$1 = state_48689;
if(cljs.core.truth_(inst_48653)){
var statearr_48704_49000 = state_48689__$1;
(statearr_48704_49000[(1)] = (5));

} else {
var statearr_48705_49001 = state_48689__$1;
(statearr_48705_49001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (11))){
var state_48689__$1 = state_48689;
var statearr_48706_49002 = state_48689__$1;
(statearr_48706_49002[(2)] = null);

(statearr_48706_49002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (9))){
var inst_48675 = (state_48689[(2)]);
var state_48689__$1 = (function (){var statearr_48707 = state_48689;
(statearr_48707[(14)] = inst_48675);

return statearr_48707;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_48708_49003 = state_48689__$1;
(statearr_48708_49003[(1)] = (10));

} else {
var statearr_48709_49004 = state_48689__$1;
(statearr_48709_49004[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (5))){
var inst_48646 = (state_48689[(7)]);
var inst_48645 = (state_48689[(8)]);
var inst_48647 = (state_48689[(9)]);
var inst_48648 = (state_48689[(10)]);
var inst_48655 = (function (){var map__48643 = inst_48645;
var page_name = inst_48646;
var properties = inst_48647;
var abstract_note = inst_48648;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_48656 = frontend.handler.page.delete_BANG_(inst_48646,inst_48655);
var state_48689__$1 = state_48689;
var statearr_48710_49005 = state_48689__$1;
(statearr_48710_49005[(2)] = inst_48656);

(statearr_48710_49005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (14))){
var state_48689__$1 = state_48689;
var statearr_48711_49006 = state_48689__$1;
(statearr_48711_49006[(2)] = null);

(statearr_48711_49006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (10))){
var inst_48646 = (state_48689[(7)]);
var inst_48677 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_48646);
var inst_48678 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_48689__$1 = (function (){var statearr_48712 = state_48689;
(statearr_48712[(15)] = inst_48677);

return statearr_48712;
})();
var statearr_48713_49007 = state_48689__$1;
(statearr_48713_49007[(2)] = inst_48678);

(statearr_48713_49007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48690 === (8))){
var inst_48646 = (state_48689[(7)]);
var inst_48671 = (state_48689[(2)]);
var inst_48673 = frontend.extensions.zotero.handler.add(inst_48646,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_48689__$1 = (function (){var statearr_48714 = state_48689;
(statearr_48714[(16)] = inst_48671);

return statearr_48714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48689__$1,(9),inst_48673);
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
var statearr_48716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48716[(0)] = frontend$extensions$zotero$handler$state_machine__27573__auto__);

(statearr_48716[(1)] = (1));

return statearr_48716;
});
var frontend$extensions$zotero$handler$state_machine__27573__auto____1 = (function (state_48689){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48689);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48717){var ex__27576__auto__ = e48717;
var statearr_48718_49009 = state_48689;
(statearr_48718_49009[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48689[(4)]))){
var statearr_48719_49010 = state_48689;
(statearr_48719_49010[(1)] = cljs.core.first((state_48689[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49011 = state_48689;
state_48689 = G__49011;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__27573__auto__ = function(state_48689){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__27573__auto____1.call(this,state_48689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__27573__auto____0;
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48720 = f__27596__auto__();
(statearr_48720[(6)] = c__27595__auto__);

return statearr_48720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48782){
var state_val_48783 = (state_48782[(1)]);
if((state_val_48783 === (7))){
var inst_48777 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48786_49012 = state_48782__$1;
(statearr_48786_49012[(2)] = inst_48777);

(statearr_48786_49012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (1))){
var inst_48722 = frontend.extensions.zotero.api.all_top_items();
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48782__$1,(2),inst_48722);
} else {
if((state_val_48783 === (4))){
var inst_48780 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48782__$1,inst_48780);
} else {
if((state_val_48783 === (15))){
var inst_48751 = (state_48782[(7)]);
var inst_48767 = (state_48782[(2)]);
var inst_48768 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_48769 = cljs.core.next(inst_48751);
var inst_48731 = inst_48769;
var inst_48732 = null;
var inst_48733 = (0);
var inst_48734 = (0);
var state_48782__$1 = (function (){var statearr_48792 = state_48782;
(statearr_48792[(8)] = inst_48734);

(statearr_48792[(9)] = inst_48768);

(statearr_48792[(10)] = inst_48767);

(statearr_48792[(11)] = inst_48731);

(statearr_48792[(12)] = inst_48733);

(statearr_48792[(13)] = inst_48732);

return statearr_48792;
})();
var statearr_48794_49013 = state_48782__$1;
(statearr_48794_49013[(2)] = null);

(statearr_48794_49013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (13))){
var inst_48751 = (state_48782[(7)]);
var inst_48761 = cljs.core.first(inst_48751);
var inst_48762 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_48763 = [false,false];
var inst_48764 = cljs.core.PersistentHashMap.fromArrays(inst_48762,inst_48763);
var inst_48765 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_48761,inst_48764);
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48782__$1,(15),inst_48765);
} else {
if((state_val_48783 === (6))){
var inst_48731 = (state_48782[(11)]);
var inst_48751 = (state_48782[(7)]);
var inst_48751__$1 = cljs.core.seq(inst_48731);
var state_48782__$1 = (function (){var statearr_48801 = state_48782;
(statearr_48801[(7)] = inst_48751__$1);

return statearr_48801;
})();
if(inst_48751__$1){
var statearr_48803_49014 = state_48782__$1;
(statearr_48803_49014[(1)] = (9));

} else {
var statearr_48805_49015 = state_48782__$1;
(statearr_48805_49015[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (3))){
var inst_48734 = (state_48782[(8)]);
var inst_48733 = (state_48782[(12)]);
var inst_48736 = (inst_48734 < inst_48733);
var inst_48737 = inst_48736;
var state_48782__$1 = state_48782;
if(cljs.core.truth_(inst_48737)){
var statearr_48809_49016 = state_48782__$1;
(statearr_48809_49016[(1)] = (5));

} else {
var statearr_48810_49017 = state_48782__$1;
(statearr_48810_49017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (12))){
var inst_48751 = (state_48782[(7)]);
var inst_48756 = cljs.core.chunk_first(inst_48751);
var inst_48757 = cljs.core.chunk_rest(inst_48751);
var inst_48758 = cljs.core.count(inst_48756);
var inst_48731 = inst_48757;
var inst_48732 = inst_48756;
var inst_48733 = inst_48758;
var inst_48734 = (0);
var state_48782__$1 = (function (){var statearr_48820 = state_48782;
(statearr_48820[(8)] = inst_48734);

(statearr_48820[(11)] = inst_48731);

(statearr_48820[(12)] = inst_48733);

(statearr_48820[(13)] = inst_48732);

return statearr_48820;
})();
var statearr_48821_49018 = state_48782__$1;
(statearr_48821_49018[(2)] = null);

(statearr_48821_49018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (2))){
var inst_48724 = (state_48782[(2)]);
var inst_48725 = cljs.core.reset_BANG_(progress,(30));
var inst_48730 = cljs.core.seq(inst_48724);
var inst_48731 = inst_48730;
var inst_48732 = null;
var inst_48733 = (0);
var inst_48734 = (0);
var state_48782__$1 = (function (){var statearr_48825 = state_48782;
(statearr_48825[(8)] = inst_48734);

(statearr_48825[(11)] = inst_48731);

(statearr_48825[(12)] = inst_48733);

(statearr_48825[(13)] = inst_48732);

(statearr_48825[(14)] = inst_48725);

return statearr_48825;
})();
var statearr_48829_49019 = state_48782__$1;
(statearr_48829_49019[(2)] = null);

(statearr_48829_49019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (11))){
var inst_48775 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48833_49020 = state_48782__$1;
(statearr_48833_49020[(2)] = inst_48775);

(statearr_48833_49020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (9))){
var inst_48751 = (state_48782[(7)]);
var inst_48753 = cljs.core.chunked_seq_QMARK_(inst_48751);
var state_48782__$1 = state_48782;
if(inst_48753){
var statearr_48836_49021 = state_48782__$1;
(statearr_48836_49021[(1)] = (12));

} else {
var statearr_48838_49022 = state_48782__$1;
(statearr_48838_49022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (5))){
var inst_48734 = (state_48782[(8)]);
var inst_48732 = (state_48782[(13)]);
var inst_48739 = cljs.core._nth(inst_48732,inst_48734);
var inst_48740 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_48741 = [false,false];
var inst_48742 = cljs.core.PersistentHashMap.fromArrays(inst_48740,inst_48741);
var inst_48743 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_48739,inst_48742);
var state_48782__$1 = state_48782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48782__$1,(8),inst_48743);
} else {
if((state_val_48783 === (14))){
var inst_48772 = (state_48782[(2)]);
var state_48782__$1 = state_48782;
var statearr_48847_49023 = state_48782__$1;
(statearr_48847_49023[(2)] = inst_48772);

(statearr_48847_49023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (10))){
var state_48782__$1 = state_48782;
var statearr_48848_49024 = state_48782__$1;
(statearr_48848_49024[(2)] = null);

(statearr_48848_49024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48783 === (8))){
var inst_48734 = (state_48782[(8)]);
var inst_48731 = (state_48782[(11)]);
var inst_48733 = (state_48782[(12)]);
var inst_48732 = (state_48782[(13)]);
var inst_48745 = (state_48782[(2)]);
var inst_48746 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_48747 = (inst_48734 + (1));
var tmp48844 = inst_48731;
var tmp48845 = inst_48733;
var tmp48846 = inst_48732;
var inst_48731__$1 = tmp48844;
var inst_48732__$1 = tmp48846;
var inst_48733__$1 = tmp48845;
var inst_48734__$1 = inst_48747;
var state_48782__$1 = (function (){var statearr_48851 = state_48782;
(statearr_48851[(8)] = inst_48734__$1);

(statearr_48851[(15)] = inst_48745);

(statearr_48851[(16)] = inst_48746);

(statearr_48851[(11)] = inst_48731__$1);

(statearr_48851[(12)] = inst_48733__$1);

(statearr_48851[(13)] = inst_48732__$1);

return statearr_48851;
})();
var statearr_48857_49025 = state_48782__$1;
(statearr_48857_49025[(2)] = null);

(statearr_48857_49025[(1)] = (3));


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
var statearr_48861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48861[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__);

(statearr_48861[(1)] = (1));

return statearr_48861;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1 = (function (state_48782){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48782);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48862){var ex__27576__auto__ = e48862;
var statearr_48863_49026 = state_48782;
(statearr_48863_49026[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48782[(4)]))){
var statearr_48864_49027 = state_48782;
(statearr_48864_49027[(1)] = cljs.core.first((state_48782[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49028 = state_48782;
state_48782 = G__49028;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__ = function(state_48782){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1.call(this,state_48782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48865 = f__27596__auto__();
(statearr_48865[(6)] = c__27595__auto__);

return statearr_48865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
