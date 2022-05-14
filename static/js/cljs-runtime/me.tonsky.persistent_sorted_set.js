goog.provide('me.tonsky.persistent_sorted_set');
me.tonsky.persistent_sorted_set.min_len = (16);
me.tonsky.persistent_sorted_set.max_len = (32);
me.tonsky.persistent_sorted_set.avg_len = (((32) + (16)) >>> (1));
me.tonsky.persistent_sorted_set.level_shift = (cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67810_SHARP_){
return (((32) & (1 << p1__67810_SHARP_)) != 0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((31),(-1),(-1)))) + (1));
me.tonsky.persistent_sorted_set.path_mask = (((1) << me.tonsky.persistent_sorted_set.level_shift) - (1));
me.tonsky.persistent_sorted_set.empty_path = (0);
me.tonsky.persistent_sorted_set.path_get = (function me$tonsky$persistent_sorted_set$path_get(path,level){
return (me.tonsky.persistent_sorted_set.path_mask & (path >>> level));
});
me.tonsky.persistent_sorted_set.path_set = (function me$tonsky$persistent_sorted_set$path_set(path,level,idx){
return (path | (idx << level));
});
me.tonsky.persistent_sorted_set.binary_search_l = (function me$tonsky$persistent_sorted_set$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$(r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if(((cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(mk,k) : cmp.call(null,mk,k)) < (0))){
var G__68026 = (m + (1));
var G__68027 = r__$1;
l = G__68026;
r__$1 = G__68027;
continue;
} else {
var G__68028 = l;
var G__68029 = (m - (1));
l = G__68028;
r__$1 = G__68029;
continue;
}
} else {
return l;
}
break;
}
});
me.tonsky.persistent_sorted_set.binary_search_r = (function me$tonsky$persistent_sorted_set$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$(r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if(((cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(mk,k) : cmp.call(null,mk,k)) > (0))){
var G__68030 = l;
var G__68031 = (m - (1));
l = G__68030;
r__$1 = G__68031;
continue;
} else {
var G__68032 = (m + (1));
var G__68033 = r__$1;
l = G__68032;
r__$1 = G__68033;
continue;
}
} else {
return l;
}
break;
}
});
me.tonsky.persistent_sorted_set.lookup_exact = (function me$tonsky$persistent_sorted_set$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,arr,(arr_l - (1)),key);
if((((idx < arr_l)) && (((0) === (function (){var G__67823 = (arr[idx]);
var G__67824 = key;
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__67823,G__67824) : cmp.call(null,G__67823,G__67824));
})())))){
return idx;
} else {
return (-1);
}
});
me.tonsky.persistent_sorted_set.lookup_range = (function me$tonsky$persistent_sorted_set$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
me.tonsky.persistent_sorted_set.cut_n_splice = (function me$tonsky$persistent_sorted_set$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = me.tonsky.persistent_sorted_set.arrays.make_array(((l1 + xs_l) + l2));
var l__67757__auto___68035 = (splice_from - cut_from);
var n__4741__auto___68036 = l__67757__auto___68035;
var i__67758__auto___68037 = (0);
while(true){
if((i__67758__auto___68037 < n__4741__auto___68036)){
(new_arr[(i__67758__auto___68037 + (0))] = (arr[(i__67758__auto___68037 + cut_from)]));

var G__68038 = (i__67758__auto___68037 + (1));
i__67758__auto___68037 = G__68038;
continue;
} else {
}
break;
}

var l__67757__auto___68039 = (xs_l - (0));
var n__4741__auto___68040 = l__67757__auto___68039;
var i__67758__auto___68041 = (0);
while(true){
if((i__67758__auto___68041 < n__4741__auto___68040)){
(new_arr[(i__67758__auto___68041 + l1)] = (xs[(i__67758__auto___68041 + (0))]));

var G__68042 = (i__67758__auto___68041 + (1));
i__67758__auto___68041 = G__68042;
continue;
} else {
}
break;
}

var l__67757__auto___68043 = (cut_to - splice_to);
var n__4741__auto___68044 = l__67757__auto___68043;
var i__67758__auto___68045 = (0);
while(true){
if((i__67758__auto___68045 < n__4741__auto___68044)){
(new_arr[(i__67758__auto___68045 + l1xs)] = (arr[(i__67758__auto___68045 + splice_to)]));

var G__68047 = (i__67758__auto___68045 + (1));
i__67758__auto___68045 = G__68047;
continue;
} else {
}
break;
}

return new_arr;
});
me.tonsky.persistent_sorted_set.splice = (function me$tonsky$persistent_sorted_set$splice(arr,splice_from,splice_to,xs){
return me.tonsky.persistent_sorted_set.cut_n_splice(arr,(0),arr.length,splice_from,splice_to,xs);
});
me.tonsky.persistent_sorted_set.insert = (function me$tonsky$persistent_sorted_set$insert(arr,idx,xs){
return me.tonsky.persistent_sorted_set.cut_n_splice(arr,(0),arr.length,idx,idx,xs);
});
me.tonsky.persistent_sorted_set.merge_n_split = (function me$tonsky$persistent_sorted_set$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = me.tonsky.persistent_sorted_set.arrays.make_array(r1_l);
var r2 = me.tonsky.persistent_sorted_set.arrays.make_array(r2_l);
if((a1_l <= r1_l)){
var l__67757__auto___68049 = (a1_l - (0));
var n__4741__auto___68050 = l__67757__auto___68049;
var i__67758__auto___68051 = (0);
while(true){
if((i__67758__auto___68051 < n__4741__auto___68050)){
(r1[(i__67758__auto___68051 + (0))] = (a1[(i__67758__auto___68051 + (0))]));

var G__68052 = (i__67758__auto___68051 + (1));
i__67758__auto___68051 = G__68052;
continue;
} else {
}
break;
}

var l__67757__auto___68053 = ((r1_l - a1_l) - (0));
var n__4741__auto___68054 = l__67757__auto___68053;
var i__67758__auto___68055 = (0);
while(true){
if((i__67758__auto___68055 < n__4741__auto___68054)){
(r1[(i__67758__auto___68055 + a1_l)] = (a2[(i__67758__auto___68055 + (0))]));

var G__68056 = (i__67758__auto___68055 + (1));
i__67758__auto___68055 = G__68056;
continue;
} else {
}
break;
}

var l__67757__auto___68057 = (a2_l - (r1_l - a1_l));
var n__4741__auto___68058 = l__67757__auto___68057;
var i__67758__auto___68059 = (0);
while(true){
if((i__67758__auto___68059 < n__4741__auto___68058)){
(r2[(i__67758__auto___68059 + (0))] = (a2[(i__67758__auto___68059 + (r1_l - a1_l))]));

var G__68060 = (i__67758__auto___68059 + (1));
i__67758__auto___68059 = G__68060;
continue;
} else {
}
break;
}
} else {
var l__67757__auto___68061 = (r1_l - (0));
var n__4741__auto___68062 = l__67757__auto___68061;
var i__67758__auto___68063 = (0);
while(true){
if((i__67758__auto___68063 < n__4741__auto___68062)){
(r1[(i__67758__auto___68063 + (0))] = (a1[(i__67758__auto___68063 + (0))]));

var G__68064 = (i__67758__auto___68063 + (1));
i__67758__auto___68063 = G__68064;
continue;
} else {
}
break;
}

var l__67757__auto___68065 = (a1_l - r1_l);
var n__4741__auto___68066 = l__67757__auto___68065;
var i__67758__auto___68067 = (0);
while(true){
if((i__67758__auto___68067 < n__4741__auto___68066)){
(r2[(i__67758__auto___68067 + (0))] = (a1[(i__67758__auto___68067 + r1_l)]));

var G__68068 = (i__67758__auto___68067 + (1));
i__67758__auto___68067 = G__68068;
continue;
} else {
}
break;
}

var l__67757__auto___68069 = (a2_l - (0));
var n__4741__auto___68070 = l__67757__auto___68069;
var i__67758__auto___68071 = (0);
while(true){
if((i__67758__auto___68071 < n__4741__auto___68070)){
(r2[(i__67758__auto___68071 + (a1_l - r1_l))] = (a2[(i__67758__auto___68071 + (0))]));

var G__68072 = (i__67758__auto___68071 + (1));
i__67758__auto___68071 = G__68072;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
me.tonsky.persistent_sorted_set.eq_arr = (function me$tonsky$persistent_sorted_set$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__4251__auto__ = (len === (a2_to - a2_from));
if(and__4251__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if((!(((0) === (function (){var G__67830 = (a1[(i + a1_from)]);
var G__67831 = (a2[(i + a2_from)]);
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__67830,G__67831) : cmp.call(null,G__67830,G__67831));
})())))){
return false;
} else {
var G__68073 = (i + (1));
i = G__68073;
continue;

}
}
break;
}
} else {
return and__4251__auto__;
}
});
me.tonsky.persistent_sorted_set.check_n_splice = (function me$tonsky$persistent_sorted_set$check_n_splice(cmp,arr,from,to,new_arr){
if(me.tonsky.persistent_sorted_set.eq_arr(cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return me.tonsky.persistent_sorted_set.splice(arr,from,to,new_arr);
}
});
/**
 * Drop non-nil references and return array of arguments
 */
me.tonsky.persistent_sorted_set.return_array = (function me$tonsky$persistent_sorted_set$return_array(var_args){
var G__67833 = arguments.length;
switch (G__67833) {
case 1:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
}));

(me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
}));

(me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
}));

(me.tonsky.persistent_sorted_set.return_array.cljs$lang$maxFixedArity = 3);


/**
 * @interface
 */
me.tonsky.persistent_sorted_set.INode = function(){};

var me$tonsky$persistent_sorted_set$INode$node_lim_key$dyn_68075 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set.node_lim_key[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set.node_lim_key["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INode.node-lim-key",_);
}
}
});
me.tonsky.persistent_sorted_set.node_lim_key = (function me$tonsky$persistent_sorted_set$node_lim_key(_){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1(_);
} else {
return me$tonsky$persistent_sorted_set$INode$node_lim_key$dyn_68075(_);
}
});

var me$tonsky$persistent_sorted_set$INode$node_len$dyn_68077 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set.node_len[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set.node_len["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INode.node-len",_);
}
}
});
me.tonsky.persistent_sorted_set.node_len = (function me$tonsky$persistent_sorted_set$node_len(_){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_len$arity$1(_);
} else {
return me$tonsky$persistent_sorted_set$INode$node_len$dyn_68077(_);
}
});

var me$tonsky$persistent_sorted_set$INode$node_merge$dyn_68078 = (function (_,next){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set.node_merge[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__4551__auto__.call(null,_,next));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set.node_merge["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__4549__auto__.call(null,_,next));
} else {
throw cljs.core.missing_protocol("INode.node-merge",_);
}
}
});
me.tonsky.persistent_sorted_set.node_merge = (function me$tonsky$persistent_sorted_set$node_merge(_,next){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2(_,next);
} else {
return me$tonsky$persistent_sorted_set$INode$node_merge$dyn_68078(_,next);
}
});

var me$tonsky$persistent_sorted_set$INode$node_merge_n_split$dyn_68082 = (function (_,next){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set.node_merge_n_split[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__4551__auto__.call(null,_,next));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set.node_merge_n_split["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__4549__auto__.call(null,_,next));
} else {
throw cljs.core.missing_protocol("INode.node-merge-n-split",_);
}
}
});
me.tonsky.persistent_sorted_set.node_merge_n_split = (function me$tonsky$persistent_sorted_set$node_merge_n_split(_,next){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2(_,next);
} else {
return me$tonsky$persistent_sorted_set$INode$node_merge_n_split$dyn_68082(_,next);
}
});

var me$tonsky$persistent_sorted_set$INode$node_lookup$dyn_68083 = (function (_,cmp,key){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set.node_lookup[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__4551__auto__.call(null,_,cmp,key));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set.node_lookup["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__4549__auto__.call(null,_,cmp,key));
} else {
throw cljs.core.missing_protocol("INode.node-lookup",_);
}
}
});
me.tonsky.persistent_sorted_set.node_lookup = (function me$tonsky$persistent_sorted_set$node_lookup(_,cmp,key){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3(_,cmp,key);
} else {
return me$tonsky$persistent_sorted_set$INode$node_lookup$dyn_68083(_,cmp,key);
}
});

var me$tonsky$persistent_sorted_set$INode$node_conj$dyn_68086 = (function (_,cmp,key){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set.node_conj[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__4551__auto__.call(null,_,cmp,key));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set.node_conj["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__4549__auto__.call(null,_,cmp,key));
} else {
throw cljs.core.missing_protocol("INode.node-conj",_);
}
}
});
me.tonsky.persistent_sorted_set.node_conj = (function me$tonsky$persistent_sorted_set$node_conj(_,cmp,key){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3(_,cmp,key);
} else {
return me$tonsky$persistent_sorted_set$INode$node_conj$dyn_68086(_,cmp,key);
}
});

var me$tonsky$persistent_sorted_set$INode$node_disj$dyn_68089 = (function (_,cmp,key,root_QMARK_,left,right){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set.node_disj[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$6 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$6(_,cmp,key,root_QMARK_,left,right) : m__4551__auto__.call(null,_,cmp,key,root_QMARK_,left,right));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set.node_disj["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$6 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$6(_,cmp,key,root_QMARK_,left,right) : m__4549__auto__.call(null,_,cmp,key,root_QMARK_,left,right));
} else {
throw cljs.core.missing_protocol("INode.node-disj",_);
}
}
});
me.tonsky.persistent_sorted_set.node_disj = (function me$tonsky$persistent_sorted_set$node_disj(_,cmp,key,root_QMARK_,left,right){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
return me$tonsky$persistent_sorted_set$INode$node_disj$dyn_68089(_,cmp,key,root_QMARK_,left,right);
}
});

me.tonsky.persistent_sorted_set.rotate = (function me$tonsky$persistent_sorted_set$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1(node);
} else {
if((me.tonsky.persistent_sorted_set.node_len(node) > (16))){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3(left,node,right);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = left;
if(cljs.core.truth_(and__4251__auto__)){
return (me.tonsky.persistent_sorted_set.node_len(left) <= (16));
} else {
return and__4251__auto__;
}
})())){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2(me.tonsky.persistent_sorted_set.node_merge(left,node),right);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = right;
if(cljs.core.truth_(and__4251__auto__)){
return (me.tonsky.persistent_sorted_set.node_len(right) <= (16));
} else {
return and__4251__auto__;
}
})())){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2(left,me.tonsky.persistent_sorted_set.node_merge(node,right));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = left;
if(cljs.core.truth_(and__4251__auto__)){
return (((right == null)) || ((me.tonsky.persistent_sorted_set.node_len(left) < me.tonsky.persistent_sorted_set.node_len(right))));
} else {
return and__4251__auto__;
}
})())){
var nodes = me.tonsky.persistent_sorted_set.node_merge_n_split(left,node);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3((nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = me.tonsky.persistent_sorted_set.node_merge_n_split(node,right);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3(left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.INode}
*/
me.tonsky.persistent_sorted_set.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
});
(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var arr__67777__auto__ = self__.keys;
return (arr__67777__auto__[(arr__67777__auto__.length - (1))]);
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.aconcat(self__.keys,next.keys),me.tonsky.persistent_sorted_set.arrays.aconcat(self__.pointers,next.pointers)));
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = me.tonsky.persistent_sorted_set.merge_n_split(self__.keys,next.keys);
var ps = me.tonsky.persistent_sorted_set.merge_n_split(self__.pointers,next.pointers);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2((new me.tonsky.persistent_sorted_set.Node((ks[(0)]),(ps[(0)]))),(new me.tonsky.persistent_sorted_set.Node((ks[(1)]),(ps[(1)]))));
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_range(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return me.tonsky.persistent_sorted_set.node_lookup((self__.pointers[idx]),cmp,key);
}
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = me.tonsky.persistent_sorted_set.node_conj((self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = me.tonsky.persistent_sorted_set.check_n_splice(cmp,self__.keys,idx,(idx + (1)),me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,nodes));
var new_pointers = me.tonsky.persistent_sorted_set.splice(self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= (32))){
return [(new me.tonsky.persistent_sorted_set.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new me.tonsky.persistent_sorted_set.Node(new_keys.slice((0),middle),new_pointers.slice((0),middle))),(new me.tonsky.persistent_sorted_set.Node(new_keys.slice(middle),new_pointers.slice(middle)))];
}
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_range(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = me.tonsky.persistent_sorted_set.node_disj(child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = me.tonsky.persistent_sorted_set.check_n_splice(cmp,self__.keys,left_idx,right_idx,me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,disjned));
var new_pointers = me.tonsky.persistent_sorted_set.splice(self__.pointers,left_idx,right_idx,disjned);
return me.tonsky.persistent_sorted_set.rotate((new me.tonsky.persistent_sorted_set.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
}));

(me.tonsky.persistent_sorted_set.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
}));

(me.tonsky.persistent_sorted_set.Node.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Node.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Node");

(me.tonsky.persistent_sorted_set.Node.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"me.tonsky.persistent-sorted-set/Node");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Node.
 */
me.tonsky.persistent_sorted_set.__GT_Node = (function me$tonsky$persistent_sorted_set$__GT_Node(keys,pointers){
return (new me.tonsky.persistent_sorted_set.Node(keys,pointers));
});


/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.INode}
*/
me.tonsky.persistent_sorted_set.Leaf = (function (keys){
this.keys = keys;
});
(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var arr__67777__auto__ = self__.keys;
return (arr__67777__auto__[(arr__67777__auto__.length - (1))]);
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.arrays.aconcat(self__.keys,next.keys)));
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = me.tonsky.persistent_sorted_set.merge_n_split(self__.keys,next.keys);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2((new me.tonsky.persistent_sorted_set.Leaf((ks[(0)]))),(new me.tonsky.persistent_sorted_set.Leaf((ks[(1)]))));
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_exact(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if((((idx < keys_l)) && (((0) === (function (){var G__67849 = key;
var G__67850 = (self__.keys[idx]);
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__67849,G__67850) : cmp.call(null,G__67849,G__67850));
})())))){
return null;
} else {
if((keys_l === (32))){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new me.tonsky.persistent_sorted_set.Leaf(self__.keys.slice((0),middle))),(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.cut_n_splice(self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.cut_n_splice(self__.keys,(0),middle,idx,idx,[key]))),(new me.tonsky.persistent_sorted_set.Leaf(self__.keys.slice(middle,keys_l)))];
}
} else {
return [(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.splice(self__.keys,idx,idx,[key])))];

}
}
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_exact(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = me.tonsky.persistent_sorted_set.splice(self__.keys,idx,(idx + (1)),[]);
return me.tonsky.persistent_sorted_set.rotate((new me.tonsky.persistent_sorted_set.Leaf(new_keys)),root_QMARK_,left,right);
}
}));

(me.tonsky.persistent_sorted_set.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
}));

(me.tonsky.persistent_sorted_set.Leaf.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Leaf.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Leaf");

(me.tonsky.persistent_sorted_set.Leaf.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"me.tonsky.persistent-sorted-set/Leaf");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Leaf.
 */
me.tonsky.persistent_sorted_set.__GT_Leaf = (function me$tonsky$persistent_sorted_set$__GT_Leaf(keys){
return (new me.tonsky.persistent_sorted_set.Leaf(keys));
});



me.tonsky.persistent_sorted_set.uninitialized_hash = null;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ITransientSet}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.BTSet = (function (root,shift,cnt,comparator,meta,_hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8332;
});
(me.tonsky.persistent_sorted_set.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return me.tonsky.persistent_sorted_set.node_lookup(self__.root,self__.comparator,k);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = me.tonsky.persistent_sorted_set.node_lookup(self__.root,self__.comparator,k);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq(this$__$1));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__._hash));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq((me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1)));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4360__auto__ = self__._hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__._hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.set_QMARK_(other)) && ((((self__.cnt === cljs.core.count(other))) && (cljs.core.every_QMARK_((function (p1__67853_SHARP_){
return cljs.core.contains_QMARK_(this$__$1,p1__67853_SHARP_);
}),other)))));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),self__.comparator,self__.meta,null));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.disj.call(null,this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = (me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1));
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core._reduce(i,f);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = (me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1));
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core._reduce(i,f,start);
} else {
return start;
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.conj.call(null,this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.disj.call(null,this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__._hash));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.conj.call(null,this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.call = (function (unused__10938__auto__){
var self__ = this;
var self__ = this;
var G__67859 = (arguments.length - (1));
switch (G__67859) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.apply = (function (self__,args67854){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67854)));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(me.tonsky.persistent_sorted_set.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(me.tonsky.persistent_sorted_set.BTSet.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.BTSet.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/BTSet");

(me.tonsky.persistent_sorted_set.BTSet.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"me.tonsky.persistent-sorted-set/BTSet");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/BTSet.
 */
me.tonsky.persistent_sorted_set.__GT_BTSet = (function me$tonsky$persistent_sorted_set$__GT_BTSet(root,shift,cnt,comparator,meta,_hash){
return (new me.tonsky.persistent_sorted_set.BTSet(root,shift,cnt,comparator,meta,_hash));
});

me.tonsky.persistent_sorted_set.keys_for = (function me$tonsky$persistent_sorted_set$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__68109 = (level - me.tonsky.persistent_sorted_set.level_shift);
var G__68110 = (node.pointers[me.tonsky.persistent_sorted_set.path_get(path,level)]);
level = G__68109;
node = G__68110;
continue;
} else {
return node.keys;
}
break;
}
});
me.tonsky.persistent_sorted_set.alter_btset = (function me$tonsky$persistent_sorted_set$alter_btset(set,root,shift,cnt){
return (new me.tonsky.persistent_sorted_set.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
me.tonsky.persistent_sorted_set._next_path = (function me$tonsky$persistent_sorted_set$_next_path(node,path,level){
var idx = me.tonsky.persistent_sorted_set.path_get(path,level);
if((level > (0))){
var sub_path = (function (){var G__67867 = (node.pointers[idx]);
var G__67868 = path;
var G__67869 = (level - me.tonsky.persistent_sorted_set.level_shift);
return (me.tonsky.persistent_sorted_set._next_path.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set._next_path.cljs$core$IFn$_invoke$arity$3(G__67867,G__67868,G__67869) : me.tonsky.persistent_sorted_set._next_path.call(null,G__67867,G__67868,G__67869));
})();
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return me.tonsky.persistent_sorted_set.path_set((0),level,(idx + (1)));
} else {
return (-1);
}
} else {
return me.tonsky.persistent_sorted_set.path_set(sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return me.tonsky.persistent_sorted_set.path_set((0),(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
me.tonsky.persistent_sorted_set.next_path = (function me$tonsky$persistent_sorted_set$next_path(set,path){
return me.tonsky.persistent_sorted_set._next_path(set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
me.tonsky.persistent_sorted_set._rpath = (function me$tonsky$persistent_sorted_set$_rpath(node,level){
var node__$1 = node;
var path = (0);
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__68112 = (function (){var arr__67777__auto__ = node__$1.pointers;
return (arr__67777__auto__[(arr__67777__auto__.length - (1))]);
})();
var G__68113 = me.tonsky.persistent_sorted_set.path_set(path,level__$1,(node__$1.pointers.length - (1)));
var G__68114 = (level__$1 - me.tonsky.persistent_sorted_set.level_shift);
node__$1 = G__68112;
path = G__68113;
level__$1 = G__68114;
continue;
} else {
return me.tonsky.persistent_sorted_set.path_set(path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
me.tonsky.persistent_sorted_set._prev_path = (function me$tonsky$persistent_sorted_set$_prev_path(node,path,level){
var idx = me.tonsky.persistent_sorted_set.path_get(path,level);
if((level > (0))){
var sub_level = (level - me.tonsky.persistent_sorted_set.level_shift);
var sub_path = (function (){var G__67874 = (node.pointers[idx]);
var G__67875 = path;
var G__67876 = sub_level;
return (me.tonsky.persistent_sorted_set._prev_path.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set._prev_path.cljs$core$IFn$_invoke$arity$3(G__67874,G__67875,G__67876) : me.tonsky.persistent_sorted_set._prev_path.call(null,G__67874,G__67875,G__67876));
})();
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = me.tonsky.persistent_sorted_set._rpath((node.pointers[idx__$1]),sub_level);
return me.tonsky.persistent_sorted_set.path_set(sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return me.tonsky.persistent_sorted_set.path_set(sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return me.tonsky.persistent_sorted_set.path_set((0),(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
me.tonsky.persistent_sorted_set.prev_path = (function me$tonsky$persistent_sorted_set$prev_path(set,path){
return me.tonsky.persistent_sorted_set._prev_path(set.root,path,set.shift);
});

/**
 * Iterator that represents the whole set
 */
me.tonsky.persistent_sorted_set.btset_iter = (function me$tonsky$persistent_sorted_set$btset_iter(set){
if((me.tonsky.persistent_sorted_set.node_len(set.root) > (0))){
var left = (0);
var right = (me.tonsky.persistent_sorted_set._rpath(set.root,set.shift) + (1));
return (me.tonsky.persistent_sorted_set.iter.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.iter.cljs$core$IFn$_invoke$arity$3(set,left,right) : me.tonsky.persistent_sorted_set.iter.call(null,set,left,right));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IChunk}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.Chunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (self__.arr[(self__.off + i)]);
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if((((i >= (0))) && ((i < (self__.end - self__.off))))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IChunk$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
if((self__.off === self__.end)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return cljs.core._reduce(this$__$1.cljs$core$IChunk$_drop_first$arity$1(null),f,(self__.arr[self__.off]));
}
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var val = start;
var n = self__.off;
while(true){
if((n < self__.end)){
var val_SINGLEQUOTE_ = (function (){var G__67881 = val;
var G__67882 = (self__.arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67881,G__67882) : f.call(null,G__67881,G__67882));
})();
if(cljs.core.reduced_QMARK_(val_SINGLEQUOTE_)){
return cljs.core.deref(val_SINGLEQUOTE_);
} else {
var G__68124 = val_SINGLEQUOTE_;
var G__68125 = (n + (1));
val = G__68124;
n = G__68125;
continue;
}
} else {
return val;
}
break;
}
}));

(me.tonsky.persistent_sorted_set.Chunk.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
}));

(me.tonsky.persistent_sorted_set.Chunk.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Chunk.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Chunk");

(me.tonsky.persistent_sorted_set.Chunk.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"me.tonsky.persistent-sorted-set/Chunk");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Chunk.
 */
me.tonsky.persistent_sorted_set.__GT_Chunk = (function me$tonsky$persistent_sorted_set$__GT_Chunk(arr,off,end){
return (new me.tonsky.persistent_sorted_set.Chunk(arr,off,end));
});


/**
 * @interface
 */
me.tonsky.persistent_sorted_set.IIter = function(){};

var me$tonsky$persistent_sorted_set$IIter$_copy$dyn_68127 = (function (this$,left,right){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (me.tonsky.persistent_sorted_set._copy[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,left,right) : m__4551__auto__.call(null,this$,left,right));
} else {
var m__4549__auto__ = (me.tonsky.persistent_sorted_set._copy["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,left,right) : m__4549__auto__.call(null,this$,left,right));
} else {
throw cljs.core.missing_protocol("IIter.-copy",this$);
}
}
});
me.tonsky.persistent_sorted_set._copy = (function me$tonsky$persistent_sorted_set$_copy(this$,left,right){
if((((!((this$ == null)))) && ((!((this$.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 == null)))))){
return this$.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(this$,left,right);
} else {
return me$tonsky$persistent_sorted_set$IIter$_copy$dyn_68127(this$,left,right);
}
});


/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.IIter}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 2309488832;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
(me.tonsky.persistent_sorted_set.Iter.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.seq(this$__$1));
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx + (1)) < self__.keys.length)){
if(((self__.left + (1)) < self__.right)){
return (new me.tonsky.persistent_sorted_set.Iter(self__.set,(self__.left + (1)),self__.right,self__.keys,(self__.idx + (1))));
} else {
return null;
}
} else {
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.next_path(self__.set,self__.left);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),left_SINGLEQUOTE_)) && ((left_SINGLEQUOTE_ < self__.right)))){
return this$__$1.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(null,left_SINGLEQUOTE_,self__.right);
} else {
return null;
}
}
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
var G__67939 = self__.set;
var G__67940 = me.tonsky.persistent_sorted_set.prev_path(self__.set,self__.left);
var G__67941 = me.tonsky.persistent_sorted_set.prev_path(self__.set,self__.right);
return (me.tonsky.persistent_sorted_set.riter.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.riter.cljs$core$IFn$_invoke$arity$3(G__67939,G__67940,G__67941) : me.tonsky.persistent_sorted_set.riter.call(null,G__67939,G__67940,G__67941));
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,other);
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
if((self__.keys == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var first = this$__$1.cljs$core$ISeq$_first$arity$1(null);
var temp__5722__auto__ = this$__$1.cljs$core$INext$_next$arity$1(null);
if((temp__5722__auto__ == null)){
return first;
} else {
var next = temp__5722__auto__;
return cljs.core._reduce(next,f,first);
}
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var left__$1 = self__.left;
var keys__$1 = self__.keys;
var idx__$1 = self__.idx;
var acc = start;
while(true){
if((keys__$1 == null)){
return acc;
} else {
var new_acc = (function (){var G__67949 = acc;
var G__67950 = (keys__$1[idx__$1]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__67949,G__67950) : f.call(null,G__67949,G__67950));
})();
if(cljs.core.reduced_QMARK_(new_acc)){
return cljs.core.deref(new_acc);
} else {
if(((idx__$1 + (1)) < keys__$1.length)){
if(((left__$1 + (1)) < self__.right)){
var G__68150 = (left__$1 + (1));
var G__68151 = keys__$1;
var G__68152 = (idx__$1 + (1));
var G__68153 = new_acc;
left__$1 = G__68150;
keys__$1 = G__68151;
idx__$1 = G__68152;
acc = G__68153;
continue;
} else {
return new_acc;
}
} else {
var new_left = me.tonsky.persistent_sorted_set.next_path(self__.set,left__$1);
if((((!(((-1) === new_left)))) && ((new_left < self__.right)))){
var G__68158 = new_left;
var G__68159 = me.tonsky.persistent_sorted_set.keys_for(self__.set,new_left);
var G__68160 = me.tonsky.persistent_sorted_set.path_get(new_left,(0));
var G__68161 = new_acc;
left__$1 = G__68158;
keys__$1 = G__68159;
idx__$1 = G__68160;
acc = G__68161;
continue;
} else {
return new_acc;
}

}
}
}
break;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = this$__$1.cljs$core$INext$_next$arity$1(null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.List.EMPTY;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var end_idx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.left | me.tonsky.persistent_sorted_set.path_mask),(self__.right | me.tonsky.persistent_sorted_set.path_mask)))?(self__.right & me.tonsky.persistent_sorted_set.path_mask):self__.keys.length);
return (new me.tonsky.persistent_sorted_set.Chunk(self__.keys,self__.idx,end_idx));
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = this$__$1.cljs$core$IChunkedNext$_chunked_next$arity$1(null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.List.EMPTY;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$IIter$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 = (function (_,l,r){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Iter(self__.set,l,r,me.tonsky.persistent_sorted_set.keys_for(self__.set,l),me.tonsky.persistent_sorted_set.path_get(l,(0))));
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.next_path(self__.set,(self__.left + ((self__.keys.length - self__.idx) - (1))));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),left_SINGLEQUOTE_)) && ((left_SINGLEQUOTE_ < self__.right)))){
return this$__$1.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(null,left_SINGLEQUOTE_,self__.right);
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(me.tonsky.persistent_sorted_set.Iter.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Iter.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Iter");

(me.tonsky.persistent_sorted_set.Iter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"me.tonsky.persistent-sorted-set/Iter");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Iter.
 */
me.tonsky.persistent_sorted_set.__GT_Iter = (function me$tonsky$persistent_sorted_set$__GT_Iter(set,left,right,keys,idx){
return (new me.tonsky.persistent_sorted_set.Iter(set,left,right,keys,idx));
});

me.tonsky.persistent_sorted_set.iter = (function me$tonsky$persistent_sorted_set$iter(set,left,right){
return (new me.tonsky.persistent_sorted_set.Iter(set,left,right,me.tonsky.persistent_sorted_set.keys_for(set,left),me.tonsky.persistent_sorted_set.path_get(left,(0))));
});

/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.IIter}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
*/
me.tonsky.persistent_sorted_set.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 2308964544;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(me.tonsky.persistent_sorted_set.ReverseIter.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.seq(this$__$1));
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx - (1)) >= (0))){
if(((self__.right - (1)) > self__.left)){
return (new me.tonsky.persistent_sorted_set.ReverseIter(self__.set,self__.left,(self__.right - (1)),self__.keys,(self__.idx - (1))));
} else {
return null;
}
} else {
var right__$1 = me.tonsky.persistent_sorted_set.prev_path(self__.set,self__.right);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),right__$1)) && ((right__$1 > self__.left)))){
return this$__$1.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(null,self__.left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
var new_left = (((self__.left === (-1)))?(0):me.tonsky.persistent_sorted_set.next_path(self__.set,self__.left));
var new_right = me.tonsky.persistent_sorted_set.next_path(self__.set,self__.right);
var new_right__$1 = (((new_right === (-1)))?(self__.right + (1)):new_right);
return me.tonsky.persistent_sorted_set.iter(self__.set,new_left,new_right__$1);
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,other);
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = this$__$1.cljs$core$INext$_next$arity$1(null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.List.EMPTY;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$IIter$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 = (function (_,l,r){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.ReverseIter(self__.set,l,r,me.tonsky.persistent_sorted_set.keys_for(self__.set,r),me.tonsky.persistent_sorted_set.path_get(r,(0))));
}));

(me.tonsky.persistent_sorted_set.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/ReverseIter");

(me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"me.tonsky.persistent-sorted-set/ReverseIter");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/ReverseIter.
 */
me.tonsky.persistent_sorted_set.__GT_ReverseIter = (function me$tonsky$persistent_sorted_set$__GT_ReverseIter(set,left,right,keys,idx){
return (new me.tonsky.persistent_sorted_set.ReverseIter(set,left,right,keys,idx));
});

me.tonsky.persistent_sorted_set.riter = (function me$tonsky$persistent_sorted_set$riter(set,left,right){
return (new me.tonsky.persistent_sorted_set.ReverseIter(set,left,right,me.tonsky.persistent_sorted_set.keys_for(set,right),me.tonsky.persistent_sorted_set.path_get(right,(0))));
});
me.tonsky.persistent_sorted_set._distance = (function me$tonsky$persistent_sorted_set$_distance(node,left,right,level){
var idx_l = me.tonsky.persistent_sorted_set.path_get(left,level);
var idx_r = me.tonsky.persistent_sorted_set.path_get(right,level);
if((level > (0))){
if((idx_l === idx_r)){
var G__67978 = (node.pointers[idx_l]);
var G__67979 = left;
var G__67980 = right;
var G__67981 = (level - me.tonsky.persistent_sorted_set.level_shift);
return (me.tonsky.persistent_sorted_set._distance.cljs$core$IFn$_invoke$arity$4 ? me.tonsky.persistent_sorted_set._distance.cljs$core$IFn$_invoke$arity$4(G__67978,G__67979,G__67980,G__67981) : me.tonsky.persistent_sorted_set._distance.call(null,G__67978,G__67979,G__67980,G__67981));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__68194 = (level__$1 - me.tonsky.persistent_sorted_set.level_shift);
var G__68195 = (res * me.tonsky.persistent_sorted_set.avg_len);
level__$1 = G__68194;
res = G__68195;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
me.tonsky.persistent_sorted_set.distance = (function me$tonsky$persistent_sorted_set$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((me.tonsky.persistent_sorted_set.next_path(set,path_l) === path_r)){
return (1);
} else {
return me.tonsky.persistent_sorted_set._distance(set.root,path_l,path_r,set.shift);

}
}
}
});
me.tonsky.persistent_sorted_set.est_count = (function me$tonsky$persistent_sorted_set$est_count(iter){
return me.tonsky.persistent_sorted_set.distance(iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
me.tonsky.persistent_sorted_set._seek = (function me$tonsky$persistent_sorted_set$_seek(set,key,comparator){
if((key == null)){
return (0);
} else {
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = me.tonsky.persistent_sorted_set.node_len(node);
if(((0) === level)){
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return me.tonsky.persistent_sorted_set.path_set(path,(0),idx);
}
} else {
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(comparator,keys,(keys_l - (2)),key);
var G__68213 = (node.pointers[idx]);
var G__68214 = me.tonsky.persistent_sorted_set.path_set(path,level,idx);
var G__68215 = (level - me.tonsky.persistent_sorted_set.level_shift);
node = G__68213;
path = G__68214;
level = G__68215;
continue;
}
break;
}
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
me.tonsky.persistent_sorted_set._rseek = (function me$tonsky$persistent_sorted_set$_rseek(set,key,comparator){
if((key == null)){
return (me.tonsky.persistent_sorted_set._rpath(set.root,set.shift) + (1));
} else {
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = me.tonsky.persistent_sorted_set.node_len(node);
if(((0) === level)){
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_r(comparator,keys,(keys_l - (1)),key);
return me.tonsky.persistent_sorted_set.path_set(path,(0),idx);
} else {
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_r(comparator,keys,(keys_l - (2)),key);
var G__68218 = (node.pointers[idx]);
var G__68219 = me.tonsky.persistent_sorted_set.path_set(path,level,idx);
var G__68220 = (level - me.tonsky.persistent_sorted_set.level_shift);
node = G__68218;
path = G__68219;
level = G__68220;
continue;
}
break;
}
}
});
me.tonsky.persistent_sorted_set._slice = (function me$tonsky$persistent_sorted_set$_slice(set,key_from,key_to,comparator){
var path = me.tonsky.persistent_sorted_set._seek(set,key_from,comparator);
if((path < (0))){
return null;
} else {
var till_path = me.tonsky.persistent_sorted_set._rseek(set,key_to,comparator);
if((till_path > path)){
return (new me.tonsky.persistent_sorted_set.Iter(set,path,till_path,me.tonsky.persistent_sorted_set.keys_for(set,path),me.tonsky.persistent_sorted_set.path_get(path,(0))));
} else {
return null;
}
}
});
me.tonsky.persistent_sorted_set.arr_map_inplace = (function me$tonsky$persistent_sorted_set$arr_map_inplace(f,arr){
var len = arr.length;
var i_68222 = (0);
while(true){
if((i_68222 < len)){
(arr[i_68222] = (function (){var G__67986 = (arr[i_68222]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67986) : f.call(null,G__67986));
})());

var G__68223 = (i_68222 + (1));
i_68222 = G__68223;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
me.tonsky.persistent_sorted_set.arr_partition_approx = (function me$tonsky$persistent_sorted_set$arr_partition_approx(min_len,max_len,arr){
var chunk_len = me.tonsky.persistent_sorted_set.avg_len;
var len = arr.length;
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_68224 = (0);
while(true){
var rest_68225 = (len - pos_68224);
if((rest_68225 <= max_len)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,arr.slice(pos_68224));
} else {
if((rest_68225 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,arr.slice(pos_68224,(pos_68224 + chunk_len)));

var G__68228 = (pos_68224 + chunk_len);
pos_68224 = G__68228;
continue;
} else {
var piece_len_68229 = (rest_68225 >>> (1));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,arr.slice(pos_68224,(pos_68224 + piece_len_68229)));

var G__68230 = (pos_68224 + piece_len_68229);
pos_68224 = G__68230;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array(cljs.core.persistent_BANG_(acc));
});
me.tonsky.persistent_sorted_set.sorted_arr_distinct_QMARK_ = (function me$tonsky$persistent_sorted_set$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(e,p) : cmp.call(null,e,p)))){
return false;
} else {
var G__68231 = (i + (1));
var G__68232 = e;
i = G__68231;
p = G__68232;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
me.tonsky.persistent_sorted_set.sorted_arr_distinct = (function me$tonsky$persistent_sorted_set$sorted_arr_distinct(arr,cmp){
if(me.tonsky.persistent_sorted_set.sorted_arr_distinct_QMARK_(arr,cmp)){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(acc));
} else {
var e = (arr[i]);
if(((0) === (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(e,p) : cmp.call(null,e,p)))){
var G__68235 = acc;
var G__68236 = (i + (1));
var G__68237 = e;
acc = G__68235;
i = G__68236;
p = G__68237;
continue;
} else {
var G__68238 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,e);
var G__68239 = (i + (1));
var G__68240 = e;
acc = G__68238;
i = G__68239;
p = G__68240;
continue;
}
}
break;
}
}
});
/**
 * Analogue to [[clojure.core/conj]] with comparator that overrides the one stored in set.
 */
me.tonsky.persistent_sorted_set.conj = (function me$tonsky$persistent_sorted_set$conj(set,key,cmp){
var roots = me.tonsky.persistent_sorted_set.node_conj(set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return me.tonsky.persistent_sorted_set.alter_btset(set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return me.tonsky.persistent_sorted_set.alter_btset(set,(new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,roots),roots)),(set.shift + me.tonsky.persistent_sorted_set.level_shift),(set.cnt + (1)));

}
}
});
/**
 * Analogue to [[clojure.core/disj]] with comparator that overrides the one stored in set.
 */
me.tonsky.persistent_sorted_set.disj = (function me$tonsky$persistent_sorted_set$disj(set,key,cmp){
var new_roots = me.tonsky.persistent_sorted_set.node_disj(set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if((((new_root instanceof me.tonsky.persistent_sorted_set.Node)) && (((1) === new_root.pointers.length)))){
return me.tonsky.persistent_sorted_set.alter_btset(set,(new_root.pointers[(0)]),(set.shift - me.tonsky.persistent_sorted_set.level_shift),(set.cnt - (1)));
} else {
return me.tonsky.persistent_sorted_set.alter_btset(set,new_root,set.shift,(set.cnt - (1)));
}
}
});
/**
 * An iterator for part of the set with provided boundaries.
 * `(slice set from to)` returns iterator for all Xs where from <= X <= to.
 * Optionally pass in comparator that will override the one that set uses. Supports efficient [[clojure.core/rseq]].
 */
me.tonsky.persistent_sorted_set.slice = (function me$tonsky$persistent_sorted_set$slice(var_args){
var G__67992 = arguments.length;
switch (G__67992) {
case 3:
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return me.tonsky.persistent_sorted_set._slice(set,key_from,key_to,set.comparator);
}));

(me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$4 = (function (set,key_from,key_to,comparator){
return me.tonsky.persistent_sorted_set._slice(set,key_from,key_to,comparator);
}));

(me.tonsky.persistent_sorted_set.slice.cljs$lang$maxFixedArity = 4);

/**
 * A reverse iterator for part of the set with provided boundaries.
 * `(rslice set from to)` returns backwards iterator for all Xs where from <= X <= to.
 * Optionally pass in comparator that will override the one that set uses. Supports efficient [[clojure.core/rseq]].
 */
me.tonsky.persistent_sorted_set.rslice = (function me$tonsky$persistent_sorted_set$rslice(var_args){
var G__67994 = arguments.length;
switch (G__67994) {
case 2:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
var G__67996 = me.tonsky.persistent_sorted_set._slice(set,key,key,set.comparator);
if((G__67996 == null)){
return null;
} else {
return cljs.core.rseq(G__67996);
}
}));

(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
var G__67997 = me.tonsky.persistent_sorted_set._slice(set,key_to,key_from,set.comparator);
if((G__67997 == null)){
return null;
} else {
return cljs.core.rseq(G__67997);
}
}));

(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$4 = (function (set,key_from,key_to,comparator){
var G__67998 = me.tonsky.persistent_sorted_set._slice(set,key_to,key_from,comparator);
if((G__67998 == null)){
return null;
} else {
return cljs.core.rseq(G__67998);
}
}));

(me.tonsky.persistent_sorted_set.rslice.cljs$lang$maxFixedArity = 4);

/**
 * Fast path to create a set if you already have a sorted array of elements on your hands.
 */
me.tonsky.persistent_sorted_set.from_sorted_array = (function me$tonsky$persistent_sorted_set$from_sorted_array(cmp,arr){
var leaves = me.tonsky.persistent_sorted_set.arr_map_inplace((function (p1__67999_SHARP_){
return (new me.tonsky.persistent_sorted_set.Leaf(p1__67999_SHARP_));
}),me.tonsky.persistent_sorted_set.arr_partition_approx((16),(32),arr));
var current_level = leaves;
var shift = (0);
while(true){
var G__68003 = cljs.core.count(current_level);
switch (G__68003) {
case (0):
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),cmp,null,null));

break;
case (1):
return (new me.tonsky.persistent_sorted_set.BTSet(cljs.core.first(current_level),shift,arr.length,cmp,null,null));

break;
default:
var G__68251 = me.tonsky.persistent_sorted_set.arr_map_inplace(((function (current_level,shift,G__68003,leaves){
return (function (p1__68000_SHARP_){
return (new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,p1__68000_SHARP_),p1__68000_SHARP_));
});})(current_level,shift,G__68003,leaves))
,me.tonsky.persistent_sorted_set.arr_partition_approx((16),(32),current_level));
var G__68252 = (shift + me.tonsky.persistent_sorted_set.level_shift);
current_level = G__68251;
shift = G__68252;
continue;

}
break;
}
});
/**
 * Create a set with custom comparator and a collection of keys. Useful when you don’t want to call [[clojure.core/apply]] on [[sorted-set-by]].
 */
me.tonsky.persistent_sorted_set.from_sequential = (function me$tonsky$persistent_sorted_set$from_sequential(cmp,seq){
var arr = me.tonsky.persistent_sorted_set.sorted_arr_distinct(me.tonsky.persistent_sorted_set.arrays.asort(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(seq),cmp),cmp);
return me.tonsky.persistent_sorted_set.from_sorted_array(cmp,arr);
});
me.tonsky.persistent_sorted_set.sorted_set_by = (function me$tonsky$persistent_sorted_set$sorted_set_by(var_args){
var G__68007 = arguments.length;
switch (G__68007) {
case 1:
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___68255 = arguments.length;
var i__4865__auto___68256 = (0);
while(true){
if((i__4865__auto___68256 < len__4864__auto___68255)){
args_arr__4885__auto__.push((arguments[i__4865__auto___68256]));

var G__68257 = (i__4865__auto___68256 + (1));
i__4865__auto___68256 = G__68257;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),cmp,null,null));
}));

(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return me.tonsky.persistent_sorted_set.from_sequential(cmp,keys);
}));

/** @this {Function} */
(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$lang$applyTo = (function (seq68005){
var G__68006 = cljs.core.first(seq68005);
var seq68005__$1 = cljs.core.next(seq68005);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68006,seq68005__$1);
}));

(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$lang$maxFixedArity = (1));

me.tonsky.persistent_sorted_set.sorted_set = (function me$tonsky$persistent_sorted_set$sorted_set(var_args){
var G__68020 = arguments.length;
switch (G__68020) {
case 0:
return me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___68259 = arguments.length;
var i__4865__auto___68260 = (0);
while(true){
if((i__4865__auto___68260 < len__4864__auto___68259)){
args_arr__4885__auto__.push((arguments[i__4865__auto___68260]));

var G__68261 = (i__4865__auto___68260 + (1));
i__4865__auto___68260 = G__68261;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((0)),(0),null));
return me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$variadic(argseq__4886__auto__);

}
});

(me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$0 = (function (){
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
}));

(me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return me.tonsky.persistent_sorted_set.from_sequential(cljs.core.compare,keys);
}));

/** @this {Function} */
(me.tonsky.persistent_sorted_set.sorted_set.cljs$lang$applyTo = (function (seq68019){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68019));
}));

(me.tonsky.persistent_sorted_set.sorted_set.cljs$lang$maxFixedArity = (0));


//# sourceMappingURL=me.tonsky.persistent_sorted_set.js.map
