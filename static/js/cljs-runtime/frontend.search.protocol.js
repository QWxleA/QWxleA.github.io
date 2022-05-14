goog.provide('frontend.search.protocol');

/**
 * @interface
 */
frontend.search.protocol.Engine = function(){};

var frontend$search$protocol$Engine$query$dyn_88424 = (function (this$,q,option){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.search.protocol.query[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,q,option) : m__4551__auto__.call(null,this$,q,option));
} else {
var m__4549__auto__ = (frontend.search.protocol.query["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,q,option) : m__4549__auto__.call(null,this$,q,option));
} else {
throw cljs.core.missing_protocol("Engine.query",this$);
}
}
});
frontend.search.protocol.query = (function frontend$search$protocol$query(this$,q,option){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$query$arity$3 == null)))))){
return this$.frontend$search$protocol$Engine$query$arity$3(this$,q,option);
} else {
return frontend$search$protocol$Engine$query$dyn_88424(this$,q,option);
}
});

var frontend$search$protocol$Engine$cache_stale_QMARK_$dyn_88425 = (function (this$,repo){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.search.protocol.cache_stale_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,repo) : m__4551__auto__.call(null,this$,repo));
} else {
var m__4549__auto__ = (frontend.search.protocol.cache_stale_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,repo) : m__4549__auto__.call(null,this$,repo));
} else {
throw cljs.core.missing_protocol("Engine.cache-stale?",this$);
}
}
});
frontend.search.protocol.cache_stale_QMARK_ = (function frontend$search$protocol$cache_stale_QMARK_(this$,repo){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$cache_stale_QMARK_$arity$2 == null)))))){
return this$.frontend$search$protocol$Engine$cache_stale_QMARK_$arity$2(this$,repo);
} else {
return frontend$search$protocol$Engine$cache_stale_QMARK_$dyn_88425(this$,repo);
}
});

var frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$dyn_88426 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.search.protocol.rebuild_blocks_indice_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.search.protocol.rebuild_blocks_indice_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Engine.rebuild-blocks-indice!",this$);
}
}
});
frontend.search.protocol.rebuild_blocks_indice_BANG_ = (function frontend$search$protocol$rebuild_blocks_indice_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 == null)))))){
return this$.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1(this$);
} else {
return frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$dyn_88426(this$);
}
});

var frontend$search$protocol$Engine$transact_blocks_BANG_$dyn_88427 = (function (this$,data){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.search.protocol.transact_blocks_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4551__auto__.call(null,this$,data));
} else {
var m__4549__auto__ = (frontend.search.protocol.transact_blocks_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__4549__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("Engine.transact-blocks!",this$);
}
}
});
frontend.search.protocol.transact_blocks_BANG_ = (function frontend$search$protocol$transact_blocks_BANG_(this$,data){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 == null)))))){
return this$.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2(this$,data);
} else {
return frontend$search$protocol$Engine$transact_blocks_BANG_$dyn_88427(this$,data);
}
});

var frontend$search$protocol$Engine$truncate_blocks_BANG_$dyn_88428 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.search.protocol.truncate_blocks_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.search.protocol.truncate_blocks_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Engine.truncate-blocks!",this$);
}
}
});
frontend.search.protocol.truncate_blocks_BANG_ = (function frontend$search$protocol$truncate_blocks_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 == null)))))){
return this$.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1(this$);
} else {
return frontend$search$protocol$Engine$truncate_blocks_BANG_$dyn_88428(this$);
}
});

var frontend$search$protocol$Engine$remove_db_BANG_$dyn_88435 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (frontend.search.protocol.remove_db_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (frontend.search.protocol.remove_db_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Engine.remove-db!",this$);
}
}
});
frontend.search.protocol.remove_db_BANG_ = (function frontend$search$protocol$remove_db_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 == null)))))){
return this$.frontend$search$protocol$Engine$remove_db_BANG_$arity$1(this$);
} else {
return frontend$search$protocol$Engine$remove_db_BANG_$dyn_88435(this$);
}
});


//# sourceMappingURL=frontend.search.protocol.js.map
