goog.provide('frontend.db.outliner');
frontend.db.outliner.get_by_id = (function frontend$db$outliner$get_by_id(conn,id){
try{var G__82599 = cljs.core.deref(conn);
var G__82600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__82602 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__82599,G__82600,G__82602) : datascript.core.pull.call(null,G__82599,G__82600,G__82602));
}catch (e82596){if((e82596 instanceof Error)){
var _e = e82596;
return null;
} else {
throw e82596;

}
}});
frontend.db.outliner.get_by_parent_id = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
frontend.db.outliner.del_block = (function frontend$db$outliner$del_block(conn,id_or_look_ref){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),id_or_look_ref], null)], null));
});

//# sourceMappingURL=frontend.db.outliner.js.map
