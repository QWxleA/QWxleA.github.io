goog.provide('reitit.core');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_91664 = (function (this$,opts){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.expand[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4551__auto__.call(null,this$,opts));
} else {
var m__4549__auto__ = (reitit.core.expand["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4549__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_91664(this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(reitit.core.Expand["function"] = true);

(reitit.core.expand["function"] = (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

(reitit.core.Expand["null"] = true);

(reitit.core.expand["null"] = (function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_91665 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.router_name[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (reitit.core.router_name["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_91665(this$);
}
});

var reitit$core$Router$routes$dyn_91666 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.routes[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (reitit.core.routes["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_91666(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_91667 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_91667(this$);
}
});

var reitit$core$Router$options$dyn_91668 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.options[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (reitit.core.options["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_91668(this$);
}
});

var reitit$core$Router$route_names$dyn_91670 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.route_names[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (reitit.core.route_names["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_91670(this$);
}
});

var reitit$core$Router$match_by_path$dyn_91671 = (function (this$,path){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4551__auto__.call(null,this$,path));
} else {
var m__4549__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4549__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_91671(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_91672 = (function() {
var G__91673 = null;
var G__91673__2 = (function (this$,name){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4551__auto__.call(null,this$,name));
} else {
var m__4549__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4549__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__91673__3 = (function (this$,name,path_params){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4551__auto__.call(null,this$,name,path_params));
} else {
var m__4549__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4549__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__91673 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__91673__2.call(this,this$,name);
case 3:
return G__91673__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__91673.cljs$core$IFn$_invoke$arity$2 = G__91673__2;
G__91673.cljs$core$IFn$_invoke$arity$3 = G__91673__3;
return G__91673;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__91302 = arguments.length;
switch (G__91302) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_91672(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_91672(this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k91307,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__91319 = k91307;
var G__91319__$1 = (((G__91319 instanceof cljs.core.Keyword))?G__91319.fqn:null);
switch (G__91319__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k91307,else__4505__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__91321){
var vec__91322 = p__91321;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91322,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91322,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#reitit.core.Match{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__91306){
var self__ = this;
var G__91306__$1 = this;
return (new cljs.core.RecordIter((0),G__91306__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this91308,other91309){
var self__ = this;
var this91308__$1 = this;
return (((!((other91309 == null)))) && ((((this91308__$1.constructor === other91309.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91308__$1.template,other91309.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91308__$1.data,other91309.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91308__$1.result,other91309.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91308__$1.path_params,other91309.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91308__$1.path,other91309.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91308__$1.__extmap,other91309.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k91307){
var self__ = this;
var this__4509__auto____$1 = this;
var G__91348 = k91307;
var G__91348__$1 = (((G__91348 instanceof cljs.core.Keyword))?G__91348.fqn:null);
switch (G__91348__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k91307);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__91306){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__91351 = cljs.core.keyword_identical_QMARK_;
var expr__91352 = k__4511__auto__;
if(cljs.core.truth_((pred__91351.cljs$core$IFn$_invoke$arity$2 ? pred__91351.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__91352) : pred__91351.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__91352)))){
return (new reitit.core.Match(G__91306,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91351.cljs$core$IFn$_invoke$arity$2 ? pred__91351.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__91352) : pred__91351.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__91352)))){
return (new reitit.core.Match(self__.template,G__91306,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91351.cljs$core$IFn$_invoke$arity$2 ? pred__91351.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__91352) : pred__91351.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__91352)))){
return (new reitit.core.Match(self__.template,self__.data,G__91306,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91351.cljs$core$IFn$_invoke$arity$2 ? pred__91351.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__91352) : pred__91351.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__91352)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__91306,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91351.cljs$core$IFn$_invoke$arity$2 ? pred__91351.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__91352) : pred__91351.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__91352)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__91306,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__91306),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__91306){
var self__ = this;
var this__4501__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__91306,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__91310){
var extmap__4542__auto__ = (function (){var G__91365 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__91310,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__91310)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__91365);
} else {
return G__91365;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__91310),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__91310),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__91310),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__91310),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__91310),null,cljs.core.not_empty(extmap__4542__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k91372,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__91382 = k91372;
var G__91382__$1 = (((G__91382 instanceof cljs.core.Keyword))?G__91382.fqn:null);
switch (G__91382__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k91372,else__4505__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__91387){
var vec__91388 = p__91387;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91388,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91388,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__91371){
var self__ = this;
var G__91371__$1 = this;
return (new cljs.core.RecordIter((0),G__91371__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this91373,other91374){
var self__ = this;
var this91373__$1 = this;
return (((!((other91374 == null)))) && ((((this91373__$1.constructor === other91374.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91373__$1.template,other91374.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91373__$1.data,other91374.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91373__$1.result,other91374.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91373__$1.path_params,other91374.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91373__$1.required,other91374.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91373__$1.__extmap,other91374.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k91372){
var self__ = this;
var this__4509__auto____$1 = this;
var G__91409 = k91372;
var G__91409__$1 = (((G__91409 instanceof cljs.core.Keyword))?G__91409.fqn:null);
switch (G__91409__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k91372);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__91371){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__91415 = cljs.core.keyword_identical_QMARK_;
var expr__91416 = k__4511__auto__;
if(cljs.core.truth_((pred__91415.cljs$core$IFn$_invoke$arity$2 ? pred__91415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__91416) : pred__91415.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__91416)))){
return (new reitit.core.PartialMatch(G__91371,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91415.cljs$core$IFn$_invoke$arity$2 ? pred__91415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__91416) : pred__91415.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__91416)))){
return (new reitit.core.PartialMatch(self__.template,G__91371,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91415.cljs$core$IFn$_invoke$arity$2 ? pred__91415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__91416) : pred__91415.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__91416)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__91371,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91415.cljs$core$IFn$_invoke$arity$2 ? pred__91415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__91416) : pred__91415.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__91416)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__91371,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__91415.cljs$core$IFn$_invoke$arity$2 ? pred__91415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__91416) : pred__91415.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__91416)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__91371,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__91371),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__91371){
var self__ = this;
var this__4501__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__91371,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__91376){
var extmap__4542__auto__ = (function (){var G__91440 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__91376,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__91376)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__91440);
} else {
return G__91440;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__91376),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__91376),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__91376),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__91376),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__91376),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__91457 = arguments.length;
switch (G__91457) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5718__auto__ = reitit.core.match_by_name(this$,name,path_params);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__91473 = arguments.length;
switch (G__91473) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__91480 = match;
var G__91480__$1 = (((G__91480 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__91480));
if((G__91480__$1 == null)){
return null;
} else {
var G__91481 = G__91480__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91481),"?",reitit.impl.query_string(query_params)].join('');
} else {
return G__91481;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__91493 = arguments.length;
switch (G__91493) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__91500 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91507,p__91508){
var vec__91509 = p__91507;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91509,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91509,(1),null);
var vec__91512 = p__91508;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91512,(0),null);
var map__91515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91512,(1),null);
var map__91515__$1 = cljs.core.__destructure_map(map__91515);
var data = map__91515__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91515__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91512,(2),null);
var map__91517 = reitit.impl.parse(p,opts);
var map__91517__$1 = cljs.core.__destructure_map(map__91517);
var route = map__91517__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91517__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__91487_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__91487_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__91487_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__91487_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91500,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91500,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core91522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core91522 = (function (matcher,names,compiled_routes,routes,lookup,pl,nl,vec__91500,match_by_path,compiler,opts,meta91523){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.vec__91500 = vec__91500;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta91523 = meta91523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core91522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91524,meta91523__$1){
var self__ = this;
var _91524__$1 = this;
return (new reitit.core.t_reitit$core91522(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.vec__91500,self__.match_by_path,self__.compiler,self__.opts,meta91523__$1));
}));

(reitit.core.t_reitit$core91522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91524){
var self__ = this;
var _91524__$1 = this;
return self__.meta91523;
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core91522.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__91528 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__91528) : match.call(null,G__91528));
} else {
return null;
}
}));

(reitit.core.t_reitit$core91522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"vec__91500","vec__91500",-666720838,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta91523","meta91523",-1199892285,null)], null);
}));

(reitit.core.t_reitit$core91522.cljs$lang$type = true);

(reitit.core.t_reitit$core91522.cljs$lang$ctorStr = "reitit.core/t_reitit$core91522");

(reitit.core.t_reitit$core91522.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reitit.core/t_reitit$core91522");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core91522.
 */
reitit.core.__GT_t_reitit$core91522 = (function reitit$core$__GT_t_reitit$core91522(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__91500__$1,match_by_path__$1,compiler__$1,opts__$1,meta91523){
return (new reitit.core.t_reitit$core91522(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__91500__$1,match_by_path__$1,compiler__$1,opts__$1,meta91523));
});

}

return (new reitit.core.t_reitit$core91522(matcher,names,compiled_routes,routes,lookup,pl,nl,vec__91500,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__91535 = arguments.length;
switch (G__91535) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5720__auto___91698 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5720__auto___91698){
var wilds_91700 = temp__5720__auto___91698;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_91700)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_91700,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__91538 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91541,p__91542){
var vec__91543 = p__91541;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91543,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91543,(1),null);
var vec__91546 = p__91542;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91546,(0),null);
var map__91549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91546,(1),null);
var map__91549__$1 = cljs.core.__destructure_map(map__91549);
var data = map__91549__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91546,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__91532_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__91532_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91538,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91538,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core91550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core91550 = (function (names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__91538,meta91551){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.vec__91538 = vec__91538;
this.meta91551 = meta91551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core91550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91552,meta91551__$1){
var self__ = this;
var _91552__$1 = this;
return (new reitit.core.t_reitit$core91550(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,self__.vec__91538,meta91551__$1));
}));

(reitit.core.t_reitit$core91550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91552){
var self__ = this;
var _91552__$1 = this;
return self__.meta91551;
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core91550.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__91554 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__91554) : match.call(null,G__91554));
} else {
return null;
}
}));

(reitit.core.t_reitit$core91550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__91538","vec__91538",-1472868546,null),new cljs.core.Symbol(null,"meta91551","meta91551",-1071682937,null)], null);
}));

(reitit.core.t_reitit$core91550.cljs$lang$type = true);

(reitit.core.t_reitit$core91550.cljs$lang$ctorStr = "reitit.core/t_reitit$core91550");

(reitit.core.t_reitit$core91550.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reitit.core/t_reitit$core91550");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core91550.
 */
reitit.core.__GT_t_reitit$core91550 = (function reitit$core$__GT_t_reitit$core91550(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__91538__$1,meta91551){
return (new reitit.core.t_reitit$core91550(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__91538__$1,meta91551));
});

}

return (new reitit.core.t_reitit$core91550(names,data,compiled_routes,routes,lookup,pl,nl,opts,vec__91538,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__91558 = arguments.length;
switch (G__91558) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__91559 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__91562,p__91563){
var vec__91564 = p__91562;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91564,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91564,(1),null);
var vec__91567 = p__91563;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91567,(0),null);
var map__91570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91567,(1),null);
var map__91570__$1 = cljs.core.__destructure_map(map__91570);
var data = map__91570__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91567,(2),null);
var map__91571 = reitit.impl.parse(p,opts);
var map__91571__$1 = cljs.core.__destructure_map(map__91571);
var route = map__91571__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91571__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__91556_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__91556_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__91556_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__91556_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91559,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91559,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core91572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core91572 = (function (matcher,names,vec__91559,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta91573){
this.matcher = matcher;
this.names = names;
this.vec__91559 = vec__91559;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta91573 = meta91573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core91572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91574,meta91573__$1){
var self__ = this;
var _91574__$1 = this;
return (new reitit.core.t_reitit$core91572(self__.matcher,self__.names,self__.vec__91559,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta91573__$1));
}));

(reitit.core.t_reitit$core91572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91574){
var self__ = this;
var _91574__$1 = this;
return self__.meta91573;
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core91572.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__91580 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__91580) : match.call(null,G__91580));
} else {
return null;
}
}));

(reitit.core.t_reitit$core91572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__91559","vec__91559",-157450234,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta91573","meta91573",-749789938,null)], null);
}));

(reitit.core.t_reitit$core91572.cljs$lang$type = true);

(reitit.core.t_reitit$core91572.cljs$lang$ctorStr = "reitit.core/t_reitit$core91572");

(reitit.core.t_reitit$core91572.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reitit.core/t_reitit$core91572");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core91572.
 */
reitit.core.__GT_t_reitit$core91572 = (function reitit$core$__GT_t_reitit$core91572(matcher__$1,names__$1,vec__91559__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta91573){
return (new reitit.core.t_reitit$core91572(matcher__$1,names__$1,vec__91559__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta91573));
});

}

return (new reitit.core.t_reitit$core91572(matcher,names,vec__91559,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__91586 = arguments.length;
switch (G__91586) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__91587 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91587,(0),null);
var names = vec__91587;
var vec__91590 = compiled_routes;
var vec__91593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91590,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91593,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91593,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91593,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core91597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core91597 = (function (p,names,match,data,compiled_routes,routes,vec__91593,n,vec__91587,vec__91590,result,opts,meta91598){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__91593 = vec__91593;
this.n = n;
this.vec__91587 = vec__91587;
this.vec__91590 = vec__91590;
this.result = result;
this.opts = opts;
this.meta91598 = meta91598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core91597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91599,meta91598__$1){
var self__ = this;
var _91599__$1 = this;
return (new reitit.core.t_reitit$core91597(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__91593,self__.n,self__.vec__91587,self__.vec__91590,self__.result,self__.opts,meta91598__$1));
}));

(reitit.core.t_reitit$core91597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91599){
var self__ = this;
var _91599__$1 = this;
return self__.meta91598;
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core91597.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core91597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__91593","vec__91593",618854509,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__91587","vec__91587",-1560022830,null),new cljs.core.Symbol(null,"vec__91590","vec__91590",-2023777131,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta91598","meta91598",61727483,null)], null);
}));

(reitit.core.t_reitit$core91597.cljs$lang$type = true);

(reitit.core.t_reitit$core91597.cljs$lang$ctorStr = "reitit.core/t_reitit$core91597");

(reitit.core.t_reitit$core91597.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reitit.core/t_reitit$core91597");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core91597.
 */
reitit.core.__GT_t_reitit$core91597 = (function reitit$core$__GT_t_reitit$core91597(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__91593__$1,n__$1,vec__91587__$1,vec__91590__$1,result__$1,opts__$1,meta91598){
return (new reitit.core.t_reitit$core91597(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__91593__$1,n__$1,vec__91587__$1,vec__91590__$1,result__$1,opts__$1,meta91598));
});

}

return (new reitit.core.t_reitit$core91597(p__$1,names,match,data,compiled_routes,routes,vec__91593,n,vec__91587,vec__91590,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__91613 = arguments.length;
switch (G__91613) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__91616 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__91616__$1 = cljs.core.__destructure_map(map__91616);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91616__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91616__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core91617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core91617 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__91616,opts,wildcard_router,meta91618){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.map__91616 = map__91616;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta91618 = meta91618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core91617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91619,meta91618__$1){
var self__ = this;
var _91619__$1 = this;
return (new reitit.core.t_reitit$core91617(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.map__91616,self__.opts,self__.wildcard_router,meta91618__$1));
}));

(reitit.core.t_reitit$core91617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91619){
var self__ = this;
var _91619__$1 = this;
return self__.meta91618;
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = reitit.core.match_by_name(self__.static_router,name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core91617.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = reitit.core.match_by_name(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core91617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"map__91616","map__91616",-470573318,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta91618","meta91618",1835442713,null)], null);
}));

(reitit.core.t_reitit$core91617.cljs$lang$type = true);

(reitit.core.t_reitit$core91617.cljs$lang$ctorStr = "reitit.core/t_reitit$core91617");

(reitit.core.t_reitit$core91617.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reitit.core/t_reitit$core91617");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core91617.
 */
reitit.core.__GT_t_reitit$core91617 = (function reitit$core$__GT_t_reitit$core91617(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__91616__$2,opts__$1,wildcard_router__$1,meta91618){
return (new reitit.core.t_reitit$core91617(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,map__91616__$2,opts__$1,wildcard_router__$1,meta91618));
});

}

return (new reitit.core.t_reitit$core91617(names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,map__91616__$1,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__91637 = arguments.length;
switch (G__91637) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths(reitit.impl.path_conflicting_routes(compiled_routes,opts));
var conflicting_QMARK_ = (function (p1__91635_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__91635_SHARP_));
});
var map__91638 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__91638__$1 = cljs.core.__destructure_map(map__91638);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91638__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91638__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core91639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core91639 = (function (map__91638,non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta91640){
this.map__91638 = map__91638;
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta91640 = meta91640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core91639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91641,meta91640__$1){
var self__ = this;
var _91641__$1 = this;
return (new reitit.core.t_reitit$core91639(self__.map__91638,self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta91640__$1));
}));

(reitit.core.t_reitit$core91639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91641){
var self__ = this;
var _91641__$1 = this;
return self__.meta91640;
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = reitit.core.match_by_name(self__.mixed_router,name);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core91639.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = reitit.core.match_by_name(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core91639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__91638","map__91638",1723335489,null),new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta91640","meta91640",278841025,null)], null);
}));

(reitit.core.t_reitit$core91639.cljs$lang$type = true);

(reitit.core.t_reitit$core91639.cljs$lang$ctorStr = "reitit.core/t_reitit$core91639");

(reitit.core.t_reitit$core91639.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"reitit.core/t_reitit$core91639");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core91639.
 */
reitit.core.__GT_t_reitit$core91639 = (function reitit$core$__GT_t_reitit$core91639(map__91638__$2,non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta91640){
return (new reitit.core.t_reitit$core91639(map__91638__$2,non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta91640));
});

}

return (new reitit.core.t_reitit$core91639(map__91638__$1,non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__91647,_){
var vec__91648 = p__91647;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91648,(0),null);
var map__91651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91648,(1),null);
var map__91651__$1 = cljs.core.__destructure_map(map__91651);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__91652,_){
var vec__91653 = p__91652;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91653,(0),null);
var map__91656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91653,(1),null);
var map__91656__$1 = cljs.core.__destructure_map(map__91656);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91656__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__91659 = arguments.length;
switch (G__91659) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__91660 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__91660__$1 = cljs.core.__destructure_map(map__91660);
var opts__$1 = map__91660__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91660__$1,new cljs.core.Keyword(null,"router","router",1091916230));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.impl.path_conflicting_routes(routes,opts__$1);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5720__auto___91774 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___91774)){
var conflicts_91775 = temp__5720__auto___91774;
if(cljs.core.truth_(path_conflicting)){
(conflicts_91775.cljs$core$IFn$_invoke$arity$1 ? conflicts_91775.cljs$core$IFn$_invoke$arity$1(path_conflicting) : conflicts_91775.call(null,path_conflicting));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5720__auto___91776 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___91776)){
var validate_91779 = temp__5720__auto___91776;
(validate_91779.cljs$core$IFn$_invoke$arity$2 ? validate_91779.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_91779.call(null,compiled_routes,opts__$1));
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
}catch (e91661){if((e91661 instanceof Error)){
var e = e91661;
throw (function (){var fexpr__91662 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__91662.cljs$core$IFn$_invoke$arity$1 ? fexpr__91662.cljs$core$IFn$_invoke$arity$1(e) : fexpr__91662.call(null,e));
})();
} else {
throw e91661;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.core.js.map
