goog.provide('edamame.impl.parser');
edamame.impl.parser.eof = (new Object());
edamame.impl.parser.expected_delimiter = (new Object());
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
edamame.impl.parser.throw_reader = (function edamame$impl$parser$throw_reader(var_args){
var G__61774 = arguments.length;
switch (G__61774) {
case 3:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,msg){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,msg,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,msg,data){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,msg,data,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5 = (function (ctx,reader,msg,data,loc){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var c = ((ir_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number(reader)):null);
var l = ((ir_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number(reader)):null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("edamame","error","edamame/error",882529634)], null),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),l,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),c], 0)),data], 0)));
}));

(edamame.impl.parser.throw_reader.cljs$lang$maxFixedArity = 5);

edamame.impl.parser.dispatch_macro_QMARK_ = (function edamame$impl$parser$dispatch_macro_QMARK_(ch){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["!",null,"\"",null,"#",null,"'",null,"(",null,":",null,"{",null,"^",null,"?",null,"_",null], null), null),ch);
});
edamame.impl.parser.macro_QMARK_ = (function edamame$impl$parser$macro_QMARK_(ch){
var G__61775 = ch;
switch (G__61775) {
case ":":
case ";":
case "'":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
case "%":
case "#":
case "\"":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.macro_terminating_QMARK_ = (function edamame$impl$parser$macro_terminating_QMARK_(ch){
var G__61776 = ch;
switch (G__61776) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.whitespace_QMARK_ = (function edamame$impl$parser$whitespace_QMARK_(c){
var and__5041__auto__ = c;
if(cljs.core.truth_(and__5041__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__5041__auto__;
}
});
/**
 * Read in a single logical token from the reader
 */
edamame.impl.parser.read_token = (function edamame$impl$parser$read_token(rdr,_kind,initch){
var sb = (new goog.string.StringBuffer());
var ch = initch;
while(true){
if(cljs.core.truth_((function (){var or__5043__auto__ = edamame.impl.parser.whitespace_QMARK_(ch);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = edamame.impl.parser.macro_terminating_QMARK_(ch);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(ch)){
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);
} else {
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__63036 = sb.append(ch);
var G__63037 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__63036;
ch = G__63037;
continue;
}
break;
}
});
edamame.impl.parser.parse_symbol = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.parse_symbol;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","parse-symbol","cljs.tools.reader.impl.commons/parse-symbol",-903976395,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"parse-symbol","parse-symbol",1608073451,null),"cljs/tools/reader/impl/commons.cljs",19,1,97,97,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"token","token",429068312,null)], null)),"Parses a string into a vector of the namespace and symbol",(cljs.core.truth_(cljs.tools.reader.impl.commons.parse_symbol)?cljs.tools.reader.impl.commons.parse_symbol.cljs$lang$test:null)])));
edamame.impl.parser.number_literal_QMARK_ = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.impl.commons.number_literal_QMARK_;},new cljs.core.Symbol("cljs.tools.reader.impl.commons","number-literal?","cljs.tools.reader.impl.commons/number-literal?",-1450304800,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.tools.reader.impl.commons","cljs.tools.reader.impl.commons",1569241026,null),new cljs.core.Symbol(null,"number-literal?","number-literal?",843787662,null),"cljs/tools/reader/impl/commons.cljs",31,1,20,20,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reader","reader",1810192380,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),new cljs.core.Symbol(null,"initch","initch",946908919,null)], null)),"Checks whether the reader is at the start of a number literal",((cljs.tools.reader.impl.commons.number_literal_QMARK_)?cljs.tools.reader.impl.commons.number_literal_QMARK_.cljs$lang$test:null)])));
edamame.impl.parser.escape_char = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.edn.escape_char;},new cljs.core.Symbol("cljs.tools.reader.edn","escape-char","cljs.tools.reader.edn/escape-char",17562632,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"escape-char","escape-char",-2072670949,null),"cljs/tools/reader/edn.cljs",19,1,217,217,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"rdr","rdr",190007785,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.escape_char)?cljs.tools.reader.edn.escape_char.cljs$lang$test:null)])));
edamame.impl.parser.read_char_STAR_ = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.edn.read_char_STAR_;},new cljs.core.Symbol("cljs.tools.reader.edn","read-char*","cljs.tools.reader.edn/read-char*",-606185164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-char*","read-char*",1494526523,null),"cljs/tools/reader/edn.cljs",18,1,118,118,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"backslash","backslash",-863649243,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_char_STAR_)?cljs.tools.reader.edn.read_char_STAR_.cljs$lang$test:null)])));
edamame.impl.parser.read_symbolic_value = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.edn.read_symbolic_value;},new cljs.core.Symbol("cljs.tools.reader.edn","read-symbolic-value","cljs.tools.reader.edn/read-symbolic-value",111468855,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader.edn","cljs.tools.reader.edn",-1275821532,null),new cljs.core.Symbol(null,"read-symbolic-value","read-symbolic-value",-100790078,null),"cljs/tools/reader/edn.cljs",27,1,324,324,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rdr","rdr",190007785,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_symbolic_value)?cljs.tools.reader.edn.read_symbolic_value.cljs$lang$test:null)])));
edamame.impl.parser.read_number = (function edamame$impl$parser$read_number(ctx,rdr,initch){
var sb = (function (){var G__61795 = (new goog.string.StringBuffer());
G__61795.append(initch);

return G__61795;
})();
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(cljs.core.truth_((function (){var or__5043__auto__ = edamame.impl.parser.whitespace_QMARK_(ch);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = edamame.impl.parser.macro_QMARK_(ch);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
rdr.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);

var or__5043__auto__ = cljs.tools.reader.impl.commons.match_number(s);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,rdr,["Invalid number: ",s].join(''));
}
} else {
var G__63074 = (function (){var G__61796 = sb;
G__61796.append(ch);

return G__61796;
})();
var G__63075 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__63074;
ch = G__63075;
continue;
}
break;
}
});
edamame.impl.parser.edn_read = (function edamame$impl$parser$edn_read(ctx,reader){
var tools_reader_opts = new cljs.core.Keyword("tools.reader","opts","tools.reader/opts",-2121810901).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(tools_reader_opts,reader);
});
edamame.impl.parser.parse_string_STAR_ = (function edamame$impl$parser$parse_string_STAR_(ctx,reader){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var row = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null):null);
var col = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null):null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
var G__61801 = ch;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__61801)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__61801)){
var G__63076 = (function (){var G__61802 = sb;
G__61802.append((edamame.impl.parser.escape_char.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.escape_char.cljs$core$IFn$_invoke$arity$2(sb,reader) : edamame.impl.parser.escape_char.call(null,sb,reader)));

return G__61802;
})();
var G__63077 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__63076;
ch = G__63077;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__61801)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
var G__63078 = (function (){var G__61803 = sb;
G__61803.append(ch);

return G__61803;
})();
var G__63079 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
sb = G__63078;
ch = G__63079;
continue;

}
}
}
break;
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
edamame.impl.parser.Loc = (function (row,col,__meta,__extmap,__hash){
this.row = row;
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k61805,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__61809 = k61805;
var G__61809__$1 = (((G__61809 instanceof cljs.core.Keyword))?G__61809.fqn:null);
switch (G__61809__$1) {
case "row":
return self__.row;

break;
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61805,else__5343__auto__);

}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__61810){
var vec__61811 = p__61810;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61811,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61811,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#edamame.impl.parser.Loc{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row","row",-570139521),self__.row],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61804){
var self__ = this;
var G__61804__$1 = this;
return (new cljs.core.RecordIter((0),G__61804__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1435872067 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61806,other61807){
var self__ = this;
var this61806__$1 = this;
return (((!((other61807 == null)))) && ((((this61806__$1.constructor === other61807.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61806__$1.row,other61807.row)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61806__$1.col,other61807.col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61806__$1.__extmap,other61807.__extmap)))))))));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k61805){
var self__ = this;
var this__5347__auto____$1 = this;
var G__61835 = k61805;
var G__61835__$1 = (((G__61835 instanceof cljs.core.Keyword))?G__61835.fqn:null);
switch (G__61835__$1) {
case "row":
case "col":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61805);

}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__61804){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__61843 = cljs.core.keyword_identical_QMARK_;
var expr__61844 = k__5349__auto__;
if(cljs.core.truth_((pred__61843.cljs$core$IFn$_invoke$arity$2 ? pred__61843.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),expr__61844) : pred__61843.call(null,new cljs.core.Keyword(null,"row","row",-570139521),expr__61844)))){
return (new edamame.impl.parser.Loc(G__61804,self__.col,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61843.cljs$core$IFn$_invoke$arity$2 ? pred__61843.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084),expr__61844) : pred__61843.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__61844)))){
return (new edamame.impl.parser.Loc(self__.row,G__61804,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Loc(self__.row,self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__61804),null));
}
}
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row","row",-570139521),self__.row,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col","col",-1959363084),self__.col,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__61804){
var self__ = this;
var this__5339__auto____$1 = this;
return (new edamame.impl.parser.Loc(self__.row,self__.col,G__61804,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Loc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(edamame.impl.parser.Loc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(edamame.impl.parser.Loc.cljs$lang$type = true);

(edamame.impl.parser.Loc.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Loc",null,(1),null));
}));

(edamame.impl.parser.Loc.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"edamame.impl.parser/Loc");
}));

/**
 * Positional factory function for edamame.impl.parser/Loc.
 */
edamame.impl.parser.__GT_Loc = (function edamame$impl$parser$__GT_Loc(row,col){
return (new edamame.impl.parser.Loc(row,col,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Loc, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Loc = (function edamame$impl$parser$map__GT_Loc(G__61808){
var extmap__5382__auto__ = (function (){var G__61855 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61808,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col","col",-1959363084)], 0));
if(cljs.core.record_QMARK_(G__61808)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61855);
} else {
return G__61855;
}
})();
return (new edamame.impl.parser.Loc(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(G__61808),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__61808),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

edamame.impl.parser.location = (function edamame$impl$parser$location(reader){
return edamame.impl.parser.__GT_Loc(reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null));
});
edamame.impl.parser.kw_identical_QMARK_ = (function edamame$impl$parser$kw_identical_QMARK_(kw,v){
return cljs.core.keyword_identical_QMARK_(kw,v);
});
edamame.impl.parser.parse_comment = (function edamame$impl$parser$parse_comment(reader){
cljs.tools.reader.reader_types.read_line(reader);

return reader;
});
/**
 * Skips whitespace. Returns reader. If end of stream is reached, returns nil.
 */
edamame.impl.parser.skip_whitespace = (function edamame$impl$parser$skip_whitespace(_ctx,reader){
while(true){
var temp__5720__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(c))){
continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return reader;
}
} else {
return null;
}
break;
}
});
edamame.impl.parser.non_match = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("non-match");
edamame.impl.parser.non_match_QMARK_ = (function edamame$impl$parser$non_match_QMARK_(v){
return (v === edamame.impl.parser.non_match);
});
edamame.impl.parser.throw_eof_while_reading = (function edamame$impl$parser$throw_eof_while_reading(ctx,reader){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"EOF while reading");
});
edamame.impl.parser.parse_to_delimiter = (function edamame$impl$parser$parse_to_delimiter(var_args){
var G__61884 = arguments.length;
switch (G__61884) {
case 3:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4(ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var row = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null):null);
var col = ((ir_QMARK_)?reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null):null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),delimiter),new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
var vals = cljs.core.transient$(into);
while(true){
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
var cond_splice_QMARK_ = (function (){var G__61916 = next_val;
var G__61916__$1 = (((G__61916 == null))?null:cljs.core.meta(G__61916));
if((G__61916__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765).cljs$core$IFn$_invoke$arity$1(G__61916__$1);
}
})();
if((edamame.impl.parser.eof === next_val)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], null));
} else {
if((edamame.impl.parser.expected_delimiter === next_val)){
return cljs.core.persistent_BANG_(vals);
} else {
if(cljs.core.truth_(cond_splice_QMARK_)){
var seq__61921_63083 = cljs.core.seq(next_val);
var chunk__61922_63084 = null;
var count__61923_63085 = (0);
var i__61924_63086 = (0);
while(true){
if((i__61924_63086 < count__61923_63085)){
var v_63087 = chunk__61922_63084.cljs$core$IIndexed$_nth$arity$2(null,i__61924_63086);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_63087);


var G__63088 = seq__61921_63083;
var G__63089 = chunk__61922_63084;
var G__63090 = count__61923_63085;
var G__63091 = (i__61924_63086 + (1));
seq__61921_63083 = G__63088;
chunk__61922_63084 = G__63089;
count__61923_63085 = G__63090;
i__61924_63086 = G__63091;
continue;
} else {
var temp__5720__auto___63092 = cljs.core.seq(seq__61921_63083);
if(temp__5720__auto___63092){
var seq__61921_63093__$1 = temp__5720__auto___63092;
if(cljs.core.chunked_seq_QMARK_(seq__61921_63093__$1)){
var c__5565__auto___63094 = cljs.core.chunk_first(seq__61921_63093__$1);
var G__63095 = cljs.core.chunk_rest(seq__61921_63093__$1);
var G__63096 = c__5565__auto___63094;
var G__63097 = cljs.core.count(c__5565__auto___63094);
var G__63098 = (0);
seq__61921_63083 = G__63095;
chunk__61922_63084 = G__63096;
count__61923_63085 = G__63097;
i__61924_63086 = G__63098;
continue;
} else {
var v_63099 = cljs.core.first(seq__61921_63093__$1);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,v_63099);


var G__63100 = cljs.core.next(seq__61921_63093__$1);
var G__63101 = null;
var G__63102 = (0);
var G__63103 = (0);
seq__61921_63083 = G__63100;
chunk__61922_63084 = G__63101;
count__61923_63085 = G__63102;
i__61924_63086 = G__63103;
continue;
}
} else {
}
}
break;
}

var G__63104 = vals;
vals = G__63104;
continue;
} else {
if(edamame.impl.parser.non_match_QMARK_(next_val)){
var G__63105 = vals;
vals = G__63105;
continue;
} else {
var G__63106 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,next_val);
vals = G__63106;
continue;

}
}
}
}
break;
}
}));

(edamame.impl.parser.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_list = (function edamame$impl$parser$parse_list(ctx,reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
edamame.impl.parser.read_regex_pattern = (function edamame$impl$parser$read_regex_pattern(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_63107__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_63107__$1 == null)){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Error while parsing regex");
} else {
}

sb.append(ch_63107__$1);
} else {
}

var G__63108 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__63108;
continue;
}
}
break;
}
});
edamame.impl.parser.duplicate_keys_error = (function edamame$impl$parser$duplicate_keys_error(msg,coll){
var duplicates = (function edamame$impl$parser$duplicate_keys_error_$_duplicates(seq){
var iter__5520__auto__ = (function edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__61957(s__61958){
return (new cljs.core.LazySeq(null,(function (){
var s__61958__$1 = s__61958;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__61958__$1);
if(temp__5720__auto__){
var s__61958__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61958__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61958__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61960 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61959 = (0);
while(true){
if((i__61959 < size__5519__auto__)){
var vec__61962 = cljs.core._nth(c__5518__auto__,i__61959);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61962,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61962,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__61960,id);

var G__63109 = (i__61959 + (1));
i__61959 = G__63109;
continue;
} else {
var G__63110 = (i__61959 + (1));
i__61959 = G__63110;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61960),edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__61957(cljs.core.chunk_rest(s__61958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61960),null);
}
} else {
var vec__61966 = cljs.core.first(s__61958__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61966,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61966,(1),null);
if((freq > (1))){
return cljs.core.cons(id,edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__61957(cljs.core.rest(s__61958__$2)));
} else {
var G__63111 = cljs.core.rest(s__61958__$2);
s__61958__$1 = G__63111;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
edamame.impl.parser.throw_dup_keys = (function edamame$impl$parser$throw_dup_keys(ctx,reader,loc,kind,ks){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,edamame.impl.parser.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
edamame.impl.parser.parse_set = (function edamame$impl$parser$parse_set(ctx,reader){
var start_loc = ((cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader))?edamame.impl.parser.location(reader):null);
var coll = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
edamame.impl.parser.parse_first_matching_condition = (function edamame$impl$parser$parse_first_matching_condition(ctx,reader){
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(ctx);
var match = edamame.impl.parser.non_match;
while(true){
var k = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if((edamame.impl.parser.expected_delimiter === k)){
return match;
} else {
var next_is_match_QMARK_ = ((edamame.impl.parser.non_match_QMARK_(match)) && (((cljs.core.contains_QMARK_(features,k)) || (edamame.impl.parser.kw_identical_QMARK_(k,new cljs.core.Keyword(null,"default","default",-1987822328))))));
if(next_is_match_QMARK_){
var match__$1 = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true);
while(true){
var next_val_63113 = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
if((edamame.impl.parser.expected_delimiter === next_val_63113)){
} else {
if((edamame.impl.parser.eof === next_val_63113)){
var delimiter_63114 = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__62032_63115 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var map__62032_63116__$1 = cljs.core.__destructure_map(map__62032_63115);
var row_63117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032_63116__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col_63118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032_63116__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char_63119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032_63116__$1,new cljs.core.Keyword(null,"char","char",-641587586));
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx__$1,reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_63114)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_63119)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_63117),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_63118),"]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter_63114),new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char_63119)], null));
} else {
continue;
}
}
break;
}

return match__$1;
} else {
var G__62046_63121 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755),true);
var G__62047_63122 = reader;
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(G__62046_63121,G__62047_63122) : edamame.impl.parser.parse_next.call(null,G__62046_63121,G__62047_63122));

var G__63124 = match;
match = G__63124;
continue;
}
}
break;
}
});
edamame.impl.parser.parse_reader_conditional = (function edamame$impl$parser$parse_reader_conditional(ctx,reader){
edamame.impl.parser.skip_whitespace(ctx,reader);

var opt = new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx);
var splice_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
if(splice_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
} else {
}

edamame.impl.parser.skip_whitespace(ctx,reader);

if(edamame.impl.parser.kw_identical_QMARK_(new cljs.core.Keyword(null,"preserve","preserve",1276846509),opt)){
return cljs.tools.reader.impl.utils.reader_conditional((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),splice_QMARK_);
} else {
if(cljs.core.fn_QMARK_(opt)){
var G__62066 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.assoc,new cljs.core.Keyword("edamame","read-cond-splicing","edamame/read-cond-splicing",-1992728777),splice_QMARK_);
return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__62066) : opt.call(null,G__62066));
} else {
var row = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var col = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),")"),new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null));
var match = edamame.impl.parser.parse_first_matching_condition(ctx__$1,reader);
if(edamame.impl.parser.non_match_QMARK_(match)){
return reader;
} else {
if(splice_QMARK_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(match,(function (p1__62049_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62049_SHARP_,new cljs.core.Keyword("edamame.impl.parser","cond-splice","edamame.impl.parser/cond-splice",1534599765),true);
}));
} else {
return match;

}
}

}
}
});
edamame.impl.parser.get_auto_resolve = (function edamame$impl$parser$get_auto_resolve(var_args){
var G__62087 = arguments.length;
switch (G__62087) {
case 3:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,next_val){
return edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,next_val,null);
}));

(edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,next_val,msg){
var temp__5718__auto__ = new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
return v;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__5043__auto__ = msg;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Use `:auto-resolve` to resolve aliases.";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.get_auto_resolve.cljs$lang$maxFixedArity = 4);

/**
 * Returns namespace for given alias.
 */
edamame.impl.parser.auto_resolve = (function edamame$impl$parser$auto_resolve(var_args){
var G__62137 = arguments.length;
switch (G__62137) {
case 5:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5 = (function (ctx,m,kns,reader,next_val){
return edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,m,kns,reader,next_val,null);
}));

(edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6 = (function (ctx,m,kns,reader,next_val,msg){
var temp__5718__auto__ = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(kns) : m.call(null,kns));
if(cljs.core.truth_(temp__5718__auto__)){
var kns__$1 = temp__5718__auto__;
return kns__$1;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,(function (){var or__5043__auto__ = msg;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ["Alias `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(kns)),"` not found in `:auto-resolve`"].join('');
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_val)].join('')], null));
}
}));

(edamame.impl.parser.auto_resolve.cljs$lang$maxFixedArity = 6);

edamame.impl.parser.read_symbol = (function edamame$impl$parser$read_symbol(var_args){
var G__62259 = arguments.length;
switch (G__62259) {
case 2:
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3(ctx,reader,reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null));
}));

(edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,initch){
var temp__5720__auto__ = edamame.impl.parser.read_token(reader,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),initch);
if(cljs.core.truth_(temp__5720__auto__)){
var token = temp__5720__auto__;
var G__62292 = token;
switch (G__62292) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
default:
var or__5043__auto__ = (function (){var temp__5720__auto____$1 = (edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1(token) : edamame.impl.parser.parse_symbol.call(null,token));
if(cljs.core.truth_(temp__5720__auto____$1)){
var p = temp__5720__auto____$1;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0))),(p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1))));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(ctx,reader,["Invalid symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),cljs.core.update.cljs$core$IFn$_invoke$arity$4(edamame.impl.parser.location(reader),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.core._,cljs.core.count(token)));
}

}
} else {
return null;
}
}));

(edamame.impl.parser.read_symbol.cljs$lang$maxFixedArity = 3);

edamame.impl.parser.parse_namespaced_map = (function edamame$impl$parser$parse_namespaced_map(ctx,reader){
var auto_resolved_QMARK_ = (((":" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)))?(function (){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return true;
})()
:null);
var current_ns_QMARK_ = (cljs.core.truth_(auto_resolved_QMARK_)?("{" === reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)):null);
var prefix = (cljs.core.truth_(auto_resolved_QMARK_)?(cljs.core.truth_(current_ns_QMARK_)?null:edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2(ctx,reader)):edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$2(ctx,reader));
var the_map = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.truth_(auto_resolved_QMARK_)){
var ns = (cljs.core.truth_(current_ns_QMARK_)?new cljs.core.Keyword(null,"current","current",-1088038603):cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prefix)));
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,ns);
var resolved_ns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,ns,reader,prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_ns),cljs.core.keys(the_map)),cljs.core.vals(the_map));
} else {
var resolved_ns = cljs.core.name(prefix);
return cljs.core.zipmap(cljs.tools.reader.impl.utils.namespace_keys(resolved_ns,cljs.core.keys(the_map)),cljs.core.vals(the_map));
}
});
edamame.impl.parser.parse_sharp = (function edamame$impl$parser$parse_sharp(ctx,reader){
var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
var G__62305 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__62305)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__62305)){
edamame.impl.parser.parse_comment(reader);

return reader;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__62305)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var pat = edamame.impl.parser.read_regex_pattern(ctx,reader);
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(pat) : v.call(null,pat));
} else {
return cljs.core.re_pattern(pat);
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Regex not allowed. Use the `:regex` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__62305)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return (edamame.impl.parser.read_symbolic_value.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.read_symbolic_value.cljs$core$IFn$_invoke$arity$3(reader,null,null) : edamame.impl.parser.read_symbolic_value.call(null,reader,null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__62305)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if((edamame.impl.parser.eof === next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Var literal not allowed. Use the `:var` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__62305)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var fn_expr = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(fn_expr) : v.call(null,fn_expr));
} else {
return edamame.impl.read_fn.read_fn(fn_expr);
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Function literal not allowed. Use the `:fn` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__62305)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_namespaced_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__62305)){
return edamame.impl.parser.parse_set(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__62305)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Read-eval not allowed. Use the `:read-eval` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__62305)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(ctx))){
} else {
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Conditional read not allowed.");
}

reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_reader_conditional(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__62305)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return reader;
} else {
if(edamame.impl.parser.dispatch_macro_QMARK_(c)){
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,"#");

return edamame.impl.parser.edn_read(ctx,reader);
} else {
var suppress_QMARK_ = new cljs.core.Keyword("edamame.impl.parser","suppress","edamame.impl.parser/suppress",1718484755).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(suppress_QMARK_)){
(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));

return (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
} else {
var sym = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var data = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
var f = (function (){var or__5043__auto__ = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"readers","readers",-2118263030).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var readers = temp__5720__auto__;
return (readers.cljs$core$IFn$_invoke$arity$1 ? readers.cljs$core$IFn$_invoke$arity$1(sym) : readers.call(null,sym));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.tagged_literals._STAR_cljs_data_readers_STAR_.call(null,sym);
}
})();
if(cljs.core.truth_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
} else {
throw (new Error(["No reader function for tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')));
}
}
}

}
}
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
edamame.impl.parser.throw_odd_map = (function edamame$impl$parser$throw_odd_map(ctx,reader,loc,elements){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
edamame.impl.parser.parse_map = (function edamame$impl$parser$parse_map(ctx,reader){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var start_loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
var elements = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var c = cljs.core.count(elements);
if((c > (0))){
if(cljs.core.odd_QMARK_(c)){
edamame.impl.parser.throw_odd_map(ctx,reader,start_loc,elements);
} else {
}

var ks_63206 = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,ks_63206))){
} else {
edamame.impl.parser.throw_dup_keys(ctx,reader,start_loc,new cljs.core.Keyword(null,"map","map",1371690461),ks_63206);
}
} else {
}

if((c <= (16))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,elements);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,elements);
}
});
edamame.impl.parser.parse_keyword = (function edamame$impl$parser$parse_keyword(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var init_c = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(init_c))){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Invalid token: :");
} else {
}

var token = edamame.impl.parser.read_token(reader,new cljs.core.Keyword(null,"keyword","keyword",811389747),init_c);
var auto_resolve_QMARK_ = (":" === token.charAt((0)));
if(auto_resolve_QMARK_){
var token__$1 = ((auto_resolve_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,(1)):token);
var vec__62350 = (edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1 ? edamame.impl.parser.parse_symbol.cljs$core$IFn$_invoke$arity$1(token__$1) : edamame.impl.parser.parse_symbol.call(null,token__$1));
var token_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62350,(0),null);
var token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62350,(1),null);
if(cljs.core.truth_(token_ns)){
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$3(ctx,reader,token__$1);
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$5(ctx,f,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token_ns),reader,token_ns);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
} else {
var f = edamame.impl.parser.get_auto_resolve.cljs$core$IFn$_invoke$arity$4(ctx,reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
var kns = edamame.impl.parser.auto_resolve.cljs$core$IFn$_invoke$arity$6(ctx,f,new cljs.core.Keyword(null,"current","current",-1088038603),reader,token__$1,"Use `:auto-resolve` + `:current` to resolve current namespace.");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns),token_name);
}
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
}
});
/**
 * Resolves syntactical sugar in metadata
 */
edamame.impl.parser.desugar_meta = (function edamame$impl$parser$desugar_meta(var_args){
var G__62388 = arguments.length;
switch (G__62388) {
case 1:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1 = (function (f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2 = (function (f,postprocess){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f)),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(true) : postprocess.call(null,true))]);
} else {
if((f instanceof cljs.core.Symbol)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223)) : postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223))),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
if(typeof f === 'string'){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223)) : postprocess.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223))),(postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(f) : postprocess.call(null,f))]);
} else {
return f;

}
}
}
}));

(edamame.impl.parser.desugar_meta.cljs$lang$maxFixedArity = 2);

edamame.impl.parser.dispatch = (function edamame$impl$parser$dispatch(ctx,reader,c){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var sharp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",c);
if(sharp_QMARK_){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.parse_sharp(ctx,reader);
} else {
var G__62427 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__62427)){
return edamame.impl.parser.eof;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@",G__62427)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Deref not allowed. Use the `:deref` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("`",G__62427)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.fn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
var gensyms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"gensyms","gensyms",248713782),gensyms);
var ret = edamame.impl.syntax_quote.syntax_quote(ctx__$1,reader,next_val);
return ret;
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax quote not allowed. Use the `:syntax-quote` option");
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__62427)){
return edamame.impl.parser.parse_string_STAR_(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__62427)){
var temp__5718__auto__ = new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if((edamame.impl.parser.eof === next_val)){
edamame.impl.parser.throw_eof_while_reading(ctx,reader);
} else {
}

if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.edn_read(ctx,reader);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__62427)){
return edamame.impl.parser.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__62427)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__62527 = temp__5720__auto__;
var map__62527__$1 = cljs.core.__destructure_map(map__62527);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62527__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62527__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62527__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__62534 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__62534__$1 = cljs.core.__destructure_map(map__62534);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62534__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__62427)){
return edamame.impl.parser.parse_keyword(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__62427)){
return edamame.impl.parser.parse_comment(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__62427)){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"]");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__62427)){
return edamame.impl.parser.parse_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",G__62427)){
var G__62545 = reader;
var G__62546 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var G__62547 = null;
return (edamame.impl.parser.read_char_STAR_.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.read_char_STAR_.cljs$core$IFn$_invoke$arity$3(G__62545,G__62546,G__62547) : edamame.impl.parser.read_char_STAR_.call(null,G__62545,G__62546,G__62547));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__62427)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__62585 = temp__5720__auto__;
var map__62585__$1 = cljs.core.__destructure_map(map__62585);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62585__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__62586 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__62586__$1 = cljs.core.__destructure_map(map__62586);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62586__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__62427)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$5(ctx,reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5720__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5720__auto__)){
var map__62631 = temp__5720__auto__;
var map__62631__$1 = cljs.core.__destructure_map(map__62631);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62631__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62631__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62631__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),(function (){var map__62632 = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
var map__62632__$1 = cljs.core.__destructure_map(map__62632);
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62632__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62632__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62632__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edamame","opened-delimiter","edamame/opened-delimiter",-1906008305),cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword("edamame","opened-delimiter-loc","edamame/opened-delimiter-loc",443885208),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)], null);
})(),loc);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return edamame.impl.parser.expected_delimiter;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__62427)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var meta_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,true) : edamame.impl.parser.parse_next.call(null,ctx,reader,true));
var val_val = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3((edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)),cljs.core.merge,meta_val);
return val_val;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",G__62427)){
var temp__5718__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return true;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var nc = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if((nc === "@")){
var temp__5718__auto____$1 = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(and__5041__auto__)){
var or__5043__auto__ = new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return true;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto____$1)){
var v__$1 = temp__5718__auto____$1;
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v__$1)){
return (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(next_val) : v__$1.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote splice not allowed. Use the `:syntax-quote` option");
}
} else {
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
if(cljs.core.ifn_QMARK_(v)){
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(next_val) : v.call(null,next_val));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),(new cljs.core.List(null,next_val,null,(1),null)),(2),null));
}
}
} else {
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(ctx,reader,"Syntax unquote not allowed. Use the `:syntax-unquote` option");
}
} else {
var c__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_((edamame.impl.parser.number_literal_QMARK_.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.number_literal_QMARK_.cljs$core$IFn$_invoke$arity$2(reader,c__$1) : edamame.impl.parser.number_literal_QMARK_.call(null,reader,c__$1)))){
return edamame.impl.parser.read_number(ctx,reader,c__$1);
} else {
return edamame.impl.parser.read_symbol.cljs$core$IFn$_invoke$arity$3(ctx,reader,c__$1);

}

}
}
}
}
}
}
}
}
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
edamame.impl.parser.iobj_QMARK_ = (function edamame$impl$parser$iobj_QMARK_(obj){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
}
});
edamame.impl.parser.parse_next = (function edamame$impl$parser$parse_next(var_args){
var G__62687 = arguments.length;
switch (G__62687) {
case 2:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reader){
return edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3(ctx,reader,null);
}));

(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,desugar){
while(true){
var ir_QMARK_ = cljs.tools.reader.reader_types.indexing_reader_QMARK_(reader);
var temp__5718__auto__ = (function (){var and__5041__auto__ = edamame.impl.parser.skip_whitespace(ctx,reader);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.tools.reader.reader_types.peek_char(reader);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
var loc = ((ir_QMARK_)?edamame.impl.parser.location(reader):null);
var log_QMARK_ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(ctx);
var buf = ((function (ctx,reader,desugar,loc,log_QMARK_,c,temp__5718__auto__,ir_QMARK_){
return (function (){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reader.frames)));
});})(ctx,reader,desugar,loc,log_QMARK_,c,temp__5718__auto__,ir_QMARK_))
;
var offset = (cljs.core.truth_(log_QMARK_)?((buf()).length):null);
var obj = (cljs.core.truth_(log_QMARK_)?cljs.tools.reader.reader_types.log_source_STAR_(reader,((function (ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__,ir_QMARK_){
return (function (){
return edamame.impl.parser.dispatch(ctx,reader,c);
});})(ctx,reader,desugar,loc,log_QMARK_,buf,offset,c,temp__5718__auto__,ir_QMARK_))
):edamame.impl.parser.dispatch(ctx,reader,c));
if((reader === obj)){
var G__63254 = ctx;
var G__63255 = reader;
var G__63256 = desugar;
ctx = G__63254;
reader = G__63255;
desugar = G__63256;
continue;
} else {
if((edamame.impl.parser.expected_delimiter === obj)){
return obj;
} else {
var postprocess = new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881).cljs$core$IFn$_invoke$arity$1(ctx);
var location_QMARK_ = new cljs.core.Keyword(null,"location?","location?",425878086).cljs$core$IFn$_invoke$arity$1(ctx);
var end_loc_QMARK_ = new cljs.core.Keyword(null,"end-location","end-location",-1199449467).cljs$core$IFn$_invoke$arity$1(ctx);
var iobj_QMARK__QMARK_ = edamame.impl.parser.iobj_QMARK_(obj);
var src = (cljs.core.truth_(log_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(buf(),offset).trim():null);
var loc_QMARK_ = (function (){var and__5041__auto__ = ir_QMARK_;
if(and__5041__auto__){
var or__5043__auto__ = (function (){var and__5041__auto____$1 = iobj_QMARK__QMARK_;
if(and__5041__auto____$1){
var or__5043__auto__ = cljs.core.not(location_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return (location_QMARK_.cljs$core$IFn$_invoke$arity$1 ? location_QMARK_.cljs$core$IFn$_invoke$arity$1(obj) : location_QMARK_.call(null,obj));
}
} else {
return and__5041__auto____$1;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return postprocess;
}
} else {
return and__5041__auto__;
}
})();
var end_loc = (cljs.core.truth_((function (){var and__5041__auto__ = ir_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = loc_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return end_loc_QMARK_;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?edamame.impl.parser.location(reader):null);
var row = (cljs.core.truth_(loc_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(loc):null);
var end_row = (cljs.core.truth_(end_loc_QMARK_)?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end_loc):null);
var col = (cljs.core.truth_(loc_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(loc):null);
var end_col = (cljs.core.truth_(end_loc_QMARK_)?new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end_loc):null);
var postprocess_fn = (cljs.core.truth_(postprocess)?((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_){
return (function (p1__62643_SHARP_){
var G__62689 = (function (){var G__62690 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),p1__62643_SHARP_], null);
var G__62690__$1 = (cljs.core.truth_(loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62690,new cljs.core.Keyword(null,"loc","loc",-584284901),(function (){var G__62691 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),row,new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),col]);
if(cljs.core.truth_(end_loc_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__62691,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),end_row,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),end_col], 0));
} else {
return G__62691;
}
})()):G__62690);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62690__$1,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"source","source",-433931539);
}
})(),src);
} else {
return G__62690__$1;
}
})();
return (postprocess.cljs$core$IFn$_invoke$arity$1 ? postprocess.cljs$core$IFn$_invoke$arity$1(G__62689) : postprocess.call(null,G__62689));
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_))
:null);
var obj__$1 = (cljs.core.truth_(desugar)?(cljs.core.truth_(postprocess_fn)?edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$2(obj,postprocess_fn):edamame.impl.parser.desugar_meta.cljs$core$IFn$_invoke$arity$1(obj)):obj);
var obj__$2 = (cljs.core.truth_(postprocess)?(postprocess_fn.cljs$core$IFn$_invoke$arity$1 ? postprocess_fn.cljs$core$IFn$_invoke$arity$1(obj__$1) : postprocess_fn.call(null,obj__$1)):(cljs.core.truth_(loc_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(obj__$1,((function (ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_){
return (function (p1__62685_SHARP_){
var G__62693 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62685_SHARP_,new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(ctx),row),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(ctx),col);
var G__62693__$1 = (cljs.core.truth_(end_loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62693,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(ctx),end_row),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(ctx),end_col):G__62693);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62693__$1,new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(ctx),src);
} else {
return G__62693__$1;
}
});})(ctx,reader,desugar,postprocess,location_QMARK_,end_loc_QMARK_,iobj_QMARK__QMARK_,src,loc_QMARK_,end_loc,row,end_row,col,end_col,postprocess_fn,obj__$1,loc,log_QMARK_,buf,offset,obj,c,temp__5718__auto__,ir_QMARK_))
):obj__$1
));
return obj__$2;
}
}
} else {
return edamame.impl.parser.eof;
}
break;
}
}));

(edamame.impl.parser.parse_next.cljs$lang$maxFixedArity = 3);

/**
 * Create reader for strings.
 */
edamame.impl.parser.string_reader = (function edamame$impl$parser$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
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
edamame.impl.parser.Options = (function (dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,__meta,__extmap,__hash){
this.dispatch = dispatch;
this.deref = deref;
this.syntax_quote = syntax_quote;
this.unquote = unquote;
this.unquote_splicing = unquote_splicing;
this.quote = quote;
this.fn = fn;
this.var$ = var$;
this.read_eval = read_eval;
this.regex = regex;
this.row_key = row_key;
this.col_key = col_key;
this.end_row_key = end_row_key;
this.end_col_key = end_col_key;
this.source = source;
this.source_key = source_key;
this.postprocess = postprocess;
this.location_QMARK_ = location_QMARK_;
this.end_location = end_location;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(edamame.impl.parser.Options.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k62698,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__62714 = k62698;
var G__62714__$1 = (((G__62714 instanceof cljs.core.Keyword))?G__62714.fqn:null);
switch (G__62714__$1) {
case "dispatch":
return self__.dispatch;

break;
case "deref":
return self__.deref;

break;
case "syntax-quote":
return self__.syntax_quote;

break;
case "unquote":
return self__.unquote;

break;
case "unquote-splicing":
return self__.unquote_splicing;

break;
case "quote":
return self__.quote;

break;
case "fn":
return self__.fn;

break;
case "var":
return self__.var$;

break;
case "read-eval":
return self__.read_eval;

break;
case "regex":
return self__.regex;

break;
case "row-key":
return self__.row_key;

break;
case "col-key":
return self__.col_key;

break;
case "end-row-key":
return self__.end_row_key;

break;
case "end-col-key":
return self__.end_col_key;

break;
case "source":
return self__.source;

break;
case "source-key":
return self__.source_key;

break;
case "postprocess":
return self__.postprocess;

break;
case "location?":
return self__.location_QMARK_;

break;
case "end-location":
return self__.end_location;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62698,else__5343__auto__);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__62724){
var vec__62725 = p__62724;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62725,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62725,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(edamame.impl.parser.Options.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#edamame.impl.parser.Options{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var","var",-769682797),self__.var$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source-key","source-key",-1325875542),self__.source_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),self__.postprocess],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location?","location?",425878086),self__.location_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-location","end-location",-1199449467),self__.end_location],null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62697){
var self__ = this;
var G__62697__$1 = this;
return (new cljs.core.RecordIter((0),G__62697__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),new cljs.core.Keyword(null,"location?","location?",425878086),new cljs.core.Keyword(null,"end-location","end-location",-1199449467)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1037796634 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62699,other62700){
var self__ = this;
var this62699__$1 = this;
return (((!((other62700 == null)))) && ((((this62699__$1.constructor === other62700.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.dispatch,other62700.dispatch)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.deref,other62700.deref)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.syntax_quote,other62700.syntax_quote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.unquote,other62700.unquote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.unquote_splicing,other62700.unquote_splicing)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.quote,other62700.quote)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.fn,other62700.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.var,other62700.var)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.read_eval,other62700.read_eval)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.regex,other62700.regex)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.row_key,other62700.row_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.col_key,other62700.col_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.end_row_key,other62700.end_row_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.end_col_key,other62700.end_col_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.source,other62700.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.source_key,other62700.source_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.postprocess,other62700.postprocess)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.location_QMARK_,other62700.location_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.end_location,other62700.end_location)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62699__$1.__extmap,other62700.__extmap)))))))))))))))))))))))))))))))))))))))))));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),null,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),null,new cljs.core.Keyword(null,"location?","location?",425878086),null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),null,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"deref","deref",-145586795),null,new cljs.core.Keyword(null,"regex","regex",939488856),null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),null,new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k62698){
var self__ = this;
var this__5347__auto____$1 = this;
var G__62823 = k62698;
var G__62823__$1 = (((G__62823 instanceof cljs.core.Keyword))?G__62823.fqn:null);
switch (G__62823__$1) {
case "dispatch":
case "deref":
case "syntax-quote":
case "unquote":
case "unquote-splicing":
case "quote":
case "fn":
case "var":
case "read-eval":
case "regex":
case "row-key":
case "col-key":
case "end-row-key":
case "end-col-key":
case "source":
case "source-key":
case "postprocess":
case "location?":
case "end-location":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62698);

}
}));

(edamame.impl.parser.Options.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__62697){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__62825 = cljs.core.keyword_identical_QMARK_;
var expr__62826 = k__5349__auto__;
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),expr__62826)))){
return (new edamame.impl.parser.Options(G__62697,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deref","deref",-145586795),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"deref","deref",-145586795),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,G__62697,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,G__62697,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"unquote","unquote",1649741032),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,G__62697,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,G__62697,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"quote","quote",-262615245),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"quote","quote",-262615245),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,G__62697,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,G__62697,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var","var",-769682797),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"var","var",-769682797),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,G__62697,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,G__62697,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regex","regex",939488856),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,G__62697,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,G__62697,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,G__62697,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,G__62697,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,G__62697,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,G__62697,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-key","source-key",-1325875542),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,G__62697,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,G__62697,self__.location_QMARK_,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location?","location?",425878086),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"location?","location?",425878086),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,G__62697,self__.end_location,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62825.cljs$core$IFn$_invoke$arity$2 ? pred__62825.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-location","end-location",-1199449467),expr__62826) : pred__62825.call(null,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),expr__62826)))){
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,G__62697,self__.__meta,self__.__extmap,null));
} else {
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__62697),null));
}
}
}
}
}
}
}
}
}
}
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

(edamame.impl.parser.Options.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),self__.dispatch,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"deref","deref",-145586795),self__.deref,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),self__.syntax_quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote","unquote",1649741032),self__.unquote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),self__.unquote_splicing,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"quote","quote",-262615245),self__.quote,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var","var",-769682797),self__.var$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),self__.read_eval,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"row-key","row-key",-1189010712),self__.row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"col-key","col-key",-2009675766),self__.col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),self__.end_row_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),self__.end_col_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source-key","source-key",-1325875542),self__.source_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),self__.postprocess,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"location?","location?",425878086),self__.location_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-location","end-location",-1199449467),self__.end_location,null))], null),self__.__extmap));
}));

(edamame.impl.parser.Options.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__62697){
var self__ = this;
var this__5339__auto____$1 = this;
return (new edamame.impl.parser.Options(self__.dispatch,self__.deref,self__.syntax_quote,self__.unquote,self__.unquote_splicing,self__.quote,self__.fn,self__.var$,self__.read_eval,self__.regex,self__.row_key,self__.col_key,self__.end_row_key,self__.end_col_key,self__.source,self__.source_key,self__.postprocess,self__.location_QMARK_,self__.end_location,G__62697,self__.__extmap,self__.__hash));
}));

(edamame.impl.parser.Options.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(edamame.impl.parser.Options.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"read-eval","read-eval",-865701837,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null),new cljs.core.Symbol(null,"row-key","row-key",451520815,null),new cljs.core.Symbol(null,"col-key","col-key",-369144239,null),new cljs.core.Symbol(null,"end-row-key","end-row-key",513868847,null),new cljs.core.Symbol(null,"end-col-key","end-col-key",1722344831,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"source-key","source-key",314655985,null),new cljs.core.Symbol(null,"postprocess","postprocess",-223231354,null),new cljs.core.Symbol(null,"location?","location?",2066409613,null),new cljs.core.Symbol(null,"end-location","end-location",441082060,null)], null);
}));

(edamame.impl.parser.Options.cljs$lang$type = true);

(edamame.impl.parser.Options.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"edamame.impl.parser/Options",null,(1),null));
}));

(edamame.impl.parser.Options.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"edamame.impl.parser/Options");
}));

/**
 * Positional factory function for edamame.impl.parser/Options.
 */
edamame.impl.parser.__GT_Options = (function edamame$impl$parser$__GT_Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location){
return (new edamame.impl.parser.Options(dispatch,deref,syntax_quote,unquote,unquote_splicing,quote,fn,var$,read_eval,regex,row_key,col_key,end_row_key,end_col_key,source,source_key,postprocess,location_QMARK_,end_location,null,null,null));
});

/**
 * Factory function for edamame.impl.parser/Options, taking a map of keywords to field values.
 */
edamame.impl.parser.map__GT_Options = (function edamame$impl$parser$map__GT_Options(G__62705){
var extmap__5382__auto__ = (function (){var G__62875 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62705,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881),new cljs.core.Keyword(null,"location?","location?",425878086),new cljs.core.Keyword(null,"end-location","end-location",-1199449467)], 0));
if(cljs.core.record_QMARK_(G__62705)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62875);
} else {
return G__62875;
}
})();
return (new edamame.impl.parser.Options(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"deref","deref",-145586795).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"unquote","unquote",1649741032).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"quote","quote",-262615245).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"read-eval","read-eval",1788733932).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"postprocess","postprocess",-1863762881).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"location?","location?",425878086).cljs$core$IFn$_invoke$arity$1(G__62705),new cljs.core.Keyword(null,"end-location","end-location",-1199449467).cljs$core$IFn$_invoke$arity$1(G__62705),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

edamame.impl.parser.normalize_opts = (function edamame$impl$parser$normalize_opts(opts){
var opts__$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5718__auto__)){
var dispatch = temp__5718__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deref","deref",-145586795),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
if(cljs.core.fn_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v], null);
} else {
var temp__5720__auto____$1 = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5720__auto____$1)){
var v__$1 = temp__5720__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote","unquote",1649741032),v__$1], null);
} else {
return null;
}
}
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","@"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quote","quote",-262615245),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","("], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","'"], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"var","var",-769682797),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","="], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),v], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#","\""], null));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex","regex",939488856),v], null);
} else {
return null;
}
})()], null));
} else {
return opts;
}
})();
var opts__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"deref","deref",-145586795),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),true,new cljs.core.Keyword(null,"quote","quote",-262615245),true,new cljs.core.Keyword(null,"read-eval","read-eval",1788733932),true,new cljs.core.Keyword(null,"regex","regex",939488856),true,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),true,new cljs.core.Keyword(null,"var","var",-769682797),true], null),opts__$1], 0)):opts__$1);
var opts__$3 = (function (){var G__62963 = opts__$2;
var G__62963__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62963,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),new cljs.core.Keyword(null,"row","row",-570139521)):G__62963);
var G__62963__$2 = ((cljs.core.not(new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62963__$1,new cljs.core.Keyword(null,"col-key","col-key",-2009675766),new cljs.core.Keyword(null,"col","col",-1959363084)):G__62963__$1);
var G__62963__$3 = ((cljs.core.not(new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62963__$2,new cljs.core.Keyword(null,"end-row-key","end-row-key",-1126662680),new cljs.core.Keyword(null,"end-row","end-row",-545103581)):G__62963__$2);
var G__62963__$4 = ((cljs.core.not(new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62963__$3,new cljs.core.Keyword(null,"end-col-key","end-col-key",81813304),new cljs.core.Keyword(null,"end-col","end-col",-724155879)):G__62963__$3);
var G__62963__$5 = ((cljs.core.not(new cljs.core.Keyword(null,"source-key","source-key",-1325875542).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62963__$4,new cljs.core.Keyword(null,"source-key","source-key",-1325875542),new cljs.core.Keyword(null,"source","source",-433931539)):G__62963__$4);
if((!(cljs.core.contains_QMARK_(opts__$2,new cljs.core.Keyword(null,"end-location","end-location",-1199449467))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62963__$5,new cljs.core.Keyword(null,"end-location","end-location",-1199449467),true);
} else {
return G__62963__$5;
}
})();
return edamame.impl.parser.map__GT_Options(opts__$3);
});
edamame.impl.parser.parse_string = (function edamame$impl$parser$parse_string(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var src_QMARK_ = opts__$1.source;
var r = (cljs.core.truth_(src_QMARK_)?cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(s):edamame.impl.parser.string_reader(s));
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var v = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if((edamame.impl.parser.eof === v)){
return null;
} else {
return v;
}
});
edamame.impl.parser.parse_string_all = (function edamame$impl$parser$parse_string_all(s,opts){
var opts__$1 = edamame.impl.parser.normalize_opts(opts);
var r = edamame.impl.parser.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,r);
if((edamame.impl.parser.eof === next_val)){
return cljs.core.persistent_BANG_(ret);
} else {
var G__63355 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,next_val);
ret = G__63355;
continue;
}
break;
}
});
edamame.impl.parser.reader = (function edamame$impl$parser$reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});
edamame.impl.parser.get_line_number = (function edamame$impl$parser$get_line_number(reader){
return cljs.tools.reader.reader_types.get_line_number(reader);
});
edamame.impl.parser.get_column_number = (function edamame$impl$parser$get_column_number(reader){
return cljs.tools.reader.reader_types.get_column_number(reader);
});
edamame.impl.parser.source_logging_reader = (function edamame$impl$parser$source_logging_reader(x){
var string_reader = cljs.tools.reader.reader_types.string_reader(x);
var buf_len = (1);
var pushback_reader = (new cljs.tools.reader.reader_types.PushbackReader(string_reader,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(buf_len),buf_len,buf_len));
return cljs.tools.reader.reader_types.source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1(pushback_reader);
});

//# sourceMappingURL=edamame.impl.parser.js.map
