goog.provide('frontend.fs.sync');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),"null",new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),"null",new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null,new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),null,new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),null,new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null,new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),null,new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026),new cljs.core.Symbol("cljs-time.core","date?","cljs-time.core/date?",1865755164,null),cljs_time.core.date_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64255){
return cljs.core.set_QMARK_(G__64255);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64256){
return cljs.core.set_QMARK_(G__64256);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64257){
return cljs.core.map_QMARK_(G__64257);
}),(function (G__64257){
return cljs.core.contains_QMARK_(G__64257,new cljs.core.Keyword(null,"path","path",-188191168));
}),(function (G__64257){
return cljs.core.contains_QMARK_(G__64257,new cljs.core.Keyword(null,"time","time",1385887882));
})], null),(function (G__64257){
return ((cljs.core.map_QMARK_(G__64257)) && (((cljs.core.contains_QMARK_(G__64257,new cljs.core.Keyword(null,"path","path",-188191168))) && (cljs.core.contains_QMARK_(G__64257,new cljs.core.Keyword(null,"time","time",1385887882))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"time","time",1385887882)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__64266){
return cljs.core.seq_QMARK_(G__64266);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.seq_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64267){
return cljs.core.map_QMARK_(G__64267);
}),(function (G__64267){
return cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__64267){
return cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256));
}),(function (G__64267){
return cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085));
}),(function (G__64267){
return cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812));
}),(function (G__64267){
return cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"history","history",-247395220));
})], null),(function (G__64267){
return ((cljs.core.map_QMARK_(G__64267)) && (((cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"state","state",-1988618099))) && (((cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))) && (((cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))) && (((cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))) && (cljs.core.contains_QMARK_(G__64267,new cljs.core.Keyword(null,"history","history",-247395220))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"history","history",-247395220)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file","null","delete_files","null","update_files","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file",null,"delete_files",null,"update_files",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__64271){
return cljs.core.map_QMARK_(G__64271);
}),(function (G__64271){
return cljs.core.contains_QMARK_(G__64271,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
}),(function (G__64271){
return cljs.core.contains_QMARK_(G__64271,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
}),(function (G__64271){
return cljs.core.contains_QMARK_(G__64271,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
})], null),(function (G__64271){
return ((cljs.core.map_QMARK_(G__64271)) && (((cljs.core.contains_QMARK_(G__64271,new cljs.core.Keyword(null,"TXId","TXId",-902804781))) && (((cljs.core.contains_QMARK_(G__64271,new cljs.core.Keyword(null,"TXType","TXType",-476865365))) && (cljs.core.contains_QMARK_(G__64271,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),new cljs.core.Keyword(null,"TXType","TXType",-476865365),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXId","TXId",-902804781))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXType","TXType",-476865365))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__64272_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),p1__64272_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Keyword(null,"unknown","unknown",-935977881)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__64273_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),p1__64273_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__64274_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),p1__64274_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__64275#","p1__64275#",1332749063,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"p1__64275#","p1__64275#",1332749063,null))),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),(function (p1__64275_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),p1__64275_SHARP_);
}),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
frontend.fs.sync.ws_addr = frontend.config.WS_URL;
frontend.fs.sync.graphs_txid = frontend.util.persist_var.persist_var(null,"graphs-txid");
frontend.fs.sync.update_graphs_txid_BANG_ = (function frontend$fs$sync$update_graphs_txid_BANG_(latest_txid,graph_uuid,user_uuid,repo){
if(cljs.core.int_QMARK_(latest_txid)){
} else {
throw (new Error("Assert failed: (int? latest-txid)"));
}

if((latest_txid >= (0))){
} else {
throw (new Error("Assert failed: (>= latest-txid 0)"));
}

frontend.fs.sync.graphs_txid.frontend$util$persist_var$IResetValue$_reset_value_BANG_$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_uuid,graph_uuid,latest_txid], null),repo);

return frontend.util.persist_var.persist_save(frontend.fs.sync.graphs_txid);
});
frontend.fs.sync.clear_graphs_txid_BANG_ = (function frontend$fs$sync$clear_graphs_txid_BANG_(repo){
frontend.fs.sync.graphs_txid.frontend$util$persist_var$IResetValue$_reset_value_BANG_$arity$3(null,null,repo);

return frontend.util.persist_var.persist_save(frontend.fs.sync.graphs_txid);
});
frontend.fs.sync.ws_ping_loop = (function frontend$fs$sync$ws_ping_loop(ws){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64304){
var state_val_64305 = (state_64304[(1)]);
if((state_val_64305 === (7))){
var inst_64286 = cljs.core.async.timeout((1000));
var state_64304__$1 = state_64304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64304__$1,(10),inst_64286);
} else {
if((state_val_64305 === (1))){
var state_64304__$1 = state_64304;
var statearr_64306_67930 = state_64304__$1;
(statearr_64306_67930[(2)] = null);

(statearr_64306_67930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (4))){
var inst_64277 = (state_64304[(7)]);
var inst_64284 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_64277);
var state_64304__$1 = state_64304;
if(inst_64284){
var statearr_64307_67931 = state_64304__$1;
(statearr_64307_67931[(1)] = (7));

} else {
var statearr_64308_67932 = state_64304__$1;
(statearr_64308_67932[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (6))){
var inst_64300 = (state_64304[(2)]);
var state_64304__$1 = state_64304;
var statearr_64309_67933 = state_64304__$1;
(statearr_64309_67933[(2)] = inst_64300);

(statearr_64309_67933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (3))){
var inst_64302 = (state_64304[(2)]);
var state_64304__$1 = state_64304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64304__$1,inst_64302);
} else {
if((state_val_64305 === (2))){
var inst_64277 = (state_64304[(7)]);
var inst_64277__$1 = ws.readyState;
var inst_64278 = [(3),null,(2),null];
var inst_64279 = (new cljs.core.PersistentArrayMap(null,2,inst_64278,null));
var inst_64280 = (new cljs.core.PersistentHashSet(null,inst_64279,null));
var inst_64281 = cljs.core.contains_QMARK_(inst_64280,inst_64277__$1);
var inst_64282 = (!(inst_64281));
var state_64304__$1 = (function (){var statearr_64310 = state_64304;
(statearr_64310[(7)] = inst_64277__$1);

return statearr_64310;
})();
if(inst_64282){
var statearr_64311_67934 = state_64304__$1;
(statearr_64311_67934[(1)] = (4));

} else {
var statearr_64312_67935 = state_64304__$1;
(statearr_64312_67935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (11))){
var inst_64294 = (state_64304[(2)]);
var state_64304__$1 = (function (){var statearr_64313 = state_64304;
(statearr_64313[(8)] = inst_64294);

return statearr_64313;
})();
var statearr_64314_67937 = state_64304__$1;
(statearr_64314_67937[(2)] = null);

(statearr_64314_67937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (9))){
var inst_64297 = (state_64304[(2)]);
var state_64304__$1 = state_64304;
var statearr_64315_67938 = state_64304__$1;
(statearr_64315_67938[(2)] = inst_64297);

(statearr_64315_67938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (5))){
var state_64304__$1 = state_64304;
var statearr_64316_67939 = state_64304__$1;
(statearr_64316_67939[(2)] = null);

(statearr_64316_67939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (10))){
var inst_64288 = (state_64304[(2)]);
var state_64304__$1 = (function (){var statearr_64317 = state_64304;
(statearr_64317[(9)] = inst_64288);

return statearr_64317;
})();
var statearr_64318_67941 = state_64304__$1;
(statearr_64318_67941[(2)] = null);

(statearr_64318_67941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64305 === (8))){
var inst_64291 = ws.send("PING");
var inst_64292 = cljs.core.async.timeout((30000));
var state_64304__$1 = (function (){var statearr_64319 = state_64304;
(statearr_64319[(10)] = inst_64291);

return statearr_64319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64304__$1,(11),inst_64292);
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
});
return (function() {
var frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____0 = (function (){
var statearr_64320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64320[(0)] = frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__);

(statearr_64320[(1)] = (1));

return statearr_64320;
});
var frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____1 = (function (state_64304){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64304);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64321){var ex__41842__auto__ = e64321;
var statearr_64322_67942 = state_64304;
(statearr_64322_67942[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64304[(4)]))){
var statearr_64323_67943 = state_64304;
(statearr_64323_67943[(1)] = cljs.core.first((state_64304[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67944 = state_64304;
state_64304 = G__67944;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__ = function(state_64304){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____1.call(this,state_64304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____0;
frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____1;
return frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64324 = f__41862__auto__();
(statearr_64324[(6)] = c__41861__auto__);

return statearr_64324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.ws_stop_BANG_ = (function frontend$fs$sync$ws_stop_BANG_(_STAR_ws){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_ws,(function (o){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o,new cljs.core.Keyword(null,"stop","stop",-2140911342),true);
}));

return new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)).close();
});
frontend.fs.sync.ws_listen_BANG__STAR_ = (function frontend$fs$sync$ws_listen_BANG__STAR_(graph_uuid,_STAR_ws,remote_changes_chan){
cljs.core.reset_BANG_(_STAR_ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),(new WebSocket(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(frontend.fs.sync.ws_addr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph_uuid], 0)))),new cljs.core.Keyword(null,"stop","stop",-2140911342),false], null));

frontend.fs.sync.ws_ping_loop(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)));

(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)).onclose = (function (_e){
if(new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)) === true){
return null;
} else {
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64329){
var state_val_64330 = (state_64329[(1)]);
if((state_val_64330 === (1))){
var inst_64325 = cljs.core.async.timeout((1000));
var inst_64326 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-connecting graph",graph_uuid], 0));
var inst_64327 = (frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(graph_uuid,_STAR_ws,remote_changes_chan) : frontend.fs.sync.ws_listen_BANG__STAR_.call(null,graph_uuid,_STAR_ws,remote_changes_chan));
var state_64329__$1 = (function (){var statearr_64331 = state_64329;
(statearr_64331[(7)] = inst_64325);

(statearr_64331[(8)] = inst_64326);

return statearr_64331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64329__$1,inst_64327);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__ = null;
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____0 = (function (){
var statearr_64332 = [null,null,null,null,null,null,null,null,null];
(statearr_64332[(0)] = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__);

(statearr_64332[(1)] = (1));

return statearr_64332;
});
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____1 = (function (state_64329){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64329);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64333){var ex__41842__auto__ = e64333;
var statearr_64334_67945 = state_64329;
(statearr_64334_67945[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64329[(4)]))){
var statearr_64335_67946 = state_64329;
(statearr_64335_67946[(1)] = cljs.core.first((state_64329[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67949 = state_64329;
state_64329 = G__67949;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__ = function(state_64329){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____1.call(this,state_64329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____0;
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____1;
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64336 = f__41862__auto__();
(statearr_64336[(6)] = c__41861__auto__);

return statearr_64336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}
}));

return (new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)).onmessage = (function (e){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(e.data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if((!((new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(data) == null)))){
var temp__5718__auto__ = cljs.core.async.poll_BANG_(remote_changes_chan);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var last_txid = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(v);
var current_txid = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(data);
if((last_txid > current_txid)){
return cljs.core.async.offer_BANG_(remote_changes_chan,v);
} else {
return cljs.core.async.offer_BANG_(remote_changes_chan,data);
}
} else {
return cljs.core.async.offer_BANG_(remote_changes_chan,data);
}
} else {
return null;
}
}));
});
/**
 * return channal which output messages from server
 */
frontend.fs.sync.ws_listen_BANG_ = (function frontend$fs$sync$ws_listen_BANG_(graph_uuid,_STAR_ws){
var remote_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
frontend.fs.sync.ws_listen_BANG__STAR_(graph_uuid,_STAR_ws,remote_changes_chan);

return remote_changes_chan;
});
frontend.fs.sync.get_json_body = (function frontend$fs$sync$get_json_body(body){
var or__4253__auto__ = (function (){var and__4251__auto__ = (!(typeof body === 'string'));
if(and__4251__auto__){
return body;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var or__4253__auto____$1 = clojure.string.blank_QMARK_(body);
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
}
});
frontend.fs.sync.get_resp_json_body = (function frontend$fs$sync$get_resp_json_body(resp){
return frontend.fs.sync.get_json_body(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp));
});
frontend.fs.sync.request_once = (function frontend$fs$sync$request_once(api_name,body,token){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64350){
var state_val_64351 = (state_64350[(1)]);
if((state_val_64351 === (1))){
var inst_64337 = ["https://",frontend.config.API_DOMAIN,"/file-sync/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_name)].join('');
var inst_64338 = [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_64339 = cljs.core.clj__GT_js(body);
var inst_64340 = JSON.stringify(inst_64339);
var inst_64341 = [token,inst_64340,false];
var inst_64342 = cljs.core.PersistentHashMap.fromArrays(inst_64338,inst_64341);
var inst_64343 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_64337,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64342], 0));
var inst_64344 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"body","body",-2049205669)];
var state_64350__$1 = (function (){var statearr_64352 = state_64350;
(statearr_64352[(7)] = inst_64344);

return statearr_64352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64350__$1,(2),inst_64343);
} else {
if((state_val_64351 === (2))){
var inst_64344 = (state_64350[(7)]);
var inst_64346 = (state_64350[(2)]);
var inst_64347 = [inst_64346,api_name,body];
var inst_64348 = cljs.core.PersistentHashMap.fromArrays(inst_64344,inst_64347);
var state_64350__$1 = state_64350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64350__$1,inst_64348);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$request_once_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$request_once_$_state_machine__41839__auto____0 = (function (){
var statearr_64353 = [null,null,null,null,null,null,null,null];
(statearr_64353[(0)] = frontend$fs$sync$request_once_$_state_machine__41839__auto__);

(statearr_64353[(1)] = (1));

return statearr_64353;
});
var frontend$fs$sync$request_once_$_state_machine__41839__auto____1 = (function (state_64350){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64350);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64354){var ex__41842__auto__ = e64354;
var statearr_64355_67950 = state_64350;
(statearr_64355_67950[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64350[(4)]))){
var statearr_64356_67951 = state_64350;
(statearr_64356_67951[(1)] = cljs.core.first((state_64350[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67952 = state_64350;
state_64350 = G__67952;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$request_once_$_state_machine__41839__auto__ = function(state_64350){
switch(arguments.length){
case 0:
return frontend$fs$sync$request_once_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$request_once_$_state_machine__41839__auto____1.call(this,state_64350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$request_once_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$request_once_$_state_machine__41839__auto____0;
frontend$fs$sync$request_once_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$request_once_$_state_machine__41839__auto____1;
return frontend$fs$sync$request_once_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64357 = f__41862__auto__();
(statearr_64357[(6)] = c__41861__auto__);

return statearr_64357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.request = (function frontend$fs$sync$request(var_args){
var G__64359 = arguments.length;
switch (G__64359) {
case 4:
return frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4 = (function (api_name,body,token,refresh_token_fn){
return frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,token,refresh_token_fn,(0));
}));

(frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5 = (function (api_name,body,token,refresh_token_fn,retry_count){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64400){
var state_val_64401 = (state_64400[(1)]);
if((state_val_64401 === (7))){
var inst_64362 = (state_64400[(7)]);
var inst_64396 = new cljs.core.Keyword(null,"resp","resp",1418702376).cljs$core$IFn$_invoke$arity$1(inst_64362);
var state_64400__$1 = state_64400;
var statearr_64402_67954 = state_64400__$1;
(statearr_64402_67954[(2)] = inst_64396);

(statearr_64402_67954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (1))){
var inst_64360 = frontend.fs.sync.request_once(api_name,body,token);
var state_64400__$1 = state_64400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64400__$1,(2),inst_64360);
} else {
if((state_val_64401 === (4))){
var inst_64367 = (state_64400[(8)]);
var state_64400__$1 = state_64400;
var statearr_64403_67955 = state_64400__$1;
(statearr_64403_67955[(2)] = inst_64367);

(statearr_64403_67955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (6))){
var inst_64380 = ((1000) * retry_count);
var inst_64381 = (((60000) < inst_64380) ? (60000) : inst_64380);
var inst_64382 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will retry after",inst_64381,"ms"], 0));
var inst_64383 = ((1000) * retry_count);
var inst_64384 = (((60000) < inst_64383) ? (60000) : inst_64383);
var inst_64385 = cljs.core.async.timeout(inst_64384);
var state_64400__$1 = (function (){var statearr_64404 = state_64400;
(statearr_64404[(9)] = inst_64382);

return statearr_64404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64400__$1,(9),inst_64385);
} else {
if((state_val_64401 === (3))){
var inst_64362 = (state_64400[(7)]);
var inst_64369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64370 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_64371 = (new cljs.core.PersistentVector(null,2,(5),inst_64369,inst_64370,null));
var inst_64372 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_64362,inst_64371);
var inst_64373 = frontend.fs.sync.get_json_body(inst_64372);
var inst_64374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_64373);
var inst_64375 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Unauthorized",inst_64374);
var state_64400__$1 = state_64400;
var statearr_64405_67956 = state_64400__$1;
(statearr_64405_67956[(2)] = inst_64375);

(statearr_64405_67956[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (2))){
var inst_64367 = (state_64400[(8)]);
var inst_64362 = (state_64400[(7)]);
var inst_64362__$1 = (state_64400[(2)]);
var inst_64363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64364 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_64365 = (new cljs.core.PersistentVector(null,2,(5),inst_64363,inst_64364,null));
var inst_64366 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_64362__$1,inst_64365);
var inst_64367__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_64366);
var state_64400__$1 = (function (){var statearr_64406 = state_64400;
(statearr_64406[(8)] = inst_64367__$1);

(statearr_64406[(7)] = inst_64362__$1);

return statearr_64406;
})();
if(inst_64367__$1){
var statearr_64407_67957 = state_64400__$1;
(statearr_64407_67957[(1)] = (3));

} else {
var statearr_64408_67958 = state_64400__$1;
(statearr_64408_67958[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (11))){
var inst_64394 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
var statearr_64409_67959 = state_64400__$1;
(statearr_64409_67959[(2)] = inst_64394);

(statearr_64409_67959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (9))){
var inst_64387 = (state_64400[(2)]);
var inst_64388 = (refresh_token_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_token_fn.cljs$core$IFn$_invoke$arity$0() : refresh_token_fn.call(null));
var state_64400__$1 = (function (){var statearr_64410 = state_64400;
(statearr_64410[(10)] = inst_64387);

return statearr_64410;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64400__$1,(10),inst_64388);
} else {
if((state_val_64401 === (5))){
var inst_64378 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
if(cljs.core.truth_(inst_64378)){
var statearr_64411_67960 = state_64400__$1;
(statearr_64411_67960[(1)] = (6));

} else {
var statearr_64412_67961 = state_64400__$1;
(statearr_64412_67961[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (10))){
var inst_64390 = (state_64400[(2)]);
var inst_64391 = (retry_count + (1));
var inst_64392 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,inst_64390,refresh_token_fn,inst_64391);
var state_64400__$1 = state_64400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64400__$1,(11),inst_64392);
} else {
if((state_val_64401 === (8))){
var inst_64398 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64400__$1,inst_64398);
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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64413[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64413[(1)] = (1));

return statearr_64413;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64400){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64400);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64414){var ex__41842__auto__ = e64414;
var statearr_64415_67962 = state_64400;
(statearr_64415_67962[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64400[(4)]))){
var statearr_64416_67963 = state_64400;
(statearr_64416_67963[(1)] = cljs.core.first((state_64400[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67964 = state_64400;
state_64400 = G__67964;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64400){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64417 = f__41862__auto__();
(statearr_64417[(6)] = c__41861__auto__);

return statearr_64417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.request.cljs$lang$maxFixedArity = 5);

frontend.fs.sync.remove_dir_prefix = (function frontend$fs$sync$remove_dir_prefix(dir,path){
var is_mobile_url_QMARK_ = clojure.string.starts_with_QMARK_(dir,"file://");
var dir__$1 = ((is_mobile_url_QMARK_)?goog.string.urlDecode(dir):dir);
var r = clojure.string.replace(path,(new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.regExpEscape(dir__$1))].join(''))),"");
if(clojure.string.starts_with_QMARK_(r,"/")){
return clojure.string.replace_first(r,"/","");
} else {
return r;
}
});
/**
 * <user-uuid>/<graph-uuid>/path -> path
 */
frontend.fs.sync.remove_user_graph_uuid_prefix = (function frontend$fs$sync$remove_user_graph_uuid_prefix(path){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/");
if(((((2) < cljs.core.count(parts))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((36),cljs.core.count((parts.cljs$core$IFn$_invoke$arity$1 ? parts.cljs$core$IFn$_invoke$arity$1((0)) : parts.call(null,(0)))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((36),cljs.core.count((parts.cljs$core$IFn$_invoke$arity$1 ? parts.cljs$core$IFn$_invoke$arity$1((1)) : parts.call(null,(1)))))))))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),parts));
} else {
return path;
}
});
frontend.fs.sync.encode_filepath = (function frontend$fs$sync$encode_filepath(filepath){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(encodeURIComponent,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(filepath,"/"))));
});

/**
 * @interface
 */
frontend.fs.sync.IRelativePath = function(){};

var frontend$fs$sync$IRelativePath$_relative_path$dyn_67965 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync._relative_path[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync._relative_path["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRelativePath.-relative-path",this$);
}
}
});
frontend.fs.sync._relative_path = (function frontend$fs$sync$_relative_path(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRelativePath$_relative_path$arity$1 == null)))))){
return this$.frontend$fs$sync$IRelativePath$_relative_path$arity$1(this$);
} else {
return frontend$fs$sync$IRelativePath$_relative_path$dyn_67965(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStoppable = function(){};

var frontend$fs$sync$IStoppable$_stop_BANG_$dyn_67966 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync._stop_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync._stop_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStoppable.-stop!",this$);
}
}
});
frontend.fs.sync._stop_BANG_ = (function frontend$fs$sync$_stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IStoppable$_stop_BANG_$dyn_67966(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStopped_QMARK_ = function(){};

var frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_67967 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync._stopped_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync._stopped_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopped?.-stopped?",this$);
}
}
});
frontend.fs.sync._stopped_QMARK_ = (function frontend$fs$sync$_stopped_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$arity$1 == null)))))){
return this$.frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$arity$1(this$);
} else {
return frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_67967(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {frontend.fs.sync.IRelativePath}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
*/
frontend.fs.sync.FileTxn = (function (from_path,to_path,updated_QMARK_,deleted_QMARK_,txid){
this.from_path = from_path;
this.to_path = to_path;
this.updated_QMARK_ = updated_QMARK_;
this.deleted_QMARK_ = deleted_QMARK_;
this.txid = txid;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(frontend.fs.sync.FileTxn.prototype.renamed_QMARK_ = (function (){
var self__ = this;
var _ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.from_path,self__.to_path);
}));

(frontend.fs.sync.FileTxn.prototype.frontend$fs$sync$IRelativePath$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.FileTxn.prototype.frontend$fs$sync$IRelativePath$_relative_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frontend.fs.sync.remove_user_graph_uuid_prefix(self__.to_path);
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.from_path,other.from_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.to_path,other.to_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.updated_QMARK_,other.updated_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.deleted_QMARK_,other.deleted_QMARK_)))))));
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.from_path,self__.to_path,self__.updated_QMARK_,self__.deleted_QMARK_], null));
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return cljs.core.compare(self__.txid,other.txid);
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,w,_opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#FileTxn[\"",self__.from_path,"\" -> \"",self__.to_path,"\" (updated? ",self__.updated_QMARK_,", renamed? ",coll__$1.renamed_QMARK_(),", deleted? ",self__.deleted_QMARK_,", txid ",self__.txid,")]"], 0));
}));

(frontend.fs.sync.FileTxn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from-path","from-path",528950303,null),new cljs.core.Symbol(null,"to-path","to-path",552685785,null),new cljs.core.Symbol(null,"updated?","updated?",1525590889,null),new cljs.core.Symbol(null,"deleted?","deleted?",1153928756,null),new cljs.core.Symbol(null,"txid","txid",-1048230291,null)], null);
}));

(frontend.fs.sync.FileTxn.cljs$lang$type = true);

(frontend.fs.sync.FileTxn.cljs$lang$ctorStr = "frontend.fs.sync/FileTxn");

(frontend.fs.sync.FileTxn.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"frontend.fs.sync/FileTxn");
}));

/**
 * Positional factory function for frontend.fs.sync/FileTxn.
 */
frontend.fs.sync.__GT_FileTxn = (function frontend$fs$sync$__GT_FileTxn(from_path,to_path,updated_QMARK_,deleted_QMARK_,txid){
return (new frontend.fs.sync.FileTxn(from_path,to_path,updated_QMARK_,deleted_QMARK_,txid));
});

/**
 * convert diff(`get-diff`) to `FileTxn`
 */
frontend.fs.sync.diff__GT_filetxns = (function frontend$fs$sync$diff__GT_filetxns(p__64419){
var map__64420 = p__64419;
var map__64420__$1 = cljs.core.__destructure_map(map__64420);
var TXId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64420__$1,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
var TXType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64420__$1,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
var TXContent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64420__$1,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_files",TXType);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("delete_files",TXType);
var update_or_del_type_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__64418_SHARP_){
return frontend.fs.sync.__GT_FileTxn(p1__64418_SHARP_,p1__64418_SHARP_,update_QMARK_,delete_QMARK_,TXId);
})));
var filepaths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,clojure.string.split_lines(TXContent));
var G__64421 = TXType;
switch (G__64421) {
case "update_files":
case "delete_files":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(update_or_del_type_xf,filepaths);

break;
case "rename_file":
return (new cljs.core.List(null,frontend.fs.sync.__GT_FileTxn(cljs.core.first(filepaths),cljs.core.second(filepaths),false,false,TXId),null,(1),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64421)].join('')));

}
});
/**
 * transducer.
 *   remove duplicate update&delete `FileTxn`s.
 */
frontend.fs.sync.distinct_update_filetxns_xf = (function frontend$fs$sync$distinct_update_filetxns_xf(rf){
var seen_update_AMPERSAND_delete_filetxns = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__67969 = null;
var G__67969__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__67969__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__67969__2 = (function (result,filetxn){
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var or__4253__auto__ = filetxn.updated_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return filetxn.deleted_QMARK_;
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(seen_update_AMPERSAND_delete_filetxns),filetxn);
} else {
return and__4251__auto__;
}
})())){
return result;
} else {
seen_update_AMPERSAND_delete_filetxns.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_update_AMPERSAND_delete_filetxns.cljs$core$IDeref$_deref$arity$1(null),filetxn));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,filetxn) : rf.call(null,result,filetxn));
}
});
G__67969 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__67969__0.call(this);
case 1:
return G__67969__1.call(this,result);
case 2:
return G__67969__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67969.cljs$core$IFn$_invoke$arity$0 = G__67969__0;
G__67969.cljs$core$IFn$_invoke$arity$1 = G__67969__1;
G__67969.cljs$core$IFn$_invoke$arity$2 = G__67969__2;
return G__67969;
})()
});
/**
 * transducer.
 *   remove update&rename filetxns if they are deleted later(in greater txid filetxn).
 */
frontend.fs.sync.remove_deleted_filetxns_xf = (function frontend$fs$sync$remove_deleted_filetxns_xf(rf){
var seen_deleted_paths = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__67970 = null;
var G__67970__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__67970__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__67970__2 = (function (result,filetxn){
var to_path = filetxn.to_path;
var from_path = filetxn.from_path;
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_deleted_paths),to_path)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(to_path,from_path)){
seen_deleted_paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(seen_deleted_paths.cljs$core$IDeref$_deref$arity$1(null),to_path));

seen_deleted_paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_deleted_paths.cljs$core$IDeref$_deref$arity$1(null),from_path));
} else {
}

return result;
} else {
seen_deleted_paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_deleted_paths.cljs$core$IDeref$_deref$arity$1(null),to_path));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,filetxn) : rf.call(null,result,filetxn));
}
});
G__67970 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__67970__0.call(this);
case 1:
return G__67970__1.call(this,result);
case 2:
return G__67970__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67970.cljs$core$IFn$_invoke$arity$0 = G__67970__0;
G__67970.cljs$core$IFn$_invoke$arity$1 = G__67970__1;
G__67970.cljs$core$IFn$_invoke$arity$2 = G__67970__2;
return G__67970;
})()
});
/**
 * return transducer.
 *   partition filetxns, at most N update-filetxns in each partition,
 *   for delete and rename type, only one filetxn in each partition.
 */
frontend.fs.sync.partition_filetxns = (function frontend$fs$sync$partition_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (p1__64422_SHARP_){
return p1__64422_SHARP_.updated_QMARK_;
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ts){
if(cljs.core.truth_((function (){var G__64423 = cljs.core.first(ts);
if((G__64423 == null)){
return null;
} else {
return G__64423.updated_QMARK_;
}
})())){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,ts);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,ts);
}
})),cljs.core.cat);
});
/**
 * transducer.
 *   1. diff -> `FileTxn` , see also `get-diff`
 *   2. distinct redundant update type filetxns
 *   3. partition filetxns, each partition contains same type filetxns,
 *   for update type, at most N items in each partition
 *   for delete & rename type, only 1 item in each partition.
 *   4. remove update or rename filetxns if they are deleted in later filetxns.
 *   NOTE: this xf should apply on reversed diffs sequence (sort by txid)
 */
frontend.fs.sync.diffs__GT_partitioned_filetxns = (function frontend$fs$sync$diffs__GT_partitioned_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.diff__GT_filetxns),cljs.core.cat,frontend.fs.sync.distinct_update_filetxns_xf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.fs.sync.remove_deleted_filetxns_xf,frontend.fs.sync.partition_filetxns(n)], 0));
});
frontend.fs.sync.filepath__GT_diff = (function frontend$fs$sync$filepath__GT_diff(index,p__64424){
var map__64425 = p__64424;
var map__64425__$1 = cljs.core.__destructure_map(map__64425);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64425__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64425__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64425__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),(index + (1)),new cljs.core.Keyword(null,"TXType","TXType",-476865365),"update_files",new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_uuid,graph_uuid,relative_path], null))], null);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/diff %)"));
}

return _PERCENT_;
});
/**
 * transducer.
 *   1. filepaths -> diff
 *   2. diffs->partitioned-filetxns
 */
frontend.fs.sync.filepaths__GT_partitioned_filetxns = (function frontend$fs$sync$filepaths__GT_partitioned_filetxns(n,graph_uuid,user_uuid){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"relative-path","relative-path",1848635172),p,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),user_uuid,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid], null);
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.filepath__GT_diff),frontend.fs.sync.diffs__GT_partitioned_filetxns(n));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {frontend.fs.sync.IRelativePath}
 * @implements {cljs.core.IPrintWithWriter}
*/
frontend.fs.sync.FileMetadata = (function (size,etag,path,last_modified,remote_QMARK_,normalized_path){
this.size = size;
this.etag = etag;
this.path = path;
this.last_modified = last_modified;
this.remote_QMARK_ = remote_QMARK_;
this.normalized_path = normalized_path;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(frontend.fs.sync.FileMetadata.prototype.get_normalized_path = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.normalized_path)){
} else {
(self__.normalized_path = (function (){var G__64426 = self__.path;
var G__64426__$1 = ((clojure.string.starts_with_QMARK_(self__.path,"/"))?clojure.string.replace_first(G__64426,"/",""):G__64426);
if(cljs.core.truth_(self__.remote_QMARK_)){
return frontend.fs.sync.remove_user_graph_uuid_prefix(G__64426__$1);
} else {
return G__64426__$1;
}
})());
}

return self__.normalized_path;
}));

(frontend.fs.sync.FileMetadata.prototype.frontend$fs$sync$IRelativePath$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.FileMetadata.prototype.frontend$fs$sync$IRelativePath$_relative_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
}));

(frontend.fs.sync.FileMetadata.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.size,other.size)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o__$1.get_normalized_path(),other.get_normalized_path())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.etag,other.etag)))));
}));

(frontend.fs.sync.FileMetadata.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),self__.size,new cljs.core.Keyword(null,"etag","etag",-329255476),self__.etag,new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null));
}));

(frontend.fs.sync.FileMetadata.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,w,_opts){
var self__ = this;
var ___$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),self__.size,new cljs.core.Keyword(null,"etag","etag",-329255476),self__.etag,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"remote?","remote?",-517415110),self__.remote_QMARK_], null))], 0));
}));

(frontend.fs.sync.FileMetadata.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"etag","etag",1311276051,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"last-modified","last-modified",-1061023978,null),new cljs.core.Symbol(null,"remote?","remote?",1123116417,null),cljs.core.with_meta(new cljs.core.Symbol(null,"normalized-path","normalized-path",-994676232,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.FileMetadata.cljs$lang$type = true);

(frontend.fs.sync.FileMetadata.cljs$lang$ctorStr = "frontend.fs.sync/FileMetadata");

(frontend.fs.sync.FileMetadata.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"frontend.fs.sync/FileMetadata");
}));

/**
 * Positional factory function for frontend.fs.sync/FileMetadata.
 */
frontend.fs.sync.__GT_FileMetadata = (function frontend$fs$sync$__GT_FileMetadata(size,etag,path,last_modified,remote_QMARK_,normalized_path){
return (new frontend.fs.sync.FileMetadata(size,etag,path,last_modified,remote_QMARK_,normalized_path));
});

frontend.fs.sync.relative_path = (function frontend$fs$sync$relative_path(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.frontend$fs$sync$IRelativePath$))))?true:false):false)){
return o.frontend$fs$sync$IRelativePath$_relative_path$arity$1(null);
} else {
if(typeof o === 'string'){
return frontend.fs.sync.remove_user_graph_uuid_prefix(o);
} else {
throw (new Error(["unsupport type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(o))].join('')));

}
}
});

/**
 * @interface
 */
frontend.fs.sync.IRSAPI = function(){};

var frontend$fs$sync$IRSAPI$set_env$dyn_67971 = (function (this$,prod_QMARK_){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.set_env[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,prod_QMARK_) : m__4551__auto__.call(null,this$,prod_QMARK_));
} else {
var m__4549__auto__ = (frontend.fs.sync.set_env["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,prod_QMARK_) : m__4549__auto__.call(null,this$,prod_QMARK_));
} else {
throw cljs.core.missing_protocol("IRSAPI.set-env",this$);
}
}
});
/**
 * set environment
 */
frontend.fs.sync.set_env = (function frontend$fs$sync$set_env(this$,prod_QMARK_){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$set_env$arity$2 == null)))))){
return this$.frontend$fs$sync$IRSAPI$set_env$arity$2(this$,prod_QMARK_);
} else {
return frontend$fs$sync$IRSAPI$set_env$dyn_67971(this$,prod_QMARK_);
}
});

var frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_67972 = (function (this$,graph_uuid,base_path,filepaths){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_local_files_meta[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__4551__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_local_files_meta["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__4549__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
throw cljs.core.missing_protocol("IRSAPI.get-local-files-meta",this$);
}
}
});
/**
 * get local files' metadata
 */
frontend.fs.sync.get_local_files_meta = (function frontend$fs$sync$get_local_files_meta(this$,graph_uuid,base_path,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 == null)))))){
return this$.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4(this$,graph_uuid,base_path,filepaths);
} else {
return frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_67972(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_67973 = (function (this$,graph_uuid,base_path){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_local_all_files_meta[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,base_path) : m__4551__auto__.call(null,this$,graph_uuid,base_path));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_local_all_files_meta["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,base_path) : m__4549__auto__.call(null,this$,graph_uuid,base_path));
} else {
throw cljs.core.missing_protocol("IRSAPI.get-local-all-files-meta",this$);
}
}
});
/**
 * get all local files' metadata
 */
frontend.fs.sync.get_local_all_files_meta = (function frontend$fs$sync$get_local_all_files_meta(this$,graph_uuid,base_path){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3 == null)))))){
return this$.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3(this$,graph_uuid,base_path);
} else {
return frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_67973(this$,graph_uuid,base_path);
}
});

var frontend$fs$sync$IRSAPI$rename_local_file$dyn_67974 = (function (this$,graph_uuid,base_path,from,to){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.rename_local_file[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,from,to) : m__4551__auto__.call(null,this$,graph_uuid,base_path,from,to));
} else {
var m__4549__auto__ = (frontend.fs.sync.rename_local_file["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,from,to) : m__4549__auto__.call(null,this$,graph_uuid,base_path,from,to));
} else {
throw cljs.core.missing_protocol("IRSAPI.rename-local-file",this$);
}
}
});
frontend.fs.sync.rename_local_file = (function frontend$fs$sync$rename_local_file(this$,graph_uuid,base_path,from,to){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$rename_local_file$arity$5(this$,graph_uuid,base_path,from,to);
} else {
return frontend$fs$sync$IRSAPI$rename_local_file$dyn_67974(this$,graph_uuid,base_path,from,to);
}
});

var frontend$fs$sync$IRSAPI$update_local_files$dyn_67975 = (function (this$,graph_uuid,base_path,filepaths){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.update_local_files[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__4551__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__4549__auto__ = (frontend.fs.sync.update_local_files["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__4549__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
throw cljs.core.missing_protocol("IRSAPI.update-local-files",this$);
}
}
});
/**
 * remote -> local
 */
frontend.fs.sync.update_local_files = (function frontend$fs$sync$update_local_files(this$,graph_uuid,base_path,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$update_local_files$arity$4 == null)))))){
return this$.frontend$fs$sync$IRSAPI$update_local_files$arity$4(this$,graph_uuid,base_path,filepaths);
} else {
return frontend$fs$sync$IRSAPI$update_local_files$dyn_67975(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$delete_local_files$dyn_67976 = (function (this$,graph_uuid,base_path,filepaths){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.delete_local_files[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__4551__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__4549__auto__ = (frontend.fs.sync.delete_local_files["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__4549__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
throw cljs.core.missing_protocol("IRSAPI.delete-local-files",this$);
}
}
});
frontend.fs.sync.delete_local_files = (function frontend$fs$sync$delete_local_files(this$,graph_uuid,base_path,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 == null)))))){
return this$.frontend$fs$sync$IRSAPI$delete_local_files$arity$4(this$,graph_uuid,base_path,filepaths);
} else {
return frontend$fs$sync$IRSAPI$delete_local_files$dyn_67976(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$update_remote_file$dyn_67977 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.update_remote_file[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepath,local_txid) : m__4551__auto__.call(null,this$,graph_uuid,base_path,filepath,local_txid));
} else {
var m__4549__auto__ = (frontend.fs.sync.update_remote_file["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepath,local_txid) : m__4549__auto__.call(null,this$,graph_uuid,base_path,filepath,local_txid));
} else {
throw cljs.core.missing_protocol("IRSAPI.update-remote-file",this$);
}
}
});
/**
 * local -> remote, return err or txid
 */
frontend.fs.sync.update_remote_file = (function frontend$fs$sync$update_remote_file(this$,graph_uuid,base_path,filepath,local_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$update_remote_file$arity$5(this$,graph_uuid,base_path,filepath,local_txid);
} else {
return frontend$fs$sync$IRSAPI$update_remote_file$dyn_67977(this$,graph_uuid,base_path,filepath,local_txid);
}
});

var frontend$fs$sync$IRSAPI$update_remote_files$dyn_67978 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.update_remote_files[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__4551__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
var m__4549__auto__ = (frontend.fs.sync.update_remote_files["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__4549__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
throw cljs.core.missing_protocol("IRSAPI.update-remote-files",this$);
}
}
});
/**
 * local -> remote, return err or txid
 */
frontend.fs.sync.update_remote_files = (function frontend$fs$sync$update_remote_files(this$,graph_uuid,base_path,filepaths,local_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$update_remote_files$arity$5(this$,graph_uuid,base_path,filepaths,local_txid);
} else {
return frontend$fs$sync$IRSAPI$update_remote_files$dyn_67978(this$,graph_uuid,base_path,filepaths,local_txid);
}
});

var frontend$fs$sync$IRSAPI$delete_remote_files$dyn_67979 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.delete_remote_files[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__4551__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
var m__4549__auto__ = (frontend.fs.sync.delete_remote_files["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__4549__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
throw cljs.core.missing_protocol("IRSAPI.delete-remote-files",this$);
}
}
});
/**
 * return err or txid
 */
frontend.fs.sync.delete_remote_files = (function frontend$fs$sync$delete_remote_files(this$,graph_uuid,base_path,filepaths,local_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5(this$,graph_uuid,base_path,filepaths,local_txid);
} else {
return frontend$fs$sync$IRSAPI$delete_remote_files$dyn_67979(this$,graph_uuid,base_path,filepaths,local_txid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IRemoteAPI = function(){};

var frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_67980 = (function (this$,graph_uuid){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_remote_all_files_meta[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__4551__auto__.call(null,this$,graph_uuid));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_remote_all_files_meta["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__4549__auto__.call(null,this$,graph_uuid));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-all-files-meta",this$);
}
}
});
/**
 * get all remote files' metadata
 */
frontend.fs.sync.get_remote_all_files_meta = (function frontend$fs$sync$get_remote_all_files_meta(this$,graph_uuid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(this$,graph_uuid);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_67980(this$,graph_uuid);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_67981 = (function (this$,graph_uuid,filepaths){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_remote_files_meta[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepaths) : m__4551__auto__.call(null,this$,graph_uuid,filepaths));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_remote_files_meta["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepaths) : m__4549__auto__.call(null,this$,graph_uuid,filepaths));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-files-meta",this$);
}
}
});
/**
 * get remote files' metadata
 */
frontend.fs.sync.get_remote_files_meta = (function frontend$fs$sync$get_remote_files_meta(this$,graph_uuid,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(this$,graph_uuid,filepaths);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_67981(this$,graph_uuid,filepaths);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_67982 = (function (this$,graph_name_opt,graph_uuid_opt){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_remote_graph[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_name_opt,graph_uuid_opt) : m__4551__auto__.call(null,this$,graph_name_opt,graph_uuid_opt));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_remote_graph["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_name_opt,graph_uuid_opt) : m__4549__auto__.call(null,this$,graph_name_opt,graph_uuid_opt));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-graph",this$);
}
}
});
/**
 * get graph info by GRAPH-NAME-OPT or GRAPH-UUID-OPT
 */
frontend.fs.sync.get_remote_graph = (function frontend$fs$sync$get_remote_graph(this$,graph_name_opt,graph_uuid_opt){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(this$,graph_name_opt,graph_uuid_opt);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_67982(this$,graph_name_opt,graph_uuid_opt);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_67983 = (function (this$,graph_uuid,filepath){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_remote_file_versions[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepath) : m__4551__auto__.call(null,this$,graph_uuid,filepath));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_remote_file_versions["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepath) : m__4549__auto__.call(null,this$,graph_uuid,filepath));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-file-versions",this$);
}
}
});
/**
 * get file's version list
 */
frontend.fs.sync.get_remote_file_versions = (function frontend$fs$sync$get_remote_file_versions(this$,graph_uuid,filepath){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(this$,graph_uuid,filepath);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_67983(this$,graph_uuid,filepath);
}
});

var frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_67984 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.list_remote_graphs[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.list_remote_graphs["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.list-remote-graphs",this$);
}
}
});
/**
 * list all remote graphs
 */
frontend.fs.sync.list_remote_graphs = (function frontend$fs$sync$list_remote_graphs(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(this$);
} else {
return frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_67984(this$);
}
});

var frontend$fs$sync$IRemoteAPI$get_diff$dyn_67985 = (function (this$,graph_uuid,from_txid){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_diff[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,from_txid) : m__4551__auto__.call(null,this$,graph_uuid,from_txid));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_diff["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,from_txid) : m__4549__auto__.call(null,this$,graph_uuid,from_txid));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-diff",this$);
}
}
});
/**
 * get diff from FROM-TXID, return [txns, latest-txid, min-txid]
 */
frontend.fs.sync.get_diff = (function frontend$fs$sync$get_diff(this$,graph_uuid,from_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_diff$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(this$,graph_uuid,from_txid);
} else {
return frontend$fs$sync$IRemoteAPI$get_diff$dyn_67985(this$,graph_uuid,from_txid);
}
});

var frontend$fs$sync$IRemoteAPI$create_graph$dyn_67986 = (function (this$,graph_name){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.create_graph[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_name) : m__4551__auto__.call(null,this$,graph_name));
} else {
var m__4549__auto__ = (frontend.fs.sync.create_graph["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_name) : m__4549__auto__.call(null,this$,graph_name));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.create-graph",this$);
}
}
});
/**
 * create graph
 */
frontend.fs.sync.create_graph = (function frontend$fs$sync$create_graph(this$,graph_name){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$create_graph$arity$2 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(this$,graph_name);
} else {
return frontend$fs$sync$IRemoteAPI$create_graph$dyn_67986(this$,graph_name);
}
});

var frontend$fs$sync$IRemoteAPI$delete_graph$dyn_67987 = (function (this$,graph_uuid){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.delete_graph[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__4551__auto__.call(null,this$,graph_uuid));
} else {
var m__4549__auto__ = (frontend.fs.sync.delete_graph["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__4549__auto__.call(null,this$,graph_uuid));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.delete-graph",this$);
}
}
});
/**
 * delete graph
 */
frontend.fs.sync.delete_graph = (function frontend$fs$sync$delete_graph(this$,graph_uuid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(this$,graph_uuid);
} else {
return frontend$fs$sync$IRemoteAPI$delete_graph$dyn_67987(this$,graph_uuid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IToken = function(){};

var frontend$fs$sync$IToken$get_token$dyn_67988 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_token[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_token["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IToken.get-token",this$);
}
}
});
frontend.fs.sync.get_token = (function frontend$fs$sync$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IToken$get_token$arity$1 == null)))))){
return this$.frontend$fs$sync$IToken$get_token$arity$1(this$);
} else {
return frontend$fs$sync$IToken$get_token$dyn_67988(this$);
}
});

var frontend$fs$sync$IToken$refresh_token$dyn_67994 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.refresh_token[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.refresh_token["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IToken.refresh-token",this$);
}
}
});
frontend.fs.sync.refresh_token = (function frontend$fs$sync$refresh_token(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IToken$refresh_token$arity$1 == null)))))){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(this$);
} else {
return frontend$fs$sync$IToken$refresh_token$dyn_67994(this$);
}
});

frontend.fs.sync.check_files_exists = (function frontend$fs$sync$check_files_exists(base_path,file_paths){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64459){
var state_val_64460 = (state_64459[(1)]);
if((state_val_64460 === (1))){
var inst_64440 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_64459__$1 = state_64459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64459__$1,(2),inst_64440);
} else {
if((state_val_64460 === (2))){
var inst_64443 = (state_64459[(7)]);
var inst_64442 = (state_64459[(2)]);
var inst_64443__$1 = cljs.core.ex_cause(inst_64442);
var inst_64444 = (inst_64443__$1 == null);
var state_64459__$1 = (function (){var statearr_64462 = state_64459;
(statearr_64462[(7)] = inst_64443__$1);

return statearr_64462;
})();
if(cljs.core.truth_(inst_64444)){
var statearr_64463_68006 = state_64459__$1;
(statearr_64463_68006[(1)] = (3));

} else {
var statearr_64464_68007 = state_64459__$1;
(statearr_64464_68007[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64460 === (3))){
var state_64459__$1 = state_64459;
var statearr_64465_68008 = state_64459__$1;
(statearr_64465_68008[(2)] = null);

(statearr_64465_68008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64460 === (4))){
var inst_64443 = (state_64459[(7)]);
var inst_64448 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64443),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_paths)].join('');
var inst_64449 = ["Assert failed: ",inst_64448,"\n","(nil? cause)"].join('');
var inst_64451 = (new Error(inst_64449));
var inst_64454 = (function(){throw inst_64451})();
var state_64459__$1 = state_64459;
var statearr_64466_68009 = state_64459__$1;
(statearr_64466_68009[(2)] = inst_64454);

(statearr_64466_68009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64460 === (5))){
var inst_64457 = (state_64459[(2)]);
var state_64459__$1 = state_64459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64459__$1,inst_64457);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____0 = (function (){
var statearr_64467 = [null,null,null,null,null,null,null,null];
(statearr_64467[(0)] = frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__);

(statearr_64467[(1)] = (1));

return statearr_64467;
});
var frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____1 = (function (state_64459){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64459);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64468){var ex__41842__auto__ = e64468;
var statearr_64471_68010 = state_64459;
(statearr_64471_68010[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64459[(4)]))){
var statearr_64472_68011 = state_64459;
(statearr_64472_68011[(1)] = cljs.core.first((state_64459[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68013 = state_64459;
state_64459 = G__68013;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__ = function(state_64459){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____1.call(this,state_64459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____0;
frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____1;
return frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64473 = f__41862__auto__();
(statearr_64473[(6)] = c__41861__auto__);

return statearr_64473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.check_files_not_exists = (function frontend$fs$sync$check_files_not_exists(base_path,file_paths){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64487){
var state_val_64488 = (state_64487[(1)]);
if((state_val_64488 === (1))){
var inst_64474 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_64487__$1 = state_64487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64487__$1,(2),inst_64474);
} else {
if((state_val_64488 === (2))){
var inst_64476 = (state_64487[(2)]);
var inst_64477 = cljs.core.ex_cause(inst_64476);
var inst_64478 = (inst_64477 == null);
var inst_64479 = cljs.core.not(inst_64478);
var state_64487__$1 = state_64487;
if(inst_64479){
var statearr_64490_68015 = state_64487__$1;
(statearr_64490_68015[(1)] = (3));

} else {
var statearr_64491_68016 = state_64487__$1;
(statearr_64491_68016[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64488 === (3))){
var state_64487__$1 = state_64487;
var statearr_64492_68017 = state_64487__$1;
(statearr_64492_68017[(2)] = null);

(statearr_64492_68017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64488 === (4))){
var inst_64482 = (new Error("Assert failed: (some? cause)"));
var inst_64483 = (function(){throw inst_64482})();
var state_64487__$1 = state_64487;
var statearr_64493_68019 = state_64487__$1;
(statearr_64493_68019[(2)] = inst_64483);

(statearr_64493_68019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64488 === (5))){
var inst_64485 = (state_64487[(2)]);
var state_64487__$1 = state_64487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64487__$1,inst_64485);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____0 = (function (){
var statearr_64499 = [null,null,null,null,null,null,null];
(statearr_64499[(0)] = frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__);

(statearr_64499[(1)] = (1));

return statearr_64499;
});
var frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____1 = (function (state_64487){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64487);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64500){var ex__41842__auto__ = e64500;
var statearr_64501_68023 = state_64487;
(statearr_64501_68023[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64487[(4)]))){
var statearr_64502_68024 = state_64487;
(statearr_64502_68024[(1)] = cljs.core.first((state_64487[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68025 = state_64487;
state_64487 = G__68025;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__ = function(state_64487){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____1.call(this,state_64487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____0;
frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____1;
return frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64503 = f__41862__auto__();
(statearr_64503[(6)] = c__41861__auto__);

return statearr_64503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.retry_rsapi = (function frontend$fs$sync$retry_rsapi(f){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64535){
var state_val_64536 = (state_64535[(1)]);
if((state_val_64536 === (7))){
var inst_64523 = (state_64535[(2)]);
var state_64535__$1 = state_64535;
if(cljs.core.truth_(inst_64523)){
var statearr_64541_68027 = state_64535__$1;
(statearr_64541_68027[(1)] = (11));

} else {
var statearr_64542_68028 = state_64535__$1;
(statearr_64542_68028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (1))){
var inst_64505 = (3);
var state_64535__$1 = (function (){var statearr_64543 = state_64535;
(statearr_64543[(7)] = inst_64505);

return statearr_64543;
})();
var statearr_64544_68029 = state_64535__$1;
(statearr_64544_68029[(2)] = null);

(statearr_64544_68029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (4))){
var inst_64511 = (state_64535[(8)]);
var inst_64510 = (state_64535[(9)]);
var inst_64510__$1 = (state_64535[(2)]);
var inst_64511__$1 = (inst_64510__$1 instanceof cljs.core.ExceptionInfo);
var state_64535__$1 = (function (){var statearr_64545 = state_64535;
(statearr_64545[(8)] = inst_64511__$1);

(statearr_64545[(9)] = inst_64510__$1);

return statearr_64545;
})();
if(cljs.core.truth_(inst_64511__$1)){
var statearr_64546_68030 = state_64535__$1;
(statearr_64546_68030[(1)] = (5));

} else {
var statearr_64547_68032 = state_64535__$1;
(statearr_64547_68032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (13))){
var inst_64531 = (state_64535[(2)]);
var state_64535__$1 = state_64535;
var statearr_64548_68033 = state_64535__$1;
(statearr_64548_68033[(2)] = inst_64531);

(statearr_64548_68033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (6))){
var inst_64511 = (state_64535[(8)]);
var state_64535__$1 = state_64535;
var statearr_64549_68034 = state_64535__$1;
(statearr_64549_68034[(2)] = inst_64511);

(statearr_64549_68034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (3))){
var inst_64533 = (state_64535[(2)]);
var state_64535__$1 = state_64535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64535__$1,inst_64533);
} else {
if((state_val_64536 === (12))){
var inst_64510 = (state_64535[(9)]);
var state_64535__$1 = state_64535;
var statearr_64550_68037 = state_64535__$1;
(statearr_64550_68037[(2)] = inst_64510);

(statearr_64550_68037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (2))){
var inst_64508 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var state_64535__$1 = state_64535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64535__$1,(4),inst_64508);
} else {
if((state_val_64536 === (11))){
var inst_64505 = (state_64535[(7)]);
var inst_64525 = ["retry(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64505),") ..."].join('');
var inst_64526 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64525], 0));
var inst_64527 = (inst_64505 - (1));
var inst_64505__$1 = inst_64527;
var state_64535__$1 = (function (){var statearr_64552 = state_64535;
(statearr_64552[(10)] = inst_64526);

(statearr_64552[(7)] = inst_64505__$1);

return statearr_64552;
})();
var statearr_64553_68039 = state_64535__$1;
(statearr_64553_68039[(2)] = null);

(statearr_64553_68039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (9))){
var inst_64515 = (state_64535[(11)]);
var state_64535__$1 = state_64535;
var statearr_64554_68040 = state_64535__$1;
(statearr_64554_68040[(2)] = inst_64515);

(statearr_64554_68040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (5))){
var inst_64515 = (state_64535[(11)]);
var inst_64510 = (state_64535[(9)]);
var inst_64513 = cljs.core.ex_cause(inst_64510);
var inst_64514 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64513);
var inst_64515__$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_64514,"operation timed out");
var state_64535__$1 = (function (){var statearr_64555 = state_64535;
(statearr_64555[(11)] = inst_64515__$1);

return statearr_64555;
})();
if(cljs.core.truth_(inst_64515__$1)){
var statearr_64556_68041 = state_64535__$1;
(statearr_64556_68041[(1)] = (8));

} else {
var statearr_64557_68043 = state_64535__$1;
(statearr_64557_68043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (10))){
var inst_64520 = (state_64535[(2)]);
var state_64535__$1 = state_64535;
var statearr_64558_68044 = state_64535__$1;
(statearr_64558_68044[(2)] = inst_64520);

(statearr_64558_68044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (8))){
var inst_64505 = (state_64535[(7)]);
var inst_64517 = (inst_64505 > (0));
var state_64535__$1 = state_64535;
var statearr_64559_68046 = state_64535__$1;
(statearr_64559_68046[(2)] = inst_64517);

(statearr_64559_68046[(1)] = (10));


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
});
return (function() {
var frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____0 = (function (){
var statearr_64560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64560[(0)] = frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__);

(statearr_64560[(1)] = (1));

return statearr_64560;
});
var frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____1 = (function (state_64535){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64535);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64561){var ex__41842__auto__ = e64561;
var statearr_64562_68048 = state_64535;
(statearr_64562_68048[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64535[(4)]))){
var statearr_64563_68050 = state_64535;
(statearr_64563_68050[(1)] = cljs.core.first((state_64535[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68051 = state_64535;
state_64535 = G__68051;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__ = function(state_64535){
switch(arguments.length){
case 0:
return frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____1.call(this,state_64535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____0;
frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____1;
return frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64564 = f__41862__auto__();
(statearr_64564[(6)] = c__41861__auto__);

return statearr_64564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

/**
* @constructor
 * @implements {frontend.fs.sync.IToken}
 * @implements {frontend.fs.sync.IRSAPI}
*/
frontend.fs.sync.RSAPI = (function (){
});
(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IToken$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IToken$get_token$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64574){
var state_val_64575 = (state_64574[(1)]);
if((state_val_64575 === (1))){
var inst_64565 = (state_64574[(7)]);
var inst_64565__$1 = frontend.state.get_auth_id_token();
var state_64574__$1 = (function (){var statearr_64576 = state_64574;
(statearr_64576[(7)] = inst_64565__$1);

return statearr_64576;
})();
if(cljs.core.truth_(inst_64565__$1)){
var statearr_64577_68054 = state_64574__$1;
(statearr_64577_68054[(1)] = (2));

} else {
var statearr_64578_68055 = state_64574__$1;
(statearr_64578_68055[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64575 === (2))){
var inst_64565 = (state_64574[(7)]);
var state_64574__$1 = state_64574;
var statearr_64579_68058 = state_64574__$1;
(statearr_64579_68058[(2)] = inst_64565);

(statearr_64579_68058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64575 === (3))){
var inst_64568 = this$__$1.refresh_token();
var state_64574__$1 = state_64574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64574__$1,(5),inst_64568);
} else {
if((state_val_64575 === (4))){
var inst_64572 = (state_64574[(2)]);
var state_64574__$1 = state_64574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64574__$1,inst_64572);
} else {
if((state_val_64575 === (5))){
var inst_64570 = (state_64574[(2)]);
var state_64574__$1 = state_64574;
var statearr_64580_68059 = state_64574__$1;
(statearr_64580_68059[(2)] = inst_64570);

(statearr_64580_68059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64581 = [null,null,null,null,null,null,null,null];
(statearr_64581[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64581[(1)] = (1));

return statearr_64581;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64574){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64574);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64582){var ex__41842__auto__ = e64582;
var statearr_64583_68081 = state_64574;
(statearr_64583_68081[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64574[(4)]))){
var statearr_64584_68082 = state_64574;
(statearr_64584_68082[(1)] = cljs.core.first((state_64574[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68085 = state_64574;
state_64574 = G__68085;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64574){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64585 = f__41862__auto__();
(statearr_64585[(6)] = c__41861__auto__);

return statearr_64585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64591){
var state_val_64592 = (state_64591[(1)]);
if((state_val_64592 === (1))){
var inst_64586 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_64591__$1 = state_64591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64591__$1,(2),inst_64586);
} else {
if((state_val_64592 === (2))){
var inst_64588 = (state_64591[(2)]);
var inst_64589 = frontend.state.get_auth_id_token();
var state_64591__$1 = (function (){var statearr_64593 = state_64591;
(statearr_64593[(7)] = inst_64588);

return statearr_64593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64591__$1,inst_64589);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64594 = [null,null,null,null,null,null,null,null];
(statearr_64594[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64594[(1)] = (1));

return statearr_64594;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64591){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64591);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64595){var ex__41842__auto__ = e64595;
var statearr_64596_68088 = state_64591;
(statearr_64596_68088[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64591[(4)]))){
var statearr_64597_68089 = state_64591;
(statearr_64597_68089[(1)] = cljs.core.first((state_64591[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68097 = state_64591;
state_64591 = G__68097;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64591){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64598 = f__41862__auto__();
(statearr_64598[(6)] = c__41861__auto__);

return statearr_64598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64607){
var state_val_64608 = (state_64607[(1)]);
if((state_val_64608 === (1))){
var inst_64599 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_64607__$1 = state_64607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64607__$1,(2),inst_64599);
} else {
if((state_val_64608 === (2))){
var inst_64601 = (state_64607[(2)]);
var inst_64602 = (function (){var token = inst_64601;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_64603 = frontend.fs.sync.retry_rsapi(inst_64602);
var state_64607__$1 = state_64607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64607__$1,(3),inst_64603);
} else {
if((state_val_64608 === (3))){
var inst_64605 = (state_64607[(2)]);
var state_64607__$1 = state_64607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64607__$1,inst_64605);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64609 = [null,null,null,null,null,null,null];
(statearr_64609[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64609[(1)] = (1));

return statearr_64609;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64607){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64607);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64610){var ex__41842__auto__ = e64610;
var statearr_64611_68128 = state_64607;
(statearr_64611_68128[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64607[(4)]))){
var statearr_64612_68129 = state_64607;
(statearr_64612_68129[(1)] = cljs.core.first((state_64607[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68132 = state_64607;
state_64607 = G__68132;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64607){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64613 = f__41862__auto__();
(statearr_64613[(6)] = c__41861__auto__);

return statearr_64613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3 = (function (_,graph_uuid,base_path){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64629){
var state_val_64630 = (state_64629[(1)]);
if((state_val_64630 === (1))){
var inst_64614 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-all-files-meta",graph_uuid,base_path], 0)));
});
})();
var inst_64615 = frontend.fs.sync.retry_rsapi(inst_64614);
var state_64629__$1 = state_64629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64629__$1,(2),inst_64615);
} else {
if((state_val_64630 === (2))){
var inst_64617 = (state_64629[(7)]);
var inst_64617__$1 = (state_64629[(2)]);
var inst_64618 = (inst_64617__$1 instanceof cljs.core.ExceptionInfo);
var state_64629__$1 = (function (){var statearr_64631 = state_64629;
(statearr_64631[(7)] = inst_64617__$1);

return statearr_64631;
})();
if(cljs.core.truth_(inst_64618)){
var statearr_64632_68137 = state_64629__$1;
(statearr_64632_68137[(1)] = (3));

} else {
var statearr_64633_68138 = state_64629__$1;
(statearr_64633_68138[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64630 === (3))){
var inst_64617 = (state_64629[(7)]);
var state_64629__$1 = state_64629;
var statearr_64634_68139 = state_64629__$1;
(statearr_64634_68139[(2)] = inst_64617);

(statearr_64634_68139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64630 === (4))){
var inst_64617 = (state_64629[(7)]);
var inst_64622 = (function (){var r = inst_64617;
return (function (p__64621){
var vec__64635 = p__64621;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64635,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64635,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_64623 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_64617);
var inst_64624 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_64622,inst_64623);
var inst_64625 = cljs.core.set(inst_64624);
var state_64629__$1 = state_64629;
var statearr_64638_68140 = state_64629__$1;
(statearr_64638_68140[(2)] = inst_64625);

(statearr_64638_68140[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64630 === (5))){
var inst_64627 = (state_64629[(2)]);
var state_64629__$1 = state_64629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64629__$1,inst_64627);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64639 = [null,null,null,null,null,null,null,null];
(statearr_64639[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64639[(1)] = (1));

return statearr_64639;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64629){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64629);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64640){var ex__41842__auto__ = e64640;
var statearr_64641_68150 = state_64629;
(statearr_64641_68150[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64629[(4)]))){
var statearr_64642_68151 = state_64629;
(statearr_64642_68151[(1)] = cljs.core.first((state_64629[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68152 = state_64629;
state_64629 = G__68152;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64629){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64643 = f__41862__auto__();
(statearr_64643[(6)] = c__41861__auto__);

return statearr_64643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_local_files$arity$4 = (function (this$,graph_uuid,base_path,filepaths){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths], 0));

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64658){
var state_val_64659 = (state_64658[(1)]);
if((state_val_64659 === (1))){
var inst_64644 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_64658__$1 = state_64658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64658__$1,(2),inst_64644);
} else {
if((state_val_64659 === (2))){
var inst_64646 = (state_64658[(2)]);
var inst_64647 = (function (){var token = inst_64646;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths,token], 0)));
});
})();
var inst_64648 = frontend.fs.sync.retry_rsapi(inst_64647);
var state_64658__$1 = state_64658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64658__$1,(3),inst_64648);
} else {
if((state_val_64659 === (3))){
var inst_64650 = (state_64658[(2)]);
var inst_64651 = frontend.state.developer_mode_QMARK_();
var state_64658__$1 = (function (){var statearr_64660 = state_64658;
(statearr_64660[(7)] = inst_64650);

return statearr_64660;
})();
if(cljs.core.truth_(inst_64651)){
var statearr_64661_68157 = state_64658__$1;
(statearr_64661_68157[(1)] = (4));

} else {
var statearr_64662_68158 = state_64658__$1;
(statearr_64662_68158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64659 === (4))){
var inst_64653 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_64658__$1 = state_64658;
var statearr_64663_68159 = state_64658__$1;
(statearr_64663_68159[(2)] = inst_64653);

(statearr_64663_68159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64659 === (5))){
var state_64658__$1 = state_64658;
var statearr_64664_68160 = state_64658__$1;
(statearr_64664_68160[(2)] = null);

(statearr_64664_68160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64659 === (6))){
var inst_64650 = (state_64658[(7)]);
var inst_64656 = (state_64658[(2)]);
var state_64658__$1 = (function (){var statearr_64665 = state_64658;
(statearr_64665[(8)] = inst_64656);

return statearr_64665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64658__$1,inst_64650);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64666 = [null,null,null,null,null,null,null,null,null];
(statearr_64666[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64666[(1)] = (1));

return statearr_64666;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64658){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64658);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64667){var ex__41842__auto__ = e64667;
var statearr_64668_68164 = state_64658;
(statearr_64668_68164[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64658[(4)]))){
var statearr_64669_68166 = state_64658;
(statearr_64669_68166[(1)] = cljs.core.first((state_64658[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68167 = state_64658;
state_64658 = G__68167;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64658){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64670 = f__41862__auto__();
(statearr_64670[(6)] = c__41861__auto__);

return statearr_64670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 = (function (_,graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64689){
var state_val_64690 = (state_64689[(1)]);
if((state_val_64690 === (1))){
var inst_64671 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-files-meta",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_64672 = frontend.fs.sync.retry_rsapi(inst_64671);
var state_64689__$1 = state_64689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64689__$1,(2),inst_64672);
} else {
if((state_val_64690 === (2))){
var inst_64674 = (state_64689[(7)]);
var inst_64674__$1 = (state_64689[(2)]);
var inst_64675 = (inst_64674__$1 instanceof cljs.core.ExceptionInfo);
var state_64689__$1 = (function (){var statearr_64697 = state_64689;
(statearr_64697[(7)] = inst_64674__$1);

return statearr_64697;
})();
if(cljs.core.truth_(inst_64675)){
var statearr_64698_68170 = state_64689__$1;
(statearr_64698_68170[(1)] = (3));

} else {
var statearr_64699_68171 = state_64689__$1;
(statearr_64699_68171[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (3))){
var inst_64674 = (state_64689[(7)]);
var state_64689__$1 = state_64689;
var statearr_64703_68173 = state_64689__$1;
(statearr_64703_68173[(2)] = inst_64674);

(statearr_64703_68173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (4))){
var inst_64674 = (state_64689[(7)]);
var inst_64683 = (function (){var r = inst_64674;
return (function (p__64682){
var vec__64704 = p__64682;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64704,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64704,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_64684 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_64674);
var inst_64685 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_64683,inst_64684);
var state_64689__$1 = state_64689;
var statearr_64710_68175 = state_64689__$1;
(statearr_64710_68175[(2)] = inst_64685);

(statearr_64710_68175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64690 === (5))){
var inst_64687 = (state_64689[(2)]);
var state_64689__$1 = state_64689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64689__$1,inst_64687);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64712 = [null,null,null,null,null,null,null,null];
(statearr_64712[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64712[(1)] = (1));

return statearr_64712;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64689){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64689);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64713){var ex__41842__auto__ = e64713;
var statearr_64714_68179 = state_64689;
(statearr_64714_68179[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64689[(4)]))){
var statearr_64715_68185 = state_64689;
(statearr_64715_68185[(1)] = cljs.core.first((state_64689[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68191 = state_64689;
state_64689 = G__68191;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64689){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64716 = f__41862__auto__();
(statearr_64716[(6)] = c__41861__auto__);

return statearr_64716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64727){
var state_val_64728 = (state_64727[(1)]);
if((state_val_64728 === (1))){
var inst_64719 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_64727__$1 = state_64727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64727__$1,(2),inst_64719);
} else {
if((state_val_64728 === (2))){
var inst_64721 = (state_64727[(2)]);
var inst_64722 = (function (){var token = inst_64721;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_64723 = frontend.fs.sync.retry_rsapi(inst_64722);
var state_64727__$1 = state_64727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64727__$1,(3),inst_64723);
} else {
if((state_val_64728 === (3))){
var inst_64725 = (state_64727[(2)]);
var state_64727__$1 = state_64727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64727__$1,inst_64725);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64734 = [null,null,null,null,null,null,null];
(statearr_64734[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64734[(1)] = (1));

return statearr_64734;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64727){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64727);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64735){var ex__41842__auto__ = e64735;
var statearr_64736_68193 = state_64727;
(statearr_64736_68193[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64727[(4)]))){
var statearr_64737_68194 = state_64727;
(statearr_64737_68194[(1)] = cljs.core.first((state_64727[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68195 = state_64727;
state_64727 = G__68195;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64727){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64739 = f__41862__auto__();
(statearr_64739[(6)] = c__41861__auto__);

return statearr_64739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$set_env$arity$2 = (function (_,prod_QMARK_){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64750){
var state_val_64751 = (state_64750[(1)]);
if((state_val_64751 === (1))){
var state_64750__$1 = state_64750;
if(cljs.core.truth_(prod_QMARK_)){
var statearr_64753_68198 = state_64750__$1;
(statearr_64753_68198[(1)] = (3));

} else {
var statearr_64754_68199 = state_64750__$1;
(statearr_64754_68199[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64751 === (2))){
var inst_64748 = (state_64750[(2)]);
var state_64750__$1 = state_64750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64750__$1,inst_64748);
} else {
if((state_val_64751 === (3))){
var state_64750__$1 = state_64750;
var statearr_64755_68200 = state_64750__$1;
(statearr_64755_68200[(2)] = "prod");

(statearr_64755_68200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64751 === (4))){
var state_64750__$1 = state_64750;
var statearr_64756_68201 = state_64750__$1;
(statearr_64756_68201[(2)] = "dev");

(statearr_64756_68201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64751 === (5))){
var inst_64744 = (state_64750[(2)]);
var inst_64745 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set-env",inst_64744], 0));
var inst_64746 = cljs.core.async.interop.p__GT_c(inst_64745);
var state_64750__$1 = state_64750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64750__$1,(2),inst_64746);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64761 = [null,null,null,null,null,null,null];
(statearr_64761[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64761[(1)] = (1));

return statearr_64761;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64750){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64750);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64762){var ex__41842__auto__ = e64762;
var statearr_64763_68206 = state_64750;
(statearr_64763_68206[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64750[(4)]))){
var statearr_64764_68207 = state_64750;
(statearr_64764_68207[(1)] = cljs.core.first((state_64750[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68208 = state_64750;
state_64750 = G__68208;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64750){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64765 = f__41862__auto__();
(statearr_64765[(6)] = c__41861__auto__);

return statearr_64765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64774){
var state_val_64775 = (state_64774[(1)]);
if((state_val_64775 === (1))){
var inst_64766 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_64774__$1 = state_64774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64774__$1,(2),inst_64766);
} else {
if((state_val_64775 === (2))){
var inst_64768 = (state_64774[(2)]);
var inst_64769 = (function (){var token = inst_64768;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-file",graph_uuid,base_path,filepath,local_txid,token], 0)));
});
})();
var inst_64770 = frontend.fs.sync.retry_rsapi(inst_64769);
var state_64774__$1 = state_64774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64774__$1,(3),inst_64770);
} else {
if((state_val_64775 === (3))){
var inst_64772 = (state_64774[(2)]);
var state_64774__$1 = state_64774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64774__$1,inst_64772);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64788 = [null,null,null,null,null,null,null];
(statearr_64788[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64788[(1)] = (1));

return statearr_64788;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64774){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64774);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64792){var ex__41842__auto__ = e64792;
var statearr_64793_68213 = state_64774;
(statearr_64793_68213[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64774[(4)]))){
var statearr_64797_68214 = state_64774;
(statearr_64797_68214[(1)] = cljs.core.first((state_64774[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68219 = state_64774;
state_64774 = G__68219;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64774){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64798 = f__41862__auto__();
(statearr_64798[(6)] = c__41861__auto__);

return statearr_64798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 = (function (_,graph_uuid,base_path,from,to){
var self__ = this;
var ___$1 = this;
return frontend.fs.sync.retry_rsapi((function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rename-local-file",graph_uuid,base_path,from,to], 0)));
}));
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 = (function (_,graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64811){
var state_val_64812 = (state_64811[(1)]);
if((state_val_64812 === (1))){
var inst_64800 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-local-files",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_64801 = frontend.fs.sync.retry_rsapi(inst_64800);
var state_64811__$1 = state_64811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64811__$1,(2),inst_64801);
} else {
if((state_val_64812 === (2))){
var inst_64803 = (state_64811[(2)]);
var inst_64804 = frontend.state.developer_mode_QMARK_();
var state_64811__$1 = (function (){var statearr_64813 = state_64811;
(statearr_64813[(7)] = inst_64803);

return statearr_64813;
})();
if(cljs.core.truth_(inst_64804)){
var statearr_64814_68221 = state_64811__$1;
(statearr_64814_68221[(1)] = (3));

} else {
var statearr_64815_68222 = state_64811__$1;
(statearr_64815_68222[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64812 === (3))){
var inst_64806 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_64811__$1 = state_64811;
var statearr_64816_68225 = state_64811__$1;
(statearr_64816_68225[(2)] = inst_64806);

(statearr_64816_68225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64812 === (4))){
var state_64811__$1 = state_64811;
var statearr_64817_68226 = state_64811__$1;
(statearr_64817_68226[(2)] = null);

(statearr_64817_68226[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64812 === (5))){
var inst_64803 = (state_64811[(7)]);
var inst_64809 = (state_64811[(2)]);
var state_64811__$1 = (function (){var statearr_64818 = state_64811;
(statearr_64818[(8)] = inst_64809);

return statearr_64818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64811__$1,inst_64803);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64819 = [null,null,null,null,null,null,null,null,null];
(statearr_64819[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64819[(1)] = (1));

return statearr_64819;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64811){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64811);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64820){var ex__41842__auto__ = e64820;
var statearr_64821_68227 = state_64811;
(statearr_64821_68227[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64811[(4)]))){
var statearr_64822_68228 = state_64811;
(statearr_64822_68228[(1)] = cljs.core.first((state_64811[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68229 = state_64811;
state_64811 = G__68229;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64811){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64829 = f__41862__auto__();
(statearr_64829[(6)] = c__41861__auto__);

return statearr_64829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RSAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.RSAPI.cljs$lang$type = true);

(frontend.fs.sync.RSAPI.cljs$lang$ctorStr = "frontend.fs.sync/RSAPI");

(frontend.fs.sync.RSAPI.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"frontend.fs.sync/RSAPI");
}));

/**
 * Positional factory function for frontend.fs.sync/RSAPI.
 */
frontend.fs.sync.__GT_RSAPI = (function frontend$fs$sync$__GT_RSAPI(){
return (new frontend.fs.sync.RSAPI());
});


/**
* @constructor
 * @implements {frontend.fs.sync.IToken}
 * @implements {frontend.fs.sync.IRSAPI}
*/
frontend.fs.sync.CapacitorAPI = (function (){
});
(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IToken$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IToken$get_token$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64849){
var state_val_64850 = (state_64849[(1)]);
if((state_val_64850 === (1))){
var inst_64840 = (state_64849[(7)]);
var inst_64840__$1 = frontend.state.get_auth_id_token();
var state_64849__$1 = (function (){var statearr_64852 = state_64849;
(statearr_64852[(7)] = inst_64840__$1);

return statearr_64852;
})();
if(cljs.core.truth_(inst_64840__$1)){
var statearr_64853_68241 = state_64849__$1;
(statearr_64853_68241[(1)] = (2));

} else {
var statearr_64855_68242 = state_64849__$1;
(statearr_64855_68242[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64850 === (2))){
var inst_64840 = (state_64849[(7)]);
var state_64849__$1 = state_64849;
var statearr_64856_68243 = state_64849__$1;
(statearr_64856_68243[(2)] = inst_64840);

(statearr_64856_68243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64850 === (3))){
var inst_64843 = this$__$1.refresh_token();
var state_64849__$1 = state_64849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64849__$1,(5),inst_64843);
} else {
if((state_val_64850 === (4))){
var inst_64847 = (state_64849[(2)]);
var state_64849__$1 = state_64849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64849__$1,inst_64847);
} else {
if((state_val_64850 === (5))){
var inst_64845 = (state_64849[(2)]);
var state_64849__$1 = state_64849;
var statearr_64858_68244 = state_64849__$1;
(statearr_64858_68244[(2)] = inst_64845);

(statearr_64858_68244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64859 = [null,null,null,null,null,null,null,null];
(statearr_64859[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64859[(1)] = (1));

return statearr_64859;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64849){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64849);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64860){var ex__41842__auto__ = e64860;
var statearr_64861_68248 = state_64849;
(statearr_64861_68248[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64849[(4)]))){
var statearr_64863_68254 = state_64849;
(statearr_64863_68254[(1)] = cljs.core.first((state_64849[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68256 = state_64849;
state_64849 = G__68256;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64849){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64864 = f__41862__auto__();
(statearr_64864[(6)] = c__41861__auto__);

return statearr_64864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64870){
var state_val_64871 = (state_64870[(1)]);
if((state_val_64871 === (1))){
var inst_64865 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_64870__$1 = state_64870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64870__$1,(2),inst_64865);
} else {
if((state_val_64871 === (2))){
var inst_64867 = (state_64870[(2)]);
var inst_64868 = frontend.state.get_auth_id_token();
var state_64870__$1 = (function (){var statearr_64876 = state_64870;
(statearr_64876[(7)] = inst_64867);

return statearr_64876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64870__$1,inst_64868);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64877 = [null,null,null,null,null,null,null,null];
(statearr_64877[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64877[(1)] = (1));

return statearr_64877;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64870){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64870);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64878){var ex__41842__auto__ = e64878;
var statearr_64879_68263 = state_64870;
(statearr_64879_68263[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64870[(4)]))){
var statearr_64880_68264 = state_64870;
(statearr_64880_68264[(1)] = cljs.core.first((state_64870[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68270 = state_64870;
state_64870 = G__68270;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64870){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64881 = f__41862__auto__();
(statearr_64881[(6)] = c__41861__auto__);

return statearr_64881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5 = (function (this$,graph_uuid,_base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var token = cljs.core.async._LT__BANG_(this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null));
var r = cljs.core.async._LT__BANG_(cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteRemoteFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"txid","txid",1606205478),local_txid,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)))));
if((r instanceof cljs.core.ExceptionInfo)){
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(r),"txid");
}
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3 = (function (_,_graph_uuid,base_path){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64903){
var state_val_64904 = (state_64903[(1)]);
if((state_val_64904 === (1))){
var inst_64883 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017)];
var inst_64884 = [base_path];
var inst_64885 = cljs.core.PersistentHashMap.fromArrays(inst_64883,inst_64884);
var inst_64886 = cljs.core.clj__GT_js(inst_64885);
var inst_64887 = frontend.mobile.util.file_sync.getLocalAllFilesMeta(inst_64886);
var inst_64888 = cljs.core.async.interop.p__GT_c(inst_64887);
var state_64903__$1 = state_64903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64903__$1,(2),inst_64888);
} else {
if((state_val_64904 === (2))){
var inst_64890 = (state_64903[(7)]);
var inst_64890__$1 = (state_64903[(2)]);
var inst_64891 = (inst_64890__$1 instanceof cljs.core.ExceptionInfo);
var state_64903__$1 = (function (){var statearr_64906 = state_64903;
(statearr_64906[(7)] = inst_64890__$1);

return statearr_64906;
})();
if(cljs.core.truth_(inst_64891)){
var statearr_64907_68279 = state_64903__$1;
(statearr_64907_68279[(1)] = (3));

} else {
var statearr_64908_68280 = state_64903__$1;
(statearr_64908_68280[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64904 === (3))){
var inst_64890 = (state_64903[(7)]);
var state_64903__$1 = state_64903;
var statearr_64909_68281 = state_64903__$1;
(statearr_64909_68281[(2)] = inst_64890);

(statearr_64909_68281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64904 === (4))){
var inst_64890 = (state_64903[(7)]);
var inst_64895 = (function (){var r = inst_64890;
return (function (p__64894){
var vec__64910 = p__64894;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64910,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64910,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_64896 = inst_64890.result;
var inst_64897 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_64896);
var inst_64898 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_64895,inst_64897);
var inst_64899 = cljs.core.set(inst_64898);
var state_64903__$1 = state_64903;
var statearr_64914_68288 = state_64903__$1;
(statearr_64914_68288[(2)] = inst_64899);

(statearr_64914_68288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64904 === (5))){
var inst_64901 = (state_64903[(2)]);
var state_64903__$1 = state_64903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64903__$1,inst_64901);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64919 = [null,null,null,null,null,null,null,null];
(statearr_64919[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64919[(1)] = (1));

return statearr_64919;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64903){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64903);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64920){var ex__41842__auto__ = e64920;
var statearr_64921_68289 = state_64903;
(statearr_64921_68289[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64903[(4)]))){
var statearr_64922_68290 = state_64903;
(statearr_64922_68290[(1)] = cljs.core.first((state_64903[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68292 = state_64903;
state_64903 = G__68292;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64903){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64923 = f__41862__auto__();
(statearr_64923[(6)] = c__41861__auto__);

return statearr_64923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_local_files$arity$4 = (function (this$,graph_uuid,base_path,filepaths){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64938){
var state_val_64939 = (state_64938[(1)]);
if((state_val_64939 === (1))){
var inst_64924 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_64938__$1 = state_64938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64938__$1,(2),inst_64924);
} else {
if((state_val_64939 === (2))){
var inst_64926 = (state_64938[(2)]);
var inst_64927 = (function (){var token = inst_64926;
return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.updateLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))));
});
})();
var inst_64928 = frontend.fs.sync.retry_rsapi(inst_64927);
var state_64938__$1 = state_64938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64938__$1,(3),inst_64928);
} else {
if((state_val_64939 === (3))){
var inst_64930 = (state_64938[(2)]);
var inst_64931 = frontend.state.developer_mode_QMARK_();
var state_64938__$1 = (function (){var statearr_64942 = state_64938;
(statearr_64942[(7)] = inst_64930);

return statearr_64942;
})();
if(cljs.core.truth_(inst_64931)){
var statearr_64943_68303 = state_64938__$1;
(statearr_64943_68303[(1)] = (4));

} else {
var statearr_64944_68304 = state_64938__$1;
(statearr_64944_68304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64939 === (4))){
var inst_64933 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_64938__$1 = state_64938;
var statearr_64945_68305 = state_64938__$1;
(statearr_64945_68305[(2)] = inst_64933);

(statearr_64945_68305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64939 === (5))){
var state_64938__$1 = state_64938;
var statearr_64946_68306 = state_64938__$1;
(statearr_64946_68306[(2)] = null);

(statearr_64946_68306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64939 === (6))){
var inst_64930 = (state_64938[(7)]);
var inst_64936 = (state_64938[(2)]);
var state_64938__$1 = (function (){var statearr_64947 = state_64938;
(statearr_64947[(8)] = inst_64936);

return statearr_64947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64938__$1,inst_64930);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64948 = [null,null,null,null,null,null,null,null,null];
(statearr_64948[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64948[(1)] = (1));

return statearr_64948;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64938){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64938);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64949){var ex__41842__auto__ = e64949;
var statearr_64950_68308 = state_64938;
(statearr_64950_68308[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64938[(4)]))){
var statearr_64951_68309 = state_64938;
(statearr_64951_68309[(1)] = cljs.core.first((state_64938[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68310 = state_64938;
state_64938 = G__68310;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64938){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64952 = f__41862__auto__();
(statearr_64952[(6)] = c__41861__auto__);

return statearr_64952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 = (function (_,_graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65001){
var state_val_65002 = (state_65001[(1)]);
if((state_val_65002 === (1))){
var inst_64980 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318)];
var inst_64981 = [base_path,filepaths];
var inst_64982 = cljs.core.PersistentHashMap.fromArrays(inst_64980,inst_64981);
var inst_64983 = cljs.core.clj__GT_js(inst_64982);
var inst_64984 = frontend.mobile.util.file_sync.getLocalFilesMeta(inst_64983);
var inst_64985 = cljs.core.async.interop.p__GT_c(inst_64984);
var state_65001__$1 = state_65001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65001__$1,(2),inst_64985);
} else {
if((state_val_65002 === (2))){
var inst_64987 = (state_65001[(7)]);
var inst_64987__$1 = (state_65001[(2)]);
var inst_64989 = (inst_64987__$1 instanceof cljs.core.ExceptionInfo);
var state_65001__$1 = (function (){var statearr_65004 = state_65001;
(statearr_65004[(7)] = inst_64987__$1);

return statearr_65004;
})();
if(cljs.core.truth_(inst_64989)){
var statearr_65009_68315 = state_65001__$1;
(statearr_65009_68315[(1)] = (3));

} else {
var statearr_65010_68316 = state_65001__$1;
(statearr_65010_68316[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65002 === (3))){
var inst_64987 = (state_65001[(7)]);
var state_65001__$1 = state_65001;
var statearr_65015_68317 = state_65001__$1;
(statearr_65015_68317[(2)] = inst_64987);

(statearr_65015_68317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65002 === (4))){
var inst_64987 = (state_65001[(7)]);
var inst_64993 = (function (){var r = inst_64987;
return (function (p__64992){
var vec__65017 = p__64992;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65017,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65017,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_64994 = inst_64987.result;
var inst_64995 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_64994);
var inst_64996 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_64993,inst_64995);
var inst_64997 = cljs.core.set(inst_64996);
var state_65001__$1 = state_65001;
var statearr_65024_68319 = state_65001__$1;
(statearr_65024_68319[(2)] = inst_64997);

(statearr_65024_68319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65002 === (5))){
var inst_64999 = (state_65001[(2)]);
var state_65001__$1 = state_65001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65001__$1,inst_64999);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65031 = [null,null,null,null,null,null,null,null];
(statearr_65031[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65031[(1)] = (1));

return statearr_65031;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65001){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65001);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65033){var ex__41842__auto__ = e65033;
var statearr_65038_68320 = state_65001;
(statearr_65038_68320[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65001[(4)]))){
var statearr_65040_68326 = state_65001;
(statearr_65040_68326[(1)] = cljs.core.first((state_65001[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68328 = state_65001;
state_65001 = G__68328;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65001){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65052 = f__41862__auto__();
(statearr_65052[(6)] = c__41861__auto__);

return statearr_65052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65098){
var state_val_65099 = (state_65098[(1)]);
if((state_val_65099 === (1))){
var inst_65071 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_65098__$1 = state_65098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65098__$1,(2),inst_65071);
} else {
if((state_val_65099 === (2))){
var inst_65076 = (state_65098[(2)]);
var inst_65081 = [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),new cljs.core.Keyword(null,"txid","txid",1606205478),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_65082 = [graph_uuid,base_path,filepaths,local_txid,inst_65076];
var inst_65083 = cljs.core.PersistentHashMap.fromArrays(inst_65081,inst_65082);
var inst_65084 = cljs.core.clj__GT_js(inst_65083);
var inst_65085 = frontend.mobile.util.file_sync.updateRemoteFiles(inst_65084);
var inst_65086 = cljs.core.async.interop.p__GT_c(inst_65085);
var state_65098__$1 = state_65098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65098__$1,(3),inst_65086);
} else {
if((state_val_65099 === (3))){
var inst_65088 = (state_65098[(7)]);
var inst_65088__$1 = (state_65098[(2)]);
var inst_65089 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.sync","debug-update-remote-files","frontend.fs.sync/debug-update-remote-files",-1146829271),inst_65088__$1], 0));
var inst_65090 = (inst_65088__$1 instanceof cljs.core.ExceptionInfo);
var state_65098__$1 = (function (){var statearr_65122 = state_65098;
(statearr_65122[(8)] = inst_65089);

(statearr_65122[(7)] = inst_65088__$1);

return statearr_65122;
})();
if(cljs.core.truth_(inst_65090)){
var statearr_65123_68329 = state_65098__$1;
(statearr_65123_68329[(1)] = (4));

} else {
var statearr_65124_68330 = state_65098__$1;
(statearr_65124_68330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65099 === (4))){
var inst_65088 = (state_65098[(7)]);
var state_65098__$1 = state_65098;
var statearr_65137_68332 = state_65098__$1;
(statearr_65137_68332[(2)] = inst_65088);

(statearr_65137_68332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65099 === (5))){
var inst_65088 = (state_65098[(7)]);
var inst_65093 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_65088);
var inst_65094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65093,"txid");
var state_65098__$1 = state_65098;
var statearr_65146_68334 = state_65098__$1;
(statearr_65146_68334[(2)] = inst_65094);

(statearr_65146_68334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65099 === (6))){
var inst_65096 = (state_65098[(2)]);
var state_65098__$1 = state_65098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65098__$1,inst_65096);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65151 = [null,null,null,null,null,null,null,null,null];
(statearr_65151[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65151[(1)] = (1));

return statearr_65151;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65098){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65098);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65152){var ex__41842__auto__ = e65152;
var statearr_65153_68338 = state_65098;
(statearr_65153_68338[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65098[(4)]))){
var statearr_65154_68339 = state_65098;
(statearr_65154_68339[(1)] = cljs.core.first((state_65098[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68341 = state_65098;
state_65098 = G__68341;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65098){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65155 = f__41862__auto__();
(statearr_65155[(6)] = c__41861__auto__);

return statearr_65155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$set_env$arity$2 = (function (_,prod_QMARK_){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65181){
var state_val_65182 = (state_65181[(1)]);
if((state_val_65182 === (1))){
var inst_65163 = [new cljs.core.Keyword(null,"env","env",-1815813235)];
var state_65181__$1 = (function (){var statearr_65188 = state_65181;
(statearr_65188[(7)] = inst_65163);

return statearr_65188;
})();
if(cljs.core.truth_(prod_QMARK_)){
var statearr_65189_68348 = state_65181__$1;
(statearr_65189_68348[(1)] = (3));

} else {
var statearr_65190_68349 = state_65181__$1;
(statearr_65190_68349[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65182 === (2))){
var inst_65179 = (state_65181[(2)]);
var state_65181__$1 = state_65181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65181__$1,inst_65179);
} else {
if((state_val_65182 === (3))){
var state_65181__$1 = state_65181;
var statearr_65191_68350 = state_65181__$1;
(statearr_65191_68350[(2)] = "prod");

(statearr_65191_68350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65182 === (4))){
var state_65181__$1 = state_65181;
var statearr_65192_68351 = state_65181__$1;
(statearr_65192_68351[(2)] = "dev");

(statearr_65192_68351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65182 === (5))){
var inst_65163 = (state_65181[(7)]);
var inst_65172 = (state_65181[(2)]);
var inst_65173 = [inst_65172];
var inst_65174 = cljs.core.PersistentHashMap.fromArrays(inst_65163,inst_65173);
var inst_65175 = cljs.core.clj__GT_js(inst_65174);
var inst_65176 = frontend.mobile.util.file_sync.setEnv(inst_65175);
var inst_65177 = cljs.core.async.interop.p__GT_c(inst_65176);
var state_65181__$1 = state_65181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65181__$1,(2),inst_65177);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65198 = [null,null,null,null,null,null,null,null];
(statearr_65198[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65198[(1)] = (1));

return statearr_65198;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65181){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65181);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65204){var ex__41842__auto__ = e65204;
var statearr_65206_68352 = state_65181;
(statearr_65206_68352[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65181[(4)]))){
var statearr_65212_68354 = state_65181;
(statearr_65212_68354[(1)] = cljs.core.first((state_65181[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68355 = state_65181;
state_65181 = G__68355;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65181){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65218 = f__41862__auto__();
(statearr_65218[(6)] = c__41861__auto__);

return statearr_65218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var self__ = this;
var this$__$1 = this;
return this$__$1.frontend$fs$sync$IRSAPI$update_remote_files$arity$5(null,graph_uuid,base_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath], null),local_txid);
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 = (function (_,_graph_uuid,base_path,from,to){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65232){
var state_val_65233 = (state_65232[(1)]);
if((state_val_65233 === (1))){
var inst_65222 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)];
var inst_65224 = [base_path,from,to];
var inst_65225 = cljs.core.PersistentHashMap.fromArrays(inst_65222,inst_65224);
var inst_65226 = cljs.core.clj__GT_js(inst_65225);
var inst_65227 = frontend.mobile.util.file_sync.renameLocalFile(inst_65226);
var inst_65228 = cljs.core.async.interop.p__GT_c(inst_65227);
var state_65232__$1 = state_65232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65232__$1,(2),inst_65228);
} else {
if((state_val_65233 === (2))){
var inst_65230 = (state_65232[(2)]);
var state_65232__$1 = state_65232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65232__$1,inst_65230);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65234 = [null,null,null,null,null,null,null];
(statearr_65234[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65234[(1)] = (1));

return statearr_65234;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65232){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65232);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65235){var ex__41842__auto__ = e65235;
var statearr_65236_68360 = state_65232;
(statearr_65236_68360[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65232[(4)]))){
var statearr_65237_68361 = state_65232;
(statearr_65237_68361[(1)] = cljs.core.first((state_65232[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68362 = state_65232;
state_65232 = G__68362;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65232){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65238 = f__41862__auto__();
(statearr_65238[(6)] = c__41861__auto__);

return statearr_65238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 = (function (_,_graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65250){
var state_val_65251 = (state_65250[(1)]);
if((state_val_65251 === (1))){
var inst_65239 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths], null))));
});
})();
var inst_65240 = frontend.fs.sync.retry_rsapi(inst_65239);
var state_65250__$1 = state_65250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65250__$1,(2),inst_65240);
} else {
if((state_val_65251 === (2))){
var inst_65242 = (state_65250[(2)]);
var inst_65243 = frontend.state.developer_mode_QMARK_();
var state_65250__$1 = (function (){var statearr_65252 = state_65250;
(statearr_65252[(7)] = inst_65242);

return statearr_65252;
})();
if(cljs.core.truth_(inst_65243)){
var statearr_65253_68369 = state_65250__$1;
(statearr_65253_68369[(1)] = (3));

} else {
var statearr_65254_68370 = state_65250__$1;
(statearr_65254_68370[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65251 === (3))){
var inst_65245 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_65250__$1 = state_65250;
var statearr_65255_68371 = state_65250__$1;
(statearr_65255_68371[(2)] = inst_65245);

(statearr_65255_68371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65251 === (4))){
var state_65250__$1 = state_65250;
var statearr_65256_68372 = state_65250__$1;
(statearr_65256_68372[(2)] = null);

(statearr_65256_68372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65251 === (5))){
var inst_65242 = (state_65250[(7)]);
var inst_65248 = (state_65250[(2)]);
var state_65250__$1 = (function (){var statearr_65257 = state_65250;
(statearr_65257[(8)] = inst_65248);

return statearr_65257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65250__$1,inst_65242);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65258 = [null,null,null,null,null,null,null,null,null];
(statearr_65258[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65258[(1)] = (1));

return statearr_65258;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65250){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65250);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65259){var ex__41842__auto__ = e65259;
var statearr_65260_68373 = state_65250;
(statearr_65260_68373[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65250[(4)]))){
var statearr_65261_68375 = state_65250;
(statearr_65261_68375[(1)] = cljs.core.first((state_65250[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68376 = state_65250;
state_65250 = G__68376;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65250){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65262 = f__41862__auto__();
(statearr_65262[(6)] = c__41861__auto__);

return statearr_65262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.CapacitorAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.CapacitorAPI.cljs$lang$type = true);

(frontend.fs.sync.CapacitorAPI.cljs$lang$ctorStr = "frontend.fs.sync/CapacitorAPI");

(frontend.fs.sync.CapacitorAPI.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"frontend.fs.sync/CapacitorAPI");
}));

/**
 * Positional factory function for frontend.fs.sync/CapacitorAPI.
 */
frontend.fs.sync.__GT_CapacitorAPI = (function frontend$fs$sync$__GT_CapacitorAPI(){
return (new frontend.fs.sync.CapacitorAPI());
});

frontend.fs.sync.rsapi = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.fs.sync.__GT_RSAPI():(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?frontend.fs.sync.__GT_CapacitorAPI():null
));

/**
* @constructor
 * @implements {frontend.fs.sync.IToken}
 * @implements {frontend.fs.sync.IRemoteAPI}
*/
frontend.fs.sync.RemoteAPI = (function (){
});
(frontend.fs.sync.RemoteAPI.prototype.request = (function (api_name,body){
var self__ = this;
var this$ = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65287){
var state_val_65288 = (state_65287[(1)]);
if((state_val_65288 === (1))){
var inst_65267 = this$.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_65287__$1 = state_65287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65287__$1,(3),inst_65267);
} else {
if((state_val_65288 === (2))){
var inst_65273 = (state_65287[(7)]);
var inst_65273__$1 = (state_65287[(2)]);
var inst_65274 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_65273__$1);
var inst_65275 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_65274) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_65274));
var state_65287__$1 = (function (){var statearr_65290 = state_65287;
(statearr_65290[(7)] = inst_65273__$1);

return statearr_65290;
})();
if(cljs.core.truth_(inst_65275)){
var statearr_65291_68381 = state_65287__$1;
(statearr_65291_68381[(1)] = (4));

} else {
var statearr_65292_68382 = state_65287__$1;
(statearr_65292_68382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65288 === (3))){
var inst_65269 = (state_65287[(2)]);
var inst_65270 = (function (){return (function (){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(null);
});
})();
var inst_65271 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4(api_name,body,inst_65269,inst_65270);
var state_65287__$1 = state_65287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65287__$1,(2),inst_65271);
} else {
if((state_val_65288 === (4))){
var inst_65273 = (state_65287[(7)]);
var inst_65277 = frontend.fs.sync.get_resp_json_body(inst_65273);
var state_65287__$1 = state_65287;
var statearr_65293_68389 = state_65287__$1;
(statearr_65293_68389[(2)] = inst_65277);

(statearr_65293_68389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65288 === (5))){
var inst_65273 = (state_65287[(7)]);
var inst_65279 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65280 = frontend.fs.sync.get_resp_json_body(inst_65273);
var inst_65281 = [inst_65273,inst_65280];
var inst_65282 = cljs.core.PersistentHashMap.fromArrays(inst_65279,inst_65281);
var inst_65283 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request failed",inst_65282);
var state_65287__$1 = state_65287;
var statearr_65294_68390 = state_65287__$1;
(statearr_65294_68390[(2)] = inst_65283);

(statearr_65294_68390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65288 === (6))){
var inst_65285 = (state_65287[(2)]);
var state_65287__$1 = state_65287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65287__$1,inst_65285);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65295 = [null,null,null,null,null,null,null,null];
(statearr_65295[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65295[(1)] = (1));

return statearr_65295;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65287){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65287);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65296){var ex__41842__auto__ = e65296;
var statearr_65297_68392 = state_65287;
(statearr_65297_68392[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65287[(4)]))){
var statearr_65298_68393 = state_65287;
(statearr_65298_68393[(1)] = cljs.core.first((state_65287[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68396 = state_65287;
state_65287 = G__68396;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65287){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65300 = f__41862__auto__();
(statearr_65300[(6)] = c__41861__auto__);

return statearr_65300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.update_files = (function (graph_uuid,txid,files){
var self__ = this;
var this$ = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_(files),typeof txid === 'number'], null)], null);

return this$.request("update_files",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid,new cljs.core.Keyword(null,"TXId","TXId",-902804781),txid,new cljs.core.Keyword(null,"Files","Files",1992500914),files], null));
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IToken$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IToken$get_token$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65312){
var state_val_65313 = (state_65312[(1)]);
if((state_val_65313 === (1))){
var inst_65303 = (state_65312[(7)]);
var inst_65303__$1 = frontend.state.get_auth_id_token();
var state_65312__$1 = (function (){var statearr_65318 = state_65312;
(statearr_65318[(7)] = inst_65303__$1);

return statearr_65318;
})();
if(cljs.core.truth_(inst_65303__$1)){
var statearr_65319_68399 = state_65312__$1;
(statearr_65319_68399[(1)] = (2));

} else {
var statearr_65320_68400 = state_65312__$1;
(statearr_65320_68400[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65313 === (2))){
var inst_65303 = (state_65312[(7)]);
var state_65312__$1 = state_65312;
var statearr_65321_68407 = state_65312__$1;
(statearr_65321_68407[(2)] = inst_65303);

(statearr_65321_68407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65313 === (3))){
var inst_65306 = this$__$1.frontend$fs$sync$IToken$refresh_token$arity$1(null);
var state_65312__$1 = state_65312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65312__$1,(5),inst_65306);
} else {
if((state_val_65313 === (4))){
var inst_65310 = (state_65312[(2)]);
var state_65312__$1 = state_65312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65312__$1,inst_65310);
} else {
if((state_val_65313 === (5))){
var inst_65308 = (state_65312[(2)]);
var state_65312__$1 = state_65312;
var statearr_65322_68408 = state_65312__$1;
(statearr_65322_68408[(2)] = inst_65308);

(statearr_65322_68408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65323 = [null,null,null,null,null,null,null,null];
(statearr_65323[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65323[(1)] = (1));

return statearr_65323;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65312){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65312);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65328){var ex__41842__auto__ = e65328;
var statearr_65329_68410 = state_65312;
(statearr_65329_68410[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65312[(4)]))){
var statearr_65330_68411 = state_65312;
(statearr_65330_68411[(1)] = cljs.core.first((state_65312[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68414 = state_65312;
state_65312 = G__68414;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65312){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65331 = f__41862__auto__();
(statearr_65331[(6)] = c__41861__auto__);

return statearr_65331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65337){
var state_val_65338 = (state_65337[(1)]);
if((state_val_65338 === (1))){
var inst_65332 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_65337__$1 = state_65337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65337__$1,(2),inst_65332);
} else {
if((state_val_65338 === (2))){
var inst_65334 = (state_65337[(2)]);
var inst_65335 = frontend.state.get_auth_id_token();
var state_65337__$1 = (function (){var statearr_65343 = state_65337;
(statearr_65343[(7)] = inst_65334);

return statearr_65343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65337__$1,inst_65335);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65344 = [null,null,null,null,null,null,null,null];
(statearr_65344[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65344[(1)] = (1));

return statearr_65344;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65337){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65337);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65345){var ex__41842__auto__ = e65345;
var statearr_65346_68420 = state_65337;
(statearr_65346_68420[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65337[(4)]))){
var statearr_65347_68424 = state_65337;
(statearr_65347_68424[(1)] = cljs.core.first((state_65337[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68425 = state_65337;
state_65337 = G__68425;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65337){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65352 = f__41862__auto__();
(statearr_65352[(6)] = c__41861__auto__);

return statearr_65352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2 = (function (this$,graph_uuid){
var self__ = this;
var this$__$1 = this;
var file_meta_list = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65392){
var state_val_65393 = (state_65392[(1)]);
if((state_val_65393 === (7))){
var inst_65388 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
var statearr_65394_68426 = state_65392__$1;
(statearr_65394_68426[(2)] = inst_65388);

(statearr_65394_68426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (1))){
var inst_65353 = null;
var inst_65354 = null;
var state_65392__$1 = (function (){var statearr_65395 = state_65392;
(statearr_65395[(7)] = inst_65354);

(statearr_65395[(8)] = inst_65353);

return statearr_65395;
})();
var statearr_65398_68428 = state_65392__$1;
(statearr_65398_68428[(2)] = null);

(statearr_65398_68428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (4))){
var inst_65365 = (state_65392[(9)]);
var inst_65365__$1 = (state_65392[(2)]);
var inst_65366 = (inst_65365__$1 instanceof cljs.core.ExceptionInfo);
var state_65392__$1 = (function (){var statearr_65399 = state_65392;
(statearr_65399[(9)] = inst_65365__$1);

return statearr_65399;
})();
if(cljs.core.truth_(inst_65366)){
var statearr_65400_68429 = state_65392__$1;
(statearr_65400_68429[(1)] = (5));

} else {
var statearr_65401_68430 = state_65392__$1;
(statearr_65401_68430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (13))){
var inst_65386 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
var statearr_65403_68431 = state_65392__$1;
(statearr_65403_68431[(2)] = inst_65386);

(statearr_65403_68431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (6))){
var inst_65354 = (state_65392[(7)]);
var inst_65370 = (state_65392[(10)]);
var inst_65365 = (state_65392[(9)]);
var inst_65353 = (state_65392[(8)]);
var inst_65369 = (state_65392[(11)]);
var inst_65375 = (state_65392[(12)]);
var inst_65369__$1 = new cljs.core.Keyword(null,"NextDir","NextDir",-113026321).cljs$core$IFn$_invoke$arity$1(inst_65365);
var inst_65370__$1 = new cljs.core.Keyword(null,"NextContinuationToken","NextContinuationToken",1106322029).cljs$core$IFn$_invoke$arity$1(inst_65365);
var inst_65371 = new cljs.core.Keyword(null,"Objects","Objects",-610644271).cljs$core$IFn$_invoke$arity$1(inst_65365);
var inst_65372 = (function (){var dir = inst_65353;
var continuation_token = inst_65354;
var r = inst_65365;
var next_dir = inst_65369__$1;
var next_continuation_token = inst_65370__$1;
var objs = inst_65371;
return (function (p1__65265_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__65265_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__65265_SHARP_),frontend.fs.sync.remove_user_graph_uuid_prefix(decodeURIComponent(new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__65265_SHARP_))),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__65265_SHARP_),true,null);
});
})();
var inst_65373 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65372,inst_65371);
var inst_65374 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,file_meta_list,inst_65373);
var inst_65375__$1 = cljs.core.empty_QMARK_(inst_65369__$1);
var state_65392__$1 = (function (){var statearr_65404 = state_65392;
(statearr_65404[(10)] = inst_65370__$1);

(statearr_65404[(13)] = inst_65374);

(statearr_65404[(11)] = inst_65369__$1);

(statearr_65404[(12)] = inst_65375__$1);

return statearr_65404;
})();
if(inst_65375__$1){
var statearr_65405_68435 = state_65392__$1;
(statearr_65405_68435[(1)] = (8));

} else {
var statearr_65406_68436 = state_65392__$1;
(statearr_65406_68436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (3))){
var inst_65390 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65392__$1,inst_65390);
} else {
if((state_val_65393 === (12))){
var inst_65370 = (state_65392[(10)]);
var inst_65369 = (state_65392[(11)]);
var inst_65353 = inst_65369;
var inst_65354 = inst_65370;
var state_65392__$1 = (function (){var statearr_65409 = state_65392;
(statearr_65409[(7)] = inst_65354);

(statearr_65409[(8)] = inst_65353);

return statearr_65409;
})();
var statearr_65410_68438 = state_65392__$1;
(statearr_65410_68438[(2)] = null);

(statearr_65410_68438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (2))){
var inst_65354 = (state_65392[(7)]);
var inst_65353 = (state_65392[(8)]);
var inst_65356 = cljs.core.PersistentHashMap.EMPTY;
var inst_65357 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second);
var inst_65358 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Dir","Dir",1454706553),new cljs.core.Keyword(null,"ContinuationToken","ContinuationToken",-770030188)];
var inst_65359 = [graph_uuid,inst_65353,inst_65354];
var inst_65360 = cljs.core.PersistentHashMap.fromArrays(inst_65358,inst_65359);
var inst_65361 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_65357,inst_65360);
var inst_65362 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_65356,inst_65361);
var inst_65363 = this$__$1.request("get_all_files",inst_65362);
var state_65392__$1 = state_65392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65392__$1,(4),inst_65363);
} else {
if((state_val_65393 === (11))){
var inst_65382 = cljs.core.persistent_BANG_(file_meta_list);
var state_65392__$1 = state_65392;
var statearr_65411_68439 = state_65392__$1;
(statearr_65411_68439[(2)] = inst_65382);

(statearr_65411_68439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (9))){
var inst_65375 = (state_65392[(12)]);
var state_65392__$1 = state_65392;
var statearr_65414_68440 = state_65392__$1;
(statearr_65414_68440[(2)] = inst_65375);

(statearr_65414_68440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (5))){
var inst_65365 = (state_65392[(9)]);
var state_65392__$1 = state_65392;
var statearr_65415_68441 = state_65392__$1;
(statearr_65415_68441[(2)] = inst_65365);

(statearr_65415_68441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (10))){
var inst_65380 = (state_65392[(2)]);
var state_65392__$1 = state_65392;
if(cljs.core.truth_(inst_65380)){
var statearr_65416_68442 = state_65392__$1;
(statearr_65416_68442[(1)] = (11));

} else {
var statearr_65417_68443 = state_65392__$1;
(statearr_65417_68443[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65393 === (8))){
var inst_65370 = (state_65392[(10)]);
var inst_65377 = cljs.core.empty_QMARK_(inst_65370);
var state_65392__$1 = state_65392;
var statearr_65418_68444 = state_65392__$1;
(statearr_65418_68444[(2)] = inst_65377);

(statearr_65418_68444[(1)] = (10));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65419[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65419[(1)] = (1));

return statearr_65419;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65392){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65392);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65420){var ex__41842__auto__ = e65420;
var statearr_65421_68445 = state_65392;
(statearr_65421_68445[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65392[(4)]))){
var statearr_65422_68446 = state_65392;
(statearr_65422_68446[(1)] = cljs.core.first((state_65392[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68447 = state_65392;
state_65392 = G__68447;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65392){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65425 = f__41862__auto__();
(statearr_65425[(6)] = c__41861__auto__);

return statearr_65425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3 = (function (this$,graph_uuid,filepaths){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_(filepaths)], null)], null);

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65443){
var state_val_65444 = (state_65443[(1)]);
if((state_val_65444 === (1))){
var inst_65426 = (state_65443[(7)]);
var inst_65426__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.encode_filepath,filepaths);
var inst_65427 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Files","Files",1992500914)];
var inst_65428 = [graph_uuid,inst_65426__$1];
var inst_65429 = cljs.core.PersistentHashMap.fromArrays(inst_65427,inst_65428);
var inst_65430 = this$__$1.request("get_files_meta",inst_65429);
var state_65443__$1 = (function (){var statearr_65445 = state_65443;
(statearr_65445[(7)] = inst_65426__$1);

return statearr_65445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65443__$1,(2),inst_65430);
} else {
if((state_val_65444 === (2))){
var inst_65432 = (state_65443[(8)]);
var inst_65432__$1 = (state_65443[(2)]);
var inst_65433 = (inst_65432__$1 instanceof cljs.core.ExceptionInfo);
var state_65443__$1 = (function (){var statearr_65446 = state_65443;
(statearr_65446[(8)] = inst_65432__$1);

return statearr_65446;
})();
if(cljs.core.truth_(inst_65433)){
var statearr_65447_68450 = state_65443__$1;
(statearr_65447_68450[(1)] = (3));

} else {
var statearr_65448_68451 = state_65443__$1;
(statearr_65448_68451[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65444 === (3))){
var inst_65432 = (state_65443[(8)]);
var state_65443__$1 = state_65443;
var statearr_65449_68452 = state_65443__$1;
(statearr_65449_68452[(2)] = inst_65432);

(statearr_65449_68452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65444 === (4))){
var inst_65432 = (state_65443[(8)]);
var inst_65426 = (state_65443[(7)]);
var inst_65436 = cljs.core.PersistentHashSet.EMPTY;
var inst_65437 = (function (){var encoded_filepaths = inst_65426;
var r = inst_65432;
return (function (p1__65266_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__65266_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__65266_SHARP_),decodeURIComponent(new cljs.core.Keyword(null,"FilePath","FilePath",1522398781).cljs$core$IFn$_invoke$arity$1(p1__65266_SHARP_)),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__65266_SHARP_),true,null);
});
})();
var inst_65438 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_65437);
var inst_65439 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_65436,inst_65438,inst_65432);
var state_65443__$1 = state_65443;
var statearr_65451_68453 = state_65443__$1;
(statearr_65451_68453[(2)] = inst_65439);

(statearr_65451_68453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65444 === (5))){
var inst_65441 = (state_65443[(2)]);
var state_65443__$1 = state_65443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65443__$1,inst_65441);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65455 = [null,null,null,null,null,null,null,null,null];
(statearr_65455[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65455[(1)] = (1));

return statearr_65455;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65443){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65443);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65456){var ex__41842__auto__ = e65456;
var statearr_65457_68458 = state_65443;
(statearr_65457_68458[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65443[(4)]))){
var statearr_65458_68459 = state_65443;
(statearr_65458_68459[(1)] = cljs.core.first((state_65443[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68460 = state_65443;
state_65443 = G__68460;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65443){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65459 = f__41862__auto__();
(statearr_65459[(6)] = c__41861__auto__);

return statearr_65459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3 = (function (this$,graph_name_opt,graph_uuid_opt){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4253__auto__ = graph_name_opt;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return graph_uuid_opt;
}
})()], null)], null);

return this$__$1.request("get_graph",(function (){var G__65460 = cljs.core.PersistentArrayMap.EMPTY;
var G__65460__$1 = ((cljs.core.seq(graph_name_opt))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65460,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name_opt):G__65460);
if(cljs.core.seq(graph_uuid_opt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65460__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid_opt);
} else {
return G__65460__$1;
}
})());
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3 = (function (this$,graph_uuid,filepath){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("get_file_version_list",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid,new cljs.core.Keyword(null,"File","File",-1707525042),frontend.fs.sync.encode_filepath(filepath)], null));
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("list_graphs");
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_diff$arity$3 = (function (this$,graph_uuid,from_txid){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65484){
var state_val_65485 = (state_65484[(1)]);
if((state_val_65485 === (1))){
var inst_65462 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"FromTXId","FromTXId",-1493550374)];
var inst_65463 = [graph_uuid,from_txid];
var inst_65464 = cljs.core.PersistentHashMap.fromArrays(inst_65462,inst_65463);
var inst_65465 = this$__$1.request("get_diff",inst_65464);
var state_65484__$1 = state_65484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65484__$1,(2),inst_65465);
} else {
if((state_val_65485 === (2))){
var inst_65467 = (state_65484[(7)]);
var inst_65467__$1 = (state_65484[(2)]);
var inst_65468 = (inst_65467__$1 instanceof cljs.core.ExceptionInfo);
var state_65484__$1 = (function (){var statearr_65486 = state_65484;
(statearr_65486[(7)] = inst_65467__$1);

return statearr_65486;
})();
if(cljs.core.truth_(inst_65468)){
var statearr_65487_68461 = state_65484__$1;
(statearr_65487_68461[(1)] = (3));

} else {
var statearr_65488_68462 = state_65484__$1;
(statearr_65488_68462[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65485 === (3))){
var inst_65467 = (state_65484[(7)]);
var state_65484__$1 = state_65484;
var statearr_65489_68463 = state_65484__$1;
(statearr_65489_68463[(2)] = inst_65467);

(statearr_65489_68463[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65485 === (4))){
var inst_65467 = (state_65484[(7)]);
var inst_65472 = new cljs.core.Keyword(null,"Transactions","Transactions",-836353760).cljs$core$IFn$_invoke$arity$1(inst_65467);
var inst_65473 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TXId","TXId",-902804781),inst_65472);
var inst_65474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65475 = cljs.core.last(inst_65473);
var inst_65476 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_65475);
var inst_65477 = cljs.core.first(inst_65473);
var inst_65478 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_65477);
var inst_65479 = [inst_65473,inst_65476,inst_65478];
var inst_65480 = (new cljs.core.PersistentVector(null,3,(5),inst_65474,inst_65479,null));
var state_65484__$1 = state_65484;
var statearr_65490_68466 = state_65484__$1;
(statearr_65490_68466[(2)] = inst_65480);

(statearr_65490_68466[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65485 === (5))){
var inst_65482 = (state_65484[(2)]);
var state_65484__$1 = state_65484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65484__$1,inst_65482);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65491 = [null,null,null,null,null,null,null,null];
(statearr_65491[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65491[(1)] = (1));

return statearr_65491;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65484){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65484);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65492){var ex__41842__auto__ = e65492;
var statearr_65493_68467 = state_65484;
(statearr_65493_68467[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65484[(4)]))){
var statearr_65494_68468 = state_65484;
(statearr_65494_68468[(1)] = cljs.core.first((state_65484[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68469 = state_65484;
state_65484 = G__68469;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65484){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65495 = f__41862__auto__();
(statearr_65495[(6)] = c__41861__auto__);

return statearr_65495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$create_graph$arity$2 = (function (this$,graph_name){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("create_graph",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name], null));
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2 = (function (this$,graph_uuid){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("delete_graph",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid], null));
}));

(frontend.fs.sync.RemoteAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.RemoteAPI.cljs$lang$type = true);

(frontend.fs.sync.RemoteAPI.cljs$lang$ctorStr = "frontend.fs.sync/RemoteAPI");

(frontend.fs.sync.RemoteAPI.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"frontend.fs.sync/RemoteAPI");
}));

/**
 * Positional factory function for frontend.fs.sync/RemoteAPI.
 */
frontend.fs.sync.__GT_RemoteAPI = (function frontend$fs$sync$__GT_RemoteAPI(){
return (new frontend.fs.sync.RemoteAPI());
});

frontend.fs.sync.remoteapi = frontend.fs.sync.__GT_RemoteAPI();
frontend.fs.sync.apply_filetxns = (function frontend$fs$sync$apply_filetxns(graph_uuid,base_path,filetxns){
if(cljs.core.truth_(cljs.core.first(filetxns).renamed_QMARK_())){
var filetxn = cljs.core.first(filetxns);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(filetxns))){
} else {
throw (new Error("Assert failed: (= 1 (count filetxns))"));
}

return frontend.fs.sync.rename_local_file(frontend.fs.sync.rsapi,graph_uuid,base_path,frontend.fs.sync.relative_path(filetxn.from_path),frontend.fs.sync.relative_path(filetxn.to_path));
} else {
if(cljs.core.truth_(cljs.core.first(filetxns).updated_QMARK_)){
return frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns));
} else {
if(cljs.core.truth_(cljs.core.first(filetxns).deleted_QMARK_)){
var filetxn = cljs.core.first(filetxns);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(filetxns))){
} else {
throw (new Error("Assert failed: (= 1 (count filetxns))"));
}

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65516){
var state_val_65517 = (state_65516[(1)]);
if((state_val_65517 === (1))){
var inst_65496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65497 = frontend.fs.sync.relative_path(filetxn);
var inst_65498 = [inst_65497];
var inst_65499 = (new cljs.core.PersistentVector(null,1,(5),inst_65496,inst_65498,null));
var inst_65500 = frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_65499);
var state_65516__$1 = state_65516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65516__$1,(2),inst_65500);
} else {
if((state_val_65517 === (2))){
var inst_65503 = (state_65516[(7)]);
var inst_65502 = (state_65516[(8)]);
var inst_65502__$1 = (state_65516[(2)]);
var inst_65503__$1 = (inst_65502__$1 instanceof cljs.core.ExceptionInfo);
var state_65516__$1 = (function (){var statearr_65518 = state_65516;
(statearr_65518[(7)] = inst_65503__$1);

(statearr_65518[(8)] = inst_65502__$1);

return statearr_65518;
})();
if(cljs.core.truth_(inst_65503__$1)){
var statearr_65519_68470 = state_65516__$1;
(statearr_65519_68470[(1)] = (3));

} else {
var statearr_65520_68471 = state_65516__$1;
(statearr_65520_68471[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65517 === (3))){
var inst_65502 = (state_65516[(8)]);
var inst_65505 = cljs.core.ex_cause(inst_65502);
var inst_65506 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65505);
var inst_65507 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_65506,"No such file or directory");
var state_65516__$1 = state_65516;
var statearr_65521_68474 = state_65516__$1;
(statearr_65521_68474[(2)] = inst_65507);

(statearr_65521_68474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65517 === (4))){
var inst_65503 = (state_65516[(7)]);
var state_65516__$1 = state_65516;
var statearr_65522_68475 = state_65516__$1;
(statearr_65522_68475[(2)] = inst_65503);

(statearr_65522_68475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65517 === (5))){
var inst_65510 = (state_65516[(2)]);
var state_65516__$1 = state_65516;
if(cljs.core.truth_(inst_65510)){
var statearr_65523_68476 = state_65516__$1;
(statearr_65523_68476[(1)] = (6));

} else {
var statearr_65524_68477 = state_65516__$1;
(statearr_65524_68477[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65517 === (6))){
var state_65516__$1 = state_65516;
var statearr_65525_68478 = state_65516__$1;
(statearr_65525_68478[(2)] = true);

(statearr_65525_68478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65517 === (7))){
var inst_65502 = (state_65516[(8)]);
var state_65516__$1 = state_65516;
var statearr_65526_68479 = state_65516__$1;
(statearr_65526_68479[(2)] = inst_65502);

(statearr_65526_68479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65517 === (8))){
var inst_65514 = (state_65516[(2)]);
var state_65516__$1 = state_65516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65516__$1,inst_65514);
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
});
return (function() {
var frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____0 = (function (){
var statearr_65527 = [null,null,null,null,null,null,null,null,null];
(statearr_65527[(0)] = frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__);

(statearr_65527[(1)] = (1));

return statearr_65527;
});
var frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____1 = (function (state_65516){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65516);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65528){var ex__41842__auto__ = e65528;
var statearr_65529_68481 = state_65516;
(statearr_65529_68481[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65516[(4)]))){
var statearr_65530_68482 = state_65516;
(statearr_65530_68482[(1)] = cljs.core.first((state_65516[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68483 = state_65516;
state_65516 = G__68483;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__ = function(state_65516){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____1.call(this,state_65516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____0;
frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____1;
return frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65531 = f__41862__auto__();
(statearr_65531[(6)] = c__41861__auto__);

return statearr_65531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
} else {
return null;
}
}
}
});




/**
 * won't call update-graph-txid! when *txid is nil
 */
frontend.fs.sync.apply_filetxns_partitions = (function frontend$fs$sync$apply_filetxns_partitions(_STAR_sync_state,user_uuid,graph_uuid,base_path,filetxns_partitions,repo,_STAR_txid,_STAR_stopped){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65575){
var state_val_65576 = (state_65575[(1)]);
if((state_val_65576 === (7))){
var inst_65545 = (state_65575[(7)]);
var inst_65544 = (state_65575[(8)]);
var inst_65534 = (state_65575[(9)]);
var inst_65544__$1 = cljs.core.first(inst_65534);
var inst_65545__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_65544__$1);
var inst_65546 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__add_current_remote__GT_local_files,inst_65545__$1);
var inst_65547 = frontend.fs.sync.apply_filetxns(graph_uuid,base_path,inst_65544__$1);
var state_65575__$1 = (function (){var statearr_65577 = state_65575;
(statearr_65577[(7)] = inst_65545__$1);

(statearr_65577[(8)] = inst_65544__$1);

(statearr_65577[(10)] = inst_65546);

return statearr_65577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65575__$1,(10),inst_65547);
} else {
if((state_val_65576 === (1))){
var inst_65533 = filetxns_partitions;
var inst_65534 = inst_65533;
var state_65575__$1 = (function (){var statearr_65578 = state_65575;
(statearr_65578[(9)] = inst_65534);

return statearr_65578;
})();
var statearr_65579_68486 = state_65575__$1;
(statearr_65579_68486[(2)] = null);

(statearr_65579_68486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (4))){
var inst_65538 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_65539 = [true];
var inst_65540 = cljs.core.PersistentHashMap.fromArrays(inst_65538,inst_65539);
var state_65575__$1 = state_65575;
var statearr_65580_68487 = state_65575__$1;
(statearr_65580_68487[(2)] = inst_65540);

(statearr_65580_68487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (15))){
var state_65575__$1 = state_65575;
var statearr_65581_68489 = state_65575__$1;
(statearr_65581_68489[(2)] = null);

(statearr_65581_68489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (13))){
var inst_65566 = (state_65575[(2)]);
var state_65575__$1 = state_65575;
var statearr_65582_68491 = state_65575__$1;
(statearr_65582_68491[(2)] = inst_65566);

(statearr_65582_68491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (6))){
var inst_65571 = (state_65575[(2)]);
var state_65575__$1 = state_65575;
var statearr_65583_68492 = state_65575__$1;
(statearr_65583_68492[(2)] = inst_65571);

(statearr_65583_68492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (3))){
var inst_65573 = (state_65575[(2)]);
var state_65575__$1 = state_65575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65575__$1,inst_65573);
} else {
if((state_val_65576 === (12))){
var inst_65550 = (state_65575[(11)]);
var inst_65545 = (state_65575[(7)]);
var inst_65544 = (state_65575[(8)]);
var inst_65549 = (state_65575[(12)]);
var inst_65534 = (state_65575[(9)]);
var inst_65554 = (function (){var filetxns_partitions_STAR_ = inst_65534;
var filetxns = inst_65544;
var paths = inst_65545;
var _ = inst_65550;
var r = inst_65549;
return (function (p1__65532_SHARP_){
return p1__65532_SHARP_.txid;
});
})();
var inst_65555 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65554,inst_65544);
var inst_65556 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,inst_65555);
var state_65575__$1 = (function (){var statearr_65584 = state_65575;
(statearr_65584[(13)] = inst_65556);

return statearr_65584;
})();
if(cljs.core.truth_(_STAR_txid)){
var statearr_65585_68494 = state_65575__$1;
(statearr_65585_68494[(1)] = (14));

} else {
var statearr_65586_68495 = state_65575__$1;
(statearr_65586_68495[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (2))){
var inst_65536 = cljs.core.deref(_STAR_stopped);
var state_65575__$1 = state_65575;
if(cljs.core.truth_(inst_65536)){
var statearr_65587_68496 = state_65575__$1;
(statearr_65587_68496[(1)] = (4));

} else {
var statearr_65588_68498 = state_65575__$1;
(statearr_65588_68498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (11))){
var inst_65549 = (state_65575[(12)]);
var state_65575__$1 = state_65575;
var statearr_65589_68499 = state_65575__$1;
(statearr_65589_68499[(2)] = inst_65549);

(statearr_65589_68499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (9))){
var inst_65569 = (state_65575[(2)]);
var state_65575__$1 = state_65575;
var statearr_65590_68500 = state_65575__$1;
(statearr_65590_68500[(2)] = inst_65569);

(statearr_65590_68500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (5))){
var inst_65534 = (state_65575[(9)]);
var inst_65542 = cljs.core.seq(inst_65534);
var state_65575__$1 = state_65575;
if(inst_65542){
var statearr_65591_68501 = state_65575__$1;
(statearr_65591_68501[(1)] = (7));

} else {
var statearr_65592_68504 = state_65575__$1;
(statearr_65592_68504[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (14))){
var inst_65556 = (state_65575[(13)]);
var inst_65558 = cljs.core.reset_BANG_(_STAR_txid,inst_65556);
var inst_65559 = frontend.fs.sync.update_graphs_txid_BANG_(inst_65556,graph_uuid,user_uuid,repo);
var state_65575__$1 = (function (){var statearr_65593 = state_65575;
(statearr_65593[(14)] = inst_65558);

return statearr_65593;
})();
var statearr_65594_68505 = state_65575__$1;
(statearr_65594_68505[(2)] = inst_65559);

(statearr_65594_68505[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (16))){
var inst_65534 = (state_65575[(9)]);
var inst_65562 = (state_65575[(2)]);
var inst_65563 = cljs.core.next(inst_65534);
var inst_65534__$1 = inst_65563;
var state_65575__$1 = (function (){var statearr_65595 = state_65575;
(statearr_65595[(15)] = inst_65562);

(statearr_65595[(9)] = inst_65534__$1);

return statearr_65595;
})();
var statearr_65596_68506 = state_65575__$1;
(statearr_65596_68506[(2)] = null);

(statearr_65596_68506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (10))){
var inst_65545 = (state_65575[(7)]);
var inst_65549 = (state_65575[(12)]);
var inst_65549__$1 = (state_65575[(2)]);
var inst_65550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__remove_current_remote__GT_local_files,inst_65545);
var inst_65551 = (inst_65549__$1 instanceof cljs.core.ExceptionInfo);
var state_65575__$1 = (function (){var statearr_65597 = state_65575;
(statearr_65597[(11)] = inst_65550);

(statearr_65597[(12)] = inst_65549__$1);

return statearr_65597;
})();
if(cljs.core.truth_(inst_65551)){
var statearr_65598_68507 = state_65575__$1;
(statearr_65598_68507[(1)] = (11));

} else {
var statearr_65599_68508 = state_65575__$1;
(statearr_65599_68508[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65576 === (8))){
var state_65575__$1 = state_65575;
var statearr_65600_68509 = state_65575__$1;
(statearr_65600_68509[(2)] = null);

(statearr_65600_68509[(1)] = (9));


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
});
return (function() {
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____0 = (function (){
var statearr_65601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65601[(0)] = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__);

(statearr_65601[(1)] = (1));

return statearr_65601;
});
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____1 = (function (state_65575){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65575);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65602){var ex__41842__auto__ = e65602;
var statearr_65603_68510 = state_65575;
(statearr_65603_68510[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65575[(4)]))){
var statearr_65604_68511 = state_65575;
(statearr_65604_68511[(1)] = cljs.core.first((state_65575[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68512 = state_65575;
state_65575 = G__68512;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__ = function(state_65575){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____1.call(this,state_65575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____0;
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____1;
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65605 = f__41862__auto__();
(statearr_65605[(6)] = c__41861__auto__);

return statearr_65605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.sync !== 'undefined') && (typeof frontend.fs.sync.need_sync_remote_QMARK_ !== 'undefined')){
} else {
frontend.fs.sync.need_sync_remote_QMARK_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65606 = cljs.core.get_global_hierarchy;
return (fexpr__65606.cljs$core$IFn$_invoke$arity$0 ? fexpr__65606.cljs$core$IFn$_invoke$arity$0() : fexpr__65606.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.fs.sync","need-sync-remote?"),(function (v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),v)){
return new cljs.core.Keyword(null,"max","max",61366548);
} else {
if(((cljs.core.vector_QMARK_(v)) && (typeof cljs.core.first(v) === 'number'))){
return new cljs.core.Keyword(null,"txid","txid",1606205478);
} else {
if((v instanceof cljs.core.ExceptionInfo)){
return new cljs.core.Keyword(null,"exceptional-response","exceptional-response",-71987345);
} else {
if((v instanceof cljs.core.async.impl.channels.ManyToManyChannel)){
return new cljs.core.Keyword(null,"chan","chan",-2103021695);
} else {
return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"max","max",61366548),(function (_){
return true;
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"txid","txid",1606205478),(function (p__65607){
var vec__65608 = p__65607;
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65608,(0),null);
var remote__GT_local_syncer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65608,(1),null);
var remote_txid = txid;
var local_txid = remote__GT_local_syncer.txid;
return (((local_txid == null)) || ((remote_txid > local_txid)));
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"exceptional-response","exceptional-response",-71987345),(function (resp){
var data = cljs.core.ex_data(resp);
var cause = cljs.core.ex_cause(resp);
var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
if(and__4251__auto__){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cause),"txid_to_validate");
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((409),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
}
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chan","chan",-2103021695),(function (c){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65615){
var state_val_65616 = (state_65615[(1)]);
if((state_val_65616 === (1))){
var state_65615__$1 = state_65615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65615__$1,(2),c);
} else {
if((state_val_65616 === (2))){
var inst_65612 = (state_65615[(2)]);
var inst_65613 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_65612);
var state_65615__$1 = state_65615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65615__$1,inst_65613);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65617 = [null,null,null,null,null,null,null];
(statearr_65617[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65617[(1)] = (1));

return statearr_65617;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65615){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65615);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65618){var ex__41842__auto__ = e65618;
var statearr_65619_68520 = state_65615;
(statearr_65619_68520[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65615[(4)]))){
var statearr_65620_68521 = state_65615;
(statearr_65620_68521[(1)] = cljs.core.first((state_65615[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68522 = state_65615;
state_65615 = G__68522;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65615){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65621 = f__41862__auto__();
(statearr_65621[(6)] = c__41861__auto__);

return statearr_65621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return false;
}));

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {frontend.fs.sync.IRelativePath}
 * @implements {cljs.core.IPrintWithWriter}
*/
frontend.fs.sync.FileChangeEvent = (function (type,dir,path,stat){
this.type = type;
this.dir = dir;
this.path = path;
this.stat = stat;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(frontend.fs.sync.FileChangeEvent.prototype.frontend$fs$sync$IRelativePath$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.FileChangeEvent.prototype.frontend$fs$sync$IRelativePath$_relative_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frontend.fs.sync.remove_dir_prefix(self__.dir,self__.path);
}));

(frontend.fs.sync.FileChangeEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.dir,other.dir)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,other.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)))));
}));

(frontend.fs.sync.FileChangeEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,w,_opts){
var self__ = this;
var ___$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),self__.type,new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.dir,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(self__.stat)], null))], 0));
}));

(frontend.fs.sync.FileChangeEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"stat","stat",269931691,null)], null);
}));

(frontend.fs.sync.FileChangeEvent.cljs$lang$type = true);

(frontend.fs.sync.FileChangeEvent.cljs$lang$ctorStr = "frontend.fs.sync/FileChangeEvent");

(frontend.fs.sync.FileChangeEvent.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"frontend.fs.sync/FileChangeEvent");
}));

/**
 * Positional factory function for frontend.fs.sync/FileChangeEvent.
 */
frontend.fs.sync.__GT_FileChangeEvent = (function frontend$fs$sync$__GT_FileChangeEvent(type,dir,path,stat){
return (new frontend.fs.sync.FileChangeEvent(type,dir,path,stat));
});

/**
 * return transducer.
 *   partition `FileChangeEvent`s, at most N file-change-events in each partition.
 *   only one type in a partition.
 */
frontend.fs.sync.partition_file_change_events = (function frontend$fs$sync$partition_file_change_events(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (e){
var G__65627 = e.type;
switch (G__65627) {
case "add":
case "change":
return new cljs.core.Keyword(null,"add-or-change","add-or-change",1006483131);

break;
case "unlink":
return new cljs.core.Keyword(null,"unlink","unlink",-1436843875);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65627)].join('')));

}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__65625_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,p1__65625_SHARP_);
})),cljs.core.cat);
});
frontend.fs.sync.local_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
/**
 * file-watcher callback
 */
frontend.fs.sync.file_watch_handler = (function frontend$fs$sync$file_watch_handler(type,p__65628){
var map__65629 = p__65628;
var map__65629__$1 = cljs.core.__destructure_map(map__65629);
var _payload = map__65629__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65629__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65629__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65629__$1,new cljs.core.Keyword(null,"_content","_content",-555820160));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65629__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
if(cljs.core.truth_((function (){var G__65630 = frontend.state.get_file_sync_state();
var G__65630__$1 = (((G__65630 == null))?null:(frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65630) : frontend.fs.sync.sync_state__stopped_QMARK_.call(null,G__65630)));
if((G__65630__$1 == null)){
return null;
} else {
return cljs.core.not(G__65630__$1);
}
})())){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65635){
var state_val_65636 = (state_65635[(1)]);
if((state_val_65636 === (1))){
var inst_65631 = frontend.fs.sync.__GT_FileChangeEvent(type,dir,path,stat);
var state_65635__$1 = state_65635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65635__$1,(2),frontend.fs.sync.local_changes_chan,inst_65631);
} else {
if((state_val_65636 === (2))){
var inst_65633 = (state_65635[(2)]);
var state_65635__$1 = state_65635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65635__$1,inst_65633);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____0 = (function (){
var statearr_65637 = [null,null,null,null,null,null,null];
(statearr_65637[(0)] = frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__);

(statearr_65637[(1)] = (1));

return statearr_65637;
});
var frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____1 = (function (state_65635){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65635);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65638){var ex__41842__auto__ = e65638;
var statearr_65639_68530 = state_65635;
(statearr_65639_68530[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65635[(4)]))){
var statearr_65640_68531 = state_65635;
(statearr_65640_68531[(1)] = cljs.core.first((state_65635[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68532 = state_65635;
state_65635 = G__68532;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__ = function(state_65635){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____1.call(this,state_65635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____0;
frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____1;
return frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65642 = f__41862__auto__();
(statearr_65642[(6)] = c__41861__auto__);

return statearr_65642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
} else {
return null;
}
});
/**
 * create a new sync-state
 */
frontend.fs.sync.sync_state = (function frontend$fs$sync$sync_state(){
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY], null);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__update_state = (function frontend$fs$sync$sync_state__update_state(sync_state,next_state){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),next_state)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/state next-state)"));
}

var _PERCENT_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sync_state,new cljs.core.Keyword(null,"state","state",-1988618099),next_state);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__add_current_remote__GT_local_files = (function frontend$fs$sync$sync_state__add_current_remote__GT_local_files(sync_state,paths){
var _PERCENT_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),cljs.core.into,paths);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__add_current_local__GT_remote_files = (function frontend$fs$sync$sync_state__add_current_local__GT_remote_files(sync_state,paths){
var _PERCENT_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),cljs.core.into,paths);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__update_queued_local__GT_remote_files = (function frontend$fs$sync$sync_state__update_queued_local__GT_remote_files(sync_state,paths){
var _PERCENT_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),(function (_,n){
return cljs.core.set(n);
}),paths);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.add_history_items = (function frontend$fs$sync$add_history_items(history,paths,now){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168)),cljs.core.take.cljs$core$IFn$_invoke$arity$1((20))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(history,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"time","time",1385887882),now], null);
}),paths)));
});
frontend.fs.sync.sync_state__remove_current_remote__GT_local_files = (function frontend$fs$sync$sync_state__remove_current_remote__GT_local_files(sync_state,paths){
var _PERCENT_ = (function (){var now = cljs_time.core.now();
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),clojure.set.difference,paths),new cljs.core.Keyword(null,"history","history",-247395220),frontend.fs.sync.add_history_items,paths,now);
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__remove_current_local__GT_remote_files = (function frontend$fs$sync$sync_state__remove_current_local__GT_remote_files(sync_state,paths){
var _PERCENT_ = (function (){var now = cljs_time.core.now();
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),clojure.set.difference,paths),new cljs.core.Keyword(null,"history","history",-247395220),frontend.fs.sync.add_history_items,paths,now);
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__stopped_QMARK_ = (function frontend$fs$sync$sync_state__stopped_QMARK_(sync_state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(sync_state));
});

/**
 * @interface
 */
frontend.fs.sync.IRemote__GT_LocalSync = function(){};

var frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_68538 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.stop_remote__GT_local_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.stop_remote__GT_local_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemote->LocalSync.stop-remote->local!",this$);
}
}
});
frontend.fs.sync.stop_remote__GT_local_BANG_ = (function frontend$fs$sync$stop_remote__GT_local_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_68538(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_68539 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.sync_remote__GT_local_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.sync_remote__GT_local_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemote->LocalSync.sync-remote->local!",this$);
}
}
});
/**
 * return ExceptionInfo when error occurs
 */
frontend.fs.sync.sync_remote__GT_local_BANG_ = (function frontend$fs$sync$sync_remote__GT_local_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_68539(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_68540 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.sync_remote__GT_local_all_files_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.sync_remote__GT_local_all_files_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemote->LocalSync.sync-remote->local-all-files!",this$);
}
}
});
/**
 * sync all files, return ExceptionInfo when error occurs
 */
frontend.fs.sync.sync_remote__GT_local_all_files_BANG_ = (function frontend$fs$sync$sync_remote__GT_local_all_files_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_68540(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.ILocal__GT_RemoteSync = function(){};

var frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_68546 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_ignore_files[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_ignore_files["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.get-ignore-files",this$);
}
}
});
/**
 * ignored-files won't be synced to remote
 */
frontend.fs.sync.get_ignore_files = (function frontend$fs$sync$get_ignore_files(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_68546(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_68547 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.get_monitored_dirs[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.get_monitored_dirs["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.get-monitored-dirs",this$);
}
}
});
frontend.fs.sync.get_monitored_dirs = (function frontend$fs$sync$get_monitored_dirs(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_68547(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_68548 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.stop_local__GT_remote_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.stop_local__GT_remote_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.stop-local->remote!",this$);
}
}
});
frontend.fs.sync.stop_local__GT_remote_BANG_ = (function frontend$fs$sync$stop_local__GT_remote_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_68548(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_68549 = (function (this$,from_chan){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.ratelimit[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,from_chan) : m__4551__auto__.call(null,this$,from_chan));
} else {
var m__4549__auto__ = (frontend.fs.sync.ratelimit["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,from_chan) : m__4549__auto__.call(null,this$,from_chan));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.ratelimit",this$);
}
}
});
/**
 * get watched local file-change events from FROM-CHAN,
 *   return chan returning events with rate limited
 */
frontend.fs.sync.ratelimit = (function frontend$fs$sync$ratelimit(this$,from_chan){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2(this$,from_chan);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_68549(this$,from_chan);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_68550 = (function (this$,es){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.sync_local__GT_remote_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,es) : m__4551__auto__.call(null,this$,es));
} else {
var m__4549__auto__ = (frontend.fs.sync.sync_local__GT_remote_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,es) : m__4549__auto__.call(null,this$,es));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.sync-local->remote!",this$);
}
}
});
/**
 * es is a sequence of `FileChangeEvent`, all items have same type.
 */
frontend.fs.sync.sync_local__GT_remote_BANG_ = (function frontend$fs$sync$sync_local__GT_remote_BANG_(this$,es){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(this$,es);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_68550(this$,es);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_68551 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.fs.sync.sync_local__GT_remote_all_files_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.fs.sync.sync_local__GT_remote_all_files_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.sync-local->remote-all-files!",this$);
}
}
});
/**
 * compare all local files to remote ones, sync when not equal.
 *   if local-txid != remote-txid, return {:need-sync-remote true}
 */
frontend.fs.sync.sync_local__GT_remote_all_files_BANG_ = (function frontend$fs$sync$sync_local__GT_remote_all_files_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_68551(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {frontend.fs.sync.IRemote__GT_LocalSync}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.sync.Remote__GT_LocalSyncer = (function (user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,local__GT_remote_syncer,_STAR_stopped,__meta,__extmap,__hash){
this.user_uuid = user_uuid;
this.graph_uuid = graph_uuid;
this.base_path = base_path;
this.repo = repo;
this._STAR_txid = _STAR_txid;
this._STAR_sync_state = _STAR_sync_state;
this.local__GT_remote_syncer = local__GT_remote_syncer;
this._STAR_stopped = _STAR_stopped;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.set_local__GT_remote_syncer_BANG_ = (function (s){
var self__ = this;
var _ = this;
return (self__.local__GT_remote_syncer = s);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.sync_files_remote__GT_local_BANG_ = (function (relative_filepaths,latest_txid){
var self__ = this;
var _ = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65730){
var state_val_65731 = (state_65730[(1)]);
if((state_val_65731 === (7))){
var inst_65709 = cljs.core.deref(self__._STAR_stopped);
var state_65730__$1 = state_65730;
if(cljs.core.truth_(inst_65709)){
var statearr_65732_68554 = state_65730__$1;
(statearr_65732_68554[(1)] = (9));

} else {
var statearr_65733_68555 = state_65730__$1;
(statearr_65733_68555[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (1))){
var inst_65689 = (state_65730[(7)]);
var inst_65688 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),self__.graph_uuid,self__.user_uuid);
var inst_65689__$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_65688,relative_filepaths);
var inst_65690 = cljs.core.flatten(inst_65689__$1);
var inst_65691 = cljs.core.empty_QMARK_(inst_65690);
var state_65730__$1 = (function (){var statearr_65736 = state_65730;
(statearr_65736[(7)] = inst_65689__$1);

return statearr_65736;
})();
if(inst_65691){
var statearr_65739_68556 = state_65730__$1;
(statearr_65739_68556[(1)] = (2));

} else {
var statearr_65740_68557 = state_65730__$1;
(statearr_65740_68557[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (4))){
var inst_65701 = (state_65730[(8)]);
var inst_65701__$1 = (state_65730[(2)]);
var inst_65702 = (inst_65701__$1 instanceof cljs.core.ExceptionInfo);
var state_65730__$1 = (function (){var statearr_65745 = state_65730;
(statearr_65745[(8)] = inst_65701__$1);

return statearr_65745;
})();
if(cljs.core.truth_(inst_65702)){
var statearr_65746_68558 = state_65730__$1;
(statearr_65746_68558[(1)] = (6));

} else {
var statearr_65747_68559 = state_65730__$1;
(statearr_65747_68559[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (13))){
var state_65730__$1 = state_65730;
var statearr_65748_68560 = state_65730__$1;
(statearr_65748_68560[(2)] = null);

(statearr_65748_68560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (6))){
var inst_65701 = (state_65730[(8)]);
var inst_65705 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_65706 = [inst_65701];
var inst_65707 = cljs.core.PersistentHashMap.fromArrays(inst_65705,inst_65706);
var state_65730__$1 = state_65730;
var statearr_65749_68561 = state_65730__$1;
(statearr_65749_68561[(2)] = inst_65707);

(statearr_65749_68561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (3))){
var inst_65689 = (state_65730[(7)]);
var inst_65697 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_65689,self__.repo,null,self__._STAR_stopped);
var state_65730__$1 = state_65730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65730__$1,(5),inst_65697);
} else {
if((state_val_65731 === (12))){
var inst_65717 = frontend.fs.sync.update_graphs_txid_BANG_(latest_txid,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_65718 = cljs.core.reset_BANG_(self__._STAR_txid,latest_txid);
var inst_65719 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_65720 = [true];
var inst_65721 = cljs.core.PersistentHashMap.fromArrays(inst_65719,inst_65720);
var state_65730__$1 = (function (){var statearr_65752 = state_65730;
(statearr_65752[(9)] = inst_65718);

(statearr_65752[(10)] = inst_65717);

return statearr_65752;
})();
var statearr_65753_68564 = state_65730__$1;
(statearr_65753_68564[(2)] = inst_65721);

(statearr_65753_68564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (2))){
var inst_65693 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_65694 = [true];
var inst_65695 = cljs.core.PersistentHashMap.fromArrays(inst_65693,inst_65694);
var state_65730__$1 = state_65730;
var statearr_65755_68566 = state_65730__$1;
(statearr_65755_68566[(2)] = inst_65695);

(statearr_65755_68566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (11))){
var inst_65726 = (state_65730[(2)]);
var state_65730__$1 = state_65730;
var statearr_65756_68567 = state_65730__$1;
(statearr_65756_68567[(2)] = inst_65726);

(statearr_65756_68567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (9))){
var inst_65712 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_65713 = [true];
var inst_65714 = cljs.core.PersistentHashMap.fromArrays(inst_65712,inst_65713);
var state_65730__$1 = state_65730;
var statearr_65758_68568 = state_65730__$1;
(statearr_65758_68568[(2)] = inst_65714);

(statearr_65758_68568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (5))){
var inst_65699 = (state_65730[(2)]);
var state_65730__$1 = state_65730;
var statearr_65759_68569 = state_65730__$1;
(statearr_65759_68569[(2)] = inst_65699);

(statearr_65759_68569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (14))){
var inst_65724 = (state_65730[(2)]);
var state_65730__$1 = state_65730;
var statearr_65760_68570 = state_65730__$1;
(statearr_65760_68570[(2)] = inst_65724);

(statearr_65760_68570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (10))){
var state_65730__$1 = state_65730;
var statearr_65761_68571 = state_65730__$1;
(statearr_65761_68571[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65731 === (8))){
var inst_65728 = (state_65730[(2)]);
var state_65730__$1 = state_65730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65730__$1,inst_65728);
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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65763[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65763[(1)] = (1));

return statearr_65763;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65730){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65730);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65764){var ex__41842__auto__ = e65764;
var statearr_65765_68572 = state_65730;
(statearr_65765_68572[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65730[(4)]))){
var statearr_65766_68573 = state_65730;
(statearr_65766_68573[(1)] = cljs.core.first((state_65730[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68574 = state_65730;
state_65730 = G__68574;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65730){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65767 = f__41862__auto__();
(statearr_65767[(6)] = c__41861__auto__);

return statearr_65767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k65684,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__65768 = k65684;
var G__65768__$1 = (((G__65768 instanceof cljs.core.Keyword))?G__65768.fqn:null);
switch (G__65768__$1) {
case "user-uuid":
return self__.user_uuid;

break;
case "graph-uuid":
return self__.graph_uuid;

break;
case "base-path":
return self__.base_path;

break;
case "repo":
return self__.repo;

break;
case "*txid":
return self__._STAR_txid;

break;
case "*sync-state":
return self__._STAR_sync_state;

break;
case "local->remote-syncer":
return self__.local__GT_remote_syncer;

break;
case "*stopped":
return self__._STAR_stopped;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65684,else__4505__auto__);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__65769){
var vec__65770 = p__65769;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65770,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65770,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.vreset_BANG_(self__._STAR_stopped,true);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65864){
var state_val_65865 = (state_65864[(1)]);
if((state_val_65865 === (7))){
var inst_65787 = (state_65864[(7)]);
var inst_65791 = (inst_65787 - (1));
var inst_65792 = cljs.core.deref(self__._STAR_txid);
var inst_65793 = (inst_65791 > inst_65792);
var state_65864__$1 = state_65864;
var statearr_65866_68576 = state_65864__$1;
(statearr_65866_68576[(2)] = inst_65793);

(statearr_65866_68576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (20))){
var inst_65841 = cljs.core.deref(self__._STAR_stopped);
var state_65864__$1 = state_65864;
if(cljs.core.truth_(inst_65841)){
var statearr_65869_68577 = state_65864__$1;
(statearr_65869_68577[(1)] = (22));

} else {
var statearr_65870_68578 = state_65864__$1;
(statearr_65870_68578[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (27))){
var inst_65858 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
var statearr_65871_68579 = state_65864__$1;
(statearr_65871_68579[(2)] = inst_65858);

(statearr_65871_68579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (1))){
var inst_65773 = cljs.core.deref(self__._STAR_txid);
var inst_65774 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(null,self__.graph_uuid,inst_65773);
var state_65864__$1 = state_65864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65864__$1,(2),inst_65774);
} else {
if((state_val_65865 === (24))){
var inst_65860 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
var statearr_65876_68582 = state_65864__$1;
(statearr_65876_68582[(2)] = inst_65860);

(statearr_65876_68582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (4))){
var inst_65788 = (state_65864[(8)]);
var inst_65787 = (state_65864[(7)]);
var inst_65776 = (state_65864[(9)]);
var inst_65784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65776,(0),null);
var inst_65785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65776,(1),null);
var inst_65787__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65776,(2),null);
var inst_65788__$1 = (inst_65787__$1 == null);
var state_65864__$1 = (function (){var statearr_65880 = state_65864;
(statearr_65880[(10)] = inst_65784);

(statearr_65880[(8)] = inst_65788__$1);

(statearr_65880[(7)] = inst_65787__$1);

(statearr_65880[(11)] = inst_65785);

return statearr_65880;
})();
if(cljs.core.truth_(inst_65788__$1)){
var statearr_65881_68584 = state_65864__$1;
(statearr_65881_68584[(1)] = (6));

} else {
var statearr_65882_68585 = state_65864__$1;
(statearr_65882_68585[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (15))){
var inst_65785 = (state_65864[(11)]);
var inst_65814 = frontend.fs.sync.update_graphs_txid_BANG_(inst_65785,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_65815 = cljs.core.reset_BANG_(self__._STAR_txid,inst_65785);
var inst_65817 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_65818 = [true];
var inst_65819 = cljs.core.PersistentHashMap.fromArrays(inst_65817,inst_65818);
var state_65864__$1 = (function (){var statearr_65883 = state_65864;
(statearr_65883[(12)] = inst_65815);

(statearr_65883[(13)] = inst_65814);

return statearr_65883;
})();
var statearr_65887_68586 = state_65864__$1;
(statearr_65887_68586[(2)] = inst_65819);

(statearr_65887_68586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (21))){
var inst_65862 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65864__$1,inst_65862);
} else {
if((state_val_65865 === (13))){
var state_65864__$1 = state_65864;
var statearr_65888_68587 = state_65864__$1;
(statearr_65888_68587[(2)] = null);

(statearr_65888_68587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (22))){
var inst_65843 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_65844 = [true];
var inst_65845 = cljs.core.PersistentHashMap.fromArrays(inst_65843,inst_65844);
var state_65864__$1 = state_65864;
var statearr_65889_68588 = state_65864__$1;
(statearr_65889_68588[(2)] = inst_65845);

(statearr_65889_68588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (29))){
var state_65864__$1 = state_65864;
var statearr_65890_68589 = state_65864__$1;
(statearr_65890_68589[(2)] = null);

(statearr_65890_68589[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (6))){
var inst_65788 = (state_65864[(8)]);
var state_65864__$1 = state_65864;
var statearr_65891_68590 = state_65864__$1;
(statearr_65891_68590[(2)] = inst_65788);

(statearr_65891_68590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (28))){
var inst_65851 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_65852 = [true];
var inst_65853 = cljs.core.PersistentHashMap.fromArrays(inst_65851,inst_65852);
var state_65864__$1 = state_65864;
var statearr_65892_68591 = state_65864__$1;
(statearr_65892_68591[(2)] = inst_65853);

(statearr_65892_68591[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (25))){
var inst_65832 = (state_65864[(14)]);
var state_65864__$1 = state_65864;
var statearr_65893_68592 = state_65864__$1;
(statearr_65893_68592[(2)] = inst_65832);

(statearr_65893_68592[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (17))){
var inst_65825 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
var statearr_65896_68593 = state_65864__$1;
(statearr_65896_68593[(2)] = inst_65825);

(statearr_65896_68593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (3))){
var inst_65776 = (state_65864[(9)]);
var state_65864__$1 = state_65864;
var statearr_65897_68594 = state_65864__$1;
(statearr_65897_68594[(2)] = inst_65776);

(statearr_65897_68594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (12))){
var inst_65810 = (state_65864[(15)]);
var inst_65784 = (state_65864[(10)]);
var inst_65787 = (state_65864[(7)]);
var inst_65785 = (state_65864[(11)]);
var inst_65776 = (state_65864[(9)]);
var inst_65805 = frontend.fs.sync.diffs__GT_partitioned_filetxns((10));
var inst_65806 = (function (){var diff_r = inst_65776;
var vec__65780 = inst_65776;
var diff_txns = inst_65784;
var latest_txid = inst_65785;
var min_txid = inst_65787;
return (function (r,i){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.reverse(i));
});
})();
var inst_65807 = cljs.core.completing.cljs$core$IFn$_invoke$arity$1(inst_65806);
var inst_65808 = cljs.core.List.EMPTY;
var inst_65809 = cljs.core.reverse(inst_65784);
var inst_65810__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(inst_65805,inst_65807,inst_65808,inst_65809);
var inst_65811 = cljs.core.flatten(inst_65810__$1);
var inst_65812 = cljs.core.empty_QMARK_(inst_65811);
var state_65864__$1 = (function (){var statearr_65898 = state_65864;
(statearr_65898[(15)] = inst_65810__$1);

return statearr_65898;
})();
if(inst_65812){
var statearr_65899_68595 = state_65864__$1;
(statearr_65899_68595[(1)] = (15));

} else {
var statearr_65900_68597 = state_65864__$1;
(statearr_65900_68597[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (2))){
var inst_65776 = (state_65864[(9)]);
var inst_65776__$1 = (state_65864[(2)]);
var inst_65777 = (inst_65776__$1 instanceof cljs.core.ExceptionInfo);
var state_65864__$1 = (function (){var statearr_65901 = state_65864;
(statearr_65901[(9)] = inst_65776__$1);

return statearr_65901;
})();
if(cljs.core.truth_(inst_65777)){
var statearr_65902_68598 = state_65864__$1;
(statearr_65902_68598[(1)] = (3));

} else {
var statearr_65903_68599 = state_65864__$1;
(statearr_65903_68599[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (23))){
var inst_65832 = (state_65864[(14)]);
var inst_65847 = new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586).cljs$core$IFn$_invoke$arity$1(inst_65832);
var state_65864__$1 = state_65864;
if(cljs.core.truth_(inst_65847)){
var statearr_65904_68601 = state_65864__$1;
(statearr_65904_68601[(1)] = (25));

} else {
var statearr_65905_68602 = state_65864__$1;
(statearr_65905_68602[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (19))){
var inst_65832 = (state_65864[(14)]);
var inst_65837 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_65838 = [inst_65832];
var inst_65839 = cljs.core.PersistentHashMap.fromArrays(inst_65837,inst_65838);
var state_65864__$1 = state_65864;
var statearr_65906_68603 = state_65864__$1;
(statearr_65906_68603[(2)] = inst_65839);

(statearr_65906_68603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (11))){
var inst_65830 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
var statearr_65907_68605 = state_65864__$1;
(statearr_65907_68605[(2)] = inst_65830);

(statearr_65907_68605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (9))){
var inst_65787 = (state_65864[(7)]);
var inst_65797 = cljs.core.deref(self__._STAR_txid);
var inst_65798 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["min-txid",inst_65787,"request-txid",inst_65797], 0));
var inst_65799 = [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586)];
var inst_65800 = [true];
var inst_65801 = cljs.core.PersistentHashMap.fromArrays(inst_65799,inst_65800);
var state_65864__$1 = (function (){var statearr_65908 = state_65864;
(statearr_65908[(16)] = inst_65798);

return statearr_65908;
})();
var statearr_65909_68607 = state_65864__$1;
(statearr_65909_68607[(2)] = inst_65801);

(statearr_65909_68607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (5))){
var inst_65832 = (state_65864[(14)]);
var inst_65832__$1 = (state_65864[(2)]);
var inst_65833 = (inst_65832__$1 instanceof cljs.core.ExceptionInfo);
var state_65864__$1 = (function (){var statearr_65911 = state_65864;
(statearr_65911[(14)] = inst_65832__$1);

return statearr_65911;
})();
if(cljs.core.truth_(inst_65833)){
var statearr_65914_68608 = state_65864__$1;
(statearr_65914_68608[(1)] = (19));

} else {
var statearr_65915_68609 = state_65864__$1;
(statearr_65915_68609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (14))){
var inst_65828 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
var statearr_65916_68615 = state_65864__$1;
(statearr_65916_68615[(2)] = inst_65828);

(statearr_65916_68615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (26))){
var state_65864__$1 = state_65864;
var statearr_65917_68622 = state_65864__$1;
(statearr_65917_68622[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (16))){
var inst_65810 = (state_65864[(15)]);
var inst_65821 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_65810,self__.repo,self__._STAR_txid,self__._STAR_stopped);
var state_65864__$1 = state_65864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65864__$1,(18),inst_65821);
} else {
if((state_val_65865 === (30))){
var inst_65856 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
var statearr_65919_68639 = state_65864__$1;
(statearr_65919_68639[(2)] = inst_65856);

(statearr_65919_68639[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (10))){
var inst_65785 = (state_65864[(11)]);
var inst_65803 = cljs.core.pos_int_QMARK_(inst_65785);
var state_65864__$1 = state_65864;
if(inst_65803){
var statearr_65920_68640 = state_65864__$1;
(statearr_65920_68640[(1)] = (12));

} else {
var statearr_65921_68641 = state_65864__$1;
(statearr_65921_68641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (18))){
var inst_65823 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
var statearr_65922_68642 = state_65864__$1;
(statearr_65922_68642[(2)] = inst_65823);

(statearr_65922_68642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65865 === (8))){
var inst_65795 = (state_65864[(2)]);
var state_65864__$1 = state_65864;
if(cljs.core.truth_(inst_65795)){
var statearr_65923_68643 = state_65864__$1;
(statearr_65923_68643[(1)] = (9));

} else {
var statearr_65924_68644 = state_65864__$1;
(statearr_65924_68644[(1)] = (10));

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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65925[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65925[(1)] = (1));

return statearr_65925;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65864){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65864);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65927){var ex__41842__auto__ = e65927;
var statearr_65928_68647 = state_65864;
(statearr_65928_68647[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65864[(4)]))){
var statearr_65929_68648 = state_65864;
(statearr_65929_68648[(1)] = cljs.core.first((state_65864[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68649 = state_65864;
state_65864 = G__68649;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65864){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65930 = f__41862__auto__();
(statearr_65930[(6)] = c__41861__auto__);

return statearr_65930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65950){
var state_val_65951 = (state_65950[(1)]);
if((state_val_65951 === (1))){
var inst_65932 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_65933 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_65950__$1 = (function (){var statearr_65952 = state_65950;
(statearr_65952[(7)] = inst_65933);

return statearr_65952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65950__$1,(2),inst_65932);
} else {
if((state_val_65951 === (2))){
var inst_65933 = (state_65950[(7)]);
var inst_65935 = (state_65950[(2)]);
var state_65950__$1 = (function (){var statearr_65953 = state_65950;
(statearr_65953[(8)] = inst_65935);

return statearr_65953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65950__$1,(3),inst_65933);
} else {
if((state_val_65951 === (3))){
var inst_65935 = (state_65950[(8)]);
var inst_65937 = (state_65950[(2)]);
var inst_65938 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_65935,inst_65937);
var inst_65939 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_65950__$1 = (function (){var statearr_65954 = state_65950;
(statearr_65954[(9)] = inst_65938);

return statearr_65954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65950__$1,(4),inst_65939);
} else {
if((state_val_65951 === (4))){
var inst_65938 = (state_65950[(9)]);
var inst_65941 = (state_65950[(2)]);
var inst_65942 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_65941);
var inst_65943 = cljs.core.count(inst_65938);
var inst_65944 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(remote->local)]",inst_65943,"files need to sync"], 0));
var inst_65945 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync._relative_path,inst_65938);
var inst_65946 = this$__$1.sync_files_remote__GT_local_BANG_(inst_65945,inst_65942);
var state_65950__$1 = (function (){var statearr_65955 = state_65950;
(statearr_65955[(10)] = inst_65944);

return statearr_65955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65950__$1,(5),inst_65946);
} else {
if((state_val_65951 === (5))){
var inst_65948 = (state_65950[(2)]);
var state_65950__$1 = state_65950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65950__$1,inst_65948);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65956[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65956[(1)] = (1));

return statearr_65956;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65950){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65950);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65959){var ex__41842__auto__ = e65959;
var statearr_65960_68660 = state_65950;
(statearr_65960_68660[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65950[(4)]))){
var statearr_65961_68662 = state_65950;
(statearr_65961_68662[(1)] = cljs.core.first((state_65950[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68663 = state_65950;
state_65950 = G__68663;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65950){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65966 = f__41862__auto__();
(statearr_65966[(6)] = c__41861__auto__);

return statearr_65966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.fs.sync.Remote->LocalSyncer{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),self__._STAR_stopped],null))], null),self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65683){
var self__ = this;
var G__65683__$1 = this;
return (new cljs.core.RecordIter((0),G__65683__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1517379967 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65685,other65686){
var self__ = this;
var this65685__$1 = this;
return (((!((other65686 == null)))) && ((((this65685__$1.constructor === other65686.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1.user_uuid,other65686.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1.graph_uuid,other65686.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1.base_path,other65686.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1.repo,other65686.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1._STAR_txid,other65686._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1._STAR_sync_state,other65686._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1.local__GT_remote_syncer,other65686.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1._STAR_stopped,other65686._STAR_stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65685__$1.__extmap,other65686.__extmap)))))))))))))))))))));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),null,new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k65684){
var self__ = this;
var this__4509__auto____$1 = this;
var G__66012 = k65684;
var G__66012__$1 = (((G__66012 instanceof cljs.core.Keyword))?G__66012.fqn:null);
switch (G__66012__$1) {
case "user-uuid":
case "graph-uuid":
case "base-path":
case "repo":
case "*txid":
case "*sync-state":
case "local->remote-syncer":
case "*stopped":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65684);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__65683){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__66013 = cljs.core.keyword_identical_QMARK_;
var expr__66014 = k__4511__auto__;
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(G__65683,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,G__65683,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,G__65683,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__65683,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__65683,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,G__65683,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,G__65683,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66013.cljs$core$IFn$_invoke$arity$2 ? pred__66013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__66014) : pred__66013.call(null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__66014)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__65683,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__65683),null));
}
}
}
}
}
}
}
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),self__._STAR_stopped,null))], null),self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__65683){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,G__65683,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-uuid","user-uuid",1364577479,null),new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"repo","repo",-358529152,null),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"local->remote-syncer","local->remote-syncer",195649351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*stopped","*stopped",-1398093184,null)], null);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$type = true);

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/Remote->LocalSyncer",null,(1),null));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.fs.sync/Remote->LocalSyncer");
}));

/**
 * Positional factory function for frontend.fs.sync/Remote->LocalSyncer.
 */
frontend.fs.sync.__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$__GT_Remote__GT_LocalSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,local__GT_remote_syncer,_STAR_stopped){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,local__GT_remote_syncer,_STAR_stopped,null,null,null));
});

/**
 * Factory function for frontend.fs.sync/Remote->LocalSyncer, taking a map of keywords to field values.
 */
frontend.fs.sync.map__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$map__GT_Remote__GT_LocalSyncer(G__65687){
var extmap__4542__auto__ = (function (){var G__66020 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65687,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], 0));
if(cljs.core.record_QMARK_(G__65687)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66020);
} else {
return G__66020;
}
})();
return (new frontend.fs.sync.Remote__GT_LocalSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__65687),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__65687),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__65687),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__65687),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__65687),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__65687),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__65687),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585).cljs$core$IFn$_invoke$arity$1(G__65687),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * return true when file changed compared with remote
 */
frontend.fs.sync.file_changed_QMARK_ = (function frontend$fs$sync$file_changed_QMARK_(graph_uuid,file_path_without_base_path,base_path){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66040){
var state_val_66041 = (state_66040[(1)]);
if((state_val_66041 === (1))){
var inst_66023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66024 = [file_path_without_base_path];
var inst_66025 = (new cljs.core.PersistentVector(null,1,(5),inst_66023,inst_66024,null));
var inst_66026 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(null,graph_uuid,inst_66025);
var state_66040__$1 = state_66040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66040__$1,(2),inst_66026);
} else {
if((state_val_66041 === (2))){
var inst_66028 = (state_66040[(2)]);
var inst_66029 = cljs.core.first(inst_66028);
var inst_66031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66032 = [file_path_without_base_path];
var inst_66033 = (new cljs.core.PersistentVector(null,1,(5),inst_66031,inst_66032,null));
var inst_66034 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_66033);
var state_66040__$1 = (function (){var statearr_66044 = state_66040;
(statearr_66044[(7)] = inst_66029);

return statearr_66044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66040__$1,(3),inst_66034);
} else {
if((state_val_66041 === (3))){
var inst_66029 = (state_66040[(7)]);
var inst_66036 = (state_66040[(2)]);
var inst_66037 = cljs.core.first(inst_66036);
var inst_66038 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_66029,inst_66037);
var state_66040__$1 = state_66040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66040__$1,inst_66038);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__ = null;
var frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____0 = (function (){
var statearr_66046 = [null,null,null,null,null,null,null,null];
(statearr_66046[(0)] = frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__);

(statearr_66046[(1)] = (1));

return statearr_66046;
});
var frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____1 = (function (state_66040){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66040);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66047){var ex__41842__auto__ = e66047;
var statearr_66048_68709 = state_66040;
(statearr_66048_68709[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66040[(4)]))){
var statearr_66049_68710 = state_66040;
(statearr_66049_68710[(1)] = cljs.core.first((state_66040[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68711 = state_66040;
state_66040 = G__68711;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__ = function(state_66040){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____1.call(this,state_66040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____0;
frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____1;
return frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66053 = f__41862__auto__();
(statearr_66053[(6)] = c__41861__auto__);

return statearr_66053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.local_file_exists_QMARK_ = (function frontend$fs$sync$local_file_exists_QMARK_(relative_path,base_path){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66066){
var state_val_66067 = (state_66066[(1)]);
if((state_val_66067 === (1))){
var inst_66056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66057 = [relative_path];
var inst_66058 = (new cljs.core.PersistentVector(null,1,(5),inst_66056,inst_66057,null));
var inst_66059 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,inst_66058);
var state_66066__$1 = state_66066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66066__$1,(2),inst_66059);
} else {
if((state_val_66067 === (2))){
var inst_66061 = (state_66066[(2)]);
var inst_66062 = cljs.core.ex_cause(inst_66061);
var inst_66063 = (inst_66062 == null);
var state_66066__$1 = state_66066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66066__$1,inst_66063);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__ = null;
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____0 = (function (){
var statearr_66075 = [null,null,null,null,null,null,null];
(statearr_66075[(0)] = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__);

(statearr_66075[(1)] = (1));

return statearr_66075;
});
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____1 = (function (state_66066){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66066);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66076){var ex__41842__auto__ = e66076;
var statearr_66077_68714 = state_66066;
(statearr_66077_68714[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66066[(4)]))){
var statearr_66078_68715 = state_66066;
(statearr_66078_68715[(1)] = cljs.core.first((state_66066[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68717 = state_66066;
state_66066 = G__68717;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__ = function(state_66066){
switch(arguments.length){
case 0:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____1.call(this,state_66066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____0;
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____1;
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66079 = f__41862__auto__();
(statearr_66079[(6)] = c__41861__auto__);

return statearr_66079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.contains_path_QMARK_ = (function frontend$fs$sync$contains_path_QMARK_(regexps,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66081_SHARP_,p2__66080_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(p2__66080_SHARP_,path))){
return cljs.core.reduced(true);
} else {
return null;
}
}),false,regexps);
});
/**
 * filter local-change events:
 *   - for 'unlink' event
 *  - when related file exists on local dir, ignore this event
 *   - for 'add' | 'change' event
 *  - when related file's content is same as remote file, ignore it
 */
frontend.fs.sync.filter_local_changes_pred = (function frontend$fs$sync$filter_local_changes_pred(e,basepath,graph_uuid){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66117){
var state_val_66118 = (state_66117[(1)]);
if((state_val_66118 === (7))){
var inst_66100 = (state_66117[(2)]);
var state_66117__$1 = state_66117;
var statearr_66124_68718 = state_66117__$1;
(statearr_66124_68718[(2)] = inst_66100);

(statearr_66124_68718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (1))){
var inst_66085 = frontend.fs.sync.relative_path(e);
var inst_66113 = e.type;
var state_66117__$1 = (function (){var statearr_66125 = state_66117;
(statearr_66125[(7)] = inst_66085);

return statearr_66125;
})();
var G__66127_68719 = inst_66113;
switch (G__66127_68719) {
case "unlink":
var statearr_66130_68723 = state_66117__$1;
(statearr_66130_68723[(1)] = (3));


break;
case "add":
case "change":
var statearr_66131_68727 = state_66117__$1;
(statearr_66131_68727[(1)] = (8));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66127_68719)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (4))){
var inst_66091 = (state_66117[(8)]);
var inst_66091__$1 = (state_66117[(2)]);
var inst_66095 = (inst_66091__$1 == null);
var state_66117__$1 = (function (){var statearr_66132 = state_66117;
(statearr_66132[(8)] = inst_66091__$1);

return statearr_66132;
})();
if(cljs.core.truth_(inst_66095)){
var statearr_66133_68748 = state_66117__$1;
(statearr_66133_68748[(1)] = (5));

} else {
var statearr_66134_68750 = state_66117__$1;
(statearr_66134_68750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (13))){
var inst_66108 = (state_66117[(2)]);
var state_66117__$1 = state_66117;
var statearr_66135_68751 = state_66117__$1;
(statearr_66135_68751[(2)] = inst_66108);

(statearr_66135_68751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (6))){
var inst_66091 = (state_66117[(8)]);
var inst_66098 = cljs.core.ex_cause(inst_66091);
var state_66117__$1 = state_66117;
var statearr_66136_68752 = state_66117__$1;
(statearr_66136_68752[(2)] = inst_66098);

(statearr_66136_68752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (3))){
var inst_66085 = (state_66117[(7)]);
var inst_66086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66087 = [inst_66085];
var inst_66088 = (new cljs.core.PersistentVector(null,1,(5),inst_66086,inst_66087,null));
var inst_66089 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",basepath,inst_66088);
var state_66117__$1 = state_66117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66117__$1,(4),inst_66089);
} else {
if((state_val_66118 === (12))){
var inst_66111 = (state_66117[(2)]);
var state_66117__$1 = state_66117;
var statearr_66139_68754 = state_66117__$1;
(statearr_66139_68754[(2)] = inst_66111);

(statearr_66139_68754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (2))){
var inst_66115 = (state_66117[(2)]);
var state_66117__$1 = state_66117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66117__$1,inst_66115);
} else {
if((state_val_66118 === (11))){
var inst_66104 = (state_66117[(9)]);
var state_66117__$1 = state_66117;
var statearr_66141_68755 = state_66117__$1;
(statearr_66141_68755[(2)] = inst_66104);

(statearr_66141_68755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (9))){
var inst_66104 = (state_66117[(9)]);
var inst_66104__$1 = (state_66117[(2)]);
var state_66117__$1 = (function (){var statearr_66142 = state_66117;
(statearr_66142[(9)] = inst_66104__$1);

return statearr_66142;
})();
if(cljs.core.truth_(inst_66104__$1)){
var statearr_66143_68757 = state_66117__$1;
(statearr_66143_68757[(1)] = (10));

} else {
var statearr_66144_68758 = state_66117__$1;
(statearr_66144_68758[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (5))){
var state_66117__$1 = state_66117;
var statearr_66145_68760 = state_66117__$1;
(statearr_66145_68760[(2)] = null);

(statearr_66145_68760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66118 === (10))){
var inst_66085 = (state_66117[(7)]);
var inst_66106 = frontend.fs.sync.file_changed_QMARK_(graph_uuid,inst_66085,basepath);
var state_66117__$1 = state_66117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66117__$1,(13),inst_66106);
} else {
if((state_val_66118 === (8))){
var inst_66085 = (state_66117[(7)]);
var inst_66102 = frontend.fs.sync.local_file_exists_QMARK_(inst_66085,basepath);
var state_66117__$1 = state_66117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66117__$1,(9),inst_66102);
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
});
return (function() {
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____0 = (function (){
var statearr_66146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66146[(0)] = frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__);

(statearr_66146[(1)] = (1));

return statearr_66146;
});
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____1 = (function (state_66117){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66117);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66147){var ex__41842__auto__ = e66147;
var statearr_66148_68764 = state_66117;
(statearr_66148_68764[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66117[(4)]))){
var statearr_66149_68765 = state_66117;
(statearr_66149_68765[(1)] = cljs.core.first((state_66117[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68766 = state_66117;
state_66117 = G__68766;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__ = function(state_66117){
switch(arguments.length){
case 0:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____1.call(this,state_66117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____0;
frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____1;
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66150 = f__41862__auto__();
(statearr_66150[(6)] = c__41861__auto__);

return statearr_66150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {frontend.fs.sync.ILocal__GT_RemoteSync}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.sync.Local__GT_RemoteSyncer = (function (user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,rate,_STAR_txid,remote__GT_local_syncer,stop_chan,stopped,__meta,__extmap,__hash){
this.user_uuid = user_uuid;
this.graph_uuid = graph_uuid;
this.base_path = base_path;
this.repo = repo;
this._STAR_sync_state = _STAR_sync_state;
this.rate = rate;
this._STAR_txid = _STAR_txid;
this.remote__GT_local_syncer = remote__GT_local_syncer;
this.stop_chan = stop_chan;
this.stopped = stopped;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.filter_file_change_events_fn = (function (){
var self__ = this;
var this$ = this;
return (function (e){
var and__4251__auto__ = (e instanceof frontend.fs.sync.FileChangeEvent);
if(and__4251__auto__){
var and__4251__auto____$1 = clojure.string.starts_with_QMARK_(e.dir,self__.base_path);
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null),frontend.fs.sync.relative_path(e)));
if(and__4251__auto____$2){
return frontend.fs.sync.contains_path_QMARK_(this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null),frontend.fs.sync.relative_path(e));
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
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.filtered_chan = (function (n){
var self__ = this;
var this$ = this;
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(n,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(this$.filter_file_change_events_fn()));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.set_remote__GT_local_syncer_BANG_ = (function (s){
var self__ = this;
var _ = this;
return (self__.remote__GT_local_syncer = s);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k66164,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__66176 = k66164;
var G__66176__$1 = (((G__66176 instanceof cljs.core.Keyword))?G__66176.fqn:null);
switch (G__66176__$1) {
case "user-uuid":
return self__.user_uuid;

break;
case "graph-uuid":
return self__.graph_uuid;

break;
case "base-path":
return self__.base_path;

break;
case "repo":
return self__.repo;

break;
case "*sync-state":
return self__._STAR_sync_state;

break;
case "rate":
return self__.rate;

break;
case "*txid":
return self__._STAR_txid;

break;
case "remote->local-syncer":
return self__.remote__GT_local_syncer;

break;
case "stop-chan":
return self__.stop_chan;

break;
case "stopped":
return self__.stopped;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66164,else__4505__auto__);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__66179){
var vec__66180 = p__66179;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66180,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66180,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [/logseq\/graphs-txid.edn$/,null,/logseq\/bak\/.*/,null,/\.DS_Store$/,null,/logseq\/\.recycle\/.*/,null,/version-files\/.*/,null], null), null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [/^assets\//,null,/^pages\//,null,/^logseq\//,null,/^journals\//,null], null), null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.close_BANG_(self__.stop_chan);

return (self__.stopped = true);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2 = (function (this$,from_chan){
var self__ = this;
var this$__$1 = this;
var c = this$__$1.filtered_chan((10000));
var filter_e_fn = this$__$1.filter_file_change_events_fn();
var c__41861__auto___68777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66300){
var state_val_66301 = (state_66300[(1)]);
if((state_val_66301 === (7))){
var inst_66241 = (state_66300[(2)]);
var inst_66242 = cljs.core.__destructure_map(inst_66241);
var inst_66247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66242,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_66248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66242,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_66249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66242,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_66300__$1 = (function (){var statearr_66321 = state_66300;
(statearr_66321[(7)] = inst_66248);

(statearr_66321[(8)] = inst_66247);

return statearr_66321;
})();
if(cljs.core.truth_(inst_66249)){
var statearr_66331_68779 = state_66300__$1;
(statearr_66331_68779[(1)] = (17));

} else {
var statearr_66337_68780 = state_66300__$1;
(statearr_66337_68780[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (20))){
var inst_66188 = (state_66300[(9)]);
var inst_66254 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_66188,false);
var inst_66255 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,null);
var inst_66256 = cljs.core.async.timeout(self__.rate);
var inst_66257 = cljs.core.PersistentVector.EMPTY;
var inst_66187 = inst_66256;
var inst_66188__$1 = inst_66257;
var state_66300__$1 = (function (){var statearr_66367 = state_66300;
(statearr_66367[(10)] = inst_66255);

(statearr_66367[(11)] = inst_66254);

(statearr_66367[(9)] = inst_66188__$1);

(statearr_66367[(12)] = inst_66187);

return statearr_66367;
})();
var statearr_66370_68781 = state_66300__$1;
(statearr_66370_68781[(2)] = null);

(statearr_66370_68781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (27))){
var inst_66264 = (state_66300[(13)]);
var state_66300__$1 = state_66300;
var statearr_66373_68782 = state_66300__$1;
(statearr_66373_68782[(2)] = inst_66264);

(statearr_66373_68782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (1))){
var inst_66185 = cljs.core.async.timeout(self__.rate);
var inst_66186 = cljs.core.PersistentVector.EMPTY;
var inst_66187 = inst_66185;
var inst_66188 = inst_66186;
var state_66300__$1 = (function (){var statearr_66375 = state_66300;
(statearr_66375[(9)] = inst_66188);

(statearr_66375[(12)] = inst_66187);

return statearr_66375;
})();
var statearr_66377_68784 = state_66300__$1;
(statearr_66377_68784[(2)] = null);

(statearr_66377_68784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (24))){
var inst_66248 = (state_66300[(7)]);
var inst_66284 = (inst_66248 == null);
var state_66300__$1 = state_66300;
if(cljs.core.truth_(inst_66284)){
var statearr_66379_68785 = state_66300__$1;
(statearr_66379_68785[(1)] = (33));

} else {
var statearr_66381_68786 = state_66300__$1;
(statearr_66381_68786[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (4))){
var inst_66207 = (state_66300[(14)]);
var inst_66205 = (state_66300[(15)]);
var inst_66187 = (state_66300[(12)]);
var inst_66205__$1 = (state_66300[(2)]);
var inst_66206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66205__$1,(0),null);
var inst_66207__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66205__$1,(1),null);
var inst_66208 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66207__$1,inst_66187);
var state_66300__$1 = (function (){var statearr_66384 = state_66300;
(statearr_66384[(14)] = inst_66207__$1);

(statearr_66384[(15)] = inst_66205__$1);

(statearr_66384[(16)] = inst_66206);

return statearr_66384;
})();
if(inst_66208){
var statearr_66385_68787 = state_66300__$1;
(statearr_66385_68787[(1)] = (5));

} else {
var statearr_66387_68788 = state_66300__$1;
(statearr_66387_68788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (15))){
var state_66300__$1 = state_66300;
var statearr_66397_68789 = state_66300__$1;
(statearr_66397_68789[(2)] = null);

(statearr_66397_68789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (21))){
var inst_66248 = (state_66300[(7)]);
var inst_66261 = (inst_66248 == null);
var inst_66262 = cljs.core.not(inst_66261);
var state_66300__$1 = state_66300;
if(inst_66262){
var statearr_66400_68790 = state_66300__$1;
(statearr_66400_68790[(1)] = (23));

} else {
var statearr_66402_68791 = state_66300__$1;
(statearr_66402_68791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (31))){
var inst_66188 = (state_66300[(9)]);
var inst_66187 = (state_66300[(12)]);
var tmp66390 = inst_66188;
var tmp66391 = inst_66187;
var inst_66187__$1 = tmp66391;
var inst_66188__$1 = tmp66390;
var state_66300__$1 = (function (){var statearr_66408 = state_66300;
(statearr_66408[(9)] = inst_66188__$1);

(statearr_66408[(12)] = inst_66187__$1);

return statearr_66408;
})();
var statearr_66410_68792 = state_66300__$1;
(statearr_66410_68792[(2)] = null);

(statearr_66410_68792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (32))){
var inst_66282 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66412_68793 = state_66300__$1;
(statearr_66412_68793[(2)] = inst_66282);

(statearr_66412_68793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (33))){
var inst_66286 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close ratelimit chan"], 0));
var inst_66287 = cljs.core.async.close_BANG_(c);
var state_66300__$1 = (function (){var statearr_66419 = state_66300;
(statearr_66419[(17)] = inst_66286);

return statearr_66419;
})();
var statearr_66421_68794 = state_66300__$1;
(statearr_66421_68794[(2)] = inst_66287);

(statearr_66421_68794[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (13))){
var inst_66237 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66424_68797 = state_66300__$1;
(statearr_66424_68797[(2)] = inst_66237);

(statearr_66424_68797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (22))){
var inst_66294 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66432_68798 = state_66300__$1;
(statearr_66432_68798[(2)] = inst_66294);

(statearr_66432_68798[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (29))){
var inst_66268 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66434_68799 = state_66300__$1;
(statearr_66434_68799[(2)] = inst_66268);

(statearr_66434_68799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (6))){
var inst_66207 = (state_66300[(14)]);
var inst_66199 = (state_66300[(18)]);
var inst_66215 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66207,inst_66199);
var state_66300__$1 = state_66300;
if(inst_66215){
var statearr_66437_68801 = state_66300__$1;
(statearr_66437_68801[(1)] = (8));

} else {
var statearr_66438_68802 = state_66300__$1;
(statearr_66438_68802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (28))){
var inst_66271 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
if(cljs.core.truth_(inst_66271)){
var statearr_66440_68803 = state_66300__$1;
(statearr_66440_68803[(1)] = (30));

} else {
var statearr_66441_68804 = state_66300__$1;
(statearr_66441_68804[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (25))){
var inst_66292 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66444_68805 = state_66300__$1;
(statearr_66444_68805[(2)] = inst_66292);

(statearr_66444_68805[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (34))){
var state_66300__$1 = state_66300;
var statearr_66446_68806 = state_66300__$1;
(statearr_66446_68806[(2)] = null);

(statearr_66446_68806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (17))){
var inst_66251 = cljs.core.async.close_BANG_(c);
var state_66300__$1 = state_66300;
var statearr_66447_68808 = state_66300__$1;
(statearr_66447_68808[(2)] = inst_66251);

(statearr_66447_68808[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (3))){
var inst_66298 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66300__$1,inst_66298);
} else {
if((state_val_66301 === (12))){
var inst_66207 = (state_66300[(14)]);
var inst_66231 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66207,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_66300__$1 = state_66300;
if(inst_66231){
var statearr_66448_68809 = state_66300__$1;
(statearr_66448_68809[(1)] = (14));

} else {
var statearr_66449_68810 = state_66300__$1;
(statearr_66449_68810[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (2))){
var inst_66200 = (state_66300[(19)]);
var inst_66187 = (state_66300[(12)]);
var inst_66199 = (state_66300[(18)]);
var inst_66199__$1 = from_chan;
var inst_66200__$1 = self__.stop_chan;
var inst_66201 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66202 = [inst_66187,inst_66199__$1,inst_66200__$1];
var inst_66203 = (new cljs.core.PersistentVector(null,3,(5),inst_66201,inst_66202,null));
var state_66300__$1 = (function (){var statearr_66455 = state_66300;
(statearr_66455[(19)] = inst_66200__$1);

(statearr_66455[(18)] = inst_66199__$1);

return statearr_66455;
})();
return cljs.core.async.ioc_alts_BANG_(state_66300__$1,(4),inst_66203);
} else {
if((state_val_66301 === (23))){
var inst_66264 = (state_66300[(13)]);
var inst_66248 = (state_66300[(7)]);
var inst_66264__$1 = (filter_e_fn.cljs$core$IFn$_invoke$arity$1 ? filter_e_fn.cljs$core$IFn$_invoke$arity$1(inst_66248) : filter_e_fn.call(null,inst_66248));
var state_66300__$1 = (function (){var statearr_66461 = state_66300;
(statearr_66461[(13)] = inst_66264__$1);

return statearr_66461;
})();
if(cljs.core.truth_(inst_66264__$1)){
var statearr_66462_68811 = state_66300__$1;
(statearr_66462_68811[(1)] = (26));

} else {
var statearr_66464_68812 = state_66300__$1;
(statearr_66464_68812[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (35))){
var inst_66290 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66471_68813 = state_66300__$1;
(statearr_66471_68813[(2)] = inst_66290);

(statearr_66471_68813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (19))){
var inst_66296 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66484_68815 = state_66300__$1;
(statearr_66484_68815[(2)] = inst_66296);

(statearr_66484_68815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (11))){
var inst_66227 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_66228 = [true];
var inst_66229 = cljs.core.PersistentHashMap.fromArrays(inst_66227,inst_66228);
var state_66300__$1 = state_66300;
var statearr_66492_68816 = state_66300__$1;
(statearr_66492_68816[(2)] = inst_66229);

(statearr_66492_68816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (9))){
var inst_66200 = (state_66300[(19)]);
var inst_66207 = (state_66300[(14)]);
var inst_66225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66207,inst_66200);
var state_66300__$1 = state_66300;
if(inst_66225){
var statearr_66514_68817 = state_66300__$1;
(statearr_66514_68817[(1)] = (11));

} else {
var statearr_66516_68818 = state_66300__$1;
(statearr_66516_68818[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (5))){
var inst_66210 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_66211 = [true];
var inst_66212 = cljs.core.PersistentHashMap.fromArrays(inst_66210,inst_66211);
var state_66300__$1 = state_66300;
var statearr_66517_68819 = state_66300__$1;
(statearr_66517_68819[(2)] = inst_66212);

(statearr_66517_68819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (14))){
var inst_66206 = (state_66300[(16)]);
var state_66300__$1 = state_66300;
var statearr_66519_68820 = state_66300__$1;
(statearr_66519_68820[(2)] = inst_66206);

(statearr_66519_68820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (26))){
var inst_66248 = (state_66300[(7)]);
var inst_66266 = frontend.fs.sync.filter_local_changes_pred(inst_66248,self__.base_path,self__.graph_uuid);
var state_66300__$1 = state_66300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66300__$1,(29),inst_66266);
} else {
if((state_val_66301 === (16))){
var inst_66235 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66524_68822 = state_66300__$1;
(statearr_66524_68822[(2)] = inst_66235);

(statearr_66524_68822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (30))){
var inst_66248 = (state_66300[(7)]);
var inst_66188 = (state_66300[(9)]);
var inst_66187 = (state_66300[(12)]);
var inst_66273 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_66188,inst_66248);
var inst_66274 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_66273);
var inst_66276 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_66274);
var inst_66277 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,inst_66276);
var tmp66523 = inst_66187;
var inst_66187__$1 = tmp66523;
var inst_66188__$1 = inst_66274;
var state_66300__$1 = (function (){var statearr_66525 = state_66300;
(statearr_66525[(20)] = inst_66277);

(statearr_66525[(9)] = inst_66188__$1);

(statearr_66525[(12)] = inst_66187__$1);

return statearr_66525;
})();
var statearr_66527_68826 = state_66300__$1;
(statearr_66527_68826[(2)] = null);

(statearr_66527_68826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (10))){
var inst_66239 = (state_66300[(2)]);
var state_66300__$1 = state_66300;
var statearr_66529_68827 = state_66300__$1;
(statearr_66529_68827[(2)] = inst_66239);

(statearr_66529_68827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (18))){
var inst_66247 = (state_66300[(8)]);
var state_66300__$1 = state_66300;
if(cljs.core.truth_(inst_66247)){
var statearr_66530_68830 = state_66300__$1;
(statearr_66530_68830[(1)] = (20));

} else {
var statearr_66531_68831 = state_66300__$1;
(statearr_66531_68831[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66301 === (8))){
var inst_66205 = (state_66300[(15)]);
var inst_66220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66205,(0),null);
var inst_66221 = [new cljs.core.Keyword(null,"e","e",1381269198)];
var inst_66222 = [inst_66220];
var inst_66223 = cljs.core.PersistentHashMap.fromArrays(inst_66221,inst_66222);
var state_66300__$1 = state_66300;
var statearr_66532_68834 = state_66300__$1;
(statearr_66532_68834[(2)] = inst_66223);

(statearr_66532_68834[(1)] = (10));


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
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_66537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66537[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_66537[(1)] = (1));

return statearr_66537;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_66300){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66300);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66539){var ex__41842__auto__ = e66539;
var statearr_66540_68841 = state_66300;
(statearr_66540_68841[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66300[(4)]))){
var statearr_66542_68842 = state_66300;
(statearr_66542_68842[(1)] = cljs.core.first((state_66300[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68848 = state_66300;
state_66300 = G__68848;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_66300){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_66300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66543 = f__41862__auto__();
(statearr_66543[(6)] = c__41861__auto___68777);

return statearr_66543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


return c;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2 = (function (this$,es){
var self__ = this;
var this$__$1 = this;
if(cljs.core.empty_QMARK_(es)){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66549){
var state_val_66550 = (state_66549[(1)]);
if((state_val_66550 === (1))){
var inst_66545 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_66546 = [true];
var inst_66547 = cljs.core.PersistentHashMap.fromArrays(inst_66545,inst_66546);
var state_66549__$1 = state_66549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66549__$1,inst_66547);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_66552 = [null,null,null,null,null,null,null];
(statearr_66552[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_66552[(1)] = (1));

return statearr_66552;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_66549){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66549);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66553){var ex__41842__auto__ = e66553;
var statearr_66555_68855 = state_66549;
(statearr_66555_68855[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66549[(4)]))){
var statearr_66556_68856 = state_66549;
(statearr_66556_68856[(1)] = cljs.core.first((state_66549[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68857 = state_66549;
state_66549 = G__68857;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_66549){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_66549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66560 = f__41862__auto__();
(statearr_66560[(6)] = c__41861__auto__);

return statearr_66560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
} else {
var type = cljs.core.first(es).type;
var ignore_files = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var es__GT_paths_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__66158_SHARP_){
return frontend.fs.sync.relative_path(p1__66158_SHARP_);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__66159_SHARP_){
return cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,p1__66159_SHARP_));
})));
var paths = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(es__GT_paths_xf,es);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote",paths], 0));

var r = (function (){var G__66563 = type;
switch (G__66563) {
case "add":
case "change":
return frontend.fs.sync.update_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
case "unlink":
frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths);

return frontend.fs.sync.delete_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66563)].join('')));

}
})();
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66604){
var state_val_66605 = (state_66604[(1)]);
if((state_val_66605 === (7))){
var state_66604__$1 = state_66604;
var statearr_66609_68863 = state_66604__$1;
(statearr_66609_68863[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (1))){
var inst_66568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__add_current_local__GT_remote_files,paths);
var state_66604__$1 = (function (){var statearr_66613 = state_66604;
(statearr_66613[(7)] = inst_66568);

return statearr_66613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66604__$1,(2),r);
} else {
if((state_val_66605 === (4))){
var inst_66570 = (state_66604[(8)]);
var inst_66579 = typeof inst_66570 === 'number';
var state_66604__$1 = state_66604;
if(cljs.core.truth_(inst_66579)){
var statearr_66614_68866 = state_66604__$1;
(statearr_66614_68866[(1)] = (6));

} else {
var statearr_66615_68867 = state_66604__$1;
(statearr_66615_68867[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (6))){
var inst_66570 = (state_66604[(8)]);
var inst_66581 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote! update txid",inst_66570], 0));
var inst_66582 = frontend.fs.sync.update_graphs_txid_BANG_(inst_66570,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_66583 = cljs.core.reset_BANG_(self__._STAR_txid,inst_66570);
var inst_66584 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_66585 = [true];
var inst_66586 = cljs.core.PersistentHashMap.fromArrays(inst_66584,inst_66585);
var state_66604__$1 = (function (){var statearr_66616 = state_66604;
(statearr_66616[(9)] = inst_66582);

(statearr_66616[(10)] = inst_66583);

(statearr_66616[(11)] = inst_66581);

return statearr_66616;
})();
var statearr_66617_68868 = state_66604__$1;
(statearr_66617_68868[(2)] = inst_66586);

(statearr_66617_68868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (3))){
var inst_66575 = [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663)];
var inst_66576 = [true];
var inst_66577 = cljs.core.PersistentHashMap.fromArrays(inst_66575,inst_66576);
var state_66604__$1 = state_66604;
var statearr_66619_68869 = state_66604__$1;
(statearr_66619_68869[(2)] = inst_66577);

(statearr_66619_68869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (2))){
var inst_66570 = (state_66604[(8)]);
var inst_66570__$1 = (state_66604[(2)]);
var inst_66572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__remove_current_local__GT_remote_files,paths);
var inst_66573 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_66570__$1);
var state_66604__$1 = (function (){var statearr_66622 = state_66604;
(statearr_66622[(8)] = inst_66570__$1);

(statearr_66622[(12)] = inst_66572);

return statearr_66622;
})();
if(cljs.core.truth_(inst_66573)){
var statearr_66624_68871 = state_66604__$1;
(statearr_66624_68871[(1)] = (3));

} else {
var statearr_66626_68872 = state_66604__$1;
(statearr_66626_68872[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (11))){
var inst_66597 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66627_68874 = state_66604__$1;
(statearr_66627_68874[(2)] = inst_66597);

(statearr_66627_68874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (9))){
var inst_66570 = (state_66604[(8)]);
var inst_66590 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote unknown:",inst_66570], 0));
var inst_66591 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_66592 = [inst_66570];
var inst_66593 = cljs.core.PersistentHashMap.fromArrays(inst_66591,inst_66592);
var state_66604__$1 = (function (){var statearr_66628 = state_66604;
(statearr_66628[(13)] = inst_66590);

return statearr_66628;
})();
var statearr_66629_68875 = state_66604__$1;
(statearr_66629_68875[(2)] = inst_66593);

(statearr_66629_68875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (5))){
var inst_66601 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66604__$1,inst_66601);
} else {
if((state_val_66605 === (10))){
var state_66604__$1 = state_66604;
var statearr_66631_68877 = state_66604__$1;
(statearr_66631_68877[(2)] = null);

(statearr_66631_68877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66605 === (8))){
var inst_66599 = (state_66604[(2)]);
var state_66604__$1 = state_66604;
var statearr_66632_68878 = state_66604__$1;
(statearr_66632_68878[(2)] = inst_66599);

(statearr_66632_68878[(1)] = (5));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_66636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66636[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_66636[(1)] = (1));

return statearr_66636;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_66604){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66604);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66637){var ex__41842__auto__ = e66637;
var statearr_66638_68880 = state_66604;
(statearr_66638_68880[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66604[(4)]))){
var statearr_66639_68881 = state_66604;
(statearr_66639_68881[(1)] = cljs.core.first((state_66604[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68882 = state_66604;
state_66604 = G__68882;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_66604){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_66604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66640 = f__41862__auto__();
(statearr_66640[(6)] = c__41861__auto__);

return statearr_66640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66730){
var state_val_66731 = (state_66730[(1)]);
if((state_val_66731 === (7))){
var inst_66662 = (state_66730[(7)]);
var inst_66669 = cljs.core.empty_QMARK_(inst_66662);
var state_66730__$1 = state_66730;
if(inst_66669){
var statearr_66734_68884 = state_66730__$1;
(statearr_66734_68884[(1)] = (9));

} else {
var statearr_66736_68885 = state_66730__$1;
(statearr_66736_68885[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (20))){
var inst_66683 = (state_66730[(8)]);
var state_66730__$1 = state_66730;
if(cljs.core.truth_(inst_66683)){
var statearr_66738_68886 = state_66730__$1;
(statearr_66738_68886[(1)] = (22));

} else {
var statearr_66740_68887 = state_66730__$1;
(statearr_66740_68887[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (27))){
var inst_66720 = (state_66730[(2)]);
var state_66730__$1 = state_66730;
var statearr_66742_68888 = state_66730__$1;
(statearr_66742_68888[(2)] = inst_66720);

(statearr_66742_68888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (1))){
var inst_66642 = (state_66730[(9)]);
var inst_66642__$1 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_66643 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_66730__$1 = (function (){var statearr_66746 = state_66730;
(statearr_66746[(10)] = inst_66643);

(statearr_66746[(9)] = inst_66642__$1);

return statearr_66746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66730__$1,(2),inst_66642__$1);
} else {
if((state_val_66731 === (24))){
var inst_66716 = (state_66730[(2)]);
var state_66730__$1 = state_66730;
if(cljs.core.truth_(inst_66716)){
var statearr_66748_68889 = state_66730__$1;
(statearr_66748_68889[(1)] = (25));

} else {
var statearr_66749_68890 = state_66730__$1;
(statearr_66749_68890[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (4))){
var state_66730__$1 = state_66730;
if(cljs.core.truth_(self__.stopped)){
var statearr_66750_68891 = state_66730__$1;
(statearr_66750_68891[(1)] = (6));

} else {
var statearr_66751_68892 = state_66730__$1;
(statearr_66751_68892[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (15))){
var inst_66682 = (state_66730[(11)]);
var inst_66706 = (state_66730[(2)]);
var state_66730__$1 = (function (){var statearr_66756 = state_66730;
(statearr_66756[(12)] = inst_66706);

return statearr_66756;
})();
if(cljs.core.truth_(inst_66682)){
var statearr_66758_68894 = state_66730__$1;
(statearr_66758_68894[(1)] = (19));

} else {
var statearr_66767_68895 = state_66730__$1;
(statearr_66767_68895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (21))){
var inst_66722 = (state_66730[(2)]);
var state_66730__$1 = state_66730;
var statearr_66781_68896 = state_66730__$1;
(statearr_66781_68896[(2)] = inst_66722);

(statearr_66781_68896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (13))){
var inst_66687 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_66688 = cljs.core.deref(inst_66687);
var state_66730__$1 = state_66730;
if(cljs.core.truth_(inst_66688)){
var statearr_66808_68901 = state_66730__$1;
(statearr_66808_68901[(1)] = (16));

} else {
var statearr_66809_68902 = state_66730__$1;
(statearr_66809_68902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (22))){
var inst_66683 = (state_66730[(8)]);
var state_66730__$1 = state_66730;
var statearr_66810_68903 = state_66730__$1;
(statearr_66810_68903[(2)] = inst_66683);

(statearr_66810_68903[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (6))){
var inst_66665 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_66666 = [true];
var inst_66667 = cljs.core.PersistentHashMap.fromArrays(inst_66665,inst_66666);
var state_66730__$1 = state_66730;
var statearr_66814_68904 = state_66730__$1;
(statearr_66814_68904[(2)] = inst_66667);

(statearr_66814_68904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (25))){
var inst_66681 = (state_66730[(13)]);
var state_66730__$1 = state_66730;
var statearr_66816_68905 = state_66730__$1;
(statearr_66816_68905[(2)] = inst_66681);

(statearr_66816_68905[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (17))){
var inst_66681 = (state_66730[(13)]);
var state_66730__$1 = state_66730;
var statearr_66817_68907 = state_66730__$1;
(statearr_66817_68907[(2)] = inst_66681);

(statearr_66817_68907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (3))){
var inst_66643 = (state_66730[(10)]);
var inst_66642 = (state_66730[(9)]);
var inst_66645 = (state_66730[(14)]);
var inst_66647 = (state_66730[(2)]);
var inst_66648 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_66647,inst_66645);
var inst_66649 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var inst_66650 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null);
var inst_66651 = (function (){var remote_all_files_meta_c = inst_66642;
var local_all_files_meta_c = inst_66643;
var remote_all_files_meta = inst_66645;
var local_all_files_meta = inst_66647;
var diff_local_files = inst_66648;
var ignore_files = inst_66649;
var monitored_dirs = inst_66650;
return (function (p1__66160_SHARP_){
return frontend.fs.sync.__GT_FileChangeEvent("change",self__.base_path,p1__66160_SHARP_.get_normalized_path(),null);
});
})();
var inst_66652 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_66651);
var inst_66654 = (function (){var remote_all_files_meta_c = inst_66642;
var local_all_files_meta_c = inst_66643;
var remote_all_files_meta = inst_66645;
var local_all_files_meta = inst_66647;
var diff_local_files = inst_66648;
var ignore_files = inst_66649;
var monitored_dirs = inst_66650;
return (function (p1__66161_SHARP_){
var path = frontend.fs.sync.relative_path(p1__66161_SHARP_);
var and__4251__auto__ = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,path));
if(and__4251__auto__){
return frontend.fs.sync.contains_path_QMARK_(monitored_dirs,path);
} else {
return and__4251__auto__;
}
});
})();
var inst_66655 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_66654);
var inst_66656 = frontend.fs.sync.partition_file_change_events((10));
var inst_66657 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_66652,inst_66655,inst_66656);
var inst_66658 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_66657,inst_66648);
var inst_66659 = cljs.core.flatten(inst_66658);
var inst_66660 = cljs.core.count(inst_66659);
var inst_66661 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(local->remote)]",inst_66660,"files need to sync"], 0));
var inst_66662 = inst_66658;
var state_66730__$1 = (function (){var statearr_66824 = state_66730;
(statearr_66824[(7)] = inst_66662);

(statearr_66824[(15)] = inst_66661);

return statearr_66824;
})();
var statearr_66825_68911 = state_66730__$1;
(statearr_66825_68911[(2)] = null);

(statearr_66825_68911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (12))){
var inst_66681 = (state_66730[(13)]);
var inst_66680 = (state_66730[(2)]);
var inst_66681__$1 = cljs.core.__destructure_map(inst_66680);
var inst_66682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66681__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_66683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66681__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_66684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66681__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_66730__$1 = (function (){var statearr_66826 = state_66730;
(statearr_66826[(8)] = inst_66683);

(statearr_66826[(11)] = inst_66682);

(statearr_66826[(16)] = inst_66684);

(statearr_66826[(13)] = inst_66681__$1);

return statearr_66826;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_66828_68913 = state_66730__$1;
(statearr_66828_68913[(1)] = (13));

} else {
var statearr_66830_68914 = state_66730__$1;
(statearr_66830_68914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (2))){
var inst_66643 = (state_66730[(10)]);
var inst_66645 = (state_66730[(2)]);
var state_66730__$1 = (function (){var statearr_66831 = state_66730;
(statearr_66831[(14)] = inst_66645);

return statearr_66831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66730__$1,(3),inst_66643);
} else {
if((state_val_66731 === (23))){
var inst_66684 = (state_66730[(16)]);
var state_66730__$1 = state_66730;
var statearr_66833_68915 = state_66730__$1;
(statearr_66833_68915[(2)] = inst_66684);

(statearr_66833_68915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (19))){
var inst_66662 = (state_66730[(7)]);
var inst_66709 = cljs.core.next(inst_66662);
var inst_66662__$1 = inst_66709;
var state_66730__$1 = (function (){var statearr_66835 = state_66730;
(statearr_66835[(7)] = inst_66662__$1);

return statearr_66835;
})();
var statearr_66836_68916 = state_66730__$1;
(statearr_66836_68916[(2)] = null);

(statearr_66836_68916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (11))){
var inst_66724 = (state_66730[(2)]);
var state_66730__$1 = state_66730;
var statearr_66837_68917 = state_66730__$1;
(statearr_66837_68917[(2)] = inst_66724);

(statearr_66837_68917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (9))){
var inst_66671 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_66672 = [true];
var inst_66673 = cljs.core.PersistentHashMap.fromArrays(inst_66671,inst_66672);
var state_66730__$1 = state_66730;
var statearr_66840_68919 = state_66730__$1;
(statearr_66840_68919[(2)] = inst_66673);

(statearr_66840_68919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (5))){
var inst_66728 = (state_66730[(2)]);
var state_66730__$1 = state_66730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66730__$1,inst_66728);
} else {
if((state_val_66731 === (14))){
var inst_66681 = (state_66730[(13)]);
var state_66730__$1 = state_66730;
var statearr_66842_68921 = state_66730__$1;
(statearr_66842_68921[(2)] = inst_66681);

(statearr_66842_68921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (26))){
var state_66730__$1 = state_66730;
var statearr_66843_68923 = state_66730__$1;
(statearr_66843_68923[(2)] = null);

(statearr_66843_68923[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (16))){
var inst_66681 = (state_66730[(13)]);
var inst_66699 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_66681);
var state_66730__$1 = state_66730;
var statearr_66845_68924 = state_66730__$1;
(statearr_66845_68924[(2)] = inst_66699);

(statearr_66845_68924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (10))){
var inst_66662 = (state_66730[(7)]);
var inst_66677 = cljs.core.first(inst_66662);
var inst_66678 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_66677);
var state_66730__$1 = state_66730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66730__$1,(12),inst_66678);
} else {
if((state_val_66731 === (18))){
var inst_66702 = (state_66730[(2)]);
var state_66730__$1 = state_66730;
var statearr_66846_68925 = state_66730__$1;
(statearr_66846_68925[(2)] = inst_66702);

(statearr_66846_68925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66731 === (8))){
var inst_66726 = (state_66730[(2)]);
var state_66730__$1 = state_66730;
var statearr_66847_68927 = state_66730__$1;
(statearr_66847_68927[(2)] = inst_66726);

(statearr_66847_68927[(1)] = (5));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_66849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66849[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_66849[(1)] = (1));

return statearr_66849;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_66730){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66730);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66851){var ex__41842__auto__ = e66851;
var statearr_66852_68929 = state_66730;
(statearr_66852_68929[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66730[(4)]))){
var statearr_66853_68931 = state_66730;
(statearr_66853_68931[(1)] = cljs.core.first((state_66730[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68934 = state_66730;
state_66730 = G__68934;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_66730){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_66730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66854 = f__41862__auto__();
(statearr_66854[(6)] = c__41861__auto__);

return statearr_66854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.fs.sync.Local->RemoteSyncer{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rate","rate",-1428659698),self__.rate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),self__.stop_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped],null))], null),self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66163){
var self__ = this;
var G__66163__$1 = this;
return (new cljs.core.RecordIter((0),G__66163__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (791760177 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66165,other66166){
var self__ = this;
var this66165__$1 = this;
return (((!((other66166 == null)))) && ((((this66165__$1.constructor === other66166.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.user_uuid,other66166.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.graph_uuid,other66166.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.base_path,other66166.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.repo,other66166.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1._STAR_sync_state,other66166._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.rate,other66166.rate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1._STAR_txid,other66166._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.remote__GT_local_syncer,other66166.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.stop_chan,other66166.stop_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.stopped,other66166.stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66165__$1.__extmap,other66166.__extmap)))))))))))))))))))))))));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),null,new cljs.core.Keyword(null,"rate","rate",-1428659698),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"repo","repo",-1999060679),null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k66164){
var self__ = this;
var this__4509__auto____$1 = this;
var G__66925 = k66164;
var G__66925__$1 = (((G__66925 instanceof cljs.core.Keyword))?G__66925.fqn:null);
switch (G__66925__$1) {
case "user-uuid":
case "graph-uuid":
case "base-path":
case "repo":
case "*sync-state":
case "rate":
case "*txid":
case "remote->local-syncer":
case "stop-chan":
case "stopped":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66164);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__66163){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__66928 = cljs.core.keyword_identical_QMARK_;
var expr__66929 = k__4511__auto__;
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(G__66163,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,G__66163,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,G__66163,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__66163,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__66163,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,G__66163,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,G__66163,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,G__66163,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,G__66163,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66928.cljs$core$IFn$_invoke$arity$2 ? pred__66928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__66929) : pred__66928.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__66929)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,G__66163,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__66163),null));
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
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rate","rate",-1428659698),self__.rate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),self__.stop_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped,null))], null),self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__66163){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,G__66163,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-uuid","user-uuid",1364577479,null),new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"repo","repo",-358529152,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"rate","rate",211871829,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),cljs.core.with_meta(new cljs.core.Symbol(null,"remote->local-syncer","remote->local-syncer",576154816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"stop-chan","stop-chan",-825853786,null),cljs.core.with_meta(new cljs.core.Symbol(null,"stopped","stopped",150116887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$type = true);

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/Local->RemoteSyncer",null,(1),null));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.fs.sync/Local->RemoteSyncer");
}));

/**
 * Positional factory function for frontend.fs.sync/Local->RemoteSyncer.
 */
frontend.fs.sync.__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$__GT_Local__GT_RemoteSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,rate,_STAR_txid,remote__GT_local_syncer,stop_chan,stopped){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,rate,_STAR_txid,remote__GT_local_syncer,stop_chan,stopped,null,null,null));
});

/**
 * Factory function for frontend.fs.sync/Local->RemoteSyncer, taking a map of keywords to field values.
 */
frontend.fs.sync.map__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$map__GT_Local__GT_RemoteSyncer(G__66168){
var extmap__4542__auto__ = (function (){var G__66963 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66168,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], 0));
if(cljs.core.record_QMARK_(G__66168)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66963);
} else {
return G__66963;
}
})();
return (new frontend.fs.sync.Local__GT_RemoteSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983).cljs$core$IFn$_invoke$arity$1(G__66168),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__66168),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * drop all stuffs in CH
 */
frontend.fs.sync.drain_chan = (function frontend$fs$sync$drain_chan(ch){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.async.poll_BANG_(ch);
})));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {frontend.fs.sync.IStoppable}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.sync.SyncManager = (function (graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,ratelimit_local_changes_chan,_STAR_txid,state,_remote_change_chan,__STAR_ws,stopped,ops_chan,__meta,__extmap,__hash){
this.graph_uuid = graph_uuid;
this.base_path = base_path;
this._STAR_sync_state = _STAR_sync_state;
this.local__GT_remote_syncer = local__GT_remote_syncer;
this.remote__GT_local_syncer = remote__GT_local_syncer;
this.full_sync_chan = full_sync_chan;
this.stop_sync_chan = stop_sync_chan;
this.remote__GT_local_sync_chan = remote__GT_local_sync_chan;
this.local__GT_remote_sync_chan = local__GT_remote_sync_chan;
this.local_changes_chan = local_changes_chan;
this.ratelimit_local_changes_chan = ratelimit_local_changes_chan;
this._STAR_txid = _STAR_txid;
this.state = state;
this._remote_change_chan = _remote_change_chan;
this.__STAR_ws = __STAR_ws;
this.stopped = stopped;
this.ops_chan = ops_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.sync.SyncManager.prototype.schedule = (function (next_state,args){
var self__ = this;
var this$ = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),next_state)], null)], null);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[SyncManager",self__.graph_uuid,"]",(function (){var and__4251__auto__ = self__.state;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.name(self__.state);
} else {
return and__4251__auto__;
}
})(),"->",(function (){var and__4251__auto__ = next_state;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.name(next_state);
} else {
return and__4251__auto__;
}
})()], 0));

(self__.state = next_state);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_state,next_state);

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67031){
var state_val_67032 = (state_67031[(1)]);
if((state_val_67032 === (7))){
var inst_67013 = this$.remote__GT_local(null,args);
var state_67031__$1 = state_67031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67031__$1,(8),inst_67013);
} else {
if((state_val_67032 === (1))){
var state_67031__$1 = state_67031;
var G__67036_68962 = self__.state;
var G__67036_68963__$1 = (((G__67036_68962 instanceof cljs.core.Keyword))?G__67036_68962.fqn:null);
switch (G__67036_68963__$1) {
case "frontend.fs.sync/idle":
var statearr_67037_68969 = state_67031__$1;
(statearr_67037_68969[(1)] = (3));


break;
case "frontend.fs.sync/local->remote":
var statearr_67039_68971 = state_67031__$1;
(statearr_67039_68971[(1)] = (5));


break;
case "frontend.fs.sync/remote->local":
var statearr_67041_68972 = state_67031__$1;
(statearr_67041_68972[(1)] = (7));


break;
case "frontend.fs.sync/local->remote-full-sync":
var statearr_67043_68973 = state_67031__$1;
(statearr_67043_68973[(1)] = (9));


break;
case "frontend.fs.sync/remote->local-full-sync":
var statearr_67044_68974 = state_67031__$1;
(statearr_67044_68974[(1)] = (11));


break;
case "frontend.fs.sync/stop":
var statearr_67045_68975 = state_67031__$1;
(statearr_67045_68975[(1)] = (13));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67036_68963__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67032 === (4))){
var inst_67007 = (state_67031[(2)]);
var state_67031__$1 = state_67031;
var statearr_67047_68976 = state_67031__$1;
(statearr_67047_68976[(2)] = inst_67007);

(statearr_67047_68976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67032 === (13))){
var inst_67026 = this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(null);
var state_67031__$1 = state_67031;
var statearr_67049_68977 = state_67031__$1;
(statearr_67049_68977[(2)] = inst_67026);

(statearr_67049_68977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67032 === (6))){
var inst_67011 = (state_67031[(2)]);
var state_67031__$1 = state_67031;
var statearr_67050_68980 = state_67031__$1;
(statearr_67050_68980[(2)] = inst_67011);

(statearr_67050_68980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67032 === (3))){
var inst_67005 = this$.idle();
var state_67031__$1 = state_67031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67031__$1,(4),inst_67005);
} else {
if((state_val_67032 === (12))){
var inst_67024 = (state_67031[(2)]);
var state_67031__$1 = state_67031;
var statearr_67051_68984 = state_67031__$1;
(statearr_67051_68984[(2)] = inst_67024);

(statearr_67051_68984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67032 === (2))){
var inst_67029 = (state_67031[(2)]);
var state_67031__$1 = state_67031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67031__$1,inst_67029);
} else {
if((state_val_67032 === (11))){
var inst_67021 = this$.remote__GT_local_full_sync(null);
var state_67031__$1 = state_67031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67031__$1,(12),inst_67021);
} else {
if((state_val_67032 === (9))){
var inst_67017 = this$.full_sync();
var state_67031__$1 = state_67031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67031__$1,(10),inst_67017);
} else {
if((state_val_67032 === (5))){
var inst_67009 = this$.local__GT_remote(args);
var state_67031__$1 = state_67031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67031__$1,(6),inst_67009);
} else {
if((state_val_67032 === (10))){
var inst_67019 = (state_67031[(2)]);
var state_67031__$1 = state_67031;
var statearr_67054_68988 = state_67031__$1;
(statearr_67054_68988[(2)] = inst_67019);

(statearr_67054_68988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67032 === (8))){
var inst_67015 = (state_67031[(2)]);
var state_67031__$1 = state_67031;
var statearr_67055_68989 = state_67031__$1;
(statearr_67055_68989[(2)] = inst_67015);

(statearr_67055_68989[(1)] = (2));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_67059 = [null,null,null,null,null,null,null];
(statearr_67059[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_67059[(1)] = (1));

return statearr_67059;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_67031){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67031);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67062){var ex__41842__auto__ = e67062;
var statearr_67063_68992 = state_67031;
(statearr_67063_68992[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67031[(4)]))){
var statearr_67065_68993 = state_67031;
(statearr_67065_68993[(1)] = cljs.core.first((state_67031[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68994 = state_67031;
state_67031 = G__68994;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_67031){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_67031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67068 = f__41862__auto__();
(statearr_67068[(6)] = c__41861__auto__);

return statearr_67068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.start = (function (){
var self__ = this;
var this$ = this;
(self__.ops_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10))));

(self__.__STAR_ws = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));

(self__._remote_change_chan = frontend.fs.sync.ws_listen_BANG_(self__.graph_uuid,self__.__STAR_ws));

(self__.ratelimit_local_changes_chan = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2(null,self__.local_changes_chan));

var c__41861__auto___68995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67244){
var state_val_67245 = (state_67244[(1)]);
if((state_val_67245 === (7))){
var inst_67174 = (state_67244[(2)]);
var inst_67175 = cljs.core.__destructure_map(inst_67174);
var inst_67176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67175,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_67177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67175,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_67178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67175,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_67179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67175,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var state_67244__$1 = (function (){var statearr_67255 = state_67244;
(statearr_67255[(7)] = inst_67178);

(statearr_67255[(8)] = inst_67177);

(statearr_67255[(9)] = inst_67179);

return statearr_67255;
})();
if(cljs.core.truth_(inst_67176)){
var statearr_67257_68998 = state_67244__$1;
(statearr_67257_68998[(1)] = (26));

} else {
var statearr_67258_68999 = state_67244__$1;
(statearr_67258_68999[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (20))){
var inst_67154 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_67155 = [true];
var inst_67156 = cljs.core.PersistentHashMap.fromArrays(inst_67154,inst_67155);
var state_67244__$1 = state_67244;
var statearr_67260_69000 = state_67244__$1;
(statearr_67260_69000[(2)] = inst_67156);

(statearr_67260_69000[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (27))){
var inst_67177 = (state_67244[(8)]);
var state_67244__$1 = state_67244;
if(cljs.core.truth_(inst_67177)){
var statearr_67262_69001 = state_67244__$1;
(statearr_67262_69001[(1)] = (30));

} else {
var statearr_67264_69002 = state_67244__$1;
(statearr_67264_69002[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (1))){
var state_67244__$1 = state_67244;
var statearr_67266_69003 = state_67244__$1;
(statearr_67266_69003[(2)] = null);

(statearr_67266_69003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (24))){
var state_67244__$1 = state_67244;
var statearr_67267_69004 = state_67244__$1;
(statearr_67267_69004[(2)] = null);

(statearr_67267_69004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (39))){
var inst_67212 = (state_67244[(2)]);
var state_67244__$1 = (function (){var statearr_67268 = state_67244;
(statearr_67268[(10)] = inst_67212);

return statearr_67268;
})();
var statearr_67269_69005 = state_67244__$1;
(statearr_67269_69005[(2)] = null);

(statearr_67269_69005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (46))){
var state_67244__$1 = state_67244;
var statearr_67271_69006 = state_67244__$1;
(statearr_67271_69006[(2)] = null);

(statearr_67271_69006[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (4))){
var inst_67102 = (state_67244[(11)]);
var inst_67087 = (state_67244[(12)]);
var inst_67104 = (state_67244[(13)]);
var inst_67102__$1 = (state_67244[(2)]);
var inst_67103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67102__$1,(0),null);
var inst_67104__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67102__$1,(1),null);
var inst_67105 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67104__$1,inst_67087);
var state_67244__$1 = (function (){var statearr_67272 = state_67244;
(statearr_67272[(11)] = inst_67102__$1);

(statearr_67272[(13)] = inst_67104__$1);

(statearr_67272[(14)] = inst_67103);

return statearr_67272;
})();
if(inst_67105){
var statearr_67273_69009 = state_67244__$1;
(statearr_67273_69009[(1)] = (5));

} else {
var statearr_67274_69010 = state_67244__$1;
(statearr_67274_69010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (15))){
var inst_67092 = (state_67244[(15)]);
var inst_67104 = (state_67244[(13)]);
var inst_67140 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67104,inst_67092);
var state_67244__$1 = state_67244;
if(inst_67140){
var statearr_67275_69011 = state_67244__$1;
(statearr_67275_69011[(1)] = (17));

} else {
var statearr_67276_69012 = state_67244__$1;
(statearr_67276_69012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (48))){
var inst_67230 = (state_67244[(2)]);
var state_67244__$1 = (function (){var statearr_67277 = state_67244;
(statearr_67277[(16)] = inst_67230);

return statearr_67277;
})();
var statearr_67278_69013 = state_67244__$1;
(statearr_67278_69013[(2)] = null);

(statearr_67278_69013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (21))){
var inst_67104 = (state_67244[(13)]);
var inst_67158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67104,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_67244__$1 = state_67244;
if(inst_67158){
var statearr_67279_69014 = state_67244__$1;
(statearr_67279_69014[(1)] = (23));

} else {
var statearr_67280_69015 = state_67244__$1;
(statearr_67280_69015[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (31))){
var inst_67179 = (state_67244[(9)]);
var state_67244__$1 = state_67244;
if(cljs.core.truth_(inst_67179)){
var statearr_67281_69016 = state_67244__$1;
(statearr_67281_69016[(1)] = (41));

} else {
var statearr_67282_69017 = state_67244__$1;
(statearr_67282_69017[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (32))){
var inst_67238 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67300_69020 = state_67244__$1;
(statearr_67300_69020[(2)] = inst_67238);

(statearr_67300_69020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (40))){
var inst_67209 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67301_69021 = state_67244__$1;
(statearr_67301_69021[(2)] = inst_67209);

(statearr_67301_69021[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (33))){
var inst_67191 = [new cljs.core.Keyword(null,"txid","txid",1606205478)];
var inst_67192 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_67244__$1 = (function (){var statearr_67303 = state_67244;
(statearr_67303[(17)] = inst_67191);

return statearr_67303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67244__$1,(36),inst_67192);
} else {
if((state_val_67245 === (13))){
var inst_67170 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67304_69022 = state_67244__$1;
(statearr_67304_69022[(2)] = inst_67170);

(statearr_67304_69022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (22))){
var inst_67164 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67305_69023 = state_67244__$1;
(statearr_67305_69023[(2)] = inst_67164);

(statearr_67305_69023[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (36))){
var inst_67191 = (state_67244[(17)]);
var inst_67194 = (state_67244[(2)]);
var inst_67195 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_67194);
var inst_67196 = [inst_67195];
var inst_67197 = cljs.core.PersistentHashMap.fromArrays(inst_67191,inst_67196);
var state_67244__$1 = state_67244;
var statearr_67306_69024 = state_67244__$1;
(statearr_67306_69024[(2)] = inst_67197);

(statearr_67306_69024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (41))){
var inst_67179 = (state_67244[(9)]);
var inst_67216 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_67217 = [inst_67179];
var inst_67218 = cljs.core.PersistentHashMap.fromArrays(inst_67216,inst_67217);
var state_67244__$1 = state_67244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67244__$1,(44),self__.ops_chan,inst_67218);
} else {
if((state_val_67245 === (43))){
var inst_67236 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67307_69026 = state_67244__$1;
(statearr_67307_69026[(2)] = inst_67236);

(statearr_67307_69026[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (29))){
var inst_67186 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67308_69028 = state_67244__$1;
(statearr_67308_69028[(2)] = inst_67186);

(statearr_67308_69028[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (44))){
var inst_67220 = (state_67244[(2)]);
var state_67244__$1 = (function (){var statearr_67309 = state_67244;
(statearr_67309[(18)] = inst_67220);

return statearr_67309;
})();
var statearr_67311_69029 = state_67244__$1;
(statearr_67311_69029[(2)] = null);

(statearr_67311_69029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (6))){
var inst_67104 = (state_67244[(13)]);
var inst_67089 = (state_67244[(19)]);
var inst_67112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67104,inst_67089);
var state_67244__$1 = state_67244;
if(inst_67112){
var statearr_67312_69030 = state_67244__$1;
(statearr_67312_69030[(1)] = (8));

} else {
var statearr_67313_69031 = state_67244__$1;
(statearr_67313_69031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (28))){
var inst_67240 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67314_69033 = state_67244__$1;
(statearr_67314_69033[(2)] = inst_67240);

(statearr_67314_69033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (25))){
var inst_67162 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67315_69035 = state_67244__$1;
(statearr_67315_69035[(2)] = inst_67162);

(statearr_67315_69035[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (34))){
var inst_67177 = (state_67244[(8)]);
var state_67244__$1 = state_67244;
var statearr_67316_69036 = state_67244__$1;
(statearr_67316_69036[(2)] = inst_67177);

(statearr_67316_69036[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (17))){
var inst_67102 = (state_67244[(11)]);
var inst_67145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67102,(0),null);
var inst_67146 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local changes:",inst_67145], 0));
var inst_67147 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_67148 = [inst_67145];
var inst_67149 = cljs.core.PersistentHashMap.fromArrays(inst_67147,inst_67148);
var state_67244__$1 = (function (){var statearr_67317 = state_67244;
(statearr_67317[(20)] = inst_67146);

return statearr_67317;
})();
var statearr_67319_69037 = state_67244__$1;
(statearr_67319_69037[(2)] = inst_67149);

(statearr_67319_69037[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (3))){
var inst_67242 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67244__$1,inst_67242);
} else {
if((state_val_67245 === (12))){
var inst_67091 = (state_67244[(21)]);
var inst_67104 = (state_67244[(13)]);
var inst_67127 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67104,inst_67091);
var state_67244__$1 = state_67244;
if(inst_67127){
var statearr_67321_69040 = state_67244__$1;
(statearr_67321_69040[(1)] = (14));

} else {
var statearr_67322_69041 = state_67244__$1;
(statearr_67322_69041[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (2))){
var inst_67090 = (state_67244[(22)]);
var inst_67092 = (state_67244[(15)]);
var inst_67087 = (state_67244[(12)]);
var inst_67091 = (state_67244[(21)]);
var inst_67096 = (state_67244[(23)]);
var inst_67089 = (state_67244[(19)]);
var inst_67087__$1 = self__.stop_sync_chan;
var inst_67089__$1 = self__.remote__GT_local_sync_chan;
var inst_67090__$1 = self__.full_sync_chan;
var inst_67091__$1 = self__._remote_change_chan;
var inst_67092__$1 = self__.ratelimit_local_changes_chan;
var inst_67094 = ((20) * (60));
var inst_67095 = (inst_67094 * (1000));
var inst_67096__$1 = cljs.core.async.timeout(inst_67095);
var inst_67097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67098 = [inst_67087__$1,inst_67089__$1,inst_67090__$1,inst_67091__$1,inst_67092__$1,inst_67096__$1];
var inst_67099 = (new cljs.core.PersistentVector(null,6,(5),inst_67097,inst_67098,null));
var state_67244__$1 = (function (){var statearr_67324 = state_67244;
(statearr_67324[(22)] = inst_67090__$1);

(statearr_67324[(15)] = inst_67092__$1);

(statearr_67324[(12)] = inst_67087__$1);

(statearr_67324[(21)] = inst_67091__$1);

(statearr_67324[(23)] = inst_67096__$1);

(statearr_67324[(19)] = inst_67089__$1);

return statearr_67324;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_67244__$1,(4),inst_67099,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_67245 === (23))){
var inst_67103 = (state_67244[(14)]);
var state_67244__$1 = state_67244;
var statearr_67325_69042 = state_67244__$1;
(statearr_67325_69042[(2)] = inst_67103);

(statearr_67325_69042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (47))){
var inst_67234 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67326_69043 = state_67244__$1;
(statearr_67326_69043[(2)] = inst_67234);

(statearr_67326_69043[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (35))){
var inst_67200 = (state_67244[(24)]);
var inst_67200__$1 = (state_67244[(2)]);
var inst_67201 = (inst_67200__$1 == null);
var inst_67202 = cljs.core.not(inst_67201);
var state_67244__$1 = (function (){var statearr_67328 = state_67244;
(statearr_67328[(24)] = inst_67200__$1);

return statearr_67328;
})();
if(inst_67202){
var statearr_67329_69044 = state_67244__$1;
(statearr_67329_69044[(1)] = (37));

} else {
var statearr_67330_69045 = state_67244__$1;
(statearr_67330_69045[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (19))){
var inst_67166 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67331_69046 = state_67244__$1;
(statearr_67331_69046[(2)] = inst_67166);

(statearr_67331_69046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (11))){
var inst_67122 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_67123 = [true];
var inst_67124 = cljs.core.PersistentHashMap.fromArrays(inst_67122,inst_67123);
var state_67244__$1 = state_67244;
var statearr_67332_69047 = state_67244__$1;
(statearr_67332_69047[(2)] = inst_67124);

(statearr_67332_69047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (9))){
var inst_67090 = (state_67244[(22)]);
var inst_67104 = (state_67244[(13)]);
var inst_67119 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67104,inst_67090);
var state_67244__$1 = state_67244;
if(inst_67119){
var statearr_67334_69048 = state_67244__$1;
(statearr_67334_69048[(1)] = (11));

} else {
var statearr_67335_69049 = state_67244__$1;
(statearr_67335_69049[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (5))){
var inst_67108 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_67109 = [true];
var inst_67110 = cljs.core.PersistentHashMap.fromArrays(inst_67108,inst_67109);
var state_67244__$1 = state_67244;
var statearr_67336_69050 = state_67244__$1;
(statearr_67336_69050[(2)] = inst_67110);

(statearr_67336_69050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (14))){
var inst_67102 = (state_67244[(11)]);
var inst_67133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67102,(0),null);
var inst_67134 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote change:",inst_67133], 0));
var inst_67135 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_67136 = [inst_67133];
var inst_67137 = cljs.core.PersistentHashMap.fromArrays(inst_67135,inst_67136);
var state_67244__$1 = (function (){var statearr_67337 = state_67244;
(statearr_67337[(25)] = inst_67134);

return statearr_67337;
})();
var statearr_67338_69052 = state_67244__$1;
(statearr_67338_69052[(2)] = inst_67137);

(statearr_67338_69052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (45))){
var inst_67225 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_67226 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_67227 = [true];
var inst_67228 = cljs.core.PersistentHashMap.fromArrays(inst_67226,inst_67227);
var state_67244__$1 = (function (){var statearr_67341 = state_67244;
(statearr_67341[(26)] = inst_67225);

return statearr_67341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67244__$1,(48),self__.ops_chan,inst_67228);
} else {
if((state_val_67245 === (26))){
var inst_67181 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_67182 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_67183 = [true];
var inst_67184 = cljs.core.PersistentHashMap.fromArrays(inst_67182,inst_67183);
var state_67244__$1 = (function (){var statearr_67342 = state_67244;
(statearr_67342[(27)] = inst_67181);

return statearr_67342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67244__$1,(29),self__.ops_chan,inst_67184);
} else {
if((state_val_67245 === (16))){
var inst_67168 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67343_69056 = state_67244__$1;
(statearr_67343_69056[(2)] = inst_67168);

(statearr_67343_69056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (38))){
var state_67244__$1 = state_67244;
var statearr_67345_69057 = state_67244__$1;
(statearr_67345_69057[(2)] = null);

(statearr_67345_69057[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (30))){
var inst_67177 = (state_67244[(8)]);
var inst_67189 = inst_67177 === true;
var state_67244__$1 = state_67244;
if(cljs.core.truth_(inst_67189)){
var statearr_67346_69059 = state_67244__$1;
(statearr_67346_69059[(1)] = (33));

} else {
var statearr_67347_69060 = state_67244__$1;
(statearr_67347_69060[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (10))){
var inst_67172 = (state_67244[(2)]);
var state_67244__$1 = state_67244;
var statearr_67348_69061 = state_67244__$1;
(statearr_67348_69061[(2)] = inst_67172);

(statearr_67348_69061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (18))){
var inst_67096 = (state_67244[(23)]);
var inst_67104 = (state_67244[(13)]);
var inst_67151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_67104,inst_67096);
var state_67244__$1 = state_67244;
if(inst_67151){
var statearr_67351_69062 = state_67244__$1;
(statearr_67351_69062[(1)] = (20));

} else {
var statearr_67352_69063 = state_67244__$1;
(statearr_67352_69063[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (42))){
var inst_67178 = (state_67244[(7)]);
var state_67244__$1 = state_67244;
if(cljs.core.truth_(inst_67178)){
var statearr_67353_69065 = state_67244__$1;
(statearr_67353_69065[(1)] = (45));

} else {
var statearr_67354_69066 = state_67244__$1;
(statearr_67354_69066[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67245 === (37))){
var inst_67200 = (state_67244[(24)]);
var inst_67205 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_67206 = [inst_67200];
var inst_67207 = cljs.core.PersistentHashMap.fromArrays(inst_67205,inst_67206);
var state_67244__$1 = state_67244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67244__$1,(40),self__.ops_chan,inst_67207);
} else {
if((state_val_67245 === (8))){
var inst_67115 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_67116 = [true];
var inst_67117 = cljs.core.PersistentHashMap.fromArrays(inst_67115,inst_67116);
var state_67244__$1 = state_67244;
var statearr_67355_69067 = state_67244__$1;
(statearr_67355_69067[(2)] = inst_67117);

(statearr_67355_69067[(1)] = (10));


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
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_67356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67356[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_67356[(1)] = (1));

return statearr_67356;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_67244){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67244);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67357){var ex__41842__auto__ = e67357;
var statearr_67358_69072 = state_67244;
(statearr_67358_69072[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67244[(4)]))){
var statearr_67359_69074 = state_67244;
(statearr_67359_69074[(1)] = cljs.core.first((state_67244[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69077 = state_67244;
state_67244 = G__69077;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_67244){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_67244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67364 = f__41862__auto__();
(statearr_67364[(6)] = c__41861__auto___68995);

return statearr_67364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));


return this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
}));

(frontend.fs.sync.SyncManager.prototype.idle = (function (){
var self__ = this;
var this$ = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67429){
var state_val_67430 = (state_67429[(1)]);
if((state_val_67430 === (7))){
var inst_67374 = (state_67429[(7)]);
var inst_67386 = [new cljs.core.Keyword(null,"remote","remote",-1593576576)];
var inst_67387 = [inst_67374];
var inst_67388 = cljs.core.PersistentHashMap.fromArrays(inst_67386,inst_67387);
var inst_67389 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),inst_67388);
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67429__$1,(10),inst_67389);
} else {
if((state_val_67430 === (20))){
var state_67429__$1 = state_67429;
var statearr_67431_69083 = state_67429__$1;
(statearr_67431_69083[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (1))){
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67429__$1,(2),self__.ops_chan);
} else {
if((state_val_67430 === (24))){
var state_67429__$1 = state_67429;
var statearr_67433_69084 = state_67429__$1;
(statearr_67433_69084[(2)] = null);

(statearr_67433_69084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (4))){
var inst_67374 = (state_67429[(7)]);
var state_67429__$1 = state_67429;
if(cljs.core.truth_(inst_67374)){
var statearr_67434_69085 = state_67429__$1;
(statearr_67434_69085[(1)] = (7));

} else {
var statearr_67435_69086 = state_67429__$1;
(statearr_67435_69086[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (15))){
var inst_67402 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null);
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67429__$1,(18),inst_67402);
} else {
if((state_val_67430 === (21))){
var inst_67419 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67436_69087 = state_67429__$1;
(statearr_67436_69087[(2)] = inst_67419);

(statearr_67436_69087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (13))){
var inst_67423 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67437_69088 = state_67429__$1;
(statearr_67437_69088[(2)] = inst_67423);

(statearr_67437_69088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (22))){
var inst_67409 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67438_69089 = state_67429__$1;
(statearr_67438_69089[(2)] = inst_67409);

(statearr_67438_69089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (6))){
var inst_67382 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67439_69090 = state_67429__$1;
(statearr_67439_69090[(2)] = inst_67382);

(statearr_67439_69090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (25))){
var inst_67417 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67440_69091 = state_67429__$1;
(statearr_67440_69091[(2)] = inst_67417);

(statearr_67440_69091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (17))){
var inst_67421 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67441_69092 = state_67429__$1;
(statearr_67441_69092[(2)] = inst_67421);

(statearr_67441_69092[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (3))){
var inst_67380 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67429__$1,(6),inst_67380);
} else {
if((state_val_67430 === (12))){
var inst_67377 = (state_67429[(8)]);
var state_67429__$1 = state_67429;
if(cljs.core.truth_(inst_67377)){
var statearr_67442_69093 = state_67429__$1;
(statearr_67442_69093[(1)] = (15));

} else {
var statearr_67443_69094 = state_67429__$1;
(statearr_67443_69094[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (2))){
var inst_67371 = (state_67429[(2)]);
var inst_67372 = cljs.core.__destructure_map(inst_67371);
var inst_67373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67372,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_67374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67372,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_67375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67372,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var inst_67377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67372,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_67378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67372,new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000));
var state_67429__$1 = (function (){var statearr_67445 = state_67429;
(statearr_67445[(7)] = inst_67374);

(statearr_67445[(9)] = inst_67375);

(statearr_67445[(8)] = inst_67377);

(statearr_67445[(10)] = inst_67378);

return statearr_67445;
})();
if(cljs.core.truth_(inst_67373)){
var statearr_67447_69096 = state_67429__$1;
(statearr_67447_69096[(1)] = (3));

} else {
var statearr_67448_69097 = state_67429__$1;
(statearr_67448_69097[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (23))){
var inst_67412 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67429__$1,(26),inst_67412);
} else {
if((state_val_67430 === (19))){
var inst_67407 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null);
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67429__$1,(22),inst_67407);
} else {
if((state_val_67430 === (11))){
var inst_67375 = (state_67429[(9)]);
var inst_67394 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_67395 = [inst_67375];
var inst_67396 = cljs.core.PersistentHashMap.fromArrays(inst_67394,inst_67395);
var inst_67397 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),inst_67396);
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67429__$1,(14),inst_67397);
} else {
if((state_val_67430 === (9))){
var inst_67425 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67449_69100 = state_67429__$1;
(statearr_67449_69100[(2)] = inst_67425);

(statearr_67449_69100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (5))){
var inst_67427 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67429__$1,inst_67427);
} else {
if((state_val_67430 === (14))){
var inst_67399 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67450_69101 = state_67429__$1;
(statearr_67450_69101[(2)] = inst_67399);

(statearr_67450_69101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (26))){
var inst_67414 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67451_69102 = state_67429__$1;
(statearr_67451_69102[(2)] = inst_67414);

(statearr_67451_69102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (16))){
var inst_67378 = (state_67429[(10)]);
var state_67429__$1 = state_67429;
if(cljs.core.truth_(inst_67378)){
var statearr_67452_69103 = state_67429__$1;
(statearr_67452_69103[(1)] = (19));

} else {
var statearr_67453_69104 = state_67429__$1;
(statearr_67453_69104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (10))){
var inst_67391 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67454_69105 = state_67429__$1;
(statearr_67454_69105[(2)] = inst_67391);

(statearr_67454_69105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (18))){
var inst_67404 = (state_67429[(2)]);
var state_67429__$1 = state_67429;
var statearr_67455_69106 = state_67429__$1;
(statearr_67455_69106[(2)] = inst_67404);

(statearr_67455_69106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67430 === (8))){
var inst_67375 = (state_67429[(9)]);
var state_67429__$1 = state_67429;
if(cljs.core.truth_(inst_67375)){
var statearr_67456_69107 = state_67429__$1;
(statearr_67456_69107[(1)] = (11));

} else {
var statearr_67457_69108 = state_67429__$1;
(statearr_67457_69108[(1)] = (12));

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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_67458 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67458[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_67458[(1)] = (1));

return statearr_67458;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_67429){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67429);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67460){var ex__41842__auto__ = e67460;
var statearr_67461_69113 = state_67429;
(statearr_67461_69113[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67429[(4)]))){
var statearr_67462_69114 = state_67429;
(statearr_67462_69114[(1)] = cljs.core.first((state_67429[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69115 = state_67429;
state_67429 = G__69115;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_67429){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_67429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67463 = f__41862__auto__();
(statearr_67463[(6)] = c__41861__auto__);

return statearr_67463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.full_sync = (function (){
var self__ = this;
var this$ = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67518){
var state_val_67519 = (state_67518[(1)]);
if((state_val_67519 === (7))){
var inst_67469 = (state_67518[(7)]);
var state_67518__$1 = state_67518;
var statearr_67521_69116 = state_67518__$1;
(statearr_67521_69116[(2)] = inst_67469);

(statearr_67521_69116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (20))){
var inst_67472 = (state_67518[(8)]);
var inst_67506 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full-sync",inst_67472], 0));
var inst_67507 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67518__$1 = (function (){var statearr_67522 = state_67518;
(statearr_67522[(9)] = inst_67506);

return statearr_67522;
})();
var statearr_67523_69117 = state_67518__$1;
(statearr_67523_69117[(2)] = inst_67507);

(statearr_67523_69117[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (1))){
var inst_67466 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(null);
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67518__$1,(2),inst_67466);
} else {
if((state_val_67519 === (4))){
var inst_67469 = (state_67518[(7)]);
var state_67518__$1 = state_67518;
var statearr_67524_69118 = state_67518__$1;
(statearr_67524_69118[(2)] = inst_67469);

(statearr_67524_69118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (15))){
var inst_67494 = (state_67518[(2)]);
var inst_67495 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_67496 = [true];
var inst_67497 = cljs.core.PersistentHashMap.fromArrays(inst_67495,inst_67496);
var state_67518__$1 = (function (){var statearr_67525 = state_67518;
(statearr_67525[(10)] = inst_67494);

return statearr_67525;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67518__$1,(16),self__.ops_chan,inst_67497);
} else {
if((state_val_67519 === (21))){
var state_67518__$1 = state_67518;
var statearr_67526_69119 = state_67518__$1;
(statearr_67526_69119[(2)] = null);

(statearr_67526_69119[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (13))){
var inst_67473 = (state_67518[(11)]);
var state_67518__$1 = state_67518;
if(cljs.core.truth_(inst_67473)){
var statearr_67527_69120 = state_67518__$1;
(statearr_67527_69120[(1)] = (17));

} else {
var statearr_67528_69121 = state_67518__$1;
(statearr_67528_69121[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (22))){
var inst_67510 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67529_69122 = state_67518__$1;
(statearr_67529_69122[(2)] = inst_67510);

(statearr_67529_69122[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (6))){
var inst_67469 = (state_67518[(7)]);
var inst_67478 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),inst_67469);
var state_67518__$1 = state_67518;
var statearr_67530_69123 = state_67518__$1;
(statearr_67530_69123[(2)] = inst_67478);

(statearr_67530_69123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (17))){
var inst_67503 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_67518__$1 = state_67518;
var statearr_67531_69124 = state_67518__$1;
(statearr_67531_69124[(2)] = inst_67503);

(statearr_67531_69124[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (3))){
var inst_67475 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_67476 = cljs.core.deref(inst_67475);
var state_67518__$1 = state_67518;
if(cljs.core.truth_(inst_67476)){
var statearr_67532_69125 = state_67518__$1;
(statearr_67532_69125[(1)] = (6));

} else {
var statearr_67533_69126 = state_67518__$1;
(statearr_67533_69126[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (12))){
var inst_67489 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_67490 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_67491 = [true];
var inst_67492 = cljs.core.PersistentHashMap.fromArrays(inst_67490,inst_67491);
var state_67518__$1 = (function (){var statearr_67534 = state_67518;
(statearr_67534[(12)] = inst_67489);

return statearr_67534;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67518__$1,(15),self__.ops_chan,inst_67492);
} else {
if((state_val_67519 === (2))){
var inst_67469 = (state_67518[(7)]);
var inst_67468 = (state_67518[(2)]);
var inst_67469__$1 = cljs.core.__destructure_map(inst_67468);
var inst_67470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67469__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_67471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67469__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_67472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67469__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_67473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67469__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_67518__$1 = (function (){var statearr_67535 = state_67518;
(statearr_67535[(13)] = inst_67471);

(statearr_67535[(7)] = inst_67469__$1);

(statearr_67535[(14)] = inst_67470);

(statearr_67535[(11)] = inst_67473);

(statearr_67535[(8)] = inst_67472);

return statearr_67535;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_67536_69127 = state_67518__$1;
(statearr_67536_69127[(1)] = (3));

} else {
var statearr_67537_69128 = state_67518__$1;
(statearr_67537_69128[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (19))){
var inst_67512 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67538_69129 = state_67518__$1;
(statearr_67538_69129[(2)] = inst_67512);

(statearr_67538_69129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (11))){
var inst_67516 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67518__$1,inst_67516);
} else {
if((state_val_67519 === (9))){
var inst_67486 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67518__$1 = state_67518;
var statearr_67539_69130 = state_67518__$1;
(statearr_67539_69130[(2)] = inst_67486);

(statearr_67539_69130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (5))){
var inst_67470 = (state_67518[(14)]);
var inst_67484 = (state_67518[(2)]);
var state_67518__$1 = (function (){var statearr_67540 = state_67518;
(statearr_67540[(15)] = inst_67484);

return statearr_67540;
})();
if(cljs.core.truth_(inst_67470)){
var statearr_67541_69131 = state_67518__$1;
(statearr_67541_69131[(1)] = (9));

} else {
var statearr_67542_69132 = state_67518__$1;
(statearr_67542_69132[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (14))){
var inst_67514 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67543_69135 = state_67518__$1;
(statearr_67543_69135[(2)] = inst_67514);

(statearr_67543_69135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (16))){
var inst_67499 = (state_67518[(2)]);
var inst_67500 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67518__$1 = (function (){var statearr_67544 = state_67518;
(statearr_67544[(16)] = inst_67499);

return statearr_67544;
})();
var statearr_67545_69137 = state_67518__$1;
(statearr_67545_69137[(2)] = inst_67500);

(statearr_67545_69137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (10))){
var inst_67471 = (state_67518[(13)]);
var state_67518__$1 = state_67518;
if(cljs.core.truth_(inst_67471)){
var statearr_67546_69140 = state_67518__$1;
(statearr_67546_69140[(1)] = (12));

} else {
var statearr_67547_69142 = state_67518__$1;
(statearr_67547_69142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (18))){
var inst_67472 = (state_67518[(8)]);
var state_67518__$1 = state_67518;
if(cljs.core.truth_(inst_67472)){
var statearr_67548_69143 = state_67518__$1;
(statearr_67548_69143[(1)] = (20));

} else {
var statearr_67549_69144 = state_67518__$1;
(statearr_67549_69144[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67519 === (8))){
var inst_67481 = (state_67518[(2)]);
var state_67518__$1 = state_67518;
var statearr_67550_69145 = state_67518__$1;
(statearr_67550_69145[(2)] = inst_67481);

(statearr_67550_69145[(1)] = (5));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_67551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67551[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_67551[(1)] = (1));

return statearr_67551;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_67518){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67518);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67552){var ex__41842__auto__ = e67552;
var statearr_67553_69146 = state_67518;
(statearr_67553_69146[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67518[(4)]))){
var statearr_67554_69147 = state_67518;
(statearr_67554_69147[(1)] = cljs.core.first((state_67518[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69148 = state_67518;
state_67518 = G__69148;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_67518){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_67518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67555 = f__41862__auto__();
(statearr_67555[(6)] = c__41861__auto__);

return statearr_67555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local_full_sync = (function (_next_state){
var self__ = this;
var this$ = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67581){
var state_val_67582 = (state_67581[(1)]);
if((state_val_67582 === (7))){
var inst_67562 = (state_67581[(7)]);
var state_67581__$1 = state_67581;
if(cljs.core.truth_(inst_67562)){
var statearr_67583_69149 = state_67581__$1;
(statearr_67583_69149[(1)] = (9));

} else {
var statearr_67584_69150 = state_67581__$1;
(statearr_67584_69150[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (1))){
var inst_67557 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(null);
var state_67581__$1 = state_67581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67581__$1,(2),inst_67557);
} else {
if((state_val_67582 === (4))){
var inst_67563 = (state_67581[(8)]);
var state_67581__$1 = state_67581;
if(cljs.core.truth_(inst_67563)){
var statearr_67585_69151 = state_67581__$1;
(statearr_67585_69151[(1)] = (6));

} else {
var statearr_67586_69152 = state_67581__$1;
(statearr_67586_69152[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (6))){
var inst_67568 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_67581__$1 = state_67581;
var statearr_67587_69153 = state_67581__$1;
(statearr_67587_69153[(2)] = inst_67568);

(statearr_67587_69153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (3))){
var inst_67565 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67581__$1 = state_67581;
var statearr_67588_69154 = state_67581__$1;
(statearr_67588_69154[(2)] = inst_67565);

(statearr_67588_69154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (2))){
var inst_67559 = (state_67581[(2)]);
var inst_67560 = cljs.core.__destructure_map(inst_67559);
var inst_67561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67560,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_67562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67560,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_67563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67560,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_67581__$1 = (function (){var statearr_67589 = state_67581;
(statearr_67589[(8)] = inst_67563);

(statearr_67589[(7)] = inst_67562);

return statearr_67589;
})();
if(cljs.core.truth_(inst_67561)){
var statearr_67590_69155 = state_67581__$1;
(statearr_67590_69155[(1)] = (3));

} else {
var statearr_67591_69156 = state_67581__$1;
(statearr_67591_69156[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (11))){
var inst_67575 = (state_67581[(2)]);
var state_67581__$1 = state_67581;
var statearr_67592_69158 = state_67581__$1;
(statearr_67592_69158[(2)] = inst_67575);

(statearr_67592_69158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (9))){
var inst_67562 = (state_67581[(7)]);
var inst_67571 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local-full-sync",inst_67562], 0));
var inst_67572 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67581__$1 = (function (){var statearr_67593 = state_67581;
(statearr_67593[(9)] = inst_67571);

return statearr_67593;
})();
var statearr_67594_69159 = state_67581__$1;
(statearr_67594_69159[(2)] = inst_67572);

(statearr_67594_69159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (5))){
var inst_67579 = (state_67581[(2)]);
var state_67581__$1 = state_67581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67581__$1,inst_67579);
} else {
if((state_val_67582 === (10))){
var state_67581__$1 = state_67581;
var statearr_67595_69160 = state_67581__$1;
(statearr_67595_69160[(2)] = null);

(statearr_67595_69160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67582 === (8))){
var inst_67577 = (state_67581[(2)]);
var state_67581__$1 = state_67581;
var statearr_67596_69161 = state_67581__$1;
(statearr_67596_69161[(2)] = inst_67577);

(statearr_67596_69161[(1)] = (5));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_67597 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67597[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_67597[(1)] = (1));

return statearr_67597;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_67581){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67581);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67598){var ex__41842__auto__ = e67598;
var statearr_67599_69162 = state_67581;
(statearr_67599_69162[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67581[(4)]))){
var statearr_67600_69163 = state_67581;
(statearr_67600_69163[(1)] = cljs.core.first((state_67581[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69164 = state_67581;
state_67581 = G__69164;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_67581){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_67581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67601 = f__41862__auto__();
(statearr_67601[(6)] = c__41861__auto__);

return statearr_67601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local = (function (_next_state,p__67602){
var self__ = this;
var map__67603 = p__67602;
var map__67603__$1 = cljs.core.__destructure_map(map__67603);
var remote_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67603__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var this$ = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67677){
var state_val_67678 = (state_67677[(1)]);
if((state_val_67678 === (7))){
var inst_67618 = (state_67677[(2)]);
var state_67677__$1 = state_67677;
if(cljs.core.truth_(inst_67618)){
var statearr_67679_69165 = state_67677__$1;
(statearr_67679_69165[(1)] = (8));

} else {
var statearr_67680_69166 = state_67677__$1;
(statearr_67680_69166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (20))){
var inst_67673 = (state_67677[(2)]);
var state_67677__$1 = state_67677;
var statearr_67681_69167 = state_67677__$1;
(statearr_67681_69167[(2)] = inst_67673);

(statearr_67681_69167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (27))){
var inst_67628 = (state_67677[(7)]);
var state_67677__$1 = state_67677;
if(cljs.core.truth_(inst_67628)){
var statearr_67682_69168 = state_67677__$1;
(statearr_67682_69168[(1)] = (29));

} else {
var statearr_67683_69171 = state_67677__$1;
(statearr_67683_69171[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (1))){
var inst_67605 = (state_67677[(8)]);
var inst_67605__$1 = remote_val;
var inst_67606 = (inst_67605__$1 == null);
var state_67677__$1 = (function (){var statearr_67684 = state_67677;
(statearr_67684[(8)] = inst_67605__$1);

return statearr_67684;
})();
if(cljs.core.truth_(inst_67606)){
var statearr_67685_69174 = state_67677__$1;
(statearr_67685_69174[(1)] = (2));

} else {
var statearr_67686_69175 = state_67677__$1;
(statearr_67686_69175[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (24))){
var inst_67629 = (state_67677[(9)]);
var state_67677__$1 = state_67677;
if(cljs.core.truth_(inst_67629)){
var statearr_67687_69176 = state_67677__$1;
(statearr_67687_69176[(1)] = (26));

} else {
var statearr_67688_69177 = state_67677__$1;
(statearr_67688_69177[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (4))){
var inst_67611 = (state_67677[(10)]);
var inst_67611__$1 = (state_67677[(2)]);
var inst_67612 = (inst_67611__$1 == null);
var state_67677__$1 = (function (){var statearr_67689 = state_67677;
(statearr_67689[(10)] = inst_67611__$1);

return statearr_67689;
})();
if(cljs.core.truth_(inst_67612)){
var statearr_67690_69178 = state_67677__$1;
(statearr_67690_69178[(1)] = (5));

} else {
var statearr_67691_69179 = state_67677__$1;
(statearr_67691_69179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (15))){
var inst_67626 = (state_67677[(11)]);
var inst_67635 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),inst_67626);
var state_67677__$1 = state_67677;
var statearr_67692_69180 = state_67677__$1;
(statearr_67692_69180[(2)] = inst_67635);

(statearr_67692_69180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (21))){
var inst_67648 = (state_67677[(2)]);
var inst_67649 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_67650 = [true];
var inst_67651 = cljs.core.PersistentHashMap.fromArrays(inst_67649,inst_67650);
var state_67677__$1 = (function (){var statearr_67693 = state_67677;
(statearr_67693[(12)] = inst_67648);

return statearr_67693;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67677__$1,(22),self__.ops_chan,inst_67651);
} else {
if((state_val_67678 === (31))){
var inst_67667 = (state_67677[(2)]);
var state_67677__$1 = state_67677;
var statearr_67694_69181 = state_67677__$1;
(statearr_67694_69181[(2)] = inst_67667);

(statearr_67694_69181[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (13))){
var inst_67626 = (state_67677[(11)]);
var state_67677__$1 = state_67677;
var statearr_67695_69182 = state_67677__$1;
(statearr_67695_69182[(2)] = inst_67626);

(statearr_67695_69182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (22))){
var inst_67653 = (state_67677[(2)]);
var inst_67654 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67677__$1 = (function (){var statearr_67696 = state_67677;
(statearr_67696[(13)] = inst_67653);

return statearr_67696;
})();
var statearr_67697_69183 = state_67677__$1;
(statearr_67697_69183[(2)] = inst_67654);

(statearr_67697_69183[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (29))){
var inst_67628 = (state_67677[(7)]);
var inst_67663 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local err",inst_67628], 0));
var inst_67664 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67677__$1 = (function (){var statearr_67698 = state_67677;
(statearr_67698[(14)] = inst_67663);

return statearr_67698;
})();
var statearr_67699_69184 = state_67677__$1;
(statearr_67699_69184[(2)] = inst_67664);

(statearr_67699_69184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (6))){
var inst_67611 = (state_67677[(10)]);
var inst_67615 = cljs.core.deref(self__._STAR_txid);
var inst_67616 = (inst_67611 <= inst_67615);
var state_67677__$1 = state_67677;
var statearr_67700_69185 = state_67677__$1;
(statearr_67700_69185[(2)] = inst_67616);

(statearr_67700_69185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (28))){
var inst_67669 = (state_67677[(2)]);
var state_67677__$1 = state_67677;
var statearr_67701_69186 = state_67677__$1;
(statearr_67701_69186[(2)] = inst_67669);

(statearr_67701_69186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (25))){
var inst_67671 = (state_67677[(2)]);
var state_67677__$1 = state_67677;
var statearr_67702_69187 = state_67677__$1;
(statearr_67702_69187[(2)] = inst_67671);

(statearr_67702_69187[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (17))){
var inst_67638 = (state_67677[(2)]);
var state_67677__$1 = state_67677;
var statearr_67703_69188 = state_67677__$1;
(statearr_67703_69188[(2)] = inst_67638);

(statearr_67703_69188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (3))){
var inst_67605 = (state_67677[(8)]);
var inst_67609 = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(inst_67605);
var state_67677__$1 = state_67677;
var statearr_67704_69189 = state_67677__$1;
(statearr_67704_69189[(2)] = inst_67609);

(statearr_67704_69189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (12))){
var inst_67632 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_67633 = cljs.core.deref(inst_67632);
var state_67677__$1 = state_67677;
if(cljs.core.truth_(inst_67633)){
var statearr_67705_69190 = state_67677__$1;
(statearr_67705_69190[(1)] = (15));

} else {
var statearr_67706_69191 = state_67677__$1;
(statearr_67706_69191[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (2))){
var state_67677__$1 = state_67677;
var statearr_67707_69192 = state_67677__$1;
(statearr_67707_69192[(2)] = null);

(statearr_67707_69192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (23))){
var inst_67657 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67677__$1 = state_67677;
var statearr_67708_69193 = state_67677__$1;
(statearr_67708_69193[(2)] = inst_67657);

(statearr_67708_69193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (19))){
var inst_67627 = (state_67677[(15)]);
var state_67677__$1 = state_67677;
if(cljs.core.truth_(inst_67627)){
var statearr_67709_69194 = state_67677__$1;
(statearr_67709_69194[(1)] = (23));

} else {
var statearr_67710_69195 = state_67677__$1;
(statearr_67710_69195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (11))){
var inst_67626 = (state_67677[(11)]);
var inst_67625 = (state_67677[(2)]);
var inst_67626__$1 = cljs.core.__destructure_map(inst_67625);
var inst_67627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67626__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_67628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67626__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_67629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67626__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_67630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67626__$1,new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586));
var state_67677__$1 = (function (){var statearr_67711 = state_67677;
(statearr_67711[(16)] = inst_67630);

(statearr_67711[(9)] = inst_67629);

(statearr_67711[(11)] = inst_67626__$1);

(statearr_67711[(7)] = inst_67628);

(statearr_67711[(15)] = inst_67627);

return statearr_67711;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_67712_69196 = state_67677__$1;
(statearr_67712_69196[(1)] = (12));

} else {
var statearr_67713_69197 = state_67677__$1;
(statearr_67713_69197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (9))){
var inst_67623 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(null);
var state_67677__$1 = state_67677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67677__$1,(11),inst_67623);
} else {
if((state_val_67678 === (5))){
var state_67677__$1 = state_67677;
var statearr_67714_69198 = state_67677__$1;
(statearr_67714_69198[(2)] = null);

(statearr_67714_69198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (14))){
var inst_67630 = (state_67677[(16)]);
var inst_67641 = (state_67677[(2)]);
var state_67677__$1 = (function (){var statearr_67715 = state_67677;
(statearr_67715[(17)] = inst_67641);

return statearr_67715;
})();
if(cljs.core.truth_(inst_67630)){
var statearr_67716_69199 = state_67677__$1;
(statearr_67716_69199[(1)] = (18));

} else {
var statearr_67717_69200 = state_67677__$1;
(statearr_67717_69200[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (26))){
var inst_67660 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_67677__$1 = state_67677;
var statearr_67718_69201 = state_67677__$1;
(statearr_67718_69201[(2)] = inst_67660);

(statearr_67718_69201[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (16))){
var inst_67626 = (state_67677[(11)]);
var state_67677__$1 = state_67677;
var statearr_67719_69202 = state_67677__$1;
(statearr_67719_69202[(2)] = inst_67626);

(statearr_67719_69202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (30))){
var state_67677__$1 = state_67677;
var statearr_67720_69203 = state_67677__$1;
(statearr_67720_69203[(2)] = null);

(statearr_67720_69203[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67678 === (10))){
var inst_67675 = (state_67677[(2)]);
var state_67677__$1 = state_67677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67677__$1,inst_67675);
} else {
if((state_val_67678 === (18))){
var inst_67643 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_67644 = [new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000)];
var inst_67645 = [true];
var inst_67646 = cljs.core.PersistentHashMap.fromArrays(inst_67644,inst_67645);
var state_67677__$1 = (function (){var statearr_67721 = state_67677;
(statearr_67721[(18)] = inst_67643);

return statearr_67721;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67677__$1,(21),self__.ops_chan,inst_67646);
} else {
if((state_val_67678 === (8))){
var inst_67620 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67677__$1 = state_67677;
var statearr_67722_69204 = state_67677__$1;
(statearr_67722_69204[(2)] = inst_67620);

(statearr_67722_69204[(1)] = (10));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_67723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67723[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_67723[(1)] = (1));

return statearr_67723;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_67677){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67677);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67724){var ex__41842__auto__ = e67724;
var statearr_67725_69205 = state_67677;
(statearr_67725_69205[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67677[(4)]))){
var statearr_67726_69206 = state_67677;
(statearr_67726_69206[(1)] = cljs.core.first((state_67677[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69207 = state_67677;
state_67677 = G__69207;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_67677){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_67677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67727 = f__41862__auto__();
(statearr_67727[(6)] = c__41861__auto__);

return statearr_67727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.local__GT_remote = (function (p__67728){
var self__ = this;
var map__67729 = p__67728;
var map__67729__$1 = cljs.core.__destructure_map(map__67729);
var local_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67729__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var this$ = this;
if((!((local_change == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_change),"\n","(some? local-change)"].join('')));
}

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67783){
var state_val_67784 = (state_67783[(1)]);
if((state_val_67784 === (7))){
var inst_67737 = (state_67783[(7)]);
var state_67783__$1 = state_67783;
var statearr_67785_69209 = state_67783__$1;
(statearr_67785_69209[(2)] = inst_67737);

(statearr_67785_69209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (1))){
var inst_67731 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67732 = [local_change];
var inst_67733 = (new cljs.core.PersistentVector(null,1,(5),inst_67731,inst_67732,null));
var inst_67734 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_67733);
var state_67783__$1 = state_67783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67783__$1,(2),inst_67734);
} else {
if((state_val_67784 === (4))){
var inst_67737 = (state_67783[(7)]);
var state_67783__$1 = state_67783;
var statearr_67786_69210 = state_67783__$1;
(statearr_67786_69210[(2)] = inst_67737);

(statearr_67786_69210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (15))){
var inst_67761 = (state_67783[(2)]);
var inst_67762 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_67763 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_67764 = [local_change];
var inst_67765 = cljs.core.PersistentHashMap.fromArrays(inst_67763,inst_67764);
var inst_67766 = [inst_67765];
var inst_67767 = cljs.core.PersistentHashMap.fromArrays(inst_67762,inst_67766);
var state_67783__$1 = (function (){var statearr_67787 = state_67783;
(statearr_67787[(8)] = inst_67761);

return statearr_67787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67783__$1,(16),self__.ops_chan,inst_67767);
} else {
if((state_val_67784 === (13))){
var inst_67740 = (state_67783[(9)]);
var state_67783__$1 = state_67783;
if(cljs.core.truth_(inst_67740)){
var statearr_67788_69212 = state_67783__$1;
(statearr_67788_69212[(1)] = (17));

} else {
var statearr_67789_69213 = state_67783__$1;
(statearr_67789_69213[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (6))){
var inst_67737 = (state_67783[(7)]);
var inst_67745 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_67737);
var state_67783__$1 = state_67783;
var statearr_67790_69214 = state_67783__$1;
(statearr_67790_69214[(2)] = inst_67745);

(statearr_67790_69214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (17))){
var inst_67740 = (state_67783[(9)]);
var inst_67773 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local->remote",inst_67740], 0));
var inst_67774 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67783__$1 = (function (){var statearr_67791 = state_67783;
(statearr_67791[(10)] = inst_67773);

return statearr_67791;
})();
var statearr_67792_69215 = state_67783__$1;
(statearr_67792_69215[(2)] = inst_67774);

(statearr_67792_69215[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (3))){
var inst_67742 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_67743 = cljs.core.deref(inst_67742);
var state_67783__$1 = state_67783;
if(cljs.core.truth_(inst_67743)){
var statearr_67793_69217 = state_67783__$1;
(statearr_67793_69217[(1)] = (6));

} else {
var statearr_67794_69218 = state_67783__$1;
(statearr_67794_69218[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (12))){
var inst_67756 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_67757 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_67758 = [true];
var inst_67759 = cljs.core.PersistentHashMap.fromArrays(inst_67757,inst_67758);
var state_67783__$1 = (function (){var statearr_67795 = state_67783;
(statearr_67795[(11)] = inst_67756);

return statearr_67795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67783__$1,(15),self__.ops_chan,inst_67759);
} else {
if((state_val_67784 === (2))){
var inst_67737 = (state_67783[(7)]);
var inst_67736 = (state_67783[(2)]);
var inst_67737__$1 = cljs.core.__destructure_map(inst_67736);
var inst_67738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67737__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_67739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67737__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_67740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67737__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_67783__$1 = (function (){var statearr_67796 = state_67783;
(statearr_67796[(12)] = inst_67739);

(statearr_67796[(7)] = inst_67737__$1);

(statearr_67796[(9)] = inst_67740);

(statearr_67796[(13)] = inst_67738);

return statearr_67796;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_67797_69219 = state_67783__$1;
(statearr_67797_69219[(1)] = (3));

} else {
var statearr_67798_69220 = state_67783__$1;
(statearr_67798_69220[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (19))){
var inst_67777 = (state_67783[(2)]);
var state_67783__$1 = state_67783;
var statearr_67799_69221 = state_67783__$1;
(statearr_67799_69221[(2)] = inst_67777);

(statearr_67799_69221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (11))){
var inst_67781 = (state_67783[(2)]);
var state_67783__$1 = state_67783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67783__$1,inst_67781);
} else {
if((state_val_67784 === (9))){
var inst_67753 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67783__$1 = state_67783;
var statearr_67800_69222 = state_67783__$1;
(statearr_67800_69222[(2)] = inst_67753);

(statearr_67800_69222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (5))){
var inst_67738 = (state_67783[(13)]);
var inst_67751 = (state_67783[(2)]);
var state_67783__$1 = (function (){var statearr_67801 = state_67783;
(statearr_67801[(14)] = inst_67751);

return statearr_67801;
})();
if(cljs.core.truth_(inst_67738)){
var statearr_67802_69223 = state_67783__$1;
(statearr_67802_69223[(1)] = (9));

} else {
var statearr_67803_69224 = state_67783__$1;
(statearr_67803_69224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (14))){
var inst_67779 = (state_67783[(2)]);
var state_67783__$1 = state_67783;
var statearr_67804_69226 = state_67783__$1;
(statearr_67804_69226[(2)] = inst_67779);

(statearr_67804_69226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (16))){
var inst_67769 = (state_67783[(2)]);
var inst_67770 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_67783__$1 = (function (){var statearr_67805 = state_67783;
(statearr_67805[(15)] = inst_67769);

return statearr_67805;
})();
var statearr_67806_69227 = state_67783__$1;
(statearr_67806_69227[(2)] = inst_67770);

(statearr_67806_69227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (10))){
var inst_67739 = (state_67783[(12)]);
var state_67783__$1 = state_67783;
if(cljs.core.truth_(inst_67739)){
var statearr_67807_69228 = state_67783__$1;
(statearr_67807_69228[(1)] = (12));

} else {
var statearr_67808_69229 = state_67783__$1;
(statearr_67808_69229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (18))){
var state_67783__$1 = state_67783;
var statearr_67809_69230 = state_67783__$1;
(statearr_67809_69230[(2)] = null);

(statearr_67809_69230[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67784 === (8))){
var inst_67748 = (state_67783[(2)]);
var state_67783__$1 = state_67783;
var statearr_67810_69231 = state_67783__$1;
(statearr_67810_69231[(2)] = inst_67748);

(statearr_67810_69231[(1)] = (5));


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
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_67811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67811[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_67811[(1)] = (1));

return statearr_67811;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_67783){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67783);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67812){var ex__41842__auto__ = e67812;
var statearr_67813_69234 = state_67783;
(statearr_67813_69234[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67783[(4)]))){
var statearr_67814_69235 = state_67783;
(statearr_67814_69235[(1)] = cljs.core.first((state_67783[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69237 = state_67783;
state_67783 = G__69237;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_67783){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_67783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67815 = f__41862__auto__();
(statearr_67815[(6)] = c__41861__auto__);

return statearr_67815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k66988,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__67816 = k66988;
var G__67816__$1 = (((G__67816 instanceof cljs.core.Keyword))?G__67816.fqn:null);
switch (G__67816__$1) {
case "graph-uuid":
return self__.graph_uuid;

break;
case "base-path":
return self__.base_path;

break;
case "*sync-state":
return self__._STAR_sync_state;

break;
case "local->remote-syncer":
return self__.local__GT_remote_syncer;

break;
case "remote->local-syncer":
return self__.remote__GT_local_syncer;

break;
case "full-sync-chan":
return self__.full_sync_chan;

break;
case "stop-sync-chan":
return self__.stop_sync_chan;

break;
case "remote->local-sync-chan":
return self__.remote__GT_local_sync_chan;

break;
case "local->remote-sync-chan":
return self__.local__GT_remote_sync_chan;

break;
case "local-changes-chan":
return self__.local_changes_chan;

break;
case "ratelimit-local-changes-chan":
return self__.ratelimit_local_changes_chan;

break;
case "*txid":
return self__._STAR_txid;

break;
case "state":
return self__.state;

break;
case "_remote-change-chan":
return self__._remote_change_chan;

break;
case "_*ws":
return self__.__STAR_ws;

break;
case "stopped":
return self__.stopped;

break;
case "ops-chan":
return self__.ops_chan;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66988,else__4505__auto__);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__67817){
var vec__67818 = p__67817;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67818,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67818,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#frontend.fs.sync.SyncManager{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),self__.full_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),self__.stop_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),self__.remote__GT_local_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),self__.local__GT_remote_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),self__.local_changes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),self__.ratelimit_local_changes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),self__._remote_change_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),self__.__STAR_ws],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),self__.ops_chan],null))], null),self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66987){
var self__ = this;
var G__66987__$1 = this;
return (new cljs.core.RecordIter((0),G__66987__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (366090620 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66989,other66990){
var self__ = this;
var this66989__$1 = this;
return (((!((other66990 == null)))) && ((((this66989__$1.constructor === other66990.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.graph_uuid,other66990.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.base_path,other66990.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1._STAR_sync_state,other66990._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.local__GT_remote_syncer,other66990.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.remote__GT_local_syncer,other66990.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.full_sync_chan,other66990.full_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.stop_sync_chan,other66990.stop_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.remote__GT_local_sync_chan,other66990.remote__GT_local_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.local__GT_remote_sync_chan,other66990.local__GT_remote_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.local_changes_chan,other66990.local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.ratelimit_local_changes_chan,other66990.ratelimit_local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1._STAR_txid,other66990._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.state,other66990.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1._remote_change_chan,other66990._remote_change_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.__STAR_ws,other66990.__STAR_ws)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.stopped,other66990.stopped)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.ops_chan,other66990.ops_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66989__$1.__extmap,other66990.__extmap)))))))))))))))))))))))))))))))))))))));
}));

(frontend.fs.sync.SyncManager.prototype.frontend$fs$sync$IStoppable$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.SyncManager.prototype.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.stopped)){
return null;
} else {
(self__.stopped = true);

frontend.fs.sync.ws_stop_BANG_(self__.__STAR_ws);

cljs.core.async.offer_BANG_(self__.stop_sync_chan,true);

cljs.core.async.close_BANG_(self__.ops_chan);

self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1(null);

self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1(null);

frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stop sync-manager, graph-uuid",self__.graph_uuid,"base-path",self__.base_path], null)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_state,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390));
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k66988){
var self__ = this;
var this__4509__auto____$1 = this;
var G__67821 = k66988;
var G__67821__$1 = (((G__67821 instanceof cljs.core.Keyword))?G__67821.fqn:null);
switch (G__67821__$1) {
case "graph-uuid":
case "base-path":
case "*sync-state":
case "local->remote-syncer":
case "remote->local-syncer":
case "full-sync-chan":
case "stop-sync-chan":
case "remote->local-sync-chan":
case "local->remote-sync-chan":
case "local-changes-chan":
case "ratelimit-local-changes-chan":
case "*txid":
case "state":
case "_remote-change-chan":
case "_*ws":
case "stopped":
case "ops-chan":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66988);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__66987){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__67822 = cljs.core.keyword_identical_QMARK_;
var expr__67823 = k__4511__auto__;
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__67823)))){
return (new frontend.fs.sync.SyncManager(G__66987,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,G__66987,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,G__66987,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,G__66987,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__66987,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,G__66987,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,G__66987,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,G__66987,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,G__66987,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,G__66987,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,G__66987,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,G__66987,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,G__66987,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,G__66987,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,G__66987,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,G__66987,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67822.cljs$core$IFn$_invoke$arity$2 ? pred__67822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__67823) : pred__67822.call(null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__67823)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,G__66987,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__66987),null));
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
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),self__.full_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),self__.stop_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),self__.remote__GT_local_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),self__.local__GT_remote_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),self__.local_changes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),self__.ratelimit_local_changes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),self__._remote_change_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),self__.__STAR_ws,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),self__.ops_chan,null))], null),self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__66987){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,G__66987,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(frontend.fs.sync.SyncManager.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"local->remote-syncer","local->remote-syncer",195649351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Local->RemoteSyncer","Local->RemoteSyncer",-1763578057,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"remote->local-syncer","remote->local-syncer",576154816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Remote->LocalSyncer","Remote->LocalSyncer",2008798237,null)], null)),new cljs.core.Symbol(null,"full-sync-chan","full-sync-chan",1008379583,null),new cljs.core.Symbol(null,"stop-sync-chan","stop-sync-chan",208244183,null),new cljs.core.Symbol(null,"remote->local-sync-chan","remote->local-sync-chan",190695604,null),new cljs.core.Symbol(null,"local->remote-sync-chan","local->remote-sync-chan",-198836339,null),new cljs.core.Symbol(null,"local-changes-chan","local-changes-chan",-276483993,null),cljs.core.with_meta(new cljs.core.Symbol(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-155010768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_remote-change-chan","_remote-change-chan",1313532448,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_*ws","_*ws",829664121,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"stopped","stopped",150116887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ops-chan","ops-chan",-782726182,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.SyncManager.cljs$lang$type = true);

(frontend.fs.sync.SyncManager.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/SyncManager",null,(1),null));
}));

(frontend.fs.sync.SyncManager.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"frontend.fs.sync/SyncManager");
}));

/**
 * Positional factory function for frontend.fs.sync/SyncManager.
 */
frontend.fs.sync.__GT_SyncManager = (function frontend$fs$sync$__GT_SyncManager(graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,ratelimit_local_changes_chan,_STAR_txid,state,_remote_change_chan,__STAR_ws,stopped,ops_chan){
return (new frontend.fs.sync.SyncManager(graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,ratelimit_local_changes_chan,_STAR_txid,state,_remote_change_chan,__STAR_ws,stopped,ops_chan,null,null,null));
});

/**
 * Factory function for frontend.fs.sync/SyncManager, taking a map of keywords to field values.
 */
frontend.fs.sync.map__GT_SyncManager = (function frontend$fs$sync$map__GT_SyncManager(G__66994){
var extmap__4542__auto__ = (function (){var G__67825 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66994,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], 0));
if(cljs.core.record_QMARK_(G__66994)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67825);
} else {
return G__67825;
}
})();
return (new frontend.fs.sync.SyncManager(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__66994),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587).cljs$core$IFn$_invoke$arity$1(G__66994),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

frontend.fs.sync.sync_manager = (function frontend$fs$sync$sync_manager(user_uuid,graph_uuid,base_path,repo,txid,_STAR_sync_state,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan){
var _STAR_txid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(txid);
var local__GT_remote_syncer = frontend.fs.sync.__GT_Local__GT_RemoteSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,(20000),_STAR_txid,null,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),false);
var remote__GT_local_syncer = frontend.fs.sync.__GT_Remote__GT_LocalSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,null,cljs.core.volatile_BANG_(false));
local__GT_remote_syncer.set_remote__GT_local_syncer_BANG_(remote__GT_local_syncer);

remote__GT_local_syncer.set_local__GT_remote_syncer_BANG_(local__GT_remote_syncer);

return frontend.fs.sync.__GT_SyncManager(graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,null,_STAR_txid,null,null,null,false,null);
});
frontend.fs.sync.full_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
frontend.fs.sync.stop_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
frontend.fs.sync.remote__GT_local_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
frontend.fs.sync.local__GT_remote_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
frontend.fs.sync.sync_stop = (function frontend$fs$sync$sync_stop(){
var temp__5720__auto__ = frontend.state.get_file_sync_manager();
if(cljs.core.truth_(temp__5720__auto__)){
var sm = temp__5720__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stopping sync-manager"], 0));

return frontend.fs.sync._stop_BANG_(sm);
} else {
return null;
}
});
frontend.fs.sync.check_graph_belong_to_current_user = (function frontend$fs$sync$check_graph_belong_to_current_user(current_user_uuid,graph_user_uuid){
var result = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_uuid,graph_user_uuid);
if(result){
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","other-user-graph","file-sync/other-user-graph",1618368742)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
}

return result;
});
frontend.fs.sync.check_remote_graph_exists = (function frontend$fs$sync$check_remote_graph_exists(local_graph_uuid){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67842){
var state_val_67843 = (state_67842[(1)]);
if((state_val_67843 === (1))){
var inst_67827 = (function (){return (function (p1__67826_SHARP_){
return cljs.core.contains_QMARK_(p1__67826_SHARP_,local_graph_uuid);
});
})();
var inst_67828 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_67842__$1 = (function (){var statearr_67844 = state_67842;
(statearr_67844[(7)] = inst_67827);

return statearr_67844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67842__$1,(2),inst_67828);
} else {
if((state_val_67843 === (2))){
var inst_67827 = (state_67842[(7)]);
var inst_67834 = (state_67842[(8)]);
var inst_67830 = (state_67842[(2)]);
var inst_67831 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_67830);
var inst_67832 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),inst_67831);
var inst_67833 = cljs.core.set(inst_67832);
var inst_67834__$1 = (inst_67827.cljs$core$IFn$_invoke$arity$1 ? inst_67827.cljs$core$IFn$_invoke$arity$1(inst_67833) : inst_67827.call(null,inst_67833));
var state_67842__$1 = (function (){var statearr_67845 = state_67842;
(statearr_67845[(8)] = inst_67834__$1);

return statearr_67845;
})();
if(cljs.core.truth_(inst_67834__$1)){
var statearr_67846_69258 = state_67842__$1;
(statearr_67846_69258[(1)] = (3));

} else {
var statearr_67847_69259 = state_67842__$1;
(statearr_67847_69259[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67843 === (3))){
var state_67842__$1 = state_67842;
var statearr_67848_69260 = state_67842__$1;
(statearr_67848_69260[(2)] = null);

(statearr_67848_69260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67843 === (4))){
var inst_67837 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","graph-deleted","file-sync/graph-deleted",110500245)], 0));
var inst_67838 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_67837,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
var state_67842__$1 = state_67842;
var statearr_67849_69261 = state_67842__$1;
(statearr_67849_69261[(2)] = inst_67838);

(statearr_67849_69261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67843 === (5))){
var inst_67834 = (state_67842[(8)]);
var inst_67840 = (state_67842[(2)]);
var state_67842__$1 = (function (){var statearr_67850 = state_67842;
(statearr_67850[(9)] = inst_67840);

return statearr_67850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67842__$1,inst_67834);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____0 = (function (){
var statearr_67851 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67851[(0)] = frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__);

(statearr_67851[(1)] = (1));

return statearr_67851;
});
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____1 = (function (state_67842){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67842);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67852){var ex__41842__auto__ = e67852;
var statearr_67853_69262 = state_67842;
(statearr_67853_69262[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67842[(4)]))){
var statearr_67854_69263 = state_67842;
(statearr_67854_69263[(1)] = cljs.core.first((state_67842[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69264 = state_67842;
state_67842 = G__69264;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__ = function(state_67842){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____1.call(this,state_67842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____0;
frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____1;
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67855 = f__41862__auto__();
(statearr_67855[(6)] = c__41861__auto__);

return statearr_67855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.sync_start = (function frontend$fs$sync$sync_start(){
var vec__67856 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67856,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67856,(1),null);
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67856,(2),null);
var _STAR_sync_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.sync_state());
var current_user_uuid = frontend.handler.user.user_uuid();
var repo = frontend.state.get_current_repo();
var sm = frontend.fs.sync.sync_manager(current_user_uuid,graph_uuid,frontend.config.get_repo_dir(repo),repo,txid,_STAR_sync_state,frontend.fs.sync.full_sync_chan,frontend.fs.sync.stop_sync_chan,frontend.fs.sync.remote__GT_local_sync_chan,frontend.fs.sync.local__GT_remote_sync_chan,frontend.fs.sync.local_changes_chan);
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_67904){
var state_val_67905 = (state_67904[(1)]);
if((state_val_67905 === (7))){
var inst_67900 = (state_67904[(2)]);
var state_67904__$1 = state_67904;
var statearr_67906_69266 = state_67904__$1;
(statearr_67906_69266[(2)] = inst_67900);

(statearr_67906_69266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (1))){
var inst_67859 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_67860 = cljs.core.count(inst_67859);
var inst_67861 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((3),inst_67860);
var state_67904__$1 = state_67904;
if(inst_67861){
var statearr_67907_69267 = state_67904__$1;
(statearr_67907_69267[(1)] = (2));

} else {
var statearr_67908_69268 = state_67904__$1;
(statearr_67908_69268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (4))){
var inst_67902 = (state_67904[(2)]);
var state_67904__$1 = state_67904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67904__$1,inst_67902);
} else {
if((state_val_67905 === (6))){
var state_67904__$1 = state_67904;
var statearr_67909_69269 = state_67904__$1;
(statearr_67909_69269[(2)] = null);

(statearr_67909_69269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (3))){
var inst_67866 = frontend.fs.sync.check_graph_belong_to_current_user(current_user_uuid,user_uuid);
var state_67904__$1 = state_67904;
if(inst_67866){
var statearr_67910_69270 = state_67904__$1;
(statearr_67910_69270[(1)] = (5));

} else {
var statearr_67911_69271 = state_67904__$1;
(statearr_67911_69271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (12))){
var inst_67881 = (state_67904[(2)]);
var inst_67882 = frontend.fs.sync.drain_chan(frontend.fs.sync.local_changes_chan);
var inst_67883 = cljs.core.async.poll_BANG_(frontend.fs.sync.stop_sync_chan);
var inst_67884 = cljs.core.async.poll_BANG_(frontend.fs.sync.remote__GT_local_sync_chan);
var inst_67885 = (function (){return (function (_,___$1,___$2,n){
return frontend.state.set_file_sync_state(n);
});
})();
var inst_67886 = cljs.core.add_watch(_STAR_sync_state,new cljs.core.Keyword("frontend.fs.sync","update-global-state","frontend.fs.sync/update-global-state",-739606169),inst_67885);
var inst_67887 = sm.start();
var inst_67888 = cljs.core.async.offer_BANG_(frontend.fs.sync.remote__GT_local_sync_chan,true);
var inst_67889 = cljs.core.async.offer_BANG_(frontend.fs.sync.full_sync_chan,true);
var inst_67890 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("network","online?","network/online?",1306822774));
var inst_67891 = (function (){return (function (_k,_r,_o,n){
if(n === false){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_67892 = cljs.core.add_watch(inst_67890,"sync-manage",inst_67891);
var inst_67893 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var inst_67894 = (function (){return (function (_k,_r,_o,n){
if((n == null)){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_67895 = cljs.core.add_watch(inst_67893,"sync-manage",inst_67894);
var state_67904__$1 = (function (){var statearr_67912 = state_67904;
(statearr_67912[(7)] = inst_67892);

(statearr_67912[(8)] = inst_67889);

(statearr_67912[(9)] = inst_67882);

(statearr_67912[(10)] = inst_67883);

(statearr_67912[(11)] = inst_67881);

(statearr_67912[(12)] = inst_67886);

(statearr_67912[(13)] = inst_67887);

(statearr_67912[(14)] = inst_67888);

(statearr_67912[(15)] = inst_67884);

return statearr_67912;
})();
var statearr_67913_69273 = state_67904__$1;
(statearr_67913_69273[(2)] = inst_67895);

(statearr_67913_69273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (2))){
var inst_67863 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var inst_67864 = frontend.state.set_file_sync_state(null);
var state_67904__$1 = (function (){var statearr_67914 = state_67904;
(statearr_67914[(16)] = inst_67863);

return statearr_67914;
})();
var statearr_67915_69274 = state_67904__$1;
(statearr_67915_69274[(2)] = inst_67864);

(statearr_67915_69274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (11))){
var inst_67897 = (state_67904[(2)]);
var state_67904__$1 = state_67904;
var statearr_67916_69275 = state_67904__$1;
(statearr_67916_69275[(2)] = inst_67897);

(statearr_67916_69275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (9))){
var inst_67873 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var state_67904__$1 = state_67904;
var statearr_67917_69276 = state_67904__$1;
(statearr_67917_69276[(2)] = inst_67873);

(statearr_67917_69276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67905 === (5))){
var inst_67868 = frontend.fs.sync.check_remote_graph_exists(graph_uuid);
var state_67904__$1 = state_67904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67904__$1,(8),inst_67868);
} else {
if((state_val_67905 === (10))){
var inst_67875 = frontend.fs.sync.set_env(frontend.fs.sync.rsapi,frontend.config.FILE_SYNC_PROD_QMARK_);
var inst_67876 = cljs.core.deref(_STAR_sync_state);
var inst_67877 = frontend.state.set_file_sync_state(inst_67876);
var inst_67878 = frontend.state.set_file_sync_manager(sm);
var inst_67879 = cljs.core.async.timeout((5000));
var state_67904__$1 = (function (){var statearr_67918 = state_67904;
(statearr_67918[(17)] = inst_67878);

(statearr_67918[(18)] = inst_67877);

(statearr_67918[(19)] = inst_67875);

return statearr_67918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67904__$1,(12),inst_67879);
} else {
if((state_val_67905 === (8))){
var inst_67870 = (state_67904[(2)]);
var inst_67871 = cljs.core.not(inst_67870);
var state_67904__$1 = state_67904;
if(inst_67871){
var statearr_67919_69277 = state_67904__$1;
(statearr_67919_69277[(1)] = (9));

} else {
var statearr_67920_69278 = state_67904__$1;
(statearr_67920_69278[(1)] = (10));

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
});
return (function() {
var frontend$fs$sync$sync_start_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$sync_start_$_state_machine__41839__auto____0 = (function (){
var statearr_67921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67921[(0)] = frontend$fs$sync$sync_start_$_state_machine__41839__auto__);

(statearr_67921[(1)] = (1));

return statearr_67921;
});
var frontend$fs$sync$sync_start_$_state_machine__41839__auto____1 = (function (state_67904){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_67904);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e67922){var ex__41842__auto__ = e67922;
var statearr_67923_69279 = state_67904;
(statearr_67923_69279[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_67904[(4)]))){
var statearr_67924_69280 = state_67904;
(statearr_67924_69280[(1)] = cljs.core.first((state_67904[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69281 = state_67904;
state_67904 = G__69281;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$sync_start_$_state_machine__41839__auto__ = function(state_67904){
switch(arguments.length){
case 0:
return frontend$fs$sync$sync_start_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$sync_start_$_state_machine__41839__auto____1.call(this,state_67904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$sync_start_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$sync_start_$_state_machine__41839__auto____0;
frontend$fs$sync$sync_start_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$sync_start_$_state_machine__41839__auto____1;
return frontend$fs$sync$sync_start_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_67925 = f__41862__auto__();
(statearr_67925[(6)] = c__41861__auto__);

return statearr_67925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

//# sourceMappingURL=frontend.fs.sync.js.map
