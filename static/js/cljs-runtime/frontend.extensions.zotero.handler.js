goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58017){
var state_val_58018 = (state_58017[(1)]);
if((state_val_58018 === (7))){
var inst_57932 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_58017__$1 = state_58017;
var statearr_58019_58252 = state_58017__$1;
(statearr_58019_58252[(2)] = inst_57932);

(statearr_58019_58252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (20))){
var inst_58012 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58020_58253 = state_58017__$1;
(statearr_58020_58253[(2)] = inst_58012);

(statearr_58020_58253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (27))){
var inst_57966 = (state_58017[(7)]);
var inst_57982 = (state_58017[(8)]);
var inst_57982__$1 = cljs.core.seq(inst_57966);
var state_58017__$1 = (function (){var statearr_58021 = state_58017;
(statearr_58021[(8)] = inst_57982__$1);

return statearr_58021;
})();
if(inst_57982__$1){
var statearr_58022_58254 = state_58017__$1;
(statearr_58022_58254[(1)] = (29));

} else {
var statearr_58023_58255 = state_58017__$1;
(statearr_58023_58255[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (1))){
var inst_57923 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_57924 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_57925 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_57924);
var state_58017__$1 = (function (){var statearr_58024 = state_58017;
(statearr_58024[(9)] = inst_57923);

(statearr_58024[(10)] = inst_57925);

return statearr_58024;
})();
var G__58025_58256 = type;
var G__58025_58257__$1 = (((G__58025_58256 instanceof cljs.core.Keyword))?G__58025_58256.fqn:null);
switch (G__58025_58257__$1) {
case "notes":
var statearr_58026_58259 = state_58017__$1;
(statearr_58026_58259[(1)] = (3));


break;
case "attachments":
var statearr_58027_58260 = state_58017__$1;
(statearr_58027_58260[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58025_58257__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (24))){
var inst_57969 = (state_58017[(11)]);
var inst_57968 = (state_58017[(12)]);
var inst_57971 = (inst_57969 < inst_57968);
var inst_57972 = inst_57971;
var state_58017__$1 = state_58017;
if(cljs.core.truth_(inst_57972)){
var statearr_58028_58261 = state_58017__$1;
(statearr_58028_58261[(1)] = (26));

} else {
var statearr_58029_58262 = state_58017__$1;
(statearr_58029_58262[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (4))){
var state_58017__$1 = state_58017;
var statearr_58030_58263 = state_58017__$1;
(statearr_58030_58263[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_58030_58263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (15))){
var state_58017__$1 = state_58017;
var statearr_58031_58264 = state_58017__$1;
(statearr_58031_58264[(2)] = null);

(statearr_58031_58264[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (21))){
var inst_57952 = (state_58017[(13)]);
var inst_57965 = cljs.core.seq(inst_57952);
var inst_57966 = inst_57965;
var inst_57967 = null;
var inst_57968 = (0);
var inst_57969 = (0);
var state_58017__$1 = (function (){var statearr_58032 = state_58017;
(statearr_58032[(7)] = inst_57966);

(statearr_58032[(11)] = inst_57969);

(statearr_58032[(14)] = inst_57967);

(statearr_58032[(12)] = inst_57968);

return statearr_58032;
})();
var statearr_58033_58265 = state_58017__$1;
(statearr_58033_58265[(2)] = null);

(statearr_58033_58265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (31))){
var inst_58002 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58034_58266 = state_58017__$1;
(statearr_58034_58266[(2)] = inst_58002);

(statearr_58034_58266[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (32))){
var inst_57982 = (state_58017[(8)]);
var inst_57986 = cljs.core.chunk_first(inst_57982);
var inst_57987 = cljs.core.chunk_rest(inst_57982);
var inst_57988 = cljs.core.count(inst_57986);
var inst_57966 = inst_57987;
var inst_57967 = inst_57986;
var inst_57968 = inst_57988;
var inst_57969 = (0);
var state_58017__$1 = (function (){var statearr_58035 = state_58017;
(statearr_58035[(7)] = inst_57966);

(statearr_58035[(11)] = inst_57969);

(statearr_58035[(14)] = inst_57967);

(statearr_58035[(12)] = inst_57968);

return statearr_58035;
})();
var statearr_58036_58267 = state_58017__$1;
(statearr_58036_58267[(2)] = null);

(statearr_58036_58267[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (33))){
var inst_57982 = (state_58017[(8)]);
var inst_57959 = (state_58017[(15)]);
var inst_57991 = cljs.core.first(inst_57982);
var inst_57992 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_57993 = [inst_57959,false,false];
var inst_57994 = cljs.core.PersistentHashMap.fromArrays(inst_57992,inst_57993);
var inst_57995 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57991,inst_57994);
var inst_57996 = cljs.core.next(inst_57982);
var inst_57966 = inst_57996;
var inst_57967 = null;
var inst_57968 = (0);
var inst_57969 = (0);
var state_58017__$1 = (function (){var statearr_58037 = state_58017;
(statearr_58037[(7)] = inst_57966);

(statearr_58037[(11)] = inst_57969);

(statearr_58037[(16)] = inst_57995);

(statearr_58037[(14)] = inst_57967);

(statearr_58037[(12)] = inst_57968);

return statearr_58037;
})();
var statearr_58038_58268 = state_58017__$1;
(statearr_58038_58268[(2)] = null);

(statearr_58038_58268[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (13))){
var inst_57946 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
if(cljs.core.truth_(inst_57946)){
var statearr_58039_58269 = state_58017__$1;
(statearr_58039_58269[(1)] = (14));

} else {
var statearr_58040_58270 = state_58017__$1;
(statearr_58040_58270[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (22))){
var state_58017__$1 = state_58017;
var statearr_58041_58271 = state_58017__$1;
(statearr_58041_58271[(2)] = null);

(statearr_58041_58271[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (29))){
var inst_57982 = (state_58017[(8)]);
var inst_57984 = cljs.core.chunked_seq_QMARK_(inst_57982);
var state_58017__$1 = state_58017;
if(inst_57984){
var statearr_58042_58272 = state_58017__$1;
(statearr_58042_58272[(1)] = (32));

} else {
var statearr_58043_58273 = state_58017__$1;
(statearr_58043_58273[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (6))){
var inst_57930 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_58017__$1 = state_58017;
var statearr_58044_58274 = state_58017__$1;
(statearr_58044_58274[(2)] = inst_57930);

(statearr_58044_58274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (28))){
var inst_58004 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58045_58275 = state_58017__$1;
(statearr_58045_58275[(2)] = inst_58004);

(statearr_58045_58275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (25))){
var inst_58006 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58046_58276 = state_58017__$1;
(statearr_58046_58276[(2)] = inst_58006);

(statearr_58046_58276[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (34))){
var inst_57999 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58047_58277 = state_58017__$1;
(statearr_58047_58277[(2)] = inst_57999);

(statearr_58047_58277[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (17))){
var inst_57952 = (state_58017[(13)]);
var inst_57950 = (state_58017[(2)]);
var inst_57951 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_57950);
var inst_57952__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_57951);
var inst_57953 = cljs.core.not_empty(inst_57952__$1);
var state_58017__$1 = (function (){var statearr_58048 = state_58017;
(statearr_58048[(13)] = inst_57952__$1);

return statearr_58048;
})();
if(cljs.core.truth_(inst_57953)){
var statearr_58049_58278 = state_58017__$1;
(statearr_58049_58278[(1)] = (18));

} else {
var statearr_58050_58279 = state_58017__$1;
(statearr_58050_58279[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (3))){
var state_58017__$1 = state_58017;
var statearr_58051_58280 = state_58017__$1;
(statearr_58051_58280[(2)] = frontend.extensions.zotero.api.notes);

(statearr_58051_58280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (12))){
var inst_57941 = (state_58017[(17)]);
var state_58017__$1 = state_58017;
var statearr_58052_58281 = state_58017__$1;
(statearr_58052_58281[(2)] = inst_57941);

(statearr_58052_58281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (2))){
var inst_57929 = (state_58017[(2)]);
var state_58017__$1 = (function (){var statearr_58053 = state_58017;
(statearr_58053[(18)] = inst_57929);

return statearr_58053;
})();
var G__58054_58282 = type;
var G__58054_58283__$1 = (((G__58054_58282 instanceof cljs.core.Keyword))?G__58054_58282.fqn:null);
switch (G__58054_58283__$1) {
case "notes":
var statearr_58055_58285 = state_58017__$1;
(statearr_58055_58285[(1)] = (6));


break;
case "attachments":
var statearr_58056_58286 = state_58017__$1;
(statearr_58056_58286[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58054_58283__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (23))){
var inst_58009 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
var statearr_58057_58287 = state_58017__$1;
(statearr_58057_58287[(2)] = inst_58009);

(statearr_58057_58287[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (19))){
var state_58017__$1 = state_58017;
var statearr_58058_58288 = state_58017__$1;
(statearr_58058_58288[(2)] = null);

(statearr_58058_58288[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (11))){
var inst_57925 = (state_58017[(10)]);
var inst_57943 = (inst_57925 > (0));
var state_58017__$1 = state_58017;
var statearr_58059_58289 = state_58017__$1;
(statearr_58059_58289[(2)] = inst_57943);

(statearr_58059_58289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (9))){
var inst_57936 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_58017__$1 = state_58017;
var statearr_58060_58290 = state_58017__$1;
(statearr_58060_58290[(2)] = inst_57936);

(statearr_58060_58290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (5))){
var inst_57935 = (state_58017[(2)]);
var state_58017__$1 = (function (){var statearr_58064 = state_58017;
(statearr_58064[(19)] = inst_57935);

return statearr_58064;
})();
var G__58065_58291 = type;
var G__58065_58292__$1 = (((G__58065_58291 instanceof cljs.core.Keyword))?G__58065_58291.fqn:null);
switch (G__58065_58292__$1) {
case "notes":
var statearr_58066_58294 = state_58017__$1;
(statearr_58066_58294[(1)] = (9));


break;
case "attachments":
var statearr_58067_58295 = state_58017__$1;
(statearr_58067_58295[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58065_58292__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (14))){
var inst_57929 = (state_58017[(18)]);
var inst_57923 = (state_58017[(9)]);
var inst_57948 = (inst_57929.cljs$core$IFn$_invoke$arity$1 ? inst_57929.cljs$core$IFn$_invoke$arity$1(inst_57923) : inst_57929.call(null,inst_57923));
var state_58017__$1 = state_58017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58017__$1,(17),inst_57948);
} else {
if((state_val_58018 === (26))){
var inst_57966 = (state_58017[(7)]);
var inst_57969 = (state_58017[(11)]);
var inst_57967 = (state_58017[(14)]);
var inst_57959 = (state_58017[(15)]);
var inst_57968 = (state_58017[(12)]);
var inst_57974 = cljs.core._nth(inst_57967,inst_57969);
var inst_57975 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_57976 = [inst_57959,false,false];
var inst_57977 = cljs.core.PersistentHashMap.fromArrays(inst_57975,inst_57976);
var inst_57978 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57974,inst_57977);
var inst_57979 = (inst_57969 + (1));
var tmp58061 = inst_57966;
var tmp58062 = inst_57967;
var tmp58063 = inst_57968;
var inst_57966__$1 = tmp58061;
var inst_57967__$1 = tmp58062;
var inst_57968__$1 = tmp58063;
var inst_57969__$1 = inst_57979;
var state_58017__$1 = (function (){var statearr_58068 = state_58017;
(statearr_58068[(7)] = inst_57966__$1);

(statearr_58068[(11)] = inst_57969__$1);

(statearr_58068[(20)] = inst_57978);

(statearr_58068[(14)] = inst_57967__$1);

(statearr_58068[(12)] = inst_57968__$1);

return statearr_58068;
})();
var statearr_58069_58296 = state_58017__$1;
(statearr_58069_58296[(2)] = null);

(statearr_58069_58296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (16))){
var inst_58015 = (state_58017[(2)]);
var state_58017__$1 = state_58017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58017__$1,inst_58015);
} else {
if((state_val_58018 === (30))){
var state_58017__$1 = state_58017;
var statearr_58070_58297 = state_58017__$1;
(statearr_58070_58297[(2)] = null);

(statearr_58070_58297[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (10))){
var inst_57938 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_58017__$1 = state_58017;
var statearr_58071_58298 = state_58017__$1;
(statearr_58071_58298[(2)] = inst_57938);

(statearr_58071_58298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (18))){
var inst_57935 = (state_58017[(19)]);
var inst_57959 = (state_58017[(15)]);
var inst_57955 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_57956 = [page_name];
var inst_57957 = cljs.core.PersistentHashMap.fromArrays(inst_57955,inst_57956);
var inst_57958 = frontend.handler.editor.api_insert_new_block_BANG_(inst_57935,inst_57957);
var inst_57959__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_57958);
var state_58017__$1 = (function (){var statearr_58072 = state_58017;
(statearr_58072[(15)] = inst_57959__$1);

return statearr_58072;
})();
if(cljs.core.truth_(inst_57959__$1)){
var statearr_58073_58299 = state_58017__$1;
(statearr_58073_58299[(1)] = (21));

} else {
var statearr_58074_58300 = state_58017__$1;
(statearr_58074_58300[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58018 === (8))){
var inst_57941 = (state_58017[(17)]);
var inst_57941__$1 = (state_58017[(2)]);
var state_58017__$1 = (function (){var statearr_58075 = state_58017;
(statearr_58075[(17)] = inst_57941__$1);

return statearr_58075;
})();
if(cljs.core.truth_(inst_57941__$1)){
var statearr_58076_58301 = state_58017__$1;
(statearr_58076_58301[(1)] = (11));

} else {
var statearr_58077_58302 = state_58017__$1;
(statearr_58077_58302[(1)] = (12));

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
var statearr_58078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58078[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__);

(statearr_58078[(1)] = (1));

return statearr_58078;
});
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1 = (function (state_58017){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58017);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58079){var ex__27576__auto__ = e58079;
var statearr_58080_58303 = state_58017;
(statearr_58080_58303[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58017[(4)]))){
var statearr_58081_58304 = state_58017;
(statearr_58081_58304[(1)] = cljs.core.first((state_58017[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58305 = state_58017;
state_58017 = G__58305;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__ = function(state_58017){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1.call(this,state_58017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58082 = f__27596__auto__();
(statearr_58082[(6)] = c__27595__auto__);

return statearr_58082;
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
var G__58085 = arguments.length;
switch (G__58085) {
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

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__58086){
var map__58087 = p__58086;
var map__58087__$1 = cljs.core.__destructure_map(map__58087);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58087__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58087__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58087__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58134){
var state_val_58135 = (state_58134[(1)]);
if((state_val_58135 === (7))){
var inst_58109 = (state_58134[(2)]);
var state_58134__$1 = state_58134;
var statearr_58139_58307 = state_58134__$1;
(statearr_58139_58307[(2)] = inst_58109);

(statearr_58139_58307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (1))){
var inst_58092 = (state_58134[(7)]);
var inst_58093 = (state_58134[(8)]);
var inst_58091 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_58092__$1 = cljs.core.__destructure_map(inst_58091);
var inst_58093__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58092__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_58094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58092__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_58095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58092__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_58096 = clojure.string.lower_case(inst_58093__$1);
var inst_58097 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_58096) : frontend.db.page_exists_QMARK_.call(null,inst_58096));
var state_58134__$1 = (function (){var statearr_58140 = state_58134;
(statearr_58140[(9)] = inst_58095);

(statearr_58140[(10)] = inst_58094);

(statearr_58140[(7)] = inst_58092__$1);

(statearr_58140[(8)] = inst_58093__$1);

return statearr_58140;
})();
if(cljs.core.truth_(inst_58097)){
var statearr_58141_58308 = state_58134__$1;
(statearr_58141_58308[(1)] = (2));

} else {
var statearr_58142_58309 = state_58134__$1;
(statearr_58142_58309[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (4))){
var inst_58095 = (state_58134[(9)]);
var inst_58093 = (state_58134[(8)]);
var inst_58113 = (state_58134[(2)]);
var inst_58114 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_58093,inst_58095);
var inst_58115 = frontend.extensions.zotero.handler.add(inst_58093,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_58134__$1 = (function (){var statearr_58143 = state_58134;
(statearr_58143[(11)] = inst_58114);

(statearr_58143[(12)] = inst_58113);

return statearr_58143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58134__$1,(8),inst_58115);
} else {
if((state_val_58135 === (15))){
var inst_58132 = (state_58134[(2)]);
var state_58134__$1 = state_58134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58134__$1,inst_58132);
} else {
if((state_val_58135 === (13))){
var inst_58093 = (state_58134[(8)]);
var inst_58128 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58093)].join('');
var inst_58129 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58128,new cljs.core.Keyword(null,"success","success",1890645906));
var state_58134__$1 = state_58134;
var statearr_58144_58310 = state_58134__$1;
(statearr_58144_58310[(2)] = inst_58129);

(statearr_58144_58310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (6))){
var inst_58094 = (state_58134[(10)]);
var inst_58093 = (state_58134[(8)]);
var inst_58104 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_58105 = [inst_58093,inst_58094];
var inst_58106 = cljs.core.PersistentHashMap.fromArrays(inst_58104,inst_58105);
var inst_58107 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_58106);
var state_58134__$1 = state_58134;
var statearr_58145_58311 = state_58134__$1;
(statearr_58145_58311[(2)] = inst_58107);

(statearr_58145_58311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (3))){
var inst_58094 = (state_58134[(10)]);
var inst_58093 = (state_58134[(8)]);
var inst_58111 = frontend.extensions.zotero.handler.create_page(inst_58093,inst_58094);
var state_58134__$1 = state_58134;
var statearr_58146_58312 = state_58134__$1;
(statearr_58146_58312[(2)] = inst_58111);

(statearr_58146_58312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (12))){
var inst_58126 = (state_58134[(2)]);
var state_58134__$1 = (function (){var statearr_58147 = state_58134;
(statearr_58147[(13)] = inst_58126);

return statearr_58147;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_58148_58313 = state_58134__$1;
(statearr_58148_58313[(1)] = (13));

} else {
var statearr_58149_58314 = state_58134__$1;
(statearr_58149_58314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (2))){
var inst_58099 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_58134__$1 = state_58134;
if(cljs.core.truth_(inst_58099)){
var statearr_58150_58315 = state_58134__$1;
(statearr_58150_58315[(1)] = (5));

} else {
var statearr_58151_58316 = state_58134__$1;
(statearr_58151_58316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (11))){
var state_58134__$1 = state_58134;
var statearr_58152_58317 = state_58134__$1;
(statearr_58152_58317[(2)] = null);

(statearr_58152_58317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (9))){
var inst_58120 = (state_58134[(2)]);
var state_58134__$1 = (function (){var statearr_58153 = state_58134;
(statearr_58153[(14)] = inst_58120);

return statearr_58153;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_58154_58318 = state_58134__$1;
(statearr_58154_58318[(1)] = (10));

} else {
var statearr_58155_58319 = state_58134__$1;
(statearr_58155_58319[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (5))){
var inst_58095 = (state_58134[(9)]);
var inst_58094 = (state_58134[(10)]);
var inst_58092 = (state_58134[(7)]);
var inst_58093 = (state_58134[(8)]);
var inst_58101 = (function (){var map__58090 = inst_58092;
var page_name = inst_58093;
var properties = inst_58094;
var abstract_note = inst_58095;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_58102 = frontend.handler.page.delete_BANG_(inst_58093,inst_58101);
var state_58134__$1 = state_58134;
var statearr_58156_58320 = state_58134__$1;
(statearr_58156_58320[(2)] = inst_58102);

(statearr_58156_58320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (14))){
var state_58134__$1 = state_58134;
var statearr_58157_58321 = state_58134__$1;
(statearr_58157_58321[(2)] = null);

(statearr_58157_58321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (10))){
var inst_58093 = (state_58134[(8)]);
var inst_58122 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_58093);
var inst_58123 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_58134__$1 = (function (){var statearr_58158 = state_58134;
(statearr_58158[(15)] = inst_58122);

return statearr_58158;
})();
var statearr_58159_58322 = state_58134__$1;
(statearr_58159_58322[(2)] = inst_58123);

(statearr_58159_58322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58135 === (8))){
var inst_58093 = (state_58134[(8)]);
var inst_58117 = (state_58134[(2)]);
var inst_58118 = frontend.extensions.zotero.handler.add(inst_58093,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_58134__$1 = (function (){var statearr_58160 = state_58134;
(statearr_58160[(16)] = inst_58117);

return statearr_58160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58134__$1,(9),inst_58118);
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
var statearr_58161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58161[(0)] = frontend$extensions$zotero$handler$state_machine__27573__auto__);

(statearr_58161[(1)] = (1));

return statearr_58161;
});
var frontend$extensions$zotero$handler$state_machine__27573__auto____1 = (function (state_58134){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58134);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58162){var ex__27576__auto__ = e58162;
var statearr_58163_58323 = state_58134;
(statearr_58163_58323[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58134[(4)]))){
var statearr_58164_58324 = state_58134;
(statearr_58164_58324[(1)] = cljs.core.first((state_58134[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58325 = state_58134;
state_58134 = G__58325;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__27573__auto__ = function(state_58134){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__27573__auto____1.call(this,state_58134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__27573__auto____0;
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58165 = f__27596__auto__();
(statearr_58165[(6)] = c__27595__auto__);

return statearr_58165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_58223){
var state_val_58224 = (state_58223[(1)]);
if((state_val_58224 === (7))){
var inst_58219 = (state_58223[(2)]);
var state_58223__$1 = state_58223;
var statearr_58225_58326 = state_58223__$1;
(statearr_58225_58326[(2)] = inst_58219);

(statearr_58225_58326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (1))){
var inst_58166 = frontend.extensions.zotero.api.all_top_items();
var state_58223__$1 = state_58223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58223__$1,(2),inst_58166);
} else {
if((state_val_58224 === (4))){
var inst_58221 = (state_58223[(2)]);
var state_58223__$1 = state_58223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58223__$1,inst_58221);
} else {
if((state_val_58224 === (15))){
var inst_58194 = (state_58223[(7)]);
var inst_58209 = (state_58223[(2)]);
var inst_58210 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_58211 = cljs.core.next(inst_58194);
var inst_58175 = inst_58211;
var inst_58176 = null;
var inst_58177 = (0);
var inst_58178 = (0);
var state_58223__$1 = (function (){var statearr_58226 = state_58223;
(statearr_58226[(8)] = inst_58176);

(statearr_58226[(9)] = inst_58209);

(statearr_58226[(10)] = inst_58177);

(statearr_58226[(11)] = inst_58175);

(statearr_58226[(12)] = inst_58210);

(statearr_58226[(13)] = inst_58178);

return statearr_58226;
})();
var statearr_58227_58327 = state_58223__$1;
(statearr_58227_58327[(2)] = null);

(statearr_58227_58327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (13))){
var inst_58194 = (state_58223[(7)]);
var inst_58203 = cljs.core.first(inst_58194);
var inst_58204 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_58205 = [false,false];
var inst_58206 = cljs.core.PersistentHashMap.fromArrays(inst_58204,inst_58205);
var inst_58207 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_58203,inst_58206);
var state_58223__$1 = state_58223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58223__$1,(15),inst_58207);
} else {
if((state_val_58224 === (6))){
var inst_58175 = (state_58223[(11)]);
var inst_58194 = (state_58223[(7)]);
var inst_58194__$1 = cljs.core.seq(inst_58175);
var state_58223__$1 = (function (){var statearr_58228 = state_58223;
(statearr_58228[(7)] = inst_58194__$1);

return statearr_58228;
})();
if(inst_58194__$1){
var statearr_58229_58328 = state_58223__$1;
(statearr_58229_58328[(1)] = (9));

} else {
var statearr_58230_58329 = state_58223__$1;
(statearr_58230_58329[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (3))){
var inst_58177 = (state_58223[(10)]);
var inst_58178 = (state_58223[(13)]);
var inst_58180 = (inst_58178 < inst_58177);
var inst_58181 = inst_58180;
var state_58223__$1 = state_58223;
if(cljs.core.truth_(inst_58181)){
var statearr_58231_58330 = state_58223__$1;
(statearr_58231_58330[(1)] = (5));

} else {
var statearr_58232_58331 = state_58223__$1;
(statearr_58232_58331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (12))){
var inst_58194 = (state_58223[(7)]);
var inst_58198 = cljs.core.chunk_first(inst_58194);
var inst_58199 = cljs.core.chunk_rest(inst_58194);
var inst_58200 = cljs.core.count(inst_58198);
var inst_58175 = inst_58199;
var inst_58176 = inst_58198;
var inst_58177 = inst_58200;
var inst_58178 = (0);
var state_58223__$1 = (function (){var statearr_58233 = state_58223;
(statearr_58233[(8)] = inst_58176);

(statearr_58233[(10)] = inst_58177);

(statearr_58233[(11)] = inst_58175);

(statearr_58233[(13)] = inst_58178);

return statearr_58233;
})();
var statearr_58234_58332 = state_58223__$1;
(statearr_58234_58332[(2)] = null);

(statearr_58234_58332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (2))){
var inst_58168 = (state_58223[(2)]);
var inst_58169 = cljs.core.reset_BANG_(progress,(30));
var inst_58174 = cljs.core.seq(inst_58168);
var inst_58175 = inst_58174;
var inst_58176 = null;
var inst_58177 = (0);
var inst_58178 = (0);
var state_58223__$1 = (function (){var statearr_58235 = state_58223;
(statearr_58235[(8)] = inst_58176);

(statearr_58235[(10)] = inst_58177);

(statearr_58235[(11)] = inst_58175);

(statearr_58235[(14)] = inst_58169);

(statearr_58235[(13)] = inst_58178);

return statearr_58235;
})();
var statearr_58236_58333 = state_58223__$1;
(statearr_58236_58333[(2)] = null);

(statearr_58236_58333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (11))){
var inst_58217 = (state_58223[(2)]);
var state_58223__$1 = state_58223;
var statearr_58237_58334 = state_58223__$1;
(statearr_58237_58334[(2)] = inst_58217);

(statearr_58237_58334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (9))){
var inst_58194 = (state_58223[(7)]);
var inst_58196 = cljs.core.chunked_seq_QMARK_(inst_58194);
var state_58223__$1 = state_58223;
if(inst_58196){
var statearr_58238_58335 = state_58223__$1;
(statearr_58238_58335[(1)] = (12));

} else {
var statearr_58239_58336 = state_58223__$1;
(statearr_58239_58336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (5))){
var inst_58176 = (state_58223[(8)]);
var inst_58178 = (state_58223[(13)]);
var inst_58183 = cljs.core._nth(inst_58176,inst_58178);
var inst_58184 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_58185 = [false,false];
var inst_58186 = cljs.core.PersistentHashMap.fromArrays(inst_58184,inst_58185);
var inst_58187 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_58183,inst_58186);
var state_58223__$1 = state_58223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58223__$1,(8),inst_58187);
} else {
if((state_val_58224 === (14))){
var inst_58214 = (state_58223[(2)]);
var state_58223__$1 = state_58223;
var statearr_58243_58337 = state_58223__$1;
(statearr_58243_58337[(2)] = inst_58214);

(statearr_58243_58337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (10))){
var state_58223__$1 = state_58223;
var statearr_58244_58338 = state_58223__$1;
(statearr_58244_58338[(2)] = null);

(statearr_58244_58338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58224 === (8))){
var inst_58176 = (state_58223[(8)]);
var inst_58177 = (state_58223[(10)]);
var inst_58175 = (state_58223[(11)]);
var inst_58178 = (state_58223[(13)]);
var inst_58189 = (state_58223[(2)]);
var inst_58190 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_58191 = (inst_58178 + (1));
var tmp58240 = inst_58176;
var tmp58241 = inst_58177;
var tmp58242 = inst_58175;
var inst_58175__$1 = tmp58242;
var inst_58176__$1 = tmp58240;
var inst_58177__$1 = tmp58241;
var inst_58178__$1 = inst_58191;
var state_58223__$1 = (function (){var statearr_58245 = state_58223;
(statearr_58245[(8)] = inst_58176__$1);

(statearr_58245[(10)] = inst_58177__$1);

(statearr_58245[(11)] = inst_58175__$1);

(statearr_58245[(13)] = inst_58178__$1);

(statearr_58245[(15)] = inst_58189);

(statearr_58245[(16)] = inst_58190);

return statearr_58245;
})();
var statearr_58246_58339 = state_58223__$1;
(statearr_58246_58339[(2)] = null);

(statearr_58246_58339[(1)] = (3));


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
var statearr_58247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58247[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__);

(statearr_58247[(1)] = (1));

return statearr_58247;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1 = (function (state_58223){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_58223);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e58248){var ex__27576__auto__ = e58248;
var statearr_58249_58340 = state_58223;
(statearr_58249_58340[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_58223[(4)]))){
var statearr_58250_58341 = state_58223;
(statearr_58250_58341[(1)] = cljs.core.first((state_58223[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58342 = state_58223;
state_58223 = G__58342;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__ = function(state_58223){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1.call(this,state_58223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_58251 = f__27596__auto__();
(statearr_58251[(6)] = c__27595__auto__);

return statearr_58251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
