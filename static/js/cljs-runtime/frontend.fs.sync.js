goog.provide('frontend.fs.sync');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),"null",new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),"null",new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null,new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),null,new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),null,new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null,new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),null,new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026),new cljs.core.Symbol("cljs-time.core","date?","cljs-time.core/date?",1865755164,null),cljs_time.core.date_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51483){
return cljs.core.set_QMARK_(G__51483);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51484){
return cljs.core.set_QMARK_(G__51484);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51487){
return cljs.core.map_QMARK_(G__51487);
}),(function (G__51487){
return cljs.core.contains_QMARK_(G__51487,new cljs.core.Keyword(null,"path","path",-188191168));
}),(function (G__51487){
return cljs.core.contains_QMARK_(G__51487,new cljs.core.Keyword(null,"time","time",1385887882));
})], null),(function (G__51487){
return ((cljs.core.map_QMARK_(G__51487)) && (((cljs.core.contains_QMARK_(G__51487,new cljs.core.Keyword(null,"path","path",-188191168))) && (cljs.core.contains_QMARK_(G__51487,new cljs.core.Keyword(null,"time","time",1385887882))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"time","time",1385887882)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__51502){
return cljs.core.seq_QMARK_(G__51502);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.seq_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51504){
return cljs.core.map_QMARK_(G__51504);
}),(function (G__51504){
return cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__51504){
return cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256));
}),(function (G__51504){
return cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085));
}),(function (G__51504){
return cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812));
}),(function (G__51504){
return cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"history","history",-247395220));
})], null),(function (G__51504){
return ((cljs.core.map_QMARK_(G__51504)) && (((cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"state","state",-1988618099))) && (((cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))) && (((cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))) && (((cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))) && (cljs.core.contains_QMARK_(G__51504,new cljs.core.Keyword(null,"history","history",-247395220))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"history","history",-247395220)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file","null","delete_files","null","update_files","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file",null,"delete_files",null,"update_files",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__51511){
return cljs.core.map_QMARK_(G__51511);
}),(function (G__51511){
return cljs.core.contains_QMARK_(G__51511,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
}),(function (G__51511){
return cljs.core.contains_QMARK_(G__51511,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
}),(function (G__51511){
return cljs.core.contains_QMARK_(G__51511,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
})], null),(function (G__51511){
return ((cljs.core.map_QMARK_(G__51511)) && (((cljs.core.contains_QMARK_(G__51511,new cljs.core.Keyword(null,"TXId","TXId",-902804781))) && (((cljs.core.contains_QMARK_(G__51511,new cljs.core.Keyword(null,"TXType","TXType",-476865365))) && (cljs.core.contains_QMARK_(G__51511,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),new cljs.core.Keyword(null,"TXType","TXType",-476865365),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXId","TXId",-902804781))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXType","TXType",-476865365))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51517_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),p1__51517_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Keyword(null,"unknown","unknown",-935977881)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51518_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),p1__51518_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__51519_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),p1__51519_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__51520#","p1__51520#",-1019147170,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"p1__51520#","p1__51520#",-1019147170,null))),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),(function (p1__51520_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),p1__51520_SHARP_);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51549){
var state_val_51550 = (state_51549[(1)]);
if((state_val_51550 === (7))){
var inst_51531 = cljs.core.async.timeout((1000));
var state_51549__$1 = state_51549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51549__$1,(10),inst_51531);
} else {
if((state_val_51550 === (1))){
var state_51549__$1 = state_51549;
var statearr_51551_55888 = state_51549__$1;
(statearr_51551_55888[(2)] = null);

(statearr_51551_55888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (4))){
var inst_51522 = (state_51549[(7)]);
var inst_51529 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_51522);
var state_51549__$1 = state_51549;
if(inst_51529){
var statearr_51552_55889 = state_51549__$1;
(statearr_51552_55889[(1)] = (7));

} else {
var statearr_51553_55892 = state_51549__$1;
(statearr_51553_55892[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (6))){
var inst_51545 = (state_51549[(2)]);
var state_51549__$1 = state_51549;
var statearr_51554_55893 = state_51549__$1;
(statearr_51554_55893[(2)] = inst_51545);

(statearr_51554_55893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (3))){
var inst_51547 = (state_51549[(2)]);
var state_51549__$1 = state_51549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51549__$1,inst_51547);
} else {
if((state_val_51550 === (2))){
var inst_51522 = (state_51549[(7)]);
var inst_51522__$1 = ws.readyState;
var inst_51523 = [(3),null,(2),null];
var inst_51524 = (new cljs.core.PersistentArrayMap(null,2,inst_51523,null));
var inst_51525 = (new cljs.core.PersistentHashSet(null,inst_51524,null));
var inst_51526 = cljs.core.contains_QMARK_(inst_51525,inst_51522__$1);
var inst_51527 = (!(inst_51526));
var state_51549__$1 = (function (){var statearr_51555 = state_51549;
(statearr_51555[(7)] = inst_51522__$1);

return statearr_51555;
})();
if(inst_51527){
var statearr_51556_55894 = state_51549__$1;
(statearr_51556_55894[(1)] = (4));

} else {
var statearr_51557_55895 = state_51549__$1;
(statearr_51557_55895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (11))){
var inst_51539 = (state_51549[(2)]);
var state_51549__$1 = (function (){var statearr_51558 = state_51549;
(statearr_51558[(8)] = inst_51539);

return statearr_51558;
})();
var statearr_51559_55898 = state_51549__$1;
(statearr_51559_55898[(2)] = null);

(statearr_51559_55898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (9))){
var inst_51542 = (state_51549[(2)]);
var state_51549__$1 = state_51549;
var statearr_51560_55899 = state_51549__$1;
(statearr_51560_55899[(2)] = inst_51542);

(statearr_51560_55899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (5))){
var state_51549__$1 = state_51549;
var statearr_51561_55900 = state_51549__$1;
(statearr_51561_55900[(2)] = null);

(statearr_51561_55900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (10))){
var inst_51533 = (state_51549[(2)]);
var state_51549__$1 = (function (){var statearr_51562 = state_51549;
(statearr_51562[(9)] = inst_51533);

return statearr_51562;
})();
var statearr_51563_55901 = state_51549__$1;
(statearr_51563_55901[(2)] = null);

(statearr_51563_55901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51550 === (8))){
var inst_51536 = ws.send("PING");
var inst_51537 = cljs.core.async.timeout((30000));
var state_51549__$1 = (function (){var statearr_51564 = state_51549;
(statearr_51564[(10)] = inst_51536);

return statearr_51564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51549__$1,(11),inst_51537);
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
var statearr_51565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51565[(0)] = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__);

(statearr_51565[(1)] = (1));

return statearr_51565;
});
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1 = (function (state_51549){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51549);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51566){var ex__27576__auto__ = e51566;
var statearr_51567_55902 = state_51549;
(statearr_51567_55902[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51549[(4)]))){
var statearr_51568_55903 = state_51549;
(statearr_51568_55903[(1)] = cljs.core.first((state_51549[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55904 = state_51549;
state_51549 = G__55904;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__ = function(state_51549){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1.call(this,state_51549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0;
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51569 = f__27596__auto__();
(statearr_51569[(6)] = c__27595__auto__);

return statearr_51569;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51576){
var state_val_51577 = (state_51576[(1)]);
if((state_val_51577 === (1))){
var inst_51572 = cljs.core.async.timeout((1000));
var inst_51573 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-connecting graph",graph_uuid], 0));
var inst_51574 = (frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(graph_uuid,_STAR_ws,remote_changes_chan) : frontend.fs.sync.ws_listen_BANG__STAR_.call(null,graph_uuid,_STAR_ws,remote_changes_chan));
var state_51576__$1 = (function (){var statearr_51578 = state_51576;
(statearr_51578[(7)] = inst_51573);

(statearr_51578[(8)] = inst_51572);

return statearr_51578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51576__$1,inst_51574);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0 = (function (){
var statearr_51579 = [null,null,null,null,null,null,null,null,null];
(statearr_51579[(0)] = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__);

(statearr_51579[(1)] = (1));

return statearr_51579;
});
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1 = (function (state_51576){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51576);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51582){var ex__27576__auto__ = e51582;
var statearr_51583_55905 = state_51576;
(statearr_51583_55905[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51576[(4)]))){
var statearr_51584_55906 = state_51576;
(statearr_51584_55906[(1)] = cljs.core.first((state_51576[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55907 = state_51576;
state_51576 = G__55907;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = function(state_51576){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1.call(this,state_51576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0;
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51585 = f__27596__auto__();
(statearr_51585[(6)] = c__27595__auto__);

return statearr_51585;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51617){
var state_val_51618 = (state_51617[(1)]);
if((state_val_51618 === (1))){
var inst_51603 = ["https://",frontend.config.API_DOMAIN,"/file-sync/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_name)].join('');
var inst_51604 = [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51605 = cljs.core.clj__GT_js(body);
var inst_51606 = JSON.stringify(inst_51605);
var inst_51607 = [token,inst_51606,false];
var inst_51608 = cljs.core.PersistentHashMap.fromArrays(inst_51604,inst_51607);
var inst_51609 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_51603,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51608], 0));
var inst_51610 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"body","body",-2049205669)];
var state_51617__$1 = (function (){var statearr_51643 = state_51617;
(statearr_51643[(7)] = inst_51610);

return statearr_51643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51617__$1,(2),inst_51609);
} else {
if((state_val_51618 === (2))){
var inst_51610 = (state_51617[(7)]);
var inst_51613 = (state_51617[(2)]);
var inst_51614 = [inst_51613,api_name,body];
var inst_51615 = cljs.core.PersistentHashMap.fromArrays(inst_51610,inst_51614);
var state_51617__$1 = state_51617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51617__$1,inst_51615);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$request_once_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$request_once_$_state_machine__27573__auto____0 = (function (){
var statearr_51649 = [null,null,null,null,null,null,null,null];
(statearr_51649[(0)] = frontend$fs$sync$request_once_$_state_machine__27573__auto__);

(statearr_51649[(1)] = (1));

return statearr_51649;
});
var frontend$fs$sync$request_once_$_state_machine__27573__auto____1 = (function (state_51617){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51617);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51650){var ex__27576__auto__ = e51650;
var statearr_51651_55908 = state_51617;
(statearr_51651_55908[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51617[(4)]))){
var statearr_51654_55909 = state_51617;
(statearr_51654_55909[(1)] = cljs.core.first((state_51617[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55910 = state_51617;
state_51617 = G__55910;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$request_once_$_state_machine__27573__auto__ = function(state_51617){
switch(arguments.length){
case 0:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____1.call(this,state_51617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$request_once_$_state_machine__27573__auto____0;
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$request_once_$_state_machine__27573__auto____1;
return frontend$fs$sync$request_once_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51655 = f__27596__auto__();
(statearr_51655[(6)] = c__27595__auto__);

return statearr_51655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.request = (function frontend$fs$sync$request(var_args){
var G__51661 = arguments.length;
switch (G__51661) {
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51708){
var state_val_51712 = (state_51708[(1)]);
if((state_val_51712 === (7))){
var inst_51665 = (state_51708[(7)]);
var inst_51704 = new cljs.core.Keyword(null,"resp","resp",1418702376).cljs$core$IFn$_invoke$arity$1(inst_51665);
var state_51708__$1 = state_51708;
var statearr_51715_55914 = state_51708__$1;
(statearr_51715_55914[(2)] = inst_51704);

(statearr_51715_55914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (1))){
var inst_51663 = frontend.fs.sync.request_once(api_name,body,token);
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51708__$1,(2),inst_51663);
} else {
if((state_val_51712 === (4))){
var inst_51670 = (state_51708[(8)]);
var state_51708__$1 = state_51708;
var statearr_51716_55915 = state_51708__$1;
(statearr_51716_55915[(2)] = inst_51670);

(statearr_51716_55915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (6))){
var inst_51685 = ((1000) * retry_count);
var inst_51686 = (((60000) < inst_51685) ? (60000) : inst_51685);
var inst_51687 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will retry after",inst_51686,"ms"], 0));
var inst_51688 = ((1000) * retry_count);
var inst_51689 = (((60000) < inst_51688) ? (60000) : inst_51688);
var inst_51690 = cljs.core.async.timeout(inst_51689);
var state_51708__$1 = (function (){var statearr_51717 = state_51708;
(statearr_51717[(9)] = inst_51687);

return statearr_51717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51708__$1,(9),inst_51690);
} else {
if((state_val_51712 === (3))){
var inst_51665 = (state_51708[(7)]);
var inst_51672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51673 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_51674 = (new cljs.core.PersistentVector(null,2,(5),inst_51672,inst_51673,null));
var inst_51675 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_51665,inst_51674);
var inst_51676 = frontend.fs.sync.get_json_body(inst_51675);
var inst_51677 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_51676);
var inst_51678 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Unauthorized",inst_51677);
var state_51708__$1 = state_51708;
var statearr_51720_55917 = state_51708__$1;
(statearr_51720_55917[(2)] = inst_51678);

(statearr_51720_55917[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (2))){
var inst_51670 = (state_51708[(8)]);
var inst_51665 = (state_51708[(7)]);
var inst_51665__$1 = (state_51708[(2)]);
var inst_51666 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51667 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_51668 = (new cljs.core.PersistentVector(null,2,(5),inst_51666,inst_51667,null));
var inst_51669 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_51665__$1,inst_51668);
var inst_51670__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_51669);
var state_51708__$1 = (function (){var statearr_51721 = state_51708;
(statearr_51721[(8)] = inst_51670__$1);

(statearr_51721[(7)] = inst_51665__$1);

return statearr_51721;
})();
if(inst_51670__$1){
var statearr_51722_55919 = state_51708__$1;
(statearr_51722_55919[(1)] = (3));

} else {
var statearr_51724_55920 = state_51708__$1;
(statearr_51724_55920[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (11))){
var inst_51702 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
var statearr_51725_55921 = state_51708__$1;
(statearr_51725_55921[(2)] = inst_51702);

(statearr_51725_55921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (9))){
var inst_51692 = (state_51708[(2)]);
var inst_51693 = (refresh_token_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_token_fn.cljs$core$IFn$_invoke$arity$0() : refresh_token_fn.call(null));
var state_51708__$1 = (function (){var statearr_51726 = state_51708;
(statearr_51726[(10)] = inst_51692);

return statearr_51726;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51708__$1,(10),inst_51693);
} else {
if((state_val_51712 === (5))){
var inst_51681 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
if(cljs.core.truth_(inst_51681)){
var statearr_51727_55924 = state_51708__$1;
(statearr_51727_55924[(1)] = (6));

} else {
var statearr_51728_55925 = state_51708__$1;
(statearr_51728_55925[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51712 === (10))){
var inst_51695 = (state_51708[(2)]);
var inst_51699 = (retry_count + (1));
var inst_51700 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,inst_51695,refresh_token_fn,inst_51699);
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51708__$1,(11),inst_51700);
} else {
if((state_val_51712 === (8))){
var inst_51706 = (state_51708[(2)]);
var state_51708__$1 = state_51708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51708__$1,inst_51706);
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
var statearr_51733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51733[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51733[(1)] = (1));

return statearr_51733;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51708){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51708);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51734){var ex__27576__auto__ = e51734;
var statearr_51736_55926 = state_51708;
(statearr_51736_55926[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51708[(4)]))){
var statearr_51738_55927 = state_51708;
(statearr_51738_55927[(1)] = cljs.core.first((state_51708[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55928 = state_51708;
state_51708 = G__55928;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51708){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51739 = f__27596__auto__();
(statearr_51739[(6)] = c__27595__auto__);

return statearr_51739;
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

var frontend$fs$sync$IRelativePath$_relative_path$dyn_55930 = (function (this$){
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
return frontend$fs$sync$IRelativePath$_relative_path$dyn_55930(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStoppable = function(){};

var frontend$fs$sync$IStoppable$_stop_BANG_$dyn_55932 = (function (this$){
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
return frontend$fs$sync$IStoppable$_stop_BANG_$dyn_55932(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStopped_QMARK_ = function(){};

var frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_55934 = (function (this$){
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
return frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_55934(this$);
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
frontend.fs.sync.diff__GT_filetxns = (function frontend$fs$sync$diff__GT_filetxns(p__51808){
var map__51809 = p__51808;
var map__51809__$1 = cljs.core.__destructure_map(map__51809);
var TXId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
var TXType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
var TXContent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_files",TXType);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("delete_files",TXType);
var update_or_del_type_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__51807_SHARP_){
return frontend.fs.sync.__GT_FileTxn(p1__51807_SHARP_,p1__51807_SHARP_,update_QMARK_,delete_QMARK_,TXId);
})));
var filepaths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,clojure.string.split_lines(TXContent));
var G__51810 = TXType;
switch (G__51810) {
case "update_files":
case "delete_files":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(update_or_del_type_xf,filepaths);

break;
case "rename_file":
return (new cljs.core.List(null,frontend.fs.sync.__GT_FileTxn(cljs.core.first(filepaths),cljs.core.second(filepaths),false,false,TXId),null,(1),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51810)].join('')));

}
});
/**
 * transducer.
 *   remove duplicate update&delete `FileTxn`s.
 */
frontend.fs.sync.distinct_update_filetxns_xf = (function frontend$fs$sync$distinct_update_filetxns_xf(rf){
var seen_update_AMPERSAND_delete_filetxns = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__55941 = null;
var G__55941__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__55941__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__55941__2 = (function (result,filetxn){
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
G__55941 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__55941__0.call(this);
case 1:
return G__55941__1.call(this,result);
case 2:
return G__55941__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55941.cljs$core$IFn$_invoke$arity$0 = G__55941__0;
G__55941.cljs$core$IFn$_invoke$arity$1 = G__55941__1;
G__55941.cljs$core$IFn$_invoke$arity$2 = G__55941__2;
return G__55941;
})()
});
/**
 * transducer.
 *   remove update&rename filetxns if they are deleted later(in greater txid filetxn).
 */
frontend.fs.sync.remove_deleted_filetxns_xf = (function frontend$fs$sync$remove_deleted_filetxns_xf(rf){
var seen_deleted_paths = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__55942 = null;
var G__55942__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__55942__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__55942__2 = (function (result,filetxn){
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
G__55942 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__55942__0.call(this);
case 1:
return G__55942__1.call(this,result);
case 2:
return G__55942__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55942.cljs$core$IFn$_invoke$arity$0 = G__55942__0;
G__55942.cljs$core$IFn$_invoke$arity$1 = G__55942__1;
G__55942.cljs$core$IFn$_invoke$arity$2 = G__55942__2;
return G__55942;
})()
});
/**
 * return transducer.
 *   partition filetxns, at most N update-filetxns in each partition,
 *   for delete and rename type, only one filetxn in each partition.
 */
frontend.fs.sync.partition_filetxns = (function frontend$fs$sync$partition_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (p1__51811_SHARP_){
return p1__51811_SHARP_.updated_QMARK_;
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ts){
if(cljs.core.truth_((function (){var G__51812 = cljs.core.first(ts);
if((G__51812 == null)){
return null;
} else {
return G__51812.updated_QMARK_;
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
frontend.fs.sync.filepath__GT_diff = (function frontend$fs$sync$filepath__GT_diff(index,p__51813){
var map__51814 = p__51813;
var map__51814__$1 = cljs.core.__destructure_map(map__51814);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
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
(self__.normalized_path = (function (){var G__51819 = self__.path;
var G__51819__$1 = ((clojure.string.starts_with_QMARK_(self__.path,"/"))?clojure.string.replace_first(G__51819,"/",""):G__51819);
if(cljs.core.truth_(self__.remote_QMARK_)){
return frontend.fs.sync.remove_user_graph_uuid_prefix(G__51819__$1);
} else {
return G__51819__$1;
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

var frontend$fs$sync$IRSAPI$set_env$dyn_55945 = (function (this$,prod_QMARK_){
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
return frontend$fs$sync$IRSAPI$set_env$dyn_55945(this$,prod_QMARK_);
}
});

var frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_55946 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_55946(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_55949 = (function (this$,graph_uuid,base_path){
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
return frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_55949(this$,graph_uuid,base_path);
}
});

var frontend$fs$sync$IRSAPI$rename_local_file$dyn_55950 = (function (this$,graph_uuid,base_path,from,to){
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
return frontend$fs$sync$IRSAPI$rename_local_file$dyn_55950(this$,graph_uuid,base_path,from,to);
}
});

var frontend$fs$sync$IRSAPI$update_local_files$dyn_55951 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$update_local_files$dyn_55951(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$delete_local_files$dyn_55952 = (function (this$,graph_uuid,base_path,filepaths){
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
return frontend$fs$sync$IRSAPI$delete_local_files$dyn_55952(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$update_remote_file$dyn_55953 = (function (this$,graph_uuid,base_path,filepath,local_txid){
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
return frontend$fs$sync$IRSAPI$update_remote_file$dyn_55953(this$,graph_uuid,base_path,filepath,local_txid);
}
});

var frontend$fs$sync$IRSAPI$update_remote_files$dyn_55954 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
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
return frontend$fs$sync$IRSAPI$update_remote_files$dyn_55954(this$,graph_uuid,base_path,filepaths,local_txid);
}
});

var frontend$fs$sync$IRSAPI$delete_remote_files$dyn_55956 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
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
return frontend$fs$sync$IRSAPI$delete_remote_files$dyn_55956(this$,graph_uuid,base_path,filepaths,local_txid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IRemoteAPI = function(){};

var frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_55957 = (function (this$,graph_uuid){
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
return frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_55957(this$,graph_uuid);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_55960 = (function (this$,graph_uuid,filepaths){
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
return frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_55960(this$,graph_uuid,filepaths);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_55962 = (function (this$,graph_name_opt,graph_uuid_opt){
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
return frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_55962(this$,graph_name_opt,graph_uuid_opt);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_55963 = (function (this$,graph_uuid,filepath){
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
return frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_55963(this$,graph_uuid,filepath);
}
});

var frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_55966 = (function (this$){
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
return frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_55966(this$);
}
});

var frontend$fs$sync$IRemoteAPI$get_diff$dyn_55969 = (function (this$,graph_uuid,from_txid){
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
return frontend$fs$sync$IRemoteAPI$get_diff$dyn_55969(this$,graph_uuid,from_txid);
}
});

var frontend$fs$sync$IRemoteAPI$create_graph$dyn_55970 = (function (this$,graph_name){
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
return frontend$fs$sync$IRemoteAPI$create_graph$dyn_55970(this$,graph_name);
}
});

var frontend$fs$sync$IRemoteAPI$delete_graph$dyn_55971 = (function (this$,graph_uuid){
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
return frontend$fs$sync$IRemoteAPI$delete_graph$dyn_55971(this$,graph_uuid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IToken = function(){};

var frontend$fs$sync$IToken$get_token$dyn_55973 = (function (this$){
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
return frontend$fs$sync$IToken$get_token$dyn_55973(this$);
}
});

var frontend$fs$sync$IToken$refresh_token$dyn_55974 = (function (this$){
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
return frontend$fs$sync$IToken$refresh_token$dyn_55974(this$);
}
});

frontend.fs.sync.check_files_exists = (function frontend$fs$sync$check_files_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51840){
var state_val_51841 = (state_51840[(1)]);
if((state_val_51841 === (1))){
var inst_51826 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_51840__$1 = state_51840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51840__$1,(2),inst_51826);
} else {
if((state_val_51841 === (2))){
var inst_51829 = (state_51840[(7)]);
var inst_51828 = (state_51840[(2)]);
var inst_51829__$1 = cljs.core.ex_cause(inst_51828);
var inst_51830 = (inst_51829__$1 == null);
var state_51840__$1 = (function (){var statearr_51851 = state_51840;
(statearr_51851[(7)] = inst_51829__$1);

return statearr_51851;
})();
if(cljs.core.truth_(inst_51830)){
var statearr_51858_55976 = state_51840__$1;
(statearr_51858_55976[(1)] = (3));

} else {
var statearr_51859_55977 = state_51840__$1;
(statearr_51859_55977[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (3))){
var state_51840__$1 = state_51840;
var statearr_51860_55978 = state_51840__$1;
(statearr_51860_55978[(2)] = null);

(statearr_51860_55978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (4))){
var inst_51829 = (state_51840[(7)]);
var inst_51833 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51829),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_paths)].join('');
var inst_51834 = ["Assert failed: ",inst_51833,"\n","(nil? cause)"].join('');
var inst_51835 = (new Error(inst_51834));
var inst_51836 = (function(){throw inst_51835})();
var state_51840__$1 = state_51840;
var statearr_51861_55979 = state_51840__$1;
(statearr_51861_55979[(2)] = inst_51836);

(statearr_51861_55979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51841 === (5))){
var inst_51838 = (state_51840[(2)]);
var state_51840__$1 = state_51840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51840__$1,inst_51838);
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
var statearr_51862 = [null,null,null,null,null,null,null,null];
(statearr_51862[(0)] = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__);

(statearr_51862[(1)] = (1));

return statearr_51862;
});
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1 = (function (state_51840){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51840);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51863){var ex__27576__auto__ = e51863;
var statearr_51864_55980 = state_51840;
(statearr_51864_55980[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51840[(4)]))){
var statearr_51865_55981 = state_51840;
(statearr_51865_55981[(1)] = cljs.core.first((state_51840[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55983 = state_51840;
state_51840 = G__55983;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__ = function(state_51840){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1.call(this,state_51840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51866 = f__27596__auto__();
(statearr_51866[(6)] = c__27595__auto__);

return statearr_51866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.check_files_not_exists = (function frontend$fs$sync$check_files_not_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51880){
var state_val_51881 = (state_51880[(1)]);
if((state_val_51881 === (1))){
var inst_51867 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_51880__$1 = state_51880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51880__$1,(2),inst_51867);
} else {
if((state_val_51881 === (2))){
var inst_51869 = (state_51880[(2)]);
var inst_51870 = cljs.core.ex_cause(inst_51869);
var inst_51871 = (inst_51870 == null);
var inst_51872 = cljs.core.not(inst_51871);
var state_51880__$1 = state_51880;
if(inst_51872){
var statearr_51889_55985 = state_51880__$1;
(statearr_51889_55985[(1)] = (3));

} else {
var statearr_51890_55986 = state_51880__$1;
(statearr_51890_55986[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51881 === (3))){
var state_51880__$1 = state_51880;
var statearr_51895_55988 = state_51880__$1;
(statearr_51895_55988[(2)] = null);

(statearr_51895_55988[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51881 === (4))){
var inst_51875 = (new Error("Assert failed: (some? cause)"));
var inst_51876 = (function(){throw inst_51875})();
var state_51880__$1 = state_51880;
var statearr_51896_55989 = state_51880__$1;
(statearr_51896_55989[(2)] = inst_51876);

(statearr_51896_55989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51881 === (5))){
var inst_51878 = (state_51880[(2)]);
var state_51880__$1 = state_51880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51880__$1,inst_51878);
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
var statearr_51897 = [null,null,null,null,null,null,null];
(statearr_51897[(0)] = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__);

(statearr_51897[(1)] = (1));

return statearr_51897;
});
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1 = (function (state_51880){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51880);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51898){var ex__27576__auto__ = e51898;
var statearr_51899_55990 = state_51880;
(statearr_51899_55990[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51880[(4)]))){
var statearr_51900_55992 = state_51880;
(statearr_51900_55992[(1)] = cljs.core.first((state_51880[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55993 = state_51880;
state_51880 = G__55993;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__ = function(state_51880){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1.call(this,state_51880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51902 = f__27596__auto__();
(statearr_51902[(6)] = c__27595__auto__);

return statearr_51902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.retry_rsapi = (function frontend$fs$sync$retry_rsapi(f){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51932){
var state_val_51933 = (state_51932[(1)]);
if((state_val_51933 === (7))){
var inst_51920 = (state_51932[(2)]);
var state_51932__$1 = state_51932;
if(cljs.core.truth_(inst_51920)){
var statearr_51934_55994 = state_51932__$1;
(statearr_51934_55994[(1)] = (11));

} else {
var statearr_51935_55995 = state_51932__$1;
(statearr_51935_55995[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (1))){
var inst_51903 = (3);
var state_51932__$1 = (function (){var statearr_51936 = state_51932;
(statearr_51936[(7)] = inst_51903);

return statearr_51936;
})();
var statearr_51937_56000 = state_51932__$1;
(statearr_51937_56000[(2)] = null);

(statearr_51937_56000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (4))){
var inst_51908 = (state_51932[(8)]);
var inst_51907 = (state_51932[(9)]);
var inst_51907__$1 = (state_51932[(2)]);
var inst_51908__$1 = (inst_51907__$1 instanceof cljs.core.ExceptionInfo);
var state_51932__$1 = (function (){var statearr_51938 = state_51932;
(statearr_51938[(8)] = inst_51908__$1);

(statearr_51938[(9)] = inst_51907__$1);

return statearr_51938;
})();
if(cljs.core.truth_(inst_51908__$1)){
var statearr_51939_56001 = state_51932__$1;
(statearr_51939_56001[(1)] = (5));

} else {
var statearr_51940_56002 = state_51932__$1;
(statearr_51940_56002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (13))){
var inst_51928 = (state_51932[(2)]);
var state_51932__$1 = state_51932;
var statearr_51941_56003 = state_51932__$1;
(statearr_51941_56003[(2)] = inst_51928);

(statearr_51941_56003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (6))){
var inst_51908 = (state_51932[(8)]);
var state_51932__$1 = state_51932;
var statearr_51942_56004 = state_51932__$1;
(statearr_51942_56004[(2)] = inst_51908);

(statearr_51942_56004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (3))){
var inst_51930 = (state_51932[(2)]);
var state_51932__$1 = state_51932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51932__$1,inst_51930);
} else {
if((state_val_51933 === (12))){
var inst_51907 = (state_51932[(9)]);
var state_51932__$1 = state_51932;
var statearr_51944_56005 = state_51932__$1;
(statearr_51944_56005[(2)] = inst_51907);

(statearr_51944_56005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (2))){
var inst_51905 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var state_51932__$1 = state_51932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51932__$1,(4),inst_51905);
} else {
if((state_val_51933 === (11))){
var inst_51903 = (state_51932[(7)]);
var inst_51922 = ["retry(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51903),") ..."].join('');
var inst_51923 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51922], 0));
var inst_51924 = (inst_51903 - (1));
var inst_51903__$1 = inst_51924;
var state_51932__$1 = (function (){var statearr_51945 = state_51932;
(statearr_51945[(7)] = inst_51903__$1);

(statearr_51945[(10)] = inst_51923);

return statearr_51945;
})();
var statearr_51946_56006 = state_51932__$1;
(statearr_51946_56006[(2)] = null);

(statearr_51946_56006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (9))){
var inst_51912 = (state_51932[(11)]);
var state_51932__$1 = state_51932;
var statearr_51947_56007 = state_51932__$1;
(statearr_51947_56007[(2)] = inst_51912);

(statearr_51947_56007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (5))){
var inst_51912 = (state_51932[(11)]);
var inst_51907 = (state_51932[(9)]);
var inst_51910 = cljs.core.ex_cause(inst_51907);
var inst_51911 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51910);
var inst_51912__$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_51911,"operation timed out");
var state_51932__$1 = (function (){var statearr_51948 = state_51932;
(statearr_51948[(11)] = inst_51912__$1);

return statearr_51948;
})();
if(cljs.core.truth_(inst_51912__$1)){
var statearr_51949_56008 = state_51932__$1;
(statearr_51949_56008[(1)] = (8));

} else {
var statearr_51950_56009 = state_51932__$1;
(statearr_51950_56009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (10))){
var inst_51917 = (state_51932[(2)]);
var state_51932__$1 = state_51932;
var statearr_51951_56010 = state_51932__$1;
(statearr_51951_56010[(2)] = inst_51917);

(statearr_51951_56010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51933 === (8))){
var inst_51903 = (state_51932[(7)]);
var inst_51914 = (inst_51903 > (0));
var state_51932__$1 = state_51932;
var statearr_51952_56011 = state_51932__$1;
(statearr_51952_56011[(2)] = inst_51914);

(statearr_51952_56011[(1)] = (10));


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
var statearr_51953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51953[(0)] = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__);

(statearr_51953[(1)] = (1));

return statearr_51953;
});
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1 = (function (state_51932){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51932);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51954){var ex__27576__auto__ = e51954;
var statearr_51955_56013 = state_51932;
(statearr_51955_56013[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51932[(4)]))){
var statearr_51956_56014 = state_51932;
(statearr_51956_56014[(1)] = cljs.core.first((state_51932[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56015 = state_51932;
state_51932 = G__56015;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__ = function(state_51932){
switch(arguments.length){
case 0:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1.call(this,state_51932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0;
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1;
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51957 = f__27596__auto__();
(statearr_51957[(6)] = c__27595__auto__);

return statearr_51957;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51971){
var state_val_51972 = (state_51971[(1)]);
if((state_val_51972 === (1))){
var inst_51962 = (state_51971[(7)]);
var inst_51962__$1 = frontend.state.get_auth_id_token();
var state_51971__$1 = (function (){var statearr_51973 = state_51971;
(statearr_51973[(7)] = inst_51962__$1);

return statearr_51973;
})();
if(cljs.core.truth_(inst_51962__$1)){
var statearr_51974_56016 = state_51971__$1;
(statearr_51974_56016[(1)] = (2));

} else {
var statearr_51975_56017 = state_51971__$1;
(statearr_51975_56017[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (2))){
var inst_51962 = (state_51971[(7)]);
var state_51971__$1 = state_51971;
var statearr_51976_56018 = state_51971__$1;
(statearr_51976_56018[(2)] = inst_51962);

(statearr_51976_56018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51972 === (3))){
var inst_51965 = this$__$1.refresh_token();
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51971__$1,(5),inst_51965);
} else {
if((state_val_51972 === (4))){
var inst_51969 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51971__$1,inst_51969);
} else {
if((state_val_51972 === (5))){
var inst_51967 = (state_51971[(2)]);
var state_51971__$1 = state_51971;
var statearr_51977_56019 = state_51971__$1;
(statearr_51977_56019[(2)] = inst_51967);

(statearr_51977_56019[(1)] = (4));


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
var statearr_51978 = [null,null,null,null,null,null,null,null];
(statearr_51978[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51978[(1)] = (1));

return statearr_51978;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51971){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51971);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51980){var ex__27576__auto__ = e51980;
var statearr_51981_56024 = state_51971;
(statearr_51981_56024[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51971[(4)]))){
var statearr_51982_56025 = state_51971;
(statearr_51982_56025[(1)] = cljs.core.first((state_51971[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56026 = state_51971;
state_51971 = G__56026;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51971){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51983 = f__27596__auto__();
(statearr_51983[(6)] = c__27595__auto__);

return statearr_51983;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51989){
var state_val_51990 = (state_51989[(1)]);
if((state_val_51990 === (1))){
var inst_51984 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_51989__$1 = state_51989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51989__$1,(2),inst_51984);
} else {
if((state_val_51990 === (2))){
var inst_51986 = (state_51989[(2)]);
var inst_51987 = frontend.state.get_auth_id_token();
var state_51989__$1 = (function (){var statearr_51991 = state_51989;
(statearr_51991[(7)] = inst_51986);

return statearr_51991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51989__$1,inst_51987);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_51992 = [null,null,null,null,null,null,null,null];
(statearr_51992[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51992[(1)] = (1));

return statearr_51992;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51989){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51989);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51993){var ex__27576__auto__ = e51993;
var statearr_51994_56027 = state_51989;
(statearr_51994_56027[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51989[(4)]))){
var statearr_51995_56028 = state_51989;
(statearr_51995_56028[(1)] = cljs.core.first((state_51989[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56029 = state_51989;
state_51989 = G__56029;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51989){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51996 = f__27596__auto__();
(statearr_51996[(6)] = c__27595__auto__);

return statearr_51996;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52007){
var state_val_52008 = (state_52007[(1)]);
if((state_val_52008 === (1))){
var inst_51999 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52007__$1 = state_52007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52007__$1,(2),inst_51999);
} else {
if((state_val_52008 === (2))){
var inst_52001 = (state_52007[(2)]);
var inst_52002 = (function (){var token = inst_52001;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_52003 = frontend.fs.sync.retry_rsapi(inst_52002);
var state_52007__$1 = state_52007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52007__$1,(3),inst_52003);
} else {
if((state_val_52008 === (3))){
var inst_52005 = (state_52007[(2)]);
var state_52007__$1 = state_52007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52007__$1,inst_52005);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52009 = [null,null,null,null,null,null,null];
(statearr_52009[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52009[(1)] = (1));

return statearr_52009;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52007){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52007);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52010){var ex__27576__auto__ = e52010;
var statearr_52011_56036 = state_52007;
(statearr_52011_56036[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52007[(4)]))){
var statearr_52013_56037 = state_52007;
(statearr_52013_56037[(1)] = cljs.core.first((state_52007[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56039 = state_52007;
state_52007 = G__56039;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52007){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52015 = f__27596__auto__();
(statearr_52015[(6)] = c__27595__auto__);

return statearr_52015;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52031){
var state_val_52032 = (state_52031[(1)]);
if((state_val_52032 === (1))){
var inst_52016 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-all-files-meta",graph_uuid,base_path], 0)));
});
})();
var inst_52017 = frontend.fs.sync.retry_rsapi(inst_52016);
var state_52031__$1 = state_52031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52031__$1,(2),inst_52017);
} else {
if((state_val_52032 === (2))){
var inst_52019 = (state_52031[(7)]);
var inst_52019__$1 = (state_52031[(2)]);
var inst_52020 = (inst_52019__$1 instanceof cljs.core.ExceptionInfo);
var state_52031__$1 = (function (){var statearr_52033 = state_52031;
(statearr_52033[(7)] = inst_52019__$1);

return statearr_52033;
})();
if(cljs.core.truth_(inst_52020)){
var statearr_52034_56040 = state_52031__$1;
(statearr_52034_56040[(1)] = (3));

} else {
var statearr_52035_56041 = state_52031__$1;
(statearr_52035_56041[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52032 === (3))){
var inst_52019 = (state_52031[(7)]);
var state_52031__$1 = state_52031;
var statearr_52036_56043 = state_52031__$1;
(statearr_52036_56043[(2)] = inst_52019);

(statearr_52036_56043[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52032 === (4))){
var inst_52019 = (state_52031[(7)]);
var inst_52024 = (function (){var r = inst_52019;
return (function (p__52023){
var vec__52037 = p__52023;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52037,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52037,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52025 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52019);
var inst_52026 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52024,inst_52025);
var inst_52027 = cljs.core.set(inst_52026);
var state_52031__$1 = state_52031;
var statearr_52040_56044 = state_52031__$1;
(statearr_52040_56044[(2)] = inst_52027);

(statearr_52040_56044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52032 === (5))){
var inst_52029 = (state_52031[(2)]);
var state_52031__$1 = state_52031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52031__$1,inst_52029);
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
var statearr_52041 = [null,null,null,null,null,null,null,null];
(statearr_52041[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52041[(1)] = (1));

return statearr_52041;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52031){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52031);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52042){var ex__27576__auto__ = e52042;
var statearr_52043_56045 = state_52031;
(statearr_52043_56045[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52031[(4)]))){
var statearr_52044_56046 = state_52031;
(statearr_52044_56046[(1)] = cljs.core.first((state_52031[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56047 = state_52031;
state_52031 = G__56047;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52031){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52045 = f__27596__auto__();
(statearr_52045[(6)] = c__27595__auto__);

return statearr_52045;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52062){
var state_val_52063 = (state_52062[(1)]);
if((state_val_52063 === (1))){
var inst_52047 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52062__$1 = state_52062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52062__$1,(2),inst_52047);
} else {
if((state_val_52063 === (2))){
var inst_52049 = (state_52062[(2)]);
var inst_52050 = (function (){var token = inst_52049;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths,token], 0)));
});
})();
var inst_52051 = frontend.fs.sync.retry_rsapi(inst_52050);
var state_52062__$1 = state_52062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52062__$1,(3),inst_52051);
} else {
if((state_val_52063 === (3))){
var inst_52053 = (state_52062[(2)]);
var inst_52055 = frontend.state.developer_mode_QMARK_();
var state_52062__$1 = (function (){var statearr_52064 = state_52062;
(statearr_52064[(7)] = inst_52053);

return statearr_52064;
})();
if(cljs.core.truth_(inst_52055)){
var statearr_52067_56049 = state_52062__$1;
(statearr_52067_56049[(1)] = (4));

} else {
var statearr_52068_56050 = state_52062__$1;
(statearr_52068_56050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52063 === (4))){
var inst_52057 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_52062__$1 = state_52062;
var statearr_52070_56051 = state_52062__$1;
(statearr_52070_56051[(2)] = inst_52057);

(statearr_52070_56051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52063 === (5))){
var state_52062__$1 = state_52062;
var statearr_52071_56052 = state_52062__$1;
(statearr_52071_56052[(2)] = null);

(statearr_52071_56052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52063 === (6))){
var inst_52053 = (state_52062[(7)]);
var inst_52060 = (state_52062[(2)]);
var state_52062__$1 = (function (){var statearr_52072 = state_52062;
(statearr_52072[(8)] = inst_52060);

return statearr_52072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52062__$1,inst_52053);
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
var statearr_52073 = [null,null,null,null,null,null,null,null,null];
(statearr_52073[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52073[(1)] = (1));

return statearr_52073;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52062){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52062);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52074){var ex__27576__auto__ = e52074;
var statearr_52075_56053 = state_52062;
(statearr_52075_56053[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52062[(4)]))){
var statearr_52076_56054 = state_52062;
(statearr_52076_56054[(1)] = cljs.core.first((state_52062[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56055 = state_52062;
state_52062 = G__56055;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52062){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52078 = f__27596__auto__();
(statearr_52078[(6)] = c__27595__auto__);

return statearr_52078;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52108){
var state_val_52109 = (state_52108[(1)]);
if((state_val_52109 === (1))){
var inst_52085 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-files-meta",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_52086 = frontend.fs.sync.retry_rsapi(inst_52085);
var state_52108__$1 = state_52108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52108__$1,(2),inst_52086);
} else {
if((state_val_52109 === (2))){
var inst_52088 = (state_52108[(7)]);
var inst_52088__$1 = (state_52108[(2)]);
var inst_52089 = (inst_52088__$1 instanceof cljs.core.ExceptionInfo);
var state_52108__$1 = (function (){var statearr_52113 = state_52108;
(statearr_52113[(7)] = inst_52088__$1);

return statearr_52113;
})();
if(cljs.core.truth_(inst_52089)){
var statearr_52114_56064 = state_52108__$1;
(statearr_52114_56064[(1)] = (3));

} else {
var statearr_52115_56065 = state_52108__$1;
(statearr_52115_56065[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52109 === (3))){
var inst_52088 = (state_52108[(7)]);
var state_52108__$1 = state_52108;
var statearr_52116_56066 = state_52108__$1;
(statearr_52116_56066[(2)] = inst_52088);

(statearr_52116_56066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52109 === (4))){
var inst_52088 = (state_52108[(7)]);
var inst_52094 = (function (){var r = inst_52088;
return (function (p__52093){
var vec__52119 = p__52093;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52119,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52119,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52095 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52088);
var inst_52096 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52094,inst_52095);
var state_52108__$1 = state_52108;
var statearr_52126_56067 = state_52108__$1;
(statearr_52126_56067[(2)] = inst_52096);

(statearr_52126_56067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52109 === (5))){
var inst_52098 = (state_52108[(2)]);
var state_52108__$1 = state_52108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52108__$1,inst_52098);
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
var statearr_52131 = [null,null,null,null,null,null,null,null];
(statearr_52131[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52131[(1)] = (1));

return statearr_52131;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52108){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52108);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52134){var ex__27576__auto__ = e52134;
var statearr_52135_56081 = state_52108;
(statearr_52135_56081[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52108[(4)]))){
var statearr_52136_56082 = state_52108;
(statearr_52136_56082[(1)] = cljs.core.first((state_52108[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56083 = state_52108;
state_52108 = G__56083;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52108){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52141 = f__27596__auto__();
(statearr_52141[(6)] = c__27595__auto__);

return statearr_52141;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52154){
var state_val_52155 = (state_52154[(1)]);
if((state_val_52155 === (1))){
var inst_52146 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52154__$1 = state_52154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52154__$1,(2),inst_52146);
} else {
if((state_val_52155 === (2))){
var inst_52148 = (state_52154[(2)]);
var inst_52149 = (function (){var token = inst_52148;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_52150 = frontend.fs.sync.retry_rsapi(inst_52149);
var state_52154__$1 = state_52154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52154__$1,(3),inst_52150);
} else {
if((state_val_52155 === (3))){
var inst_52152 = (state_52154[(2)]);
var state_52154__$1 = state_52154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52154__$1,inst_52152);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52163 = [null,null,null,null,null,null,null];
(statearr_52163[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52163[(1)] = (1));

return statearr_52163;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52154){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52154);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52164){var ex__27576__auto__ = e52164;
var statearr_52166_56084 = state_52154;
(statearr_52166_56084[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52154[(4)]))){
var statearr_52167_56085 = state_52154;
(statearr_52167_56085[(1)] = cljs.core.first((state_52154[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56086 = state_52154;
state_52154 = G__56086;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52154){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52168 = f__27596__auto__();
(statearr_52168[(6)] = c__27595__auto__);

return statearr_52168;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52180){
var state_val_52181 = (state_52180[(1)]);
if((state_val_52181 === (1))){
var state_52180__$1 = state_52180;
if(cljs.core.truth_(prod_QMARK_)){
var statearr_52182_56087 = state_52180__$1;
(statearr_52182_56087[(1)] = (3));

} else {
var statearr_52184_56088 = state_52180__$1;
(statearr_52184_56088[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (2))){
var inst_52178 = (state_52180[(2)]);
var state_52180__$1 = state_52180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52180__$1,inst_52178);
} else {
if((state_val_52181 === (3))){
var state_52180__$1 = state_52180;
var statearr_52186_56089 = state_52180__$1;
(statearr_52186_56089[(2)] = "prod");

(statearr_52186_56089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (4))){
var state_52180__$1 = state_52180;
var statearr_52187_56090 = state_52180__$1;
(statearr_52187_56090[(2)] = "dev");

(statearr_52187_56090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52181 === (5))){
var inst_52174 = (state_52180[(2)]);
var inst_52175 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set-env",inst_52174], 0));
var inst_52176 = cljs.core.async.interop.p__GT_c(inst_52175);
var state_52180__$1 = state_52180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52180__$1,(2),inst_52176);
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
var statearr_52189 = [null,null,null,null,null,null,null];
(statearr_52189[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52189[(1)] = (1));

return statearr_52189;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52180){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52180);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52191){var ex__27576__auto__ = e52191;
var statearr_52192_56091 = state_52180;
(statearr_52192_56091[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52180[(4)]))){
var statearr_52193_56092 = state_52180;
(statearr_52193_56092[(1)] = cljs.core.first((state_52180[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56093 = state_52180;
state_52180 = G__56093;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52180){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52196 = f__27596__auto__();
(statearr_52196[(6)] = c__27595__auto__);

return statearr_52196;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52206){
var state_val_52207 = (state_52206[(1)]);
if((state_val_52207 === (1))){
var inst_52198 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(2),inst_52198);
} else {
if((state_val_52207 === (2))){
var inst_52200 = (state_52206[(2)]);
var inst_52201 = (function (){var token = inst_52200;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-file",graph_uuid,base_path,filepath,local_txid,token], 0)));
});
})();
var inst_52202 = frontend.fs.sync.retry_rsapi(inst_52201);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52206__$1,(3),inst_52202);
} else {
if((state_val_52207 === (3))){
var inst_52204 = (state_52206[(2)]);
var state_52206__$1 = state_52206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52206__$1,inst_52204);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52209 = [null,null,null,null,null,null,null];
(statearr_52209[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52209[(1)] = (1));

return statearr_52209;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52206){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52206);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52210){var ex__27576__auto__ = e52210;
var statearr_52211_56095 = state_52206;
(statearr_52211_56095[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52206[(4)]))){
var statearr_52212_56096 = state_52206;
(statearr_52212_56096[(1)] = cljs.core.first((state_52206[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56097 = state_52206;
state_52206 = G__56097;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52206){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52213 = f__27596__auto__();
(statearr_52213[(6)] = c__27595__auto__);

return statearr_52213;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52225){
var state_val_52226 = (state_52225[(1)]);
if((state_val_52226 === (1))){
var inst_52214 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-local-files",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_52215 = frontend.fs.sync.retry_rsapi(inst_52214);
var state_52225__$1 = state_52225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52225__$1,(2),inst_52215);
} else {
if((state_val_52226 === (2))){
var inst_52217 = (state_52225[(2)]);
var inst_52218 = frontend.state.developer_mode_QMARK_();
var state_52225__$1 = (function (){var statearr_52227 = state_52225;
(statearr_52227[(7)] = inst_52217);

return statearr_52227;
})();
if(cljs.core.truth_(inst_52218)){
var statearr_52228_56102 = state_52225__$1;
(statearr_52228_56102[(1)] = (3));

} else {
var statearr_52229_56103 = state_52225__$1;
(statearr_52229_56103[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52226 === (3))){
var inst_52220 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_52225__$1 = state_52225;
var statearr_52230_56104 = state_52225__$1;
(statearr_52230_56104[(2)] = inst_52220);

(statearr_52230_56104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52226 === (4))){
var state_52225__$1 = state_52225;
var statearr_52231_56105 = state_52225__$1;
(statearr_52231_56105[(2)] = null);

(statearr_52231_56105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52226 === (5))){
var inst_52217 = (state_52225[(7)]);
var inst_52223 = (state_52225[(2)]);
var state_52225__$1 = (function (){var statearr_52232 = state_52225;
(statearr_52232[(8)] = inst_52223);

return statearr_52232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52225__$1,inst_52217);
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
var statearr_52233 = [null,null,null,null,null,null,null,null,null];
(statearr_52233[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52233[(1)] = (1));

return statearr_52233;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52225){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52225);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52234){var ex__27576__auto__ = e52234;
var statearr_52235_56107 = state_52225;
(statearr_52235_56107[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52225[(4)]))){
var statearr_52236_56110 = state_52225;
(statearr_52236_56110[(1)] = cljs.core.first((state_52225[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56112 = state_52225;
state_52225 = G__56112;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52225){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52237 = f__27596__auto__();
(statearr_52237[(6)] = c__27595__auto__);

return statearr_52237;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52247){
var state_val_52248 = (state_52247[(1)]);
if((state_val_52248 === (1))){
var inst_52238 = (state_52247[(7)]);
var inst_52238__$1 = frontend.state.get_auth_id_token();
var state_52247__$1 = (function (){var statearr_52249 = state_52247;
(statearr_52249[(7)] = inst_52238__$1);

return statearr_52249;
})();
if(cljs.core.truth_(inst_52238__$1)){
var statearr_52250_56115 = state_52247__$1;
(statearr_52250_56115[(1)] = (2));

} else {
var statearr_52251_56118 = state_52247__$1;
(statearr_52251_56118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52248 === (2))){
var inst_52238 = (state_52247[(7)]);
var state_52247__$1 = state_52247;
var statearr_52252_56121 = state_52247__$1;
(statearr_52252_56121[(2)] = inst_52238);

(statearr_52252_56121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52248 === (3))){
var inst_52241 = this$__$1.refresh_token();
var state_52247__$1 = state_52247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52247__$1,(5),inst_52241);
} else {
if((state_val_52248 === (4))){
var inst_52245 = (state_52247[(2)]);
var state_52247__$1 = state_52247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52247__$1,inst_52245);
} else {
if((state_val_52248 === (5))){
var inst_52243 = (state_52247[(2)]);
var state_52247__$1 = state_52247;
var statearr_52253_56122 = state_52247__$1;
(statearr_52253_56122[(2)] = inst_52243);

(statearr_52253_56122[(1)] = (4));


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
var statearr_52254 = [null,null,null,null,null,null,null,null];
(statearr_52254[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52254[(1)] = (1));

return statearr_52254;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52247){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52247);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52255){var ex__27576__auto__ = e52255;
var statearr_52256_56128 = state_52247;
(statearr_52256_56128[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52247[(4)]))){
var statearr_52257_56129 = state_52247;
(statearr_52257_56129[(1)] = cljs.core.first((state_52247[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56130 = state_52247;
state_52247 = G__56130;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52247){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52258 = f__27596__auto__();
(statearr_52258[(6)] = c__27595__auto__);

return statearr_52258;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52264){
var state_val_52265 = (state_52264[(1)]);
if((state_val_52265 === (1))){
var inst_52259 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52264__$1 = state_52264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52264__$1,(2),inst_52259);
} else {
if((state_val_52265 === (2))){
var inst_52261 = (state_52264[(2)]);
var inst_52262 = frontend.state.get_auth_id_token();
var state_52264__$1 = (function (){var statearr_52266 = state_52264;
(statearr_52266[(7)] = inst_52261);

return statearr_52266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52264__$1,inst_52262);
} else {
return null;
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
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52264){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52264);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52269){var ex__27576__auto__ = e52269;
var statearr_52270_56132 = state_52264;
(statearr_52270_56132[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52264[(4)]))){
var statearr_52271_56133 = state_52264;
(statearr_52271_56133[(1)] = cljs.core.first((state_52264[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56134 = state_52264;
state_52264 = G__56134;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52264){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52272 = f__27596__auto__();
(statearr_52272[(6)] = c__27595__auto__);

return statearr_52272;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52305){
var state_val_52306 = (state_52305[(1)]);
if((state_val_52306 === (1))){
var inst_52273 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017)];
var inst_52274 = [base_path];
var inst_52275 = cljs.core.PersistentHashMap.fromArrays(inst_52273,inst_52274);
var inst_52276 = cljs.core.clj__GT_js(inst_52275);
var inst_52277 = frontend.mobile.util.file_sync.getLocalAllFilesMeta(inst_52276);
var inst_52278 = cljs.core.async.interop.p__GT_c(inst_52277);
var state_52305__$1 = state_52305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52305__$1,(2),inst_52278);
} else {
if((state_val_52306 === (2))){
var inst_52280 = (state_52305[(7)]);
var inst_52280__$1 = (state_52305[(2)]);
var inst_52285 = (inst_52280__$1 instanceof cljs.core.ExceptionInfo);
var state_52305__$1 = (function (){var statearr_52320 = state_52305;
(statearr_52320[(7)] = inst_52280__$1);

return statearr_52320;
})();
if(cljs.core.truth_(inst_52285)){
var statearr_52321_56136 = state_52305__$1;
(statearr_52321_56136[(1)] = (3));

} else {
var statearr_52322_56137 = state_52305__$1;
(statearr_52322_56137[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52306 === (3))){
var inst_52280 = (state_52305[(7)]);
var state_52305__$1 = state_52305;
var statearr_52324_56138 = state_52305__$1;
(statearr_52324_56138[(2)] = inst_52280);

(statearr_52324_56138[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52306 === (4))){
var inst_52280 = (state_52305[(7)]);
var inst_52297 = (function (){var r = inst_52280;
return (function (p__52296){
var vec__52325 = p__52296;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52325,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52325,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52298 = inst_52280.result;
var inst_52299 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52298);
var inst_52300 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52297,inst_52299);
var inst_52301 = cljs.core.set(inst_52300);
var state_52305__$1 = state_52305;
var statearr_52328_56139 = state_52305__$1;
(statearr_52328_56139[(2)] = inst_52301);

(statearr_52328_56139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52306 === (5))){
var inst_52303 = (state_52305[(2)]);
var state_52305__$1 = state_52305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52305__$1,inst_52303);
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
var statearr_52329 = [null,null,null,null,null,null,null,null];
(statearr_52329[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52329[(1)] = (1));

return statearr_52329;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52305){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52305);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52330){var ex__27576__auto__ = e52330;
var statearr_52331_56140 = state_52305;
(statearr_52331_56140[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52305[(4)]))){
var statearr_52332_56141 = state_52305;
(statearr_52332_56141[(1)] = cljs.core.first((state_52305[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56142 = state_52305;
state_52305 = G__56142;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52305){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52333 = f__27596__auto__();
(statearr_52333[(6)] = c__27595__auto__);

return statearr_52333;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52348){
var state_val_52349 = (state_52348[(1)]);
if((state_val_52349 === (1))){
var inst_52334 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52348__$1,(2),inst_52334);
} else {
if((state_val_52349 === (2))){
var inst_52336 = (state_52348[(2)]);
var inst_52337 = (function (){var token = inst_52336;
return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.updateLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))));
});
})();
var inst_52338 = frontend.fs.sync.retry_rsapi(inst_52337);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52348__$1,(3),inst_52338);
} else {
if((state_val_52349 === (3))){
var inst_52340 = (state_52348[(2)]);
var inst_52341 = frontend.state.developer_mode_QMARK_();
var state_52348__$1 = (function (){var statearr_52350 = state_52348;
(statearr_52350[(7)] = inst_52340);

return statearr_52350;
})();
if(cljs.core.truth_(inst_52341)){
var statearr_52351_56144 = state_52348__$1;
(statearr_52351_56144[(1)] = (4));

} else {
var statearr_52352_56145 = state_52348__$1;
(statearr_52352_56145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (4))){
var inst_52343 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_52348__$1 = state_52348;
var statearr_52353_56146 = state_52348__$1;
(statearr_52353_56146[(2)] = inst_52343);

(statearr_52353_56146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (5))){
var state_52348__$1 = state_52348;
var statearr_52354_56147 = state_52348__$1;
(statearr_52354_56147[(2)] = null);

(statearr_52354_56147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (6))){
var inst_52340 = (state_52348[(7)]);
var inst_52346 = (state_52348[(2)]);
var state_52348__$1 = (function (){var statearr_52355 = state_52348;
(statearr_52355[(8)] = inst_52346);

return statearr_52355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52348__$1,inst_52340);
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
var statearr_52356 = [null,null,null,null,null,null,null,null,null];
(statearr_52356[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52356[(1)] = (1));

return statearr_52356;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52348){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52348);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52357){var ex__27576__auto__ = e52357;
var statearr_52358_56149 = state_52348;
(statearr_52358_56149[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52348[(4)]))){
var statearr_52359_56150 = state_52348;
(statearr_52359_56150[(1)] = cljs.core.first((state_52348[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56151 = state_52348;
state_52348 = G__56151;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52348){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52360 = f__27596__auto__();
(statearr_52360[(6)] = c__27595__auto__);

return statearr_52360;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52381){
var state_val_52382 = (state_52381[(1)]);
if((state_val_52382 === (1))){
var inst_52361 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318)];
var inst_52362 = [base_path,filepaths];
var inst_52363 = cljs.core.PersistentHashMap.fromArrays(inst_52361,inst_52362);
var inst_52364 = cljs.core.clj__GT_js(inst_52363);
var inst_52365 = frontend.mobile.util.file_sync.getLocalFilesMeta(inst_52364);
var inst_52366 = cljs.core.async.interop.p__GT_c(inst_52365);
var state_52381__$1 = state_52381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52381__$1,(2),inst_52366);
} else {
if((state_val_52382 === (2))){
var inst_52368 = (state_52381[(7)]);
var inst_52368__$1 = (state_52381[(2)]);
var inst_52369 = (inst_52368__$1 instanceof cljs.core.ExceptionInfo);
var state_52381__$1 = (function (){var statearr_52383 = state_52381;
(statearr_52383[(7)] = inst_52368__$1);

return statearr_52383;
})();
if(cljs.core.truth_(inst_52369)){
var statearr_52384_56161 = state_52381__$1;
(statearr_52384_56161[(1)] = (3));

} else {
var statearr_52385_56162 = state_52381__$1;
(statearr_52385_56162[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52382 === (3))){
var inst_52368 = (state_52381[(7)]);
var state_52381__$1 = state_52381;
var statearr_52386_56163 = state_52381__$1;
(statearr_52386_56163[(2)] = inst_52368);

(statearr_52386_56163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52382 === (4))){
var inst_52368 = (state_52381[(7)]);
var inst_52373 = (function (){var r = inst_52368;
return (function (p__52372){
var vec__52387 = p__52372;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52387,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52387,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_52374 = inst_52368.result;
var inst_52375 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52374);
var inst_52376 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52373,inst_52375);
var inst_52377 = cljs.core.set(inst_52376);
var state_52381__$1 = state_52381;
var statearr_52390_56174 = state_52381__$1;
(statearr_52390_56174[(2)] = inst_52377);

(statearr_52390_56174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52382 === (5))){
var inst_52379 = (state_52381[(2)]);
var state_52381__$1 = state_52381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52381__$1,inst_52379);
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
var statearr_52391 = [null,null,null,null,null,null,null,null];
(statearr_52391[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52391[(1)] = (1));

return statearr_52391;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52381){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52381);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52392){var ex__27576__auto__ = e52392;
var statearr_52393_56178 = state_52381;
(statearr_52393_56178[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52381[(4)]))){
var statearr_52394_56181 = state_52381;
(statearr_52394_56181[(1)] = cljs.core.first((state_52381[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56183 = state_52381;
state_52381 = G__56183;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52381){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52395 = f__27596__auto__();
(statearr_52395[(6)] = c__27595__auto__);

return statearr_52395;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52426){
var state_val_52427 = (state_52426[(1)]);
if((state_val_52427 === (1))){
var inst_52398 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52426__$1 = state_52426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52426__$1,(2),inst_52398);
} else {
if((state_val_52427 === (2))){
var inst_52400 = (state_52426[(2)]);
var inst_52408 = [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),new cljs.core.Keyword(null,"txid","txid",1606205478),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_52409 = [graph_uuid,base_path,filepaths,local_txid,inst_52400];
var inst_52410 = cljs.core.PersistentHashMap.fromArrays(inst_52408,inst_52409);
var inst_52411 = cljs.core.clj__GT_js(inst_52410);
var inst_52412 = frontend.mobile.util.file_sync.updateRemoteFiles(inst_52411);
var inst_52413 = cljs.core.async.interop.p__GT_c(inst_52412);
var state_52426__$1 = state_52426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52426__$1,(3),inst_52413);
} else {
if((state_val_52427 === (3))){
var inst_52415 = (state_52426[(7)]);
var inst_52415__$1 = (state_52426[(2)]);
var inst_52416 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.sync","debug-update-remote-files","frontend.fs.sync/debug-update-remote-files",-1146829271),inst_52415__$1], 0));
var inst_52417 = (inst_52415__$1 instanceof cljs.core.ExceptionInfo);
var state_52426__$1 = (function (){var statearr_52438 = state_52426;
(statearr_52438[(8)] = inst_52416);

(statearr_52438[(7)] = inst_52415__$1);

return statearr_52438;
})();
if(cljs.core.truth_(inst_52417)){
var statearr_52439_56231 = state_52426__$1;
(statearr_52439_56231[(1)] = (4));

} else {
var statearr_52440_56232 = state_52426__$1;
(statearr_52440_56232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52427 === (4))){
var inst_52415 = (state_52426[(7)]);
var state_52426__$1 = state_52426;
var statearr_52441_56233 = state_52426__$1;
(statearr_52441_56233[(2)] = inst_52415);

(statearr_52441_56233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52427 === (5))){
var inst_52415 = (state_52426[(7)]);
var inst_52420 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_52415);
var inst_52421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52420,"txid");
var state_52426__$1 = state_52426;
var statearr_52443_56234 = state_52426__$1;
(statearr_52443_56234[(2)] = inst_52421);

(statearr_52443_56234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52427 === (6))){
var inst_52423 = (state_52426[(2)]);
var state_52426__$1 = state_52426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52426__$1,inst_52423);
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
var statearr_52444 = [null,null,null,null,null,null,null,null,null];
(statearr_52444[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52444[(1)] = (1));

return statearr_52444;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52426){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52426);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52445){var ex__27576__auto__ = e52445;
var statearr_52446_56236 = state_52426;
(statearr_52446_56236[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52426[(4)]))){
var statearr_52447_56237 = state_52426;
(statearr_52447_56237[(1)] = cljs.core.first((state_52426[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56238 = state_52426;
state_52426 = G__56238;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52426){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52448 = f__27596__auto__();
(statearr_52448[(6)] = c__27595__auto__);

return statearr_52448;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52462){
var state_val_52463 = (state_52462[(1)]);
if((state_val_52463 === (1))){
var inst_52449 = [new cljs.core.Keyword(null,"env","env",-1815813235)];
var state_52462__$1 = (function (){var statearr_52469 = state_52462;
(statearr_52469[(7)] = inst_52449);

return statearr_52469;
})();
if(cljs.core.truth_(prod_QMARK_)){
var statearr_52470_56241 = state_52462__$1;
(statearr_52470_56241[(1)] = (3));

} else {
var statearr_52471_56242 = state_52462__$1;
(statearr_52471_56242[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52463 === (2))){
var inst_52460 = (state_52462[(2)]);
var state_52462__$1 = state_52462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52462__$1,inst_52460);
} else {
if((state_val_52463 === (3))){
var state_52462__$1 = state_52462;
var statearr_52472_56243 = state_52462__$1;
(statearr_52472_56243[(2)] = "prod");

(statearr_52472_56243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52463 === (4))){
var state_52462__$1 = state_52462;
var statearr_52473_56244 = state_52462__$1;
(statearr_52473_56244[(2)] = "dev");

(statearr_52473_56244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52463 === (5))){
var inst_52449 = (state_52462[(7)]);
var inst_52453 = (state_52462[(2)]);
var inst_52454 = [inst_52453];
var inst_52455 = cljs.core.PersistentHashMap.fromArrays(inst_52449,inst_52454);
var inst_52456 = cljs.core.clj__GT_js(inst_52455);
var inst_52457 = frontend.mobile.util.file_sync.setEnv(inst_52456);
var inst_52458 = cljs.core.async.interop.p__GT_c(inst_52457);
var state_52462__$1 = state_52462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52462__$1,(2),inst_52458);
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
var statearr_52476 = [null,null,null,null,null,null,null,null];
(statearr_52476[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52476[(1)] = (1));

return statearr_52476;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52462){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52462);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52477){var ex__27576__auto__ = e52477;
var statearr_52478_56247 = state_52462;
(statearr_52478_56247[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52462[(4)]))){
var statearr_52479_56248 = state_52462;
(statearr_52479_56248[(1)] = cljs.core.first((state_52462[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56249 = state_52462;
state_52462 = G__56249;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52462){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52481 = f__27596__auto__();
(statearr_52481[(6)] = c__27595__auto__);

return statearr_52481;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52524){
var state_val_52525 = (state_52524[(1)]);
if((state_val_52525 === (1))){
var inst_52497 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)];
var inst_52499 = [base_path,from,to];
var inst_52501 = cljs.core.PersistentHashMap.fromArrays(inst_52497,inst_52499);
var inst_52502 = cljs.core.clj__GT_js(inst_52501);
var inst_52503 = frontend.mobile.util.file_sync.renameLocalFile(inst_52502);
var inst_52504 = cljs.core.async.interop.p__GT_c(inst_52503);
var state_52524__$1 = state_52524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52524__$1,(2),inst_52504);
} else {
if((state_val_52525 === (2))){
var inst_52510 = (state_52524[(2)]);
var state_52524__$1 = state_52524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52524__$1,inst_52510);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52538 = [null,null,null,null,null,null,null];
(statearr_52538[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52538[(1)] = (1));

return statearr_52538;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52524){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52524);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52542){var ex__27576__auto__ = e52542;
var statearr_52543_56252 = state_52524;
(statearr_52543_56252[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52524[(4)]))){
var statearr_52545_56253 = state_52524;
(statearr_52545_56253[(1)] = cljs.core.first((state_52524[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56254 = state_52524;
state_52524 = G__56254;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52524){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52546 = f__27596__auto__();
(statearr_52546[(6)] = c__27595__auto__);

return statearr_52546;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52564){
var state_val_52565 = (state_52564[(1)]);
if((state_val_52565 === (1))){
var inst_52550 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths], null))));
});
})();
var inst_52551 = frontend.fs.sync.retry_rsapi(inst_52550);
var state_52564__$1 = state_52564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52564__$1,(2),inst_52551);
} else {
if((state_val_52565 === (2))){
var inst_52553 = (state_52564[(2)]);
var inst_52555 = frontend.state.developer_mode_QMARK_();
var state_52564__$1 = (function (){var statearr_52589 = state_52564;
(statearr_52589[(7)] = inst_52553);

return statearr_52589;
})();
if(cljs.core.truth_(inst_52555)){
var statearr_52595_56259 = state_52564__$1;
(statearr_52595_56259[(1)] = (3));

} else {
var statearr_52596_56260 = state_52564__$1;
(statearr_52596_56260[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52565 === (3))){
var inst_52557 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_52564__$1 = state_52564;
var statearr_52597_56262 = state_52564__$1;
(statearr_52597_56262[(2)] = inst_52557);

(statearr_52597_56262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52565 === (4))){
var state_52564__$1 = state_52564;
var statearr_52598_56263 = state_52564__$1;
(statearr_52598_56263[(2)] = null);

(statearr_52598_56263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52565 === (5))){
var inst_52553 = (state_52564[(7)]);
var inst_52560 = (state_52564[(2)]);
var state_52564__$1 = (function (){var statearr_52599 = state_52564;
(statearr_52599[(8)] = inst_52560);

return statearr_52599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52564__$1,inst_52553);
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
var statearr_52600 = [null,null,null,null,null,null,null,null,null];
(statearr_52600[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52600[(1)] = (1));

return statearr_52600;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52564){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52564);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52601){var ex__27576__auto__ = e52601;
var statearr_52602_56272 = state_52564;
(statearr_52602_56272[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52564[(4)]))){
var statearr_52603_56273 = state_52564;
(statearr_52603_56273[(1)] = cljs.core.first((state_52564[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56276 = state_52564;
state_52564 = G__56276;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52564){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52604 = f__27596__auto__();
(statearr_52604[(6)] = c__27595__auto__);

return statearr_52604;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52648){
var state_val_52649 = (state_52648[(1)]);
if((state_val_52649 === (1))){
var inst_52624 = this$.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_52648__$1 = state_52648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52648__$1,(3),inst_52624);
} else {
if((state_val_52649 === (2))){
var inst_52630 = (state_52648[(7)]);
var inst_52630__$1 = (state_52648[(2)]);
var inst_52631 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_52630__$1);
var inst_52632 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_52631) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_52631));
var state_52648__$1 = (function (){var statearr_52662 = state_52648;
(statearr_52662[(7)] = inst_52630__$1);

return statearr_52662;
})();
if(cljs.core.truth_(inst_52632)){
var statearr_52667_56282 = state_52648__$1;
(statearr_52667_56282[(1)] = (4));

} else {
var statearr_52668_56283 = state_52648__$1;
(statearr_52668_56283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52649 === (3))){
var inst_52626 = (state_52648[(2)]);
var inst_52627 = (function (){return (function (){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(null);
});
})();
var inst_52628 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4(api_name,body,inst_52626,inst_52627);
var state_52648__$1 = state_52648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52648__$1,(2),inst_52628);
} else {
if((state_val_52649 === (4))){
var inst_52630 = (state_52648[(7)]);
var inst_52636 = frontend.fs.sync.get_resp_json_body(inst_52630);
var state_52648__$1 = state_52648;
var statearr_52679_56284 = state_52648__$1;
(statearr_52679_56284[(2)] = inst_52636);

(statearr_52679_56284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52649 === (5))){
var inst_52630 = (state_52648[(7)]);
var inst_52638 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_52639 = frontend.fs.sync.get_resp_json_body(inst_52630);
var inst_52640 = [inst_52630,inst_52639];
var inst_52641 = cljs.core.PersistentHashMap.fromArrays(inst_52638,inst_52640);
var inst_52642 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request failed",inst_52641);
var state_52648__$1 = state_52648;
var statearr_52691_56286 = state_52648__$1;
(statearr_52691_56286[(2)] = inst_52642);

(statearr_52691_56286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52649 === (6))){
var inst_52644 = (state_52648[(2)]);
var state_52648__$1 = state_52648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52648__$1,inst_52644);
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
var statearr_52706 = [null,null,null,null,null,null,null,null];
(statearr_52706[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52706[(1)] = (1));

return statearr_52706;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52648){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52648);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52707){var ex__27576__auto__ = e52707;
var statearr_52708_56288 = state_52648;
(statearr_52708_56288[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52648[(4)]))){
var statearr_52709_56289 = state_52648;
(statearr_52709_56289[(1)] = cljs.core.first((state_52648[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56290 = state_52648;
state_52648 = G__56290;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52648){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52725 = f__27596__auto__();
(statearr_52725[(6)] = c__27595__auto__);

return statearr_52725;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52760){
var state_val_52761 = (state_52760[(1)]);
if((state_val_52761 === (1))){
var inst_52746 = (state_52760[(7)]);
var inst_52746__$1 = frontend.state.get_auth_id_token();
var state_52760__$1 = (function (){var statearr_52771 = state_52760;
(statearr_52771[(7)] = inst_52746__$1);

return statearr_52771;
})();
if(cljs.core.truth_(inst_52746__$1)){
var statearr_52772_56292 = state_52760__$1;
(statearr_52772_56292[(1)] = (2));

} else {
var statearr_52777_56293 = state_52760__$1;
(statearr_52777_56293[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (2))){
var inst_52746 = (state_52760[(7)]);
var state_52760__$1 = state_52760;
var statearr_52783_56294 = state_52760__$1;
(statearr_52783_56294[(2)] = inst_52746);

(statearr_52783_56294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52761 === (3))){
var inst_52753 = this$__$1.frontend$fs$sync$IToken$refresh_token$arity$1(null);
var state_52760__$1 = state_52760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52760__$1,(5),inst_52753);
} else {
if((state_val_52761 === (4))){
var inst_52757 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52760__$1,inst_52757);
} else {
if((state_val_52761 === (5))){
var inst_52755 = (state_52760[(2)]);
var state_52760__$1 = state_52760;
var statearr_52785_56295 = state_52760__$1;
(statearr_52785_56295[(2)] = inst_52755);

(statearr_52785_56295[(1)] = (4));


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
var statearr_52786 = [null,null,null,null,null,null,null,null];
(statearr_52786[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52786[(1)] = (1));

return statearr_52786;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52760){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52760);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52787){var ex__27576__auto__ = e52787;
var statearr_52788_56296 = state_52760;
(statearr_52788_56296[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52760[(4)]))){
var statearr_52789_56297 = state_52760;
(statearr_52789_56297[(1)] = cljs.core.first((state_52760[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56298 = state_52760;
state_52760 = G__56298;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52760){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52790 = f__27596__auto__();
(statearr_52790[(6)] = c__27595__auto__);

return statearr_52790;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52796){
var state_val_52797 = (state_52796[(1)]);
if((state_val_52797 === (1))){
var inst_52791 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_52796__$1 = state_52796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52796__$1,(2),inst_52791);
} else {
if((state_val_52797 === (2))){
var inst_52793 = (state_52796[(2)]);
var inst_52794 = frontend.state.get_auth_id_token();
var state_52796__$1 = (function (){var statearr_52798 = state_52796;
(statearr_52798[(7)] = inst_52793);

return statearr_52798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52796__$1,inst_52794);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52800 = [null,null,null,null,null,null,null,null];
(statearr_52800[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52800[(1)] = (1));

return statearr_52800;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52796){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52796);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52801){var ex__27576__auto__ = e52801;
var statearr_52802_56299 = state_52796;
(statearr_52802_56299[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52796[(4)]))){
var statearr_52804_56300 = state_52796;
(statearr_52804_56300[(1)] = cljs.core.first((state_52796[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56301 = state_52796;
state_52796 = G__56301;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52796){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52808 = f__27596__auto__();
(statearr_52808[(6)] = c__27595__auto__);

return statearr_52808;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52857){
var state_val_52858 = (state_52857[(1)]);
if((state_val_52858 === (7))){
var inst_52852 = (state_52857[(2)]);
var state_52857__$1 = state_52857;
var statearr_52860_56303 = state_52857__$1;
(statearr_52860_56303[(2)] = inst_52852);

(statearr_52860_56303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (1))){
var inst_52815 = null;
var inst_52816 = null;
var state_52857__$1 = (function (){var statearr_52861 = state_52857;
(statearr_52861[(7)] = inst_52816);

(statearr_52861[(8)] = inst_52815);

return statearr_52861;
})();
var statearr_52866_56304 = state_52857__$1;
(statearr_52866_56304[(2)] = null);

(statearr_52866_56304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (4))){
var inst_52827 = (state_52857[(9)]);
var inst_52827__$1 = (state_52857[(2)]);
var inst_52828 = (inst_52827__$1 instanceof cljs.core.ExceptionInfo);
var state_52857__$1 = (function (){var statearr_52867 = state_52857;
(statearr_52867[(9)] = inst_52827__$1);

return statearr_52867;
})();
if(cljs.core.truth_(inst_52828)){
var statearr_52868_56305 = state_52857__$1;
(statearr_52868_56305[(1)] = (5));

} else {
var statearr_52869_56306 = state_52857__$1;
(statearr_52869_56306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (13))){
var inst_52850 = (state_52857[(2)]);
var state_52857__$1 = state_52857;
var statearr_52870_56308 = state_52857__$1;
(statearr_52870_56308[(2)] = inst_52850);

(statearr_52870_56308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (6))){
var inst_52831 = (state_52857[(10)]);
var inst_52827 = (state_52857[(9)]);
var inst_52832 = (state_52857[(11)]);
var inst_52816 = (state_52857[(7)]);
var inst_52815 = (state_52857[(8)]);
var inst_52837 = (state_52857[(12)]);
var inst_52831__$1 = new cljs.core.Keyword(null,"NextDir","NextDir",-113026321).cljs$core$IFn$_invoke$arity$1(inst_52827);
var inst_52832__$1 = new cljs.core.Keyword(null,"NextContinuationToken","NextContinuationToken",1106322029).cljs$core$IFn$_invoke$arity$1(inst_52827);
var inst_52833 = new cljs.core.Keyword(null,"Objects","Objects",-610644271).cljs$core$IFn$_invoke$arity$1(inst_52827);
var inst_52834 = (function (){var dir = inst_52815;
var continuation_token = inst_52816;
var r = inst_52827;
var next_dir = inst_52831__$1;
var next_continuation_token = inst_52832__$1;
var objs = inst_52833;
return (function (p1__52606_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__52606_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__52606_SHARP_),frontend.fs.sync.remove_user_graph_uuid_prefix(decodeURIComponent(new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__52606_SHARP_))),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__52606_SHARP_),true,null);
});
})();
var inst_52835 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_52834,inst_52833);
var inst_52836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,file_meta_list,inst_52835);
var inst_52837__$1 = cljs.core.empty_QMARK_(inst_52831__$1);
var state_52857__$1 = (function (){var statearr_52871 = state_52857;
(statearr_52871[(10)] = inst_52831__$1);

(statearr_52871[(13)] = inst_52836);

(statearr_52871[(11)] = inst_52832__$1);

(statearr_52871[(12)] = inst_52837__$1);

return statearr_52871;
})();
if(inst_52837__$1){
var statearr_52872_56310 = state_52857__$1;
(statearr_52872_56310[(1)] = (8));

} else {
var statearr_52873_56311 = state_52857__$1;
(statearr_52873_56311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (3))){
var inst_52854 = (state_52857[(2)]);
var state_52857__$1 = state_52857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52857__$1,inst_52854);
} else {
if((state_val_52858 === (12))){
var inst_52831 = (state_52857[(10)]);
var inst_52832 = (state_52857[(11)]);
var inst_52815 = inst_52831;
var inst_52816 = inst_52832;
var state_52857__$1 = (function (){var statearr_52874 = state_52857;
(statearr_52874[(7)] = inst_52816);

(statearr_52874[(8)] = inst_52815);

return statearr_52874;
})();
var statearr_52875_56312 = state_52857__$1;
(statearr_52875_56312[(2)] = null);

(statearr_52875_56312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (2))){
var inst_52816 = (state_52857[(7)]);
var inst_52815 = (state_52857[(8)]);
var inst_52818 = cljs.core.PersistentHashMap.EMPTY;
var inst_52819 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second);
var inst_52820 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Dir","Dir",1454706553),new cljs.core.Keyword(null,"ContinuationToken","ContinuationToken",-770030188)];
var inst_52821 = [graph_uuid,inst_52815,inst_52816];
var inst_52822 = cljs.core.PersistentHashMap.fromArrays(inst_52820,inst_52821);
var inst_52823 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_52819,inst_52822);
var inst_52824 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_52818,inst_52823);
var inst_52825 = this$__$1.request("get_all_files",inst_52824);
var state_52857__$1 = state_52857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52857__$1,(4),inst_52825);
} else {
if((state_val_52858 === (11))){
var inst_52845 = cljs.core.persistent_BANG_(file_meta_list);
var state_52857__$1 = state_52857;
var statearr_52878_56315 = state_52857__$1;
(statearr_52878_56315[(2)] = inst_52845);

(statearr_52878_56315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (9))){
var inst_52837 = (state_52857[(12)]);
var state_52857__$1 = state_52857;
var statearr_52879_56316 = state_52857__$1;
(statearr_52879_56316[(2)] = inst_52837);

(statearr_52879_56316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (5))){
var inst_52827 = (state_52857[(9)]);
var state_52857__$1 = state_52857;
var statearr_52880_56317 = state_52857__$1;
(statearr_52880_56317[(2)] = inst_52827);

(statearr_52880_56317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (10))){
var inst_52842 = (state_52857[(2)]);
var state_52857__$1 = state_52857;
if(cljs.core.truth_(inst_52842)){
var statearr_52881_56318 = state_52857__$1;
(statearr_52881_56318[(1)] = (11));

} else {
var statearr_52883_56319 = state_52857__$1;
(statearr_52883_56319[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52858 === (8))){
var inst_52832 = (state_52857[(11)]);
var inst_52839 = cljs.core.empty_QMARK_(inst_52832);
var state_52857__$1 = state_52857;
var statearr_52886_56320 = state_52857__$1;
(statearr_52886_56320[(2)] = inst_52839);

(statearr_52886_56320[(1)] = (10));


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
var statearr_52887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52887[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52887[(1)] = (1));

return statearr_52887;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52857){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52857);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52888){var ex__27576__auto__ = e52888;
var statearr_52889_56321 = state_52857;
(statearr_52889_56321[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52857[(4)]))){
var statearr_52890_56322 = state_52857;
(statearr_52890_56322[(1)] = cljs.core.first((state_52857[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56323 = state_52857;
state_52857 = G__56323;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52857){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52891 = f__27596__auto__();
(statearr_52891[(6)] = c__27595__auto__);

return statearr_52891;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52909){
var state_val_52910 = (state_52909[(1)]);
if((state_val_52910 === (1))){
var inst_52892 = (state_52909[(7)]);
var inst_52892__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.encode_filepath,filepaths);
var inst_52893 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Files","Files",1992500914)];
var inst_52894 = [graph_uuid,inst_52892__$1];
var inst_52895 = cljs.core.PersistentHashMap.fromArrays(inst_52893,inst_52894);
var inst_52896 = this$__$1.request("get_files_meta",inst_52895);
var state_52909__$1 = (function (){var statearr_52911 = state_52909;
(statearr_52911[(7)] = inst_52892__$1);

return statearr_52911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52909__$1,(2),inst_52896);
} else {
if((state_val_52910 === (2))){
var inst_52898 = (state_52909[(8)]);
var inst_52898__$1 = (state_52909[(2)]);
var inst_52899 = (inst_52898__$1 instanceof cljs.core.ExceptionInfo);
var state_52909__$1 = (function (){var statearr_52917 = state_52909;
(statearr_52917[(8)] = inst_52898__$1);

return statearr_52917;
})();
if(cljs.core.truth_(inst_52899)){
var statearr_52918_56324 = state_52909__$1;
(statearr_52918_56324[(1)] = (3));

} else {
var statearr_52920_56325 = state_52909__$1;
(statearr_52920_56325[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52910 === (3))){
var inst_52898 = (state_52909[(8)]);
var state_52909__$1 = state_52909;
var statearr_52921_56327 = state_52909__$1;
(statearr_52921_56327[(2)] = inst_52898);

(statearr_52921_56327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52910 === (4))){
var inst_52898 = (state_52909[(8)]);
var inst_52892 = (state_52909[(7)]);
var inst_52902 = cljs.core.PersistentHashSet.EMPTY;
var inst_52903 = (function (){var encoded_filepaths = inst_52892;
var r = inst_52898;
return (function (p1__52607_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__52607_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__52607_SHARP_),decodeURIComponent(new cljs.core.Keyword(null,"FilePath","FilePath",1522398781).cljs$core$IFn$_invoke$arity$1(p1__52607_SHARP_)),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__52607_SHARP_),true,null);
});
})();
var inst_52904 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_52903);
var inst_52905 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_52902,inst_52904,inst_52898);
var state_52909__$1 = state_52909;
var statearr_52924_56328 = state_52909__$1;
(statearr_52924_56328[(2)] = inst_52905);

(statearr_52924_56328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52910 === (5))){
var inst_52907 = (state_52909[(2)]);
var state_52909__$1 = state_52909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52909__$1,inst_52907);
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
var statearr_52930 = [null,null,null,null,null,null,null,null,null];
(statearr_52930[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52930[(1)] = (1));

return statearr_52930;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52909){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52909);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52932){var ex__27576__auto__ = e52932;
var statearr_52933_56329 = state_52909;
(statearr_52933_56329[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52909[(4)]))){
var statearr_52934_56330 = state_52909;
(statearr_52934_56330[(1)] = cljs.core.first((state_52909[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56331 = state_52909;
state_52909 = G__56331;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52909){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52936 = f__27596__auto__();
(statearr_52936[(6)] = c__27595__auto__);

return statearr_52936;
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

return this$__$1.request("get_graph",(function (){var G__52938 = cljs.core.PersistentArrayMap.EMPTY;
var G__52938__$1 = ((cljs.core.seq(graph_name_opt))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52938,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name_opt):G__52938);
if(cljs.core.seq(graph_uuid_opt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52938__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid_opt);
} else {
return G__52938__$1;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52970){
var state_val_52971 = (state_52970[(1)]);
if((state_val_52971 === (1))){
var inst_52948 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"FromTXId","FromTXId",-1493550374)];
var inst_52949 = [graph_uuid,from_txid];
var inst_52950 = cljs.core.PersistentHashMap.fromArrays(inst_52948,inst_52949);
var inst_52951 = this$__$1.request("get_diff",inst_52950);
var state_52970__$1 = state_52970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52970__$1,(2),inst_52951);
} else {
if((state_val_52971 === (2))){
var inst_52953 = (state_52970[(7)]);
var inst_52953__$1 = (state_52970[(2)]);
var inst_52954 = (inst_52953__$1 instanceof cljs.core.ExceptionInfo);
var state_52970__$1 = (function (){var statearr_52973 = state_52970;
(statearr_52973[(7)] = inst_52953__$1);

return statearr_52973;
})();
if(cljs.core.truth_(inst_52954)){
var statearr_52974_56333 = state_52970__$1;
(statearr_52974_56333[(1)] = (3));

} else {
var statearr_52975_56334 = state_52970__$1;
(statearr_52975_56334[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52971 === (3))){
var inst_52953 = (state_52970[(7)]);
var state_52970__$1 = state_52970;
var statearr_52976_56335 = state_52970__$1;
(statearr_52976_56335[(2)] = inst_52953);

(statearr_52976_56335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52971 === (4))){
var inst_52953 = (state_52970[(7)]);
var inst_52957 = new cljs.core.Keyword(null,"Transactions","Transactions",-836353760).cljs$core$IFn$_invoke$arity$1(inst_52953);
var inst_52959 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TXId","TXId",-902804781),inst_52957);
var inst_52960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52961 = cljs.core.last(inst_52959);
var inst_52962 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_52961);
var inst_52963 = cljs.core.first(inst_52959);
var inst_52964 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_52963);
var inst_52965 = [inst_52959,inst_52962,inst_52964];
var inst_52966 = (new cljs.core.PersistentVector(null,3,(5),inst_52960,inst_52965,null));
var state_52970__$1 = state_52970;
var statearr_52978_56336 = state_52970__$1;
(statearr_52978_56336[(2)] = inst_52966);

(statearr_52978_56336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52971 === (5))){
var inst_52968 = (state_52970[(2)]);
var state_52970__$1 = state_52970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52970__$1,inst_52968);
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
var statearr_52980 = [null,null,null,null,null,null,null,null];
(statearr_52980[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52980[(1)] = (1));

return statearr_52980;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52970){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52970);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52981){var ex__27576__auto__ = e52981;
var statearr_52982_56338 = state_52970;
(statearr_52982_56338[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52970[(4)]))){
var statearr_52983_56339 = state_52970;
(statearr_52983_56339[(1)] = cljs.core.first((state_52970[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56340 = state_52970;
state_52970 = G__56340;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52970){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52985 = f__27596__auto__();
(statearr_52985[(6)] = c__27595__auto__);

return statearr_52985;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52994){
var state_val_52995 = (state_52994[(1)]);
if((state_val_52995 === (1))){
var inst_52987 = frontend.config.get_local_dir(repo);
var inst_52988 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["addVersionFile",inst_52987,path,content], 0));
var inst_52989 = cljs.core.async.interop.p__GT_c(inst_52988);
var state_52994__$1 = state_52994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52994__$1,(2),inst_52989);
} else {
if((state_val_52995 === (2))){
var inst_52991 = (state_52994[(2)]);
var inst_52992 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["add-new-version-file: ",inst_52991], 0));
var state_52994__$1 = state_52994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52994__$1,inst_52992);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0 = (function (){
var statearr_52996 = [null,null,null,null,null,null,null];
(statearr_52996[(0)] = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__);

(statearr_52996[(1)] = (1));

return statearr_52996;
});
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1 = (function (state_52994){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52994);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52997){var ex__27576__auto__ = e52997;
var statearr_52998_56343 = state_52994;
(statearr_52998_56343[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52994[(4)]))){
var statearr_52999_56345 = state_52994;
(statearr_52999_56345[(1)] = cljs.core.first((state_52994[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56346 = state_52994;
state_52994 = G__56346;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = function(state_52994){
switch(arguments.length){
case 0:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1.call(this,state_52994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0;
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1;
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53000 = f__27596__auto__();
(statearr_53000[(6)] = c__27595__auto__);

return statearr_53000;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53039){
var state_val_53040 = (state_53039[(1)]);
if((state_val_53040 === (7))){
var inst_53035 = (state_53039[(2)]);
var state_53039__$1 = state_53039;
var statearr_53041_56348 = state_53039__$1;
(statearr_53041_56348[(2)] = inst_53035);

(statearr_53041_56348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (1))){
var inst_53004 = filetxn.renamed_QMARK_();
var state_53039__$1 = state_53039;
if(cljs.core.truth_(inst_53004)){
var statearr_53043_56349 = state_53039__$1;
(statearr_53043_56349[(1)] = (2));

} else {
var statearr_53044_56350 = state_53039__$1;
(statearr_53044_56350[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (4))){
var inst_53037 = (state_53039[(2)]);
var state_53039__$1 = state_53039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53039__$1,inst_53037);
} else {
if((state_val_53040 === (15))){
var inst_53021 = (state_53039[(7)]);
var state_53039__$1 = state_53039;
var statearr_53045_56351 = state_53039__$1;
(statearr_53045_56351[(2)] = inst_53021);

(statearr_53045_56351[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (13))){
var inst_53019 = (state_53039[(8)]);
var state_53039__$1 = state_53039;
var statearr_53046_56352 = state_53039__$1;
(statearr_53046_56352[(2)] = inst_53019);

(statearr_53046_56352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (6))){
var inst_53010 = filetxn.updated_QMARK_;
var state_53039__$1 = state_53039;
if(cljs.core.truth_(inst_53010)){
var statearr_53048_56353 = state_53039__$1;
(statearr_53048_56353[(1)] = (8));

} else {
var statearr_53049_56354 = state_53039__$1;
(statearr_53049_56354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (17))){
var inst_53027 = (state_53039[(2)]);
var state_53039__$1 = state_53039;
var statearr_53050_56355 = state_53039__$1;
(statearr_53050_56355[(2)] = inst_53027);

(statearr_53050_56355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (3))){
var inst_53007 = filetxn.deleted_QMARK_;
var state_53039__$1 = state_53039;
if(cljs.core.truth_(inst_53007)){
var statearr_53051_56356 = state_53039__$1;
(statearr_53051_56356[(1)] = (5));

} else {
var statearr_53052_56357 = state_53039__$1;
(statearr_53052_56357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (12))){
var inst_53018 = (state_53039[(9)]);
var inst_53021 = (state_53039[(7)]);
var inst_53021__$1 = (inst_53018 == null);
var state_53039__$1 = (function (){var statearr_53053 = state_53039;
(statearr_53053[(7)] = inst_53021__$1);

return statearr_53053;
})();
if(cljs.core.truth_(inst_53021__$1)){
var statearr_53054_56359 = state_53039__$1;
(statearr_53054_56359[(1)] = (15));

} else {
var statearr_53055_56360 = state_53039__$1;
(statearr_53055_56360[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (2))){
var state_53039__$1 = state_53039;
var statearr_53056_56361 = state_53039__$1;
(statearr_53056_56361[(2)] = false);

(statearr_53056_56361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (11))){
var inst_53019 = (state_53039[(8)]);
var inst_53018 = (state_53039[(2)]);
var inst_53019__$1 = origin_db_content;
var state_53039__$1 = (function (){var statearr_53057 = state_53039;
(statearr_53057[(8)] = inst_53019__$1);

(statearr_53057[(9)] = inst_53018);

return statearr_53057;
})();
if(cljs.core.truth_(inst_53019__$1)){
var statearr_53058_56362 = state_53039__$1;
(statearr_53058_56362[(1)] = (12));

} else {
var statearr_53059_56364 = state_53039__$1;
(statearr_53059_56364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (9))){
var state_53039__$1 = state_53039;
var statearr_53060_56365 = state_53039__$1;
(statearr_53060_56365[(2)] = null);

(statearr_53060_56365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (5))){
var state_53039__$1 = state_53039;
var statearr_53061_56366 = state_53039__$1;
(statearr_53061_56366[(2)] = false);

(statearr_53061_56366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (14))){
var inst_53030 = (state_53039[(2)]);
var state_53039__$1 = state_53039;
var statearr_53072_56367 = state_53039__$1;
(statearr_53072_56367[(2)] = inst_53030);

(statearr_53072_56367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (16))){
var inst_53018 = (state_53039[(9)]);
var inst_53024 = frontend.diff.diff(origin_db_content,inst_53018);
var inst_53025 = cljs.core.some(new cljs.core.Keyword(null,"removed","removed",609626430),inst_53024);
var state_53039__$1 = state_53039;
var statearr_53073_56368 = state_53039__$1;
(statearr_53073_56368[(2)] = inst_53025);

(statearr_53073_56368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (10))){
var inst_53033 = (state_53039[(2)]);
var state_53039__$1 = state_53039;
var statearr_53075_56369 = state_53039__$1;
(statearr_53075_56369[(2)] = inst_53033);

(statearr_53075_56369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53040 === (8))){
var inst_53012 = frontend.fs.sync.relative_path(filetxn);
var inst_53013 = frontend.state.get_current_repo();
var inst_53014 = frontend.config.get_file_path(inst_53013,inst_53012);
var inst_53015 = frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",inst_53014);
var inst_53016 = cljs.core.async.interop.p__GT_c(inst_53015);
var state_53039__$1 = state_53039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53039__$1,(11),inst_53016);
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
var statearr_53076 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53076[(0)] = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__);

(statearr_53076[(1)] = (1));

return statearr_53076;
});
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1 = (function (state_53039){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53039);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53077){var ex__27576__auto__ = e53077;
var statearr_53078_56371 = state_53039;
(statearr_53078_56371[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53039[(4)]))){
var statearr_53080_56372 = state_53039;
(statearr_53080_56372[(1)] = cljs.core.first((state_53039[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56373 = state_53039;
state_53039 = G__56373;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__ = function(state_53039){
switch(arguments.length){
case 0:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1.call(this,state_53039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53081 = f__27596__auto__();
(statearr_53081[(6)] = c__27595__auto__);

return statearr_53081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.apply_filetxns = (function frontend$fs$sync$apply_filetxns(graph_uuid,base_path,filetxns){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53225){
var state_val_53226 = (state_53225[(1)]);
if((state_val_53226 === (7))){
var inst_53090 = (state_53225[(7)]);
var inst_53091 = (state_53225[(8)]);
var inst_53099 = (state_53225[(2)]);
var inst_53100 = frontend.fs.sync.relative_path(inst_53090);
var inst_53101 = frontend.fs.sync.relative_path(inst_53091);
var inst_53102 = frontend.fs.sync.rename_local_file(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53100,inst_53101);
var state_53225__$1 = (function (){var statearr_53243 = state_53225;
(statearr_53243[(9)] = inst_53099);

return statearr_53243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53225__$1,(8),inst_53102);
} else {
if((state_val_53226 === (20))){
var inst_53128 = (state_53225[(10)]);
var inst_53129 = (state_53225[(11)]);
var inst_53130 = (state_53225[(12)]);
var inst_53131 = (state_53225[(13)]);
var inst_53148 = (state_53225[(2)]);
var inst_53149 = (inst_53131 + (1));
var tmp53227 = inst_53128;
var tmp53228 = inst_53129;
var tmp53229 = inst_53130;
var inst_53128__$1 = tmp53227;
var inst_53129__$1 = tmp53228;
var inst_53130__$1 = tmp53229;
var inst_53131__$1 = inst_53149;
var state_53225__$1 = (function (){var statearr_53244 = state_53225;
(statearr_53244[(10)] = inst_53128__$1);

(statearr_53244[(11)] = inst_53129__$1);

(statearr_53244[(12)] = inst_53130__$1);

(statearr_53244[(13)] = inst_53131__$1);

(statearr_53244[(14)] = inst_53148);

return statearr_53244;
})();
var statearr_53245_56378 = state_53225__$1;
(statearr_53245_56378[(2)] = null);

(statearr_53245_56378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (27))){
var inst_53109 = (state_53225[(15)]);
var inst_53165 = (state_53225[(16)]);
var inst_53166 = (state_53225[(17)]);
var inst_53169 = frontend.fs.sync.relative_path(inst_53165);
var inst_53170 = frontend.fs.sync.add_new_version_file(inst_53109,inst_53169,inst_53166);
var state_53225__$1 = state_53225;
var statearr_53246_56379 = state_53225__$1;
(statearr_53246_56379[(2)] = inst_53170);

(statearr_53246_56379[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (1))){
var inst_53086 = cljs.core.first(filetxns);
var inst_53087 = inst_53086.renamed_QMARK_();
var state_53225__$1 = state_53225;
if(cljs.core.truth_(inst_53087)){
var statearr_53248_56380 = state_53225__$1;
(statearr_53248_56380[(1)] = (2));

} else {
var statearr_53249_56381 = state_53225__$1;
(statearr_53249_56381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (24))){
var inst_53152 = (state_53225[(18)]);
var inst_53156 = cljs.core.chunk_first(inst_53152);
var inst_53157 = cljs.core.chunk_rest(inst_53152);
var inst_53158 = cljs.core.count(inst_53156);
var inst_53128 = inst_53157;
var inst_53129 = inst_53156;
var inst_53130 = inst_53158;
var inst_53131 = (0);
var state_53225__$1 = (function (){var statearr_53251 = state_53225;
(statearr_53251[(10)] = inst_53128);

(statearr_53251[(11)] = inst_53129);

(statearr_53251[(12)] = inst_53130);

(statearr_53251[(13)] = inst_53131);

return statearr_53251;
})();
var statearr_53252_56385 = state_53225__$1;
(statearr_53252_56385[(2)] = null);

(statearr_53252_56385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (39))){
var inst_53212 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
if(cljs.core.truth_(inst_53212)){
var statearr_53253_56386 = state_53225__$1;
(statearr_53253_56386[(1)] = (40));

} else {
var statearr_53254_56387 = state_53225__$1;
(statearr_53254_56387[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (4))){
var inst_53223 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53225__$1,inst_53223);
} else {
if((state_val_53226 === (15))){
var inst_53129 = (state_53225[(11)]);
var inst_53141 = (state_53225[(19)]);
var inst_53140 = (state_53225[(20)]);
var inst_53131 = (state_53225[(13)]);
var inst_53139 = cljs.core._nth(inst_53129,inst_53131);
var inst_53140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53139,(0),null);
var inst_53141__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53139,(1),null);
var inst_53142 = frontend.fs.sync.need_add_version_file_QMARK_(inst_53140__$1,inst_53141__$1);
var state_53225__$1 = (function (){var statearr_53255 = state_53225;
(statearr_53255[(19)] = inst_53141__$1);

(statearr_53255[(20)] = inst_53140__$1);

return statearr_53255;
})();
if(cljs.core.truth_(inst_53142)){
var statearr_53256_56388 = state_53225__$1;
(statearr_53256_56388[(1)] = (18));

} else {
var statearr_53257_56389 = state_53225__$1;
(statearr_53257_56389[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (21))){
var inst_53152 = (state_53225[(18)]);
var inst_53154 = cljs.core.chunked_seq_QMARK_(inst_53152);
var state_53225__$1 = state_53225;
if(inst_53154){
var statearr_53258_56390 = state_53225__$1;
(statearr_53258_56390[(1)] = (24));

} else {
var statearr_53259_56391 = state_53225__$1;
(statearr_53259_56391[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (31))){
var state_53225__$1 = state_53225;
var statearr_53260_56392 = state_53225__$1;
(statearr_53260_56392[(2)] = null);

(statearr_53260_56392[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (32))){
var inst_53219 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53261_56393 = state_53225__$1;
(statearr_53261_56393[(2)] = inst_53219);

(statearr_53261_56393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (40))){
var state_53225__$1 = state_53225;
var statearr_53262_56394 = state_53225__$1;
(statearr_53262_56394[(2)] = true);

(statearr_53262_56394[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (33))){
var state_53225__$1 = state_53225;
var statearr_53263_56395 = state_53225__$1;
(statearr_53263_56395[(2)] = null);

(statearr_53263_56395[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (13))){
var inst_53130 = (state_53225[(12)]);
var inst_53131 = (state_53225[(13)]);
var inst_53133 = (inst_53131 < inst_53130);
var inst_53134 = inst_53133;
var state_53225__$1 = state_53225;
if(cljs.core.truth_(inst_53134)){
var statearr_53264_56396 = state_53225__$1;
(statearr_53264_56396[(1)] = (15));

} else {
var statearr_53265_56397 = state_53225__$1;
(statearr_53265_56397[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (22))){
var state_53225__$1 = state_53225;
var statearr_53266_56398 = state_53225__$1;
(statearr_53266_56398[(2)] = null);

(statearr_53266_56398[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (36))){
var inst_53205 = (state_53225[(21)]);
var inst_53204 = (state_53225[(22)]);
var inst_53204__$1 = (state_53225[(2)]);
var inst_53205__$1 = (inst_53204__$1 instanceof cljs.core.ExceptionInfo);
var state_53225__$1 = (function (){var statearr_53267 = state_53225;
(statearr_53267[(21)] = inst_53205__$1);

(statearr_53267[(22)] = inst_53204__$1);

return statearr_53267;
})();
if(cljs.core.truth_(inst_53205__$1)){
var statearr_53268_56399 = state_53225__$1;
(statearr_53268_56399[(1)] = (37));

} else {
var statearr_53272_56400 = state_53225__$1;
(statearr_53272_56400[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (41))){
var inst_53204 = (state_53225[(22)]);
var state_53225__$1 = state_53225;
var statearr_53273_56401 = state_53225__$1;
(statearr_53273_56401[(2)] = inst_53204);

(statearr_53273_56401[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (29))){
var inst_53152 = (state_53225[(18)]);
var inst_53173 = (state_53225[(2)]);
var inst_53174 = cljs.core.next(inst_53152);
var inst_53128 = inst_53174;
var inst_53129 = null;
var inst_53130 = (0);
var inst_53131 = (0);
var state_53225__$1 = (function (){var statearr_53274 = state_53225;
(statearr_53274[(10)] = inst_53128);

(statearr_53274[(11)] = inst_53129);

(statearr_53274[(12)] = inst_53130);

(statearr_53274[(13)] = inst_53131);

(statearr_53274[(23)] = inst_53173);

return statearr_53274;
})();
var statearr_53275_56402 = state_53225__$1;
(statearr_53275_56402[(2)] = null);

(statearr_53275_56402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (6))){
var inst_53096 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_53097 = (function(){throw inst_53096})();
var state_53225__$1 = state_53225;
var statearr_53276_56403 = state_53225__$1;
(statearr_53276_56403[(2)] = inst_53097);

(statearr_53276_56403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (28))){
var state_53225__$1 = state_53225;
var statearr_53277_56404 = state_53225__$1;
(statearr_53277_56404[(2)] = null);

(statearr_53277_56404[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (25))){
var inst_53165 = (state_53225[(16)]);
var inst_53166 = (state_53225[(17)]);
var inst_53152 = (state_53225[(18)]);
var inst_53164 = cljs.core.first(inst_53152);
var inst_53165__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53164,(0),null);
var inst_53166__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53164,(1),null);
var inst_53167 = frontend.fs.sync.need_add_version_file_QMARK_(inst_53165__$1,inst_53166__$1);
var state_53225__$1 = (function (){var statearr_53281 = state_53225;
(statearr_53281[(16)] = inst_53165__$1);

(statearr_53281[(17)] = inst_53166__$1);

return statearr_53281;
})();
if(cljs.core.truth_(inst_53167)){
var statearr_53282_56407 = state_53225__$1;
(statearr_53282_56407[(1)] = (27));

} else {
var statearr_53283_56408 = state_53225__$1;
(statearr_53283_56408[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (34))){
var inst_53194 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_53195 = (function(){throw inst_53194})();
var state_53225__$1 = state_53225;
var statearr_53284_56409 = state_53225__$1;
(statearr_53284_56409[(2)] = inst_53195);

(statearr_53284_56409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (17))){
var inst_53182 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53285_56410 = state_53225__$1;
(statearr_53285_56410[(2)] = inst_53182);

(statearr_53285_56410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (3))){
var inst_53106 = cljs.core.first(filetxns);
var inst_53107 = inst_53106.updated_QMARK_;
var state_53225__$1 = state_53225;
if(cljs.core.truth_(inst_53107)){
var statearr_53286_56411 = state_53225__$1;
(statearr_53286_56411[(1)] = (9));

} else {
var statearr_53287_56412 = state_53225__$1;
(statearr_53287_56412[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (12))){
var inst_53118 = (state_53225[(24)]);
var inst_53122 = (state_53225[(2)]);
var inst_53127 = cljs.core.seq(inst_53118);
var inst_53128 = inst_53127;
var inst_53129 = null;
var inst_53130 = (0);
var inst_53131 = (0);
var state_53225__$1 = (function (){var statearr_53288 = state_53225;
(statearr_53288[(10)] = inst_53128);

(statearr_53288[(11)] = inst_53129);

(statearr_53288[(25)] = inst_53122);

(statearr_53288[(12)] = inst_53130);

(statearr_53288[(13)] = inst_53131);

return statearr_53288;
})();
var statearr_53290_56413 = state_53225__$1;
(statearr_53290_56413[(2)] = null);

(statearr_53290_56413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (2))){
var inst_53089 = cljs.core.first(filetxns);
var inst_53090 = inst_53089.from_path;
var inst_53091 = inst_53089.to_path;
var inst_53092 = cljs.core.count(filetxns);
var inst_53093 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_53092);
var state_53225__$1 = (function (){var statearr_53291 = state_53225;
(statearr_53291[(7)] = inst_53090);

(statearr_53291[(8)] = inst_53091);

return statearr_53291;
})();
if(inst_53093){
var statearr_53292_56414 = state_53225__$1;
(statearr_53292_56414[(1)] = (5));

} else {
var statearr_53293_56415 = state_53225__$1;
(statearr_53293_56415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (23))){
var inst_53180 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53294_56416 = state_53225__$1;
(statearr_53294_56416[(2)] = inst_53180);

(statearr_53294_56416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (35))){
var inst_53189 = (state_53225[(26)]);
var inst_53197 = (state_53225[(2)]);
var inst_53198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53199 = frontend.fs.sync.relative_path(inst_53189);
var inst_53200 = [inst_53199];
var inst_53201 = (new cljs.core.PersistentVector(null,1,(5),inst_53198,inst_53200,null));
var inst_53202 = frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53201);
var state_53225__$1 = (function (){var statearr_53296 = state_53225;
(statearr_53296[(27)] = inst_53197);

return statearr_53296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53225__$1,(36),inst_53202);
} else {
if((state_val_53226 === (19))){
var state_53225__$1 = state_53225;
var statearr_53298_56417 = state_53225__$1;
(statearr_53298_56417[(2)] = null);

(statearr_53298_56417[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (11))){
var inst_53221 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53299_56418 = state_53225__$1;
(statearr_53299_56418[(2)] = inst_53221);

(statearr_53299_56418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (9))){
var inst_53109 = (state_53225[(15)]);
var inst_53109__$1 = frontend.state.get_current_repo();
var inst_53110 = (function (){var repo = inst_53109__$1;
return (function (p1__53082_SHARP_){
if(frontend.fs.sync.is_journals_or_pages_QMARK_(p1__53082_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__53082_SHARP_,(function (){var G__53301 = repo;
var G__53302 = frontend.config.get_file_path(repo,frontend.fs.sync.relative_path(p1__53082_SHARP_));
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(G__53301,G__53302) : frontend.db.get_file.call(null,G__53301,G__53302));
})()], null);
} else {
return null;
}
});
})();
var inst_53117 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_53110,filetxns);
var inst_53118 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,inst_53117);
var inst_53119 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns);
var inst_53120 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_53119);
var state_53225__$1 = (function (){var statearr_53303 = state_53225;
(statearr_53303[(24)] = inst_53118);

(statearr_53303[(15)] = inst_53109__$1);

return statearr_53303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53225__$1,(12),inst_53120);
} else {
if((state_val_53226 === (5))){
var state_53225__$1 = state_53225;
var statearr_53304_56419 = state_53225__$1;
(statearr_53304_56419[(2)] = null);

(statearr_53304_56419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (14))){
var inst_53184 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53305_56420 = state_53225__$1;
(statearr_53305_56420[(2)] = inst_53184);

(statearr_53305_56420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (26))){
var inst_53177 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53306_56421 = state_53225__$1;
(statearr_53306_56421[(2)] = inst_53177);

(statearr_53306_56421[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (16))){
var inst_53128 = (state_53225[(10)]);
var inst_53152 = (state_53225[(18)]);
var inst_53152__$1 = cljs.core.seq(inst_53128);
var state_53225__$1 = (function (){var statearr_53307 = state_53225;
(statearr_53307[(18)] = inst_53152__$1);

return statearr_53307;
})();
if(inst_53152__$1){
var statearr_53308_56422 = state_53225__$1;
(statearr_53308_56422[(1)] = (21));

} else {
var statearr_53309_56423 = state_53225__$1;
(statearr_53309_56423[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (38))){
var inst_53205 = (state_53225[(21)]);
var state_53225__$1 = state_53225;
var statearr_53310_56424 = state_53225__$1;
(statearr_53310_56424[(2)] = inst_53205);

(statearr_53310_56424[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (30))){
var inst_53189 = cljs.core.first(filetxns);
var inst_53190 = cljs.core.count(filetxns);
var inst_53191 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_53190);
var state_53225__$1 = (function (){var statearr_53311 = state_53225;
(statearr_53311[(26)] = inst_53189);

return statearr_53311;
})();
if(inst_53191){
var statearr_53312_56425 = state_53225__$1;
(statearr_53312_56425[(1)] = (33));

} else {
var statearr_53313_56426 = state_53225__$1;
(statearr_53313_56426[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (10))){
var inst_53186 = cljs.core.first(filetxns);
var inst_53187 = inst_53186.deleted_QMARK_;
var state_53225__$1 = state_53225;
if(cljs.core.truth_(inst_53187)){
var statearr_53314_56427 = state_53225__$1;
(statearr_53314_56427[(1)] = (30));

} else {
var statearr_53315_56428 = state_53225__$1;
(statearr_53315_56428[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (18))){
var inst_53109 = (state_53225[(15)]);
var inst_53141 = (state_53225[(19)]);
var inst_53140 = (state_53225[(20)]);
var inst_53144 = frontend.fs.sync.relative_path(inst_53140);
var inst_53145 = frontend.fs.sync.add_new_version_file(inst_53109,inst_53144,inst_53141);
var state_53225__$1 = state_53225;
var statearr_53316_56429 = state_53225__$1;
(statearr_53316_56429[(2)] = inst_53145);

(statearr_53316_56429[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (42))){
var inst_53216 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53317_56430 = state_53225__$1;
(statearr_53317_56430[(2)] = inst_53216);

(statearr_53317_56430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (37))){
var inst_53204 = (state_53225[(22)]);
var inst_53207 = cljs.core.ex_cause(inst_53204);
var inst_53208 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53207);
var inst_53209 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_53208,"No such file or directory");
var state_53225__$1 = state_53225;
var statearr_53318_56431 = state_53225__$1;
(statearr_53318_56431[(2)] = inst_53209);

(statearr_53318_56431[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53226 === (8))){
var inst_53104 = (state_53225[(2)]);
var state_53225__$1 = state_53225;
var statearr_53319_56432 = state_53225__$1;
(statearr_53319_56432[(2)] = inst_53104);

(statearr_53319_56432[(1)] = (4));


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
var statearr_53320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53320[(0)] = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__);

(statearr_53320[(1)] = (1));

return statearr_53320;
});
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1 = (function (state_53225){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53225);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53322){var ex__27576__auto__ = e53322;
var statearr_53324_56433 = state_53225;
(statearr_53324_56433[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53225[(4)]))){
var statearr_53328_56434 = state_53225;
(statearr_53328_56434[(1)] = cljs.core.first((state_53225[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56435 = state_53225;
state_53225 = G__56435;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__ = function(state_53225){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1.call(this,state_53225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53329 = f__27596__auto__();
(statearr_53329[(6)] = c__27595__auto__);

return statearr_53329;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53420){
var state_val_53421 = (state_53420[(1)]);
if((state_val_53421 === (7))){
var inst_53333 = (state_53420[(7)]);
var inst_53345 = (state_53420[(8)]);
var inst_53343 = (state_53420[(9)]);
var inst_53343__$1 = cljs.core.first(inst_53333);
var inst_53344 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_53343__$1);
var inst_53345__$1 = before_f;
var state_53420__$1 = (function (){var statearr_53428 = state_53420;
(statearr_53428[(8)] = inst_53345__$1);

(statearr_53428[(9)] = inst_53343__$1);

(statearr_53428[(10)] = inst_53344);

return statearr_53428;
})();
if(cljs.core.truth_(inst_53345__$1)){
var statearr_53429_56436 = state_53420__$1;
(statearr_53429_56436[(1)] = (10));

} else {
var statearr_53430_56437 = state_53420__$1;
(statearr_53430_56437[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (20))){
var inst_53344 = (state_53420[(10)]);
var inst_53367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__remove_current_remote__GT_local_files,inst_53344);
var state_53420__$1 = state_53420;
var statearr_53431_56438 = state_53420__$1;
(statearr_53431_56438[(2)] = inst_53367);

(statearr_53431_56438[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (27))){
var inst_53391 = (state_53420[(11)]);
var state_53420__$1 = state_53420;
var statearr_53432_56439 = state_53420__$1;
(statearr_53432_56439[(2)] = inst_53391);

(statearr_53432_56439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (1))){
var inst_53332 = filetxns_partitions;
var inst_53333 = inst_53332;
var state_53420__$1 = (function (){var statearr_53433 = state_53420;
(statearr_53433[(7)] = inst_53333);

return statearr_53433;
})();
var statearr_53434_56440 = state_53420__$1;
(statearr_53434_56440[(2)] = null);

(statearr_53434_56440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (24))){
var inst_53333 = (state_53420[(7)]);
var inst_53343 = (state_53420[(9)]);
var inst_53344 = (state_53420[(10)]);
var inst_53364 = (state_53420[(12)]);
var inst_53391 = (state_53420[(11)]);
var inst_53370 = (state_53420[(13)]);
var inst_53388 = (function (){var filetxns_partitions_STAR_ = inst_53333;
var filetxns = inst_53343;
var paths = inst_53344;
var _ = inst_53370;
var r = inst_53364;
return (function (p1__53330_SHARP_){
return p1__53330_SHARP_.txid;
});
})();
var inst_53389 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_53388,inst_53343);
var inst_53390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,inst_53389);
var inst_53391__$1 = after_f;
var state_53420__$1 = (function (){var statearr_53435 = state_53420;
(statearr_53435[(11)] = inst_53391__$1);

(statearr_53435[(14)] = inst_53390);

return statearr_53435;
})();
if(cljs.core.truth_(inst_53391__$1)){
var statearr_53436_56441 = state_53420__$1;
(statearr_53436_56441[(1)] = (26));

} else {
var statearr_53437_56442 = state_53420__$1;
(statearr_53437_56442[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (4))){
var inst_53337 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_53338 = [true];
var inst_53339 = cljs.core.PersistentHashMap.fromArrays(inst_53337,inst_53338);
var state_53420__$1 = state_53420;
var statearr_53438_56443 = state_53420__$1;
(statearr_53438_56443[(2)] = inst_53339);

(statearr_53438_56443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (15))){
var inst_53355 = (state_53420[(2)]);
var state_53420__$1 = (function (){var statearr_53439 = state_53420;
(statearr_53439[(15)] = inst_53355);

return statearr_53439;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_53440_56444 = state_53420__$1;
(statearr_53440_56444[(1)] = (16));

} else {
var statearr_53441_56445 = state_53420__$1;
(statearr_53441_56445[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (21))){
var state_53420__$1 = state_53420;
var statearr_53442_56446 = state_53420__$1;
(statearr_53442_56446[(2)] = null);

(statearr_53442_56446[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (31))){
var inst_53401 = (state_53420[(2)]);
var state_53420__$1 = (function (){var statearr_53443 = state_53420;
(statearr_53443[(16)] = inst_53401);

return statearr_53443;
})();
if(cljs.core.truth_(_STAR_txid)){
var statearr_53444_56447 = state_53420__$1;
(statearr_53444_56447[(1)] = (32));

} else {
var statearr_53445_56448 = state_53420__$1;
(statearr_53445_56448[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (32))){
var inst_53390 = (state_53420[(14)]);
var inst_53403 = cljs.core.reset_BANG_(_STAR_txid,inst_53390);
var inst_53404 = frontend.fs.sync.update_graphs_txid_BANG_(inst_53390,graph_uuid,user_uuid,repo);
var state_53420__$1 = (function (){var statearr_53446 = state_53420;
(statearr_53446[(17)] = inst_53403);

return statearr_53446;
})();
var statearr_53447_56449 = state_53420__$1;
(statearr_53447_56449[(2)] = inst_53404);

(statearr_53447_56449[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (33))){
var state_53420__$1 = state_53420;
var statearr_53448_56450 = state_53420__$1;
(statearr_53448_56450[(2)] = null);

(statearr_53448_56450[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (13))){
var inst_53343 = (state_53420[(9)]);
var inst_53352 = (before_f.cljs$core$IFn$_invoke$arity$1 ? before_f.cljs$core$IFn$_invoke$arity$1(inst_53343) : before_f.call(null,inst_53343));
var state_53420__$1 = state_53420;
var statearr_53450_56451 = state_53420__$1;
(statearr_53450_56451[(2)] = inst_53352);

(statearr_53450_56451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (22))){
var inst_53364 = (state_53420[(12)]);
var inst_53370 = (state_53420[(2)]);
var inst_53371 = (inst_53364 instanceof cljs.core.ExceptionInfo);
var state_53420__$1 = (function (){var statearr_53451 = state_53420;
(statearr_53451[(13)] = inst_53370);

return statearr_53451;
})();
if(cljs.core.truth_(inst_53371)){
var statearr_53452_56452 = state_53420__$1;
(statearr_53452_56452[(1)] = (23));

} else {
var statearr_53453_56453 = state_53420__$1;
(statearr_53453_56453[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (29))){
var inst_53343 = (state_53420[(9)]);
var inst_53398 = (after_f.cljs$core$IFn$_invoke$arity$1 ? after_f.cljs$core$IFn$_invoke$arity$1(inst_53343) : after_f.call(null,inst_53343));
var state_53420__$1 = state_53420;
var statearr_53454_56454 = state_53420__$1;
(statearr_53454_56454[(2)] = inst_53398);

(statearr_53454_56454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (6))){
var inst_53416 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53455_56455 = state_53420__$1;
(statearr_53455_56455[(2)] = inst_53416);

(statearr_53455_56455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (28))){
var inst_53396 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53396)){
var statearr_53457_56456 = state_53420__$1;
(statearr_53457_56456[(1)] = (29));

} else {
var statearr_53458_56457 = state_53420__$1;
(statearr_53458_56457[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (25))){
var inst_53411 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53459_56458 = state_53420__$1;
(statearr_53459_56458[(2)] = inst_53411);

(statearr_53459_56458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (34))){
var inst_53333 = (state_53420[(7)]);
var inst_53407 = (state_53420[(2)]);
var inst_53408 = cljs.core.next(inst_53333);
var inst_53333__$1 = inst_53408;
var state_53420__$1 = (function (){var statearr_53460 = state_53420;
(statearr_53460[(7)] = inst_53333__$1);

(statearr_53460[(18)] = inst_53407);

return statearr_53460;
})();
var statearr_53467_56459 = state_53420__$1;
(statearr_53467_56459[(2)] = null);

(statearr_53467_56459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (17))){
var state_53420__$1 = state_53420;
var statearr_53469_56460 = state_53420__$1;
(statearr_53469_56460[(2)] = null);

(statearr_53469_56460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (3))){
var inst_53418 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53420__$1,inst_53418);
} else {
if((state_val_53421 === (12))){
var inst_53350 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53350)){
var statearr_53470_56461 = state_53420__$1;
(statearr_53470_56461[(1)] = (13));

} else {
var statearr_53471_56462 = state_53420__$1;
(statearr_53471_56462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (2))){
var inst_53335 = cljs.core.deref(_STAR_stopped);
var state_53420__$1 = state_53420;
if(cljs.core.truth_(inst_53335)){
var statearr_53472_56463 = state_53420__$1;
(statearr_53472_56463[(1)] = (4));

} else {
var statearr_53473_56464 = state_53420__$1;
(statearr_53473_56464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (23))){
var inst_53364 = (state_53420[(12)]);
var state_53420__$1 = state_53420;
var statearr_53475_56465 = state_53420__$1;
(statearr_53475_56465[(2)] = inst_53364);

(statearr_53475_56465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (19))){
var inst_53364 = (state_53420[(2)]);
var state_53420__$1 = (function (){var statearr_53476 = state_53420;
(statearr_53476[(12)] = inst_53364);

return statearr_53476;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_53478_56466 = state_53420__$1;
(statearr_53478_56466[(1)] = (20));

} else {
var statearr_53479_56467 = state_53420__$1;
(statearr_53479_56467[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (11))){
var inst_53345 = (state_53420[(8)]);
var state_53420__$1 = state_53420;
var statearr_53480_56468 = state_53420__$1;
(statearr_53480_56468[(2)] = inst_53345);

(statearr_53480_56468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (9))){
var inst_53414 = (state_53420[(2)]);
var state_53420__$1 = state_53420;
var statearr_53482_56469 = state_53420__$1;
(statearr_53482_56469[(2)] = inst_53414);

(statearr_53482_56469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (5))){
var inst_53333 = (state_53420[(7)]);
var inst_53341 = cljs.core.seq(inst_53333);
var state_53420__$1 = state_53420;
if(inst_53341){
var statearr_53483_56470 = state_53420__$1;
(statearr_53483_56470[(1)] = (7));

} else {
var statearr_53484_56471 = state_53420__$1;
(statearr_53484_56471[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (14))){
var state_53420__$1 = state_53420;
var statearr_53486_56472 = state_53420__$1;
(statearr_53486_56472[(2)] = null);

(statearr_53486_56472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (26))){
var inst_53393 = cljs.core.fn_QMARK_(after_f);
var state_53420__$1 = state_53420;
var statearr_53487_56473 = state_53420__$1;
(statearr_53487_56473[(2)] = inst_53393);

(statearr_53487_56473[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (16))){
var inst_53344 = (state_53420[(10)]);
var inst_53358 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__add_current_remote__GT_local_files,inst_53344);
var state_53420__$1 = state_53420;
var statearr_53488_56474 = state_53420__$1;
(statearr_53488_56474[(2)] = inst_53358);

(statearr_53488_56474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (30))){
var state_53420__$1 = state_53420;
var statearr_53489_56475 = state_53420__$1;
(statearr_53489_56475[(2)] = null);

(statearr_53489_56475[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (10))){
var inst_53347 = cljs.core.fn_QMARK_(before_f);
var state_53420__$1 = state_53420;
var statearr_53490_56476 = state_53420__$1;
(statearr_53490_56476[(2)] = inst_53347);

(statearr_53490_56476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53421 === (18))){
var inst_53343 = (state_53420[(9)]);
var inst_53361 = (state_53420[(2)]);
var inst_53362 = frontend.fs.sync.apply_filetxns(graph_uuid,base_path,inst_53343);
var state_53420__$1 = (function (){var statearr_53491 = state_53420;
(statearr_53491[(19)] = inst_53361);

return statearr_53491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53420__$1,(19),inst_53362);
} else {
if((state_val_53421 === (8))){
var state_53420__$1 = state_53420;
var statearr_53492_56477 = state_53420__$1;
(statearr_53492_56477[(2)] = null);

(statearr_53492_56477[(1)] = (9));


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
var statearr_53495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53495[(0)] = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__);

(statearr_53495[(1)] = (1));

return statearr_53495;
});
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1 = (function (state_53420){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53420);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53496){var ex__27576__auto__ = e53496;
var statearr_53497_56478 = state_53420;
(statearr_53497_56478[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53420[(4)]))){
var statearr_53498_56479 = state_53420;
(statearr_53498_56479[(1)] = cljs.core.first((state_53420[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56480 = state_53420;
state_53420 = G__56480;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__ = function(state_53420){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1.call(this,state_53420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53500 = f__27596__auto__();
(statearr_53500[(6)] = c__27595__auto__);

return statearr_53500;
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
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53501 = cljs.core.get_global_hierarchy;
return (fexpr__53501.cljs$core$IFn$_invoke$arity$0 ? fexpr__53501.cljs$core$IFn$_invoke$arity$0() : fexpr__53501.call(null));
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
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"txid","txid",1606205478),(function (p__53502){
var vec__53503 = p__53502;
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53503,(0),null);
var remote__GT_local_syncer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53503,(1),null);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53510){
var state_val_53511 = (state_53510[(1)]);
if((state_val_53511 === (1))){
var state_53510__$1 = state_53510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53510__$1,(2),c);
} else {
if((state_val_53511 === (2))){
var inst_53507 = (state_53510[(2)]);
var inst_53508 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_53507);
var state_53510__$1 = state_53510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53510__$1,inst_53508);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_53523 = [null,null,null,null,null,null,null];
(statearr_53523[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53523[(1)] = (1));

return statearr_53523;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53510){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53510);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53525){var ex__27576__auto__ = e53525;
var statearr_53526_56481 = state_53510;
(statearr_53526_56481[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53510[(4)]))){
var statearr_53527_56482 = state_53510;
(statearr_53527_56482[(1)] = cljs.core.first((state_53510[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56483 = state_53510;
state_53510 = G__56483;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53510){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53528 = f__27596__auto__();
(statearr_53528[(6)] = c__27595__auto__);

return statearr_53528;
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
var G__53530 = e.type;
switch (G__53530) {
case "add":
case "change":
return new cljs.core.Keyword(null,"add-or-change","add-or-change",1006483131);

break;
case "unlink":
return new cljs.core.Keyword(null,"unlink","unlink",-1436843875);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53530)].join('')));

}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__53529_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,p1__53529_SHARP_);
})),cljs.core.cat);
});
frontend.fs.sync.local_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
/**
 * file-watcher callback
 */
frontend.fs.sync.file_watch_handler = (function frontend$fs$sync$file_watch_handler(type,p__53534){
var map__53535 = p__53534;
var map__53535__$1 = cljs.core.__destructure_map(map__53535);
var _payload = map__53535__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53535__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53535__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53535__$1,new cljs.core.Keyword(null,"_content","_content",-555820160));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53535__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
if(cljs.core.truth_((function (){var G__53540 = frontend.state.get_file_sync_state();
var G__53540__$1 = (((G__53540 == null))?null:(frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1(G__53540) : frontend.fs.sync.sync_state__stopped_QMARK_.call(null,G__53540)));
if((G__53540__$1 == null)){
return null;
} else {
return cljs.core.not(G__53540__$1);
}
})())){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53552){
var state_val_53553 = (state_53552[(1)]);
if((state_val_53553 === (1))){
var inst_53548 = frontend.fs.sync.__GT_FileChangeEvent(type,dir,path,stat);
var state_53552__$1 = state_53552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53552__$1,(2),frontend.fs.sync.local_changes_chan,inst_53548);
} else {
if((state_val_53553 === (2))){
var inst_53550 = (state_53552[(2)]);
var state_53552__$1 = state_53552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53552__$1,inst_53550);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0 = (function (){
var statearr_53577 = [null,null,null,null,null,null,null];
(statearr_53577[(0)] = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__);

(statearr_53577[(1)] = (1));

return statearr_53577;
});
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1 = (function (state_53552){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53552);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53578){var ex__27576__auto__ = e53578;
var statearr_53579_56485 = state_53552;
(statearr_53579_56485[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53552[(4)]))){
var statearr_53580_56486 = state_53552;
(statearr_53580_56486[(1)] = cljs.core.first((state_53552[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56487 = state_53552;
state_53552 = G__56487;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = function(state_53552){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1.call(this,state_53552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0;
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1;
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53581 = f__27596__auto__();
(statearr_53581[(6)] = c__27595__auto__);

return statearr_53581;
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

var frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_56488 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_56488(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_56489 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_56489(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_56490 = (function (this$){
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
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_56490(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.ILocal__GT_RemoteSync = function(){};

var frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_56491 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_56491(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_56492 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_56492(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_56493 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_56493(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_56494 = (function (this$,from_chan){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_56494(this$,from_chan);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_56495 = (function (this$,es){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_56495(this$,es);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_56496 = (function (this$){
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
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_56496(this$);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53785){
var state_val_53786 = (state_53785[(1)]);
if((state_val_53786 === (7))){
var inst_53762 = cljs.core.deref(self__._STAR_stopped);
var state_53785__$1 = state_53785;
if(cljs.core.truth_(inst_53762)){
var statearr_53787_56497 = state_53785__$1;
(statearr_53787_56497[(1)] = (9));

} else {
var statearr_53788_56498 = state_53785__$1;
(statearr_53788_56498[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (1))){
var inst_53738 = (state_53785[(7)]);
var inst_53737 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),self__.graph_uuid,self__.user_uuid);
var inst_53738__$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_53737,relative_filepaths);
var inst_53740 = cljs.core.flatten(inst_53738__$1);
var inst_53741 = cljs.core.empty_QMARK_(inst_53740);
var state_53785__$1 = (function (){var statearr_53789 = state_53785;
(statearr_53789[(7)] = inst_53738__$1);

return statearr_53789;
})();
if(inst_53741){
var statearr_53790_56499 = state_53785__$1;
(statearr_53790_56499[(1)] = (2));

} else {
var statearr_53791_56500 = state_53785__$1;
(statearr_53791_56500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (4))){
var inst_53751 = (state_53785[(8)]);
var inst_53751__$1 = (state_53785[(2)]);
var inst_53752 = (inst_53751__$1 instanceof cljs.core.ExceptionInfo);
var state_53785__$1 = (function (){var statearr_53814 = state_53785;
(statearr_53814[(8)] = inst_53751__$1);

return statearr_53814;
})();
if(cljs.core.truth_(inst_53752)){
var statearr_53815_56501 = state_53785__$1;
(statearr_53815_56501[(1)] = (6));

} else {
var statearr_53816_56502 = state_53785__$1;
(statearr_53816_56502[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (13))){
var state_53785__$1 = state_53785;
var statearr_53818_56503 = state_53785__$1;
(statearr_53818_56503[(2)] = null);

(statearr_53818_56503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (6))){
var inst_53751 = (state_53785[(8)]);
var inst_53754 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_53755 = [inst_53751];
var inst_53756 = cljs.core.PersistentHashMap.fromArrays(inst_53754,inst_53755);
var state_53785__$1 = state_53785;
var statearr_53828_56504 = state_53785__$1;
(statearr_53828_56504[(2)] = inst_53756);

(statearr_53828_56504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (3))){
var inst_53738 = (state_53785[(7)]);
var inst_53747 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_53738,self__.repo,null,self__._STAR_stopped,null,null);
var state_53785__$1 = state_53785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53785__$1,(5),inst_53747);
} else {
if((state_val_53786 === (12))){
var inst_53769 = frontend.fs.sync.update_graphs_txid_BANG_(latest_txid,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_53770 = cljs.core.reset_BANG_(self__._STAR_txid,latest_txid);
var inst_53771 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53773 = [true];
var inst_53774 = cljs.core.PersistentHashMap.fromArrays(inst_53771,inst_53773);
var state_53785__$1 = (function (){var statearr_53848 = state_53785;
(statearr_53848[(9)] = inst_53770);

(statearr_53848[(10)] = inst_53769);

return statearr_53848;
})();
var statearr_53850_56505 = state_53785__$1;
(statearr_53850_56505[(2)] = inst_53774);

(statearr_53850_56505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (2))){
var inst_53743 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53744 = [true];
var inst_53745 = cljs.core.PersistentHashMap.fromArrays(inst_53743,inst_53744);
var state_53785__$1 = state_53785;
var statearr_53851_56506 = state_53785__$1;
(statearr_53851_56506[(2)] = inst_53745);

(statearr_53851_56506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (11))){
var inst_53779 = (state_53785[(2)]);
var state_53785__$1 = state_53785;
var statearr_53853_56507 = state_53785__$1;
(statearr_53853_56507[(2)] = inst_53779);

(statearr_53853_56507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (9))){
var inst_53764 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_53765 = [true];
var inst_53766 = cljs.core.PersistentHashMap.fromArrays(inst_53764,inst_53765);
var state_53785__$1 = state_53785;
var statearr_53854_56508 = state_53785__$1;
(statearr_53854_56508[(2)] = inst_53766);

(statearr_53854_56508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (5))){
var inst_53749 = (state_53785[(2)]);
var state_53785__$1 = state_53785;
var statearr_53855_56509 = state_53785__$1;
(statearr_53855_56509[(2)] = inst_53749);

(statearr_53855_56509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (14))){
var inst_53777 = (state_53785[(2)]);
var state_53785__$1 = state_53785;
var statearr_53856_56510 = state_53785__$1;
(statearr_53856_56510[(2)] = inst_53777);

(statearr_53856_56510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (10))){
var state_53785__$1 = state_53785;
var statearr_53857_56511 = state_53785__$1;
(statearr_53857_56511[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53786 === (8))){
var inst_53781 = (state_53785[(2)]);
var state_53785__$1 = state_53785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53785__$1,inst_53781);
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
var statearr_53859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53859[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_53859[(1)] = (1));

return statearr_53859;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53785){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53785);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e53860){var ex__27576__auto__ = e53860;
var statearr_53861_56512 = state_53785;
(statearr_53861_56512[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53785[(4)]))){
var statearr_53862_56513 = state_53785;
(statearr_53862_56513[(1)] = cljs.core.first((state_53785[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56514 = state_53785;
state_53785 = G__56514;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53785){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_53863 = f__27596__auto__();
(statearr_53863[(6)] = c__27595__auto__);

return statearr_53863;
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k53715,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__53864 = k53715;
var G__53864__$1 = (((G__53864 instanceof cljs.core.Keyword))?G__53864.fqn:null);
switch (G__53864__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53715,else__5343__auto__);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__53865){
var vec__53866 = p__53865;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53866,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53866,(1),null);
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_53955){
var state_val_53956 = (state_53955[(1)]);
if((state_val_53956 === (7))){
var inst_53881 = (state_53955[(7)]);
var inst_53885 = (inst_53881 - (1));
var inst_53886 = cljs.core.deref(self__._STAR_txid);
var inst_53887 = (inst_53885 > inst_53886);
var state_53955__$1 = state_53955;
var statearr_53957_56516 = state_53955__$1;
(statearr_53957_56516[(2)] = inst_53887);

(statearr_53957_56516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (20))){
var inst_53932 = cljs.core.deref(self__._STAR_stopped);
var state_53955__$1 = state_53955;
if(cljs.core.truth_(inst_53932)){
var statearr_53958_56521 = state_53955__$1;
(statearr_53958_56521[(1)] = (22));

} else {
var statearr_53959_56522 = state_53955__$1;
(statearr_53959_56522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (27))){
var inst_53949 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
var statearr_53960_56523 = state_53955__$1;
(statearr_53960_56523[(2)] = inst_53949);

(statearr_53960_56523[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (1))){
var inst_53869 = cljs.core.deref(self__._STAR_txid);
var inst_53870 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(null,self__.graph_uuid,inst_53869);
var state_53955__$1 = state_53955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53955__$1,(2),inst_53870);
} else {
if((state_val_53956 === (24))){
var inst_53951 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
var statearr_53961_56524 = state_53955__$1;
(statearr_53961_56524[(2)] = inst_53951);

(statearr_53961_56524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (4))){
var inst_53882 = (state_53955[(8)]);
var inst_53881 = (state_53955[(7)]);
var inst_53872 = (state_53955[(9)]);
var inst_53879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53872,(0),null);
var inst_53880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53872,(1),null);
var inst_53881__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53872,(2),null);
var inst_53882__$1 = (inst_53881__$1 == null);
var state_53955__$1 = (function (){var statearr_53962 = state_53955;
(statearr_53962[(10)] = inst_53880);

(statearr_53962[(8)] = inst_53882__$1);

(statearr_53962[(11)] = inst_53879);

(statearr_53962[(7)] = inst_53881__$1);

return statearr_53962;
})();
if(cljs.core.truth_(inst_53882__$1)){
var statearr_53963_56525 = state_53955__$1;
(statearr_53963_56525[(1)] = (6));

} else {
var statearr_53964_56526 = state_53955__$1;
(statearr_53964_56526[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (15))){
var inst_53880 = (state_53955[(10)]);
var inst_53908 = frontend.fs.sync.update_graphs_txid_BANG_(inst_53880,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_53909 = cljs.core.reset_BANG_(self__._STAR_txid,inst_53880);
var inst_53910 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53911 = [true];
var inst_53912 = cljs.core.PersistentHashMap.fromArrays(inst_53910,inst_53911);
var state_53955__$1 = (function (){var statearr_53965 = state_53955;
(statearr_53965[(12)] = inst_53909);

(statearr_53965[(13)] = inst_53908);

return statearr_53965;
})();
var statearr_53966_56527 = state_53955__$1;
(statearr_53966_56527[(2)] = inst_53912);

(statearr_53966_56527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (21))){
var inst_53953 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53955__$1,inst_53953);
} else {
if((state_val_53956 === (13))){
var state_53955__$1 = state_53955;
var statearr_53967_56528 = state_53955__$1;
(statearr_53967_56528[(2)] = null);

(statearr_53967_56528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (22))){
var inst_53934 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_53935 = [true];
var inst_53936 = cljs.core.PersistentHashMap.fromArrays(inst_53934,inst_53935);
var state_53955__$1 = state_53955;
var statearr_53968_56529 = state_53955__$1;
(statearr_53968_56529[(2)] = inst_53936);

(statearr_53968_56529[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (29))){
var state_53955__$1 = state_53955;
var statearr_53969_56530 = state_53955__$1;
(statearr_53969_56530[(2)] = null);

(statearr_53969_56530[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (6))){
var inst_53882 = (state_53955[(8)]);
var state_53955__$1 = state_53955;
var statearr_53971_56531 = state_53955__$1;
(statearr_53971_56531[(2)] = inst_53882);

(statearr_53971_56531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (28))){
var inst_53942 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_53943 = [true];
var inst_53944 = cljs.core.PersistentHashMap.fromArrays(inst_53942,inst_53943);
var state_53955__$1 = state_53955;
var statearr_53972_56532 = state_53955__$1;
(statearr_53972_56532[(2)] = inst_53944);

(statearr_53972_56532[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (25))){
var inst_53925 = (state_53955[(14)]);
var state_53955__$1 = state_53955;
var statearr_53973_56533 = state_53955__$1;
(statearr_53973_56533[(2)] = inst_53925);

(statearr_53973_56533[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (17))){
var inst_53918 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
var statearr_53974_56534 = state_53955__$1;
(statearr_53974_56534[(2)] = inst_53918);

(statearr_53974_56534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (3))){
var inst_53872 = (state_53955[(9)]);
var state_53955__$1 = state_53955;
var statearr_53975_56535 = state_53955__$1;
(statearr_53975_56535[(2)] = inst_53872);

(statearr_53975_56535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (12))){
var inst_53880 = (state_53955[(10)]);
var inst_53879 = (state_53955[(11)]);
var inst_53881 = (state_53955[(7)]);
var inst_53904 = (state_53955[(15)]);
var inst_53872 = (state_53955[(9)]);
var inst_53899 = frontend.fs.sync.diffs__GT_partitioned_filetxns((10));
var inst_53900 = (function (){var diff_r = inst_53872;
var vec__53876 = inst_53872;
var diff_txns = inst_53879;
var latest_txid = inst_53880;
var min_txid = inst_53881;
return (function (r,i){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.reverse(i));
});
})();
var inst_53901 = cljs.core.completing.cljs$core$IFn$_invoke$arity$1(inst_53900);
var inst_53902 = cljs.core.List.EMPTY;
var inst_53903 = cljs.core.reverse(inst_53879);
var inst_53904__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(inst_53899,inst_53901,inst_53902,inst_53903);
var inst_53905 = cljs.core.flatten(inst_53904__$1);
var inst_53906 = cljs.core.empty_QMARK_(inst_53905);
var state_53955__$1 = (function (){var statearr_53976 = state_53955;
(statearr_53976[(15)] = inst_53904__$1);

return statearr_53976;
})();
if(inst_53906){
var statearr_53977_56536 = state_53955__$1;
(statearr_53977_56536[(1)] = (15));

} else {
var statearr_53978_56537 = state_53955__$1;
(statearr_53978_56537[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (2))){
var inst_53872 = (state_53955[(9)]);
var inst_53872__$1 = (state_53955[(2)]);
var inst_53873 = (inst_53872__$1 instanceof cljs.core.ExceptionInfo);
var state_53955__$1 = (function (){var statearr_53979 = state_53955;
(statearr_53979[(9)] = inst_53872__$1);

return statearr_53979;
})();
if(cljs.core.truth_(inst_53873)){
var statearr_53980_56538 = state_53955__$1;
(statearr_53980_56538[(1)] = (3));

} else {
var statearr_53981_56539 = state_53955__$1;
(statearr_53981_56539[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (23))){
var inst_53925 = (state_53955[(14)]);
var inst_53938 = new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586).cljs$core$IFn$_invoke$arity$1(inst_53925);
var state_53955__$1 = state_53955;
if(cljs.core.truth_(inst_53938)){
var statearr_53982_56540 = state_53955__$1;
(statearr_53982_56540[(1)] = (25));

} else {
var statearr_53983_56541 = state_53955__$1;
(statearr_53983_56541[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (19))){
var inst_53925 = (state_53955[(14)]);
var inst_53928 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_53929 = [inst_53925];
var inst_53930 = cljs.core.PersistentHashMap.fromArrays(inst_53928,inst_53929);
var state_53955__$1 = state_53955;
var statearr_53984_56542 = state_53955__$1;
(statearr_53984_56542[(2)] = inst_53930);

(statearr_53984_56542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (11))){
var inst_53923 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
var statearr_53985_56543 = state_53955__$1;
(statearr_53985_56543[(2)] = inst_53923);

(statearr_53985_56543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (9))){
var inst_53881 = (state_53955[(7)]);
var inst_53891 = cljs.core.deref(self__._STAR_txid);
var inst_53892 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["min-txid",inst_53881,"request-txid",inst_53891], 0));
var inst_53893 = [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586)];
var inst_53894 = [true];
var inst_53895 = cljs.core.PersistentHashMap.fromArrays(inst_53893,inst_53894);
var state_53955__$1 = (function (){var statearr_53986 = state_53955;
(statearr_53986[(16)] = inst_53892);

return statearr_53986;
})();
var statearr_53987_56544 = state_53955__$1;
(statearr_53987_56544[(2)] = inst_53895);

(statearr_53987_56544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (5))){
var inst_53925 = (state_53955[(14)]);
var inst_53925__$1 = (state_53955[(2)]);
var inst_53926 = (inst_53925__$1 instanceof cljs.core.ExceptionInfo);
var state_53955__$1 = (function (){var statearr_53989 = state_53955;
(statearr_53989[(14)] = inst_53925__$1);

return statearr_53989;
})();
if(cljs.core.truth_(inst_53926)){
var statearr_53990_56545 = state_53955__$1;
(statearr_53990_56545[(1)] = (19));

} else {
var statearr_53991_56546 = state_53955__$1;
(statearr_53991_56546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (14))){
var inst_53921 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
var statearr_53992_56547 = state_53955__$1;
(statearr_53992_56547[(2)] = inst_53921);

(statearr_53992_56547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (26))){
var state_53955__$1 = state_53955;
var statearr_53993_56548 = state_53955__$1;
(statearr_53993_56548[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (16))){
var inst_53904 = (state_53955[(15)]);
var inst_53914 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_53904,self__.repo,self__._STAR_txid,self__._STAR_stopped,null,null);
var state_53955__$1 = state_53955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53955__$1,(18),inst_53914);
} else {
if((state_val_53956 === (30))){
var inst_53947 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
var statearr_53995_56549 = state_53955__$1;
(statearr_53995_56549[(2)] = inst_53947);

(statearr_53995_56549[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (10))){
var inst_53880 = (state_53955[(10)]);
var inst_53897 = cljs.core.pos_int_QMARK_(inst_53880);
var state_53955__$1 = state_53955;
if(inst_53897){
var statearr_53996_56550 = state_53955__$1;
(statearr_53996_56550[(1)] = (12));

} else {
var statearr_53997_56551 = state_53955__$1;
(statearr_53997_56551[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (18))){
var inst_53916 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
var statearr_53998_56552 = state_53955__$1;
(statearr_53998_56552[(2)] = inst_53916);

(statearr_53998_56552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53956 === (8))){
var inst_53889 = (state_53955[(2)]);
var state_53955__$1 = state_53955;
if(cljs.core.truth_(inst_53889)){
var statearr_53999_56553 = state_53955__$1;
(statearr_53999_56553[(1)] = (9));

} else {
var statearr_54000_56554 = state_53955__$1;
(statearr_54000_56554[(1)] = (10));

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
var statearr_54001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54001[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54001[(1)] = (1));

return statearr_54001;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_53955){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_53955);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54002){var ex__27576__auto__ = e54002;
var statearr_54003_56555 = state_53955;
(statearr_54003_56555[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_53955[(4)]))){
var statearr_54004_56556 = state_53955;
(statearr_54004_56556[(1)] = cljs.core.first((state_53955[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56557 = state_53955;
state_53955 = G__56557;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_53955){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_53955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54005 = f__27596__auto__();
(statearr_54005[(6)] = c__27595__auto__);

return statearr_54005;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54024){
var state_val_54025 = (state_54024[(1)]);
if((state_val_54025 === (1))){
var inst_54006 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_54007 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_54024__$1 = (function (){var statearr_54026 = state_54024;
(statearr_54026[(7)] = inst_54007);

return statearr_54026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54024__$1,(2),inst_54006);
} else {
if((state_val_54025 === (2))){
var inst_54007 = (state_54024[(7)]);
var inst_54009 = (state_54024[(2)]);
var state_54024__$1 = (function (){var statearr_54027 = state_54024;
(statearr_54027[(8)] = inst_54009);

return statearr_54027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54024__$1,(3),inst_54007);
} else {
if((state_val_54025 === (3))){
var inst_54009 = (state_54024[(8)]);
var inst_54011 = (state_54024[(2)]);
var inst_54012 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_54009,inst_54011);
var inst_54013 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_54024__$1 = (function (){var statearr_54029 = state_54024;
(statearr_54029[(9)] = inst_54012);

return statearr_54029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54024__$1,(4),inst_54013);
} else {
if((state_val_54025 === (4))){
var inst_54012 = (state_54024[(9)]);
var inst_54015 = (state_54024[(2)]);
var inst_54016 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_54015);
var inst_54017 = cljs.core.count(inst_54012);
var inst_54018 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(remote->local)]",inst_54017,"files need to sync"], 0));
var inst_54019 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_54012);
var inst_54020 = this$__$1.sync_files_remote__GT_local_BANG_(inst_54019,inst_54016);
var state_54024__$1 = (function (){var statearr_54034 = state_54024;
(statearr_54034[(10)] = inst_54018);

return statearr_54034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54024__$1,(5),inst_54020);
} else {
if((state_val_54025 === (5))){
var inst_54022 = (state_54024[(2)]);
var state_54024__$1 = state_54024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54024__$1,inst_54022);
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
var statearr_54035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54035[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54035[(1)] = (1));

return statearr_54035;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54024){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54024);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54036){var ex__27576__auto__ = e54036;
var statearr_54037_56563 = state_54024;
(statearr_54037_56563[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54024[(4)]))){
var statearr_54038_56564 = state_54024;
(statearr_54038_56564[(1)] = cljs.core.first((state_54024[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56565 = state_54024;
state_54024 = G__56565;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54024){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54039 = f__27596__auto__();
(statearr_54039[(6)] = c__27595__auto__);

return statearr_54039;
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53714){
var self__ = this;
var G__53714__$1 = this;
return (new cljs.core.RecordIter((0),G__53714__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53716,other53717){
var self__ = this;
var this53716__$1 = this;
return (((!((other53717 == null)))) && ((((this53716__$1.constructor === other53717.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1.user_uuid,other53717.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1.graph_uuid,other53717.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1.base_path,other53717.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1.repo,other53717.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1._STAR_txid,other53717._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1._STAR_sync_state,other53717._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1.local__GT_remote_syncer,other53717.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1._STAR_stopped,other53717._STAR_stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53716__$1.__extmap,other53717.__extmap)))))))))))))))))))));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k53715){
var self__ = this;
var this__5347__auto____$1 = this;
var G__54061 = k53715;
var G__54061__$1 = (((G__54061 instanceof cljs.core.Keyword))?G__54061.fqn:null);
switch (G__54061__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k53715);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__53714){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__54062 = cljs.core.keyword_identical_QMARK_;
var expr__54063 = k__5349__auto__;
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(G__53714,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,G__53714,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,G__53714,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__53714,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__53714,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,G__53714,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,G__53714,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54062.cljs$core$IFn$_invoke$arity$2 ? pred__54062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__54063) : pred__54062.call(null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__54063)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__53714,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__53714),null));
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

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__53714){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,G__53714,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$map__GT_Remote__GT_LocalSyncer(G__53721){
var extmap__5382__auto__ = (function (){var G__54069 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53721,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], 0));
if(cljs.core.record_QMARK_(G__53721)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54069);
} else {
return G__54069;
}
})();
return (new frontend.fs.sync.Remote__GT_LocalSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__53721),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__53721),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__53721),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__53721),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__53721),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__53721),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__53721),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585).cljs$core$IFn$_invoke$arity$1(G__53721),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

/**
 * return true when file changed compared with remote
 */
frontend.fs.sync.file_changed_QMARK_ = (function frontend$fs$sync$file_changed_QMARK_(graph_uuid,file_path_without_base_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54086){
var state_val_54087 = (state_54086[(1)]);
if((state_val_54087 === (1))){
var inst_54070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54071 = [file_path_without_base_path];
var inst_54072 = (new cljs.core.PersistentVector(null,1,(5),inst_54070,inst_54071,null));
var inst_54073 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(null,graph_uuid,inst_54072);
var state_54086__$1 = state_54086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54086__$1,(2),inst_54073);
} else {
if((state_val_54087 === (2))){
var inst_54075 = (state_54086[(2)]);
var inst_54076 = cljs.core.first(inst_54075);
var inst_54077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54078 = [file_path_without_base_path];
var inst_54079 = (new cljs.core.PersistentVector(null,1,(5),inst_54077,inst_54078,null));
var inst_54080 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_54079);
var state_54086__$1 = (function (){var statearr_54089 = state_54086;
(statearr_54089[(7)] = inst_54076);

return statearr_54089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54086__$1,(3),inst_54080);
} else {
if((state_val_54087 === (3))){
var inst_54076 = (state_54086[(7)]);
var inst_54082 = (state_54086[(2)]);
var inst_54083 = cljs.core.first(inst_54082);
var inst_54084 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_54076,inst_54083);
var state_54086__$1 = state_54086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54086__$1,inst_54084);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_54090 = [null,null,null,null,null,null,null,null];
(statearr_54090[(0)] = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__);

(statearr_54090[(1)] = (1));

return statearr_54090;
});
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1 = (function (state_54086){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54086);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54091){var ex__27576__auto__ = e54091;
var statearr_54092_56573 = state_54086;
(statearr_54092_56573[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54086[(4)]))){
var statearr_54093_56574 = state_54086;
(statearr_54093_56574[(1)] = cljs.core.first((state_54086[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56575 = state_54086;
state_54086 = G__56575;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = function(state_54086){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1.call(this,state_54086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54094 = f__27596__auto__();
(statearr_54094[(6)] = c__27595__auto__);

return statearr_54094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.local_file_exists_QMARK_ = (function frontend$fs$sync$local_file_exists_QMARK_(relative_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54104){
var state_val_54105 = (state_54104[(1)]);
if((state_val_54105 === (1))){
var inst_54095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54096 = [relative_path];
var inst_54097 = (new cljs.core.PersistentVector(null,1,(5),inst_54095,inst_54096,null));
var inst_54098 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,inst_54097);
var state_54104__$1 = state_54104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54104__$1,(2),inst_54098);
} else {
if((state_val_54105 === (2))){
var inst_54100 = (state_54104[(2)]);
var inst_54101 = cljs.core.ex_cause(inst_54100);
var inst_54102 = (inst_54101 == null);
var state_54104__$1 = state_54104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54104__$1,inst_54102);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_54106 = [null,null,null,null,null,null,null];
(statearr_54106[(0)] = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__);

(statearr_54106[(1)] = (1));

return statearr_54106;
});
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1 = (function (state_54104){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54104);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54107){var ex__27576__auto__ = e54107;
var statearr_54108_56576 = state_54104;
(statearr_54108_56576[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54104[(4)]))){
var statearr_54109_56577 = state_54104;
(statearr_54109_56577[(1)] = cljs.core.first((state_54104[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56578 = state_54104;
state_54104 = G__56578;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = function(state_54104){
switch(arguments.length){
case 0:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1.call(this,state_54104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54110 = f__27596__auto__();
(statearr_54110[(6)] = c__27595__auto__);

return statearr_54110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.contains_path_QMARK_ = (function frontend$fs$sync$contains_path_QMARK_(regexps,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54112_SHARP_,p2__54111_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(p2__54111_SHARP_,path))){
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54143){
var state_val_54144 = (state_54143[(1)]);
if((state_val_54144 === (7))){
var inst_54126 = (state_54143[(2)]);
var state_54143__$1 = state_54143;
var statearr_54145_56579 = state_54143__$1;
(statearr_54145_56579[(2)] = inst_54126);

(statearr_54145_56579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (1))){
var inst_54113 = frontend.fs.sync.relative_path(e);
var inst_54139 = e.type;
var state_54143__$1 = (function (){var statearr_54146 = state_54143;
(statearr_54146[(7)] = inst_54113);

return statearr_54146;
})();
var G__54147_56580 = inst_54139;
switch (G__54147_56580) {
case "unlink":
var statearr_54148_56582 = state_54143__$1;
(statearr_54148_56582[(1)] = (3));


break;
case "add":
case "change":
var statearr_54149_56583 = state_54143__$1;
(statearr_54149_56583[(1)] = (8));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54147_56580)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (4))){
var inst_54119 = (state_54143[(8)]);
var inst_54119__$1 = (state_54143[(2)]);
var inst_54121 = (inst_54119__$1 == null);
var state_54143__$1 = (function (){var statearr_54150 = state_54143;
(statearr_54150[(8)] = inst_54119__$1);

return statearr_54150;
})();
if(cljs.core.truth_(inst_54121)){
var statearr_54151_56584 = state_54143__$1;
(statearr_54151_56584[(1)] = (5));

} else {
var statearr_54152_56585 = state_54143__$1;
(statearr_54152_56585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (13))){
var inst_54134 = (state_54143[(2)]);
var state_54143__$1 = state_54143;
var statearr_54153_56586 = state_54143__$1;
(statearr_54153_56586[(2)] = inst_54134);

(statearr_54153_56586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (6))){
var inst_54119 = (state_54143[(8)]);
var inst_54124 = cljs.core.ex_cause(inst_54119);
var state_54143__$1 = state_54143;
var statearr_54154_56587 = state_54143__$1;
(statearr_54154_56587[(2)] = inst_54124);

(statearr_54154_56587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (3))){
var inst_54113 = (state_54143[(7)]);
var inst_54114 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54115 = [inst_54113];
var inst_54116 = (new cljs.core.PersistentVector(null,1,(5),inst_54114,inst_54115,null));
var inst_54117 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",basepath,inst_54116);
var state_54143__$1 = state_54143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54143__$1,(4),inst_54117);
} else {
if((state_val_54144 === (12))){
var inst_54137 = (state_54143[(2)]);
var state_54143__$1 = state_54143;
var statearr_54155_56588 = state_54143__$1;
(statearr_54155_56588[(2)] = inst_54137);

(statearr_54155_56588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (2))){
var inst_54141 = (state_54143[(2)]);
var state_54143__$1 = state_54143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54143__$1,inst_54141);
} else {
if((state_val_54144 === (11))){
var inst_54130 = (state_54143[(9)]);
var state_54143__$1 = state_54143;
var statearr_54156_56589 = state_54143__$1;
(statearr_54156_56589[(2)] = inst_54130);

(statearr_54156_56589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (9))){
var inst_54130 = (state_54143[(9)]);
var inst_54130__$1 = (state_54143[(2)]);
var state_54143__$1 = (function (){var statearr_54157 = state_54143;
(statearr_54157[(9)] = inst_54130__$1);

return statearr_54157;
})();
if(cljs.core.truth_(inst_54130__$1)){
var statearr_54158_56590 = state_54143__$1;
(statearr_54158_56590[(1)] = (10));

} else {
var statearr_54159_56591 = state_54143__$1;
(statearr_54159_56591[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (5))){
var state_54143__$1 = state_54143;
var statearr_54160_56592 = state_54143__$1;
(statearr_54160_56592[(2)] = null);

(statearr_54160_56592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54144 === (10))){
var inst_54113 = (state_54143[(7)]);
var inst_54132 = frontend.fs.sync.file_changed_QMARK_(graph_uuid,inst_54113,basepath);
var state_54143__$1 = state_54143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54143__$1,(13),inst_54132);
} else {
if((state_val_54144 === (8))){
var inst_54113 = (state_54143[(7)]);
var inst_54128 = frontend.fs.sync.local_file_exists_QMARK_(inst_54113,basepath);
var state_54143__$1 = state_54143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54143__$1,(9),inst_54128);
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
var statearr_54161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54161[(0)] = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__);

(statearr_54161[(1)] = (1));

return statearr_54161;
});
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1 = (function (state_54143){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54143);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54162){var ex__27576__auto__ = e54162;
var statearr_54163_56593 = state_54143;
(statearr_54163_56593[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54143[(4)]))){
var statearr_54164_56594 = state_54143;
(statearr_54164_56594[(1)] = cljs.core.first((state_54143[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56595 = state_54143;
state_54143 = G__56595;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__ = function(state_54143){
switch(arguments.length){
case 0:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1.call(this,state_54143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0;
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1;
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54165 = f__27596__auto__();
(statearr_54165[(6)] = c__27595__auto__);

return statearr_54165;
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k54178,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__54232 = k54178;
var G__54232__$1 = (((G__54232 instanceof cljs.core.Keyword))?G__54232.fqn:null);
switch (G__54232__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54178,else__5343__auto__);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__54234){
var vec__54235 = p__54234;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54235,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54235,(1),null);
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
var c__27595__auto___56602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54355){
var state_val_54356 = (state_54355[(1)]);
if((state_val_54356 === (7))){
var inst_54302 = (state_54355[(2)]);
var inst_54303 = cljs.core.__destructure_map(inst_54302);
var inst_54304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54303,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_54305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54303,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_54306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54303,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_54355__$1 = (function (){var statearr_54357 = state_54355;
(statearr_54357[(7)] = inst_54305);

(statearr_54357[(8)] = inst_54304);

return statearr_54357;
})();
if(cljs.core.truth_(inst_54306)){
var statearr_54358_56607 = state_54355__$1;
(statearr_54358_56607[(1)] = (17));

} else {
var statearr_54359_56608 = state_54355__$1;
(statearr_54359_56608[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (20))){
var inst_54241 = (state_54355[(9)]);
var inst_54311 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_54241,false);
var inst_54312 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,null);
var inst_54313 = cljs.core.async.timeout(self__.rate);
var inst_54314 = cljs.core.PersistentVector.EMPTY;
var inst_54240 = inst_54313;
var inst_54241__$1 = inst_54314;
var state_54355__$1 = (function (){var statearr_54361 = state_54355;
(statearr_54361[(9)] = inst_54241__$1);

(statearr_54361[(10)] = inst_54240);

(statearr_54361[(11)] = inst_54311);

(statearr_54361[(12)] = inst_54312);

return statearr_54361;
})();
var statearr_54362_56611 = state_54355__$1;
(statearr_54362_56611[(2)] = null);

(statearr_54362_56611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (27))){
var inst_54320 = (state_54355[(13)]);
var state_54355__$1 = state_54355;
var statearr_54363_56612 = state_54355__$1;
(statearr_54363_56612[(2)] = inst_54320);

(statearr_54363_56612[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (1))){
var inst_54238 = cljs.core.async.timeout(self__.rate);
var inst_54239 = cljs.core.PersistentVector.EMPTY;
var inst_54240 = inst_54238;
var inst_54241 = inst_54239;
var state_54355__$1 = (function (){var statearr_54364 = state_54355;
(statearr_54364[(9)] = inst_54241);

(statearr_54364[(10)] = inst_54240);

return statearr_54364;
})();
var statearr_54365_56613 = state_54355__$1;
(statearr_54365_56613[(2)] = null);

(statearr_54365_56613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (24))){
var inst_54305 = (state_54355[(7)]);
var inst_54339 = (inst_54305 == null);
var state_54355__$1 = state_54355;
if(cljs.core.truth_(inst_54339)){
var statearr_54366_56614 = state_54355__$1;
(statearr_54366_56614[(1)] = (33));

} else {
var statearr_54367_56615 = state_54355__$1;
(statearr_54367_56615[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (4))){
var inst_54262 = (state_54355[(14)]);
var inst_54240 = (state_54355[(10)]);
var inst_54260 = (state_54355[(15)]);
var inst_54260__$1 = (state_54355[(2)]);
var inst_54261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54260__$1,(0),null);
var inst_54262__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54260__$1,(1),null);
var inst_54263 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54262__$1,inst_54240);
var state_54355__$1 = (function (){var statearr_54368 = state_54355;
(statearr_54368[(14)] = inst_54262__$1);

(statearr_54368[(16)] = inst_54261);

(statearr_54368[(15)] = inst_54260__$1);

return statearr_54368;
})();
if(inst_54263){
var statearr_54369_56616 = state_54355__$1;
(statearr_54369_56616[(1)] = (5));

} else {
var statearr_54370_56617 = state_54355__$1;
(statearr_54370_56617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (15))){
var state_54355__$1 = state_54355;
var statearr_54374_56618 = state_54355__$1;
(statearr_54374_56618[(2)] = null);

(statearr_54374_56618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (21))){
var inst_54305 = (state_54355[(7)]);
var inst_54317 = (inst_54305 == null);
var inst_54318 = cljs.core.not(inst_54317);
var state_54355__$1 = state_54355;
if(inst_54318){
var statearr_54375_56619 = state_54355__$1;
(statearr_54375_56619[(1)] = (23));

} else {
var statearr_54376_56620 = state_54355__$1;
(statearr_54376_56620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (31))){
var inst_54241 = (state_54355[(9)]);
var inst_54240 = (state_54355[(10)]);
var tmp54371 = inst_54241;
var tmp54372 = inst_54240;
var inst_54240__$1 = tmp54372;
var inst_54241__$1 = tmp54371;
var state_54355__$1 = (function (){var statearr_54377 = state_54355;
(statearr_54377[(9)] = inst_54241__$1);

(statearr_54377[(10)] = inst_54240__$1);

return statearr_54377;
})();
var statearr_54379_56621 = state_54355__$1;
(statearr_54379_56621[(2)] = null);

(statearr_54379_56621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (32))){
var inst_54337 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54380_56622 = state_54355__$1;
(statearr_54380_56622[(2)] = inst_54337);

(statearr_54380_56622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (33))){
var inst_54341 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close ratelimit chan"], 0));
var inst_54342 = cljs.core.async.close_BANG_(c);
var state_54355__$1 = (function (){var statearr_54381 = state_54355;
(statearr_54381[(17)] = inst_54341);

return statearr_54381;
})();
var statearr_54382_56623 = state_54355__$1;
(statearr_54382_56623[(2)] = inst_54342);

(statearr_54382_56623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (13))){
var inst_54298 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54383_56624 = state_54355__$1;
(statearr_54383_56624[(2)] = inst_54298);

(statearr_54383_56624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (22))){
var inst_54349 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54384_56625 = state_54355__$1;
(statearr_54384_56625[(2)] = inst_54349);

(statearr_54384_56625[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (29))){
var inst_54324 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54385_56626 = state_54355__$1;
(statearr_54385_56626[(2)] = inst_54324);

(statearr_54385_56626[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (6))){
var inst_54262 = (state_54355[(14)]);
var inst_54253 = (state_54355[(18)]);
var inst_54275 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54262,inst_54253);
var state_54355__$1 = state_54355;
if(inst_54275){
var statearr_54386_56627 = state_54355__$1;
(statearr_54386_56627[(1)] = (8));

} else {
var statearr_54387_56628 = state_54355__$1;
(statearr_54387_56628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (28))){
var inst_54327 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
if(cljs.core.truth_(inst_54327)){
var statearr_54388_56629 = state_54355__$1;
(statearr_54388_56629[(1)] = (30));

} else {
var statearr_54389_56630 = state_54355__$1;
(statearr_54389_56630[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (25))){
var inst_54347 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54390_56631 = state_54355__$1;
(statearr_54390_56631[(2)] = inst_54347);

(statearr_54390_56631[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (34))){
var state_54355__$1 = state_54355;
var statearr_54391_56632 = state_54355__$1;
(statearr_54391_56632[(2)] = null);

(statearr_54391_56632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (17))){
var inst_54308 = cljs.core.async.close_BANG_(c);
var state_54355__$1 = state_54355;
var statearr_54392_56633 = state_54355__$1;
(statearr_54392_56633[(2)] = inst_54308);

(statearr_54392_56633[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (3))){
var inst_54353 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54355__$1,inst_54353);
} else {
if((state_val_54356 === (12))){
var inst_54262 = (state_54355[(14)]);
var inst_54292 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54262,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_54355__$1 = state_54355;
if(inst_54292){
var statearr_54393_56634 = state_54355__$1;
(statearr_54393_56634[(1)] = (14));

} else {
var statearr_54394_56635 = state_54355__$1;
(statearr_54394_56635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (2))){
var inst_54254 = (state_54355[(19)]);
var inst_54240 = (state_54355[(10)]);
var inst_54253 = (state_54355[(18)]);
var inst_54253__$1 = from_chan;
var inst_54254__$1 = self__.stop_chan;
var inst_54256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54257 = [inst_54240,inst_54253__$1,inst_54254__$1];
var inst_54258 = (new cljs.core.PersistentVector(null,3,(5),inst_54256,inst_54257,null));
var state_54355__$1 = (function (){var statearr_54395 = state_54355;
(statearr_54395[(19)] = inst_54254__$1);

(statearr_54395[(18)] = inst_54253__$1);

return statearr_54395;
})();
return cljs.core.async.ioc_alts_BANG_(state_54355__$1,(4),inst_54258);
} else {
if((state_val_54356 === (23))){
var inst_54320 = (state_54355[(13)]);
var inst_54305 = (state_54355[(7)]);
var inst_54320__$1 = (filter_e_fn.cljs$core$IFn$_invoke$arity$1 ? filter_e_fn.cljs$core$IFn$_invoke$arity$1(inst_54305) : filter_e_fn.call(null,inst_54305));
var state_54355__$1 = (function (){var statearr_54396 = state_54355;
(statearr_54396[(13)] = inst_54320__$1);

return statearr_54396;
})();
if(cljs.core.truth_(inst_54320__$1)){
var statearr_54397_56636 = state_54355__$1;
(statearr_54397_56636[(1)] = (26));

} else {
var statearr_54398_56637 = state_54355__$1;
(statearr_54398_56637[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (35))){
var inst_54345 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54399_56638 = state_54355__$1;
(statearr_54399_56638[(2)] = inst_54345);

(statearr_54399_56638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (19))){
var inst_54351 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54400_56639 = state_54355__$1;
(statearr_54400_56639[(2)] = inst_54351);

(statearr_54400_56639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (11))){
var inst_54287 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54288 = [true];
var inst_54289 = cljs.core.PersistentHashMap.fromArrays(inst_54287,inst_54288);
var state_54355__$1 = state_54355;
var statearr_54401_56640 = state_54355__$1;
(statearr_54401_56640[(2)] = inst_54289);

(statearr_54401_56640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (9))){
var inst_54254 = (state_54355[(19)]);
var inst_54262 = (state_54355[(14)]);
var inst_54285 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54262,inst_54254);
var state_54355__$1 = state_54355;
if(inst_54285){
var statearr_54402_56641 = state_54355__$1;
(statearr_54402_56641[(1)] = (11));

} else {
var statearr_54403_56642 = state_54355__$1;
(statearr_54403_56642[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (5))){
var inst_54265 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_54272 = [true];
var inst_54273 = cljs.core.PersistentHashMap.fromArrays(inst_54265,inst_54272);
var state_54355__$1 = state_54355;
var statearr_54408_56643 = state_54355__$1;
(statearr_54408_56643[(2)] = inst_54273);

(statearr_54408_56643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (14))){
var inst_54261 = (state_54355[(16)]);
var state_54355__$1 = state_54355;
var statearr_54409_56644 = state_54355__$1;
(statearr_54409_56644[(2)] = inst_54261);

(statearr_54409_56644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (26))){
var inst_54305 = (state_54355[(7)]);
var inst_54322 = frontend.fs.sync.filter_local_changes_pred(inst_54305,self__.base_path,self__.graph_uuid);
var state_54355__$1 = state_54355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54355__$1,(29),inst_54322);
} else {
if((state_val_54356 === (16))){
var inst_54296 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54411_56645 = state_54355__$1;
(statearr_54411_56645[(2)] = inst_54296);

(statearr_54411_56645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (30))){
var inst_54305 = (state_54355[(7)]);
var inst_54241 = (state_54355[(9)]);
var inst_54240 = (state_54355[(10)]);
var inst_54329 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_54241,inst_54305);
var inst_54330 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_54329);
var inst_54331 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_54330);
var inst_54332 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,inst_54331);
var tmp54410 = inst_54240;
var inst_54240__$1 = tmp54410;
var inst_54241__$1 = inst_54330;
var state_54355__$1 = (function (){var statearr_54412 = state_54355;
(statearr_54412[(20)] = inst_54332);

(statearr_54412[(9)] = inst_54241__$1);

(statearr_54412[(10)] = inst_54240__$1);

return statearr_54412;
})();
var statearr_54413_56646 = state_54355__$1;
(statearr_54413_56646[(2)] = null);

(statearr_54413_56646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (10))){
var inst_54300 = (state_54355[(2)]);
var state_54355__$1 = state_54355;
var statearr_54414_56647 = state_54355__$1;
(statearr_54414_56647[(2)] = inst_54300);

(statearr_54414_56647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (18))){
var inst_54304 = (state_54355[(8)]);
var state_54355__$1 = state_54355;
if(cljs.core.truth_(inst_54304)){
var statearr_54415_56648 = state_54355__$1;
(statearr_54415_56648[(1)] = (20));

} else {
var statearr_54416_56649 = state_54355__$1;
(statearr_54416_56649[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54356 === (8))){
var inst_54260 = (state_54355[(15)]);
var inst_54280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54260,(0),null);
var inst_54281 = [new cljs.core.Keyword(null,"e","e",1381269198)];
var inst_54282 = [inst_54280];
var inst_54283 = cljs.core.PersistentHashMap.fromArrays(inst_54281,inst_54282);
var state_54355__$1 = state_54355;
var statearr_54417_56650 = state_54355__$1;
(statearr_54417_56650[(2)] = inst_54283);

(statearr_54417_56650[(1)] = (10));


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
var statearr_54419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54419[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54419[(1)] = (1));

return statearr_54419;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54355){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54355);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54420){var ex__27576__auto__ = e54420;
var statearr_54421_56651 = state_54355;
(statearr_54421_56651[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54355[(4)]))){
var statearr_54422_56652 = state_54355;
(statearr_54422_56652[(1)] = cljs.core.first((state_54355[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56653 = state_54355;
state_54355 = G__56653;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54355){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54424 = f__27596__auto__();
(statearr_54424[(6)] = c__27595__auto___56602);

return statearr_54424;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54430){
var state_val_54431 = (state_54430[(1)]);
if((state_val_54431 === (1))){
var inst_54426 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54427 = [true];
var inst_54428 = cljs.core.PersistentHashMap.fromArrays(inst_54426,inst_54427);
var state_54430__$1 = state_54430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54430__$1,inst_54428);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_54432 = [null,null,null,null,null,null,null];
(statearr_54432[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54432[(1)] = (1));

return statearr_54432;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54430){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54430);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54433){var ex__27576__auto__ = e54433;
var statearr_54434_56654 = state_54430;
(statearr_54434_56654[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54430[(4)]))){
var statearr_54435_56655 = state_54430;
(statearr_54435_56655[(1)] = cljs.core.first((state_54430[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56656 = state_54430;
state_54430 = G__56656;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54430){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54440 = f__27596__auto__();
(statearr_54440[(6)] = c__27595__auto__);

return statearr_54440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
var type = cljs.core.first(es).type;
var ignore_files = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var es__GT_paths_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54166_SHARP_){
return frontend.fs.sync.relative_path(p1__54166_SHARP_);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__54167_SHARP_){
return cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,p1__54167_SHARP_));
})));
var paths = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(es__GT_paths_xf,es);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote",paths], 0));

var r = (function (){var G__54441 = type;
switch (G__54441) {
case "add":
case "change":
return frontend.fs.sync.update_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
case "unlink":
frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths);

return frontend.fs.sync.delete_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54441)].join('')));

}
})();
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54474){
var state_val_54475 = (state_54474[(1)]);
if((state_val_54475 === (7))){
var state_54474__$1 = state_54474;
var statearr_54478_56659 = state_54474__$1;
(statearr_54478_56659[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (1))){
var inst_54442 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__add_current_local__GT_remote_files,paths);
var state_54474__$1 = (function (){var statearr_54480 = state_54474;
(statearr_54480[(7)] = inst_54442);

return statearr_54480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54474__$1,(2),r);
} else {
if((state_val_54475 === (4))){
var inst_54444 = (state_54474[(8)]);
var inst_54452 = typeof inst_54444 === 'number';
var state_54474__$1 = state_54474;
if(cljs.core.truth_(inst_54452)){
var statearr_54481_56660 = state_54474__$1;
(statearr_54481_56660[(1)] = (6));

} else {
var statearr_54482_56661 = state_54474__$1;
(statearr_54482_56661[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (6))){
var inst_54444 = (state_54474[(8)]);
var inst_54454 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote! update txid",inst_54444], 0));
var inst_54455 = frontend.fs.sync.update_graphs_txid_BANG_(inst_54444,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_54456 = cljs.core.reset_BANG_(self__._STAR_txid,inst_54444);
var inst_54457 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54458 = [true];
var inst_54459 = cljs.core.PersistentHashMap.fromArrays(inst_54457,inst_54458);
var state_54474__$1 = (function (){var statearr_54483 = state_54474;
(statearr_54483[(9)] = inst_54454);

(statearr_54483[(10)] = inst_54455);

(statearr_54483[(11)] = inst_54456);

return statearr_54483;
})();
var statearr_54488_56662 = state_54474__$1;
(statearr_54488_56662[(2)] = inst_54459);

(statearr_54488_56662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (3))){
var inst_54448 = [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663)];
var inst_54449 = [true];
var inst_54450 = cljs.core.PersistentHashMap.fromArrays(inst_54448,inst_54449);
var state_54474__$1 = state_54474;
var statearr_54497_56663 = state_54474__$1;
(statearr_54497_56663[(2)] = inst_54450);

(statearr_54497_56663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (2))){
var inst_54444 = (state_54474[(8)]);
var inst_54444__$1 = (state_54474[(2)]);
var inst_54445 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__remove_current_local__GT_remote_files,paths);
var inst_54446 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_54444__$1);
var state_54474__$1 = (function (){var statearr_54513 = state_54474;
(statearr_54513[(12)] = inst_54445);

(statearr_54513[(8)] = inst_54444__$1);

return statearr_54513;
})();
if(cljs.core.truth_(inst_54446)){
var statearr_54514_56664 = state_54474__$1;
(statearr_54514_56664[(1)] = (3));

} else {
var statearr_54515_56665 = state_54474__$1;
(statearr_54515_56665[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (11))){
var inst_54468 = (state_54474[(2)]);
var state_54474__$1 = state_54474;
var statearr_54516_56666 = state_54474__$1;
(statearr_54516_56666[(2)] = inst_54468);

(statearr_54516_56666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (9))){
var inst_54444 = (state_54474[(8)]);
var inst_54462 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote unknown:",inst_54444], 0));
var inst_54463 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_54464 = [inst_54444];
var inst_54465 = cljs.core.PersistentHashMap.fromArrays(inst_54463,inst_54464);
var state_54474__$1 = (function (){var statearr_54517 = state_54474;
(statearr_54517[(13)] = inst_54462);

return statearr_54517;
})();
var statearr_54518_56667 = state_54474__$1;
(statearr_54518_56667[(2)] = inst_54465);

(statearr_54518_56667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (5))){
var inst_54472 = (state_54474[(2)]);
var state_54474__$1 = state_54474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54474__$1,inst_54472);
} else {
if((state_val_54475 === (10))){
var state_54474__$1 = state_54474;
var statearr_54519_56668 = state_54474__$1;
(statearr_54519_56668[(2)] = null);

(statearr_54519_56668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54475 === (8))){
var inst_54470 = (state_54474[(2)]);
var state_54474__$1 = state_54474;
var statearr_54521_56669 = state_54474__$1;
(statearr_54521_56669[(2)] = inst_54470);

(statearr_54521_56669[(1)] = (5));


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
var statearr_54522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54522[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54522[(1)] = (1));

return statearr_54522;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54474){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54474);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54523){var ex__27576__auto__ = e54523;
var statearr_54524_56670 = state_54474;
(statearr_54524_56670[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54474[(4)]))){
var statearr_54525_56671 = state_54474;
(statearr_54525_56671[(1)] = cljs.core.first((state_54474[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56672 = state_54474;
state_54474 = G__56672;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54474){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54527 = f__27596__auto__();
(statearr_54527[(6)] = c__27595__auto__);

return statearr_54527;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54601){
var state_val_54602 = (state_54601[(1)]);
if((state_val_54602 === (7))){
var inst_54547 = (state_54601[(7)]);
var inst_54554 = cljs.core.empty_QMARK_(inst_54547);
var state_54601__$1 = state_54601;
if(inst_54554){
var statearr_54605_56673 = state_54601__$1;
(statearr_54605_56673[(1)] = (9));

} else {
var statearr_54606_56674 = state_54601__$1;
(statearr_54606_56674[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (20))){
var inst_54567 = (state_54601[(8)]);
var state_54601__$1 = state_54601;
if(cljs.core.truth_(inst_54567)){
var statearr_54615_56675 = state_54601__$1;
(statearr_54615_56675[(1)] = (22));

} else {
var statearr_54616_56676 = state_54601__$1;
(statearr_54616_56676[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (27))){
var inst_54591 = (state_54601[(2)]);
var state_54601__$1 = state_54601;
var statearr_54618_56677 = state_54601__$1;
(statearr_54618_56677[(2)] = inst_54591);

(statearr_54618_56677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (1))){
var inst_54528 = (state_54601[(9)]);
var inst_54528__$1 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_54529 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_54601__$1 = (function (){var statearr_54623 = state_54601;
(statearr_54623[(9)] = inst_54528__$1);

(statearr_54623[(10)] = inst_54529);

return statearr_54623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54601__$1,(2),inst_54528__$1);
} else {
if((state_val_54602 === (24))){
var inst_54587 = (state_54601[(2)]);
var state_54601__$1 = state_54601;
if(cljs.core.truth_(inst_54587)){
var statearr_54636_56678 = state_54601__$1;
(statearr_54636_56678[(1)] = (25));

} else {
var statearr_54639_56679 = state_54601__$1;
(statearr_54639_56679[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (4))){
var state_54601__$1 = state_54601;
if(cljs.core.truth_(self__.stopped)){
var statearr_54649_56680 = state_54601__$1;
(statearr_54649_56680[(1)] = (6));

} else {
var statearr_54650_56681 = state_54601__$1;
(statearr_54650_56681[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (15))){
var inst_54566 = (state_54601[(11)]);
var inst_54579 = (state_54601[(2)]);
var state_54601__$1 = (function (){var statearr_54651 = state_54601;
(statearr_54651[(12)] = inst_54579);

return statearr_54651;
})();
if(cljs.core.truth_(inst_54566)){
var statearr_54652_56682 = state_54601__$1;
(statearr_54652_56682[(1)] = (19));

} else {
var statearr_54653_56683 = state_54601__$1;
(statearr_54653_56683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (21))){
var inst_54593 = (state_54601[(2)]);
var state_54601__$1 = state_54601;
var statearr_54654_56684 = state_54601__$1;
(statearr_54654_56684[(2)] = inst_54593);

(statearr_54654_56684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (13))){
var inst_54570 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_54571 = cljs.core.deref(inst_54570);
var state_54601__$1 = state_54601;
if(cljs.core.truth_(inst_54571)){
var statearr_54682_56685 = state_54601__$1;
(statearr_54682_56685[(1)] = (16));

} else {
var statearr_54683_56686 = state_54601__$1;
(statearr_54683_56686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (22))){
var inst_54567 = (state_54601[(8)]);
var state_54601__$1 = state_54601;
var statearr_54684_56687 = state_54601__$1;
(statearr_54684_56687[(2)] = inst_54567);

(statearr_54684_56687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (6))){
var inst_54550 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54551 = [true];
var inst_54552 = cljs.core.PersistentHashMap.fromArrays(inst_54550,inst_54551);
var state_54601__$1 = state_54601;
var statearr_54685_56688 = state_54601__$1;
(statearr_54685_56688[(2)] = inst_54552);

(statearr_54685_56688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (25))){
var inst_54565 = (state_54601[(13)]);
var state_54601__$1 = state_54601;
var statearr_54689_56689 = state_54601__$1;
(statearr_54689_56689[(2)] = inst_54565);

(statearr_54689_56689[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (17))){
var inst_54565 = (state_54601[(13)]);
var state_54601__$1 = state_54601;
var statearr_54690_56691 = state_54601__$1;
(statearr_54690_56691[(2)] = inst_54565);

(statearr_54690_56691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (3))){
var inst_54528 = (state_54601[(9)]);
var inst_54531 = (state_54601[(14)]);
var inst_54529 = (state_54601[(10)]);
var inst_54533 = (state_54601[(2)]);
var inst_54534 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_54533,inst_54531);
var inst_54535 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var inst_54536 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null);
var inst_54537 = (function (){var remote_all_files_meta_c = inst_54528;
var local_all_files_meta_c = inst_54529;
var remote_all_files_meta = inst_54531;
var local_all_files_meta = inst_54533;
var diff_local_files = inst_54534;
var ignore_files = inst_54535;
var monitored_dirs = inst_54536;
return (function (p1__54175_SHARP_){
return frontend.fs.sync.__GT_FileChangeEvent("change",self__.base_path,p1__54175_SHARP_.get_normalized_path(),null);
});
})();
var inst_54538 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_54537);
var inst_54539 = (function (){var remote_all_files_meta_c = inst_54528;
var local_all_files_meta_c = inst_54529;
var remote_all_files_meta = inst_54531;
var local_all_files_meta = inst_54533;
var diff_local_files = inst_54534;
var ignore_files = inst_54535;
var monitored_dirs = inst_54536;
return (function (p1__54176_SHARP_){
var path = frontend.fs.sync.relative_path(p1__54176_SHARP_);
var and__5041__auto__ = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,path));
if(and__5041__auto__){
return frontend.fs.sync.contains_path_QMARK_(monitored_dirs,path);
} else {
return and__5041__auto__;
}
});
})();
var inst_54540 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_54539);
var inst_54541 = frontend.fs.sync.partition_file_change_events((10));
var inst_54542 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_54538,inst_54540,inst_54541);
var inst_54543 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_54542,inst_54534);
var inst_54544 = cljs.core.flatten(inst_54543);
var inst_54545 = cljs.core.count(inst_54544);
var inst_54546 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(local->remote)]",inst_54545,"files need to sync"], 0));
var inst_54547 = inst_54543;
var state_54601__$1 = (function (){var statearr_54716 = state_54601;
(statearr_54716[(7)] = inst_54547);

(statearr_54716[(15)] = inst_54546);

return statearr_54716;
})();
var statearr_54717_56692 = state_54601__$1;
(statearr_54717_56692[(2)] = null);

(statearr_54717_56692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (12))){
var inst_54565 = (state_54601[(13)]);
var inst_54564 = (state_54601[(2)]);
var inst_54565__$1 = cljs.core.__destructure_map(inst_54564);
var inst_54566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54565__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_54567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54565__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_54568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54565__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_54601__$1 = (function (){var statearr_54718 = state_54601;
(statearr_54718[(13)] = inst_54565__$1);

(statearr_54718[(8)] = inst_54567);

(statearr_54718[(16)] = inst_54568);

(statearr_54718[(11)] = inst_54566);

return statearr_54718;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_54729_56693 = state_54601__$1;
(statearr_54729_56693[(1)] = (13));

} else {
var statearr_54730_56694 = state_54601__$1;
(statearr_54730_56694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (2))){
var inst_54529 = (state_54601[(10)]);
var inst_54531 = (state_54601[(2)]);
var state_54601__$1 = (function (){var statearr_54739 = state_54601;
(statearr_54739[(14)] = inst_54531);

return statearr_54739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54601__$1,(3),inst_54529);
} else {
if((state_val_54602 === (23))){
var inst_54568 = (state_54601[(16)]);
var state_54601__$1 = state_54601;
var statearr_54761_56695 = state_54601__$1;
(statearr_54761_56695[(2)] = inst_54568);

(statearr_54761_56695[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (19))){
var inst_54547 = (state_54601[(7)]);
var inst_54581 = cljs.core.next(inst_54547);
var inst_54547__$1 = inst_54581;
var state_54601__$1 = (function (){var statearr_54770 = state_54601;
(statearr_54770[(7)] = inst_54547__$1);

return statearr_54770;
})();
var statearr_54783_56696 = state_54601__$1;
(statearr_54783_56696[(2)] = null);

(statearr_54783_56696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (11))){
var inst_54595 = (state_54601[(2)]);
var state_54601__$1 = state_54601;
var statearr_54784_56697 = state_54601__$1;
(statearr_54784_56697[(2)] = inst_54595);

(statearr_54784_56697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (9))){
var inst_54556 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_54557 = [true];
var inst_54558 = cljs.core.PersistentHashMap.fromArrays(inst_54556,inst_54557);
var state_54601__$1 = state_54601;
var statearr_54785_56698 = state_54601__$1;
(statearr_54785_56698[(2)] = inst_54558);

(statearr_54785_56698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (5))){
var inst_54599 = (state_54601[(2)]);
var state_54601__$1 = state_54601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54601__$1,inst_54599);
} else {
if((state_val_54602 === (14))){
var inst_54565 = (state_54601[(13)]);
var state_54601__$1 = state_54601;
var statearr_54791_56699 = state_54601__$1;
(statearr_54791_56699[(2)] = inst_54565);

(statearr_54791_56699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (26))){
var state_54601__$1 = state_54601;
var statearr_54796_56700 = state_54601__$1;
(statearr_54796_56700[(2)] = null);

(statearr_54796_56700[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (16))){
var inst_54565 = (state_54601[(13)]);
var inst_54573 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_54565);
var state_54601__$1 = state_54601;
var statearr_54801_56701 = state_54601__$1;
(statearr_54801_56701[(2)] = inst_54573);

(statearr_54801_56701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (10))){
var inst_54547 = (state_54601[(7)]);
var inst_54561 = cljs.core.first(inst_54547);
var inst_54562 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_54561);
var state_54601__$1 = state_54601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54601__$1,(12),inst_54562);
} else {
if((state_val_54602 === (18))){
var inst_54576 = (state_54601[(2)]);
var state_54601__$1 = state_54601;
var statearr_54810_56702 = state_54601__$1;
(statearr_54810_56702[(2)] = inst_54576);

(statearr_54810_56702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54602 === (8))){
var inst_54597 = (state_54601[(2)]);
var state_54601__$1 = state_54601;
var statearr_54811_56703 = state_54601__$1;
(statearr_54811_56703[(2)] = inst_54597);

(statearr_54811_56703[(1)] = (5));


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
var statearr_54812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54812[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54812[(1)] = (1));

return statearr_54812;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54601){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54601);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54813){var ex__27576__auto__ = e54813;
var statearr_54814_56704 = state_54601;
(statearr_54814_56704[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54601[(4)]))){
var statearr_54815_56705 = state_54601;
(statearr_54815_56705[(1)] = cljs.core.first((state_54601[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56706 = state_54601;
state_54601 = G__56706;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54601){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54818 = f__27596__auto__();
(statearr_54818[(6)] = c__27595__auto__);

return statearr_54818;
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54177){
var self__ = this;
var G__54177__$1 = this;
return (new cljs.core.RecordIter((0),G__54177__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54179,other54180){
var self__ = this;
var this54179__$1 = this;
return (((!((other54180 == null)))) && ((((this54179__$1.constructor === other54180.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.user_uuid,other54180.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.graph_uuid,other54180.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.base_path,other54180.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.repo,other54180.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1._STAR_sync_state,other54180._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.rate,other54180.rate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1._STAR_txid,other54180._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.remote__GT_local_syncer,other54180.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.stop_chan,other54180.stop_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.stopped,other54180.stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54179__$1.__extmap,other54180.__extmap)))))))))))))))))))))))));
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k54178){
var self__ = this;
var this__5347__auto____$1 = this;
var G__54820 = k54178;
var G__54820__$1 = (((G__54820 instanceof cljs.core.Keyword))?G__54820.fqn:null);
switch (G__54820__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k54178);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__54177){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__54821 = cljs.core.keyword_identical_QMARK_;
var expr__54822 = k__5349__auto__;
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(G__54177,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,G__54177,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,G__54177,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__54177,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__54177,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,G__54177,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,G__54177,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,G__54177,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,G__54177,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__54821.cljs$core$IFn$_invoke$arity$2 ? pred__54821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__54822) : pred__54821.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__54822)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,G__54177,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__54177),null));
}
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

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__54177){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,G__54177,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$map__GT_Local__GT_RemoteSyncer(G__54184){
var extmap__5382__auto__ = (function (){var G__54826 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54184,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], 0));
if(cljs.core.record_QMARK_(G__54184)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54826);
} else {
return G__54826;
}
})();
return (new frontend.fs.sync.Local__GT_RemoteSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983).cljs$core$IFn$_invoke$arity$1(G__54184),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__54184),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_54861){
var state_val_54862 = (state_54861[(1)]);
if((state_val_54862 === (7))){
var inst_54844 = this$.remote__GT_local(null,args);
var state_54861__$1 = state_54861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54861__$1,(8),inst_54844);
} else {
if((state_val_54862 === (1))){
var state_54861__$1 = state_54861;
var G__54863_56708 = self__.state;
var G__54863_56709__$1 = (((G__54863_56708 instanceof cljs.core.Keyword))?G__54863_56708.fqn:null);
switch (G__54863_56709__$1) {
case "frontend.fs.sync/idle":
var statearr_54864_56711 = state_54861__$1;
(statearr_54864_56711[(1)] = (3));


break;
case "frontend.fs.sync/local->remote":
var statearr_54865_56712 = state_54861__$1;
(statearr_54865_56712[(1)] = (5));


break;
case "frontend.fs.sync/remote->local":
var statearr_54866_56713 = state_54861__$1;
(statearr_54866_56713[(1)] = (7));


break;
case "frontend.fs.sync/local->remote-full-sync":
var statearr_54867_56714 = state_54861__$1;
(statearr_54867_56714[(1)] = (9));


break;
case "frontend.fs.sync/remote->local-full-sync":
var statearr_54868_56715 = state_54861__$1;
(statearr_54868_56715[(1)] = (11));


break;
case "frontend.fs.sync/stop":
var statearr_54869_56716 = state_54861__$1;
(statearr_54869_56716[(1)] = (13));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54863_56709__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54862 === (4))){
var inst_54838 = (state_54861[(2)]);
var state_54861__$1 = state_54861;
var statearr_54870_56717 = state_54861__$1;
(statearr_54870_56717[(2)] = inst_54838);

(statearr_54870_56717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54862 === (13))){
var inst_54856 = this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(null);
var state_54861__$1 = state_54861;
var statearr_54871_56718 = state_54861__$1;
(statearr_54871_56718[(2)] = inst_54856);

(statearr_54871_56718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54862 === (6))){
var inst_54842 = (state_54861[(2)]);
var state_54861__$1 = state_54861;
var statearr_54872_56719 = state_54861__$1;
(statearr_54872_56719[(2)] = inst_54842);

(statearr_54872_56719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54862 === (3))){
var inst_54836 = this$.idle();
var state_54861__$1 = state_54861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54861__$1,(4),inst_54836);
} else {
if((state_val_54862 === (12))){
var inst_54854 = (state_54861[(2)]);
var state_54861__$1 = state_54861;
var statearr_54873_56720 = state_54861__$1;
(statearr_54873_56720[(2)] = inst_54854);

(statearr_54873_56720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54862 === (2))){
var inst_54859 = (state_54861[(2)]);
var state_54861__$1 = state_54861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54861__$1,inst_54859);
} else {
if((state_val_54862 === (11))){
var inst_54852 = this$.remote__GT_local_full_sync(null);
var state_54861__$1 = state_54861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54861__$1,(12),inst_54852);
} else {
if((state_val_54862 === (9))){
var inst_54848 = this$.full_sync();
var state_54861__$1 = state_54861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54861__$1,(10),inst_54848);
} else {
if((state_val_54862 === (5))){
var inst_54840 = this$.local__GT_remote(args);
var state_54861__$1 = state_54861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54861__$1,(6),inst_54840);
} else {
if((state_val_54862 === (10))){
var inst_54850 = (state_54861[(2)]);
var state_54861__$1 = state_54861;
var statearr_54875_56721 = state_54861__$1;
(statearr_54875_56721[(2)] = inst_54850);

(statearr_54875_56721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54862 === (8))){
var inst_54846 = (state_54861[(2)]);
var state_54861__$1 = state_54861;
var statearr_54876_56722 = state_54861__$1;
(statearr_54876_56722[(2)] = inst_54846);

(statearr_54876_56722[(1)] = (2));


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
var statearr_54880 = [null,null,null,null,null,null,null];
(statearr_54880[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_54880[(1)] = (1));

return statearr_54880;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_54861){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_54861);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e54881){var ex__27576__auto__ = e54881;
var statearr_54882_56723 = state_54861;
(statearr_54882_56723[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_54861[(4)]))){
var statearr_54883_56724 = state_54861;
(statearr_54883_56724[(1)] = cljs.core.first((state_54861[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56725 = state_54861;
state_54861 = G__56725;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_54861){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_54861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_54884 = f__27596__auto__();
(statearr_54884[(6)] = c__27595__auto__);

return statearr_54884;
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

var c__27595__auto___56726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55045){
var state_val_55046 = (state_55045[(1)]);
if((state_val_55046 === (7))){
var inst_54977 = (state_55045[(2)]);
var inst_54978 = cljs.core.__destructure_map(inst_54977);
var inst_54979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54978,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_54980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54978,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_54981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54978,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_54982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54978,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var state_55045__$1 = (function (){var statearr_55047 = state_55045;
(statearr_55047[(7)] = inst_54982);

(statearr_55047[(8)] = inst_54981);

(statearr_55047[(9)] = inst_54980);

return statearr_55047;
})();
if(cljs.core.truth_(inst_54979)){
var statearr_55048_56727 = state_55045__$1;
(statearr_55048_56727[(1)] = (26));

} else {
var statearr_55049_56728 = state_55045__$1;
(statearr_55049_56728[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (20))){
var inst_54957 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_54958 = [true];
var inst_54959 = cljs.core.PersistentHashMap.fromArrays(inst_54957,inst_54958);
var state_55045__$1 = state_55045;
var statearr_55050_56729 = state_55045__$1;
(statearr_55050_56729[(2)] = inst_54959);

(statearr_55050_56729[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (27))){
var inst_54980 = (state_55045[(9)]);
var state_55045__$1 = state_55045;
if(cljs.core.truth_(inst_54980)){
var statearr_55051_56730 = state_55045__$1;
(statearr_55051_56730[(1)] = (30));

} else {
var statearr_55052_56731 = state_55045__$1;
(statearr_55052_56731[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (1))){
var state_55045__$1 = state_55045;
var statearr_55053_56732 = state_55045__$1;
(statearr_55053_56732[(2)] = null);

(statearr_55053_56732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (24))){
var state_55045__$1 = state_55045;
var statearr_55054_56733 = state_55045__$1;
(statearr_55054_56733[(2)] = null);

(statearr_55054_56733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (39))){
var inst_55014 = (state_55045[(2)]);
var state_55045__$1 = (function (){var statearr_55055 = state_55045;
(statearr_55055[(10)] = inst_55014);

return statearr_55055;
})();
var statearr_55056_56734 = state_55045__$1;
(statearr_55056_56734[(2)] = null);

(statearr_55056_56734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (46))){
var state_55045__$1 = state_55045;
var statearr_55057_56735 = state_55045__$1;
(statearr_55057_56735[(2)] = null);

(statearr_55057_56735[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (4))){
var inst_54898 = (state_55045[(11)]);
var inst_54911 = (state_55045[(12)]);
var inst_54913 = (state_55045[(13)]);
var inst_54911__$1 = (state_55045[(2)]);
var inst_54912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54911__$1,(0),null);
var inst_54913__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54911__$1,(1),null);
var inst_54914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54913__$1,inst_54898);
var state_55045__$1 = (function (){var statearr_55058 = state_55045;
(statearr_55058[(14)] = inst_54912);

(statearr_55058[(12)] = inst_54911__$1);

(statearr_55058[(13)] = inst_54913__$1);

return statearr_55058;
})();
if(inst_54914){
var statearr_55059_56736 = state_55045__$1;
(statearr_55059_56736[(1)] = (5));

} else {
var statearr_55060_56737 = state_55045__$1;
(statearr_55060_56737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (15))){
var inst_54902 = (state_55045[(15)]);
var inst_54913 = (state_55045[(13)]);
var inst_54944 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54913,inst_54902);
var state_55045__$1 = state_55045;
if(inst_54944){
var statearr_55061_56738 = state_55045__$1;
(statearr_55061_56738[(1)] = (17));

} else {
var statearr_55062_56739 = state_55045__$1;
(statearr_55062_56739[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (48))){
var inst_55031 = (state_55045[(2)]);
var state_55045__$1 = (function (){var statearr_55063 = state_55045;
(statearr_55063[(16)] = inst_55031);

return statearr_55063;
})();
var statearr_55064_56740 = state_55045__$1;
(statearr_55064_56740[(2)] = null);

(statearr_55064_56740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (21))){
var inst_54913 = (state_55045[(13)]);
var inst_54961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54913,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_55045__$1 = state_55045;
if(inst_54961){
var statearr_55065_56741 = state_55045__$1;
(statearr_55065_56741[(1)] = (23));

} else {
var statearr_55067_56742 = state_55045__$1;
(statearr_55067_56742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (31))){
var inst_54982 = (state_55045[(7)]);
var state_55045__$1 = state_55045;
if(cljs.core.truth_(inst_54982)){
var statearr_55069_56743 = state_55045__$1;
(statearr_55069_56743[(1)] = (41));

} else {
var statearr_55071_56744 = state_55045__$1;
(statearr_55071_56744[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (32))){
var inst_55039 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55073_56745 = state_55045__$1;
(statearr_55073_56745[(2)] = inst_55039);

(statearr_55073_56745[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (40))){
var inst_55011 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55074_56746 = state_55045__$1;
(statearr_55074_56746[(2)] = inst_55011);

(statearr_55074_56746[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (33))){
var inst_54994 = [new cljs.core.Keyword(null,"txid","txid",1606205478)];
var inst_54995 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_55045__$1 = (function (){var statearr_55075 = state_55045;
(statearr_55075[(17)] = inst_54994);

return statearr_55075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55045__$1,(36),inst_54995);
} else {
if((state_val_55046 === (13))){
var inst_54973 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55076_56747 = state_55045__$1;
(statearr_55076_56747[(2)] = inst_54973);

(statearr_55076_56747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (22))){
var inst_54967 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55079_56748 = state_55045__$1;
(statearr_55079_56748[(2)] = inst_54967);

(statearr_55079_56748[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (36))){
var inst_54994 = (state_55045[(17)]);
var inst_54997 = (state_55045[(2)]);
var inst_54998 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_54997);
var inst_54999 = [inst_54998];
var inst_55000 = cljs.core.PersistentHashMap.fromArrays(inst_54994,inst_54999);
var state_55045__$1 = state_55045;
var statearr_55085_56749 = state_55045__$1;
(statearr_55085_56749[(2)] = inst_55000);

(statearr_55085_56749[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (41))){
var inst_54982 = (state_55045[(7)]);
var inst_55018 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55019 = [inst_54982];
var inst_55020 = cljs.core.PersistentHashMap.fromArrays(inst_55018,inst_55019);
var state_55045__$1 = state_55045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55045__$1,(44),self__.ops_chan,inst_55020);
} else {
if((state_val_55046 === (43))){
var inst_55037 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55089_56750 = state_55045__$1;
(statearr_55089_56750[(2)] = inst_55037);

(statearr_55089_56750[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (29))){
var inst_54989 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55090_56751 = state_55045__$1;
(statearr_55090_56751[(2)] = inst_54989);

(statearr_55090_56751[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (44))){
var inst_55022 = (state_55045[(2)]);
var state_55045__$1 = (function (){var statearr_55093 = state_55045;
(statearr_55093[(18)] = inst_55022);

return statearr_55093;
})();
var statearr_55094_56752 = state_55045__$1;
(statearr_55094_56752[(2)] = null);

(statearr_55094_56752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (6))){
var inst_54899 = (state_55045[(19)]);
var inst_54913 = (state_55045[(13)]);
var inst_54921 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54913,inst_54899);
var state_55045__$1 = state_55045;
if(inst_54921){
var statearr_55095_56753 = state_55045__$1;
(statearr_55095_56753[(1)] = (8));

} else {
var statearr_55096_56754 = state_55045__$1;
(statearr_55096_56754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (28))){
var inst_55041 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55097_56755 = state_55045__$1;
(statearr_55097_56755[(2)] = inst_55041);

(statearr_55097_56755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (25))){
var inst_54965 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55098_56756 = state_55045__$1;
(statearr_55098_56756[(2)] = inst_54965);

(statearr_55098_56756[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (34))){
var inst_54980 = (state_55045[(9)]);
var state_55045__$1 = state_55045;
var statearr_55099_56757 = state_55045__$1;
(statearr_55099_56757[(2)] = inst_54980);

(statearr_55099_56757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (17))){
var inst_54911 = (state_55045[(12)]);
var inst_54949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54911,(0),null);
var inst_54950 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local changes:",inst_54949], 0));
var inst_54951 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_54952 = [inst_54949];
var inst_54953 = cljs.core.PersistentHashMap.fromArrays(inst_54951,inst_54952);
var state_55045__$1 = (function (){var statearr_55100 = state_55045;
(statearr_55100[(20)] = inst_54950);

return statearr_55100;
})();
var statearr_55101_56758 = state_55045__$1;
(statearr_55101_56758[(2)] = inst_54953);

(statearr_55101_56758[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (3))){
var inst_55043 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55045__$1,inst_55043);
} else {
if((state_val_55046 === (12))){
var inst_54901 = (state_55045[(21)]);
var inst_54913 = (state_55045[(13)]);
var inst_54933 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54913,inst_54901);
var state_55045__$1 = state_55045;
if(inst_54933){
var statearr_55102_56759 = state_55045__$1;
(statearr_55102_56759[(1)] = (14));

} else {
var statearr_55103_56760 = state_55045__$1;
(statearr_55103_56760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (2))){
var inst_54898 = (state_55045[(11)]);
var inst_54905 = (state_55045[(22)]);
var inst_54902 = (state_55045[(15)]);
var inst_54901 = (state_55045[(21)]);
var inst_54900 = (state_55045[(23)]);
var inst_54899 = (state_55045[(19)]);
var inst_54898__$1 = self__.stop_sync_chan;
var inst_54899__$1 = self__.remote__GT_local_sync_chan;
var inst_54900__$1 = self__.full_sync_chan;
var inst_54901__$1 = self__._remote_change_chan;
var inst_54902__$1 = self__.ratelimit_local_changes_chan;
var inst_54903 = ((20) * (60));
var inst_54904 = (inst_54903 * (1000));
var inst_54905__$1 = cljs.core.async.timeout(inst_54904);
var inst_54907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54908 = [inst_54898__$1,inst_54899__$1,inst_54900__$1,inst_54901__$1,inst_54902__$1,inst_54905__$1];
var inst_54909 = (new cljs.core.PersistentVector(null,6,(5),inst_54907,inst_54908,null));
var state_55045__$1 = (function (){var statearr_55105 = state_55045;
(statearr_55105[(11)] = inst_54898__$1);

(statearr_55105[(22)] = inst_54905__$1);

(statearr_55105[(15)] = inst_54902__$1);

(statearr_55105[(21)] = inst_54901__$1);

(statearr_55105[(23)] = inst_54900__$1);

(statearr_55105[(19)] = inst_54899__$1);

return statearr_55105;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_55045__$1,(4),inst_54909,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_55046 === (23))){
var inst_54912 = (state_55045[(14)]);
var state_55045__$1 = state_55045;
var statearr_55106_56761 = state_55045__$1;
(statearr_55106_56761[(2)] = inst_54912);

(statearr_55106_56761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (47))){
var inst_55035 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55107_56762 = state_55045__$1;
(statearr_55107_56762[(2)] = inst_55035);

(statearr_55107_56762[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (35))){
var inst_55003 = (state_55045[(24)]);
var inst_55003__$1 = (state_55045[(2)]);
var inst_55004 = (inst_55003__$1 == null);
var inst_55005 = cljs.core.not(inst_55004);
var state_55045__$1 = (function (){var statearr_55108 = state_55045;
(statearr_55108[(24)] = inst_55003__$1);

return statearr_55108;
})();
if(inst_55005){
var statearr_55109_56763 = state_55045__$1;
(statearr_55109_56763[(1)] = (37));

} else {
var statearr_55110_56764 = state_55045__$1;
(statearr_55110_56764[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (19))){
var inst_54969 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55111_56765 = state_55045__$1;
(statearr_55111_56765[(2)] = inst_54969);

(statearr_55111_56765[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (11))){
var inst_54929 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_54930 = [true];
var inst_54931 = cljs.core.PersistentHashMap.fromArrays(inst_54929,inst_54930);
var state_55045__$1 = state_55045;
var statearr_55112_56766 = state_55045__$1;
(statearr_55112_56766[(2)] = inst_54931);

(statearr_55112_56766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (9))){
var inst_54900 = (state_55045[(23)]);
var inst_54913 = (state_55045[(13)]);
var inst_54927 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54913,inst_54900);
var state_55045__$1 = state_55045;
if(inst_54927){
var statearr_55113_56767 = state_55045__$1;
(statearr_55113_56767[(1)] = (11));

} else {
var statearr_55114_56768 = state_55045__$1;
(statearr_55114_56768[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (5))){
var inst_54917 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54918 = [true];
var inst_54919 = cljs.core.PersistentHashMap.fromArrays(inst_54917,inst_54918);
var state_55045__$1 = state_55045;
var statearr_55115_56769 = state_55045__$1;
(statearr_55115_56769[(2)] = inst_54919);

(statearr_55115_56769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (14))){
var inst_54911 = (state_55045[(12)]);
var inst_54938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54911,(0),null);
var inst_54939 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote change:",inst_54938], 0));
var inst_54940 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_54941 = [inst_54938];
var inst_54942 = cljs.core.PersistentHashMap.fromArrays(inst_54940,inst_54941);
var state_55045__$1 = (function (){var statearr_55116 = state_55045;
(statearr_55116[(25)] = inst_54939);

return statearr_55116;
})();
var statearr_55117_56770 = state_55045__$1;
(statearr_55117_56770[(2)] = inst_54942);

(statearr_55117_56770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (45))){
var inst_55026 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55027 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55028 = [true];
var inst_55029 = cljs.core.PersistentHashMap.fromArrays(inst_55027,inst_55028);
var state_55045__$1 = (function (){var statearr_55118 = state_55045;
(statearr_55118[(26)] = inst_55026);

return statearr_55118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55045__$1,(48),self__.ops_chan,inst_55029);
} else {
if((state_val_55046 === (26))){
var inst_54984 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_54985 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_54986 = [true];
var inst_54987 = cljs.core.PersistentHashMap.fromArrays(inst_54985,inst_54986);
var state_55045__$1 = (function (){var statearr_55119 = state_55045;
(statearr_55119[(27)] = inst_54984);

return statearr_55119;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55045__$1,(29),self__.ops_chan,inst_54987);
} else {
if((state_val_55046 === (16))){
var inst_54971 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55120_56771 = state_55045__$1;
(statearr_55120_56771[(2)] = inst_54971);

(statearr_55120_56771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (38))){
var state_55045__$1 = state_55045;
var statearr_55122_56772 = state_55045__$1;
(statearr_55122_56772[(2)] = null);

(statearr_55122_56772[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (30))){
var inst_54980 = (state_55045[(9)]);
var inst_54992 = inst_54980 === true;
var state_55045__$1 = state_55045;
if(cljs.core.truth_(inst_54992)){
var statearr_55124_56773 = state_55045__$1;
(statearr_55124_56773[(1)] = (33));

} else {
var statearr_55125_56774 = state_55045__$1;
(statearr_55125_56774[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (10))){
var inst_54975 = (state_55045[(2)]);
var state_55045__$1 = state_55045;
var statearr_55126_56775 = state_55045__$1;
(statearr_55126_56775[(2)] = inst_54975);

(statearr_55126_56775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (18))){
var inst_54905 = (state_55045[(22)]);
var inst_54913 = (state_55045[(13)]);
var inst_54955 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54913,inst_54905);
var state_55045__$1 = state_55045;
if(inst_54955){
var statearr_55129_56776 = state_55045__$1;
(statearr_55129_56776[(1)] = (20));

} else {
var statearr_55130_56777 = state_55045__$1;
(statearr_55130_56777[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (42))){
var inst_54981 = (state_55045[(8)]);
var state_55045__$1 = state_55045;
if(cljs.core.truth_(inst_54981)){
var statearr_55131_56778 = state_55045__$1;
(statearr_55131_56778[(1)] = (45));

} else {
var statearr_55132_56779 = state_55045__$1;
(statearr_55132_56779[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55046 === (37))){
var inst_55003 = (state_55045[(24)]);
var inst_55007 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55008 = [inst_55003];
var inst_55009 = cljs.core.PersistentHashMap.fromArrays(inst_55007,inst_55008);
var state_55045__$1 = state_55045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55045__$1,(40),self__.ops_chan,inst_55009);
} else {
if((state_val_55046 === (8))){
var inst_54923 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_54924 = [true];
var inst_54925 = cljs.core.PersistentHashMap.fromArrays(inst_54923,inst_54924);
var state_55045__$1 = state_55045;
var statearr_55137_56780 = state_55045__$1;
(statearr_55137_56780[(2)] = inst_54925);

(statearr_55137_56780[(1)] = (10));


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
var statearr_55138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55138[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55138[(1)] = (1));

return statearr_55138;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55045){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55045);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55139){var ex__27576__auto__ = e55139;
var statearr_55140_56781 = state_55045;
(statearr_55140_56781[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55045[(4)]))){
var statearr_55141_56782 = state_55045;
(statearr_55141_56782[(1)] = cljs.core.first((state_55045[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56783 = state_55045;
state_55045 = G__56783;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55045){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55142 = f__27596__auto__();
(statearr_55142[(6)] = c__27595__auto___56726);

return statearr_55142;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55202){
var state_val_55203 = (state_55202[(1)]);
if((state_val_55203 === (7))){
var inst_55149 = (state_55202[(7)]);
var inst_55159 = [new cljs.core.Keyword(null,"remote","remote",-1593576576)];
var inst_55160 = [inst_55149];
var inst_55161 = cljs.core.PersistentHashMap.fromArrays(inst_55159,inst_55160);
var inst_55162 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),inst_55161);
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55202__$1,(10),inst_55162);
} else {
if((state_val_55203 === (20))){
var state_55202__$1 = state_55202;
var statearr_55205_56784 = state_55202__$1;
(statearr_55205_56784[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (1))){
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55202__$1,(2),self__.ops_chan);
} else {
if((state_val_55203 === (24))){
var state_55202__$1 = state_55202;
var statearr_55207_56785 = state_55202__$1;
(statearr_55207_56785[(2)] = null);

(statearr_55207_56785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (4))){
var inst_55149 = (state_55202[(7)]);
var state_55202__$1 = state_55202;
if(cljs.core.truth_(inst_55149)){
var statearr_55208_56786 = state_55202__$1;
(statearr_55208_56786[(1)] = (7));

} else {
var statearr_55209_56787 = state_55202__$1;
(statearr_55209_56787[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (15))){
var inst_55175 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null);
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55202__$1,(18),inst_55175);
} else {
if((state_val_55203 === (21))){
var inst_55192 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55212_56788 = state_55202__$1;
(statearr_55212_56788[(2)] = inst_55192);

(statearr_55212_56788[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (13))){
var inst_55196 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55217_56789 = state_55202__$1;
(statearr_55217_56789[(2)] = inst_55196);

(statearr_55217_56789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (22))){
var inst_55182 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55218_56790 = state_55202__$1;
(statearr_55218_56790[(2)] = inst_55182);

(statearr_55218_56790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (6))){
var inst_55156 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55219_56791 = state_55202__$1;
(statearr_55219_56791[(2)] = inst_55156);

(statearr_55219_56791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (25))){
var inst_55190 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55221_56792 = state_55202__$1;
(statearr_55221_56792[(2)] = inst_55190);

(statearr_55221_56792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (17))){
var inst_55194 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55222_56793 = state_55202__$1;
(statearr_55222_56793[(2)] = inst_55194);

(statearr_55222_56793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (3))){
var inst_55154 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55202__$1,(6),inst_55154);
} else {
if((state_val_55203 === (12))){
var inst_55151 = (state_55202[(8)]);
var state_55202__$1 = state_55202;
if(cljs.core.truth_(inst_55151)){
var statearr_55224_56794 = state_55202__$1;
(statearr_55224_56794[(1)] = (15));

} else {
var statearr_55225_56795 = state_55202__$1;
(statearr_55225_56795[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (2))){
var inst_55146 = (state_55202[(2)]);
var inst_55147 = cljs.core.__destructure_map(inst_55146);
var inst_55148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55147,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55147,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_55150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55147,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var inst_55151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55147,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_55152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55147,new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000));
var state_55202__$1 = (function (){var statearr_55230 = state_55202;
(statearr_55230[(9)] = inst_55150);

(statearr_55230[(10)] = inst_55152);

(statearr_55230[(8)] = inst_55151);

(statearr_55230[(7)] = inst_55149);

return statearr_55230;
})();
if(cljs.core.truth_(inst_55148)){
var statearr_55231_56796 = state_55202__$1;
(statearr_55231_56796[(1)] = (3));

} else {
var statearr_55232_56797 = state_55202__$1;
(statearr_55232_56797[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (23))){
var inst_55185 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55202__$1,(26),inst_55185);
} else {
if((state_val_55203 === (19))){
var inst_55180 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null);
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55202__$1,(22),inst_55180);
} else {
if((state_val_55203 === (11))){
var inst_55150 = (state_55202[(9)]);
var inst_55167 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_55168 = [inst_55150];
var inst_55169 = cljs.core.PersistentHashMap.fromArrays(inst_55167,inst_55168);
var inst_55170 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),inst_55169);
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55202__$1,(14),inst_55170);
} else {
if((state_val_55203 === (9))){
var inst_55198 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55238_56798 = state_55202__$1;
(statearr_55238_56798[(2)] = inst_55198);

(statearr_55238_56798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (5))){
var inst_55200 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55202__$1,inst_55200);
} else {
if((state_val_55203 === (14))){
var inst_55172 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55240_56799 = state_55202__$1;
(statearr_55240_56799[(2)] = inst_55172);

(statearr_55240_56799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (26))){
var inst_55187 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55241_56800 = state_55202__$1;
(statearr_55241_56800[(2)] = inst_55187);

(statearr_55241_56800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (16))){
var inst_55152 = (state_55202[(10)]);
var state_55202__$1 = state_55202;
if(cljs.core.truth_(inst_55152)){
var statearr_55244_56801 = state_55202__$1;
(statearr_55244_56801[(1)] = (19));

} else {
var statearr_55245_56802 = state_55202__$1;
(statearr_55245_56802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (10))){
var inst_55164 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55246_56803 = state_55202__$1;
(statearr_55246_56803[(2)] = inst_55164);

(statearr_55246_56803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (18))){
var inst_55177 = (state_55202[(2)]);
var state_55202__$1 = state_55202;
var statearr_55247_56804 = state_55202__$1;
(statearr_55247_56804[(2)] = inst_55177);

(statearr_55247_56804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55203 === (8))){
var inst_55150 = (state_55202[(9)]);
var state_55202__$1 = state_55202;
if(cljs.core.truth_(inst_55150)){
var statearr_55252_56805 = state_55202__$1;
(statearr_55252_56805[(1)] = (11));

} else {
var statearr_55255_56806 = state_55202__$1;
(statearr_55255_56806[(1)] = (12));

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
var statearr_55258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55258[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55258[(1)] = (1));

return statearr_55258;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55202){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55202);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55260){var ex__27576__auto__ = e55260;
var statearr_55262_56807 = state_55202;
(statearr_55262_56807[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55202[(4)]))){
var statearr_55263_56808 = state_55202;
(statearr_55263_56808[(1)] = cljs.core.first((state_55202[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56809 = state_55202;
state_55202 = G__56809;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55202){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55265 = f__27596__auto__();
(statearr_55265[(6)] = c__27595__auto__);

return statearr_55265;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55319){
var state_val_55320 = (state_55319[(1)]);
if((state_val_55320 === (7))){
var inst_55270 = (state_55319[(7)]);
var state_55319__$1 = state_55319;
var statearr_55321_56810 = state_55319__$1;
(statearr_55321_56810[(2)] = inst_55270);

(statearr_55321_56810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (20))){
var inst_55273 = (state_55319[(8)]);
var inst_55307 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full-sync",inst_55273], 0));
var inst_55308 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55319__$1 = (function (){var statearr_55322 = state_55319;
(statearr_55322[(9)] = inst_55307);

return statearr_55322;
})();
var statearr_55323_56811 = state_55319__$1;
(statearr_55323_56811[(2)] = inst_55308);

(statearr_55323_56811[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (1))){
var inst_55267 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(null);
var state_55319__$1 = state_55319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55319__$1,(2),inst_55267);
} else {
if((state_val_55320 === (4))){
var inst_55270 = (state_55319[(7)]);
var state_55319__$1 = state_55319;
var statearr_55324_56812 = state_55319__$1;
(statearr_55324_56812[(2)] = inst_55270);

(statearr_55324_56812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (15))){
var inst_55295 = (state_55319[(2)]);
var inst_55296 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55297 = [true];
var inst_55298 = cljs.core.PersistentHashMap.fromArrays(inst_55296,inst_55297);
var state_55319__$1 = (function (){var statearr_55325 = state_55319;
(statearr_55325[(10)] = inst_55295);

return statearr_55325;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55319__$1,(16),self__.ops_chan,inst_55298);
} else {
if((state_val_55320 === (21))){
var state_55319__$1 = state_55319;
var statearr_55326_56813 = state_55319__$1;
(statearr_55326_56813[(2)] = null);

(statearr_55326_56813[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (13))){
var inst_55274 = (state_55319[(11)]);
var state_55319__$1 = state_55319;
if(cljs.core.truth_(inst_55274)){
var statearr_55327_56814 = state_55319__$1;
(statearr_55327_56814[(1)] = (17));

} else {
var statearr_55328_56815 = state_55319__$1;
(statearr_55328_56815[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (22))){
var inst_55311 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
var statearr_55329_56816 = state_55319__$1;
(statearr_55329_56816[(2)] = inst_55311);

(statearr_55329_56816[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (6))){
var inst_55270 = (state_55319[(7)]);
var inst_55279 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),inst_55270);
var state_55319__$1 = state_55319;
var statearr_55330_56817 = state_55319__$1;
(statearr_55330_56817[(2)] = inst_55279);

(statearr_55330_56817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (17))){
var inst_55304 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55319__$1 = state_55319;
var statearr_55331_56818 = state_55319__$1;
(statearr_55331_56818[(2)] = inst_55304);

(statearr_55331_56818[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (3))){
var inst_55276 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55277 = cljs.core.deref(inst_55276);
var state_55319__$1 = state_55319;
if(cljs.core.truth_(inst_55277)){
var statearr_55332_56819 = state_55319__$1;
(statearr_55332_56819[(1)] = (6));

} else {
var statearr_55333_56820 = state_55319__$1;
(statearr_55333_56820[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (12))){
var inst_55290 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55291 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55292 = [true];
var inst_55293 = cljs.core.PersistentHashMap.fromArrays(inst_55291,inst_55292);
var state_55319__$1 = (function (){var statearr_55334 = state_55319;
(statearr_55334[(12)] = inst_55290);

return statearr_55334;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55319__$1,(15),self__.ops_chan,inst_55293);
} else {
if((state_val_55320 === (2))){
var inst_55270 = (state_55319[(7)]);
var inst_55269 = (state_55319[(2)]);
var inst_55270__$1 = cljs.core.__destructure_map(inst_55269);
var inst_55271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55270__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55270__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_55273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55270__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55270__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_55319__$1 = (function (){var statearr_55336 = state_55319;
(statearr_55336[(13)] = inst_55272);

(statearr_55336[(8)] = inst_55273);

(statearr_55336[(14)] = inst_55271);

(statearr_55336[(7)] = inst_55270__$1);

(statearr_55336[(11)] = inst_55274);

return statearr_55336;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55338_56821 = state_55319__$1;
(statearr_55338_56821[(1)] = (3));

} else {
var statearr_55339_56822 = state_55319__$1;
(statearr_55339_56822[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (19))){
var inst_55313 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
var statearr_55340_56823 = state_55319__$1;
(statearr_55340_56823[(2)] = inst_55313);

(statearr_55340_56823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (11))){
var inst_55317 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55319__$1,inst_55317);
} else {
if((state_val_55320 === (9))){
var inst_55287 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55319__$1 = state_55319;
var statearr_55344_56824 = state_55319__$1;
(statearr_55344_56824[(2)] = inst_55287);

(statearr_55344_56824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (5))){
var inst_55271 = (state_55319[(14)]);
var inst_55285 = (state_55319[(2)]);
var state_55319__$1 = (function (){var statearr_55345 = state_55319;
(statearr_55345[(15)] = inst_55285);

return statearr_55345;
})();
if(cljs.core.truth_(inst_55271)){
var statearr_55346_56825 = state_55319__$1;
(statearr_55346_56825[(1)] = (9));

} else {
var statearr_55349_56826 = state_55319__$1;
(statearr_55349_56826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (14))){
var inst_55315 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
var statearr_55350_56827 = state_55319__$1;
(statearr_55350_56827[(2)] = inst_55315);

(statearr_55350_56827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (16))){
var inst_55300 = (state_55319[(2)]);
var inst_55301 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55319__$1 = (function (){var statearr_55355 = state_55319;
(statearr_55355[(16)] = inst_55300);

return statearr_55355;
})();
var statearr_55356_56828 = state_55319__$1;
(statearr_55356_56828[(2)] = inst_55301);

(statearr_55356_56828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (10))){
var inst_55272 = (state_55319[(13)]);
var state_55319__$1 = state_55319;
if(cljs.core.truth_(inst_55272)){
var statearr_55360_56829 = state_55319__$1;
(statearr_55360_56829[(1)] = (12));

} else {
var statearr_55361_56830 = state_55319__$1;
(statearr_55361_56830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (18))){
var inst_55273 = (state_55319[(8)]);
var state_55319__$1 = state_55319;
if(cljs.core.truth_(inst_55273)){
var statearr_55362_56831 = state_55319__$1;
(statearr_55362_56831[(1)] = (20));

} else {
var statearr_55363_56832 = state_55319__$1;
(statearr_55363_56832[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (8))){
var inst_55282 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
var statearr_55367_56833 = state_55319__$1;
(statearr_55367_56833[(2)] = inst_55282);

(statearr_55367_56833[(1)] = (5));


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
var statearr_55368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55368[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55368[(1)] = (1));

return statearr_55368;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55319){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55319);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55369){var ex__27576__auto__ = e55369;
var statearr_55370_56834 = state_55319;
(statearr_55370_56834[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55319[(4)]))){
var statearr_55371_56835 = state_55319;
(statearr_55371_56835[(1)] = cljs.core.first((state_55319[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56836 = state_55319;
state_55319 = G__56836;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55319){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55372 = f__27596__auto__();
(statearr_55372[(6)] = c__27595__auto__);

return statearr_55372;
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55400){
var state_val_55401 = (state_55400[(1)]);
if((state_val_55401 === (7))){
var inst_55381 = (state_55400[(7)]);
var state_55400__$1 = state_55400;
if(cljs.core.truth_(inst_55381)){
var statearr_55402_56837 = state_55400__$1;
(statearr_55402_56837[(1)] = (9));

} else {
var statearr_55403_56839 = state_55400__$1;
(statearr_55403_56839[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (1))){
var inst_55376 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(null);
var state_55400__$1 = state_55400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55400__$1,(2),inst_55376);
} else {
if((state_val_55401 === (4))){
var inst_55382 = (state_55400[(8)]);
var state_55400__$1 = state_55400;
if(cljs.core.truth_(inst_55382)){
var statearr_55404_56843 = state_55400__$1;
(statearr_55404_56843[(1)] = (6));

} else {
var statearr_55405_56844 = state_55400__$1;
(statearr_55405_56844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (6))){
var inst_55387 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55400__$1 = state_55400;
var statearr_55406_56845 = state_55400__$1;
(statearr_55406_56845[(2)] = inst_55387);

(statearr_55406_56845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (3))){
var inst_55384 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55400__$1 = state_55400;
var statearr_55407_56846 = state_55400__$1;
(statearr_55407_56846[(2)] = inst_55384);

(statearr_55407_56846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (2))){
var inst_55378 = (state_55400[(2)]);
var inst_55379 = cljs.core.__destructure_map(inst_55378);
var inst_55380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55379,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55379,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55379,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_55400__$1 = (function (){var statearr_55408 = state_55400;
(statearr_55408[(7)] = inst_55381);

(statearr_55408[(8)] = inst_55382);

return statearr_55408;
})();
if(cljs.core.truth_(inst_55380)){
var statearr_55409_56847 = state_55400__$1;
(statearr_55409_56847[(1)] = (3));

} else {
var statearr_55411_56848 = state_55400__$1;
(statearr_55411_56848[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (11))){
var inst_55394 = (state_55400[(2)]);
var state_55400__$1 = state_55400;
var statearr_55413_56849 = state_55400__$1;
(statearr_55413_56849[(2)] = inst_55394);

(statearr_55413_56849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (9))){
var inst_55381 = (state_55400[(7)]);
var inst_55390 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local-full-sync",inst_55381], 0));
var inst_55391 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55400__$1 = (function (){var statearr_55415 = state_55400;
(statearr_55415[(9)] = inst_55390);

return statearr_55415;
})();
var statearr_55416_56851 = state_55400__$1;
(statearr_55416_56851[(2)] = inst_55391);

(statearr_55416_56851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (5))){
var inst_55398 = (state_55400[(2)]);
var state_55400__$1 = state_55400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55400__$1,inst_55398);
} else {
if((state_val_55401 === (10))){
var state_55400__$1 = state_55400;
var statearr_55417_56852 = state_55400__$1;
(statearr_55417_56852[(2)] = null);

(statearr_55417_56852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55401 === (8))){
var inst_55396 = (state_55400[(2)]);
var state_55400__$1 = state_55400;
var statearr_55418_56853 = state_55400__$1;
(statearr_55418_56853[(2)] = inst_55396);

(statearr_55418_56853[(1)] = (5));


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
var statearr_55419 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55419[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55419[(1)] = (1));

return statearr_55419;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55400){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55400);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55420){var ex__27576__auto__ = e55420;
var statearr_55421_56854 = state_55400;
(statearr_55421_56854[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55400[(4)]))){
var statearr_55422_56855 = state_55400;
(statearr_55422_56855[(1)] = cljs.core.first((state_55400[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56856 = state_55400;
state_55400 = G__56856;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55400){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55424 = f__27596__auto__();
(statearr_55424[(6)] = c__27595__auto__);

return statearr_55424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local = (function (_next_state,p__55425){
var self__ = this;
var map__55426 = p__55425;
var map__55426__$1 = cljs.core.__destructure_map(map__55426);
var remote_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55426__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55501){
var state_val_55502 = (state_55501[(1)]);
if((state_val_55502 === (7))){
var inst_55442 = (state_55501[(2)]);
var state_55501__$1 = state_55501;
if(cljs.core.truth_(inst_55442)){
var statearr_55503_56857 = state_55501__$1;
(statearr_55503_56857[(1)] = (8));

} else {
var statearr_55506_56858 = state_55501__$1;
(statearr_55506_56858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (20))){
var inst_55497 = (state_55501[(2)]);
var state_55501__$1 = state_55501;
var statearr_55507_56859 = state_55501__$1;
(statearr_55507_56859[(2)] = inst_55497);

(statearr_55507_56859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (27))){
var inst_55452 = (state_55501[(7)]);
var state_55501__$1 = state_55501;
if(cljs.core.truth_(inst_55452)){
var statearr_55510_56860 = state_55501__$1;
(statearr_55510_56860[(1)] = (29));

} else {
var statearr_55511_56861 = state_55501__$1;
(statearr_55511_56861[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (1))){
var inst_55429 = (state_55501[(8)]);
var inst_55429__$1 = remote_val;
var inst_55430 = (inst_55429__$1 == null);
var state_55501__$1 = (function (){var statearr_55514 = state_55501;
(statearr_55514[(8)] = inst_55429__$1);

return statearr_55514;
})();
if(cljs.core.truth_(inst_55430)){
var statearr_55517_56862 = state_55501__$1;
(statearr_55517_56862[(1)] = (2));

} else {
var statearr_55518_56863 = state_55501__$1;
(statearr_55518_56863[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (24))){
var inst_55453 = (state_55501[(9)]);
var state_55501__$1 = state_55501;
if(cljs.core.truth_(inst_55453)){
var statearr_55519_56864 = state_55501__$1;
(statearr_55519_56864[(1)] = (26));

} else {
var statearr_55520_56865 = state_55501__$1;
(statearr_55520_56865[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (4))){
var inst_55435 = (state_55501[(10)]);
var inst_55435__$1 = (state_55501[(2)]);
var inst_55436 = (inst_55435__$1 == null);
var state_55501__$1 = (function (){var statearr_55522 = state_55501;
(statearr_55522[(10)] = inst_55435__$1);

return statearr_55522;
})();
if(cljs.core.truth_(inst_55436)){
var statearr_55523_56866 = state_55501__$1;
(statearr_55523_56866[(1)] = (5));

} else {
var statearr_55525_56867 = state_55501__$1;
(statearr_55525_56867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (15))){
var inst_55450 = (state_55501[(11)]);
var inst_55459 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),inst_55450);
var state_55501__$1 = state_55501;
var statearr_55526_56868 = state_55501__$1;
(statearr_55526_56868[(2)] = inst_55459);

(statearr_55526_56868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (21))){
var inst_55472 = (state_55501[(2)]);
var inst_55473 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_55474 = [true];
var inst_55475 = cljs.core.PersistentHashMap.fromArrays(inst_55473,inst_55474);
var state_55501__$1 = (function (){var statearr_55527 = state_55501;
(statearr_55527[(12)] = inst_55472);

return statearr_55527;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55501__$1,(22),self__.ops_chan,inst_55475);
} else {
if((state_val_55502 === (31))){
var inst_55491 = (state_55501[(2)]);
var state_55501__$1 = state_55501;
var statearr_55529_56869 = state_55501__$1;
(statearr_55529_56869[(2)] = inst_55491);

(statearr_55529_56869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (13))){
var inst_55450 = (state_55501[(11)]);
var state_55501__$1 = state_55501;
var statearr_55532_56870 = state_55501__$1;
(statearr_55532_56870[(2)] = inst_55450);

(statearr_55532_56870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (22))){
var inst_55477 = (state_55501[(2)]);
var inst_55478 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55501__$1 = (function (){var statearr_55533 = state_55501;
(statearr_55533[(13)] = inst_55477);

return statearr_55533;
})();
var statearr_55534_56871 = state_55501__$1;
(statearr_55534_56871[(2)] = inst_55478);

(statearr_55534_56871[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (29))){
var inst_55452 = (state_55501[(7)]);
var inst_55487 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local err",inst_55452], 0));
var inst_55488 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55501__$1 = (function (){var statearr_55535 = state_55501;
(statearr_55535[(14)] = inst_55487);

return statearr_55535;
})();
var statearr_55536_56872 = state_55501__$1;
(statearr_55536_56872[(2)] = inst_55488);

(statearr_55536_56872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (6))){
var inst_55435 = (state_55501[(10)]);
var inst_55439 = cljs.core.deref(self__._STAR_txid);
var inst_55440 = (inst_55435 <= inst_55439);
var state_55501__$1 = state_55501;
var statearr_55537_56873 = state_55501__$1;
(statearr_55537_56873[(2)] = inst_55440);

(statearr_55537_56873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (28))){
var inst_55493 = (state_55501[(2)]);
var state_55501__$1 = state_55501;
var statearr_55538_56874 = state_55501__$1;
(statearr_55538_56874[(2)] = inst_55493);

(statearr_55538_56874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (25))){
var inst_55495 = (state_55501[(2)]);
var state_55501__$1 = state_55501;
var statearr_55539_56875 = state_55501__$1;
(statearr_55539_56875[(2)] = inst_55495);

(statearr_55539_56875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (17))){
var inst_55462 = (state_55501[(2)]);
var state_55501__$1 = state_55501;
var statearr_55542_56876 = state_55501__$1;
(statearr_55542_56876[(2)] = inst_55462);

(statearr_55542_56876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (3))){
var inst_55429 = (state_55501[(8)]);
var inst_55433 = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(inst_55429);
var state_55501__$1 = state_55501;
var statearr_55543_56877 = state_55501__$1;
(statearr_55543_56877[(2)] = inst_55433);

(statearr_55543_56877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (12))){
var inst_55456 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55457 = cljs.core.deref(inst_55456);
var state_55501__$1 = state_55501;
if(cljs.core.truth_(inst_55457)){
var statearr_55544_56878 = state_55501__$1;
(statearr_55544_56878[(1)] = (15));

} else {
var statearr_55545_56879 = state_55501__$1;
(statearr_55545_56879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (2))){
var state_55501__$1 = state_55501;
var statearr_55546_56880 = state_55501__$1;
(statearr_55546_56880[(2)] = null);

(statearr_55546_56880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (23))){
var inst_55481 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55501__$1 = state_55501;
var statearr_55551_56881 = state_55501__$1;
(statearr_55551_56881[(2)] = inst_55481);

(statearr_55551_56881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (19))){
var inst_55451 = (state_55501[(15)]);
var state_55501__$1 = state_55501;
if(cljs.core.truth_(inst_55451)){
var statearr_55552_56882 = state_55501__$1;
(statearr_55552_56882[(1)] = (23));

} else {
var statearr_55553_56883 = state_55501__$1;
(statearr_55553_56883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (11))){
var inst_55450 = (state_55501[(11)]);
var inst_55449 = (state_55501[(2)]);
var inst_55450__$1 = cljs.core.__destructure_map(inst_55449);
var inst_55451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55450__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55450__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_55453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55450__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_55454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55450__$1,new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586));
var state_55501__$1 = (function (){var statearr_55557 = state_55501;
(statearr_55557[(11)] = inst_55450__$1);

(statearr_55557[(15)] = inst_55451);

(statearr_55557[(7)] = inst_55452);

(statearr_55557[(16)] = inst_55454);

(statearr_55557[(9)] = inst_55453);

return statearr_55557;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55558_56884 = state_55501__$1;
(statearr_55558_56884[(1)] = (12));

} else {
var statearr_55559_56885 = state_55501__$1;
(statearr_55559_56885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (9))){
var inst_55447 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(null);
var state_55501__$1 = state_55501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55501__$1,(11),inst_55447);
} else {
if((state_val_55502 === (5))){
var state_55501__$1 = state_55501;
var statearr_55562_56886 = state_55501__$1;
(statearr_55562_56886[(2)] = null);

(statearr_55562_56886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (14))){
var inst_55454 = (state_55501[(16)]);
var inst_55465 = (state_55501[(2)]);
var state_55501__$1 = (function (){var statearr_55565 = state_55501;
(statearr_55565[(17)] = inst_55465);

return statearr_55565;
})();
if(cljs.core.truth_(inst_55454)){
var statearr_55566_56887 = state_55501__$1;
(statearr_55566_56887[(1)] = (18));

} else {
var statearr_55567_56888 = state_55501__$1;
(statearr_55567_56888[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (26))){
var inst_55484 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_55501__$1 = state_55501;
var statearr_55568_56889 = state_55501__$1;
(statearr_55568_56889[(2)] = inst_55484);

(statearr_55568_56889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (16))){
var inst_55450 = (state_55501[(11)]);
var state_55501__$1 = state_55501;
var statearr_55572_56890 = state_55501__$1;
(statearr_55572_56890[(2)] = inst_55450);

(statearr_55572_56890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (30))){
var state_55501__$1 = state_55501;
var statearr_55573_56891 = state_55501__$1;
(statearr_55573_56891[(2)] = null);

(statearr_55573_56891[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55502 === (10))){
var inst_55499 = (state_55501[(2)]);
var state_55501__$1 = state_55501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55501__$1,inst_55499);
} else {
if((state_val_55502 === (18))){
var inst_55467 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55468 = [new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000)];
var inst_55469 = [true];
var inst_55470 = cljs.core.PersistentHashMap.fromArrays(inst_55468,inst_55469);
var state_55501__$1 = (function (){var statearr_55576 = state_55501;
(statearr_55576[(18)] = inst_55467);

return statearr_55576;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55501__$1,(21),self__.ops_chan,inst_55470);
} else {
if((state_val_55502 === (8))){
var inst_55444 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55501__$1 = state_55501;
var statearr_55577_56892 = state_55501__$1;
(statearr_55577_56892[(2)] = inst_55444);

(statearr_55577_56892[(1)] = (10));


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
var statearr_55578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55578[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55578[(1)] = (1));

return statearr_55578;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55501){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55501);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55579){var ex__27576__auto__ = e55579;
var statearr_55580_56893 = state_55501;
(statearr_55580_56893[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55501[(4)]))){
var statearr_55581_56894 = state_55501;
(statearr_55581_56894[(1)] = cljs.core.first((state_55501[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56895 = state_55501;
state_55501 = G__56895;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55501){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55582 = f__27596__auto__();
(statearr_55582[(6)] = c__27595__auto__);

return statearr_55582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.local__GT_remote = (function (p__55585){
var self__ = this;
var map__55586 = p__55585;
var map__55586__$1 = cljs.core.__destructure_map(map__55586);
var local_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55586__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var this$ = this;
if((!((local_change == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_change),"\n","(some? local-change)"].join('')));
}

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55647){
var state_val_55648 = (state_55647[(1)]);
if((state_val_55648 === (7))){
var inst_55598 = (state_55647[(7)]);
var state_55647__$1 = state_55647;
var statearr_55653_56896 = state_55647__$1;
(statearr_55653_56896[(2)] = inst_55598);

(statearr_55653_56896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (1))){
var inst_55592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55593 = [local_change];
var inst_55594 = (new cljs.core.PersistentVector(null,1,(5),inst_55592,inst_55593,null));
var inst_55595 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_55594);
var state_55647__$1 = state_55647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55647__$1,(2),inst_55595);
} else {
if((state_val_55648 === (4))){
var inst_55598 = (state_55647[(7)]);
var state_55647__$1 = state_55647;
var statearr_55657_56897 = state_55647__$1;
(statearr_55657_56897[(2)] = inst_55598);

(statearr_55657_56897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (15))){
var inst_55625 = (state_55647[(2)]);
var inst_55626 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_55627 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_55628 = [local_change];
var inst_55629 = cljs.core.PersistentHashMap.fromArrays(inst_55627,inst_55628);
var inst_55630 = [inst_55629];
var inst_55631 = cljs.core.PersistentHashMap.fromArrays(inst_55626,inst_55630);
var state_55647__$1 = (function (){var statearr_55658 = state_55647;
(statearr_55658[(8)] = inst_55625);

return statearr_55658;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55647__$1,(16),self__.ops_chan,inst_55631);
} else {
if((state_val_55648 === (13))){
var inst_55601 = (state_55647[(9)]);
var state_55647__$1 = state_55647;
if(cljs.core.truth_(inst_55601)){
var statearr_55659_56898 = state_55647__$1;
(statearr_55659_56898[(1)] = (17));

} else {
var statearr_55662_56899 = state_55647__$1;
(statearr_55662_56899[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (6))){
var inst_55598 = (state_55647[(7)]);
var inst_55606 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_55598);
var state_55647__$1 = state_55647;
var statearr_55665_56900 = state_55647__$1;
(statearr_55665_56900[(2)] = inst_55606);

(statearr_55665_56900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (17))){
var inst_55601 = (state_55647[(9)]);
var inst_55637 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local->remote",inst_55601], 0));
var inst_55638 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55647__$1 = (function (){var statearr_55666 = state_55647;
(statearr_55666[(10)] = inst_55637);

return statearr_55666;
})();
var statearr_55667_56901 = state_55647__$1;
(statearr_55667_56901[(2)] = inst_55638);

(statearr_55667_56901[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (3))){
var inst_55603 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_55604 = cljs.core.deref(inst_55603);
var state_55647__$1 = state_55647;
if(cljs.core.truth_(inst_55604)){
var statearr_55668_56902 = state_55647__$1;
(statearr_55668_56902[(1)] = (6));

} else {
var statearr_55669_56903 = state_55647__$1;
(statearr_55669_56903[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (12))){
var inst_55617 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_55621 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_55622 = [true];
var inst_55623 = cljs.core.PersistentHashMap.fromArrays(inst_55621,inst_55622);
var state_55647__$1 = (function (){var statearr_55670 = state_55647;
(statearr_55670[(11)] = inst_55617);

return statearr_55670;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55647__$1,(15),self__.ops_chan,inst_55623);
} else {
if((state_val_55648 === (2))){
var inst_55598 = (state_55647[(7)]);
var inst_55597 = (state_55647[(2)]);
var inst_55598__$1 = cljs.core.__destructure_map(inst_55597);
var inst_55599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55598__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_55600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55598__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_55601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55598__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_55647__$1 = (function (){var statearr_55671 = state_55647;
(statearr_55671[(12)] = inst_55600);

(statearr_55671[(7)] = inst_55598__$1);

(statearr_55671[(13)] = inst_55599);

(statearr_55671[(9)] = inst_55601);

return statearr_55671;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_55672_56904 = state_55647__$1;
(statearr_55672_56904[(1)] = (3));

} else {
var statearr_55673_56905 = state_55647__$1;
(statearr_55673_56905[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (19))){
var inst_55641 = (state_55647[(2)]);
var state_55647__$1 = state_55647;
var statearr_55674_56906 = state_55647__$1;
(statearr_55674_56906[(2)] = inst_55641);

(statearr_55674_56906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (11))){
var inst_55645 = (state_55647[(2)]);
var state_55647__$1 = state_55647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55647__$1,inst_55645);
} else {
if((state_val_55648 === (9))){
var inst_55614 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55647__$1 = state_55647;
var statearr_55675_56907 = state_55647__$1;
(statearr_55675_56907[(2)] = inst_55614);

(statearr_55675_56907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (5))){
var inst_55599 = (state_55647[(13)]);
var inst_55612 = (state_55647[(2)]);
var state_55647__$1 = (function (){var statearr_55676 = state_55647;
(statearr_55676[(14)] = inst_55612);

return statearr_55676;
})();
if(cljs.core.truth_(inst_55599)){
var statearr_55677_56908 = state_55647__$1;
(statearr_55677_56908[(1)] = (9));

} else {
var statearr_55678_56909 = state_55647__$1;
(statearr_55678_56909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (14))){
var inst_55643 = (state_55647[(2)]);
var state_55647__$1 = state_55647;
var statearr_55679_56910 = state_55647__$1;
(statearr_55679_56910[(2)] = inst_55643);

(statearr_55679_56910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (16))){
var inst_55633 = (state_55647[(2)]);
var inst_55634 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_55647__$1 = (function (){var statearr_55680 = state_55647;
(statearr_55680[(15)] = inst_55633);

return statearr_55680;
})();
var statearr_55681_56911 = state_55647__$1;
(statearr_55681_56911[(2)] = inst_55634);

(statearr_55681_56911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (10))){
var inst_55600 = (state_55647[(12)]);
var state_55647__$1 = state_55647;
if(cljs.core.truth_(inst_55600)){
var statearr_55682_56912 = state_55647__$1;
(statearr_55682_56912[(1)] = (12));

} else {
var statearr_55683_56913 = state_55647__$1;
(statearr_55683_56913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (18))){
var state_55647__$1 = state_55647;
var statearr_55684_56914 = state_55647__$1;
(statearr_55684_56914[(2)] = null);

(statearr_55684_56914[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55648 === (8))){
var inst_55609 = (state_55647[(2)]);
var state_55647__$1 = state_55647;
var statearr_55687_56915 = state_55647__$1;
(statearr_55687_56915[(2)] = inst_55609);

(statearr_55687_56915[(1)] = (5));


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
var statearr_55693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55693[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_55693[(1)] = (1));

return statearr_55693;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_55647){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55647);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55697){var ex__27576__auto__ = e55697;
var statearr_55699_56916 = state_55647;
(statearr_55699_56916[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55647[(4)]))){
var statearr_55701_56917 = state_55647;
(statearr_55701_56917[(1)] = cljs.core.first((state_55647[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56918 = state_55647;
state_55647 = G__56918;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_55647){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_55647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55707 = f__27596__auto__();
(statearr_55707[(6)] = c__27595__auto__);

return statearr_55707;
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k54830,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__55713 = k54830;
var G__55713__$1 = (((G__55713 instanceof cljs.core.Keyword))?G__55713.fqn:null);
switch (G__55713__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54830,else__5343__auto__);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__55719){
var vec__55720 = p__55719;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55720,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55720,(1),null);
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54829){
var self__ = this;
var G__54829__$1 = this;
return (new cljs.core.RecordIter((0),G__54829__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54831,other54832){
var self__ = this;
var this54831__$1 = this;
return (((!((other54832 == null)))) && ((((this54831__$1.constructor === other54832.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.graph_uuid,other54832.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.base_path,other54832.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1._STAR_sync_state,other54832._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.local__GT_remote_syncer,other54832.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.remote__GT_local_syncer,other54832.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.full_sync_chan,other54832.full_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.stop_sync_chan,other54832.stop_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.remote__GT_local_sync_chan,other54832.remote__GT_local_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.local__GT_remote_sync_chan,other54832.local__GT_remote_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.local_changes_chan,other54832.local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.ratelimit_local_changes_chan,other54832.ratelimit_local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1._STAR_txid,other54832._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.state,other54832.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1._remote_change_chan,other54832._remote_change_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.__STAR_ws,other54832.__STAR_ws)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.stopped,other54832.stopped)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.ops_chan,other54832.ops_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54831__$1.__extmap,other54832.__extmap)))))))))))))))))))))))))))))))))))))));
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k54830){
var self__ = this;
var this__5347__auto____$1 = this;
var G__55734 = k54830;
var G__55734__$1 = (((G__55734 instanceof cljs.core.Keyword))?G__55734.fqn:null);
switch (G__55734__$1) {
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
return cljs.core.contains_QMARK_(self__.__extmap,k54830);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__54829){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__55735 = cljs.core.keyword_identical_QMARK_;
var expr__55736 = k__5349__auto__;
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__55736)))){
return (new frontend.fs.sync.SyncManager(G__54829,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,G__54829,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,G__54829,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,G__54829,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__54829,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,G__54829,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,G__54829,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,G__54829,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,G__54829,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,G__54829,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,G__54829,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,G__54829,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,G__54829,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,G__54829,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,G__54829,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,G__54829,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55735.cljs$core$IFn$_invoke$arity$2 ? pred__55735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__55736) : pred__55735.call(null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__55736)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,G__54829,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__54829),null));
}
}
}
}
}
}
}
}
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

(frontend.fs.sync.SyncManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__54829){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,G__54829,self__.__extmap,self__.__hash));
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
frontend.fs.sync.map__GT_SyncManager = (function frontend$fs$sync$map__GT_SyncManager(G__54833){
var extmap__5382__auto__ = (function (){var G__55740 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54833,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], 0));
if(cljs.core.record_QMARK_(G__54833)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55740);
} else {
return G__55740;
}
})();
return (new frontend.fs.sync.SyncManager(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__54833),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587).cljs$core$IFn$_invoke$arity$1(G__54833),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55758){
var state_val_55759 = (state_55758[(1)]);
if((state_val_55759 === (1))){
var inst_55743 = (function (){return (function (p1__55742_SHARP_){
return cljs.core.contains_QMARK_(p1__55742_SHARP_,local_graph_uuid);
});
})();
var inst_55744 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_55758__$1 = (function (){var statearr_55764 = state_55758;
(statearr_55764[(7)] = inst_55743);

return statearr_55764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55758__$1,(2),inst_55744);
} else {
if((state_val_55759 === (2))){
var inst_55750 = (state_55758[(8)]);
var inst_55743 = (state_55758[(7)]);
var inst_55746 = (state_55758[(2)]);
var inst_55747 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_55746);
var inst_55748 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),inst_55747);
var inst_55749 = cljs.core.set(inst_55748);
var inst_55750__$1 = (inst_55743.cljs$core$IFn$_invoke$arity$1 ? inst_55743.cljs$core$IFn$_invoke$arity$1(inst_55749) : inst_55743.call(null,inst_55749));
var state_55758__$1 = (function (){var statearr_55765 = state_55758;
(statearr_55765[(8)] = inst_55750__$1);

return statearr_55765;
})();
if(cljs.core.truth_(inst_55750__$1)){
var statearr_55766_56927 = state_55758__$1;
(statearr_55766_56927[(1)] = (3));

} else {
var statearr_55767_56928 = state_55758__$1;
(statearr_55767_56928[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55759 === (3))){
var state_55758__$1 = state_55758;
var statearr_55768_56929 = state_55758__$1;
(statearr_55768_56929[(2)] = null);

(statearr_55768_56929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55759 === (4))){
var inst_55753 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","graph-deleted","file-sync/graph-deleted",110500245)], 0));
var inst_55754 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55753,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
var state_55758__$1 = state_55758;
var statearr_55769_56933 = state_55758__$1;
(statearr_55769_56933[(2)] = inst_55754);

(statearr_55769_56933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55759 === (5))){
var inst_55750 = (state_55758[(8)]);
var inst_55756 = (state_55758[(2)]);
var state_55758__$1 = (function (){var statearr_55770 = state_55758;
(statearr_55770[(9)] = inst_55756);

return statearr_55770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55758__$1,inst_55750);
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
var statearr_55771 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55771[(0)] = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__);

(statearr_55771[(1)] = (1));

return statearr_55771;
});
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1 = (function (state_55758){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55758);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55772){var ex__27576__auto__ = e55772;
var statearr_55773_56934 = state_55758;
(statearr_55773_56934[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55758[(4)]))){
var statearr_55774_56935 = state_55758;
(statearr_55774_56935[(1)] = cljs.core.first((state_55758[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56936 = state_55758;
state_55758 = G__56936;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__ = function(state_55758){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1.call(this,state_55758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55775 = f__27596__auto__();
(statearr_55775[(6)] = c__27595__auto__);

return statearr_55775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.sync_start = (function frontend$fs$sync$sync_start(){
var vec__55776 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55776,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55776,(1),null);
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55776,(2),null);
var _STAR_sync_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.sync_state());
var current_user_uuid = frontend.handler.user.user_uuid();
var repo = frontend.state.get_current_repo();
var sm = frontend.fs.sync.sync_manager(current_user_uuid,graph_uuid,frontend.config.get_repo_dir(repo),repo,txid,_STAR_sync_state,frontend.fs.sync.full_sync_chan,frontend.fs.sync.stop_sync_chan,frontend.fs.sync.remote__GT_local_sync_chan,frontend.fs.sync.local__GT_remote_sync_chan,frontend.fs.sync.local_changes_chan);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55825){
var state_val_55826 = (state_55825[(1)]);
if((state_val_55826 === (7))){
var inst_55821 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
var statearr_55828_56937 = state_55825__$1;
(statearr_55828_56937[(2)] = inst_55821);

(statearr_55828_56937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (1))){
var inst_55779 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_55780 = cljs.core.count(inst_55779);
var inst_55781 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((3),inst_55780);
var state_55825__$1 = state_55825;
if(inst_55781){
var statearr_55829_56938 = state_55825__$1;
(statearr_55829_56938[(1)] = (2));

} else {
var statearr_55830_56942 = state_55825__$1;
(statearr_55830_56942[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (4))){
var inst_55823 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55825__$1,inst_55823);
} else {
if((state_val_55826 === (6))){
var state_55825__$1 = state_55825;
var statearr_55831_56943 = state_55825__$1;
(statearr_55831_56943[(2)] = null);

(statearr_55831_56943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (3))){
var inst_55786 = frontend.fs.sync.check_graph_belong_to_current_user(current_user_uuid,user_uuid);
var state_55825__$1 = state_55825;
if(inst_55786){
var statearr_55832_56944 = state_55825__$1;
(statearr_55832_56944[(1)] = (5));

} else {
var statearr_55834_56945 = state_55825__$1;
(statearr_55834_56945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (12))){
var inst_55802 = (state_55825[(2)]);
var inst_55803 = frontend.fs.sync.drain_chan(frontend.fs.sync.local_changes_chan);
var inst_55804 = cljs.core.async.poll_BANG_(frontend.fs.sync.stop_sync_chan);
var inst_55805 = cljs.core.async.poll_BANG_(frontend.fs.sync.remote__GT_local_sync_chan);
var inst_55806 = (function (){return (function (_,___$1,___$2,n){
return frontend.state.set_file_sync_state(n);
});
})();
var inst_55807 = cljs.core.add_watch(_STAR_sync_state,new cljs.core.Keyword("frontend.fs.sync","update-global-state","frontend.fs.sync/update-global-state",-739606169),inst_55806);
var inst_55808 = sm.start();
var inst_55809 = cljs.core.async.offer_BANG_(frontend.fs.sync.remote__GT_local_sync_chan,true);
var inst_55810 = cljs.core.async.offer_BANG_(frontend.fs.sync.full_sync_chan,true);
var inst_55811 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("network","online?","network/online?",1306822774));
var inst_55812 = (function (){return (function (_k,_r,_o,n){
if(n === false){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_55813 = cljs.core.add_watch(inst_55811,"sync-manage",inst_55812);
var inst_55814 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var inst_55815 = (function (){return (function (_k,_r,_o,n){
if((n == null)){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_55816 = cljs.core.add_watch(inst_55814,"sync-manage",inst_55815);
var state_55825__$1 = (function (){var statearr_55836 = state_55825;
(statearr_55836[(7)] = inst_55804);

(statearr_55836[(8)] = inst_55808);

(statearr_55836[(9)] = inst_55802);

(statearr_55836[(10)] = inst_55803);

(statearr_55836[(11)] = inst_55805);

(statearr_55836[(12)] = inst_55809);

(statearr_55836[(13)] = inst_55810);

(statearr_55836[(14)] = inst_55807);

(statearr_55836[(15)] = inst_55813);

return statearr_55836;
})();
var statearr_55838_56946 = state_55825__$1;
(statearr_55838_56946[(2)] = inst_55816);

(statearr_55838_56946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (2))){
var inst_55783 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var inst_55784 = frontend.state.set_file_sync_state(null);
var state_55825__$1 = (function (){var statearr_55839 = state_55825;
(statearr_55839[(16)] = inst_55783);

return statearr_55839;
})();
var statearr_55840_56947 = state_55825__$1;
(statearr_55840_56947[(2)] = inst_55784);

(statearr_55840_56947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (11))){
var inst_55818 = (state_55825[(2)]);
var state_55825__$1 = state_55825;
var statearr_55841_56948 = state_55825__$1;
(statearr_55841_56948[(2)] = inst_55818);

(statearr_55841_56948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (9))){
var inst_55794 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var state_55825__$1 = state_55825;
var statearr_55846_56949 = state_55825__$1;
(statearr_55846_56949[(2)] = inst_55794);

(statearr_55846_56949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55826 === (5))){
var inst_55788 = frontend.fs.sync.check_remote_graph_exists(graph_uuid);
var state_55825__$1 = state_55825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55825__$1,(8),inst_55788);
} else {
if((state_val_55826 === (10))){
var inst_55796 = frontend.fs.sync.set_env(frontend.fs.sync.rsapi,frontend.config.FILE_SYNC_PROD_QMARK_);
var inst_55797 = cljs.core.deref(_STAR_sync_state);
var inst_55798 = frontend.state.set_file_sync_state(inst_55797);
var inst_55799 = frontend.state.set_file_sync_manager(sm);
var inst_55800 = cljs.core.async.timeout((5000));
var state_55825__$1 = (function (){var statearr_55847 = state_55825;
(statearr_55847[(17)] = inst_55796);

(statearr_55847[(18)] = inst_55799);

(statearr_55847[(19)] = inst_55798);

return statearr_55847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55825__$1,(12),inst_55800);
} else {
if((state_val_55826 === (8))){
var inst_55790 = (state_55825[(2)]);
var inst_55791 = cljs.core.not(inst_55790);
var state_55825__$1 = state_55825;
if(inst_55791){
var statearr_55849_56950 = state_55825__$1;
(statearr_55849_56950[(1)] = (9));

} else {
var statearr_55850_56951 = state_55825__$1;
(statearr_55850_56951[(1)] = (10));

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
var statearr_55852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55852[(0)] = frontend$fs$sync$sync_start_$_state_machine__27573__auto__);

(statearr_55852[(1)] = (1));

return statearr_55852;
});
var frontend$fs$sync$sync_start_$_state_machine__27573__auto____1 = (function (state_55825){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55825);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55853){var ex__27576__auto__ = e55853;
var statearr_55854_56952 = state_55825;
(statearr_55854_56952[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55825[(4)]))){
var statearr_55856_56954 = state_55825;
(statearr_55856_56954[(1)] = cljs.core.first((state_55825[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56955 = state_55825;
state_55825 = G__56955;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$sync_start_$_state_machine__27573__auto__ = function(state_55825){
switch(arguments.length){
case 0:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____1.call(this,state_55825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____0;
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____1;
return frontend$fs$sync$sync_start_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55858 = f__27596__auto__();
(statearr_55858[(6)] = c__27595__auto__);

return statearr_55858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.fs.sync.js.map
