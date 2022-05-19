goog.provide('logseq.graph_parser.config');
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.config !== 'undefined') && (typeof logseq.graph_parser.config.local_assets_dir !== 'undefined')){
} else {
logseq.graph_parser.config.local_assets_dir = "assets";
}
logseq.graph_parser.config.local_asset_QMARK_ = (function logseq$graph_parser$config$local_asset_QMARK_(s){
return logseq.graph_parser.util.safe_re_find(cljs.core.re_pattern(["^[./]*",logseq.graph_parser.config.local_assets_dir].join('')),s);
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.config !== 'undefined') && (typeof logseq.graph_parser.config.default_draw_directory !== 'undefined')){
} else {
logseq.graph_parser.config.default_draw_directory = "draws";
}
logseq.graph_parser.config.draw_QMARK_ = (function logseq$graph_parser$config$draw_QMARK_(path){
return clojure.string.starts_with_QMARK_(path,logseq.graph_parser.config.default_draw_directory);
});
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.config !== 'undefined') && (typeof logseq.graph_parser.config.mldoc_support_formats !== 'undefined')){
} else {
logseq.graph_parser.config.mldoc_support_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
}
logseq.graph_parser.config.mldoc_support_QMARK_ = (function logseq$graph_parser$config$mldoc_support_QMARK_(format){
return cljs.core.contains_QMARK_(logseq.graph_parser.config.mldoc_support_formats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format));
});

//# sourceMappingURL=logseq.graph_parser.config.js.map
