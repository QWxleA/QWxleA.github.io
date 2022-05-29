goog.provide('frontend.fs.sync');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),"null",new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),"null",new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null,new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),null,new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),null,new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null,new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),null,new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026),new cljs.core.Symbol("cljs-time.core","date?","cljs-time.core/date?",1865755164,null),cljs_time.core.date_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51743){
return cljs.core.set_QMARK_(G__51743);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51746){
return cljs.core.set_QMARK_(G__51746);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51747){
return cljs.core.map_QMARK_(G__51747);
}),(function (G__51747){
return cljs.core.contains_QMARK_(G__51747,new cljs.core.Keyword(null,"path","path",-188191168));
}),(function (G__51747){
return cljs.core.contains_QMARK_(G__51747,new cljs.core.Keyword(null,"time","time",1385887882));
})], null),(function (G__51747){
return ((cljs.core.map_QMARK_(G__51747)) && (((cljs.core.contains_QMARK_(G__51747,new cljs.core.Keyword(null,"path","path",-188191168))) && (cljs.core.contains_QMARK_(G__51747,new cljs.core.Keyword(null,"time","time",1385887882))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"time","time",1385887882)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51754){
return cljs.core.seq_QMARK_(G__51754);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.seq_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51755){
return cljs.core.map_QMARK_(G__51755);
}),(function (G__51755){
return cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__51755){
return cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256));
}),(function (G__51755){
return cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085));
}),(function (G__51755){
return cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812));
}),(function (G__51755){
return cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"history","history",-247395220));
})], null),(function (G__51755){
return ((cljs.core.map_QMARK_(G__51755)) && (((cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"state","state",-1988618099))) && (((cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))) && (((cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))) && (((cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))) && (cljs.core.contains_QMARK_(G__51755,new cljs.core.Keyword(null,"history","history",-247395220))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"history","history",-247395220)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file","null","delete_files","null","update_files","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file",null,"delete_files",null,"update_files",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51777){
return cljs.core.map_QMARK_(G__51777);
}),(function (G__51777){
return cljs.core.contains_QMARK_(G__51777,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
}),(function (G__51777){
return cljs.core.contains_QMARK_(G__51777,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
}),(function (G__51777){
return cljs.core.contains_QMARK_(G__51777,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
})], null),(function (G__51777){
return ((cljs.core.map_QMARK_(G__51777)) && (((cljs.core.contains_QMARK_(G__51777,new cljs.core.Keyword(null,"TXId","TXId",-902804781))) && (((cljs.core.contains_QMARK_(G__51777,new cljs.core.Keyword(null,"TXType","TXType",-476865365))) && (cljs.core.contains_QMARK_(G__51777,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),new cljs.core.Keyword(null,"TXType","TXType",-476865365),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXId","TXId",-902804781))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXType","TXType",-476865365))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51784_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),p1__51784_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Keyword(null,"unknown","unknown",-935977881)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51785_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),p1__51785_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51786_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),p1__51786_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__51790#","p1__51790#",1800994730,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"p1__51790#","p1__51790#",1800994730,null))),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),(function (p1__51790_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),p1__51790_SHARP_);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51844){
var state_val_51845 = (state_51844[(1)]);
if((state_val_51845 === (7))){
var inst_51826 = cljs.core.async.timeout((1000));
var state_51844__$1 = state_51844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51844__$1,(10),inst_51826);
} else {
if((state_val_51845 === (1))){
var state_51844__$1 = state_51844;
var statearr_51847_56049 = state_51844__$1;
(statearr_51847_56049[(2)] = null);

(statearr_51847_56049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (4))){
var inst_51815 = (state_51844[(7)]);
var inst_51824 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_51815);
var state_51844__$1 = state_51844;
if(inst_51824){
var statearr_51848_56050 = state_51844__$1;
(statearr_51848_56050[(1)] = (7));

} else {
var statearr_51849_56051 = state_51844__$1;
(statearr_51849_56051[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (6))){
var inst_51840 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
var statearr_51850_56052 = state_51844__$1;
(statearr_51850_56052[(2)] = inst_51840);

(statearr_51850_56052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (3))){
var inst_51842 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51844__$1,inst_51842);
} else {
if((state_val_51845 === (2))){
var inst_51815 = (state_51844[(7)]);
var inst_51815__$1 = ws.readyState;
var inst_51818 = [(3),null,(2),null];
var inst_51819 = (new cljs.core.PersistentArrayMap(null,2,inst_51818,null));
var inst_51820 = (new cljs.core.PersistentHashSet(null,inst_51819,null));
var inst_51821 = cljs.core.contains_QMARK_(inst_51820,inst_51815__$1);
var inst_51822 = (!(inst_51821));
var state_51844__$1 = (function (){var statearr_51851 = state_51844;
(statearr_51851[(7)] = inst_51815__$1);

return statearr_51851;
})();
if(inst_51822){
var statearr_51852_56053 = state_51844__$1;
(statearr_51852_56053[(1)] = (4));

} else {
var statearr_51853_56054 = state_51844__$1;
(statearr_51853_56054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (11))){
var inst_51834 = (state_51844[(2)]);
var state_51844__$1 = (function (){var statearr_51854 = state_51844;
(statearr_51854[(8)] = inst_51834);

return statearr_51854;
})();
var statearr_51856_56059 = state_51844__$1;
(statearr_51856_56059[(2)] = null);

(statearr_51856_56059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (9))){
var inst_51837 = (state_51844[(2)]);
var state_51844__$1 = state_51844;
var statearr_51857_56064 = state_51844__$1;
(statearr_51857_56064[(2)] = inst_51837);

(statearr_51857_56064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (5))){
var state_51844__$1 = state_51844;
var statearr_51859_56066 = state_51844__$1;
(statearr_51859_56066[(2)] = null);

(statearr_51859_56066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (10))){
var inst_51828 = (state_51844[(2)]);
var state_51844__$1 = (function (){var statearr_51861 = state_51844;
(statearr_51861[(9)] = inst_51828);

return statearr_51861;
})();
var statearr_51862_56068 = state_51844__$1;
(statearr_51862_56068[(2)] = null);

(statearr_51862_56068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51845 === (8))){
var inst_51831 = ws.send("PING");
var inst_51832 = cljs.core.async.timeout((30000));
var state_51844__$1 = (function (){var statearr_51863 = state_51844;
(statearr_51863[(10)] = inst_51831);

return statearr_51863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51844__$1,(11),inst_51832);
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
var statearr_51864 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51864[(0)] = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__);

(statearr_51864[(1)] = (1));

return statearr_51864;
});
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1 = (function (state_51844){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51844);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51865){var ex__27576__auto__ = e51865;
var statearr_51866_56076 = state_51844;
(statearr_51866_56076[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51844[(4)]))){
var statearr_51867_56077 = state_51844;
(statearr_51867_56077[(1)] = cljs.core.first((state_51844[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56078 = state_51844;
state_51844 = G__56078;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__ = function(state_51844){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1.call(this,state_51844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0;
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51869 = f__27596__auto__();
(statearr_51869[(6)] = c__27595__auto__);

return statearr_51869;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51879){
var state_val_51880 = (state_51879[(1)]);
if((state_val_51880 === (1))){
var inst_51875 = cljs.core.async.timeout((1000));
var inst_51876 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-connecting graph",graph_uuid], 0));
var inst_51877 = (frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(graph_uuid,_STAR_ws,remote_changes_chan) : frontend.fs.sync.ws_listen_BANG__STAR_.call(null,graph_uuid,_STAR_ws,remote_changes_chan));
var state_51879__$1 = (function (){var statearr_51882 = state_51879;
(statearr_51882[(7)] = inst_51875);

(statearr_51882[(8)] = inst_51876);

return statearr_51882;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51879__$1,inst_51877);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0 = (function (){
var statearr_51885 = [null,null,null,null,null,null,null,null,null];
(statearr_51885[(0)] = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__);

(statearr_51885[(1)] = (1));

return statearr_51885;
});
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1 = (function (state_51879){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51879);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51886){var ex__27576__auto__ = e51886;
var statearr_51887_56079 = state_51879;
(statearr_51887_56079[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51879[(4)]))){
var statearr_51889_56080 = state_51879;
(statearr_51889_56080[(1)] = cljs.core.first((state_51879[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56081 = state_51879;
state_51879 = G__56081;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = function(state_51879){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1.call(this,state_51879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0;
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51893 = f__27596__auto__();
(statearr_51893[(6)] = c__27595__auto__);

return statearr_51893;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51909){
var state_val_51910 = (state_51909[(1)]);
if((state_val_51910 === (1))){
var inst_51896 = ["https://",frontend.config.API_DOMAIN,"/file-sync/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_name)].join('');
var inst_51897 = [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51898 = cljs.core.clj__GT_js(body);
var inst_51899 = JSON.stringify(inst_51898);
var inst_51900 = [token,inst_51899,false];
var inst_51901 = cljs.core.PersistentHashMap.fromArrays(inst_51897,inst_51900);
var inst_51902 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_51896,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51901], 0));
var inst_51903 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"body","body",-2049205669)];
var state_51909__$1 = (function (){var statearr_51913 = state_51909;
(statearr_51913[(7)] = inst_51903);

return statearr_51913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51909__$1,(2),inst_51902);
} else {
if((state_val_51910 === (2))){
var inst_51903 = (state_51909[(7)]);
var inst_51905 = (state_51909[(2)]);
var inst_51906 = [inst_51905,api_name,body];
var inst_51907 = cljs.core.PersistentHashMap.fromArrays(inst_51903,inst_51906);
var state_51909__$1 = state_51909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51909__$1,inst_51907);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$request_once_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$request_once_$_state_machine__27573__auto____0 = (function (){
var statearr_51914 = [null,null,null,null,null,null,null,null];
(statearr_51914[(0)] = frontend$fs$sync$request_once_$_state_machine__27573__auto__);

(statearr_51914[(1)] = (1));

return statearr_51914;
});
var frontend$fs$sync$request_once_$_state_machine__27573__auto____1 = (function (state_51909){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51909);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51916){var ex__27576__auto__ = e51916;
var statearr_51917_56083 = state_51909;
(statearr_51917_56083[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51909[(4)]))){
var statearr_51918_56084 = state_51909;
(statearr_51918_56084[(1)] = cljs.core.first((state_51909[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56085 = state_51909;
state_51909 = G__56085;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$request_once_$_state_machine__27573__auto__ = function(state_51909){
switch(arguments.length){
case 0:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____1.call(this,state_51909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$request_once_$_state_machine__27573__auto____0;
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$request_once_$_state_machine__27573__auto____1;
return frontend$fs$sync$request_once_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51919 = f__27596__auto__();
(statearr_51919[(6)] = c__27595__auto__);

return statearr_51919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.request = (function frontend$fs$sync$request(var_args){
var G__51921 = arguments.length;
switch (G__51921) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51969){
var state_val_51970 = (state_51969[(1)]);
if((state_val_51970 === (7))){
var inst_51928 = (state_51969[(7)]);
var inst_51965 = new cljs.core.Keyword(null,"resp","resp",1418702376).cljs$core$IFn$_invoke$arity$1(inst_51928);
var state_51969__$1 = state_51969;
var statearr_51975_56087 = state_51969__$1;
(statearr_51975_56087[(2)] = inst_51965);

(statearr_51975_56087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51970 === (1))){
var inst_51926 = frontend.fs.sync.request_once(api_name,body,token);
var state_51969__$1 = state_51969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51969__$1,(2),inst_51926);
} else {
if((state_val_51970 === (4))){
var inst_51934 = (state_51969[(8)]);
var state_51969__$1 = state_51969;
var statearr_51980_56088 = state_51969__$1;
(statearr_51980_56088[(2)] = inst_51934);

(statearr_51980_56088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51970 === (6))){
var inst_51949 = ((1000) * retry_count);
var inst_51950 = (((60000) < inst_51949) ? (60000) : inst_51949);
var inst_51951 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will retry after",inst_51950,"ms"], 0));
var inst_51952 = ((1000) * retry_count);
var inst_51953 = (((60000) < inst_51952) ? (60000) : inst_51952);
var inst_51954 = cljs.core.async.timeout(inst_51953);
var state_51969__$1 = (function (){var statearr_51981 = state_51969;
(statearr_51981[(9)] = inst_51951);

return statearr_51981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51969__$1,(9),inst_51954);
} else {
if((state_val_51970 === (3))){
var inst_51928 = (state_51969[(7)]);
var inst_51936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51938 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_51939 = (new cljs.core.PersistentVector(null,2,(5),inst_51936,inst_51938,null));
var inst_51940 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_51928,inst_51939);
var inst_51941 = frontend.fs.sync.get_json_body(inst_51940);
var inst_51942 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_51941);
var inst_51943 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Unauthorized",inst_51942);
var state_51969__$1 = state_51969;
var statearr_51989_56089 = state_51969__$1;
(statearr_51989_56089[(2)] = inst_51943);

(statearr_51989_56089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51970 === (2))){
var inst_51928 = (state_51969[(7)]);
var inst_51934 = (state_51969[(8)]);
var inst_51928__$1 = (state_51969[(2)]);
var inst_51930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51931 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_51932 = (new cljs.core.PersistentVector(null,2,(5),inst_51930,inst_51931,null));
var inst_51933 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_51928__$1,inst_51932);
var inst_51934__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_51933);
var state_51969__$1 = (function (){var statearr_51990 = state_51969;
(statearr_51990[(7)] = inst_51928__$1);

(statearr_51990[(8)] = inst_51934__$1);

return statearr_51990;
})();
if(inst_51934__$1){
var statearr_51991_56090 = state_51969__$1;
(statearr_51991_56090[(1)] = (3));

} else {
var statearr_51992_56091 = state_51969__$1;
(statearr_51992_56091[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51970 === (11))){
var inst_51963 = (state_51969[(2)]);
var state_51969__$1 = state_51969;
var statearr_51993_56092 = state_51969__$1;
(statearr_51993_56092[(2)] = inst_51963);

(statearr_51993_56092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51970 === (9))){
var inst_51956 = (state_51969[(2)]);
var inst_51957 = (refresh_token_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_token_fn.cljs$core$IFn$_invoke$arity$0() : refresh_token_fn.call(null));
var state_51969__$1 = (function (){var statearr_51994 = state_51969;
(statearr_51994[(10)] = inst_51956);

return statearr_51994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51969__$1,(10),inst_51957);
} else {
if((state_val_51970 === (5))){
var inst_51946 = (state_51969[(2)]);
var state_51969__$1 = state_51969;
if(cljs.core.truth_(inst_51946)){
var statearr_51998_56093 = state_51969__$1;
(statearr_51998_56093[(1)] = (6));

} else {
var statearr_51999_56094 = state_51969__$1;
(statearr_51999_56094[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51970 === (10))){
var inst_51959 = (state_51969[(2)]);
var inst_51960 = (retry_count + (1));
var inst_51961 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,inst_51959,refresh_token_fn,inst_51960);
var state_51969__$1 = state_51969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51969__$1,(11),inst_51961);
} else {
if((state_val_51970 === (8))){
var inst_51967 = (state_51969[(2)]);
var state_51969__$1 = state_51969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51969__$1,inst_51967);
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
var statearr_52004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52004[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52004[(1)] = (1));

return statearr_52004;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51969){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51969);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52005){var ex__27576__auto__ = e52005;
var statearr_52006_56095 = state_51969;
(statearr_52006_56095[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51969[(4)]))){
var statearr_52007_56096 = state_51969;
(statearr_52007_56096[(1)] = cljs.core.first((state_51969[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56097 = state_51969;
state_51969 = G__56097;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51969){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52008 = f__27596__auto__();
(statearr_52008[(6)] = c__27595__auto__);

return statearr_52008;
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

var frontend$fs$sync$IRelativePath$_relative_path$dyn_56098 = (function (this$){
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
return frontend$fs$sync$IRelativePath$_relative_path$dyn_56098(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStoppable = function(){};

var frontend$fs$sync$IStoppable$_stop_BANG_$dyn_56101 = (function (this$){
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
return frontend$fs$sync$IStoppable$_stop_BANG_$dyn_56101(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStopped_QMARK_ = function(){};

var frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_56102 = (function (this$){
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
return frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_56102(this$);
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
frontend.fs.sync.diff__GT_filetxns = (function frontend$fs$sync$diff__GT_filetxns(p__52038){
var map__52039 = p__52038;
var map__52039__$1 = cljs.core.__destructure_map(map__52039);
var TXId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52039__$1,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
var TXType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52039__$1,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
var TXContent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52039__$1,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_files",TXType);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("delete_files",TXType);
var update_or_del_type_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__52037_SHARP_){
return frontend.fs.sync.__GT_FileTxn(p1__52037_SHARP_,p1__52037_SHARP_,update_QMARK_,delete_QMARK_,TXId);
})));
var filepaths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,clojure.string.split_lines(TXContent));
var G__52040 = TXType;
switch (G__52040) {
case "update_files":
case "delete_files":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(update_or_del_type_xf,filepaths);

break;
case "rename_file":
return (new cljs.core.List(null,frontend.fs.sync.__GT_FileTxn(cljs.core.first(filepaths),cljs.core.second(filepaths),false,false,TXId),null,(1),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52040)].join('')));

}
});
/**
 * transducer.
 *   remove duplicate update&delete `FileTxn`s.
 */
frontend.fs.sync.distinct_update_filetxns_xf = (function frontend$fs$sync$distinct_update_filetxns_xf(rf){
var seen_update_AMPERSAND_delete_filetxns = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__56106 = null;
var G__56106__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__56106__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__56106__2 = (function (result,filetxn){
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
G__56106 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__56106__0.call(this);
case 1:
return G__56106__1.call(this,result);
case 2:
return G__56106__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56106.cljs$core$IFn$_invoke$arity$0 = G__56106__0;
G__56106.cljs$core$IFn$_invoke$arity$1 = G__56106__1;
G__56106.cljs$core$IFn$_invoke$arity$2 = G__56106__2;
return G__56106;
})()
});
/**
 * transducer.
 *   remove update&rename filetxns if they are deleted later(in greater txid filetxn).
 */
frontend.fs.sync.remove_deleted_filetxns_xf = (function frontend$fs$sync$remove_deleted_filetxns_xf(rf){
var seen_deleted_paths = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__56107 = null;
var G__56107__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__56107__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__56107__2 = (function (result,filetxn){
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
G__56107 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__56107__0.call(this);
case 1:
return G__56107__1.call(this,result);
case 2:
return G__56107__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56107.cljs$core$IFn$_invoke$arity$0 = G__56107__0;
G__56107.cljs$core$IFn$_invoke$arity$1 = G__56107__1;
G__56107.cljs$core$IFn$_invoke$arity$2 = G__56107__2;
return G__56107;
})()
});
/**
 * return transducer.
 *   partition filetxns, at most N update-filetxns in each partition,
 *   for delete and rename type, only one filetxn in each partition.
 */
frontend.fs.sync.partition_filetxns = (function frontend$fs$sync$partition_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (p1__52049_SHARP_){
return p1__52049_SHARP_.updated_QMARK_;
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ts){
if(cljs.core.truth_((function (){var G__52052 = cljs.core.first(ts);
if((G__52052 == null)){
return null;
} else {
return G__52052.updated_QMARK_;
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
frontend.fs.sync.filepath__GT_diff = (function frontend$fs$sync$filepath__GT_diff(index,p__52055){
var map__52056 = p__52055;
var map__52056__$1 = cljs.core.__destructure_map(map__52056);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52056__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52056__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52056__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
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
(self__.normalized_path = (function (){var G__52057 = self__.path;
var G__52057__$1 = ((clojure.string.starts_with_QMARK_(self__.path,"/"))?clojure.string.replace_first(G__52057,"/",""):G__52057);
if(cljs.core.truth_(self__.remote_QMARK_)){
return frontend.fs.sync.remove_user_graph_uuid_prefix(G__52057__$1);
} else {
return G__52057__$1;
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

var frontend$fs$sync$IRSAPI$set_env$dyn_56116 = (function (this$,prod_QMARK_){
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
return frontend$fs$sync$IRSAPI$set_env$dyn_56116(this$,prod_QMARK_);
}
});

var frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_56117 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_56117(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_56118 = (function (this$,graph_uuid,base_path){
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
return frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_56118(this$,graph_uuid,base_path);
}
});

var frontend$fs$sync$IRSAPI$rename_local_file$dyn_56119 = (function (this$,graph_uuid,base_path,from,to){
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
return frontend$fs$sync$IRSAPI$rename_local_file$dyn_56119(this$,graph_uuid,base_path,from,to);
}
});

var frontend$fs$sync$IRSAPI$update_local_files$dyn_56124 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$update_local_files$dyn_56124(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$delete_local_files$dyn_56129 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$delete_local_files$dyn_56129(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$update_remote_file$dyn_56130 = (function (this$,graph_uuid,base_path,filepath,local_txid){
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
return frontend$fs$sync$IRSAPI$update_remote_file$dyn_56130(this$,graph_uuid,base_path,filepath,local_txid);
}
});

var frontend$fs$sync$IRSAPI$update_remote_files$dyn_56131 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
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
return frontend$fs$sync$IRSAPI$update_remote_files$dyn_56131(this$,graph_uuid,base_path,filepaths,local_txid);
}
});

var frontend$fs$sync$IRSAPI$delete_remote_files$dyn_56132 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
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
return frontend$fs$sync$IRSAPI$delete_remote_files$dyn_56132(this$,graph_uuid,base_path,filepaths,local_txid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IRemoteAPI = function(){};

var frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_56135 = (function (this$,graph_uuid){
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
return frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_56135(this$,graph_uuid);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_56136 = (function (this$,graph_uuid,filepaths){
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
return frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_56136(this$,graph_uuid,filepaths);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_56138 = (function (this$,graph_name_opt,graph_uuid_opt){
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
return frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_56138(this$,graph_name_opt,graph_uuid_opt);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_56139 = (function (this$,graph_uuid,filepath){
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
return frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_56139(this$,graph_uuid,filepath);
}
});

var frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_56140 = (function (this$){
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
return frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_56140(this$);
}
});

var frontend$fs$sync$IRemoteAPI$get_diff$dyn_56141 = (function (this$,graph_uuid,from_txid){
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
return frontend$fs$sync$IRemoteAPI$get_diff$dyn_56141(this$,graph_uuid,from_txid);
}
});

var frontend$fs$sync$IRemoteAPI$create_graph$dyn_56142 = (function (this$,graph_name){
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
return frontend$fs$sync$IRemoteAPI$create_graph$dyn_56142(this$,graph_name);
}
});

var frontend$fs$sync$IRemoteAPI$delete_graph$dyn_56143 = (function (this$,graph_uuid){
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
return frontend$fs$sync$IRemoteAPI$delete_graph$dyn_56143(this$,graph_uuid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IToken = function(){};

var frontend$fs$sync$IToken$get_token$dyn_56144 = (function (this$){
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
return frontend$fs$sync$IToken$get_token$dyn_56144(this$);
}
});

var frontend$fs$sync$IToken$refresh_token$dyn_56145 = (function (this$){
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
return frontend$fs$sync$IToken$refresh_token$dyn_56145(this$);
}
});

frontend.fs.sync.check_files_exists = (function frontend$fs$sync$check_files_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52097){
var state_val_52098 = (state_52097[(1)]);
if((state_val_52098 === (1))){
var inst_52083 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52097__$1,(2),inst_52083);
} else {
if((state_val_52098 === (2))){
var inst_52086 = (state_52097[(7)]);
var inst_52085 = (state_52097[(2)]);
var inst_52086__$1 = cljs.core.ex_cause(inst_52085);
var inst_52087 = (inst_52086__$1 == null);
var state_52097__$1 = (function (){var statearr_52100 = state_52097;
(statearr_52100[(7)] = inst_52086__$1);

return statearr_52100;
})();
if(cljs.core.truth_(inst_52087)){
var statearr_52101_56146 = state_52097__$1;
(statearr_52101_56146[(1)] = (3));

} else {
var statearr_52102_56147 = state_52097__$1;
(statearr_52102_56147[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (3))){
var state_52097__$1 = state_52097;
var statearr_52112_56148 = state_52097__$1;
(statearr_52112_56148[(2)] = null);

(statearr_52112_56148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (4))){
var inst_52086 = (state_52097[(7)]);
var inst_52090 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52086),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_paths)].join('');
var inst_52091 = ["Assert failed: ",inst_52090,"\n","(nil? cause)"].join('');
var inst_52092 = (new Error(inst_52091));
var inst_52093 = (function(){throw inst_52092})();
var state_52097__$1 = state_52097;
var statearr_52113_56149 = state_52097__$1;
(statearr_52113_56149[(2)] = inst_52093);

(statearr_52113_56149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52098 === (5))){
var inst_52095 = (state_52097[(2)]);
var state_52097__$1 = state_52097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52097__$1,inst_52095);
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
var statearr_52115 = [null,null,null,null,null,null,null,null];
(statearr_52115[(0)] = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__);

(statearr_52115[(1)] = (1));

return statearr_52115;
});
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1 = (function (state_52097){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52097);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52119){var ex__27576__auto__ = e52119;
var statearr_52120_56157 = state_52097;
(statearr_52120_56157[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52097[(4)]))){
var statearr_52121_56158 = state_52097;
(statearr_52121_56158[(1)] = cljs.core.first((state_52097[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56159 = state_52097;
state_52097 = G__56159;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__ = function(state_52097){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1.call(this,state_52097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52125 = f__27596__auto__();
(statearr_52125[(6)] = c__27595__auto__);

return statearr_52125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.check_files_not_exists = (function frontend$fs$sync$check_files_not_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52141){
var state_val_52142 = (state_52141[(1)]);
if((state_val_52142 === (1))){
var inst_52126 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_52141__$1 = state_52141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52141__$1,(2),inst_52126);
} else {
if((state_val_52142 === (2))){
var inst_52130 = (state_52141[(2)]);
var inst_52131 = cljs.core.ex_cause(inst_52130);
var inst_52132 = (inst_52131 == null);
var inst_52133 = cljs.core.not(inst_52132);
var state_52141__$1 = state_52141;
if(inst_52133){
var statearr_52147_56160 = state_52141__$1;
(statearr_52147_56160[(1)] = (3));

} else {
var statearr_52148_56161 = state_52141__$1;
(statearr_52148_56161[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52142 === (3))){
var state_52141__$1 = state_52141;
var statearr_52149_56162 = state_52141__$1;
(statearr_52149_56162[(2)] = null);

(statearr_52149_56162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52142 === (4))){
var inst_52136 = (new Error("Assert failed: (some? cause)"));
var inst_52137 = (function(){throw inst_52136})();
var state_52141__$1 = state_52141;
var statearr_52150_56163 = state_52141__$1;
(statearr_52150_56163[(2)] = inst_52137);

(statearr_52150_56163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52142 === (5))){
var inst_52139 = (state_52141[(2)]);
var state_52141__$1 = state_52141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52141__$1,inst_52139);
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
var statearr_52151 = [null,null,null,null,null,null,null];
(statearr_52151[(0)] = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__);

(statearr_52151[(1)] = (1));

return statearr_52151;
});
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1 = (function (state_52141){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52141);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52152){var ex__27576__auto__ = e52152;
var statearr_52153_56164 = state_52141;
(statearr_52153_56164[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52141[(4)]))){
var statearr_52154_56165 = state_52141;
(statearr_52154_56165[(1)] = cljs.core.first((state_52141[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56166 = state_52141;
state_52141 = G__56166;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__ = function(state_52141){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1.call(this,state_52141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52155 = f__27596__auto__();
(statearr_52155[(6)] = c__27595__auto__);

return statearr_52155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.retry_rsapi = (function frontend$fs$sync$retry_rsapi(f){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52198){
var state_val_52199 = (state_52198[(1)]);
if((state_val_52199 === (7))){
var inst_52179 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
if(cljs.core.truth_(inst_52179)){
var statearr_52200_56167 = state_52198__$1;
(statearr_52200_56167[(1)] = (11));

} else {
var statearr_52201_56168 = state_52198__$1;
(statearr_52201_56168[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (1))){
var inst_52156 = (3);
var state_52198__$1 = (function (){var statearr_52203 = state_52198;
(statearr_52203[(7)] = inst_52156);

return statearr_52203;
})();
var statearr_52204_56173 = state_52198__$1;
(statearr_52204_56173[(2)] = null);

(statearr_52204_56173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (4))){
var inst_52165 = (state_52198[(8)]);
var inst_52164 = (state_52198[(9)]);
var inst_52164__$1 = (state_52198[(2)]);
var inst_52165__$1 = (inst_52164__$1 instanceof cljs.core.ExceptionInfo);
var state_52198__$1 = (function (){var statearr_52205 = state_52198;
(statearr_52205[(8)] = inst_52165__$1);

(statearr_52205[(9)] = inst_52164__$1);

return statearr_52205;
})();
if(cljs.core.truth_(inst_52165__$1)){
var statearr_52206_56174 = state_52198__$1;
(statearr_52206_56174[(1)] = (5));

} else {
var statearr_52207_56175 = state_52198__$1;
(statearr_52207_56175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (13))){
var inst_52191 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
var statearr_52208_56176 = state_52198__$1;
(statearr_52208_56176[(2)] = inst_52191);

(statearr_52208_56176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (6))){
var inst_52165 = (state_52198[(8)]);
var state_52198__$1 = state_52198;
var statearr_52209_56177 = state_52198__$1;
(statearr_52209_56177[(2)] = inst_52165);

(statearr_52209_56177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (3))){
var inst_52194 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52198__$1,inst_52194);
} else {
if((state_val_52199 === (12))){
var inst_52164 = (state_52198[(9)]);
var state_52198__$1 = state_52198;
var statearr_52211_56178 = state_52198__$1;
(statearr_52211_56178[(2)] = inst_52164);

(statearr_52211_56178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (2))){
var inst_52162 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var state_52198__$1 = state_52198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52198__$1,(4),inst_52162);
} else {
if((state_val_52199 === (11))){
var inst_52156 = (state_52198[(7)]);
var inst_52182 = ["retry(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52156),") ..."].join('');
var inst_52183 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52182], 0));
var inst_52187 = (inst_52156 - (1));
var inst_52156__$1 = inst_52187;
var state_52198__$1 = (function (){var statearr_52212 = state_52198;
(statearr_52212[(10)] = inst_52183);

(statearr_52212[(7)] = inst_52156__$1);

return statearr_52212;
})();
var statearr_52213_56179 = state_52198__$1;
(statearr_52213_56179[(2)] = null);

(statearr_52213_56179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (9))){
var inst_52170 = (state_52198[(11)]);
var state_52198__$1 = state_52198;
var statearr_52214_56180 = state_52198__$1;
(statearr_52214_56180[(2)] = inst_52170);

(statearr_52214_56180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (5))){
var inst_52164 = (state_52198[(9)]);
var inst_52170 = (state_52198[(11)]);
var inst_52168 = cljs.core.ex_cause(inst_52164);
var inst_52169 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52168);
var inst_52170__$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_52169,"operation timed out");
var state_52198__$1 = (function (){var statearr_52216 = state_52198;
(statearr_52216[(11)] = inst_52170__$1);

return statearr_52216;
})();
if(cljs.core.truth_(inst_52170__$1)){
var statearr_52217_56181 = state_52198__$1;
(statearr_52217_56181[(1)] = (8));

} else {
var statearr_52221_56182 = state_52198__$1;
(statearr_52221_56182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (10))){
var inst_52175 = (state_52198[(2)]);
var state_52198__$1 = state_52198;
var statearr_52222_56183 = state_52198__$1;
(statearr_52222_56183[(2)] = inst_52175);

(statearr_52222_56183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52199 === (8))){
var inst_52156 = (state_52198[(7)]);
var inst_52172 = (inst_52156 > (0));
var state_52198__$1 = state_52198;
var statearr_52223_56184 = state_52198__$1;
(statearr_52223_56184[(2)] = inst_52172);

(statearr_52223_56184[(1)] = (10));


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
var statearr_52237 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52237[(0)] = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__);

(statearr_52237[(1)] = (1));

return statearr_52237;
});
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1 = (function (state_52198){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52198);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52238){var ex__27576__auto__ = e52238;
var statearr_52240_56185 = state_52198;
(statearr_52240_56185[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52198[(4)]))){
var statearr_52242_56186 = state_52198;
(statearr_52242_56186[(1)] = cljs.core.first((state_52198[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56187 = state_52198;
state_52198 = G__56187;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__ = function(state_52198){
switch(arguments.length){
case 0:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1.call(this,state_52198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0;
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1;
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52244 = f__27596__auto__();
(statearr_52244[(6)] = c__27595__auto__);

return statearr_52244;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52260){
var state_val_52261 = (state_52260[(1)]);
if((state_val_52261 === (1))){
var inst_52251 = (state_52260[(7)]);
var inst_52251__$1 = frontend.state.get_auth_id_token();
var state_52260__$1 = (function (){var statearr_52262 = state_52260;
(statearr_52262[(7)] = inst_52251__$1);

return statearr_52262;
})();
if(cljs.core.truth_(inst_52251__$1)){
var statearr_52263_56191 = state_52260__$1;
(statearr_52263_56191[(1)] = (2));

} else {
var statearr_52264_56192 = state_52260__$1;
(statearr_52264_56192[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52261 === (2))){
var inst_52251 = (state_52260[(7)]);
var state_52260__$1 = state_52260;
var statearr_52265_56193 = state_52260__$1;
(statearr_52265_56193[(2)] = inst_52251);

(statearr_52265_56193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52261 === (3))){
var inst_52254 = this$__$1.refresh_token();
var state_52260__$1 = state_52260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52260__$1,(5),inst_52254);
} else {
if((state_val_52261 === (4))){
var inst_52258 = (state_52260[(2)]);
var state_52260__$1 = state_52260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52260__$1,inst_52258);
} else {
if((state_val_52261 === (5))){
var inst_52256 = (state_52260[(2)]);
var state_52260__$1 = state_52260;
var statearr_52266_56194 = state_52260__$1;
(statearr_52266_56194[(2)] = inst_52256);

(statearr_52266_56194[(1)] = (4));


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
var statearr_52267 = [null,null,null,null,null,null,null,null];
(statearr_52267[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52267[(1)] = (1));

return statearr_52267;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52260){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52260);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52268){var ex__27576__auto__ = e52268;
var statearr_52269_56195 = state_52260;
(statearr_52269_56195[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52260[(4)]))){
var statearr_52270_56196 = state_52260;
(statearr_52270_56196[(1)] = cljs.core.first((state_52260[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56197 = state_52260;
state_52260 = G__56197;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52260){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52271 = f__27596__auto__();
(statearr_52271[(6)] = c__27595__auto__);

return statearr_52271;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52277){
var state_val_52278 = (state_52277[(1)]);
if((state_val_52278 === (1))){
var inst_52272 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52277__$1 = state_52277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52277__$1,(2),inst_52272);
} else {
if((state_val_52278 === (2))){
var inst_52274 = (state_52277[(2)]);
var inst_52275 = frontend.state.get_auth_id_token();
var state_52277__$1 = (function (){var statearr_52279 = state_52277;
(statearr_52279[(7)] = inst_52274);

return statearr_52279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52277__$1,inst_52275);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52280 = [null,null,null,null,null,null,null,null];
(statearr_52280[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52280[(1)] = (1));

return statearr_52280;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52277){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52277);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52281){var ex__27576__auto__ = e52281;
var statearr_52282_56198 = state_52277;
(statearr_52282_56198[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52277[(4)]))){
var statearr_52283_56199 = state_52277;
(statearr_52283_56199[(1)] = cljs.core.first((state_52277[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56200 = state_52277;
state_52277 = G__56200;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52277){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52284 = f__27596__auto__();
(statearr_52284[(6)] = c__27595__auto__);

return statearr_52284;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52293){
var state_val_52294 = (state_52293[(1)]);
if((state_val_52294 === (1))){
var inst_52285 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52293__$1 = state_52293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52293__$1,(2),inst_52285);
} else {
if((state_val_52294 === (2))){
var inst_52287 = (state_52293[(2)]);
var inst_52288 = (function (){var token = inst_52287;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_52289 = frontend.fs.sync.retry_rsapi(inst_52288);
var state_52293__$1 = state_52293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52293__$1,(3),inst_52289);
} else {
if((state_val_52294 === (3))){
var inst_52291 = (state_52293[(2)]);
var state_52293__$1 = state_52293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52293__$1,inst_52291);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52297 = [null,null,null,null,null,null,null];
(statearr_52297[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52297[(1)] = (1));

return statearr_52297;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52293){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52293);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52298){var ex__27576__auto__ = e52298;
var statearr_52299_56201 = state_52293;
(statearr_52299_56201[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52293[(4)]))){
var statearr_52301_56202 = state_52293;
(statearr_52301_56202[(1)] = cljs.core.first((state_52293[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56203 = state_52293;
state_52293 = G__56203;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52293){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52302 = f__27596__auto__();
(statearr_52302[(6)] = c__27595__auto__);

return statearr_52302;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52320){
var state_val_52321 = (state_52320[(1)]);
if((state_val_52321 === (1))){
var inst_52303 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-all-files-meta",graph_uuid,base_path], 0)));
});
})();
var inst_52304 = frontend.fs.sync.retry_rsapi(inst_52303);
var state_52320__$1 = state_52320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52320__$1,(2),inst_52304);
} else {
if((state_val_52321 === (2))){
var inst_52306 = (state_52320[(7)]);
var inst_52306__$1 = (state_52320[(2)]);
var inst_52307 = (inst_52306__$1 instanceof cljs.core.ExceptionInfo);
var state_52320__$1 = (function (){var statearr_52326 = state_52320;
(statearr_52326[(7)] = inst_52306__$1);

return statearr_52326;
})();
if(cljs.core.truth_(inst_52307)){
var statearr_52327_56204 = state_52320__$1;
(statearr_52327_56204[(1)] = (3));

} else {
var statearr_52328_56205 = state_52320__$1;
(statearr_52328_56205[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (3))){
var inst_52306 = (state_52320[(7)]);
var state_52320__$1 = state_52320;
var statearr_52329_56206 = state_52320__$1;
(statearr_52329_56206[(2)] = inst_52306);

(statearr_52329_56206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (4))){
var inst_52306 = (state_52320[(7)]);
var inst_52312 = (function (){var r = inst_52306;
return (function (p__52311){
var vec__52330 = p__52311;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52330,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52330,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52314 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52306);
var inst_52315 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52312,inst_52314);
var inst_52316 = cljs.core.set(inst_52315);
var state_52320__$1 = state_52320;
var statearr_52333_56207 = state_52320__$1;
(statearr_52333_56207[(2)] = inst_52316);

(statearr_52333_56207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (5))){
var inst_52318 = (state_52320[(2)]);
var state_52320__$1 = state_52320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52320__$1,inst_52318);
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
var statearr_52334 = [null,null,null,null,null,null,null,null];
(statearr_52334[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52334[(1)] = (1));

return statearr_52334;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52320){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52320);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52335){var ex__27576__auto__ = e52335;
var statearr_52336_56208 = state_52320;
(statearr_52336_56208[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52320[(4)]))){
var statearr_52337_56209 = state_52320;
(statearr_52337_56209[(1)] = cljs.core.first((state_52320[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56210 = state_52320;
state_52320 = G__56210;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52320){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52320);
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

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_local_files$arity$4 = (function (this$,graph_uuid,base_path,filepaths){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths], 0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52358){
var state_val_52359 = (state_52358[(1)]);
if((state_val_52359 === (1))){
var inst_52344 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52358__$1 = state_52358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52358__$1,(2),inst_52344);
} else {
if((state_val_52359 === (2))){
var inst_52346 = (state_52358[(2)]);
var inst_52347 = (function (){var token = inst_52346;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths,token], 0)));
});
})();
var inst_52348 = frontend.fs.sync.retry_rsapi(inst_52347);
var state_52358__$1 = state_52358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52358__$1,(3),inst_52348);
} else {
if((state_val_52359 === (3))){
var inst_52350 = (state_52358[(2)]);
var inst_52351 = frontend.state.developer_mode_QMARK_();
var state_52358__$1 = (function (){var statearr_52360 = state_52358;
(statearr_52360[(7)] = inst_52350);

return statearr_52360;
})();
if(cljs.core.truth_(inst_52351)){
var statearr_52361_56214 = state_52358__$1;
(statearr_52361_56214[(1)] = (4));

} else {
var statearr_52362_56215 = state_52358__$1;
(statearr_52362_56215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52359 === (4))){
var inst_52353 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_52358__$1 = state_52358;
var statearr_52363_56216 = state_52358__$1;
(statearr_52363_56216[(2)] = inst_52353);

(statearr_52363_56216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52359 === (5))){
var state_52358__$1 = state_52358;
var statearr_52364_56217 = state_52358__$1;
(statearr_52364_56217[(2)] = null);

(statearr_52364_56217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52359 === (6))){
var inst_52350 = (state_52358[(7)]);
var inst_52356 = (state_52358[(2)]);
var state_52358__$1 = (function (){var statearr_52365 = state_52358;
(statearr_52365[(8)] = inst_52356);

return statearr_52365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52358__$1,inst_52350);
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
var statearr_52366 = [null,null,null,null,null,null,null,null,null];
(statearr_52366[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52366[(1)] = (1));

return statearr_52366;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52358){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52358);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52367){var ex__27576__auto__ = e52367;
var statearr_52368_56218 = state_52358;
(statearr_52368_56218[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52358[(4)]))){
var statearr_52369_56219 = state_52358;
(statearr_52369_56219[(1)] = cljs.core.first((state_52358[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56220 = state_52358;
state_52358 = G__56220;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52358){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52370 = f__27596__auto__();
(statearr_52370[(6)] = c__27595__auto__);

return statearr_52370;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52385){
var state_val_52386 = (state_52385[(1)]);
if((state_val_52386 === (1))){
var inst_52371 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-files-meta",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_52372 = frontend.fs.sync.retry_rsapi(inst_52371);
var state_52385__$1 = state_52385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52385__$1,(2),inst_52372);
} else {
if((state_val_52386 === (2))){
var inst_52374 = (state_52385[(7)]);
var inst_52374__$1 = (state_52385[(2)]);
var inst_52375 = (inst_52374__$1 instanceof cljs.core.ExceptionInfo);
var state_52385__$1 = (function (){var statearr_52389 = state_52385;
(statearr_52389[(7)] = inst_52374__$1);

return statearr_52389;
})();
if(cljs.core.truth_(inst_52375)){
var statearr_52390_56221 = state_52385__$1;
(statearr_52390_56221[(1)] = (3));

} else {
var statearr_52391_56222 = state_52385__$1;
(statearr_52391_56222[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (3))){
var inst_52374 = (state_52385[(7)]);
var state_52385__$1 = state_52385;
var statearr_52393_56223 = state_52385__$1;
(statearr_52393_56223[(2)] = inst_52374);

(statearr_52393_56223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (4))){
var inst_52374 = (state_52385[(7)]);
var inst_52379 = (function (){var r = inst_52374;
return (function (p__52378){
var vec__52394 = p__52378;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52394,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52394,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52380 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52374);
var inst_52381 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52379,inst_52380);
var state_52385__$1 = state_52385;
var statearr_52397_56224 = state_52385__$1;
(statearr_52397_56224[(2)] = inst_52381);

(statearr_52397_56224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52386 === (5))){
var inst_52383 = (state_52385[(2)]);
var state_52385__$1 = state_52385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52385__$1,inst_52383);
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
var statearr_52398 = [null,null,null,null,null,null,null,null];
(statearr_52398[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52398[(1)] = (1));

return statearr_52398;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52385){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52385);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52399){var ex__27576__auto__ = e52399;
var statearr_52400_56225 = state_52385;
(statearr_52400_56225[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52385[(4)]))){
var statearr_52401_56226 = state_52385;
(statearr_52401_56226[(1)] = cljs.core.first((state_52385[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56227 = state_52385;
state_52385 = G__56227;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52385){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52402 = f__27596__auto__();
(statearr_52402[(6)] = c__27595__auto__);

return statearr_52402;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52411){
var state_val_52412 = (state_52411[(1)]);
if((state_val_52412 === (1))){
var inst_52403 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52411__$1 = state_52411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52411__$1,(2),inst_52403);
} else {
if((state_val_52412 === (2))){
var inst_52405 = (state_52411[(2)]);
var inst_52406 = (function (){var token = inst_52405;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_52407 = frontend.fs.sync.retry_rsapi(inst_52406);
var state_52411__$1 = state_52411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52411__$1,(3),inst_52407);
} else {
if((state_val_52412 === (3))){
var inst_52409 = (state_52411[(2)]);
var state_52411__$1 = state_52411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52411__$1,inst_52409);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52413 = [null,null,null,null,null,null,null];
(statearr_52413[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52413[(1)] = (1));

return statearr_52413;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52411){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52411);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52414){var ex__27576__auto__ = e52414;
var statearr_52415_56233 = state_52411;
(statearr_52415_56233[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52411[(4)]))){
var statearr_52416_56234 = state_52411;
(statearr_52416_56234[(1)] = cljs.core.first((state_52411[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56235 = state_52411;
state_52411 = G__56235;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52411){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52419 = f__27596__auto__();
(statearr_52419[(6)] = c__27595__auto__);

return statearr_52419;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52431){
var state_val_52432 = (state_52431[(1)]);
if((state_val_52432 === (1))){
var state_52431__$1 = state_52431;
if(cljs.core.truth_(prod_QMARK_)){
var statearr_52433_56238 = state_52431__$1;
(statearr_52433_56238[(1)] = (3));

} else {
var statearr_52434_56239 = state_52431__$1;
(statearr_52434_56239[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52432 === (2))){
var inst_52429 = (state_52431[(2)]);
var state_52431__$1 = state_52431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52431__$1,inst_52429);
} else {
if((state_val_52432 === (3))){
var state_52431__$1 = state_52431;
var statearr_52435_56240 = state_52431__$1;
(statearr_52435_56240[(2)] = "prod");

(statearr_52435_56240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52432 === (4))){
var state_52431__$1 = state_52431;
var statearr_52436_56241 = state_52431__$1;
(statearr_52436_56241[(2)] = "dev");

(statearr_52436_56241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52432 === (5))){
var inst_52425 = (state_52431[(2)]);
var inst_52426 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set-env",inst_52425], 0));
var inst_52427 = cljs.core.async.interop.p__GT_c(inst_52426);
var state_52431__$1 = state_52431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52431__$1,(2),inst_52427);
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
var statearr_52437 = [null,null,null,null,null,null,null];
(statearr_52437[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52437[(1)] = (1));

return statearr_52437;
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
}catch (e52438){var ex__27576__auto__ = e52438;
var statearr_52439_56242 = state_52431;
(statearr_52439_56242[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52431[(4)]))){
var statearr_52440_56243 = state_52431;
(statearr_52440_56243[(1)] = cljs.core.first((state_52431[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56244 = state_52431;
state_52431 = G__56244;
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
var state__27597__auto__ = (function (){var statearr_52441 = f__27596__auto__();
(statearr_52441[(6)] = c__27595__auto__);

return statearr_52441;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52450){
var state_val_52451 = (state_52450[(1)]);
if((state_val_52451 === (1))){
var inst_52442 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52450__$1 = state_52450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52450__$1,(2),inst_52442);
} else {
if((state_val_52451 === (2))){
var inst_52444 = (state_52450[(2)]);
var inst_52445 = (function (){var token = inst_52444;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-file",graph_uuid,base_path,filepath,local_txid,token], 0)));
});
})();
var inst_52446 = frontend.fs.sync.retry_rsapi(inst_52445);
var state_52450__$1 = state_52450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52450__$1,(3),inst_52446);
} else {
if((state_val_52451 === (3))){
var inst_52448 = (state_52450[(2)]);
var state_52450__$1 = state_52450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52450__$1,inst_52448);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52452 = [null,null,null,null,null,null,null];
(statearr_52452[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52452[(1)] = (1));

return statearr_52452;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52450){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52450);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52453){var ex__27576__auto__ = e52453;
var statearr_52454_56245 = state_52450;
(statearr_52454_56245[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52450[(4)]))){
var statearr_52455_56246 = state_52450;
(statearr_52455_56246[(1)] = cljs.core.first((state_52450[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56247 = state_52450;
state_52450 = G__56247;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52450){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52456 = f__27596__auto__();
(statearr_52456[(6)] = c__27595__auto__);

return statearr_52456;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52468){
var state_val_52469 = (state_52468[(1)]);
if((state_val_52469 === (1))){
var inst_52457 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-local-files",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_52458 = frontend.fs.sync.retry_rsapi(inst_52457);
var state_52468__$1 = state_52468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52468__$1,(2),inst_52458);
} else {
if((state_val_52469 === (2))){
var inst_52460 = (state_52468[(2)]);
var inst_52461 = frontend.state.developer_mode_QMARK_();
var state_52468__$1 = (function (){var statearr_52470 = state_52468;
(statearr_52470[(7)] = inst_52460);

return statearr_52470;
})();
if(cljs.core.truth_(inst_52461)){
var statearr_52471_56254 = state_52468__$1;
(statearr_52471_56254[(1)] = (3));

} else {
var statearr_52472_56255 = state_52468__$1;
(statearr_52472_56255[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52469 === (3))){
var inst_52463 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_52468__$1 = state_52468;
var statearr_52473_56258 = state_52468__$1;
(statearr_52473_56258[(2)] = inst_52463);

(statearr_52473_56258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52469 === (4))){
var state_52468__$1 = state_52468;
var statearr_52474_56259 = state_52468__$1;
(statearr_52474_56259[(2)] = null);

(statearr_52474_56259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52469 === (5))){
var inst_52460 = (state_52468[(7)]);
var inst_52466 = (state_52468[(2)]);
var state_52468__$1 = (function (){var statearr_52475 = state_52468;
(statearr_52475[(8)] = inst_52466);

return statearr_52475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52468__$1,inst_52460);
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
var statearr_52476 = [null,null,null,null,null,null,null,null,null];
(statearr_52476[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52476[(1)] = (1));

return statearr_52476;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52468){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52468);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52477){var ex__27576__auto__ = e52477;
var statearr_52478_56261 = state_52468;
(statearr_52478_56261[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52468[(4)]))){
var statearr_52479_56263 = state_52468;
(statearr_52479_56263[(1)] = cljs.core.first((state_52468[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56264 = state_52468;
state_52468 = G__56264;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52468){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52480 = f__27596__auto__();
(statearr_52480[(6)] = c__27595__auto__);

return statearr_52480;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52490){
var state_val_52491 = (state_52490[(1)]);
if((state_val_52491 === (1))){
var inst_52481 = (state_52490[(7)]);
var inst_52481__$1 = frontend.state.get_auth_id_token();
var state_52490__$1 = (function (){var statearr_52494 = state_52490;
(statearr_52494[(7)] = inst_52481__$1);

return statearr_52494;
})();
if(cljs.core.truth_(inst_52481__$1)){
var statearr_52497_56266 = state_52490__$1;
(statearr_52497_56266[(1)] = (2));

} else {
var statearr_52498_56268 = state_52490__$1;
(statearr_52498_56268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (2))){
var inst_52481 = (state_52490[(7)]);
var state_52490__$1 = state_52490;
var statearr_52499_56270 = state_52490__$1;
(statearr_52499_56270[(2)] = inst_52481);

(statearr_52499_56270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52491 === (3))){
var inst_52484 = this$__$1.refresh_token();
var state_52490__$1 = state_52490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52490__$1,(5),inst_52484);
} else {
if((state_val_52491 === (4))){
var inst_52488 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52490__$1,inst_52488);
} else {
if((state_val_52491 === (5))){
var inst_52486 = (state_52490[(2)]);
var state_52490__$1 = state_52490;
var statearr_52500_56271 = state_52490__$1;
(statearr_52500_56271[(2)] = inst_52486);

(statearr_52500_56271[(1)] = (4));


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
var statearr_52501 = [null,null,null,null,null,null,null,null];
(statearr_52501[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52501[(1)] = (1));

return statearr_52501;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52490){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52490);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52502){var ex__27576__auto__ = e52502;
var statearr_52503_56272 = state_52490;
(statearr_52503_56272[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52490[(4)]))){
var statearr_52504_56273 = state_52490;
(statearr_52504_56273[(1)] = cljs.core.first((state_52490[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56274 = state_52490;
state_52490 = G__56274;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52490){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52505 = f__27596__auto__();
(statearr_52505[(6)] = c__27595__auto__);

return statearr_52505;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52511){
var state_val_52512 = (state_52511[(1)]);
if((state_val_52512 === (1))){
var inst_52506 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52511__$1 = state_52511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52511__$1,(2),inst_52506);
} else {
if((state_val_52512 === (2))){
var inst_52508 = (state_52511[(2)]);
var inst_52509 = frontend.state.get_auth_id_token();
var state_52511__$1 = (function (){var statearr_52513 = state_52511;
(statearr_52513[(7)] = inst_52508);

return statearr_52513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52511__$1,inst_52509);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52514 = [null,null,null,null,null,null,null,null];
(statearr_52514[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52514[(1)] = (1));

return statearr_52514;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52511){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52511);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52515){var ex__27576__auto__ = e52515;
var statearr_52516_56275 = state_52511;
(statearr_52516_56275[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52511[(4)]))){
var statearr_52517_56278 = state_52511;
(statearr_52517_56278[(1)] = cljs.core.first((state_52511[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56279 = state_52511;
state_52511 = G__56279;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52511){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52518 = f__27596__auto__();
(statearr_52518[(6)] = c__27595__auto__);

return statearr_52518;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52540){
var state_val_52541 = (state_52540[(1)]);
if((state_val_52541 === (1))){
var inst_52520 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017)];
var inst_52521 = [base_path];
var inst_52522 = cljs.core.PersistentHashMap.fromArrays(inst_52520,inst_52521);
var inst_52523 = cljs.core.clj__GT_js(inst_52522);
var inst_52524 = frontend.mobile.util.file_sync.getLocalAllFilesMeta(inst_52523);
var inst_52525 = cljs.core.async.interop.p__GT_c(inst_52524);
var state_52540__$1 = state_52540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52540__$1,(2),inst_52525);
} else {
if((state_val_52541 === (2))){
var inst_52527 = (state_52540[(7)]);
var inst_52527__$1 = (state_52540[(2)]);
var inst_52528 = (inst_52527__$1 instanceof cljs.core.ExceptionInfo);
var state_52540__$1 = (function (){var statearr_52542 = state_52540;
(statearr_52542[(7)] = inst_52527__$1);

return statearr_52542;
})();
if(cljs.core.truth_(inst_52528)){
var statearr_52543_56284 = state_52540__$1;
(statearr_52543_56284[(1)] = (3));

} else {
var statearr_52544_56285 = state_52540__$1;
(statearr_52544_56285[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (3))){
var inst_52527 = (state_52540[(7)]);
var state_52540__$1 = state_52540;
var statearr_52545_56286 = state_52540__$1;
(statearr_52545_56286[(2)] = inst_52527);

(statearr_52545_56286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (4))){
var inst_52527 = (state_52540[(7)]);
var inst_52532 = (function (){var r = inst_52527;
return (function (p__52531){
var vec__52546 = p__52531;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52546,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52546,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52533 = inst_52527.result;
var inst_52534 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52533);
var inst_52535 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52532,inst_52534);
var inst_52536 = cljs.core.set(inst_52535);
var state_52540__$1 = state_52540;
var statearr_52549_56290 = state_52540__$1;
(statearr_52549_56290[(2)] = inst_52536);

(statearr_52549_56290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52541 === (5))){
var inst_52538 = (state_52540[(2)]);
var state_52540__$1 = state_52540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52540__$1,inst_52538);
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
var statearr_52550 = [null,null,null,null,null,null,null,null];
(statearr_52550[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52550[(1)] = (1));

return statearr_52550;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52540){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52540);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52551){var ex__27576__auto__ = e52551;
var statearr_52552_56291 = state_52540;
(statearr_52552_56291[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52540[(4)]))){
var statearr_52553_56292 = state_52540;
(statearr_52553_56292[(1)] = cljs.core.first((state_52540[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56295 = state_52540;
state_52540 = G__56295;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52540){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52554 = f__27596__auto__();
(statearr_52554[(6)] = c__27595__auto__);

return statearr_52554;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52569){
var state_val_52570 = (state_52569[(1)]);
if((state_val_52570 === (1))){
var inst_52555 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52569__$1 = state_52569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52569__$1,(2),inst_52555);
} else {
if((state_val_52570 === (2))){
var inst_52557 = (state_52569[(2)]);
var inst_52558 = (function (){var token = inst_52557;
return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.updateLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))));
});
})();
var inst_52559 = frontend.fs.sync.retry_rsapi(inst_52558);
var state_52569__$1 = state_52569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52569__$1,(3),inst_52559);
} else {
if((state_val_52570 === (3))){
var inst_52561 = (state_52569[(2)]);
var inst_52562 = frontend.state.developer_mode_QMARK_();
var state_52569__$1 = (function (){var statearr_52571 = state_52569;
(statearr_52571[(7)] = inst_52561);

return statearr_52571;
})();
if(cljs.core.truth_(inst_52562)){
var statearr_52572_56301 = state_52569__$1;
(statearr_52572_56301[(1)] = (4));

} else {
var statearr_52573_56302 = state_52569__$1;
(statearr_52573_56302[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (4))){
var inst_52564 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_52569__$1 = state_52569;
var statearr_52574_56303 = state_52569__$1;
(statearr_52574_56303[(2)] = inst_52564);

(statearr_52574_56303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (5))){
var state_52569__$1 = state_52569;
var statearr_52575_56304 = state_52569__$1;
(statearr_52575_56304[(2)] = null);

(statearr_52575_56304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52570 === (6))){
var inst_52561 = (state_52569[(7)]);
var inst_52567 = (state_52569[(2)]);
var state_52569__$1 = (function (){var statearr_52576 = state_52569;
(statearr_52576[(8)] = inst_52567);

return statearr_52576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52569__$1,inst_52561);
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
var statearr_52580 = [null,null,null,null,null,null,null,null,null];
(statearr_52580[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52580[(1)] = (1));

return statearr_52580;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52569){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52569);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52581){var ex__27576__auto__ = e52581;
var statearr_52582_56309 = state_52569;
(statearr_52582_56309[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52569[(4)]))){
var statearr_52583_56310 = state_52569;
(statearr_52583_56310[(1)] = cljs.core.first((state_52569[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56311 = state_52569;
state_52569 = G__56311;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52569){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52584 = f__27596__auto__();
(statearr_52584[(6)] = c__27595__auto__);

return statearr_52584;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52605){
var state_val_52606 = (state_52605[(1)]);
if((state_val_52606 === (1))){
var inst_52585 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318)];
var inst_52586 = [base_path,filepaths];
var inst_52587 = cljs.core.PersistentHashMap.fromArrays(inst_52585,inst_52586);
var inst_52588 = cljs.core.clj__GT_js(inst_52587);
var inst_52589 = frontend.mobile.util.file_sync.getLocalFilesMeta(inst_52588);
var inst_52590 = cljs.core.async.interop.p__GT_c(inst_52589);
var state_52605__$1 = state_52605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52605__$1,(2),inst_52590);
} else {
if((state_val_52606 === (2))){
var inst_52592 = (state_52605[(7)]);
var inst_52592__$1 = (state_52605[(2)]);
var inst_52593 = (inst_52592__$1 instanceof cljs.core.ExceptionInfo);
var state_52605__$1 = (function (){var statearr_52611 = state_52605;
(statearr_52611[(7)] = inst_52592__$1);

return statearr_52611;
})();
if(cljs.core.truth_(inst_52593)){
var statearr_52615_56319 = state_52605__$1;
(statearr_52615_56319[(1)] = (3));

} else {
var statearr_52621_56320 = state_52605__$1;
(statearr_52621_56320[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (3))){
var inst_52592 = (state_52605[(7)]);
var state_52605__$1 = state_52605;
var statearr_52622_56321 = state_52605__$1;
(statearr_52622_56321[(2)] = inst_52592);

(statearr_52622_56321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (4))){
var inst_52592 = (state_52605[(7)]);
var inst_52597 = (function (){var r = inst_52592;
return (function (p__52596){
var vec__52623 = p__52596;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52623,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52623,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52598 = inst_52592.result;
var inst_52599 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52598);
var inst_52600 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52597,inst_52599);
var inst_52601 = cljs.core.set(inst_52600);
var state_52605__$1 = state_52605;
var statearr_52626_56322 = state_52605__$1;
(statearr_52626_56322[(2)] = inst_52601);

(statearr_52626_56322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52606 === (5))){
var inst_52603 = (state_52605[(2)]);
var state_52605__$1 = state_52605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52605__$1,inst_52603);
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
var statearr_52627 = [null,null,null,null,null,null,null,null];
(statearr_52627[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52627[(1)] = (1));

return statearr_52627;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52605){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52605);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52628){var ex__27576__auto__ = e52628;
var statearr_52629_56327 = state_52605;
(statearr_52629_56327[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52605[(4)]))){
var statearr_52630_56328 = state_52605;
(statearr_52630_56328[(1)] = cljs.core.first((state_52605[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56329 = state_52605;
state_52605 = G__56329;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52605){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52631 = f__27596__auto__();
(statearr_52631[(6)] = c__27595__auto__);

return statearr_52631;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52652){
var state_val_52653 = (state_52652[(1)]);
if((state_val_52653 === (1))){
var inst_52632 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52652__$1 = state_52652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52652__$1,(2),inst_52632);
} else {
if((state_val_52653 === (2))){
var inst_52634 = (state_52652[(2)]);
var inst_52635 = [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),new cljs.core.Keyword(null,"txid","txid",1606205478),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_52636 = [graph_uuid,base_path,filepaths,local_txid,inst_52634];
var inst_52637 = cljs.core.PersistentHashMap.fromArrays(inst_52635,inst_52636);
var inst_52638 = cljs.core.clj__GT_js(inst_52637);
var inst_52639 = frontend.mobile.util.file_sync.updateRemoteFiles(inst_52638);
var inst_52640 = cljs.core.async.interop.p__GT_c(inst_52639);
var state_52652__$1 = state_52652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52652__$1,(3),inst_52640);
} else {
if((state_val_52653 === (3))){
var inst_52642 = (state_52652[(7)]);
var inst_52642__$1 = (state_52652[(2)]);
var inst_52643 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.sync","debug-update-remote-files","frontend.fs.sync/debug-update-remote-files",-1146829271),inst_52642__$1], 0));
var inst_52644 = (inst_52642__$1 instanceof cljs.core.ExceptionInfo);
var state_52652__$1 = (function (){var statearr_52654 = state_52652;
(statearr_52654[(8)] = inst_52643);

(statearr_52654[(7)] = inst_52642__$1);

return statearr_52654;
})();
if(cljs.core.truth_(inst_52644)){
var statearr_52655_56337 = state_52652__$1;
(statearr_52655_56337[(1)] = (4));

} else {
var statearr_52656_56338 = state_52652__$1;
(statearr_52656_56338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52653 === (4))){
var inst_52642 = (state_52652[(7)]);
var state_52652__$1 = state_52652;
var statearr_52657_56339 = state_52652__$1;
(statearr_52657_56339[(2)] = inst_52642);

(statearr_52657_56339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52653 === (5))){
var inst_52642 = (state_52652[(7)]);
var inst_52647 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52642);
var inst_52648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52647,"txid");
var state_52652__$1 = state_52652;
var statearr_52658_56340 = state_52652__$1;
(statearr_52658_56340[(2)] = inst_52648);

(statearr_52658_56340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52653 === (6))){
var inst_52650 = (state_52652[(2)]);
var state_52652__$1 = state_52652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52652__$1,inst_52650);
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
var statearr_52659 = [null,null,null,null,null,null,null,null,null];
(statearr_52659[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52659[(1)] = (1));

return statearr_52659;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52652){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52652);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52660){var ex__27576__auto__ = e52660;
var statearr_52661_56341 = state_52652;
(statearr_52661_56341[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52652[(4)]))){
var statearr_52662_56342 = state_52652;
(statearr_52662_56342[(1)] = cljs.core.first((state_52652[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56343 = state_52652;
state_52652 = G__56343;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52652){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52663 = f__27596__auto__();
(statearr_52663[(6)] = c__27595__auto__);

return statearr_52663;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52683){
var state_val_52685 = (state_52683[(1)]);
if((state_val_52685 === (1))){
var inst_52664 = [new cljs.core.Keyword(null,"env","env",-1815813235)];
var state_52683__$1 = (function (){var statearr_52691 = state_52683;
(statearr_52691[(7)] = inst_52664);

return statearr_52691;
})();
if(cljs.core.truth_(prod_QMARK_)){
var statearr_52692_56344 = state_52683__$1;
(statearr_52692_56344[(1)] = (3));

} else {
var statearr_52693_56345 = state_52683__$1;
(statearr_52693_56345[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52685 === (2))){
var inst_52680 = (state_52683[(2)]);
var state_52683__$1 = state_52683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52683__$1,inst_52680);
} else {
if((state_val_52685 === (3))){
var state_52683__$1 = state_52683;
var statearr_52694_56346 = state_52683__$1;
(statearr_52694_56346[(2)] = "prod");

(statearr_52694_56346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52685 === (4))){
var state_52683__$1 = state_52683;
var statearr_52695_56347 = state_52683__$1;
(statearr_52695_56347[(2)] = "dev");

(statearr_52695_56347[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52685 === (5))){
var inst_52664 = (state_52683[(7)]);
var inst_52672 = (state_52683[(2)]);
var inst_52673 = [inst_52672];
var inst_52674 = cljs.core.PersistentHashMap.fromArrays(inst_52664,inst_52673);
var inst_52676 = cljs.core.clj__GT_js(inst_52674);
var inst_52677 = frontend.mobile.util.file_sync.setEnv(inst_52676);
var inst_52678 = cljs.core.async.interop.p__GT_c(inst_52677);
var state_52683__$1 = state_52683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52683__$1,(2),inst_52678);
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
var statearr_52696 = [null,null,null,null,null,null,null,null];
(statearr_52696[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52696[(1)] = (1));

return statearr_52696;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52683){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52683);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52697){var ex__27576__auto__ = e52697;
var statearr_52698_56350 = state_52683;
(statearr_52698_56350[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52683[(4)]))){
var statearr_52699_56351 = state_52683;
(statearr_52699_56351[(1)] = cljs.core.first((state_52683[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56352 = state_52683;
state_52683 = G__56352;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52683){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52700 = f__27596__auto__();
(statearr_52700[(6)] = c__27595__auto__);

return statearr_52700;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52711){
var state_val_52712 = (state_52711[(1)]);
if((state_val_52712 === (1))){
var inst_52701 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)];
var inst_52702 = [base_path,from,to];
var inst_52703 = cljs.core.PersistentHashMap.fromArrays(inst_52701,inst_52702);
var inst_52704 = cljs.core.clj__GT_js(inst_52703);
var inst_52705 = frontend.mobile.util.file_sync.renameLocalFile(inst_52704);
var inst_52706 = cljs.core.async.interop.p__GT_c(inst_52705);
var state_52711__$1 = state_52711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52711__$1,(2),inst_52706);
} else {
if((state_val_52712 === (2))){
var inst_52708 = (state_52711[(2)]);
var state_52711__$1 = state_52711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52711__$1,inst_52708);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52713 = [null,null,null,null,null,null,null];
(statearr_52713[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52713[(1)] = (1));

return statearr_52713;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52711){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52711);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52714){var ex__27576__auto__ = e52714;
var statearr_52715_56355 = state_52711;
(statearr_52715_56355[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52711[(4)]))){
var statearr_52716_56357 = state_52711;
(statearr_52716_56357[(1)] = cljs.core.first((state_52711[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56359 = state_52711;
state_52711 = G__56359;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52711){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52717 = f__27596__auto__();
(statearr_52717[(6)] = c__27595__auto__);

return statearr_52717;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52729){
var state_val_52730 = (state_52729[(1)]);
if((state_val_52730 === (1))){
var inst_52718 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths], null))));
});
})();
var inst_52719 = frontend.fs.sync.retry_rsapi(inst_52718);
var state_52729__$1 = state_52729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52729__$1,(2),inst_52719);
} else {
if((state_val_52730 === (2))){
var inst_52721 = (state_52729[(2)]);
var inst_52722 = frontend.state.developer_mode_QMARK_();
var state_52729__$1 = (function (){var statearr_52735 = state_52729;
(statearr_52735[(7)] = inst_52721);

return statearr_52735;
})();
if(cljs.core.truth_(inst_52722)){
var statearr_52736_56361 = state_52729__$1;
(statearr_52736_56361[(1)] = (3));

} else {
var statearr_52737_56362 = state_52729__$1;
(statearr_52737_56362[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52730 === (3))){
var inst_52724 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_52729__$1 = state_52729;
var statearr_52738_56363 = state_52729__$1;
(statearr_52738_56363[(2)] = inst_52724);

(statearr_52738_56363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52730 === (4))){
var state_52729__$1 = state_52729;
var statearr_52740_56364 = state_52729__$1;
(statearr_52740_56364[(2)] = null);

(statearr_52740_56364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52730 === (5))){
var inst_52721 = (state_52729[(7)]);
var inst_52727 = (state_52729[(2)]);
var state_52729__$1 = (function (){var statearr_52741 = state_52729;
(statearr_52741[(8)] = inst_52727);

return statearr_52741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52729__$1,inst_52721);
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
var statearr_52742 = [null,null,null,null,null,null,null,null,null];
(statearr_52742[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52742[(1)] = (1));

return statearr_52742;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52729){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52729);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52743){var ex__27576__auto__ = e52743;
var statearr_52744_56366 = state_52729;
(statearr_52744_56366[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52729[(4)]))){
var statearr_52745_56367 = state_52729;
(statearr_52745_56367[(1)] = cljs.core.first((state_52729[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56369 = state_52729;
state_52729 = G__56369;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52729){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52746 = f__27596__auto__();
(statearr_52746[(6)] = c__27595__auto__);

return statearr_52746;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52769){
var state_val_52770 = (state_52769[(1)]);
if((state_val_52770 === (1))){
var inst_52749 = this$.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52769__$1 = state_52769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52769__$1,(3),inst_52749);
} else {
if((state_val_52770 === (2))){
var inst_52755 = (state_52769[(7)]);
var inst_52755__$1 = (state_52769[(2)]);
var inst_52756 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_52755__$1);
var inst_52757 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_52756) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_52756));
var state_52769__$1 = (function (){var statearr_52775 = state_52769;
(statearr_52775[(7)] = inst_52755__$1);

return statearr_52775;
})();
if(cljs.core.truth_(inst_52757)){
var statearr_52776_56372 = state_52769__$1;
(statearr_52776_56372[(1)] = (4));

} else {
var statearr_52777_56373 = state_52769__$1;
(statearr_52777_56373[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (3))){
var inst_52751 = (state_52769[(2)]);
var inst_52752 = (function (){return (function (){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(null);
});
})();
var inst_52753 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4(api_name,body,inst_52751,inst_52752);
var state_52769__$1 = state_52769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52769__$1,(2),inst_52753);
} else {
if((state_val_52770 === (4))){
var inst_52755 = (state_52769[(7)]);
var inst_52759 = frontend.fs.sync.get_resp_json_body(inst_52755);
var state_52769__$1 = state_52769;
var statearr_52778_56376 = state_52769__$1;
(statearr_52778_56376[(2)] = inst_52759);

(statearr_52778_56376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (5))){
var inst_52755 = (state_52769[(7)]);
var inst_52761 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_52762 = frontend.fs.sync.get_resp_json_body(inst_52755);
var inst_52763 = [inst_52755,inst_52762];
var inst_52764 = cljs.core.PersistentHashMap.fromArrays(inst_52761,inst_52763);
var inst_52765 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request failed",inst_52764);
var state_52769__$1 = state_52769;
var statearr_52781_56380 = state_52769__$1;
(statearr_52781_56380[(2)] = inst_52765);

(statearr_52781_56380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (6))){
var inst_52767 = (state_52769[(2)]);
var state_52769__$1 = state_52769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52769__$1,inst_52767);
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
var statearr_52782 = [null,null,null,null,null,null,null,null];
(statearr_52782[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52782[(1)] = (1));

return statearr_52782;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52769){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52769);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52785){var ex__27576__auto__ = e52785;
var statearr_52786_56387 = state_52769;
(statearr_52786_56387[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52769[(4)]))){
var statearr_52787_56388 = state_52769;
(statearr_52787_56388[(1)] = cljs.core.first((state_52769[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56389 = state_52769;
state_52769 = G__56389;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52769){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52788 = f__27596__auto__();
(statearr_52788[(6)] = c__27595__auto__);

return statearr_52788;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52799){
var state_val_52800 = (state_52799[(1)]);
if((state_val_52800 === (1))){
var inst_52790 = (state_52799[(7)]);
var inst_52790__$1 = frontend.state.get_auth_id_token();
var state_52799__$1 = (function (){var statearr_52802 = state_52799;
(statearr_52802[(7)] = inst_52790__$1);

return statearr_52802;
})();
if(cljs.core.truth_(inst_52790__$1)){
var statearr_52803_56393 = state_52799__$1;
(statearr_52803_56393[(1)] = (2));

} else {
var statearr_52804_56396 = state_52799__$1;
(statearr_52804_56396[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52800 === (2))){
var inst_52790 = (state_52799[(7)]);
var state_52799__$1 = state_52799;
var statearr_52805_56397 = state_52799__$1;
(statearr_52805_56397[(2)] = inst_52790);

(statearr_52805_56397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52800 === (3))){
var inst_52793 = this$__$1.frontend$fs$sync$IToken$refresh_token$arity$1(null);
var state_52799__$1 = state_52799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52799__$1,(5),inst_52793);
} else {
if((state_val_52800 === (4))){
var inst_52797 = (state_52799[(2)]);
var state_52799__$1 = state_52799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52799__$1,inst_52797);
} else {
if((state_val_52800 === (5))){
var inst_52795 = (state_52799[(2)]);
var state_52799__$1 = state_52799;
var statearr_52806_56399 = state_52799__$1;
(statearr_52806_56399[(2)] = inst_52795);

(statearr_52806_56399[(1)] = (4));


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
var statearr_52807 = [null,null,null,null,null,null,null,null];
(statearr_52807[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52807[(1)] = (1));

return statearr_52807;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52799){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52799);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52808){var ex__27576__auto__ = e52808;
var statearr_52809_56402 = state_52799;
(statearr_52809_56402[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52799[(4)]))){
var statearr_52810_56404 = state_52799;
(statearr_52810_56404[(1)] = cljs.core.first((state_52799[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56406 = state_52799;
state_52799 = G__56406;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52799){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52815 = f__27596__auto__();
(statearr_52815[(6)] = c__27595__auto__);

return statearr_52815;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52822){
var state_val_52823 = (state_52822[(1)]);
if((state_val_52823 === (1))){
var inst_52817 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52822__$1 = state_52822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52822__$1,(2),inst_52817);
} else {
if((state_val_52823 === (2))){
var inst_52819 = (state_52822[(2)]);
var inst_52820 = frontend.state.get_auth_id_token();
var state_52822__$1 = (function (){var statearr_52824 = state_52822;
(statearr_52824[(7)] = inst_52819);

return statearr_52824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52822__$1,inst_52820);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52825 = [null,null,null,null,null,null,null,null];
(statearr_52825[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52825[(1)] = (1));

return statearr_52825;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52822){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52822);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52826){var ex__27576__auto__ = e52826;
var statearr_52827_56410 = state_52822;
(statearr_52827_56410[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52822[(4)]))){
var statearr_52829_56411 = state_52822;
(statearr_52829_56411[(1)] = cljs.core.first((state_52822[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56412 = state_52822;
state_52822 = G__56412;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52822){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52830 = f__27596__auto__();
(statearr_52830[(6)] = c__27595__auto__);

return statearr_52830;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52872){
var state_val_52875 = (state_52872[(1)]);
if((state_val_52875 === (7))){
var inst_52868 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52881_56413 = state_52872__$1;
(statearr_52881_56413[(2)] = inst_52868);

(statearr_52881_56413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (1))){
var inst_52832 = null;
var inst_52833 = null;
var state_52872__$1 = (function (){var statearr_52882 = state_52872;
(statearr_52882[(7)] = inst_52832);

(statearr_52882[(8)] = inst_52833);

return statearr_52882;
})();
var statearr_52883_56414 = state_52872__$1;
(statearr_52883_56414[(2)] = null);

(statearr_52883_56414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (4))){
var inst_52844 = (state_52872[(9)]);
var inst_52844__$1 = (state_52872[(2)]);
var inst_52845 = (inst_52844__$1 instanceof cljs.core.ExceptionInfo);
var state_52872__$1 = (function (){var statearr_52884 = state_52872;
(statearr_52884[(9)] = inst_52844__$1);

return statearr_52884;
})();
if(cljs.core.truth_(inst_52845)){
var statearr_52886_56415 = state_52872__$1;
(statearr_52886_56415[(1)] = (5));

} else {
var statearr_52887_56416 = state_52872__$1;
(statearr_52887_56416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (13))){
var inst_52866 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
var statearr_52888_56417 = state_52872__$1;
(statearr_52888_56417[(2)] = inst_52866);

(statearr_52888_56417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (6))){
var inst_52855 = (state_52872[(10)]);
var inst_52832 = (state_52872[(7)]);
var inst_52833 = (state_52872[(8)]);
var inst_52848 = (state_52872[(11)]);
var inst_52844 = (state_52872[(9)]);
var inst_52849 = (state_52872[(12)]);
var inst_52848__$1 = new cljs.core.Keyword(null,"NextDir","NextDir",-113026321).cljs$core$IFn$_invoke$arity$1(inst_52844);
var inst_52849__$1 = new cljs.core.Keyword(null,"NextContinuationToken","NextContinuationToken",1106322029).cljs$core$IFn$_invoke$arity$1(inst_52844);
var inst_52851 = new cljs.core.Keyword(null,"Objects","Objects",-610644271).cljs$core$IFn$_invoke$arity$1(inst_52844);
var inst_52852 = (function (){var dir = inst_52832;
var continuation_token = inst_52833;
var r = inst_52844;
var next_dir = inst_52848__$1;
var next_continuation_token = inst_52849__$1;
var objs = inst_52851;
return (function (p1__52747_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__52747_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__52747_SHARP_),frontend.fs.sync.remove_user_graph_uuid_prefix(decodeURIComponent(new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__52747_SHARP_))),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__52747_SHARP_),true,null);
});
})();
var inst_52853 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52852,inst_52851);
var inst_52854 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,file_meta_list,inst_52853);
var inst_52855__$1 = cljs.core.empty_QMARK_(inst_52848__$1);
var state_52872__$1 = (function (){var statearr_52890 = state_52872;
(statearr_52890[(10)] = inst_52855__$1);

(statearr_52890[(11)] = inst_52848__$1);

(statearr_52890[(13)] = inst_52854);

(statearr_52890[(12)] = inst_52849__$1);

return statearr_52890;
})();
if(inst_52855__$1){
var statearr_52892_56418 = state_52872__$1;
(statearr_52892_56418[(1)] = (8));

} else {
var statearr_52893_56419 = state_52872__$1;
(statearr_52893_56419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (3))){
var inst_52870 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52872__$1,inst_52870);
} else {
if((state_val_52875 === (12))){
var inst_52848 = (state_52872[(11)]);
var inst_52849 = (state_52872[(12)]);
var inst_52832 = inst_52848;
var inst_52833 = inst_52849;
var state_52872__$1 = (function (){var statearr_52894 = state_52872;
(statearr_52894[(7)] = inst_52832);

(statearr_52894[(8)] = inst_52833);

return statearr_52894;
})();
var statearr_52895_56420 = state_52872__$1;
(statearr_52895_56420[(2)] = null);

(statearr_52895_56420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (2))){
var inst_52832 = (state_52872[(7)]);
var inst_52833 = (state_52872[(8)]);
var inst_52835 = cljs.core.PersistentHashMap.EMPTY;
var inst_52836 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second);
var inst_52837 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Dir","Dir",1454706553),new cljs.core.Keyword(null,"ContinuationToken","ContinuationToken",-770030188)];
var inst_52838 = [graph_uuid,inst_52832,inst_52833];
var inst_52839 = cljs.core.PersistentHashMap.fromArrays(inst_52837,inst_52838);
var inst_52840 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_52836,inst_52839);
var inst_52841 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_52835,inst_52840);
var inst_52842 = this$__$1.request("get_all_files",inst_52841);
var state_52872__$1 = state_52872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52872__$1,(4),inst_52842);
} else {
if((state_val_52875 === (11))){
var inst_52862 = cljs.core.persistent_BANG_(file_meta_list);
var state_52872__$1 = state_52872;
var statearr_52896_56421 = state_52872__$1;
(statearr_52896_56421[(2)] = inst_52862);

(statearr_52896_56421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (9))){
var inst_52855 = (state_52872[(10)]);
var state_52872__$1 = state_52872;
var statearr_52897_56422 = state_52872__$1;
(statearr_52897_56422[(2)] = inst_52855);

(statearr_52897_56422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (5))){
var inst_52844 = (state_52872[(9)]);
var state_52872__$1 = state_52872;
var statearr_52898_56423 = state_52872__$1;
(statearr_52898_56423[(2)] = inst_52844);

(statearr_52898_56423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (10))){
var inst_52860 = (state_52872[(2)]);
var state_52872__$1 = state_52872;
if(cljs.core.truth_(inst_52860)){
var statearr_52899_56424 = state_52872__$1;
(statearr_52899_56424[(1)] = (11));

} else {
var statearr_52900_56425 = state_52872__$1;
(statearr_52900_56425[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52875 === (8))){
var inst_52849 = (state_52872[(12)]);
var inst_52857 = cljs.core.empty_QMARK_(inst_52849);
var state_52872__$1 = state_52872;
var statearr_52901_56426 = state_52872__$1;
(statearr_52901_56426[(2)] = inst_52857);

(statearr_52901_56426[(1)] = (10));


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
var statearr_52902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52902[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52902[(1)] = (1));

return statearr_52902;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52872){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52872);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52903){var ex__27576__auto__ = e52903;
var statearr_52904_56427 = state_52872;
(statearr_52904_56427[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52872[(4)]))){
var statearr_52906_56428 = state_52872;
(statearr_52906_56428[(1)] = cljs.core.first((state_52872[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56429 = state_52872;
state_52872 = G__56429;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52872){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52908 = f__27596__auto__();
(statearr_52908[(6)] = c__27595__auto__);

return statearr_52908;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52926){
var state_val_52927 = (state_52926[(1)]);
if((state_val_52927 === (1))){
var inst_52909 = (state_52926[(7)]);
var inst_52909__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.encode_filepath,filepaths);
var inst_52910 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Files","Files",1992500914)];
var inst_52911 = [graph_uuid,inst_52909__$1];
var inst_52912 = cljs.core.PersistentHashMap.fromArrays(inst_52910,inst_52911);
var inst_52913 = this$__$1.request("get_files_meta",inst_52912);
var state_52926__$1 = (function (){var statearr_52933 = state_52926;
(statearr_52933[(7)] = inst_52909__$1);

return statearr_52933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52926__$1,(2),inst_52913);
} else {
if((state_val_52927 === (2))){
var inst_52915 = (state_52926[(8)]);
var inst_52915__$1 = (state_52926[(2)]);
var inst_52916 = (inst_52915__$1 instanceof cljs.core.ExceptionInfo);
var state_52926__$1 = (function (){var statearr_52935 = state_52926;
(statearr_52935[(8)] = inst_52915__$1);

return statearr_52935;
})();
if(cljs.core.truth_(inst_52916)){
var statearr_52936_56433 = state_52926__$1;
(statearr_52936_56433[(1)] = (3));

} else {
var statearr_52937_56434 = state_52926__$1;
(statearr_52937_56434[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52927 === (3))){
var inst_52915 = (state_52926[(8)]);
var state_52926__$1 = state_52926;
var statearr_52939_56435 = state_52926__$1;
(statearr_52939_56435[(2)] = inst_52915);

(statearr_52939_56435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52927 === (4))){
var inst_52915 = (state_52926[(8)]);
var inst_52909 = (state_52926[(7)]);
var inst_52919 = cljs.core.PersistentHashSet.EMPTY;
var inst_52920 = (function (){var encoded_filepaths = inst_52909;
var r = inst_52915;
return (function (p1__52748_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__52748_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__52748_SHARP_),decodeURIComponent(new cljs.core.Keyword(null,"FilePath","FilePath",1522398781).cljs$core$IFn$_invoke$arity$1(p1__52748_SHARP_)),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__52748_SHARP_),true,null);
});
})();
var inst_52921 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_52920);
var inst_52922 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_52919,inst_52921,inst_52915);
var state_52926__$1 = state_52926;
var statearr_52941_56436 = state_52926__$1;
(statearr_52941_56436[(2)] = inst_52922);

(statearr_52941_56436[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52927 === (5))){
var inst_52924 = (state_52926[(2)]);
var state_52926__$1 = state_52926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52926__$1,inst_52924);
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
var statearr_52942 = [null,null,null,null,null,null,null,null,null];
(statearr_52942[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52942[(1)] = (1));

return statearr_52942;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52926){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52926);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52943){var ex__27576__auto__ = e52943;
var statearr_52945_56437 = state_52926;
(statearr_52945_56437[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52926[(4)]))){
var statearr_52946_56438 = state_52926;
(statearr_52946_56438[(1)] = cljs.core.first((state_52926[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56439 = state_52926;
state_52926 = G__56439;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52926){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52948 = f__27596__auto__();
(statearr_52948[(6)] = c__27595__auto__);

return statearr_52948;
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

return this$__$1.request("get_graph",(function (){var G__52949 = cljs.core.PersistentArrayMap.EMPTY;
var G__52949__$1 = ((cljs.core.seq(graph_name_opt))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52949,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name_opt):G__52949);
if(cljs.core.seq(graph_uuid_opt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52949__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid_opt);
} else {
return G__52949__$1;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52986){
var state_val_52987 = (state_52986[(1)]);
if((state_val_52987 === (1))){
var inst_52955 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"FromTXId","FromTXId",-1493550374)];
var inst_52956 = [graph_uuid,from_txid];
var inst_52957 = cljs.core.PersistentHashMap.fromArrays(inst_52955,inst_52956);
var inst_52958 = this$__$1.request("get_diff",inst_52957);
var state_52986__$1 = state_52986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52986__$1,(2),inst_52958);
} else {
if((state_val_52987 === (2))){
var inst_52960 = (state_52986[(7)]);
var inst_52960__$1 = (state_52986[(2)]);
var inst_52961 = (inst_52960__$1 instanceof cljs.core.ExceptionInfo);
var state_52986__$1 = (function (){var statearr_52993 = state_52986;
(statearr_52993[(7)] = inst_52960__$1);

return statearr_52993;
})();
if(cljs.core.truth_(inst_52961)){
var statearr_52994_56447 = state_52986__$1;
(statearr_52994_56447[(1)] = (3));

} else {
var statearr_52995_56448 = state_52986__$1;
(statearr_52995_56448[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52987 === (3))){
var inst_52960 = (state_52986[(7)]);
var state_52986__$1 = state_52986;
var statearr_52996_56449 = state_52986__$1;
(statearr_52996_56449[(2)] = inst_52960);

(statearr_52996_56449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52987 === (4))){
var inst_52960 = (state_52986[(7)]);
var inst_52967 = new cljs.core.Keyword(null,"Transactions","Transactions",-836353760).cljs$core$IFn$_invoke$arity$1(inst_52960);
var inst_52968 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TXId","TXId",-902804781),inst_52967);
var inst_52973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52975 = cljs.core.last(inst_52968);
var inst_52976 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_52975);
var inst_52977 = cljs.core.first(inst_52968);
var inst_52978 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_52977);
var inst_52979 = [inst_52968,inst_52976,inst_52978];
var inst_52980 = (new cljs.core.PersistentVector(null,3,(5),inst_52973,inst_52979,null));
var state_52986__$1 = state_52986;
var statearr_52997_56450 = state_52986__$1;
(statearr_52997_56450[(2)] = inst_52980);

(statearr_52997_56450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52987 === (5))){
var inst_52983 = (state_52986[(2)]);
var state_52986__$1 = state_52986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52986__$1,inst_52983);
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
var statearr_53000 = [null,null,null,null,null,null,null,null];
(statearr_53000[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53000[(1)] = (1));

return statearr_53000;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52986){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52986);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53001){var ex__27576__auto__ = e53001;
var statearr_53002_56452 = state_52986;
(statearr_53002_56452[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52986[(4)]))){
var statearr_53003_56454 = state_52986;
(statearr_53003_56454[(1)] = cljs.core.first((state_52986[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56455 = state_52986;
state_52986 = G__56455;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52986){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53004 = f__27596__auto__();
(statearr_53004[(6)] = c__27595__auto__);

return statearr_53004;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53014){
var state_val_53015 = (state_53014[(1)]);
if((state_val_53015 === (1))){
var inst_53007 = frontend.config.get_local_dir(repo);
var inst_53008 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["addVersionFile",inst_53007,path,content], 0));
var inst_53009 = cljs.core.async.interop.p__GT_c(inst_53008);
var state_53014__$1 = state_53014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53014__$1,(2),inst_53009);
} else {
if((state_val_53015 === (2))){
var inst_53011 = (state_53014[(2)]);
var inst_53012 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["add-new-version-file: ",inst_53011], 0));
var state_53014__$1 = state_53014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53014__$1,inst_53012);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0 = (function (){
var statearr_53017 = [null,null,null,null,null,null,null];
(statearr_53017[(0)] = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__);

(statearr_53017[(1)] = (1));

return statearr_53017;
});
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1 = (function (state_53014){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53014);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53018){var ex__27576__auto__ = e53018;
var statearr_53019_56458 = state_53014;
(statearr_53019_56458[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53014[(4)]))){
var statearr_53020_56459 = state_53014;
(statearr_53020_56459[(1)] = cljs.core.first((state_53014[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56460 = state_53014;
state_53014 = G__56460;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = function(state_53014){
switch(arguments.length){
case 0:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1.call(this,state_53014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0;
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1;
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53021 = f__27596__auto__();
(statearr_53021[(6)] = c__27595__auto__);

return statearr_53021;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53058){
var state_val_53059 = (state_53058[(1)]);
if((state_val_53059 === (7))){
var inst_53054 = (state_53058[(2)]);
var state_53058__$1 = state_53058;
var statearr_53060_56462 = state_53058__$1;
(statearr_53060_56462[(2)] = inst_53054);

(statearr_53060_56462[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (1))){
var inst_53023 = filetxn.renamed_QMARK_();
var state_53058__$1 = state_53058;
if(cljs.core.truth_(inst_53023)){
var statearr_53061_56463 = state_53058__$1;
(statearr_53061_56463[(1)] = (2));

} else {
var statearr_53062_56464 = state_53058__$1;
(statearr_53062_56464[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (4))){
var inst_53056 = (state_53058[(2)]);
var state_53058__$1 = state_53058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53058__$1,inst_53056);
} else {
if((state_val_53059 === (15))){
var inst_53040 = (state_53058[(7)]);
var state_53058__$1 = state_53058;
var statearr_53063_56469 = state_53058__$1;
(statearr_53063_56469[(2)] = inst_53040);

(statearr_53063_56469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (13))){
var inst_53038 = (state_53058[(8)]);
var state_53058__$1 = state_53058;
var statearr_53064_56470 = state_53058__$1;
(statearr_53064_56470[(2)] = inst_53038);

(statearr_53064_56470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (6))){
var inst_53029 = filetxn.updated_QMARK_;
var state_53058__$1 = state_53058;
if(cljs.core.truth_(inst_53029)){
var statearr_53065_56471 = state_53058__$1;
(statearr_53065_56471[(1)] = (8));

} else {
var statearr_53066_56472 = state_53058__$1;
(statearr_53066_56472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (17))){
var inst_53046 = (state_53058[(2)]);
var state_53058__$1 = state_53058;
var statearr_53067_56473 = state_53058__$1;
(statearr_53067_56473[(2)] = inst_53046);

(statearr_53067_56473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (3))){
var inst_53026 = filetxn.deleted_QMARK_;
var state_53058__$1 = state_53058;
if(cljs.core.truth_(inst_53026)){
var statearr_53068_56475 = state_53058__$1;
(statearr_53068_56475[(1)] = (5));

} else {
var statearr_53069_56476 = state_53058__$1;
(statearr_53069_56476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (12))){
var inst_53037 = (state_53058[(9)]);
var inst_53040 = (state_53058[(7)]);
var inst_53040__$1 = (inst_53037 == null);
var state_53058__$1 = (function (){var statearr_53070 = state_53058;
(statearr_53070[(7)] = inst_53040__$1);

return statearr_53070;
})();
if(cljs.core.truth_(inst_53040__$1)){
var statearr_53071_56477 = state_53058__$1;
(statearr_53071_56477[(1)] = (15));

} else {
var statearr_53072_56478 = state_53058__$1;
(statearr_53072_56478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (2))){
var state_53058__$1 = state_53058;
var statearr_53073_56479 = state_53058__$1;
(statearr_53073_56479[(2)] = false);

(statearr_53073_56479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (11))){
var inst_53038 = (state_53058[(8)]);
var inst_53037 = (state_53058[(2)]);
var inst_53038__$1 = origin_db_content;
var state_53058__$1 = (function (){var statearr_53074 = state_53058;
(statearr_53074[(8)] = inst_53038__$1);

(statearr_53074[(9)] = inst_53037);

return statearr_53074;
})();
if(cljs.core.truth_(inst_53038__$1)){
var statearr_53075_56481 = state_53058__$1;
(statearr_53075_56481[(1)] = (12));

} else {
var statearr_53076_56482 = state_53058__$1;
(statearr_53076_56482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (9))){
var state_53058__$1 = state_53058;
var statearr_53077_56483 = state_53058__$1;
(statearr_53077_56483[(2)] = null);

(statearr_53077_56483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (5))){
var state_53058__$1 = state_53058;
var statearr_53078_56485 = state_53058__$1;
(statearr_53078_56485[(2)] = false);

(statearr_53078_56485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (14))){
var inst_53049 = (state_53058[(2)]);
var state_53058__$1 = state_53058;
var statearr_53079_56486 = state_53058__$1;
(statearr_53079_56486[(2)] = inst_53049);

(statearr_53079_56486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (16))){
var inst_53037 = (state_53058[(9)]);
var inst_53043 = frontend.diff.diff(origin_db_content,inst_53037);
var inst_53044 = cljs.core.some(new cljs.core.Keyword(null,"removed","removed",609626430),inst_53043);
var state_53058__$1 = state_53058;
var statearr_53080_56488 = state_53058__$1;
(statearr_53080_56488[(2)] = inst_53044);

(statearr_53080_56488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (10))){
var inst_53052 = (state_53058[(2)]);
var state_53058__$1 = state_53058;
var statearr_53081_56489 = state_53058__$1;
(statearr_53081_56489[(2)] = inst_53052);

(statearr_53081_56489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53059 === (8))){
var inst_53031 = frontend.fs.sync.relative_path(filetxn);
var inst_53032 = frontend.state.get_current_repo();
var inst_53033 = frontend.config.get_file_path(inst_53032,inst_53031);
var inst_53034 = frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",inst_53033);
var inst_53035 = cljs.core.async.interop.p__GT_c(inst_53034);
var state_53058__$1 = state_53058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53058__$1,(11),inst_53035);
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
var statearr_53082 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53082[(0)] = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__);

(statearr_53082[(1)] = (1));

return statearr_53082;
});
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1 = (function (state_53058){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53058);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53083){var ex__27576__auto__ = e53083;
var statearr_53084_56490 = state_53058;
(statearr_53084_56490[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53058[(4)]))){
var statearr_53085_56491 = state_53058;
(statearr_53085_56491[(1)] = cljs.core.first((state_53058[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56492 = state_53058;
state_53058 = G__56492;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__ = function(state_53058){
switch(arguments.length){
case 0:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1.call(this,state_53058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53086 = f__27596__auto__();
(statearr_53086[(6)] = c__27595__auto__);

return statearr_53086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.apply_filetxns = (function frontend$fs$sync$apply_filetxns(graph_uuid,base_path,filetxns){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53221){
var state_val_53222 = (state_53221[(1)]);
if((state_val_53222 === (7))){
var inst_53092 = (state_53221[(7)]);
var inst_53093 = (state_53221[(8)]);
var inst_53101 = (state_53221[(2)]);
var inst_53102 = frontend.fs.sync.relative_path(inst_53092);
var inst_53103 = frontend.fs.sync.relative_path(inst_53093);
var inst_53104 = frontend.fs.sync.rename_local_file(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53102,inst_53103);
var state_53221__$1 = (function (){var statearr_53226 = state_53221;
(statearr_53226[(9)] = inst_53101);

return statearr_53226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53221__$1,(8),inst_53104);
} else {
if((state_val_53222 === (20))){
var inst_53125 = (state_53221[(10)]);
var inst_53124 = (state_53221[(11)]);
var inst_53127 = (state_53221[(12)]);
var inst_53126 = (state_53221[(13)]);
var inst_53144 = (state_53221[(2)]);
var inst_53145 = (inst_53127 + (1));
var tmp53223 = inst_53125;
var tmp53224 = inst_53124;
var tmp53225 = inst_53126;
var inst_53124__$1 = tmp53224;
var inst_53125__$1 = tmp53223;
var inst_53126__$1 = tmp53225;
var inst_53127__$1 = inst_53145;
var state_53221__$1 = (function (){var statearr_53227 = state_53221;
(statearr_53227[(10)] = inst_53125__$1);

(statearr_53227[(11)] = inst_53124__$1);

(statearr_53227[(14)] = inst_53144);

(statearr_53227[(12)] = inst_53127__$1);

(statearr_53227[(13)] = inst_53126__$1);

return statearr_53227;
})();
var statearr_53228_56498 = state_53221__$1;
(statearr_53228_56498[(2)] = null);

(statearr_53228_56498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (27))){
var inst_53161 = (state_53221[(15)]);
var inst_53162 = (state_53221[(16)]);
var inst_53111 = (state_53221[(17)]);
var inst_53165 = frontend.fs.sync.relative_path(inst_53161);
var inst_53166 = frontend.fs.sync.add_new_version_file(inst_53111,inst_53165,inst_53162);
var state_53221__$1 = state_53221;
var statearr_53229_56499 = state_53221__$1;
(statearr_53229_56499[(2)] = inst_53166);

(statearr_53229_56499[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (1))){
var inst_53088 = cljs.core.first(filetxns);
var inst_53089 = inst_53088.renamed_QMARK_();
var state_53221__$1 = state_53221;
if(cljs.core.truth_(inst_53089)){
var statearr_53230_56501 = state_53221__$1;
(statearr_53230_56501[(1)] = (2));

} else {
var statearr_53231_56502 = state_53221__$1;
(statearr_53231_56502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (24))){
var inst_53148 = (state_53221[(18)]);
var inst_53152 = cljs.core.chunk_first(inst_53148);
var inst_53153 = cljs.core.chunk_rest(inst_53148);
var inst_53154 = cljs.core.count(inst_53152);
var inst_53124 = inst_53153;
var inst_53125 = inst_53152;
var inst_53126 = inst_53154;
var inst_53127 = (0);
var state_53221__$1 = (function (){var statearr_53232 = state_53221;
(statearr_53232[(10)] = inst_53125);

(statearr_53232[(11)] = inst_53124);

(statearr_53232[(12)] = inst_53127);

(statearr_53232[(13)] = inst_53126);

return statearr_53232;
})();
var statearr_53233_56503 = state_53221__$1;
(statearr_53233_56503[(2)] = null);

(statearr_53233_56503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (39))){
var inst_53208 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
if(cljs.core.truth_(inst_53208)){
var statearr_53234_56504 = state_53221__$1;
(statearr_53234_56504[(1)] = (40));

} else {
var statearr_53235_56505 = state_53221__$1;
(statearr_53235_56505[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (4))){
var inst_53219 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53221__$1,inst_53219);
} else {
if((state_val_53222 === (15))){
var inst_53125 = (state_53221[(10)]);
var inst_53137 = (state_53221[(19)]);
var inst_53127 = (state_53221[(12)]);
var inst_53136 = (state_53221[(20)]);
var inst_53135 = cljs.core._nth(inst_53125,inst_53127);
var inst_53136__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53135,(0),null);
var inst_53137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53135,(1),null);
var inst_53138 = frontend.fs.sync.need_add_version_file_QMARK_(inst_53136__$1,inst_53137__$1);
var state_53221__$1 = (function (){var statearr_53236 = state_53221;
(statearr_53236[(19)] = inst_53137__$1);

(statearr_53236[(20)] = inst_53136__$1);

return statearr_53236;
})();
if(cljs.core.truth_(inst_53138)){
var statearr_53237_56511 = state_53221__$1;
(statearr_53237_56511[(1)] = (18));

} else {
var statearr_53238_56512 = state_53221__$1;
(statearr_53238_56512[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (21))){
var inst_53148 = (state_53221[(18)]);
var inst_53150 = cljs.core.chunked_seq_QMARK_(inst_53148);
var state_53221__$1 = state_53221;
if(inst_53150){
var statearr_53239_56513 = state_53221__$1;
(statearr_53239_56513[(1)] = (24));

} else {
var statearr_53240_56514 = state_53221__$1;
(statearr_53240_56514[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (31))){
var state_53221__$1 = state_53221;
var statearr_53241_56515 = state_53221__$1;
(statearr_53241_56515[(2)] = null);

(statearr_53241_56515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (32))){
var inst_53215 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53242_56516 = state_53221__$1;
(statearr_53242_56516[(2)] = inst_53215);

(statearr_53242_56516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (40))){
var state_53221__$1 = state_53221;
var statearr_53243_56517 = state_53221__$1;
(statearr_53243_56517[(2)] = true);

(statearr_53243_56517[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (33))){
var state_53221__$1 = state_53221;
var statearr_53244_56518 = state_53221__$1;
(statearr_53244_56518[(2)] = null);

(statearr_53244_56518[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (13))){
var inst_53127 = (state_53221[(12)]);
var inst_53126 = (state_53221[(13)]);
var inst_53129 = (inst_53127 < inst_53126);
var inst_53130 = inst_53129;
var state_53221__$1 = state_53221;
if(cljs.core.truth_(inst_53130)){
var statearr_53245_56519 = state_53221__$1;
(statearr_53245_56519[(1)] = (15));

} else {
var statearr_53246_56520 = state_53221__$1;
(statearr_53246_56520[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (22))){
var state_53221__$1 = state_53221;
var statearr_53247_56523 = state_53221__$1;
(statearr_53247_56523[(2)] = null);

(statearr_53247_56523[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (36))){
var inst_53201 = (state_53221[(21)]);
var inst_53200 = (state_53221[(22)]);
var inst_53200__$1 = (state_53221[(2)]);
var inst_53201__$1 = (inst_53200__$1 instanceof cljs.core.ExceptionInfo);
var state_53221__$1 = (function (){var statearr_53248 = state_53221;
(statearr_53248[(21)] = inst_53201__$1);

(statearr_53248[(22)] = inst_53200__$1);

return statearr_53248;
})();
if(cljs.core.truth_(inst_53201__$1)){
var statearr_53249_56526 = state_53221__$1;
(statearr_53249_56526[(1)] = (37));

} else {
var statearr_53250_56527 = state_53221__$1;
(statearr_53250_56527[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (41))){
var inst_53200 = (state_53221[(22)]);
var state_53221__$1 = state_53221;
var statearr_53251_56528 = state_53221__$1;
(statearr_53251_56528[(2)] = inst_53200);

(statearr_53251_56528[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (29))){
var inst_53148 = (state_53221[(18)]);
var inst_53169 = (state_53221[(2)]);
var inst_53170 = cljs.core.next(inst_53148);
var inst_53124 = inst_53170;
var inst_53125 = null;
var inst_53126 = (0);
var inst_53127 = (0);
var state_53221__$1 = (function (){var statearr_53252 = state_53221;
(statearr_53252[(10)] = inst_53125);

(statearr_53252[(11)] = inst_53124);

(statearr_53252[(12)] = inst_53127);

(statearr_53252[(23)] = inst_53169);

(statearr_53252[(13)] = inst_53126);

return statearr_53252;
})();
var statearr_53253_56529 = state_53221__$1;
(statearr_53253_56529[(2)] = null);

(statearr_53253_56529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (6))){
var inst_53098 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_53099 = (function(){throw inst_53098})();
var state_53221__$1 = state_53221;
var statearr_53254_56530 = state_53221__$1;
(statearr_53254_56530[(2)] = inst_53099);

(statearr_53254_56530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (28))){
var state_53221__$1 = state_53221;
var statearr_53255_56533 = state_53221__$1;
(statearr_53255_56533[(2)] = null);

(statearr_53255_56533[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (25))){
var inst_53161 = (state_53221[(15)]);
var inst_53162 = (state_53221[(16)]);
var inst_53148 = (state_53221[(18)]);
var inst_53160 = cljs.core.first(inst_53148);
var inst_53161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53160,(0),null);
var inst_53162__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53160,(1),null);
var inst_53163 = frontend.fs.sync.need_add_version_file_QMARK_(inst_53161__$1,inst_53162__$1);
var state_53221__$1 = (function (){var statearr_53256 = state_53221;
(statearr_53256[(15)] = inst_53161__$1);

(statearr_53256[(16)] = inst_53162__$1);

return statearr_53256;
})();
if(cljs.core.truth_(inst_53163)){
var statearr_53257_56536 = state_53221__$1;
(statearr_53257_56536[(1)] = (27));

} else {
var statearr_53258_56537 = state_53221__$1;
(statearr_53258_56537[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (34))){
var inst_53190 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_53191 = (function(){throw inst_53190})();
var state_53221__$1 = state_53221;
var statearr_53259_56539 = state_53221__$1;
(statearr_53259_56539[(2)] = inst_53191);

(statearr_53259_56539[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (17))){
var inst_53178 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53260_56540 = state_53221__$1;
(statearr_53260_56540[(2)] = inst_53178);

(statearr_53260_56540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (3))){
var inst_53108 = cljs.core.first(filetxns);
var inst_53109 = inst_53108.updated_QMARK_;
var state_53221__$1 = state_53221;
if(cljs.core.truth_(inst_53109)){
var statearr_53261_56541 = state_53221__$1;
(statearr_53261_56541[(1)] = (9));

} else {
var statearr_53263_56542 = state_53221__$1;
(statearr_53263_56542[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (12))){
var inst_53114 = (state_53221[(24)]);
var inst_53118 = (state_53221[(2)]);
var inst_53123 = cljs.core.seq(inst_53114);
var inst_53124 = inst_53123;
var inst_53125 = null;
var inst_53126 = (0);
var inst_53127 = (0);
var state_53221__$1 = (function (){var statearr_53264 = state_53221;
(statearr_53264[(10)] = inst_53125);

(statearr_53264[(25)] = inst_53118);

(statearr_53264[(11)] = inst_53124);

(statearr_53264[(12)] = inst_53127);

(statearr_53264[(13)] = inst_53126);

return statearr_53264;
})();
var statearr_53265_56543 = state_53221__$1;
(statearr_53265_56543[(2)] = null);

(statearr_53265_56543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (2))){
var inst_53091 = cljs.core.first(filetxns);
var inst_53092 = inst_53091.from_path;
var inst_53093 = inst_53091.to_path;
var inst_53094 = cljs.core.count(filetxns);
var inst_53095 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_53094);
var state_53221__$1 = (function (){var statearr_53266 = state_53221;
(statearr_53266[(7)] = inst_53092);

(statearr_53266[(8)] = inst_53093);

return statearr_53266;
})();
if(inst_53095){
var statearr_53267_56544 = state_53221__$1;
(statearr_53267_56544[(1)] = (5));

} else {
var statearr_53268_56545 = state_53221__$1;
(statearr_53268_56545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (23))){
var inst_53176 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53269_56546 = state_53221__$1;
(statearr_53269_56546[(2)] = inst_53176);

(statearr_53269_56546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (35))){
var inst_53185 = (state_53221[(26)]);
var inst_53193 = (state_53221[(2)]);
var inst_53194 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53195 = frontend.fs.sync.relative_path(inst_53185);
var inst_53196 = [inst_53195];
var inst_53197 = (new cljs.core.PersistentVector(null,1,(5),inst_53194,inst_53196,null));
var inst_53198 = frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53197);
var state_53221__$1 = (function (){var statearr_53270 = state_53221;
(statearr_53270[(27)] = inst_53193);

return statearr_53270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53221__$1,(36),inst_53198);
} else {
if((state_val_53222 === (19))){
var state_53221__$1 = state_53221;
var statearr_53271_56549 = state_53221__$1;
(statearr_53271_56549[(2)] = null);

(statearr_53271_56549[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (11))){
var inst_53217 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53272_56551 = state_53221__$1;
(statearr_53272_56551[(2)] = inst_53217);

(statearr_53272_56551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (9))){
var inst_53111 = (state_53221[(17)]);
var inst_53111__$1 = frontend.state.get_current_repo();
var inst_53112 = (function (){var repo = inst_53111__$1;
return (function (p1__53087_SHARP_){
if(frontend.fs.sync.is_journals_or_pages_QMARK_(p1__53087_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53087_SHARP_,(function (){var G__53275 = repo;
var G__53276 = frontend.config.get_file_path(repo,frontend.fs.sync.relative_path(p1__53087_SHARP_));
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(G__53275,G__53276) : frontend.db.get_file.call(null,G__53275,G__53276));
})()], null);
} else {
return null;
}
});
})();
var inst_53113 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_53112,filetxns);
var inst_53114 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,inst_53113);
var inst_53115 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns);
var inst_53116 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53115);
var state_53221__$1 = (function (){var statearr_53277 = state_53221;
(statearr_53277[(17)] = inst_53111__$1);

(statearr_53277[(24)] = inst_53114);

return statearr_53277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53221__$1,(12),inst_53116);
} else {
if((state_val_53222 === (5))){
var state_53221__$1 = state_53221;
var statearr_53278_56555 = state_53221__$1;
(statearr_53278_56555[(2)] = null);

(statearr_53278_56555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (14))){
var inst_53180 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53281_56557 = state_53221__$1;
(statearr_53281_56557[(2)] = inst_53180);

(statearr_53281_56557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (26))){
var inst_53173 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53282_56559 = state_53221__$1;
(statearr_53282_56559[(2)] = inst_53173);

(statearr_53282_56559[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (16))){
var inst_53124 = (state_53221[(11)]);
var inst_53148 = (state_53221[(18)]);
var inst_53148__$1 = cljs.core.seq(inst_53124);
var state_53221__$1 = (function (){var statearr_53283 = state_53221;
(statearr_53283[(18)] = inst_53148__$1);

return statearr_53283;
})();
if(inst_53148__$1){
var statearr_53285_56561 = state_53221__$1;
(statearr_53285_56561[(1)] = (21));

} else {
var statearr_53286_56562 = state_53221__$1;
(statearr_53286_56562[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (38))){
var inst_53201 = (state_53221[(21)]);
var state_53221__$1 = state_53221;
var statearr_53287_56563 = state_53221__$1;
(statearr_53287_56563[(2)] = inst_53201);

(statearr_53287_56563[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (30))){
var inst_53185 = cljs.core.first(filetxns);
var inst_53186 = cljs.core.count(filetxns);
var inst_53187 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_53186);
var state_53221__$1 = (function (){var statearr_53288 = state_53221;
(statearr_53288[(26)] = inst_53185);

return statearr_53288;
})();
if(inst_53187){
var statearr_53289_56564 = state_53221__$1;
(statearr_53289_56564[(1)] = (33));

} else {
var statearr_53290_56565 = state_53221__$1;
(statearr_53290_56565[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (10))){
var inst_53182 = cljs.core.first(filetxns);
var inst_53183 = inst_53182.deleted_QMARK_;
var state_53221__$1 = state_53221;
if(cljs.core.truth_(inst_53183)){
var statearr_53293_56566 = state_53221__$1;
(statearr_53293_56566[(1)] = (30));

} else {
var statearr_53295_56567 = state_53221__$1;
(statearr_53295_56567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (18))){
var inst_53137 = (state_53221[(19)]);
var inst_53111 = (state_53221[(17)]);
var inst_53136 = (state_53221[(20)]);
var inst_53140 = frontend.fs.sync.relative_path(inst_53136);
var inst_53141 = frontend.fs.sync.add_new_version_file(inst_53111,inst_53140,inst_53137);
var state_53221__$1 = state_53221;
var statearr_53296_56569 = state_53221__$1;
(statearr_53296_56569[(2)] = inst_53141);

(statearr_53296_56569[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (42))){
var inst_53212 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53299_56571 = state_53221__$1;
(statearr_53299_56571[(2)] = inst_53212);

(statearr_53299_56571[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (37))){
var inst_53200 = (state_53221[(22)]);
var inst_53203 = cljs.core.ex_cause(inst_53200);
var inst_53204 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53203);
var inst_53205 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_53204,"No such file or directory");
var state_53221__$1 = state_53221;
var statearr_53300_56572 = state_53221__$1;
(statearr_53300_56572[(2)] = inst_53205);

(statearr_53300_56572[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53222 === (8))){
var inst_53106 = (state_53221[(2)]);
var state_53221__$1 = state_53221;
var statearr_53336_56573 = state_53221__$1;
(statearr_53336_56573[(2)] = inst_53106);

(statearr_53336_56573[(1)] = (4));


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
var statearr_53342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53342[(0)] = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__);

(statearr_53342[(1)] = (1));

return statearr_53342;
});
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1 = (function (state_53221){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53221);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53347){var ex__27576__auto__ = e53347;
var statearr_53348_56575 = state_53221;
(statearr_53348_56575[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53221[(4)]))){
var statearr_53350_56576 = state_53221;
(statearr_53350_56576[(1)] = cljs.core.first((state_53221[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56577 = state_53221;
state_53221 = G__56577;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__ = function(state_53221){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1.call(this,state_53221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53354 = f__27596__auto__();
(statearr_53354[(6)] = c__27595__auto__);

return statearr_53354;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53459){
var state_val_53460 = (state_53459[(1)]);
if((state_val_53460 === (7))){
var inst_53378 = (state_53459[(7)]);
var inst_53390 = (state_53459[(8)]);
var inst_53388 = (state_53459[(9)]);
var inst_53388__$1 = cljs.core.first(inst_53378);
var inst_53389 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_53388__$1);
var inst_53390__$1 = before_f;
var state_53459__$1 = (function (){var statearr_53465 = state_53459;
(statearr_53465[(10)] = inst_53389);

(statearr_53465[(8)] = inst_53390__$1);

(statearr_53465[(9)] = inst_53388__$1);

return statearr_53465;
})();
if(cljs.core.truth_(inst_53390__$1)){
var statearr_53466_56581 = state_53459__$1;
(statearr_53466_56581[(1)] = (10));

} else {
var statearr_53467_56582 = state_53459__$1;
(statearr_53467_56582[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (20))){
var inst_53389 = (state_53459[(10)]);
var inst_53414 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__remove_current_remote__GT_local_files,inst_53389);
var state_53459__$1 = state_53459;
var statearr_53468_56583 = state_53459__$1;
(statearr_53468_56583[(2)] = inst_53414);

(statearr_53468_56583[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (27))){
var inst_53429 = (state_53459[(11)]);
var state_53459__$1 = state_53459;
var statearr_53469_56584 = state_53459__$1;
(statearr_53469_56584[(2)] = inst_53429);

(statearr_53469_56584[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (1))){
var inst_53368 = filetxns_partitions;
var inst_53378 = inst_53368;
var state_53459__$1 = (function (){var statearr_53470 = state_53459;
(statearr_53470[(7)] = inst_53378);

return statearr_53470;
})();
var statearr_53471_56585 = state_53459__$1;
(statearr_53471_56585[(2)] = null);

(statearr_53471_56585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (24))){
var inst_53412 = (state_53459[(12)]);
var inst_53429 = (state_53459[(11)]);
var inst_53389 = (state_53459[(10)]);
var inst_53417 = (state_53459[(13)]);
var inst_53378 = (state_53459[(7)]);
var inst_53388 = (state_53459[(9)]);
var inst_53426 = (function (){var filetxns_partitions_STAR_ = inst_53378;
var filetxns = inst_53388;
var paths = inst_53389;
var _ = inst_53417;
var r = inst_53412;
return (function (p1__53361_SHARP_){
return p1__53361_SHARP_.txid;
});
})();
var inst_53427 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_53426,inst_53388);
var inst_53428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,inst_53427);
var inst_53429__$1 = after_f;
var state_53459__$1 = (function (){var statearr_53472 = state_53459;
(statearr_53472[(11)] = inst_53429__$1);

(statearr_53472[(14)] = inst_53428);

return statearr_53472;
})();
if(cljs.core.truth_(inst_53429__$1)){
var statearr_53473_56586 = state_53459__$1;
(statearr_53473_56586[(1)] = (26));

} else {
var statearr_53474_56587 = state_53459__$1;
(statearr_53474_56587[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (4))){
var inst_53382 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_53383 = [true];
var inst_53384 = cljs.core.PersistentHashMap.fromArrays(inst_53382,inst_53383);
var state_53459__$1 = state_53459;
var statearr_53476_56588 = state_53459__$1;
(statearr_53476_56588[(2)] = inst_53384);

(statearr_53476_56588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (15))){
var inst_53402 = (state_53459[(2)]);
var state_53459__$1 = (function (){var statearr_53478 = state_53459;
(statearr_53478[(15)] = inst_53402);

return statearr_53478;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_53479_56589 = state_53459__$1;
(statearr_53479_56589[(1)] = (16));

} else {
var statearr_53480_56590 = state_53459__$1;
(statearr_53480_56590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (21))){
var state_53459__$1 = state_53459;
var statearr_53482_56591 = state_53459__$1;
(statearr_53482_56591[(2)] = null);

(statearr_53482_56591[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (31))){
var inst_53440 = (state_53459[(2)]);
var state_53459__$1 = (function (){var statearr_53483 = state_53459;
(statearr_53483[(16)] = inst_53440);

return statearr_53483;
})();
if(cljs.core.truth_(_STAR_txid)){
var statearr_53484_56592 = state_53459__$1;
(statearr_53484_56592[(1)] = (32));

} else {
var statearr_53487_56593 = state_53459__$1;
(statearr_53487_56593[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (32))){
var inst_53428 = (state_53459[(14)]);
var inst_53442 = cljs.core.reset_BANG_(_STAR_txid,inst_53428);
var inst_53443 = frontend.fs.sync.update_graphs_txid_BANG_(inst_53428,graph_uuid,user_uuid,repo);
var state_53459__$1 = (function (){var statearr_53492 = state_53459;
(statearr_53492[(17)] = inst_53442);

return statearr_53492;
})();
var statearr_53493_56594 = state_53459__$1;
(statearr_53493_56594[(2)] = inst_53443);

(statearr_53493_56594[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (33))){
var state_53459__$1 = state_53459;
var statearr_53496_56597 = state_53459__$1;
(statearr_53496_56597[(2)] = null);

(statearr_53496_56597[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (13))){
var inst_53388 = (state_53459[(9)]);
var inst_53399 = (before_f.cljs$core$IFn$_invoke$arity$1 ? before_f.cljs$core$IFn$_invoke$arity$1(inst_53388) : before_f.call(null,inst_53388));
var state_53459__$1 = state_53459;
var statearr_53503_56598 = state_53459__$1;
(statearr_53503_56598[(2)] = inst_53399);

(statearr_53503_56598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (22))){
var inst_53412 = (state_53459[(12)]);
var inst_53417 = (state_53459[(2)]);
var inst_53423 = (inst_53412 instanceof cljs.core.ExceptionInfo);
var state_53459__$1 = (function (){var statearr_53524 = state_53459;
(statearr_53524[(13)] = inst_53417);

return statearr_53524;
})();
if(cljs.core.truth_(inst_53423)){
var statearr_53525_56599 = state_53459__$1;
(statearr_53525_56599[(1)] = (23));

} else {
var statearr_53526_56600 = state_53459__$1;
(statearr_53526_56600[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (29))){
var inst_53388 = (state_53459[(9)]);
var inst_53437 = (after_f.cljs$core$IFn$_invoke$arity$1 ? after_f.cljs$core$IFn$_invoke$arity$1(inst_53388) : after_f.call(null,inst_53388));
var state_53459__$1 = state_53459;
var statearr_53527_56601 = state_53459__$1;
(statearr_53527_56601[(2)] = inst_53437);

(statearr_53527_56601[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (6))){
var inst_53455 = (state_53459[(2)]);
var state_53459__$1 = state_53459;
var statearr_53528_56602 = state_53459__$1;
(statearr_53528_56602[(2)] = inst_53455);

(statearr_53528_56602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (28))){
var inst_53434 = (state_53459[(2)]);
var state_53459__$1 = state_53459;
if(cljs.core.truth_(inst_53434)){
var statearr_53529_56603 = state_53459__$1;
(statearr_53529_56603[(1)] = (29));

} else {
var statearr_53530_56604 = state_53459__$1;
(statearr_53530_56604[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (25))){
var inst_53450 = (state_53459[(2)]);
var state_53459__$1 = state_53459;
var statearr_53531_56605 = state_53459__$1;
(statearr_53531_56605[(2)] = inst_53450);

(statearr_53531_56605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (34))){
var inst_53378 = (state_53459[(7)]);
var inst_53446 = (state_53459[(2)]);
var inst_53447 = cljs.core.next(inst_53378);
var inst_53378__$1 = inst_53447;
var state_53459__$1 = (function (){var statearr_53532 = state_53459;
(statearr_53532[(18)] = inst_53446);

(statearr_53532[(7)] = inst_53378__$1);

return statearr_53532;
})();
var statearr_53533_56609 = state_53459__$1;
(statearr_53533_56609[(2)] = null);

(statearr_53533_56609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (17))){
var state_53459__$1 = state_53459;
var statearr_53535_56610 = state_53459__$1;
(statearr_53535_56610[(2)] = null);

(statearr_53535_56610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (3))){
var inst_53457 = (state_53459[(2)]);
var state_53459__$1 = state_53459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53459__$1,inst_53457);
} else {
if((state_val_53460 === (12))){
var inst_53397 = (state_53459[(2)]);
var state_53459__$1 = state_53459;
if(cljs.core.truth_(inst_53397)){
var statearr_53537_56611 = state_53459__$1;
(statearr_53537_56611[(1)] = (13));

} else {
var statearr_53539_56612 = state_53459__$1;
(statearr_53539_56612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (2))){
var inst_53380 = cljs.core.deref(_STAR_stopped);
var state_53459__$1 = state_53459;
if(cljs.core.truth_(inst_53380)){
var statearr_53541_56614 = state_53459__$1;
(statearr_53541_56614[(1)] = (4));

} else {
var statearr_53542_56615 = state_53459__$1;
(statearr_53542_56615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (23))){
var inst_53412 = (state_53459[(12)]);
var state_53459__$1 = state_53459;
var statearr_53543_56616 = state_53459__$1;
(statearr_53543_56616[(2)] = inst_53412);

(statearr_53543_56616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (19))){
var inst_53412 = (state_53459[(2)]);
var state_53459__$1 = (function (){var statearr_53544 = state_53459;
(statearr_53544[(12)] = inst_53412);

return statearr_53544;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_53545_56620 = state_53459__$1;
(statearr_53545_56620[(1)] = (20));

} else {
var statearr_53546_56622 = state_53459__$1;
(statearr_53546_56622[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (11))){
var inst_53390 = (state_53459[(8)]);
var state_53459__$1 = state_53459;
var statearr_53547_56623 = state_53459__$1;
(statearr_53547_56623[(2)] = inst_53390);

(statearr_53547_56623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (9))){
var inst_53453 = (state_53459[(2)]);
var state_53459__$1 = state_53459;
var statearr_53548_56624 = state_53459__$1;
(statearr_53548_56624[(2)] = inst_53453);

(statearr_53548_56624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (5))){
var inst_53378 = (state_53459[(7)]);
var inst_53386 = cljs.core.seq(inst_53378);
var state_53459__$1 = state_53459;
if(inst_53386){
var statearr_53549_56625 = state_53459__$1;
(statearr_53549_56625[(1)] = (7));

} else {
var statearr_53550_56626 = state_53459__$1;
(statearr_53550_56626[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (14))){
var state_53459__$1 = state_53459;
var statearr_53551_56627 = state_53459__$1;
(statearr_53551_56627[(2)] = null);

(statearr_53551_56627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (26))){
var inst_53431 = cljs.core.fn_QMARK_(after_f);
var state_53459__$1 = state_53459;
var statearr_53553_56629 = state_53459__$1;
(statearr_53553_56629[(2)] = inst_53431);

(statearr_53553_56629[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (16))){
var inst_53389 = (state_53459[(10)]);
var inst_53404 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__add_current_remote__GT_local_files,inst_53389);
var state_53459__$1 = state_53459;
var statearr_53554_56631 = state_53459__$1;
(statearr_53554_56631[(2)] = inst_53404);

(statearr_53554_56631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (30))){
var state_53459__$1 = state_53459;
var statearr_53555_56632 = state_53459__$1;
(statearr_53555_56632[(2)] = null);

(statearr_53555_56632[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (10))){
var inst_53394 = cljs.core.fn_QMARK_(before_f);
var state_53459__$1 = state_53459;
var statearr_53556_56633 = state_53459__$1;
(statearr_53556_56633[(2)] = inst_53394);

(statearr_53556_56633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53460 === (18))){
var inst_53388 = (state_53459[(9)]);
var inst_53407 = (state_53459[(2)]);
var inst_53410 = frontend.fs.sync.apply_filetxns(graph_uuid,base_path,inst_53388);
var state_53459__$1 = (function (){var statearr_53557 = state_53459;
(statearr_53557[(19)] = inst_53407);

return statearr_53557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53459__$1,(19),inst_53410);
} else {
if((state_val_53460 === (8))){
var state_53459__$1 = state_53459;
var statearr_53558_56636 = state_53459__$1;
(statearr_53558_56636[(2)] = null);

(statearr_53558_56636[(1)] = (9));


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
var statearr_53560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53560[(0)] = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__);

(statearr_53560[(1)] = (1));

return statearr_53560;
});
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1 = (function (state_53459){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53459);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53561){var ex__27576__auto__ = e53561;
var statearr_53562_56637 = state_53459;
(statearr_53562_56637[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53459[(4)]))){
var statearr_53563_56638 = state_53459;
(statearr_53563_56638[(1)] = cljs.core.first((state_53459[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56639 = state_53459;
state_53459 = G__56639;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__ = function(state_53459){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1.call(this,state_53459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53564 = f__27596__auto__();
(statearr_53564[(6)] = c__27595__auto__);

return statearr_53564;
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
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53566 = cljs.core.get_global_hierarchy;
return (fexpr__53566.cljs$core$IFn$_invoke$arity$0 ? fexpr__53566.cljs$core$IFn$_invoke$arity$0() : fexpr__53566.call(null));
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
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"txid","txid",1606205478),(function (p__53581){
var vec__53582 = p__53581;
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53582,(0),null);
var remote__GT_local_syncer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53582,(1),null);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53593){
var state_val_53594 = (state_53593[(1)]);
if((state_val_53594 === (1))){
var state_53593__$1 = state_53593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53593__$1,(2),c);
} else {
if((state_val_53594 === (2))){
var inst_53590 = (state_53593[(2)]);
var inst_53591 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_53590);
var state_53593__$1 = state_53593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53593__$1,inst_53591);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_53595 = [null,null,null,null,null,null,null];
(statearr_53595[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53595[(1)] = (1));

return statearr_53595;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53593){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53593);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53596){var ex__27576__auto__ = e53596;
var statearr_53597_56641 = state_53593;
(statearr_53597_56641[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53593[(4)]))){
var statearr_53598_56644 = state_53593;
(statearr_53598_56644[(1)] = cljs.core.first((state_53593[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56645 = state_53593;
state_53593 = G__56645;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53593){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53599 = f__27596__auto__();
(statearr_53599[(6)] = c__27595__auto__);

return statearr_53599;
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
var G__53603 = e.type;
switch (G__53603) {
case "add":
case "change":
return new cljs.core.Keyword(null,"add-or-change","add-or-change",1006483131);

break;
case "unlink":
return new cljs.core.Keyword(null,"unlink","unlink",-1436843875);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53603)].join('')));

}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__53602_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,p1__53602_SHARP_);
})),cljs.core.cat);
});
frontend.fs.sync.local_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
/**
 * file-watcher callback
 */
frontend.fs.sync.file_watch_handler = (function frontend$fs$sync$file_watch_handler(type,p__53609){
var map__53610 = p__53609;
var map__53610__$1 = cljs.core.__destructure_map(map__53610);
var _payload = map__53610__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"_content","_content",-555820160));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
if(cljs.core.truth_((function (){var G__53611 = frontend.state.get_file_sync_state();
var G__53611__$1 = (((G__53611 == null))?null:(frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1(G__53611) : frontend.fs.sync.sync_state__stopped_QMARK_.call(null,G__53611)));
if((G__53611__$1 == null)){
return null;
} else {
return cljs.core.not(G__53611__$1);
}
})())){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53616){
var state_val_53617 = (state_53616[(1)]);
if((state_val_53617 === (1))){
var inst_53612 = frontend.fs.sync.__GT_FileChangeEvent(type,dir,path,stat);
var state_53616__$1 = state_53616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53616__$1,(2),frontend.fs.sync.local_changes_chan,inst_53612);
} else {
if((state_val_53617 === (2))){
var inst_53614 = (state_53616[(2)]);
var state_53616__$1 = state_53616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53616__$1,inst_53614);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0 = (function (){
var statearr_53619 = [null,null,null,null,null,null,null];
(statearr_53619[(0)] = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__);

(statearr_53619[(1)] = (1));

return statearr_53619;
});
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1 = (function (state_53616){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53616);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53620){var ex__27576__auto__ = e53620;
var statearr_53621_56655 = state_53616;
(statearr_53621_56655[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53616[(4)]))){
var statearr_53623_56656 = state_53616;
(statearr_53623_56656[(1)] = cljs.core.first((state_53616[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56657 = state_53616;
state_53616 = G__56657;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = function(state_53616){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1.call(this,state_53616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0;
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1;
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53624 = f__27596__auto__();
(statearr_53624[(6)] = c__27595__auto__);

return statearr_53624;
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

var frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_56658 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_56658(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_56659 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_56659(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_56660 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_56660(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.ILocal__GT_RemoteSync = function(){};

var frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_56661 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_56661(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_56662 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_56662(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_56663 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_56663(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_56664 = (function (this$,from_chan){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_56664(this$,from_chan);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_56665 = (function (this$,es){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_56665(this$,es);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_56666 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_56666(this$);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53828){
var state_val_53829 = (state_53828[(1)]);
if((state_val_53829 === (7))){
var inst_53808 = cljs.core.deref(self__._STAR_stopped);
var state_53828__$1 = state_53828;
if(cljs.core.truth_(inst_53808)){
var statearr_53832_56667 = state_53828__$1;
(statearr_53832_56667[(1)] = (9));

} else {
var statearr_53834_56668 = state_53828__$1;
(statearr_53834_56668[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (1))){
var inst_53789 = (state_53828[(7)]);
var inst_53788 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),self__.graph_uuid,self__.user_uuid);
var inst_53789__$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_53788,relative_filepaths);
var inst_53790 = cljs.core.flatten(inst_53789__$1);
var inst_53791 = cljs.core.empty_QMARK_(inst_53790);
var state_53828__$1 = (function (){var statearr_53836 = state_53828;
(statearr_53836[(7)] = inst_53789__$1);

return statearr_53836;
})();
if(inst_53791){
var statearr_53837_56669 = state_53828__$1;
(statearr_53837_56669[(1)] = (2));

} else {
var statearr_53838_56670 = state_53828__$1;
(statearr_53838_56670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (4))){
var inst_53801 = (state_53828[(8)]);
var inst_53801__$1 = (state_53828[(2)]);
var inst_53802 = (inst_53801__$1 instanceof cljs.core.ExceptionInfo);
var state_53828__$1 = (function (){var statearr_53846 = state_53828;
(statearr_53846[(8)] = inst_53801__$1);

return statearr_53846;
})();
if(cljs.core.truth_(inst_53802)){
var statearr_53847_56671 = state_53828__$1;
(statearr_53847_56671[(1)] = (6));

} else {
var statearr_53848_56672 = state_53828__$1;
(statearr_53848_56672[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (13))){
var state_53828__$1 = state_53828;
var statearr_53849_56673 = state_53828__$1;
(statearr_53849_56673[(2)] = null);

(statearr_53849_56673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (6))){
var inst_53801 = (state_53828[(8)]);
var inst_53804 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_53805 = [inst_53801];
var inst_53806 = cljs.core.PersistentHashMap.fromArrays(inst_53804,inst_53805);
var state_53828__$1 = state_53828;
var statearr_53850_56674 = state_53828__$1;
(statearr_53850_56674[(2)] = inst_53806);

(statearr_53850_56674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (3))){
var inst_53789 = (state_53828[(7)]);
var inst_53797 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_53789,self__.repo,null,self__._STAR_stopped,null,null);
var state_53828__$1 = state_53828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53828__$1,(5),inst_53797);
} else {
if((state_val_53829 === (12))){
var inst_53815 = frontend.fs.sync.update_graphs_txid_BANG_(latest_txid,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_53816 = cljs.core.reset_BANG_(self__._STAR_txid,latest_txid);
var inst_53817 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53818 = [true];
var inst_53819 = cljs.core.PersistentHashMap.fromArrays(inst_53817,inst_53818);
var state_53828__$1 = (function (){var statearr_53851 = state_53828;
(statearr_53851[(9)] = inst_53815);

(statearr_53851[(10)] = inst_53816);

return statearr_53851;
})();
var statearr_53852_56675 = state_53828__$1;
(statearr_53852_56675[(2)] = inst_53819);

(statearr_53852_56675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (2))){
var inst_53793 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53794 = [true];
var inst_53795 = cljs.core.PersistentHashMap.fromArrays(inst_53793,inst_53794);
var state_53828__$1 = state_53828;
var statearr_53853_56676 = state_53828__$1;
(statearr_53853_56676[(2)] = inst_53795);

(statearr_53853_56676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (11))){
var inst_53824 = (state_53828[(2)]);
var state_53828__$1 = state_53828;
var statearr_53854_56677 = state_53828__$1;
(statearr_53854_56677[(2)] = inst_53824);

(statearr_53854_56677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (9))){
var inst_53810 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_53811 = [true];
var inst_53812 = cljs.core.PersistentHashMap.fromArrays(inst_53810,inst_53811);
var state_53828__$1 = state_53828;
var statearr_53855_56678 = state_53828__$1;
(statearr_53855_56678[(2)] = inst_53812);

(statearr_53855_56678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (5))){
var inst_53799 = (state_53828[(2)]);
var state_53828__$1 = state_53828;
var statearr_53856_56679 = state_53828__$1;
(statearr_53856_56679[(2)] = inst_53799);

(statearr_53856_56679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (14))){
var inst_53822 = (state_53828[(2)]);
var state_53828__$1 = state_53828;
var statearr_53857_56680 = state_53828__$1;
(statearr_53857_56680[(2)] = inst_53822);

(statearr_53857_56680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (10))){
var state_53828__$1 = state_53828;
var statearr_53859_56681 = state_53828__$1;
(statearr_53859_56681[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53829 === (8))){
var inst_53826 = (state_53828[(2)]);
var state_53828__$1 = state_53828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53828__$1,inst_53826);
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
var statearr_53862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53862[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53862[(1)] = (1));

return statearr_53862;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53828){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53828);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53863){var ex__27576__auto__ = e53863;
var statearr_53864_56682 = state_53828;
(statearr_53864_56682[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53828[(4)]))){
var statearr_53865_56683 = state_53828;
(statearr_53865_56683[(1)] = cljs.core.first((state_53828[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56684 = state_53828;
state_53828 = G__56684;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53828){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53871 = f__27596__auto__();
(statearr_53871[(6)] = c__27595__auto__);

return statearr_53871;
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k53783,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__53872 = k53783;
var G__53872__$1 = (((G__53872 instanceof cljs.core.Keyword))?G__53872.fqn:null);
switch (G__53872__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53783,else__5343__auto__);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__53873){
var vec__53874 = p__53873;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53874,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53874,(1),null);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53979){
var state_val_53980 = (state_53979[(1)]);
if((state_val_53980 === (7))){
var inst_53892 = (state_53979[(7)]);
var inst_53896 = (inst_53892 - (1));
var inst_53897 = cljs.core.deref(self__._STAR_txid);
var inst_53898 = (inst_53896 > inst_53897);
var state_53979__$1 = state_53979;
var statearr_53981_56686 = state_53979__$1;
(statearr_53981_56686[(2)] = inst_53898);

(statearr_53981_56686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (20))){
var inst_53956 = cljs.core.deref(self__._STAR_stopped);
var state_53979__$1 = state_53979;
if(cljs.core.truth_(inst_53956)){
var statearr_53982_56687 = state_53979__$1;
(statearr_53982_56687[(1)] = (22));

} else {
var statearr_53983_56688 = state_53979__$1;
(statearr_53983_56688[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (27))){
var inst_53973 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
var statearr_53984_56689 = state_53979__$1;
(statearr_53984_56689[(2)] = inst_53973);

(statearr_53984_56689[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (1))){
var inst_53880 = cljs.core.deref(self__._STAR_txid);
var inst_53881 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(null,self__.graph_uuid,inst_53880);
var state_53979__$1 = state_53979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53979__$1,(2),inst_53881);
} else {
if((state_val_53980 === (24))){
var inst_53975 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
var statearr_53985_56690 = state_53979__$1;
(statearr_53985_56690[(2)] = inst_53975);

(statearr_53985_56690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (4))){
var inst_53892 = (state_53979[(7)]);
var inst_53883 = (state_53979[(8)]);
var inst_53893 = (state_53979[(9)]);
var inst_53890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53883,(0),null);
var inst_53891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53883,(1),null);
var inst_53892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53883,(2),null);
var inst_53893__$1 = (inst_53892__$1 == null);
var state_53979__$1 = (function (){var statearr_53986 = state_53979;
(statearr_53986[(7)] = inst_53892__$1);

(statearr_53986[(10)] = inst_53890);

(statearr_53986[(9)] = inst_53893__$1);

(statearr_53986[(11)] = inst_53891);

return statearr_53986;
})();
if(cljs.core.truth_(inst_53893__$1)){
var statearr_53988_56691 = state_53979__$1;
(statearr_53988_56691[(1)] = (6));

} else {
var statearr_53989_56692 = state_53979__$1;
(statearr_53989_56692[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (15))){
var inst_53891 = (state_53979[(11)]);
var inst_53932 = frontend.fs.sync.update_graphs_txid_BANG_(inst_53891,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_53933 = cljs.core.reset_BANG_(self__._STAR_txid,inst_53891);
var inst_53934 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53935 = [true];
var inst_53936 = cljs.core.PersistentHashMap.fromArrays(inst_53934,inst_53935);
var state_53979__$1 = (function (){var statearr_53990 = state_53979;
(statearr_53990[(12)] = inst_53932);

(statearr_53990[(13)] = inst_53933);

return statearr_53990;
})();
var statearr_53991_56693 = state_53979__$1;
(statearr_53991_56693[(2)] = inst_53936);

(statearr_53991_56693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (21))){
var inst_53977 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53979__$1,inst_53977);
} else {
if((state_val_53980 === (13))){
var state_53979__$1 = state_53979;
var statearr_53992_56694 = state_53979__$1;
(statearr_53992_56694[(2)] = null);

(statearr_53992_56694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (22))){
var inst_53958 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_53959 = [true];
var inst_53960 = cljs.core.PersistentHashMap.fromArrays(inst_53958,inst_53959);
var state_53979__$1 = state_53979;
var statearr_53993_56701 = state_53979__$1;
(statearr_53993_56701[(2)] = inst_53960);

(statearr_53993_56701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (29))){
var state_53979__$1 = state_53979;
var statearr_53994_56703 = state_53979__$1;
(statearr_53994_56703[(2)] = null);

(statearr_53994_56703[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (6))){
var inst_53893 = (state_53979[(9)]);
var state_53979__$1 = state_53979;
var statearr_53995_56704 = state_53979__$1;
(statearr_53995_56704[(2)] = inst_53893);

(statearr_53995_56704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (28))){
var inst_53966 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53967 = [true];
var inst_53968 = cljs.core.PersistentHashMap.fromArrays(inst_53966,inst_53967);
var state_53979__$1 = state_53979;
var statearr_53996_56705 = state_53979__$1;
(statearr_53996_56705[(2)] = inst_53968);

(statearr_53996_56705[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (25))){
var inst_53949 = (state_53979[(14)]);
var state_53979__$1 = state_53979;
var statearr_53997_56706 = state_53979__$1;
(statearr_53997_56706[(2)] = inst_53949);

(statearr_53997_56706[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (17))){
var inst_53942 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
var statearr_53998_56707 = state_53979__$1;
(statearr_53998_56707[(2)] = inst_53942);

(statearr_53998_56707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (3))){
var inst_53883 = (state_53979[(8)]);
var state_53979__$1 = state_53979;
var statearr_53999_56708 = state_53979__$1;
(statearr_53999_56708[(2)] = inst_53883);

(statearr_53999_56708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (12))){
var inst_53892 = (state_53979[(7)]);
var inst_53890 = (state_53979[(10)]);
var inst_53883 = (state_53979[(8)]);
var inst_53891 = (state_53979[(11)]);
var inst_53928 = (state_53979[(15)]);
var inst_53910 = frontend.fs.sync.diffs__GT_partitioned_filetxns((10));
var inst_53913 = (function (){var diff_r = inst_53883;
var vec__53887 = inst_53883;
var diff_txns = inst_53890;
var latest_txid = inst_53891;
var min_txid = inst_53892;
return (function (r,i){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.reverse(i));
});
})();
var inst_53914 = cljs.core.completing.cljs$core$IFn$_invoke$arity$1(inst_53913);
var inst_53915 = cljs.core.List.EMPTY;
var inst_53927 = cljs.core.reverse(inst_53890);
var inst_53928__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(inst_53910,inst_53914,inst_53915,inst_53927);
var inst_53929 = cljs.core.flatten(inst_53928__$1);
var inst_53930 = cljs.core.empty_QMARK_(inst_53929);
var state_53979__$1 = (function (){var statearr_54000 = state_53979;
(statearr_54000[(15)] = inst_53928__$1);

return statearr_54000;
})();
if(inst_53930){
var statearr_54009_56709 = state_53979__$1;
(statearr_54009_56709[(1)] = (15));

} else {
var statearr_54010_56710 = state_53979__$1;
(statearr_54010_56710[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (2))){
var inst_53883 = (state_53979[(8)]);
var inst_53883__$1 = (state_53979[(2)]);
var inst_53884 = (inst_53883__$1 instanceof cljs.core.ExceptionInfo);
var state_53979__$1 = (function (){var statearr_54013 = state_53979;
(statearr_54013[(8)] = inst_53883__$1);

return statearr_54013;
})();
if(cljs.core.truth_(inst_53884)){
var statearr_54014_56711 = state_53979__$1;
(statearr_54014_56711[(1)] = (3));

} else {
var statearr_54017_56712 = state_53979__$1;
(statearr_54017_56712[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (23))){
var inst_53949 = (state_53979[(14)]);
var inst_53962 = new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586).cljs$core$IFn$_invoke$arity$1(inst_53949);
var state_53979__$1 = state_53979;
if(cljs.core.truth_(inst_53962)){
var statearr_54025_56713 = state_53979__$1;
(statearr_54025_56713[(1)] = (25));

} else {
var statearr_54026_56714 = state_53979__$1;
(statearr_54026_56714[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (19))){
var inst_53949 = (state_53979[(14)]);
var inst_53952 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_53953 = [inst_53949];
var inst_53954 = cljs.core.PersistentHashMap.fromArrays(inst_53952,inst_53953);
var state_53979__$1 = state_53979;
var statearr_54027_56715 = state_53979__$1;
(statearr_54027_56715[(2)] = inst_53954);

(statearr_54027_56715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (11))){
var inst_53947 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
var statearr_54028_56716 = state_53979__$1;
(statearr_54028_56716[(2)] = inst_53947);

(statearr_54028_56716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (9))){
var inst_53892 = (state_53979[(7)]);
var inst_53902 = cljs.core.deref(self__._STAR_txid);
var inst_53903 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["min-txid",inst_53892,"request-txid",inst_53902], 0));
var inst_53904 = [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586)];
var inst_53905 = [true];
var inst_53906 = cljs.core.PersistentHashMap.fromArrays(inst_53904,inst_53905);
var state_53979__$1 = (function (){var statearr_54034 = state_53979;
(statearr_54034[(16)] = inst_53903);

return statearr_54034;
})();
var statearr_54035_56717 = state_53979__$1;
(statearr_54035_56717[(2)] = inst_53906);

(statearr_54035_56717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (5))){
var inst_53949 = (state_53979[(14)]);
var inst_53949__$1 = (state_53979[(2)]);
var inst_53950 = (inst_53949__$1 instanceof cljs.core.ExceptionInfo);
var state_53979__$1 = (function (){var statearr_54044 = state_53979;
(statearr_54044[(14)] = inst_53949__$1);

return statearr_54044;
})();
if(cljs.core.truth_(inst_53950)){
var statearr_54045_56719 = state_53979__$1;
(statearr_54045_56719[(1)] = (19));

} else {
var statearr_54046_56721 = state_53979__$1;
(statearr_54046_56721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (14))){
var inst_53945 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
var statearr_54047_56722 = state_53979__$1;
(statearr_54047_56722[(2)] = inst_53945);

(statearr_54047_56722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (26))){
var state_53979__$1 = state_53979;
var statearr_54057_56725 = state_53979__$1;
(statearr_54057_56725[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (16))){
var inst_53928 = (state_53979[(15)]);
var inst_53938 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_53928,self__.repo,self__._STAR_txid,self__._STAR_stopped,null,null);
var state_53979__$1 = state_53979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53979__$1,(18),inst_53938);
} else {
if((state_val_53980 === (30))){
var inst_53971 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
var statearr_54064_56730 = state_53979__$1;
(statearr_54064_56730[(2)] = inst_53971);

(statearr_54064_56730[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (10))){
var inst_53891 = (state_53979[(11)]);
var inst_53908 = cljs.core.pos_int_QMARK_(inst_53891);
var state_53979__$1 = state_53979;
if(inst_53908){
var statearr_54065_56731 = state_53979__$1;
(statearr_54065_56731[(1)] = (12));

} else {
var statearr_54066_56732 = state_53979__$1;
(statearr_54066_56732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (18))){
var inst_53940 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
var statearr_54067_56733 = state_53979__$1;
(statearr_54067_56733[(2)] = inst_53940);

(statearr_54067_56733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53980 === (8))){
var inst_53900 = (state_53979[(2)]);
var state_53979__$1 = state_53979;
if(cljs.core.truth_(inst_53900)){
var statearr_54068_56735 = state_53979__$1;
(statearr_54068_56735[(1)] = (9));

} else {
var statearr_54069_56736 = state_53979__$1;
(statearr_54069_56736[(1)] = (10));

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
var statearr_54070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54070[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54070[(1)] = (1));

return statearr_54070;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53979){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53979);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54075){var ex__27576__auto__ = e54075;
var statearr_54076_56738 = state_53979;
(statearr_54076_56738[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53979[(4)]))){
var statearr_54081_56739 = state_53979;
(statearr_54081_56739[(1)] = cljs.core.first((state_53979[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56740 = state_53979;
state_53979 = G__56740;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53979){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54088 = f__27596__auto__();
(statearr_54088[(6)] = c__27595__auto__);

return statearr_54088;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54128){
var state_val_54129 = (state_54128[(1)]);
if((state_val_54129 === (1))){
var inst_54093 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_54094 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_54128__$1 = (function (){var statearr_54140 = state_54128;
(statearr_54140[(7)] = inst_54094);

return statearr_54140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54128__$1,(2),inst_54093);
} else {
if((state_val_54129 === (2))){
var inst_54094 = (state_54128[(7)]);
var inst_54097 = (state_54128[(2)]);
var state_54128__$1 = (function (){var statearr_54160 = state_54128;
(statearr_54160[(8)] = inst_54097);

return statearr_54160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54128__$1,(3),inst_54094);
} else {
if((state_val_54129 === (3))){
var inst_54097 = (state_54128[(8)]);
var inst_54100 = (state_54128[(2)]);
var inst_54101 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_54097,inst_54100);
var inst_54103 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_54128__$1 = (function (){var statearr_54174 = state_54128;
(statearr_54174[(9)] = inst_54101);

return statearr_54174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54128__$1,(4),inst_54103);
} else {
if((state_val_54129 === (4))){
var inst_54101 = (state_54128[(9)]);
var inst_54105 = (state_54128[(2)]);
var inst_54106 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_54105);
var inst_54111 = cljs.core.count(inst_54101);
var inst_54112 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(remote->local)]",inst_54111,"files need to sync"], 0));
var inst_54113 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_54101);
var inst_54114 = this$__$1.sync_files_remote__GT_local_BANG_(inst_54113,inst_54106);
var state_54128__$1 = (function (){var statearr_54187 = state_54128;
(statearr_54187[(10)] = inst_54112);

return statearr_54187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54128__$1,(5),inst_54114);
} else {
if((state_val_54129 === (5))){
var inst_54116 = (state_54128[(2)]);
var state_54128__$1 = state_54128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54128__$1,inst_54116);
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
var statearr_54191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54191[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54191[(1)] = (1));

return statearr_54191;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54128){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54128);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54192){var ex__27576__auto__ = e54192;
var statearr_54193_56744 = state_54128;
(statearr_54193_56744[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54128[(4)]))){
var statearr_54194_56745 = state_54128;
(statearr_54194_56745[(1)] = cljs.core.first((state_54128[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56746 = state_54128;
state_54128 = G__56746;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54128){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54195 = f__27596__auto__();
(statearr_54195[(6)] = c__27595__auto__);

return statearr_54195;
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53782){
var self__ = this;
var G__53782__$1 = this;
return (new cljs.core.RecordIter((0),G__53782__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53784,other53785){
var self__ = this;
var this53784__$1 = this;
return (((!((other53785 == null)))) && ((((this53784__$1.constructor === other53785.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1.user_uuid,other53785.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1.graph_uuid,other53785.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1.base_path,other53785.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1.repo,other53785.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1._STAR_txid,other53785._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1._STAR_sync_state,other53785._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1.local__GT_remote_syncer,other53785.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1._STAR_stopped,other53785._STAR_stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53784__$1.__extmap,other53785.__extmap)))))))))))))))))))));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k53783){
var self__ = this;
var this__5347__auto____$1 = this;
var G__54214 = k53783;
var G__54214__$1 = (((G__54214 instanceof cljs.core.Keyword))?G__54214.fqn:null);
switch (G__54214__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k53783);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__53782){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__54216 = cljs.core.keyword_identical_QMARK_;
var expr__54217 = k__5349__auto__;
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(G__53782,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,G__53782,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,G__53782,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__53782,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__53782,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,G__53782,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,G__53782,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54216.cljs$core$IFn$_invoke$arity$2 ? pred__54216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__54217) : pred__54216.call(null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__54217)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__53782,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__53782),null));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__53782){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,G__53782,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$map__GT_Remote__GT_LocalSyncer(G__53786){
var extmap__5382__auto__ = (function (){var G__54221 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53786,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], 0));
if(cljs.core.record_QMARK_(G__53786)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54221);
} else {
return G__54221;
}
})();
return (new frontend.fs.sync.Remote__GT_LocalSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__53786),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__53786),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__53786),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__53786),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__53786),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__53786),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__53786),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585).cljs$core$IFn$_invoke$arity$1(G__53786),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

/**
 * return true when file changed compared with remote
 */
frontend.fs.sync.file_changed_QMARK_ = (function frontend$fs$sync$file_changed_QMARK_(graph_uuid,file_path_without_base_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54238){
var state_val_54239 = (state_54238[(1)]);
if((state_val_54239 === (1))){
var inst_54222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54223 = [file_path_without_base_path];
var inst_54224 = (new cljs.core.PersistentVector(null,1,(5),inst_54222,inst_54223,null));
var inst_54225 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(null,graph_uuid,inst_54224);
var state_54238__$1 = state_54238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54238__$1,(2),inst_54225);
} else {
if((state_val_54239 === (2))){
var inst_54227 = (state_54238[(2)]);
var inst_54228 = cljs.core.first(inst_54227);
var inst_54229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54230 = [file_path_without_base_path];
var inst_54231 = (new cljs.core.PersistentVector(null,1,(5),inst_54229,inst_54230,null));
var inst_54232 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_54231);
var state_54238__$1 = (function (){var statearr_54243 = state_54238;
(statearr_54243[(7)] = inst_54228);

return statearr_54243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54238__$1,(3),inst_54232);
} else {
if((state_val_54239 === (3))){
var inst_54228 = (state_54238[(7)]);
var inst_54234 = (state_54238[(2)]);
var inst_54235 = cljs.core.first(inst_54234);
var inst_54236 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_54228,inst_54235);
var state_54238__$1 = state_54238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54238__$1,inst_54236);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_54244 = [null,null,null,null,null,null,null,null];
(statearr_54244[(0)] = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__);

(statearr_54244[(1)] = (1));

return statearr_54244;
});
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1 = (function (state_54238){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54238);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54245){var ex__27576__auto__ = e54245;
var statearr_54246_56754 = state_54238;
(statearr_54246_56754[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54238[(4)]))){
var statearr_54247_56755 = state_54238;
(statearr_54247_56755[(1)] = cljs.core.first((state_54238[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56756 = state_54238;
state_54238 = G__56756;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = function(state_54238){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1.call(this,state_54238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54248 = f__27596__auto__();
(statearr_54248[(6)] = c__27595__auto__);

return statearr_54248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.local_file_exists_QMARK_ = (function frontend$fs$sync$local_file_exists_QMARK_(relative_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54258){
var state_val_54259 = (state_54258[(1)]);
if((state_val_54259 === (1))){
var inst_54249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54250 = [relative_path];
var inst_54251 = (new cljs.core.PersistentVector(null,1,(5),inst_54249,inst_54250,null));
var inst_54252 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,inst_54251);
var state_54258__$1 = state_54258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54258__$1,(2),inst_54252);
} else {
if((state_val_54259 === (2))){
var inst_54254 = (state_54258[(2)]);
var inst_54255 = cljs.core.ex_cause(inst_54254);
var inst_54256 = (inst_54255 == null);
var state_54258__$1 = state_54258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54258__$1,inst_54256);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_54260 = [null,null,null,null,null,null,null];
(statearr_54260[(0)] = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__);

(statearr_54260[(1)] = (1));

return statearr_54260;
});
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1 = (function (state_54258){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54258);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54261){var ex__27576__auto__ = e54261;
var statearr_54262_56758 = state_54258;
(statearr_54262_56758[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54258[(4)]))){
var statearr_54263_56759 = state_54258;
(statearr_54263_56759[(1)] = cljs.core.first((state_54258[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56760 = state_54258;
state_54258 = G__56760;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = function(state_54258){
switch(arguments.length){
case 0:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1.call(this,state_54258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54264 = f__27596__auto__();
(statearr_54264[(6)] = c__27595__auto__);

return statearr_54264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.contains_path_QMARK_ = (function frontend$fs$sync$contains_path_QMARK_(regexps,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54266_SHARP_,p2__54265_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(p2__54265_SHARP_,path))){
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54297){
var state_val_54298 = (state_54297[(1)]);
if((state_val_54298 === (7))){
var inst_54280 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54299_56761 = state_54297__$1;
(statearr_54299_56761[(2)] = inst_54280);

(statearr_54299_56761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (1))){
var inst_54267 = frontend.fs.sync.relative_path(e);
var inst_54293 = e.type;
var state_54297__$1 = (function (){var statearr_54300 = state_54297;
(statearr_54300[(7)] = inst_54267);

return statearr_54300;
})();
var G__54301_56762 = inst_54293;
switch (G__54301_56762) {
case "unlink":
var statearr_54303_56764 = state_54297__$1;
(statearr_54303_56764[(1)] = (3));


break;
case "add":
case "change":
var statearr_54304_56765 = state_54297__$1;
(statearr_54304_56765[(1)] = (8));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54301_56762)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (4))){
var inst_54273 = (state_54297[(8)]);
var inst_54273__$1 = (state_54297[(2)]);
var inst_54275 = (inst_54273__$1 == null);
var state_54297__$1 = (function (){var statearr_54305 = state_54297;
(statearr_54305[(8)] = inst_54273__$1);

return statearr_54305;
})();
if(cljs.core.truth_(inst_54275)){
var statearr_54306_56766 = state_54297__$1;
(statearr_54306_56766[(1)] = (5));

} else {
var statearr_54307_56767 = state_54297__$1;
(statearr_54307_56767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (13))){
var inst_54288 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54308_56768 = state_54297__$1;
(statearr_54308_56768[(2)] = inst_54288);

(statearr_54308_56768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (6))){
var inst_54273 = (state_54297[(8)]);
var inst_54278 = cljs.core.ex_cause(inst_54273);
var state_54297__$1 = state_54297;
var statearr_54309_56769 = state_54297__$1;
(statearr_54309_56769[(2)] = inst_54278);

(statearr_54309_56769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (3))){
var inst_54267 = (state_54297[(7)]);
var inst_54268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54269 = [inst_54267];
var inst_54270 = (new cljs.core.PersistentVector(null,1,(5),inst_54268,inst_54269,null));
var inst_54271 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",basepath,inst_54270);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(4),inst_54271);
} else {
if((state_val_54298 === (12))){
var inst_54291 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54310_56770 = state_54297__$1;
(statearr_54310_56770[(2)] = inst_54291);

(statearr_54310_56770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (2))){
var inst_54295 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54297__$1,inst_54295);
} else {
if((state_val_54298 === (11))){
var inst_54284 = (state_54297[(9)]);
var state_54297__$1 = state_54297;
var statearr_54311_56771 = state_54297__$1;
(statearr_54311_56771[(2)] = inst_54284);

(statearr_54311_56771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (9))){
var inst_54284 = (state_54297[(9)]);
var inst_54284__$1 = (state_54297[(2)]);
var state_54297__$1 = (function (){var statearr_54312 = state_54297;
(statearr_54312[(9)] = inst_54284__$1);

return statearr_54312;
})();
if(cljs.core.truth_(inst_54284__$1)){
var statearr_54314_56772 = state_54297__$1;
(statearr_54314_56772[(1)] = (10));

} else {
var statearr_54315_56773 = state_54297__$1;
(statearr_54315_56773[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (5))){
var state_54297__$1 = state_54297;
var statearr_54316_56774 = state_54297__$1;
(statearr_54316_56774[(2)] = null);

(statearr_54316_56774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (10))){
var inst_54267 = (state_54297[(7)]);
var inst_54286 = frontend.fs.sync.file_changed_QMARK_(graph_uuid,inst_54267,basepath);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(13),inst_54286);
} else {
if((state_val_54298 === (8))){
var inst_54267 = (state_54297[(7)]);
var inst_54282 = frontend.fs.sync.local_file_exists_QMARK_(inst_54267,basepath);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(9),inst_54282);
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
var statearr_54317 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54317[(0)] = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__);

(statearr_54317[(1)] = (1));

return statearr_54317;
});
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1 = (function (state_54297){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54297);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54318){var ex__27576__auto__ = e54318;
var statearr_54319_56779 = state_54297;
(statearr_54319_56779[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54297[(4)]))){
var statearr_54320_56780 = state_54297;
(statearr_54320_56780[(1)] = cljs.core.first((state_54297[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56781 = state_54297;
state_54297 = G__56781;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__ = function(state_54297){
switch(arguments.length){
case 0:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1.call(this,state_54297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0;
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1;
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54321 = f__27596__auto__();
(statearr_54321[(6)] = c__27595__auto__);

return statearr_54321;
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k54327,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__54352 = k54327;
var G__54352__$1 = (((G__54352 instanceof cljs.core.Keyword))?G__54352.fqn:null);
switch (G__54352__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54327,else__5343__auto__);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__54354){
var vec__54360 = p__54354;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54360,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54360,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [/logseq\/\.recycle\/.*/,null,/version-files\/.*/,null,/\.DS_Store$/,null,/logseq\/graphs-txid.edn$/,null,/logseq\/bak\/.*/,null], null), null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [/^journals\//,null,/^assets\//,null,/^logseq\//,null,/^pages\//,null], null), null);
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
var c__27595__auto___56784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54471){
var state_val_54472 = (state_54471[(1)]);
if((state_val_54472 === (7))){
var inst_54418 = (state_54471[(2)]);
var inst_54419 = cljs.core.__destructure_map(inst_54418);
var inst_54420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54419,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_54421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54419,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_54422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54419,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_54471__$1 = (function (){var statearr_54473 = state_54471;
(statearr_54473[(7)] = inst_54421);

(statearr_54473[(8)] = inst_54420);

return statearr_54473;
})();
if(cljs.core.truth_(inst_54422)){
var statearr_54474_56785 = state_54471__$1;
(statearr_54474_56785[(1)] = (17));

} else {
var statearr_54475_56786 = state_54471__$1;
(statearr_54475_56786[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (20))){
var inst_54366 = (state_54471[(9)]);
var inst_54427 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_54366,false);
var inst_54428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,null);
var inst_54429 = cljs.core.async.timeout(self__.rate);
var inst_54430 = cljs.core.PersistentVector.EMPTY;
var inst_54365 = inst_54429;
var inst_54366__$1 = inst_54430;
var state_54471__$1 = (function (){var statearr_54476 = state_54471;
(statearr_54476[(9)] = inst_54366__$1);

(statearr_54476[(10)] = inst_54365);

(statearr_54476[(11)] = inst_54427);

(statearr_54476[(12)] = inst_54428);

return statearr_54476;
})();
var statearr_54478_56788 = state_54471__$1;
(statearr_54478_56788[(2)] = null);

(statearr_54478_56788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (27))){
var inst_54436 = (state_54471[(13)]);
var state_54471__$1 = state_54471;
var statearr_54479_56789 = state_54471__$1;
(statearr_54479_56789[(2)] = inst_54436);

(statearr_54479_56789[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (1))){
var inst_54363 = cljs.core.async.timeout(self__.rate);
var inst_54364 = cljs.core.PersistentVector.EMPTY;
var inst_54365 = inst_54363;
var inst_54366 = inst_54364;
var state_54471__$1 = (function (){var statearr_54480 = state_54471;
(statearr_54480[(9)] = inst_54366);

(statearr_54480[(10)] = inst_54365);

return statearr_54480;
})();
var statearr_54481_56790 = state_54471__$1;
(statearr_54481_56790[(2)] = null);

(statearr_54481_56790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (24))){
var inst_54421 = (state_54471[(7)]);
var inst_54455 = (inst_54421 == null);
var state_54471__$1 = state_54471;
if(cljs.core.truth_(inst_54455)){
var statearr_54482_56791 = state_54471__$1;
(statearr_54482_56791[(1)] = (33));

} else {
var statearr_54483_56792 = state_54471__$1;
(statearr_54483_56792[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (4))){
var inst_54365 = (state_54471[(10)]);
var inst_54385 = (state_54471[(14)]);
var inst_54383 = (state_54471[(15)]);
var inst_54383__$1 = (state_54471[(2)]);
var inst_54384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54383__$1,(0),null);
var inst_54385__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54383__$1,(1),null);
var inst_54386 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54385__$1,inst_54365);
var state_54471__$1 = (function (){var statearr_54484 = state_54471;
(statearr_54484[(16)] = inst_54384);

(statearr_54484[(14)] = inst_54385__$1);

(statearr_54484[(15)] = inst_54383__$1);

return statearr_54484;
})();
if(inst_54386){
var statearr_54485_56797 = state_54471__$1;
(statearr_54485_56797[(1)] = (5));

} else {
var statearr_54486_56798 = state_54471__$1;
(statearr_54486_56798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (15))){
var state_54471__$1 = state_54471;
var statearr_54489_56799 = state_54471__$1;
(statearr_54489_56799[(2)] = null);

(statearr_54489_56799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (21))){
var inst_54421 = (state_54471[(7)]);
var inst_54433 = (inst_54421 == null);
var inst_54434 = cljs.core.not(inst_54433);
var state_54471__$1 = state_54471;
if(inst_54434){
var statearr_54490_56800 = state_54471__$1;
(statearr_54490_56800[(1)] = (23));

} else {
var statearr_54491_56801 = state_54471__$1;
(statearr_54491_56801[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (31))){
var inst_54366 = (state_54471[(9)]);
var inst_54365 = (state_54471[(10)]);
var tmp54487 = inst_54366;
var tmp54488 = inst_54365;
var inst_54365__$1 = tmp54488;
var inst_54366__$1 = tmp54487;
var state_54471__$1 = (function (){var statearr_54492 = state_54471;
(statearr_54492[(9)] = inst_54366__$1);

(statearr_54492[(10)] = inst_54365__$1);

return statearr_54492;
})();
var statearr_54493_56802 = state_54471__$1;
(statearr_54493_56802[(2)] = null);

(statearr_54493_56802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (32))){
var inst_54453 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54503_56803 = state_54471__$1;
(statearr_54503_56803[(2)] = inst_54453);

(statearr_54503_56803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (33))){
var inst_54457 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close ratelimit chan"], 0));
var inst_54458 = cljs.core.async.close_BANG_(c);
var state_54471__$1 = (function (){var statearr_54504 = state_54471;
(statearr_54504[(17)] = inst_54457);

return statearr_54504;
})();
var statearr_54505_56804 = state_54471__$1;
(statearr_54505_56804[(2)] = inst_54458);

(statearr_54505_56804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (13))){
var inst_54414 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54506_56805 = state_54471__$1;
(statearr_54506_56805[(2)] = inst_54414);

(statearr_54506_56805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (22))){
var inst_54465 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54507_56806 = state_54471__$1;
(statearr_54507_56806[(2)] = inst_54465);

(statearr_54507_56806[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (29))){
var inst_54440 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54508_56807 = state_54471__$1;
(statearr_54508_56807[(2)] = inst_54440);

(statearr_54508_56807[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (6))){
var inst_54377 = (state_54471[(18)]);
var inst_54385 = (state_54471[(14)]);
var inst_54392 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54385,inst_54377);
var state_54471__$1 = state_54471;
if(inst_54392){
var statearr_54511_56808 = state_54471__$1;
(statearr_54511_56808[(1)] = (8));

} else {
var statearr_54512_56809 = state_54471__$1;
(statearr_54512_56809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (28))){
var inst_54443 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
if(cljs.core.truth_(inst_54443)){
var statearr_54520_56810 = state_54471__$1;
(statearr_54520_56810[(1)] = (30));

} else {
var statearr_54521_56811 = state_54471__$1;
(statearr_54521_56811[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (25))){
var inst_54463 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54523_56813 = state_54471__$1;
(statearr_54523_56813[(2)] = inst_54463);

(statearr_54523_56813[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (34))){
var state_54471__$1 = state_54471;
var statearr_54524_56815 = state_54471__$1;
(statearr_54524_56815[(2)] = null);

(statearr_54524_56815[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (17))){
var inst_54424 = cljs.core.async.close_BANG_(c);
var state_54471__$1 = state_54471;
var statearr_54525_56816 = state_54471__$1;
(statearr_54525_56816[(2)] = inst_54424);

(statearr_54525_56816[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (3))){
var inst_54469 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54471__$1,inst_54469);
} else {
if((state_val_54472 === (12))){
var inst_54385 = (state_54471[(14)]);
var inst_54408 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54385,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_54471__$1 = state_54471;
if(inst_54408){
var statearr_54526_56817 = state_54471__$1;
(statearr_54526_56817[(1)] = (14));

} else {
var statearr_54527_56818 = state_54471__$1;
(statearr_54527_56818[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (2))){
var inst_54377 = (state_54471[(18)]);
var inst_54365 = (state_54471[(10)]);
var inst_54378 = (state_54471[(19)]);
var inst_54377__$1 = from_chan;
var inst_54378__$1 = self__.stop_chan;
var inst_54379 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54380 = [inst_54365,inst_54377__$1,inst_54378__$1];
var inst_54381 = (new cljs.core.PersistentVector(null,3,(5),inst_54379,inst_54380,null));
var state_54471__$1 = (function (){var statearr_54528 = state_54471;
(statearr_54528[(18)] = inst_54377__$1);

(statearr_54528[(19)] = inst_54378__$1);

return statearr_54528;
})();
return cljs.core.async.ioc_alts_BANG_(state_54471__$1,(4),inst_54381);
} else {
if((state_val_54472 === (23))){
var inst_54421 = (state_54471[(7)]);
var inst_54436 = (state_54471[(13)]);
var inst_54436__$1 = (filter_e_fn.cljs$core$IFn$_invoke$arity$1 ? filter_e_fn.cljs$core$IFn$_invoke$arity$1(inst_54421) : filter_e_fn.call(null,inst_54421));
var state_54471__$1 = (function (){var statearr_54529 = state_54471;
(statearr_54529[(13)] = inst_54436__$1);

return statearr_54529;
})();
if(cljs.core.truth_(inst_54436__$1)){
var statearr_54530_56819 = state_54471__$1;
(statearr_54530_56819[(1)] = (26));

} else {
var statearr_54531_56820 = state_54471__$1;
(statearr_54531_56820[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (35))){
var inst_54461 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54532_56821 = state_54471__$1;
(statearr_54532_56821[(2)] = inst_54461);

(statearr_54532_56821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (19))){
var inst_54467 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54533_56822 = state_54471__$1;
(statearr_54533_56822[(2)] = inst_54467);

(statearr_54533_56822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (11))){
var inst_54404 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54405 = [true];
var inst_54406 = cljs.core.PersistentHashMap.fromArrays(inst_54404,inst_54405);
var state_54471__$1 = state_54471;
var statearr_54534_56823 = state_54471__$1;
(statearr_54534_56823[(2)] = inst_54406);

(statearr_54534_56823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (9))){
var inst_54385 = (state_54471[(14)]);
var inst_54378 = (state_54471[(19)]);
var inst_54402 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54385,inst_54378);
var state_54471__$1 = state_54471;
if(inst_54402){
var statearr_54535_56824 = state_54471__$1;
(statearr_54535_56824[(1)] = (11));

} else {
var statearr_54536_56825 = state_54471__$1;
(statearr_54536_56825[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (5))){
var inst_54388 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_54389 = [true];
var inst_54390 = cljs.core.PersistentHashMap.fromArrays(inst_54388,inst_54389);
var state_54471__$1 = state_54471;
var statearr_54537_56826 = state_54471__$1;
(statearr_54537_56826[(2)] = inst_54390);

(statearr_54537_56826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (14))){
var inst_54384 = (state_54471[(16)]);
var state_54471__$1 = state_54471;
var statearr_54538_56828 = state_54471__$1;
(statearr_54538_56828[(2)] = inst_54384);

(statearr_54538_56828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (26))){
var inst_54421 = (state_54471[(7)]);
var inst_54438 = frontend.fs.sync.filter_local_changes_pred(inst_54421,self__.base_path,self__.graph_uuid);
var state_54471__$1 = state_54471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54471__$1,(29),inst_54438);
} else {
if((state_val_54472 === (16))){
var inst_54412 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54540_56830 = state_54471__$1;
(statearr_54540_56830[(2)] = inst_54412);

(statearr_54540_56830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (30))){
var inst_54421 = (state_54471[(7)]);
var inst_54366 = (state_54471[(9)]);
var inst_54365 = (state_54471[(10)]);
var inst_54445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_54366,inst_54421);
var inst_54446 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_54445);
var inst_54447 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_54446);
var inst_54448 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,inst_54447);
var tmp54539 = inst_54365;
var inst_54365__$1 = tmp54539;
var inst_54366__$1 = inst_54446;
var state_54471__$1 = (function (){var statearr_54541 = state_54471;
(statearr_54541[(9)] = inst_54366__$1);

(statearr_54541[(10)] = inst_54365__$1);

(statearr_54541[(20)] = inst_54448);

return statearr_54541;
})();
var statearr_54542_56831 = state_54471__$1;
(statearr_54542_56831[(2)] = null);

(statearr_54542_56831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (10))){
var inst_54416 = (state_54471[(2)]);
var state_54471__$1 = state_54471;
var statearr_54543_56832 = state_54471__$1;
(statearr_54543_56832[(2)] = inst_54416);

(statearr_54543_56832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (18))){
var inst_54420 = (state_54471[(8)]);
var state_54471__$1 = state_54471;
if(cljs.core.truth_(inst_54420)){
var statearr_54544_56834 = state_54471__$1;
(statearr_54544_56834[(1)] = (20));

} else {
var statearr_54545_56836 = state_54471__$1;
(statearr_54545_56836[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54472 === (8))){
var inst_54383 = (state_54471[(15)]);
var inst_54397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54383,(0),null);
var inst_54398 = [new cljs.core.Keyword(null,"e","e",1381269198)];
var inst_54399 = [inst_54397];
var inst_54400 = cljs.core.PersistentHashMap.fromArrays(inst_54398,inst_54399);
var state_54471__$1 = state_54471;
var statearr_54546_56837 = state_54471__$1;
(statearr_54546_56837[(2)] = inst_54400);

(statearr_54546_56837[(1)] = (10));


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
var statearr_54547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54547[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54547[(1)] = (1));

return statearr_54547;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54471){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54471);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54548){var ex__27576__auto__ = e54548;
var statearr_54549_56838 = state_54471;
(statearr_54549_56838[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54471[(4)]))){
var statearr_54550_56839 = state_54471;
(statearr_54550_56839[(1)] = cljs.core.first((state_54471[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56840 = state_54471;
state_54471 = G__56840;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54471){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54551 = f__27596__auto__();
(statearr_54551[(6)] = c__27595__auto___56784);

return statearr_54551;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54563){
var state_val_54564 = (state_54563[(1)]);
if((state_val_54564 === (1))){
var inst_54559 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54560 = [true];
var inst_54561 = cljs.core.PersistentHashMap.fromArrays(inst_54559,inst_54560);
var state_54563__$1 = state_54563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54563__$1,inst_54561);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54565 = [null,null,null,null,null,null,null];
(statearr_54565[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54565[(1)] = (1));

return statearr_54565;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54563){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54563);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54566){var ex__27576__auto__ = e54566;
var statearr_54567_56842 = state_54563;
(statearr_54567_56842[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54563[(4)]))){
var statearr_54568_56845 = state_54563;
(statearr_54568_56845[(1)] = cljs.core.first((state_54563[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56846 = state_54563;
state_54563 = G__56846;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54563){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54571 = f__27596__auto__();
(statearr_54571[(6)] = c__27595__auto__);

return statearr_54571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
var type = cljs.core.first(es).type;
var ignore_files = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var es__GT_paths_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54322_SHARP_){
return frontend.fs.sync.relative_path(p1__54322_SHARP_);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__54323_SHARP_){
return cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,p1__54323_SHARP_));
})));
var paths = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(es__GT_paths_xf,es);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote",paths], 0));

var r = (function (){var G__54572 = type;
switch (G__54572) {
case "add":
case "change":
return frontend.fs.sync.update_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
case "unlink":
frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths);

return frontend.fs.sync.delete_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54572)].join('')));

}
})();
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54605){
var state_val_54606 = (state_54605[(1)]);
if((state_val_54606 === (7))){
var state_54605__$1 = state_54605;
var statearr_54607_56851 = state_54605__$1;
(statearr_54607_56851[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (1))){
var inst_54573 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__add_current_local__GT_remote_files,paths);
var state_54605__$1 = (function (){var statearr_54609 = state_54605;
(statearr_54609[(7)] = inst_54573);

return statearr_54609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54605__$1,(2),r);
} else {
if((state_val_54606 === (4))){
var inst_54575 = (state_54605[(8)]);
var inst_54583 = typeof inst_54575 === 'number';
var state_54605__$1 = state_54605;
if(cljs.core.truth_(inst_54583)){
var statearr_54610_56852 = state_54605__$1;
(statearr_54610_56852[(1)] = (6));

} else {
var statearr_54611_56853 = state_54605__$1;
(statearr_54611_56853[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (6))){
var inst_54575 = (state_54605[(8)]);
var inst_54585 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote! update txid",inst_54575], 0));
var inst_54586 = frontend.fs.sync.update_graphs_txid_BANG_(inst_54575,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_54587 = cljs.core.reset_BANG_(self__._STAR_txid,inst_54575);
var inst_54588 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54589 = [true];
var inst_54590 = cljs.core.PersistentHashMap.fromArrays(inst_54588,inst_54589);
var state_54605__$1 = (function (){var statearr_54612 = state_54605;
(statearr_54612[(9)] = inst_54586);

(statearr_54612[(10)] = inst_54587);

(statearr_54612[(11)] = inst_54585);

return statearr_54612;
})();
var statearr_54613_56854 = state_54605__$1;
(statearr_54613_56854[(2)] = inst_54590);

(statearr_54613_56854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (3))){
var inst_54579 = [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663)];
var inst_54580 = [true];
var inst_54581 = cljs.core.PersistentHashMap.fromArrays(inst_54579,inst_54580);
var state_54605__$1 = state_54605;
var statearr_54614_56855 = state_54605__$1;
(statearr_54614_56855[(2)] = inst_54581);

(statearr_54614_56855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (2))){
var inst_54575 = (state_54605[(8)]);
var inst_54575__$1 = (state_54605[(2)]);
var inst_54576 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__remove_current_local__GT_remote_files,paths);
var inst_54577 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_54575__$1);
var state_54605__$1 = (function (){var statearr_54615 = state_54605;
(statearr_54615[(12)] = inst_54576);

(statearr_54615[(8)] = inst_54575__$1);

return statearr_54615;
})();
if(cljs.core.truth_(inst_54577)){
var statearr_54616_56856 = state_54605__$1;
(statearr_54616_56856[(1)] = (3));

} else {
var statearr_54617_56858 = state_54605__$1;
(statearr_54617_56858[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (11))){
var inst_54599 = (state_54605[(2)]);
var state_54605__$1 = state_54605;
var statearr_54618_56860 = state_54605__$1;
(statearr_54618_56860[(2)] = inst_54599);

(statearr_54618_56860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (9))){
var inst_54575 = (state_54605[(8)]);
var inst_54593 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote unknown:",inst_54575], 0));
var inst_54594 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_54595 = [inst_54575];
var inst_54596 = cljs.core.PersistentHashMap.fromArrays(inst_54594,inst_54595);
var state_54605__$1 = (function (){var statearr_54619 = state_54605;
(statearr_54619[(13)] = inst_54593);

return statearr_54619;
})();
var statearr_54620_56861 = state_54605__$1;
(statearr_54620_56861[(2)] = inst_54596);

(statearr_54620_56861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (5))){
var inst_54603 = (state_54605[(2)]);
var state_54605__$1 = state_54605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54605__$1,inst_54603);
} else {
if((state_val_54606 === (10))){
var state_54605__$1 = state_54605;
var statearr_54621_56863 = state_54605__$1;
(statearr_54621_56863[(2)] = null);

(statearr_54621_56863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54606 === (8))){
var inst_54601 = (state_54605[(2)]);
var state_54605__$1 = state_54605;
var statearr_54622_56864 = state_54605__$1;
(statearr_54622_56864[(2)] = inst_54601);

(statearr_54622_56864[(1)] = (5));


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
var statearr_54623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54623[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54623[(1)] = (1));

return statearr_54623;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54605){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54605);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54624){var ex__27576__auto__ = e54624;
var statearr_54627_56866 = state_54605;
(statearr_54627_56866[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54605[(4)]))){
var statearr_54628_56867 = state_54605;
(statearr_54628_56867[(1)] = cljs.core.first((state_54605[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56869 = state_54605;
state_54605 = G__56869;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54605){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54629 = f__27596__auto__();
(statearr_54629[(6)] = c__27595__auto__);

return statearr_54629;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54716){
var state_val_54717 = (state_54716[(1)]);
if((state_val_54717 === (7))){
var inst_54655 = (state_54716[(7)]);
var inst_54662 = cljs.core.empty_QMARK_(inst_54655);
var state_54716__$1 = state_54716;
if(inst_54662){
var statearr_54723_56873 = state_54716__$1;
(statearr_54723_56873[(1)] = (9));

} else {
var statearr_54724_56875 = state_54716__$1;
(statearr_54724_56875[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (20))){
var inst_54677 = (state_54716[(8)]);
var state_54716__$1 = state_54716;
if(cljs.core.truth_(inst_54677)){
var statearr_54725_56877 = state_54716__$1;
(statearr_54725_56877[(1)] = (22));

} else {
var statearr_54726_56878 = state_54716__$1;
(statearr_54726_56878[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (27))){
var inst_54704 = (state_54716[(2)]);
var state_54716__$1 = state_54716;
var statearr_54727_56881 = state_54716__$1;
(statearr_54727_56881[(2)] = inst_54704);

(statearr_54727_56881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (1))){
var inst_54631 = (state_54716[(9)]);
var inst_54631__$1 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_54632 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_54716__$1 = (function (){var statearr_54728 = state_54716;
(statearr_54728[(9)] = inst_54631__$1);

(statearr_54728[(10)] = inst_54632);

return statearr_54728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54716__$1,(2),inst_54631__$1);
} else {
if((state_val_54717 === (24))){
var inst_54699 = (state_54716[(2)]);
var state_54716__$1 = state_54716;
if(cljs.core.truth_(inst_54699)){
var statearr_54729_56882 = state_54716__$1;
(statearr_54729_56882[(1)] = (25));

} else {
var statearr_54730_56883 = state_54716__$1;
(statearr_54730_56883[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (4))){
var state_54716__$1 = state_54716;
if(cljs.core.truth_(self__.stopped)){
var statearr_54731_56885 = state_54716__$1;
(statearr_54731_56885[(1)] = (6));

} else {
var statearr_54732_56886 = state_54716__$1;
(statearr_54732_56886[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (15))){
var inst_54676 = (state_54716[(11)]);
var inst_54691 = (state_54716[(2)]);
var state_54716__$1 = (function (){var statearr_54733 = state_54716;
(statearr_54733[(12)] = inst_54691);

return statearr_54733;
})();
if(cljs.core.truth_(inst_54676)){
var statearr_54734_56887 = state_54716__$1;
(statearr_54734_56887[(1)] = (19));

} else {
var statearr_54735_56888 = state_54716__$1;
(statearr_54735_56888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (21))){
var inst_54706 = (state_54716[(2)]);
var state_54716__$1 = state_54716;
var statearr_54736_56889 = state_54716__$1;
(statearr_54736_56889[(2)] = inst_54706);

(statearr_54736_56889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (13))){
var inst_54681 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_54682 = cljs.core.deref(inst_54681);
var state_54716__$1 = state_54716;
if(cljs.core.truth_(inst_54682)){
var statearr_54737_56892 = state_54716__$1;
(statearr_54737_56892[(1)] = (16));

} else {
var statearr_54738_56893 = state_54716__$1;
(statearr_54738_56893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (22))){
var inst_54677 = (state_54716[(8)]);
var state_54716__$1 = state_54716;
var statearr_54739_56894 = state_54716__$1;
(statearr_54739_56894[(2)] = inst_54677);

(statearr_54739_56894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (6))){
var inst_54658 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54659 = [true];
var inst_54660 = cljs.core.PersistentHashMap.fromArrays(inst_54658,inst_54659);
var state_54716__$1 = state_54716;
var statearr_54740_56895 = state_54716__$1;
(statearr_54740_56895[(2)] = inst_54660);

(statearr_54740_56895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (25))){
var inst_54675 = (state_54716[(13)]);
var state_54716__$1 = state_54716;
var statearr_54741_56896 = state_54716__$1;
(statearr_54741_56896[(2)] = inst_54675);

(statearr_54741_56896[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (17))){
var inst_54675 = (state_54716[(13)]);
var state_54716__$1 = state_54716;
var statearr_54742_56897 = state_54716__$1;
(statearr_54742_56897[(2)] = inst_54675);

(statearr_54742_56897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (3))){
var inst_54631 = (state_54716[(9)]);
var inst_54634 = (state_54716[(14)]);
var inst_54632 = (state_54716[(10)]);
var inst_54636 = (state_54716[(2)]);
var inst_54637 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_54636,inst_54634);
var inst_54638 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var inst_54639 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null);
var inst_54641 = (function (){var remote_all_files_meta_c = inst_54631;
var local_all_files_meta_c = inst_54632;
var remote_all_files_meta = inst_54634;
var local_all_files_meta = inst_54636;
var diff_local_files = inst_54637;
var ignore_files = inst_54638;
var monitored_dirs = inst_54639;
return (function (p1__54324_SHARP_){
return frontend.fs.sync.__GT_FileChangeEvent("change",self__.base_path,p1__54324_SHARP_.get_normalized_path(),null);
});
})();
var inst_54642 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_54641);
var inst_54643 = (function (){var remote_all_files_meta_c = inst_54631;
var local_all_files_meta_c = inst_54632;
var remote_all_files_meta = inst_54634;
var local_all_files_meta = inst_54636;
var diff_local_files = inst_54637;
var ignore_files = inst_54638;
var monitored_dirs = inst_54639;
return (function (p1__54325_SHARP_){
var path = frontend.fs.sync.relative_path(p1__54325_SHARP_);
var and__5041__auto__ = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,path));
if(and__5041__auto__){
return frontend.fs.sync.contains_path_QMARK_(monitored_dirs,path);
} else {
return and__5041__auto__;
}
});
})();
var inst_54644 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_54643);
var inst_54645 = frontend.fs.sync.partition_file_change_events((10));
var inst_54646 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_54642,inst_54644,inst_54645);
var inst_54647 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_54646,inst_54637);
var inst_54652 = cljs.core.flatten(inst_54647);
var inst_54653 = cljs.core.count(inst_54652);
var inst_54654 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(local->remote)]",inst_54653,"files need to sync"], 0));
var inst_54655 = inst_54647;
var state_54716__$1 = (function (){var statearr_54743 = state_54716;
(statearr_54743[(15)] = inst_54654);

(statearr_54743[(7)] = inst_54655);

return statearr_54743;
})();
var statearr_54744_56898 = state_54716__$1;
(statearr_54744_56898[(2)] = null);

(statearr_54744_56898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (12))){
var inst_54675 = (state_54716[(13)]);
var inst_54674 = (state_54716[(2)]);
var inst_54675__$1 = cljs.core.__destructure_map(inst_54674);
var inst_54676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54675__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_54677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54675__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_54679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54675__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_54716__$1 = (function (){var statearr_54745 = state_54716;
(statearr_54745[(13)] = inst_54675__$1);

(statearr_54745[(8)] = inst_54677);

(statearr_54745[(16)] = inst_54679);

(statearr_54745[(11)] = inst_54676);

return statearr_54745;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_54746_56899 = state_54716__$1;
(statearr_54746_56899[(1)] = (13));

} else {
var statearr_54747_56900 = state_54716__$1;
(statearr_54747_56900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (2))){
var inst_54632 = (state_54716[(10)]);
var inst_54634 = (state_54716[(2)]);
var state_54716__$1 = (function (){var statearr_54748 = state_54716;
(statearr_54748[(14)] = inst_54634);

return statearr_54748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54716__$1,(3),inst_54632);
} else {
if((state_val_54717 === (23))){
var inst_54679 = (state_54716[(16)]);
var state_54716__$1 = state_54716;
var statearr_54749_56901 = state_54716__$1;
(statearr_54749_56901[(2)] = inst_54679);

(statearr_54749_56901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (19))){
var inst_54655 = (state_54716[(7)]);
var inst_54693 = cljs.core.next(inst_54655);
var inst_54655__$1 = inst_54693;
var state_54716__$1 = (function (){var statearr_54750 = state_54716;
(statearr_54750[(7)] = inst_54655__$1);

return statearr_54750;
})();
var statearr_54751_56902 = state_54716__$1;
(statearr_54751_56902[(2)] = null);

(statearr_54751_56902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (11))){
var inst_54708 = (state_54716[(2)]);
var state_54716__$1 = state_54716;
var statearr_54752_56920 = state_54716__$1;
(statearr_54752_56920[(2)] = inst_54708);

(statearr_54752_56920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (9))){
var inst_54664 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54666 = [true];
var inst_54667 = cljs.core.PersistentHashMap.fromArrays(inst_54664,inst_54666);
var state_54716__$1 = state_54716;
var statearr_54753_56921 = state_54716__$1;
(statearr_54753_56921[(2)] = inst_54667);

(statearr_54753_56921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (5))){
var inst_54712 = (state_54716[(2)]);
var state_54716__$1 = state_54716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54716__$1,inst_54712);
} else {
if((state_val_54717 === (14))){
var inst_54675 = (state_54716[(13)]);
var state_54716__$1 = state_54716;
var statearr_54754_56922 = state_54716__$1;
(statearr_54754_56922[(2)] = inst_54675);

(statearr_54754_56922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (26))){
var state_54716__$1 = state_54716;
var statearr_54755_56923 = state_54716__$1;
(statearr_54755_56923[(2)] = null);

(statearr_54755_56923[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (16))){
var inst_54675 = (state_54716[(13)]);
var inst_54684 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_54675);
var state_54716__$1 = state_54716;
var statearr_54761_56924 = state_54716__$1;
(statearr_54761_56924[(2)] = inst_54684);

(statearr_54761_56924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (10))){
var inst_54655 = (state_54716[(7)]);
var inst_54671 = cljs.core.first(inst_54655);
var inst_54672 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_54671);
var state_54716__$1 = state_54716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54716__$1,(12),inst_54672);
} else {
if((state_val_54717 === (18))){
var inst_54688 = (state_54716[(2)]);
var state_54716__$1 = state_54716;
var statearr_54762_56925 = state_54716__$1;
(statearr_54762_56925[(2)] = inst_54688);

(statearr_54762_56925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54717 === (8))){
var inst_54710 = (state_54716[(2)]);
var state_54716__$1 = state_54716;
var statearr_54763_56926 = state_54716__$1;
(statearr_54763_56926[(2)] = inst_54710);

(statearr_54763_56926[(1)] = (5));


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
var statearr_54764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54764[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54764[(1)] = (1));

return statearr_54764;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54716){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54716);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54765){var ex__27576__auto__ = e54765;
var statearr_54766_56927 = state_54716;
(statearr_54766_56927[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54716[(4)]))){
var statearr_54767_56928 = state_54716;
(statearr_54767_56928[(1)] = cljs.core.first((state_54716[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56929 = state_54716;
state_54716 = G__56929;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54716){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54768 = f__27596__auto__();
(statearr_54768[(6)] = c__27595__auto__);

return statearr_54768;
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54326){
var self__ = this;
var G__54326__$1 = this;
return (new cljs.core.RecordIter((0),G__54326__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54328,other54329){
var self__ = this;
var this54328__$1 = this;
return (((!((other54329 == null)))) && ((((this54328__$1.constructor === other54329.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.user_uuid,other54329.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.graph_uuid,other54329.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.base_path,other54329.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.repo,other54329.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1._STAR_sync_state,other54329._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.rate,other54329.rate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1._STAR_txid,other54329._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.remote__GT_local_syncer,other54329.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.stop_chan,other54329.stop_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.stopped,other54329.stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54328__$1.__extmap,other54329.__extmap)))))))))))))))))))))))));
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k54327){
var self__ = this;
var this__5347__auto____$1 = this;
var G__54782 = k54327;
var G__54782__$1 = (((G__54782 instanceof cljs.core.Keyword))?G__54782.fqn:null);
switch (G__54782__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k54327);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__54326){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__54785 = cljs.core.keyword_identical_QMARK_;
var expr__54786 = k__5349__auto__;
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(G__54326,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,G__54326,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,G__54326,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__54326,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__54326,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,G__54326,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,G__54326,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,G__54326,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,G__54326,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54785.cljs$core$IFn$_invoke$arity$2 ? pred__54785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__54786) : pred__54785.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__54786)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,G__54326,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__54326),null));
}
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__54326){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,G__54326,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$map__GT_Local__GT_RemoteSyncer(G__54330){
var extmap__5382__auto__ = (function (){var G__54871 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54330,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], 0));
if(cljs.core.record_QMARK_(G__54330)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54871);
} else {
return G__54871;
}
})();
return (new frontend.fs.sync.Local__GT_RemoteSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983).cljs$core$IFn$_invoke$arity$1(G__54330),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__54330),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54931){
var state_val_54932 = (state_54931[(1)]);
if((state_val_54932 === (7))){
var inst_54913 = this$.remote__GT_local(null,args);
var state_54931__$1 = state_54931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54931__$1,(8),inst_54913);
} else {
if((state_val_54932 === (1))){
var state_54931__$1 = state_54931;
var G__54933_56932 = self__.state;
var G__54933_56933__$1 = (((G__54933_56932 instanceof cljs.core.Keyword))?G__54933_56932.fqn:null);
switch (G__54933_56933__$1) {
case "frontend.fs.sync/idle":
var statearr_54934_56935 = state_54931__$1;
(statearr_54934_56935[(1)] = (3));


break;
case "frontend.fs.sync/local->remote":
var statearr_54935_56936 = state_54931__$1;
(statearr_54935_56936[(1)] = (5));


break;
case "frontend.fs.sync/remote->local":
var statearr_54936_56937 = state_54931__$1;
(statearr_54936_56937[(1)] = (7));


break;
case "frontend.fs.sync/local->remote-full-sync":
var statearr_54937_56938 = state_54931__$1;
(statearr_54937_56938[(1)] = (9));


break;
case "frontend.fs.sync/remote->local-full-sync":
var statearr_54938_56939 = state_54931__$1;
(statearr_54938_56939[(1)] = (11));


break;
case "frontend.fs.sync/stop":
var statearr_54939_56940 = state_54931__$1;
(statearr_54939_56940[(1)] = (13));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54933_56933__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54932 === (4))){
var inst_54907 = (state_54931[(2)]);
var state_54931__$1 = state_54931;
var statearr_54940_56941 = state_54931__$1;
(statearr_54940_56941[(2)] = inst_54907);

(statearr_54940_56941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54932 === (13))){
var inst_54925 = this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(null);
var state_54931__$1 = state_54931;
var statearr_54941_56942 = state_54931__$1;
(statearr_54941_56942[(2)] = inst_54925);

(statearr_54941_56942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54932 === (6))){
var inst_54911 = (state_54931[(2)]);
var state_54931__$1 = state_54931;
var statearr_54942_56943 = state_54931__$1;
(statearr_54942_56943[(2)] = inst_54911);

(statearr_54942_56943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54932 === (3))){
var inst_54905 = this$.idle();
var state_54931__$1 = state_54931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54931__$1,(4),inst_54905);
} else {
if((state_val_54932 === (12))){
var inst_54923 = (state_54931[(2)]);
var state_54931__$1 = state_54931;
var statearr_54943_56944 = state_54931__$1;
(statearr_54943_56944[(2)] = inst_54923);

(statearr_54943_56944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54932 === (2))){
var inst_54928 = (state_54931[(2)]);
var state_54931__$1 = state_54931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54931__$1,inst_54928);
} else {
if((state_val_54932 === (11))){
var inst_54921 = this$.remote__GT_local_full_sync(null);
var state_54931__$1 = state_54931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54931__$1,(12),inst_54921);
} else {
if((state_val_54932 === (9))){
var inst_54917 = this$.full_sync();
var state_54931__$1 = state_54931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54931__$1,(10),inst_54917);
} else {
if((state_val_54932 === (5))){
var inst_54909 = this$.local__GT_remote(args);
var state_54931__$1 = state_54931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54931__$1,(6),inst_54909);
} else {
if((state_val_54932 === (10))){
var inst_54919 = (state_54931[(2)]);
var state_54931__$1 = state_54931;
var statearr_54944_56945 = state_54931__$1;
(statearr_54944_56945[(2)] = inst_54919);

(statearr_54944_56945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54932 === (8))){
var inst_54915 = (state_54931[(2)]);
var state_54931__$1 = state_54931;
var statearr_54945_56946 = state_54931__$1;
(statearr_54945_56946[(2)] = inst_54915);

(statearr_54945_56946[(1)] = (2));


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
var statearr_54946 = [null,null,null,null,null,null,null];
(statearr_54946[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54946[(1)] = (1));

return statearr_54946;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54931){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54931);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54947){var ex__27576__auto__ = e54947;
var statearr_54948_56947 = state_54931;
(statearr_54948_56947[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54931[(4)]))){
var statearr_54949_56948 = state_54931;
(statearr_54949_56948[(1)] = cljs.core.first((state_54931[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56949 = state_54931;
state_54931 = G__56949;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54931){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54950 = f__27596__auto__();
(statearr_54950[(6)] = c__27595__auto__);

return statearr_54950;
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

var c__27595__auto___56950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55109){
var state_val_55110 = (state_55109[(1)]);
if((state_val_55110 === (7))){
var inst_55041 = (state_55109[(2)]);
var inst_55042 = cljs.core.__destructure_map(inst_55041);
var inst_55043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55042,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55042,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_55045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55042,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_55046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55042,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var state_55109__$1 = (function (){var statearr_55111 = state_55109;
(statearr_55111[(7)] = inst_55044);

(statearr_55111[(8)] = inst_55046);

(statearr_55111[(9)] = inst_55045);

return statearr_55111;
})();
if(cljs.core.truth_(inst_55043)){
var statearr_55112_56951 = state_55109__$1;
(statearr_55112_56951[(1)] = (26));

} else {
var statearr_55113_56952 = state_55109__$1;
(statearr_55113_56952[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (20))){
var inst_55021 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55022 = [true];
var inst_55023 = cljs.core.PersistentHashMap.fromArrays(inst_55021,inst_55022);
var state_55109__$1 = state_55109;
var statearr_55114_56953 = state_55109__$1;
(statearr_55114_56953[(2)] = inst_55023);

(statearr_55114_56953[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (27))){
var inst_55044 = (state_55109[(7)]);
var state_55109__$1 = state_55109;
if(cljs.core.truth_(inst_55044)){
var statearr_55115_56954 = state_55109__$1;
(statearr_55115_56954[(1)] = (30));

} else {
var statearr_55116_56955 = state_55109__$1;
(statearr_55116_56955[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (1))){
var state_55109__$1 = state_55109;
var statearr_55117_56956 = state_55109__$1;
(statearr_55117_56956[(2)] = null);

(statearr_55117_56956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (24))){
var state_55109__$1 = state_55109;
var statearr_55118_56957 = state_55109__$1;
(statearr_55118_56957[(2)] = null);

(statearr_55118_56957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (39))){
var inst_55078 = (state_55109[(2)]);
var state_55109__$1 = (function (){var statearr_55119 = state_55109;
(statearr_55119[(10)] = inst_55078);

return statearr_55119;
})();
var statearr_55120_56958 = state_55109__$1;
(statearr_55120_56958[(2)] = null);

(statearr_55120_56958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (46))){
var state_55109__$1 = state_55109;
var statearr_55121_56959 = state_55109__$1;
(statearr_55121_56959[(2)] = null);

(statearr_55121_56959[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (4))){
var inst_54976 = (state_55109[(11)]);
var inst_54978 = (state_55109[(12)]);
var inst_54964 = (state_55109[(13)]);
var inst_54976__$1 = (state_55109[(2)]);
var inst_54977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54976__$1,(0),null);
var inst_54978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54976__$1,(1),null);
var inst_54979 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54978__$1,inst_54964);
var state_55109__$1 = (function (){var statearr_55122 = state_55109;
(statearr_55122[(11)] = inst_54976__$1);

(statearr_55122[(14)] = inst_54977);

(statearr_55122[(12)] = inst_54978__$1);

return statearr_55122;
})();
if(inst_54979){
var statearr_55123_56960 = state_55109__$1;
(statearr_55123_56960[(1)] = (5));

} else {
var statearr_55124_56961 = state_55109__$1;
(statearr_55124_56961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (15))){
var inst_54978 = (state_55109[(12)]);
var inst_54968 = (state_55109[(15)]);
var inst_55008 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54978,inst_54968);
var state_55109__$1 = state_55109;
if(inst_55008){
var statearr_55125_56962 = state_55109__$1;
(statearr_55125_56962[(1)] = (17));

} else {
var statearr_55126_56963 = state_55109__$1;
(statearr_55126_56963[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (48))){
var inst_55095 = (state_55109[(2)]);
var state_55109__$1 = (function (){var statearr_55127 = state_55109;
(statearr_55127[(16)] = inst_55095);

return statearr_55127;
})();
var statearr_55128_56964 = state_55109__$1;
(statearr_55128_56964[(2)] = null);

(statearr_55128_56964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (21))){
var inst_54978 = (state_55109[(12)]);
var inst_55025 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54978,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_55109__$1 = state_55109;
if(inst_55025){
var statearr_55129_56965 = state_55109__$1;
(statearr_55129_56965[(1)] = (23));

} else {
var statearr_55130_56966 = state_55109__$1;
(statearr_55130_56966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (31))){
var inst_55046 = (state_55109[(8)]);
var state_55109__$1 = state_55109;
if(cljs.core.truth_(inst_55046)){
var statearr_55131_56967 = state_55109__$1;
(statearr_55131_56967[(1)] = (41));

} else {
var statearr_55132_56968 = state_55109__$1;
(statearr_55132_56968[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (32))){
var inst_55103 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55133_56969 = state_55109__$1;
(statearr_55133_56969[(2)] = inst_55103);

(statearr_55133_56969[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (40))){
var inst_55075 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55134_56970 = state_55109__$1;
(statearr_55134_56970[(2)] = inst_55075);

(statearr_55134_56970[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (33))){
var inst_55058 = [new cljs.core.Keyword(null,"txid","txid",1606205478)];
var inst_55059 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_55109__$1 = (function (){var statearr_55135 = state_55109;
(statearr_55135[(17)] = inst_55058);

return statearr_55135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55109__$1,(36),inst_55059);
} else {
if((state_val_55110 === (13))){
var inst_55037 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55136_56971 = state_55109__$1;
(statearr_55136_56971[(2)] = inst_55037);

(statearr_55136_56971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (22))){
var inst_55031 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55137_56972 = state_55109__$1;
(statearr_55137_56972[(2)] = inst_55031);

(statearr_55137_56972[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (36))){
var inst_55058 = (state_55109[(17)]);
var inst_55061 = (state_55109[(2)]);
var inst_55062 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_55061);
var inst_55063 = [inst_55062];
var inst_55064 = cljs.core.PersistentHashMap.fromArrays(inst_55058,inst_55063);
var state_55109__$1 = state_55109;
var statearr_55138_56973 = state_55109__$1;
(statearr_55138_56973[(2)] = inst_55064);

(statearr_55138_56973[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (41))){
var inst_55046 = (state_55109[(8)]);
var inst_55082 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55083 = [inst_55046];
var inst_55084 = cljs.core.PersistentHashMap.fromArrays(inst_55082,inst_55083);
var state_55109__$1 = state_55109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55109__$1,(44),self__.ops_chan,inst_55084);
} else {
if((state_val_55110 === (43))){
var inst_55101 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55139_56974 = state_55109__$1;
(statearr_55139_56974[(2)] = inst_55101);

(statearr_55139_56974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (29))){
var inst_55053 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55140_56975 = state_55109__$1;
(statearr_55140_56975[(2)] = inst_55053);

(statearr_55140_56975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (44))){
var inst_55086 = (state_55109[(2)]);
var state_55109__$1 = (function (){var statearr_55141 = state_55109;
(statearr_55141[(18)] = inst_55086);

return statearr_55141;
})();
var statearr_55142_56976 = state_55109__$1;
(statearr_55142_56976[(2)] = null);

(statearr_55142_56976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (6))){
var inst_54978 = (state_55109[(12)]);
var inst_54965 = (state_55109[(19)]);
var inst_54985 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54978,inst_54965);
var state_55109__$1 = state_55109;
if(inst_54985){
var statearr_55143_56977 = state_55109__$1;
(statearr_55143_56977[(1)] = (8));

} else {
var statearr_55144_56978 = state_55109__$1;
(statearr_55144_56978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (28))){
var inst_55105 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55145_56979 = state_55109__$1;
(statearr_55145_56979[(2)] = inst_55105);

(statearr_55145_56979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (25))){
var inst_55029 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55146_56980 = state_55109__$1;
(statearr_55146_56980[(2)] = inst_55029);

(statearr_55146_56980[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (34))){
var inst_55044 = (state_55109[(7)]);
var state_55109__$1 = state_55109;
var statearr_55147_56981 = state_55109__$1;
(statearr_55147_56981[(2)] = inst_55044);

(statearr_55147_56981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (17))){
var inst_54976 = (state_55109[(11)]);
var inst_55013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54976,(0),null);
var inst_55014 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local changes:",inst_55013], 0));
var inst_55015 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55016 = [inst_55013];
var inst_55017 = cljs.core.PersistentHashMap.fromArrays(inst_55015,inst_55016);
var state_55109__$1 = (function (){var statearr_55148 = state_55109;
(statearr_55148[(20)] = inst_55014);

return statearr_55148;
})();
var statearr_55149_56982 = state_55109__$1;
(statearr_55149_56982[(2)] = inst_55017);

(statearr_55149_56982[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (3))){
var inst_55107 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55109__$1,inst_55107);
} else {
if((state_val_55110 === (12))){
var inst_54978 = (state_55109[(12)]);
var inst_54967 = (state_55109[(21)]);
var inst_54997 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54978,inst_54967);
var state_55109__$1 = state_55109;
if(inst_54997){
var statearr_55150_56983 = state_55109__$1;
(statearr_55150_56983[(1)] = (14));

} else {
var statearr_55151_56984 = state_55109__$1;
(statearr_55151_56984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (2))){
var inst_54968 = (state_55109[(15)]);
var inst_54964 = (state_55109[(13)]);
var inst_54966 = (state_55109[(22)]);
var inst_54965 = (state_55109[(19)]);
var inst_54971 = (state_55109[(23)]);
var inst_54967 = (state_55109[(21)]);
var inst_54964__$1 = self__.stop_sync_chan;
var inst_54965__$1 = self__.remote__GT_local_sync_chan;
var inst_54966__$1 = self__.full_sync_chan;
var inst_54967__$1 = self__._remote_change_chan;
var inst_54968__$1 = self__.ratelimit_local_changes_chan;
var inst_54969 = ((20) * (60));
var inst_54970 = (inst_54969 * (1000));
var inst_54971__$1 = cljs.core.async.timeout(inst_54970);
var inst_54972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54973 = [inst_54964__$1,inst_54965__$1,inst_54966__$1,inst_54967__$1,inst_54968__$1,inst_54971__$1];
var inst_54974 = (new cljs.core.PersistentVector(null,6,(5),inst_54972,inst_54973,null));
var state_55109__$1 = (function (){var statearr_55152 = state_55109;
(statearr_55152[(15)] = inst_54968__$1);

(statearr_55152[(13)] = inst_54964__$1);

(statearr_55152[(22)] = inst_54966__$1);

(statearr_55152[(19)] = inst_54965__$1);

(statearr_55152[(23)] = inst_54971__$1);

(statearr_55152[(21)] = inst_54967__$1);

return statearr_55152;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_55109__$1,(4),inst_54974,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_55110 === (23))){
var inst_54977 = (state_55109[(14)]);
var state_55109__$1 = state_55109;
var statearr_55172_56985 = state_55109__$1;
(statearr_55172_56985[(2)] = inst_54977);

(statearr_55172_56985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (47))){
var inst_55099 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55178_56986 = state_55109__$1;
(statearr_55178_56986[(2)] = inst_55099);

(statearr_55178_56986[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (35))){
var inst_55067 = (state_55109[(24)]);
var inst_55067__$1 = (state_55109[(2)]);
var inst_55068 = (inst_55067__$1 == null);
var inst_55069 = cljs.core.not(inst_55068);
var state_55109__$1 = (function (){var statearr_55179 = state_55109;
(statearr_55179[(24)] = inst_55067__$1);

return statearr_55179;
})();
if(inst_55069){
var statearr_55180_56987 = state_55109__$1;
(statearr_55180_56987[(1)] = (37));

} else {
var statearr_55181_56988 = state_55109__$1;
(statearr_55181_56988[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (19))){
var inst_55033 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55182_56989 = state_55109__$1;
(statearr_55182_56989[(2)] = inst_55033);

(statearr_55182_56989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (11))){
var inst_54993 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_54994 = [true];
var inst_54995 = cljs.core.PersistentHashMap.fromArrays(inst_54993,inst_54994);
var state_55109__$1 = state_55109;
var statearr_55183_56990 = state_55109__$1;
(statearr_55183_56990[(2)] = inst_54995);

(statearr_55183_56990[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (9))){
var inst_54978 = (state_55109[(12)]);
var inst_54966 = (state_55109[(22)]);
var inst_54991 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54978,inst_54966);
var state_55109__$1 = state_55109;
if(inst_54991){
var statearr_55184_56991 = state_55109__$1;
(statearr_55184_56991[(1)] = (11));

} else {
var statearr_55185_56992 = state_55109__$1;
(statearr_55185_56992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (5))){
var inst_54981 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54982 = [true];
var inst_54983 = cljs.core.PersistentHashMap.fromArrays(inst_54981,inst_54982);
var state_55109__$1 = state_55109;
var statearr_55186_56993 = state_55109__$1;
(statearr_55186_56993[(2)] = inst_54983);

(statearr_55186_56993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (14))){
var inst_54976 = (state_55109[(11)]);
var inst_55002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54976,(0),null);
var inst_55003 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote change:",inst_55002], 0));
var inst_55004 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55005 = [inst_55002];
var inst_55006 = cljs.core.PersistentHashMap.fromArrays(inst_55004,inst_55005);
var state_55109__$1 = (function (){var statearr_55187 = state_55109;
(statearr_55187[(25)] = inst_55003);

return statearr_55187;
})();
var statearr_55188_56994 = state_55109__$1;
(statearr_55188_56994[(2)] = inst_55006);

(statearr_55188_56994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (45))){
var inst_55090 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55091 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55092 = [true];
var inst_55093 = cljs.core.PersistentHashMap.fromArrays(inst_55091,inst_55092);
var state_55109__$1 = (function (){var statearr_55189 = state_55109;
(statearr_55189[(26)] = inst_55090);

return statearr_55189;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55109__$1,(48),self__.ops_chan,inst_55093);
} else {
if((state_val_55110 === (26))){
var inst_55048 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55049 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_55050 = [true];
var inst_55051 = cljs.core.PersistentHashMap.fromArrays(inst_55049,inst_55050);
var state_55109__$1 = (function (){var statearr_55193 = state_55109;
(statearr_55193[(27)] = inst_55048);

return statearr_55193;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55109__$1,(29),self__.ops_chan,inst_55051);
} else {
if((state_val_55110 === (16))){
var inst_55035 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55196_56995 = state_55109__$1;
(statearr_55196_56995[(2)] = inst_55035);

(statearr_55196_56995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (38))){
var state_55109__$1 = state_55109;
var statearr_55201_56996 = state_55109__$1;
(statearr_55201_56996[(2)] = null);

(statearr_55201_56996[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (30))){
var inst_55044 = (state_55109[(7)]);
var inst_55056 = inst_55044 === true;
var state_55109__$1 = state_55109;
if(cljs.core.truth_(inst_55056)){
var statearr_55202_56997 = state_55109__$1;
(statearr_55202_56997[(1)] = (33));

} else {
var statearr_55203_56998 = state_55109__$1;
(statearr_55203_56998[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (10))){
var inst_55039 = (state_55109[(2)]);
var state_55109__$1 = state_55109;
var statearr_55204_56999 = state_55109__$1;
(statearr_55204_56999[(2)] = inst_55039);

(statearr_55204_56999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (18))){
var inst_54978 = (state_55109[(12)]);
var inst_54971 = (state_55109[(23)]);
var inst_55019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54978,inst_54971);
var state_55109__$1 = state_55109;
if(inst_55019){
var statearr_55205_57000 = state_55109__$1;
(statearr_55205_57000[(1)] = (20));

} else {
var statearr_55206_57001 = state_55109__$1;
(statearr_55206_57001[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (42))){
var inst_55045 = (state_55109[(9)]);
var state_55109__$1 = state_55109;
if(cljs.core.truth_(inst_55045)){
var statearr_55207_57002 = state_55109__$1;
(statearr_55207_57002[(1)] = (45));

} else {
var statearr_55208_57003 = state_55109__$1;
(statearr_55208_57003[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55110 === (37))){
var inst_55067 = (state_55109[(24)]);
var inst_55071 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55072 = [inst_55067];
var inst_55073 = cljs.core.PersistentHashMap.fromArrays(inst_55071,inst_55072);
var state_55109__$1 = state_55109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55109__$1,(40),self__.ops_chan,inst_55073);
} else {
if((state_val_55110 === (8))){
var inst_54987 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_54988 = [true];
var inst_54989 = cljs.core.PersistentHashMap.fromArrays(inst_54987,inst_54988);
var state_55109__$1 = state_55109;
var statearr_55209_57004 = state_55109__$1;
(statearr_55209_57004[(2)] = inst_54989);

(statearr_55209_57004[(1)] = (10));


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
var statearr_55210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55210[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55210[(1)] = (1));

return statearr_55210;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55109){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55109);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55211){var ex__27576__auto__ = e55211;
var statearr_55212_57005 = state_55109;
(statearr_55212_57005[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55109[(4)]))){
var statearr_55213_57006 = state_55109;
(statearr_55213_57006[(1)] = cljs.core.first((state_55109[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57007 = state_55109;
state_55109 = G__57007;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55109){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55214 = f__27596__auto__();
(statearr_55214[(6)] = c__27595__auto___56950);

return statearr_55214;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55292){
var state_val_55293 = (state_55292[(1)]);
if((state_val_55293 === (7))){
var inst_55220 = (state_55292[(7)]);
var inst_55230 = [new cljs.core.Keyword(null,"remote","remote",-1593576576)];
var inst_55231 = [inst_55220];
var inst_55232 = cljs.core.PersistentHashMap.fromArrays(inst_55230,inst_55231);
var inst_55233 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),inst_55232);
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55292__$1,(10),inst_55233);
} else {
if((state_val_55293 === (20))){
var state_55292__$1 = state_55292;
var statearr_55300_57008 = state_55292__$1;
(statearr_55300_57008[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (1))){
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55292__$1,(2),self__.ops_chan);
} else {
if((state_val_55293 === (24))){
var state_55292__$1 = state_55292;
var statearr_55302_57009 = state_55292__$1;
(statearr_55302_57009[(2)] = null);

(statearr_55302_57009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (4))){
var inst_55220 = (state_55292[(7)]);
var state_55292__$1 = state_55292;
if(cljs.core.truth_(inst_55220)){
var statearr_55304_57010 = state_55292__$1;
(statearr_55304_57010[(1)] = (7));

} else {
var statearr_55305_57011 = state_55292__$1;
(statearr_55305_57011[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (15))){
var inst_55265 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null);
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55292__$1,(18),inst_55265);
} else {
if((state_val_55293 === (21))){
var inst_55282 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55306_57012 = state_55292__$1;
(statearr_55306_57012[(2)] = inst_55282);

(statearr_55306_57012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (13))){
var inst_55286 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55307_57013 = state_55292__$1;
(statearr_55307_57013[(2)] = inst_55286);

(statearr_55307_57013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (22))){
var inst_55272 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55308_57014 = state_55292__$1;
(statearr_55308_57014[(2)] = inst_55272);

(statearr_55308_57014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (6))){
var inst_55227 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55309_57015 = state_55292__$1;
(statearr_55309_57015[(2)] = inst_55227);

(statearr_55309_57015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (25))){
var inst_55280 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55310_57016 = state_55292__$1;
(statearr_55310_57016[(2)] = inst_55280);

(statearr_55310_57016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (17))){
var inst_55284 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55311_57017 = state_55292__$1;
(statearr_55311_57017[(2)] = inst_55284);

(statearr_55311_57017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (3))){
var inst_55225 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55292__$1,(6),inst_55225);
} else {
if((state_val_55293 === (12))){
var inst_55222 = (state_55292[(8)]);
var state_55292__$1 = state_55292;
if(cljs.core.truth_(inst_55222)){
var statearr_55312_57018 = state_55292__$1;
(statearr_55312_57018[(1)] = (15));

} else {
var statearr_55313_57019 = state_55292__$1;
(statearr_55313_57019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (2))){
var inst_55217 = (state_55292[(2)]);
var inst_55218 = cljs.core.__destructure_map(inst_55217);
var inst_55219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55218,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55218,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_55221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55218,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var inst_55222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55218,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_55223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55218,new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000));
var state_55292__$1 = (function (){var statearr_55314 = state_55292;
(statearr_55314[(9)] = inst_55221);

(statearr_55314[(7)] = inst_55220);

(statearr_55314[(8)] = inst_55222);

(statearr_55314[(10)] = inst_55223);

return statearr_55314;
})();
if(cljs.core.truth_(inst_55219)){
var statearr_55315_57020 = state_55292__$1;
(statearr_55315_57020[(1)] = (3));

} else {
var statearr_55316_57021 = state_55292__$1;
(statearr_55316_57021[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (23))){
var inst_55275 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55292__$1,(26),inst_55275);
} else {
if((state_val_55293 === (19))){
var inst_55270 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null);
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55292__$1,(22),inst_55270);
} else {
if((state_val_55293 === (11))){
var inst_55221 = (state_55292[(9)]);
var inst_55257 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_55258 = [inst_55221];
var inst_55259 = cljs.core.PersistentHashMap.fromArrays(inst_55257,inst_55258);
var inst_55260 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),inst_55259);
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55292__$1,(14),inst_55260);
} else {
if((state_val_55293 === (9))){
var inst_55288 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55317_57022 = state_55292__$1;
(statearr_55317_57022[(2)] = inst_55288);

(statearr_55317_57022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (5))){
var inst_55290 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55292__$1,inst_55290);
} else {
if((state_val_55293 === (14))){
var inst_55262 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55319_57023 = state_55292__$1;
(statearr_55319_57023[(2)] = inst_55262);

(statearr_55319_57023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (26))){
var inst_55277 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55320_57024 = state_55292__$1;
(statearr_55320_57024[(2)] = inst_55277);

(statearr_55320_57024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (16))){
var inst_55223 = (state_55292[(10)]);
var state_55292__$1 = state_55292;
if(cljs.core.truth_(inst_55223)){
var statearr_55322_57025 = state_55292__$1;
(statearr_55322_57025[(1)] = (19));

} else {
var statearr_55323_57026 = state_55292__$1;
(statearr_55323_57026[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (10))){
var inst_55235 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55324_57027 = state_55292__$1;
(statearr_55324_57027[(2)] = inst_55235);

(statearr_55324_57027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (18))){
var inst_55267 = (state_55292[(2)]);
var state_55292__$1 = state_55292;
var statearr_55325_57028 = state_55292__$1;
(statearr_55325_57028[(2)] = inst_55267);

(statearr_55325_57028[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55293 === (8))){
var inst_55221 = (state_55292[(9)]);
var state_55292__$1 = state_55292;
if(cljs.core.truth_(inst_55221)){
var statearr_55327_57029 = state_55292__$1;
(statearr_55327_57029[(1)] = (11));

} else {
var statearr_55328_57030 = state_55292__$1;
(statearr_55328_57030[(1)] = (12));

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
var statearr_55329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55329[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55329[(1)] = (1));

return statearr_55329;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55292){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55292);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55337){var ex__27576__auto__ = e55337;
var statearr_55338_57031 = state_55292;
(statearr_55338_57031[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55292[(4)]))){
var statearr_55339_57032 = state_55292;
(statearr_55339_57032[(1)] = cljs.core.first((state_55292[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57033 = state_55292;
state_55292 = G__57033;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55292){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55340 = f__27596__auto__();
(statearr_55340[(6)] = c__27595__auto__);

return statearr_55340;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55397){
var state_val_55398 = (state_55397[(1)]);
if((state_val_55398 === (7))){
var inst_55346 = (state_55397[(7)]);
var state_55397__$1 = state_55397;
var statearr_55399_57034 = state_55397__$1;
(statearr_55399_57034[(2)] = inst_55346);

(statearr_55399_57034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (20))){
var inst_55350 = (state_55397[(8)]);
var inst_55384 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full-sync",inst_55350], 0));
var inst_55385 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55397__$1 = (function (){var statearr_55400 = state_55397;
(statearr_55400[(9)] = inst_55384);

return statearr_55400;
})();
var statearr_55401_57035 = state_55397__$1;
(statearr_55401_57035[(2)] = inst_55385);

(statearr_55401_57035[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (1))){
var inst_55343 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(null);
var state_55397__$1 = state_55397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55397__$1,(2),inst_55343);
} else {
if((state_val_55398 === (4))){
var inst_55346 = (state_55397[(7)]);
var state_55397__$1 = state_55397;
var statearr_55406_57036 = state_55397__$1;
(statearr_55406_57036[(2)] = inst_55346);

(statearr_55406_57036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (15))){
var inst_55372 = (state_55397[(2)]);
var inst_55373 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55374 = [true];
var inst_55375 = cljs.core.PersistentHashMap.fromArrays(inst_55373,inst_55374);
var state_55397__$1 = (function (){var statearr_55407 = state_55397;
(statearr_55407[(10)] = inst_55372);

return statearr_55407;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55397__$1,(16),self__.ops_chan,inst_55375);
} else {
if((state_val_55398 === (21))){
var state_55397__$1 = state_55397;
var statearr_55409_57037 = state_55397__$1;
(statearr_55409_57037[(2)] = null);

(statearr_55409_57037[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (13))){
var inst_55351 = (state_55397[(11)]);
var state_55397__$1 = state_55397;
if(cljs.core.truth_(inst_55351)){
var statearr_55410_57038 = state_55397__$1;
(statearr_55410_57038[(1)] = (17));

} else {
var statearr_55411_57039 = state_55397__$1;
(statearr_55411_57039[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (22))){
var inst_55388 = (state_55397[(2)]);
var state_55397__$1 = state_55397;
var statearr_55412_57040 = state_55397__$1;
(statearr_55412_57040[(2)] = inst_55388);

(statearr_55412_57040[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (6))){
var inst_55346 = (state_55397[(7)]);
var inst_55356 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),inst_55346);
var state_55397__$1 = state_55397;
var statearr_55413_57041 = state_55397__$1;
(statearr_55413_57041[(2)] = inst_55356);

(statearr_55413_57041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (17))){
var inst_55381 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55397__$1 = state_55397;
var statearr_55414_57042 = state_55397__$1;
(statearr_55414_57042[(2)] = inst_55381);

(statearr_55414_57042[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (3))){
var inst_55353 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55354 = cljs.core.deref(inst_55353);
var state_55397__$1 = state_55397;
if(cljs.core.truth_(inst_55354)){
var statearr_55451_57043 = state_55397__$1;
(statearr_55451_57043[(1)] = (6));

} else {
var statearr_55453_57044 = state_55397__$1;
(statearr_55453_57044[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (12))){
var inst_55367 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55368 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55369 = [true];
var inst_55370 = cljs.core.PersistentHashMap.fromArrays(inst_55368,inst_55369);
var state_55397__$1 = (function (){var statearr_55462 = state_55397;
(statearr_55462[(12)] = inst_55367);

return statearr_55462;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55397__$1,(15),self__.ops_chan,inst_55370);
} else {
if((state_val_55398 === (2))){
var inst_55346 = (state_55397[(7)]);
var inst_55345 = (state_55397[(2)]);
var inst_55346__$1 = cljs.core.__destructure_map(inst_55345);
var inst_55347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55346__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55346__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_55350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55346__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55346__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_55397__$1 = (function (){var statearr_55518 = state_55397;
(statearr_55518[(8)] = inst_55350);

(statearr_55518[(13)] = inst_55348);

(statearr_55518[(7)] = inst_55346__$1);

(statearr_55518[(14)] = inst_55347);

(statearr_55518[(11)] = inst_55351);

return statearr_55518;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55519_57045 = state_55397__$1;
(statearr_55519_57045[(1)] = (3));

} else {
var statearr_55520_57046 = state_55397__$1;
(statearr_55520_57046[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (19))){
var inst_55390 = (state_55397[(2)]);
var state_55397__$1 = state_55397;
var statearr_55521_57047 = state_55397__$1;
(statearr_55521_57047[(2)] = inst_55390);

(statearr_55521_57047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (11))){
var inst_55394 = (state_55397[(2)]);
var state_55397__$1 = state_55397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55397__$1,inst_55394);
} else {
if((state_val_55398 === (9))){
var inst_55364 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55397__$1 = state_55397;
var statearr_55530_57048 = state_55397__$1;
(statearr_55530_57048[(2)] = inst_55364);

(statearr_55530_57048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (5))){
var inst_55347 = (state_55397[(14)]);
var inst_55362 = (state_55397[(2)]);
var state_55397__$1 = (function (){var statearr_55531 = state_55397;
(statearr_55531[(15)] = inst_55362);

return statearr_55531;
})();
if(cljs.core.truth_(inst_55347)){
var statearr_55532_57049 = state_55397__$1;
(statearr_55532_57049[(1)] = (9));

} else {
var statearr_55533_57050 = state_55397__$1;
(statearr_55533_57050[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (14))){
var inst_55392 = (state_55397[(2)]);
var state_55397__$1 = state_55397;
var statearr_55534_57051 = state_55397__$1;
(statearr_55534_57051[(2)] = inst_55392);

(statearr_55534_57051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (16))){
var inst_55377 = (state_55397[(2)]);
var inst_55378 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55397__$1 = (function (){var statearr_55539 = state_55397;
(statearr_55539[(16)] = inst_55377);

return statearr_55539;
})();
var statearr_55540_57052 = state_55397__$1;
(statearr_55540_57052[(2)] = inst_55378);

(statearr_55540_57052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (10))){
var inst_55348 = (state_55397[(13)]);
var state_55397__$1 = state_55397;
if(cljs.core.truth_(inst_55348)){
var statearr_55541_57053 = state_55397__$1;
(statearr_55541_57053[(1)] = (12));

} else {
var statearr_55542_57054 = state_55397__$1;
(statearr_55542_57054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (18))){
var inst_55350 = (state_55397[(8)]);
var state_55397__$1 = state_55397;
if(cljs.core.truth_(inst_55350)){
var statearr_55543_57055 = state_55397__$1;
(statearr_55543_57055[(1)] = (20));

} else {
var statearr_55544_57056 = state_55397__$1;
(statearr_55544_57056[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55398 === (8))){
var inst_55359 = (state_55397[(2)]);
var state_55397__$1 = state_55397;
var statearr_55545_57057 = state_55397__$1;
(statearr_55545_57057[(2)] = inst_55359);

(statearr_55545_57057[(1)] = (5));


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
var statearr_55554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55554[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55554[(1)] = (1));

return statearr_55554;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55397){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55397);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55555){var ex__27576__auto__ = e55555;
var statearr_55556_57058 = state_55397;
(statearr_55556_57058[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55397[(4)]))){
var statearr_55557_57059 = state_55397;
(statearr_55557_57059[(1)] = cljs.core.first((state_55397[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57060 = state_55397;
state_55397 = G__57060;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55397){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55558 = f__27596__auto__();
(statearr_55558[(6)] = c__27595__auto__);

return statearr_55558;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55588){
var state_val_55589 = (state_55588[(1)]);
if((state_val_55589 === (7))){
var inst_55565 = (state_55588[(7)]);
var state_55588__$1 = state_55588;
if(cljs.core.truth_(inst_55565)){
var statearr_55594_57061 = state_55588__$1;
(statearr_55594_57061[(1)] = (9));

} else {
var statearr_55595_57062 = state_55588__$1;
(statearr_55595_57062[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (1))){
var inst_55560 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(null);
var state_55588__$1 = state_55588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55588__$1,(2),inst_55560);
} else {
if((state_val_55589 === (4))){
var inst_55566 = (state_55588[(8)]);
var state_55588__$1 = state_55588;
if(cljs.core.truth_(inst_55566)){
var statearr_55600_57063 = state_55588__$1;
(statearr_55600_57063[(1)] = (6));

} else {
var statearr_55601_57064 = state_55588__$1;
(statearr_55601_57064[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (6))){
var inst_55571 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55588__$1 = state_55588;
var statearr_55602_57065 = state_55588__$1;
(statearr_55602_57065[(2)] = inst_55571);

(statearr_55602_57065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (3))){
var inst_55568 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55588__$1 = state_55588;
var statearr_55603_57066 = state_55588__$1;
(statearr_55603_57066[(2)] = inst_55568);

(statearr_55603_57066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (2))){
var inst_55562 = (state_55588[(2)]);
var inst_55563 = cljs.core.__destructure_map(inst_55562);
var inst_55564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55563,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55563,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55563,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_55588__$1 = (function (){var statearr_55604 = state_55588;
(statearr_55604[(8)] = inst_55566);

(statearr_55604[(7)] = inst_55565);

return statearr_55604;
})();
if(cljs.core.truth_(inst_55564)){
var statearr_55609_57067 = state_55588__$1;
(statearr_55609_57067[(1)] = (3));

} else {
var statearr_55610_57068 = state_55588__$1;
(statearr_55610_57068[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (11))){
var inst_55582 = (state_55588[(2)]);
var state_55588__$1 = state_55588;
var statearr_55615_57069 = state_55588__$1;
(statearr_55615_57069[(2)] = inst_55582);

(statearr_55615_57069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (9))){
var inst_55565 = (state_55588[(7)]);
var inst_55578 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local-full-sync",inst_55565], 0));
var inst_55579 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55588__$1 = (function (){var statearr_55616 = state_55588;
(statearr_55616[(9)] = inst_55578);

return statearr_55616;
})();
var statearr_55617_57070 = state_55588__$1;
(statearr_55617_57070[(2)] = inst_55579);

(statearr_55617_57070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (5))){
var inst_55586 = (state_55588[(2)]);
var state_55588__$1 = state_55588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55588__$1,inst_55586);
} else {
if((state_val_55589 === (10))){
var state_55588__$1 = state_55588;
var statearr_55618_57071 = state_55588__$1;
(statearr_55618_57071[(2)] = null);

(statearr_55618_57071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55589 === (8))){
var inst_55584 = (state_55588[(2)]);
var state_55588__$1 = state_55588;
var statearr_55619_57072 = state_55588__$1;
(statearr_55619_57072[(2)] = inst_55584);

(statearr_55619_57072[(1)] = (5));


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
var statearr_55620 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55620[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55620[(1)] = (1));

return statearr_55620;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55588){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55588);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55646){var ex__27576__auto__ = e55646;
var statearr_55647_57073 = state_55588;
(statearr_55647_57073[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55588[(4)]))){
var statearr_55653_57074 = state_55588;
(statearr_55653_57074[(1)] = cljs.core.first((state_55588[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57075 = state_55588;
state_55588 = G__57075;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55588){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55666 = f__27596__auto__();
(statearr_55666[(6)] = c__27595__auto__);

return statearr_55666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local = (function (_next_state,p__55667){
var self__ = this;
var map__55668 = p__55667;
var map__55668__$1 = cljs.core.__destructure_map(map__55668);
var remote_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55748){
var state_val_55749 = (state_55748[(1)]);
if((state_val_55749 === (7))){
var inst_55687 = (state_55748[(2)]);
var state_55748__$1 = state_55748;
if(cljs.core.truth_(inst_55687)){
var statearr_55750_57076 = state_55748__$1;
(statearr_55750_57076[(1)] = (8));

} else {
var statearr_55751_57077 = state_55748__$1;
(statearr_55751_57077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (20))){
var inst_55744 = (state_55748[(2)]);
var state_55748__$1 = state_55748;
var statearr_55752_57078 = state_55748__$1;
(statearr_55752_57078[(2)] = inst_55744);

(statearr_55752_57078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (27))){
var inst_55699 = (state_55748[(7)]);
var state_55748__$1 = state_55748;
if(cljs.core.truth_(inst_55699)){
var statearr_55753_57079 = state_55748__$1;
(statearr_55753_57079[(1)] = (29));

} else {
var statearr_55754_57080 = state_55748__$1;
(statearr_55754_57080[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (1))){
var inst_55673 = (state_55748[(8)]);
var inst_55673__$1 = remote_val;
var inst_55675 = (inst_55673__$1 == null);
var state_55748__$1 = (function (){var statearr_55755 = state_55748;
(statearr_55755[(8)] = inst_55673__$1);

return statearr_55755;
})();
if(cljs.core.truth_(inst_55675)){
var statearr_55756_57081 = state_55748__$1;
(statearr_55756_57081[(1)] = (2));

} else {
var statearr_55757_57082 = state_55748__$1;
(statearr_55757_57082[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (24))){
var inst_55700 = (state_55748[(9)]);
var state_55748__$1 = state_55748;
if(cljs.core.truth_(inst_55700)){
var statearr_55758_57083 = state_55748__$1;
(statearr_55758_57083[(1)] = (26));

} else {
var statearr_55759_57084 = state_55748__$1;
(statearr_55759_57084[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (4))){
var inst_55680 = (state_55748[(10)]);
var inst_55680__$1 = (state_55748[(2)]);
var inst_55681 = (inst_55680__$1 == null);
var state_55748__$1 = (function (){var statearr_55761 = state_55748;
(statearr_55761[(10)] = inst_55680__$1);

return statearr_55761;
})();
if(cljs.core.truth_(inst_55681)){
var statearr_55762_57085 = state_55748__$1;
(statearr_55762_57085[(1)] = (5));

} else {
var statearr_55763_57086 = state_55748__$1;
(statearr_55763_57086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (15))){
var inst_55697 = (state_55748[(11)]);
var inst_55706 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),inst_55697);
var state_55748__$1 = state_55748;
var statearr_55764_57087 = state_55748__$1;
(statearr_55764_57087[(2)] = inst_55706);

(statearr_55764_57087[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (21))){
var inst_55719 = (state_55748[(2)]);
var inst_55720 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55721 = [true];
var inst_55722 = cljs.core.PersistentHashMap.fromArrays(inst_55720,inst_55721);
var state_55748__$1 = (function (){var statearr_55776 = state_55748;
(statearr_55776[(12)] = inst_55719);

return statearr_55776;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55748__$1,(22),self__.ops_chan,inst_55722);
} else {
if((state_val_55749 === (31))){
var inst_55738 = (state_55748[(2)]);
var state_55748__$1 = state_55748;
var statearr_55777_57088 = state_55748__$1;
(statearr_55777_57088[(2)] = inst_55738);

(statearr_55777_57088[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (13))){
var inst_55697 = (state_55748[(11)]);
var state_55748__$1 = state_55748;
var statearr_55778_57089 = state_55748__$1;
(statearr_55778_57089[(2)] = inst_55697);

(statearr_55778_57089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (22))){
var inst_55724 = (state_55748[(2)]);
var inst_55725 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55748__$1 = (function (){var statearr_55783 = state_55748;
(statearr_55783[(13)] = inst_55724);

return statearr_55783;
})();
var statearr_55784_57090 = state_55748__$1;
(statearr_55784_57090[(2)] = inst_55725);

(statearr_55784_57090[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (29))){
var inst_55699 = (state_55748[(7)]);
var inst_55734 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local err",inst_55699], 0));
var inst_55735 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55748__$1 = (function (){var statearr_55785 = state_55748;
(statearr_55785[(14)] = inst_55734);

return statearr_55785;
})();
var statearr_55786_57091 = state_55748__$1;
(statearr_55786_57091[(2)] = inst_55735);

(statearr_55786_57091[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (6))){
var inst_55680 = (state_55748[(10)]);
var inst_55684 = cljs.core.deref(self__._STAR_txid);
var inst_55685 = (inst_55680 <= inst_55684);
var state_55748__$1 = state_55748;
var statearr_55787_57092 = state_55748__$1;
(statearr_55787_57092[(2)] = inst_55685);

(statearr_55787_57092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (28))){
var inst_55740 = (state_55748[(2)]);
var state_55748__$1 = state_55748;
var statearr_55788_57093 = state_55748__$1;
(statearr_55788_57093[(2)] = inst_55740);

(statearr_55788_57093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (25))){
var inst_55742 = (state_55748[(2)]);
var state_55748__$1 = state_55748;
var statearr_55789_57094 = state_55748__$1;
(statearr_55789_57094[(2)] = inst_55742);

(statearr_55789_57094[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (17))){
var inst_55709 = (state_55748[(2)]);
var state_55748__$1 = state_55748;
var statearr_55794_57095 = state_55748__$1;
(statearr_55794_57095[(2)] = inst_55709);

(statearr_55794_57095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (3))){
var inst_55673 = (state_55748[(8)]);
var inst_55678 = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(inst_55673);
var state_55748__$1 = state_55748;
var statearr_55795_57096 = state_55748__$1;
(statearr_55795_57096[(2)] = inst_55678);

(statearr_55795_57096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (12))){
var inst_55703 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55704 = cljs.core.deref(inst_55703);
var state_55748__$1 = state_55748;
if(cljs.core.truth_(inst_55704)){
var statearr_55796_57097 = state_55748__$1;
(statearr_55796_57097[(1)] = (15));

} else {
var statearr_55797_57098 = state_55748__$1;
(statearr_55797_57098[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (2))){
var state_55748__$1 = state_55748;
var statearr_55798_57099 = state_55748__$1;
(statearr_55798_57099[(2)] = null);

(statearr_55798_57099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (23))){
var inst_55728 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55748__$1 = state_55748;
var statearr_55799_57100 = state_55748__$1;
(statearr_55799_57100[(2)] = inst_55728);

(statearr_55799_57100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (19))){
var inst_55698 = (state_55748[(15)]);
var state_55748__$1 = state_55748;
if(cljs.core.truth_(inst_55698)){
var statearr_55800_57101 = state_55748__$1;
(statearr_55800_57101[(1)] = (23));

} else {
var statearr_55801_57102 = state_55748__$1;
(statearr_55801_57102[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (11))){
var inst_55697 = (state_55748[(11)]);
var inst_55696 = (state_55748[(2)]);
var inst_55697__$1 = cljs.core.__destructure_map(inst_55696);
var inst_55698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55697__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55697__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55697__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55697__$1,new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586));
var state_55748__$1 = (function (){var statearr_55802 = state_55748;
(statearr_55802[(9)] = inst_55700);

(statearr_55802[(11)] = inst_55697__$1);

(statearr_55802[(16)] = inst_55701);

(statearr_55802[(15)] = inst_55698);

(statearr_55802[(7)] = inst_55699);

return statearr_55802;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55803_57103 = state_55748__$1;
(statearr_55803_57103[(1)] = (12));

} else {
var statearr_55804_57104 = state_55748__$1;
(statearr_55804_57104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (9))){
var inst_55694 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(null);
var state_55748__$1 = state_55748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55748__$1,(11),inst_55694);
} else {
if((state_val_55749 === (5))){
var state_55748__$1 = state_55748;
var statearr_55807_57105 = state_55748__$1;
(statearr_55807_57105[(2)] = null);

(statearr_55807_57105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (14))){
var inst_55701 = (state_55748[(16)]);
var inst_55712 = (state_55748[(2)]);
var state_55748__$1 = (function (){var statearr_55808 = state_55748;
(statearr_55808[(17)] = inst_55712);

return statearr_55808;
})();
if(cljs.core.truth_(inst_55701)){
var statearr_55810_57106 = state_55748__$1;
(statearr_55810_57106[(1)] = (18));

} else {
var statearr_55811_57107 = state_55748__$1;
(statearr_55811_57107[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (26))){
var inst_55731 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55748__$1 = state_55748;
var statearr_55812_57108 = state_55748__$1;
(statearr_55812_57108[(2)] = inst_55731);

(statearr_55812_57108[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (16))){
var inst_55697 = (state_55748[(11)]);
var state_55748__$1 = state_55748;
var statearr_55813_57109 = state_55748__$1;
(statearr_55813_57109[(2)] = inst_55697);

(statearr_55813_57109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (30))){
var state_55748__$1 = state_55748;
var statearr_55814_57110 = state_55748__$1;
(statearr_55814_57110[(2)] = null);

(statearr_55814_57110[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55749 === (10))){
var inst_55746 = (state_55748[(2)]);
var state_55748__$1 = state_55748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55748__$1,inst_55746);
} else {
if((state_val_55749 === (18))){
var inst_55714 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55715 = [new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000)];
var inst_55716 = [true];
var inst_55717 = cljs.core.PersistentHashMap.fromArrays(inst_55715,inst_55716);
var state_55748__$1 = (function (){var statearr_55815 = state_55748;
(statearr_55815[(18)] = inst_55714);

return statearr_55815;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55748__$1,(21),self__.ops_chan,inst_55717);
} else {
if((state_val_55749 === (8))){
var inst_55689 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55748__$1 = state_55748;
var statearr_55816_57111 = state_55748__$1;
(statearr_55816_57111[(2)] = inst_55689);

(statearr_55816_57111[(1)] = (10));


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
var statearr_55819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55819[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55819[(1)] = (1));

return statearr_55819;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55748){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55748);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55820){var ex__27576__auto__ = e55820;
var statearr_55821_57112 = state_55748;
(statearr_55821_57112[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55748[(4)]))){
var statearr_55822_57113 = state_55748;
(statearr_55822_57113[(1)] = cljs.core.first((state_55748[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57114 = state_55748;
state_55748 = G__57114;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55748){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55823 = f__27596__auto__();
(statearr_55823[(6)] = c__27595__auto__);

return statearr_55823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.local__GT_remote = (function (p__55826){
var self__ = this;
var map__55827 = p__55826;
var map__55827__$1 = cljs.core.__destructure_map(map__55827);
var local_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55827__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var this$ = this;
if((!((local_change == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_change),"\n","(some? local-change)"].join('')));
}

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55883){
var state_val_55884 = (state_55883[(1)]);
if((state_val_55884 === (7))){
var inst_55837 = (state_55883[(7)]);
var state_55883__$1 = state_55883;
var statearr_55885_57115 = state_55883__$1;
(statearr_55885_57115[(2)] = inst_55837);

(statearr_55885_57115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (1))){
var inst_55831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55832 = [local_change];
var inst_55833 = (new cljs.core.PersistentVector(null,1,(5),inst_55831,inst_55832,null));
var inst_55834 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_55833);
var state_55883__$1 = state_55883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55883__$1,(2),inst_55834);
} else {
if((state_val_55884 === (4))){
var inst_55837 = (state_55883[(7)]);
var state_55883__$1 = state_55883;
var statearr_55886_57116 = state_55883__$1;
(statearr_55886_57116[(2)] = inst_55837);

(statearr_55886_57116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (15))){
var inst_55861 = (state_55883[(2)]);
var inst_55862 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55863 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_55864 = [local_change];
var inst_55865 = cljs.core.PersistentHashMap.fromArrays(inst_55863,inst_55864);
var inst_55866 = [inst_55865];
var inst_55867 = cljs.core.PersistentHashMap.fromArrays(inst_55862,inst_55866);
var state_55883__$1 = (function (){var statearr_55887 = state_55883;
(statearr_55887[(8)] = inst_55861);

return statearr_55887;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55883__$1,(16),self__.ops_chan,inst_55867);
} else {
if((state_val_55884 === (13))){
var inst_55840 = (state_55883[(9)]);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55840)){
var statearr_55888_57117 = state_55883__$1;
(statearr_55888_57117[(1)] = (17));

} else {
var statearr_55889_57118 = state_55883__$1;
(statearr_55889_57118[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (6))){
var inst_55837 = (state_55883[(7)]);
var inst_55845 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_55837);
var state_55883__$1 = state_55883;
var statearr_55890_57119 = state_55883__$1;
(statearr_55890_57119[(2)] = inst_55845);

(statearr_55890_57119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (17))){
var inst_55840 = (state_55883[(9)]);
var inst_55873 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local->remote",inst_55840], 0));
var inst_55874 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55883__$1 = (function (){var statearr_55891 = state_55883;
(statearr_55891[(10)] = inst_55873);

return statearr_55891;
})();
var statearr_55892_57120 = state_55883__$1;
(statearr_55892_57120[(2)] = inst_55874);

(statearr_55892_57120[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (3))){
var inst_55842 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55843 = cljs.core.deref(inst_55842);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55843)){
var statearr_55893_57121 = state_55883__$1;
(statearr_55893_57121[(1)] = (6));

} else {
var statearr_55894_57122 = state_55883__$1;
(statearr_55894_57122[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (12))){
var inst_55856 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55857 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55858 = [true];
var inst_55859 = cljs.core.PersistentHashMap.fromArrays(inst_55857,inst_55858);
var state_55883__$1 = (function (){var statearr_55895 = state_55883;
(statearr_55895[(11)] = inst_55856);

return statearr_55895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55883__$1,(15),self__.ops_chan,inst_55859);
} else {
if((state_val_55884 === (2))){
var inst_55837 = (state_55883[(7)]);
var inst_55836 = (state_55883[(2)]);
var inst_55837__$1 = cljs.core.__destructure_map(inst_55836);
var inst_55838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55837__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55837__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_55840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55837__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_55883__$1 = (function (){var statearr_55896 = state_55883;
(statearr_55896[(12)] = inst_55839);

(statearr_55896[(13)] = inst_55838);

(statearr_55896[(9)] = inst_55840);

(statearr_55896[(7)] = inst_55837__$1);

return statearr_55896;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55897_57123 = state_55883__$1;
(statearr_55897_57123[(1)] = (3));

} else {
var statearr_55898_57124 = state_55883__$1;
(statearr_55898_57124[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (19))){
var inst_55877 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55899_57125 = state_55883__$1;
(statearr_55899_57125[(2)] = inst_55877);

(statearr_55899_57125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (11))){
var inst_55881 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55883__$1,inst_55881);
} else {
if((state_val_55884 === (9))){
var inst_55853 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55883__$1 = state_55883;
var statearr_55900_57126 = state_55883__$1;
(statearr_55900_57126[(2)] = inst_55853);

(statearr_55900_57126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (5))){
var inst_55838 = (state_55883[(13)]);
var inst_55851 = (state_55883[(2)]);
var state_55883__$1 = (function (){var statearr_55901 = state_55883;
(statearr_55901[(14)] = inst_55851);

return statearr_55901;
})();
if(cljs.core.truth_(inst_55838)){
var statearr_55902_57127 = state_55883__$1;
(statearr_55902_57127[(1)] = (9));

} else {
var statearr_55903_57128 = state_55883__$1;
(statearr_55903_57128[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (14))){
var inst_55879 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55904_57129 = state_55883__$1;
(statearr_55904_57129[(2)] = inst_55879);

(statearr_55904_57129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (16))){
var inst_55869 = (state_55883[(2)]);
var inst_55870 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55883__$1 = (function (){var statearr_55905 = state_55883;
(statearr_55905[(15)] = inst_55869);

return statearr_55905;
})();
var statearr_55907_57130 = state_55883__$1;
(statearr_55907_57130[(2)] = inst_55870);

(statearr_55907_57130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (10))){
var inst_55839 = (state_55883[(12)]);
var state_55883__$1 = state_55883;
if(cljs.core.truth_(inst_55839)){
var statearr_55908_57131 = state_55883__$1;
(statearr_55908_57131[(1)] = (12));

} else {
var statearr_55909_57132 = state_55883__$1;
(statearr_55909_57132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (18))){
var state_55883__$1 = state_55883;
var statearr_55910_57133 = state_55883__$1;
(statearr_55910_57133[(2)] = null);

(statearr_55910_57133[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55884 === (8))){
var inst_55848 = (state_55883[(2)]);
var state_55883__$1 = state_55883;
var statearr_55911_57134 = state_55883__$1;
(statearr_55911_57134[(2)] = inst_55848);

(statearr_55911_57134[(1)] = (5));


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
var statearr_55912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55912[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55912[(1)] = (1));

return statearr_55912;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55883){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55883);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55913){var ex__27576__auto__ = e55913;
var statearr_55917_57135 = state_55883;
(statearr_55917_57135[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55883[(4)]))){
var statearr_55918_57136 = state_55883;
(statearr_55918_57136[(1)] = cljs.core.first((state_55883[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57137 = state_55883;
state_55883 = G__57137;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55883){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55919 = f__27596__auto__();
(statearr_55919[(6)] = c__27595__auto__);

return statearr_55919;
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k54891,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__55922 = k54891;
var G__55922__$1 = (((G__55922 instanceof cljs.core.Keyword))?G__55922.fqn:null);
switch (G__55922__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54891,else__5343__auto__);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__55923){
var vec__55924 = p__55923;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55924,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55924,(1),null);
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54890){
var self__ = this;
var G__54890__$1 = this;
return (new cljs.core.RecordIter((0),G__54890__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54892,other54893){
var self__ = this;
var this54892__$1 = this;
return (((!((other54893 == null)))) && ((((this54892__$1.constructor === other54893.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.graph_uuid,other54893.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.base_path,other54893.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1._STAR_sync_state,other54893._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.local__GT_remote_syncer,other54893.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.remote__GT_local_syncer,other54893.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.full_sync_chan,other54893.full_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.stop_sync_chan,other54893.stop_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.remote__GT_local_sync_chan,other54893.remote__GT_local_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.local__GT_remote_sync_chan,other54893.local__GT_remote_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.local_changes_chan,other54893.local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.ratelimit_local_changes_chan,other54893.ratelimit_local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1._STAR_txid,other54893._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.state,other54893.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1._remote_change_chan,other54893._remote_change_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.__STAR_ws,other54893.__STAR_ws)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.stopped,other54893.stopped)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.ops_chan,other54893.ops_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54892__$1.__extmap,other54893.__extmap)))))))))))))))))))))))))))))))))))))));
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k54891){
var self__ = this;
var this__5347__auto____$1 = this;
var G__55927 = k54891;
var G__55927__$1 = (((G__55927 instanceof cljs.core.Keyword))?G__55927.fqn:null);
switch (G__55927__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k54891);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__54890){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__55928 = cljs.core.keyword_identical_QMARK_;
var expr__55929 = k__5349__auto__;
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__55929)))){
return (new frontend.fs.sync.SyncManager(G__54890,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,G__54890,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,G__54890,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,G__54890,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__54890,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,G__54890,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,G__54890,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,G__54890,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,G__54890,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,G__54890,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,G__54890,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,G__54890,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,G__54890,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,G__54890,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,G__54890,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,G__54890,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55928.cljs$core$IFn$_invoke$arity$2 ? pred__55928.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__55929) : pred__55928.call(null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__55929)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,G__54890,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__54890),null));
}
}
}
}
}
}
}
}
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__54890){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,G__54890,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_SyncManager = (function frontend$fs$sync$map__GT_SyncManager(G__54898){
var extmap__5382__auto__ = (function (){var G__55931 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54898,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], 0));
if(cljs.core.record_QMARK_(G__54898)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55931);
} else {
return G__55931;
}
})();
return (new frontend.fs.sync.SyncManager(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__54898),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587).cljs$core$IFn$_invoke$arity$1(G__54898),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55948){
var state_val_55949 = (state_55948[(1)]);
if((state_val_55949 === (1))){
var inst_55933 = (function (){return (function (p1__55932_SHARP_){
return cljs.core.contains_QMARK_(p1__55932_SHARP_,local_graph_uuid);
});
})();
var inst_55934 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_55948__$1 = (function (){var statearr_55950 = state_55948;
(statearr_55950[(7)] = inst_55933);

return statearr_55950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55948__$1,(2),inst_55934);
} else {
if((state_val_55949 === (2))){
var inst_55933 = (state_55948[(7)]);
var inst_55940 = (state_55948[(8)]);
var inst_55936 = (state_55948[(2)]);
var inst_55937 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_55936);
var inst_55938 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),inst_55937);
var inst_55939 = cljs.core.set(inst_55938);
var inst_55940__$1 = (inst_55933.cljs$core$IFn$_invoke$arity$1 ? inst_55933.cljs$core$IFn$_invoke$arity$1(inst_55939) : inst_55933.call(null,inst_55939));
var state_55948__$1 = (function (){var statearr_55951 = state_55948;
(statearr_55951[(8)] = inst_55940__$1);

return statearr_55951;
})();
if(cljs.core.truth_(inst_55940__$1)){
var statearr_55952_57189 = state_55948__$1;
(statearr_55952_57189[(1)] = (3));

} else {
var statearr_55953_57190 = state_55948__$1;
(statearr_55953_57190[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55949 === (3))){
var state_55948__$1 = state_55948;
var statearr_55954_57192 = state_55948__$1;
(statearr_55954_57192[(2)] = null);

(statearr_55954_57192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55949 === (4))){
var inst_55943 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","graph-deleted","file-sync/graph-deleted",110500245)], 0));
var inst_55944 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55943,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
var state_55948__$1 = state_55948;
var statearr_55955_57200 = state_55948__$1;
(statearr_55955_57200[(2)] = inst_55944);

(statearr_55955_57200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55949 === (5))){
var inst_55940 = (state_55948[(8)]);
var inst_55946 = (state_55948[(2)]);
var state_55948__$1 = (function (){var statearr_55956 = state_55948;
(statearr_55956[(9)] = inst_55946);

return statearr_55956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55948__$1,inst_55940);
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
var statearr_55957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55957[(0)] = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__);

(statearr_55957[(1)] = (1));

return statearr_55957;
});
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1 = (function (state_55948){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55948);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55958){var ex__27576__auto__ = e55958;
var statearr_55959_57201 = state_55948;
(statearr_55959_57201[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55948[(4)]))){
var statearr_55960_57202 = state_55948;
(statearr_55960_57202[(1)] = cljs.core.first((state_55948[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57203 = state_55948;
state_55948 = G__57203;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__ = function(state_55948){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1.call(this,state_55948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55961 = f__27596__auto__();
(statearr_55961[(6)] = c__27595__auto__);

return statearr_55961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.sync_start = (function frontend$fs$sync$sync_start(){
var vec__55962 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55962,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55962,(1),null);
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55962,(2),null);
var _STAR_sync_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.sync_state());
var current_user_uuid = frontend.handler.user.user_uuid();
var repo = frontend.state.get_current_repo();
var sm = frontend.fs.sync.sync_manager(current_user_uuid,graph_uuid,frontend.config.get_repo_dir(repo),repo,txid,_STAR_sync_state,frontend.fs.sync.full_sync_chan,frontend.fs.sync.stop_sync_chan,frontend.fs.sync.remote__GT_local_sync_chan,frontend.fs.sync.local__GT_remote_sync_chan,frontend.fs.sync.local_changes_chan);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_56010){
var state_val_56011 = (state_56010[(1)]);
if((state_val_56011 === (7))){
var inst_56006 = (state_56010[(2)]);
var state_56010__$1 = state_56010;
var statearr_56012_57215 = state_56010__$1;
(statearr_56012_57215[(2)] = inst_56006);

(statearr_56012_57215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (1))){
var inst_55965 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_55966 = cljs.core.count(inst_55965);
var inst_55967 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((3),inst_55966);
var state_56010__$1 = state_56010;
if(inst_55967){
var statearr_56013_57218 = state_56010__$1;
(statearr_56013_57218[(1)] = (2));

} else {
var statearr_56014_57219 = state_56010__$1;
(statearr_56014_57219[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (4))){
var inst_56008 = (state_56010[(2)]);
var state_56010__$1 = state_56010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56010__$1,inst_56008);
} else {
if((state_val_56011 === (6))){
var state_56010__$1 = state_56010;
var statearr_56015_57221 = state_56010__$1;
(statearr_56015_57221[(2)] = null);

(statearr_56015_57221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (3))){
var inst_55972 = frontend.fs.sync.check_graph_belong_to_current_user(current_user_uuid,user_uuid);
var state_56010__$1 = state_56010;
if(inst_55972){
var statearr_56016_57222 = state_56010__$1;
(statearr_56016_57222[(1)] = (5));

} else {
var statearr_56017_57223 = state_56010__$1;
(statearr_56017_57223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (12))){
var inst_55987 = (state_56010[(2)]);
var inst_55988 = frontend.fs.sync.drain_chan(frontend.fs.sync.local_changes_chan);
var inst_55989 = cljs.core.async.poll_BANG_(frontend.fs.sync.stop_sync_chan);
var inst_55990 = cljs.core.async.poll_BANG_(frontend.fs.sync.remote__GT_local_sync_chan);
var inst_55991 = (function (){return (function (_,___$1,___$2,n){
return frontend.state.set_file_sync_state(n);
});
})();
var inst_55992 = cljs.core.add_watch(_STAR_sync_state,new cljs.core.Keyword("frontend.fs.sync","update-global-state","frontend.fs.sync/update-global-state",-739606169),inst_55991);
var inst_55993 = sm.start();
var inst_55994 = cljs.core.async.offer_BANG_(frontend.fs.sync.remote__GT_local_sync_chan,true);
var inst_55995 = cljs.core.async.offer_BANG_(frontend.fs.sync.full_sync_chan,true);
var inst_55996 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("network","online?","network/online?",1306822774));
var inst_55997 = (function (){return (function (_k,_r,_o,n){
if(n === false){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_55998 = cljs.core.add_watch(inst_55996,"sync-manage",inst_55997);
var inst_55999 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var inst_56000 = (function (){return (function (_k,_r,_o,n){
if((n == null)){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_56001 = cljs.core.add_watch(inst_55999,"sync-manage",inst_56000);
var state_56010__$1 = (function (){var statearr_56018 = state_56010;
(statearr_56018[(7)] = inst_55988);

(statearr_56018[(8)] = inst_55994);

(statearr_56018[(9)] = inst_55993);

(statearr_56018[(10)] = inst_55998);

(statearr_56018[(11)] = inst_55992);

(statearr_56018[(12)] = inst_55989);

(statearr_56018[(13)] = inst_55990);

(statearr_56018[(14)] = inst_55995);

(statearr_56018[(15)] = inst_55987);

return statearr_56018;
})();
var statearr_56019_57225 = state_56010__$1;
(statearr_56019_57225[(2)] = inst_56001);

(statearr_56019_57225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (2))){
var inst_55969 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var inst_55970 = frontend.state.set_file_sync_state(null);
var state_56010__$1 = (function (){var statearr_56020 = state_56010;
(statearr_56020[(16)] = inst_55969);

return statearr_56020;
})();
var statearr_56021_57227 = state_56010__$1;
(statearr_56021_57227[(2)] = inst_55970);

(statearr_56021_57227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (11))){
var inst_56003 = (state_56010[(2)]);
var state_56010__$1 = state_56010;
var statearr_56022_57228 = state_56010__$1;
(statearr_56022_57228[(2)] = inst_56003);

(statearr_56022_57228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (9))){
var inst_55979 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var state_56010__$1 = state_56010;
var statearr_56023_57229 = state_56010__$1;
(statearr_56023_57229[(2)] = inst_55979);

(statearr_56023_57229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56011 === (5))){
var inst_55974 = frontend.fs.sync.check_remote_graph_exists(graph_uuid);
var state_56010__$1 = state_56010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56010__$1,(8),inst_55974);
} else {
if((state_val_56011 === (10))){
var inst_55981 = frontend.fs.sync.set_env(frontend.fs.sync.rsapi,frontend.config.FILE_SYNC_PROD_QMARK_);
var inst_55982 = cljs.core.deref(_STAR_sync_state);
var inst_55983 = frontend.state.set_file_sync_state(inst_55982);
var inst_55984 = frontend.state.set_file_sync_manager(sm);
var inst_55985 = cljs.core.async.timeout((5000));
var state_56010__$1 = (function (){var statearr_56024 = state_56010;
(statearr_56024[(17)] = inst_55983);

(statearr_56024[(18)] = inst_55981);

(statearr_56024[(19)] = inst_55984);

return statearr_56024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56010__$1,(12),inst_55985);
} else {
if((state_val_56011 === (8))){
var inst_55976 = (state_56010[(2)]);
var inst_55977 = cljs.core.not(inst_55976);
var state_56010__$1 = state_56010;
if(inst_55977){
var statearr_56025_57231 = state_56010__$1;
(statearr_56025_57231[(1)] = (9));

} else {
var statearr_56026_57232 = state_56010__$1;
(statearr_56026_57232[(1)] = (10));

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
var statearr_56027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56027[(0)] = frontend$fs$sync$sync_start_$_state_machine__27573__auto__);

(statearr_56027[(1)] = (1));

return statearr_56027;
});
var frontend$fs$sync$sync_start_$_state_machine__27573__auto____1 = (function (state_56010){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_56010);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e56028){var ex__27576__auto__ = e56028;
var statearr_56029_57234 = state_56010;
(statearr_56029_57234[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_56010[(4)]))){
var statearr_56030_57235 = state_56010;
(statearr_56030_57235[(1)] = cljs.core.first((state_56010[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57236 = state_56010;
state_56010 = G__57236;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$sync_start_$_state_machine__27573__auto__ = function(state_56010){
switch(arguments.length){
case 0:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____1.call(this,state_56010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____0;
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____1;
return frontend$fs$sync$sync_start_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_56031 = f__27596__auto__();
(statearr_56031[(6)] = c__27595__auto__);

return statearr_56031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.fs.sync.js.map
