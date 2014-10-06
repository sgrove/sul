// Compiled by ClojureScript 0.0-2356
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_(db,a))
{if(datascript.core.ref_QMARK_(db,a))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21390_SHARP_,p2__21391_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21390_SHARP_,datascript.impl.entity.entity(db,p2__21391_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21392_SHARP_,p2__21393_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21392_SHARP_,p2__21393_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else
{if(datascript.core.ref_QMARK_(db,a))
{return datascript.impl.entity.entity(db,cljs.core.first(datoms).v);
} else
{return cljs.core.first(datoms).v;
}
}
});
datascript.impl.entity.datoms__GT_cache = (function datoms__GT_cache(db,datoms){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){var a = cljs.core.first(part).a;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$156,datoms));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___21394 = cljs.core.not_empty(datascript.core._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___21394))
{var datoms_21395 = temp__4126__auto___21394;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache(e.db,datoms_21395);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__4124__auto__){
return (function (p1__21396_SHARP_,p2__21397_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21396_SHARP_,datascript.impl.entity.entity(db,p2__21397_SHARP_.e));
});})(datoms,temp__4124__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function multival__GT_js(val){if(cljs.core.truth_(val))
{return cljs.core.to_array(val);
} else
{return null;
}
});
datascript.impl.entity.js_seq = (function js_seq(e){datascript.impl.entity.touch(e);
var iter__5013__auto__ = (function iter__21408(s__21409){return (new cljs.core.LazySeq(null,(function (){var s__21409__$1 = s__21409;while(true){
var temp__4126__auto__ = cljs.core.seq(s__21409__$1);if(temp__4126__auto__)
{var s__21409__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__21409__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__21409__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__21411 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__21410 = (0);while(true){
if((i__21410 < size__5012__auto__))
{var vec__21416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__21410);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21416,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21416,(1),null);cljs.core.chunk_append(b__21411,((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__21418 = (i__21410 + (1));
i__21410 = G__21418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21411),iter__21408(cljs.core.chunk_rest(s__21409__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21411),null);
}
} else
{var vec__21417 = cljs.core.first(s__21409__$2);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21417,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21417,(1),null);return cljs.core.cons(((datascript.core.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__21408(cljs.core.rest(s__21409__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5013__auto__(e.cache);
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
})
datascript.impl.entity.Entity.cljs$lang$type = true;
datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,cljs.core.constant$keyword$175,self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__21443 = null;
var G__21443__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__21443__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__21443 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21443__2.call(this,self__,k);
case 3:
return G__21443__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21443.cljs$core$IFn$_invoke$arity$2 = G__21443__2;
G__21443.cljs$core$IFn$_invoke$arity$3 = G__21443__3;
return G__21443;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args21419){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21419)));
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$182,cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,cljs.core.constant$keyword$182));
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null);
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,attr,not_found){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.constant$keyword$175))
{return self__.eid;
} else
{var temp__4124__auto__ = datascript.core.reverse_ref(attr);if(cljs.core.truth_(temp__4124__auto__))
{var attr__$1 = temp__4124__auto__;return datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,not_found);
} else
{var or__4275__auto__ = (function (){var G__21421 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__21421) : self__.cache.call(null,G__21421));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty(datascript.core._search(self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;self__.cache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.cache,attr,datascript.impl.entity.entity_attr(self__.db,attr,datoms));
var G__21422 = attr;return (self__.cache.cljs$core$IFn$_invoke$arity$1 ? self__.cache.cljs$core$IFn$_invoke$arity$1(G__21422) : self__.cache.call(null,G__21422));
} else
{return not_found;
}
}
}
}
}
});
datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch(this$__$1);
return cljs.core.count(self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch(this$__$1);
return cljs.core.seq(self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash(self__.eid);
});
datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return ((o instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.eid,o.eid));
});
datascript.impl.entity.Entity.prototype.entry_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__21444 = null;
var G__21444__1 = (function (f){var self__ = this;
var this$ = this;var seq__21423 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__21424 = null;var count__21425 = (0);var i__21426 = (0);while(true){
if((i__21426 < count__21425))
{var vec__21427 = chunk__21424.cljs$core$IIndexed$_nth$arity$2(null,i__21426);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21427,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21427,(1),null);var G__21428_21445 = v;var G__21429_21446 = a;var G__21430_21447 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21428_21445,G__21429_21446,G__21430_21447) : f.call(null,G__21428_21445,G__21429_21446,G__21430_21447));
{
var G__21448 = seq__21423;
var G__21449 = chunk__21424;
var G__21450 = count__21425;
var G__21451 = (i__21426 + (1));
seq__21423 = G__21448;
chunk__21424 = G__21449;
count__21425 = G__21450;
i__21426 = G__21451;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__21423);if(temp__4126__auto__)
{var seq__21423__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21423__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__21423__$1);{
var G__21452 = cljs.core.chunk_rest(seq__21423__$1);
var G__21453 = c__5044__auto__;
var G__21454 = cljs.core.count(c__5044__auto__);
var G__21455 = (0);
seq__21423 = G__21452;
chunk__21424 = G__21453;
count__21425 = G__21454;
i__21426 = G__21455;
continue;
}
} else
{var vec__21431 = cljs.core.first(seq__21423__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21431,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21431,(1),null);var G__21432_21456 = v;var G__21433_21457 = a;var G__21434_21458 = this$;(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21432_21456,G__21433_21457,G__21434_21458) : f.call(null,G__21432_21456,G__21433_21457,G__21434_21458));
{
var G__21459 = cljs.core.next(seq__21423__$1);
var G__21460 = null;
var G__21461 = (0);
var G__21462 = (0);
seq__21423 = G__21459;
chunk__21424 = G__21460;
count__21425 = G__21461;
i__21426 = G__21462;
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
var G__21444__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__21435 = cljs.core.seq(datascript.impl.entity.js_seq(this$));var chunk__21436 = null;var count__21437 = (0);var i__21438 = (0);while(true){
if((i__21438 < count__21437))
{var vec__21439 = chunk__21436.cljs$core$IIndexed$_nth$arity$2(null,i__21438);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21439,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21439,(1),null);f.call(use_as_this,v,a,this$);
{
var G__21463 = seq__21435;
var G__21464 = chunk__21436;
var G__21465 = count__21437;
var G__21466 = (i__21438 + (1));
seq__21435 = G__21463;
chunk__21436 = G__21464;
count__21437 = G__21465;
i__21438 = G__21466;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__21435);if(temp__4126__auto__)
{var seq__21435__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21435__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__21435__$1);{
var G__21467 = cljs.core.chunk_rest(seq__21435__$1);
var G__21468 = c__5044__auto__;
var G__21469 = cljs.core.count(c__5044__auto__);
var G__21470 = (0);
seq__21435 = G__21467;
chunk__21436 = G__21468;
count__21437 = G__21469;
i__21438 = G__21470;
continue;
}
} else
{var vec__21440 = cljs.core.first(seq__21435__$1);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21440,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21440,(1),null);f.call(use_as_this,v,a,this$);
{
var G__21471 = cljs.core.next(seq__21435__$1);
var G__21472 = null;
var G__21473 = (0);
var G__21474 = (0);
seq__21435 = G__21471;
chunk__21436 = G__21472;
count__21437 = G__21473;
i__21438 = G__21474;
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
G__21444 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__21444__1.call(this,f);
case 2:
return G__21444__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21444.cljs$core$IFn$_invoke$arity$1 = G__21444__1;
G__21444.cljs$core$IFn$_invoke$arity$2 = G__21444__2;
return G__21444;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21441 = temp__4124__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21441,(0),null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21441,(1),null);var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21441,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,attr__$1,null));
} else
{var G__21442 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__21442__$1 = ((datascript.core.multival_QMARK_(self__.db,attr))?datascript.impl.entity.multival__GT_js(G__21442):G__21442);return G__21442__$1;
}
}
});
datascript.impl.entity.Entity.prototype.key_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.keys(this$));
});
datascript.impl.entity.Entity.prototype.entries = (function (){var self__ = this;
var this$ = this;return cljs.core.entries_iterator(datascript.impl.entity.js_seq(this$));
});
datascript.impl.entity.Entity.prototype.value_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_(this$);
});
datascript.impl.entity.Entity.prototype.keys = (function (){var self__ = this;
var this$ = this;return cljs.core.iterator(cljs.core.keys(this$));
});
datascript.impl.entity.Entity.prototype.values = (function (){var self__ = this;
var this$ = this;return cljs.core.iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});
datascript.impl.entity.Entity.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
datascript.impl.entity.Entity.prototype.has = (function (attr){var self__ = this;
var this$ = this;return !((this$.get(attr) == null));
});
datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});
var G__21475_21477 = "datascript.impl.entity.Entity.prototype.get";var G__21476_21478 = datascript.impl.entity.Entity.prototype.get;goog.exportSymbol(G__21475_21477,G__21476_21478);
var G__21479_21481 = "datascript.impl.entity.Entity.prototype.has";var G__21480_21482 = datascript.impl.entity.Entity.prototype.has;goog.exportSymbol(G__21479_21481,G__21480_21482);
var G__21483_21485 = "datascript.impl.entity.Entity.prototype.forEach";var G__21484_21486 = datascript.impl.entity.Entity.prototype.forEach;goog.exportSymbol(G__21483_21485,G__21484_21486);
var G__21487_21489 = "datascript.impl.entity.Entity.prototype.key_set";var G__21488_21490 = datascript.impl.entity.Entity.prototype.key_set;goog.exportSymbol(G__21487_21489,G__21488_21490);
var G__21491_21493 = "datascript.impl.entity.Entity.prototype.value_set";var G__21492_21494 = datascript.impl.entity.Entity.prototype.value_set;goog.exportSymbol(G__21491_21493,G__21492_21494);
var G__21495_21497 = "datascript.impl.entity.Entity.prototype.entry_set";var G__21496_21498 = datascript.impl.entity.Entity.prototype.entry_set;goog.exportSymbol(G__21495_21497,G__21496_21498);
var G__21499_21501 = "datascript.impl.entity.Entity.prototype.keys";var G__21500_21502 = datascript.impl.entity.Entity.prototype.keys;goog.exportSymbol(G__21499_21501,G__21500_21502);
var G__21503_21505 = "datascript.impl.entity.Entity.prototype.values";var G__21504_21506 = datascript.impl.entity.Entity.prototype.values;goog.exportSymbol(G__21503_21505,G__21504_21506);
var G__21507_21509 = "datascript.impl.entity.Entity.prototype.entries";var G__21508_21510 = datascript.impl.entity.Entity.prototype.entries;goog.exportSymbol(G__21507_21509,G__21508_21510);
var G__21511_21513 = "cljs.core.Iterator.prototype.next";var G__21512_21514 = cljs.core.Iterator.prototype.next;goog.exportSymbol(G__21511_21513,G__21512_21514);
var G__21515_21517 = "cljs.core.EntriesIterator.prototype.next";var G__21516_21518 = cljs.core.EntriesIterator.prototype.next;goog.exportSymbol(G__21515_21517,G__21516_21518);
