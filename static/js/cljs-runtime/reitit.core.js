goog.provide('reitit.core');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_77478 = (function (this$,opts){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.expand[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5391__auto__.call(null,this$,opts));
} else {
var m__5389__auto__ = (reitit.core.expand["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__5389__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_77478(this$,opts);
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

var reitit$core$Router$router_name$dyn_77479 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.router_name[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.core.router_name["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_77479(this$);
}
});

var reitit$core$Router$routes$dyn_77480 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.routes[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.core.routes["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_77480(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_77481 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_77481(this$);
}
});

var reitit$core$Router$options$dyn_77482 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.options[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.core.options["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_77482(this$);
}
});

var reitit$core$Router$route_names$dyn_77483 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.route_names[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (reitit.core.route_names["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_77483(this$);
}
});

var reitit$core$Router$match_by_path$dyn_77484 = (function (this$,path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.match_by_path[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5391__auto__.call(null,this$,path));
} else {
var m__5389__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5389__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_77484(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_77485 = (function() {
var G__77486 = null;
var G__77486__2 = (function (this$,name){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5391__auto__.call(null,this$,name));
} else {
var m__5389__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5389__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__77486__3 = (function (this$,name,path_params){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (reitit.core.match_by_name[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5391__auto__.call(null,this$,name,path_params));
} else {
var m__5389__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__5389__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__77486 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__77486__2.call(this,this$,name);
case 3:
return G__77486__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77486.cljs$core$IFn$_invoke$arity$2 = G__77486__2;
G__77486.cljs$core$IFn$_invoke$arity$3 = G__77486__3;
return G__77486;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__77123 = arguments.length;
switch (G__77123) {
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
return reitit$core$Router$match_by_name$dyn_77485(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_77485(this$,name,path_params);
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
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k77126,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__77133 = k77126;
var G__77133__$1 = (((G__77133 instanceof cljs.core.Keyword))?G__77133.fqn:null);
switch (G__77133__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77126,else__5343__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__77134){
var vec__77135 = p__77134;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77135,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77135,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#reitit.core.Match{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77125){
var self__ = this;
var G__77125__$1 = this;
return (new cljs.core.RecordIter((0),G__77125__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77127,other77128){
var self__ = this;
var this77127__$1 = this;
return (((!((other77128 == null)))) && ((((this77127__$1.constructor === other77128.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77127__$1.template,other77128.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77127__$1.data,other77128.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77127__$1.result,other77128.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77127__$1.path_params,other77128.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77127__$1.path,other77128.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77127__$1.__extmap,other77128.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k77126){
var self__ = this;
var this__5347__auto____$1 = this;
var G__77138 = k77126;
var G__77138__$1 = (((G__77138 instanceof cljs.core.Keyword))?G__77138.fqn:null);
switch (G__77138__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77126);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__77125){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__77140 = cljs.core.keyword_identical_QMARK_;
var expr__77141 = k__5349__auto__;
if(cljs.core.truth_((pred__77140.cljs$core$IFn$_invoke$arity$2 ? pred__77140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__77141) : pred__77140.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__77141)))){
return (new reitit.core.Match(G__77125,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77140.cljs$core$IFn$_invoke$arity$2 ? pred__77140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__77141) : pred__77140.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__77141)))){
return (new reitit.core.Match(self__.template,G__77125,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77140.cljs$core$IFn$_invoke$arity$2 ? pred__77140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__77141) : pred__77140.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__77141)))){
return (new reitit.core.Match(self__.template,self__.data,G__77125,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77140.cljs$core$IFn$_invoke$arity$2 ? pred__77140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77141) : pred__77140.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77141)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__77125,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77140.cljs$core$IFn$_invoke$arity$2 ? pred__77140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__77141) : pred__77140.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__77141)))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__77125,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__77125),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__77125){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__77125,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"reitit.core/Match");
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
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__77129){
var extmap__5382__auto__ = (function (){var G__77150 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77129,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__77129)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77150);
} else {
return G__77150;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__77129),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__77129),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__77129),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__77129),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__77129),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k77152,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__77167 = k77152;
var G__77167__$1 = (((G__77167 instanceof cljs.core.Keyword))?G__77167.fqn:null);
switch (G__77167__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k77152,else__5343__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__77168){
var vec__77169 = p__77168;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77169,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77169,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#reitit.core.PartialMatch{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__77151){
var self__ = this;
var G__77151__$1 = this;
return (new cljs.core.RecordIter((0),G__77151__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this77153,other77154){
var self__ = this;
var this77153__$1 = this;
return (((!((other77154 == null)))) && ((((this77153__$1.constructor === other77154.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77153__$1.template,other77154.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77153__$1.data,other77154.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77153__$1.result,other77154.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77153__$1.path_params,other77154.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77153__$1.required,other77154.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this77153__$1.__extmap,other77154.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k77152){
var self__ = this;
var this__5347__auto____$1 = this;
var G__77188 = k77152;
var G__77188__$1 = (((G__77188 instanceof cljs.core.Keyword))?G__77188.fqn:null);
switch (G__77188__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k77152);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__77151){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__77189 = cljs.core.keyword_identical_QMARK_;
var expr__77190 = k__5349__auto__;
if(cljs.core.truth_((pred__77189.cljs$core$IFn$_invoke$arity$2 ? pred__77189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"template","template",-702405684),expr__77190) : pred__77189.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__77190)))){
return (new reitit.core.PartialMatch(G__77151,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77189.cljs$core$IFn$_invoke$arity$2 ? pred__77189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__77190) : pred__77189.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__77190)))){
return (new reitit.core.PartialMatch(self__.template,G__77151,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77189.cljs$core$IFn$_invoke$arity$2 ? pred__77189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"result","result",1415092211),expr__77190) : pred__77189.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__77190)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__77151,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77189.cljs$core$IFn$_invoke$arity$2 ? pred__77189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77190) : pred__77189.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__77190)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__77151,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__77189.cljs$core$IFn$_invoke$arity$2 ? pred__77189.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__77190) : pred__77189.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__77190)))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__77151,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__77151),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__77151){
var self__ = this;
var this__5339__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__77151,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"reitit.core/PartialMatch");
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
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__77158){
var extmap__5382__auto__ = (function (){var G__77200 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__77158,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__77158)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__77200);
} else {
return G__77200;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__77158),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__77158),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__77158),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__77158),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__77158),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__77209 = arguments.length;
switch (G__77209) {
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
var G__77217 = arguments.length;
switch (G__77217) {
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
var G__77222 = match;
var G__77222__$1 = (((G__77222 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__77222));
if((G__77222__$1 == null)){
return null;
} else {
var G__77225 = G__77222__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77225),"?",reitit.impl.query_string(query_params)].join('');
} else {
return G__77225;
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
var G__77232 = arguments.length;
switch (G__77232) {
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
var vec__77235 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__77238,p__77239){
var vec__77240 = p__77238;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77240,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77240,(1),null);
var vec__77243 = p__77239;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77243,(0),null);
var map__77246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77243,(1),null);
var map__77246__$1 = cljs.core.__destructure_map(map__77246);
var data = map__77246__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77243,(2),null);
var map__77252 = reitit.impl.parse(p,opts);
var map__77252__$1 = cljs.core.__destructure_map(map__77252);
var route = map__77252__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77252__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__77226_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__77226_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__77226_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__77226_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77235,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77235,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core77254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77254 = (function (vec__77235,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta77255){
this.vec__77235 = vec__77235;
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta77255 = meta77255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77256,meta77255__$1){
var self__ = this;
var _77256__$1 = this;
return (new reitit.core.t_reitit$core77254(self__.vec__77235,self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta77255__$1));
}));

(reitit.core.t_reitit$core77254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77256){
var self__ = this;
var _77256__$1 = this;
return self__.meta77255;
}));

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
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

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
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

(reitit.core.t_reitit$core77254.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__77292 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__77292) : match.call(null,G__77292));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__77235","vec__77235",1999341089,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77255","meta77255",-211931065,null)], null);
}));

(reitit.core.t_reitit$core77254.cljs$lang$type = true);

(reitit.core.t_reitit$core77254.cljs$lang$ctorStr = "reitit.core/t_reitit$core77254");

(reitit.core.t_reitit$core77254.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.core/t_reitit$core77254");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77254.
 */
reitit.core.__GT_t_reitit$core77254 = (function reitit$core$__GT_t_reitit$core77254(vec__77235__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta77255){
return (new reitit.core.t_reitit$core77254(vec__77235__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta77255));
});

}

return (new reitit.core.t_reitit$core77254(vec__77235,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__77324 = arguments.length;
switch (G__77324) {
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
var temp__5720__auto___77541 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5720__auto___77541){
var wilds_77544 = temp__5720__auto___77541;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_77544)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_77544,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__77337 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__77343,p__77344){
var vec__77346 = p__77343;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77346,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77346,(1),null);
var vec__77349 = p__77344;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77349,(0),null);
var map__77352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77349,(1),null);
var map__77352__$1 = cljs.core.__destructure_map(map__77352);
var data = map__77352__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77352__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77349,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__77315_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__77315_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77337,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77337,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core77360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77360 = (function (names,data,compiled_routes,routes,lookup,pl,nl,vec__77337,opts,meta77361){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.vec__77337 = vec__77337;
this.opts = opts;
this.meta77361 = meta77361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77362,meta77361__$1){
var self__ = this;
var _77362__$1 = this;
return (new reitit.core.t_reitit$core77360(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.vec__77337,self__.opts,meta77361__$1));
}));

(reitit.core.t_reitit$core77360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77362){
var self__ = this;
var _77362__$1 = this;
return self__.meta77361;
}));

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
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

(reitit.core.t_reitit$core77360.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__77367 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__77367) : match.call(null,G__77367));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"vec__77337","vec__77337",-1131466214,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77361","meta77361",-1282099341,null)], null);
}));

(reitit.core.t_reitit$core77360.cljs$lang$type = true);

(reitit.core.t_reitit$core77360.cljs$lang$ctorStr = "reitit.core/t_reitit$core77360");

(reitit.core.t_reitit$core77360.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.core/t_reitit$core77360");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77360.
 */
reitit.core.__GT_t_reitit$core77360 = (function reitit$core$__GT_t_reitit$core77360(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__77337__$1,opts__$1,meta77361){
return (new reitit.core.t_reitit$core77360(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__77337__$1,opts__$1,meta77361));
});

}

return (new reitit.core.t_reitit$core77360(names,data,compiled_routes,routes,lookup,pl,nl,vec__77337,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
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
var G__77375 = arguments.length;
switch (G__77375) {
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
var vec__77377 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__77381,p__77382){
var vec__77383 = p__77381;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77383,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77383,(1),null);
var vec__77386 = p__77382;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77386,(0),null);
var map__77389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77386,(1),null);
var map__77389__$1 = cljs.core.__destructure_map(map__77389);
var data = map__77389__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77389__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77386,(2),null);
var map__77390 = reitit.impl.parse(p,opts);
var map__77390__$1 = cljs.core.__destructure_map(map__77390);
var route = map__77390__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77390__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__77371_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__77371_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__77371_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__77371_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77377,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77377,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core77391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77391 = (function (matcher,names,compiled_routes,vec__77377,routes,lookup,pl,nl,match_by_path,compiler,opts,meta77392){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.vec__77377 = vec__77377;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta77392 = meta77392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77393,meta77392__$1){
var self__ = this;
var _77393__$1 = this;
return (new reitit.core.t_reitit$core77391(self__.matcher,self__.names,self__.compiled_routes,self__.vec__77377,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta77392__$1));
}));

(reitit.core.t_reitit$core77391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77393){
var self__ = this;
var _77393__$1 = this;
return self__.meta77392;
}));

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
}));

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
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

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
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

(reitit.core.t_reitit$core77391.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__77395 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__77395) : match.call(null,G__77395));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"vec__77377","vec__77377",299880585,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77392","meta77392",-1489209342,null)], null);
}));

(reitit.core.t_reitit$core77391.cljs$lang$type = true);

(reitit.core.t_reitit$core77391.cljs$lang$ctorStr = "reitit.core/t_reitit$core77391");

(reitit.core.t_reitit$core77391.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.core/t_reitit$core77391");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77391.
 */
reitit.core.__GT_t_reitit$core77391 = (function reitit$core$__GT_t_reitit$core77391(matcher__$1,names__$1,compiled_routes__$1,vec__77377__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta77392){
return (new reitit.core.t_reitit$core77391(matcher__$1,names__$1,compiled_routes__$1,vec__77377__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta77392));
});

}

return (new reitit.core.t_reitit$core77391(matcher,names,compiled_routes,vec__77377,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__77399 = arguments.length;
switch (G__77399) {
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
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__77401 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77401,(0),null);
var names = vec__77401;
var vec__77404 = compiled_routes;
var vec__77407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77404,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core77411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77411 = (function (p,vec__77407,names,match,data,compiled_routes,vec__77401,routes,n,vec__77404,result,opts,meta77412){
this.p = p;
this.vec__77407 = vec__77407;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.vec__77401 = vec__77401;
this.routes = routes;
this.n = n;
this.vec__77404 = vec__77404;
this.result = result;
this.opts = opts;
this.meta77412 = meta77412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77413,meta77412__$1){
var self__ = this;
var _77413__$1 = this;
return (new reitit.core.t_reitit$core77411(self__.p,self__.vec__77407,self__.names,self__.match,self__.data,self__.compiled_routes,self__.vec__77401,self__.routes,self__.n,self__.vec__77404,self__.result,self__.opts,meta77412__$1));
}));

(reitit.core.t_reitit$core77411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77413){
var self__ = this;
var _77413__$1 = this;
return self__.meta77412;
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core77411.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core77411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"vec__77407","vec__77407",-1382135451,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"vec__77401","vec__77401",-571242745,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__77404","vec__77404",-1091266473,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77412","meta77412",-1779968563,null)], null);
}));

(reitit.core.t_reitit$core77411.cljs$lang$type = true);

(reitit.core.t_reitit$core77411.cljs$lang$ctorStr = "reitit.core/t_reitit$core77411");

(reitit.core.t_reitit$core77411.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.core/t_reitit$core77411");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77411.
 */
reitit.core.__GT_t_reitit$core77411 = (function reitit$core$__GT_t_reitit$core77411(p__$2,vec__77407__$1,names__$1,match__$1,data__$1,compiled_routes__$1,vec__77401__$1,routes__$1,n__$1,vec__77404__$1,result__$1,opts__$1,meta77412){
return (new reitit.core.t_reitit$core77411(p__$2,vec__77407__$1,names__$1,match__$1,data__$1,compiled_routes__$1,vec__77401__$1,routes__$1,n__$1,vec__77404__$1,result__$1,opts__$1,meta77412));
});

}

return (new reitit.core.t_reitit$core77411(p__$1,vec__77407,names,match,data,compiled_routes,vec__77401,routes,n,vec__77404,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__77421 = arguments.length;
switch (G__77421) {
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
var map__77422 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__77422__$1 = cljs.core.__destructure_map(map__77422);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77422__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77422__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core77423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77423 = (function (names,compiled_routes,map__77422,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta77424){
this.names = names;
this.compiled_routes = compiled_routes;
this.map__77422 = map__77422;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta77424 = meta77424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77425,meta77424__$1){
var self__ = this;
var _77425__$1 = this;
return (new reitit.core.t_reitit$core77423(self__.names,self__.compiled_routes,self__.map__77422,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta77424__$1));
}));

(reitit.core.t_reitit$core77423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77425){
var self__ = this;
var _77425__$1 = this;
return self__.meta77424;
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name(self__.static_router,name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core77423.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name(self__.static_router,name,path_params);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core77423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"map__77422","map__77422",-218228696,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta77424","meta77424",-1718761609,null)], null);
}));

(reitit.core.t_reitit$core77423.cljs$lang$type = true);

(reitit.core.t_reitit$core77423.cljs$lang$ctorStr = "reitit.core/t_reitit$core77423");

(reitit.core.t_reitit$core77423.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.core/t_reitit$core77423");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77423.
 */
reitit.core.__GT_t_reitit$core77423 = (function reitit$core$__GT_t_reitit$core77423(names__$1,compiled_routes__$1,map__77422__$2,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta77424){
return (new reitit.core.t_reitit$core77423(names__$1,compiled_routes__$1,map__77422__$2,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta77424));
});

}

return (new reitit.core.t_reitit$core77423(names,compiled_routes,map__77422__$1,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__77428 = arguments.length;
switch (G__77428) {
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
var conflicting_QMARK_ = (function (p1__77426_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__77426_SHARP_));
});
var map__77429 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__77429__$1 = cljs.core.__destructure_map(map__77429);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77429__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77429__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core77430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core77430 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,map__77429,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta77431){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.map__77429 = map__77429;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta77431 = meta77431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core77430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77432,meta77431__$1){
var self__ = this;
var _77432__$1 = this;
return (new reitit.core.t_reitit$core77430(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.map__77429,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta77431__$1));
}));

(reitit.core.t_reitit$core77430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77432){
var self__ = this;
var _77432__$1 = this;
return self__.meta77431;
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name(self__.mixed_router,name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core77430.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = reitit.core.match_by_name(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reitit.core.match_by_name(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core77430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"map__77429","map__77429",-294252793,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta77431","meta77431",-137621851,null)], null);
}));

(reitit.core.t_reitit$core77430.cljs$lang$type = true);

(reitit.core.t_reitit$core77430.cljs$lang$ctorStr = "reitit.core/t_reitit$core77430");

(reitit.core.t_reitit$core77430.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"reitit.core/t_reitit$core77430");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core77430.
 */
reitit.core.__GT_t_reitit$core77430 = (function reitit$core$__GT_t_reitit$core77430(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,map__77429__$2,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta77431){
return (new reitit.core.t_reitit$core77430(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,map__77429__$2,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta77431));
});

}

return (new reitit.core.t_reitit$core77430(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,map__77429__$1,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__77434,_){
var vec__77435 = p__77434;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77435,(0),null);
var map__77438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77435,(1),null);
var map__77438__$1 = cljs.core.__destructure_map(map__77438);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__77448,_){
var vec__77449 = p__77448;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77449,(0),null);
var map__77452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77449,(1),null);
var map__77452__$1 = cljs.core.__destructure_map(map__77452);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77452__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
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
var G__77455 = arguments.length;
switch (G__77455) {
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
var map__77458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__77458__$1 = cljs.core.__destructure_map(map__77458);
var opts__$1 = map__77458__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77458__$1,new cljs.core.Keyword(null,"router","router",1091916230));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.impl.path_conflicting_routes(routes,opts__$1);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5720__auto___77592 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___77592)){
var conflicts_77593 = temp__5720__auto___77592;
if(cljs.core.truth_(path_conflicting)){
(conflicts_77593.cljs$core$IFn$_invoke$arity$1 ? conflicts_77593.cljs$core$IFn$_invoke$arity$1(path_conflicting) : conflicts_77593.call(null,path_conflicting));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5720__auto___77594 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___77594)){
var validate_77595 = temp__5720__auto___77594;
(validate_77595.cljs$core$IFn$_invoke$arity$2 ? validate_77595.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_77595.call(null,compiled_routes,opts__$1));
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
}catch (e77459){if((e77459 instanceof Error)){
var e = e77459;
throw (function (){var fexpr__77460 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__77460.cljs$core$IFn$_invoke$arity$1 ? fexpr__77460.cljs$core$IFn$_invoke$arity$1(e) : fexpr__77460.call(null,e));
})();
} else {
throw e77459;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.core.js.map
