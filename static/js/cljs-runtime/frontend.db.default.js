goog.provide('frontend.db.default$');
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.default !== 'undefined') && (typeof frontend.db.default.built_in_pages_names !== 'undefined')){
} else {
frontend.db.default$.built_in_pages_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["TODO",null,"NOW",null,"LATER",null,"DONE",null,"DOING",null,"IN-PROGRESS",null,"C",null,"B",null,"Contents",null,"WAITING",null,"Favorites",null,"card",null,"A",null,"WAIT",null], null), null);
}
frontend.db.default$.built_in_pages = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","name","block/name",1619760316),clojure.string.lower_case(p),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),p,new cljs.core.Keyword("block","journal?","block/journal?",-970683127),false,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.random_uuid()], null);
}),frontend.db.default$.built_in_pages_names);

//# sourceMappingURL=frontend.db.default.js.map
