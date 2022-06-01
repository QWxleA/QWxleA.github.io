goog.provide('frontend.fs.sync');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),"null",new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),"null",new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null,new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),null,new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),null,new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null,new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),null,new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026),new cljs.core.Symbol("cljs-time.core","date?","cljs-time.core/date?",1865755164,null),cljs_time.core.date_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51811){
return cljs.core.set_QMARK_(G__51811);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51812){
return cljs.core.set_QMARK_(G__51812);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51813){
return cljs.core.map_QMARK_(G__51813);
}),(function (G__51813){
return cljs.core.contains_QMARK_(G__51813,new cljs.core.Keyword(null,"path","path",-188191168));
}),(function (G__51813){
return cljs.core.contains_QMARK_(G__51813,new cljs.core.Keyword(null,"time","time",1385887882));
})], null),(function (G__51813){
return ((cljs.core.map_QMARK_(G__51813)) && (((cljs.core.contains_QMARK_(G__51813,new cljs.core.Keyword(null,"path","path",-188191168))) && (cljs.core.contains_QMARK_(G__51813,new cljs.core.Keyword(null,"time","time",1385887882))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"time","time",1385887882)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51818){
return cljs.core.seq_QMARK_(G__51818);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.seq_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51819){
return cljs.core.map_QMARK_(G__51819);
}),(function (G__51819){
return cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__51819){
return cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256));
}),(function (G__51819){
return cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085));
}),(function (G__51819){
return cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812));
}),(function (G__51819){
return cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"history","history",-247395220));
})], null),(function (G__51819){
return ((cljs.core.map_QMARK_(G__51819)) && (((cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"state","state",-1988618099))) && (((cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))) && (((cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))) && (((cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))) && (cljs.core.contains_QMARK_(G__51819,new cljs.core.Keyword(null,"history","history",-247395220))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"history","history",-247395220)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file","null","delete_files","null","update_files","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file",null,"delete_files",null,"update_files",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51829){
return cljs.core.map_QMARK_(G__51829);
}),(function (G__51829){
return cljs.core.contains_QMARK_(G__51829,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
}),(function (G__51829){
return cljs.core.contains_QMARK_(G__51829,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
}),(function (G__51829){
return cljs.core.contains_QMARK_(G__51829,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
})], null),(function (G__51829){
return ((cljs.core.map_QMARK_(G__51829)) && (((cljs.core.contains_QMARK_(G__51829,new cljs.core.Keyword(null,"TXId","TXId",-902804781))) && (((cljs.core.contains_QMARK_(G__51829,new cljs.core.Keyword(null,"TXType","TXType",-476865365))) && (cljs.core.contains_QMARK_(G__51829,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),new cljs.core.Keyword(null,"TXType","TXType",-476865365),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXId","TXId",-902804781))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXType","TXType",-476865365))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51846_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),p1__51846_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Keyword(null,"unknown","unknown",-935977881)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51851_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),p1__51851_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51855_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),p1__51855_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__51862#","p1__51862#",1257622530,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"p1__51862#","p1__51862#",1257622530,null))),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),(function (p1__51862_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),p1__51862_SHARP_);
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51915){
var state_val_51916 = (state_51915[(1)]);
if((state_val_51916 === (7))){
var inst_51895 = cljs.core.async.timeout((1000));
var state_51915__$1 = state_51915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51915__$1,(10),inst_51895);
} else {
if((state_val_51916 === (1))){
var state_51915__$1 = state_51915;
var statearr_51917_56034 = state_51915__$1;
(statearr_51917_56034[(2)] = null);

(statearr_51917_56034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (4))){
var inst_51880 = (state_51915[(7)]);
var inst_51893 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_51880);
var state_51915__$1 = state_51915;
if(inst_51893){
var statearr_51918_56035 = state_51915__$1;
(statearr_51918_56035[(1)] = (7));

} else {
var statearr_51919_56036 = state_51915__$1;
(statearr_51919_56036[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (6))){
var inst_51910 = (state_51915[(2)]);
var state_51915__$1 = state_51915;
var statearr_51920_56037 = state_51915__$1;
(statearr_51920_56037[(2)] = inst_51910);

(statearr_51920_56037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (3))){
var inst_51912 = (state_51915[(2)]);
var state_51915__$1 = state_51915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51915__$1,inst_51912);
} else {
if((state_val_51916 === (2))){
var inst_51880 = (state_51915[(7)]);
var inst_51880__$1 = ws.readyState;
var inst_51887 = [(3),null,(2),null];
var inst_51888 = (new cljs.core.PersistentArrayMap(null,2,inst_51887,null));
var inst_51889 = (new cljs.core.PersistentHashSet(null,inst_51888,null));
var inst_51890 = cljs.core.contains_QMARK_(inst_51889,inst_51880__$1);
var inst_51891 = (!(inst_51890));
var state_51915__$1 = (function (){var statearr_51921 = state_51915;
(statearr_51921[(7)] = inst_51880__$1);

return statearr_51921;
})();
if(inst_51891){
var statearr_51922_56038 = state_51915__$1;
(statearr_51922_56038[(1)] = (4));

} else {
var statearr_51923_56039 = state_51915__$1;
(statearr_51923_56039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (11))){
var inst_51904 = (state_51915[(2)]);
var state_51915__$1 = (function (){var statearr_51924 = state_51915;
(statearr_51924[(8)] = inst_51904);

return statearr_51924;
})();
var statearr_51926_56040 = state_51915__$1;
(statearr_51926_56040[(2)] = null);

(statearr_51926_56040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (9))){
var inst_51907 = (state_51915[(2)]);
var state_51915__$1 = state_51915;
var statearr_51927_56041 = state_51915__$1;
(statearr_51927_56041[(2)] = inst_51907);

(statearr_51927_56041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (5))){
var state_51915__$1 = state_51915;
var statearr_51928_56042 = state_51915__$1;
(statearr_51928_56042[(2)] = null);

(statearr_51928_56042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (10))){
var inst_51897 = (state_51915[(2)]);
var state_51915__$1 = (function (){var statearr_51930 = state_51915;
(statearr_51930[(9)] = inst_51897);

return statearr_51930;
})();
var statearr_51931_56043 = state_51915__$1;
(statearr_51931_56043[(2)] = null);

(statearr_51931_56043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51916 === (8))){
var inst_51900 = ws.send("PING");
var inst_51902 = cljs.core.async.timeout((30000));
var state_51915__$1 = (function (){var statearr_51932 = state_51915;
(statearr_51932[(10)] = inst_51900);

return statearr_51932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51915__$1,(11),inst_51902);
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
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0 = (function (){
var statearr_51936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51936[(0)] = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__);

(statearr_51936[(1)] = (1));

return statearr_51936;
});
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1 = (function (state_51915){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51915);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51937){var ex__27576__auto__ = e51937;
var statearr_51938_56044 = state_51915;
(statearr_51938_56044[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51915[(4)]))){
var statearr_51939_56045 = state_51915;
(statearr_51939_56045[(1)] = cljs.core.first((state_51915[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56046 = state_51915;
state_51915 = G__56046;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__ = function(state_51915){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1.call(this,state_51915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0;
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51940 = f__27596__auto__();
(statearr_51940[(6)] = c__27595__auto__);

return statearr_51940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51950){
var state_val_51951 = (state_51950[(1)]);
if((state_val_51951 === (1))){
var inst_51946 = cljs.core.async.timeout((1000));
var inst_51947 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-connecting graph",graph_uuid], 0));
var inst_51948 = (frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(graph_uuid,_STAR_ws,remote_changes_chan) : frontend.fs.sync.ws_listen_BANG__STAR_.call(null,graph_uuid,_STAR_ws,remote_changes_chan));
var state_51950__$1 = (function (){var statearr_51955 = state_51950;
(statearr_51955[(7)] = inst_51946);

(statearr_51955[(8)] = inst_51947);

return statearr_51955;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51950__$1,inst_51948);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0 = (function (){
var statearr_51958 = [null,null,null,null,null,null,null,null,null];
(statearr_51958[(0)] = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__);

(statearr_51958[(1)] = (1));

return statearr_51958;
});
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1 = (function (state_51950){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51950);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51959){var ex__27576__auto__ = e51959;
var statearr_51961_56047 = state_51950;
(statearr_51961_56047[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51950[(4)]))){
var statearr_51962_56048 = state_51950;
(statearr_51962_56048[(1)] = cljs.core.first((state_51950[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56049 = state_51950;
state_51950 = G__56049;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = function(state_51950){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1.call(this,state_51950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0;
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51964 = f__27596__auto__();
(statearr_51964[(6)] = c__27595__auto__);

return statearr_51964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
 * return channel which output messages from server
 */
frontend.fs.sync.ws_listen_BANG_ = (function frontend$fs$sync$ws_listen_BANG_(graph_uuid,_STAR_ws){
var remote_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
frontend.fs.sync.ws_listen_BANG__STAR_(graph_uuid,_STAR_ws,remote_changes_chan);

return remote_changes_chan;
});
frontend.fs.sync.get_json_body = (function frontend$fs$sync$get_json_body(body){
var or__5043__auto__ = (function (){var and__5041__auto__ = (!(typeof body === 'string'));
if(and__5041__auto__){
return body;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var or__5043__auto____$1 = clojure.string.blank_QMARK_(body);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
}
});
frontend.fs.sync.get_resp_json_body = (function frontend$fs$sync$get_resp_json_body(resp){
return frontend.fs.sync.get_json_body(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp));
});
frontend.fs.sync.request_once = (function frontend$fs$sync$request_once(api_name,body,token){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51995){
var state_val_51996 = (state_51995[(1)]);
if((state_val_51996 === (1))){
var inst_51978 = ["https://",frontend.config.API_DOMAIN,"/file-sync/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_name)].join('');
var inst_51979 = [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51980 = cljs.core.clj__GT_js(body);
var inst_51981 = JSON.stringify(inst_51980);
var inst_51982 = [token,inst_51981,false];
var inst_51983 = cljs.core.PersistentHashMap.fromArrays(inst_51979,inst_51982);
var inst_51984 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_51978,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51983], 0));
var inst_51986 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"body","body",-2049205669)];
var state_51995__$1 = (function (){var statearr_52000 = state_51995;
(statearr_52000[(7)] = inst_51986);

return statearr_52000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51995__$1,(2),inst_51984);
} else {
if((state_val_51996 === (2))){
var inst_51986 = (state_51995[(7)]);
var inst_51989 = (state_51995[(2)]);
var inst_51991 = [inst_51989,api_name,body];
var inst_51992 = cljs.core.PersistentHashMap.fromArrays(inst_51986,inst_51991);
var state_51995__$1 = state_51995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51995__$1,inst_51992);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$request_once_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$request_once_$_state_machine__27573__auto____0 = (function (){
var statearr_52002 = [null,null,null,null,null,null,null,null];
(statearr_52002[(0)] = frontend$fs$sync$request_once_$_state_machine__27573__auto__);

(statearr_52002[(1)] = (1));

return statearr_52002;
});
var frontend$fs$sync$request_once_$_state_machine__27573__auto____1 = (function (state_51995){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51995);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52004){var ex__27576__auto__ = e52004;
var statearr_52005_56050 = state_51995;
(statearr_52005_56050[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51995[(4)]))){
var statearr_52006_56051 = state_51995;
(statearr_52006_56051[(1)] = cljs.core.first((state_51995[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56052 = state_51995;
state_51995 = G__56052;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$request_once_$_state_machine__27573__auto__ = function(state_51995){
switch(arguments.length){
case 0:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____1.call(this,state_51995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$request_once_$_state_machine__27573__auto____0;
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$request_once_$_state_machine__27573__auto____1;
return frontend$fs$sync$request_once_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52007 = f__27596__auto__();
(statearr_52007[(6)] = c__27595__auto__);

return statearr_52007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.request = (function frontend$fs$sync$request(var_args){
var G__52010 = arguments.length;
switch (G__52010) {
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52052){
var state_val_52053 = (state_52052[(1)]);
if((state_val_52053 === (7))){
var inst_52013 = (state_52052[(7)]);
var inst_52048 = new cljs.core.Keyword(null,"resp","resp",1418702376).cljs$core$IFn$_invoke$arity$1(inst_52013);
var state_52052__$1 = state_52052;
var statearr_52055_56054 = state_52052__$1;
(statearr_52055_56054[(2)] = inst_52048);

(statearr_52055_56054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (1))){
var inst_52011 = frontend.fs.sync.request_once(api_name,body,token);
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52052__$1,(2),inst_52011);
} else {
if((state_val_52053 === (4))){
var inst_52018 = (state_52052[(8)]);
var state_52052__$1 = state_52052;
var statearr_52056_56055 = state_52052__$1;
(statearr_52056_56055[(2)] = inst_52018);

(statearr_52056_56055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (6))){
var inst_52032 = ((1000) * retry_count);
var inst_52033 = (((60000) < inst_52032) ? (60000) : inst_52032);
var inst_52034 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will retry after",inst_52033,"ms"], 0));
var inst_52035 = ((1000) * retry_count);
var inst_52036 = (((60000) < inst_52035) ? (60000) : inst_52035);
var inst_52037 = cljs.core.async.timeout(inst_52036);
var state_52052__$1 = (function (){var statearr_52058 = state_52052;
(statearr_52058[(9)] = inst_52034);

return statearr_52058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52052__$1,(9),inst_52037);
} else {
if((state_val_52053 === (3))){
var inst_52013 = (state_52052[(7)]);
var inst_52020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52021 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_52022 = (new cljs.core.PersistentVector(null,2,(5),inst_52020,inst_52021,null));
var inst_52023 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_52013,inst_52022);
var inst_52024 = frontend.fs.sync.get_json_body(inst_52023);
var inst_52025 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_52024);
var inst_52026 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Unauthorized",inst_52025);
var state_52052__$1 = state_52052;
var statearr_52059_56056 = state_52052__$1;
(statearr_52059_56056[(2)] = inst_52026);

(statearr_52059_56056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (2))){
var inst_52013 = (state_52052[(7)]);
var inst_52018 = (state_52052[(8)]);
var inst_52013__$1 = (state_52052[(2)]);
var inst_52014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52015 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_52016 = (new cljs.core.PersistentVector(null,2,(5),inst_52014,inst_52015,null));
var inst_52017 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_52013__$1,inst_52016);
var inst_52018__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_52017);
var state_52052__$1 = (function (){var statearr_52061 = state_52052;
(statearr_52061[(7)] = inst_52013__$1);

(statearr_52061[(8)] = inst_52018__$1);

return statearr_52061;
})();
if(inst_52018__$1){
var statearr_52062_56057 = state_52052__$1;
(statearr_52062_56057[(1)] = (3));

} else {
var statearr_52063_56058 = state_52052__$1;
(statearr_52063_56058[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (11))){
var inst_52046 = (state_52052[(2)]);
var state_52052__$1 = state_52052;
var statearr_52064_56059 = state_52052__$1;
(statearr_52064_56059[(2)] = inst_52046);

(statearr_52064_56059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (9))){
var inst_52039 = (state_52052[(2)]);
var inst_52040 = (refresh_token_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_token_fn.cljs$core$IFn$_invoke$arity$0() : refresh_token_fn.call(null));
var state_52052__$1 = (function (){var statearr_52065 = state_52052;
(statearr_52065[(10)] = inst_52039);

return statearr_52065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52052__$1,(10),inst_52040);
} else {
if((state_val_52053 === (5))){
var inst_52029 = (state_52052[(2)]);
var state_52052__$1 = state_52052;
if(cljs.core.truth_(inst_52029)){
var statearr_52066_56060 = state_52052__$1;
(statearr_52066_56060[(1)] = (6));

} else {
var statearr_52067_56061 = state_52052__$1;
(statearr_52067_56061[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (10))){
var inst_52042 = (state_52052[(2)]);
var inst_52043 = (retry_count + (1));
var inst_52044 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,inst_52042,refresh_token_fn,inst_52043);
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52052__$1,(11),inst_52044);
} else {
if((state_val_52053 === (8))){
var inst_52050 = (state_52052[(2)]);
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52052__$1,inst_52050);
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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52069[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52069[(1)] = (1));

return statearr_52069;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52052){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52052);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52070){var ex__27576__auto__ = e52070;
var statearr_52072_56062 = state_52052;
(statearr_52072_56062[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52052[(4)]))){
var statearr_52073_56063 = state_52052;
(statearr_52073_56063[(1)] = cljs.core.first((state_52052[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56064 = state_52052;
state_52052 = G__56064;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52052){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52075 = f__27596__auto__();
(statearr_52075[(6)] = c__27595__auto__);

return statearr_52075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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

var frontend$fs$sync$IRelativePath$_relative_path$dyn_56065 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync._relative_path[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync._relative_path["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRelativePath.-relative-path",this$);
}
}
});
frontend.fs.sync._relative_path = (function frontend$fs$sync$_relative_path(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRelativePath$_relative_path$arity$1 == null)))))){
return this$.frontend$fs$sync$IRelativePath$_relative_path$arity$1(this$);
} else {
return frontend$fs$sync$IRelativePath$_relative_path$dyn_56065(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStoppable = function(){};

var frontend$fs$sync$IStoppable$_stop_BANG_$dyn_56066 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync._stop_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync._stop_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStoppable.-stop!",this$);
}
}
});
frontend.fs.sync._stop_BANG_ = (function frontend$fs$sync$_stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IStoppable$_stop_BANG_$dyn_56066(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStopped_QMARK_ = function(){};

var frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_56069 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync._stopped_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync._stopped_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopped?.-stopped?",this$);
}
}
});
frontend.fs.sync._stopped_QMARK_ = (function frontend$fs$sync$_stopped_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$arity$1 == null)))))){
return this$.frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$arity$1(this$);
} else {
return frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_56069(this$);
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

(frontend.fs.sync.FileTxn.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/FileTxn");
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
frontend.fs.sync.diff__GT_filetxns = (function frontend$fs$sync$diff__GT_filetxns(p__52094){
var map__52095 = p__52094;
var map__52095__$1 = cljs.core.__destructure_map(map__52095);
var TXId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
var TXType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
var TXContent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_files",TXType);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("delete_files",TXType);
var update_or_del_type_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__52093_SHARP_){
return frontend.fs.sync.__GT_FileTxn(p1__52093_SHARP_,p1__52093_SHARP_,update_QMARK_,delete_QMARK_,TXId);
})));
var filepaths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,clojure.string.split_lines(TXContent));
var G__52096 = TXType;
switch (G__52096) {
case "update_files":
case "delete_files":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(update_or_del_type_xf,filepaths);

break;
case "rename_file":
return (new cljs.core.List(null,frontend.fs.sync.__GT_FileTxn(cljs.core.first(filepaths),cljs.core.second(filepaths),false,false,TXId),null,(1),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52096)].join('')));

}
});
/**
 * transducer.
 *   remove duplicate update&delete `FileTxn`s.
 */
frontend.fs.sync.distinct_update_filetxns_xf = (function frontend$fs$sync$distinct_update_filetxns_xf(rf){
var seen_update_AMPERSAND_delete_filetxns = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__56077 = null;
var G__56077__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__56077__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__56077__2 = (function (result,filetxn){
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = filetxn.updated_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return filetxn.deleted_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(seen_update_AMPERSAND_delete_filetxns),filetxn);
} else {
return and__5041__auto__;
}
})())){
return result;
} else {
seen_update_AMPERSAND_delete_filetxns.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_update_AMPERSAND_delete_filetxns.cljs$core$IDeref$_deref$arity$1(null),filetxn));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,filetxn) : rf.call(null,result,filetxn));
}
});
G__56077 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__56077__0.call(this);
case 1:
return G__56077__1.call(this,result);
case 2:
return G__56077__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56077.cljs$core$IFn$_invoke$arity$0 = G__56077__0;
G__56077.cljs$core$IFn$_invoke$arity$1 = G__56077__1;
G__56077.cljs$core$IFn$_invoke$arity$2 = G__56077__2;
return G__56077;
})()
});
/**
 * transducer.
 *   remove update&rename filetxns if they are deleted later(in greater txid filetxn).
 */
frontend.fs.sync.remove_deleted_filetxns_xf = (function frontend$fs$sync$remove_deleted_filetxns_xf(rf){
var seen_deleted_paths = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__56078 = null;
var G__56078__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__56078__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__56078__2 = (function (result,filetxn){
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
G__56078 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__56078__0.call(this);
case 1:
return G__56078__1.call(this,result);
case 2:
return G__56078__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56078.cljs$core$IFn$_invoke$arity$0 = G__56078__0;
G__56078.cljs$core$IFn$_invoke$arity$1 = G__56078__1;
G__56078.cljs$core$IFn$_invoke$arity$2 = G__56078__2;
return G__56078;
})()
});
/**
 * return transducer.
 *   partition filetxns, at most N update-filetxns in each partition,
 *   for delete and rename type, only one filetxn in each partition.
 */
frontend.fs.sync.partition_filetxns = (function frontend$fs$sync$partition_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (p1__52100_SHARP_){
return p1__52100_SHARP_.updated_QMARK_;
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ts){
if(cljs.core.truth_((function (){var G__52101 = cljs.core.first(ts);
if((G__52101 == null)){
return null;
} else {
return G__52101.updated_QMARK_;
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
frontend.fs.sync.filepath__GT_diff = (function frontend$fs$sync$filepath__GT_diff(index,p__52102){
var map__52103 = p__52102;
var map__52103__$1 = cljs.core.__destructure_map(map__52103);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52103__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52103__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52103__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
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
(self__.normalized_path = (function (){var G__52104 = self__.path;
var G__52104__$1 = ((clojure.string.starts_with_QMARK_(self__.path,"/"))?clojure.string.replace_first(G__52104,"/",""):G__52104);
if(cljs.core.truth_(self__.remote_QMARK_)){
return frontend.fs.sync.remove_user_graph_uuid_prefix(G__52104__$1);
} else {
return G__52104__$1;
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

(frontend.fs.sync.FileMetadata.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/FileMetadata");
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

var frontend$fs$sync$IRSAPI$set_env$dyn_56079 = (function (this$,prod_QMARK_){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.set_env[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,prod_QMARK_) : m__5391__auto__.call(null,this$,prod_QMARK_));
} else {
var m__5389__auto__ = (frontend.fs.sync.set_env["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,prod_QMARK_) : m__5389__auto__.call(null,this$,prod_QMARK_));
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
return frontend$fs$sync$IRSAPI$set_env$dyn_56079(this$,prod_QMARK_);
}
});

var frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_56080 = (function (this$,graph_uuid,base_path,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_local_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_local_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths));
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
return frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_56080(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_56081 = (function (this$,graph_uuid,base_path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_local_all_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,base_path) : m__5391__auto__.call(null,this$,graph_uuid,base_path));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_local_all_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,base_path) : m__5389__auto__.call(null,this$,graph_uuid,base_path));
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
return frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_56081(this$,graph_uuid,base_path);
}
});

var frontend$fs$sync$IRSAPI$rename_local_file$dyn_56082 = (function (this$,graph_uuid,base_path,from,to){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.rename_local_file[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,from,to) : m__5391__auto__.call(null,this$,graph_uuid,base_path,from,to));
} else {
var m__5389__auto__ = (frontend.fs.sync.rename_local_file["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,from,to) : m__5389__auto__.call(null,this$,graph_uuid,base_path,from,to));
} else {
throw cljs.core.missing_protocol("IRSAPI.rename-local-file",this$);
}
}
});
frontend.fs.sync.rename_local_file = (function frontend$fs$sync$rename_local_file(this$,graph_uuid,base_path,from,to){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$rename_local_file$arity$5(this$,graph_uuid,base_path,from,to);
} else {
return frontend$fs$sync$IRSAPI$rename_local_file$dyn_56082(this$,graph_uuid,base_path,from,to);
}
});

var frontend$fs$sync$IRSAPI$update_local_files$dyn_56083 = (function (this$,graph_uuid,base_path,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.update_local_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.update_local_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths));
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
return frontend$fs$sync$IRSAPI$update_local_files$dyn_56083(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$delete_local_files$dyn_56084 = (function (this$,graph_uuid,base_path,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.delete_local_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.delete_local_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
throw cljs.core.missing_protocol("IRSAPI.delete-local-files",this$);
}
}
});
frontend.fs.sync.delete_local_files = (function frontend$fs$sync$delete_local_files(this$,graph_uuid,base_path,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 == null)))))){
return this$.frontend$fs$sync$IRSAPI$delete_local_files$arity$4(this$,graph_uuid,base_path,filepaths);
} else {
return frontend$fs$sync$IRSAPI$delete_local_files$dyn_56084(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$update_remote_file$dyn_56085 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.update_remote_file[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepath,local_txid) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepath,local_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.update_remote_file["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepath,local_txid) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepath,local_txid));
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
return frontend$fs$sync$IRSAPI$update_remote_file$dyn_56085(this$,graph_uuid,base_path,filepath,local_txid);
}
});

var frontend$fs$sync$IRSAPI$update_remote_files$dyn_56088 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.update_remote_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.update_remote_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
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
return frontend$fs$sync$IRSAPI$update_remote_files$dyn_56088(this$,graph_uuid,base_path,filepaths,local_txid);
}
});

var frontend$fs$sync$IRSAPI$delete_remote_files$dyn_56089 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.delete_remote_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.delete_remote_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
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
return frontend$fs$sync$IRSAPI$delete_remote_files$dyn_56089(this$,graph_uuid,base_path,filepaths,local_txid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IRemoteAPI = function(){};

var frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_56091 = (function (this$,graph_uuid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_all_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5391__auto__.call(null,this$,graph_uuid));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_all_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5389__auto__.call(null,this$,graph_uuid));
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
return frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_56091(this$,graph_uuid);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_56092 = (function (this$,graph_uuid,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,filepaths));
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
return frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_56092(this$,graph_uuid,filepaths);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_56093 = (function (this$,graph_name_opt,graph_uuid_opt){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_name_opt,graph_uuid_opt) : m__5391__auto__.call(null,this$,graph_name_opt,graph_uuid_opt));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_name_opt,graph_uuid_opt) : m__5389__auto__.call(null,this$,graph_name_opt,graph_uuid_opt));
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
return frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_56093(this$,graph_name_opt,graph_uuid_opt);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_56094 = (function (this$,graph_uuid,filepath){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_file_versions[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepath) : m__5391__auto__.call(null,this$,graph_uuid,filepath));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_file_versions["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepath) : m__5389__auto__.call(null,this$,graph_uuid,filepath));
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
return frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_56094(this$,graph_uuid,filepath);
}
});

var frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_56095 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.list_remote_graphs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.list_remote_graphs["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
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
return frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_56095(this$);
}
});

var frontend$fs$sync$IRemoteAPI$get_diff$dyn_56096 = (function (this$,graph_uuid,from_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_diff[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,from_txid) : m__5391__auto__.call(null,this$,graph_uuid,from_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_diff["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,from_txid) : m__5389__auto__.call(null,this$,graph_uuid,from_txid));
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
return frontend$fs$sync$IRemoteAPI$get_diff$dyn_56096(this$,graph_uuid,from_txid);
}
});

var frontend$fs$sync$IRemoteAPI$create_graph$dyn_56097 = (function (this$,graph_name){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.create_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_name) : m__5391__auto__.call(null,this$,graph_name));
} else {
var m__5389__auto__ = (frontend.fs.sync.create_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_name) : m__5389__auto__.call(null,this$,graph_name));
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
return frontend$fs$sync$IRemoteAPI$create_graph$dyn_56097(this$,graph_name);
}
});

var frontend$fs$sync$IRemoteAPI$delete_graph$dyn_56098 = (function (this$,graph_uuid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.delete_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5391__auto__.call(null,this$,graph_uuid));
} else {
var m__5389__auto__ = (frontend.fs.sync.delete_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5389__auto__.call(null,this$,graph_uuid));
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
return frontend$fs$sync$IRemoteAPI$delete_graph$dyn_56098(this$,graph_uuid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IToken = function(){};

var frontend$fs$sync$IToken$get_token$dyn_56099 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_token[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_token["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IToken.get-token",this$);
}
}
});
frontend.fs.sync.get_token = (function frontend$fs$sync$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IToken$get_token$arity$1 == null)))))){
return this$.frontend$fs$sync$IToken$get_token$arity$1(this$);
} else {
return frontend$fs$sync$IToken$get_token$dyn_56099(this$);
}
});

var frontend$fs$sync$IToken$refresh_token$dyn_56100 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.refresh_token[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.refresh_token["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IToken.refresh-token",this$);
}
}
});
frontend.fs.sync.refresh_token = (function frontend$fs$sync$refresh_token(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IToken$refresh_token$arity$1 == null)))))){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(this$);
} else {
return frontend$fs$sync$IToken$refresh_token$dyn_56100(this$);
}
});

frontend.fs.sync.check_files_exists = (function frontend$fs$sync$check_files_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52160){
var state_val_52161 = (state_52160[(1)]);
if((state_val_52161 === (1))){
var inst_52146 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_52160__$1 = state_52160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52160__$1,(2),inst_52146);
} else {
if((state_val_52161 === (2))){
var inst_52149 = (state_52160[(7)]);
var inst_52148 = (state_52160[(2)]);
var inst_52149__$1 = cljs.core.ex_cause(inst_52148);
var inst_52150 = (inst_52149__$1 == null);
var state_52160__$1 = (function (){var statearr_52164 = state_52160;
(statearr_52164[(7)] = inst_52149__$1);

return statearr_52164;
})();
if(cljs.core.truth_(inst_52150)){
var statearr_52165_56101 = state_52160__$1;
(statearr_52165_56101[(1)] = (3));

} else {
var statearr_52166_56102 = state_52160__$1;
(statearr_52166_56102[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52161 === (3))){
var state_52160__$1 = state_52160;
var statearr_52167_56103 = state_52160__$1;
(statearr_52167_56103[(2)] = null);

(statearr_52167_56103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52161 === (4))){
var inst_52149 = (state_52160[(7)]);
var inst_52153 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52149),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_paths)].join('');
var inst_52154 = ["Assert failed: ",inst_52153,"\n","(nil? cause)"].join('');
var inst_52155 = (new Error(inst_52154));
var inst_52156 = (function(){throw inst_52155})();
var state_52160__$1 = state_52160;
var statearr_52168_56104 = state_52160__$1;
(statearr_52168_56104[(2)] = inst_52156);

(statearr_52168_56104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52161 === (5))){
var inst_52158 = (state_52160[(2)]);
var state_52160__$1 = state_52160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52160__$1,inst_52158);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0 = (function (){
var statearr_52169 = [null,null,null,null,null,null,null,null];
(statearr_52169[(0)] = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__);

(statearr_52169[(1)] = (1));

return statearr_52169;
});
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1 = (function (state_52160){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52160);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52170){var ex__27576__auto__ = e52170;
var statearr_52171_56106 = state_52160;
(statearr_52171_56106[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52160[(4)]))){
var statearr_52172_56108 = state_52160;
(statearr_52172_56108[(1)] = cljs.core.first((state_52160[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56109 = state_52160;
state_52160 = G__56109;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__ = function(state_52160){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1.call(this,state_52160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52173 = f__27596__auto__();
(statearr_52173[(6)] = c__27595__auto__);

return statearr_52173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.check_files_not_exists = (function frontend$fs$sync$check_files_not_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52193){
var state_val_52194 = (state_52193[(1)]);
if((state_val_52194 === (1))){
var inst_52180 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_52193__$1 = state_52193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52193__$1,(2),inst_52180);
} else {
if((state_val_52194 === (2))){
var inst_52182 = (state_52193[(2)]);
var inst_52183 = cljs.core.ex_cause(inst_52182);
var inst_52184 = (inst_52183 == null);
var inst_52185 = cljs.core.not(inst_52184);
var state_52193__$1 = state_52193;
if(inst_52185){
var statearr_52202_56110 = state_52193__$1;
(statearr_52202_56110[(1)] = (3));

} else {
var statearr_52203_56111 = state_52193__$1;
(statearr_52203_56111[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52194 === (3))){
var state_52193__$1 = state_52193;
var statearr_52204_56112 = state_52193__$1;
(statearr_52204_56112[(2)] = null);

(statearr_52204_56112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52194 === (4))){
var inst_52188 = (new Error("Assert failed: (some? cause)"));
var inst_52189 = (function(){throw inst_52188})();
var state_52193__$1 = state_52193;
var statearr_52205_56113 = state_52193__$1;
(statearr_52205_56113[(2)] = inst_52189);

(statearr_52205_56113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52194 === (5))){
var inst_52191 = (state_52193[(2)]);
var state_52193__$1 = state_52193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52193__$1,inst_52191);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0 = (function (){
var statearr_52206 = [null,null,null,null,null,null,null];
(statearr_52206[(0)] = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__);

(statearr_52206[(1)] = (1));

return statearr_52206;
});
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1 = (function (state_52193){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52193);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52207){var ex__27576__auto__ = e52207;
var statearr_52208_56114 = state_52193;
(statearr_52208_56114[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52193[(4)]))){
var statearr_52209_56115 = state_52193;
(statearr_52209_56115[(1)] = cljs.core.first((state_52193[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56116 = state_52193;
state_52193 = G__56116;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__ = function(state_52193){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1.call(this,state_52193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52210 = f__27596__auto__();
(statearr_52210[(6)] = c__27595__auto__);

return statearr_52210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.retry_rsapi = (function frontend$fs$sync$retry_rsapi(f){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52246){
var state_val_52247 = (state_52246[(1)]);
if((state_val_52247 === (7))){
var inst_52232 = (state_52246[(2)]);
var state_52246__$1 = state_52246;
if(cljs.core.truth_(inst_52232)){
var statearr_52249_56118 = state_52246__$1;
(statearr_52249_56118[(1)] = (11));

} else {
var statearr_52250_56119 = state_52246__$1;
(statearr_52250_56119[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (1))){
var inst_52214 = (3);
var state_52246__$1 = (function (){var statearr_52251 = state_52246;
(statearr_52251[(7)] = inst_52214);

return statearr_52251;
})();
var statearr_52252_56120 = state_52246__$1;
(statearr_52252_56120[(2)] = null);

(statearr_52252_56120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (4))){
var inst_52220 = (state_52246[(8)]);
var inst_52219 = (state_52246[(9)]);
var inst_52219__$1 = (state_52246[(2)]);
var inst_52220__$1 = (inst_52219__$1 instanceof cljs.core.ExceptionInfo);
var state_52246__$1 = (function (){var statearr_52253 = state_52246;
(statearr_52253[(8)] = inst_52220__$1);

(statearr_52253[(9)] = inst_52219__$1);

return statearr_52253;
})();
if(cljs.core.truth_(inst_52220__$1)){
var statearr_52254_56123 = state_52246__$1;
(statearr_52254_56123[(1)] = (5));

} else {
var statearr_52255_56124 = state_52246__$1;
(statearr_52255_56124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (13))){
var inst_52242 = (state_52246[(2)]);
var state_52246__$1 = state_52246;
var statearr_52256_56125 = state_52246__$1;
(statearr_52256_56125[(2)] = inst_52242);

(statearr_52256_56125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (6))){
var inst_52220 = (state_52246[(8)]);
var state_52246__$1 = state_52246;
var statearr_52257_56126 = state_52246__$1;
(statearr_52257_56126[(2)] = inst_52220);

(statearr_52257_56126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (3))){
var inst_52244 = (state_52246[(2)]);
var state_52246__$1 = state_52246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52246__$1,inst_52244);
} else {
if((state_val_52247 === (12))){
var inst_52219 = (state_52246[(9)]);
var state_52246__$1 = state_52246;
var statearr_52258_56127 = state_52246__$1;
(statearr_52258_56127[(2)] = inst_52219);

(statearr_52258_56127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (2))){
var inst_52217 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var state_52246__$1 = state_52246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52246__$1,(4),inst_52217);
} else {
if((state_val_52247 === (11))){
var inst_52214 = (state_52246[(7)]);
var inst_52235 = ["retry(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52214),") ..."].join('');
var inst_52236 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52235], 0));
var inst_52238 = (inst_52214 - (1));
var inst_52214__$1 = inst_52238;
var state_52246__$1 = (function (){var statearr_52259 = state_52246;
(statearr_52259[(10)] = inst_52236);

(statearr_52259[(7)] = inst_52214__$1);

return statearr_52259;
})();
var statearr_52260_56128 = state_52246__$1;
(statearr_52260_56128[(2)] = null);

(statearr_52260_56128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (9))){
var inst_52224 = (state_52246[(11)]);
var state_52246__$1 = state_52246;
var statearr_52265_56129 = state_52246__$1;
(statearr_52265_56129[(2)] = inst_52224);

(statearr_52265_56129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (5))){
var inst_52224 = (state_52246[(11)]);
var inst_52219 = (state_52246[(9)]);
var inst_52222 = cljs.core.ex_cause(inst_52219);
var inst_52223 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52222);
var inst_52224__$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_52223,"operation timed out");
var state_52246__$1 = (function (){var statearr_52266 = state_52246;
(statearr_52266[(11)] = inst_52224__$1);

return statearr_52266;
})();
if(cljs.core.truth_(inst_52224__$1)){
var statearr_52267_56130 = state_52246__$1;
(statearr_52267_56130[(1)] = (8));

} else {
var statearr_52268_56131 = state_52246__$1;
(statearr_52268_56131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (10))){
var inst_52229 = (state_52246[(2)]);
var state_52246__$1 = state_52246;
var statearr_52269_56132 = state_52246__$1;
(statearr_52269_56132[(2)] = inst_52229);

(statearr_52269_56132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52247 === (8))){
var inst_52214 = (state_52246[(7)]);
var inst_52226 = (inst_52214 > (0));
var state_52246__$1 = state_52246;
var statearr_52271_56133 = state_52246__$1;
(statearr_52271_56133[(2)] = inst_52226);

(statearr_52271_56133[(1)] = (10));


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
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0 = (function (){
var statearr_52272 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52272[(0)] = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__);

(statearr_52272[(1)] = (1));

return statearr_52272;
});
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1 = (function (state_52246){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52246);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52274){var ex__27576__auto__ = e52274;
var statearr_52275_56134 = state_52246;
(statearr_52275_56134[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52246[(4)]))){
var statearr_52276_56135 = state_52246;
(statearr_52276_56135[(1)] = cljs.core.first((state_52246[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56136 = state_52246;
state_52246 = G__56136;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__ = function(state_52246){
switch(arguments.length){
case 0:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1.call(this,state_52246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0;
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1;
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52277 = f__27596__auto__();
(statearr_52277[(6)] = c__27595__auto__);

return statearr_52277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52292){
var state_val_52293 = (state_52292[(1)]);
if((state_val_52293 === (1))){
var inst_52283 = (state_52292[(7)]);
var inst_52283__$1 = frontend.state.get_auth_id_token();
var state_52292__$1 = (function (){var statearr_52295 = state_52292;
(statearr_52295[(7)] = inst_52283__$1);

return statearr_52295;
})();
if(cljs.core.truth_(inst_52283__$1)){
var statearr_52296_56137 = state_52292__$1;
(statearr_52296_56137[(1)] = (2));

} else {
var statearr_52297_56138 = state_52292__$1;
(statearr_52297_56138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52293 === (2))){
var inst_52283 = (state_52292[(7)]);
var state_52292__$1 = state_52292;
var statearr_52298_56139 = state_52292__$1;
(statearr_52298_56139[(2)] = inst_52283);

(statearr_52298_56139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52293 === (3))){
var inst_52286 = this$__$1.refresh_token();
var state_52292__$1 = state_52292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52292__$1,(5),inst_52286);
} else {
if((state_val_52293 === (4))){
var inst_52290 = (state_52292[(2)]);
var state_52292__$1 = state_52292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52292__$1,inst_52290);
} else {
if((state_val_52293 === (5))){
var inst_52288 = (state_52292[(2)]);
var state_52292__$1 = state_52292;
var statearr_52299_56142 = state_52292__$1;
(statearr_52299_56142[(2)] = inst_52288);

(statearr_52299_56142[(1)] = (4));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52302 = [null,null,null,null,null,null,null,null];
(statearr_52302[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52302[(1)] = (1));

return statearr_52302;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52292){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52292);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52303){var ex__27576__auto__ = e52303;
var statearr_52304_56143 = state_52292;
(statearr_52304_56143[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52292[(4)]))){
var statearr_52305_56144 = state_52292;
(statearr_52305_56144[(1)] = cljs.core.first((state_52292[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56145 = state_52292;
state_52292 = G__56145;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52292){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52306 = f__27596__auto__();
(statearr_52306[(6)] = c__27595__auto__);

return statearr_52306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52314){
var state_val_52315 = (state_52314[(1)]);
if((state_val_52315 === (1))){
var inst_52309 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52314__$1 = state_52314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52314__$1,(2),inst_52309);
} else {
if((state_val_52315 === (2))){
var inst_52311 = (state_52314[(2)]);
var inst_52312 = frontend.state.get_auth_id_token();
var state_52314__$1 = (function (){var statearr_52316 = state_52314;
(statearr_52316[(7)] = inst_52311);

return statearr_52316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52314__$1,inst_52312);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52318 = [null,null,null,null,null,null,null,null];
(statearr_52318[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52318[(1)] = (1));

return statearr_52318;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52314){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52314);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52319){var ex__27576__auto__ = e52319;
var statearr_52320_56146 = state_52314;
(statearr_52320_56146[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52314[(4)]))){
var statearr_52321_56147 = state_52314;
(statearr_52321_56147[(1)] = cljs.core.first((state_52314[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56148 = state_52314;
state_52314 = G__56148;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52314){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52323 = f__27596__auto__();
(statearr_52323[(6)] = c__27595__auto__);

return statearr_52323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52332){
var state_val_52333 = (state_52332[(1)]);
if((state_val_52333 === (1))){
var inst_52324 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52332__$1,(2),inst_52324);
} else {
if((state_val_52333 === (2))){
var inst_52326 = (state_52332[(2)]);
var inst_52327 = (function (){var token = inst_52326;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_52328 = frontend.fs.sync.retry_rsapi(inst_52327);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52332__$1,(3),inst_52328);
} else {
if((state_val_52333 === (3))){
var inst_52330 = (state_52332[(2)]);
var state_52332__$1 = state_52332;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52332__$1,inst_52330);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52335 = [null,null,null,null,null,null,null];
(statearr_52335[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52335[(1)] = (1));

return statearr_52335;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52332){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52332);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52336){var ex__27576__auto__ = e52336;
var statearr_52337_56153 = state_52332;
(statearr_52337_56153[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52332[(4)]))){
var statearr_52338_56154 = state_52332;
(statearr_52338_56154[(1)] = cljs.core.first((state_52332[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56158 = state_52332;
state_52332 = G__56158;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52332){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52339 = f__27596__auto__();
(statearr_52339[(6)] = c__27595__auto__);

return statearr_52339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3 = (function (_,graph_uuid,base_path){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52355){
var state_val_52356 = (state_52355[(1)]);
if((state_val_52356 === (1))){
var inst_52340 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-all-files-meta",graph_uuid,base_path], 0)));
});
})();
var inst_52341 = frontend.fs.sync.retry_rsapi(inst_52340);
var state_52355__$1 = state_52355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52355__$1,(2),inst_52341);
} else {
if((state_val_52356 === (2))){
var inst_52343 = (state_52355[(7)]);
var inst_52343__$1 = (state_52355[(2)]);
var inst_52344 = (inst_52343__$1 instanceof cljs.core.ExceptionInfo);
var state_52355__$1 = (function (){var statearr_52362 = state_52355;
(statearr_52362[(7)] = inst_52343__$1);

return statearr_52362;
})();
if(cljs.core.truth_(inst_52344)){
var statearr_52363_56159 = state_52355__$1;
(statearr_52363_56159[(1)] = (3));

} else {
var statearr_52364_56160 = state_52355__$1;
(statearr_52364_56160[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52356 === (3))){
var inst_52343 = (state_52355[(7)]);
var state_52355__$1 = state_52355;
var statearr_52366_56161 = state_52355__$1;
(statearr_52366_56161[(2)] = inst_52343);

(statearr_52366_56161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52356 === (4))){
var inst_52343 = (state_52355[(7)]);
var inst_52348 = (function (){var r = inst_52343;
return (function (p__52347){
var vec__52368 = p__52347;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52368,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52368,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52349 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52343);
var inst_52350 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52348,inst_52349);
var inst_52351 = cljs.core.set(inst_52350);
var state_52355__$1 = state_52355;
var statearr_52371_56162 = state_52355__$1;
(statearr_52371_56162[(2)] = inst_52351);

(statearr_52371_56162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52356 === (5))){
var inst_52353 = (state_52355[(2)]);
var state_52355__$1 = state_52355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52355__$1,inst_52353);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52375 = [null,null,null,null,null,null,null,null];
(statearr_52375[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52375[(1)] = (1));

return statearr_52375;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52355){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52355);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52381){var ex__27576__auto__ = e52381;
var statearr_52382_56163 = state_52355;
(statearr_52382_56163[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52355[(4)]))){
var statearr_52383_56167 = state_52355;
(statearr_52383_56167[(1)] = cljs.core.first((state_52355[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56168 = state_52355;
state_52355 = G__56168;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52355){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52385 = f__27596__auto__();
(statearr_52385[(6)] = c__27595__auto__);

return statearr_52385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_local_files$arity$4 = (function (this$,graph_uuid,base_path,filepaths){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths], 0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52401){
var state_val_52402 = (state_52401[(1)]);
if((state_val_52402 === (1))){
var inst_52387 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52401__$1 = state_52401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52401__$1,(2),inst_52387);
} else {
if((state_val_52402 === (2))){
var inst_52389 = (state_52401[(2)]);
var inst_52390 = (function (){var token = inst_52389;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths,token], 0)));
});
})();
var inst_52391 = frontend.fs.sync.retry_rsapi(inst_52390);
var state_52401__$1 = state_52401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52401__$1,(3),inst_52391);
} else {
if((state_val_52402 === (3))){
var inst_52393 = (state_52401[(2)]);
var inst_52394 = frontend.state.developer_mode_QMARK_();
var state_52401__$1 = (function (){var statearr_52404 = state_52401;
(statearr_52404[(7)] = inst_52393);

return statearr_52404;
})();
if(cljs.core.truth_(inst_52394)){
var statearr_52405_56169 = state_52401__$1;
(statearr_52405_56169[(1)] = (4));

} else {
var statearr_52406_56170 = state_52401__$1;
(statearr_52406_56170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52402 === (4))){
var inst_52396 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_52401__$1 = state_52401;
var statearr_52407_56171 = state_52401__$1;
(statearr_52407_56171[(2)] = inst_52396);

(statearr_52407_56171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52402 === (5))){
var state_52401__$1 = state_52401;
var statearr_52408_56172 = state_52401__$1;
(statearr_52408_56172[(2)] = null);

(statearr_52408_56172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52402 === (6))){
var inst_52393 = (state_52401[(7)]);
var inst_52399 = (state_52401[(2)]);
var state_52401__$1 = (function (){var statearr_52409 = state_52401;
(statearr_52409[(8)] = inst_52399);

return statearr_52409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52401__$1,inst_52393);
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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52410 = [null,null,null,null,null,null,null,null,null];
(statearr_52410[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52410[(1)] = (1));

return statearr_52410;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52401){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52401);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52411){var ex__27576__auto__ = e52411;
var statearr_52412_56173 = state_52401;
(statearr_52412_56173[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52401[(4)]))){
var statearr_52413_56174 = state_52401;
(statearr_52413_56174[(1)] = cljs.core.first((state_52401[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56175 = state_52401;
state_52401 = G__56175;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52401){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52414 = f__27596__auto__();
(statearr_52414[(6)] = c__27595__auto__);

return statearr_52414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 = (function (_,graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52431){
var state_val_52432 = (state_52431[(1)]);
if((state_val_52432 === (1))){
var inst_52415 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-files-meta",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_52416 = frontend.fs.sync.retry_rsapi(inst_52415);
var state_52431__$1 = state_52431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52431__$1,(2),inst_52416);
} else {
if((state_val_52432 === (2))){
var inst_52418 = (state_52431[(7)]);
var inst_52418__$1 = (state_52431[(2)]);
var inst_52419 = (inst_52418__$1 instanceof cljs.core.ExceptionInfo);
var state_52431__$1 = (function (){var statearr_52440 = state_52431;
(statearr_52440[(7)] = inst_52418__$1);

return statearr_52440;
})();
if(cljs.core.truth_(inst_52419)){
var statearr_52442_56178 = state_52431__$1;
(statearr_52442_56178[(1)] = (3));

} else {
var statearr_52443_56179 = state_52431__$1;
(statearr_52443_56179[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52432 === (3))){
var inst_52418 = (state_52431[(7)]);
var state_52431__$1 = state_52431;
var statearr_52444_56180 = state_52431__$1;
(statearr_52444_56180[(2)] = inst_52418);

(statearr_52444_56180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52432 === (4))){
var inst_52418 = (state_52431[(7)]);
var inst_52425 = (function (){var r = inst_52418;
return (function (p__52424){
var vec__52447 = p__52424;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52447,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52447,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52426 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52418);
var inst_52427 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52425,inst_52426);
var state_52431__$1 = state_52431;
var statearr_52450_56181 = state_52431__$1;
(statearr_52450_56181[(2)] = inst_52427);

(statearr_52450_56181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52432 === (5))){
var inst_52429 = (state_52431[(2)]);
var state_52431__$1 = state_52431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52431__$1,inst_52429);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52451 = [null,null,null,null,null,null,null,null];
(statearr_52451[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52451[(1)] = (1));

return statearr_52451;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52431){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52431);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52452){var ex__27576__auto__ = e52452;
var statearr_52453_56182 = state_52431;
(statearr_52453_56182[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52431[(4)]))){
var statearr_52454_56183 = state_52431;
(statearr_52454_56183[(1)] = cljs.core.first((state_52431[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56184 = state_52431;
state_52431 = G__56184;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52431){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52455 = f__27596__auto__();
(statearr_52455[(6)] = c__27595__auto__);

return statearr_52455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52470){
var state_val_52471 = (state_52470[(1)]);
if((state_val_52471 === (1))){
var inst_52462 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52470__$1 = state_52470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52470__$1,(2),inst_52462);
} else {
if((state_val_52471 === (2))){
var inst_52464 = (state_52470[(2)]);
var inst_52465 = (function (){var token = inst_52464;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_52466 = frontend.fs.sync.retry_rsapi(inst_52465);
var state_52470__$1 = state_52470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52470__$1,(3),inst_52466);
} else {
if((state_val_52471 === (3))){
var inst_52468 = (state_52470[(2)]);
var state_52470__$1 = state_52470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52470__$1,inst_52468);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52474 = [null,null,null,null,null,null,null];
(statearr_52474[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52474[(1)] = (1));

return statearr_52474;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52470){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52470);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52479){var ex__27576__auto__ = e52479;
var statearr_52480_56185 = state_52470;
(statearr_52480_56185[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52470[(4)]))){
var statearr_52482_56186 = state_52470;
(statearr_52482_56186[(1)] = cljs.core.first((state_52470[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56187 = state_52470;
state_52470 = G__56187;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52470){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52483 = f__27596__auto__();
(statearr_52483[(6)] = c__27595__auto__);

return statearr_52483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$set_env$arity$2 = (function (_,prod_QMARK_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52495){
var state_val_52496 = (state_52495[(1)]);
if((state_val_52496 === (1))){
var state_52495__$1 = state_52495;
if(cljs.core.truth_(prod_QMARK_)){
var statearr_52498_56188 = state_52495__$1;
(statearr_52498_56188[(1)] = (3));

} else {
var statearr_52499_56189 = state_52495__$1;
(statearr_52499_56189[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (2))){
var inst_52493 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52495__$1,inst_52493);
} else {
if((state_val_52496 === (3))){
var state_52495__$1 = state_52495;
var statearr_52501_56190 = state_52495__$1;
(statearr_52501_56190[(2)] = "prod");

(statearr_52501_56190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (4))){
var state_52495__$1 = state_52495;
var statearr_52503_56191 = state_52495__$1;
(statearr_52503_56191[(2)] = "dev");

(statearr_52503_56191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (5))){
var inst_52489 = (state_52495[(2)]);
var inst_52490 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set-env",inst_52489], 0));
var inst_52491 = cljs.core.async.interop.p__GT_c(inst_52490);
var state_52495__$1 = state_52495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52495__$1,(2),inst_52491);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52504 = [null,null,null,null,null,null,null];
(statearr_52504[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52504[(1)] = (1));

return statearr_52504;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52495){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52495);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52505){var ex__27576__auto__ = e52505;
var statearr_52506_56193 = state_52495;
(statearr_52506_56193[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52495[(4)]))){
var statearr_52508_56194 = state_52495;
(statearr_52508_56194[(1)] = cljs.core.first((state_52495[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56196 = state_52495;
state_52495 = G__56196;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52495){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52510 = f__27596__auto__();
(statearr_52510[(6)] = c__27595__auto__);

return statearr_52510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52519){
var state_val_52520 = (state_52519[(1)]);
if((state_val_52520 === (1))){
var inst_52511 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52519__$1 = state_52519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52519__$1,(2),inst_52511);
} else {
if((state_val_52520 === (2))){
var inst_52513 = (state_52519[(2)]);
var inst_52514 = (function (){var token = inst_52513;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-file",graph_uuid,base_path,filepath,local_txid,token], 0)));
});
})();
var inst_52515 = frontend.fs.sync.retry_rsapi(inst_52514);
var state_52519__$1 = state_52519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52519__$1,(3),inst_52515);
} else {
if((state_val_52520 === (3))){
var inst_52517 = (state_52519[(2)]);
var state_52519__$1 = state_52519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52519__$1,inst_52517);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52522 = [null,null,null,null,null,null,null];
(statearr_52522[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52522[(1)] = (1));

return statearr_52522;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52519){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52519);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52524){var ex__27576__auto__ = e52524;
var statearr_52525_56198 = state_52519;
(statearr_52525_56198[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52519[(4)]))){
var statearr_52526_56199 = state_52519;
(statearr_52526_56199[(1)] = cljs.core.first((state_52519[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56200 = state_52519;
state_52519 = G__56200;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52519){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52527 = f__27596__auto__();
(statearr_52527[(6)] = c__27595__auto__);

return statearr_52527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52541){
var state_val_52542 = (state_52541[(1)]);
if((state_val_52542 === (1))){
var inst_52530 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-local-files",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_52531 = frontend.fs.sync.retry_rsapi(inst_52530);
var state_52541__$1 = state_52541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52541__$1,(2),inst_52531);
} else {
if((state_val_52542 === (2))){
var inst_52533 = (state_52541[(2)]);
var inst_52534 = frontend.state.developer_mode_QMARK_();
var state_52541__$1 = (function (){var statearr_52544 = state_52541;
(statearr_52544[(7)] = inst_52533);

return statearr_52544;
})();
if(cljs.core.truth_(inst_52534)){
var statearr_52545_56202 = state_52541__$1;
(statearr_52545_56202[(1)] = (3));

} else {
var statearr_52546_56203 = state_52541__$1;
(statearr_52546_56203[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52542 === (3))){
var inst_52536 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_52541__$1 = state_52541;
var statearr_52547_56204 = state_52541__$1;
(statearr_52547_56204[(2)] = inst_52536);

(statearr_52547_56204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52542 === (4))){
var state_52541__$1 = state_52541;
var statearr_52548_56206 = state_52541__$1;
(statearr_52548_56206[(2)] = null);

(statearr_52548_56206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52542 === (5))){
var inst_52533 = (state_52541[(7)]);
var inst_52539 = (state_52541[(2)]);
var state_52541__$1 = (function (){var statearr_52549 = state_52541;
(statearr_52549[(8)] = inst_52539);

return statearr_52549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52541__$1,inst_52533);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52551 = [null,null,null,null,null,null,null,null,null];
(statearr_52551[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52551[(1)] = (1));

return statearr_52551;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52541){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52541);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52552){var ex__27576__auto__ = e52552;
var statearr_52553_56207 = state_52541;
(statearr_52553_56207[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52541[(4)]))){
var statearr_52554_56208 = state_52541;
(statearr_52554_56208[(1)] = cljs.core.first((state_52541[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56209 = state_52541;
state_52541 = G__56209;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52541){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52555 = f__27596__auto__();
(statearr_52555[(6)] = c__27595__auto__);

return statearr_52555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.RSAPI.cljs$lang$type = true);

(frontend.fs.sync.RSAPI.cljs$lang$ctorStr = "frontend.fs.sync/RSAPI");

(frontend.fs.sync.RSAPI.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/RSAPI");
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52565){
var state_val_52566 = (state_52565[(1)]);
if((state_val_52566 === (1))){
var inst_52556 = (state_52565[(7)]);
var inst_52556__$1 = frontend.state.get_auth_id_token();
var state_52565__$1 = (function (){var statearr_52567 = state_52565;
(statearr_52567[(7)] = inst_52556__$1);

return statearr_52567;
})();
if(cljs.core.truth_(inst_52556__$1)){
var statearr_52568_56210 = state_52565__$1;
(statearr_52568_56210[(1)] = (2));

} else {
var statearr_52569_56211 = state_52565__$1;
(statearr_52569_56211[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52566 === (2))){
var inst_52556 = (state_52565[(7)]);
var state_52565__$1 = state_52565;
var statearr_52570_56212 = state_52565__$1;
(statearr_52570_56212[(2)] = inst_52556);

(statearr_52570_56212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52566 === (3))){
var inst_52559 = this$__$1.refresh_token();
var state_52565__$1 = state_52565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52565__$1,(5),inst_52559);
} else {
if((state_val_52566 === (4))){
var inst_52563 = (state_52565[(2)]);
var state_52565__$1 = state_52565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52565__$1,inst_52563);
} else {
if((state_val_52566 === (5))){
var inst_52561 = (state_52565[(2)]);
var state_52565__$1 = state_52565;
var statearr_52571_56213 = state_52565__$1;
(statearr_52571_56213[(2)] = inst_52561);

(statearr_52571_56213[(1)] = (4));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52572 = [null,null,null,null,null,null,null,null];
(statearr_52572[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52572[(1)] = (1));

return statearr_52572;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52565){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52565);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52573){var ex__27576__auto__ = e52573;
var statearr_52574_56216 = state_52565;
(statearr_52574_56216[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52565[(4)]))){
var statearr_52575_56219 = state_52565;
(statearr_52575_56219[(1)] = cljs.core.first((state_52565[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56220 = state_52565;
state_52565 = G__56220;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52565){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52576 = f__27596__auto__();
(statearr_52576[(6)] = c__27595__auto__);

return statearr_52576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52582){
var state_val_52583 = (state_52582[(1)]);
if((state_val_52583 === (1))){
var inst_52577 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52582__$1 = state_52582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52582__$1,(2),inst_52577);
} else {
if((state_val_52583 === (2))){
var inst_52579 = (state_52582[(2)]);
var inst_52580 = frontend.state.get_auth_id_token();
var state_52582__$1 = (function (){var statearr_52584 = state_52582;
(statearr_52584[(7)] = inst_52579);

return statearr_52584;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52582__$1,inst_52580);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52585 = [null,null,null,null,null,null,null,null];
(statearr_52585[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52585[(1)] = (1));

return statearr_52585;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52582){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52582);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52586){var ex__27576__auto__ = e52586;
var statearr_52587_56225 = state_52582;
(statearr_52587_56225[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52582[(4)]))){
var statearr_52588_56227 = state_52582;
(statearr_52588_56227[(1)] = cljs.core.first((state_52582[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56228 = state_52582;
state_52582 = G__56228;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52582){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52589 = f__27596__auto__();
(statearr_52589[(6)] = c__27595__auto__);

return statearr_52589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52611){
var state_val_52612 = (state_52611[(1)]);
if((state_val_52612 === (1))){
var inst_52591 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017)];
var inst_52592 = [base_path];
var inst_52593 = cljs.core.PersistentHashMap.fromArrays(inst_52591,inst_52592);
var inst_52594 = cljs.core.clj__GT_js(inst_52593);
var inst_52595 = frontend.mobile.util.file_sync.getLocalAllFilesMeta(inst_52594);
var inst_52596 = cljs.core.async.interop.p__GT_c(inst_52595);
var state_52611__$1 = state_52611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52611__$1,(2),inst_52596);
} else {
if((state_val_52612 === (2))){
var inst_52598 = (state_52611[(7)]);
var inst_52598__$1 = (state_52611[(2)]);
var inst_52599 = (inst_52598__$1 instanceof cljs.core.ExceptionInfo);
var state_52611__$1 = (function (){var statearr_52629 = state_52611;
(statearr_52629[(7)] = inst_52598__$1);

return statearr_52629;
})();
if(cljs.core.truth_(inst_52599)){
var statearr_52634_56232 = state_52611__$1;
(statearr_52634_56232[(1)] = (3));

} else {
var statearr_52639_56234 = state_52611__$1;
(statearr_52639_56234[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (3))){
var inst_52598 = (state_52611[(7)]);
var state_52611__$1 = state_52611;
var statearr_52640_56235 = state_52611__$1;
(statearr_52640_56235[(2)] = inst_52598);

(statearr_52640_56235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (4))){
var inst_52598 = (state_52611[(7)]);
var inst_52603 = (function (){var r = inst_52598;
return (function (p__52602){
var vec__52643 = p__52602;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52643,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52643,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52604 = inst_52598.result;
var inst_52605 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52604);
var inst_52606 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52603,inst_52605);
var inst_52607 = cljs.core.set(inst_52606);
var state_52611__$1 = state_52611;
var statearr_52646_56236 = state_52611__$1;
(statearr_52646_56236[(2)] = inst_52607);

(statearr_52646_56236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (5))){
var inst_52609 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52611__$1,inst_52609);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52647 = [null,null,null,null,null,null,null,null];
(statearr_52647[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52647[(1)] = (1));

return statearr_52647;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52611){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52611);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52648){var ex__27576__auto__ = e52648;
var statearr_52649_56237 = state_52611;
(statearr_52649_56237[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52611[(4)]))){
var statearr_52650_56238 = state_52611;
(statearr_52650_56238[(1)] = cljs.core.first((state_52611[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56239 = state_52611;
state_52611 = G__56239;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52611){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52651 = f__27596__auto__();
(statearr_52651[(6)] = c__27595__auto__);

return statearr_52651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_local_files$arity$4 = (function (this$,graph_uuid,base_path,filepaths){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52666){
var state_val_52667 = (state_52666[(1)]);
if((state_val_52667 === (1))){
var inst_52652 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52666__$1 = state_52666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52666__$1,(2),inst_52652);
} else {
if((state_val_52667 === (2))){
var inst_52654 = (state_52666[(2)]);
var inst_52655 = (function (){var token = inst_52654;
return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.updateLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))));
});
})();
var inst_52656 = frontend.fs.sync.retry_rsapi(inst_52655);
var state_52666__$1 = state_52666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52666__$1,(3),inst_52656);
} else {
if((state_val_52667 === (3))){
var inst_52658 = (state_52666[(2)]);
var inst_52659 = frontend.state.developer_mode_QMARK_();
var state_52666__$1 = (function (){var statearr_52668 = state_52666;
(statearr_52668[(7)] = inst_52658);

return statearr_52668;
})();
if(cljs.core.truth_(inst_52659)){
var statearr_52669_56242 = state_52666__$1;
(statearr_52669_56242[(1)] = (4));

} else {
var statearr_52670_56243 = state_52666__$1;
(statearr_52670_56243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52667 === (4))){
var inst_52661 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_52666__$1 = state_52666;
var statearr_52671_56244 = state_52666__$1;
(statearr_52671_56244[(2)] = inst_52661);

(statearr_52671_56244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52667 === (5))){
var state_52666__$1 = state_52666;
var statearr_52672_56245 = state_52666__$1;
(statearr_52672_56245[(2)] = null);

(statearr_52672_56245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52667 === (6))){
var inst_52658 = (state_52666[(7)]);
var inst_52664 = (state_52666[(2)]);
var state_52666__$1 = (function (){var statearr_52673 = state_52666;
(statearr_52673[(8)] = inst_52664);

return statearr_52673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52666__$1,inst_52658);
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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52674 = [null,null,null,null,null,null,null,null,null];
(statearr_52674[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52674[(1)] = (1));

return statearr_52674;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52666){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52666);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52675){var ex__27576__auto__ = e52675;
var statearr_52676_56250 = state_52666;
(statearr_52676_56250[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52666[(4)]))){
var statearr_52677_56251 = state_52666;
(statearr_52677_56251[(1)] = cljs.core.first((state_52666[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56252 = state_52666;
state_52666 = G__56252;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52666){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52678 = f__27596__auto__();
(statearr_52678[(6)] = c__27595__auto__);

return statearr_52678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 = (function (_,_graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52699){
var state_val_52700 = (state_52699[(1)]);
if((state_val_52700 === (1))){
var inst_52679 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318)];
var inst_52680 = [base_path,filepaths];
var inst_52681 = cljs.core.PersistentHashMap.fromArrays(inst_52679,inst_52680);
var inst_52682 = cljs.core.clj__GT_js(inst_52681);
var inst_52683 = frontend.mobile.util.file_sync.getLocalFilesMeta(inst_52682);
var inst_52684 = cljs.core.async.interop.p__GT_c(inst_52683);
var state_52699__$1 = state_52699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52699__$1,(2),inst_52684);
} else {
if((state_val_52700 === (2))){
var inst_52686 = (state_52699[(7)]);
var inst_52686__$1 = (state_52699[(2)]);
var inst_52687 = (inst_52686__$1 instanceof cljs.core.ExceptionInfo);
var state_52699__$1 = (function (){var statearr_52701 = state_52699;
(statearr_52701[(7)] = inst_52686__$1);

return statearr_52701;
})();
if(cljs.core.truth_(inst_52687)){
var statearr_52702_56256 = state_52699__$1;
(statearr_52702_56256[(1)] = (3));

} else {
var statearr_52703_56257 = state_52699__$1;
(statearr_52703_56257[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52700 === (3))){
var inst_52686 = (state_52699[(7)]);
var state_52699__$1 = state_52699;
var statearr_52704_56258 = state_52699__$1;
(statearr_52704_56258[(2)] = inst_52686);

(statearr_52704_56258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52700 === (4))){
var inst_52686 = (state_52699[(7)]);
var inst_52691 = (function (){var r = inst_52686;
return (function (p__52690){
var vec__52705 = p__52690;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52705,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52705,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52692 = inst_52686.result;
var inst_52693 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52692);
var inst_52694 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52691,inst_52693);
var inst_52695 = cljs.core.set(inst_52694);
var state_52699__$1 = state_52699;
var statearr_52708_56261 = state_52699__$1;
(statearr_52708_56261[(2)] = inst_52695);

(statearr_52708_56261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52700 === (5))){
var inst_52697 = (state_52699[(2)]);
var state_52699__$1 = state_52699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52699__$1,inst_52697);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52709 = [null,null,null,null,null,null,null,null];
(statearr_52709[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52709[(1)] = (1));

return statearr_52709;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52699){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52699);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52710){var ex__27576__auto__ = e52710;
var statearr_52711_56264 = state_52699;
(statearr_52711_56264[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52699[(4)]))){
var statearr_52712_56265 = state_52699;
(statearr_52712_56265[(1)] = cljs.core.first((state_52699[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56269 = state_52699;
state_52699 = G__56269;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52699){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52713 = f__27596__auto__();
(statearr_52713[(6)] = c__27595__auto__);

return statearr_52713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52734){
var state_val_52735 = (state_52734[(1)]);
if((state_val_52735 === (1))){
var inst_52714 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52734__$1 = state_52734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52734__$1,(2),inst_52714);
} else {
if((state_val_52735 === (2))){
var inst_52716 = (state_52734[(2)]);
var inst_52717 = [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),new cljs.core.Keyword(null,"txid","txid",1606205478),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_52718 = [graph_uuid,base_path,filepaths,local_txid,inst_52716];
var inst_52719 = cljs.core.PersistentHashMap.fromArrays(inst_52717,inst_52718);
var inst_52720 = cljs.core.clj__GT_js(inst_52719);
var inst_52721 = frontend.mobile.util.file_sync.updateRemoteFiles(inst_52720);
var inst_52722 = cljs.core.async.interop.p__GT_c(inst_52721);
var state_52734__$1 = state_52734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52734__$1,(3),inst_52722);
} else {
if((state_val_52735 === (3))){
var inst_52724 = (state_52734[(7)]);
var inst_52724__$1 = (state_52734[(2)]);
var inst_52725 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.sync","debug-update-remote-files","frontend.fs.sync/debug-update-remote-files",-1146829271),inst_52724__$1], 0));
var inst_52726 = (inst_52724__$1 instanceof cljs.core.ExceptionInfo);
var state_52734__$1 = (function (){var statearr_52746 = state_52734;
(statearr_52746[(8)] = inst_52725);

(statearr_52746[(7)] = inst_52724__$1);

return statearr_52746;
})();
if(cljs.core.truth_(inst_52726)){
var statearr_52747_56274 = state_52734__$1;
(statearr_52747_56274[(1)] = (4));

} else {
var statearr_52748_56275 = state_52734__$1;
(statearr_52748_56275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52735 === (4))){
var inst_52724 = (state_52734[(7)]);
var state_52734__$1 = state_52734;
var statearr_52749_56276 = state_52734__$1;
(statearr_52749_56276[(2)] = inst_52724);

(statearr_52749_56276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52735 === (5))){
var inst_52724 = (state_52734[(7)]);
var inst_52729 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52724);
var inst_52730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52729,"txid");
var state_52734__$1 = state_52734;
var statearr_52752_56277 = state_52734__$1;
(statearr_52752_56277[(2)] = inst_52730);

(statearr_52752_56277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52735 === (6))){
var inst_52732 = (state_52734[(2)]);
var state_52734__$1 = state_52734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52734__$1,inst_52732);
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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52761 = [null,null,null,null,null,null,null,null,null];
(statearr_52761[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52761[(1)] = (1));

return statearr_52761;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52734){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52734);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52762){var ex__27576__auto__ = e52762;
var statearr_52763_56282 = state_52734;
(statearr_52763_56282[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52734[(4)]))){
var statearr_52764_56283 = state_52734;
(statearr_52764_56283[(1)] = cljs.core.first((state_52734[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56284 = state_52734;
state_52734 = G__56284;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52734){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52765 = f__27596__auto__();
(statearr_52765[(6)] = c__27595__auto__);

return statearr_52765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$set_env$arity$2 = (function (_,prod_QMARK_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52780){
var state_val_52781 = (state_52780[(1)]);
if((state_val_52781 === (1))){
var inst_52767 = [new cljs.core.Keyword(null,"env","env",-1815813235)];
var state_52780__$1 = (function (){var statearr_52782 = state_52780;
(statearr_52782[(7)] = inst_52767);

return statearr_52782;
})();
if(cljs.core.truth_(prod_QMARK_)){
var statearr_52783_56288 = state_52780__$1;
(statearr_52783_56288[(1)] = (3));

} else {
var statearr_52784_56289 = state_52780__$1;
(statearr_52784_56289[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52781 === (2))){
var inst_52778 = (state_52780[(2)]);
var state_52780__$1 = state_52780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52780__$1,inst_52778);
} else {
if((state_val_52781 === (3))){
var state_52780__$1 = state_52780;
var statearr_52785_56290 = state_52780__$1;
(statearr_52785_56290[(2)] = "prod");

(statearr_52785_56290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52781 === (4))){
var state_52780__$1 = state_52780;
var statearr_52786_56293 = state_52780__$1;
(statearr_52786_56293[(2)] = "dev");

(statearr_52786_56293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52781 === (5))){
var inst_52767 = (state_52780[(7)]);
var inst_52771 = (state_52780[(2)]);
var inst_52772 = [inst_52771];
var inst_52773 = cljs.core.PersistentHashMap.fromArrays(inst_52767,inst_52772);
var inst_52774 = cljs.core.clj__GT_js(inst_52773);
var inst_52775 = frontend.mobile.util.file_sync.setEnv(inst_52774);
var inst_52776 = cljs.core.async.interop.p__GT_c(inst_52775);
var state_52780__$1 = state_52780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52780__$1,(2),inst_52776);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52787 = [null,null,null,null,null,null,null,null];
(statearr_52787[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52787[(1)] = (1));

return statearr_52787;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52780){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52780);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52788){var ex__27576__auto__ = e52788;
var statearr_52789_56296 = state_52780;
(statearr_52789_56296[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52780[(4)]))){
var statearr_52790_56300 = state_52780;
(statearr_52790_56300[(1)] = cljs.core.first((state_52780[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56301 = state_52780;
state_52780 = G__56301;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52780){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52792 = f__27596__auto__();
(statearr_52792[(6)] = c__27595__auto__);

return statearr_52792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var self__ = this;
var this$__$1 = this;
return this$__$1.frontend$fs$sync$IRSAPI$update_remote_files$arity$5(null,graph_uuid,base_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath], null),local_txid);
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 = (function (_,_graph_uuid,base_path,from,to){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52803){
var state_val_52804 = (state_52803[(1)]);
if((state_val_52804 === (1))){
var inst_52794 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)];
var inst_52795 = [base_path,from,to];
var inst_52796 = cljs.core.PersistentHashMap.fromArrays(inst_52794,inst_52795);
var inst_52797 = cljs.core.clj__GT_js(inst_52796);
var inst_52798 = frontend.mobile.util.file_sync.renameLocalFile(inst_52797);
var inst_52799 = cljs.core.async.interop.p__GT_c(inst_52798);
var state_52803__$1 = state_52803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52803__$1,(2),inst_52799);
} else {
if((state_val_52804 === (2))){
var inst_52801 = (state_52803[(2)]);
var state_52803__$1 = state_52803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52803__$1,inst_52801);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52812 = [null,null,null,null,null,null,null];
(statearr_52812[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52812[(1)] = (1));

return statearr_52812;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52803){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52803);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52813){var ex__27576__auto__ = e52813;
var statearr_52814_56306 = state_52803;
(statearr_52814_56306[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52803[(4)]))){
var statearr_52817_56307 = state_52803;
(statearr_52817_56307[(1)] = cljs.core.first((state_52803[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56308 = state_52803;
state_52803 = G__56308;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52803){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52818 = f__27596__auto__();
(statearr_52818[(6)] = c__27595__auto__);

return statearr_52818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 = (function (_,_graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52833){
var state_val_52835 = (state_52833[(1)]);
if((state_val_52835 === (1))){
var inst_52821 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths], null))));
});
})();
var inst_52822 = frontend.fs.sync.retry_rsapi(inst_52821);
var state_52833__$1 = state_52833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52833__$1,(2),inst_52822);
} else {
if((state_val_52835 === (2))){
var inst_52824 = (state_52833[(2)]);
var inst_52825 = frontend.state.developer_mode_QMARK_();
var state_52833__$1 = (function (){var statearr_52855 = state_52833;
(statearr_52855[(7)] = inst_52824);

return statearr_52855;
})();
if(cljs.core.truth_(inst_52825)){
var statearr_52856_56309 = state_52833__$1;
(statearr_52856_56309[(1)] = (3));

} else {
var statearr_52857_56310 = state_52833__$1;
(statearr_52857_56310[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52835 === (3))){
var inst_52828 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_52833__$1 = state_52833;
var statearr_52861_56311 = state_52833__$1;
(statearr_52861_56311[(2)] = inst_52828);

(statearr_52861_56311[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52835 === (4))){
var state_52833__$1 = state_52833;
var statearr_52869_56312 = state_52833__$1;
(statearr_52869_56312[(2)] = null);

(statearr_52869_56312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52835 === (5))){
var inst_52824 = (state_52833[(7)]);
var inst_52831 = (state_52833[(2)]);
var state_52833__$1 = (function (){var statearr_52871 = state_52833;
(statearr_52871[(8)] = inst_52831);

return statearr_52871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52833__$1,inst_52824);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52872 = [null,null,null,null,null,null,null,null,null];
(statearr_52872[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52872[(1)] = (1));

return statearr_52872;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52833){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52833);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52873){var ex__27576__auto__ = e52873;
var statearr_52874_56315 = state_52833;
(statearr_52874_56315[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52833[(4)]))){
var statearr_52875_56316 = state_52833;
(statearr_52875_56316[(1)] = cljs.core.first((state_52833[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56317 = state_52833;
state_52833 = G__56317;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52833){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52876 = f__27596__auto__();
(statearr_52876[(6)] = c__27595__auto__);

return statearr_52876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.CapacitorAPI.cljs$lang$type = true);

(frontend.fs.sync.CapacitorAPI.cljs$lang$ctorStr = "frontend.fs.sync/CapacitorAPI");

(frontend.fs.sync.CapacitorAPI.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/CapacitorAPI");
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52907){
var state_val_52908 = (state_52907[(1)]);
if((state_val_52908 === (1))){
var inst_52885 = this$.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52907__$1 = state_52907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52907__$1,(3),inst_52885);
} else {
if((state_val_52908 === (2))){
var inst_52891 = (state_52907[(7)]);
var inst_52891__$1 = (state_52907[(2)]);
var inst_52892 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_52891__$1);
var inst_52893 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_52892) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_52892));
var state_52907__$1 = (function (){var statearr_52909 = state_52907;
(statearr_52909[(7)] = inst_52891__$1);

return statearr_52909;
})();
if(cljs.core.truth_(inst_52893)){
var statearr_52910_56320 = state_52907__$1;
(statearr_52910_56320[(1)] = (4));

} else {
var statearr_52911_56321 = state_52907__$1;
(statearr_52911_56321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52908 === (3))){
var inst_52887 = (state_52907[(2)]);
var inst_52888 = (function (){return (function (){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(null);
});
})();
var inst_52889 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4(api_name,body,inst_52887,inst_52888);
var state_52907__$1 = state_52907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52907__$1,(2),inst_52889);
} else {
if((state_val_52908 === (4))){
var inst_52891 = (state_52907[(7)]);
var inst_52895 = frontend.fs.sync.get_resp_json_body(inst_52891);
var state_52907__$1 = state_52907;
var statearr_52913_56324 = state_52907__$1;
(statearr_52913_56324[(2)] = inst_52895);

(statearr_52913_56324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52908 === (5))){
var inst_52891 = (state_52907[(7)]);
var inst_52898 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_52900 = frontend.fs.sync.get_resp_json_body(inst_52891);
var inst_52901 = [inst_52891,inst_52900];
var inst_52902 = cljs.core.PersistentHashMap.fromArrays(inst_52898,inst_52901);
var inst_52903 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request failed",inst_52902);
var state_52907__$1 = state_52907;
var statearr_52918_56325 = state_52907__$1;
(statearr_52918_56325[(2)] = inst_52903);

(statearr_52918_56325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52908 === (6))){
var inst_52905 = (state_52907[(2)]);
var state_52907__$1 = state_52907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52907__$1,inst_52905);
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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52919 = [null,null,null,null,null,null,null,null];
(statearr_52919[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52919[(1)] = (1));

return statearr_52919;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52907){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52907);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52920){var ex__27576__auto__ = e52920;
var statearr_52922_56327 = state_52907;
(statearr_52922_56327[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52907[(4)]))){
var statearr_52923_56328 = state_52907;
(statearr_52923_56328[(1)] = cljs.core.first((state_52907[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56329 = state_52907;
state_52907 = G__56329;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52907){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52924 = f__27596__auto__();
(statearr_52924[(6)] = c__27595__auto__);

return statearr_52924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52934){
var state_val_52935 = (state_52934[(1)]);
if((state_val_52935 === (1))){
var inst_52925 = (state_52934[(7)]);
var inst_52925__$1 = frontend.state.get_auth_id_token();
var state_52934__$1 = (function (){var statearr_52937 = state_52934;
(statearr_52937[(7)] = inst_52925__$1);

return statearr_52937;
})();
if(cljs.core.truth_(inst_52925__$1)){
var statearr_52938_56333 = state_52934__$1;
(statearr_52938_56333[(1)] = (2));

} else {
var statearr_52939_56334 = state_52934__$1;
(statearr_52939_56334[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (2))){
var inst_52925 = (state_52934[(7)]);
var state_52934__$1 = state_52934;
var statearr_52941_56335 = state_52934__$1;
(statearr_52941_56335[(2)] = inst_52925);

(statearr_52941_56335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (3))){
var inst_52928 = this$__$1.frontend$fs$sync$IToken$refresh_token$arity$1(null);
var state_52934__$1 = state_52934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52934__$1,(5),inst_52928);
} else {
if((state_val_52935 === (4))){
var inst_52932 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52934__$1,inst_52932);
} else {
if((state_val_52935 === (5))){
var inst_52930 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
var statearr_52944_56338 = state_52934__$1;
(statearr_52944_56338[(2)] = inst_52930);

(statearr_52944_56338[(1)] = (4));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52947 = [null,null,null,null,null,null,null,null];
(statearr_52947[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52947[(1)] = (1));

return statearr_52947;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52934){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52934);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52948){var ex__27576__auto__ = e52948;
var statearr_52949_56339 = state_52934;
(statearr_52949_56339[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52934[(4)]))){
var statearr_52950_56340 = state_52934;
(statearr_52950_56340[(1)] = cljs.core.first((state_52934[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56342 = state_52934;
state_52934 = G__56342;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52934){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52969 = f__27596__auto__();
(statearr_52969[(6)] = c__27595__auto__);

return statearr_52969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52980){
var state_val_52981 = (state_52980[(1)]);
if((state_val_52981 === (1))){
var inst_52975 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52980__$1 = state_52980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52980__$1,(2),inst_52975);
} else {
if((state_val_52981 === (2))){
var inst_52977 = (state_52980[(2)]);
var inst_52978 = frontend.state.get_auth_id_token();
var state_52980__$1 = (function (){var statearr_52982 = state_52980;
(statearr_52982[(7)] = inst_52977);

return statearr_52982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52980__$1,inst_52978);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52983 = [null,null,null,null,null,null,null,null];
(statearr_52983[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52983[(1)] = (1));

return statearr_52983;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52980){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52980);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52984){var ex__27576__auto__ = e52984;
var statearr_52985_56345 = state_52980;
(statearr_52985_56345[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52980[(4)]))){
var statearr_52986_56346 = state_52980;
(statearr_52986_56346[(1)] = cljs.core.first((state_52980[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56348 = state_52980;
state_52980 = G__56348;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52980){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52987 = f__27596__auto__();
(statearr_52987[(6)] = c__27595__auto__);

return statearr_52987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2 = (function (this$,graph_uuid){
var self__ = this;
var this$__$1 = this;
var file_meta_list = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53030){
var state_val_53031 = (state_53030[(1)]);
if((state_val_53031 === (7))){
var inst_53026 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
var statearr_53032_56351 = state_53030__$1;
(statearr_53032_56351[(2)] = inst_53026);

(statearr_53032_56351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (1))){
var inst_52991 = null;
var inst_52992 = null;
var state_53030__$1 = (function (){var statearr_53034 = state_53030;
(statearr_53034[(7)] = inst_52991);

(statearr_53034[(8)] = inst_52992);

return statearr_53034;
})();
var statearr_53042_56352 = state_53030__$1;
(statearr_53042_56352[(2)] = null);

(statearr_53042_56352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (4))){
var inst_53003 = (state_53030[(9)]);
var inst_53003__$1 = (state_53030[(2)]);
var inst_53004 = (inst_53003__$1 instanceof cljs.core.ExceptionInfo);
var state_53030__$1 = (function (){var statearr_53045 = state_53030;
(statearr_53045[(9)] = inst_53003__$1);

return statearr_53045;
})();
if(cljs.core.truth_(inst_53004)){
var statearr_53051_56353 = state_53030__$1;
(statearr_53051_56353[(1)] = (5));

} else {
var statearr_53052_56355 = state_53030__$1;
(statearr_53052_56355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (13))){
var inst_53024 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
var statearr_53053_56357 = state_53030__$1;
(statearr_53053_56357[(2)] = inst_53024);

(statearr_53053_56357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (6))){
var inst_53007 = (state_53030[(10)]);
var inst_53008 = (state_53030[(11)]);
var inst_53013 = (state_53030[(12)]);
var inst_52991 = (state_53030[(7)]);
var inst_52992 = (state_53030[(8)]);
var inst_53003 = (state_53030[(9)]);
var inst_53007__$1 = new cljs.core.Keyword(null,"NextDir","NextDir",-113026321).cljs$core$IFn$_invoke$arity$1(inst_53003);
var inst_53008__$1 = new cljs.core.Keyword(null,"NextContinuationToken","NextContinuationToken",1106322029).cljs$core$IFn$_invoke$arity$1(inst_53003);
var inst_53009 = new cljs.core.Keyword(null,"Objects","Objects",-610644271).cljs$core$IFn$_invoke$arity$1(inst_53003);
var inst_53010 = (function (){var dir = inst_52991;
var continuation_token = inst_52992;
var r = inst_53003;
var next_dir = inst_53007__$1;
var next_continuation_token = inst_53008__$1;
var objs = inst_53009;
return (function (p1__52879_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__52879_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__52879_SHARP_),frontend.fs.sync.remove_user_graph_uuid_prefix(decodeURIComponent(new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__52879_SHARP_))),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__52879_SHARP_),true,null);
});
})();
var inst_53011 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_53010,inst_53009);
var inst_53012 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,file_meta_list,inst_53011);
var inst_53013__$1 = cljs.core.empty_QMARK_(inst_53007__$1);
var state_53030__$1 = (function (){var statearr_53060 = state_53030;
(statearr_53060[(10)] = inst_53007__$1);

(statearr_53060[(11)] = inst_53008__$1);

(statearr_53060[(13)] = inst_53012);

(statearr_53060[(12)] = inst_53013__$1);

return statearr_53060;
})();
if(inst_53013__$1){
var statearr_53066_56360 = state_53030__$1;
(statearr_53066_56360[(1)] = (8));

} else {
var statearr_53067_56361 = state_53030__$1;
(statearr_53067_56361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (3))){
var inst_53028 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53030__$1,inst_53028);
} else {
if((state_val_53031 === (12))){
var inst_53007 = (state_53030[(10)]);
var inst_53008 = (state_53030[(11)]);
var inst_52991 = inst_53007;
var inst_52992 = inst_53008;
var state_53030__$1 = (function (){var statearr_53069 = state_53030;
(statearr_53069[(7)] = inst_52991);

(statearr_53069[(8)] = inst_52992);

return statearr_53069;
})();
var statearr_53070_56362 = state_53030__$1;
(statearr_53070_56362[(2)] = null);

(statearr_53070_56362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (2))){
var inst_52991 = (state_53030[(7)]);
var inst_52992 = (state_53030[(8)]);
var inst_52994 = cljs.core.PersistentHashMap.EMPTY;
var inst_52995 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second);
var inst_52996 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Dir","Dir",1454706553),new cljs.core.Keyword(null,"ContinuationToken","ContinuationToken",-770030188)];
var inst_52997 = [graph_uuid,inst_52991,inst_52992];
var inst_52998 = cljs.core.PersistentHashMap.fromArrays(inst_52996,inst_52997);
var inst_52999 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_52995,inst_52998);
var inst_53000 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_52994,inst_52999);
var inst_53001 = this$__$1.request("get_all_files",inst_53000);
var state_53030__$1 = state_53030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53030__$1,(4),inst_53001);
} else {
if((state_val_53031 === (11))){
var inst_53020 = cljs.core.persistent_BANG_(file_meta_list);
var state_53030__$1 = state_53030;
var statearr_53083_56363 = state_53030__$1;
(statearr_53083_56363[(2)] = inst_53020);

(statearr_53083_56363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (9))){
var inst_53013 = (state_53030[(12)]);
var state_53030__$1 = state_53030;
var statearr_53092_56364 = state_53030__$1;
(statearr_53092_56364[(2)] = inst_53013);

(statearr_53092_56364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (5))){
var inst_53003 = (state_53030[(9)]);
var state_53030__$1 = state_53030;
var statearr_53093_56365 = state_53030__$1;
(statearr_53093_56365[(2)] = inst_53003);

(statearr_53093_56365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (10))){
var inst_53018 = (state_53030[(2)]);
var state_53030__$1 = state_53030;
if(cljs.core.truth_(inst_53018)){
var statearr_53095_56366 = state_53030__$1;
(statearr_53095_56366[(1)] = (11));

} else {
var statearr_53096_56367 = state_53030__$1;
(statearr_53096_56367[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53031 === (8))){
var inst_53008 = (state_53030[(11)]);
var inst_53015 = cljs.core.empty_QMARK_(inst_53008);
var state_53030__$1 = state_53030;
var statearr_53104_56368 = state_53030__$1;
(statearr_53104_56368[(2)] = inst_53015);

(statearr_53104_56368[(1)] = (10));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_53115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53115[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53115[(1)] = (1));

return statearr_53115;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53030){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53030);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53124){var ex__27576__auto__ = e53124;
var statearr_53125_56370 = state_53030;
(statearr_53125_56370[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53030[(4)]))){
var statearr_53126_56371 = state_53030;
(statearr_53126_56371[(1)] = cljs.core.first((state_53030[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56372 = state_53030;
state_53030 = G__56372;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53030){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53131 = f__27596__auto__();
(statearr_53131[(6)] = c__27595__auto__);

return statearr_53131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3 = (function (this$,graph_uuid,filepaths){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_(filepaths)], null)], null);

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53169){
var state_val_53170 = (state_53169[(1)]);
if((state_val_53170 === (1))){
var inst_53152 = (state_53169[(7)]);
var inst_53152__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.encode_filepath,filepaths);
var inst_53153 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Files","Files",1992500914)];
var inst_53154 = [graph_uuid,inst_53152__$1];
var inst_53155 = cljs.core.PersistentHashMap.fromArrays(inst_53153,inst_53154);
var inst_53156 = this$__$1.request("get_files_meta",inst_53155);
var state_53169__$1 = (function (){var statearr_53191 = state_53169;
(statearr_53191[(7)] = inst_53152__$1);

return statearr_53191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53169__$1,(2),inst_53156);
} else {
if((state_val_53170 === (2))){
var inst_53158 = (state_53169[(8)]);
var inst_53158__$1 = (state_53169[(2)]);
var inst_53159 = (inst_53158__$1 instanceof cljs.core.ExceptionInfo);
var state_53169__$1 = (function (){var statearr_53200 = state_53169;
(statearr_53200[(8)] = inst_53158__$1);

return statearr_53200;
})();
if(cljs.core.truth_(inst_53159)){
var statearr_53201_56375 = state_53169__$1;
(statearr_53201_56375[(1)] = (3));

} else {
var statearr_53202_56376 = state_53169__$1;
(statearr_53202_56376[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53170 === (3))){
var inst_53158 = (state_53169[(8)]);
var state_53169__$1 = state_53169;
var statearr_53203_56377 = state_53169__$1;
(statearr_53203_56377[(2)] = inst_53158);

(statearr_53203_56377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53170 === (4))){
var inst_53152 = (state_53169[(7)]);
var inst_53158 = (state_53169[(8)]);
var inst_53162 = cljs.core.PersistentHashSet.EMPTY;
var inst_53163 = (function (){var encoded_filepaths = inst_53152;
var r = inst_53158;
return (function (p1__52880_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__52880_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__52880_SHARP_),decodeURIComponent(new cljs.core.Keyword(null,"FilePath","FilePath",1522398781).cljs$core$IFn$_invoke$arity$1(p1__52880_SHARP_)),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__52880_SHARP_),true,null);
});
})();
var inst_53164 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_53163);
var inst_53165 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_53162,inst_53164,inst_53158);
var state_53169__$1 = state_53169;
var statearr_53217_56378 = state_53169__$1;
(statearr_53217_56378[(2)] = inst_53165);

(statearr_53217_56378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53170 === (5))){
var inst_53167 = (state_53169[(2)]);
var state_53169__$1 = state_53169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53169__$1,inst_53167);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_53220 = [null,null,null,null,null,null,null,null,null];
(statearr_53220[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53220[(1)] = (1));

return statearr_53220;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53169){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53169);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53221){var ex__27576__auto__ = e53221;
var statearr_53222_56381 = state_53169;
(statearr_53222_56381[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53169[(4)]))){
var statearr_53223_56382 = state_53169;
(statearr_53223_56382[(1)] = cljs.core.first((state_53169[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56383 = state_53169;
state_53169 = G__56383;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53169){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53224 = f__27596__auto__();
(statearr_53224[(6)] = c__27595__auto__);

return statearr_53224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3 = (function (this$,graph_name_opt,graph_uuid_opt){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5043__auto__ = graph_name_opt;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return graph_uuid_opt;
}
})()], null)], null);

return this$__$1.request("get_graph",(function (){var G__53225 = cljs.core.PersistentArrayMap.EMPTY;
var G__53225__$1 = ((cljs.core.seq(graph_name_opt))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53225,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name_opt):G__53225);
if(cljs.core.seq(graph_uuid_opt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53225__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid_opt);
} else {
return G__53225__$1;
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53256){
var state_val_53257 = (state_53256[(1)]);
if((state_val_53257 === (1))){
var inst_53231 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"FromTXId","FromTXId",-1493550374)];
var inst_53232 = [graph_uuid,from_txid];
var inst_53233 = cljs.core.PersistentHashMap.fromArrays(inst_53231,inst_53232);
var inst_53234 = this$__$1.request("get_diff",inst_53233);
var state_53256__$1 = state_53256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53256__$1,(2),inst_53234);
} else {
if((state_val_53257 === (2))){
var inst_53236 = (state_53256[(7)]);
var inst_53236__$1 = (state_53256[(2)]);
var inst_53237 = (inst_53236__$1 instanceof cljs.core.ExceptionInfo);
var state_53256__$1 = (function (){var statearr_53259 = state_53256;
(statearr_53259[(7)] = inst_53236__$1);

return statearr_53259;
})();
if(cljs.core.truth_(inst_53237)){
var statearr_53260_56389 = state_53256__$1;
(statearr_53260_56389[(1)] = (3));

} else {
var statearr_53261_56390 = state_53256__$1;
(statearr_53261_56390[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53257 === (3))){
var inst_53236 = (state_53256[(7)]);
var state_53256__$1 = state_53256;
var statearr_53262_56391 = state_53256__$1;
(statearr_53262_56391[(2)] = inst_53236);

(statearr_53262_56391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53257 === (4))){
var inst_53236 = (state_53256[(7)]);
var inst_53240 = new cljs.core.Keyword(null,"Transactions","Transactions",-836353760).cljs$core$IFn$_invoke$arity$1(inst_53236);
var inst_53241 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TXId","TXId",-902804781),inst_53240);
var inst_53242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53247 = cljs.core.last(inst_53241);
var inst_53248 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_53247);
var inst_53249 = cljs.core.first(inst_53241);
var inst_53250 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_53249);
var inst_53251 = [inst_53241,inst_53248,inst_53250];
var inst_53252 = (new cljs.core.PersistentVector(null,3,(5),inst_53242,inst_53251,null));
var state_53256__$1 = state_53256;
var statearr_53263_56395 = state_53256__$1;
(statearr_53263_56395[(2)] = inst_53252);

(statearr_53263_56395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53257 === (5))){
var inst_53254 = (state_53256[(2)]);
var state_53256__$1 = state_53256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53256__$1,inst_53254);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_53264 = [null,null,null,null,null,null,null,null];
(statearr_53264[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53264[(1)] = (1));

return statearr_53264;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53256){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53256);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53266){var ex__27576__auto__ = e53266;
var statearr_53267_56396 = state_53256;
(statearr_53267_56396[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53256[(4)]))){
var statearr_53268_56397 = state_53256;
(statearr_53268_56397[(1)] = cljs.core.first((state_53256[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56398 = state_53256;
state_53256 = G__56398;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53256){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53270 = f__27596__auto__();
(statearr_53270[(6)] = c__27595__auto__);

return statearr_53270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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

(frontend.fs.sync.RemoteAPI.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/RemoteAPI");
}));

/**
 * Positional factory function for frontend.fs.sync/RemoteAPI.
 */
frontend.fs.sync.__GT_RemoteAPI = (function frontend$fs$sync$__GT_RemoteAPI(){
return (new frontend.fs.sync.RemoteAPI());
});

frontend.fs.sync.remoteapi = frontend.fs.sync.__GT_RemoteAPI();
frontend.fs.sync.add_new_version_file = (function frontend$fs$sync$add_new_version_file(repo,path,content){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53278){
var state_val_53279 = (state_53278[(1)]);
if((state_val_53279 === (1))){
var inst_53271 = frontend.config.get_local_dir(repo);
var inst_53272 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["addVersionFile",inst_53271,path,content], 0));
var inst_53273 = cljs.core.async.interop.p__GT_c(inst_53272);
var state_53278__$1 = state_53278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53278__$1,(2),inst_53273);
} else {
if((state_val_53279 === (2))){
var inst_53275 = (state_53278[(2)]);
var inst_53276 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["add-new-version-file: ",inst_53275], 0));
var state_53278__$1 = state_53278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53278__$1,inst_53276);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0 = (function (){
var statearr_53285 = [null,null,null,null,null,null,null];
(statearr_53285[(0)] = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__);

(statearr_53285[(1)] = (1));

return statearr_53285;
});
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1 = (function (state_53278){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53278);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53286){var ex__27576__auto__ = e53286;
var statearr_53287_56402 = state_53278;
(statearr_53287_56402[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53278[(4)]))){
var statearr_53288_56403 = state_53278;
(statearr_53288_56403[(1)] = cljs.core.first((state_53278[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56404 = state_53278;
state_53278 = G__56404;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = function(state_53278){
switch(arguments.length){
case 0:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1.call(this,state_53278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0;
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1;
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53292 = f__27596__auto__();
(statearr_53292[(6)] = c__27595__auto__);

return statearr_53292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.is_journals_or_pages_QMARK_ = (function frontend$fs$sync$is_journals_or_pages_QMARK_(filetxn){
var rel_path = frontend.fs.sync.relative_path(filetxn);
return ((clojure.string.starts_with_QMARK_(rel_path,"journals/")) || (clojure.string.starts_with_QMARK_(rel_path,"pages/")));
});
/**
 * when we need to create a new version file:
 *   1. when apply a 'update' filetxn, it already exists(same page name) locally and has delete diffs
 *   2. when apply a 'delete' filetxn, its origin remote content and local content are different
 *   - TODO: we need to store origin remote content md5 in server db
 *   3. create version files only for files under 'journals/', 'pages/' dir
 */
frontend.fs.sync.need_add_version_file_QMARK_ = (function frontend$fs$sync$need_add_version_file_QMARK_(filetxn,origin_db_content){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53330){
var state_val_53331 = (state_53330[(1)]);
if((state_val_53331 === (7))){
var inst_53326 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
var statearr_53333_56405 = state_53330__$1;
(statearr_53333_56405[(2)] = inst_53326);

(statearr_53333_56405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (1))){
var inst_53295 = filetxn.renamed_QMARK_();
var state_53330__$1 = state_53330;
if(cljs.core.truth_(inst_53295)){
var statearr_53334_56406 = state_53330__$1;
(statearr_53334_56406[(1)] = (2));

} else {
var statearr_53335_56407 = state_53330__$1;
(statearr_53335_56407[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (4))){
var inst_53328 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53330__$1,inst_53328);
} else {
if((state_val_53331 === (15))){
var inst_53312 = (state_53330[(7)]);
var state_53330__$1 = state_53330;
var statearr_53336_56408 = state_53330__$1;
(statearr_53336_56408[(2)] = inst_53312);

(statearr_53336_56408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (13))){
var inst_53310 = (state_53330[(8)]);
var state_53330__$1 = state_53330;
var statearr_53337_56409 = state_53330__$1;
(statearr_53337_56409[(2)] = inst_53310);

(statearr_53337_56409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (6))){
var inst_53301 = filetxn.updated_QMARK_;
var state_53330__$1 = state_53330;
if(cljs.core.truth_(inst_53301)){
var statearr_53338_56410 = state_53330__$1;
(statearr_53338_56410[(1)] = (8));

} else {
var statearr_53339_56411 = state_53330__$1;
(statearr_53339_56411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (17))){
var inst_53318 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
var statearr_53344_56412 = state_53330__$1;
(statearr_53344_56412[(2)] = inst_53318);

(statearr_53344_56412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (3))){
var inst_53298 = filetxn.deleted_QMARK_;
var state_53330__$1 = state_53330;
if(cljs.core.truth_(inst_53298)){
var statearr_53346_56413 = state_53330__$1;
(statearr_53346_56413[(1)] = (5));

} else {
var statearr_53347_56414 = state_53330__$1;
(statearr_53347_56414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (12))){
var inst_53312 = (state_53330[(7)]);
var inst_53309 = (state_53330[(9)]);
var inst_53312__$1 = (inst_53309 == null);
var state_53330__$1 = (function (){var statearr_53348 = state_53330;
(statearr_53348[(7)] = inst_53312__$1);

return statearr_53348;
})();
if(cljs.core.truth_(inst_53312__$1)){
var statearr_53349_56415 = state_53330__$1;
(statearr_53349_56415[(1)] = (15));

} else {
var statearr_53350_56416 = state_53330__$1;
(statearr_53350_56416[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (2))){
var state_53330__$1 = state_53330;
var statearr_53351_56417 = state_53330__$1;
(statearr_53351_56417[(2)] = false);

(statearr_53351_56417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (11))){
var inst_53310 = (state_53330[(8)]);
var inst_53309 = (state_53330[(2)]);
var inst_53310__$1 = origin_db_content;
var state_53330__$1 = (function (){var statearr_53352 = state_53330;
(statearr_53352[(8)] = inst_53310__$1);

(statearr_53352[(9)] = inst_53309);

return statearr_53352;
})();
if(cljs.core.truth_(inst_53310__$1)){
var statearr_53353_56418 = state_53330__$1;
(statearr_53353_56418[(1)] = (12));

} else {
var statearr_53354_56419 = state_53330__$1;
(statearr_53354_56419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (9))){
var state_53330__$1 = state_53330;
var statearr_53355_56420 = state_53330__$1;
(statearr_53355_56420[(2)] = null);

(statearr_53355_56420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (5))){
var state_53330__$1 = state_53330;
var statearr_53356_56422 = state_53330__$1;
(statearr_53356_56422[(2)] = false);

(statearr_53356_56422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (14))){
var inst_53321 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
var statearr_53357_56423 = state_53330__$1;
(statearr_53357_56423[(2)] = inst_53321);

(statearr_53357_56423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (16))){
var inst_53309 = (state_53330[(9)]);
var inst_53315 = frontend.diff.diff(origin_db_content,inst_53309);
var inst_53316 = cljs.core.some(new cljs.core.Keyword(null,"removed","removed",609626430),inst_53315);
var state_53330__$1 = state_53330;
var statearr_53358_56425 = state_53330__$1;
(statearr_53358_56425[(2)] = inst_53316);

(statearr_53358_56425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (10))){
var inst_53324 = (state_53330[(2)]);
var state_53330__$1 = state_53330;
var statearr_53360_56426 = state_53330__$1;
(statearr_53360_56426[(2)] = inst_53324);

(statearr_53360_56426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53331 === (8))){
var inst_53303 = frontend.fs.sync.relative_path(filetxn);
var inst_53304 = frontend.state.get_current_repo();
var inst_53305 = frontend.config.get_file_path(inst_53304,inst_53303);
var inst_53306 = frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",inst_53305);
var inst_53307 = cljs.core.async.interop.p__GT_c(inst_53306);
var state_53330__$1 = state_53330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53330__$1,(11),inst_53307);
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
});
return (function() {
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_53362 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53362[(0)] = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__);

(statearr_53362[(1)] = (1));

return statearr_53362;
});
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1 = (function (state_53330){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53330);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53363){var ex__27576__auto__ = e53363;
var statearr_53364_56432 = state_53330;
(statearr_53364_56432[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53330[(4)]))){
var statearr_53365_56433 = state_53330;
(statearr_53365_56433[(1)] = cljs.core.first((state_53330[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56435 = state_53330;
state_53330 = G__56435;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__ = function(state_53330){
switch(arguments.length){
case 0:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1.call(this,state_53330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53366 = f__27596__auto__();
(statearr_53366[(6)] = c__27595__auto__);

return statearr_53366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.apply_filetxns = (function frontend$fs$sync$apply_filetxns(graph_uuid,base_path,filetxns){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53514){
var state_val_53515 = (state_53514[(1)]);
if((state_val_53515 === (7))){
var inst_53375 = (state_53514[(7)]);
var inst_53374 = (state_53514[(8)]);
var inst_53383 = (state_53514[(2)]);
var inst_53384 = frontend.fs.sync.relative_path(inst_53374);
var inst_53385 = frontend.fs.sync.relative_path(inst_53375);
var inst_53386 = frontend.fs.sync.rename_local_file(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53384,inst_53385);
var state_53514__$1 = (function (){var statearr_53521 = state_53514;
(statearr_53521[(9)] = inst_53383);

return statearr_53521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53514__$1,(8),inst_53386);
} else {
if((state_val_53515 === (20))){
var inst_53409 = (state_53514[(10)]);
var inst_53407 = (state_53514[(11)]);
var inst_53410 = (state_53514[(12)]);
var inst_53408 = (state_53514[(13)]);
var inst_53427 = (state_53514[(2)]);
var inst_53429 = (inst_53410 + (1));
var tmp53516 = inst_53409;
var tmp53517 = inst_53407;
var tmp53518 = inst_53408;
var inst_53407__$1 = tmp53517;
var inst_53408__$1 = tmp53518;
var inst_53409__$1 = tmp53516;
var inst_53410__$1 = inst_53429;
var state_53514__$1 = (function (){var statearr_53522 = state_53514;
(statearr_53522[(10)] = inst_53409__$1);

(statearr_53522[(11)] = inst_53407__$1);

(statearr_53522[(12)] = inst_53410__$1);

(statearr_53522[(13)] = inst_53408__$1);

(statearr_53522[(14)] = inst_53427);

return statearr_53522;
})();
var statearr_53523_56438 = state_53514__$1;
(statearr_53523_56438[(2)] = null);

(statearr_53523_56438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (27))){
var inst_53447 = (state_53514[(15)]);
var inst_53393 = (state_53514[(16)]);
var inst_53446 = (state_53514[(17)]);
var inst_53451 = frontend.fs.sync.relative_path(inst_53446);
var inst_53452 = frontend.fs.sync.add_new_version_file(inst_53393,inst_53451,inst_53447);
var state_53514__$1 = state_53514;
var statearr_53524_56440 = state_53514__$1;
(statearr_53524_56440[(2)] = inst_53452);

(statearr_53524_56440[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (1))){
var inst_53370 = cljs.core.first(filetxns);
var inst_53371 = inst_53370.renamed_QMARK_();
var state_53514__$1 = state_53514;
if(cljs.core.truth_(inst_53371)){
var statearr_53525_56441 = state_53514__$1;
(statearr_53525_56441[(1)] = (2));

} else {
var statearr_53526_56442 = state_53514__$1;
(statearr_53526_56442[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (24))){
var inst_53432 = (state_53514[(18)]);
var inst_53436 = cljs.core.chunk_first(inst_53432);
var inst_53438 = cljs.core.chunk_rest(inst_53432);
var inst_53439 = cljs.core.count(inst_53436);
var inst_53407 = inst_53438;
var inst_53408 = inst_53436;
var inst_53409 = inst_53439;
var inst_53410 = (0);
var state_53514__$1 = (function (){var statearr_53528 = state_53514;
(statearr_53528[(10)] = inst_53409);

(statearr_53528[(11)] = inst_53407);

(statearr_53528[(12)] = inst_53410);

(statearr_53528[(13)] = inst_53408);

return statearr_53528;
})();
var statearr_53529_56443 = state_53514__$1;
(statearr_53529_56443[(2)] = null);

(statearr_53529_56443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (39))){
var inst_53500 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
if(cljs.core.truth_(inst_53500)){
var statearr_53530_56444 = state_53514__$1;
(statearr_53530_56444[(1)] = (40));

} else {
var statearr_53531_56446 = state_53514__$1;
(statearr_53531_56446[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (4))){
var inst_53511 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53514__$1,inst_53511);
} else {
if((state_val_53515 === (15))){
var inst_53420 = (state_53514[(19)]);
var inst_53410 = (state_53514[(12)]);
var inst_53408 = (state_53514[(13)]);
var inst_53419 = (state_53514[(20)]);
var inst_53418 = cljs.core._nth(inst_53408,inst_53410);
var inst_53419__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53418,(0),null);
var inst_53420__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53418,(1),null);
var inst_53421 = frontend.fs.sync.need_add_version_file_QMARK_(inst_53419__$1,inst_53420__$1);
var state_53514__$1 = (function (){var statearr_53532 = state_53514;
(statearr_53532[(19)] = inst_53420__$1);

(statearr_53532[(20)] = inst_53419__$1);

return statearr_53532;
})();
if(cljs.core.truth_(inst_53421)){
var statearr_53533_56451 = state_53514__$1;
(statearr_53533_56451[(1)] = (18));

} else {
var statearr_53534_56452 = state_53514__$1;
(statearr_53534_56452[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (21))){
var inst_53432 = (state_53514[(18)]);
var inst_53434 = cljs.core.chunked_seq_QMARK_(inst_53432);
var state_53514__$1 = state_53514;
if(inst_53434){
var statearr_53537_56453 = state_53514__$1;
(statearr_53537_56453[(1)] = (24));

} else {
var statearr_53539_56454 = state_53514__$1;
(statearr_53539_56454[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (31))){
var state_53514__$1 = state_53514;
var statearr_53540_56455 = state_53514__$1;
(statearr_53540_56455[(2)] = null);

(statearr_53540_56455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (32))){
var inst_53507 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53541_56457 = state_53514__$1;
(statearr_53541_56457[(2)] = inst_53507);

(statearr_53541_56457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (40))){
var state_53514__$1 = state_53514;
var statearr_53543_56459 = state_53514__$1;
(statearr_53543_56459[(2)] = true);

(statearr_53543_56459[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (33))){
var state_53514__$1 = state_53514;
var statearr_53544_56460 = state_53514__$1;
(statearr_53544_56460[(2)] = null);

(statearr_53544_56460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (13))){
var inst_53409 = (state_53514[(10)]);
var inst_53410 = (state_53514[(12)]);
var inst_53412 = (inst_53410 < inst_53409);
var inst_53413 = inst_53412;
var state_53514__$1 = state_53514;
if(cljs.core.truth_(inst_53413)){
var statearr_53546_56463 = state_53514__$1;
(statearr_53546_56463[(1)] = (15));

} else {
var statearr_53547_56464 = state_53514__$1;
(statearr_53547_56464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (22))){
var state_53514__$1 = state_53514;
var statearr_53548_56465 = state_53514__$1;
(statearr_53548_56465[(2)] = null);

(statearr_53548_56465[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (36))){
var inst_53492 = (state_53514[(21)]);
var inst_53493 = (state_53514[(22)]);
var inst_53492__$1 = (state_53514[(2)]);
var inst_53493__$1 = (inst_53492__$1 instanceof cljs.core.ExceptionInfo);
var state_53514__$1 = (function (){var statearr_53550 = state_53514;
(statearr_53550[(21)] = inst_53492__$1);

(statearr_53550[(22)] = inst_53493__$1);

return statearr_53550;
})();
if(cljs.core.truth_(inst_53493__$1)){
var statearr_53551_56467 = state_53514__$1;
(statearr_53551_56467[(1)] = (37));

} else {
var statearr_53552_56468 = state_53514__$1;
(statearr_53552_56468[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (41))){
var inst_53492 = (state_53514[(21)]);
var state_53514__$1 = state_53514;
var statearr_53553_56469 = state_53514__$1;
(statearr_53553_56469[(2)] = inst_53492);

(statearr_53553_56469[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (29))){
var inst_53432 = (state_53514[(18)]);
var inst_53455 = (state_53514[(2)]);
var inst_53460 = cljs.core.next(inst_53432);
var inst_53407 = inst_53460;
var inst_53408 = null;
var inst_53409 = (0);
var inst_53410 = (0);
var state_53514__$1 = (function (){var statearr_53555 = state_53514;
(statearr_53555[(10)] = inst_53409);

(statearr_53555[(11)] = inst_53407);

(statearr_53555[(12)] = inst_53410);

(statearr_53555[(13)] = inst_53408);

(statearr_53555[(23)] = inst_53455);

return statearr_53555;
})();
var statearr_53558_56471 = state_53514__$1;
(statearr_53558_56471[(2)] = null);

(statearr_53558_56471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (6))){
var inst_53380 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_53381 = (function(){throw inst_53380})();
var state_53514__$1 = state_53514;
var statearr_53559_56472 = state_53514__$1;
(statearr_53559_56472[(2)] = inst_53381);

(statearr_53559_56472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (28))){
var state_53514__$1 = state_53514;
var statearr_53566_56473 = state_53514__$1;
(statearr_53566_56473[(2)] = null);

(statearr_53566_56473[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (25))){
var inst_53447 = (state_53514[(15)]);
var inst_53432 = (state_53514[(18)]);
var inst_53446 = (state_53514[(17)]);
var inst_53445 = cljs.core.first(inst_53432);
var inst_53446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53445,(0),null);
var inst_53447__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53445,(1),null);
var inst_53449 = frontend.fs.sync.need_add_version_file_QMARK_(inst_53446__$1,inst_53447__$1);
var state_53514__$1 = (function (){var statearr_53567 = state_53514;
(statearr_53567[(15)] = inst_53447__$1);

(statearr_53567[(17)] = inst_53446__$1);

return statearr_53567;
})();
if(cljs.core.truth_(inst_53449)){
var statearr_53568_56474 = state_53514__$1;
(statearr_53568_56474[(1)] = (27));

} else {
var statearr_53569_56475 = state_53514__$1;
(statearr_53569_56475[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (34))){
var inst_53482 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_53483 = (function(){throw inst_53482})();
var state_53514__$1 = state_53514;
var statearr_53570_56476 = state_53514__$1;
(statearr_53570_56476[(2)] = inst_53483);

(statearr_53570_56476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (17))){
var inst_53468 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53571_56479 = state_53514__$1;
(statearr_53571_56479[(2)] = inst_53468);

(statearr_53571_56479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (3))){
var inst_53390 = cljs.core.first(filetxns);
var inst_53391 = inst_53390.updated_QMARK_;
var state_53514__$1 = state_53514;
if(cljs.core.truth_(inst_53391)){
var statearr_53572_56481 = state_53514__$1;
(statearr_53572_56481[(1)] = (9));

} else {
var statearr_53573_56482 = state_53514__$1;
(statearr_53573_56482[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (12))){
var inst_53396 = (state_53514[(24)]);
var inst_53401 = (state_53514[(2)]);
var inst_53406 = cljs.core.seq(inst_53396);
var inst_53407 = inst_53406;
var inst_53408 = null;
var inst_53409 = (0);
var inst_53410 = (0);
var state_53514__$1 = (function (){var statearr_53574 = state_53514;
(statearr_53574[(10)] = inst_53409);

(statearr_53574[(11)] = inst_53407);

(statearr_53574[(12)] = inst_53410);

(statearr_53574[(13)] = inst_53408);

(statearr_53574[(25)] = inst_53401);

return statearr_53574;
})();
var statearr_53575_56483 = state_53514__$1;
(statearr_53575_56483[(2)] = null);

(statearr_53575_56483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (2))){
var inst_53373 = cljs.core.first(filetxns);
var inst_53374 = inst_53373.from_path;
var inst_53375 = inst_53373.to_path;
var inst_53376 = cljs.core.count(filetxns);
var inst_53377 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_53376);
var state_53514__$1 = (function (){var statearr_53576 = state_53514;
(statearr_53576[(7)] = inst_53375);

(statearr_53576[(8)] = inst_53374);

return statearr_53576;
})();
if(inst_53377){
var statearr_53579_56488 = state_53514__$1;
(statearr_53579_56488[(1)] = (5));

} else {
var statearr_53580_56489 = state_53514__$1;
(statearr_53580_56489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (23))){
var inst_53466 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53583_56490 = state_53514__$1;
(statearr_53583_56490[(2)] = inst_53466);

(statearr_53583_56490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (35))){
var inst_53476 = (state_53514[(26)]);
var inst_53485 = (state_53514[(2)]);
var inst_53486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53487 = frontend.fs.sync.relative_path(inst_53476);
var inst_53488 = [inst_53487];
var inst_53489 = (new cljs.core.PersistentVector(null,1,(5),inst_53486,inst_53488,null));
var inst_53490 = frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53489);
var state_53514__$1 = (function (){var statearr_53589 = state_53514;
(statearr_53589[(27)] = inst_53485);

return statearr_53589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53514__$1,(36),inst_53490);
} else {
if((state_val_53515 === (19))){
var state_53514__$1 = state_53514;
var statearr_53591_56493 = state_53514__$1;
(statearr_53591_56493[(2)] = null);

(statearr_53591_56493[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (11))){
var inst_53509 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53592_56494 = state_53514__$1;
(statearr_53592_56494[(2)] = inst_53509);

(statearr_53592_56494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (9))){
var inst_53393 = (state_53514[(16)]);
var inst_53393__$1 = frontend.state.get_current_repo();
var inst_53394 = (function (){var repo = inst_53393__$1;
return (function (p1__53369_SHARP_){
if(frontend.fs.sync.is_journals_or_pages_QMARK_(p1__53369_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53369_SHARP_,(function (){var G__53594 = repo;
var G__53595 = frontend.config.get_file_path(repo,frontend.fs.sync.relative_path(p1__53369_SHARP_));
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(G__53594,G__53595) : frontend.db.get_file.call(null,G__53594,G__53595));
})()], null);
} else {
return null;
}
});
})();
var inst_53395 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_53394,filetxns);
var inst_53396 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,inst_53395);
var inst_53398 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns);
var inst_53399 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53398);
var state_53514__$1 = (function (){var statearr_53596 = state_53514;
(statearr_53596[(24)] = inst_53396);

(statearr_53596[(16)] = inst_53393__$1);

return statearr_53596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53514__$1,(12),inst_53399);
} else {
if((state_val_53515 === (5))){
var state_53514__$1 = state_53514;
var statearr_53597_56496 = state_53514__$1;
(statearr_53597_56496[(2)] = null);

(statearr_53597_56496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (14))){
var inst_53470 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53598_56497 = state_53514__$1;
(statearr_53598_56497[(2)] = inst_53470);

(statearr_53598_56497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (26))){
var inst_53463 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53599_56498 = state_53514__$1;
(statearr_53599_56498[(2)] = inst_53463);

(statearr_53599_56498[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (16))){
var inst_53407 = (state_53514[(11)]);
var inst_53432 = (state_53514[(18)]);
var inst_53432__$1 = cljs.core.seq(inst_53407);
var state_53514__$1 = (function (){var statearr_53600 = state_53514;
(statearr_53600[(18)] = inst_53432__$1);

return statearr_53600;
})();
if(inst_53432__$1){
var statearr_53601_56500 = state_53514__$1;
(statearr_53601_56500[(1)] = (21));

} else {
var statearr_53602_56501 = state_53514__$1;
(statearr_53602_56501[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (38))){
var inst_53493 = (state_53514[(22)]);
var state_53514__$1 = state_53514;
var statearr_53604_56502 = state_53514__$1;
(statearr_53604_56502[(2)] = inst_53493);

(statearr_53604_56502[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (30))){
var inst_53476 = cljs.core.first(filetxns);
var inst_53477 = cljs.core.count(filetxns);
var inst_53478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_53477);
var state_53514__$1 = (function (){var statearr_53605 = state_53514;
(statearr_53605[(26)] = inst_53476);

return statearr_53605;
})();
if(inst_53478){
var statearr_53606_56503 = state_53514__$1;
(statearr_53606_56503[(1)] = (33));

} else {
var statearr_53607_56504 = state_53514__$1;
(statearr_53607_56504[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (10))){
var inst_53472 = cljs.core.first(filetxns);
var inst_53473 = inst_53472.deleted_QMARK_;
var state_53514__$1 = state_53514;
if(cljs.core.truth_(inst_53473)){
var statearr_53610_56505 = state_53514__$1;
(statearr_53610_56505[(1)] = (30));

} else {
var statearr_53611_56506 = state_53514__$1;
(statearr_53611_56506[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (18))){
var inst_53420 = (state_53514[(19)]);
var inst_53393 = (state_53514[(16)]);
var inst_53419 = (state_53514[(20)]);
var inst_53423 = frontend.fs.sync.relative_path(inst_53419);
var inst_53424 = frontend.fs.sync.add_new_version_file(inst_53393,inst_53423,inst_53420);
var state_53514__$1 = state_53514;
var statearr_53615_56507 = state_53514__$1;
(statearr_53615_56507[(2)] = inst_53424);

(statearr_53615_56507[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (42))){
var inst_53504 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53621_56508 = state_53514__$1;
(statearr_53621_56508[(2)] = inst_53504);

(statearr_53621_56508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (37))){
var inst_53492 = (state_53514[(21)]);
var inst_53495 = cljs.core.ex_cause(inst_53492);
var inst_53496 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53495);
var inst_53497 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_53496,"No such file or directory");
var state_53514__$1 = state_53514;
var statearr_53626_56511 = state_53514__$1;
(statearr_53626_56511[(2)] = inst_53497);

(statearr_53626_56511[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53515 === (8))){
var inst_53388 = (state_53514[(2)]);
var state_53514__$1 = state_53514;
var statearr_53627_56512 = state_53514__$1;
(statearr_53627_56512[(2)] = inst_53388);

(statearr_53627_56512[(1)] = (4));


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
});
return (function() {
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0 = (function (){
var statearr_53628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53628[(0)] = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__);

(statearr_53628[(1)] = (1));

return statearr_53628;
});
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1 = (function (state_53514){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53514);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53629){var ex__27576__auto__ = e53629;
var statearr_53630_56515 = state_53514;
(statearr_53630_56515[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53514[(4)]))){
var statearr_53631_56516 = state_53514;
(statearr_53631_56516[(1)] = cljs.core.first((state_53514[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56517 = state_53514;
state_53514 = G__56517;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__ = function(state_53514){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1.call(this,state_53514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53632 = f__27596__auto__();
(statearr_53632[(6)] = c__27595__auto__);

return statearr_53632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});




/**
 * won't call update-graph-txid! when *txid is nil
 */
frontend.fs.sync.apply_filetxns_partitions = (function frontend$fs$sync$apply_filetxns_partitions(_STAR_sync_state,user_uuid,graph_uuid,base_path,filetxns_partitions,repo,_STAR_txid,_STAR_stopped,before_f,after_f){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53709){
var state_val_53710 = (state_53709[(1)]);
if((state_val_53710 === (7))){
var inst_53648 = (state_53709[(7)]);
var inst_53638 = (state_53709[(8)]);
var inst_53650 = (state_53709[(9)]);
var inst_53648__$1 = cljs.core.first(inst_53638);
var inst_53649 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_53648__$1);
var inst_53650__$1 = before_f;
var state_53709__$1 = (function (){var statearr_53711 = state_53709;
(statearr_53711[(7)] = inst_53648__$1);

(statearr_53711[(10)] = inst_53649);

(statearr_53711[(9)] = inst_53650__$1);

return statearr_53711;
})();
if(cljs.core.truth_(inst_53650__$1)){
var statearr_53712_56522 = state_53709__$1;
(statearr_53712_56522[(1)] = (10));

} else {
var statearr_53713_56523 = state_53709__$1;
(statearr_53713_56523[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (20))){
var inst_53649 = (state_53709[(10)]);
var inst_53670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__remove_current_remote__GT_local_files,inst_53649);
var state_53709__$1 = state_53709;
var statearr_53714_56525 = state_53709__$1;
(statearr_53714_56525[(2)] = inst_53670);

(statearr_53714_56525[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (27))){
var inst_53680 = (state_53709[(11)]);
var state_53709__$1 = state_53709;
var statearr_53715_56526 = state_53709__$1;
(statearr_53715_56526[(2)] = inst_53680);

(statearr_53715_56526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (1))){
var inst_53637 = filetxns_partitions;
var inst_53638 = inst_53637;
var state_53709__$1 = (function (){var statearr_53716 = state_53709;
(statearr_53716[(8)] = inst_53638);

return statearr_53716;
})();
var statearr_53717_56527 = state_53709__$1;
(statearr_53717_56527[(2)] = null);

(statearr_53717_56527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (24))){
var inst_53668 = (state_53709[(12)]);
var inst_53648 = (state_53709[(7)]);
var inst_53649 = (state_53709[(10)]);
var inst_53673 = (state_53709[(13)]);
var inst_53680 = (state_53709[(11)]);
var inst_53638 = (state_53709[(8)]);
var inst_53677 = (function (){var filetxns_partitions_STAR_ = inst_53638;
var filetxns = inst_53648;
var paths = inst_53649;
var _ = inst_53673;
var r = inst_53668;
return (function (p1__53636_SHARP_){
return p1__53636_SHARP_.txid;
});
})();
var inst_53678 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_53677,inst_53648);
var inst_53679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,inst_53678);
var inst_53680__$1 = after_f;
var state_53709__$1 = (function (){var statearr_53720 = state_53709;
(statearr_53720[(14)] = inst_53679);

(statearr_53720[(11)] = inst_53680__$1);

return statearr_53720;
})();
if(cljs.core.truth_(inst_53680__$1)){
var statearr_53721_56528 = state_53709__$1;
(statearr_53721_56528[(1)] = (26));

} else {
var statearr_53722_56529 = state_53709__$1;
(statearr_53722_56529[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (4))){
var inst_53642 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_53643 = [true];
var inst_53644 = cljs.core.PersistentHashMap.fromArrays(inst_53642,inst_53643);
var state_53709__$1 = state_53709;
var statearr_53723_56530 = state_53709__$1;
(statearr_53723_56530[(2)] = inst_53644);

(statearr_53723_56530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (15))){
var inst_53660 = (state_53709[(2)]);
var state_53709__$1 = (function (){var statearr_53727 = state_53709;
(statearr_53727[(15)] = inst_53660);

return statearr_53727;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_53728_56537 = state_53709__$1;
(statearr_53728_56537[(1)] = (16));

} else {
var statearr_53729_56538 = state_53709__$1;
(statearr_53729_56538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (21))){
var state_53709__$1 = state_53709;
var statearr_53730_56539 = state_53709__$1;
(statearr_53730_56539[(2)] = null);

(statearr_53730_56539[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (31))){
var inst_53690 = (state_53709[(2)]);
var state_53709__$1 = (function (){var statearr_53731 = state_53709;
(statearr_53731[(16)] = inst_53690);

return statearr_53731;
})();
if(cljs.core.truth_(_STAR_txid)){
var statearr_53732_56541 = state_53709__$1;
(statearr_53732_56541[(1)] = (32));

} else {
var statearr_53733_56542 = state_53709__$1;
(statearr_53733_56542[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (32))){
var inst_53679 = (state_53709[(14)]);
var inst_53692 = cljs.core.reset_BANG_(_STAR_txid,inst_53679);
var inst_53693 = frontend.fs.sync.update_graphs_txid_BANG_(inst_53679,graph_uuid,user_uuid,repo);
var state_53709__$1 = (function (){var statearr_53734 = state_53709;
(statearr_53734[(17)] = inst_53692);

return statearr_53734;
})();
var statearr_53735_56543 = state_53709__$1;
(statearr_53735_56543[(2)] = inst_53693);

(statearr_53735_56543[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (33))){
var state_53709__$1 = state_53709;
var statearr_53736_56544 = state_53709__$1;
(statearr_53736_56544[(2)] = null);

(statearr_53736_56544[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (13))){
var inst_53648 = (state_53709[(7)]);
var inst_53657 = (before_f.cljs$core$IFn$_invoke$arity$1 ? before_f.cljs$core$IFn$_invoke$arity$1(inst_53648) : before_f.call(null,inst_53648));
var state_53709__$1 = state_53709;
var statearr_53737_56545 = state_53709__$1;
(statearr_53737_56545[(2)] = inst_53657);

(statearr_53737_56545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (22))){
var inst_53668 = (state_53709[(12)]);
var inst_53673 = (state_53709[(2)]);
var inst_53674 = (inst_53668 instanceof cljs.core.ExceptionInfo);
var state_53709__$1 = (function (){var statearr_53739 = state_53709;
(statearr_53739[(13)] = inst_53673);

return statearr_53739;
})();
if(cljs.core.truth_(inst_53674)){
var statearr_53740_56546 = state_53709__$1;
(statearr_53740_56546[(1)] = (23));

} else {
var statearr_53741_56547 = state_53709__$1;
(statearr_53741_56547[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (29))){
var inst_53648 = (state_53709[(7)]);
var inst_53687 = (after_f.cljs$core$IFn$_invoke$arity$1 ? after_f.cljs$core$IFn$_invoke$arity$1(inst_53648) : after_f.call(null,inst_53648));
var state_53709__$1 = state_53709;
var statearr_53742_56549 = state_53709__$1;
(statearr_53742_56549[(2)] = inst_53687);

(statearr_53742_56549[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (6))){
var inst_53705 = (state_53709[(2)]);
var state_53709__$1 = state_53709;
var statearr_53743_56550 = state_53709__$1;
(statearr_53743_56550[(2)] = inst_53705);

(statearr_53743_56550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (28))){
var inst_53685 = (state_53709[(2)]);
var state_53709__$1 = state_53709;
if(cljs.core.truth_(inst_53685)){
var statearr_53744_56553 = state_53709__$1;
(statearr_53744_56553[(1)] = (29));

} else {
var statearr_53745_56554 = state_53709__$1;
(statearr_53745_56554[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (25))){
var inst_53700 = (state_53709[(2)]);
var state_53709__$1 = state_53709;
var statearr_53746_56555 = state_53709__$1;
(statearr_53746_56555[(2)] = inst_53700);

(statearr_53746_56555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (34))){
var inst_53638 = (state_53709[(8)]);
var inst_53696 = (state_53709[(2)]);
var inst_53697 = cljs.core.next(inst_53638);
var inst_53638__$1 = inst_53697;
var state_53709__$1 = (function (){var statearr_53747 = state_53709;
(statearr_53747[(18)] = inst_53696);

(statearr_53747[(8)] = inst_53638__$1);

return statearr_53747;
})();
var statearr_53750_56556 = state_53709__$1;
(statearr_53750_56556[(2)] = null);

(statearr_53750_56556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (17))){
var state_53709__$1 = state_53709;
var statearr_53751_56557 = state_53709__$1;
(statearr_53751_56557[(2)] = null);

(statearr_53751_56557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (3))){
var inst_53707 = (state_53709[(2)]);
var state_53709__$1 = state_53709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53709__$1,inst_53707);
} else {
if((state_val_53710 === (12))){
var inst_53655 = (state_53709[(2)]);
var state_53709__$1 = state_53709;
if(cljs.core.truth_(inst_53655)){
var statearr_53753_56562 = state_53709__$1;
(statearr_53753_56562[(1)] = (13));

} else {
var statearr_53754_56563 = state_53709__$1;
(statearr_53754_56563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (2))){
var inst_53640 = cljs.core.deref(_STAR_stopped);
var state_53709__$1 = state_53709;
if(cljs.core.truth_(inst_53640)){
var statearr_53755_56564 = state_53709__$1;
(statearr_53755_56564[(1)] = (4));

} else {
var statearr_53756_56565 = state_53709__$1;
(statearr_53756_56565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (23))){
var inst_53668 = (state_53709[(12)]);
var state_53709__$1 = state_53709;
var statearr_53758_56566 = state_53709__$1;
(statearr_53758_56566[(2)] = inst_53668);

(statearr_53758_56566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (19))){
var inst_53668 = (state_53709[(2)]);
var state_53709__$1 = (function (){var statearr_53759 = state_53709;
(statearr_53759[(12)] = inst_53668);

return statearr_53759;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_53760_56567 = state_53709__$1;
(statearr_53760_56567[(1)] = (20));

} else {
var statearr_53761_56568 = state_53709__$1;
(statearr_53761_56568[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (11))){
var inst_53650 = (state_53709[(9)]);
var state_53709__$1 = state_53709;
var statearr_53762_56569 = state_53709__$1;
(statearr_53762_56569[(2)] = inst_53650);

(statearr_53762_56569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (9))){
var inst_53703 = (state_53709[(2)]);
var state_53709__$1 = state_53709;
var statearr_53769_56574 = state_53709__$1;
(statearr_53769_56574[(2)] = inst_53703);

(statearr_53769_56574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (5))){
var inst_53638 = (state_53709[(8)]);
var inst_53646 = cljs.core.seq(inst_53638);
var state_53709__$1 = state_53709;
if(inst_53646){
var statearr_53770_56576 = state_53709__$1;
(statearr_53770_56576[(1)] = (7));

} else {
var statearr_53771_56577 = state_53709__$1;
(statearr_53771_56577[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (14))){
var state_53709__$1 = state_53709;
var statearr_53772_56578 = state_53709__$1;
(statearr_53772_56578[(2)] = null);

(statearr_53772_56578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (26))){
var inst_53682 = cljs.core.fn_QMARK_(after_f);
var state_53709__$1 = state_53709;
var statearr_53773_56579 = state_53709__$1;
(statearr_53773_56579[(2)] = inst_53682);

(statearr_53773_56579[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (16))){
var inst_53649 = (state_53709[(10)]);
var inst_53662 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__add_current_remote__GT_local_files,inst_53649);
var state_53709__$1 = state_53709;
var statearr_53774_56580 = state_53709__$1;
(statearr_53774_56580[(2)] = inst_53662);

(statearr_53774_56580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (30))){
var state_53709__$1 = state_53709;
var statearr_53776_56583 = state_53709__$1;
(statearr_53776_56583[(2)] = null);

(statearr_53776_56583[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (10))){
var inst_53652 = cljs.core.fn_QMARK_(before_f);
var state_53709__$1 = state_53709;
var statearr_53777_56585 = state_53709__$1;
(statearr_53777_56585[(2)] = inst_53652);

(statearr_53777_56585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53710 === (18))){
var inst_53648 = (state_53709[(7)]);
var inst_53665 = (state_53709[(2)]);
var inst_53666 = frontend.fs.sync.apply_filetxns(graph_uuid,base_path,inst_53648);
var state_53709__$1 = (function (){var statearr_53779 = state_53709;
(statearr_53779[(19)] = inst_53665);

return statearr_53779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53709__$1,(19),inst_53666);
} else {
if((state_val_53710 === (8))){
var state_53709__$1 = state_53709;
var statearr_53780_56587 = state_53709__$1;
(statearr_53780_56587[(2)] = null);

(statearr_53780_56587[(1)] = (9));


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
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0 = (function (){
var statearr_53783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53783[(0)] = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__);

(statearr_53783[(1)] = (1));

return statearr_53783;
});
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1 = (function (state_53709){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53709);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53784){var ex__27576__auto__ = e53784;
var statearr_53785_56590 = state_53709;
(statearr_53785_56590[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53709[(4)]))){
var statearr_53787_56591 = state_53709;
(statearr_53787_56591[(1)] = cljs.core.first((state_53709[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56592 = state_53709;
state_53709 = G__56592;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__ = function(state_53709){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1.call(this,state_53709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53791 = f__27596__auto__();
(statearr_53791[(6)] = c__27595__auto__);

return statearr_53791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.sync !== 'undefined') && (typeof frontend.fs.sync.need_sync_remote_QMARK_ !== 'undefined')){
} else {
frontend.fs.sync.need_sync_remote_QMARK_ = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53792 = cljs.core.get_global_hierarchy;
return (fexpr__53792.cljs$core$IFn$_invoke$arity$0 ? fexpr__53792.cljs$core$IFn$_invoke$arity$0() : fexpr__53792.call(null));
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
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"max","max",61366548),(function (_){
return true;
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"txid","txid",1606205478),(function (p__53793){
var vec__53794 = p__53793;
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53794,(0),null);
var remote__GT_local_syncer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53794,(1),null);
var remote_txid = txid;
var local_txid = remote__GT_local_syncer.txid;
return (((local_txid == null)) || ((remote_txid > local_txid)));
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"exceptional-response","exceptional-response",-71987345),(function (resp){
var data = cljs.core.ex_data(resp);
var cause = cljs.core.ex_cause(resp);
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
if(and__5041__auto__){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cause),"txid_to_validate");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((409),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
}
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chan","chan",-2103021695),(function (c){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53807){
var state_val_53808 = (state_53807[(1)]);
if((state_val_53808 === (1))){
var state_53807__$1 = state_53807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53807__$1,(2),c);
} else {
if((state_val_53808 === (2))){
var inst_53804 = (state_53807[(2)]);
var inst_53805 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_53804);
var state_53807__$1 = state_53807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53807__$1,inst_53805);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_53826 = [null,null,null,null,null,null,null];
(statearr_53826[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53826[(1)] = (1));

return statearr_53826;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53807){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53807);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53827){var ex__27576__auto__ = e53827;
var statearr_53828_56599 = state_53807;
(statearr_53828_56599[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53807[(4)]))){
var statearr_53829_56600 = state_53807;
(statearr_53829_56600[(1)] = cljs.core.first((state_53807[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56603 = state_53807;
state_53807 = G__56603;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53807){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53836 = f__27596__auto__();
(statearr_53836[(6)] = c__27595__auto__);

return statearr_53836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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

(frontend.fs.sync.FileChangeEvent.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/FileChangeEvent");
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
var G__53857 = e.type;
switch (G__53857) {
case "add":
case "change":
return new cljs.core.Keyword(null,"add-or-change","add-or-change",1006483131);

break;
case "unlink":
return new cljs.core.Keyword(null,"unlink","unlink",-1436843875);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53857)].join('')));

}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__53856_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,p1__53856_SHARP_);
})),cljs.core.cat);
});
frontend.fs.sync.local_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
/**
 * file-watcher callback
 */
frontend.fs.sync.file_watch_handler = (function frontend$fs$sync$file_watch_handler(type,p__53858){
var map__53859 = p__53858;
var map__53859__$1 = cljs.core.__destructure_map(map__53859);
var _payload = map__53859__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"_content","_content",-555820160));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
if(cljs.core.truth_((function (){var G__53860 = frontend.state.get_file_sync_state();
var G__53860__$1 = (((G__53860 == null))?null:(frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1(G__53860) : frontend.fs.sync.sync_state__stopped_QMARK_.call(null,G__53860)));
if((G__53860__$1 == null)){
return null;
} else {
return cljs.core.not(G__53860__$1);
}
})())){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53870){
var state_val_53871 = (state_53870[(1)]);
if((state_val_53871 === (1))){
var inst_53862 = frontend.fs.sync.__GT_FileChangeEvent(type,dir,path,stat);
var state_53870__$1 = state_53870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53870__$1,(2),frontend.fs.sync.local_changes_chan,inst_53862);
} else {
if((state_val_53871 === (2))){
var inst_53864 = (state_53870[(2)]);
var state_53870__$1 = state_53870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53870__$1,inst_53864);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0 = (function (){
var statearr_53879 = [null,null,null,null,null,null,null];
(statearr_53879[(0)] = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__);

(statearr_53879[(1)] = (1));

return statearr_53879;
});
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1 = (function (state_53870){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53870);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53892){var ex__27576__auto__ = e53892;
var statearr_53897_56620 = state_53870;
(statearr_53897_56620[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53870[(4)]))){
var statearr_53898_56622 = state_53870;
(statearr_53898_56622[(1)] = cljs.core.first((state_53870[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56623 = state_53870;
state_53870 = G__56623;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = function(state_53870){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1.call(this,state_53870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0;
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1;
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53900 = f__27596__auto__();
(statearr_53900[(6)] = c__27595__auto__);

return statearr_53900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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

var frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_56632 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.stop_remote__GT_local_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.stop_remote__GT_local_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemote->LocalSync.stop-remote->local!",this$);
}
}
});
frontend.fs.sync.stop_remote__GT_local_BANG_ = (function frontend$fs$sync$stop_remote__GT_local_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_56632(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_56634 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_remote__GT_local_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_remote__GT_local_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_56634(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_56642 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_remote__GT_local_all_files_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_remote__GT_local_all_files_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_56642(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.ILocal__GT_RemoteSync = function(){};

var frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_56645 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_ignore_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_ignore_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
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
return frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_56645(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_56652 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_monitored_dirs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_monitored_dirs["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.get-monitored-dirs",this$);
}
}
});
frontend.fs.sync.get_monitored_dirs = (function frontend$fs$sync$get_monitored_dirs(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_56652(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_56653 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.stop_local__GT_remote_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.stop_local__GT_remote_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.stop-local->remote!",this$);
}
}
});
frontend.fs.sync.stop_local__GT_remote_BANG_ = (function frontend$fs$sync$stop_local__GT_remote_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_56653(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_56655 = (function (this$,from_chan){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.ratelimit[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,from_chan) : m__5391__auto__.call(null,this$,from_chan));
} else {
var m__5389__auto__ = (frontend.fs.sync.ratelimit["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,from_chan) : m__5389__auto__.call(null,this$,from_chan));
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
return frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_56655(this$,from_chan);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_56659 = (function (this$,es){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_local__GT_remote_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,es) : m__5391__auto__.call(null,this$,es));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_local__GT_remote_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,es) : m__5389__auto__.call(null,this$,es));
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_56659(this$,es);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_56660 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_local__GT_remote_all_files_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_local__GT_remote_all_files_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_56660(this$);
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54051){
var state_val_54052 = (state_54051[(1)]);
if((state_val_54052 === (7))){
var inst_54031 = cljs.core.deref(self__._STAR_stopped);
var state_54051__$1 = state_54051;
if(cljs.core.truth_(inst_54031)){
var statearr_54053_56665 = state_54051__$1;
(statearr_54053_56665[(1)] = (9));

} else {
var statearr_54054_56666 = state_54051__$1;
(statearr_54054_56666[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (1))){
var inst_54003 = (state_54051[(7)]);
var inst_54002 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),self__.graph_uuid,self__.user_uuid);
var inst_54003__$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_54002,relative_filepaths);
var inst_54004 = cljs.core.flatten(inst_54003__$1);
var inst_54005 = cljs.core.empty_QMARK_(inst_54004);
var state_54051__$1 = (function (){var statearr_54055 = state_54051;
(statearr_54055[(7)] = inst_54003__$1);

return statearr_54055;
})();
if(inst_54005){
var statearr_54056_56669 = state_54051__$1;
(statearr_54056_56669[(1)] = (2));

} else {
var statearr_54057_56670 = state_54051__$1;
(statearr_54057_56670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (4))){
var inst_54017 = (state_54051[(8)]);
var inst_54017__$1 = (state_54051[(2)]);
var inst_54018 = (inst_54017__$1 instanceof cljs.core.ExceptionInfo);
var state_54051__$1 = (function (){var statearr_54058 = state_54051;
(statearr_54058[(8)] = inst_54017__$1);

return statearr_54058;
})();
if(cljs.core.truth_(inst_54018)){
var statearr_54060_56671 = state_54051__$1;
(statearr_54060_56671[(1)] = (6));

} else {
var statearr_54061_56672 = state_54051__$1;
(statearr_54061_56672[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (13))){
var state_54051__$1 = state_54051;
var statearr_54064_56673 = state_54051__$1;
(statearr_54064_56673[(2)] = null);

(statearr_54064_56673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (6))){
var inst_54017 = (state_54051[(8)]);
var inst_54020 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_54024 = [inst_54017];
var inst_54029 = cljs.core.PersistentHashMap.fromArrays(inst_54020,inst_54024);
var state_54051__$1 = state_54051;
var statearr_54065_56674 = state_54051__$1;
(statearr_54065_56674[(2)] = inst_54029);

(statearr_54065_56674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (3))){
var inst_54003 = (state_54051[(7)]);
var inst_54012 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_54003,self__.repo,null,self__._STAR_stopped,null,null);
var state_54051__$1 = state_54051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54051__$1,(5),inst_54012);
} else {
if((state_val_54052 === (12))){
var inst_54038 = frontend.fs.sync.update_graphs_txid_BANG_(latest_txid,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_54039 = cljs.core.reset_BANG_(self__._STAR_txid,latest_txid);
var inst_54040 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54041 = [true];
var inst_54042 = cljs.core.PersistentHashMap.fromArrays(inst_54040,inst_54041);
var state_54051__$1 = (function (){var statearr_54066 = state_54051;
(statearr_54066[(9)] = inst_54038);

(statearr_54066[(10)] = inst_54039);

return statearr_54066;
})();
var statearr_54067_56677 = state_54051__$1;
(statearr_54067_56677[(2)] = inst_54042);

(statearr_54067_56677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (2))){
var inst_54008 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54009 = [true];
var inst_54010 = cljs.core.PersistentHashMap.fromArrays(inst_54008,inst_54009);
var state_54051__$1 = state_54051;
var statearr_54070_56679 = state_54051__$1;
(statearr_54070_56679[(2)] = inst_54010);

(statearr_54070_56679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (11))){
var inst_54047 = (state_54051[(2)]);
var state_54051__$1 = state_54051;
var statearr_54071_56680 = state_54051__$1;
(statearr_54071_56680[(2)] = inst_54047);

(statearr_54071_56680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (9))){
var inst_54033 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54034 = [true];
var inst_54035 = cljs.core.PersistentHashMap.fromArrays(inst_54033,inst_54034);
var state_54051__$1 = state_54051;
var statearr_54072_56682 = state_54051__$1;
(statearr_54072_56682[(2)] = inst_54035);

(statearr_54072_56682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (5))){
var inst_54015 = (state_54051[(2)]);
var state_54051__$1 = state_54051;
var statearr_54073_56683 = state_54051__$1;
(statearr_54073_56683[(2)] = inst_54015);

(statearr_54073_56683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (14))){
var inst_54045 = (state_54051[(2)]);
var state_54051__$1 = state_54051;
var statearr_54074_56684 = state_54051__$1;
(statearr_54074_56684[(2)] = inst_54045);

(statearr_54074_56684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (10))){
var state_54051__$1 = state_54051;
var statearr_54075_56685 = state_54051__$1;
(statearr_54075_56685[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54052 === (8))){
var inst_54049 = (state_54051[(2)]);
var state_54051__$1 = state_54051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54051__$1,inst_54049);
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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54077[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54077[(1)] = (1));

return statearr_54077;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54051){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54051);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54078){var ex__27576__auto__ = e54078;
var statearr_54079_56687 = state_54051;
(statearr_54079_56687[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54051[(4)]))){
var statearr_54080_56688 = state_54051;
(statearr_54080_56688[(1)] = cljs.core.first((state_54051[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56690 = state_54051;
state_54051 = G__56690;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54051){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54081 = f__27596__auto__();
(statearr_54081[(6)] = c__27595__auto__);

return statearr_54081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k53997,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__54082 = k53997;
var G__54082__$1 = (((G__54082 instanceof cljs.core.Keyword))?G__54082.fqn:null);
switch (G__54082__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53997,else__5343__auto__);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__54083){
var vec__54084 = p__54083;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54084,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54084,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54174){
var state_val_54175 = (state_54174[(1)]);
if((state_val_54175 === (7))){
var inst_54099 = (state_54174[(7)]);
var inst_54103 = (inst_54099 - (1));
var inst_54104 = cljs.core.deref(self__._STAR_txid);
var inst_54105 = (inst_54103 > inst_54104);
var state_54174__$1 = state_54174;
var statearr_54176_56698 = state_54174__$1;
(statearr_54176_56698[(2)] = inst_54105);

(statearr_54176_56698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (20))){
var inst_54151 = cljs.core.deref(self__._STAR_stopped);
var state_54174__$1 = state_54174;
if(cljs.core.truth_(inst_54151)){
var statearr_54177_56699 = state_54174__$1;
(statearr_54177_56699[(1)] = (22));

} else {
var statearr_54178_56700 = state_54174__$1;
(statearr_54178_56700[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (27))){
var inst_54168 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54179_56703 = state_54174__$1;
(statearr_54179_56703[(2)] = inst_54168);

(statearr_54179_56703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (1))){
var inst_54087 = cljs.core.deref(self__._STAR_txid);
var inst_54088 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(null,self__.graph_uuid,inst_54087);
var state_54174__$1 = state_54174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54174__$1,(2),inst_54088);
} else {
if((state_val_54175 === (24))){
var inst_54170 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54180_56704 = state_54174__$1;
(statearr_54180_56704[(2)] = inst_54170);

(statearr_54180_56704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (4))){
var inst_54090 = (state_54174[(8)]);
var inst_54099 = (state_54174[(7)]);
var inst_54100 = (state_54174[(9)]);
var inst_54097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54090,(0),null);
var inst_54098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54090,(1),null);
var inst_54099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54090,(2),null);
var inst_54100__$1 = (inst_54099__$1 == null);
var state_54174__$1 = (function (){var statearr_54182 = state_54174;
(statearr_54182[(7)] = inst_54099__$1);

(statearr_54182[(10)] = inst_54098);

(statearr_54182[(9)] = inst_54100__$1);

(statearr_54182[(11)] = inst_54097);

return statearr_54182;
})();
if(cljs.core.truth_(inst_54100__$1)){
var statearr_54183_56706 = state_54174__$1;
(statearr_54183_56706[(1)] = (6));

} else {
var statearr_54184_56707 = state_54174__$1;
(statearr_54184_56707[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (15))){
var inst_54098 = (state_54174[(10)]);
var inst_54127 = frontend.fs.sync.update_graphs_txid_BANG_(inst_54098,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_54128 = cljs.core.reset_BANG_(self__._STAR_txid,inst_54098);
var inst_54129 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54130 = [true];
var inst_54131 = cljs.core.PersistentHashMap.fromArrays(inst_54129,inst_54130);
var state_54174__$1 = (function (){var statearr_54186 = state_54174;
(statearr_54186[(12)] = inst_54127);

(statearr_54186[(13)] = inst_54128);

return statearr_54186;
})();
var statearr_54187_56711 = state_54174__$1;
(statearr_54187_56711[(2)] = inst_54131);

(statearr_54187_56711[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (21))){
var inst_54172 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54174__$1,inst_54172);
} else {
if((state_val_54175 === (13))){
var state_54174__$1 = state_54174;
var statearr_54188_56714 = state_54174__$1;
(statearr_54188_56714[(2)] = null);

(statearr_54188_56714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (22))){
var inst_54153 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54154 = [true];
var inst_54155 = cljs.core.PersistentHashMap.fromArrays(inst_54153,inst_54154);
var state_54174__$1 = state_54174;
var statearr_54189_56716 = state_54174__$1;
(statearr_54189_56716[(2)] = inst_54155);

(statearr_54189_56716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (29))){
var state_54174__$1 = state_54174;
var statearr_54190_56717 = state_54174__$1;
(statearr_54190_56717[(2)] = null);

(statearr_54190_56717[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (6))){
var inst_54100 = (state_54174[(9)]);
var state_54174__$1 = state_54174;
var statearr_54191_56718 = state_54174__$1;
(statearr_54191_56718[(2)] = inst_54100);

(statearr_54191_56718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (28))){
var inst_54161 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54162 = [true];
var inst_54163 = cljs.core.PersistentHashMap.fromArrays(inst_54161,inst_54162);
var state_54174__$1 = state_54174;
var statearr_54192_56719 = state_54174__$1;
(statearr_54192_56719[(2)] = inst_54163);

(statearr_54192_56719[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (25))){
var inst_54144 = (state_54174[(14)]);
var state_54174__$1 = state_54174;
var statearr_54193_56740 = state_54174__$1;
(statearr_54193_56740[(2)] = inst_54144);

(statearr_54193_56740[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (17))){
var inst_54137 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54194_56741 = state_54174__$1;
(statearr_54194_56741[(2)] = inst_54137);

(statearr_54194_56741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (3))){
var inst_54090 = (state_54174[(8)]);
var state_54174__$1 = state_54174;
var statearr_54195_56742 = state_54174__$1;
(statearr_54195_56742[(2)] = inst_54090);

(statearr_54195_56742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (12))){
var inst_54090 = (state_54174[(8)]);
var inst_54123 = (state_54174[(15)]);
var inst_54099 = (state_54174[(7)]);
var inst_54098 = (state_54174[(10)]);
var inst_54097 = (state_54174[(11)]);
var inst_54117 = frontend.fs.sync.diffs__GT_partitioned_filetxns((10));
var inst_54118 = (function (){var diff_r = inst_54090;
var vec__54094 = inst_54090;
var diff_txns = inst_54097;
var latest_txid = inst_54098;
var min_txid = inst_54099;
return (function (r,i){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.reverse(i));
});
})();
var inst_54119 = cljs.core.completing.cljs$core$IFn$_invoke$arity$1(inst_54118);
var inst_54121 = cljs.core.List.EMPTY;
var inst_54122 = cljs.core.reverse(inst_54097);
var inst_54123__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(inst_54117,inst_54119,inst_54121,inst_54122);
var inst_54124 = cljs.core.flatten(inst_54123__$1);
var inst_54125 = cljs.core.empty_QMARK_(inst_54124);
var state_54174__$1 = (function (){var statearr_54196 = state_54174;
(statearr_54196[(15)] = inst_54123__$1);

return statearr_54196;
})();
if(inst_54125){
var statearr_54197_56744 = state_54174__$1;
(statearr_54197_56744[(1)] = (15));

} else {
var statearr_54198_56745 = state_54174__$1;
(statearr_54198_56745[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (2))){
var inst_54090 = (state_54174[(8)]);
var inst_54090__$1 = (state_54174[(2)]);
var inst_54091 = (inst_54090__$1 instanceof cljs.core.ExceptionInfo);
var state_54174__$1 = (function (){var statearr_54199 = state_54174;
(statearr_54199[(8)] = inst_54090__$1);

return statearr_54199;
})();
if(cljs.core.truth_(inst_54091)){
var statearr_54200_56746 = state_54174__$1;
(statearr_54200_56746[(1)] = (3));

} else {
var statearr_54203_56747 = state_54174__$1;
(statearr_54203_56747[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (23))){
var inst_54144 = (state_54174[(14)]);
var inst_54157 = new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586).cljs$core$IFn$_invoke$arity$1(inst_54144);
var state_54174__$1 = state_54174;
if(cljs.core.truth_(inst_54157)){
var statearr_54204_56748 = state_54174__$1;
(statearr_54204_56748[(1)] = (25));

} else {
var statearr_54205_56749 = state_54174__$1;
(statearr_54205_56749[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (19))){
var inst_54144 = (state_54174[(14)]);
var inst_54147 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_54148 = [inst_54144];
var inst_54149 = cljs.core.PersistentHashMap.fromArrays(inst_54147,inst_54148);
var state_54174__$1 = state_54174;
var statearr_54213_56750 = state_54174__$1;
(statearr_54213_56750[(2)] = inst_54149);

(statearr_54213_56750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (11))){
var inst_54142 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54217_56751 = state_54174__$1;
(statearr_54217_56751[(2)] = inst_54142);

(statearr_54217_56751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (9))){
var inst_54099 = (state_54174[(7)]);
var inst_54109 = cljs.core.deref(self__._STAR_txid);
var inst_54110 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["min-txid",inst_54099,"request-txid",inst_54109], 0));
var inst_54111 = [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586)];
var inst_54112 = [true];
var inst_54113 = cljs.core.PersistentHashMap.fromArrays(inst_54111,inst_54112);
var state_54174__$1 = (function (){var statearr_54230 = state_54174;
(statearr_54230[(16)] = inst_54110);

return statearr_54230;
})();
var statearr_54234_56752 = state_54174__$1;
(statearr_54234_56752[(2)] = inst_54113);

(statearr_54234_56752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (5))){
var inst_54144 = (state_54174[(14)]);
var inst_54144__$1 = (state_54174[(2)]);
var inst_54145 = (inst_54144__$1 instanceof cljs.core.ExceptionInfo);
var state_54174__$1 = (function (){var statearr_54236 = state_54174;
(statearr_54236[(14)] = inst_54144__$1);

return statearr_54236;
})();
if(cljs.core.truth_(inst_54145)){
var statearr_54241_56753 = state_54174__$1;
(statearr_54241_56753[(1)] = (19));

} else {
var statearr_54244_56754 = state_54174__$1;
(statearr_54244_56754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (14))){
var inst_54140 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54249_56758 = state_54174__$1;
(statearr_54249_56758[(2)] = inst_54140);

(statearr_54249_56758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (26))){
var state_54174__$1 = state_54174;
var statearr_54252_56759 = state_54174__$1;
(statearr_54252_56759[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (16))){
var inst_54123 = (state_54174[(15)]);
var inst_54133 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_54123,self__.repo,self__._STAR_txid,self__._STAR_stopped,null,null);
var state_54174__$1 = state_54174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54174__$1,(18),inst_54133);
} else {
if((state_val_54175 === (30))){
var inst_54166 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54257_56760 = state_54174__$1;
(statearr_54257_56760[(2)] = inst_54166);

(statearr_54257_56760[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (10))){
var inst_54098 = (state_54174[(10)]);
var inst_54115 = cljs.core.pos_int_QMARK_(inst_54098);
var state_54174__$1 = state_54174;
if(inst_54115){
var statearr_54263_56761 = state_54174__$1;
(statearr_54263_56761[(1)] = (12));

} else {
var statearr_54264_56762 = state_54174__$1;
(statearr_54264_56762[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (18))){
var inst_54135 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
var statearr_54271_56763 = state_54174__$1;
(statearr_54271_56763[(2)] = inst_54135);

(statearr_54271_56763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54175 === (8))){
var inst_54107 = (state_54174[(2)]);
var state_54174__$1 = state_54174;
if(cljs.core.truth_(inst_54107)){
var statearr_54274_56764 = state_54174__$1;
(statearr_54274_56764[(1)] = (9));

} else {
var statearr_54275_56765 = state_54174__$1;
(statearr_54275_56765[(1)] = (10));

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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54283[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54283[(1)] = (1));

return statearr_54283;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54174){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54174);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54289){var ex__27576__auto__ = e54289;
var statearr_54290_56766 = state_54174;
(statearr_54290_56766[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54174[(4)]))){
var statearr_54291_56767 = state_54174;
(statearr_54291_56767[(1)] = cljs.core.first((state_54174[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56768 = state_54174;
state_54174 = G__56768;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54174){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54293 = f__27596__auto__();
(statearr_54293[(6)] = c__27595__auto__);

return statearr_54293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54312){
var state_val_54313 = (state_54312[(1)]);
if((state_val_54313 === (1))){
var inst_54294 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_54295 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_54312__$1 = (function (){var statearr_54315 = state_54312;
(statearr_54315[(7)] = inst_54295);

return statearr_54315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54312__$1,(2),inst_54294);
} else {
if((state_val_54313 === (2))){
var inst_54295 = (state_54312[(7)]);
var inst_54297 = (state_54312[(2)]);
var state_54312__$1 = (function (){var statearr_54316 = state_54312;
(statearr_54316[(8)] = inst_54297);

return statearr_54316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54312__$1,(3),inst_54295);
} else {
if((state_val_54313 === (3))){
var inst_54297 = (state_54312[(8)]);
var inst_54299 = (state_54312[(2)]);
var inst_54300 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_54297,inst_54299);
var inst_54301 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_54312__$1 = (function (){var statearr_54317 = state_54312;
(statearr_54317[(9)] = inst_54300);

return statearr_54317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54312__$1,(4),inst_54301);
} else {
if((state_val_54313 === (4))){
var inst_54300 = (state_54312[(9)]);
var inst_54303 = (state_54312[(2)]);
var inst_54304 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_54303);
var inst_54305 = cljs.core.count(inst_54300);
var inst_54306 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(remote->local)]",inst_54305,"files need to sync"], 0));
var inst_54307 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_54300);
var inst_54308 = this$__$1.sync_files_remote__GT_local_BANG_(inst_54307,inst_54304);
var state_54312__$1 = (function (){var statearr_54319 = state_54312;
(statearr_54319[(10)] = inst_54306);

return statearr_54319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54312__$1,(5),inst_54308);
} else {
if((state_val_54313 === (5))){
var inst_54310 = (state_54312[(2)]);
var state_54312__$1 = state_54312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54312__$1,inst_54310);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54328[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54328[(1)] = (1));

return statearr_54328;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54312){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54312);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54334){var ex__27576__auto__ = e54334;
var statearr_54335_56769 = state_54312;
(statearr_54335_56769[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54312[(4)]))){
var statearr_54336_56770 = state_54312;
(statearr_54336_56770[(1)] = cljs.core.first((state_54312[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56771 = state_54312;
state_54312 = G__56771;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54312){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54337 = f__27596__auto__();
(statearr_54337[(6)] = c__27595__auto__);

return statearr_54337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.sync.Remote->LocalSyncer{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),self__._STAR_stopped],null))], null),self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53996){
var self__ = this;
var G__53996__$1 = this;
return (new cljs.core.RecordIter((0),G__53996__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1517379967 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53998,other53999){
var self__ = this;
var this53998__$1 = this;
return (((!((other53999 == null)))) && ((((this53998__$1.constructor === other53999.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1.user_uuid,other53999.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1.graph_uuid,other53999.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1.base_path,other53999.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1.repo,other53999.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1._STAR_txid,other53999._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1._STAR_sync_state,other53999._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1.local__GT_remote_syncer,other53999.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1._STAR_stopped,other53999._STAR_stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53998__$1.__extmap,other53999.__extmap)))))))))))))))))))));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),null,new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k53997){
var self__ = this;
var this__5347__auto____$1 = this;
var G__54359 = k53997;
var G__54359__$1 = (((G__54359 instanceof cljs.core.Keyword))?G__54359.fqn:null);
switch (G__54359__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k53997);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__53996){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__54360 = cljs.core.keyword_identical_QMARK_;
var expr__54361 = k__5349__auto__;
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(G__53996,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,G__53996,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,G__53996,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__53996,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__53996,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,G__53996,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,G__53996,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54360.cljs$core$IFn$_invoke$arity$2 ? pred__54360.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__54361) : pred__54360.call(null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__54361)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__53996,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__53996),null));
}
}
}
}
}
}
}
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),self__._STAR_stopped,null))], null),self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__53996){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,G__53996,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-uuid","user-uuid",1364577479,null),new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"repo","repo",-358529152,null),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"local->remote-syncer","local->remote-syncer",195649351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*stopped","*stopped",-1398093184,null)], null);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$type = true);

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/Remote->LocalSyncer",null,(1),null));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.sync/Remote->LocalSyncer");
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
frontend.fs.sync.map__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$map__GT_Remote__GT_LocalSyncer(G__54000){
var extmap__5382__auto__ = (function (){var G__54368 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54000,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], 0));
if(cljs.core.record_QMARK_(G__54000)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54368);
} else {
return G__54368;
}
})();
return (new frontend.fs.sync.Remote__GT_LocalSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__54000),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__54000),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__54000),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__54000),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__54000),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__54000),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__54000),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585).cljs$core$IFn$_invoke$arity$1(G__54000),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

/**
 * return true when file changed compared with remote
 */
frontend.fs.sync.file_changed_QMARK_ = (function frontend$fs$sync$file_changed_QMARK_(graph_uuid,file_path_without_base_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54387){
var state_val_54388 = (state_54387[(1)]);
if((state_val_54388 === (1))){
var inst_54371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54372 = [file_path_without_base_path];
var inst_54373 = (new cljs.core.PersistentVector(null,1,(5),inst_54371,inst_54372,null));
var inst_54374 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(null,graph_uuid,inst_54373);
var state_54387__$1 = state_54387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54387__$1,(2),inst_54374);
} else {
if((state_val_54388 === (2))){
var inst_54376 = (state_54387[(2)]);
var inst_54377 = cljs.core.first(inst_54376);
var inst_54378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54379 = [file_path_without_base_path];
var inst_54380 = (new cljs.core.PersistentVector(null,1,(5),inst_54378,inst_54379,null));
var inst_54381 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_54380);
var state_54387__$1 = (function (){var statearr_54395 = state_54387;
(statearr_54395[(7)] = inst_54377);

return statearr_54395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54387__$1,(3),inst_54381);
} else {
if((state_val_54388 === (3))){
var inst_54377 = (state_54387[(7)]);
var inst_54383 = (state_54387[(2)]);
var inst_54384 = cljs.core.first(inst_54383);
var inst_54385 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_54377,inst_54384);
var state_54387__$1 = state_54387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54387__$1,inst_54385);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_54396 = [null,null,null,null,null,null,null,null];
(statearr_54396[(0)] = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__);

(statearr_54396[(1)] = (1));

return statearr_54396;
});
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1 = (function (state_54387){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54387);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54397){var ex__27576__auto__ = e54397;
var statearr_54398_56782 = state_54387;
(statearr_54398_56782[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54387[(4)]))){
var statearr_54399_56783 = state_54387;
(statearr_54399_56783[(1)] = cljs.core.first((state_54387[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56784 = state_54387;
state_54387 = G__56784;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = function(state_54387){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1.call(this,state_54387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54400 = f__27596__auto__();
(statearr_54400[(6)] = c__27595__auto__);

return statearr_54400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.local_file_exists_QMARK_ = (function frontend$fs$sync$local_file_exists_QMARK_(relative_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54410){
var state_val_54411 = (state_54410[(1)]);
if((state_val_54411 === (1))){
var inst_54401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54402 = [relative_path];
var inst_54403 = (new cljs.core.PersistentVector(null,1,(5),inst_54401,inst_54402,null));
var inst_54404 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,inst_54403);
var state_54410__$1 = state_54410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54410__$1,(2),inst_54404);
} else {
if((state_val_54411 === (2))){
var inst_54406 = (state_54410[(2)]);
var inst_54407 = cljs.core.ex_cause(inst_54406);
var inst_54408 = (inst_54407 == null);
var state_54410__$1 = state_54410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54410__$1,inst_54408);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_54412 = [null,null,null,null,null,null,null];
(statearr_54412[(0)] = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__);

(statearr_54412[(1)] = (1));

return statearr_54412;
});
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1 = (function (state_54410){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54410);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54413){var ex__27576__auto__ = e54413;
var statearr_54414_56786 = state_54410;
(statearr_54414_56786[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54410[(4)]))){
var statearr_54415_56787 = state_54410;
(statearr_54415_56787[(1)] = cljs.core.first((state_54410[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56789 = state_54410;
state_54410 = G__56789;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = function(state_54410){
switch(arguments.length){
case 0:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1.call(this,state_54410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54416 = f__27596__auto__();
(statearr_54416[(6)] = c__27595__auto__);

return statearr_54416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.contains_path_QMARK_ = (function frontend$fs$sync$contains_path_QMARK_(regexps,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54419_SHARP_,p2__54418_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(p2__54418_SHARP_,path))){
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
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54456){
var state_val_54457 = (state_54456[(1)]);
if((state_val_54457 === (7))){
var inst_54438 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54459_56790 = state_54456__$1;
(statearr_54459_56790[(2)] = inst_54438);

(statearr_54459_56790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (1))){
var inst_54420 = frontend.fs.sync.relative_path(e);
var inst_54451 = e.type;
var state_54456__$1 = (function (){var statearr_54460 = state_54456;
(statearr_54460[(7)] = inst_54420);

return statearr_54460;
})();
var G__54461_56791 = inst_54451;
switch (G__54461_56791) {
case "unlink":
var statearr_54462_56793 = state_54456__$1;
(statearr_54462_56793[(1)] = (3));


break;
case "add":
case "change":
var statearr_54464_56794 = state_54456__$1;
(statearr_54464_56794[(1)] = (8));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54461_56791)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (4))){
var inst_54430 = (state_54456[(8)]);
var inst_54430__$1 = (state_54456[(2)]);
var inst_54433 = (inst_54430__$1 == null);
var state_54456__$1 = (function (){var statearr_54468 = state_54456;
(statearr_54468[(8)] = inst_54430__$1);

return statearr_54468;
})();
if(cljs.core.truth_(inst_54433)){
var statearr_54469_56797 = state_54456__$1;
(statearr_54469_56797[(1)] = (5));

} else {
var statearr_54470_56798 = state_54456__$1;
(statearr_54470_56798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (13))){
var inst_54446 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54471_56799 = state_54456__$1;
(statearr_54471_56799[(2)] = inst_54446);

(statearr_54471_56799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (6))){
var inst_54430 = (state_54456[(8)]);
var inst_54436 = cljs.core.ex_cause(inst_54430);
var state_54456__$1 = state_54456;
var statearr_54472_56800 = state_54456__$1;
(statearr_54472_56800[(2)] = inst_54436);

(statearr_54472_56800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (3))){
var inst_54420 = (state_54456[(7)]);
var inst_54425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54426 = [inst_54420];
var inst_54427 = (new cljs.core.PersistentVector(null,1,(5),inst_54425,inst_54426,null));
var inst_54428 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",basepath,inst_54427);
var state_54456__$1 = state_54456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54456__$1,(4),inst_54428);
} else {
if((state_val_54457 === (12))){
var inst_54449 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54473_56801 = state_54456__$1;
(statearr_54473_56801[(2)] = inst_54449);

(statearr_54473_56801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (2))){
var inst_54453 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54456__$1,inst_54453);
} else {
if((state_val_54457 === (11))){
var inst_54442 = (state_54456[(9)]);
var state_54456__$1 = state_54456;
var statearr_54474_56802 = state_54456__$1;
(statearr_54474_56802[(2)] = inst_54442);

(statearr_54474_56802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (9))){
var inst_54442 = (state_54456[(9)]);
var inst_54442__$1 = (state_54456[(2)]);
var state_54456__$1 = (function (){var statearr_54475 = state_54456;
(statearr_54475[(9)] = inst_54442__$1);

return statearr_54475;
})();
if(cljs.core.truth_(inst_54442__$1)){
var statearr_54476_56804 = state_54456__$1;
(statearr_54476_56804[(1)] = (10));

} else {
var statearr_54477_56805 = state_54456__$1;
(statearr_54477_56805[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (5))){
var state_54456__$1 = state_54456;
var statearr_54478_56806 = state_54456__$1;
(statearr_54478_56806[(2)] = null);

(statearr_54478_56806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (10))){
var inst_54420 = (state_54456[(7)]);
var inst_54444 = frontend.fs.sync.file_changed_QMARK_(graph_uuid,inst_54420,basepath);
var state_54456__$1 = state_54456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54456__$1,(13),inst_54444);
} else {
if((state_val_54457 === (8))){
var inst_54420 = (state_54456[(7)]);
var inst_54440 = frontend.fs.sync.local_file_exists_QMARK_(inst_54420,basepath);
var state_54456__$1 = state_54456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54456__$1,(9),inst_54440);
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
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0 = (function (){
var statearr_54480 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54480[(0)] = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__);

(statearr_54480[(1)] = (1));

return statearr_54480;
});
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1 = (function (state_54456){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54456);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54481){var ex__27576__auto__ = e54481;
var statearr_54482_56810 = state_54456;
(statearr_54482_56810[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54456[(4)]))){
var statearr_54483_56811 = state_54456;
(statearr_54483_56811[(1)] = cljs.core.first((state_54456[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56812 = state_54456;
state_54456 = G__56812;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__ = function(state_54456){
switch(arguments.length){
case 0:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1.call(this,state_54456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0;
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1;
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54484 = f__27596__auto__();
(statearr_54484[(6)] = c__27595__auto__);

return statearr_54484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
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
var and__5041__auto__ = (e instanceof frontend.fs.sync.FileChangeEvent);
if(and__5041__auto__){
var and__5041__auto____$1 = clojure.string.starts_with_QMARK_(e.dir,self__.base_path);
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null),frontend.fs.sync.relative_path(e)));
if(and__5041__auto____$2){
return frontend.fs.sync.contains_path_QMARK_(this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null),frontend.fs.sync.relative_path(e));
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k54490,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__54494 = k54490;
var G__54494__$1 = (((G__54494 instanceof cljs.core.Keyword))?G__54494.fqn:null);
switch (G__54494__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54490,else__5343__auto__);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__54495){
var vec__54496 = p__54495;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54496,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [/logseq\/\.recycle\/.*/,null,/logseq\/graphs-txid.edn$/,null,/version-files\/.*/,null,/logseq\/bak\/.*/,null,/\.DS_Store$/,null], null), null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [/^logseq\//,null,/^assets\//,null,/^journals\//,null,/^pages\//,null], null), null);
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
var c__27595__auto___56819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54607){
var state_val_54608 = (state_54607[(1)]);
if((state_val_54608 === (7))){
var inst_54554 = (state_54607[(2)]);
var inst_54555 = cljs.core.__destructure_map(inst_54554);
var inst_54556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54555,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_54557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54555,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_54558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54555,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_54607__$1 = (function (){var statearr_54609 = state_54607;
(statearr_54609[(7)] = inst_54556);

(statearr_54609[(8)] = inst_54557);

return statearr_54609;
})();
if(cljs.core.truth_(inst_54558)){
var statearr_54610_56820 = state_54607__$1;
(statearr_54610_56820[(1)] = (17));

} else {
var statearr_54611_56821 = state_54607__$1;
(statearr_54611_56821[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (20))){
var inst_54502 = (state_54607[(9)]);
var inst_54563 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_54502,false);
var inst_54564 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,null);
var inst_54565 = cljs.core.async.timeout(self__.rate);
var inst_54566 = cljs.core.PersistentVector.EMPTY;
var inst_54501 = inst_54565;
var inst_54502__$1 = inst_54566;
var state_54607__$1 = (function (){var statearr_54612 = state_54607;
(statearr_54612[(9)] = inst_54502__$1);

(statearr_54612[(10)] = inst_54563);

(statearr_54612[(11)] = inst_54564);

(statearr_54612[(12)] = inst_54501);

return statearr_54612;
})();
var statearr_54613_56823 = state_54607__$1;
(statearr_54613_56823[(2)] = null);

(statearr_54613_56823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (27))){
var inst_54572 = (state_54607[(13)]);
var state_54607__$1 = state_54607;
var statearr_54614_56824 = state_54607__$1;
(statearr_54614_56824[(2)] = inst_54572);

(statearr_54614_56824[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (1))){
var inst_54499 = cljs.core.async.timeout(self__.rate);
var inst_54500 = cljs.core.PersistentVector.EMPTY;
var inst_54501 = inst_54499;
var inst_54502 = inst_54500;
var state_54607__$1 = (function (){var statearr_54615 = state_54607;
(statearr_54615[(9)] = inst_54502);

(statearr_54615[(12)] = inst_54501);

return statearr_54615;
})();
var statearr_54616_56825 = state_54607__$1;
(statearr_54616_56825[(2)] = null);

(statearr_54616_56825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (24))){
var inst_54557 = (state_54607[(8)]);
var inst_54591 = (inst_54557 == null);
var state_54607__$1 = state_54607;
if(cljs.core.truth_(inst_54591)){
var statearr_54617_56826 = state_54607__$1;
(statearr_54617_56826[(1)] = (33));

} else {
var statearr_54618_56827 = state_54607__$1;
(statearr_54618_56827[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (4))){
var inst_54521 = (state_54607[(14)]);
var inst_54519 = (state_54607[(15)]);
var inst_54501 = (state_54607[(12)]);
var inst_54519__$1 = (state_54607[(2)]);
var inst_54520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54519__$1,(0),null);
var inst_54521__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54519__$1,(1),null);
var inst_54522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54521__$1,inst_54501);
var state_54607__$1 = (function (){var statearr_54619 = state_54607;
(statearr_54619[(16)] = inst_54520);

(statearr_54619[(14)] = inst_54521__$1);

(statearr_54619[(15)] = inst_54519__$1);

return statearr_54619;
})();
if(inst_54522){
var statearr_54620_56830 = state_54607__$1;
(statearr_54620_56830[(1)] = (5));

} else {
var statearr_54621_56831 = state_54607__$1;
(statearr_54621_56831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (15))){
var state_54607__$1 = state_54607;
var statearr_54624_56835 = state_54607__$1;
(statearr_54624_56835[(2)] = null);

(statearr_54624_56835[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (21))){
var inst_54557 = (state_54607[(8)]);
var inst_54569 = (inst_54557 == null);
var inst_54570 = cljs.core.not(inst_54569);
var state_54607__$1 = state_54607;
if(inst_54570){
var statearr_54625_56838 = state_54607__$1;
(statearr_54625_56838[(1)] = (23));

} else {
var statearr_54626_56840 = state_54607__$1;
(statearr_54626_56840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (31))){
var inst_54502 = (state_54607[(9)]);
var inst_54501 = (state_54607[(12)]);
var tmp54622 = inst_54502;
var tmp54623 = inst_54501;
var inst_54501__$1 = tmp54623;
var inst_54502__$1 = tmp54622;
var state_54607__$1 = (function (){var statearr_54627 = state_54607;
(statearr_54627[(9)] = inst_54502__$1);

(statearr_54627[(12)] = inst_54501__$1);

return statearr_54627;
})();
var statearr_54628_56841 = state_54607__$1;
(statearr_54628_56841[(2)] = null);

(statearr_54628_56841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (32))){
var inst_54589 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54629_56843 = state_54607__$1;
(statearr_54629_56843[(2)] = inst_54589);

(statearr_54629_56843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (33))){
var inst_54593 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close ratelimit chan"], 0));
var inst_54594 = cljs.core.async.close_BANG_(c);
var state_54607__$1 = (function (){var statearr_54630 = state_54607;
(statearr_54630[(17)] = inst_54593);

return statearr_54630;
})();
var statearr_54631_56846 = state_54607__$1;
(statearr_54631_56846[(2)] = inst_54594);

(statearr_54631_56846[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (13))){
var inst_54550 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54632_56848 = state_54607__$1;
(statearr_54632_56848[(2)] = inst_54550);

(statearr_54632_56848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (22))){
var inst_54601 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54633_56852 = state_54607__$1;
(statearr_54633_56852[(2)] = inst_54601);

(statearr_54633_56852[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (29))){
var inst_54576 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54634_56853 = state_54607__$1;
(statearr_54634_56853[(2)] = inst_54576);

(statearr_54634_56853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (6))){
var inst_54513 = (state_54607[(18)]);
var inst_54521 = (state_54607[(14)]);
var inst_54528 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54521,inst_54513);
var state_54607__$1 = state_54607;
if(inst_54528){
var statearr_54635_56856 = state_54607__$1;
(statearr_54635_56856[(1)] = (8));

} else {
var statearr_54636_56857 = state_54607__$1;
(statearr_54636_56857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (28))){
var inst_54579 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
if(cljs.core.truth_(inst_54579)){
var statearr_54637_56858 = state_54607__$1;
(statearr_54637_56858[(1)] = (30));

} else {
var statearr_54638_56859 = state_54607__$1;
(statearr_54638_56859[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (25))){
var inst_54599 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54639_56862 = state_54607__$1;
(statearr_54639_56862[(2)] = inst_54599);

(statearr_54639_56862[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (34))){
var state_54607__$1 = state_54607;
var statearr_54640_56864 = state_54607__$1;
(statearr_54640_56864[(2)] = null);

(statearr_54640_56864[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (17))){
var inst_54560 = cljs.core.async.close_BANG_(c);
var state_54607__$1 = state_54607;
var statearr_54641_56865 = state_54607__$1;
(statearr_54641_56865[(2)] = inst_54560);

(statearr_54641_56865[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (3))){
var inst_54605 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54607__$1,inst_54605);
} else {
if((state_val_54608 === (12))){
var inst_54521 = (state_54607[(14)]);
var inst_54544 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54521,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_54607__$1 = state_54607;
if(inst_54544){
var statearr_54642_56868 = state_54607__$1;
(statearr_54642_56868[(1)] = (14));

} else {
var statearr_54643_56869 = state_54607__$1;
(statearr_54643_56869[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (2))){
var inst_54513 = (state_54607[(18)]);
var inst_54514 = (state_54607[(19)]);
var inst_54501 = (state_54607[(12)]);
var inst_54513__$1 = from_chan;
var inst_54514__$1 = self__.stop_chan;
var inst_54515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54516 = [inst_54501,inst_54513__$1,inst_54514__$1];
var inst_54517 = (new cljs.core.PersistentVector(null,3,(5),inst_54515,inst_54516,null));
var state_54607__$1 = (function (){var statearr_54644 = state_54607;
(statearr_54644[(18)] = inst_54513__$1);

(statearr_54644[(19)] = inst_54514__$1);

return statearr_54644;
})();
return cljs.core.async.ioc_alts_BANG_(state_54607__$1,(4),inst_54517);
} else {
if((state_val_54608 === (23))){
var inst_54572 = (state_54607[(13)]);
var inst_54557 = (state_54607[(8)]);
var inst_54572__$1 = (filter_e_fn.cljs$core$IFn$_invoke$arity$1 ? filter_e_fn.cljs$core$IFn$_invoke$arity$1(inst_54557) : filter_e_fn.call(null,inst_54557));
var state_54607__$1 = (function (){var statearr_54645 = state_54607;
(statearr_54645[(13)] = inst_54572__$1);

return statearr_54645;
})();
if(cljs.core.truth_(inst_54572__$1)){
var statearr_54646_56873 = state_54607__$1;
(statearr_54646_56873[(1)] = (26));

} else {
var statearr_54647_56874 = state_54607__$1;
(statearr_54647_56874[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (35))){
var inst_54597 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54648_56877 = state_54607__$1;
(statearr_54648_56877[(2)] = inst_54597);

(statearr_54648_56877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (19))){
var inst_54603 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54649_56878 = state_54607__$1;
(statearr_54649_56878[(2)] = inst_54603);

(statearr_54649_56878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (11))){
var inst_54540 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54541 = [true];
var inst_54542 = cljs.core.PersistentHashMap.fromArrays(inst_54540,inst_54541);
var state_54607__$1 = state_54607;
var statearr_54650_56881 = state_54607__$1;
(statearr_54650_56881[(2)] = inst_54542);

(statearr_54650_56881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (9))){
var inst_54514 = (state_54607[(19)]);
var inst_54521 = (state_54607[(14)]);
var inst_54538 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54521,inst_54514);
var state_54607__$1 = state_54607;
if(inst_54538){
var statearr_54651_56884 = state_54607__$1;
(statearr_54651_56884[(1)] = (11));

} else {
var statearr_54652_56885 = state_54607__$1;
(statearr_54652_56885[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (5))){
var inst_54524 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_54525 = [true];
var inst_54526 = cljs.core.PersistentHashMap.fromArrays(inst_54524,inst_54525);
var state_54607__$1 = state_54607;
var statearr_54653_56888 = state_54607__$1;
(statearr_54653_56888[(2)] = inst_54526);

(statearr_54653_56888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (14))){
var inst_54520 = (state_54607[(16)]);
var state_54607__$1 = state_54607;
var statearr_54654_56890 = state_54607__$1;
(statearr_54654_56890[(2)] = inst_54520);

(statearr_54654_56890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (26))){
var inst_54557 = (state_54607[(8)]);
var inst_54574 = frontend.fs.sync.filter_local_changes_pred(inst_54557,self__.base_path,self__.graph_uuid);
var state_54607__$1 = state_54607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54607__$1,(29),inst_54574);
} else {
if((state_val_54608 === (16))){
var inst_54548 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54656_56891 = state_54607__$1;
(statearr_54656_56891[(2)] = inst_54548);

(statearr_54656_56891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (30))){
var inst_54502 = (state_54607[(9)]);
var inst_54557 = (state_54607[(8)]);
var inst_54501 = (state_54607[(12)]);
var inst_54581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_54502,inst_54557);
var inst_54582 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_54581);
var inst_54583 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_54582);
var inst_54584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,inst_54583);
var tmp54655 = inst_54501;
var inst_54501__$1 = tmp54655;
var inst_54502__$1 = inst_54582;
var state_54607__$1 = (function (){var statearr_54657 = state_54607;
(statearr_54657[(9)] = inst_54502__$1);

(statearr_54657[(20)] = inst_54584);

(statearr_54657[(12)] = inst_54501__$1);

return statearr_54657;
})();
var statearr_54658_56894 = state_54607__$1;
(statearr_54658_56894[(2)] = null);

(statearr_54658_56894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (10))){
var inst_54552 = (state_54607[(2)]);
var state_54607__$1 = state_54607;
var statearr_54659_56895 = state_54607__$1;
(statearr_54659_56895[(2)] = inst_54552);

(statearr_54659_56895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (18))){
var inst_54556 = (state_54607[(7)]);
var state_54607__$1 = state_54607;
if(cljs.core.truth_(inst_54556)){
var statearr_54660_56896 = state_54607__$1;
(statearr_54660_56896[(1)] = (20));

} else {
var statearr_54661_56897 = state_54607__$1;
(statearr_54661_56897[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54608 === (8))){
var inst_54519 = (state_54607[(15)]);
var inst_54533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54519,(0),null);
var inst_54534 = [new cljs.core.Keyword(null,"e","e",1381269198)];
var inst_54535 = [inst_54533];
var inst_54536 = cljs.core.PersistentHashMap.fromArrays(inst_54534,inst_54535);
var state_54607__$1 = state_54607;
var statearr_54662_56898 = state_54607__$1;
(statearr_54662_56898[(2)] = inst_54536);

(statearr_54662_56898[(1)] = (10));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54663[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54663[(1)] = (1));

return statearr_54663;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54607){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54607);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54664){var ex__27576__auto__ = e54664;
var statearr_54665_56900 = state_54607;
(statearr_54665_56900[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54607[(4)]))){
var statearr_54666_56901 = state_54607;
(statearr_54666_56901[(1)] = cljs.core.first((state_54607[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56902 = state_54607;
state_54607 = G__56902;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54607){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54667 = f__27596__auto__();
(statearr_54667[(6)] = c__27595__auto___56819);

return statearr_54667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return c;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2 = (function (this$,es){
var self__ = this;
var this$__$1 = this;
if(cljs.core.empty_QMARK_(es)){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54672){
var state_val_54673 = (state_54672[(1)]);
if((state_val_54673 === (1))){
var inst_54668 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54669 = [true];
var inst_54670 = cljs.core.PersistentHashMap.fromArrays(inst_54668,inst_54669);
var state_54672__$1 = state_54672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54672__$1,inst_54670);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54681 = [null,null,null,null,null,null,null];
(statearr_54681[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54681[(1)] = (1));

return statearr_54681;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54672){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54672);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54682){var ex__27576__auto__ = e54682;
var statearr_54683_56904 = state_54672;
(statearr_54683_56904[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54672[(4)]))){
var statearr_54687_56910 = state_54672;
(statearr_54687_56910[(1)] = cljs.core.first((state_54672[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56911 = state_54672;
state_54672 = G__56911;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54672){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54688 = f__27596__auto__();
(statearr_54688[(6)] = c__27595__auto__);

return statearr_54688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
var type = cljs.core.first(es).type;
var ignore_files = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var es__GT_paths_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54485_SHARP_){
return frontend.fs.sync.relative_path(p1__54485_SHARP_);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__54486_SHARP_){
return cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,p1__54486_SHARP_));
})));
var paths = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(es__GT_paths_xf,es);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote",paths], 0));

var r = (function (){var G__54692 = type;
switch (G__54692) {
case "add":
case "change":
return frontend.fs.sync.update_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
case "unlink":
frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths);

return frontend.fs.sync.delete_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54692)].join('')));

}
})();
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54729){
var state_val_54730 = (state_54729[(1)]);
if((state_val_54730 === (7))){
var state_54729__$1 = state_54729;
var statearr_54731_56915 = state_54729__$1;
(statearr_54731_56915[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (1))){
var inst_54696 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__add_current_local__GT_remote_files,paths);
var state_54729__$1 = (function (){var statearr_54734 = state_54729;
(statearr_54734[(7)] = inst_54696);

return statearr_54734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54729__$1,(2),r);
} else {
if((state_val_54730 === (4))){
var inst_54698 = (state_54729[(8)]);
var inst_54706 = typeof inst_54698 === 'number';
var state_54729__$1 = state_54729;
if(cljs.core.truth_(inst_54706)){
var statearr_54736_56916 = state_54729__$1;
(statearr_54736_56916[(1)] = (6));

} else {
var statearr_54737_56917 = state_54729__$1;
(statearr_54737_56917[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (6))){
var inst_54698 = (state_54729[(8)]);
var inst_54709 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote! update txid",inst_54698], 0));
var inst_54710 = frontend.fs.sync.update_graphs_txid_BANG_(inst_54698,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_54711 = cljs.core.reset_BANG_(self__._STAR_txid,inst_54698);
var inst_54712 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54713 = [true];
var inst_54714 = cljs.core.PersistentHashMap.fromArrays(inst_54712,inst_54713);
var state_54729__$1 = (function (){var statearr_54743 = state_54729;
(statearr_54743[(9)] = inst_54711);

(statearr_54743[(10)] = inst_54709);

(statearr_54743[(11)] = inst_54710);

return statearr_54743;
})();
var statearr_54744_56918 = state_54729__$1;
(statearr_54744_56918[(2)] = inst_54714);

(statearr_54744_56918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (3))){
var inst_54702 = [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663)];
var inst_54703 = [true];
var inst_54704 = cljs.core.PersistentHashMap.fromArrays(inst_54702,inst_54703);
var state_54729__$1 = state_54729;
var statearr_54745_56919 = state_54729__$1;
(statearr_54745_56919[(2)] = inst_54704);

(statearr_54745_56919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (2))){
var inst_54698 = (state_54729[(8)]);
var inst_54698__$1 = (state_54729[(2)]);
var inst_54699 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__remove_current_local__GT_remote_files,paths);
var inst_54700 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_54698__$1);
var state_54729__$1 = (function (){var statearr_54746 = state_54729;
(statearr_54746[(8)] = inst_54698__$1);

(statearr_54746[(12)] = inst_54699);

return statearr_54746;
})();
if(cljs.core.truth_(inst_54700)){
var statearr_54747_56920 = state_54729__$1;
(statearr_54747_56920[(1)] = (3));

} else {
var statearr_54748_56921 = state_54729__$1;
(statearr_54748_56921[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (11))){
var inst_54723 = (state_54729[(2)]);
var state_54729__$1 = state_54729;
var statearr_54749_56922 = state_54729__$1;
(statearr_54749_56922[(2)] = inst_54723);

(statearr_54749_56922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (9))){
var inst_54698 = (state_54729[(8)]);
var inst_54717 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote unknown:",inst_54698], 0));
var inst_54718 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_54719 = [inst_54698];
var inst_54720 = cljs.core.PersistentHashMap.fromArrays(inst_54718,inst_54719);
var state_54729__$1 = (function (){var statearr_54751 = state_54729;
(statearr_54751[(13)] = inst_54717);

return statearr_54751;
})();
var statearr_54752_56924 = state_54729__$1;
(statearr_54752_56924[(2)] = inst_54720);

(statearr_54752_56924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (5))){
var inst_54727 = (state_54729[(2)]);
var state_54729__$1 = state_54729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54729__$1,inst_54727);
} else {
if((state_val_54730 === (10))){
var state_54729__$1 = state_54729;
var statearr_54754_56926 = state_54729__$1;
(statearr_54754_56926[(2)] = null);

(statearr_54754_56926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54730 === (8))){
var inst_54725 = (state_54729[(2)]);
var state_54729__$1 = state_54729;
var statearr_54755_56927 = state_54729__$1;
(statearr_54755_56927[(2)] = inst_54725);

(statearr_54755_56927[(1)] = (5));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54757[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54757[(1)] = (1));

return statearr_54757;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54729){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54729);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54762){var ex__27576__auto__ = e54762;
var statearr_54763_56946 = state_54729;
(statearr_54763_56946[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54729[(4)]))){
var statearr_54764_56947 = state_54729;
(statearr_54764_56947[(1)] = cljs.core.first((state_54729[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56948 = state_54729;
state_54729 = G__56948;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54729){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54765 = f__27596__auto__();
(statearr_54765[(6)] = c__27595__auto__);

return statearr_54765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54841){
var state_val_54842 = (state_54841[(1)]);
if((state_val_54842 === (7))){
var inst_54785 = (state_54841[(7)]);
var inst_54792 = cljs.core.empty_QMARK_(inst_54785);
var state_54841__$1 = state_54841;
if(inst_54792){
var statearr_54856_56950 = state_54841__$1;
(statearr_54856_56950[(1)] = (9));

} else {
var statearr_54860_56951 = state_54841__$1;
(statearr_54860_56951[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (20))){
var inst_54805 = (state_54841[(8)]);
var state_54841__$1 = state_54841;
if(cljs.core.truth_(inst_54805)){
var statearr_54861_56952 = state_54841__$1;
(statearr_54861_56952[(1)] = (22));

} else {
var statearr_54862_56953 = state_54841__$1;
(statearr_54862_56953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (27))){
var inst_54829 = (state_54841[(2)]);
var state_54841__$1 = state_54841;
var statearr_54863_56954 = state_54841__$1;
(statearr_54863_56954[(2)] = inst_54829);

(statearr_54863_56954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (1))){
var inst_54766 = (state_54841[(9)]);
var inst_54766__$1 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_54767 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_54841__$1 = (function (){var statearr_54864 = state_54841;
(statearr_54864[(10)] = inst_54767);

(statearr_54864[(9)] = inst_54766__$1);

return statearr_54864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54841__$1,(2),inst_54766__$1);
} else {
if((state_val_54842 === (24))){
var inst_54825 = (state_54841[(2)]);
var state_54841__$1 = state_54841;
if(cljs.core.truth_(inst_54825)){
var statearr_54866_56957 = state_54841__$1;
(statearr_54866_56957[(1)] = (25));

} else {
var statearr_54867_56958 = state_54841__$1;
(statearr_54867_56958[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (4))){
var state_54841__$1 = state_54841;
if(cljs.core.truth_(self__.stopped)){
var statearr_54868_56959 = state_54841__$1;
(statearr_54868_56959[(1)] = (6));

} else {
var statearr_54869_56960 = state_54841__$1;
(statearr_54869_56960[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (15))){
var inst_54804 = (state_54841[(11)]);
var inst_54817 = (state_54841[(2)]);
var state_54841__$1 = (function (){var statearr_54870 = state_54841;
(statearr_54870[(12)] = inst_54817);

return statearr_54870;
})();
if(cljs.core.truth_(inst_54804)){
var statearr_54871_56961 = state_54841__$1;
(statearr_54871_56961[(1)] = (19));

} else {
var statearr_54872_56962 = state_54841__$1;
(statearr_54872_56962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (21))){
var inst_54831 = (state_54841[(2)]);
var state_54841__$1 = state_54841;
var statearr_54873_56963 = state_54841__$1;
(statearr_54873_56963[(2)] = inst_54831);

(statearr_54873_56963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (13))){
var inst_54808 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_54809 = cljs.core.deref(inst_54808);
var state_54841__$1 = state_54841;
if(cljs.core.truth_(inst_54809)){
var statearr_54874_56965 = state_54841__$1;
(statearr_54874_56965[(1)] = (16));

} else {
var statearr_54875_56966 = state_54841__$1;
(statearr_54875_56966[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (22))){
var inst_54805 = (state_54841[(8)]);
var state_54841__$1 = state_54841;
var statearr_54878_56968 = state_54841__$1;
(statearr_54878_56968[(2)] = inst_54805);

(statearr_54878_56968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (6))){
var inst_54788 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54789 = [true];
var inst_54790 = cljs.core.PersistentHashMap.fromArrays(inst_54788,inst_54789);
var state_54841__$1 = state_54841;
var statearr_54884_56970 = state_54841__$1;
(statearr_54884_56970[(2)] = inst_54790);

(statearr_54884_56970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (25))){
var inst_54803 = (state_54841[(13)]);
var state_54841__$1 = state_54841;
var statearr_54885_56972 = state_54841__$1;
(statearr_54885_56972[(2)] = inst_54803);

(statearr_54885_56972[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (17))){
var inst_54803 = (state_54841[(13)]);
var state_54841__$1 = state_54841;
var statearr_54886_56974 = state_54841__$1;
(statearr_54886_56974[(2)] = inst_54803);

(statearr_54886_56974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (3))){
var inst_54767 = (state_54841[(10)]);
var inst_54769 = (state_54841[(14)]);
var inst_54766 = (state_54841[(9)]);
var inst_54771 = (state_54841[(2)]);
var inst_54772 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_54771,inst_54769);
var inst_54773 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var inst_54774 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null);
var inst_54775 = (function (){var remote_all_files_meta_c = inst_54766;
var local_all_files_meta_c = inst_54767;
var remote_all_files_meta = inst_54769;
var local_all_files_meta = inst_54771;
var diff_local_files = inst_54772;
var ignore_files = inst_54773;
var monitored_dirs = inst_54774;
return (function (p1__54487_SHARP_){
return frontend.fs.sync.__GT_FileChangeEvent("change",self__.base_path,p1__54487_SHARP_.get_normalized_path(),null);
});
})();
var inst_54776 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_54775);
var inst_54777 = (function (){var remote_all_files_meta_c = inst_54766;
var local_all_files_meta_c = inst_54767;
var remote_all_files_meta = inst_54769;
var local_all_files_meta = inst_54771;
var diff_local_files = inst_54772;
var ignore_files = inst_54773;
var monitored_dirs = inst_54774;
return (function (p1__54488_SHARP_){
var path = frontend.fs.sync.relative_path(p1__54488_SHARP_);
var and__5041__auto__ = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,path));
if(and__5041__auto__){
return frontend.fs.sync.contains_path_QMARK_(monitored_dirs,path);
} else {
return and__5041__auto__;
}
});
})();
var inst_54778 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_54777);
var inst_54779 = frontend.fs.sync.partition_file_change_events((10));
var inst_54780 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_54776,inst_54778,inst_54779);
var inst_54781 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_54780,inst_54772);
var inst_54782 = cljs.core.flatten(inst_54781);
var inst_54783 = cljs.core.count(inst_54782);
var inst_54784 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(local->remote)]",inst_54783,"files need to sync"], 0));
var inst_54785 = inst_54781;
var state_54841__$1 = (function (){var statearr_54890 = state_54841;
(statearr_54890[(15)] = inst_54784);

(statearr_54890[(7)] = inst_54785);

return statearr_54890;
})();
var statearr_54891_56977 = state_54841__$1;
(statearr_54891_56977[(2)] = null);

(statearr_54891_56977[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (12))){
var inst_54803 = (state_54841[(13)]);
var inst_54802 = (state_54841[(2)]);
var inst_54803__$1 = cljs.core.__destructure_map(inst_54802);
var inst_54804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54803__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_54805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54803__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_54806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54803__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_54841__$1 = (function (){var statearr_54898 = state_54841;
(statearr_54898[(13)] = inst_54803__$1);

(statearr_54898[(11)] = inst_54804);

(statearr_54898[(8)] = inst_54805);

(statearr_54898[(16)] = inst_54806);

return statearr_54898;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_54900_56978 = state_54841__$1;
(statearr_54900_56978[(1)] = (13));

} else {
var statearr_54901_56979 = state_54841__$1;
(statearr_54901_56979[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (2))){
var inst_54767 = (state_54841[(10)]);
var inst_54769 = (state_54841[(2)]);
var state_54841__$1 = (function (){var statearr_54902 = state_54841;
(statearr_54902[(14)] = inst_54769);

return statearr_54902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54841__$1,(3),inst_54767);
} else {
if((state_val_54842 === (23))){
var inst_54806 = (state_54841[(16)]);
var state_54841__$1 = state_54841;
var statearr_54904_56981 = state_54841__$1;
(statearr_54904_56981[(2)] = inst_54806);

(statearr_54904_56981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (19))){
var inst_54785 = (state_54841[(7)]);
var inst_54819 = cljs.core.next(inst_54785);
var inst_54785__$1 = inst_54819;
var state_54841__$1 = (function (){var statearr_54906 = state_54841;
(statearr_54906[(7)] = inst_54785__$1);

return statearr_54906;
})();
var statearr_54907_56982 = state_54841__$1;
(statearr_54907_56982[(2)] = null);

(statearr_54907_56982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (11))){
var inst_54834 = (state_54841[(2)]);
var state_54841__$1 = state_54841;
var statearr_54909_56983 = state_54841__$1;
(statearr_54909_56983[(2)] = inst_54834);

(statearr_54909_56983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (9))){
var inst_54794 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54795 = [true];
var inst_54796 = cljs.core.PersistentHashMap.fromArrays(inst_54794,inst_54795);
var state_54841__$1 = state_54841;
var statearr_54910_56987 = state_54841__$1;
(statearr_54910_56987[(2)] = inst_54796);

(statearr_54910_56987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (5))){
var inst_54838 = (state_54841[(2)]);
var state_54841__$1 = state_54841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54841__$1,inst_54838);
} else {
if((state_val_54842 === (14))){
var inst_54803 = (state_54841[(13)]);
var state_54841__$1 = state_54841;
var statearr_54911_56988 = state_54841__$1;
(statearr_54911_56988[(2)] = inst_54803);

(statearr_54911_56988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (26))){
var state_54841__$1 = state_54841;
var statearr_54912_56991 = state_54841__$1;
(statearr_54912_56991[(2)] = null);

(statearr_54912_56991[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (16))){
var inst_54803 = (state_54841[(13)]);
var inst_54811 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_54803);
var state_54841__$1 = state_54841;
var statearr_54913_56992 = state_54841__$1;
(statearr_54913_56992[(2)] = inst_54811);

(statearr_54913_56992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (10))){
var inst_54785 = (state_54841[(7)]);
var inst_54799 = cljs.core.first(inst_54785);
var inst_54800 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_54799);
var state_54841__$1 = state_54841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54841__$1,(12),inst_54800);
} else {
if((state_val_54842 === (18))){
var inst_54814 = (state_54841[(2)]);
var state_54841__$1 = state_54841;
var statearr_54918_56993 = state_54841__$1;
(statearr_54918_56993[(2)] = inst_54814);

(statearr_54918_56993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54842 === (8))){
var inst_54836 = (state_54841[(2)]);
var state_54841__$1 = state_54841;
var statearr_54919_56994 = state_54841__$1;
(statearr_54919_56994[(2)] = inst_54836);

(statearr_54919_56994[(1)] = (5));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54920[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54920[(1)] = (1));

return statearr_54920;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54841){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54841);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54921){var ex__27576__auto__ = e54921;
var statearr_54922_56995 = state_54841;
(statearr_54922_56995[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54841[(4)]))){
var statearr_54923_56996 = state_54841;
(statearr_54923_56996[(1)] = cljs.core.first((state_54841[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56997 = state_54841;
state_54841 = G__56997;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54841){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54924 = f__27596__auto__();
(statearr_54924[(6)] = c__27595__auto__);

return statearr_54924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.sync.Local->RemoteSyncer{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rate","rate",-1428659698),self__.rate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),self__.stop_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped],null))], null),self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54489){
var self__ = this;
var G__54489__$1 = this;
return (new cljs.core.RecordIter((0),G__54489__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (791760177 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54491,other54492){
var self__ = this;
var this54491__$1 = this;
return (((!((other54492 == null)))) && ((((this54491__$1.constructor === other54492.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.user_uuid,other54492.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.graph_uuid,other54492.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.base_path,other54492.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.repo,other54492.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1._STAR_sync_state,other54492._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.rate,other54492.rate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1._STAR_txid,other54492._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.remote__GT_local_syncer,other54492.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.stop_chan,other54492.stop_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.stopped,other54492.stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54491__$1.__extmap,other54492.__extmap)))))))))))))))))))))))));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),null,new cljs.core.Keyword(null,"rate","rate",-1428659698),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"repo","repo",-1999060679),null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k54490){
var self__ = this;
var this__5347__auto____$1 = this;
var G__54932 = k54490;
var G__54932__$1 = (((G__54932 instanceof cljs.core.Keyword))?G__54932.fqn:null);
switch (G__54932__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k54490);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__54489){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__54933 = cljs.core.keyword_identical_QMARK_;
var expr__54934 = k__5349__auto__;
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(G__54489,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,G__54489,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,G__54489,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__54489,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__54489,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,G__54489,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,G__54489,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,G__54489,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,G__54489,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54933.cljs$core$IFn$_invoke$arity$2 ? pred__54933.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__54934) : pred__54933.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__54934)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,G__54489,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__54489),null));
}
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rate","rate",-1428659698),self__.rate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),self__.stop_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped,null))], null),self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__54489){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,G__54489,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-uuid","user-uuid",1364577479,null),new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"repo","repo",-358529152,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"rate","rate",211871829,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),cljs.core.with_meta(new cljs.core.Symbol(null,"remote->local-syncer","remote->local-syncer",576154816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"stop-chan","stop-chan",-825853786,null),cljs.core.with_meta(new cljs.core.Symbol(null,"stopped","stopped",150116887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$type = true);

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/Local->RemoteSyncer",null,(1),null));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.sync/Local->RemoteSyncer");
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
frontend.fs.sync.map__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$map__GT_Local__GT_RemoteSyncer(G__54493){
var extmap__5382__auto__ = (function (){var G__54942 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54493,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], 0));
if(cljs.core.record_QMARK_(G__54493)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54942);
} else {
return G__54942;
}
})();
return (new frontend.fs.sync.Local__GT_RemoteSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983).cljs$core$IFn$_invoke$arity$1(G__54493),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__54493),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[SyncManager",self__.graph_uuid,"]",(function (){var and__5041__auto__ = self__.state;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(self__.state);
} else {
return and__5041__auto__;
}
})(),"->",(function (){var and__5041__auto__ = next_state;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(next_state);
} else {
return and__5041__auto__;
}
})()], 0));

(self__.state = next_state);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_state,next_state);

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55023){
var state_val_55025 = (state_55023[(1)]);
if((state_val_55025 === (7))){
var inst_55000 = this$.remote__GT_local(null,args);
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55023__$1,(8),inst_55000);
} else {
if((state_val_55025 === (1))){
var state_55023__$1 = state_55023;
var G__55036_57025 = self__.state;
var G__55036_57026__$1 = (((G__55036_57025 instanceof cljs.core.Keyword))?G__55036_57025.fqn:null);
switch (G__55036_57026__$1) {
case "frontend.fs.sync/idle":
var statearr_55044_57028 = state_55023__$1;
(statearr_55044_57028[(1)] = (3));


break;
case "frontend.fs.sync/local->remote":
var statearr_55049_57029 = state_55023__$1;
(statearr_55049_57029[(1)] = (5));


break;
case "frontend.fs.sync/remote->local":
var statearr_55050_57030 = state_55023__$1;
(statearr_55050_57030[(1)] = (7));


break;
case "frontend.fs.sync/local->remote-full-sync":
var statearr_55051_57031 = state_55023__$1;
(statearr_55051_57031[(1)] = (9));


break;
case "frontend.fs.sync/remote->local-full-sync":
var statearr_55052_57032 = state_55023__$1;
(statearr_55052_57032[(1)] = (11));


break;
case "frontend.fs.sync/stop":
var statearr_55053_57033 = state_55023__$1;
(statearr_55053_57033[(1)] = (13));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55036_57026__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (4))){
var inst_54994 = (state_55023[(2)]);
var state_55023__$1 = state_55023;
var statearr_55054_57034 = state_55023__$1;
(statearr_55054_57034[(2)] = inst_54994);

(statearr_55054_57034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (13))){
var inst_55017 = this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(null);
var state_55023__$1 = state_55023;
var statearr_55065_57035 = state_55023__$1;
(statearr_55065_57035[(2)] = inst_55017);

(statearr_55065_57035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (6))){
var inst_54998 = (state_55023[(2)]);
var state_55023__$1 = state_55023;
var statearr_55070_57036 = state_55023__$1;
(statearr_55070_57036[(2)] = inst_54998);

(statearr_55070_57036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (3))){
var inst_54992 = this$.idle();
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55023__$1,(4),inst_54992);
} else {
if((state_val_55025 === (12))){
var inst_55011 = (state_55023[(2)]);
var state_55023__$1 = state_55023;
var statearr_55073_57037 = state_55023__$1;
(statearr_55073_57037[(2)] = inst_55011);

(statearr_55073_57037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (2))){
var inst_55020 = (state_55023[(2)]);
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55023__$1,inst_55020);
} else {
if((state_val_55025 === (11))){
var inst_55009 = this$.remote__GT_local_full_sync(null);
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55023__$1,(12),inst_55009);
} else {
if((state_val_55025 === (9))){
var inst_55005 = this$.full_sync();
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55023__$1,(10),inst_55005);
} else {
if((state_val_55025 === (5))){
var inst_54996 = this$.local__GT_remote(args);
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55023__$1,(6),inst_54996);
} else {
if((state_val_55025 === (10))){
var inst_55007 = (state_55023[(2)]);
var state_55023__$1 = state_55023;
var statearr_55160_57038 = state_55023__$1;
(statearr_55160_57038[(2)] = inst_55007);

(statearr_55160_57038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55025 === (8))){
var inst_55003 = (state_55023[(2)]);
var state_55023__$1 = state_55023;
var statearr_55161_57039 = state_55023__$1;
(statearr_55161_57039[(2)] = inst_55003);

(statearr_55161_57039[(1)] = (2));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_55162 = [null,null,null,null,null,null,null];
(statearr_55162[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55162[(1)] = (1));

return statearr_55162;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55023){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55023);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55163){var ex__27576__auto__ = e55163;
var statearr_55164_57040 = state_55023;
(statearr_55164_57040[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55023[(4)]))){
var statearr_55165_57041 = state_55023;
(statearr_55165_57041[(1)] = cljs.core.first((state_55023[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57042 = state_55023;
state_55023 = G__57042;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55023){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55166 = f__27596__auto__();
(statearr_55166[(6)] = c__27595__auto__);

return statearr_55166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.start = (function (){
var self__ = this;
var this$ = this;
(self__.ops_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10))));

(self__.__STAR_ws = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));

(self__._remote_change_chan = frontend.fs.sync.ws_listen_BANG_(self__.graph_uuid,self__.__STAR_ws));

(self__.ratelimit_local_changes_chan = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2(null,self__.local_changes_chan));

var c__27595__auto___57044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55325){
var state_val_55326 = (state_55325[(1)]);
if((state_val_55326 === (7))){
var inst_55257 = (state_55325[(2)]);
var inst_55258 = cljs.core.__destructure_map(inst_55257);
var inst_55259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55258,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55258,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_55261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55258,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_55262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55258,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var state_55325__$1 = (function (){var statearr_55327 = state_55325;
(statearr_55327[(7)] = inst_55261);

(statearr_55327[(8)] = inst_55260);

(statearr_55327[(9)] = inst_55262);

return statearr_55327;
})();
if(cljs.core.truth_(inst_55259)){
var statearr_55328_57045 = state_55325__$1;
(statearr_55328_57045[(1)] = (26));

} else {
var statearr_55329_57046 = state_55325__$1;
(statearr_55329_57046[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (20))){
var inst_55237 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55238 = [true];
var inst_55239 = cljs.core.PersistentHashMap.fromArrays(inst_55237,inst_55238);
var state_55325__$1 = state_55325;
var statearr_55330_57047 = state_55325__$1;
(statearr_55330_57047[(2)] = inst_55239);

(statearr_55330_57047[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (27))){
var inst_55260 = (state_55325[(8)]);
var state_55325__$1 = state_55325;
if(cljs.core.truth_(inst_55260)){
var statearr_55331_57048 = state_55325__$1;
(statearr_55331_57048[(1)] = (30));

} else {
var statearr_55332_57049 = state_55325__$1;
(statearr_55332_57049[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (1))){
var state_55325__$1 = state_55325;
var statearr_55333_57050 = state_55325__$1;
(statearr_55333_57050[(2)] = null);

(statearr_55333_57050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (24))){
var state_55325__$1 = state_55325;
var statearr_55334_57051 = state_55325__$1;
(statearr_55334_57051[(2)] = null);

(statearr_55334_57051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (39))){
var inst_55294 = (state_55325[(2)]);
var state_55325__$1 = (function (){var statearr_55335 = state_55325;
(statearr_55335[(10)] = inst_55294);

return statearr_55335;
})();
var statearr_55336_57052 = state_55325__$1;
(statearr_55336_57052[(2)] = null);

(statearr_55336_57052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (46))){
var state_55325__$1 = state_55325;
var statearr_55339_57053 = state_55325__$1;
(statearr_55339_57053[(2)] = null);

(statearr_55339_57053[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (4))){
var inst_55194 = (state_55325[(11)]);
var inst_55192 = (state_55325[(12)]);
var inst_55180 = (state_55325[(13)]);
var inst_55192__$1 = (state_55325[(2)]);
var inst_55193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55192__$1,(0),null);
var inst_55194__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55192__$1,(1),null);
var inst_55195 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55194__$1,inst_55180);
var state_55325__$1 = (function (){var statearr_55340 = state_55325;
(statearr_55340[(11)] = inst_55194__$1);

(statearr_55340[(14)] = inst_55193);

(statearr_55340[(12)] = inst_55192__$1);

return statearr_55340;
})();
if(inst_55195){
var statearr_55341_57054 = state_55325__$1;
(statearr_55341_57054[(1)] = (5));

} else {
var statearr_55342_57055 = state_55325__$1;
(statearr_55342_57055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (15))){
var inst_55194 = (state_55325[(11)]);
var inst_55184 = (state_55325[(15)]);
var inst_55224 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55194,inst_55184);
var state_55325__$1 = state_55325;
if(inst_55224){
var statearr_55343_57056 = state_55325__$1;
(statearr_55343_57056[(1)] = (17));

} else {
var statearr_55344_57057 = state_55325__$1;
(statearr_55344_57057[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (48))){
var inst_55311 = (state_55325[(2)]);
var state_55325__$1 = (function (){var statearr_55345 = state_55325;
(statearr_55345[(16)] = inst_55311);

return statearr_55345;
})();
var statearr_55346_57058 = state_55325__$1;
(statearr_55346_57058[(2)] = null);

(statearr_55346_57058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (21))){
var inst_55194 = (state_55325[(11)]);
var inst_55241 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55194,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_55325__$1 = state_55325;
if(inst_55241){
var statearr_55347_57059 = state_55325__$1;
(statearr_55347_57059[(1)] = (23));

} else {
var statearr_55348_57060 = state_55325__$1;
(statearr_55348_57060[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (31))){
var inst_55262 = (state_55325[(9)]);
var state_55325__$1 = state_55325;
if(cljs.core.truth_(inst_55262)){
var statearr_55349_57062 = state_55325__$1;
(statearr_55349_57062[(1)] = (41));

} else {
var statearr_55350_57063 = state_55325__$1;
(statearr_55350_57063[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (32))){
var inst_55319 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55351_57064 = state_55325__$1;
(statearr_55351_57064[(2)] = inst_55319);

(statearr_55351_57064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (40))){
var inst_55291 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55352_57065 = state_55325__$1;
(statearr_55352_57065[(2)] = inst_55291);

(statearr_55352_57065[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (33))){
var inst_55274 = [new cljs.core.Keyword(null,"txid","txid",1606205478)];
var inst_55275 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_55325__$1 = (function (){var statearr_55353 = state_55325;
(statearr_55353[(17)] = inst_55274);

return statearr_55353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55325__$1,(36),inst_55275);
} else {
if((state_val_55326 === (13))){
var inst_55253 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55354_57066 = state_55325__$1;
(statearr_55354_57066[(2)] = inst_55253);

(statearr_55354_57066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (22))){
var inst_55247 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55356_57067 = state_55325__$1;
(statearr_55356_57067[(2)] = inst_55247);

(statearr_55356_57067[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (36))){
var inst_55274 = (state_55325[(17)]);
var inst_55277 = (state_55325[(2)]);
var inst_55278 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_55277);
var inst_55279 = [inst_55278];
var inst_55280 = cljs.core.PersistentHashMap.fromArrays(inst_55274,inst_55279);
var state_55325__$1 = state_55325;
var statearr_55358_57068 = state_55325__$1;
(statearr_55358_57068[(2)] = inst_55280);

(statearr_55358_57068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (41))){
var inst_55262 = (state_55325[(9)]);
var inst_55298 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55299 = [inst_55262];
var inst_55300 = cljs.core.PersistentHashMap.fromArrays(inst_55298,inst_55299);
var state_55325__$1 = state_55325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55325__$1,(44),self__.ops_chan,inst_55300);
} else {
if((state_val_55326 === (43))){
var inst_55317 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55359_57069 = state_55325__$1;
(statearr_55359_57069[(2)] = inst_55317);

(statearr_55359_57069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (29))){
var inst_55269 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55360_57070 = state_55325__$1;
(statearr_55360_57070[(2)] = inst_55269);

(statearr_55360_57070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (44))){
var inst_55302 = (state_55325[(2)]);
var state_55325__$1 = (function (){var statearr_55361 = state_55325;
(statearr_55361[(18)] = inst_55302);

return statearr_55361;
})();
var statearr_55362_57071 = state_55325__$1;
(statearr_55362_57071[(2)] = null);

(statearr_55362_57071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (6))){
var inst_55194 = (state_55325[(11)]);
var inst_55181 = (state_55325[(19)]);
var inst_55201 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55194,inst_55181);
var state_55325__$1 = state_55325;
if(inst_55201){
var statearr_55363_57072 = state_55325__$1;
(statearr_55363_57072[(1)] = (8));

} else {
var statearr_55364_57073 = state_55325__$1;
(statearr_55364_57073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (28))){
var inst_55321 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55365_57074 = state_55325__$1;
(statearr_55365_57074[(2)] = inst_55321);

(statearr_55365_57074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (25))){
var inst_55245 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55366_57075 = state_55325__$1;
(statearr_55366_57075[(2)] = inst_55245);

(statearr_55366_57075[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (34))){
var inst_55260 = (state_55325[(8)]);
var state_55325__$1 = state_55325;
var statearr_55367_57076 = state_55325__$1;
(statearr_55367_57076[(2)] = inst_55260);

(statearr_55367_57076[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (17))){
var inst_55192 = (state_55325[(12)]);
var inst_55229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55192,(0),null);
var inst_55230 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local changes:",inst_55229], 0));
var inst_55231 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55232 = [inst_55229];
var inst_55233 = cljs.core.PersistentHashMap.fromArrays(inst_55231,inst_55232);
var state_55325__$1 = (function (){var statearr_55368 = state_55325;
(statearr_55368[(20)] = inst_55230);

return statearr_55368;
})();
var statearr_55369_57077 = state_55325__$1;
(statearr_55369_57077[(2)] = inst_55233);

(statearr_55369_57077[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (3))){
var inst_55323 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55325__$1,inst_55323);
} else {
if((state_val_55326 === (12))){
var inst_55194 = (state_55325[(11)]);
var inst_55183 = (state_55325[(21)]);
var inst_55213 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55194,inst_55183);
var state_55325__$1 = state_55325;
if(inst_55213){
var statearr_55370_57078 = state_55325__$1;
(statearr_55370_57078[(1)] = (14));

} else {
var statearr_55371_57079 = state_55325__$1;
(statearr_55371_57079[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (2))){
var inst_55182 = (state_55325[(22)]);
var inst_55183 = (state_55325[(21)]);
var inst_55181 = (state_55325[(19)]);
var inst_55187 = (state_55325[(23)]);
var inst_55180 = (state_55325[(13)]);
var inst_55184 = (state_55325[(15)]);
var inst_55180__$1 = self__.stop_sync_chan;
var inst_55181__$1 = self__.remote__GT_local_sync_chan;
var inst_55182__$1 = self__.full_sync_chan;
var inst_55183__$1 = self__._remote_change_chan;
var inst_55184__$1 = self__.ratelimit_local_changes_chan;
var inst_55185 = ((20) * (60));
var inst_55186 = (inst_55185 * (1000));
var inst_55187__$1 = cljs.core.async.timeout(inst_55186);
var inst_55188 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55189 = [inst_55180__$1,inst_55181__$1,inst_55182__$1,inst_55183__$1,inst_55184__$1,inst_55187__$1];
var inst_55190 = (new cljs.core.PersistentVector(null,6,(5),inst_55188,inst_55189,null));
var state_55325__$1 = (function (){var statearr_55372 = state_55325;
(statearr_55372[(22)] = inst_55182__$1);

(statearr_55372[(21)] = inst_55183__$1);

(statearr_55372[(19)] = inst_55181__$1);

(statearr_55372[(23)] = inst_55187__$1);

(statearr_55372[(13)] = inst_55180__$1);

(statearr_55372[(15)] = inst_55184__$1);

return statearr_55372;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_55325__$1,(4),inst_55190,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_55326 === (23))){
var inst_55193 = (state_55325[(14)]);
var state_55325__$1 = state_55325;
var statearr_55373_57080 = state_55325__$1;
(statearr_55373_57080[(2)] = inst_55193);

(statearr_55373_57080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (47))){
var inst_55315 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55374_57081 = state_55325__$1;
(statearr_55374_57081[(2)] = inst_55315);

(statearr_55374_57081[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (35))){
var inst_55283 = (state_55325[(24)]);
var inst_55283__$1 = (state_55325[(2)]);
var inst_55284 = (inst_55283__$1 == null);
var inst_55285 = cljs.core.not(inst_55284);
var state_55325__$1 = (function (){var statearr_55375 = state_55325;
(statearr_55375[(24)] = inst_55283__$1);

return statearr_55375;
})();
if(inst_55285){
var statearr_55376_57082 = state_55325__$1;
(statearr_55376_57082[(1)] = (37));

} else {
var statearr_55377_57083 = state_55325__$1;
(statearr_55377_57083[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (19))){
var inst_55249 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55378_57084 = state_55325__$1;
(statearr_55378_57084[(2)] = inst_55249);

(statearr_55378_57084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (11))){
var inst_55209 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55210 = [true];
var inst_55211 = cljs.core.PersistentHashMap.fromArrays(inst_55209,inst_55210);
var state_55325__$1 = state_55325;
var statearr_55379_57085 = state_55325__$1;
(statearr_55379_57085[(2)] = inst_55211);

(statearr_55379_57085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (9))){
var inst_55194 = (state_55325[(11)]);
var inst_55182 = (state_55325[(22)]);
var inst_55207 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55194,inst_55182);
var state_55325__$1 = state_55325;
if(inst_55207){
var statearr_55380_57086 = state_55325__$1;
(statearr_55380_57086[(1)] = (11));

} else {
var statearr_55381_57087 = state_55325__$1;
(statearr_55381_57087[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (5))){
var inst_55197 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_55198 = [true];
var inst_55199 = cljs.core.PersistentHashMap.fromArrays(inst_55197,inst_55198);
var state_55325__$1 = state_55325;
var statearr_55382_57088 = state_55325__$1;
(statearr_55382_57088[(2)] = inst_55199);

(statearr_55382_57088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (14))){
var inst_55192 = (state_55325[(12)]);
var inst_55218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55192,(0),null);
var inst_55219 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote change:",inst_55218], 0));
var inst_55220 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55221 = [inst_55218];
var inst_55222 = cljs.core.PersistentHashMap.fromArrays(inst_55220,inst_55221);
var state_55325__$1 = (function (){var statearr_55383 = state_55325;
(statearr_55383[(25)] = inst_55219);

return statearr_55383;
})();
var statearr_55384_57089 = state_55325__$1;
(statearr_55384_57089[(2)] = inst_55222);

(statearr_55384_57089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (45))){
var inst_55306 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55307 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55308 = [true];
var inst_55309 = cljs.core.PersistentHashMap.fromArrays(inst_55307,inst_55308);
var state_55325__$1 = (function (){var statearr_55385 = state_55325;
(statearr_55385[(26)] = inst_55306);

return statearr_55385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55325__$1,(48),self__.ops_chan,inst_55309);
} else {
if((state_val_55326 === (26))){
var inst_55264 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55265 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_55266 = [true];
var inst_55267 = cljs.core.PersistentHashMap.fromArrays(inst_55265,inst_55266);
var state_55325__$1 = (function (){var statearr_55386 = state_55325;
(statearr_55386[(27)] = inst_55264);

return statearr_55386;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55325__$1,(29),self__.ops_chan,inst_55267);
} else {
if((state_val_55326 === (16))){
var inst_55251 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55387_57090 = state_55325__$1;
(statearr_55387_57090[(2)] = inst_55251);

(statearr_55387_57090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (38))){
var state_55325__$1 = state_55325;
var statearr_55388_57091 = state_55325__$1;
(statearr_55388_57091[(2)] = null);

(statearr_55388_57091[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (30))){
var inst_55260 = (state_55325[(8)]);
var inst_55272 = inst_55260 === true;
var state_55325__$1 = state_55325;
if(cljs.core.truth_(inst_55272)){
var statearr_55389_57092 = state_55325__$1;
(statearr_55389_57092[(1)] = (33));

} else {
var statearr_55390_57093 = state_55325__$1;
(statearr_55390_57093[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (10))){
var inst_55255 = (state_55325[(2)]);
var state_55325__$1 = state_55325;
var statearr_55391_57094 = state_55325__$1;
(statearr_55391_57094[(2)] = inst_55255);

(statearr_55391_57094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (18))){
var inst_55194 = (state_55325[(11)]);
var inst_55187 = (state_55325[(23)]);
var inst_55235 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55194,inst_55187);
var state_55325__$1 = state_55325;
if(inst_55235){
var statearr_55392_57095 = state_55325__$1;
(statearr_55392_57095[(1)] = (20));

} else {
var statearr_55393_57096 = state_55325__$1;
(statearr_55393_57096[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (42))){
var inst_55261 = (state_55325[(7)]);
var state_55325__$1 = state_55325;
if(cljs.core.truth_(inst_55261)){
var statearr_55394_57097 = state_55325__$1;
(statearr_55394_57097[(1)] = (45));

} else {
var statearr_55395_57098 = state_55325__$1;
(statearr_55395_57098[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55326 === (37))){
var inst_55283 = (state_55325[(24)]);
var inst_55287 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55288 = [inst_55283];
var inst_55289 = cljs.core.PersistentHashMap.fromArrays(inst_55287,inst_55288);
var state_55325__$1 = state_55325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55325__$1,(40),self__.ops_chan,inst_55289);
} else {
if((state_val_55326 === (8))){
var inst_55203 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55204 = [true];
var inst_55205 = cljs.core.PersistentHashMap.fromArrays(inst_55203,inst_55204);
var state_55325__$1 = state_55325;
var statearr_55397_57099 = state_55325__$1;
(statearr_55397_57099[(2)] = inst_55205);

(statearr_55397_57099[(1)] = (10));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_55398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55398[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55398[(1)] = (1));

return statearr_55398;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55325){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55325);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55399){var ex__27576__auto__ = e55399;
var statearr_55400_57100 = state_55325;
(statearr_55400_57100[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55325[(4)]))){
var statearr_55401_57101 = state_55325;
(statearr_55401_57101[(1)] = cljs.core.first((state_55325[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57102 = state_55325;
state_55325 = G__57102;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55325){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55402 = f__27596__auto__();
(statearr_55402[(6)] = c__27595__auto___57044);

return statearr_55402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
}));

(frontend.fs.sync.SyncManager.prototype.idle = (function (){
var self__ = this;
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55462){
var state_val_55464 = (state_55462[(1)]);
if((state_val_55464 === (7))){
var inst_55408 = (state_55462[(7)]);
var inst_55418 = [new cljs.core.Keyword(null,"remote","remote",-1593576576)];
var inst_55419 = [inst_55408];
var inst_55420 = cljs.core.PersistentHashMap.fromArrays(inst_55418,inst_55419);
var inst_55421 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),inst_55420);
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55462__$1,(10),inst_55421);
} else {
if((state_val_55464 === (20))){
var state_55462__$1 = state_55462;
var statearr_55466_57103 = state_55462__$1;
(statearr_55466_57103[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (1))){
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55462__$1,(2),self__.ops_chan);
} else {
if((state_val_55464 === (24))){
var state_55462__$1 = state_55462;
var statearr_55468_57104 = state_55462__$1;
(statearr_55468_57104[(2)] = null);

(statearr_55468_57104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (4))){
var inst_55408 = (state_55462[(7)]);
var state_55462__$1 = state_55462;
if(cljs.core.truth_(inst_55408)){
var statearr_55469_57105 = state_55462__$1;
(statearr_55469_57105[(1)] = (7));

} else {
var statearr_55470_57106 = state_55462__$1;
(statearr_55470_57106[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (15))){
var inst_55435 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null);
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55462__$1,(18),inst_55435);
} else {
if((state_val_55464 === (21))){
var inst_55452 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55471_57107 = state_55462__$1;
(statearr_55471_57107[(2)] = inst_55452);

(statearr_55471_57107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (13))){
var inst_55456 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55472_57108 = state_55462__$1;
(statearr_55472_57108[(2)] = inst_55456);

(statearr_55472_57108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (22))){
var inst_55442 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55473_57109 = state_55462__$1;
(statearr_55473_57109[(2)] = inst_55442);

(statearr_55473_57109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (6))){
var inst_55415 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55474_57110 = state_55462__$1;
(statearr_55474_57110[(2)] = inst_55415);

(statearr_55474_57110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (25))){
var inst_55450 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55475_57111 = state_55462__$1;
(statearr_55475_57111[(2)] = inst_55450);

(statearr_55475_57111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (17))){
var inst_55454 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55476_57112 = state_55462__$1;
(statearr_55476_57112[(2)] = inst_55454);

(statearr_55476_57112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (3))){
var inst_55413 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55462__$1,(6),inst_55413);
} else {
if((state_val_55464 === (12))){
var inst_55410 = (state_55462[(8)]);
var state_55462__$1 = state_55462;
if(cljs.core.truth_(inst_55410)){
var statearr_55477_57113 = state_55462__$1;
(statearr_55477_57113[(1)] = (15));

} else {
var statearr_55478_57114 = state_55462__$1;
(statearr_55478_57114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (2))){
var inst_55405 = (state_55462[(2)]);
var inst_55406 = cljs.core.__destructure_map(inst_55405);
var inst_55407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55406,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55406,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_55409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55406,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var inst_55410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55406,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_55411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55406,new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000));
var state_55462__$1 = (function (){var statearr_55479 = state_55462;
(statearr_55479[(9)] = inst_55409);

(statearr_55479[(7)] = inst_55408);

(statearr_55479[(10)] = inst_55411);

(statearr_55479[(8)] = inst_55410);

return statearr_55479;
})();
if(cljs.core.truth_(inst_55407)){
var statearr_55480_57115 = state_55462__$1;
(statearr_55480_57115[(1)] = (3));

} else {
var statearr_55481_57116 = state_55462__$1;
(statearr_55481_57116[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (23))){
var inst_55445 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55462__$1,(26),inst_55445);
} else {
if((state_val_55464 === (19))){
var inst_55440 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null);
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55462__$1,(22),inst_55440);
} else {
if((state_val_55464 === (11))){
var inst_55409 = (state_55462[(9)]);
var inst_55427 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_55428 = [inst_55409];
var inst_55429 = cljs.core.PersistentHashMap.fromArrays(inst_55427,inst_55428);
var inst_55430 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),inst_55429);
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55462__$1,(14),inst_55430);
} else {
if((state_val_55464 === (9))){
var inst_55458 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55486_57117 = state_55462__$1;
(statearr_55486_57117[(2)] = inst_55458);

(statearr_55486_57117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (5))){
var inst_55460 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55462__$1,inst_55460);
} else {
if((state_val_55464 === (14))){
var inst_55432 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55487_57118 = state_55462__$1;
(statearr_55487_57118[(2)] = inst_55432);

(statearr_55487_57118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (26))){
var inst_55447 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55488_57119 = state_55462__$1;
(statearr_55488_57119[(2)] = inst_55447);

(statearr_55488_57119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (16))){
var inst_55411 = (state_55462[(10)]);
var state_55462__$1 = state_55462;
if(cljs.core.truth_(inst_55411)){
var statearr_55489_57120 = state_55462__$1;
(statearr_55489_57120[(1)] = (19));

} else {
var statearr_55490_57121 = state_55462__$1;
(statearr_55490_57121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (10))){
var inst_55423 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55491_57122 = state_55462__$1;
(statearr_55491_57122[(2)] = inst_55423);

(statearr_55491_57122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (18))){
var inst_55437 = (state_55462[(2)]);
var state_55462__$1 = state_55462;
var statearr_55492_57123 = state_55462__$1;
(statearr_55492_57123[(2)] = inst_55437);

(statearr_55492_57123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55464 === (8))){
var inst_55409 = (state_55462[(9)]);
var state_55462__$1 = state_55462;
if(cljs.core.truth_(inst_55409)){
var statearr_55493_57124 = state_55462__$1;
(statearr_55493_57124[(1)] = (11));

} else {
var statearr_55494_57125 = state_55462__$1;
(statearr_55494_57125[(1)] = (12));

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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_55495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55495[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55495[(1)] = (1));

return statearr_55495;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55462){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55462);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55496){var ex__27576__auto__ = e55496;
var statearr_55497_57126 = state_55462;
(statearr_55497_57126[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55462[(4)]))){
var statearr_55498_57127 = state_55462;
(statearr_55498_57127[(1)] = cljs.core.first((state_55462[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57128 = state_55462;
state_55462 = G__57128;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55462){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55503 = f__27596__auto__();
(statearr_55503[(6)] = c__27595__auto__);

return statearr_55503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.full_sync = (function (){
var self__ = this;
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55567){
var state_val_55568 = (state_55567[(1)]);
if((state_val_55568 === (7))){
var inst_55516 = (state_55567[(7)]);
var state_55567__$1 = state_55567;
var statearr_55570_57129 = state_55567__$1;
(statearr_55570_57129[(2)] = inst_55516);

(statearr_55570_57129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (20))){
var inst_55519 = (state_55567[(8)]);
var inst_55555 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full-sync",inst_55519], 0));
var inst_55556 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55567__$1 = (function (){var statearr_55571 = state_55567;
(statearr_55571[(9)] = inst_55555);

return statearr_55571;
})();
var statearr_55572_57134 = state_55567__$1;
(statearr_55572_57134[(2)] = inst_55556);

(statearr_55572_57134[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (1))){
var inst_55513 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(null);
var state_55567__$1 = state_55567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55567__$1,(2),inst_55513);
} else {
if((state_val_55568 === (4))){
var inst_55516 = (state_55567[(7)]);
var state_55567__$1 = state_55567;
var statearr_55573_57135 = state_55567__$1;
(statearr_55573_57135[(2)] = inst_55516);

(statearr_55573_57135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (15))){
var inst_55543 = (state_55567[(2)]);
var inst_55544 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55545 = [true];
var inst_55546 = cljs.core.PersistentHashMap.fromArrays(inst_55544,inst_55545);
var state_55567__$1 = (function (){var statearr_55574 = state_55567;
(statearr_55574[(10)] = inst_55543);

return statearr_55574;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55567__$1,(16),self__.ops_chan,inst_55546);
} else {
if((state_val_55568 === (21))){
var state_55567__$1 = state_55567;
var statearr_55575_57136 = state_55567__$1;
(statearr_55575_57136[(2)] = null);

(statearr_55575_57136[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (13))){
var inst_55520 = (state_55567[(11)]);
var state_55567__$1 = state_55567;
if(cljs.core.truth_(inst_55520)){
var statearr_55576_57137 = state_55567__$1;
(statearr_55576_57137[(1)] = (17));

} else {
var statearr_55577_57139 = state_55567__$1;
(statearr_55577_57139[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (22))){
var inst_55559 = (state_55567[(2)]);
var state_55567__$1 = state_55567;
var statearr_55578_57140 = state_55567__$1;
(statearr_55578_57140[(2)] = inst_55559);

(statearr_55578_57140[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (6))){
var inst_55516 = (state_55567[(7)]);
var inst_55526 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),inst_55516);
var state_55567__$1 = state_55567;
var statearr_55579_57141 = state_55567__$1;
(statearr_55579_57141[(2)] = inst_55526);

(statearr_55579_57141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (17))){
var inst_55552 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55567__$1 = state_55567;
var statearr_55580_57142 = state_55567__$1;
(statearr_55580_57142[(2)] = inst_55552);

(statearr_55580_57142[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (3))){
var inst_55523 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55524 = cljs.core.deref(inst_55523);
var state_55567__$1 = state_55567;
if(cljs.core.truth_(inst_55524)){
var statearr_55581_57143 = state_55567__$1;
(statearr_55581_57143[(1)] = (6));

} else {
var statearr_55582_57144 = state_55567__$1;
(statearr_55582_57144[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (12))){
var inst_55538 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55539 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55540 = [true];
var inst_55541 = cljs.core.PersistentHashMap.fromArrays(inst_55539,inst_55540);
var state_55567__$1 = (function (){var statearr_55583 = state_55567;
(statearr_55583[(12)] = inst_55538);

return statearr_55583;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55567__$1,(15),self__.ops_chan,inst_55541);
} else {
if((state_val_55568 === (2))){
var inst_55516 = (state_55567[(7)]);
var inst_55515 = (state_55567[(2)]);
var inst_55516__$1 = cljs.core.__destructure_map(inst_55515);
var inst_55517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55516__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55516__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_55519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55516__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55516__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_55567__$1 = (function (){var statearr_55584 = state_55567;
(statearr_55584[(13)] = inst_55517);

(statearr_55584[(7)] = inst_55516__$1);

(statearr_55584[(14)] = inst_55518);

(statearr_55584[(11)] = inst_55520);

(statearr_55584[(8)] = inst_55519);

return statearr_55584;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55585_57150 = state_55567__$1;
(statearr_55585_57150[(1)] = (3));

} else {
var statearr_55586_57151 = state_55567__$1;
(statearr_55586_57151[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (19))){
var inst_55561 = (state_55567[(2)]);
var state_55567__$1 = state_55567;
var statearr_55588_57152 = state_55567__$1;
(statearr_55588_57152[(2)] = inst_55561);

(statearr_55588_57152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (11))){
var inst_55565 = (state_55567[(2)]);
var state_55567__$1 = state_55567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55567__$1,inst_55565);
} else {
if((state_val_55568 === (9))){
var inst_55535 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55567__$1 = state_55567;
var statearr_55589_57153 = state_55567__$1;
(statearr_55589_57153[(2)] = inst_55535);

(statearr_55589_57153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (5))){
var inst_55517 = (state_55567[(13)]);
var inst_55533 = (state_55567[(2)]);
var state_55567__$1 = (function (){var statearr_55591 = state_55567;
(statearr_55591[(15)] = inst_55533);

return statearr_55591;
})();
if(cljs.core.truth_(inst_55517)){
var statearr_55592_57154 = state_55567__$1;
(statearr_55592_57154[(1)] = (9));

} else {
var statearr_55593_57156 = state_55567__$1;
(statearr_55593_57156[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (14))){
var inst_55563 = (state_55567[(2)]);
var state_55567__$1 = state_55567;
var statearr_55594_57157 = state_55567__$1;
(statearr_55594_57157[(2)] = inst_55563);

(statearr_55594_57157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (16))){
var inst_55548 = (state_55567[(2)]);
var inst_55549 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55567__$1 = (function (){var statearr_55595 = state_55567;
(statearr_55595[(16)] = inst_55548);

return statearr_55595;
})();
var statearr_55596_57158 = state_55567__$1;
(statearr_55596_57158[(2)] = inst_55549);

(statearr_55596_57158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (10))){
var inst_55518 = (state_55567[(14)]);
var state_55567__$1 = state_55567;
if(cljs.core.truth_(inst_55518)){
var statearr_55597_57159 = state_55567__$1;
(statearr_55597_57159[(1)] = (12));

} else {
var statearr_55598_57160 = state_55567__$1;
(statearr_55598_57160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (18))){
var inst_55519 = (state_55567[(8)]);
var state_55567__$1 = state_55567;
if(cljs.core.truth_(inst_55519)){
var statearr_55599_57161 = state_55567__$1;
(statearr_55599_57161[(1)] = (20));

} else {
var statearr_55600_57162 = state_55567__$1;
(statearr_55600_57162[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55568 === (8))){
var inst_55529 = (state_55567[(2)]);
var state_55567__$1 = state_55567;
var statearr_55601_57163 = state_55567__$1;
(statearr_55601_57163[(2)] = inst_55529);

(statearr_55601_57163[(1)] = (5));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_55602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55602[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55602[(1)] = (1));

return statearr_55602;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55567){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55567);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55603){var ex__27576__auto__ = e55603;
var statearr_55604_57167 = state_55567;
(statearr_55604_57167[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55567[(4)]))){
var statearr_55605_57168 = state_55567;
(statearr_55605_57168[(1)] = cljs.core.first((state_55567[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57169 = state_55567;
state_55567 = G__57169;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55567){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55606 = f__27596__auto__();
(statearr_55606[(6)] = c__27595__auto__);

return statearr_55606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local_full_sync = (function (_next_state){
var self__ = this;
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55634){
var state_val_55635 = (state_55634[(1)]);
if((state_val_55635 === (7))){
var inst_55615 = (state_55634[(7)]);
var state_55634__$1 = state_55634;
if(cljs.core.truth_(inst_55615)){
var statearr_55638_57170 = state_55634__$1;
(statearr_55638_57170[(1)] = (9));

} else {
var statearr_55639_57171 = state_55634__$1;
(statearr_55639_57171[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (1))){
var inst_55610 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(null);
var state_55634__$1 = state_55634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55634__$1,(2),inst_55610);
} else {
if((state_val_55635 === (4))){
var inst_55616 = (state_55634[(8)]);
var state_55634__$1 = state_55634;
if(cljs.core.truth_(inst_55616)){
var statearr_55640_57172 = state_55634__$1;
(statearr_55640_57172[(1)] = (6));

} else {
var statearr_55641_57173 = state_55634__$1;
(statearr_55641_57173[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (6))){
var inst_55621 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55634__$1 = state_55634;
var statearr_55642_57174 = state_55634__$1;
(statearr_55642_57174[(2)] = inst_55621);

(statearr_55642_57174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (3))){
var inst_55618 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55634__$1 = state_55634;
var statearr_55643_57175 = state_55634__$1;
(statearr_55643_57175[(2)] = inst_55618);

(statearr_55643_57175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (2))){
var inst_55612 = (state_55634[(2)]);
var inst_55613 = cljs.core.__destructure_map(inst_55612);
var inst_55614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55613,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55613,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55613,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_55634__$1 = (function (){var statearr_55648 = state_55634;
(statearr_55648[(8)] = inst_55616);

(statearr_55648[(7)] = inst_55615);

return statearr_55648;
})();
if(cljs.core.truth_(inst_55614)){
var statearr_55649_57176 = state_55634__$1;
(statearr_55649_57176[(1)] = (3));

} else {
var statearr_55650_57177 = state_55634__$1;
(statearr_55650_57177[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (11))){
var inst_55628 = (state_55634[(2)]);
var state_55634__$1 = state_55634;
var statearr_55651_57178 = state_55634__$1;
(statearr_55651_57178[(2)] = inst_55628);

(statearr_55651_57178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (9))){
var inst_55615 = (state_55634[(7)]);
var inst_55624 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local-full-sync",inst_55615], 0));
var inst_55625 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55634__$1 = (function (){var statearr_55652 = state_55634;
(statearr_55652[(9)] = inst_55624);

return statearr_55652;
})();
var statearr_55653_57179 = state_55634__$1;
(statearr_55653_57179[(2)] = inst_55625);

(statearr_55653_57179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (5))){
var inst_55632 = (state_55634[(2)]);
var state_55634__$1 = state_55634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55634__$1,inst_55632);
} else {
if((state_val_55635 === (10))){
var state_55634__$1 = state_55634;
var statearr_55654_57180 = state_55634__$1;
(statearr_55654_57180[(2)] = null);

(statearr_55654_57180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55635 === (8))){
var inst_55630 = (state_55634[(2)]);
var state_55634__$1 = state_55634;
var statearr_55655_57181 = state_55634__$1;
(statearr_55655_57181[(2)] = inst_55630);

(statearr_55655_57181[(1)] = (5));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_55656 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55656[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55656[(1)] = (1));

return statearr_55656;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55634){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55634);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55657){var ex__27576__auto__ = e55657;
var statearr_55658_57182 = state_55634;
(statearr_55658_57182[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55634[(4)]))){
var statearr_55660_57183 = state_55634;
(statearr_55660_57183[(1)] = cljs.core.first((state_55634[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57184 = state_55634;
state_55634 = G__57184;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55634){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55661 = f__27596__auto__();
(statearr_55661[(6)] = c__27595__auto__);

return statearr_55661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local = (function (_next_state,p__55663){
var self__ = this;
var map__55664 = p__55663;
var map__55664__$1 = cljs.core.__destructure_map(map__55664);
var remote_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55664__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55738){
var state_val_55739 = (state_55738[(1)]);
if((state_val_55739 === (7))){
var inst_55679 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
if(cljs.core.truth_(inst_55679)){
var statearr_55740_57185 = state_55738__$1;
(statearr_55740_57185[(1)] = (8));

} else {
var statearr_55741_57186 = state_55738__$1;
(statearr_55741_57186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (20))){
var inst_55734 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
var statearr_55742_57187 = state_55738__$1;
(statearr_55742_57187[(2)] = inst_55734);

(statearr_55742_57187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (27))){
var inst_55689 = (state_55738[(7)]);
var state_55738__$1 = state_55738;
if(cljs.core.truth_(inst_55689)){
var statearr_55743_57188 = state_55738__$1;
(statearr_55743_57188[(1)] = (29));

} else {
var statearr_55744_57189 = state_55738__$1;
(statearr_55744_57189[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (1))){
var inst_55666 = (state_55738[(8)]);
var inst_55666__$1 = remote_val;
var inst_55667 = (inst_55666__$1 == null);
var state_55738__$1 = (function (){var statearr_55745 = state_55738;
(statearr_55745[(8)] = inst_55666__$1);

return statearr_55745;
})();
if(cljs.core.truth_(inst_55667)){
var statearr_55746_57191 = state_55738__$1;
(statearr_55746_57191[(1)] = (2));

} else {
var statearr_55747_57192 = state_55738__$1;
(statearr_55747_57192[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (24))){
var inst_55690 = (state_55738[(9)]);
var state_55738__$1 = state_55738;
if(cljs.core.truth_(inst_55690)){
var statearr_55748_57194 = state_55738__$1;
(statearr_55748_57194[(1)] = (26));

} else {
var statearr_55749_57195 = state_55738__$1;
(statearr_55749_57195[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (4))){
var inst_55672 = (state_55738[(10)]);
var inst_55672__$1 = (state_55738[(2)]);
var inst_55673 = (inst_55672__$1 == null);
var state_55738__$1 = (function (){var statearr_55750 = state_55738;
(statearr_55750[(10)] = inst_55672__$1);

return statearr_55750;
})();
if(cljs.core.truth_(inst_55673)){
var statearr_55751_57197 = state_55738__$1;
(statearr_55751_57197[(1)] = (5));

} else {
var statearr_55752_57198 = state_55738__$1;
(statearr_55752_57198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (15))){
var inst_55687 = (state_55738[(11)]);
var inst_55696 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),inst_55687);
var state_55738__$1 = state_55738;
var statearr_55753_57199 = state_55738__$1;
(statearr_55753_57199[(2)] = inst_55696);

(statearr_55753_57199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (21))){
var inst_55709 = (state_55738[(2)]);
var inst_55710 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55711 = [true];
var inst_55712 = cljs.core.PersistentHashMap.fromArrays(inst_55710,inst_55711);
var state_55738__$1 = (function (){var statearr_55754 = state_55738;
(statearr_55754[(12)] = inst_55709);

return statearr_55754;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55738__$1,(22),self__.ops_chan,inst_55712);
} else {
if((state_val_55739 === (31))){
var inst_55728 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
var statearr_55755_57200 = state_55738__$1;
(statearr_55755_57200[(2)] = inst_55728);

(statearr_55755_57200[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (13))){
var inst_55687 = (state_55738[(11)]);
var state_55738__$1 = state_55738;
var statearr_55756_57201 = state_55738__$1;
(statearr_55756_57201[(2)] = inst_55687);

(statearr_55756_57201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (22))){
var inst_55714 = (state_55738[(2)]);
var inst_55715 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55738__$1 = (function (){var statearr_55757 = state_55738;
(statearr_55757[(13)] = inst_55714);

return statearr_55757;
})();
var statearr_55758_57202 = state_55738__$1;
(statearr_55758_57202[(2)] = inst_55715);

(statearr_55758_57202[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (29))){
var inst_55689 = (state_55738[(7)]);
var inst_55724 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local err",inst_55689], 0));
var inst_55725 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55738__$1 = (function (){var statearr_55759 = state_55738;
(statearr_55759[(14)] = inst_55724);

return statearr_55759;
})();
var statearr_55760_57203 = state_55738__$1;
(statearr_55760_57203[(2)] = inst_55725);

(statearr_55760_57203[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (6))){
var inst_55672 = (state_55738[(10)]);
var inst_55676 = cljs.core.deref(self__._STAR_txid);
var inst_55677 = (inst_55672 <= inst_55676);
var state_55738__$1 = state_55738;
var statearr_55761_57204 = state_55738__$1;
(statearr_55761_57204[(2)] = inst_55677);

(statearr_55761_57204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (28))){
var inst_55730 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
var statearr_55762_57205 = state_55738__$1;
(statearr_55762_57205[(2)] = inst_55730);

(statearr_55762_57205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (25))){
var inst_55732 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
var statearr_55763_57206 = state_55738__$1;
(statearr_55763_57206[(2)] = inst_55732);

(statearr_55763_57206[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (17))){
var inst_55699 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
var statearr_55764_57207 = state_55738__$1;
(statearr_55764_57207[(2)] = inst_55699);

(statearr_55764_57207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (3))){
var inst_55666 = (state_55738[(8)]);
var inst_55670 = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(inst_55666);
var state_55738__$1 = state_55738;
var statearr_55765_57208 = state_55738__$1;
(statearr_55765_57208[(2)] = inst_55670);

(statearr_55765_57208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (12))){
var inst_55693 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55694 = cljs.core.deref(inst_55693);
var state_55738__$1 = state_55738;
if(cljs.core.truth_(inst_55694)){
var statearr_55766_57209 = state_55738__$1;
(statearr_55766_57209[(1)] = (15));

} else {
var statearr_55767_57210 = state_55738__$1;
(statearr_55767_57210[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (2))){
var state_55738__$1 = state_55738;
var statearr_55768_57211 = state_55738__$1;
(statearr_55768_57211[(2)] = null);

(statearr_55768_57211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (23))){
var inst_55718 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55738__$1 = state_55738;
var statearr_55769_57212 = state_55738__$1;
(statearr_55769_57212[(2)] = inst_55718);

(statearr_55769_57212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (19))){
var inst_55688 = (state_55738[(15)]);
var state_55738__$1 = state_55738;
if(cljs.core.truth_(inst_55688)){
var statearr_55770_57214 = state_55738__$1;
(statearr_55770_57214[(1)] = (23));

} else {
var statearr_55771_57215 = state_55738__$1;
(statearr_55771_57215[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (11))){
var inst_55687 = (state_55738[(11)]);
var inst_55686 = (state_55738[(2)]);
var inst_55687__$1 = cljs.core.__destructure_map(inst_55686);
var inst_55688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55687__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55687__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55687__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55687__$1,new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586));
var state_55738__$1 = (function (){var statearr_55772 = state_55738;
(statearr_55772[(7)] = inst_55689);

(statearr_55772[(9)] = inst_55690);

(statearr_55772[(16)] = inst_55691);

(statearr_55772[(11)] = inst_55687__$1);

(statearr_55772[(15)] = inst_55688);

return statearr_55772;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55773_57216 = state_55738__$1;
(statearr_55773_57216[(1)] = (12));

} else {
var statearr_55774_57217 = state_55738__$1;
(statearr_55774_57217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (9))){
var inst_55684 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(null);
var state_55738__$1 = state_55738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55738__$1,(11),inst_55684);
} else {
if((state_val_55739 === (5))){
var state_55738__$1 = state_55738;
var statearr_55775_57218 = state_55738__$1;
(statearr_55775_57218[(2)] = null);

(statearr_55775_57218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (14))){
var inst_55691 = (state_55738[(16)]);
var inst_55702 = (state_55738[(2)]);
var state_55738__$1 = (function (){var statearr_55776 = state_55738;
(statearr_55776[(17)] = inst_55702);

return statearr_55776;
})();
if(cljs.core.truth_(inst_55691)){
var statearr_55777_57219 = state_55738__$1;
(statearr_55777_57219[(1)] = (18));

} else {
var statearr_55778_57220 = state_55738__$1;
(statearr_55778_57220[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (26))){
var inst_55721 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55738__$1 = state_55738;
var statearr_55779_57221 = state_55738__$1;
(statearr_55779_57221[(2)] = inst_55721);

(statearr_55779_57221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (16))){
var inst_55687 = (state_55738[(11)]);
var state_55738__$1 = state_55738;
var statearr_55780_57222 = state_55738__$1;
(statearr_55780_57222[(2)] = inst_55687);

(statearr_55780_57222[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (30))){
var state_55738__$1 = state_55738;
var statearr_55781_57223 = state_55738__$1;
(statearr_55781_57223[(2)] = null);

(statearr_55781_57223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (10))){
var inst_55736 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55738__$1,inst_55736);
} else {
if((state_val_55739 === (18))){
var inst_55704 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55705 = [new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000)];
var inst_55706 = [true];
var inst_55707 = cljs.core.PersistentHashMap.fromArrays(inst_55705,inst_55706);
var state_55738__$1 = (function (){var statearr_55782 = state_55738;
(statearr_55782[(18)] = inst_55704);

return statearr_55782;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55738__$1,(21),self__.ops_chan,inst_55707);
} else {
if((state_val_55739 === (8))){
var inst_55681 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55738__$1 = state_55738;
var statearr_55783_57224 = state_55738__$1;
(statearr_55783_57224[(2)] = inst_55681);

(statearr_55783_57224[(1)] = (10));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_55784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55784[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55784[(1)] = (1));

return statearr_55784;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55738){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55738);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55785){var ex__27576__auto__ = e55785;
var statearr_55786_57225 = state_55738;
(statearr_55786_57225[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55738[(4)]))){
var statearr_55787_57226 = state_55738;
(statearr_55787_57226[(1)] = cljs.core.first((state_55738[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57227 = state_55738;
state_55738 = G__57227;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55738){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55788 = f__27596__auto__();
(statearr_55788[(6)] = c__27595__auto__);

return statearr_55788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.local__GT_remote = (function (p__55789){
var self__ = this;
var map__55790 = p__55789;
var map__55790__$1 = cljs.core.__destructure_map(map__55790);
var local_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55790__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var this$ = this;
if((!((local_change == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_change),"\n","(some? local-change)"].join('')));
}

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55844){
var state_val_55845 = (state_55844[(1)]);
if((state_val_55845 === (7))){
var inst_55798 = (state_55844[(7)]);
var state_55844__$1 = state_55844;
var statearr_55846_57229 = state_55844__$1;
(statearr_55846_57229[(2)] = inst_55798);

(statearr_55846_57229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (1))){
var inst_55792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55793 = [local_change];
var inst_55794 = (new cljs.core.PersistentVector(null,1,(5),inst_55792,inst_55793,null));
var inst_55795 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_55794);
var state_55844__$1 = state_55844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55844__$1,(2),inst_55795);
} else {
if((state_val_55845 === (4))){
var inst_55798 = (state_55844[(7)]);
var state_55844__$1 = state_55844;
var statearr_55847_57231 = state_55844__$1;
(statearr_55847_57231[(2)] = inst_55798);

(statearr_55847_57231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (15))){
var inst_55822 = (state_55844[(2)]);
var inst_55823 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55824 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_55825 = [local_change];
var inst_55826 = cljs.core.PersistentHashMap.fromArrays(inst_55824,inst_55825);
var inst_55827 = [inst_55826];
var inst_55828 = cljs.core.PersistentHashMap.fromArrays(inst_55823,inst_55827);
var state_55844__$1 = (function (){var statearr_55848 = state_55844;
(statearr_55848[(8)] = inst_55822);

return statearr_55848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55844__$1,(16),self__.ops_chan,inst_55828);
} else {
if((state_val_55845 === (13))){
var inst_55801 = (state_55844[(9)]);
var state_55844__$1 = state_55844;
if(cljs.core.truth_(inst_55801)){
var statearr_55849_57232 = state_55844__$1;
(statearr_55849_57232[(1)] = (17));

} else {
var statearr_55850_57233 = state_55844__$1;
(statearr_55850_57233[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (6))){
var inst_55798 = (state_55844[(7)]);
var inst_55806 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_55798);
var state_55844__$1 = state_55844;
var statearr_55851_57235 = state_55844__$1;
(statearr_55851_57235[(2)] = inst_55806);

(statearr_55851_57235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (17))){
var inst_55801 = (state_55844[(9)]);
var inst_55834 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local->remote",inst_55801], 0));
var inst_55835 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55844__$1 = (function (){var statearr_55852 = state_55844;
(statearr_55852[(10)] = inst_55834);

return statearr_55852;
})();
var statearr_55853_57237 = state_55844__$1;
(statearr_55853_57237[(2)] = inst_55835);

(statearr_55853_57237[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (3))){
var inst_55803 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55804 = cljs.core.deref(inst_55803);
var state_55844__$1 = state_55844;
if(cljs.core.truth_(inst_55804)){
var statearr_55854_57239 = state_55844__$1;
(statearr_55854_57239[(1)] = (6));

} else {
var statearr_55855_57240 = state_55844__$1;
(statearr_55855_57240[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (12))){
var inst_55817 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55818 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55819 = [true];
var inst_55820 = cljs.core.PersistentHashMap.fromArrays(inst_55818,inst_55819);
var state_55844__$1 = (function (){var statearr_55856 = state_55844;
(statearr_55856[(11)] = inst_55817);

return statearr_55856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55844__$1,(15),self__.ops_chan,inst_55820);
} else {
if((state_val_55845 === (2))){
var inst_55798 = (state_55844[(7)]);
var inst_55797 = (state_55844[(2)]);
var inst_55798__$1 = cljs.core.__destructure_map(inst_55797);
var inst_55799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55798__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55798__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_55801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55798__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_55844__$1 = (function (){var statearr_55857 = state_55844;
(statearr_55857[(9)] = inst_55801);

(statearr_55857[(12)] = inst_55799);

(statearr_55857[(13)] = inst_55800);

(statearr_55857[(7)] = inst_55798__$1);

return statearr_55857;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55858_57245 = state_55844__$1;
(statearr_55858_57245[(1)] = (3));

} else {
var statearr_55859_57246 = state_55844__$1;
(statearr_55859_57246[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (19))){
var inst_55838 = (state_55844[(2)]);
var state_55844__$1 = state_55844;
var statearr_55860_57248 = state_55844__$1;
(statearr_55860_57248[(2)] = inst_55838);

(statearr_55860_57248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (11))){
var inst_55842 = (state_55844[(2)]);
var state_55844__$1 = state_55844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55844__$1,inst_55842);
} else {
if((state_val_55845 === (9))){
var inst_55814 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55844__$1 = state_55844;
var statearr_55861_57249 = state_55844__$1;
(statearr_55861_57249[(2)] = inst_55814);

(statearr_55861_57249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (5))){
var inst_55799 = (state_55844[(12)]);
var inst_55812 = (state_55844[(2)]);
var state_55844__$1 = (function (){var statearr_55862 = state_55844;
(statearr_55862[(14)] = inst_55812);

return statearr_55862;
})();
if(cljs.core.truth_(inst_55799)){
var statearr_55863_57250 = state_55844__$1;
(statearr_55863_57250[(1)] = (9));

} else {
var statearr_55864_57251 = state_55844__$1;
(statearr_55864_57251[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (14))){
var inst_55840 = (state_55844[(2)]);
var state_55844__$1 = state_55844;
var statearr_55865_57252 = state_55844__$1;
(statearr_55865_57252[(2)] = inst_55840);

(statearr_55865_57252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (16))){
var inst_55830 = (state_55844[(2)]);
var inst_55831 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55844__$1 = (function (){var statearr_55866 = state_55844;
(statearr_55866[(15)] = inst_55830);

return statearr_55866;
})();
var statearr_55867_57253 = state_55844__$1;
(statearr_55867_57253[(2)] = inst_55831);

(statearr_55867_57253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (10))){
var inst_55800 = (state_55844[(13)]);
var state_55844__$1 = state_55844;
if(cljs.core.truth_(inst_55800)){
var statearr_55868_57254 = state_55844__$1;
(statearr_55868_57254[(1)] = (12));

} else {
var statearr_55869_57255 = state_55844__$1;
(statearr_55869_57255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (18))){
var state_55844__$1 = state_55844;
var statearr_55870_57256 = state_55844__$1;
(statearr_55870_57256[(2)] = null);

(statearr_55870_57256[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55845 === (8))){
var inst_55809 = (state_55844[(2)]);
var state_55844__$1 = state_55844;
var statearr_55871_57257 = state_55844__$1;
(statearr_55871_57257[(2)] = inst_55809);

(statearr_55871_57257[(1)] = (5));


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
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_55872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55872[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55872[(1)] = (1));

return statearr_55872;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55844){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55844);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55873){var ex__27576__auto__ = e55873;
var statearr_55874_57258 = state_55844;
(statearr_55874_57258[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55844[(4)]))){
var statearr_55875_57259 = state_55844;
(statearr_55875_57259[(1)] = cljs.core.first((state_55844[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57260 = state_55844;
state_55844 = G__57260;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55844){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55876 = f__27596__auto__();
(statearr_55876[(6)] = c__27595__auto__);

return statearr_55876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k54968,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__55877 = k54968;
var G__55877__$1 = (((G__55877 instanceof cljs.core.Keyword))?G__55877.fqn:null);
switch (G__55877__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54968,else__5343__auto__);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__55878){
var vec__55879 = p__55878;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55879,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55879,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.sync.SyncManager{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),self__.full_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),self__.stop_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),self__.remote__GT_local_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),self__.local__GT_remote_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),self__.local_changes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),self__.ratelimit_local_changes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),self__._remote_change_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),self__.__STAR_ws],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),self__.ops_chan],null))], null),self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54967){
var self__ = this;
var G__54967__$1 = this;
return (new cljs.core.RecordIter((0),G__54967__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (366090620 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54969,other54970){
var self__ = this;
var this54969__$1 = this;
return (((!((other54970 == null)))) && ((((this54969__$1.constructor === other54970.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.graph_uuid,other54970.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.base_path,other54970.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1._STAR_sync_state,other54970._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.local__GT_remote_syncer,other54970.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.remote__GT_local_syncer,other54970.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.full_sync_chan,other54970.full_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.stop_sync_chan,other54970.stop_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.remote__GT_local_sync_chan,other54970.remote__GT_local_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.local__GT_remote_sync_chan,other54970.local__GT_remote_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.local_changes_chan,other54970.local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.ratelimit_local_changes_chan,other54970.ratelimit_local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1._STAR_txid,other54970._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.state,other54970.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1._remote_change_chan,other54970._remote_change_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.__STAR_ws,other54970.__STAR_ws)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.stopped,other54970.stopped)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.ops_chan,other54970.ops_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54969__$1.__extmap,other54970.__extmap)))))))))))))))))))))))))))))))))))))));
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k54968){
var self__ = this;
var this__5347__auto____$1 = this;
var G__55882 = k54968;
var G__55882__$1 = (((G__55882 instanceof cljs.core.Keyword))?G__55882.fqn:null);
switch (G__55882__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k54968);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__54967){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__55883 = cljs.core.keyword_identical_QMARK_;
var expr__55884 = k__5349__auto__;
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__55884)))){
return (new frontend.fs.sync.SyncManager(G__54967,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,G__54967,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,G__54967,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,G__54967,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__54967,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,G__54967,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,G__54967,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,G__54967,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,G__54967,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,G__54967,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,G__54967,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,G__54967,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,G__54967,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,G__54967,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,G__54967,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,G__54967,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55883.cljs$core$IFn$_invoke$arity$2 ? pred__55883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__55884) : pred__55883.call(null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__55884)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,G__54967,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__54967),null));
}
}
}
}
}
}
}
}
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),self__.full_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),self__.stop_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),self__.remote__GT_local_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),self__.local__GT_remote_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),self__.local_changes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),self__.ratelimit_local_changes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),self__._remote_change_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),self__.__STAR_ws,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),self__.ops_chan,null))], null),self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__54967){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,G__54967,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.sync.SyncManager.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"local->remote-syncer","local->remote-syncer",195649351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Local->RemoteSyncer","Local->RemoteSyncer",-1763578057,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"remote->local-syncer","remote->local-syncer",576154816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Remote->LocalSyncer","Remote->LocalSyncer",2008798237,null)], null)),new cljs.core.Symbol(null,"full-sync-chan","full-sync-chan",1008379583,null),new cljs.core.Symbol(null,"stop-sync-chan","stop-sync-chan",208244183,null),new cljs.core.Symbol(null,"remote->local-sync-chan","remote->local-sync-chan",190695604,null),new cljs.core.Symbol(null,"local->remote-sync-chan","local->remote-sync-chan",-198836339,null),new cljs.core.Symbol(null,"local-changes-chan","local-changes-chan",-276483993,null),cljs.core.with_meta(new cljs.core.Symbol(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-155010768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_remote-change-chan","_remote-change-chan",1313532448,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_*ws","_*ws",829664121,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"stopped","stopped",150116887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ops-chan","ops-chan",-782726182,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.SyncManager.cljs$lang$type = true);

(frontend.fs.sync.SyncManager.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/SyncManager",null,(1),null));
}));

(frontend.fs.sync.SyncManager.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.sync/SyncManager");
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
frontend.fs.sync.map__GT_SyncManager = (function frontend$fs$sync$map__GT_SyncManager(G__54971){
var extmap__5382__auto__ = (function (){var G__55886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54971,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], 0));
if(cljs.core.record_QMARK_(G__54971)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55886);
} else {
return G__55886;
}
})();
return (new frontend.fs.sync.SyncManager(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__54971),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587).cljs$core$IFn$_invoke$arity$1(G__54971),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
if((current_user_uuid == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_uuid,graph_user_uuid)){
return true;
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","other-user-graph","file-sync/other-user-graph",1618368742)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return false;

}
}
});
frontend.fs.sync.check_remote_graph_exists = (function frontend$fs$sync$check_remote_graph_exists(local_graph_uuid){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55903){
var state_val_55904 = (state_55903[(1)]);
if((state_val_55904 === (1))){
var inst_55888 = (function (){return (function (p1__55887_SHARP_){
return cljs.core.contains_QMARK_(p1__55887_SHARP_,local_graph_uuid);
});
})();
var inst_55889 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_55903__$1 = (function (){var statearr_55905 = state_55903;
(statearr_55905[(7)] = inst_55888);

return statearr_55905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55903__$1,(2),inst_55889);
} else {
if((state_val_55904 === (2))){
var inst_55888 = (state_55903[(7)]);
var inst_55895 = (state_55903[(8)]);
var inst_55891 = (state_55903[(2)]);
var inst_55892 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_55891);
var inst_55893 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),inst_55892);
var inst_55894 = cljs.core.set(inst_55893);
var inst_55895__$1 = (inst_55888.cljs$core$IFn$_invoke$arity$1 ? inst_55888.cljs$core$IFn$_invoke$arity$1(inst_55894) : inst_55888.call(null,inst_55894));
var state_55903__$1 = (function (){var statearr_55906 = state_55903;
(statearr_55906[(8)] = inst_55895__$1);

return statearr_55906;
})();
if(cljs.core.truth_(inst_55895__$1)){
var statearr_55908_57273 = state_55903__$1;
(statearr_55908_57273[(1)] = (3));

} else {
var statearr_55909_57274 = state_55903__$1;
(statearr_55909_57274[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55904 === (3))){
var state_55903__$1 = state_55903;
var statearr_55910_57275 = state_55903__$1;
(statearr_55910_57275[(2)] = null);

(statearr_55910_57275[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55904 === (4))){
var inst_55898 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","graph-deleted","file-sync/graph-deleted",110500245)], 0));
var inst_55899 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55898,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
var state_55903__$1 = state_55903;
var statearr_55911_57276 = state_55903__$1;
(statearr_55911_57276[(2)] = inst_55899);

(statearr_55911_57276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55904 === (5))){
var inst_55895 = (state_55903[(8)]);
var inst_55901 = (state_55903[(2)]);
var state_55903__$1 = (function (){var statearr_55914 = state_55903;
(statearr_55914[(9)] = inst_55901);

return statearr_55914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55903__$1,inst_55895);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0 = (function (){
var statearr_55915 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55915[(0)] = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__);

(statearr_55915[(1)] = (1));

return statearr_55915;
});
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1 = (function (state_55903){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55903);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55917){var ex__27576__auto__ = e55917;
var statearr_55918_57277 = state_55903;
(statearr_55918_57277[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55903[(4)]))){
var statearr_55919_57278 = state_55903;
(statearr_55919_57278[(1)] = cljs.core.first((state_55903[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57279 = state_55903;
state_55903 = G__57279;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__ = function(state_55903){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1.call(this,state_55903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55920 = f__27596__auto__();
(statearr_55920[(6)] = c__27595__auto__);

return statearr_55920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.sync_start = (function frontend$fs$sync$sync_start(){
var vec__55921 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55921,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55921,(1),null);
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55921,(2),null);
var _STAR_sync_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.sync_state());
var current_user_uuid = frontend.handler.user.user_uuid();
var repo = frontend.state.get_current_repo();
var sm = frontend.fs.sync.sync_manager(current_user_uuid,graph_uuid,frontend.config.get_repo_dir(repo),repo,txid,_STAR_sync_state,frontend.fs.sync.full_sync_chan,frontend.fs.sync.stop_sync_chan,frontend.fs.sync.remote__GT_local_sync_chan,frontend.fs.sync.local__GT_remote_sync_chan,frontend.fs.sync.local_changes_chan);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55969){
var state_val_55970 = (state_55969[(1)]);
if((state_val_55970 === (7))){
var inst_55965 = (state_55969[(2)]);
var state_55969__$1 = state_55969;
var statearr_55971_57284 = state_55969__$1;
(statearr_55971_57284[(2)] = inst_55965);

(statearr_55971_57284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (1))){
var inst_55924 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_55925 = cljs.core.count(inst_55924);
var inst_55926 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((3),inst_55925);
var state_55969__$1 = state_55969;
if(inst_55926){
var statearr_55973_57285 = state_55969__$1;
(statearr_55973_57285[(1)] = (2));

} else {
var statearr_55974_57287 = state_55969__$1;
(statearr_55974_57287[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (4))){
var inst_55967 = (state_55969[(2)]);
var state_55969__$1 = state_55969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55969__$1,inst_55967);
} else {
if((state_val_55970 === (6))){
var state_55969__$1 = state_55969;
var statearr_55976_57289 = state_55969__$1;
(statearr_55976_57289[(2)] = null);

(statearr_55976_57289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (3))){
var inst_55931 = frontend.fs.sync.check_graph_belong_to_current_user(current_user_uuid,user_uuid);
var state_55969__$1 = state_55969;
if(inst_55931){
var statearr_55977_57290 = state_55969__$1;
(statearr_55977_57290[(1)] = (5));

} else {
var statearr_55978_57297 = state_55969__$1;
(statearr_55978_57297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (12))){
var inst_55946 = (state_55969[(2)]);
var inst_55947 = frontend.fs.sync.drain_chan(frontend.fs.sync.local_changes_chan);
var inst_55948 = cljs.core.async.poll_BANG_(frontend.fs.sync.stop_sync_chan);
var inst_55949 = cljs.core.async.poll_BANG_(frontend.fs.sync.remote__GT_local_sync_chan);
var inst_55950 = (function (){return (function (_,___$1,___$2,n){
return frontend.state.set_file_sync_state(n);
});
})();
var inst_55951 = cljs.core.add_watch(_STAR_sync_state,new cljs.core.Keyword("frontend.fs.sync","update-global-state","frontend.fs.sync/update-global-state",-739606169),inst_55950);
var inst_55952 = sm.start();
var inst_55953 = cljs.core.async.offer_BANG_(frontend.fs.sync.remote__GT_local_sync_chan,true);
var inst_55954 = cljs.core.async.offer_BANG_(frontend.fs.sync.full_sync_chan,true);
var inst_55955 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("network","online?","network/online?",1306822774));
var inst_55956 = (function (){return (function (_k,_r,_o,n){
if(n === false){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_55957 = cljs.core.add_watch(inst_55955,"sync-manage",inst_55956);
var inst_55958 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var inst_55959 = (function (){return (function (_k,_r,_o,n){
if((n == null)){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_55960 = cljs.core.add_watch(inst_55958,"sync-manage",inst_55959);
var state_55969__$1 = (function (){var statearr_55984 = state_55969;
(statearr_55984[(7)] = inst_55949);

(statearr_55984[(8)] = inst_55947);

(statearr_55984[(9)] = inst_55952);

(statearr_55984[(10)] = inst_55957);

(statearr_55984[(11)] = inst_55951);

(statearr_55984[(12)] = inst_55946);

(statearr_55984[(13)] = inst_55948);

(statearr_55984[(14)] = inst_55954);

(statearr_55984[(15)] = inst_55953);

return statearr_55984;
})();
var statearr_55986_57299 = state_55969__$1;
(statearr_55986_57299[(2)] = inst_55960);

(statearr_55986_57299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (2))){
var inst_55928 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var inst_55929 = frontend.state.set_file_sync_state(null);
var state_55969__$1 = (function (){var statearr_55987 = state_55969;
(statearr_55987[(16)] = inst_55928);

return statearr_55987;
})();
var statearr_55988_57300 = state_55969__$1;
(statearr_55988_57300[(2)] = inst_55929);

(statearr_55988_57300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (11))){
var inst_55962 = (state_55969[(2)]);
var state_55969__$1 = state_55969;
var statearr_55991_57302 = state_55969__$1;
(statearr_55991_57302[(2)] = inst_55962);

(statearr_55991_57302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (9))){
var inst_55938 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var state_55969__$1 = state_55969;
var statearr_55992_57304 = state_55969__$1;
(statearr_55992_57304[(2)] = inst_55938);

(statearr_55992_57304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55970 === (5))){
var inst_55933 = frontend.fs.sync.check_remote_graph_exists(graph_uuid);
var state_55969__$1 = state_55969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55969__$1,(8),inst_55933);
} else {
if((state_val_55970 === (10))){
var inst_55940 = frontend.fs.sync.set_env(frontend.fs.sync.rsapi,frontend.config.FILE_SYNC_PROD_QMARK_);
var inst_55941 = cljs.core.deref(_STAR_sync_state);
var inst_55942 = frontend.state.set_file_sync_state(inst_55941);
var inst_55943 = frontend.state.set_file_sync_manager(sm);
var inst_55944 = cljs.core.async.timeout((5000));
var state_55969__$1 = (function (){var statearr_55993 = state_55969;
(statearr_55993[(17)] = inst_55942);

(statearr_55993[(18)] = inst_55940);

(statearr_55993[(19)] = inst_55943);

return statearr_55993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55969__$1,(12),inst_55944);
} else {
if((state_val_55970 === (8))){
var inst_55935 = (state_55969[(2)]);
var inst_55936 = cljs.core.not(inst_55935);
var state_55969__$1 = state_55969;
if(inst_55936){
var statearr_55994_57305 = state_55969__$1;
(statearr_55994_57305[(1)] = (9));

} else {
var statearr_55995_57306 = state_55969__$1;
(statearr_55995_57306[(1)] = (10));

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
var frontend$fs$sync$sync_start_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$sync_start_$_state_machine__27573__auto____0 = (function (){
var statearr_55998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55998[(0)] = frontend$fs$sync$sync_start_$_state_machine__27573__auto__);

(statearr_55998[(1)] = (1));

return statearr_55998;
});
var frontend$fs$sync$sync_start_$_state_machine__27573__auto____1 = (function (state_55969){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55969);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55999){var ex__27576__auto__ = e55999;
var statearr_56000_57307 = state_55969;
(statearr_56000_57307[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55969[(4)]))){
var statearr_56001_57308 = state_55969;
(statearr_56001_57308[(1)] = cljs.core.first((state_55969[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57309 = state_55969;
state_55969 = G__57309;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$sync_start_$_state_machine__27573__auto__ = function(state_55969){
switch(arguments.length){
case 0:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____1.call(this,state_55969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____0;
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____1;
return frontend$fs$sync$sync_start_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56002 = f__27596__auto__();
(statearr_56002[(6)] = c__27595__auto__);

return statearr_56002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.fs.sync.js.map
