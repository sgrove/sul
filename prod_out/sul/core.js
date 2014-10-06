// Compiled by ClojureScript 0.0-2356
goog.provide('sul.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('sul.dom');
goog.require('goog.events.EventType');
goog.require('datascript');
goog.require('sul.dom');
goog.require('goog.events');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('datascript');
cljs.core.enable_console_print_BANG_();
sul.core.reports = (function (){var G__15077 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15077) : cljs.core.atom.call(null,G__15077));
})();
/**
* Useful to visually see if a component has been rerendered
*/
sul.core.rand_color = (function rand_color(){var r = cljs.core.rand_int((255));var g = cljs.core.rand_int((255));var b = cljs.core.rand_int((255));return ("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+")");
});
sul.core.attr_statuses = (function (){var G__15078 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15078) : cljs.core.atom.call(null,G__15078));
})();
sul.core.get_where = (function get_where(q){return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__15079_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$196,p1__15079_SHARP_);
}),q));
});
sul.core.invalidated_query_QMARK_ = (function invalidated_query_QMARK_(query,last_updated){return cljs.core.some((function (attr){if((attr instanceof cljs.core.Keyword))
{} else
{throw (new Error(("Assert failed: Can only invalidate queries with keyword attrs\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null))], 0))))));
}
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__15081 = sul.core.attr_statuses;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15081) : cljs.core.deref.call(null,G__15081));
})(),attr);if(cljs.core.truth_(temp__4124__auto__))
{var attr_last_updated = temp__4124__auto__;return (last_updated < attr_last_updated);
} else
{return true;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,sul.core.get_where(query)));
});
sul.core.translate_class_attrs = (function translate_class_attrs(class$){var known_keys = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$199,"getDisplayName",cljs.core.constant$keyword$200,"componentWillMount",cljs.core.constant$keyword$201,"componentWillUpdate",cljs.core.constant$keyword$202,"shouldComponentUpdate",cljs.core.constant$keyword$203,"componentDidUpdate",cljs.core.constant$keyword$204,"render"], null);var new_class = cljs.core.PersistentArrayMap.EMPTY;var attrs = cljs.core.seq(class$);while(true){
if(cljs.core.seq(attrs))
{var vec__15083 = cljs.core.first(attrs);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15083,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15083,(1),null);var new_class__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_class,cljs.core.get.cljs$core$IFn$_invoke$arity$3(known_keys,k,k),v);{
var G__15084 = new_class__$1;
var G__15085 = cljs.core.rest(attrs);
new_class = G__15084;
attrs = G__15085;
continue;
}
} else
{return new_class;
}
break;
}
});
/**
* @param {...*} var_args
*/
sul.core.sul_com = (function() { 
var sul_com__delegate = function (meta,p__15086){var vec__15104 = p__15086;var render = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15104,(0),null);var config = (function (){var obj15106 = {};return obj15106;
})();var meta__$1 = ((((render == null)) && (cljs.core.fn_QMARK_(meta)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$204,meta], null):meta);var will_update = cljs.core.constant$keyword$201.cljs$core$IFn$_invoke$arity$1(meta__$1);var will_mount = cljs.core.constant$keyword$200.cljs$core$IFn$_invoke$arity$1(meta__$1);var display_name = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(meta__$1);var user_render = cljs.core.constant$keyword$204.cljs$core$IFn$_invoke$arity$1(meta__$1);var sul_name = ((typeof display_name === 'string')?((function (config,meta__$1,will_update,will_mount,display_name,user_render,vec__15104,render){
return (function (){return display_name;
});})(config,meta__$1,will_update,will_mount,display_name,user_render,vec__15104,render))
:display_name);var sul_render = ((function (config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,vec__15104,render){
return (function (_){var this$ = this;var map__15107 = (this$["__sul"]);var map__15107__$1 = ((cljs.core.seq_QMARK_(map__15107))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15107):map__15107);var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15107__$1,cljs.core.constant$keyword$205);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15107__$1,cljs.core.constant$keyword$206);var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15107__$1,cljs.core.constant$keyword$207);var r = (function (){var G__15108 = q;var G__15109 = (function (){var G__15110 = conn;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15110) : cljs.core.deref.call(null,G__15110));
})();return (datascript.q.cljs$core$IFn$_invoke$arity$2 ? datascript.q.cljs$core$IFn$_invoke$arity$2(G__15108,G__15109) : datascript.q.call(null,G__15108,G__15109));
})();var G__15111 = (function (){var G__15112 = r;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__15112) : p.call(null,G__15112));
})();return (user_render.cljs$core$IFn$_invoke$arity$1 ? user_render.cljs$core$IFn$_invoke$arity$1(G__15111) : user_render.call(null,G__15111));
});})(config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,vec__15104,render))
;var sul_update_QMARK_ = ((function (config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,sul_render,vec__15104,render){
return (function (){var this$ = this;var props = this$.props;var map__15113 = (this$["__sul"]);var map__15113__$1 = ((cljs.core.seq_QMARK_(map__15113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15113):map__15113);var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15113__$1,cljs.core.constant$keyword$205);var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15113__$1,cljs.core.constant$keyword$207);var last_rendered = (this$["__sul_last_rendered"]);return sul.core.invalidated_query_QMARK_(q,last_rendered);
});})(config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,sul_render,vec__15104,render))
;var sul_will_mount = ((function (config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,sul_render,sul_update_QMARK_,vec__15104,render){
return (function (){var this$ = this;var props = this$.props;var q = (props["q"]);var p = (props["p"]);var conn = (props["conn"]);(this$["__sul_last_rendered"] = (new Date()).getTime());
(this$["__sul"] = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$207,q,cljs.core.constant$keyword$206,p,cljs.core.constant$keyword$205,conn], null));
if(cljs.core.truth_(will_mount))
{return (will_mount.cljs$core$IFn$_invoke$arity$0 ? will_mount.cljs$core$IFn$_invoke$arity$0() : will_mount.call(null));
} else
{return null;
}
});})(config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,sul_render,sul_update_QMARK_,vec__15104,render))
;var sul_will_update = ((function (config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,sul_render,sul_update_QMARK_,sul_will_mount,vec__15104,render){
return (function (){var this$ = this;return (this$["__sul_last_rendered"] = (new Date()).getTime());
});})(config,meta__$1,will_update,will_mount,display_name,user_render,sul_name,sul_render,sul_update_QMARK_,sul_will_mount,vec__15104,render))
;var new_class = sul.core.translate_class_attrs(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([meta__$1,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$201,sul_will_update,cljs.core.constant$keyword$200,sul_will_mount,cljs.core.constant$keyword$202,sul_update_QMARK_,cljs.core.constant$keyword$199,sul_name,cljs.core.constant$keyword$204,sul_render], null)], 0)));var seq__15114_15121 = cljs.core.seq(new_class);var chunk__15115_15122 = null;var count__15116_15123 = (0);var i__15117_15124 = (0);while(true){
if((i__15117_15124 < count__15116_15123))
{var vec__15118_15125 = chunk__15115_15122.cljs$core$IIndexed$_nth$arity$2(null,i__15117_15124);var k_15126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118_15125,(0),null);var v_15127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15118_15125,(1),null);(config[cljs.core.name(k_15126)] = v_15127);
{
var G__15128 = seq__15114_15121;
var G__15129 = chunk__15115_15122;
var G__15130 = count__15116_15123;
var G__15131 = (i__15117_15124 + (1));
seq__15114_15121 = G__15128;
chunk__15115_15122 = G__15129;
count__15116_15123 = G__15130;
i__15117_15124 = G__15131;
continue;
}
} else
{var temp__4126__auto___15132 = cljs.core.seq(seq__15114_15121);if(temp__4126__auto___15132)
{var seq__15114_15133__$1 = temp__4126__auto___15132;if(cljs.core.chunked_seq_QMARK_(seq__15114_15133__$1))
{var c__5044__auto___15134 = cljs.core.chunk_first(seq__15114_15133__$1);{
var G__15135 = cljs.core.chunk_rest(seq__15114_15133__$1);
var G__15136 = c__5044__auto___15134;
var G__15137 = cljs.core.count(c__5044__auto___15134);
var G__15138 = (0);
seq__15114_15121 = G__15135;
chunk__15115_15122 = G__15136;
count__15116_15123 = G__15137;
i__15117_15124 = G__15138;
continue;
}
} else
{var vec__15119_15139 = cljs.core.first(seq__15114_15133__$1);var k_15140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15119_15139,(0),null);var v_15141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15119_15139,(1),null);(config[cljs.core.name(k_15140)] = v_15141);
{
var G__15142 = cljs.core.next(seq__15114_15133__$1);
var G__15143 = null;
var G__15144 = (0);
var G__15145 = (0);
seq__15114_15121 = G__15142;
chunk__15115_15122 = G__15143;
count__15116_15123 = G__15144;
i__15117_15124 = G__15145;
continue;
}
}
} else
{}
}
break;
}
var G__15120 = config;return React.createClass(G__15120);
};
var sul_com = function (meta,var_args){
var p__15086 = null;if (arguments.length > 1) {
  p__15086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sul_com__delegate.call(this,meta,p__15086);};
sul_com.cljs$lang$maxFixedArity = 1;
sul_com.cljs$lang$applyTo = (function (arglist__15146){
var meta = cljs.core.first(arglist__15146);
var p__15086 = cljs.core.rest(arglist__15146);
return sul_com__delegate(meta,p__15086);
});
sul_com.cljs$core$IFn$_invoke$arity$variadic = sul_com__delegate;
return sul_com;
})()
;
sul.core.update_song_sort_field_BANG_ = (function update_song_sort_field_BANG_(db,field){return datascript.transact_BANG_(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,(10),cljs.core.constant$keyword$208,field], null)], null));
});
sul.core.valid_email_QMARK_ = (function valid_email_QMARK_(s){var and__4263__auto__ = typeof s === 'string';if(and__4263__auto__)
{return cljs.core.re_find(/.+@.+\..+/,s);
} else
{return and__4263__auto__;
}
});
sul.core.mouse_position = sul.core.sul_com(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$199,"MousePosition",cljs.core.constant$keyword$204,(function (p__15147){var map__15148 = p__15147;var map__15148__$1 = ((cljs.core.seq_QMARK_(map__15148))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15148):map__15148);var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.constant$keyword$209);var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.constant$keyword$210);var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15148__$1,cljs.core.constant$keyword$211);return sul.dom.h2.cljs$core$IFn$_invoke$arity$variadic({"style": {"backgroundColor": sul.core.rand_color()}},cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], 0))], 0));
})], null));
sul.core.mouse_circle = sul.core.sul_com((function (com_data){var this$ = this;var map__15149 = com_data;var map__15149__$1 = ((cljs.core.seq_QMARK_(map__15149))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15149):map__15149);var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15149__$1,cljs.core.constant$keyword$209);var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15149__$1,cljs.core.constant$keyword$210);return sul.dom.div({"style": {"left": (function (){var or__4275__auto__ = (x + (1));if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return (0);
}
})(), "top": (function (){var or__4275__auto__ = (y - (25));if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return (0);
}
})()}, "className": "mouse-circle"});
}));
sul.core.title = sul.core.sul_com(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$199,"Title",cljs.core.constant$keyword$204,(function (p__15150,com_data){var map__15151 = p__15150;var map__15151__$1 = ((cljs.core.seq_QMARK_(map__15151))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15151):map__15151);var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15151__$1,cljs.core.constant$keyword$211);return sul.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([sul.dom.h1.cljs$core$IFn$_invoke$arity$variadic({"style": {"background-color": sul.core.rand_color()}},cljs.core.array_seq([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()))], 0))], 0));
})], null));
sul.core.song_list = sul.core.sul_com(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$199,"SongList",cljs.core.constant$keyword$204,(function (songs){return sul.dom.ul.cljs$core$IFn$_invoke$arity$variadic({"style": {"background-color": sul.core.rand_color()}},cljs.core.array_seq([cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15152_SHARP_){return sul.dom.li.cljs$core$IFn$_invoke$arity$variadic({"key": cljs.core.constant$keyword$212.cljs$core$IFn$_invoke$arity$1(p1__15152_SHARP_)},cljs.core.array_seq([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(p1__15152_SHARP_))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$212.cljs$core$IFn$_invoke$arity$1(p1__15152_SHARP_))+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(p1__15152_SHARP_))+"]")], 0));
}),songs))], 0));
})], null));
sul.core.container = (function container(conn){var G__15165 = {"render": (function (){var this$ = this;return sul.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([sul.dom.div.cljs$core$IFn$_invoke$arity$variadic({"className": "controls"},cljs.core.array_seq([sul.dom.button.cljs$core$IFn$_invoke$arity$variadic({"onClick": sul.core.replay_all_reports_BANG_},cljs.core.array_seq(["Quick Replay"], 0)),sul.dom.button.cljs$core$IFn$_invoke$arity$variadic({"onClick": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sul.core.replay_all_reports_with_delay_BANG_,(1000))},cljs.core.array_seq(["Timed Replay"], 0)),sul.dom.button.cljs$core$IFn$_invoke$arity$variadic({"onClick": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sul.core.load_and_replay_playback_BANG_,"example_playback")},cljs.core.array_seq(["Load & Replay"], 0)),sul.dom.button.cljs$core$IFn$_invoke$arity$variadic({"onClick": cljs.core.partial.cljs$core$IFn$_invoke$arity$3(sul.core.load_and_replay_playback_BANG_,"example_playback",(1000))},cljs.core.array_seq(["Timed Load & Replay"], 0))], 0)),sul.dom.h2.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Quick replay will step through each of the successive replays steps as close to 60fps as possible"], 0)),sul.dom.h2.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Timed will replay the events with the original time delta between each step"], 0)),sul.dom.h2.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Load will load an example edn file and play it back, so you can see how the user used your app, or how an error occurred."], 0)),sul.dom.a.cljs$core$IFn$_invoke$arity$variadic({"href": "example_playback.edn"},cljs.core.array_seq(["Example Playback File"], 0)),sul.dom.h1.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Sul"], 0)),(new sul.core.title({"conn": conn, "p": ((function (this$){
return (function (r){var vec__15166 = cljs.core.last(r);var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15166,(0),null);return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$211,title], null);
});})(this$))
, "q": new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.Symbol(null,"?v","?v",-464183118,null),cljs.core.constant$keyword$196,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$215,new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null)})),sul.dom.br(null),(new sul.core.mouse_position({"conn": conn, "p": ((function (this$){
return (function (r){var vec__15167 = cljs.core.last(r);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$210,x,cljs.core.constant$keyword$209,y], null);
});})(this$))
, "q": new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),cljs.core.constant$keyword$196,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$216,new cljs.core.Symbol(null,"?x","?x",-555096650,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$217,new cljs.core.Symbol(null,"?y","?y",-1454470631,null)], null)], null)})),sul.dom.br(null),sul.dom.select.cljs$core$IFn$_invoke$arity$variadic({"onChange": ((function (this$){
return (function (event){return sul.core.update_song_sort_field_BANG_(conn,cljs.reader.read_string(event.target.value));
});})(this$))
},cljs.core.array_seq([(function (){var G__15168 = {"value": cljs.core.constant$keyword$213};var G__15169 = "Year";return (sul.dom.option.cljs$core$IFn$_invoke$arity$2 ? sul.dom.option.cljs$core$IFn$_invoke$arity$2(G__15168,G__15169) : sul.dom.option.call(null,G__15168,G__15169));
})(),(function (){var G__15170 = {"value": cljs.core.constant$keyword$212};var G__15171 = "Title";return (sul.dom.option.cljs$core$IFn$_invoke$arity$2 ? sul.dom.option.cljs$core$IFn$_invoke$arity$2(G__15170,G__15171) : sul.dom.option.call(null,G__15170,G__15171));
})(),(function (){var G__15172 = {"value": cljs.core.constant$keyword$214};var G__15173 = "Album";return (sul.dom.option.cljs$core$IFn$_invoke$arity$2 ? sul.dom.option.cljs$core$IFn$_invoke$arity$2(G__15172,G__15173) : sul.dom.option.call(null,G__15172,G__15173));
})()], 0)),(new sul.core.song_list({"conn": conn, "p": ((function (this$){
return (function (r){var sort_field = (function (){var or__4275__auto__ = cljs.core.last(cljs.core.first(r));if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.constant$keyword$213;
}
})();return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_field,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sort_field,this$){
return (function (p1__15153_SHARP_){var vec__15174 = p1__15153_SHARP_;var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(0),null);var album = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(1),null);var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(2),null);var sort_by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(3),null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$212,title,cljs.core.constant$keyword$214,album,cljs.core.constant$keyword$213,year], null);
});})(sort_field,this$))
,r));
});})(this$))
, "q": new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?album","?album",177764424,null),new cljs.core.Symbol(null,"?year","?year",1475093291,null),new cljs.core.Symbol(null,"?sort-by","?sort-by",-746972350,null),cljs.core.constant$keyword$196,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$212,new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$214,new cljs.core.Symbol(null,"?album","?album",177764424,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$213,new cljs.core.Symbol(null,"?year","?year",1475093291,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e2","?e2",-1790911809,null),cljs.core.constant$keyword$208,new cljs.core.Symbol(null,"?sort-by","?sort-by",-746972350,null)], null)], null)})),(new sul.core.mouse_circle({"conn": conn, "p": ((function (this$){
return (function (r){var vec__15175 = cljs.core.last(r);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15175,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15175,(1),null);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$210,x,cljs.core.constant$keyword$209,y], null);
});})(this$))
, "q": new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),cljs.core.constant$keyword$196,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$216,new cljs.core.Symbol(null,"?x","?x",-555096650,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),cljs.core.constant$keyword$217,new cljs.core.Symbol(null,"?y","?y",-1454470631,null)], null)], null)}))], 0));
}), "getDisplayName": (function (){return "Container";
})};return React.createClass(G__15165);
});
sul.core.app_el = (function (){var G__15176 = "app";return document.getElementById(G__15176);
})();
sul.core.schema = cljs.core.PersistentArrayMap.EMPTY;
sul.core.conn = datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([sul.core.schema], 0));
sul.core.container_wrapper = (new sul.core.container(sul.core.conn));
sul.core.app = (function (){var G__15177 = (new sul.core.container_wrapper());var G__15178 = sul.core.app_el;return React.renderComponent(G__15177,G__15178);
})();
sul.core.add_tx_report_listener_BANG_ = (function add_tx_report_listener_BANG_(conn){return datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$218,(function (report){var now = (new Date()).getTime();var attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (now){
return (function (datum){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datum.a,now], null);
});})(now))
,cljs.core.constant$keyword$169.cljs$core$IFn$_invoke$arity$1(report)));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sul.core.reports,cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [now,attrs,cljs.core.constant$keyword$169.cljs$core$IFn$_invoke$arity$1(report),report], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sul.core.attr_statuses,cljs.core.merge,attrs);
}));
});
sul.core.add_tx_render_listener_BANG_ = (function add_tx_render_listener_BANG_(conn){return datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$204,(function (report){return sul.core.app.forceUpdate();
}));
});
sul.core.remove_tx_report_listener_BANG_ = (function remove_tx_report_listener_BANG_(conn){return datascript.unlisten_BANG_(conn,cljs.core.constant$keyword$218);
});
sul.core.remove_tx_render_listener_BANG_ = (function remove_tx_render_listener_BANG_(conn){return datascript.unlisten_BANG_(conn,cljs.core.constant$keyword$204);
});
sul.core.add_tx_report_listener_BANG_(sul.core.conn);
sul.core.add_tx_render_listener_BANG_(sul.core.conn);
sul.core.mouse_move_handler = (function mouse_move_handler(event){var scroll_top = (function (){var or__4275__auto__ = window.pageYOffset;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = document.scrollTop;if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{return document.body.scrollTop;
}
}
})();var scroll_left = (function (){var or__4275__auto__ = window.pageXOffset;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = document.scrollLeft;if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{return document.body.scrollLeft;
}
}
})();var top = event.clientY;var left = event.clientX;return datascript.transact_BANG_(sul.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$175,(100),cljs.core.constant$keyword$216,(left + scroll_left),cljs.core.constant$keyword$217,(top + scroll_top)], null)], null));
});
var G__15179_15182 = window;var G__15180_15183 = goog.events.EventType.MOUSEMOVE;var G__15181_15184 = sul.core.mouse_move_handler;goog.events.listen(G__15179_15182,G__15180_15183,G__15181_15184);
datascript.transact_BANG_(sul.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,(5),cljs.core.constant$keyword$219,true], null)], null));
datascript.transact_BANG_(sul.core.conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,(999),cljs.core.constant$keyword$215,"Sul Testbed"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,(10),cljs.core.constant$keyword$208,cljs.core.constant$keyword$213], null)], null));
var freq_15191 = (50);var G__15185_15192 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(((function (freq_15191){
return (function load_song(songs){if(cljs.core.seq(songs))
{datascript.transact_BANG_(sul.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(songs)], null));
var G__15189 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(load_song,cljs.core.rest(songs));var G__15190 = freq_15191;return setTimeout(G__15189,G__15190);
} else
{return null;
}
});})(freq_15191))
,cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Creep",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Karma Police",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"No Surprises",cljs.core.constant$keyword$214,"Ok Computer",cljs.core.constant$keyword$213,(2009)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Paranoid Android",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"High And Dry",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Everything In Its Right Place",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Fake Plastic Trees",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Idioteque",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Let Down",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Airbag",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Lucky",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Exit Music (For A Film)",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Street Spirit (Fade Out)",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Just",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"All I Need",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Reckoner",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Subterranean Homesick Alien",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"The National Anthem",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Pyramid Song",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Jigsaw Falling Into Place",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Nude",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"15 Step",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"My Iron Lung",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Kid A",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Climbing Up The Walls",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"House Of Cards",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Optimistic",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Bodysnatchers",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"The Bends",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"How To Disappear Completely",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Electioneering",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Knives Out",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"The Tourist",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Fitter Happier",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Faust Arp",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"I Might Be Wrong",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Planet Telex",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Videotape",cljs.core.constant$keyword$214,"Live In Paris 2nd Night (Bootleg)",cljs.core.constant$keyword$213,(2008)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Treefingers",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Morning Bell",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"In Limbo",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Bones",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Black Star",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Motion Picture Soundtrack",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"You And Whose Army?",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2007)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,"Kid A's",cljs.core.constant$keyword$214,"Radiohead (Boxset)",cljs.core.constant$keyword$213,(2006)], null)], true));var G__15186_15193 = freq_15191;setTimeout(G__15185_15192,G__15186_15193);
sul.core.add_song = (function add_song(title,year){return datascript.transact_BANG_(sul.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$175,(-1),cljs.core.constant$keyword$212,title,cljs.core.constant$keyword$214,"User Album",cljs.core.constant$keyword$213,year], null)], null));
});
goog.exportSymbol('sul.core.add_song', sul.core.add_song);
sul.core.set_title_BANG_ = (function set_title_BANG_(title){return datascript.transact_BANG_(sul.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,(1),cljs.core.constant$keyword$215,title], null)], null));
});
goog.exportSymbol('sul.core.set_title_BANG_', sul.core.set_title_BANG_);
sul.core.report_count = (function report_count(){return cljs.core.count((function (){var G__15195 = sul.core.reports;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15195) : cljs.core.deref.call(null,G__15195));
})());
});
goog.exportSymbol('sul.core.report_count', sul.core.report_count);
sul.core.reports_pr_count = (function reports_pr_count(){return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last,(function (){var G__15197 = sul.core.reports;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15197) : cljs.core.deref.call(null,G__15197));
})())], 0));
});
goog.exportSymbol('sul.core.reports_pr_count', sul.core.reports_pr_count);
sul.core.restore_point_BANG_ = (function restore_point_BANG_(n){var G__15203_15208 = sul.core.conn;var G__15204_15209 = cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__15205 = sul.core.reports;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15205) : cljs.core.deref.call(null,G__15205));
})(),n)));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15203_15208,G__15204_15209) : cljs.core.reset_BANG_.call(null,G__15203_15208,G__15204_15209));
var G__15206_15210 = sul.core.attr_statuses;var G__15207_15211 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15206_15210,G__15207_15211) : cljs.core.reset_BANG_.call(null,G__15206_15210,G__15207_15211));
return sul.core.app.forceUpdate();
});
goog.exportSymbol('sul.core.restore_point_BANG_', sul.core.restore_point_BANG_);
sul.core.show_statuses = (function show_statuses(){return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__15213 = sul.core.attr_statuses;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15213) : cljs.core.deref.call(null,G__15213));
})()], 0))], 0));
});
goog.exportSymbol('sul.core.show_statuses', sul.core.show_statuses);
sul.core.replay_all_reports_BANG_ = (function replay_all_reports_BANG_(){var G__15227_15240 = sul.core.attr_statuses;var G__15228_15241 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15227_15240,G__15228_15241) : cljs.core.reset_BANG_.call(null,G__15227_15240,G__15228_15241));
return window.requestAnimationFrame(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function helper(states){if(cljs.core.seq(states))
{var now = (new Date()).getTime();var vec__15234 = cljs.core.first(states);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234,(1),null);var tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234,(2),null);var report = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234,(3),null);var attrs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (now,vec__15234,t,attrs,tx_data,report){
return (function (p__15235){var vec__15236 = p__15235;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15236,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,now], null);
});})(now,vec__15234,t,attrs,tx_data,report))
,attrs));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sul.core.attr_statuses,cljs.core.merge,attrs__$1);
var G__15237_15242 = sul.core.conn;var G__15238_15243 = cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.first(states)));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15237_15242,G__15238_15243) : cljs.core.reset_BANG_.call(null,G__15237_15242,G__15238_15243));
sul.core.app.forceUpdate();
return window.requestAnimationFrame(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(helper,cljs.core.rest(states)));
} else
{return null;
}
}),(function (){var G__15239 = sul.core.reports;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15239) : cljs.core.deref.call(null,G__15239));
})()));
});
goog.exportSymbol('sul.core.replay_all_reports_BANG_', sul.core.replay_all_reports_BANG_);
sul.core.replay_all_reports_with_delay_BANG_ = (function replay_all_reports_with_delay_BANG_(max_step_delay){var G__15261_15278 = sul.core.attr_statuses;var G__15262_15279 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15261_15278,G__15262_15279) : cljs.core.reset_BANG_.call(null,G__15261_15278,G__15262_15279));
return window.requestAnimationFrame(cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function helper(states,time_at_last_step){if(cljs.core.seq(states))
{var now = (new Date()).getTime();var vec__15270 = cljs.core.first(states);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(0),null);var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(1),null);var tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(2),null);var report = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(3),null);var pause = (function (){var x__4589__auto__ = (t - (function (){var or__4275__auto__ = time_at_last_step;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return t;
}
})());var y__4590__auto__ = max_step_delay;return ((x__4589__auto__ < y__4590__auto__) ? x__4589__auto__ : y__4590__auto__);
})();var attrs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (now,vec__15270,t,attrs,tx_data,report,pause){
return (function (p__15271){var vec__15272 = p__15271;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15272,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,now], null);
});})(now,vec__15270,t,attrs,tx_data,report,pause))
,attrs));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sul.core.attr_statuses,cljs.core.merge,attrs__$1);
var G__15273_15280 = sul.core.conn;var G__15274_15281 = cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(report);(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15273_15280,G__15274_15281) : cljs.core.reset_BANG_.call(null,G__15273_15280,G__15274_15281));
sul.core.app.forceUpdate();
var G__15275 = ((function (now,vec__15270,t,attrs,tx_data,report,pause,attrs__$1){
return (function (){return window.requestAnimationFrame(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(helper,cljs.core.rest(states),t));
});})(now,vec__15270,t,attrs,tx_data,report,pause,attrs__$1))
;var G__15276 = pause;return window.setTimeout(G__15275,G__15276);
} else
{return null;
}
}),(function (){var G__15277 = sul.core.reports;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15277) : cljs.core.deref.call(null,G__15277));
})()));
});
goog.exportSymbol('sul.core.replay_all_reports_with_delay_BANG_', sul.core.replay_all_reports_with_delay_BANG_);
window.replayAllReports = sul.core.replay_all_reports_BANG_;
sul.core.datom__GT_transactionable_data = (function datom__GT_transactionable_data(datom){var intermediate = cljs.core.select_keys(datom,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,cljs.core.constant$keyword$156,cljs.core.constant$keyword$157,cljs.core.constant$keyword$158,cljs.core.constant$keyword$159], null));return new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$175,cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(intermediate),cljs.core.constant$keyword$156.cljs$core$IFn$_invoke$arity$1(intermediate),cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(intermediate)], true, false);
});
sul.core.load_transactions_BANG_ = (function load_transactions_BANG_(playback){var seq__15286 = cljs.core.seq(playback);var chunk__15287 = null;var count__15288 = (0);var i__15289 = (0);while(true){
if((i__15289 < count__15288))
{var step = chunk__15287.cljs$core$IIndexed$_nth$arity$2(null,i__15289);var plain_data_15290 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sul.core.datom__GT_transactionable_data,cljs.core.last(step));datascript.transact_BANG_(sul.core.conn,plain_data_15290);
{
var G__15291 = seq__15286;
var G__15292 = chunk__15287;
var G__15293 = count__15288;
var G__15294 = (i__15289 + (1));
seq__15286 = G__15291;
chunk__15287 = G__15292;
count__15288 = G__15293;
i__15289 = G__15294;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__15286);if(temp__4126__auto__)
{var seq__15286__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__15286__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__15286__$1);{
var G__15295 = cljs.core.chunk_rest(seq__15286__$1);
var G__15296 = c__5044__auto__;
var G__15297 = cljs.core.count(c__5044__auto__);
var G__15298 = (0);
seq__15286 = G__15295;
chunk__15287 = G__15296;
count__15288 = G__15297;
i__15289 = G__15298;
continue;
}
} else
{var step = cljs.core.first(seq__15286__$1);var plain_data_15299 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sul.core.datom__GT_transactionable_data,cljs.core.last(step));datascript.transact_BANG_(sul.core.conn,plain_data_15299);
{
var G__15300 = cljs.core.next(seq__15286__$1);
var G__15301 = null;
var G__15302 = (0);
var G__15303 = (0);
seq__15286 = G__15300;
chunk__15287 = G__15301;
count__15288 = G__15302;
i__15289 = G__15303;
continue;
}
}
} else
{return null;
}
}
break;
}
});
sul.core.reset_report_timings_BANG_ = (function reset_report_timings_BANG_(reports,playback){var timings = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,playback);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reports,((function (timings){
return (function (reports__$1){return cljs.core.vec(cljs.core.map_indexed(((function (timings){
return (function (idx,p__15306){var vec__15307 = p__15306;var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15307,(0),null);var report = cljs.core.nthnext(vec__15307,(1));if((idx < cljs.core.count(timings)))
{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(timings,idx)], null),report));
} else
{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null),report));
}
});})(timings))
,reports__$1));
});})(timings))
);
});
/**
* @param {...*} var_args
*/
sul.core.load_and_replay_playback_BANG_ = (function() { 
var load_and_replay_playback_BANG___delegate = function (playback_name,p__15308){var vec__15320 = p__15308;var max_delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(playback_name)+".edn"),cljs.core.constant$keyword$220,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$147,((function (vec__15320,max_delay){
return (function (p__15321){var vec__15322 = p__15321;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15322,(0),null);var resp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15322,(1),null);var _STAR_tag_table_STAR_15323 = cljs.reader._STAR_tag_table_STAR_;try{cljs.reader._STAR_tag_table_STAR_ = (function (){var G__15324 = new cljs.core.PersistentArrayMap(null, 1, ["datascript/Datom",datascript.datom_from_reader], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15324) : cljs.core.atom.call(null,G__15324));
})();
var playback_15331 = cljs.reader.read_string((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp)));sul.core.remove_tx_render_listener_BANG_(sul.core.conn);
var G__15325_15332 = sul.core.conn;var G__15326_15333 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([sul.core.schema], 0));(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15325_15332,G__15326_15333) : cljs.core.reset_BANG_.call(null,G__15325_15332,G__15326_15333));
var G__15327_15334 = sul.core.attr_statuses;var G__15328_15335 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15327_15334,G__15328_15335) : cljs.core.reset_BANG_.call(null,G__15327_15334,G__15328_15335));
var G__15329_15336 = sul.core.reports;var G__15330_15337 = cljs.core.PersistentVector.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15329_15336,G__15330_15337) : cljs.core.reset_BANG_.call(null,G__15329_15336,G__15330_15337));
sul.core.load_transactions_BANG_(playback_15331);
sul.core.reset_report_timings_BANG_(sul.core.reports,playback_15331);
sul.core.add_tx_render_listener_BANG_(sul.core.conn);
if(cljs.core.truth_(max_delay))
{return sul.core.replay_all_reports_with_delay_BANG_(max_delay);
} else
{return sul.core.replay_all_reports_BANG_();
}
}finally {cljs.reader._STAR_tag_table_STAR_ = _STAR_tag_table_STAR_15323;
}});})(vec__15320,max_delay))
,cljs.core.constant$keyword$153,((function (vec__15320,max_delay){
return (function (resp){return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error loading playback: ",resp], 0));
});})(vec__15320,max_delay))
,cljs.core.constant$keyword$149,ajax.core.raw_format(),cljs.core.constant$keyword$154,ajax.core.raw_format()], null)], 0));
};
var load_and_replay_playback_BANG_ = function (playback_name,var_args){
var p__15308 = null;if (arguments.length > 1) {
  p__15308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return load_and_replay_playback_BANG___delegate.call(this,playback_name,p__15308);};
load_and_replay_playback_BANG_.cljs$lang$maxFixedArity = 1;
load_and_replay_playback_BANG_.cljs$lang$applyTo = (function (arglist__15338){
var playback_name = cljs.core.first(arglist__15338);
var p__15308 = cljs.core.rest(arglist__15338);
return load_and_replay_playback_BANG___delegate(playback_name,p__15308);
});
load_and_replay_playback_BANG_.cljs$core$IFn$_invoke$arity$variadic = load_and_replay_playback_BANG___delegate;
return load_and_replay_playback_BANG_;
})()
;
