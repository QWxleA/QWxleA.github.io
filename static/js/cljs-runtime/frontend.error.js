goog.provide('frontend.error');
frontend.error.ignored = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ResizeObserver loop limit exceeded",null,"Uncaught TypeError:",null], null), null);
frontend.error.ignored_QMARK_ = (function frontend$error$ignored_QMARK_(message){
var message__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(message);
return cljs.core.boolean$(cljs.core.some((function (p1__94058_SHARP_){
return clojure.string.starts_with_QMARK_(clojure.string.lower_case(message__$1),clojure.string.lower_case(p1__94058_SHARP_));
}),frontend.error.ignored));
});

//# sourceMappingURL=frontend.error.js.map
