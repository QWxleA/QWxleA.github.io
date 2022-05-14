goog.provide('frontend.handler.command_palette');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("command","id","command/id",1710263049),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("command","desc","command/desc",606219829),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("command","action","command/action",-1808017757),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("command","shortcut","command/shortcut",249787238),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("command","tag","command/tag",-94582956),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("command","command","command/command",1929916321),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","id","command/id",1710263049),new cljs.core.Keyword("command","action","command/action",-1808017757)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","desc","command/desc",606219829),new cljs.core.Keyword("command","shortcut","command/shortcut",249787238),new cljs.core.Keyword("command","tag","command/tag",-94582956)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","id","command/id",1710263049),new cljs.core.Keyword("command","action","command/action",-1808017757)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","desc","command/desc",606219829),new cljs.core.Keyword("command","shortcut","command/shortcut",249787238),new cljs.core.Keyword("command","tag","command/tag",-94582956)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70432){
return cljs.core.map_QMARK_(G__70432);
}),(function (G__70432){
return cljs.core.contains_QMARK_(G__70432,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__70432){
return cljs.core.contains_QMARK_(G__70432,new cljs.core.Keyword(null,"action","action",-811238024));
})], null),(function (G__70432){
return ((cljs.core.map_QMARK_(G__70432)) && (((cljs.core.contains_QMARK_(G__70432,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__70432,new cljs.core.Keyword(null,"action","action",-811238024))))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","id","command/id",1710263049),new cljs.core.Keyword("command","action","command/action",-1808017757)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"action","action",-811238024)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","desc","command/desc",606219829),new cljs.core.Keyword("command","shortcut","command/shortcut",249787238),new cljs.core.Keyword("command","tag","command/tag",-94582956)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"action","action",-811238024)))], null),null])));
frontend.handler.command_palette.global_shortcut_commands = (function frontend$handler$command_palette$global_shortcut_commands(){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(frontend.modules.shortcut.data_helper.shortcuts__GT_commands,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shortcut.handler","editor-global","shortcut.handler/editor-global",-799336480),new cljs.core.Keyword("shortcut.handler","global-prevent-default","shortcut.handler/global-prevent-default",-1269226682),new cljs.core.Keyword("shortcut.handler","global-non-editing-only","shortcut.handler/global-non-editing-only",-2118756985)], null)], 0));
});
frontend.handler.command_palette.get_commands = (function frontend$handler$command_palette$get_commands(){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("command-palette","commands","command-palette/commands",-168367617)));
});
frontend.handler.command_palette.get_commands_unique = (function frontend$handler$command_palette$get_commands_unique(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__70434_SHARP_,p2__70435_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70434_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__70435_SHARP_),p2__70435_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("command-palette","commands","command-palette/commands",-168367617)));
});
frontend.handler.command_palette.history = (function frontend$handler$command_palette$history(var_args){
var G__70439 = arguments.length;
switch (G__70439) {
case 0:
return frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__4253__auto__ = frontend.storage.get("commands-history");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$1 = (function (vals){
return frontend.storage.set("commands-history",vals);
}));

(frontend.handler.command_palette.history.cljs$lang$maxFixedArity = 1);

frontend.handler.command_palette.assoc_invokes = (function frontend$handler$command_palette$assoc_invokes(cmds){
var invokes = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$0()));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__70442){
var map__70443 = p__70442;
var map__70443__$1 = cljs.core.__destructure_map(map__70443);
var cmd = map__70443__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.contains_QMARK_(invokes,id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"invokes-count","invokes-count",695160859),cljs.core.get.cljs$core$IFn$_invoke$arity$2(invokes,id));
} else {
return cmd;
}
}),cmds);
});
frontend.handler.command_palette.add_history = (function frontend$handler$command_palette$add_history(p__70445){
var map__70446 = p__70445;
var map__70446__$1 = cljs.core.__destructure_map(map__70446);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return frontend.storage.set("commands-history",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(new Date()).getTime()], null)));
});
frontend.handler.command_palette.invoke_command = (function frontend$handler$command_palette$invoke_command(p__70447){
var map__70448 = p__70447;
var map__70448__$1 = cljs.core.__destructure_map(map__70448);
var cmd = map__70448__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"action","action",-811238024));
frontend.handler.command_palette.add_history(cmd);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","command-palette-open?","ui/command-palette-open?",2033128967),false);

frontend.state.close_modal_BANG_();

return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
});
frontend.handler.command_palette.top_commands = (function frontend$handler$command_palette$top_commands(limit){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invokes-count","invokes-count",695160859),frontend.handler.command_palette.assoc_invokes(frontend.handler.command_palette.get_commands()))));
});
/**
 * Register a global command searchable by command palette.
 *   `id` is defined as a global unique namespaced key :scope/command-name
 *   `action` must be a zero arity function
 * 
 *   Example:
 *   ```clojure
 *   (register
 * {:id :document/open-logseq-doc
 *  :desc "Document: open Logseq documents"
 *  :action (fn [] (js/window.open "https://docs.logseq.com/"))})
 *   ```
 * 
 *   To add i18n support, prefix `id` with command and put that item in dict.
 *   Example: {:zh-CN {:command.document/open-logseq-doc "打开文档"}}
 */
frontend.handler.command_palette.register = (function frontend$handler$command_palette$register(p__70449){
var map__70450 = p__70449;
var map__70450__$1 = cljs.core.__destructure_map(map__70450);
var command = map__70450__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70450__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
frontend.spec.validate(new cljs.core.Keyword("command","command","command/command",1929916321),command);

var cmds = frontend.handler.command_palette.get_commands();
if(cljs.core.truth_(cljs.core.some((function (existing_cmd){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing_cmd),id);
}),cmds))){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.command-palette",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("command","register","command/register",-1121229879),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Failed to register command. Command with same id already exist",new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"line","line",212345235),84], null)),null);
} else {
return frontend.state.set_state_BANG_(new cljs.core.Keyword("command-palette","commands","command-palette/commands",-168367617),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cmds,command));
}
});
frontend.handler.command_palette.unregister = (function frontend$handler$command_palette$unregister(id){
var id__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
var cmds = frontend.handler.command_palette.get_commands_unique();
if(cljs.core.contains_QMARK_(cmds,id__$1)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("command-palette","commands","command-palette/commands",-168367617),cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cmds,id__$1)));

return frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__70451_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__70451_SHARP_),id__$1);
}),frontend.handler.command_palette.history.cljs$core$IFn$_invoke$arity$0()));
} else {
return null;
}
});
frontend.handler.command_palette.register_global_shortcut_commands = (function frontend$handler$command_palette$register_global_shortcut_commands(){
var cmds = frontend.handler.command_palette.global_shortcut_commands();
var seq__70452 = cljs.core.seq(cmds);
var chunk__70453 = null;
var count__70454 = (0);
var i__70455 = (0);
while(true){
if((i__70455 < count__70454)){
var cmd = chunk__70453.cljs$core$IIndexed$_nth$arity$2(null,i__70455);
frontend.handler.command_palette.register(cmd);


var G__70461 = seq__70452;
var G__70462 = chunk__70453;
var G__70463 = count__70454;
var G__70464 = (i__70455 + (1));
seq__70452 = G__70461;
chunk__70453 = G__70462;
count__70454 = G__70463;
i__70455 = G__70464;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__70452);
if(temp__5720__auto__){
var seq__70452__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70452__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__70452__$1);
var G__70465 = cljs.core.chunk_rest(seq__70452__$1);
var G__70466 = c__4679__auto__;
var G__70467 = cljs.core.count(c__4679__auto__);
var G__70468 = (0);
seq__70452 = G__70465;
chunk__70453 = G__70466;
count__70454 = G__70467;
i__70455 = G__70468;
continue;
} else {
var cmd = cljs.core.first(seq__70452__$1);
frontend.handler.command_palette.register(cmd);


var G__70469 = cljs.core.next(seq__70452__$1);
var G__70470 = null;
var G__70471 = (0);
var G__70472 = (0);
seq__70452 = G__70469;
chunk__70453 = G__70470;
count__70454 = G__70471;
i__70455 = G__70472;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=frontend.handler.command_palette.js.map
