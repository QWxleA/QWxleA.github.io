goog.provide('frontend.handler.shell');
frontend.handler.shell.run_git_command_BANG_ = (function frontend$handler$shell$run_git_command_BANG_(command){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["runGit",command], 0));
});
frontend.handler.shell.run_git_command2_BANG_ = (function frontend$handler$shell$run_git_command2_BANG_(command){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["runGitWithinCurrentGraph",command], 0));
});
frontend.handler.shell.run_pandoc_command_BANG_ = (function frontend$handler$shell$run_pandoc_command_BANG_(command){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["runPandoc",command], 0));
});
frontend.handler.shell.wrap_notification_BANG_ = (function frontend$handler$shell$wrap_notification_BANG_(command,f,args){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(args) : f.call(null,args)),(function (result){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(((clojure.string.blank_QMARK_(result))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code.mr-1","code.mr-1",-1737529325),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(command)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')], null),"was executed successfully!"], null):result),new cljs.core.Keyword(null,"success","success",1890645906),false));
}));
}));
});
frontend.handler.shell.run_command_BANG_ = (function frontend$handler$shell$run_command_BANG_(command){
var vec__69463 = logseq.graph_parser.util.split_first(" ",command);
var command__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69463,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69463,(1),null);
var command__$2 = (function (){var and__4251__auto__ = command__$1;
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.lower_case(command__$1);
} else {
return and__4251__auto__;
}
})();
if((((!(clojure.string.blank_QMARK_(command__$2)))) && ((!(clojure.string.blank_QMARK_(args)))))){
var args__$1 = clojure.string.trim(args);
var G__69472 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(command__$2);
var G__69472__$1 = (((G__69472 instanceof cljs.core.Keyword))?G__69472.fqn:null);
switch (G__69472__$1) {
case "git":
return frontend.handler.shell.wrap_notification_BANG_(command__$2,frontend.handler.shell.run_git_command_BANG_,args__$1);

break;
default:
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(command__$2)," is not supported yet!"].join('')], null),new cljs.core.Keyword(null,"error","error",-978969032));

}
} else {
return null;
}
});
frontend.handler.shell.get_versioned_file_content = (function frontend$handler$shell$get_versioned_file_content(hash,path){
if(cljs.core.truth_((function (){var and__4251__auto__ = hash;
if(cljs.core.truth_(and__4251__auto__)){
return path;
} else {
return and__4251__auto__;
}
})())){
var repo = frontend.state.get_current_repo();
var local_dir = frontend.config.get_local_dir(repo);
var path__$1 = clojure.string.replace(path,[local_dir,"/"].join(''),"");
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.shell.run_git_command_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["show",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash),":",path__$1].join('')], null)),(function (content){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","display-file-version","modal/display-file-version",1594347634),path__$1,content,hash], null)));
}));
}));
} else {
return null;
}
});
frontend.handler.shell.get_file_latest_git_log = (function frontend$handler$shell$get_file_latest_git_log(page,n){
if(cljs.core.integer_QMARK_(n)){
var file_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page));
var temp__5720__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1((frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(file_id) : frontend.db.entity.call(null,file_id)));
if(cljs.core.truth_(temp__5720__auto__)){
var path = temp__5720__auto__;
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.shell.run_git_command_BANG_(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["log",["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),"--pretty=format:Commit: %C(auto)%h$$$%s$$$%ad","-p",path], null)),(function (result){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__69481_SHARP_){
return clojure.string.starts_with_QMARK_(p1__69481_SHARP_,"Commit: ");
}),clojure.string.split_lines(result)),(function (lines){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"File history - ",path], null),(function (){var iter__4652__auto__ = (function frontend$handler$shell$get_file_latest_git_log_$_iter__69483(s__69484){
return (new cljs.core.LazySeq(null,(function (){
var s__69484__$1 = s__69484;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__69484__$1);
if(temp__5720__auto____$1){
var s__69484__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69484__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69484__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69486 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69485 = (0);
while(true){
if((i__69485 < size__4651__auto__)){
var line = cljs.core._nth(c__4650__auto__,i__69485);
cljs.core.chunk_append(b__69486,(function (){var vec__69493 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,"$$$");
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69493,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69493,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69493,(2),null);
var hash__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(8));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hash__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium.mr-1.inline","a.font-medium.mr-1.inline",-1036322231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__69485,vec__69493,hash,title,time,hash__$1,line,c__4650__auto__,size__4651__auto__,b__69486,s__69484__$2,temp__5720__auto____$1,path,temp__5720__auto__,file_id){
return (function (){
return frontend.handler.shell.get_versioned_file_content(hash__$1,path);
});})(i__69485,vec__69493,hash,title,time,hash__$1,line,c__4650__auto__,size__4651__auto__,b__69486,s__69484__$2,temp__5720__auto____$1,path,temp__5720__auto__,file_id))
], null),hash__$1], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),time], null)], null);
})());

var G__69504 = (i__69485 + (1));
i__69485 = G__69504;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69486),frontend$handler$shell$get_file_latest_git_log_$_iter__69483(cljs.core.chunk_rest(s__69484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69486),null);
}
} else {
var line = cljs.core.first(s__69484__$2);
return cljs.core.cons((function (){var vec__69496 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,"$$$");
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69496,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69496,(1),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69496,(2),null);
var hash__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(8));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-4","div.my-4",-1142188737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hash__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-2","div.mb-2",-710047800),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.font-medium.mr-1.inline","a.font-medium.mr-1.inline",-1036322231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__69496,hash,title,time,hash__$1,line,s__69484__$2,temp__5720__auto____$1,path,temp__5720__auto__,file_id){
return (function (){
return frontend.handler.shell.get_versioned_file_content(hash__$1,path);
});})(vec__69496,hash,title,time,hash__$1,line,s__69484__$2,temp__5720__auto____$1,path,temp__5720__auto__,file_id))
], null),hash__$1], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),time], null)], null);
})(),frontend$handler$shell$get_file_latest_git_log_$_iter__69483(cljs.core.rest(s__69484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(lines);
})()], null),new cljs.core.Keyword(null,"success","success",1890645906),false));
}));
}));
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.shell.set_git_username_and_email = (function frontend$handler$shell$set_git_username_and_email(username,email){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___42626__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.shell.run_git_command_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config","--global","user.name",username], null)),(function (_r1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.shell.run_git_command_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config","--global","user.email",email], null)),(function (_r2){
return promesa.protocols._promise((function (){
frontend.state.close_modal_BANG_();

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"git config successfully!"], null),new cljs.core.Keyword(null,"success","success",1890645906));
})()
);
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.shell.js.map
