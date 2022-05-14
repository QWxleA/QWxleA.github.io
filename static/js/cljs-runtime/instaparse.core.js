goog.provide('instaparse.core');
instaparse.core._STAR_default_output_format_STAR_ = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__111393 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null);
return (fexpr__111393.cljs$core$IFn$_invoke$arity$1 ? fexpr__111393.cljs$core$IFn$_invoke$arity$1(type) : fexpr__111393.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return (instaparse.core._STAR_default_output_format_STAR_ = type);
});
instaparse.core._STAR_default_input_format_STAR_ = new cljs.core.Keyword(null,"ebnf","ebnf",31967825);
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_((function (){var fexpr__111401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null);
return (fexpr__111401.cljs$core$IFn$_invoke$arity$1 ? fexpr__111401.cljs$core$IFn$_invoke$arity$1(type) : fexpr__111401.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return (instaparse.core._STAR_default_input_format_STAR_ = type);
});


instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__111408 = unhide;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__111408)){
return parser;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),G__111408)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all_content(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),G__111408)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_tags(new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),G__111408)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all(new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111408)].join('')));

}
}
}
}
});
/**
 * Use parser to parse the text.  Returns first parse tree found
 * that completely parses the text.  If no parse tree is possible, returns
 * a Failure object.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * :optimize :memory   (when possible, employ strategy to use less memory)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parse = (function instaparse$core$parse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___111454 = arguments.length;
var i__4865__auto___111455 = (0);
while(true){
if((i__4865__auto___111455 < len__4864__auto___111454)){
args__4870__auto__.push((arguments[i__4865__auto___111455]));

var G__111456 = (i__4865__auto___111455 + (1));
i__4865__auto___111455 = G__111456;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__111420){
var map__111421 = p__111420;
var map__111421__$1 = cljs.core.__destructure_map(map__111421);
var options = map__111421__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"memory","memory",-1449401430),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var optimize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__111422 = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__111422) : instaparse.reduction.node_builders.call(null,G__111422));
})());
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(partial_QMARK_);
} else {
return and__4251__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy(parser__$1,text,start_production);
if(cljs.core.truth_((instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1 ? instaparse.core.failure_QMARK_.cljs$core$IFn$_invoke$arity$1(result) : instaparse.core.failure_QMARK_.call(null,result)))){
return instaparse.gll.parse(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
}));

(instaparse.core.parse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(instaparse.core.parse.cljs$lang$applyTo = (function (seq111417){
var G__111418 = cljs.core.first(seq111417);
var seq111417__$1 = cljs.core.next(seq111417);
var G__111419 = cljs.core.first(seq111417__$1);
var seq111417__$2 = cljs.core.next(seq111417__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__111418,G__111419,seq111417__$2);
}));

/**
 * Use parser to parse the text.  Returns lazy seq of all parse trees
 * that completely parse the text.  If no parse tree is possible, returns
 * () with a Failure object attached as metadata.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parses = (function instaparse$core$parses(var_args){
var args__4870__auto__ = [];
var len__4864__auto___111457 = arguments.length;
var i__4865__auto___111458 = (0);
while(true){
if((i__4865__auto___111458 < len__4864__auto___111457)){
args__4870__auto__.push((arguments[i__4865__auto___111458]));

var G__111459 = (i__4865__auto___111458 + (1));
i__4865__auto___111458 = G__111459;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__111426){
var map__111427 = p__111426;
var map__111427__$1 = cljs.core.__destructure_map(map__111427);
var options = map__111427__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var unhide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser(parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,(function (){var G__111428 = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.node_builders.cljs$core$IFn$_invoke$arity$1(G__111428) : instaparse.reduction.node_builders.call(null,G__111428));
})());
} else {
return instaparse.gll.parses(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}));

(instaparse.core.parses.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(instaparse.core.parses.cljs$lang$applyTo = (function (seq111423){
var G__111424 = cljs.core.first(seq111423);
var seq111423__$1 = cljs.core.next(seq111423);
var G__111425 = cljs.core.first(seq111423__$1);
var seq111423__$2 = cljs.core.next(seq111423__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__111424,G__111425,seq111423__$2);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
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
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap,__hash){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k111430,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__111435 = k111430;
var G__111435__$1 = (((G__111435 instanceof cljs.core.Keyword))?G__111435.fqn:null);
switch (G__111435__$1) {
case "grammar":
return self__.grammar;

break;
case "start-production":
return self__.start_production;

break;
case "output-format":
return self__.output_format;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k111430,else__4505__auto__);

}
}));

(instaparse.core.Parser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__111436){
var vec__111437 = p__111436;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111437,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111437,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#instaparse.core.Parser{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
}));

(instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__111429){
var self__ = this;
var G__111429__$1 = this;
return (new cljs.core.RecordIter((0),G__111429__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
}));

(instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-360509877 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this111431,other111432){
var self__ = this;
var this111431__$1 = this;
return (((!((other111432 == null)))) && ((((this111431__$1.constructor === other111432.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this111431__$1.grammar,other111432.grammar)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this111431__$1.start_production,other111432.start_production)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this111431__$1.output_format,other111432.output_format)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this111431__$1.__extmap,other111432.__extmap)))))))))));
}));

(instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-production","start-production",687546537),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(instaparse.core.Parser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k111430){
var self__ = this;
var this__4509__auto____$1 = this;
var G__111440 = k111430;
var G__111440__$1 = (((G__111440 instanceof cljs.core.Keyword))?G__111440.fqn:null);
switch (G__111440__$1) {
case "grammar":
case "start-production":
case "output-format":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k111430);

}
}));

(instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__111429){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__111441 = cljs.core.keyword_identical_QMARK_;
var expr__111442 = k__4511__auto__;
if(cljs.core.truth_((pred__111441.cljs$core$IFn$_invoke$arity$2 ? pred__111441.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__111442) : pred__111441.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__111442)))){
return (new instaparse.core.Parser(G__111429,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__111441.cljs$core$IFn$_invoke$arity$2 ? pred__111441.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__111442) : pred__111441.call(null,new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__111442)))){
return (new instaparse.core.Parser(self__.grammar,G__111429,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__111441.cljs$core$IFn$_invoke$arity$2 ? pred__111441.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__111442) : pred__111441.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__111442)))){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__111429,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__111429),null));
}
}
}
}));

(instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format,null))], null),self__.__extmap));
}));

(instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__111429){
var self__ = this;
var this__4501__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__111429,self__.__extmap,self__.__hash));
}));

(instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(instaparse.core.Parser.prototype.call = (function (unused__10938__auto__){
var self__ = this;
var self__ = this;
var G__111444 = (arguments.length - (1));
switch (G__111444) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(instaparse.core.Parser.prototype.apply = (function (self__,args111434){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args111434)));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse(parser,text);
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key1,val1,key2,val2,key3,val3], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$9 = (function (text,a,b,c,d,e,f,g,h){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$11 = (function (text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$13 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$15 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$17 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$19 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var parser = this;
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(parser,text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
}));

(instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$21 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var parser = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(instaparse.core.parse,parser,text,a,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more], 0));
}));

(instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"start-production","start-production",-1966889232,null),new cljs.core.Symbol(null,"output-format","output-format",-185851149,null)], null);
}));

(instaparse.core.Parser.cljs$lang$type = true);

(instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"instaparse.core/Parser",null,(1),null));
}));

(instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"instaparse.core/Parser");
}));

/**
 * Positional factory function for instaparse.core/Parser.
 */
instaparse.core.__GT_Parser = (function instaparse$core$__GT_Parser(grammar,start_production,output_format){
return (new instaparse.core.Parser(grammar,start_production,output_format,null,null,null));
});

/**
 * Factory function for instaparse.core/Parser, taking a map of keywords to field values.
 */
instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__111433){
var extmap__4542__auto__ = (function (){var G__111445 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__111433,new cljs.core.Keyword(null,"grammar","grammar",1881328267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)], 0));
if(cljs.core.record_QMARK_(G__111433)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__111445);
} else {
return G__111445;
}
})();
return (new instaparse.core.Parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__111433),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(G__111433),new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(G__111433),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

(instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write(writer,instaparse.print.Parser__GT_str(parser__$1));
}));
/**
 * Takes a string specification of a context-free grammar,
 *   or a URI for a text file containing such a specification (Clj only),
 *   or a map of parser combinators and returns a parser for that grammar.
 * 
 *   Optional keyword arguments:
 *   :input-format :ebnf
 *   or
 *   :input-format :abnf
 * 
 *   :output-format :enlive
 *   or
 *   :output-format :hiccup
 * 
 *   :start :keyword (where :keyword is name of starting production rule)
 * 
 *   :string-ci true (treat all string literals as case insensitive)
 * 
 *   :auto-whitespace (:standard or :comma)
 *   or
 *   :auto-whitespace custom-whitespace-parser
 * 
 *   Clj only:
 *   :no-slurp true (disables use of slurp to auto-detect whether
 *                input is a URI.  When using this option, input
 *                must be a grammar string or grammar map.  Useful
 *                for platforms where slurp is slow or not available.)
 */
instaparse.core.parser = (function instaparse$core$parser(var_args){
var args__4870__auto__ = [];
var len__4864__auto___111485 = arguments.length;
var i__4865__auto___111486 = (0);
while(true){
if((i__4865__auto___111486 < len__4864__auto___111485)){
args__4870__auto__.push((arguments[i__4865__auto___111486]));

var G__111487 = (i__4865__auto___111486 + (1));
i__4865__auto___111486 = G__111487;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__111448){
var map__111449 = p__111448;
var map__111449__$1 = cljs.core.__destructure_map(map__111449);
var options = map__111449__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"input-format","input-format",-422703481)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
return (((ws_parser == null)) || (((cljs.core.contains_QMARK_(instaparse.core.standard_whitespace_parsers,ws_parser)) || (((cljs.core.map_QMARK_(ws_parser)) && (((cljs.core.contains_QMARK_(ws_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267))) && (cljs.core.contains_QMARK_(ws_parser,new cljs.core.Keyword(null,"start-production","start-production",687546537))))))))));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"input-format","input-format",-422703481),instaparse.core._STAR_default_input_format_STAR_);
var build_parser = (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR__orig_val__111450 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__111451 = new cljs.core.Keyword(null,"string-ci","string-ci",374631805).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"default","default",-1987822328));
(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__111451);

try{var G__111452 = input_format;
var G__111452__$1 = (((G__111452 instanceof cljs.core.Keyword))?G__111452.fqn:null);
switch (G__111452__$1) {
case "abnf":
return instaparse.abnf.build_parser(spec,output_format);

break;
case "ebnf":
return instaparse.cfg.build_parser(spec,output_format);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111452__$1)].join('')));

}
}finally {(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__111450);
}});
var output_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"start","start",-355208981),null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = build_parser(grammar_specification,output_format);
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"start-production","start-production",687546537),start));
} else {
return instaparse.core.map__GT_Parser(parser);
}
})():((cljs.core.map_QMARK_(grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators(grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser(parser);
})():((cljs.core.vector_QMARK_(grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:(grammar_specification.cljs$core$IFn$_invoke$arity$1 ? grammar_specification.cljs$core$IFn$_invoke$arity$1((0)) : grammar_specification.call(null,(0))));
var parser = instaparse.cfg.build_parser_from_combinators(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser(parser);
})():instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected string, map, or vector as grammar specification, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grammar_specification], 0))], 0))
)));
var auto_whitespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__5718__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__5718__auto__)){
var map__111453 = temp__5718__auto__;
var map__111453__$1 = cljs.core.__destructure_map(map__111453);
var ws_grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111453__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));
var ws_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111453__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(built_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.auto_whitespace(built_parser.grammar,built_parser.start_production,ws_grammar,ws_start));
} else {
return built_parser;
}
}));

(instaparse.core.parser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(instaparse.core.parser.cljs$lang$applyTo = (function (seq111446){
var G__111447 = cljs.core.first(seq111446);
var seq111446__$1 = cljs.core.next(seq111446);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__111447,seq111446__$1);
}));

/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return (((result instanceof instaparse.gll.failure_type)) || ((cljs.core.meta(result) instanceof instaparse.gll.failure_type)));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.failure_type)){
return result;
} else {
if((cljs.core.meta(result) instanceof instaparse.gll.failure_type)){
return cljs.core.meta(result);
} else {
return null;

}
}
});
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard","standard",-1769206695),instaparse.core.parser("whitespace = #'\\s+'"),new cljs.core.Keyword(null,"comma","comma",1699024745),instaparse.core.parser("whitespace = #'[,\\s]+'")], null);
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.span = instaparse.viz.span;

//# sourceMappingURL=instaparse.core.js.map
