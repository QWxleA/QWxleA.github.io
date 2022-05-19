goog.provide('frontend.db.utils');
frontend.db.utils.db__GT_string = (function frontend$db$utils$db__GT_string(db){
return datascript.transit.write_transit_str(db);
});
frontend.db.utils.db__GT_json = (function frontend$db$utils$db__GT_json(db){
return JSON.stringify(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function frontend$db$utils$db__GT_json_$_iter__63417(s__63418){
return (new cljs.core.LazySeq(null,(function (){
var s__63418__$1 = s__63418;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__63418__$1);
if(temp__5720__auto__){
var s__63418__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63418__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__63418__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__63420 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__63419 = (0);
while(true){
if((i__63419 < size__4651__auto__)){
var d = cljs.core._nth(c__4650__auto__,i__63419);
cljs.core.chunk_append(b__63420,[new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d),cljs.core.name(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d)),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)]);

var G__63437 = (i__63419 + (1));
i__63419 = G__63437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63420),frontend$db$utils$db__GT_json_$_iter__63417(cljs.core.chunk_rest(s__63418__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63420),null);
}
} else {
var d = cljs.core.first(s__63418__$2);
return cljs.core.cons([new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d),cljs.core.name(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d)),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)],frontend$db$utils$db__GT_json_$_iter__63417(cljs.core.rest(s__63418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073)));
})()));
});
frontend.db.utils.db__GT_edn_str = (function frontend$db$utils$db__GT_edn_str(db){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0));
});
frontend.db.utils.string__GT_db = (function frontend$db$utils$string__GT_db(s){
return datascript.transit.read_transit_str(s);
});
frontend.db.utils.seq_flatten = (function frontend$db$utils$seq_flatten(col){
return cljs.core.flatten(cljs.core.seq(col));
});
frontend.db.utils.group_by_page = (function frontend$db$utils$group_by_page(blocks){
if(cljs.core.truth_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)))){
var G__63421 = blocks;
if((G__63421 == null)){
return null;
} else {
return cljs.core.group_by(new cljs.core.Keyword("block","page","block/page",822314108),G__63421);
}
} else {
return blocks;
}
});
frontend.db.utils.get_tx_id = (function frontend$db$utils$get_tx_id(tx_report){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null));
});
frontend.db.utils.get_max_tx_id = (function frontend$db$utils$get_max_tx_id(db){
return new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(db);
});
frontend.db.utils.date__GT_int = (function frontend$db$utils$date__GT_int(date){
return frontend.util.parse_int(clojure.string.replace(frontend.date.ymd.cljs$core$IFn$_invoke$arity$1(date),"/",""));
});
frontend.db.utils.entity = (function frontend$db$utils$entity(var_args){
var G__63423 = arguments.length;
switch (G__63423) {
case 1:
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$1 = (function (id_or_lookup_ref){
return frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),id_or_lookup_ref);
}));

(frontend.db.utils.entity.cljs$core$IFn$_invoke$arity$2 = (function (repo,id_or_lookup_ref){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id_or_lookup_ref) : datascript.core.entity.call(null,db,id_or_lookup_ref));
} else {
return null;
}
}));

(frontend.db.utils.entity.cljs$lang$maxFixedArity = 2);

frontend.db.utils.pull = (function frontend$db$utils$pull(var_args){
var G__63425 = arguments.length;
switch (G__63425) {
case 1:
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$1 = (function (eid){
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),eid);
}));

(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$2 = (function (selector,eid){
return frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),selector,eid);
}));

(frontend.db.utils.pull.cljs$core$IFn$_invoke$arity$3 = (function (repo,selector,eid){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
try{return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(db,selector,eid) : datascript.core.pull.call(null,db,selector,eid));
}catch (e63426){if((e63426 instanceof Error)){
var _e = e63426;
return null;
} else {
throw e63426;

}
}} else {
return null;
}
}));

(frontend.db.utils.pull.cljs$lang$maxFixedArity = 3);

frontend.db.utils.pull_many = (function frontend$db$utils$pull_many(var_args){
var G__63428 = arguments.length;
switch (G__63428) {
case 1:
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$1 = (function (eids){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),eids);
}));

(frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$2 = (function (selector,eids){
return frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),selector,eids);
}));

(frontend.db.utils.pull_many.cljs$core$IFn$_invoke$arity$3 = (function (repo,selector,eids){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
try{return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(db,selector,eids) : datascript.core.pull_many.call(null,db,selector,eids));
}catch (e63429){if((e63429 instanceof Error)){
var e = e63429;
return console.error(e);
} else {
throw e63429;

}
}} else {
return null;
}
}));

(frontend.db.utils.pull_many.cljs$lang$maxFixedArity = 3);

frontend.db.utils.transact_BANG_ = (function frontend$db$utils$transact_BANG_(var_args){
var G__63431 = arguments.length;
switch (G__63431) {
case 1:
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx_data){
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),tx_data);
}));

(frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,tx_data){
return frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$3(repo_url,tx_data,null);
}));

(frontend.db.utils.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,tx_data,tx_meta){
if(frontend.config.publishing_QMARK_){
return null;
} else {
var tx_data__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,logseq.graph_parser.util.remove_nils(tx_data));
if(cljs.core.seq(tx_data__$1)){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$2(repo_url,false);
if(cljs.core.truth_(temp__5720__auto__)){
var conn = temp__5720__auto__;
if(cljs.core.truth_(tx_meta)){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.vec(tx_data__$1),tx_meta);
} else {
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.vec(tx_data__$1));
}
} else {
return null;
}
} else {
return null;
}
}
}));

(frontend.db.utils.transact_BANG_.cljs$lang$maxFixedArity = 3);

frontend.db.utils.get_key_value = (function frontend$db$utils$get_key_value(var_args){
var G__63433 = arguments.length;
switch (G__63433) {
case 1:
return frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$1 = (function (key){
return frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),key);
}));

(frontend.db.utils.get_key_value.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,key){
var temp__5720__auto__ = frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo_url);
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
var G__63434 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,key) : datascript.core.entity.call(null,db,key));
if((G__63434 == null)){
return null;
} else {
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__63434) : key.call(null,G__63434));
}
} else {
return null;
}
}));

(frontend.db.utils.get_key_value.cljs$lang$maxFixedArity = 2);

frontend.db.utils.q = (function frontend$db$utils$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___63446 = arguments.length;
var i__4865__auto___63447 = (0);
while(true){
if((i__4865__auto___63447 < len__4864__auto___63446)){
args__4870__auto__.push((arguments[i__4865__auto___63447]));

var G__63448 = (i__4865__auto___63447 + (1));
i__4865__auto___63447 = G__63448;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return frontend.db.utils.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(frontend.db.utils.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,inputs){
var temp__5720__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5720__auto__)){
var repo = temp__5720__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,frontend.db.conn.get_db.cljs$core$IFn$_invoke$arity$1(repo),inputs);
} else {
return null;
}
}));

(frontend.db.utils.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.db.utils.q.cljs$lang$applyTo = (function (seq63435){
var G__63436 = cljs.core.first(seq63435);
var seq63435__$1 = cljs.core.next(seq63435);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63436,seq63435__$1);
}));


//# sourceMappingURL=frontend.db.utils.js.map
