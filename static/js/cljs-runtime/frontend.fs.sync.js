goog.provide('frontend.fs.sync');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),"null",new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),"null",new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null,new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),null,new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),null,new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null,new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),null,new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026),new cljs.core.Symbol("cljs-time.core","date?","cljs-time.core/date?",1865755164,null),cljs_time.core.date_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__62858){
return cljs.core.set_QMARK_(G__62858);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__62859){
return cljs.core.set_QMARK_(G__62859);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__62860){
return cljs.core.map_QMARK_(G__62860);
}),(function (G__62860){
return cljs.core.contains_QMARK_(G__62860,new cljs.core.Keyword(null,"path","path",-188191168));
}),(function (G__62860){
return cljs.core.contains_QMARK_(G__62860,new cljs.core.Keyword(null,"time","time",1385887882));
})], null),(function (G__62860){
return ((cljs.core.map_QMARK_(G__62860)) && (((cljs.core.contains_QMARK_(G__62860,new cljs.core.Keyword(null,"path","path",-188191168))) && (cljs.core.contains_QMARK_(G__62860,new cljs.core.Keyword(null,"time","time",1385887882))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"time","time",1385887882)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__62864){
return cljs.core.seq_QMARK_(G__62864);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.seq_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__62865){
return cljs.core.map_QMARK_(G__62865);
}),(function (G__62865){
return cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__62865){
return cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256));
}),(function (G__62865){
return cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085));
}),(function (G__62865){
return cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812));
}),(function (G__62865){
return cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"history","history",-247395220));
})], null),(function (G__62865){
return ((cljs.core.map_QMARK_(G__62865)) && (((cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"state","state",-1988618099))) && (((cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))) && (((cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))) && (((cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))) && (cljs.core.contains_QMARK_(G__62865,new cljs.core.Keyword(null,"history","history",-247395220))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"history","history",-247395220)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file","null","delete_files","null","update_files","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file",null,"delete_files",null,"update_files",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__62913){
return cljs.core.map_QMARK_(G__62913);
}),(function (G__62913){
return cljs.core.contains_QMARK_(G__62913,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
}),(function (G__62913){
return cljs.core.contains_QMARK_(G__62913,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
}),(function (G__62913){
return cljs.core.contains_QMARK_(G__62913,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
})], null),(function (G__62913){
return ((cljs.core.map_QMARK_(G__62913)) && (((cljs.core.contains_QMARK_(G__62913,new cljs.core.Keyword(null,"TXId","TXId",-902804781))) && (((cljs.core.contains_QMARK_(G__62913,new cljs.core.Keyword(null,"TXType","TXType",-476865365))) && (cljs.core.contains_QMARK_(G__62913,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),new cljs.core.Keyword(null,"TXType","TXType",-476865365),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXId","TXId",-902804781))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXType","TXType",-476865365))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__62945_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),p1__62945_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Keyword(null,"unknown","unknown",-935977881)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__62949_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),p1__62949_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__62951_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),p1__62951_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__62952#","p1__62952#",-737212912,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"p1__62952#","p1__62952#",-737212912,null))),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),(function (p1__62952_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),p1__62952_SHARP_);
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63019){
var state_val_63020 = (state_63019[(1)]);
if((state_val_63020 === (7))){
var inst_63000 = cljs.core.async.timeout((1000));
var state_63019__$1 = state_63019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63019__$1,(10),inst_63000);
} else {
if((state_val_63020 === (1))){
var state_63019__$1 = state_63019;
var statearr_63024_66432 = state_63019__$1;
(statearr_63024_66432[(2)] = null);

(statearr_63024_66432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (4))){
var inst_62987 = (state_63019[(7)]);
var inst_62998 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_62987);
var state_63019__$1 = state_63019;
if(inst_62998){
var statearr_63027_66433 = state_63019__$1;
(statearr_63027_66433[(1)] = (7));

} else {
var statearr_63029_66434 = state_63019__$1;
(statearr_63029_66434[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (6))){
var inst_63015 = (state_63019[(2)]);
var state_63019__$1 = state_63019;
var statearr_63031_66436 = state_63019__$1;
(statearr_63031_66436[(2)] = inst_63015);

(statearr_63031_66436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (3))){
var inst_63017 = (state_63019[(2)]);
var state_63019__$1 = state_63019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63019__$1,inst_63017);
} else {
if((state_val_63020 === (2))){
var inst_62987 = (state_63019[(7)]);
var inst_62987__$1 = ws.readyState;
var inst_62991 = [(3),null,(2),null];
var inst_62992 = (new cljs.core.PersistentArrayMap(null,2,inst_62991,null));
var inst_62993 = (new cljs.core.PersistentHashSet(null,inst_62992,null));
var inst_62994 = cljs.core.contains_QMARK_(inst_62993,inst_62987__$1);
var inst_62995 = (!(inst_62994));
var state_63019__$1 = (function (){var statearr_63033 = state_63019;
(statearr_63033[(7)] = inst_62987__$1);

return statearr_63033;
})();
if(inst_62995){
var statearr_63034_66437 = state_63019__$1;
(statearr_63034_66437[(1)] = (4));

} else {
var statearr_63035_66438 = state_63019__$1;
(statearr_63035_66438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (11))){
var inst_63009 = (state_63019[(2)]);
var state_63019__$1 = (function (){var statearr_63036 = state_63019;
(statearr_63036[(8)] = inst_63009);

return statearr_63036;
})();
var statearr_63037_66439 = state_63019__$1;
(statearr_63037_66439[(2)] = null);

(statearr_63037_66439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (9))){
var inst_63012 = (state_63019[(2)]);
var state_63019__$1 = state_63019;
var statearr_63038_66440 = state_63019__$1;
(statearr_63038_66440[(2)] = inst_63012);

(statearr_63038_66440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (5))){
var state_63019__$1 = state_63019;
var statearr_63039_66441 = state_63019__$1;
(statearr_63039_66441[(2)] = null);

(statearr_63039_66441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (10))){
var inst_63002 = (state_63019[(2)]);
var state_63019__$1 = (function (){var statearr_63042 = state_63019;
(statearr_63042[(9)] = inst_63002);

return statearr_63042;
})();
var statearr_63043_66442 = state_63019__$1;
(statearr_63043_66442[(2)] = null);

(statearr_63043_66442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63020 === (8))){
var inst_63005 = ws.send("PING");
var inst_63007 = cljs.core.async.timeout((30000));
var state_63019__$1 = (function (){var statearr_63044 = state_63019;
(statearr_63044[(10)] = inst_63005);

return statearr_63044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63019__$1,(11),inst_63007);
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
var statearr_63045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63045[(0)] = frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__);

(statearr_63045[(1)] = (1));

return statearr_63045;
});
var frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____1 = (function (state_63019){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63019);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63046){var ex__41842__auto__ = e63046;
var statearr_63047_66445 = state_63019;
(statearr_63047_66445[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63019[(4)]))){
var statearr_63048_66446 = state_63019;
(statearr_63048_66446[(1)] = cljs.core.first((state_63019[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66447 = state_63019;
state_63019 = G__66447;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__ = function(state_63019){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____1.call(this,state_63019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____0;
frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto____1;
return frontend$fs$sync$ws_ping_loop_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63050 = f__41862__auto__();
(statearr_63050[(6)] = c__41861__auto__);

return statearr_63050;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63057){
var state_val_63058 = (state_63057[(1)]);
if((state_val_63058 === (1))){
var inst_63053 = cljs.core.async.timeout((1000));
var inst_63054 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-connecting graph",graph_uuid], 0));
var inst_63055 = (frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(graph_uuid,_STAR_ws,remote_changes_chan) : frontend.fs.sync.ws_listen_BANG__STAR_.call(null,graph_uuid,_STAR_ws,remote_changes_chan));
var state_63057__$1 = (function (){var statearr_63060 = state_63057;
(statearr_63060[(7)] = inst_63054);

(statearr_63060[(8)] = inst_63053);

return statearr_63060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63057__$1,inst_63055);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__ = null;
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____0 = (function (){
var statearr_63061 = [null,null,null,null,null,null,null,null,null];
(statearr_63061[(0)] = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__);

(statearr_63061[(1)] = (1));

return statearr_63061;
});
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____1 = (function (state_63057){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63057);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63062){var ex__41842__auto__ = e63062;
var statearr_63063_66454 = state_63057;
(statearr_63063_66454[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63057[(4)]))){
var statearr_63064_66455 = state_63057;
(statearr_63064_66455[(1)] = cljs.core.first((state_63057[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66458 = state_63057;
state_63057 = G__66458;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__ = function(state_63057){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____1.call(this,state_63057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____0;
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto____1;
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63067 = f__41862__auto__();
(statearr_63067[(6)] = c__41861__auto__);

return statearr_63067;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63093){
var state_val_63094 = (state_63093[(1)]);
if((state_val_63094 === (1))){
var inst_63080 = ["https://",frontend.config.API_DOMAIN,"/file-sync/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_name)].join('');
var inst_63081 = [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_63082 = cljs.core.clj__GT_js(body);
var inst_63083 = JSON.stringify(inst_63082);
var inst_63084 = [token,inst_63083,false];
var inst_63085 = cljs.core.PersistentHashMap.fromArrays(inst_63081,inst_63084);
var inst_63086 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_63080,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63085], 0));
var inst_63087 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"body","body",-2049205669)];
var state_63093__$1 = (function (){var statearr_63097 = state_63093;
(statearr_63097[(7)] = inst_63087);

return statearr_63097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63093__$1,(2),inst_63086);
} else {
if((state_val_63094 === (2))){
var inst_63087 = (state_63093[(7)]);
var inst_63089 = (state_63093[(2)]);
var inst_63090 = [inst_63089,api_name,body];
var inst_63091 = cljs.core.PersistentHashMap.fromArrays(inst_63087,inst_63090);
var state_63093__$1 = state_63093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63093__$1,inst_63091);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$request_once_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$request_once_$_state_machine__41839__auto____0 = (function (){
var statearr_63098 = [null,null,null,null,null,null,null,null];
(statearr_63098[(0)] = frontend$fs$sync$request_once_$_state_machine__41839__auto__);

(statearr_63098[(1)] = (1));

return statearr_63098;
});
var frontend$fs$sync$request_once_$_state_machine__41839__auto____1 = (function (state_63093){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63093);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63099){var ex__41842__auto__ = e63099;
var statearr_63100_66463 = state_63093;
(statearr_63100_66463[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63093[(4)]))){
var statearr_63101_66465 = state_63093;
(statearr_63101_66465[(1)] = cljs.core.first((state_63093[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66466 = state_63093;
state_63093 = G__66466;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$request_once_$_state_machine__41839__auto__ = function(state_63093){
switch(arguments.length){
case 0:
return frontend$fs$sync$request_once_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$request_once_$_state_machine__41839__auto____1.call(this,state_63093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$request_once_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$request_once_$_state_machine__41839__auto____0;
frontend$fs$sync$request_once_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$request_once_$_state_machine__41839__auto____1;
return frontend$fs$sync$request_once_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63102 = f__41862__auto__();
(statearr_63102[(6)] = c__41861__auto__);

return statearr_63102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.request = (function frontend$fs$sync$request(var_args){
var G__63104 = arguments.length;
switch (G__63104) {
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63149){
var state_val_63150 = (state_63149[(1)]);
if((state_val_63150 === (7))){
var inst_63107 = (state_63149[(7)]);
var inst_63145 = new cljs.core.Keyword(null,"resp","resp",1418702376).cljs$core$IFn$_invoke$arity$1(inst_63107);
var state_63149__$1 = state_63149;
var statearr_63151_66468 = state_63149__$1;
(statearr_63151_66468[(2)] = inst_63145);

(statearr_63151_66468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63150 === (1))){
var inst_63105 = frontend.fs.sync.request_once(api_name,body,token);
var state_63149__$1 = state_63149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63149__$1,(2),inst_63105);
} else {
if((state_val_63150 === (4))){
var inst_63116 = (state_63149[(8)]);
var state_63149__$1 = state_63149;
var statearr_63152_66470 = state_63149__$1;
(statearr_63152_66470[(2)] = inst_63116);

(statearr_63152_66470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63150 === (6))){
var inst_63129 = ((1000) * retry_count);
var inst_63130 = (((60000) < inst_63129) ? (60000) : inst_63129);
var inst_63131 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will retry after",inst_63130,"ms"], 0));
var inst_63132 = ((1000) * retry_count);
var inst_63133 = (((60000) < inst_63132) ? (60000) : inst_63132);
var inst_63134 = cljs.core.async.timeout(inst_63133);
var state_63149__$1 = (function (){var statearr_63153 = state_63149;
(statearr_63153[(9)] = inst_63131);

return statearr_63153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63149__$1,(9),inst_63134);
} else {
if((state_val_63150 === (3))){
var inst_63107 = (state_63149[(7)]);
var inst_63118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63119 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_63120 = (new cljs.core.PersistentVector(null,2,(5),inst_63118,inst_63119,null));
var inst_63121 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_63107,inst_63120);
var inst_63122 = frontend.fs.sync.get_json_body(inst_63121);
var inst_63123 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_63122);
var inst_63124 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Unauthorized",inst_63123);
var state_63149__$1 = state_63149;
var statearr_63154_66472 = state_63149__$1;
(statearr_63154_66472[(2)] = inst_63124);

(statearr_63154_66472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63150 === (2))){
var inst_63116 = (state_63149[(8)]);
var inst_63107 = (state_63149[(7)]);
var inst_63107__$1 = (state_63149[(2)]);
var inst_63112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63113 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_63114 = (new cljs.core.PersistentVector(null,2,(5),inst_63112,inst_63113,null));
var inst_63115 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_63107__$1,inst_63114);
var inst_63116__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_63115);
var state_63149__$1 = (function (){var statearr_63155 = state_63149;
(statearr_63155[(8)] = inst_63116__$1);

(statearr_63155[(7)] = inst_63107__$1);

return statearr_63155;
})();
if(inst_63116__$1){
var statearr_63156_66473 = state_63149__$1;
(statearr_63156_66473[(1)] = (3));

} else {
var statearr_63157_66474 = state_63149__$1;
(statearr_63157_66474[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63150 === (11))){
var inst_63143 = (state_63149[(2)]);
var state_63149__$1 = state_63149;
var statearr_63158_66475 = state_63149__$1;
(statearr_63158_66475[(2)] = inst_63143);

(statearr_63158_66475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63150 === (9))){
var inst_63136 = (state_63149[(2)]);
var inst_63137 = (refresh_token_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_token_fn.cljs$core$IFn$_invoke$arity$0() : refresh_token_fn.call(null));
var state_63149__$1 = (function (){var statearr_63159 = state_63149;
(statearr_63159[(10)] = inst_63136);

return statearr_63159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63149__$1,(10),inst_63137);
} else {
if((state_val_63150 === (5))){
var inst_63127 = (state_63149[(2)]);
var state_63149__$1 = state_63149;
if(cljs.core.truth_(inst_63127)){
var statearr_63160_66476 = state_63149__$1;
(statearr_63160_66476[(1)] = (6));

} else {
var statearr_63161_66477 = state_63149__$1;
(statearr_63161_66477[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63150 === (10))){
var inst_63139 = (state_63149[(2)]);
var inst_63140 = (retry_count + (1));
var inst_63141 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,inst_63139,refresh_token_fn,inst_63140);
var state_63149__$1 = state_63149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63149__$1,(11),inst_63141);
} else {
if((state_val_63150 === (8))){
var inst_63147 = (state_63149[(2)]);
var state_63149__$1 = state_63149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63149__$1,inst_63147);
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
var statearr_63162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63162[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63162[(1)] = (1));

return statearr_63162;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63149){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63149);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63163){var ex__41842__auto__ = e63163;
var statearr_63164_66479 = state_63149;
(statearr_63164_66479[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63149[(4)]))){
var statearr_63165_66480 = state_63149;
(statearr_63165_66480[(1)] = cljs.core.first((state_63149[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66481 = state_63149;
state_63149 = G__66481;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63149){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63166 = f__41862__auto__();
(statearr_63166[(6)] = c__41861__auto__);

return statearr_63166;
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

var frontend$fs$sync$IRelativePath$_relative_path$dyn_66482 = (function (this$){
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
return frontend$fs$sync$IRelativePath$_relative_path$dyn_66482(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStoppable = function(){};

var frontend$fs$sync$IStoppable$_stop_BANG_$dyn_66483 = (function (this$){
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
return frontend$fs$sync$IStoppable$_stop_BANG_$dyn_66483(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStopped_QMARK_ = function(){};

var frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_66484 = (function (this$){
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
return frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_66484(this$);
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
frontend.fs.sync.diff__GT_filetxns = (function frontend$fs$sync$diff__GT_filetxns(p__63201){
var map__63202 = p__63201;
var map__63202__$1 = cljs.core.__destructure_map(map__63202);
var TXId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
var TXType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
var TXContent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63202__$1,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_files",TXType);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("delete_files",TXType);
var update_or_del_type_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__63200_SHARP_){
return frontend.fs.sync.__GT_FileTxn(p1__63200_SHARP_,p1__63200_SHARP_,update_QMARK_,delete_QMARK_,TXId);
})));
var filepaths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,clojure.string.split_lines(TXContent));
var G__63203 = TXType;
switch (G__63203) {
case "update_files":
case "delete_files":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(update_or_del_type_xf,filepaths);

break;
case "rename_file":
return (new cljs.core.List(null,frontend.fs.sync.__GT_FileTxn(cljs.core.first(filepaths),cljs.core.second(filepaths),false,false,TXId),null,(1),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63203)].join('')));

}
});
/**
 * transducer.
 *   remove duplicate update&delete `FileTxn`s.
 */
frontend.fs.sync.distinct_update_filetxns_xf = (function frontend$fs$sync$distinct_update_filetxns_xf(rf){
var seen_update_AMPERSAND_delete_filetxns = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__66488 = null;
var G__66488__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__66488__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__66488__2 = (function (result,filetxn){
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
G__66488 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__66488__0.call(this);
case 1:
return G__66488__1.call(this,result);
case 2:
return G__66488__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__66488.cljs$core$IFn$_invoke$arity$0 = G__66488__0;
G__66488.cljs$core$IFn$_invoke$arity$1 = G__66488__1;
G__66488.cljs$core$IFn$_invoke$arity$2 = G__66488__2;
return G__66488;
})()
});
/**
 * transducer.
 *   remove update&rename filetxns if they are deleted later(in greater txid filetxn).
 */
frontend.fs.sync.remove_deleted_filetxns_xf = (function frontend$fs$sync$remove_deleted_filetxns_xf(rf){
var seen_deleted_paths = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__66489 = null;
var G__66489__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__66489__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__66489__2 = (function (result,filetxn){
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
G__66489 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__66489__0.call(this);
case 1:
return G__66489__1.call(this,result);
case 2:
return G__66489__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__66489.cljs$core$IFn$_invoke$arity$0 = G__66489__0;
G__66489.cljs$core$IFn$_invoke$arity$1 = G__66489__1;
G__66489.cljs$core$IFn$_invoke$arity$2 = G__66489__2;
return G__66489;
})()
});
/**
 * return transducer.
 *   partition filetxns, at most N update-filetxns in each partition,
 *   for delete and rename type, only one filetxn in each partition.
 */
frontend.fs.sync.partition_filetxns = (function frontend$fs$sync$partition_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (p1__63206_SHARP_){
return p1__63206_SHARP_.updated_QMARK_;
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ts){
if(cljs.core.truth_((function (){var G__63207 = cljs.core.first(ts);
if((G__63207 == null)){
return null;
} else {
return G__63207.updated_QMARK_;
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
frontend.fs.sync.filepath__GT_diff = (function frontend$fs$sync$filepath__GT_diff(index,p__63208){
var map__63209 = p__63208;
var map__63209__$1 = cljs.core.__destructure_map(map__63209);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63209__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63209__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63209__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
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
(self__.normalized_path = (function (){var G__63210 = self__.path;
var G__63210__$1 = ((clojure.string.starts_with_QMARK_(self__.path,"/"))?clojure.string.replace_first(G__63210,"/",""):G__63210);
if(cljs.core.truth_(self__.remote_QMARK_)){
return frontend.fs.sync.remove_user_graph_uuid_prefix(G__63210__$1);
} else {
return G__63210__$1;
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

var frontend$fs$sync$IRSAPI$set_env$dyn_66493 = (function (this$,prod_QMARK_){
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
return frontend$fs$sync$IRSAPI$set_env$dyn_66493(this$,prod_QMARK_);
}
});

var frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_66494 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_66494(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_66495 = (function (this$,graph_uuid,base_path){
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
return frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_66495(this$,graph_uuid,base_path);
}
});

var frontend$fs$sync$IRSAPI$rename_local_file$dyn_66496 = (function (this$,graph_uuid,base_path,from,to){
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
return frontend$fs$sync$IRSAPI$rename_local_file$dyn_66496(this$,graph_uuid,base_path,from,to);
}
});

var frontend$fs$sync$IRSAPI$update_local_files$dyn_66498 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$update_local_files$dyn_66498(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$delete_local_files$dyn_66499 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$delete_local_files$dyn_66499(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$update_remote_file$dyn_66504 = (function (this$,graph_uuid,base_path,filepath,local_txid){
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
return frontend$fs$sync$IRSAPI$update_remote_file$dyn_66504(this$,graph_uuid,base_path,filepath,local_txid);
}
});

var frontend$fs$sync$IRSAPI$update_remote_files$dyn_66505 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
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
return frontend$fs$sync$IRSAPI$update_remote_files$dyn_66505(this$,graph_uuid,base_path,filepaths,local_txid);
}
});

var frontend$fs$sync$IRSAPI$delete_remote_files$dyn_66506 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
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
return frontend$fs$sync$IRSAPI$delete_remote_files$dyn_66506(this$,graph_uuid,base_path,filepaths,local_txid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IRemoteAPI = function(){};

var frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_66507 = (function (this$,graph_uuid){
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
return frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_66507(this$,graph_uuid);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_66508 = (function (this$,graph_uuid,filepaths){
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
return frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_66508(this$,graph_uuid,filepaths);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_66509 = (function (this$,graph_name_opt,graph_uuid_opt){
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
return frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_66509(this$,graph_name_opt,graph_uuid_opt);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_66510 = (function (this$,graph_uuid,filepath){
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
return frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_66510(this$,graph_uuid,filepath);
}
});

var frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_66511 = (function (this$){
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
return frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_66511(this$);
}
});

var frontend$fs$sync$IRemoteAPI$get_diff$dyn_66513 = (function (this$,graph_uuid,from_txid){
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
return frontend$fs$sync$IRemoteAPI$get_diff$dyn_66513(this$,graph_uuid,from_txid);
}
});

var frontend$fs$sync$IRemoteAPI$create_graph$dyn_66514 = (function (this$,graph_name){
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
return frontend$fs$sync$IRemoteAPI$create_graph$dyn_66514(this$,graph_name);
}
});

var frontend$fs$sync$IRemoteAPI$delete_graph$dyn_66515 = (function (this$,graph_uuid){
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
return frontend$fs$sync$IRemoteAPI$delete_graph$dyn_66515(this$,graph_uuid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IToken = function(){};

var frontend$fs$sync$IToken$get_token$dyn_66517 = (function (this$){
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
return frontend$fs$sync$IToken$get_token$dyn_66517(this$);
}
});

var frontend$fs$sync$IToken$refresh_token$dyn_66518 = (function (this$){
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
return frontend$fs$sync$IToken$refresh_token$dyn_66518(this$);
}
});

frontend.fs.sync.check_files_exists = (function frontend$fs$sync$check_files_exists(base_path,file_paths){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63259){
var state_val_63260 = (state_63259[(1)]);
if((state_val_63260 === (1))){
var inst_63245 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_63259__$1 = state_63259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63259__$1,(2),inst_63245);
} else {
if((state_val_63260 === (2))){
var inst_63248 = (state_63259[(7)]);
var inst_63247 = (state_63259[(2)]);
var inst_63248__$1 = cljs.core.ex_cause(inst_63247);
var inst_63249 = (inst_63248__$1 == null);
var state_63259__$1 = (function (){var statearr_63261 = state_63259;
(statearr_63261[(7)] = inst_63248__$1);

return statearr_63261;
})();
if(cljs.core.truth_(inst_63249)){
var statearr_63265_66521 = state_63259__$1;
(statearr_63265_66521[(1)] = (3));

} else {
var statearr_63266_66522 = state_63259__$1;
(statearr_63266_66522[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63260 === (3))){
var state_63259__$1 = state_63259;
var statearr_63267_66523 = state_63259__$1;
(statearr_63267_66523[(2)] = null);

(statearr_63267_66523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63260 === (4))){
var inst_63248 = (state_63259[(7)]);
var inst_63252 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63248),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_paths)].join('');
var inst_63253 = ["Assert failed: ",inst_63252,"\n","(nil? cause)"].join('');
var inst_63254 = (new Error(inst_63253));
var inst_63255 = (function(){throw inst_63254})();
var state_63259__$1 = state_63259;
var statearr_63268_66524 = state_63259__$1;
(statearr_63268_66524[(2)] = inst_63255);

(statearr_63268_66524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63260 === (5))){
var inst_63257 = (state_63259[(2)]);
var state_63259__$1 = state_63259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63259__$1,inst_63257);
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
var statearr_63269 = [null,null,null,null,null,null,null,null];
(statearr_63269[(0)] = frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__);

(statearr_63269[(1)] = (1));

return statearr_63269;
});
var frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____1 = (function (state_63259){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63259);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63270){var ex__41842__auto__ = e63270;
var statearr_63271_66525 = state_63259;
(statearr_63271_66525[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63259[(4)]))){
var statearr_63272_66526 = state_63259;
(statearr_63272_66526[(1)] = cljs.core.first((state_63259[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66527 = state_63259;
state_63259 = G__66527;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__ = function(state_63259){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____1.call(this,state_63259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____0;
frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_exists_$_state_machine__41839__auto____1;
return frontend$fs$sync$check_files_exists_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63275 = f__41862__auto__();
(statearr_63275[(6)] = c__41861__auto__);

return statearr_63275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.check_files_not_exists = (function frontend$fs$sync$check_files_not_exists(base_path,file_paths){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63291){
var state_val_63292 = (state_63291[(1)]);
if((state_val_63292 === (1))){
var inst_63277 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_63291__$1 = state_63291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63291__$1,(2),inst_63277);
} else {
if((state_val_63292 === (2))){
var inst_63279 = (state_63291[(2)]);
var inst_63280 = cljs.core.ex_cause(inst_63279);
var inst_63281 = (inst_63280 == null);
var inst_63282 = cljs.core.not(inst_63281);
var state_63291__$1 = state_63291;
if(inst_63282){
var statearr_63294_66530 = state_63291__$1;
(statearr_63294_66530[(1)] = (3));

} else {
var statearr_63295_66531 = state_63291__$1;
(statearr_63295_66531[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (3))){
var state_63291__$1 = state_63291;
var statearr_63296_66532 = state_63291__$1;
(statearr_63296_66532[(2)] = null);

(statearr_63296_66532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (4))){
var inst_63286 = (new Error("Assert failed: (some? cause)"));
var inst_63287 = (function(){throw inst_63286})();
var state_63291__$1 = state_63291;
var statearr_63297_66533 = state_63291__$1;
(statearr_63297_66533[(2)] = inst_63287);

(statearr_63297_66533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (5))){
var inst_63289 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63291__$1,inst_63289);
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
var statearr_63298 = [null,null,null,null,null,null,null];
(statearr_63298[(0)] = frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__);

(statearr_63298[(1)] = (1));

return statearr_63298;
});
var frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____1 = (function (state_63291){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63291);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63299){var ex__41842__auto__ = e63299;
var statearr_63300_66534 = state_63291;
(statearr_63300_66534[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63291[(4)]))){
var statearr_63301_66535 = state_63291;
(statearr_63301_66535[(1)] = cljs.core.first((state_63291[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66536 = state_63291;
state_63291 = G__66536;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__ = function(state_63291){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____1.call(this,state_63291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____0;
frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto____1;
return frontend$fs$sync$check_files_not_exists_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63304 = f__41862__auto__();
(statearr_63304[(6)] = c__41861__auto__);

return statearr_63304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.retry_rsapi = (function frontend$fs$sync$retry_rsapi(f){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63340){
var state_val_63341 = (state_63340[(1)]);
if((state_val_63341 === (7))){
var inst_63328 = (state_63340[(2)]);
var state_63340__$1 = state_63340;
if(cljs.core.truth_(inst_63328)){
var statearr_63342_66537 = state_63340__$1;
(statearr_63342_66537[(1)] = (11));

} else {
var statearr_63343_66538 = state_63340__$1;
(statearr_63343_66538[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (1))){
var inst_63311 = (3);
var state_63340__$1 = (function (){var statearr_63344 = state_63340;
(statearr_63344[(7)] = inst_63311);

return statearr_63344;
})();
var statearr_63345_66539 = state_63340__$1;
(statearr_63345_66539[(2)] = null);

(statearr_63345_66539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (4))){
var inst_63315 = (state_63340[(8)]);
var inst_63316 = (state_63340[(9)]);
var inst_63315__$1 = (state_63340[(2)]);
var inst_63316__$1 = (inst_63315__$1 instanceof cljs.core.ExceptionInfo);
var state_63340__$1 = (function (){var statearr_63346 = state_63340;
(statearr_63346[(8)] = inst_63315__$1);

(statearr_63346[(9)] = inst_63316__$1);

return statearr_63346;
})();
if(cljs.core.truth_(inst_63316__$1)){
var statearr_63347_66540 = state_63340__$1;
(statearr_63347_66540[(1)] = (5));

} else {
var statearr_63348_66541 = state_63340__$1;
(statearr_63348_66541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (13))){
var inst_63336 = (state_63340[(2)]);
var state_63340__$1 = state_63340;
var statearr_63349_66542 = state_63340__$1;
(statearr_63349_66542[(2)] = inst_63336);

(statearr_63349_66542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (6))){
var inst_63316 = (state_63340[(9)]);
var state_63340__$1 = state_63340;
var statearr_63350_66543 = state_63340__$1;
(statearr_63350_66543[(2)] = inst_63316);

(statearr_63350_66543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (3))){
var inst_63338 = (state_63340[(2)]);
var state_63340__$1 = state_63340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63340__$1,inst_63338);
} else {
if((state_val_63341 === (12))){
var inst_63315 = (state_63340[(8)]);
var state_63340__$1 = state_63340;
var statearr_63351_66544 = state_63340__$1;
(statearr_63351_66544[(2)] = inst_63315);

(statearr_63351_66544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (2))){
var inst_63313 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var state_63340__$1 = state_63340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63340__$1,(4),inst_63313);
} else {
if((state_val_63341 === (11))){
var inst_63311 = (state_63340[(7)]);
var inst_63330 = ["retry(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63311),") ..."].join('');
var inst_63331 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_63330], 0));
var inst_63332 = (inst_63311 - (1));
var inst_63311__$1 = inst_63332;
var state_63340__$1 = (function (){var statearr_63352 = state_63340;
(statearr_63352[(10)] = inst_63331);

(statearr_63352[(7)] = inst_63311__$1);

return statearr_63352;
})();
var statearr_63353_66545 = state_63340__$1;
(statearr_63353_66545[(2)] = null);

(statearr_63353_66545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (9))){
var inst_63320 = (state_63340[(11)]);
var state_63340__$1 = state_63340;
var statearr_63354_66546 = state_63340__$1;
(statearr_63354_66546[(2)] = inst_63320);

(statearr_63354_66546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (5))){
var inst_63315 = (state_63340[(8)]);
var inst_63320 = (state_63340[(11)]);
var inst_63318 = cljs.core.ex_cause(inst_63315);
var inst_63319 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63318);
var inst_63320__$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_63319,"operation timed out");
var state_63340__$1 = (function (){var statearr_63356 = state_63340;
(statearr_63356[(11)] = inst_63320__$1);

return statearr_63356;
})();
if(cljs.core.truth_(inst_63320__$1)){
var statearr_63357_66547 = state_63340__$1;
(statearr_63357_66547[(1)] = (8));

} else {
var statearr_63358_66548 = state_63340__$1;
(statearr_63358_66548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (10))){
var inst_63325 = (state_63340[(2)]);
var state_63340__$1 = state_63340;
var statearr_63359_66549 = state_63340__$1;
(statearr_63359_66549[(2)] = inst_63325);

(statearr_63359_66549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63341 === (8))){
var inst_63311 = (state_63340[(7)]);
var inst_63322 = (inst_63311 > (0));
var state_63340__$1 = state_63340;
var statearr_63360_66552 = state_63340__$1;
(statearr_63360_66552[(2)] = inst_63322);

(statearr_63360_66552[(1)] = (10));


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
var statearr_63361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63361[(0)] = frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__);

(statearr_63361[(1)] = (1));

return statearr_63361;
});
var frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____1 = (function (state_63340){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63340);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63362){var ex__41842__auto__ = e63362;
var statearr_63363_66554 = state_63340;
(statearr_63363_66554[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63340[(4)]))){
var statearr_63364_66555 = state_63340;
(statearr_63364_66555[(1)] = cljs.core.first((state_63340[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66556 = state_63340;
state_63340 = G__66556;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__ = function(state_63340){
switch(arguments.length){
case 0:
return frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____1.call(this,state_63340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____0;
frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto____1;
return frontend$fs$sync$retry_rsapi_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63365 = f__41862__auto__();
(statearr_63365[(6)] = c__41861__auto__);

return statearr_63365;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63380){
var state_val_63381 = (state_63380[(1)]);
if((state_val_63381 === (1))){
var inst_63371 = (state_63380[(7)]);
var inst_63371__$1 = frontend.state.get_auth_id_token();
var state_63380__$1 = (function (){var statearr_63382 = state_63380;
(statearr_63382[(7)] = inst_63371__$1);

return statearr_63382;
})();
if(cljs.core.truth_(inst_63371__$1)){
var statearr_63384_66561 = state_63380__$1;
(statearr_63384_66561[(1)] = (2));

} else {
var statearr_63385_66563 = state_63380__$1;
(statearr_63385_66563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63381 === (2))){
var inst_63371 = (state_63380[(7)]);
var state_63380__$1 = state_63380;
var statearr_63386_66564 = state_63380__$1;
(statearr_63386_66564[(2)] = inst_63371);

(statearr_63386_66564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63381 === (3))){
var inst_63374 = this$__$1.refresh_token();
var state_63380__$1 = state_63380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63380__$1,(5),inst_63374);
} else {
if((state_val_63381 === (4))){
var inst_63378 = (state_63380[(2)]);
var state_63380__$1 = state_63380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63380__$1,inst_63378);
} else {
if((state_val_63381 === (5))){
var inst_63376 = (state_63380[(2)]);
var state_63380__$1 = state_63380;
var statearr_63387_66565 = state_63380__$1;
(statearr_63387_66565[(2)] = inst_63376);

(statearr_63387_66565[(1)] = (4));


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
var statearr_63388 = [null,null,null,null,null,null,null,null];
(statearr_63388[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63388[(1)] = (1));

return statearr_63388;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63380){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63380);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63389){var ex__41842__auto__ = e63389;
var statearr_63390_66566 = state_63380;
(statearr_63390_66566[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63380[(4)]))){
var statearr_63392_66567 = state_63380;
(statearr_63392_66567[(1)] = cljs.core.first((state_63380[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66568 = state_63380;
state_63380 = G__66568;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63380){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63393 = f__41862__auto__();
(statearr_63393[(6)] = c__41861__auto__);

return statearr_63393;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63400){
var state_val_63401 = (state_63400[(1)]);
if((state_val_63401 === (1))){
var inst_63395 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_63400__$1 = state_63400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63400__$1,(2),inst_63395);
} else {
if((state_val_63401 === (2))){
var inst_63397 = (state_63400[(2)]);
var inst_63398 = frontend.state.get_auth_id_token();
var state_63400__$1 = (function (){var statearr_63402 = state_63400;
(statearr_63402[(7)] = inst_63397);

return statearr_63402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63400__$1,inst_63398);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_63408 = [null,null,null,null,null,null,null,null];
(statearr_63408[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63408[(1)] = (1));

return statearr_63408;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63400){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63400);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63409){var ex__41842__auto__ = e63409;
var statearr_63410_66570 = state_63400;
(statearr_63410_66570[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63400[(4)]))){
var statearr_63411_66571 = state_63400;
(statearr_63411_66571[(1)] = cljs.core.first((state_63400[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66572 = state_63400;
state_63400 = G__66572;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63400){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63412 = f__41862__auto__();
(statearr_63412[(6)] = c__41861__auto__);

return statearr_63412;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63422){
var state_val_63423 = (state_63422[(1)]);
if((state_val_63423 === (1))){
var inst_63414 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_63422__$1 = state_63422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63422__$1,(2),inst_63414);
} else {
if((state_val_63423 === (2))){
var inst_63416 = (state_63422[(2)]);
var inst_63417 = (function (){var token = inst_63416;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_63418 = frontend.fs.sync.retry_rsapi(inst_63417);
var state_63422__$1 = state_63422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63422__$1,(3),inst_63418);
} else {
if((state_val_63423 === (3))){
var inst_63420 = (state_63422[(2)]);
var state_63422__$1 = state_63422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63422__$1,inst_63420);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_63424 = [null,null,null,null,null,null,null];
(statearr_63424[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63424[(1)] = (1));

return statearr_63424;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63422){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63422);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63426){var ex__41842__auto__ = e63426;
var statearr_63427_66574 = state_63422;
(statearr_63427_66574[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63422[(4)]))){
var statearr_63428_66575 = state_63422;
(statearr_63428_66575[(1)] = cljs.core.first((state_63422[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66576 = state_63422;
state_63422 = G__66576;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63422){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63429 = f__41862__auto__();
(statearr_63429[(6)] = c__41861__auto__);

return statearr_63429;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63445){
var state_val_63446 = (state_63445[(1)]);
if((state_val_63446 === (1))){
var inst_63430 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-all-files-meta",graph_uuid,base_path], 0)));
});
})();
var inst_63431 = frontend.fs.sync.retry_rsapi(inst_63430);
var state_63445__$1 = state_63445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63445__$1,(2),inst_63431);
} else {
if((state_val_63446 === (2))){
var inst_63433 = (state_63445[(7)]);
var inst_63433__$1 = (state_63445[(2)]);
var inst_63434 = (inst_63433__$1 instanceof cljs.core.ExceptionInfo);
var state_63445__$1 = (function (){var statearr_63448 = state_63445;
(statearr_63448[(7)] = inst_63433__$1);

return statearr_63448;
})();
if(cljs.core.truth_(inst_63434)){
var statearr_63449_66577 = state_63445__$1;
(statearr_63449_66577[(1)] = (3));

} else {
var statearr_63450_66578 = state_63445__$1;
(statearr_63450_66578[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63446 === (3))){
var inst_63433 = (state_63445[(7)]);
var state_63445__$1 = state_63445;
var statearr_63451_66579 = state_63445__$1;
(statearr_63451_66579[(2)] = inst_63433);

(statearr_63451_66579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63446 === (4))){
var inst_63433 = (state_63445[(7)]);
var inst_63438 = (function (){var r = inst_63433;
return (function (p__63437){
var vec__63452 = p__63437;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63452,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63452,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_63439 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_63433);
var inst_63440 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_63438,inst_63439);
var inst_63441 = cljs.core.set(inst_63440);
var state_63445__$1 = state_63445;
var statearr_63461_66580 = state_63445__$1;
(statearr_63461_66580[(2)] = inst_63441);

(statearr_63461_66580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63446 === (5))){
var inst_63443 = (state_63445[(2)]);
var state_63445__$1 = state_63445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63445__$1,inst_63443);
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
var statearr_63462 = [null,null,null,null,null,null,null,null];
(statearr_63462[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63462[(1)] = (1));

return statearr_63462;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63445){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63445);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63463){var ex__41842__auto__ = e63463;
var statearr_63464_66581 = state_63445;
(statearr_63464_66581[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63445[(4)]))){
var statearr_63465_66582 = state_63445;
(statearr_63465_66582[(1)] = cljs.core.first((state_63445[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66583 = state_63445;
state_63445 = G__66583;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63445){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63467 = f__41862__auto__();
(statearr_63467[(6)] = c__41861__auto__);

return statearr_63467;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63482){
var state_val_63483 = (state_63482[(1)]);
if((state_val_63483 === (1))){
var inst_63468 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_63482__$1 = state_63482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63482__$1,(2),inst_63468);
} else {
if((state_val_63483 === (2))){
var inst_63470 = (state_63482[(2)]);
var inst_63471 = (function (){var token = inst_63470;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths,token], 0)));
});
})();
var inst_63472 = frontend.fs.sync.retry_rsapi(inst_63471);
var state_63482__$1 = state_63482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63482__$1,(3),inst_63472);
} else {
if((state_val_63483 === (3))){
var inst_63474 = (state_63482[(2)]);
var inst_63475 = frontend.state.developer_mode_QMARK_();
var state_63482__$1 = (function (){var statearr_63485 = state_63482;
(statearr_63485[(7)] = inst_63474);

return statearr_63485;
})();
if(cljs.core.truth_(inst_63475)){
var statearr_63486_66584 = state_63482__$1;
(statearr_63486_66584[(1)] = (4));

} else {
var statearr_63488_66585 = state_63482__$1;
(statearr_63488_66585[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63483 === (4))){
var inst_63477 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_63482__$1 = state_63482;
var statearr_63489_66586 = state_63482__$1;
(statearr_63489_66586[(2)] = inst_63477);

(statearr_63489_66586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63483 === (5))){
var state_63482__$1 = state_63482;
var statearr_63490_66587 = state_63482__$1;
(statearr_63490_66587[(2)] = null);

(statearr_63490_66587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63483 === (6))){
var inst_63474 = (state_63482[(7)]);
var inst_63480 = (state_63482[(2)]);
var state_63482__$1 = (function (){var statearr_63491 = state_63482;
(statearr_63491[(8)] = inst_63480);

return statearr_63491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63482__$1,inst_63474);
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
var statearr_63492 = [null,null,null,null,null,null,null,null,null];
(statearr_63492[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63492[(1)] = (1));

return statearr_63492;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63482){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63482);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63493){var ex__41842__auto__ = e63493;
var statearr_63494_66588 = state_63482;
(statearr_63494_66588[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63482[(4)]))){
var statearr_63495_66589 = state_63482;
(statearr_63495_66589[(1)] = cljs.core.first((state_63482[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66590 = state_63482;
state_63482 = G__66590;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63482){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63496 = f__41862__auto__();
(statearr_63496[(6)] = c__41861__auto__);

return statearr_63496;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63514){
var state_val_63515 = (state_63514[(1)]);
if((state_val_63515 === (1))){
var inst_63498 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-files-meta",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_63500 = frontend.fs.sync.retry_rsapi(inst_63498);
var state_63514__$1 = state_63514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63514__$1,(2),inst_63500);
} else {
if((state_val_63515 === (2))){
var inst_63502 = (state_63514[(7)]);
var inst_63502__$1 = (state_63514[(2)]);
var inst_63503 = (inst_63502__$1 instanceof cljs.core.ExceptionInfo);
var state_63514__$1 = (function (){var statearr_63517 = state_63514;
(statearr_63517[(7)] = inst_63502__$1);

return statearr_63517;
})();
if(cljs.core.truth_(inst_63503)){
var statearr_63518_66596 = state_63514__$1;
(statearr_63518_66596[(1)] = (3));

} else {
var statearr_63519_66597 = state_63514__$1;
(statearr_63519_66597[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63515 === (3))){
var inst_63502 = (state_63514[(7)]);
var state_63514__$1 = state_63514;
var statearr_63520_66598 = state_63514__$1;
(statearr_63520_66598[(2)] = inst_63502);

(statearr_63520_66598[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63515 === (4))){
var inst_63502 = (state_63514[(7)]);
var inst_63508 = (function (){var r = inst_63502;
return (function (p__63507){
var vec__63521 = p__63507;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63521,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63521,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_63509 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_63502);
var inst_63510 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_63508,inst_63509);
var state_63514__$1 = state_63514;
var statearr_63524_66599 = state_63514__$1;
(statearr_63524_66599[(2)] = inst_63510);

(statearr_63524_66599[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63515 === (5))){
var inst_63512 = (state_63514[(2)]);
var state_63514__$1 = state_63514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63514__$1,inst_63512);
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
var statearr_63525 = [null,null,null,null,null,null,null,null];
(statearr_63525[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63525[(1)] = (1));

return statearr_63525;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63514){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63514);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63526){var ex__41842__auto__ = e63526;
var statearr_63527_66600 = state_63514;
(statearr_63527_66600[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63514[(4)]))){
var statearr_63528_66601 = state_63514;
(statearr_63528_66601[(1)] = cljs.core.first((state_63514[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66602 = state_63514;
state_63514 = G__66602;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63514){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63529 = f__41862__auto__();
(statearr_63529[(6)] = c__41861__auto__);

return statearr_63529;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63539){
var state_val_63540 = (state_63539[(1)]);
if((state_val_63540 === (1))){
var inst_63531 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_63539__$1 = state_63539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63539__$1,(2),inst_63531);
} else {
if((state_val_63540 === (2))){
var inst_63533 = (state_63539[(2)]);
var inst_63534 = (function (){var token = inst_63533;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_63535 = frontend.fs.sync.retry_rsapi(inst_63534);
var state_63539__$1 = state_63539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63539__$1,(3),inst_63535);
} else {
if((state_val_63540 === (3))){
var inst_63537 = (state_63539[(2)]);
var state_63539__$1 = state_63539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63539__$1,inst_63537);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_63541 = [null,null,null,null,null,null,null];
(statearr_63541[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63541[(1)] = (1));

return statearr_63541;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63539){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63539);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63542){var ex__41842__auto__ = e63542;
var statearr_63543_66605 = state_63539;
(statearr_63543_66605[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63539[(4)]))){
var statearr_63544_66606 = state_63539;
(statearr_63544_66606[(1)] = cljs.core.first((state_63539[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66607 = state_63539;
state_63539 = G__66607;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63539){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63546 = f__41862__auto__();
(statearr_63546[(6)] = c__41861__auto__);

return statearr_63546;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63558){
var state_val_63559 = (state_63558[(1)]);
if((state_val_63559 === (1))){
var state_63558__$1 = state_63558;
if(cljs.core.truth_(prod_QMARK_)){
var statearr_63560_66608 = state_63558__$1;
(statearr_63560_66608[(1)] = (3));

} else {
var statearr_63567_66609 = state_63558__$1;
(statearr_63567_66609[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63559 === (2))){
var inst_63556 = (state_63558[(2)]);
var state_63558__$1 = state_63558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63558__$1,inst_63556);
} else {
if((state_val_63559 === (3))){
var state_63558__$1 = state_63558;
var statearr_63568_66610 = state_63558__$1;
(statearr_63568_66610[(2)] = "prod");

(statearr_63568_66610[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63559 === (4))){
var state_63558__$1 = state_63558;
var statearr_63569_66611 = state_63558__$1;
(statearr_63569_66611[(2)] = "dev");

(statearr_63569_66611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63559 === (5))){
var inst_63552 = (state_63558[(2)]);
var inst_63553 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set-env",inst_63552], 0));
var inst_63554 = cljs.core.async.interop.p__GT_c(inst_63553);
var state_63558__$1 = state_63558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63558__$1,(2),inst_63554);
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
var statearr_63570 = [null,null,null,null,null,null,null];
(statearr_63570[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63570[(1)] = (1));

return statearr_63570;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63558){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63558);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63571){var ex__41842__auto__ = e63571;
var statearr_63572_66612 = state_63558;
(statearr_63572_66612[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63558[(4)]))){
var statearr_63573_66613 = state_63558;
(statearr_63573_66613[(1)] = cljs.core.first((state_63558[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66614 = state_63558;
state_63558 = G__66614;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63558){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63574 = f__41862__auto__();
(statearr_63574[(6)] = c__41861__auto__);

return statearr_63574;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63583){
var state_val_63584 = (state_63583[(1)]);
if((state_val_63584 === (1))){
var inst_63575 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_63583__$1 = state_63583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63583__$1,(2),inst_63575);
} else {
if((state_val_63584 === (2))){
var inst_63577 = (state_63583[(2)]);
var inst_63578 = (function (){var token = inst_63577;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-file",graph_uuid,base_path,filepath,local_txid,token], 0)));
});
})();
var inst_63579 = frontend.fs.sync.retry_rsapi(inst_63578);
var state_63583__$1 = state_63583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63583__$1,(3),inst_63579);
} else {
if((state_val_63584 === (3))){
var inst_63581 = (state_63583[(2)]);
var state_63583__$1 = state_63583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63583__$1,inst_63581);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_63585 = [null,null,null,null,null,null,null];
(statearr_63585[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63585[(1)] = (1));

return statearr_63585;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63583){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63583);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63586){var ex__41842__auto__ = e63586;
var statearr_63587_66615 = state_63583;
(statearr_63587_66615[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63583[(4)]))){
var statearr_63588_66616 = state_63583;
(statearr_63588_66616[(1)] = cljs.core.first((state_63583[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66617 = state_63583;
state_63583 = G__66617;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63583){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63589 = f__41862__auto__();
(statearr_63589[(6)] = c__41861__auto__);

return statearr_63589;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63603){
var state_val_63604 = (state_63603[(1)]);
if((state_val_63604 === (1))){
var inst_63592 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-local-files",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_63593 = frontend.fs.sync.retry_rsapi(inst_63592);
var state_63603__$1 = state_63603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63603__$1,(2),inst_63593);
} else {
if((state_val_63604 === (2))){
var inst_63595 = (state_63603[(2)]);
var inst_63596 = frontend.state.developer_mode_QMARK_();
var state_63603__$1 = (function (){var statearr_63605 = state_63603;
(statearr_63605[(7)] = inst_63595);

return statearr_63605;
})();
if(cljs.core.truth_(inst_63596)){
var statearr_63606_66618 = state_63603__$1;
(statearr_63606_66618[(1)] = (3));

} else {
var statearr_63607_66619 = state_63603__$1;
(statearr_63607_66619[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63604 === (3))){
var inst_63598 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_63603__$1 = state_63603;
var statearr_63608_66620 = state_63603__$1;
(statearr_63608_66620[(2)] = inst_63598);

(statearr_63608_66620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63604 === (4))){
var state_63603__$1 = state_63603;
var statearr_63609_66621 = state_63603__$1;
(statearr_63609_66621[(2)] = null);

(statearr_63609_66621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63604 === (5))){
var inst_63595 = (state_63603[(7)]);
var inst_63601 = (state_63603[(2)]);
var state_63603__$1 = (function (){var statearr_63610 = state_63603;
(statearr_63610[(8)] = inst_63601);

return statearr_63610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63603__$1,inst_63595);
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
var statearr_63611 = [null,null,null,null,null,null,null,null,null];
(statearr_63611[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63611[(1)] = (1));

return statearr_63611;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63603){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63603);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63612){var ex__41842__auto__ = e63612;
var statearr_63613_66624 = state_63603;
(statearr_63613_66624[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63603[(4)]))){
var statearr_63614_66625 = state_63603;
(statearr_63614_66625[(1)] = cljs.core.first((state_63603[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66626 = state_63603;
state_63603 = G__66626;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63603){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63615 = f__41862__auto__();
(statearr_63615[(6)] = c__41861__auto__);

return statearr_63615;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63628){
var state_val_63629 = (state_63628[(1)]);
if((state_val_63629 === (1))){
var inst_63619 = (state_63628[(7)]);
var inst_63619__$1 = frontend.state.get_auth_id_token();
var state_63628__$1 = (function (){var statearr_63630 = state_63628;
(statearr_63630[(7)] = inst_63619__$1);

return statearr_63630;
})();
if(cljs.core.truth_(inst_63619__$1)){
var statearr_63631_66627 = state_63628__$1;
(statearr_63631_66627[(1)] = (2));

} else {
var statearr_63632_66628 = state_63628__$1;
(statearr_63632_66628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (2))){
var inst_63619 = (state_63628[(7)]);
var state_63628__$1 = state_63628;
var statearr_63633_66629 = state_63628__$1;
(statearr_63633_66629[(2)] = inst_63619);

(statearr_63633_66629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (3))){
var inst_63622 = this$__$1.refresh_token();
var state_63628__$1 = state_63628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63628__$1,(5),inst_63622);
} else {
if((state_val_63629 === (4))){
var inst_63626 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63628__$1,inst_63626);
} else {
if((state_val_63629 === (5))){
var inst_63624 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
var statearr_63634_66631 = state_63628__$1;
(statearr_63634_66631[(2)] = inst_63624);

(statearr_63634_66631[(1)] = (4));


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
var statearr_63635 = [null,null,null,null,null,null,null,null];
(statearr_63635[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63635[(1)] = (1));

return statearr_63635;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63628){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63628);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63636){var ex__41842__auto__ = e63636;
var statearr_63637_66632 = state_63628;
(statearr_63637_66632[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63628[(4)]))){
var statearr_63638_66633 = state_63628;
(statearr_63638_66633[(1)] = cljs.core.first((state_63628[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66635 = state_63628;
state_63628 = G__66635;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63628){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63639 = f__41862__auto__();
(statearr_63639[(6)] = c__41861__auto__);

return statearr_63639;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63646){
var state_val_63647 = (state_63646[(1)]);
if((state_val_63647 === (1))){
var inst_63641 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_63646__$1 = state_63646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63646__$1,(2),inst_63641);
} else {
if((state_val_63647 === (2))){
var inst_63643 = (state_63646[(2)]);
var inst_63644 = frontend.state.get_auth_id_token();
var state_63646__$1 = (function (){var statearr_63648 = state_63646;
(statearr_63648[(7)] = inst_63643);

return statearr_63648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63646__$1,inst_63644);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_63649 = [null,null,null,null,null,null,null,null];
(statearr_63649[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63649[(1)] = (1));

return statearr_63649;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63646){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63646);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63650){var ex__41842__auto__ = e63650;
var statearr_63651_66636 = state_63646;
(statearr_63651_66636[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63646[(4)]))){
var statearr_63652_66637 = state_63646;
(statearr_63652_66637[(1)] = cljs.core.first((state_63646[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66638 = state_63646;
state_63646 = G__66638;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63646){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63653 = f__41862__auto__();
(statearr_63653[(6)] = c__41861__auto__);

return statearr_63653;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63674){
var state_val_63675 = (state_63674[(1)]);
if((state_val_63675 === (1))){
var inst_63654 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017)];
var inst_63655 = [base_path];
var inst_63656 = cljs.core.PersistentHashMap.fromArrays(inst_63654,inst_63655);
var inst_63657 = cljs.core.clj__GT_js(inst_63656);
var inst_63658 = frontend.mobile.util.file_sync.getLocalAllFilesMeta(inst_63657);
var inst_63659 = cljs.core.async.interop.p__GT_c(inst_63658);
var state_63674__$1 = state_63674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63674__$1,(2),inst_63659);
} else {
if((state_val_63675 === (2))){
var inst_63661 = (state_63674[(7)]);
var inst_63661__$1 = (state_63674[(2)]);
var inst_63662 = (inst_63661__$1 instanceof cljs.core.ExceptionInfo);
var state_63674__$1 = (function (){var statearr_63678 = state_63674;
(statearr_63678[(7)] = inst_63661__$1);

return statearr_63678;
})();
if(cljs.core.truth_(inst_63662)){
var statearr_63679_66639 = state_63674__$1;
(statearr_63679_66639[(1)] = (3));

} else {
var statearr_63680_66640 = state_63674__$1;
(statearr_63680_66640[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63675 === (3))){
var inst_63661 = (state_63674[(7)]);
var state_63674__$1 = state_63674;
var statearr_63681_66641 = state_63674__$1;
(statearr_63681_66641[(2)] = inst_63661);

(statearr_63681_66641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63675 === (4))){
var inst_63661 = (state_63674[(7)]);
var inst_63666 = (function (){var r = inst_63661;
return (function (p__63665){
var vec__63682 = p__63665;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63682,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63682,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_63667 = inst_63661.result;
var inst_63668 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_63667);
var inst_63669 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_63666,inst_63668);
var inst_63670 = cljs.core.set(inst_63669);
var state_63674__$1 = state_63674;
var statearr_63686_66642 = state_63674__$1;
(statearr_63686_66642[(2)] = inst_63670);

(statearr_63686_66642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63675 === (5))){
var inst_63672 = (state_63674[(2)]);
var state_63674__$1 = state_63674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63674__$1,inst_63672);
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
var statearr_63693 = [null,null,null,null,null,null,null,null];
(statearr_63693[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63693[(1)] = (1));

return statearr_63693;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63674){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63674);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63694){var ex__41842__auto__ = e63694;
var statearr_63695_66643 = state_63674;
(statearr_63695_66643[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63674[(4)]))){
var statearr_63696_66644 = state_63674;
(statearr_63696_66644[(1)] = cljs.core.first((state_63674[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66645 = state_63674;
state_63674 = G__66645;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63674){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63697 = f__41862__auto__();
(statearr_63697[(6)] = c__41861__auto__);

return statearr_63697;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63713){
var state_val_63714 = (state_63713[(1)]);
if((state_val_63714 === (1))){
var inst_63699 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_63713__$1 = state_63713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63713__$1,(2),inst_63699);
} else {
if((state_val_63714 === (2))){
var inst_63701 = (state_63713[(2)]);
var inst_63702 = (function (){var token = inst_63701;
return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.updateLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))));
});
})();
var inst_63703 = frontend.fs.sync.retry_rsapi(inst_63702);
var state_63713__$1 = state_63713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63713__$1,(3),inst_63703);
} else {
if((state_val_63714 === (3))){
var inst_63705 = (state_63713[(2)]);
var inst_63706 = frontend.state.developer_mode_QMARK_();
var state_63713__$1 = (function (){var statearr_63717 = state_63713;
(statearr_63717[(7)] = inst_63705);

return statearr_63717;
})();
if(cljs.core.truth_(inst_63706)){
var statearr_63718_66646 = state_63713__$1;
(statearr_63718_66646[(1)] = (4));

} else {
var statearr_63719_66647 = state_63713__$1;
(statearr_63719_66647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63714 === (4))){
var inst_63708 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_63713__$1 = state_63713;
var statearr_63720_66648 = state_63713__$1;
(statearr_63720_66648[(2)] = inst_63708);

(statearr_63720_66648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63714 === (5))){
var state_63713__$1 = state_63713;
var statearr_63721_66649 = state_63713__$1;
(statearr_63721_66649[(2)] = null);

(statearr_63721_66649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63714 === (6))){
var inst_63705 = (state_63713[(7)]);
var inst_63711 = (state_63713[(2)]);
var state_63713__$1 = (function (){var statearr_63722 = state_63713;
(statearr_63722[(8)] = inst_63711);

return statearr_63722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63713__$1,inst_63705);
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
var statearr_63723 = [null,null,null,null,null,null,null,null,null];
(statearr_63723[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63723[(1)] = (1));

return statearr_63723;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63713){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63713);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63724){var ex__41842__auto__ = e63724;
var statearr_63727_66650 = state_63713;
(statearr_63727_66650[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63713[(4)]))){
var statearr_63729_66651 = state_63713;
(statearr_63729_66651[(1)] = cljs.core.first((state_63713[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66652 = state_63713;
state_63713 = G__66652;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63713){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63730 = f__41862__auto__();
(statearr_63730[(6)] = c__41861__auto__);

return statearr_63730;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63755){
var state_val_63756 = (state_63755[(1)]);
if((state_val_63756 === (1))){
var inst_63735 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318)];
var inst_63736 = [base_path,filepaths];
var inst_63737 = cljs.core.PersistentHashMap.fromArrays(inst_63735,inst_63736);
var inst_63738 = cljs.core.clj__GT_js(inst_63737);
var inst_63739 = frontend.mobile.util.file_sync.getLocalFilesMeta(inst_63738);
var inst_63740 = cljs.core.async.interop.p__GT_c(inst_63739);
var state_63755__$1 = state_63755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63755__$1,(2),inst_63740);
} else {
if((state_val_63756 === (2))){
var inst_63742 = (state_63755[(7)]);
var inst_63742__$1 = (state_63755[(2)]);
var inst_63743 = (inst_63742__$1 instanceof cljs.core.ExceptionInfo);
var state_63755__$1 = (function (){var statearr_63774 = state_63755;
(statearr_63774[(7)] = inst_63742__$1);

return statearr_63774;
})();
if(cljs.core.truth_(inst_63743)){
var statearr_63777_66653 = state_63755__$1;
(statearr_63777_66653[(1)] = (3));

} else {
var statearr_63778_66654 = state_63755__$1;
(statearr_63778_66654[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63756 === (3))){
var inst_63742 = (state_63755[(7)]);
var state_63755__$1 = state_63755;
var statearr_63779_66655 = state_63755__$1;
(statearr_63779_66655[(2)] = inst_63742);

(statearr_63779_66655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63756 === (4))){
var inst_63742 = (state_63755[(7)]);
var inst_63747 = (function (){var r = inst_63742;
return (function (p__63746){
var vec__63780 = p__63746;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63780,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63780,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_63748 = inst_63742.result;
var inst_63749 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_63748);
var inst_63750 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_63747,inst_63749);
var inst_63751 = cljs.core.set(inst_63750);
var state_63755__$1 = state_63755;
var statearr_63783_66656 = state_63755__$1;
(statearr_63783_66656[(2)] = inst_63751);

(statearr_63783_66656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63756 === (5))){
var inst_63753 = (state_63755[(2)]);
var state_63755__$1 = state_63755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63755__$1,inst_63753);
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
var statearr_63784 = [null,null,null,null,null,null,null,null];
(statearr_63784[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63784[(1)] = (1));

return statearr_63784;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63755){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63755);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63785){var ex__41842__auto__ = e63785;
var statearr_63786_66657 = state_63755;
(statearr_63786_66657[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63755[(4)]))){
var statearr_63787_66659 = state_63755;
(statearr_63787_66659[(1)] = cljs.core.first((state_63755[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66660 = state_63755;
state_63755 = G__66660;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63755){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63788 = f__41862__auto__();
(statearr_63788[(6)] = c__41861__auto__);

return statearr_63788;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63819){
var state_val_63820 = (state_63819[(1)]);
if((state_val_63820 === (1))){
var inst_63799 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_63819__$1 = state_63819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63819__$1,(2),inst_63799);
} else {
if((state_val_63820 === (2))){
var inst_63801 = (state_63819[(2)]);
var inst_63802 = [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),new cljs.core.Keyword(null,"txid","txid",1606205478),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_63803 = [graph_uuid,base_path,filepaths,local_txid,inst_63801];
var inst_63804 = cljs.core.PersistentHashMap.fromArrays(inst_63802,inst_63803);
var inst_63805 = cljs.core.clj__GT_js(inst_63804);
var inst_63806 = frontend.mobile.util.file_sync.updateRemoteFiles(inst_63805);
var inst_63807 = cljs.core.async.interop.p__GT_c(inst_63806);
var state_63819__$1 = state_63819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63819__$1,(3),inst_63807);
} else {
if((state_val_63820 === (3))){
var inst_63809 = (state_63819[(7)]);
var inst_63809__$1 = (state_63819[(2)]);
var inst_63810 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.sync","debug-update-remote-files","frontend.fs.sync/debug-update-remote-files",-1146829271),inst_63809__$1], 0));
var inst_63811 = (inst_63809__$1 instanceof cljs.core.ExceptionInfo);
var state_63819__$1 = (function (){var statearr_63838 = state_63819;
(statearr_63838[(7)] = inst_63809__$1);

(statearr_63838[(8)] = inst_63810);

return statearr_63838;
})();
if(cljs.core.truth_(inst_63811)){
var statearr_63839_66661 = state_63819__$1;
(statearr_63839_66661[(1)] = (4));

} else {
var statearr_63840_66662 = state_63819__$1;
(statearr_63840_66662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (4))){
var inst_63809 = (state_63819[(7)]);
var state_63819__$1 = state_63819;
var statearr_63841_66663 = state_63819__$1;
(statearr_63841_66663[(2)] = inst_63809);

(statearr_63841_66663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (5))){
var inst_63809 = (state_63819[(7)]);
var inst_63814 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_63809);
var inst_63815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63814,"txid");
var state_63819__$1 = state_63819;
var statearr_63846_66667 = state_63819__$1;
(statearr_63846_66667[(2)] = inst_63815);

(statearr_63846_66667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63820 === (6))){
var inst_63817 = (state_63819[(2)]);
var state_63819__$1 = state_63819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63819__$1,inst_63817);
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
var statearr_63849 = [null,null,null,null,null,null,null,null,null];
(statearr_63849[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63849[(1)] = (1));

return statearr_63849;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63819){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63819);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63850){var ex__41842__auto__ = e63850;
var statearr_63851_66669 = state_63819;
(statearr_63851_66669[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63819[(4)]))){
var statearr_63852_66670 = state_63819;
(statearr_63852_66670[(1)] = cljs.core.first((state_63819[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66671 = state_63819;
state_63819 = G__66671;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63819){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63857 = f__41862__auto__();
(statearr_63857[(6)] = c__41861__auto__);

return statearr_63857;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63875){
var state_val_63876 = (state_63875[(1)]);
if((state_val_63876 === (1))){
var inst_63862 = [new cljs.core.Keyword(null,"env","env",-1815813235)];
var state_63875__$1 = (function (){var statearr_63879 = state_63875;
(statearr_63879[(7)] = inst_63862);

return statearr_63879;
})();
if(cljs.core.truth_(prod_QMARK_)){
var statearr_63880_66672 = state_63875__$1;
(statearr_63880_66672[(1)] = (3));

} else {
var statearr_63881_66673 = state_63875__$1;
(statearr_63881_66673[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (2))){
var inst_63873 = (state_63875[(2)]);
var state_63875__$1 = state_63875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63875__$1,inst_63873);
} else {
if((state_val_63876 === (3))){
var state_63875__$1 = state_63875;
var statearr_63886_66674 = state_63875__$1;
(statearr_63886_66674[(2)] = "prod");

(statearr_63886_66674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (4))){
var state_63875__$1 = state_63875;
var statearr_63887_66675 = state_63875__$1;
(statearr_63887_66675[(2)] = "dev");

(statearr_63887_66675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63876 === (5))){
var inst_63862 = (state_63875[(7)]);
var inst_63866 = (state_63875[(2)]);
var inst_63867 = [inst_63866];
var inst_63868 = cljs.core.PersistentHashMap.fromArrays(inst_63862,inst_63867);
var inst_63869 = cljs.core.clj__GT_js(inst_63868);
var inst_63870 = frontend.mobile.util.file_sync.setEnv(inst_63869);
var inst_63871 = cljs.core.async.interop.p__GT_c(inst_63870);
var state_63875__$1 = state_63875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63875__$1,(2),inst_63871);
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
var statearr_63891 = [null,null,null,null,null,null,null,null];
(statearr_63891[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63891[(1)] = (1));

return statearr_63891;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63875){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63875);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63896){var ex__41842__auto__ = e63896;
var statearr_63897_66681 = state_63875;
(statearr_63897_66681[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63875[(4)]))){
var statearr_63902_66682 = state_63875;
(statearr_63902_66682[(1)] = cljs.core.first((state_63875[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66683 = state_63875;
state_63875 = G__66683;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63875){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63906 = f__41862__auto__();
(statearr_63906[(6)] = c__41861__auto__);

return statearr_63906;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63932){
var state_val_63933 = (state_63932[(1)]);
if((state_val_63933 === (1))){
var inst_63923 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)];
var inst_63924 = [base_path,from,to];
var inst_63925 = cljs.core.PersistentHashMap.fromArrays(inst_63923,inst_63924);
var inst_63926 = cljs.core.clj__GT_js(inst_63925);
var inst_63927 = frontend.mobile.util.file_sync.renameLocalFile(inst_63926);
var inst_63928 = cljs.core.async.interop.p__GT_c(inst_63927);
var state_63932__$1 = state_63932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63932__$1,(2),inst_63928);
} else {
if((state_val_63933 === (2))){
var inst_63930 = (state_63932[(2)]);
var state_63932__$1 = state_63932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63932__$1,inst_63930);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_63934 = [null,null,null,null,null,null,null];
(statearr_63934[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63934[(1)] = (1));

return statearr_63934;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63932){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63932);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63935){var ex__41842__auto__ = e63935;
var statearr_63936_66690 = state_63932;
(statearr_63936_66690[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63932[(4)]))){
var statearr_63937_66691 = state_63932;
(statearr_63937_66691[(1)] = cljs.core.first((state_63932[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66692 = state_63932;
state_63932 = G__66692;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63932){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63938 = f__41862__auto__();
(statearr_63938[(6)] = c__41861__auto__);

return statearr_63938;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63950){
var state_val_63951 = (state_63950[(1)]);
if((state_val_63951 === (1))){
var inst_63939 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths], null))));
});
})();
var inst_63940 = frontend.fs.sync.retry_rsapi(inst_63939);
var state_63950__$1 = state_63950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63950__$1,(2),inst_63940);
} else {
if((state_val_63951 === (2))){
var inst_63942 = (state_63950[(2)]);
var inst_63943 = frontend.state.developer_mode_QMARK_();
var state_63950__$1 = (function (){var statearr_63952 = state_63950;
(statearr_63952[(7)] = inst_63942);

return statearr_63952;
})();
if(cljs.core.truth_(inst_63943)){
var statearr_63953_66693 = state_63950__$1;
(statearr_63953_66693[(1)] = (3));

} else {
var statearr_63954_66694 = state_63950__$1;
(statearr_63954_66694[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63951 === (3))){
var inst_63945 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_63950__$1 = state_63950;
var statearr_63955_66696 = state_63950__$1;
(statearr_63955_66696[(2)] = inst_63945);

(statearr_63955_66696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63951 === (4))){
var state_63950__$1 = state_63950;
var statearr_63956_66698 = state_63950__$1;
(statearr_63956_66698[(2)] = null);

(statearr_63956_66698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63951 === (5))){
var inst_63942 = (state_63950[(7)]);
var inst_63948 = (state_63950[(2)]);
var state_63950__$1 = (function (){var statearr_63957 = state_63950;
(statearr_63957[(8)] = inst_63948);

return statearr_63957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63950__$1,inst_63942);
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
var statearr_63958 = [null,null,null,null,null,null,null,null,null];
(statearr_63958[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63958[(1)] = (1));

return statearr_63958;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63950){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63950);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e63959){var ex__41842__auto__ = e63959;
var statearr_63960_66699 = state_63950;
(statearr_63960_66699[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63950[(4)]))){
var statearr_63961_66700 = state_63950;
(statearr_63961_66700[(1)] = cljs.core.first((state_63950[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66701 = state_63950;
state_63950 = G__66701;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63950){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_63962 = f__41862__auto__();
(statearr_63962[(6)] = c__41861__auto__);

return statearr_63962;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_63991){
var state_val_63992 = (state_63991[(1)]);
if((state_val_63992 === (1))){
var inst_63971 = this$.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_63991__$1 = state_63991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63991__$1,(3),inst_63971);
} else {
if((state_val_63992 === (2))){
var inst_63977 = (state_63991[(7)]);
var inst_63977__$1 = (state_63991[(2)]);
var inst_63978 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_63977__$1);
var inst_63979 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_63978) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_63978));
var state_63991__$1 = (function (){var statearr_63993 = state_63991;
(statearr_63993[(7)] = inst_63977__$1);

return statearr_63993;
})();
if(cljs.core.truth_(inst_63979)){
var statearr_63994_66703 = state_63991__$1;
(statearr_63994_66703[(1)] = (4));

} else {
var statearr_63995_66704 = state_63991__$1;
(statearr_63995_66704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63992 === (3))){
var inst_63973 = (state_63991[(2)]);
var inst_63974 = (function (){return (function (){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(null);
});
})();
var inst_63975 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4(api_name,body,inst_63973,inst_63974);
var state_63991__$1 = state_63991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63991__$1,(2),inst_63975);
} else {
if((state_val_63992 === (4))){
var inst_63977 = (state_63991[(7)]);
var inst_63981 = frontend.fs.sync.get_resp_json_body(inst_63977);
var state_63991__$1 = state_63991;
var statearr_63997_66707 = state_63991__$1;
(statearr_63997_66707[(2)] = inst_63981);

(statearr_63997_66707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63992 === (5))){
var inst_63977 = (state_63991[(7)]);
var inst_63983 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_63984 = frontend.fs.sync.get_resp_json_body(inst_63977);
var inst_63985 = [inst_63977,inst_63984];
var inst_63986 = cljs.core.PersistentHashMap.fromArrays(inst_63983,inst_63985);
var inst_63987 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request failed",inst_63986);
var state_63991__$1 = state_63991;
var statearr_63998_66708 = state_63991__$1;
(statearr_63998_66708[(2)] = inst_63987);

(statearr_63998_66708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63992 === (6))){
var inst_63989 = (state_63991[(2)]);
var state_63991__$1 = state_63991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63991__$1,inst_63989);
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
var statearr_63999 = [null,null,null,null,null,null,null,null];
(statearr_63999[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_63999[(1)] = (1));

return statearr_63999;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_63991){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_63991);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64001){var ex__41842__auto__ = e64001;
var statearr_64002_66715 = state_63991;
(statearr_64002_66715[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_63991[(4)]))){
var statearr_64003_66717 = state_63991;
(statearr_64003_66717[(1)] = cljs.core.first((state_63991[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66718 = state_63991;
state_63991 = G__66718;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_63991){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_63991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64004 = f__41862__auto__();
(statearr_64004[(6)] = c__41861__auto__);

return statearr_64004;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64014){
var state_val_64015 = (state_64014[(1)]);
if((state_val_64015 === (1))){
var inst_64005 = (state_64014[(7)]);
var inst_64005__$1 = frontend.state.get_auth_id_token();
var state_64014__$1 = (function (){var statearr_64016 = state_64014;
(statearr_64016[(7)] = inst_64005__$1);

return statearr_64016;
})();
if(cljs.core.truth_(inst_64005__$1)){
var statearr_64017_66723 = state_64014__$1;
(statearr_64017_66723[(1)] = (2));

} else {
var statearr_64018_66725 = state_64014__$1;
(statearr_64018_66725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64015 === (2))){
var inst_64005 = (state_64014[(7)]);
var state_64014__$1 = state_64014;
var statearr_64019_66726 = state_64014__$1;
(statearr_64019_66726[(2)] = inst_64005);

(statearr_64019_66726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64015 === (3))){
var inst_64008 = this$__$1.frontend$fs$sync$IToken$refresh_token$arity$1(null);
var state_64014__$1 = state_64014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64014__$1,(5),inst_64008);
} else {
if((state_val_64015 === (4))){
var inst_64012 = (state_64014[(2)]);
var state_64014__$1 = state_64014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64014__$1,inst_64012);
} else {
if((state_val_64015 === (5))){
var inst_64010 = (state_64014[(2)]);
var state_64014__$1 = state_64014;
var statearr_64023_66727 = state_64014__$1;
(statearr_64023_66727[(2)] = inst_64010);

(statearr_64023_66727[(1)] = (4));


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
var statearr_64024 = [null,null,null,null,null,null,null,null];
(statearr_64024[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64024[(1)] = (1));

return statearr_64024;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64014){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64014);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64025){var ex__41842__auto__ = e64025;
var statearr_64026_66730 = state_64014;
(statearr_64026_66730[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64014[(4)]))){
var statearr_64027_66731 = state_64014;
(statearr_64027_66731[(1)] = cljs.core.first((state_64014[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66732 = state_64014;
state_64014 = G__66732;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64014){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64028 = f__41862__auto__();
(statearr_64028[(6)] = c__41861__auto__);

return statearr_64028;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64034){
var state_val_64035 = (state_64034[(1)]);
if((state_val_64035 === (1))){
var inst_64029 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_64034__$1 = state_64034;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64034__$1,(2),inst_64029);
} else {
if((state_val_64035 === (2))){
var inst_64031 = (state_64034[(2)]);
var inst_64032 = frontend.state.get_auth_id_token();
var state_64034__$1 = (function (){var statearr_64036 = state_64034;
(statearr_64036[(7)] = inst_64031);

return statearr_64036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64034__$1,inst_64032);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64037 = [null,null,null,null,null,null,null,null];
(statearr_64037[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64037[(1)] = (1));

return statearr_64037;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64034){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64034);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64038){var ex__41842__auto__ = e64038;
var statearr_64039_66734 = state_64034;
(statearr_64039_66734[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64034[(4)]))){
var statearr_64040_66735 = state_64034;
(statearr_64040_66735[(1)] = cljs.core.first((state_64034[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66736 = state_64034;
state_64034 = G__66736;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64034){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64041 = f__41862__auto__();
(statearr_64041[(6)] = c__41861__auto__);

return statearr_64041;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64081){
var state_val_64082 = (state_64081[(1)]);
if((state_val_64082 === (7))){
var inst_64077 = (state_64081[(2)]);
var state_64081__$1 = state_64081;
var statearr_64085_66738 = state_64081__$1;
(statearr_64085_66738[(2)] = inst_64077);

(statearr_64085_66738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (1))){
var inst_64042 = null;
var inst_64043 = null;
var state_64081__$1 = (function (){var statearr_64087 = state_64081;
(statearr_64087[(7)] = inst_64042);

(statearr_64087[(8)] = inst_64043);

return statearr_64087;
})();
var statearr_64088_66739 = state_64081__$1;
(statearr_64088_66739[(2)] = null);

(statearr_64088_66739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (4))){
var inst_64054 = (state_64081[(9)]);
var inst_64054__$1 = (state_64081[(2)]);
var inst_64055 = (inst_64054__$1 instanceof cljs.core.ExceptionInfo);
var state_64081__$1 = (function (){var statearr_64089 = state_64081;
(statearr_64089[(9)] = inst_64054__$1);

return statearr_64089;
})();
if(cljs.core.truth_(inst_64055)){
var statearr_64090_66740 = state_64081__$1;
(statearr_64090_66740[(1)] = (5));

} else {
var statearr_64091_66741 = state_64081__$1;
(statearr_64091_66741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (13))){
var inst_64075 = (state_64081[(2)]);
var state_64081__$1 = state_64081;
var statearr_64092_66742 = state_64081__$1;
(statearr_64092_66742[(2)] = inst_64075);

(statearr_64092_66742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (6))){
var inst_64042 = (state_64081[(7)]);
var inst_64059 = (state_64081[(10)]);
var inst_64058 = (state_64081[(11)]);
var inst_64064 = (state_64081[(12)]);
var inst_64043 = (state_64081[(8)]);
var inst_64054 = (state_64081[(9)]);
var inst_64058__$1 = new cljs.core.Keyword(null,"NextDir","NextDir",-113026321).cljs$core$IFn$_invoke$arity$1(inst_64054);
var inst_64059__$1 = new cljs.core.Keyword(null,"NextContinuationToken","NextContinuationToken",1106322029).cljs$core$IFn$_invoke$arity$1(inst_64054);
var inst_64060 = new cljs.core.Keyword(null,"Objects","Objects",-610644271).cljs$core$IFn$_invoke$arity$1(inst_64054);
var inst_64061 = (function (){var dir = inst_64042;
var continuation_token = inst_64043;
var r = inst_64054;
var next_dir = inst_64058__$1;
var next_continuation_token = inst_64059__$1;
var objs = inst_64060;
return (function (p1__63967_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__63967_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__63967_SHARP_),frontend.fs.sync.remove_user_graph_uuid_prefix(decodeURIComponent(new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__63967_SHARP_))),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__63967_SHARP_),true,null);
});
})();
var inst_64062 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_64061,inst_64060);
var inst_64063 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,file_meta_list,inst_64062);
var inst_64064__$1 = cljs.core.empty_QMARK_(inst_64058__$1);
var state_64081__$1 = (function (){var statearr_64093 = state_64081;
(statearr_64093[(10)] = inst_64059__$1);

(statearr_64093[(13)] = inst_64063);

(statearr_64093[(11)] = inst_64058__$1);

(statearr_64093[(12)] = inst_64064__$1);

return statearr_64093;
})();
if(inst_64064__$1){
var statearr_64094_66745 = state_64081__$1;
(statearr_64094_66745[(1)] = (8));

} else {
var statearr_64095_66746 = state_64081__$1;
(statearr_64095_66746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (3))){
var inst_64079 = (state_64081[(2)]);
var state_64081__$1 = state_64081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64081__$1,inst_64079);
} else {
if((state_val_64082 === (12))){
var inst_64059 = (state_64081[(10)]);
var inst_64058 = (state_64081[(11)]);
var inst_64042 = inst_64058;
var inst_64043 = inst_64059;
var state_64081__$1 = (function (){var statearr_64099 = state_64081;
(statearr_64099[(7)] = inst_64042);

(statearr_64099[(8)] = inst_64043);

return statearr_64099;
})();
var statearr_64100_66747 = state_64081__$1;
(statearr_64100_66747[(2)] = null);

(statearr_64100_66747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (2))){
var inst_64042 = (state_64081[(7)]);
var inst_64043 = (state_64081[(8)]);
var inst_64045 = cljs.core.PersistentHashMap.EMPTY;
var inst_64046 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second);
var inst_64047 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Dir","Dir",1454706553),new cljs.core.Keyword(null,"ContinuationToken","ContinuationToken",-770030188)];
var inst_64048 = [graph_uuid,inst_64042,inst_64043];
var inst_64049 = cljs.core.PersistentHashMap.fromArrays(inst_64047,inst_64048);
var inst_64050 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_64046,inst_64049);
var inst_64051 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_64045,inst_64050);
var inst_64052 = this$__$1.request("get_all_files",inst_64051);
var state_64081__$1 = state_64081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64081__$1,(4),inst_64052);
} else {
if((state_val_64082 === (11))){
var inst_64071 = cljs.core.persistent_BANG_(file_meta_list);
var state_64081__$1 = state_64081;
var statearr_64112_66748 = state_64081__$1;
(statearr_64112_66748[(2)] = inst_64071);

(statearr_64112_66748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (9))){
var inst_64064 = (state_64081[(12)]);
var state_64081__$1 = state_64081;
var statearr_64113_66749 = state_64081__$1;
(statearr_64113_66749[(2)] = inst_64064);

(statearr_64113_66749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (5))){
var inst_64054 = (state_64081[(9)]);
var state_64081__$1 = state_64081;
var statearr_64118_66750 = state_64081__$1;
(statearr_64118_66750[(2)] = inst_64054);

(statearr_64118_66750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (10))){
var inst_64069 = (state_64081[(2)]);
var state_64081__$1 = state_64081;
if(cljs.core.truth_(inst_64069)){
var statearr_64119_66751 = state_64081__$1;
(statearr_64119_66751[(1)] = (11));

} else {
var statearr_64120_66752 = state_64081__$1;
(statearr_64120_66752[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64082 === (8))){
var inst_64059 = (state_64081[(10)]);
var inst_64066 = cljs.core.empty_QMARK_(inst_64059);
var state_64081__$1 = state_64081;
var statearr_64121_66753 = state_64081__$1;
(statearr_64121_66753[(2)] = inst_64066);

(statearr_64121_66753[(1)] = (10));


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
var statearr_64122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64122[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64122[(1)] = (1));

return statearr_64122;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64081){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64081);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64123){var ex__41842__auto__ = e64123;
var statearr_64124_66755 = state_64081;
(statearr_64124_66755[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64081[(4)]))){
var statearr_64125_66756 = state_64081;
(statearr_64125_66756[(1)] = cljs.core.first((state_64081[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66757 = state_64081;
state_64081 = G__66757;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64081){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64126 = f__41862__auto__();
(statearr_64126[(6)] = c__41861__auto__);

return statearr_64126;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64145){
var state_val_64146 = (state_64145[(1)]);
if((state_val_64146 === (1))){
var inst_64127 = (state_64145[(7)]);
var inst_64127__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.encode_filepath,filepaths);
var inst_64129 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Files","Files",1992500914)];
var inst_64130 = [graph_uuid,inst_64127__$1];
var inst_64131 = cljs.core.PersistentHashMap.fromArrays(inst_64129,inst_64130);
var inst_64132 = this$__$1.request("get_files_meta",inst_64131);
var state_64145__$1 = (function (){var statearr_64149 = state_64145;
(statearr_64149[(7)] = inst_64127__$1);

return statearr_64149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64145__$1,(2),inst_64132);
} else {
if((state_val_64146 === (2))){
var inst_64134 = (state_64145[(8)]);
var inst_64134__$1 = (state_64145[(2)]);
var inst_64135 = (inst_64134__$1 instanceof cljs.core.ExceptionInfo);
var state_64145__$1 = (function (){var statearr_64150 = state_64145;
(statearr_64150[(8)] = inst_64134__$1);

return statearr_64150;
})();
if(cljs.core.truth_(inst_64135)){
var statearr_64151_66758 = state_64145__$1;
(statearr_64151_66758[(1)] = (3));

} else {
var statearr_64152_66759 = state_64145__$1;
(statearr_64152_66759[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64146 === (3))){
var inst_64134 = (state_64145[(8)]);
var state_64145__$1 = state_64145;
var statearr_64153_66760 = state_64145__$1;
(statearr_64153_66760[(2)] = inst_64134);

(statearr_64153_66760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64146 === (4))){
var inst_64127 = (state_64145[(7)]);
var inst_64134 = (state_64145[(8)]);
var inst_64138 = cljs.core.PersistentHashSet.EMPTY;
var inst_64139 = (function (){var encoded_filepaths = inst_64127;
var r = inst_64134;
return (function (p1__63968_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__63968_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__63968_SHARP_),decodeURIComponent(new cljs.core.Keyword(null,"FilePath","FilePath",1522398781).cljs$core$IFn$_invoke$arity$1(p1__63968_SHARP_)),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__63968_SHARP_),true,null);
});
})();
var inst_64140 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_64139);
var inst_64141 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_64138,inst_64140,inst_64134);
var state_64145__$1 = state_64145;
var statearr_64154_66761 = state_64145__$1;
(statearr_64154_66761[(2)] = inst_64141);

(statearr_64154_66761[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64146 === (5))){
var inst_64143 = (state_64145[(2)]);
var state_64145__$1 = state_64145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64145__$1,inst_64143);
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
var statearr_64155 = [null,null,null,null,null,null,null,null,null];
(statearr_64155[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64155[(1)] = (1));

return statearr_64155;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64145){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64145);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64156){var ex__41842__auto__ = e64156;
var statearr_64157_66779 = state_64145;
(statearr_64157_66779[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64145[(4)]))){
var statearr_64158_66780 = state_64145;
(statearr_64158_66780[(1)] = cljs.core.first((state_64145[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66781 = state_64145;
state_64145 = G__66781;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64145){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64159 = f__41862__auto__();
(statearr_64159[(6)] = c__41861__auto__);

return statearr_64159;
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

return this$__$1.request("get_graph",(function (){var G__64160 = cljs.core.PersistentArrayMap.EMPTY;
var G__64160__$1 = ((cljs.core.seq(graph_name_opt))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64160,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name_opt):G__64160);
if(cljs.core.seq(graph_uuid_opt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64160__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid_opt);
} else {
return G__64160__$1;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64182){
var state_val_64183 = (state_64182[(1)]);
if((state_val_64183 === (1))){
var inst_64161 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"FromTXId","FromTXId",-1493550374)];
var inst_64162 = [graph_uuid,from_txid];
var inst_64163 = cljs.core.PersistentHashMap.fromArrays(inst_64161,inst_64162);
var inst_64164 = this$__$1.request("get_diff",inst_64163);
var state_64182__$1 = state_64182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64182__$1,(2),inst_64164);
} else {
if((state_val_64183 === (2))){
var inst_64166 = (state_64182[(7)]);
var inst_64166__$1 = (state_64182[(2)]);
var inst_64167 = (inst_64166__$1 instanceof cljs.core.ExceptionInfo);
var state_64182__$1 = (function (){var statearr_64185 = state_64182;
(statearr_64185[(7)] = inst_64166__$1);

return statearr_64185;
})();
if(cljs.core.truth_(inst_64167)){
var statearr_64186_66783 = state_64182__$1;
(statearr_64186_66783[(1)] = (3));

} else {
var statearr_64187_66784 = state_64182__$1;
(statearr_64187_66784[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64183 === (3))){
var inst_64166 = (state_64182[(7)]);
var state_64182__$1 = state_64182;
var statearr_64188_66785 = state_64182__$1;
(statearr_64188_66785[(2)] = inst_64166);

(statearr_64188_66785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64183 === (4))){
var inst_64166 = (state_64182[(7)]);
var inst_64170 = new cljs.core.Keyword(null,"Transactions","Transactions",-836353760).cljs$core$IFn$_invoke$arity$1(inst_64166);
var inst_64171 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TXId","TXId",-902804781),inst_64170);
var inst_64172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64173 = cljs.core.last(inst_64171);
var inst_64174 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_64173);
var inst_64175 = cljs.core.first(inst_64171);
var inst_64176 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_64175);
var inst_64177 = [inst_64171,inst_64174,inst_64176];
var inst_64178 = (new cljs.core.PersistentVector(null,3,(5),inst_64172,inst_64177,null));
var state_64182__$1 = state_64182;
var statearr_64189_66787 = state_64182__$1;
(statearr_64189_66787[(2)] = inst_64178);

(statearr_64189_66787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64183 === (5))){
var inst_64180 = (state_64182[(2)]);
var state_64182__$1 = state_64182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64182__$1,inst_64180);
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
var statearr_64190 = [null,null,null,null,null,null,null,null];
(statearr_64190[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64190[(1)] = (1));

return statearr_64190;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64182){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64182);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64191){var ex__41842__auto__ = e64191;
var statearr_64192_66788 = state_64182;
(statearr_64192_66788[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64182[(4)]))){
var statearr_64193_66789 = state_64182;
(statearr_64193_66789[(1)] = cljs.core.first((state_64182[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66790 = state_64182;
state_64182 = G__66790;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64182){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64194 = f__41862__auto__();
(statearr_64194[(6)] = c__41861__auto__);

return statearr_64194;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64216){
var state_val_64217 = (state_64216[(1)]);
if((state_val_64217 === (1))){
var inst_64196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64197 = frontend.fs.sync.relative_path(filetxn);
var inst_64198 = [inst_64197];
var inst_64199 = (new cljs.core.PersistentVector(null,1,(5),inst_64196,inst_64198,null));
var inst_64200 = frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_64199);
var state_64216__$1 = state_64216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64216__$1,(2),inst_64200);
} else {
if((state_val_64217 === (2))){
var inst_64203 = (state_64216[(7)]);
var inst_64202 = (state_64216[(8)]);
var inst_64202__$1 = (state_64216[(2)]);
var inst_64203__$1 = (inst_64202__$1 instanceof cljs.core.ExceptionInfo);
var state_64216__$1 = (function (){var statearr_64218 = state_64216;
(statearr_64218[(7)] = inst_64203__$1);

(statearr_64218[(8)] = inst_64202__$1);

return statearr_64218;
})();
if(cljs.core.truth_(inst_64203__$1)){
var statearr_64219_66791 = state_64216__$1;
(statearr_64219_66791[(1)] = (3));

} else {
var statearr_64220_66792 = state_64216__$1;
(statearr_64220_66792[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (3))){
var inst_64202 = (state_64216[(8)]);
var inst_64205 = cljs.core.ex_cause(inst_64202);
var inst_64206 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64205);
var inst_64207 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_64206,"No such file or directory");
var state_64216__$1 = state_64216;
var statearr_64221_66793 = state_64216__$1;
(statearr_64221_66793[(2)] = inst_64207);

(statearr_64221_66793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (4))){
var inst_64203 = (state_64216[(7)]);
var state_64216__$1 = state_64216;
var statearr_64222_66794 = state_64216__$1;
(statearr_64222_66794[(2)] = inst_64203);

(statearr_64222_66794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (5))){
var inst_64210 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
if(cljs.core.truth_(inst_64210)){
var statearr_64223_66795 = state_64216__$1;
(statearr_64223_66795[(1)] = (6));

} else {
var statearr_64224_66796 = state_64216__$1;
(statearr_64224_66796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (6))){
var state_64216__$1 = state_64216;
var statearr_64225_66797 = state_64216__$1;
(statearr_64225_66797[(2)] = true);

(statearr_64225_66797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (7))){
var inst_64202 = (state_64216[(8)]);
var state_64216__$1 = state_64216;
var statearr_64226_66798 = state_64216__$1;
(statearr_64226_66798[(2)] = inst_64202);

(statearr_64226_66798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64217 === (8))){
var inst_64214 = (state_64216[(2)]);
var state_64216__$1 = state_64216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64216__$1,inst_64214);
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
var statearr_64227 = [null,null,null,null,null,null,null,null,null];
(statearr_64227[(0)] = frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__);

(statearr_64227[(1)] = (1));

return statearr_64227;
});
var frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____1 = (function (state_64216){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64216);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64228){var ex__41842__auto__ = e64228;
var statearr_64229_66799 = state_64216;
(statearr_64229_66799[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64216[(4)]))){
var statearr_64230_66800 = state_64216;
(statearr_64230_66800[(1)] = cljs.core.first((state_64216[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66801 = state_64216;
state_64216 = G__66801;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__ = function(state_64216){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____1.call(this,state_64216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____0;
frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto____1;
return frontend$fs$sync$apply_filetxns_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64231 = f__41862__auto__();
(statearr_64231[(6)] = c__41861__auto__);

return statearr_64231;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64275){
var state_val_64276 = (state_64275[(1)]);
if((state_val_64276 === (7))){
var inst_64245 = (state_64275[(7)]);
var inst_64234 = (state_64275[(8)]);
var inst_64244 = (state_64275[(9)]);
var inst_64244__$1 = cljs.core.first(inst_64234);
var inst_64245__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_64244__$1);
var inst_64246 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__add_current_remote__GT_local_files,inst_64245__$1);
var inst_64247 = frontend.fs.sync.apply_filetxns(graph_uuid,base_path,inst_64244__$1);
var state_64275__$1 = (function (){var statearr_64277 = state_64275;
(statearr_64277[(7)] = inst_64245__$1);

(statearr_64277[(10)] = inst_64246);

(statearr_64277[(9)] = inst_64244__$1);

return statearr_64277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64275__$1,(10),inst_64247);
} else {
if((state_val_64276 === (1))){
var inst_64233 = filetxns_partitions;
var inst_64234 = inst_64233;
var state_64275__$1 = (function (){var statearr_64278 = state_64275;
(statearr_64278[(8)] = inst_64234);

return statearr_64278;
})();
var statearr_64279_66802 = state_64275__$1;
(statearr_64279_66802[(2)] = null);

(statearr_64279_66802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (4))){
var inst_64238 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_64239 = [true];
var inst_64240 = cljs.core.PersistentHashMap.fromArrays(inst_64238,inst_64239);
var state_64275__$1 = state_64275;
var statearr_64280_66803 = state_64275__$1;
(statearr_64280_66803[(2)] = inst_64240);

(statearr_64280_66803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (15))){
var state_64275__$1 = state_64275;
var statearr_64286_66804 = state_64275__$1;
(statearr_64286_66804[(2)] = null);

(statearr_64286_66804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (13))){
var inst_64266 = (state_64275[(2)]);
var state_64275__$1 = state_64275;
var statearr_64287_66805 = state_64275__$1;
(statearr_64287_66805[(2)] = inst_64266);

(statearr_64287_66805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (6))){
var inst_64271 = (state_64275[(2)]);
var state_64275__$1 = state_64275;
var statearr_64288_66806 = state_64275__$1;
(statearr_64288_66806[(2)] = inst_64271);

(statearr_64288_66806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (3))){
var inst_64273 = (state_64275[(2)]);
var state_64275__$1 = state_64275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64275__$1,inst_64273);
} else {
if((state_val_64276 === (12))){
var inst_64245 = (state_64275[(7)]);
var inst_64249 = (state_64275[(11)]);
var inst_64250 = (state_64275[(12)]);
var inst_64234 = (state_64275[(8)]);
var inst_64244 = (state_64275[(9)]);
var inst_64254 = (function (){var filetxns_partitions_STAR_ = inst_64234;
var filetxns = inst_64244;
var paths = inst_64245;
var _ = inst_64250;
var r = inst_64249;
return (function (p1__64232_SHARP_){
return p1__64232_SHARP_.txid;
});
})();
var inst_64255 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_64254,inst_64244);
var inst_64256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,inst_64255);
var state_64275__$1 = (function (){var statearr_64289 = state_64275;
(statearr_64289[(13)] = inst_64256);

return statearr_64289;
})();
if(cljs.core.truth_(_STAR_txid)){
var statearr_64290_66807 = state_64275__$1;
(statearr_64290_66807[(1)] = (14));

} else {
var statearr_64291_66808 = state_64275__$1;
(statearr_64291_66808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (2))){
var inst_64236 = cljs.core.deref(_STAR_stopped);
var state_64275__$1 = state_64275;
if(cljs.core.truth_(inst_64236)){
var statearr_64292_66809 = state_64275__$1;
(statearr_64292_66809[(1)] = (4));

} else {
var statearr_64293_66810 = state_64275__$1;
(statearr_64293_66810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (11))){
var inst_64249 = (state_64275[(11)]);
var state_64275__$1 = state_64275;
var statearr_64294_66811 = state_64275__$1;
(statearr_64294_66811[(2)] = inst_64249);

(statearr_64294_66811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (9))){
var inst_64269 = (state_64275[(2)]);
var state_64275__$1 = state_64275;
var statearr_64295_66812 = state_64275__$1;
(statearr_64295_66812[(2)] = inst_64269);

(statearr_64295_66812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (5))){
var inst_64234 = (state_64275[(8)]);
var inst_64242 = cljs.core.seq(inst_64234);
var state_64275__$1 = state_64275;
if(inst_64242){
var statearr_64296_66813 = state_64275__$1;
(statearr_64296_66813[(1)] = (7));

} else {
var statearr_64297_66814 = state_64275__$1;
(statearr_64297_66814[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (14))){
var inst_64256 = (state_64275[(13)]);
var inst_64258 = cljs.core.reset_BANG_(_STAR_txid,inst_64256);
var inst_64259 = frontend.fs.sync.update_graphs_txid_BANG_(inst_64256,graph_uuid,user_uuid,repo);
var state_64275__$1 = (function (){var statearr_64298 = state_64275;
(statearr_64298[(14)] = inst_64258);

return statearr_64298;
})();
var statearr_64299_66815 = state_64275__$1;
(statearr_64299_66815[(2)] = inst_64259);

(statearr_64299_66815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (16))){
var inst_64234 = (state_64275[(8)]);
var inst_64262 = (state_64275[(2)]);
var inst_64263 = cljs.core.next(inst_64234);
var inst_64234__$1 = inst_64263;
var state_64275__$1 = (function (){var statearr_64300 = state_64275;
(statearr_64300[(15)] = inst_64262);

(statearr_64300[(8)] = inst_64234__$1);

return statearr_64300;
})();
var statearr_64301_66816 = state_64275__$1;
(statearr_64301_66816[(2)] = null);

(statearr_64301_66816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (10))){
var inst_64245 = (state_64275[(7)]);
var inst_64249 = (state_64275[(11)]);
var inst_64249__$1 = (state_64275[(2)]);
var inst_64250 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__remove_current_remote__GT_local_files,inst_64245);
var inst_64251 = (inst_64249__$1 instanceof cljs.core.ExceptionInfo);
var state_64275__$1 = (function (){var statearr_64303 = state_64275;
(statearr_64303[(11)] = inst_64249__$1);

(statearr_64303[(12)] = inst_64250);

return statearr_64303;
})();
if(cljs.core.truth_(inst_64251)){
var statearr_64304_66817 = state_64275__$1;
(statearr_64304_66817[(1)] = (11));

} else {
var statearr_64305_66818 = state_64275__$1;
(statearr_64305_66818[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64276 === (8))){
var state_64275__$1 = state_64275;
var statearr_64306_66819 = state_64275__$1;
(statearr_64306_66819[(2)] = null);

(statearr_64306_66819[(1)] = (9));


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
var statearr_64307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64307[(0)] = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__);

(statearr_64307[(1)] = (1));

return statearr_64307;
});
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____1 = (function (state_64275){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64275);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64308){var ex__41842__auto__ = e64308;
var statearr_64309_66820 = state_64275;
(statearr_64309_66820[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64275[(4)]))){
var statearr_64310_66821 = state_64275;
(statearr_64310_66821[(1)] = cljs.core.first((state_64275[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66822 = state_64275;
state_64275 = G__66822;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__ = function(state_64275){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____1.call(this,state_64275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____0;
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto____1;
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64311 = f__41862__auto__();
(statearr_64311[(6)] = c__41861__auto__);

return statearr_64311;
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
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__64316 = cljs.core.get_global_hierarchy;
return (fexpr__64316.cljs$core$IFn$_invoke$arity$0 ? fexpr__64316.cljs$core$IFn$_invoke$arity$0() : fexpr__64316.call(null));
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
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"txid","txid",1606205478),(function (p__64319){
var vec__64320 = p__64319;
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64320,(0),null);
var remote__GT_local_syncer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64320,(1),null);
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64333){
var state_val_64334 = (state_64333[(1)]);
if((state_val_64334 === (1))){
var state_64333__$1 = state_64333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64333__$1,(2),c);
} else {
if((state_val_64334 === (2))){
var inst_64330 = (state_64333[(2)]);
var inst_64331 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_64330);
var state_64333__$1 = state_64333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64333__$1,inst_64331);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_64335 = [null,null,null,null,null,null,null];
(statearr_64335[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64335[(1)] = (1));

return statearr_64335;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64333){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64333);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64336){var ex__41842__auto__ = e64336;
var statearr_64337_66823 = state_64333;
(statearr_64337_66823[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64333[(4)]))){
var statearr_64338_66824 = state_64333;
(statearr_64338_66824[(1)] = cljs.core.first((state_64333[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66825 = state_64333;
state_64333 = G__66825;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64333){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64339 = f__41862__auto__();
(statearr_64339[(6)] = c__41861__auto__);

return statearr_64339;
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
var G__64348 = e.type;
switch (G__64348) {
case "add":
case "change":
return new cljs.core.Keyword(null,"add-or-change","add-or-change",1006483131);

break;
case "unlink":
return new cljs.core.Keyword(null,"unlink","unlink",-1436843875);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64348)].join('')));

}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__64346_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,p1__64346_SHARP_);
})),cljs.core.cat);
});
frontend.fs.sync.local_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
/**
 * file-watcher callback
 */
frontend.fs.sync.file_watch_handler = (function frontend$fs$sync$file_watch_handler(type,p__64349){
var map__64350 = p__64349;
var map__64350__$1 = cljs.core.__destructure_map(map__64350);
var _payload = map__64350__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"_content","_content",-555820160));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
if(cljs.core.truth_((function (){var G__64351 = frontend.state.get_file_sync_state();
var G__64351__$1 = (((G__64351 == null))?null:(frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1(G__64351) : frontend.fs.sync.sync_state__stopped_QMARK_.call(null,G__64351)));
if((G__64351__$1 == null)){
return null;
} else {
return cljs.core.not(G__64351__$1);
}
})())){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64356){
var state_val_64357 = (state_64356[(1)]);
if((state_val_64357 === (1))){
var inst_64352 = frontend.fs.sync.__GT_FileChangeEvent(type,dir,path,stat);
var state_64356__$1 = state_64356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64356__$1,(2),frontend.fs.sync.local_changes_chan,inst_64352);
} else {
if((state_val_64357 === (2))){
var inst_64354 = (state_64356[(2)]);
var state_64356__$1 = state_64356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64356__$1,inst_64354);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__ = null;
var frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____0 = (function (){
var statearr_64359 = [null,null,null,null,null,null,null];
(statearr_64359[(0)] = frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__);

(statearr_64359[(1)] = (1));

return statearr_64359;
});
var frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____1 = (function (state_64356){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64356);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64360){var ex__41842__auto__ = e64360;
var statearr_64361_66827 = state_64356;
(statearr_64361_66827[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64356[(4)]))){
var statearr_64363_66828 = state_64356;
(statearr_64363_66828[(1)] = cljs.core.first((state_64356[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66829 = state_64356;
state_64356 = G__66829;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__ = function(state_64356){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____1.call(this,state_64356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____0;
frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto____1;
return frontend$fs$sync$file_watch_handler_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64367 = f__41862__auto__();
(statearr_64367[(6)] = c__41861__auto__);

return statearr_64367;
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

var frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_66830 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_66830(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_66831 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_66831(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_66832 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_66832(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.ILocal__GT_RemoteSync = function(){};

var frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_66833 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_66833(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_66834 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_66834(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_66835 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_66835(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_66836 = (function (this$,from_chan){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_66836(this$,from_chan);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_66837 = (function (this$,es){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_66837(this$,es);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_66838 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_66838(this$);
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64414){
var state_val_64415 = (state_64414[(1)]);
if((state_val_64415 === (7))){
var inst_64394 = cljs.core.deref(self__._STAR_stopped);
var state_64414__$1 = state_64414;
if(cljs.core.truth_(inst_64394)){
var statearr_64416_66839 = state_64414__$1;
(statearr_64416_66839[(1)] = (9));

} else {
var statearr_64417_66840 = state_64414__$1;
(statearr_64417_66840[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (1))){
var inst_64375 = (state_64414[(7)]);
var inst_64374 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),self__.graph_uuid,self__.user_uuid);
var inst_64375__$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_64374,relative_filepaths);
var inst_64376 = cljs.core.flatten(inst_64375__$1);
var inst_64377 = cljs.core.empty_QMARK_(inst_64376);
var state_64414__$1 = (function (){var statearr_64418 = state_64414;
(statearr_64418[(7)] = inst_64375__$1);

return statearr_64418;
})();
if(inst_64377){
var statearr_64419_66841 = state_64414__$1;
(statearr_64419_66841[(1)] = (2));

} else {
var statearr_64420_66842 = state_64414__$1;
(statearr_64420_66842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (4))){
var inst_64387 = (state_64414[(8)]);
var inst_64387__$1 = (state_64414[(2)]);
var inst_64388 = (inst_64387__$1 instanceof cljs.core.ExceptionInfo);
var state_64414__$1 = (function (){var statearr_64421 = state_64414;
(statearr_64421[(8)] = inst_64387__$1);

return statearr_64421;
})();
if(cljs.core.truth_(inst_64388)){
var statearr_64422_66843 = state_64414__$1;
(statearr_64422_66843[(1)] = (6));

} else {
var statearr_64423_66844 = state_64414__$1;
(statearr_64423_66844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (13))){
var state_64414__$1 = state_64414;
var statearr_64424_66845 = state_64414__$1;
(statearr_64424_66845[(2)] = null);

(statearr_64424_66845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (6))){
var inst_64387 = (state_64414[(8)]);
var inst_64390 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_64391 = [inst_64387];
var inst_64392 = cljs.core.PersistentHashMap.fromArrays(inst_64390,inst_64391);
var state_64414__$1 = state_64414;
var statearr_64425_66846 = state_64414__$1;
(statearr_64425_66846[(2)] = inst_64392);

(statearr_64425_66846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (3))){
var inst_64375 = (state_64414[(7)]);
var inst_64383 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_64375,self__.repo,null,self__._STAR_stopped);
var state_64414__$1 = state_64414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64414__$1,(5),inst_64383);
} else {
if((state_val_64415 === (12))){
var inst_64401 = frontend.fs.sync.update_graphs_txid_BANG_(latest_txid,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_64402 = cljs.core.reset_BANG_(self__._STAR_txid,latest_txid);
var inst_64403 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_64404 = [true];
var inst_64405 = cljs.core.PersistentHashMap.fromArrays(inst_64403,inst_64404);
var state_64414__$1 = (function (){var statearr_64426 = state_64414;
(statearr_64426[(9)] = inst_64401);

(statearr_64426[(10)] = inst_64402);

return statearr_64426;
})();
var statearr_64427_66847 = state_64414__$1;
(statearr_64427_66847[(2)] = inst_64405);

(statearr_64427_66847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (2))){
var inst_64379 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_64380 = [true];
var inst_64381 = cljs.core.PersistentHashMap.fromArrays(inst_64379,inst_64380);
var state_64414__$1 = state_64414;
var statearr_64428_66848 = state_64414__$1;
(statearr_64428_66848[(2)] = inst_64381);

(statearr_64428_66848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (11))){
var inst_64410 = (state_64414[(2)]);
var state_64414__$1 = state_64414;
var statearr_64429_66849 = state_64414__$1;
(statearr_64429_66849[(2)] = inst_64410);

(statearr_64429_66849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (9))){
var inst_64396 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_64397 = [true];
var inst_64398 = cljs.core.PersistentHashMap.fromArrays(inst_64396,inst_64397);
var state_64414__$1 = state_64414;
var statearr_64430_66850 = state_64414__$1;
(statearr_64430_66850[(2)] = inst_64398);

(statearr_64430_66850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (5))){
var inst_64385 = (state_64414[(2)]);
var state_64414__$1 = state_64414;
var statearr_64431_66851 = state_64414__$1;
(statearr_64431_66851[(2)] = inst_64385);

(statearr_64431_66851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (14))){
var inst_64408 = (state_64414[(2)]);
var state_64414__$1 = state_64414;
var statearr_64432_66852 = state_64414__$1;
(statearr_64432_66852[(2)] = inst_64408);

(statearr_64432_66852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (10))){
var state_64414__$1 = state_64414;
var statearr_64433_66853 = state_64414__$1;
(statearr_64433_66853[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64415 === (8))){
var inst_64412 = (state_64414[(2)]);
var state_64414__$1 = state_64414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64414__$1,inst_64412);
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
var statearr_64435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64435[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64435[(1)] = (1));

return statearr_64435;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64414){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64414);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64436){var ex__41842__auto__ = e64436;
var statearr_64437_66854 = state_64414;
(statearr_64437_66854[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64414[(4)]))){
var statearr_64438_66855 = state_64414;
(statearr_64438_66855[(1)] = cljs.core.first((state_64414[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66856 = state_64414;
state_64414 = G__66856;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64414){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64439 = f__41862__auto__();
(statearr_64439[(6)] = c__41861__auto__);

return statearr_64439;
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k64370,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__64440 = k64370;
var G__64440__$1 = (((G__64440 instanceof cljs.core.Keyword))?G__64440.fqn:null);
switch (G__64440__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64370,else__4505__auto__);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__64441){
var vec__64442 = p__64441;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64442,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64442,(1),null);
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64538){
var state_val_64539 = (state_64538[(1)]);
if((state_val_64539 === (7))){
var inst_64457 = (state_64538[(7)]);
var inst_64461 = (inst_64457 - (1));
var inst_64462 = cljs.core.deref(self__._STAR_txid);
var inst_64463 = (inst_64461 > inst_64462);
var state_64538__$1 = state_64538;
var statearr_64546_66858 = state_64538__$1;
(statearr_64546_66858[(2)] = inst_64463);

(statearr_64546_66858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (20))){
var inst_64512 = cljs.core.deref(self__._STAR_stopped);
var state_64538__$1 = state_64538;
if(cljs.core.truth_(inst_64512)){
var statearr_64547_66859 = state_64538__$1;
(statearr_64547_66859[(1)] = (22));

} else {
var statearr_64551_66860 = state_64538__$1;
(statearr_64551_66860[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (27))){
var inst_64532 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
var statearr_64552_66861 = state_64538__$1;
(statearr_64552_66861[(2)] = inst_64532);

(statearr_64552_66861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (1))){
var inst_64445 = cljs.core.deref(self__._STAR_txid);
var inst_64446 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(null,self__.graph_uuid,inst_64445);
var state_64538__$1 = state_64538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64538__$1,(2),inst_64446);
} else {
if((state_val_64539 === (24))){
var inst_64534 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
var statearr_64554_66862 = state_64538__$1;
(statearr_64554_66862[(2)] = inst_64534);

(statearr_64554_66862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (4))){
var inst_64448 = (state_64538[(8)]);
var inst_64457 = (state_64538[(7)]);
var inst_64458 = (state_64538[(9)]);
var inst_64455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64448,(0),null);
var inst_64456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64448,(1),null);
var inst_64457__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64448,(2),null);
var inst_64458__$1 = (inst_64457__$1 == null);
var state_64538__$1 = (function (){var statearr_64555 = state_64538;
(statearr_64555[(10)] = inst_64456);

(statearr_64555[(11)] = inst_64455);

(statearr_64555[(7)] = inst_64457__$1);

(statearr_64555[(9)] = inst_64458__$1);

return statearr_64555;
})();
if(cljs.core.truth_(inst_64458__$1)){
var statearr_64556_66863 = state_64538__$1;
(statearr_64556_66863[(1)] = (6));

} else {
var statearr_64557_66864 = state_64538__$1;
(statearr_64557_66864[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (15))){
var inst_64456 = (state_64538[(10)]);
var inst_64484 = frontend.fs.sync.update_graphs_txid_BANG_(inst_64456,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_64485 = cljs.core.reset_BANG_(self__._STAR_txid,inst_64456);
var inst_64490 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_64491 = [true];
var inst_64492 = cljs.core.PersistentHashMap.fromArrays(inst_64490,inst_64491);
var state_64538__$1 = (function (){var statearr_64560 = state_64538;
(statearr_64560[(12)] = inst_64485);

(statearr_64560[(13)] = inst_64484);

return statearr_64560;
})();
var statearr_64561_66865 = state_64538__$1;
(statearr_64561_66865[(2)] = inst_64492);

(statearr_64561_66865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (21))){
var inst_64536 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64538__$1,inst_64536);
} else {
if((state_val_64539 === (13))){
var state_64538__$1 = state_64538;
var statearr_64562_66866 = state_64538__$1;
(statearr_64562_66866[(2)] = null);

(statearr_64562_66866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (22))){
var inst_64514 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_64518 = [true];
var inst_64519 = cljs.core.PersistentHashMap.fromArrays(inst_64514,inst_64518);
var state_64538__$1 = state_64538;
var statearr_64563_66867 = state_64538__$1;
(statearr_64563_66867[(2)] = inst_64519);

(statearr_64563_66867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (29))){
var state_64538__$1 = state_64538;
var statearr_64568_66868 = state_64538__$1;
(statearr_64568_66868[(2)] = null);

(statearr_64568_66868[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (6))){
var inst_64458 = (state_64538[(9)]);
var state_64538__$1 = state_64538;
var statearr_64570_66869 = state_64538__$1;
(statearr_64570_66869[(2)] = inst_64458);

(statearr_64570_66869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (28))){
var inst_64525 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_64526 = [true];
var inst_64527 = cljs.core.PersistentHashMap.fromArrays(inst_64525,inst_64526);
var state_64538__$1 = state_64538;
var statearr_64571_66870 = state_64538__$1;
(statearr_64571_66870[(2)] = inst_64527);

(statearr_64571_66870[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (25))){
var inst_64505 = (state_64538[(14)]);
var state_64538__$1 = state_64538;
var statearr_64573_66871 = state_64538__$1;
(statearr_64573_66871[(2)] = inst_64505);

(statearr_64573_66871[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (17))){
var inst_64498 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
var statearr_64574_66872 = state_64538__$1;
(statearr_64574_66872[(2)] = inst_64498);

(statearr_64574_66872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (3))){
var inst_64448 = (state_64538[(8)]);
var state_64538__$1 = state_64538;
var statearr_64576_66873 = state_64538__$1;
(statearr_64576_66873[(2)] = inst_64448);

(statearr_64576_66873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (12))){
var inst_64448 = (state_64538[(8)]);
var inst_64456 = (state_64538[(10)]);
var inst_64480 = (state_64538[(15)]);
var inst_64455 = (state_64538[(11)]);
var inst_64457 = (state_64538[(7)]);
var inst_64475 = frontend.fs.sync.diffs__GT_partitioned_filetxns((10));
var inst_64476 = (function (){var diff_r = inst_64448;
var vec__64452 = inst_64448;
var diff_txns = inst_64455;
var latest_txid = inst_64456;
var min_txid = inst_64457;
return (function (r,i){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.reverse(i));
});
})();
var inst_64477 = cljs.core.completing.cljs$core$IFn$_invoke$arity$1(inst_64476);
var inst_64478 = cljs.core.List.EMPTY;
var inst_64479 = cljs.core.reverse(inst_64455);
var inst_64480__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(inst_64475,inst_64477,inst_64478,inst_64479);
var inst_64481 = cljs.core.flatten(inst_64480__$1);
var inst_64482 = cljs.core.empty_QMARK_(inst_64481);
var state_64538__$1 = (function (){var statearr_64578 = state_64538;
(statearr_64578[(15)] = inst_64480__$1);

return statearr_64578;
})();
if(inst_64482){
var statearr_64579_66874 = state_64538__$1;
(statearr_64579_66874[(1)] = (15));

} else {
var statearr_64580_66875 = state_64538__$1;
(statearr_64580_66875[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (2))){
var inst_64448 = (state_64538[(8)]);
var inst_64448__$1 = (state_64538[(2)]);
var inst_64449 = (inst_64448__$1 instanceof cljs.core.ExceptionInfo);
var state_64538__$1 = (function (){var statearr_64585 = state_64538;
(statearr_64585[(8)] = inst_64448__$1);

return statearr_64585;
})();
if(cljs.core.truth_(inst_64449)){
var statearr_64586_66876 = state_64538__$1;
(statearr_64586_66876[(1)] = (3));

} else {
var statearr_64587_66877 = state_64538__$1;
(statearr_64587_66877[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (23))){
var inst_64505 = (state_64538[(14)]);
var inst_64521 = new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586).cljs$core$IFn$_invoke$arity$1(inst_64505);
var state_64538__$1 = state_64538;
if(cljs.core.truth_(inst_64521)){
var statearr_64588_66878 = state_64538__$1;
(statearr_64588_66878[(1)] = (25));

} else {
var statearr_64589_66879 = state_64538__$1;
(statearr_64589_66879[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (19))){
var inst_64505 = (state_64538[(14)]);
var inst_64508 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_64509 = [inst_64505];
var inst_64510 = cljs.core.PersistentHashMap.fromArrays(inst_64508,inst_64509);
var state_64538__$1 = state_64538;
var statearr_64590_66880 = state_64538__$1;
(statearr_64590_66880[(2)] = inst_64510);

(statearr_64590_66880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (11))){
var inst_64503 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
var statearr_64591_66881 = state_64538__$1;
(statearr_64591_66881[(2)] = inst_64503);

(statearr_64591_66881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (9))){
var inst_64457 = (state_64538[(7)]);
var inst_64467 = cljs.core.deref(self__._STAR_txid);
var inst_64468 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["min-txid",inst_64457,"request-txid",inst_64467], 0));
var inst_64469 = [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586)];
var inst_64470 = [true];
var inst_64471 = cljs.core.PersistentHashMap.fromArrays(inst_64469,inst_64470);
var state_64538__$1 = (function (){var statearr_64592 = state_64538;
(statearr_64592[(16)] = inst_64468);

return statearr_64592;
})();
var statearr_64593_66882 = state_64538__$1;
(statearr_64593_66882[(2)] = inst_64471);

(statearr_64593_66882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (5))){
var inst_64505 = (state_64538[(14)]);
var inst_64505__$1 = (state_64538[(2)]);
var inst_64506 = (inst_64505__$1 instanceof cljs.core.ExceptionInfo);
var state_64538__$1 = (function (){var statearr_64594 = state_64538;
(statearr_64594[(14)] = inst_64505__$1);

return statearr_64594;
})();
if(cljs.core.truth_(inst_64506)){
var statearr_64595_66883 = state_64538__$1;
(statearr_64595_66883[(1)] = (19));

} else {
var statearr_64596_66884 = state_64538__$1;
(statearr_64596_66884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (14))){
var inst_64501 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
var statearr_64599_66885 = state_64538__$1;
(statearr_64599_66885[(2)] = inst_64501);

(statearr_64599_66885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (26))){
var state_64538__$1 = state_64538;
var statearr_64600_66886 = state_64538__$1;
(statearr_64600_66886[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (16))){
var inst_64480 = (state_64538[(15)]);
var inst_64494 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_64480,self__.repo,self__._STAR_txid,self__._STAR_stopped);
var state_64538__$1 = state_64538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64538__$1,(18),inst_64494);
} else {
if((state_val_64539 === (30))){
var inst_64530 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
var statearr_64609_66887 = state_64538__$1;
(statearr_64609_66887[(2)] = inst_64530);

(statearr_64609_66887[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (10))){
var inst_64456 = (state_64538[(10)]);
var inst_64473 = cljs.core.pos_int_QMARK_(inst_64456);
var state_64538__$1 = state_64538;
if(inst_64473){
var statearr_64610_66888 = state_64538__$1;
(statearr_64610_66888[(1)] = (12));

} else {
var statearr_64611_66889 = state_64538__$1;
(statearr_64611_66889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (18))){
var inst_64496 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
var statearr_64612_66890 = state_64538__$1;
(statearr_64612_66890[(2)] = inst_64496);

(statearr_64612_66890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64539 === (8))){
var inst_64465 = (state_64538[(2)]);
var state_64538__$1 = state_64538;
if(cljs.core.truth_(inst_64465)){
var statearr_64616_66891 = state_64538__$1;
(statearr_64616_66891[(1)] = (9));

} else {
var statearr_64617_66892 = state_64538__$1;
(statearr_64617_66892[(1)] = (10));

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
var statearr_64624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64624[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64624[(1)] = (1));

return statearr_64624;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64538){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64538);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64625){var ex__41842__auto__ = e64625;
var statearr_64626_66893 = state_64538;
(statearr_64626_66893[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64538[(4)]))){
var statearr_64627_66894 = state_64538;
(statearr_64627_66894[(1)] = cljs.core.first((state_64538[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66895 = state_64538;
state_64538 = G__66895;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64538){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64628 = f__41862__auto__();
(statearr_64628[(6)] = c__41861__auto__);

return statearr_64628;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64648){
var state_val_64649 = (state_64648[(1)]);
if((state_val_64649 === (1))){
var inst_64630 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_64631 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_64648__$1 = (function (){var statearr_64650 = state_64648;
(statearr_64650[(7)] = inst_64631);

return statearr_64650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64648__$1,(2),inst_64630);
} else {
if((state_val_64649 === (2))){
var inst_64631 = (state_64648[(7)]);
var inst_64633 = (state_64648[(2)]);
var state_64648__$1 = (function (){var statearr_64651 = state_64648;
(statearr_64651[(8)] = inst_64633);

return statearr_64651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64648__$1,(3),inst_64631);
} else {
if((state_val_64649 === (3))){
var inst_64633 = (state_64648[(8)]);
var inst_64635 = (state_64648[(2)]);
var inst_64636 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_64633,inst_64635);
var inst_64637 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_64648__$1 = (function (){var statearr_64658 = state_64648;
(statearr_64658[(9)] = inst_64636);

return statearr_64658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64648__$1,(4),inst_64637);
} else {
if((state_val_64649 === (4))){
var inst_64636 = (state_64648[(9)]);
var inst_64639 = (state_64648[(2)]);
var inst_64640 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_64639);
var inst_64641 = cljs.core.count(inst_64636);
var inst_64642 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(remote->local)]",inst_64641,"files need to sync"], 0));
var inst_64643 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync._relative_path,inst_64636);
var inst_64644 = this$__$1.sync_files_remote__GT_local_BANG_(inst_64643,inst_64640);
var state_64648__$1 = (function (){var statearr_64660 = state_64648;
(statearr_64660[(10)] = inst_64642);

return statearr_64660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64648__$1,(5),inst_64644);
} else {
if((state_val_64649 === (5))){
var inst_64646 = (state_64648[(2)]);
var state_64648__$1 = state_64648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64648__$1,inst_64646);
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
var statearr_64662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64662[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_64662[(1)] = (1));

return statearr_64662;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_64648){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64648);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64663){var ex__41842__auto__ = e64663;
var statearr_64664_66896 = state_64648;
(statearr_64664_66896[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64648[(4)]))){
var statearr_64665_66897 = state_64648;
(statearr_64665_66897[(1)] = cljs.core.first((state_64648[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66898 = state_64648;
state_64648 = G__66898;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_64648){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_64648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64667 = f__41862__auto__();
(statearr_64667[(6)] = c__41861__auto__);

return statearr_64667;
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64369){
var self__ = this;
var G__64369__$1 = this;
return (new cljs.core.RecordIter((0),G__64369__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64371,other64372){
var self__ = this;
var this64371__$1 = this;
return (((!((other64372 == null)))) && ((((this64371__$1.constructor === other64372.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.user_uuid,other64372.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.graph_uuid,other64372.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.base_path,other64372.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.repo,other64372.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1._STAR_txid,other64372._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1._STAR_sync_state,other64372._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.local__GT_remote_syncer,other64372.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1._STAR_stopped,other64372._STAR_stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.__extmap,other64372.__extmap)))))))))))))))))))));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k64370){
var self__ = this;
var this__4509__auto____$1 = this;
var G__64684 = k64370;
var G__64684__$1 = (((G__64684 instanceof cljs.core.Keyword))?G__64684.fqn:null);
switch (G__64684__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k64370);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__64369){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__64686 = cljs.core.keyword_identical_QMARK_;
var expr__64687 = k__4511__auto__;
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(G__64369,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,G__64369,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,G__64369,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__64369,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__64369,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,G__64369,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,G__64369,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64686.cljs$core$IFn$_invoke$arity$2 ? pred__64686.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__64687) : pred__64686.call(null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__64687)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__64369,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__64369),null));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__64369){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,G__64369,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$map__GT_Remote__GT_LocalSyncer(G__64373){
var extmap__4542__auto__ = (function (){var G__64694 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64373,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], 0));
if(cljs.core.record_QMARK_(G__64373)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64694);
} else {
return G__64694;
}
})();
return (new frontend.fs.sync.Remote__GT_LocalSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__64373),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__64373),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__64373),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__64373),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__64373),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__64373),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__64373),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585).cljs$core$IFn$_invoke$arity$1(G__64373),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * return true when file changed compared with remote
 */
frontend.fs.sync.file_changed_QMARK_ = (function frontend$fs$sync$file_changed_QMARK_(graph_uuid,file_path_without_base_path,base_path){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64713){
var state_val_64714 = (state_64713[(1)]);
if((state_val_64714 === (1))){
var inst_64697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64698 = [file_path_without_base_path];
var inst_64699 = (new cljs.core.PersistentVector(null,1,(5),inst_64697,inst_64698,null));
var inst_64700 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(null,graph_uuid,inst_64699);
var state_64713__$1 = state_64713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64713__$1,(2),inst_64700);
} else {
if((state_val_64714 === (2))){
var inst_64702 = (state_64713[(2)]);
var inst_64703 = cljs.core.first(inst_64702);
var inst_64704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64705 = [file_path_without_base_path];
var inst_64706 = (new cljs.core.PersistentVector(null,1,(5),inst_64704,inst_64705,null));
var inst_64707 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_64706);
var state_64713__$1 = (function (){var statearr_64715 = state_64713;
(statearr_64715[(7)] = inst_64703);

return statearr_64715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64713__$1,(3),inst_64707);
} else {
if((state_val_64714 === (3))){
var inst_64703 = (state_64713[(7)]);
var inst_64709 = (state_64713[(2)]);
var inst_64710 = cljs.core.first(inst_64709);
var inst_64711 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_64703,inst_64710);
var state_64713__$1 = state_64713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64713__$1,inst_64711);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__ = null;
var frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____0 = (function (){
var statearr_64716 = [null,null,null,null,null,null,null,null];
(statearr_64716[(0)] = frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__);

(statearr_64716[(1)] = (1));

return statearr_64716;
});
var frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____1 = (function (state_64713){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64713);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64717){var ex__41842__auto__ = e64717;
var statearr_64718_66900 = state_64713;
(statearr_64718_66900[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64713[(4)]))){
var statearr_64719_66901 = state_64713;
(statearr_64719_66901[(1)] = cljs.core.first((state_64713[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66902 = state_64713;
state_64713 = G__66902;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__ = function(state_64713){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____1.call(this,state_64713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____0;
frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto____1;
return frontend$fs$sync$file_changed_QMARK__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64720 = f__41862__auto__();
(statearr_64720[(6)] = c__41861__auto__);

return statearr_64720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.local_file_exists_QMARK_ = (function frontend$fs$sync$local_file_exists_QMARK_(relative_path,base_path){
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64738){
var state_val_64739 = (state_64738[(1)]);
if((state_val_64739 === (1))){
var inst_64729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64730 = [relative_path];
var inst_64731 = (new cljs.core.PersistentVector(null,1,(5),inst_64729,inst_64730,null));
var inst_64732 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,inst_64731);
var state_64738__$1 = state_64738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64738__$1,(2),inst_64732);
} else {
if((state_val_64739 === (2))){
var inst_64734 = (state_64738[(2)]);
var inst_64735 = cljs.core.ex_cause(inst_64734);
var inst_64736 = (inst_64735 == null);
var state_64738__$1 = state_64738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64738__$1,inst_64736);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__ = null;
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____0 = (function (){
var statearr_64760 = [null,null,null,null,null,null,null];
(statearr_64760[(0)] = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__);

(statearr_64760[(1)] = (1));

return statearr_64760;
});
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____1 = (function (state_64738){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64738);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64761){var ex__41842__auto__ = e64761;
var statearr_64762_66903 = state_64738;
(statearr_64762_66903[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64738[(4)]))){
var statearr_64764_66904 = state_64738;
(statearr_64764_66904[(1)] = cljs.core.first((state_64738[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66905 = state_64738;
state_64738 = G__66905;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__ = function(state_64738){
switch(arguments.length){
case 0:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____1.call(this,state_64738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____0;
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto____1;
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64773 = f__41862__auto__();
(statearr_64773[(6)] = c__41861__auto__);

return statearr_64773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.contains_path_QMARK_ = (function frontend$fs$sync$contains_path_QMARK_(regexps,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__64775_SHARP_,p2__64774_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(p2__64774_SHARP_,path))){
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_64848){
var state_val_64853 = (state_64848[(1)]);
if((state_val_64853 === (7))){
var inst_64817 = (state_64848[(2)]);
var state_64848__$1 = state_64848;
var statearr_64863_66906 = state_64848__$1;
(statearr_64863_66906[(2)] = inst_64817);

(statearr_64863_66906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (1))){
var inst_64800 = frontend.fs.sync.relative_path(e);
var inst_64837 = e.type;
var state_64848__$1 = (function (){var statearr_64888 = state_64848;
(statearr_64888[(7)] = inst_64800);

return statearr_64888;
})();
var G__64893_66907 = inst_64837;
switch (G__64893_66907) {
case "unlink":
var statearr_64898_66909 = state_64848__$1;
(statearr_64898_66909[(1)] = (3));


break;
case "add":
case "change":
var statearr_64899_66910 = state_64848__$1;
(statearr_64899_66910[(1)] = (8));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64893_66907)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (4))){
var inst_64810 = (state_64848[(8)]);
var inst_64810__$1 = (state_64848[(2)]);
var inst_64812 = (inst_64810__$1 == null);
var state_64848__$1 = (function (){var statearr_64908 = state_64848;
(statearr_64908[(8)] = inst_64810__$1);

return statearr_64908;
})();
if(cljs.core.truth_(inst_64812)){
var statearr_64909_66911 = state_64848__$1;
(statearr_64909_66911[(1)] = (5));

} else {
var statearr_64914_66912 = state_64848__$1;
(statearr_64914_66912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (13))){
var inst_64832 = (state_64848[(2)]);
var state_64848__$1 = state_64848;
var statearr_64927_66913 = state_64848__$1;
(statearr_64927_66913[(2)] = inst_64832);

(statearr_64927_66913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (6))){
var inst_64810 = (state_64848[(8)]);
var inst_64815 = cljs.core.ex_cause(inst_64810);
var state_64848__$1 = state_64848;
var statearr_64933_66914 = state_64848__$1;
(statearr_64933_66914[(2)] = inst_64815);

(statearr_64933_66914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (3))){
var inst_64800 = (state_64848[(7)]);
var inst_64805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64806 = [inst_64800];
var inst_64807 = (new cljs.core.PersistentVector(null,1,(5),inst_64805,inst_64806,null));
var inst_64808 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",basepath,inst_64807);
var state_64848__$1 = state_64848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64848__$1,(4),inst_64808);
} else {
if((state_val_64853 === (12))){
var inst_64835 = (state_64848[(2)]);
var state_64848__$1 = state_64848;
var statearr_64938_66915 = state_64848__$1;
(statearr_64938_66915[(2)] = inst_64835);

(statearr_64938_66915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (2))){
var inst_64843 = (state_64848[(2)]);
var state_64848__$1 = state_64848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64848__$1,inst_64843);
} else {
if((state_val_64853 === (11))){
var inst_64825 = (state_64848[(9)]);
var state_64848__$1 = state_64848;
var statearr_64952_66916 = state_64848__$1;
(statearr_64952_66916[(2)] = inst_64825);

(statearr_64952_66916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (9))){
var inst_64825 = (state_64848[(9)]);
var inst_64825__$1 = (state_64848[(2)]);
var state_64848__$1 = (function (){var statearr_64957 = state_64848;
(statearr_64957[(9)] = inst_64825__$1);

return statearr_64957;
})();
if(cljs.core.truth_(inst_64825__$1)){
var statearr_64958_66926 = state_64848__$1;
(statearr_64958_66926[(1)] = (10));

} else {
var statearr_64959_66932 = state_64848__$1;
(statearr_64959_66932[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (5))){
var state_64848__$1 = state_64848;
var statearr_64960_66933 = state_64848__$1;
(statearr_64960_66933[(2)] = null);

(statearr_64960_66933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64853 === (10))){
var inst_64800 = (state_64848[(7)]);
var inst_64830 = frontend.fs.sync.file_changed_QMARK_(graph_uuid,inst_64800,basepath);
var state_64848__$1 = state_64848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64848__$1,(13),inst_64830);
} else {
if((state_val_64853 === (8))){
var inst_64800 = (state_64848[(7)]);
var inst_64823 = frontend.fs.sync.local_file_exists_QMARK_(inst_64800,basepath);
var state_64848__$1 = state_64848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64848__$1,(9),inst_64823);
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
var statearr_64965 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64965[(0)] = frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__);

(statearr_64965[(1)] = (1));

return statearr_64965;
});
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____1 = (function (state_64848){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_64848);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e64966){var ex__41842__auto__ = e64966;
var statearr_64967_66957 = state_64848;
(statearr_64967_66957[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_64848[(4)]))){
var statearr_64968_66960 = state_64848;
(statearr_64968_66960[(1)] = cljs.core.first((state_64848[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66966 = state_64848;
state_64848 = G__66966;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__ = function(state_64848){
switch(arguments.length){
case 0:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____1.call(this,state_64848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____0;
frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto____1;
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_64969 = f__41862__auto__();
(statearr_64969[(6)] = c__41861__auto__);

return statearr_64969;
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k64975,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__64979 = k64975;
var G__64979__$1 = (((G__64979 instanceof cljs.core.Keyword))?G__64979.fqn:null);
switch (G__64979__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64975,else__4505__auto__);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__64980){
var vec__64981 = p__64980;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64981,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64981,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [/version-files\/.*/,null,/logseq\/\.recycle\/.*/,null,/logseq\/bak\/.*/,null,/logseq\/graphs-txid.edn$/,null,/\.DS_Store$/,null], null), null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [/^pages\//,null,/^assets\//,null,/^logseq\//,null,/^journals\//,null], null), null);
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
var c__41861__auto___66993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65092){
var state_val_65093 = (state_65092[(1)]);
if((state_val_65093 === (7))){
var inst_65039 = (state_65092[(2)]);
var inst_65040 = cljs.core.__destructure_map(inst_65039);
var inst_65041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65040,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_65042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65040,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_65043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65040,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_65092__$1 = (function (){var statearr_65094 = state_65092;
(statearr_65094[(7)] = inst_65041);

(statearr_65094[(8)] = inst_65042);

return statearr_65094;
})();
if(cljs.core.truth_(inst_65043)){
var statearr_65095_66994 = state_65092__$1;
(statearr_65095_66994[(1)] = (17));

} else {
var statearr_65096_66995 = state_65092__$1;
(statearr_65096_66995[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (20))){
var inst_64987 = (state_65092[(9)]);
var inst_65048 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_64987,false);
var inst_65049 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,null);
var inst_65050 = cljs.core.async.timeout(self__.rate);
var inst_65051 = cljs.core.PersistentVector.EMPTY;
var inst_64986 = inst_65050;
var inst_64987__$1 = inst_65051;
var state_65092__$1 = (function (){var statearr_65097 = state_65092;
(statearr_65097[(10)] = inst_65049);

(statearr_65097[(11)] = inst_64986);

(statearr_65097[(9)] = inst_64987__$1);

(statearr_65097[(12)] = inst_65048);

return statearr_65097;
})();
var statearr_65098_66996 = state_65092__$1;
(statearr_65098_66996[(2)] = null);

(statearr_65098_66996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (27))){
var inst_65057 = (state_65092[(13)]);
var state_65092__$1 = state_65092;
var statearr_65099_66997 = state_65092__$1;
(statearr_65099_66997[(2)] = inst_65057);

(statearr_65099_66997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (1))){
var inst_64984 = cljs.core.async.timeout(self__.rate);
var inst_64985 = cljs.core.PersistentVector.EMPTY;
var inst_64986 = inst_64984;
var inst_64987 = inst_64985;
var state_65092__$1 = (function (){var statearr_65100 = state_65092;
(statearr_65100[(11)] = inst_64986);

(statearr_65100[(9)] = inst_64987);

return statearr_65100;
})();
var statearr_65101_66998 = state_65092__$1;
(statearr_65101_66998[(2)] = null);

(statearr_65101_66998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (24))){
var inst_65042 = (state_65092[(8)]);
var inst_65076 = (inst_65042 == null);
var state_65092__$1 = state_65092;
if(cljs.core.truth_(inst_65076)){
var statearr_65102_66999 = state_65092__$1;
(statearr_65102_66999[(1)] = (33));

} else {
var statearr_65103_67000 = state_65092__$1;
(statearr_65103_67000[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (4))){
var inst_65006 = (state_65092[(14)]);
var inst_64986 = (state_65092[(11)]);
var inst_65004 = (state_65092[(15)]);
var inst_65004__$1 = (state_65092[(2)]);
var inst_65005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65004__$1,(0),null);
var inst_65006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65004__$1,(1),null);
var inst_65007 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65006__$1,inst_64986);
var state_65092__$1 = (function (){var statearr_65104 = state_65092;
(statearr_65104[(14)] = inst_65006__$1);

(statearr_65104[(16)] = inst_65005);

(statearr_65104[(15)] = inst_65004__$1);

return statearr_65104;
})();
if(inst_65007){
var statearr_65105_67001 = state_65092__$1;
(statearr_65105_67001[(1)] = (5));

} else {
var statearr_65106_67002 = state_65092__$1;
(statearr_65106_67002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (15))){
var state_65092__$1 = state_65092;
var statearr_65109_67003 = state_65092__$1;
(statearr_65109_67003[(2)] = null);

(statearr_65109_67003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (21))){
var inst_65042 = (state_65092[(8)]);
var inst_65054 = (inst_65042 == null);
var inst_65055 = cljs.core.not(inst_65054);
var state_65092__$1 = state_65092;
if(inst_65055){
var statearr_65110_67005 = state_65092__$1;
(statearr_65110_67005[(1)] = (23));

} else {
var statearr_65111_67006 = state_65092__$1;
(statearr_65111_67006[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (31))){
var inst_64986 = (state_65092[(11)]);
var inst_64987 = (state_65092[(9)]);
var tmp65107 = inst_64986;
var tmp65108 = inst_64987;
var inst_64986__$1 = tmp65107;
var inst_64987__$1 = tmp65108;
var state_65092__$1 = (function (){var statearr_65112 = state_65092;
(statearr_65112[(11)] = inst_64986__$1);

(statearr_65112[(9)] = inst_64987__$1);

return statearr_65112;
})();
var statearr_65113_67007 = state_65092__$1;
(statearr_65113_67007[(2)] = null);

(statearr_65113_67007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (32))){
var inst_65074 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65114_67008 = state_65092__$1;
(statearr_65114_67008[(2)] = inst_65074);

(statearr_65114_67008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (33))){
var inst_65078 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close ratelimit chan"], 0));
var inst_65079 = cljs.core.async.close_BANG_(c);
var state_65092__$1 = (function (){var statearr_65115 = state_65092;
(statearr_65115[(17)] = inst_65078);

return statearr_65115;
})();
var statearr_65116_67009 = state_65092__$1;
(statearr_65116_67009[(2)] = inst_65079);

(statearr_65116_67009[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (13))){
var inst_65035 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65117_67011 = state_65092__$1;
(statearr_65117_67011[(2)] = inst_65035);

(statearr_65117_67011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (22))){
var inst_65086 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65118_67012 = state_65092__$1;
(statearr_65118_67012[(2)] = inst_65086);

(statearr_65118_67012[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (29))){
var inst_65061 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65119_67013 = state_65092__$1;
(statearr_65119_67013[(2)] = inst_65061);

(statearr_65119_67013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (6))){
var inst_65006 = (state_65092[(14)]);
var inst_64998 = (state_65092[(18)]);
var inst_65013 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65006,inst_64998);
var state_65092__$1 = state_65092;
if(inst_65013){
var statearr_65120_67015 = state_65092__$1;
(statearr_65120_67015[(1)] = (8));

} else {
var statearr_65121_67016 = state_65092__$1;
(statearr_65121_67016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (28))){
var inst_65064 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
if(cljs.core.truth_(inst_65064)){
var statearr_65122_67018 = state_65092__$1;
(statearr_65122_67018[(1)] = (30));

} else {
var statearr_65123_67019 = state_65092__$1;
(statearr_65123_67019[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (25))){
var inst_65084 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65124_67020 = state_65092__$1;
(statearr_65124_67020[(2)] = inst_65084);

(statearr_65124_67020[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (34))){
var state_65092__$1 = state_65092;
var statearr_65125_67022 = state_65092__$1;
(statearr_65125_67022[(2)] = null);

(statearr_65125_67022[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (17))){
var inst_65045 = cljs.core.async.close_BANG_(c);
var state_65092__$1 = state_65092;
var statearr_65126_67024 = state_65092__$1;
(statearr_65126_67024[(2)] = inst_65045);

(statearr_65126_67024[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (3))){
var inst_65090 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65092__$1,inst_65090);
} else {
if((state_val_65093 === (12))){
var inst_65006 = (state_65092[(14)]);
var inst_65029 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65006,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_65092__$1 = state_65092;
if(inst_65029){
var statearr_65128_67026 = state_65092__$1;
(statearr_65128_67026[(1)] = (14));

} else {
var statearr_65130_67028 = state_65092__$1;
(statearr_65130_67028[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (2))){
var inst_64999 = (state_65092[(19)]);
var inst_64986 = (state_65092[(11)]);
var inst_64998 = (state_65092[(18)]);
var inst_64998__$1 = from_chan;
var inst_64999__$1 = self__.stop_chan;
var inst_65000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65001 = [inst_64986,inst_64998__$1,inst_64999__$1];
var inst_65002 = (new cljs.core.PersistentVector(null,3,(5),inst_65000,inst_65001,null));
var state_65092__$1 = (function (){var statearr_65131 = state_65092;
(statearr_65131[(19)] = inst_64999__$1);

(statearr_65131[(18)] = inst_64998__$1);

return statearr_65131;
})();
return cljs.core.async.ioc_alts_BANG_(state_65092__$1,(4),inst_65002);
} else {
if((state_val_65093 === (23))){
var inst_65057 = (state_65092[(13)]);
var inst_65042 = (state_65092[(8)]);
var inst_65057__$1 = (filter_e_fn.cljs$core$IFn$_invoke$arity$1 ? filter_e_fn.cljs$core$IFn$_invoke$arity$1(inst_65042) : filter_e_fn.call(null,inst_65042));
var state_65092__$1 = (function (){var statearr_65132 = state_65092;
(statearr_65132[(13)] = inst_65057__$1);

return statearr_65132;
})();
if(cljs.core.truth_(inst_65057__$1)){
var statearr_65133_67034 = state_65092__$1;
(statearr_65133_67034[(1)] = (26));

} else {
var statearr_65134_67035 = state_65092__$1;
(statearr_65134_67035[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (35))){
var inst_65082 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65135_67036 = state_65092__$1;
(statearr_65135_67036[(2)] = inst_65082);

(statearr_65135_67036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (19))){
var inst_65088 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65136_67043 = state_65092__$1;
(statearr_65136_67043[(2)] = inst_65088);

(statearr_65136_67043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (11))){
var inst_65025 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_65026 = [true];
var inst_65027 = cljs.core.PersistentHashMap.fromArrays(inst_65025,inst_65026);
var state_65092__$1 = state_65092;
var statearr_65137_67044 = state_65092__$1;
(statearr_65137_67044[(2)] = inst_65027);

(statearr_65137_67044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (9))){
var inst_65006 = (state_65092[(14)]);
var inst_64999 = (state_65092[(19)]);
var inst_65023 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65006,inst_64999);
var state_65092__$1 = state_65092;
if(inst_65023){
var statearr_65138_67045 = state_65092__$1;
(statearr_65138_67045[(1)] = (11));

} else {
var statearr_65139_67046 = state_65092__$1;
(statearr_65139_67046[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (5))){
var inst_65009 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_65010 = [true];
var inst_65011 = cljs.core.PersistentHashMap.fromArrays(inst_65009,inst_65010);
var state_65092__$1 = state_65092;
var statearr_65140_67048 = state_65092__$1;
(statearr_65140_67048[(2)] = inst_65011);

(statearr_65140_67048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (14))){
var inst_65005 = (state_65092[(16)]);
var state_65092__$1 = state_65092;
var statearr_65141_67051 = state_65092__$1;
(statearr_65141_67051[(2)] = inst_65005);

(statearr_65141_67051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (26))){
var inst_65042 = (state_65092[(8)]);
var inst_65059 = frontend.fs.sync.filter_local_changes_pred(inst_65042,self__.base_path,self__.graph_uuid);
var state_65092__$1 = state_65092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65092__$1,(29),inst_65059);
} else {
if((state_val_65093 === (16))){
var inst_65033 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65143_67052 = state_65092__$1;
(statearr_65143_67052[(2)] = inst_65033);

(statearr_65143_67052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (30))){
var inst_64986 = (state_65092[(11)]);
var inst_64987 = (state_65092[(9)]);
var inst_65042 = (state_65092[(8)]);
var inst_65066 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_64987,inst_65042);
var inst_65067 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_65066);
var inst_65068 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_65067);
var inst_65069 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,inst_65068);
var tmp65142 = inst_64986;
var inst_64986__$1 = tmp65142;
var inst_64987__$1 = inst_65067;
var state_65092__$1 = (function (){var statearr_65144 = state_65092;
(statearr_65144[(20)] = inst_65069);

(statearr_65144[(11)] = inst_64986__$1);

(statearr_65144[(9)] = inst_64987__$1);

return statearr_65144;
})();
var statearr_65145_67056 = state_65092__$1;
(statearr_65145_67056[(2)] = null);

(statearr_65145_67056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (10))){
var inst_65037 = (state_65092[(2)]);
var state_65092__$1 = state_65092;
var statearr_65146_67058 = state_65092__$1;
(statearr_65146_67058[(2)] = inst_65037);

(statearr_65146_67058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (18))){
var inst_65041 = (state_65092[(7)]);
var state_65092__$1 = state_65092;
if(cljs.core.truth_(inst_65041)){
var statearr_65147_67059 = state_65092__$1;
(statearr_65147_67059[(1)] = (20));

} else {
var statearr_65148_67060 = state_65092__$1;
(statearr_65148_67060[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65093 === (8))){
var inst_65004 = (state_65092[(15)]);
var inst_65018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65004,(0),null);
var inst_65019 = [new cljs.core.Keyword(null,"e","e",1381269198)];
var inst_65020 = [inst_65018];
var inst_65021 = cljs.core.PersistentHashMap.fromArrays(inst_65019,inst_65020);
var state_65092__$1 = state_65092;
var statearr_65149_67062 = state_65092__$1;
(statearr_65149_67062[(2)] = inst_65021);

(statearr_65149_67062[(1)] = (10));


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
var statearr_65151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65151[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65151[(1)] = (1));

return statearr_65151;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65092){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65092);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65152){var ex__41842__auto__ = e65152;
var statearr_65153_67063 = state_65092;
(statearr_65153_67063[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65092[(4)]))){
var statearr_65154_67065 = state_65092;
(statearr_65154_67065[(1)] = cljs.core.first((state_65092[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67066 = state_65092;
state_65092 = G__67066;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65092){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65155 = f__41862__auto__();
(statearr_65155[(6)] = c__41861__auto___66993);

return statearr_65155;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65160){
var state_val_65161 = (state_65160[(1)]);
if((state_val_65161 === (1))){
var inst_65156 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_65157 = [true];
var inst_65158 = cljs.core.PersistentHashMap.fromArrays(inst_65156,inst_65157);
var state_65160__$1 = state_65160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65160__$1,inst_65158);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$state_machine__41839__auto__ = null;
var frontend$fs$sync$state_machine__41839__auto____0 = (function (){
var statearr_65162 = [null,null,null,null,null,null,null];
(statearr_65162[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65162[(1)] = (1));

return statearr_65162;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65160){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65160);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65163){var ex__41842__auto__ = e65163;
var statearr_65164_67067 = state_65160;
(statearr_65164_67067[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65160[(4)]))){
var statearr_65165_67068 = state_65160;
(statearr_65165_67068[(1)] = cljs.core.first((state_65160[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67069 = state_65160;
state_65160 = G__67069;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65160){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65166 = f__41862__auto__();
(statearr_65166[(6)] = c__41861__auto__);

return statearr_65166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
} else {
var type = cljs.core.first(es).type;
var ignore_files = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var es__GT_paths_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__64970_SHARP_){
return frontend.fs.sync.relative_path(p1__64970_SHARP_);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__64971_SHARP_){
return cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,p1__64971_SHARP_));
})));
var paths = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(es__GT_paths_xf,es);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote",paths], 0));

var r = (function (){var G__65167 = type;
switch (G__65167) {
case "add":
case "change":
return frontend.fs.sync.update_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
case "unlink":
frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths);

return frontend.fs.sync.delete_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65167)].join('')));

}
})();
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65200){
var state_val_65201 = (state_65200[(1)]);
if((state_val_65201 === (7))){
var state_65200__$1 = state_65200;
var statearr_65202_67071 = state_65200__$1;
(statearr_65202_67071[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (1))){
var inst_65168 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__add_current_local__GT_remote_files,paths);
var state_65200__$1 = (function (){var statearr_65205 = state_65200;
(statearr_65205[(7)] = inst_65168);

return statearr_65205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65200__$1,(2),r);
} else {
if((state_val_65201 === (4))){
var inst_65170 = (state_65200[(8)]);
var inst_65178 = typeof inst_65170 === 'number';
var state_65200__$1 = state_65200;
if(cljs.core.truth_(inst_65178)){
var statearr_65207_67072 = state_65200__$1;
(statearr_65207_67072[(1)] = (6));

} else {
var statearr_65209_67073 = state_65200__$1;
(statearr_65209_67073[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (6))){
var inst_65170 = (state_65200[(8)]);
var inst_65180 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote! update txid",inst_65170], 0));
var inst_65181 = frontend.fs.sync.update_graphs_txid_BANG_(inst_65170,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_65182 = cljs.core.reset_BANG_(self__._STAR_txid,inst_65170);
var inst_65183 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_65184 = [true];
var inst_65185 = cljs.core.PersistentHashMap.fromArrays(inst_65183,inst_65184);
var state_65200__$1 = (function (){var statearr_65210 = state_65200;
(statearr_65210[(9)] = inst_65180);

(statearr_65210[(10)] = inst_65181);

(statearr_65210[(11)] = inst_65182);

return statearr_65210;
})();
var statearr_65211_67076 = state_65200__$1;
(statearr_65211_67076[(2)] = inst_65185);

(statearr_65211_67076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (3))){
var inst_65174 = [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663)];
var inst_65175 = [true];
var inst_65176 = cljs.core.PersistentHashMap.fromArrays(inst_65174,inst_65175);
var state_65200__$1 = state_65200;
var statearr_65212_67077 = state_65200__$1;
(statearr_65212_67077[(2)] = inst_65176);

(statearr_65212_67077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (2))){
var inst_65170 = (state_65200[(8)]);
var inst_65170__$1 = (state_65200[(2)]);
var inst_65171 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__remove_current_local__GT_remote_files,paths);
var inst_65172 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_65170__$1);
var state_65200__$1 = (function (){var statearr_65213 = state_65200;
(statearr_65213[(12)] = inst_65171);

(statearr_65213[(8)] = inst_65170__$1);

return statearr_65213;
})();
if(cljs.core.truth_(inst_65172)){
var statearr_65218_67094 = state_65200__$1;
(statearr_65218_67094[(1)] = (3));

} else {
var statearr_65219_67096 = state_65200__$1;
(statearr_65219_67096[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (11))){
var inst_65194 = (state_65200[(2)]);
var state_65200__$1 = state_65200;
var statearr_65220_67108 = state_65200__$1;
(statearr_65220_67108[(2)] = inst_65194);

(statearr_65220_67108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (9))){
var inst_65170 = (state_65200[(8)]);
var inst_65188 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote unknown:",inst_65170], 0));
var inst_65189 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_65190 = [inst_65170];
var inst_65191 = cljs.core.PersistentHashMap.fromArrays(inst_65189,inst_65190);
var state_65200__$1 = (function (){var statearr_65221 = state_65200;
(statearr_65221[(13)] = inst_65188);

return statearr_65221;
})();
var statearr_65222_67118 = state_65200__$1;
(statearr_65222_67118[(2)] = inst_65191);

(statearr_65222_67118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (5))){
var inst_65198 = (state_65200[(2)]);
var state_65200__$1 = state_65200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65200__$1,inst_65198);
} else {
if((state_val_65201 === (10))){
var state_65200__$1 = state_65200;
var statearr_65223_67136 = state_65200__$1;
(statearr_65223_67136[(2)] = null);

(statearr_65223_67136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65201 === (8))){
var inst_65196 = (state_65200[(2)]);
var state_65200__$1 = state_65200;
var statearr_65224_67141 = state_65200__$1;
(statearr_65224_67141[(2)] = inst_65196);

(statearr_65224_67141[(1)] = (5));


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
var statearr_65229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65229[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65229[(1)] = (1));

return statearr_65229;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65200){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65200);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65230){var ex__41842__auto__ = e65230;
var statearr_65231_67144 = state_65200;
(statearr_65231_67144[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65200[(4)]))){
var statearr_65232_67145 = state_65200;
(statearr_65232_67145[(1)] = cljs.core.first((state_65200[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67146 = state_65200;
state_65200 = G__67146;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65200){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65233 = f__41862__auto__();
(statearr_65233[(6)] = c__41861__auto__);

return statearr_65233;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65315){
var state_val_65316 = (state_65315[(1)]);
if((state_val_65316 === (7))){
var inst_65257 = (state_65315[(7)]);
var inst_65264 = cljs.core.empty_QMARK_(inst_65257);
var state_65315__$1 = state_65315;
if(inst_65264){
var statearr_65317_67148 = state_65315__$1;
(statearr_65317_67148[(1)] = (9));

} else {
var statearr_65318_67149 = state_65315__$1;
(statearr_65318_67149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (20))){
var inst_65281 = (state_65315[(8)]);
var state_65315__$1 = state_65315;
if(cljs.core.truth_(inst_65281)){
var statearr_65319_67150 = state_65315__$1;
(statearr_65319_67150[(1)] = (22));

} else {
var statearr_65321_67152 = state_65315__$1;
(statearr_65321_67152[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (27))){
var inst_65305 = (state_65315[(2)]);
var state_65315__$1 = state_65315;
var statearr_65323_67153 = state_65315__$1;
(statearr_65323_67153[(2)] = inst_65305);

(statearr_65323_67153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (1))){
var inst_65238 = (state_65315[(9)]);
var inst_65238__$1 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_65239 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_65315__$1 = (function (){var statearr_65324 = state_65315;
(statearr_65324[(10)] = inst_65239);

(statearr_65324[(9)] = inst_65238__$1);

return statearr_65324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65315__$1,(2),inst_65238__$1);
} else {
if((state_val_65316 === (24))){
var inst_65301 = (state_65315[(2)]);
var state_65315__$1 = state_65315;
if(cljs.core.truth_(inst_65301)){
var statearr_65326_67157 = state_65315__$1;
(statearr_65326_67157[(1)] = (25));

} else {
var statearr_65327_67158 = state_65315__$1;
(statearr_65327_67158[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (4))){
var state_65315__$1 = state_65315;
if(cljs.core.truth_(self__.stopped)){
var statearr_65328_67159 = state_65315__$1;
(statearr_65328_67159[(1)] = (6));

} else {
var statearr_65329_67160 = state_65315__$1;
(statearr_65329_67160[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (15))){
var inst_65280 = (state_65315[(11)]);
var inst_65293 = (state_65315[(2)]);
var state_65315__$1 = (function (){var statearr_65330 = state_65315;
(statearr_65330[(12)] = inst_65293);

return statearr_65330;
})();
if(cljs.core.truth_(inst_65280)){
var statearr_65331_67162 = state_65315__$1;
(statearr_65331_67162[(1)] = (19));

} else {
var statearr_65332_67163 = state_65315__$1;
(statearr_65332_67163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (21))){
var inst_65307 = (state_65315[(2)]);
var state_65315__$1 = state_65315;
var statearr_65333_67165 = state_65315__$1;
(statearr_65333_67165[(2)] = inst_65307);

(statearr_65333_67165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (13))){
var inst_65284 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_65285 = cljs.core.deref(inst_65284);
var state_65315__$1 = state_65315;
if(cljs.core.truth_(inst_65285)){
var statearr_65337_67166 = state_65315__$1;
(statearr_65337_67166[(1)] = (16));

} else {
var statearr_65339_67167 = state_65315__$1;
(statearr_65339_67167[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (22))){
var inst_65281 = (state_65315[(8)]);
var state_65315__$1 = state_65315;
var statearr_65340_67169 = state_65315__$1;
(statearr_65340_67169[(2)] = inst_65281);

(statearr_65340_67169[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (6))){
var inst_65260 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_65261 = [true];
var inst_65262 = cljs.core.PersistentHashMap.fromArrays(inst_65260,inst_65261);
var state_65315__$1 = state_65315;
var statearr_65341_67172 = state_65315__$1;
(statearr_65341_67172[(2)] = inst_65262);

(statearr_65341_67172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (25))){
var inst_65279 = (state_65315[(13)]);
var state_65315__$1 = state_65315;
var statearr_65342_67173 = state_65315__$1;
(statearr_65342_67173[(2)] = inst_65279);

(statearr_65342_67173[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (17))){
var inst_65279 = (state_65315[(13)]);
var state_65315__$1 = state_65315;
var statearr_65343_67175 = state_65315__$1;
(statearr_65343_67175[(2)] = inst_65279);

(statearr_65343_67175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (3))){
var inst_65241 = (state_65315[(14)]);
var inst_65239 = (state_65315[(10)]);
var inst_65238 = (state_65315[(9)]);
var inst_65243 = (state_65315[(2)]);
var inst_65244 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_65243,inst_65241);
var inst_65245 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var inst_65246 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null);
var inst_65247 = (function (){var remote_all_files_meta_c = inst_65238;
var local_all_files_meta_c = inst_65239;
var remote_all_files_meta = inst_65241;
var local_all_files_meta = inst_65243;
var diff_local_files = inst_65244;
var ignore_files = inst_65245;
var monitored_dirs = inst_65246;
return (function (p1__64972_SHARP_){
return frontend.fs.sync.__GT_FileChangeEvent("change",self__.base_path,p1__64972_SHARP_.get_normalized_path(),null);
});
})();
var inst_65248 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_65247);
var inst_65249 = (function (){var remote_all_files_meta_c = inst_65238;
var local_all_files_meta_c = inst_65239;
var remote_all_files_meta = inst_65241;
var local_all_files_meta = inst_65243;
var diff_local_files = inst_65244;
var ignore_files = inst_65245;
var monitored_dirs = inst_65246;
return (function (p1__64973_SHARP_){
var path = frontend.fs.sync.relative_path(p1__64973_SHARP_);
var and__4251__auto__ = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,path));
if(and__4251__auto__){
return frontend.fs.sync.contains_path_QMARK_(monitored_dirs,path);
} else {
return and__4251__auto__;
}
});
})();
var inst_65250 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_65249);
var inst_65251 = frontend.fs.sync.partition_file_change_events((10));
var inst_65252 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_65248,inst_65250,inst_65251);
var inst_65253 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_65252,inst_65244);
var inst_65254 = cljs.core.flatten(inst_65253);
var inst_65255 = cljs.core.count(inst_65254);
var inst_65256 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(local->remote)]",inst_65255,"files need to sync"], 0));
var inst_65257 = inst_65253;
var state_65315__$1 = (function (){var statearr_65346 = state_65315;
(statearr_65346[(7)] = inst_65257);

(statearr_65346[(15)] = inst_65256);

return statearr_65346;
})();
var statearr_65347_67185 = state_65315__$1;
(statearr_65347_67185[(2)] = null);

(statearr_65347_67185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (12))){
var inst_65279 = (state_65315[(13)]);
var inst_65278 = (state_65315[(2)]);
var inst_65279__$1 = cljs.core.__destructure_map(inst_65278);
var inst_65280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65279__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_65281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65279__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_65282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65279__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_65315__$1 = (function (){var statearr_65348 = state_65315;
(statearr_65348[(16)] = inst_65282);

(statearr_65348[(13)] = inst_65279__$1);

(statearr_65348[(11)] = inst_65280);

(statearr_65348[(8)] = inst_65281);

return statearr_65348;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_65349_67190 = state_65315__$1;
(statearr_65349_67190[(1)] = (13));

} else {
var statearr_65350_67191 = state_65315__$1;
(statearr_65350_67191[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (2))){
var inst_65239 = (state_65315[(10)]);
var inst_65241 = (state_65315[(2)]);
var state_65315__$1 = (function (){var statearr_65351 = state_65315;
(statearr_65351[(14)] = inst_65241);

return statearr_65351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65315__$1,(3),inst_65239);
} else {
if((state_val_65316 === (23))){
var inst_65282 = (state_65315[(16)]);
var state_65315__$1 = state_65315;
var statearr_65352_67193 = state_65315__$1;
(statearr_65352_67193[(2)] = inst_65282);

(statearr_65352_67193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (19))){
var inst_65257 = (state_65315[(7)]);
var inst_65295 = cljs.core.next(inst_65257);
var inst_65257__$1 = inst_65295;
var state_65315__$1 = (function (){var statearr_65354 = state_65315;
(statearr_65354[(7)] = inst_65257__$1);

return statearr_65354;
})();
var statearr_65355_67194 = state_65315__$1;
(statearr_65355_67194[(2)] = null);

(statearr_65355_67194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (11))){
var inst_65309 = (state_65315[(2)]);
var state_65315__$1 = state_65315;
var statearr_65356_67195 = state_65315__$1;
(statearr_65356_67195[(2)] = inst_65309);

(statearr_65356_67195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (9))){
var inst_65270 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_65271 = [true];
var inst_65272 = cljs.core.PersistentHashMap.fromArrays(inst_65270,inst_65271);
var state_65315__$1 = state_65315;
var statearr_65360_67196 = state_65315__$1;
(statearr_65360_67196[(2)] = inst_65272);

(statearr_65360_67196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (5))){
var inst_65313 = (state_65315[(2)]);
var state_65315__$1 = state_65315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65315__$1,inst_65313);
} else {
if((state_val_65316 === (14))){
var inst_65279 = (state_65315[(13)]);
var state_65315__$1 = state_65315;
var statearr_65361_67198 = state_65315__$1;
(statearr_65361_67198[(2)] = inst_65279);

(statearr_65361_67198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (26))){
var state_65315__$1 = state_65315;
var statearr_65362_67199 = state_65315__$1;
(statearr_65362_67199[(2)] = null);

(statearr_65362_67199[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (16))){
var inst_65279 = (state_65315[(13)]);
var inst_65287 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_65279);
var state_65315__$1 = state_65315;
var statearr_65363_67202 = state_65315__$1;
(statearr_65363_67202[(2)] = inst_65287);

(statearr_65363_67202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (10))){
var inst_65257 = (state_65315[(7)]);
var inst_65275 = cljs.core.first(inst_65257);
var inst_65276 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_65275);
var state_65315__$1 = state_65315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65315__$1,(12),inst_65276);
} else {
if((state_val_65316 === (18))){
var inst_65290 = (state_65315[(2)]);
var state_65315__$1 = state_65315;
var statearr_65364_67204 = state_65315__$1;
(statearr_65364_67204[(2)] = inst_65290);

(statearr_65364_67204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65316 === (8))){
var inst_65311 = (state_65315[(2)]);
var state_65315__$1 = state_65315;
var statearr_65365_67205 = state_65315__$1;
(statearr_65365_67205[(2)] = inst_65311);

(statearr_65365_67205[(1)] = (5));


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
var statearr_65366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65366[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65366[(1)] = (1));

return statearr_65366;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65315){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65315);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65367){var ex__41842__auto__ = e65367;
var statearr_65368_67207 = state_65315;
(statearr_65368_67207[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65315[(4)]))){
var statearr_65369_67208 = state_65315;
(statearr_65369_67208[(1)] = cljs.core.first((state_65315[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67209 = state_65315;
state_65315 = G__67209;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65315){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65370 = f__41862__auto__();
(statearr_65370[(6)] = c__41861__auto__);

return statearr_65370;
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64974){
var self__ = this;
var G__64974__$1 = this;
return (new cljs.core.RecordIter((0),G__64974__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64976,other64977){
var self__ = this;
var this64976__$1 = this;
return (((!((other64977 == null)))) && ((((this64976__$1.constructor === other64977.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.user_uuid,other64977.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.graph_uuid,other64977.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.base_path,other64977.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.repo,other64977.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1._STAR_sync_state,other64977._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.rate,other64977.rate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1._STAR_txid,other64977._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.remote__GT_local_syncer,other64977.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.stop_chan,other64977.stop_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.stopped,other64977.stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64976__$1.__extmap,other64977.__extmap)))))))))))))))))))))))));
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k64975){
var self__ = this;
var this__4509__auto____$1 = this;
var G__65373 = k64975;
var G__65373__$1 = (((G__65373 instanceof cljs.core.Keyword))?G__65373.fqn:null);
switch (G__65373__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k64975);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__64974){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__65374 = cljs.core.keyword_identical_QMARK_;
var expr__65375 = k__4511__auto__;
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(G__64974,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,G__64974,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,G__64974,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__64974,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__64974,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,G__64974,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,G__64974,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,G__64974,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,G__64974,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65374.cljs$core$IFn$_invoke$arity$2 ? pred__65374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__65375) : pred__65374.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__65375)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,G__64974,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__64974),null));
}
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__64974){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,G__64974,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$map__GT_Local__GT_RemoteSyncer(G__64978){
var extmap__4542__auto__ = (function (){var G__65377 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64978,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], 0));
if(cljs.core.record_QMARK_(G__64978)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65377);
} else {
return G__65377;
}
})();
return (new frontend.fs.sync.Local__GT_RemoteSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983).cljs$core$IFn$_invoke$arity$1(G__64978),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__64978),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65408){
var state_val_65409 = (state_65408[(1)]);
if((state_val_65409 === (7))){
var inst_65391 = this$.remote__GT_local(null,args);
var state_65408__$1 = state_65408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65408__$1,(8),inst_65391);
} else {
if((state_val_65409 === (1))){
var state_65408__$1 = state_65408;
var G__65410_67280 = self__.state;
var G__65410_67281__$1 = (((G__65410_67280 instanceof cljs.core.Keyword))?G__65410_67280.fqn:null);
switch (G__65410_67281__$1) {
case "frontend.fs.sync/idle":
var statearr_65411_67284 = state_65408__$1;
(statearr_65411_67284[(1)] = (3));


break;
case "frontend.fs.sync/local->remote":
var statearr_65412_67286 = state_65408__$1;
(statearr_65412_67286[(1)] = (5));


break;
case "frontend.fs.sync/remote->local":
var statearr_65413_67287 = state_65408__$1;
(statearr_65413_67287[(1)] = (7));


break;
case "frontend.fs.sync/local->remote-full-sync":
var statearr_65414_67288 = state_65408__$1;
(statearr_65414_67288[(1)] = (9));


break;
case "frontend.fs.sync/remote->local-full-sync":
var statearr_65415_67289 = state_65408__$1;
(statearr_65415_67289[(1)] = (11));


break;
case "frontend.fs.sync/stop":
var statearr_65416_67290 = state_65408__$1;
(statearr_65416_67290[(1)] = (13));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65410_67281__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65409 === (4))){
var inst_65385 = (state_65408[(2)]);
var state_65408__$1 = state_65408;
var statearr_65417_67291 = state_65408__$1;
(statearr_65417_67291[(2)] = inst_65385);

(statearr_65417_67291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65409 === (13))){
var inst_65403 = this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(null);
var state_65408__$1 = state_65408;
var statearr_65418_67293 = state_65408__$1;
(statearr_65418_67293[(2)] = inst_65403);

(statearr_65418_67293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65409 === (6))){
var inst_65389 = (state_65408[(2)]);
var state_65408__$1 = state_65408;
var statearr_65419_67294 = state_65408__$1;
(statearr_65419_67294[(2)] = inst_65389);

(statearr_65419_67294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65409 === (3))){
var inst_65383 = this$.idle();
var state_65408__$1 = state_65408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65408__$1,(4),inst_65383);
} else {
if((state_val_65409 === (12))){
var inst_65401 = (state_65408[(2)]);
var state_65408__$1 = state_65408;
var statearr_65420_67298 = state_65408__$1;
(statearr_65420_67298[(2)] = inst_65401);

(statearr_65420_67298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65409 === (2))){
var inst_65406 = (state_65408[(2)]);
var state_65408__$1 = state_65408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65408__$1,inst_65406);
} else {
if((state_val_65409 === (11))){
var inst_65399 = this$.remote__GT_local_full_sync(null);
var state_65408__$1 = state_65408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65408__$1,(12),inst_65399);
} else {
if((state_val_65409 === (9))){
var inst_65395 = this$.full_sync();
var state_65408__$1 = state_65408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65408__$1,(10),inst_65395);
} else {
if((state_val_65409 === (5))){
var inst_65387 = this$.local__GT_remote(args);
var state_65408__$1 = state_65408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65408__$1,(6),inst_65387);
} else {
if((state_val_65409 === (10))){
var inst_65397 = (state_65408[(2)]);
var state_65408__$1 = state_65408;
var statearr_65421_67302 = state_65408__$1;
(statearr_65421_67302[(2)] = inst_65397);

(statearr_65421_67302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65409 === (8))){
var inst_65393 = (state_65408[(2)]);
var state_65408__$1 = state_65408;
var statearr_65422_67305 = state_65408__$1;
(statearr_65422_67305[(2)] = inst_65393);

(statearr_65422_67305[(1)] = (2));


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
var statearr_65423 = [null,null,null,null,null,null,null];
(statearr_65423[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65423[(1)] = (1));

return statearr_65423;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65408){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65408);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65424){var ex__41842__auto__ = e65424;
var statearr_65425_67306 = state_65408;
(statearr_65425_67306[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65408[(4)]))){
var statearr_65426_67308 = state_65408;
(statearr_65426_67308[(1)] = cljs.core.first((state_65408[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67309 = state_65408;
state_65408 = G__67309;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65408){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65427 = f__41862__auto__();
(statearr_65427[(6)] = c__41861__auto__);

return statearr_65427;
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

var c__41861__auto___67311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65586){
var state_val_65587 = (state_65586[(1)]);
if((state_val_65587 === (7))){
var inst_65518 = (state_65586[(2)]);
var inst_65519 = cljs.core.__destructure_map(inst_65518);
var inst_65520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65519,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_65521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65519,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_65522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65519,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_65523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65519,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var state_65586__$1 = (function (){var statearr_65588 = state_65586;
(statearr_65588[(7)] = inst_65521);

(statearr_65588[(8)] = inst_65522);

(statearr_65588[(9)] = inst_65523);

return statearr_65588;
})();
if(cljs.core.truth_(inst_65520)){
var statearr_65589_67314 = state_65586__$1;
(statearr_65589_67314[(1)] = (26));

} else {
var statearr_65590_67316 = state_65586__$1;
(statearr_65590_67316[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (20))){
var inst_65498 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_65499 = [true];
var inst_65500 = cljs.core.PersistentHashMap.fromArrays(inst_65498,inst_65499);
var state_65586__$1 = state_65586;
var statearr_65591_67317 = state_65586__$1;
(statearr_65591_67317[(2)] = inst_65500);

(statearr_65591_67317[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (27))){
var inst_65521 = (state_65586[(7)]);
var state_65586__$1 = state_65586;
if(cljs.core.truth_(inst_65521)){
var statearr_65592_67318 = state_65586__$1;
(statearr_65592_67318[(1)] = (30));

} else {
var statearr_65593_67319 = state_65586__$1;
(statearr_65593_67319[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (1))){
var state_65586__$1 = state_65586;
var statearr_65594_67321 = state_65586__$1;
(statearr_65594_67321[(2)] = null);

(statearr_65594_67321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (24))){
var state_65586__$1 = state_65586;
var statearr_65595_67322 = state_65586__$1;
(statearr_65595_67322[(2)] = null);

(statearr_65595_67322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (39))){
var inst_65555 = (state_65586[(2)]);
var state_65586__$1 = (function (){var statearr_65596 = state_65586;
(statearr_65596[(10)] = inst_65555);

return statearr_65596;
})();
var statearr_65597_67323 = state_65586__$1;
(statearr_65597_67323[(2)] = null);

(statearr_65597_67323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (46))){
var state_65586__$1 = state_65586;
var statearr_65598_67368 = state_65586__$1;
(statearr_65598_67368[(2)] = null);

(statearr_65598_67368[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (4))){
var inst_65441 = (state_65586[(11)]);
var inst_65453 = (state_65586[(12)]);
var inst_65455 = (state_65586[(13)]);
var inst_65453__$1 = (state_65586[(2)]);
var inst_65454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65453__$1,(0),null);
var inst_65455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65453__$1,(1),null);
var inst_65456 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65455__$1,inst_65441);
var state_65586__$1 = (function (){var statearr_65599 = state_65586;
(statearr_65599[(12)] = inst_65453__$1);

(statearr_65599[(14)] = inst_65454);

(statearr_65599[(13)] = inst_65455__$1);

return statearr_65599;
})();
if(inst_65456){
var statearr_65600_67370 = state_65586__$1;
(statearr_65600_67370[(1)] = (5));

} else {
var statearr_65601_67371 = state_65586__$1;
(statearr_65601_67371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (15))){
var inst_65445 = (state_65586[(15)]);
var inst_65455 = (state_65586[(13)]);
var inst_65485 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65455,inst_65445);
var state_65586__$1 = state_65586;
if(inst_65485){
var statearr_65602_67375 = state_65586__$1;
(statearr_65602_67375[(1)] = (17));

} else {
var statearr_65603_67376 = state_65586__$1;
(statearr_65603_67376[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (48))){
var inst_65572 = (state_65586[(2)]);
var state_65586__$1 = (function (){var statearr_65604 = state_65586;
(statearr_65604[(16)] = inst_65572);

return statearr_65604;
})();
var statearr_65605_67377 = state_65586__$1;
(statearr_65605_67377[(2)] = null);

(statearr_65605_67377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (21))){
var inst_65455 = (state_65586[(13)]);
var inst_65502 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65455,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_65586__$1 = state_65586;
if(inst_65502){
var statearr_65606_67379 = state_65586__$1;
(statearr_65606_67379[(1)] = (23));

} else {
var statearr_65607_67380 = state_65586__$1;
(statearr_65607_67380[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (31))){
var inst_65523 = (state_65586[(9)]);
var state_65586__$1 = state_65586;
if(cljs.core.truth_(inst_65523)){
var statearr_65608_67382 = state_65586__$1;
(statearr_65608_67382[(1)] = (41));

} else {
var statearr_65609_67384 = state_65586__$1;
(statearr_65609_67384[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (32))){
var inst_65580 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65610_67385 = state_65586__$1;
(statearr_65610_67385[(2)] = inst_65580);

(statearr_65610_67385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (40))){
var inst_65552 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65611_67386 = state_65586__$1;
(statearr_65611_67386[(2)] = inst_65552);

(statearr_65611_67386[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (33))){
var inst_65535 = [new cljs.core.Keyword(null,"txid","txid",1606205478)];
var inst_65536 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_65586__$1 = (function (){var statearr_65612 = state_65586;
(statearr_65612[(17)] = inst_65535);

return statearr_65612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65586__$1,(36),inst_65536);
} else {
if((state_val_65587 === (13))){
var inst_65514 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65613_67389 = state_65586__$1;
(statearr_65613_67389[(2)] = inst_65514);

(statearr_65613_67389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (22))){
var inst_65508 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65614_67391 = state_65586__$1;
(statearr_65614_67391[(2)] = inst_65508);

(statearr_65614_67391[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (36))){
var inst_65535 = (state_65586[(17)]);
var inst_65538 = (state_65586[(2)]);
var inst_65539 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_65538);
var inst_65540 = [inst_65539];
var inst_65541 = cljs.core.PersistentHashMap.fromArrays(inst_65535,inst_65540);
var state_65586__$1 = state_65586;
var statearr_65615_67393 = state_65586__$1;
(statearr_65615_67393[(2)] = inst_65541);

(statearr_65615_67393[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (41))){
var inst_65523 = (state_65586[(9)]);
var inst_65559 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_65560 = [inst_65523];
var inst_65561 = cljs.core.PersistentHashMap.fromArrays(inst_65559,inst_65560);
var state_65586__$1 = state_65586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65586__$1,(44),self__.ops_chan,inst_65561);
} else {
if((state_val_65587 === (43))){
var inst_65578 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65616_67406 = state_65586__$1;
(statearr_65616_67406[(2)] = inst_65578);

(statearr_65616_67406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (29))){
var inst_65530 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65617_67408 = state_65586__$1;
(statearr_65617_67408[(2)] = inst_65530);

(statearr_65617_67408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (44))){
var inst_65563 = (state_65586[(2)]);
var state_65586__$1 = (function (){var statearr_65618 = state_65586;
(statearr_65618[(18)] = inst_65563);

return statearr_65618;
})();
var statearr_65619_67410 = state_65586__$1;
(statearr_65619_67410[(2)] = null);

(statearr_65619_67410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (6))){
var inst_65442 = (state_65586[(19)]);
var inst_65455 = (state_65586[(13)]);
var inst_65462 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65455,inst_65442);
var state_65586__$1 = state_65586;
if(inst_65462){
var statearr_65620_67411 = state_65586__$1;
(statearr_65620_67411[(1)] = (8));

} else {
var statearr_65621_67413 = state_65586__$1;
(statearr_65621_67413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (28))){
var inst_65582 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65622_67415 = state_65586__$1;
(statearr_65622_67415[(2)] = inst_65582);

(statearr_65622_67415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (25))){
var inst_65506 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65623_67416 = state_65586__$1;
(statearr_65623_67416[(2)] = inst_65506);

(statearr_65623_67416[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (34))){
var inst_65521 = (state_65586[(7)]);
var state_65586__$1 = state_65586;
var statearr_65624_67418 = state_65586__$1;
(statearr_65624_67418[(2)] = inst_65521);

(statearr_65624_67418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (17))){
var inst_65453 = (state_65586[(12)]);
var inst_65490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65453,(0),null);
var inst_65491 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local changes:",inst_65490], 0));
var inst_65492 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_65493 = [inst_65490];
var inst_65494 = cljs.core.PersistentHashMap.fromArrays(inst_65492,inst_65493);
var state_65586__$1 = (function (){var statearr_65625 = state_65586;
(statearr_65625[(20)] = inst_65491);

return statearr_65625;
})();
var statearr_65626_67420 = state_65586__$1;
(statearr_65626_67420[(2)] = inst_65494);

(statearr_65626_67420[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (3))){
var inst_65584 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65586__$1,inst_65584);
} else {
if((state_val_65587 === (12))){
var inst_65444 = (state_65586[(21)]);
var inst_65455 = (state_65586[(13)]);
var inst_65474 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65455,inst_65444);
var state_65586__$1 = state_65586;
if(inst_65474){
var statearr_65627_67423 = state_65586__$1;
(statearr_65627_67423[(1)] = (14));

} else {
var statearr_65628_67425 = state_65586__$1;
(statearr_65628_67425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (2))){
var inst_65441 = (state_65586[(11)]);
var inst_65444 = (state_65586[(21)]);
var inst_65442 = (state_65586[(19)]);
var inst_65443 = (state_65586[(22)]);
var inst_65445 = (state_65586[(15)]);
var inst_65448 = (state_65586[(23)]);
var inst_65441__$1 = self__.stop_sync_chan;
var inst_65442__$1 = self__.remote__GT_local_sync_chan;
var inst_65443__$1 = self__.full_sync_chan;
var inst_65444__$1 = self__._remote_change_chan;
var inst_65445__$1 = self__.ratelimit_local_changes_chan;
var inst_65446 = ((20) * (60));
var inst_65447 = (inst_65446 * (1000));
var inst_65448__$1 = cljs.core.async.timeout(inst_65447);
var inst_65449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65450 = [inst_65441__$1,inst_65442__$1,inst_65443__$1,inst_65444__$1,inst_65445__$1,inst_65448__$1];
var inst_65451 = (new cljs.core.PersistentVector(null,6,(5),inst_65449,inst_65450,null));
var state_65586__$1 = (function (){var statearr_65629 = state_65586;
(statearr_65629[(11)] = inst_65441__$1);

(statearr_65629[(21)] = inst_65444__$1);

(statearr_65629[(19)] = inst_65442__$1);

(statearr_65629[(22)] = inst_65443__$1);

(statearr_65629[(15)] = inst_65445__$1);

(statearr_65629[(23)] = inst_65448__$1);

return statearr_65629;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_65586__$1,(4),inst_65451,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_65587 === (23))){
var inst_65454 = (state_65586[(14)]);
var state_65586__$1 = state_65586;
var statearr_65630_67427 = state_65586__$1;
(statearr_65630_67427[(2)] = inst_65454);

(statearr_65630_67427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (47))){
var inst_65576 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65631_67428 = state_65586__$1;
(statearr_65631_67428[(2)] = inst_65576);

(statearr_65631_67428[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (35))){
var inst_65544 = (state_65586[(24)]);
var inst_65544__$1 = (state_65586[(2)]);
var inst_65545 = (inst_65544__$1 == null);
var inst_65546 = cljs.core.not(inst_65545);
var state_65586__$1 = (function (){var statearr_65632 = state_65586;
(statearr_65632[(24)] = inst_65544__$1);

return statearr_65632;
})();
if(inst_65546){
var statearr_65633_67430 = state_65586__$1;
(statearr_65633_67430[(1)] = (37));

} else {
var statearr_65634_67431 = state_65586__$1;
(statearr_65634_67431[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (19))){
var inst_65510 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65635_67432 = state_65586__$1;
(statearr_65635_67432[(2)] = inst_65510);

(statearr_65635_67432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (11))){
var inst_65470 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_65471 = [true];
var inst_65472 = cljs.core.PersistentHashMap.fromArrays(inst_65470,inst_65471);
var state_65586__$1 = state_65586;
var statearr_65636_67434 = state_65586__$1;
(statearr_65636_67434[(2)] = inst_65472);

(statearr_65636_67434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (9))){
var inst_65443 = (state_65586[(22)]);
var inst_65455 = (state_65586[(13)]);
var inst_65468 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65455,inst_65443);
var state_65586__$1 = state_65586;
if(inst_65468){
var statearr_65637_67435 = state_65586__$1;
(statearr_65637_67435[(1)] = (11));

} else {
var statearr_65638_67437 = state_65586__$1;
(statearr_65638_67437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (5))){
var inst_65458 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_65459 = [true];
var inst_65460 = cljs.core.PersistentHashMap.fromArrays(inst_65458,inst_65459);
var state_65586__$1 = state_65586;
var statearr_65640_67439 = state_65586__$1;
(statearr_65640_67439[(2)] = inst_65460);

(statearr_65640_67439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (14))){
var inst_65453 = (state_65586[(12)]);
var inst_65479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65453,(0),null);
var inst_65480 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote change:",inst_65479], 0));
var inst_65481 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_65482 = [inst_65479];
var inst_65483 = cljs.core.PersistentHashMap.fromArrays(inst_65481,inst_65482);
var state_65586__$1 = (function (){var statearr_65641 = state_65586;
(statearr_65641[(25)] = inst_65480);

return statearr_65641;
})();
var statearr_65642_67441 = state_65586__$1;
(statearr_65642_67441[(2)] = inst_65483);

(statearr_65642_67441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (45))){
var inst_65567 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_65568 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_65569 = [true];
var inst_65570 = cljs.core.PersistentHashMap.fromArrays(inst_65568,inst_65569);
var state_65586__$1 = (function (){var statearr_65645 = state_65586;
(statearr_65645[(26)] = inst_65567);

return statearr_65645;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65586__$1,(48),self__.ops_chan,inst_65570);
} else {
if((state_val_65587 === (26))){
var inst_65525 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_65526 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_65527 = [true];
var inst_65528 = cljs.core.PersistentHashMap.fromArrays(inst_65526,inst_65527);
var state_65586__$1 = (function (){var statearr_65646 = state_65586;
(statearr_65646[(27)] = inst_65525);

return statearr_65646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65586__$1,(29),self__.ops_chan,inst_65528);
} else {
if((state_val_65587 === (16))){
var inst_65512 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65647_67444 = state_65586__$1;
(statearr_65647_67444[(2)] = inst_65512);

(statearr_65647_67444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (38))){
var state_65586__$1 = state_65586;
var statearr_65648_67445 = state_65586__$1;
(statearr_65648_67445[(2)] = null);

(statearr_65648_67445[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (30))){
var inst_65521 = (state_65586[(7)]);
var inst_65533 = inst_65521 === true;
var state_65586__$1 = state_65586;
if(cljs.core.truth_(inst_65533)){
var statearr_65650_67446 = state_65586__$1;
(statearr_65650_67446[(1)] = (33));

} else {
var statearr_65651_67447 = state_65586__$1;
(statearr_65651_67447[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (10))){
var inst_65516 = (state_65586[(2)]);
var state_65586__$1 = state_65586;
var statearr_65652_67449 = state_65586__$1;
(statearr_65652_67449[(2)] = inst_65516);

(statearr_65652_67449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (18))){
var inst_65455 = (state_65586[(13)]);
var inst_65448 = (state_65586[(23)]);
var inst_65496 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65455,inst_65448);
var state_65586__$1 = state_65586;
if(inst_65496){
var statearr_65653_67450 = state_65586__$1;
(statearr_65653_67450[(1)] = (20));

} else {
var statearr_65654_67451 = state_65586__$1;
(statearr_65654_67451[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (42))){
var inst_65522 = (state_65586[(8)]);
var state_65586__$1 = state_65586;
if(cljs.core.truth_(inst_65522)){
var statearr_65655_67452 = state_65586__$1;
(statearr_65655_67452[(1)] = (45));

} else {
var statearr_65656_67453 = state_65586__$1;
(statearr_65656_67453[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65587 === (37))){
var inst_65544 = (state_65586[(24)]);
var inst_65548 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_65549 = [inst_65544];
var inst_65550 = cljs.core.PersistentHashMap.fromArrays(inst_65548,inst_65549);
var state_65586__$1 = state_65586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65586__$1,(40),self__.ops_chan,inst_65550);
} else {
if((state_val_65587 === (8))){
var inst_65464 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_65465 = [true];
var inst_65466 = cljs.core.PersistentHashMap.fromArrays(inst_65464,inst_65465);
var state_65586__$1 = state_65586;
var statearr_65657_67455 = state_65586__$1;
(statearr_65657_67455[(2)] = inst_65466);

(statearr_65657_67455[(1)] = (10));


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
var statearr_65658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65658[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65658[(1)] = (1));

return statearr_65658;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65586){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65586);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65659){var ex__41842__auto__ = e65659;
var statearr_65660_67458 = state_65586;
(statearr_65660_67458[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65586[(4)]))){
var statearr_65661_67459 = state_65586;
(statearr_65661_67459[(1)] = cljs.core.first((state_65586[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67460 = state_65586;
state_65586 = G__67460;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65586){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65662 = f__41862__auto__();
(statearr_65662[(6)] = c__41861__auto___67311);

return statearr_65662;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65728){
var state_val_65729 = (state_65728[(1)]);
if((state_val_65729 === (7))){
var inst_65670 = (state_65728[(7)]);
var inst_65680 = [new cljs.core.Keyword(null,"remote","remote",-1593576576)];
var inst_65681 = [inst_65670];
var inst_65682 = cljs.core.PersistentHashMap.fromArrays(inst_65680,inst_65681);
var inst_65683 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),inst_65682);
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65728__$1,(10),inst_65683);
} else {
if((state_val_65729 === (20))){
var state_65728__$1 = state_65728;
var statearr_65733_67475 = state_65728__$1;
(statearr_65733_67475[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (1))){
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65728__$1,(2),self__.ops_chan);
} else {
if((state_val_65729 === (24))){
var state_65728__$1 = state_65728;
var statearr_65735_67476 = state_65728__$1;
(statearr_65735_67476[(2)] = null);

(statearr_65735_67476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (4))){
var inst_65670 = (state_65728[(7)]);
var state_65728__$1 = state_65728;
if(cljs.core.truth_(inst_65670)){
var statearr_65738_67479 = state_65728__$1;
(statearr_65738_67479[(1)] = (7));

} else {
var statearr_65739_67481 = state_65728__$1;
(statearr_65739_67481[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (15))){
var inst_65697 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null);
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65728__$1,(18),inst_65697);
} else {
if((state_val_65729 === (21))){
var inst_65718 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65740_67483 = state_65728__$1;
(statearr_65740_67483[(2)] = inst_65718);

(statearr_65740_67483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (13))){
var inst_65722 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65741_67485 = state_65728__$1;
(statearr_65741_67485[(2)] = inst_65722);

(statearr_65741_67485[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (22))){
var inst_65708 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65742_67486 = state_65728__$1;
(statearr_65742_67486[(2)] = inst_65708);

(statearr_65742_67486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (6))){
var inst_65677 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65743_67487 = state_65728__$1;
(statearr_65743_67487[(2)] = inst_65677);

(statearr_65743_67487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (25))){
var inst_65716 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65744_67488 = state_65728__$1;
(statearr_65744_67488[(2)] = inst_65716);

(statearr_65744_67488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (17))){
var inst_65720 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65745_67489 = state_65728__$1;
(statearr_65745_67489[(2)] = inst_65720);

(statearr_65745_67489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (3))){
var inst_65675 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65728__$1,(6),inst_65675);
} else {
if((state_val_65729 === (12))){
var inst_65672 = (state_65728[(8)]);
var state_65728__$1 = state_65728;
if(cljs.core.truth_(inst_65672)){
var statearr_65747_67491 = state_65728__$1;
(statearr_65747_67491[(1)] = (15));

} else {
var statearr_65748_67492 = state_65728__$1;
(statearr_65748_67492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (2))){
var inst_65667 = (state_65728[(2)]);
var inst_65668 = cljs.core.__destructure_map(inst_65667);
var inst_65669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65668,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_65670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65668,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_65671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65668,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var inst_65672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65668,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_65673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65668,new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000));
var state_65728__$1 = (function (){var statearr_65749 = state_65728;
(statearr_65749[(7)] = inst_65670);

(statearr_65749[(9)] = inst_65673);

(statearr_65749[(8)] = inst_65672);

(statearr_65749[(10)] = inst_65671);

return statearr_65749;
})();
if(cljs.core.truth_(inst_65669)){
var statearr_65750_67494 = state_65728__$1;
(statearr_65750_67494[(1)] = (3));

} else {
var statearr_65751_67495 = state_65728__$1;
(statearr_65751_67495[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (23))){
var inst_65711 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65728__$1,(26),inst_65711);
} else {
if((state_val_65729 === (19))){
var inst_65706 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null);
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65728__$1,(22),inst_65706);
} else {
if((state_val_65729 === (11))){
var inst_65671 = (state_65728[(10)]);
var inst_65689 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_65690 = [inst_65671];
var inst_65691 = cljs.core.PersistentHashMap.fromArrays(inst_65689,inst_65690);
var inst_65692 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),inst_65691);
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65728__$1,(14),inst_65692);
} else {
if((state_val_65729 === (9))){
var inst_65724 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65752_67501 = state_65728__$1;
(statearr_65752_67501[(2)] = inst_65724);

(statearr_65752_67501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (5))){
var inst_65726 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65728__$1,inst_65726);
} else {
if((state_val_65729 === (14))){
var inst_65694 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65755_67502 = state_65728__$1;
(statearr_65755_67502[(2)] = inst_65694);

(statearr_65755_67502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (26))){
var inst_65713 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65756_67506 = state_65728__$1;
(statearr_65756_67506[(2)] = inst_65713);

(statearr_65756_67506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (16))){
var inst_65673 = (state_65728[(9)]);
var state_65728__$1 = state_65728;
if(cljs.core.truth_(inst_65673)){
var statearr_65758_67508 = state_65728__$1;
(statearr_65758_67508[(1)] = (19));

} else {
var statearr_65760_67510 = state_65728__$1;
(statearr_65760_67510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (10))){
var inst_65685 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65761_67511 = state_65728__$1;
(statearr_65761_67511[(2)] = inst_65685);

(statearr_65761_67511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (18))){
var inst_65699 = (state_65728[(2)]);
var state_65728__$1 = state_65728;
var statearr_65766_67514 = state_65728__$1;
(statearr_65766_67514[(2)] = inst_65699);

(statearr_65766_67514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65729 === (8))){
var inst_65671 = (state_65728[(10)]);
var state_65728__$1 = state_65728;
if(cljs.core.truth_(inst_65671)){
var statearr_65767_67516 = state_65728__$1;
(statearr_65767_67516[(1)] = (11));

} else {
var statearr_65768_67517 = state_65728__$1;
(statearr_65768_67517[(1)] = (12));

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
var statearr_65770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65770[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65770[(1)] = (1));

return statearr_65770;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65728){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65728);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65771){var ex__41842__auto__ = e65771;
var statearr_65772_67518 = state_65728;
(statearr_65772_67518[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65728[(4)]))){
var statearr_65773_67520 = state_65728;
(statearr_65773_67520[(1)] = cljs.core.first((state_65728[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67521 = state_65728;
state_65728 = G__67521;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65728){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65774 = f__41862__auto__();
(statearr_65774[(6)] = c__41861__auto__);

return statearr_65774;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65829){
var state_val_65830 = (state_65829[(1)]);
if((state_val_65830 === (7))){
var inst_65780 = (state_65829[(7)]);
var state_65829__$1 = state_65829;
var statearr_65837_67523 = state_65829__$1;
(statearr_65837_67523[(2)] = inst_65780);

(statearr_65837_67523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (20))){
var inst_65783 = (state_65829[(8)]);
var inst_65817 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full-sync",inst_65783], 0));
var inst_65818 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_65829__$1 = (function (){var statearr_65838 = state_65829;
(statearr_65838[(9)] = inst_65817);

return statearr_65838;
})();
var statearr_65839_67528 = state_65829__$1;
(statearr_65839_67528[(2)] = inst_65818);

(statearr_65839_67528[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (1))){
var inst_65777 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(null);
var state_65829__$1 = state_65829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65829__$1,(2),inst_65777);
} else {
if((state_val_65830 === (4))){
var inst_65780 = (state_65829[(7)]);
var state_65829__$1 = state_65829;
var statearr_65841_67530 = state_65829__$1;
(statearr_65841_67530[(2)] = inst_65780);

(statearr_65841_67530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (15))){
var inst_65805 = (state_65829[(2)]);
var inst_65806 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_65807 = [true];
var inst_65808 = cljs.core.PersistentHashMap.fromArrays(inst_65806,inst_65807);
var state_65829__$1 = (function (){var statearr_65842 = state_65829;
(statearr_65842[(10)] = inst_65805);

return statearr_65842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65829__$1,(16),self__.ops_chan,inst_65808);
} else {
if((state_val_65830 === (21))){
var state_65829__$1 = state_65829;
var statearr_65843_67531 = state_65829__$1;
(statearr_65843_67531[(2)] = null);

(statearr_65843_67531[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (13))){
var inst_65784 = (state_65829[(11)]);
var state_65829__$1 = state_65829;
if(cljs.core.truth_(inst_65784)){
var statearr_65845_67532 = state_65829__$1;
(statearr_65845_67532[(1)] = (17));

} else {
var statearr_65846_67533 = state_65829__$1;
(statearr_65846_67533[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (22))){
var inst_65821 = (state_65829[(2)]);
var state_65829__$1 = state_65829;
var statearr_65847_67534 = state_65829__$1;
(statearr_65847_67534[(2)] = inst_65821);

(statearr_65847_67534[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (6))){
var inst_65780 = (state_65829[(7)]);
var inst_65789 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),inst_65780);
var state_65829__$1 = state_65829;
var statearr_65848_67537 = state_65829__$1;
(statearr_65848_67537[(2)] = inst_65789);

(statearr_65848_67537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (17))){
var inst_65814 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_65829__$1 = state_65829;
var statearr_65849_67538 = state_65829__$1;
(statearr_65849_67538[(2)] = inst_65814);

(statearr_65849_67538[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (3))){
var inst_65786 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_65787 = cljs.core.deref(inst_65786);
var state_65829__$1 = state_65829;
if(cljs.core.truth_(inst_65787)){
var statearr_65850_67540 = state_65829__$1;
(statearr_65850_67540[(1)] = (6));

} else {
var statearr_65851_67541 = state_65829__$1;
(statearr_65851_67541[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (12))){
var inst_65800 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_65801 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_65802 = [true];
var inst_65803 = cljs.core.PersistentHashMap.fromArrays(inst_65801,inst_65802);
var state_65829__$1 = (function (){var statearr_65854 = state_65829;
(statearr_65854[(12)] = inst_65800);

return statearr_65854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65829__$1,(15),self__.ops_chan,inst_65803);
} else {
if((state_val_65830 === (2))){
var inst_65780 = (state_65829[(7)]);
var inst_65779 = (state_65829[(2)]);
var inst_65780__$1 = cljs.core.__destructure_map(inst_65779);
var inst_65781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65780__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_65782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65780__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_65783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65780__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_65784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65780__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_65829__$1 = (function (){var statearr_65855 = state_65829;
(statearr_65855[(11)] = inst_65784);

(statearr_65855[(7)] = inst_65780__$1);

(statearr_65855[(13)] = inst_65782);

(statearr_65855[(8)] = inst_65783);

(statearr_65855[(14)] = inst_65781);

return statearr_65855;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_65856_67542 = state_65829__$1;
(statearr_65856_67542[(1)] = (3));

} else {
var statearr_65857_67543 = state_65829__$1;
(statearr_65857_67543[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (19))){
var inst_65823 = (state_65829[(2)]);
var state_65829__$1 = state_65829;
var statearr_65860_67544 = state_65829__$1;
(statearr_65860_67544[(2)] = inst_65823);

(statearr_65860_67544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (11))){
var inst_65827 = (state_65829[(2)]);
var state_65829__$1 = state_65829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65829__$1,inst_65827);
} else {
if((state_val_65830 === (9))){
var inst_65797 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_65829__$1 = state_65829;
var statearr_65861_67545 = state_65829__$1;
(statearr_65861_67545[(2)] = inst_65797);

(statearr_65861_67545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (5))){
var inst_65781 = (state_65829[(14)]);
var inst_65795 = (state_65829[(2)]);
var state_65829__$1 = (function (){var statearr_65862 = state_65829;
(statearr_65862[(15)] = inst_65795);

return statearr_65862;
})();
if(cljs.core.truth_(inst_65781)){
var statearr_65863_67546 = state_65829__$1;
(statearr_65863_67546[(1)] = (9));

} else {
var statearr_65864_67547 = state_65829__$1;
(statearr_65864_67547[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (14))){
var inst_65825 = (state_65829[(2)]);
var state_65829__$1 = state_65829;
var statearr_65865_67548 = state_65829__$1;
(statearr_65865_67548[(2)] = inst_65825);

(statearr_65865_67548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (16))){
var inst_65810 = (state_65829[(2)]);
var inst_65811 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_65829__$1 = (function (){var statearr_65866 = state_65829;
(statearr_65866[(16)] = inst_65810);

return statearr_65866;
})();
var statearr_65867_67552 = state_65829__$1;
(statearr_65867_67552[(2)] = inst_65811);

(statearr_65867_67552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (10))){
var inst_65782 = (state_65829[(13)]);
var state_65829__$1 = state_65829;
if(cljs.core.truth_(inst_65782)){
var statearr_65868_67553 = state_65829__$1;
(statearr_65868_67553[(1)] = (12));

} else {
var statearr_65869_67554 = state_65829__$1;
(statearr_65869_67554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (18))){
var inst_65783 = (state_65829[(8)]);
var state_65829__$1 = state_65829;
if(cljs.core.truth_(inst_65783)){
var statearr_65870_67555 = state_65829__$1;
(statearr_65870_67555[(1)] = (20));

} else {
var statearr_65871_67557 = state_65829__$1;
(statearr_65871_67557[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65830 === (8))){
var inst_65792 = (state_65829[(2)]);
var state_65829__$1 = state_65829;
var statearr_65872_67558 = state_65829__$1;
(statearr_65872_67558[(2)] = inst_65792);

(statearr_65872_67558[(1)] = (5));


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
var statearr_65873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65873[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65873[(1)] = (1));

return statearr_65873;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65829){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65829);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65874){var ex__41842__auto__ = e65874;
var statearr_65875_67560 = state_65829;
(statearr_65875_67560[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65829[(4)]))){
var statearr_65876_67561 = state_65829;
(statearr_65876_67561[(1)] = cljs.core.first((state_65829[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67562 = state_65829;
state_65829 = G__67562;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65829){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65881 = f__41862__auto__();
(statearr_65881[(6)] = c__41861__auto__);

return statearr_65881;
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_65908){
var state_val_65909 = (state_65908[(1)]);
if((state_val_65909 === (7))){
var inst_65888 = (state_65908[(7)]);
var state_65908__$1 = state_65908;
if(cljs.core.truth_(inst_65888)){
var statearr_65910_67569 = state_65908__$1;
(statearr_65910_67569[(1)] = (9));

} else {
var statearr_65912_67570 = state_65908__$1;
(statearr_65912_67570[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (1))){
var inst_65883 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(null);
var state_65908__$1 = state_65908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65908__$1,(2),inst_65883);
} else {
if((state_val_65909 === (4))){
var inst_65889 = (state_65908[(8)]);
var state_65908__$1 = state_65908;
if(cljs.core.truth_(inst_65889)){
var statearr_65913_67573 = state_65908__$1;
(statearr_65913_67573[(1)] = (6));

} else {
var statearr_65914_67575 = state_65908__$1;
(statearr_65914_67575[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (6))){
var inst_65894 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_65908__$1 = state_65908;
var statearr_65915_67577 = state_65908__$1;
(statearr_65915_67577[(2)] = inst_65894);

(statearr_65915_67577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (3))){
var inst_65891 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_65908__$1 = state_65908;
var statearr_65916_67578 = state_65908__$1;
(statearr_65916_67578[(2)] = inst_65891);

(statearr_65916_67578[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (2))){
var inst_65885 = (state_65908[(2)]);
var inst_65886 = cljs.core.__destructure_map(inst_65885);
var inst_65887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65886,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_65888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65886,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_65889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65886,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_65908__$1 = (function (){var statearr_65917 = state_65908;
(statearr_65917[(8)] = inst_65889);

(statearr_65917[(7)] = inst_65888);

return statearr_65917;
})();
if(cljs.core.truth_(inst_65887)){
var statearr_65918_67580 = state_65908__$1;
(statearr_65918_67580[(1)] = (3));

} else {
var statearr_65919_67585 = state_65908__$1;
(statearr_65919_67585[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (11))){
var inst_65902 = (state_65908[(2)]);
var state_65908__$1 = state_65908;
var statearr_65920_67586 = state_65908__$1;
(statearr_65920_67586[(2)] = inst_65902);

(statearr_65920_67586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (9))){
var inst_65888 = (state_65908[(7)]);
var inst_65898 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local-full-sync",inst_65888], 0));
var inst_65899 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_65908__$1 = (function (){var statearr_65921 = state_65908;
(statearr_65921[(9)] = inst_65898);

return statearr_65921;
})();
var statearr_65922_67588 = state_65908__$1;
(statearr_65922_67588[(2)] = inst_65899);

(statearr_65922_67588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (5))){
var inst_65906 = (state_65908[(2)]);
var state_65908__$1 = state_65908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65908__$1,inst_65906);
} else {
if((state_val_65909 === (10))){
var state_65908__$1 = state_65908;
var statearr_65923_67590 = state_65908__$1;
(statearr_65923_67590[(2)] = null);

(statearr_65923_67590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65909 === (8))){
var inst_65904 = (state_65908[(2)]);
var state_65908__$1 = state_65908;
var statearr_65924_67593 = state_65908__$1;
(statearr_65924_67593[(2)] = inst_65904);

(statearr_65924_67593[(1)] = (5));


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
var statearr_65925 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65925[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_65925[(1)] = (1));

return statearr_65925;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_65908){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_65908);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e65926){var ex__41842__auto__ = e65926;
var statearr_65927_67598 = state_65908;
(statearr_65927_67598[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_65908[(4)]))){
var statearr_65928_67599 = state_65908;
(statearr_65928_67599[(1)] = cljs.core.first((state_65908[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67600 = state_65908;
state_65908 = G__67600;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_65908){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_65908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_65931 = f__41862__auto__();
(statearr_65931[(6)] = c__41861__auto__);

return statearr_65931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local = (function (_next_state,p__65932){
var self__ = this;
var map__65933 = p__65932;
var map__65933__$1 = cljs.core.__destructure_map(map__65933);
var remote_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65933__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var this$ = this;
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66007){
var state_val_66008 = (state_66007[(1)]);
if((state_val_66008 === (7))){
var inst_65948 = (state_66007[(2)]);
var state_66007__$1 = state_66007;
if(cljs.core.truth_(inst_65948)){
var statearr_66011_67605 = state_66007__$1;
(statearr_66011_67605[(1)] = (8));

} else {
var statearr_66012_67606 = state_66007__$1;
(statearr_66012_67606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (20))){
var inst_66003 = (state_66007[(2)]);
var state_66007__$1 = state_66007;
var statearr_66013_67607 = state_66007__$1;
(statearr_66013_67607[(2)] = inst_66003);

(statearr_66013_67607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (27))){
var inst_65958 = (state_66007[(7)]);
var state_66007__$1 = state_66007;
if(cljs.core.truth_(inst_65958)){
var statearr_66016_67608 = state_66007__$1;
(statearr_66016_67608[(1)] = (29));

} else {
var statearr_66017_67609 = state_66007__$1;
(statearr_66017_67609[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (1))){
var inst_65935 = (state_66007[(8)]);
var inst_65935__$1 = remote_val;
var inst_65936 = (inst_65935__$1 == null);
var state_66007__$1 = (function (){var statearr_66018 = state_66007;
(statearr_66018[(8)] = inst_65935__$1);

return statearr_66018;
})();
if(cljs.core.truth_(inst_65936)){
var statearr_66019_67611 = state_66007__$1;
(statearr_66019_67611[(1)] = (2));

} else {
var statearr_66020_67612 = state_66007__$1;
(statearr_66020_67612[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (24))){
var inst_65959 = (state_66007[(9)]);
var state_66007__$1 = state_66007;
if(cljs.core.truth_(inst_65959)){
var statearr_66023_67614 = state_66007__$1;
(statearr_66023_67614[(1)] = (26));

} else {
var statearr_66024_67615 = state_66007__$1;
(statearr_66024_67615[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (4))){
var inst_65941 = (state_66007[(10)]);
var inst_65941__$1 = (state_66007[(2)]);
var inst_65942 = (inst_65941__$1 == null);
var state_66007__$1 = (function (){var statearr_66027 = state_66007;
(statearr_66027[(10)] = inst_65941__$1);

return statearr_66027;
})();
if(cljs.core.truth_(inst_65942)){
var statearr_66028_67618 = state_66007__$1;
(statearr_66028_67618[(1)] = (5));

} else {
var statearr_66029_67619 = state_66007__$1;
(statearr_66029_67619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (15))){
var inst_65956 = (state_66007[(11)]);
var inst_65965 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),inst_65956);
var state_66007__$1 = state_66007;
var statearr_66030_67620 = state_66007__$1;
(statearr_66030_67620[(2)] = inst_65965);

(statearr_66030_67620[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (21))){
var inst_65978 = (state_66007[(2)]);
var inst_65979 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_65980 = [true];
var inst_65981 = cljs.core.PersistentHashMap.fromArrays(inst_65979,inst_65980);
var state_66007__$1 = (function (){var statearr_66031 = state_66007;
(statearr_66031[(12)] = inst_65978);

return statearr_66031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66007__$1,(22),self__.ops_chan,inst_65981);
} else {
if((state_val_66008 === (31))){
var inst_65997 = (state_66007[(2)]);
var state_66007__$1 = state_66007;
var statearr_66032_67621 = state_66007__$1;
(statearr_66032_67621[(2)] = inst_65997);

(statearr_66032_67621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (13))){
var inst_65956 = (state_66007[(11)]);
var state_66007__$1 = state_66007;
var statearr_66033_67622 = state_66007__$1;
(statearr_66033_67622[(2)] = inst_65956);

(statearr_66033_67622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (22))){
var inst_65983 = (state_66007[(2)]);
var inst_65984 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_66007__$1 = (function (){var statearr_66034 = state_66007;
(statearr_66034[(13)] = inst_65983);

return statearr_66034;
})();
var statearr_66035_67623 = state_66007__$1;
(statearr_66035_67623[(2)] = inst_65984);

(statearr_66035_67623[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (29))){
var inst_65958 = (state_66007[(7)]);
var inst_65993 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local err",inst_65958], 0));
var inst_65994 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_66007__$1 = (function (){var statearr_66036 = state_66007;
(statearr_66036[(14)] = inst_65993);

return statearr_66036;
})();
var statearr_66037_67624 = state_66007__$1;
(statearr_66037_67624[(2)] = inst_65994);

(statearr_66037_67624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (6))){
var inst_65941 = (state_66007[(10)]);
var inst_65945 = cljs.core.deref(self__._STAR_txid);
var inst_65946 = (inst_65941 <= inst_65945);
var state_66007__$1 = state_66007;
var statearr_66038_67625 = state_66007__$1;
(statearr_66038_67625[(2)] = inst_65946);

(statearr_66038_67625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (28))){
var inst_65999 = (state_66007[(2)]);
var state_66007__$1 = state_66007;
var statearr_66040_67626 = state_66007__$1;
(statearr_66040_67626[(2)] = inst_65999);

(statearr_66040_67626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (25))){
var inst_66001 = (state_66007[(2)]);
var state_66007__$1 = state_66007;
var statearr_66042_67627 = state_66007__$1;
(statearr_66042_67627[(2)] = inst_66001);

(statearr_66042_67627[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (17))){
var inst_65968 = (state_66007[(2)]);
var state_66007__$1 = state_66007;
var statearr_66043_67628 = state_66007__$1;
(statearr_66043_67628[(2)] = inst_65968);

(statearr_66043_67628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (3))){
var inst_65935 = (state_66007[(8)]);
var inst_65939 = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(inst_65935);
var state_66007__$1 = state_66007;
var statearr_66044_67629 = state_66007__$1;
(statearr_66044_67629[(2)] = inst_65939);

(statearr_66044_67629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (12))){
var inst_65962 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_65963 = cljs.core.deref(inst_65962);
var state_66007__$1 = state_66007;
if(cljs.core.truth_(inst_65963)){
var statearr_66045_67630 = state_66007__$1;
(statearr_66045_67630[(1)] = (15));

} else {
var statearr_66046_67631 = state_66007__$1;
(statearr_66046_67631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (2))){
var state_66007__$1 = state_66007;
var statearr_66048_67632 = state_66007__$1;
(statearr_66048_67632[(2)] = null);

(statearr_66048_67632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (23))){
var inst_65987 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_66007__$1 = state_66007;
var statearr_66049_67633 = state_66007__$1;
(statearr_66049_67633[(2)] = inst_65987);

(statearr_66049_67633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (19))){
var inst_65957 = (state_66007[(15)]);
var state_66007__$1 = state_66007;
if(cljs.core.truth_(inst_65957)){
var statearr_66050_67634 = state_66007__$1;
(statearr_66050_67634[(1)] = (23));

} else {
var statearr_66051_67635 = state_66007__$1;
(statearr_66051_67635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (11))){
var inst_65956 = (state_66007[(11)]);
var inst_65955 = (state_66007[(2)]);
var inst_65956__$1 = cljs.core.__destructure_map(inst_65955);
var inst_65957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65956__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_65958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65956__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_65959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65956__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_65960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65956__$1,new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586));
var state_66007__$1 = (function (){var statearr_66052 = state_66007;
(statearr_66052[(15)] = inst_65957);

(statearr_66052[(7)] = inst_65958);

(statearr_66052[(11)] = inst_65956__$1);

(statearr_66052[(9)] = inst_65959);

(statearr_66052[(16)] = inst_65960);

return statearr_66052;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_66054_67636 = state_66007__$1;
(statearr_66054_67636[(1)] = (12));

} else {
var statearr_66055_67637 = state_66007__$1;
(statearr_66055_67637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (9))){
var inst_65953 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(null);
var state_66007__$1 = state_66007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66007__$1,(11),inst_65953);
} else {
if((state_val_66008 === (5))){
var state_66007__$1 = state_66007;
var statearr_66056_67638 = state_66007__$1;
(statearr_66056_67638[(2)] = null);

(statearr_66056_67638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (14))){
var inst_65960 = (state_66007[(16)]);
var inst_65971 = (state_66007[(2)]);
var state_66007__$1 = (function (){var statearr_66057 = state_66007;
(statearr_66057[(17)] = inst_65971);

return statearr_66057;
})();
if(cljs.core.truth_(inst_65960)){
var statearr_66058_67639 = state_66007__$1;
(statearr_66058_67639[(1)] = (18));

} else {
var statearr_66059_67640 = state_66007__$1;
(statearr_66059_67640[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (26))){
var inst_65990 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_66007__$1 = state_66007;
var statearr_66060_67641 = state_66007__$1;
(statearr_66060_67641[(2)] = inst_65990);

(statearr_66060_67641[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (16))){
var inst_65956 = (state_66007[(11)]);
var state_66007__$1 = state_66007;
var statearr_66061_67642 = state_66007__$1;
(statearr_66061_67642[(2)] = inst_65956);

(statearr_66061_67642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (30))){
var state_66007__$1 = state_66007;
var statearr_66062_67643 = state_66007__$1;
(statearr_66062_67643[(2)] = null);

(statearr_66062_67643[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66008 === (10))){
var inst_66005 = (state_66007[(2)]);
var state_66007__$1 = state_66007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66007__$1,inst_66005);
} else {
if((state_val_66008 === (18))){
var inst_65973 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_65974 = [new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000)];
var inst_65975 = [true];
var inst_65976 = cljs.core.PersistentHashMap.fromArrays(inst_65974,inst_65975);
var state_66007__$1 = (function (){var statearr_66063 = state_66007;
(statearr_66063[(18)] = inst_65973);

return statearr_66063;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66007__$1,(21),self__.ops_chan,inst_65976);
} else {
if((state_val_66008 === (8))){
var inst_65950 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_66007__$1 = state_66007;
var statearr_66064_67644 = state_66007__$1;
(statearr_66064_67644[(2)] = inst_65950);

(statearr_66064_67644[(1)] = (10));


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
var statearr_66065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66065[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_66065[(1)] = (1));

return statearr_66065;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_66007){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66007);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66066){var ex__41842__auto__ = e66066;
var statearr_66067_67645 = state_66007;
(statearr_66067_67645[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66007[(4)]))){
var statearr_66068_67646 = state_66007;
(statearr_66068_67646[(1)] = cljs.core.first((state_66007[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67647 = state_66007;
state_66007 = G__67647;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_66007){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_66007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66069 = f__41862__auto__();
(statearr_66069[(6)] = c__41861__auto__);

return statearr_66069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.local__GT_remote = (function (p__66070){
var self__ = this;
var map__66071 = p__66070;
var map__66071__$1 = cljs.core.__destructure_map(map__66071);
var local_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66071__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var this$ = this;
if((!((local_change == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_change),"\n","(some? local-change)"].join('')));
}

var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66127){
var state_val_66128 = (state_66127[(1)]);
if((state_val_66128 === (7))){
var inst_66079 = (state_66127[(7)]);
var state_66127__$1 = state_66127;
var statearr_66129_67648 = state_66127__$1;
(statearr_66129_67648[(2)] = inst_66079);

(statearr_66129_67648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (1))){
var inst_66073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66074 = [local_change];
var inst_66075 = (new cljs.core.PersistentVector(null,1,(5),inst_66073,inst_66074,null));
var inst_66076 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_66075);
var state_66127__$1 = state_66127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66127__$1,(2),inst_66076);
} else {
if((state_val_66128 === (4))){
var inst_66079 = (state_66127[(7)]);
var state_66127__$1 = state_66127;
var statearr_66130_67649 = state_66127__$1;
(statearr_66130_67649[(2)] = inst_66079);

(statearr_66130_67649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (15))){
var inst_66103 = (state_66127[(2)]);
var inst_66106 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_66107 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_66108 = [local_change];
var inst_66109 = cljs.core.PersistentHashMap.fromArrays(inst_66107,inst_66108);
var inst_66110 = [inst_66109];
var inst_66111 = cljs.core.PersistentHashMap.fromArrays(inst_66106,inst_66110);
var state_66127__$1 = (function (){var statearr_66132 = state_66127;
(statearr_66132[(8)] = inst_66103);

return statearr_66132;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66127__$1,(16),self__.ops_chan,inst_66111);
} else {
if((state_val_66128 === (13))){
var inst_66082 = (state_66127[(9)]);
var state_66127__$1 = state_66127;
if(cljs.core.truth_(inst_66082)){
var statearr_66135_67650 = state_66127__$1;
(statearr_66135_67650[(1)] = (17));

} else {
var statearr_66136_67651 = state_66127__$1;
(statearr_66136_67651[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (6))){
var inst_66079 = (state_66127[(7)]);
var inst_66087 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_66079);
var state_66127__$1 = state_66127;
var statearr_66137_67652 = state_66127__$1;
(statearr_66137_67652[(2)] = inst_66087);

(statearr_66137_67652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (17))){
var inst_66082 = (state_66127[(9)]);
var inst_66117 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local->remote",inst_66082], 0));
var inst_66118 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_66127__$1 = (function (){var statearr_66138 = state_66127;
(statearr_66138[(10)] = inst_66117);

return statearr_66138;
})();
var statearr_66139_67653 = state_66127__$1;
(statearr_66139_67653[(2)] = inst_66118);

(statearr_66139_67653[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (3))){
var inst_66084 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_66085 = cljs.core.deref(inst_66084);
var state_66127__$1 = state_66127;
if(cljs.core.truth_(inst_66085)){
var statearr_66140_67654 = state_66127__$1;
(statearr_66140_67654[(1)] = (6));

} else {
var statearr_66141_67655 = state_66127__$1;
(statearr_66141_67655[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (12))){
var inst_66098 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_66099 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_66100 = [true];
var inst_66101 = cljs.core.PersistentHashMap.fromArrays(inst_66099,inst_66100);
var state_66127__$1 = (function (){var statearr_66142 = state_66127;
(statearr_66142[(11)] = inst_66098);

return statearr_66142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66127__$1,(15),self__.ops_chan,inst_66101);
} else {
if((state_val_66128 === (2))){
var inst_66079 = (state_66127[(7)]);
var inst_66078 = (state_66127[(2)]);
var inst_66079__$1 = cljs.core.__destructure_map(inst_66078);
var inst_66080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66079__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_66081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66079__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_66082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66079__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_66127__$1 = (function (){var statearr_66143 = state_66127;
(statearr_66143[(12)] = inst_66081);

(statearr_66143[(7)] = inst_66079__$1);

(statearr_66143[(9)] = inst_66082);

(statearr_66143[(13)] = inst_66080);

return statearr_66143;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_66144_67656 = state_66127__$1;
(statearr_66144_67656[(1)] = (3));

} else {
var statearr_66145_67657 = state_66127__$1;
(statearr_66145_67657[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (19))){
var inst_66121 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66146_67658 = state_66127__$1;
(statearr_66146_67658[(2)] = inst_66121);

(statearr_66146_67658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (11))){
var inst_66125 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66127__$1,inst_66125);
} else {
if((state_val_66128 === (9))){
var inst_66095 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_66127__$1 = state_66127;
var statearr_66147_67659 = state_66127__$1;
(statearr_66147_67659[(2)] = inst_66095);

(statearr_66147_67659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (5))){
var inst_66080 = (state_66127[(13)]);
var inst_66093 = (state_66127[(2)]);
var state_66127__$1 = (function (){var statearr_66148 = state_66127;
(statearr_66148[(14)] = inst_66093);

return statearr_66148;
})();
if(cljs.core.truth_(inst_66080)){
var statearr_66149_67660 = state_66127__$1;
(statearr_66149_67660[(1)] = (9));

} else {
var statearr_66150_67661 = state_66127__$1;
(statearr_66150_67661[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (14))){
var inst_66123 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66153_67662 = state_66127__$1;
(statearr_66153_67662[(2)] = inst_66123);

(statearr_66153_67662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (16))){
var inst_66113 = (state_66127[(2)]);
var inst_66114 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_66127__$1 = (function (){var statearr_66154 = state_66127;
(statearr_66154[(15)] = inst_66113);

return statearr_66154;
})();
var statearr_66155_67663 = state_66127__$1;
(statearr_66155_67663[(2)] = inst_66114);

(statearr_66155_67663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (10))){
var inst_66081 = (state_66127[(12)]);
var state_66127__$1 = state_66127;
if(cljs.core.truth_(inst_66081)){
var statearr_66156_67664 = state_66127__$1;
(statearr_66156_67664[(1)] = (12));

} else {
var statearr_66157_67665 = state_66127__$1;
(statearr_66157_67665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (18))){
var state_66127__$1 = state_66127;
var statearr_66158_67666 = state_66127__$1;
(statearr_66158_67666[(2)] = null);

(statearr_66158_67666[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66128 === (8))){
var inst_66090 = (state_66127[(2)]);
var state_66127__$1 = state_66127;
var statearr_66159_67667 = state_66127__$1;
(statearr_66159_67667[(2)] = inst_66090);

(statearr_66159_67667[(1)] = (5));


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
var statearr_66160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66160[(0)] = frontend$fs$sync$state_machine__41839__auto__);

(statearr_66160[(1)] = (1));

return statearr_66160;
});
var frontend$fs$sync$state_machine__41839__auto____1 = (function (state_66127){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66127);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66161){var ex__41842__auto__ = e66161;
var statearr_66162_67668 = state_66127;
(statearr_66162_67668[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66127[(4)]))){
var statearr_66163_67669 = state_66127;
(statearr_66163_67669[(1)] = cljs.core.first((state_66127[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67670 = state_66127;
state_66127 = G__67670;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__41839__auto__ = function(state_66127){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__41839__auto____1.call(this,state_66127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__41839__auto____0;
frontend$fs$sync$state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__41839__auto____1;
return frontend$fs$sync$state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66168 = f__41862__auto__();
(statearr_66168[(6)] = c__41861__auto__);

return statearr_66168;
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k65379,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__66169 = k65379;
var G__66169__$1 = (((G__66169 instanceof cljs.core.Keyword))?G__66169.fqn:null);
switch (G__66169__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65379,else__4505__auto__);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__66173){
var vec__66174 = p__66173;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66174,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66174,(1),null);
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65378){
var self__ = this;
var G__65378__$1 = this;
return (new cljs.core.RecordIter((0),G__65378__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65380,other65381){
var self__ = this;
var this65380__$1 = this;
return (((!((other65381 == null)))) && ((((this65380__$1.constructor === other65381.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.graph_uuid,other65381.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.base_path,other65381.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1._STAR_sync_state,other65381._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.local__GT_remote_syncer,other65381.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.remote__GT_local_syncer,other65381.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.full_sync_chan,other65381.full_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.stop_sync_chan,other65381.stop_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.remote__GT_local_sync_chan,other65381.remote__GT_local_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.local__GT_remote_sync_chan,other65381.local__GT_remote_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.local_changes_chan,other65381.local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.ratelimit_local_changes_chan,other65381.ratelimit_local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1._STAR_txid,other65381._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.state,other65381.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1._remote_change_chan,other65381._remote_change_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.__STAR_ws,other65381.__STAR_ws)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.stopped,other65381.stopped)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.ops_chan,other65381.ops_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65380__$1.__extmap,other65381.__extmap)))))))))))))))))))))))))))))))))))))));
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k65379){
var self__ = this;
var this__4509__auto____$1 = this;
var G__66185 = k65379;
var G__66185__$1 = (((G__66185 instanceof cljs.core.Keyword))?G__66185.fqn:null);
switch (G__66185__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k65379);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__65378){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__66186 = cljs.core.keyword_identical_QMARK_;
var expr__66187 = k__4511__auto__;
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__66187)))){
return (new frontend.fs.sync.SyncManager(G__65378,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,G__65378,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,G__65378,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,G__65378,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__65378,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,G__65378,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,G__65378,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,G__65378,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,G__65378,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,G__65378,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,G__65378,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,G__65378,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,G__65378,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,G__65378,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,G__65378,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,G__65378,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66186.cljs$core$IFn$_invoke$arity$2 ? pred__66186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__66187) : pred__66186.call(null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__66187)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,G__65378,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__65378),null));
}
}
}
}
}
}
}
}
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__65378){
var self__ = this;
var this__4501__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,G__65378,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_SyncManager = (function frontend$fs$sync$map__GT_SyncManager(G__65382){
var extmap__4542__auto__ = (function (){var G__66214 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65382,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], 0));
if(cljs.core.record_QMARK_(G__65382)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66214);
} else {
return G__66214;
}
})();
return (new frontend.fs.sync.SyncManager(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__65382),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587).cljs$core$IFn$_invoke$arity$1(G__65382),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66253){
var state_val_66254 = (state_66253[(1)]);
if((state_val_66254 === (1))){
var inst_66238 = (function (){return (function (p1__66233_SHARP_){
return cljs.core.contains_QMARK_(p1__66233_SHARP_,local_graph_uuid);
});
})();
var inst_66239 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_66253__$1 = (function (){var statearr_66258 = state_66253;
(statearr_66258[(7)] = inst_66238);

return statearr_66258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66253__$1,(2),inst_66239);
} else {
if((state_val_66254 === (2))){
var inst_66238 = (state_66253[(7)]);
var inst_66245 = (state_66253[(8)]);
var inst_66241 = (state_66253[(2)]);
var inst_66242 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_66241);
var inst_66243 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),inst_66242);
var inst_66244 = cljs.core.set(inst_66243);
var inst_66245__$1 = (inst_66238.cljs$core$IFn$_invoke$arity$1 ? inst_66238.cljs$core$IFn$_invoke$arity$1(inst_66244) : inst_66238.call(null,inst_66244));
var state_66253__$1 = (function (){var statearr_66261 = state_66253;
(statearr_66261[(8)] = inst_66245__$1);

return statearr_66261;
})();
if(cljs.core.truth_(inst_66245__$1)){
var statearr_66264_67673 = state_66253__$1;
(statearr_66264_67673[(1)] = (3));

} else {
var statearr_66265_67674 = state_66253__$1;
(statearr_66265_67674[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66254 === (3))){
var state_66253__$1 = state_66253;
var statearr_66267_67675 = state_66253__$1;
(statearr_66267_67675[(2)] = null);

(statearr_66267_67675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66254 === (4))){
var inst_66248 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","graph-deleted","file-sync/graph-deleted",110500245)], 0));
var inst_66249 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_66248,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
var state_66253__$1 = state_66253;
var statearr_66271_67676 = state_66253__$1;
(statearr_66271_67676[(2)] = inst_66249);

(statearr_66271_67676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66254 === (5))){
var inst_66245 = (state_66253[(8)]);
var inst_66251 = (state_66253[(2)]);
var state_66253__$1 = (function (){var statearr_66274 = state_66253;
(statearr_66274[(9)] = inst_66251);

return statearr_66274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66253__$1,inst_66245);
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
var statearr_66275 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66275[(0)] = frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__);

(statearr_66275[(1)] = (1));

return statearr_66275;
});
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____1 = (function (state_66253){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66253);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66276){var ex__41842__auto__ = e66276;
var statearr_66277_67677 = state_66253;
(statearr_66277_67677[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66253[(4)]))){
var statearr_66280_67678 = state_66253;
(statearr_66280_67678[(1)] = cljs.core.first((state_66253[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67679 = state_66253;
state_66253 = G__67679;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__ = function(state_66253){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____1.call(this,state_66253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____0;
frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto____1;
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66283 = f__41862__auto__();
(statearr_66283[(6)] = c__41861__auto__);

return statearr_66283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});
frontend.fs.sync.sync_start = (function frontend$fs$sync$sync_start(){
var vec__66286 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66286,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66286,(1),null);
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66286,(2),null);
var _STAR_sync_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.sync_state());
var current_user_uuid = frontend.handler.user.user_uuid();
var repo = frontend.state.get_current_repo();
var sm = frontend.fs.sync.sync_manager(current_user_uuid,graph_uuid,frontend.config.get_repo_dir(repo),repo,txid,_STAR_sync_state,frontend.fs.sync.full_sync_chan,frontend.fs.sync.stop_sync_chan,frontend.fs.sync.remote__GT_local_sync_chan,frontend.fs.sync.local__GT_remote_sync_chan,frontend.fs.sync.local_changes_chan);
var c__41861__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41862__auto__ = (function (){var switch__41838__auto__ = (function (state_66334){
var state_val_66335 = (state_66334[(1)]);
if((state_val_66335 === (7))){
var inst_66330 = (state_66334[(2)]);
var state_66334__$1 = state_66334;
var statearr_66336_67680 = state_66334__$1;
(statearr_66336_67680[(2)] = inst_66330);

(statearr_66336_67680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (1))){
var inst_66289 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_66290 = cljs.core.count(inst_66289);
var inst_66291 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((3),inst_66290);
var state_66334__$1 = state_66334;
if(inst_66291){
var statearr_66337_67681 = state_66334__$1;
(statearr_66337_67681[(1)] = (2));

} else {
var statearr_66339_67682 = state_66334__$1;
(statearr_66339_67682[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (4))){
var inst_66332 = (state_66334[(2)]);
var state_66334__$1 = state_66334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66334__$1,inst_66332);
} else {
if((state_val_66335 === (6))){
var state_66334__$1 = state_66334;
var statearr_66341_67683 = state_66334__$1;
(statearr_66341_67683[(2)] = null);

(statearr_66341_67683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (3))){
var inst_66296 = frontend.fs.sync.check_graph_belong_to_current_user(current_user_uuid,user_uuid);
var state_66334__$1 = state_66334;
if(inst_66296){
var statearr_66342_67684 = state_66334__$1;
(statearr_66342_67684[(1)] = (5));

} else {
var statearr_66343_67685 = state_66334__$1;
(statearr_66343_67685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (12))){
var inst_66311 = (state_66334[(2)]);
var inst_66312 = frontend.fs.sync.drain_chan(frontend.fs.sync.local_changes_chan);
var inst_66313 = cljs.core.async.poll_BANG_(frontend.fs.sync.stop_sync_chan);
var inst_66314 = cljs.core.async.poll_BANG_(frontend.fs.sync.remote__GT_local_sync_chan);
var inst_66315 = (function (){return (function (_,___$1,___$2,n){
return frontend.state.set_file_sync_state(n);
});
})();
var inst_66316 = cljs.core.add_watch(_STAR_sync_state,new cljs.core.Keyword("frontend.fs.sync","update-global-state","frontend.fs.sync/update-global-state",-739606169),inst_66315);
var inst_66317 = sm.start();
var inst_66318 = cljs.core.async.offer_BANG_(frontend.fs.sync.remote__GT_local_sync_chan,true);
var inst_66319 = cljs.core.async.offer_BANG_(frontend.fs.sync.full_sync_chan,true);
var inst_66320 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("network","online?","network/online?",1306822774));
var inst_66321 = (function (){return (function (_k,_r,_o,n){
if(n === false){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_66322 = cljs.core.add_watch(inst_66320,"sync-manage",inst_66321);
var inst_66323 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var inst_66324 = (function (){return (function (_k,_r,_o,n){
if((n == null)){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_66325 = cljs.core.add_watch(inst_66323,"sync-manage",inst_66324);
var state_66334__$1 = (function (){var statearr_66348 = state_66334;
(statearr_66348[(7)] = inst_66317);

(statearr_66348[(8)] = inst_66314);

(statearr_66348[(9)] = inst_66322);

(statearr_66348[(10)] = inst_66319);

(statearr_66348[(11)] = inst_66312);

(statearr_66348[(12)] = inst_66318);

(statearr_66348[(13)] = inst_66313);

(statearr_66348[(14)] = inst_66316);

(statearr_66348[(15)] = inst_66311);

return statearr_66348;
})();
var statearr_66349_67686 = state_66334__$1;
(statearr_66349_67686[(2)] = inst_66325);

(statearr_66349_67686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (2))){
var inst_66293 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var inst_66294 = frontend.state.set_file_sync_state(null);
var state_66334__$1 = (function (){var statearr_66351 = state_66334;
(statearr_66351[(16)] = inst_66293);

return statearr_66351;
})();
var statearr_66352_67687 = state_66334__$1;
(statearr_66352_67687[(2)] = inst_66294);

(statearr_66352_67687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (11))){
var inst_66327 = (state_66334[(2)]);
var state_66334__$1 = state_66334;
var statearr_66356_67688 = state_66334__$1;
(statearr_66356_67688[(2)] = inst_66327);

(statearr_66356_67688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (9))){
var inst_66303 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var state_66334__$1 = state_66334;
var statearr_66358_67689 = state_66334__$1;
(statearr_66358_67689[(2)] = inst_66303);

(statearr_66358_67689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66335 === (5))){
var inst_66298 = frontend.fs.sync.check_remote_graph_exists(graph_uuid);
var state_66334__$1 = state_66334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66334__$1,(8),inst_66298);
} else {
if((state_val_66335 === (10))){
var inst_66305 = frontend.fs.sync.set_env(frontend.fs.sync.rsapi,frontend.config.FILE_SYNC_PROD_QMARK_);
var inst_66306 = cljs.core.deref(_STAR_sync_state);
var inst_66307 = frontend.state.set_file_sync_state(inst_66306);
var inst_66308 = frontend.state.set_file_sync_manager(sm);
var inst_66309 = cljs.core.async.timeout((5000));
var state_66334__$1 = (function (){var statearr_66360 = state_66334;
(statearr_66360[(17)] = inst_66307);

(statearr_66360[(18)] = inst_66305);

(statearr_66360[(19)] = inst_66308);

return statearr_66360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66334__$1,(12),inst_66309);
} else {
if((state_val_66335 === (8))){
var inst_66300 = (state_66334[(2)]);
var inst_66301 = cljs.core.not(inst_66300);
var state_66334__$1 = state_66334;
if(inst_66301){
var statearr_66362_67690 = state_66334__$1;
(statearr_66362_67690[(1)] = (9));

} else {
var statearr_66364_67691 = state_66334__$1;
(statearr_66364_67691[(1)] = (10));

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
var statearr_66365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66365[(0)] = frontend$fs$sync$sync_start_$_state_machine__41839__auto__);

(statearr_66365[(1)] = (1));

return statearr_66365;
});
var frontend$fs$sync$sync_start_$_state_machine__41839__auto____1 = (function (state_66334){
while(true){
var ret_value__41840__auto__ = (function (){try{while(true){
var result__41841__auto__ = switch__41838__auto__(state_66334);
if(cljs.core.keyword_identical_QMARK_(result__41841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41841__auto__;
}
break;
}
}catch (e66367){var ex__41842__auto__ = e66367;
var statearr_66368_67692 = state_66334;
(statearr_66368_67692[(2)] = ex__41842__auto__);


if(cljs.core.seq((state_66334[(4)]))){
var statearr_66369_67693 = state_66334;
(statearr_66369_67693[(1)] = cljs.core.first((state_66334[(4)])));

} else {
throw ex__41842__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67694 = state_66334;
state_66334 = G__67694;
continue;
} else {
return ret_value__41840__auto__;
}
break;
}
});
frontend$fs$sync$sync_start_$_state_machine__41839__auto__ = function(state_66334){
switch(arguments.length){
case 0:
return frontend$fs$sync$sync_start_$_state_machine__41839__auto____0.call(this);
case 1:
return frontend$fs$sync$sync_start_$_state_machine__41839__auto____1.call(this,state_66334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$sync_start_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$sync_start_$_state_machine__41839__auto____0;
frontend$fs$sync$sync_start_$_state_machine__41839__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$sync_start_$_state_machine__41839__auto____1;
return frontend$fs$sync$sync_start_$_state_machine__41839__auto__;
})()
})();
var state__41863__auto__ = (function (){var statearr_66371 = f__41862__auto__();
(statearr_66371[(6)] = c__41861__auto__);

return statearr_66371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41863__auto__);
}));

return c__41861__auto__;
});

//# sourceMappingURL=frontend.fs.sync.js.map
