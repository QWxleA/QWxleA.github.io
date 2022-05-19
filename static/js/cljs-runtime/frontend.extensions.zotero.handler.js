goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_79146){
var state_val_79147 = (state_79146[(1)]);
if((state_val_79147 === (7))){
var inst_79049 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_79146__$1 = state_79146;
var statearr_79149_79425 = state_79146__$1;
(statearr_79149_79425[(2)] = inst_79049);

(statearr_79149_79425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (20))){
var inst_79140 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
var statearr_79151_79426 = state_79146__$1;
(statearr_79151_79426[(2)] = inst_79140);

(statearr_79151_79426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (27))){
var inst_79106 = (state_79146[(7)]);
var inst_79085 = (state_79146[(8)]);
var inst_79106__$1 = cljs.core.seq(inst_79085);
var state_79146__$1 = (function (){var statearr_79153 = state_79146;
(statearr_79153[(7)] = inst_79106__$1);

return statearr_79153;
})();
if(inst_79106__$1){
var statearr_79155_79428 = state_79146__$1;
(statearr_79155_79428[(1)] = (29));

} else {
var statearr_79157_79429 = state_79146__$1;
(statearr_79157_79429[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (1))){
var inst_79040 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_79041 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_79042 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_79041);
var state_79146__$1 = (function (){var statearr_79160 = state_79146;
(statearr_79160[(9)] = inst_79042);

(statearr_79160[(10)] = inst_79040);

return statearr_79160;
})();
var G__79161_79431 = type;
var G__79161_79432__$1 = (((G__79161_79431 instanceof cljs.core.Keyword))?G__79161_79431.fqn:null);
switch (G__79161_79432__$1) {
case "notes":
var statearr_79163_79434 = state_79146__$1;
(statearr_79163_79434[(1)] = (3));


break;
case "attachments":
var statearr_79164_79435 = state_79146__$1;
(statearr_79164_79435[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79161_79432__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (24))){
var inst_79087 = (state_79146[(11)]);
var inst_79088 = (state_79146[(12)]);
var inst_79090 = (inst_79088 < inst_79087);
var inst_79091 = inst_79090;
var state_79146__$1 = state_79146;
if(cljs.core.truth_(inst_79091)){
var statearr_79167_79436 = state_79146__$1;
(statearr_79167_79436[(1)] = (26));

} else {
var statearr_79168_79437 = state_79146__$1;
(statearr_79168_79437[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (4))){
var state_79146__$1 = state_79146;
var statearr_79169_79438 = state_79146__$1;
(statearr_79169_79438[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_79169_79438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (15))){
var state_79146__$1 = state_79146;
var statearr_79170_79439 = state_79146__$1;
(statearr_79170_79439[(2)] = null);

(statearr_79170_79439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (21))){
var inst_79071 = (state_79146[(13)]);
var inst_79084 = cljs.core.seq(inst_79071);
var inst_79085 = inst_79084;
var inst_79086 = null;
var inst_79087 = (0);
var inst_79088 = (0);
var state_79146__$1 = (function (){var statearr_79172 = state_79146;
(statearr_79172[(14)] = inst_79086);

(statearr_79172[(11)] = inst_79087);

(statearr_79172[(12)] = inst_79088);

(statearr_79172[(8)] = inst_79085);

return statearr_79172;
})();
var statearr_79176_79440 = state_79146__$1;
(statearr_79176_79440[(2)] = null);

(statearr_79176_79440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (31))){
var inst_79130 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
var statearr_79177_79441 = state_79146__$1;
(statearr_79177_79441[(2)] = inst_79130);

(statearr_79177_79441[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (32))){
var inst_79106 = (state_79146[(7)]);
var inst_79114 = cljs.core.chunk_first(inst_79106);
var inst_79115 = cljs.core.chunk_rest(inst_79106);
var inst_79116 = cljs.core.count(inst_79114);
var inst_79085 = inst_79115;
var inst_79086 = inst_79114;
var inst_79087 = inst_79116;
var inst_79088 = (0);
var state_79146__$1 = (function (){var statearr_79178 = state_79146;
(statearr_79178[(14)] = inst_79086);

(statearr_79178[(11)] = inst_79087);

(statearr_79178[(12)] = inst_79088);

(statearr_79178[(8)] = inst_79085);

return statearr_79178;
})();
var statearr_79179_79442 = state_79146__$1;
(statearr_79179_79442[(2)] = null);

(statearr_79179_79442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (33))){
var inst_79078 = (state_79146[(15)]);
var inst_79106 = (state_79146[(7)]);
var inst_79119 = cljs.core.first(inst_79106);
var inst_79120 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_79121 = [inst_79078,false,false];
var inst_79122 = cljs.core.PersistentHashMap.fromArrays(inst_79120,inst_79121);
var inst_79123 = frontend.handler.editor.api_insert_new_block_BANG_(inst_79119,inst_79122);
var inst_79124 = cljs.core.next(inst_79106);
var inst_79085 = inst_79124;
var inst_79086 = null;
var inst_79087 = (0);
var inst_79088 = (0);
var state_79146__$1 = (function (){var statearr_79180 = state_79146;
(statearr_79180[(14)] = inst_79086);

(statearr_79180[(16)] = inst_79123);

(statearr_79180[(11)] = inst_79087);

(statearr_79180[(12)] = inst_79088);

(statearr_79180[(8)] = inst_79085);

return statearr_79180;
})();
var statearr_79181_79443 = state_79146__$1;
(statearr_79181_79443[(2)] = null);

(statearr_79181_79443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (13))){
var inst_79063 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
if(cljs.core.truth_(inst_79063)){
var statearr_79182_79444 = state_79146__$1;
(statearr_79182_79444[(1)] = (14));

} else {
var statearr_79183_79445 = state_79146__$1;
(statearr_79183_79445[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (22))){
var state_79146__$1 = state_79146;
var statearr_79184_79446 = state_79146__$1;
(statearr_79184_79446[(2)] = null);

(statearr_79184_79446[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (29))){
var inst_79106 = (state_79146[(7)]);
var inst_79112 = cljs.core.chunked_seq_QMARK_(inst_79106);
var state_79146__$1 = state_79146;
if(inst_79112){
var statearr_79186_79447 = state_79146__$1;
(statearr_79186_79447[(1)] = (32));

} else {
var statearr_79187_79448 = state_79146__$1;
(statearr_79187_79448[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (6))){
var inst_79047 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_79146__$1 = state_79146;
var statearr_79188_79449 = state_79146__$1;
(statearr_79188_79449[(2)] = inst_79047);

(statearr_79188_79449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (28))){
var inst_79132 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
var statearr_79189_79450 = state_79146__$1;
(statearr_79189_79450[(2)] = inst_79132);

(statearr_79189_79450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (25))){
var inst_79134 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
var statearr_79190_79451 = state_79146__$1;
(statearr_79190_79451[(2)] = inst_79134);

(statearr_79190_79451[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (34))){
var inst_79127 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
var statearr_79192_79452 = state_79146__$1;
(statearr_79192_79452[(2)] = inst_79127);

(statearr_79192_79452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (17))){
var inst_79071 = (state_79146[(13)]);
var inst_79068 = (state_79146[(2)]);
var inst_79070 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_79068);
var inst_79071__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_79070);
var inst_79072 = cljs.core.not_empty(inst_79071__$1);
var state_79146__$1 = (function (){var statearr_79195 = state_79146;
(statearr_79195[(13)] = inst_79071__$1);

return statearr_79195;
})();
if(cljs.core.truth_(inst_79072)){
var statearr_79196_79453 = state_79146__$1;
(statearr_79196_79453[(1)] = (18));

} else {
var statearr_79197_79454 = state_79146__$1;
(statearr_79197_79454[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (3))){
var state_79146__$1 = state_79146;
var statearr_79198_79455 = state_79146__$1;
(statearr_79198_79455[(2)] = frontend.extensions.zotero.api.notes);

(statearr_79198_79455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (12))){
var inst_79058 = (state_79146[(17)]);
var state_79146__$1 = state_79146;
var statearr_79199_79456 = state_79146__$1;
(statearr_79199_79456[(2)] = inst_79058);

(statearr_79199_79456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (2))){
var inst_79046 = (state_79146[(2)]);
var state_79146__$1 = (function (){var statearr_79200 = state_79146;
(statearr_79200[(18)] = inst_79046);

return statearr_79200;
})();
var G__79201_79457 = type;
var G__79201_79458__$1 = (((G__79201_79457 instanceof cljs.core.Keyword))?G__79201_79457.fqn:null);
switch (G__79201_79458__$1) {
case "notes":
var statearr_79202_79460 = state_79146__$1;
(statearr_79202_79460[(1)] = (6));


break;
case "attachments":
var statearr_79203_79461 = state_79146__$1;
(statearr_79203_79461[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79201_79458__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (23))){
var inst_79137 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
var statearr_79204_79462 = state_79146__$1;
(statearr_79204_79462[(2)] = inst_79137);

(statearr_79204_79462[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (19))){
var state_79146__$1 = state_79146;
var statearr_79205_79463 = state_79146__$1;
(statearr_79205_79463[(2)] = null);

(statearr_79205_79463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (11))){
var inst_79042 = (state_79146[(9)]);
var inst_79060 = (inst_79042 > (0));
var state_79146__$1 = state_79146;
var statearr_79206_79465 = state_79146__$1;
(statearr_79206_79465[(2)] = inst_79060);

(statearr_79206_79465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (9))){
var inst_79053 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_79146__$1 = state_79146;
var statearr_79207_79466 = state_79146__$1;
(statearr_79207_79466[(2)] = inst_79053);

(statearr_79207_79466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (5))){
var inst_79052 = (state_79146[(2)]);
var state_79146__$1 = (function (){var statearr_79211 = state_79146;
(statearr_79211[(19)] = inst_79052);

return statearr_79211;
})();
var G__79212_79467 = type;
var G__79212_79468__$1 = (((G__79212_79467 instanceof cljs.core.Keyword))?G__79212_79467.fqn:null);
switch (G__79212_79468__$1) {
case "notes":
var statearr_79213_79470 = state_79146__$1;
(statearr_79213_79470[(1)] = (9));


break;
case "attachments":
var statearr_79214_79471 = state_79146__$1;
(statearr_79214_79471[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79212_79468__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (14))){
var inst_79046 = (state_79146[(18)]);
var inst_79040 = (state_79146[(10)]);
var inst_79066 = (inst_79046.cljs$core$IFn$_invoke$arity$1 ? inst_79046.cljs$core$IFn$_invoke$arity$1(inst_79040) : inst_79046.call(null,inst_79040));
var state_79146__$1 = state_79146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79146__$1,(17),inst_79066);
} else {
if((state_val_79147 === (26))){
var inst_79078 = (state_79146[(15)]);
var inst_79086 = (state_79146[(14)]);
var inst_79087 = (state_79146[(11)]);
var inst_79088 = (state_79146[(12)]);
var inst_79085 = (state_79146[(8)]);
var inst_79093 = cljs.core._nth(inst_79086,inst_79088);
var inst_79097 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_79098 = [inst_79078,false,false];
var inst_79099 = cljs.core.PersistentHashMap.fromArrays(inst_79097,inst_79098);
var inst_79100 = frontend.handler.editor.api_insert_new_block_BANG_(inst_79093,inst_79099);
var inst_79102 = (inst_79088 + (1));
var tmp79208 = inst_79086;
var tmp79209 = inst_79087;
var tmp79210 = inst_79085;
var inst_79085__$1 = tmp79210;
var inst_79086__$1 = tmp79208;
var inst_79087__$1 = tmp79209;
var inst_79088__$1 = inst_79102;
var state_79146__$1 = (function (){var statearr_79215 = state_79146;
(statearr_79215[(20)] = inst_79100);

(statearr_79215[(14)] = inst_79086__$1);

(statearr_79215[(11)] = inst_79087__$1);

(statearr_79215[(12)] = inst_79088__$1);

(statearr_79215[(8)] = inst_79085__$1);

return statearr_79215;
})();
var statearr_79216_79472 = state_79146__$1;
(statearr_79216_79472[(2)] = null);

(statearr_79216_79472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (16))){
var inst_79143 = (state_79146[(2)]);
var state_79146__$1 = state_79146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79146__$1,inst_79143);
} else {
if((state_val_79147 === (30))){
var state_79146__$1 = state_79146;
var statearr_79217_79473 = state_79146__$1;
(statearr_79217_79473[(2)] = null);

(statearr_79217_79473[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (10))){
var inst_79055 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_79146__$1 = state_79146;
var statearr_79218_79474 = state_79146__$1;
(statearr_79218_79474[(2)] = inst_79055);

(statearr_79218_79474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (18))){
var inst_79078 = (state_79146[(15)]);
var inst_79052 = (state_79146[(19)]);
var inst_79074 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_79075 = [page_name];
var inst_79076 = cljs.core.PersistentHashMap.fromArrays(inst_79074,inst_79075);
var inst_79077 = frontend.handler.editor.api_insert_new_block_BANG_(inst_79052,inst_79076);
var inst_79078__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_79077);
var state_79146__$1 = (function (){var statearr_79219 = state_79146;
(statearr_79219[(15)] = inst_79078__$1);

return statearr_79219;
})();
if(cljs.core.truth_(inst_79078__$1)){
var statearr_79220_79475 = state_79146__$1;
(statearr_79220_79475[(1)] = (21));

} else {
var statearr_79221_79476 = state_79146__$1;
(statearr_79221_79476[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79147 === (8))){
var inst_79058 = (state_79146[(17)]);
var inst_79058__$1 = (state_79146[(2)]);
var state_79146__$1 = (function (){var statearr_79222 = state_79146;
(statearr_79222[(17)] = inst_79058__$1);

return statearr_79222;
})();
if(cljs.core.truth_(inst_79058__$1)){
var statearr_79223_79477 = state_79146__$1;
(statearr_79223_79477[(1)] = (11));

} else {
var statearr_79225_79478 = state_79146__$1;
(statearr_79225_79478[(1)] = (12));

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
var statearr_79243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79243[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__);

(statearr_79243[(1)] = (1));

return statearr_79243;
});
var frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____1 = (function (state_79146){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_79146);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e79249){var ex__41842__auto__ = e79249;
var statearr_79250_79479 = state_79146;
(statearr_79250_79479[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_79146[(4)]))){
var statearr_79251_79480 = state_79146;
(statearr_79251_79480[(1)] = cljs.core.first((state_79146[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79481 = state_79146;
state_79146 = G__79481;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__ = function(state_79146){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____1.call(this,state_79146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_79252 = f__41862__auto__();
(statearr_79252[(6)] = c__41861__auto__);

return statearr_79252;
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
var G__79258 = arguments.length;
switch (G__79258) {
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

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__79260){
var map__79261 = p__79260;
var map__79261__$1 = cljs.core.__destructure_map(map__79261);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79261__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79261__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79261__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_79307){
var state_val_79308 = (state_79307[(1)]);
if((state_val_79308 === (7))){
var inst_79282 = (state_79307[(2)]);
var state_79307__$1 = state_79307;
var statearr_79310_79486 = state_79307__$1;
(statearr_79310_79486[(2)] = inst_79282);

(statearr_79310_79486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (1))){
var inst_79265 = (state_79307[(7)]);
var inst_79264 = (state_79307[(8)]);
var inst_79263 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_79264__$1 = cljs.core.__destructure_map(inst_79263);
var inst_79265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79264__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_79266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79264__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_79267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79264__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_79268 = clojure.string.lower_case(inst_79265__$1);
var inst_79269 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_79268) : frontend.db.page_exists_QMARK_.call(null,inst_79268));
var state_79307__$1 = (function (){var statearr_79312 = state_79307;
(statearr_79312[(7)] = inst_79265__$1);

(statearr_79312[(8)] = inst_79264__$1);

(statearr_79312[(9)] = inst_79267);

(statearr_79312[(10)] = inst_79266);

return statearr_79312;
})();
if(cljs.core.truth_(inst_79269)){
var statearr_79313_79488 = state_79307__$1;
(statearr_79313_79488[(1)] = (2));

} else {
var statearr_79314_79489 = state_79307__$1;
(statearr_79314_79489[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (4))){
var inst_79265 = (state_79307[(7)]);
var inst_79267 = (state_79307[(9)]);
var inst_79286 = (state_79307[(2)]);
var inst_79287 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_79265,inst_79267);
var inst_79288 = frontend.extensions.zotero.handler.add(inst_79265,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_79307__$1 = (function (){var statearr_79315 = state_79307;
(statearr_79315[(11)] = inst_79287);

(statearr_79315[(12)] = inst_79286);

return statearr_79315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79307__$1,(8),inst_79288);
} else {
if((state_val_79308 === (15))){
var inst_79305 = (state_79307[(2)]);
var state_79307__$1 = state_79307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79307__$1,inst_79305);
} else {
if((state_val_79308 === (13))){
var inst_79265 = (state_79307[(7)]);
var inst_79301 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_79265)].join('');
var inst_79302 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_79301,new cljs.core.Keyword(null,"success","success",1890645906));
var state_79307__$1 = state_79307;
var statearr_79316_79490 = state_79307__$1;
(statearr_79316_79490[(2)] = inst_79302);

(statearr_79316_79490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (6))){
var inst_79265 = (state_79307[(7)]);
var inst_79266 = (state_79307[(10)]);
var inst_79277 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_79278 = [inst_79265,inst_79266];
var inst_79279 = cljs.core.PersistentHashMap.fromArrays(inst_79277,inst_79278);
var inst_79280 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_79279);
var state_79307__$1 = state_79307;
var statearr_79317_79491 = state_79307__$1;
(statearr_79317_79491[(2)] = inst_79280);

(statearr_79317_79491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (3))){
var inst_79265 = (state_79307[(7)]);
var inst_79266 = (state_79307[(10)]);
var inst_79284 = frontend.extensions.zotero.handler.create_page(inst_79265,inst_79266);
var state_79307__$1 = state_79307;
var statearr_79318_79492 = state_79307__$1;
(statearr_79318_79492[(2)] = inst_79284);

(statearr_79318_79492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (12))){
var inst_79299 = (state_79307[(2)]);
var state_79307__$1 = (function (){var statearr_79319 = state_79307;
(statearr_79319[(13)] = inst_79299);

return statearr_79319;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_79320_79493 = state_79307__$1;
(statearr_79320_79493[(1)] = (13));

} else {
var statearr_79321_79494 = state_79307__$1;
(statearr_79321_79494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (2))){
var inst_79271 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_79307__$1 = state_79307;
if(cljs.core.truth_(inst_79271)){
var statearr_79322_79495 = state_79307__$1;
(statearr_79322_79495[(1)] = (5));

} else {
var statearr_79323_79496 = state_79307__$1;
(statearr_79323_79496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (11))){
var state_79307__$1 = state_79307;
var statearr_79324_79497 = state_79307__$1;
(statearr_79324_79497[(2)] = null);

(statearr_79324_79497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (9))){
var inst_79293 = (state_79307[(2)]);
var state_79307__$1 = (function (){var statearr_79325 = state_79307;
(statearr_79325[(14)] = inst_79293);

return statearr_79325;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_79326_79498 = state_79307__$1;
(statearr_79326_79498[(1)] = (10));

} else {
var statearr_79327_79499 = state_79307__$1;
(statearr_79327_79499[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (5))){
var inst_79265 = (state_79307[(7)]);
var inst_79264 = (state_79307[(8)]);
var inst_79267 = (state_79307[(9)]);
var inst_79266 = (state_79307[(10)]);
var inst_79273 = (function (){var map__79262 = inst_79264;
var page_name = inst_79265;
var properties = inst_79266;
var abstract_note = inst_79267;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_79274 = frontend.handler.page.delete_BANG_(inst_79265,inst_79273);
var state_79307__$1 = state_79307;
var statearr_79328_79500 = state_79307__$1;
(statearr_79328_79500[(2)] = inst_79274);

(statearr_79328_79500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (14))){
var state_79307__$1 = state_79307;
var statearr_79329_79501 = state_79307__$1;
(statearr_79329_79501[(2)] = null);

(statearr_79329_79501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (10))){
var inst_79265 = (state_79307[(7)]);
var inst_79295 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_79265);
var inst_79296 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_79307__$1 = (function (){var statearr_79330 = state_79307;
(statearr_79330[(15)] = inst_79295);

return statearr_79330;
})();
var statearr_79331_79502 = state_79307__$1;
(statearr_79331_79502[(2)] = inst_79296);

(statearr_79331_79502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79308 === (8))){
var inst_79265 = (state_79307[(7)]);
var inst_79290 = (state_79307[(2)]);
var inst_79291 = frontend.extensions.zotero.handler.add(inst_79265,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_79307__$1 = (function (){var statearr_79332 = state_79307;
(statearr_79332[(16)] = inst_79290);

return statearr_79332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79307__$1,(9),inst_79291);
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
var statearr_79333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79333[(0)] = frontend$extensions$zotero$handler$state_machine__41839__auto__);

(statearr_79333[(1)] = (1));

return statearr_79333;
});
var frontend$extensions$zotero$handler$state_machine__41839__auto____1 = (function (state_79307){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_79307);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e79334){var ex__41842__auto__ = e79334;
var statearr_79335_79503 = state_79307;
(statearr_79335_79503[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_79307[(4)]))){
var statearr_79336_79504 = state_79307;
(statearr_79336_79504[(1)] = cljs.core.first((state_79307[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79505 = state_79307;
state_79307 = G__79505;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__41839__auto__ = function(state_79307){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__41839__auto____1.call(this,state_79307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__41839__auto____0;
frontend$extensions$zotero$handler$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__41839__auto____1;
return frontend$extensions$zotero$handler$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_79337 = f__41862__auto__();
(statearr_79337[(6)] = c__41861__auto__);

return statearr_79337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_79395){
var state_val_79396 = (state_79395[(1)]);
if((state_val_79396 === (7))){
var inst_79391 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
var statearr_79397_79506 = state_79395__$1;
(statearr_79397_79506[(2)] = inst_79391);

(statearr_79397_79506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (1))){
var inst_79338 = frontend.extensions.zotero.api.all_top_items();
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79395__$1,(2),inst_79338);
} else {
if((state_val_79396 === (4))){
var inst_79393 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79395__$1,inst_79393);
} else {
if((state_val_79396 === (15))){
var inst_79366 = (state_79395[(7)]);
var inst_79381 = (state_79395[(2)]);
var inst_79382 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_79383 = cljs.core.next(inst_79366);
var inst_79347 = inst_79383;
var inst_79348 = null;
var inst_79349 = (0);
var inst_79350 = (0);
var state_79395__$1 = (function (){var statearr_79398 = state_79395;
(statearr_79398[(8)] = inst_79350);

(statearr_79398[(9)] = inst_79381);

(statearr_79398[(10)] = inst_79349);

(statearr_79398[(11)] = inst_79347);

(statearr_79398[(12)] = inst_79382);

(statearr_79398[(13)] = inst_79348);

return statearr_79398;
})();
var statearr_79399_79507 = state_79395__$1;
(statearr_79399_79507[(2)] = null);

(statearr_79399_79507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (13))){
var inst_79366 = (state_79395[(7)]);
var inst_79375 = cljs.core.first(inst_79366);
var inst_79376 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_79377 = [false,false];
var inst_79378 = cljs.core.PersistentHashMap.fromArrays(inst_79376,inst_79377);
var inst_79379 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_79375,inst_79378);
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79395__$1,(15),inst_79379);
} else {
if((state_val_79396 === (6))){
var inst_79347 = (state_79395[(11)]);
var inst_79366 = (state_79395[(7)]);
var inst_79366__$1 = cljs.core.seq(inst_79347);
var state_79395__$1 = (function (){var statearr_79400 = state_79395;
(statearr_79400[(7)] = inst_79366__$1);

return statearr_79400;
})();
if(inst_79366__$1){
var statearr_79401_79508 = state_79395__$1;
(statearr_79401_79508[(1)] = (9));

} else {
var statearr_79402_79509 = state_79395__$1;
(statearr_79402_79509[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (3))){
var inst_79350 = (state_79395[(8)]);
var inst_79349 = (state_79395[(10)]);
var inst_79352 = (inst_79350 < inst_79349);
var inst_79353 = inst_79352;
var state_79395__$1 = state_79395;
if(cljs.core.truth_(inst_79353)){
var statearr_79403_79510 = state_79395__$1;
(statearr_79403_79510[(1)] = (5));

} else {
var statearr_79404_79511 = state_79395__$1;
(statearr_79404_79511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (12))){
var inst_79366 = (state_79395[(7)]);
var inst_79370 = cljs.core.chunk_first(inst_79366);
var inst_79371 = cljs.core.chunk_rest(inst_79366);
var inst_79372 = cljs.core.count(inst_79370);
var inst_79347 = inst_79371;
var inst_79348 = inst_79370;
var inst_79349 = inst_79372;
var inst_79350 = (0);
var state_79395__$1 = (function (){var statearr_79406 = state_79395;
(statearr_79406[(8)] = inst_79350);

(statearr_79406[(10)] = inst_79349);

(statearr_79406[(11)] = inst_79347);

(statearr_79406[(13)] = inst_79348);

return statearr_79406;
})();
var statearr_79407_79512 = state_79395__$1;
(statearr_79407_79512[(2)] = null);

(statearr_79407_79512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (2))){
var inst_79340 = (state_79395[(2)]);
var inst_79341 = cljs.core.reset_BANG_(progress,(30));
var inst_79346 = cljs.core.seq(inst_79340);
var inst_79347 = inst_79346;
var inst_79348 = null;
var inst_79349 = (0);
var inst_79350 = (0);
var state_79395__$1 = (function (){var statearr_79408 = state_79395;
(statearr_79408[(8)] = inst_79350);

(statearr_79408[(10)] = inst_79349);

(statearr_79408[(11)] = inst_79347);

(statearr_79408[(13)] = inst_79348);

(statearr_79408[(14)] = inst_79341);

return statearr_79408;
})();
var statearr_79409_79513 = state_79395__$1;
(statearr_79409_79513[(2)] = null);

(statearr_79409_79513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (11))){
var inst_79389 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
var statearr_79410_79514 = state_79395__$1;
(statearr_79410_79514[(2)] = inst_79389);

(statearr_79410_79514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (9))){
var inst_79366 = (state_79395[(7)]);
var inst_79368 = cljs.core.chunked_seq_QMARK_(inst_79366);
var state_79395__$1 = state_79395;
if(inst_79368){
var statearr_79411_79515 = state_79395__$1;
(statearr_79411_79515[(1)] = (12));

} else {
var statearr_79412_79516 = state_79395__$1;
(statearr_79412_79516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (5))){
var inst_79350 = (state_79395[(8)]);
var inst_79348 = (state_79395[(13)]);
var inst_79355 = cljs.core._nth(inst_79348,inst_79350);
var inst_79356 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_79357 = [false,false];
var inst_79358 = cljs.core.PersistentHashMap.fromArrays(inst_79356,inst_79357);
var inst_79359 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_79355,inst_79358);
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79395__$1,(8),inst_79359);
} else {
if((state_val_79396 === (14))){
var inst_79386 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
var statearr_79416_79517 = state_79395__$1;
(statearr_79416_79517[(2)] = inst_79386);

(statearr_79416_79517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (10))){
var state_79395__$1 = state_79395;
var statearr_79417_79518 = state_79395__$1;
(statearr_79417_79518[(2)] = null);

(statearr_79417_79518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (8))){
var inst_79350 = (state_79395[(8)]);
var inst_79349 = (state_79395[(10)]);
var inst_79347 = (state_79395[(11)]);
var inst_79348 = (state_79395[(13)]);
var inst_79361 = (state_79395[(2)]);
var inst_79362 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_79363 = (inst_79350 + (1));
var tmp79413 = inst_79349;
var tmp79414 = inst_79347;
var tmp79415 = inst_79348;
var inst_79347__$1 = tmp79414;
var inst_79348__$1 = tmp79415;
var inst_79349__$1 = tmp79413;
var inst_79350__$1 = inst_79363;
var state_79395__$1 = (function (){var statearr_79418 = state_79395;
(statearr_79418[(8)] = inst_79350__$1);

(statearr_79418[(15)] = inst_79362);

(statearr_79418[(10)] = inst_79349__$1);

(statearr_79418[(11)] = inst_79347__$1);

(statearr_79418[(16)] = inst_79361);

(statearr_79418[(13)] = inst_79348__$1);

return statearr_79418;
})();
var statearr_79419_79519 = state_79395__$1;
(statearr_79419_79519[(2)] = null);

(statearr_79419_79519[(1)] = (3));


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
var statearr_79420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79420[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__);

(statearr_79420[(1)] = (1));

return statearr_79420;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____1 = (function (state_79395){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_79395);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e79421){var ex__41842__auto__ = e79421;
var statearr_79422_79520 = state_79395;
(statearr_79422_79520[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_79395[(4)]))){
var statearr_79423_79521 = state_79395;
(statearr_79423_79521[(1)] = cljs.core.first((state_79395[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79522 = state_79395;
state_79395 = G__79522;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__ = function(state_79395){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____1.call(this,state_79395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_79424 = f__41862__auto__();
(statearr_79424[(6)] = c__41861__auto__);

return statearr_79424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
