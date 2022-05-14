goog.provide('rewrite_cljc.zip.seqz');
/**
 * Returns true if current node in `zloc` is a sequence.
 */
rewrite_cljc.zip.seqz.seq_QMARK_ = (function rewrite_cljc$zip$seqz$seq_QMARK_(zloc){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"forms","forms",2045992350),null], null), null),rewrite_cljc.zip.base.tag(zloc));
});
/**
 * Returns true if current node in `zloc` is a list.
 */
rewrite_cljc.zip.seqz.list_QMARK_ = (function rewrite_cljc$zip$seqz$list_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(zloc),new cljs.core.Keyword(null,"list","list",765357683));
});
/**
 * Returns true if current node in `zloc` is a vector.
 */
rewrite_cljc.zip.seqz.vector_QMARK_ = (function rewrite_cljc$zip$seqz$vector_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(zloc),new cljs.core.Keyword(null,"vector","vector",1902966158));
});
/**
 * Returns true if current node in `zloc` is a set.
 */
rewrite_cljc.zip.seqz.set_QMARK_ = (function rewrite_cljc$zip$seqz$set_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(zloc),new cljs.core.Keyword(null,"set","set",304602554));
});
/**
 * Returns true if current node in `zloc` is a map.
 */
rewrite_cljc.zip.seqz.map_QMARK_ = (function rewrite_cljc$zip$seqz$map_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_cljc.zip.base.tag(zloc),new cljs.core.Keyword(null,"map","map",1371690461));
});
rewrite_cljc.zip.seqz.map_seq = (function rewrite_cljc$zip$seqz$map_seq(f,zloc){
if(rewrite_cljc.zip.seqz.seq_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

var temp__5718__auto__ = rewrite_cljc.zip.move.down(zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var n0 = temp__5718__auto__;
var G__94571 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n0) : f.call(null,n0));
var G__94571__$1 = (((G__94571 == null))?null:cljs.core.iterate((function (loc){
var temp__5720__auto__ = rewrite_cljc.zip.move.right(loc);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n));
} else {
return null;
}
}),G__94571));
var G__94571__$2 = (((G__94571__$1 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__94571__$1));
var G__94571__$3 = (((G__94571__$2 == null))?null:cljs.core.last(G__94571__$2));
if((G__94571__$3 == null)){
return null;
} else {
return rewrite_cljc.zip.move.up(G__94571__$3);
}
} else {
return zloc;
}
});
/**
 * Returns zipper with function `f` applied to all value current node in `zloc`.
 * Current node must be map node.
 */
rewrite_cljc.zip.seqz.map_vals = (function rewrite_cljc$zip$seqz$map_vals(f,zloc){
if(rewrite_cljc.zip.seqz.map_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_cljc.zip.move.down(zloc);
var parent = zloc;
while(true){
if(cljs.core.not((function (){var and__4251__auto__ = loc;
if(cljs.core.truth_(and__4251__auto__)){
return rewrite_cljc.custom_zipper.core.node(loc);
} else {
return and__4251__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = rewrite_cljc.zip.move.right(loc);
if(cljs.core.truth_(temp__5718__auto__)){
var v0 = temp__5718__auto__;
var temp__5718__auto____$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
if(cljs.core.truth_(temp__5718__auto____$1)){
var v = temp__5718__auto____$1;
var G__94584 = rewrite_cljc.zip.move.right(v);
var G__94585 = rewrite_cljc.zip.move.up(v);
loc = G__94584;
parent = G__94585;
continue;
} else {
var G__94586 = rewrite_cljc.zip.move.right(v0);
var G__94587 = parent;
loc = G__94586;
parent = G__94587;
continue;
}
} else {
return parent;
}
}
break;
}
});
/**
 * Returns zipper with function `f` applied to all key nodes of the current node in `zloc`.
 * Current node must be map node.
 */
rewrite_cljc.zip.seqz.map_keys = (function rewrite_cljc$zip$seqz$map_keys(f,zloc){
if(rewrite_cljc.zip.seqz.map_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (map? zloc)"));
}

var loc = rewrite_cljc.zip.move.down(zloc);
var parent = zloc;
while(true){
if(cljs.core.not((function (){var and__4251__auto__ = loc;
if(cljs.core.truth_(and__4251__auto__)){
return rewrite_cljc.custom_zipper.core.node(loc);
} else {
return and__4251__auto__;
}
})())){
return parent;
} else {
var temp__5718__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var G__94588 = rewrite_cljc.zip.move.right(rewrite_cljc.zip.move.right(v));
var G__94589 = rewrite_cljc.zip.move.up(v);
loc = G__94588;
parent = G__94589;
continue;
} else {
var G__94590 = rewrite_cljc.zip.move.right(rewrite_cljc.zip.move.right(loc));
var G__94591 = parent;
loc = G__94590;
parent = G__94591;
continue;
}
}
break;
}
});
/**
 * Returns zipper with function `f` applied to all value nodes of current node in `zloc`.
 * Current node must be a sequence node.
 * 
 * Iterates over:
 * - value nodes of maps
 * - each element of a seq
 */
rewrite_cljc.zip.seqz.map = (function rewrite_cljc$zip$seqz$map(f,zloc){
if(rewrite_cljc.zip.seqz.seq_QMARK_(zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

if(rewrite_cljc.zip.seqz.map_QMARK_(zloc)){
return rewrite_cljc.zip.seqz.map_vals(f,zloc);
} else {
return rewrite_cljc.zip.seqz.map_seq(f,zloc);
}
});
/**
 * Returns value node mapped to key `k` when current node in `zloc` is a map node.
 * Returns nth `k` value node when current node in `zloc` is a sequence node.
 */
rewrite_cljc.zip.seqz.get = (function rewrite_cljc$zip$seqz$get(zloc,k){
if(((rewrite_cljc.zip.seqz.map_QMARK_(zloc)) || (((rewrite_cljc.zip.seqz.seq_QMARK_(zloc)) && (cljs.core.integer_QMARK_(k)))))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (and (seq? zloc) (integer? k)))"));
}

if(rewrite_cljc.zip.seqz.map_QMARK_(zloc)){
var G__94577 = zloc;
var G__94577__$1 = (((G__94577 == null))?null:rewrite_cljc.zip.move.down(G__94577));
var G__94577__$2 = (((G__94577__$1 == null))?null:rewrite_cljc.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2(G__94577__$1,k));
if((G__94577__$2 == null)){
return null;
} else {
return rewrite_cljc.zip.move.right(G__94577__$2);
}
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__94581 = rewrite_cljc.zip.move.down(zloc);
var G__94581__$1 = (((G__94581 == null))?null:cljs.core.iterate(rewrite_cljc.zip.move.right,G__94581));
if((G__94581__$1 == null)){
return null;
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,G__94581__$1);
}
})(),k);
}
});
/**
 * Returns zipper with key `k` set to value `v` when current node in `zloc` is a map node.
 * Returns zipper with index `k` set to value `v` when current node in `zloc` is a sequence.
 */
rewrite_cljc.zip.seqz.assoc = (function rewrite_cljc$zip$seqz$assoc(zloc,k,v){
var temp__5718__auto__ = rewrite_cljc.zip.seqz.get(zloc,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vloc = temp__5718__auto__;
return rewrite_cljc.zip.move.up(rewrite_cljc.zip.editz.replace(vloc,v));
} else {
if(rewrite_cljc.zip.seqz.map_QMARK_(zloc)){
return rewrite_cljc.zip.insert.append_child(rewrite_cljc.zip.insert.append_child(zloc,k),v);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});

//# sourceMappingURL=rewrite_cljc.zip.seqz.js.map
