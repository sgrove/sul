// Compiled by ClojureScript 0.0-2356
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.Datom.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$], 0));
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4870__auto__,k__4871__auto__){var self__ = this;
var this__4870__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4870__auto____$1,k__4871__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4872__auto__,k21631,else__4873__auto__){var self__ = this;
var this__4872__auto____$1 = this;var G__21633 = (((k21631 instanceof cljs.core.Keyword))?k21631.fqn:null);switch (G__21633) {
case "added":
return self__.added;

break;
case "tx":
return self__.tx;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
case "e":
return self__.e;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21631,else__4873__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4884__auto__,writer__4885__auto__,opts__4886__auto__){var self__ = this;
var this__4884__auto____$1 = this;var pr_pair__4887__auto__ = ((function (this__4884__auto____$1){
return (function (keyval__4888__auto__){return cljs.core.pr_sequential_writer(writer__4885__auto__,cljs.core.pr_writer,""," ","",opts__4886__auto__,keyval__4888__auto__);
});})(this__4884__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4885__auto__,pr_pair__4887__auto__,"#datascript.core.Datom{",", ","}",opts__4886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$155,self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$156,self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$157,self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$158,self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$159,self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4868__auto__){var self__ = this;
var this__4868__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4864__auto__){var self__ = this;
var this__4864__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4874__auto__){var self__ = this;
var this__4874__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4865__auto__){var self__ = this;
var this__4865__auto____$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_imap(this__4865__auto____$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4866__auto__,other__4867__auto__){var self__ = this;
var this__4866__auto____$1 = this;if(cljs.core.truth_((function (){var and__4263__auto__ = other__4867__auto__;if(cljs.core.truth_(and__4263__auto__))
{return ((this__4866__auto____$1.constructor === other__4867__auto__.constructor)) && (cljs.core.equiv_map(this__4866__auto____$1,other__4867__auto__));
} else
{return and__4263__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4879__auto__,k__4880__auto__){var self__ = this;
var this__4879__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$157,null,cljs.core.constant$keyword$159,null,cljs.core.constant$keyword$155,null,cljs.core.constant$keyword$158,null,cljs.core.constant$keyword$156,null], null), null),k__4880__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4879__auto____$1),self__.__meta),k__4880__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4880__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4877__auto__,k__4878__auto__,G__21630){var self__ = this;
var this__4877__auto____$1 = this;var pred__21634 = cljs.core.keyword_identical_QMARK_;var expr__21635 = k__4878__auto__;if(cljs.core.truth_((function (){var G__21637 = cljs.core.constant$keyword$155;var G__21638 = expr__21635;return (pred__21634.cljs$core$IFn$_invoke$arity$2 ? pred__21634.cljs$core$IFn$_invoke$arity$2(G__21637,G__21638) : pred__21634.call(null,G__21637,G__21638));
})()))
{return (new datascript.core.Datom(G__21630,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21639 = cljs.core.constant$keyword$156;var G__21640 = expr__21635;return (pred__21634.cljs$core$IFn$_invoke$arity$2 ? pred__21634.cljs$core$IFn$_invoke$arity$2(G__21639,G__21640) : pred__21634.call(null,G__21639,G__21640));
})()))
{return (new datascript.core.Datom(self__.e,G__21630,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21641 = cljs.core.constant$keyword$157;var G__21642 = expr__21635;return (pred__21634.cljs$core$IFn$_invoke$arity$2 ? pred__21634.cljs$core$IFn$_invoke$arity$2(G__21641,G__21642) : pred__21634.call(null,G__21641,G__21642));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,G__21630,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21643 = cljs.core.constant$keyword$158;var G__21644 = expr__21635;return (pred__21634.cljs$core$IFn$_invoke$arity$2 ? pred__21634.cljs$core$IFn$_invoke$arity$2(G__21643,G__21644) : pred__21634.call(null,G__21643,G__21644));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__21630,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21645 = cljs.core.constant$keyword$159;var G__21646 = expr__21635;return (pred__21634.cljs$core$IFn$_invoke$arity$2 ? pred__21634.cljs$core$IFn$_invoke$arity$2(G__21645,G__21646) : pred__21634.call(null,G__21645,G__21646));
})()))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__21630,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4878__auto__,G__21630),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4882__auto__){var self__ = this;
var this__4882__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$155,self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$156,self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$157,self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$158,self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$159,self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4869__auto__,G__21630){var self__ = this;
var this__4869__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__21630,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4875__auto__,entry__4876__auto__){var self__ = this;
var this__4875__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4876__auto__))
{return cljs.core._assoc(this__4875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4875__auto____$1,entry__4876__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__4904__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__4904__auto__,writer__4905__auto__){return cljs.core._write(writer__4905__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__21632){return (new datascript.core.Datom(cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(G__21632),cljs.core.constant$keyword$156.cljs$core$IFn$_invoke$arity$1(G__21632),cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(G__21632),cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(G__21632),cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(G__21632),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21632,cljs.core.constant$keyword$155,cljs.core.array_seq([cljs.core.constant$keyword$156,cljs.core.constant$keyword$157,cljs.core.constant$keyword$158,cljs.core.constant$keyword$159], 0))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.e,o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__4275__auto__ = d__$1.__hash;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return d__$1.__hash = cljs.core.hash_combine(cljs.core.hash_combine(cljs.core.hash(d__$1.e),cljs.core.hash(d__$1.a)),cljs.core.hash(d__$1.v));
}
});
datascript.core.ISearch = (function (){var obj21649 = {};return obj21649;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__4263__auto__ = data;if(and__4263__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__4263__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__4911__auto__ = (((data == null))?null:data);return (function (){var or__4275__auto__ = (datascript.core._search[(function (){var G__21653 = x__4911__auto__;return goog.typeOf(G__21653);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (datascript.core._search["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});
datascript.core.cmp_val = (function cmp_val(o1,o2){if((cljs.core.some_QMARK_(o1)) && (cljs.core.some_QMARK_(o2)))
{var t1 = cljs.core.type(o1);var t2 = cljs.core.type(o2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,t2))
{return cljs.core.compare(o1,o2);
} else
{return cljs.core.compare(t1,t2);
}
} else
{return (0);
}
});
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__4263__auto__ = o1;if(cljs.core.truth_(and__4263__auto__))
{return o2;
} else
{return and__4263__auto__;
}
})()))
{return cljs.core.compare(o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__5866__auto__ = datascript.core.cmp(d1.e,d2.e);if(((0) === c__5866__auto__))
{var c__5866__auto____$1 = datascript.core.cmp(d1.a,d2.a);if(((0) === c__5866__auto____$1))
{var c__5866__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__5866__auto____$2))
{var c__5866__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__5866__auto____$3))
{return (0);
} else
{return c__5866__auto____$3;
}
} else
{return c__5866__auto____$2;
}
} else
{return c__5866__auto____$1;
}
} else
{return c__5866__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__5866__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__5866__auto__))
{var c__5866__auto____$1 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__5866__auto____$1))
{var c__5866__auto____$2 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__5866__auto____$2))
{var c__5866__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__5866__auto____$3))
{return (0);
} else
{return c__5866__auto____$3;
}
} else
{return c__5866__auto____$2;
}
} else
{return c__5866__auto____$1;
}
} else
{return c__5866__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__5866__auto__ = datascript.core.cmp(d1.a,d2.a);if(((0) === c__5866__auto__))
{var c__5866__auto____$1 = datascript.core.cmp_val(d1.v,d2.v);if(((0) === c__5866__auto____$1))
{var c__5866__auto____$2 = datascript.core.cmp(d1.e,d2.e);if(((0) === c__5866__auto____$2))
{var c__5866__auto____$3 = datascript.core.cmp(d1.tx,d2.tx);if(((0) === c__5866__auto____$3))
{return (0);
} else
{return c__5866__auto____$3;
}
} else
{return c__5866__auto____$2;
}
} else
{return c__5866__auto____$1;
}
} else
{return c__5866__auto__;
}
});

/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} refs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,refs,__meta,__extmap){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.refs = refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.DB.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_(this$);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4870__auto__,k__4871__auto__){var self__ = this;
var this__4870__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4870__auto____$1,k__4871__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4872__auto__,k21664,else__4873__auto__){var self__ = this;
var this__4872__auto____$1 = this;var G__21666 = (((k21664 instanceof cljs.core.Keyword))?k21664.fqn:null);switch (G__21666) {
case "refs":
return self__.refs;

break;
case "max-tx":
return self__.max_tx;

break;
case "max-eid":
return self__.max_eid;

break;
case "avet":
return self__.avet;

break;
case "aevt":
return self__.aevt;

break;
case "eavt":
return self__.eavt;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21664,else__4873__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4884__auto__,writer__4885__auto__,opts__4886__auto__){var self__ = this;
var this__4884__auto____$1 = this;var pr_pair__4887__auto__ = ((function (this__4884__auto____$1){
return (function (keyval__4888__auto__){return cljs.core.pr_sequential_writer(writer__4885__auto__,cljs.core.pr_writer,""," ","",opts__4886__auto__,keyval__4888__auto__);
});})(this__4884__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4885__auto__,pr_pair__4887__auto__,"#datascript.core.DB{",", ","}",opts__4886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$160,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$161,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$162,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$163,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$164,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$165,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$166,self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4868__auto__){var self__ = this;
var this__4868__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4864__auto__){var self__ = this;
var this__4864__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4874__auto__){var self__ = this;
var this__4874__auto____$1 = this;return (7 + cljs.core.count(self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4865__auto__){var self__ = this;
var this__4865__auto____$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_imap(this__4865__auto____$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4866__auto__,other__4867__auto__){var self__ = this;
var this__4866__auto____$1 = this;if(cljs.core.truth_((function (){var and__4263__auto__ = other__4867__auto__;if(cljs.core.truth_(and__4263__auto__))
{return ((this__4866__auto____$1.constructor === other__4867__auto__.constructor)) && (cljs.core.equiv_map(this__4866__auto____$1,other__4867__auto__));
} else
{return and__4263__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4879__auto__,k__4880__auto__){var self__ = this;
var this__4879__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$160,null,cljs.core.constant$keyword$165,null,cljs.core.constant$keyword$162,null,cljs.core.constant$keyword$166,null,cljs.core.constant$keyword$163,null,cljs.core.constant$keyword$164,null,cljs.core.constant$keyword$161,null], null), null),k__4880__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4879__auto____$1),self__.__meta),k__4880__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4880__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4877__auto__,k__4878__auto__,G__21663){var self__ = this;
var this__4877__auto____$1 = this;var pred__21667 = cljs.core.keyword_identical_QMARK_;var expr__21668 = k__4878__auto__;if(cljs.core.truth_((function (){var G__21670 = cljs.core.constant$keyword$160;var G__21671 = expr__21668;return (pred__21667.cljs$core$IFn$_invoke$arity$2 ? pred__21667.cljs$core$IFn$_invoke$arity$2(G__21670,G__21671) : pred__21667.call(null,G__21670,G__21671));
})()))
{return (new datascript.core.DB(G__21663,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21672 = cljs.core.constant$keyword$161;var G__21673 = expr__21668;return (pred__21667.cljs$core$IFn$_invoke$arity$2 ? pred__21667.cljs$core$IFn$_invoke$arity$2(G__21672,G__21673) : pred__21667.call(null,G__21672,G__21673));
})()))
{return (new datascript.core.DB(self__.schema,G__21663,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21674 = cljs.core.constant$keyword$162;var G__21675 = expr__21668;return (pred__21667.cljs$core$IFn$_invoke$arity$2 ? pred__21667.cljs$core$IFn$_invoke$arity$2(G__21674,G__21675) : pred__21667.call(null,G__21674,G__21675));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__21663,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21676 = cljs.core.constant$keyword$163;var G__21677 = expr__21668;return (pred__21667.cljs$core$IFn$_invoke$arity$2 ? pred__21667.cljs$core$IFn$_invoke$arity$2(G__21676,G__21677) : pred__21667.call(null,G__21676,G__21677));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__21663,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21678 = cljs.core.constant$keyword$164;var G__21679 = expr__21668;return (pred__21667.cljs$core$IFn$_invoke$arity$2 ? pred__21667.cljs$core$IFn$_invoke$arity$2(G__21678,G__21679) : pred__21667.call(null,G__21678,G__21679));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__21663,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21680 = cljs.core.constant$keyword$165;var G__21681 = expr__21668;return (pred__21667.cljs$core$IFn$_invoke$arity$2 ? pred__21667.cljs$core$IFn$_invoke$arity$2(G__21680,G__21681) : pred__21667.call(null,G__21680,G__21681));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__21663,self__.refs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21682 = cljs.core.constant$keyword$166;var G__21683 = expr__21668;return (pred__21667.cljs$core$IFn$_invoke$arity$2 ? pred__21667.cljs$core$IFn$_invoke$arity$2(G__21682,G__21683) : pred__21667.call(null,G__21682,G__21683));
})()))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__21663,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4878__auto__,G__21663),null));
}
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4882__auto__){var self__ = this;
var this__4882__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$160,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$161,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$162,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$163,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$164,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$165,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$166,self__.refs],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4869__auto__,G__21663){var self__ = this;
var this__4869__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,G__21663,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4875__auto__,entry__4876__auto__){var self__ = this;
var this__4875__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4876__auto__))
{return cljs.core._assoc(this__4875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4875__auto____$1,entry__4876__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__21684){var self__ = this;
var vec__21685 = p__21684;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21685,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21654_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__21654_SHARP_.tx);
});})(___$1,vec__21685,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21655_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__21655_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__21655_SHARP_.tx));
});})(___$1,vec__21685,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21656_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__21656_SHARP_.v);
});})(___$1,vec__21685,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21657_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__21657_SHARP_.tx);
});})(___$1,vec__21685,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.eavt,(new datascript.core.Datom(e,null,null,null,null)));
}
}
}
} else
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21658_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__21658_SHARP_.tx);
});})(___$1,vec__21685,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21659_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__21659_SHARP_.tx);
});})(___$1,vec__21685,e,a,v,tx))
,datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_(v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21660_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__21660_SHARP_.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__21660_SHARP_.tx));
});})(___$1,vec__21685,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21661_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__21661_SHARP_.v);
});})(___$1,vec__21685,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (___$1,vec__21685,e,a,v,tx){
return (function (p1__21662_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,p1__21662_SHARP_.tx);
});})(___$1,vec__21685,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__4904__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__4904__auto__,writer__4905__auto__){return cljs.core._write(writer__4905__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,refs){return (new datascript.core.DB(schema,eavt,aevt,avet,max_eid,max_tx,refs));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__21665){return (new datascript.core.DB(cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(G__21665),cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(G__21665),cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(G__21665),cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(G__21665),cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(G__21665),cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(G__21665),cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(G__21665),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21665,cljs.core.constant$keyword$160,cljs.core.array_seq([cljs.core.constant$keyword$161,cljs.core.constant$keyword$162,cljs.core.constant$keyword$163,cljs.core.constant$keyword$164,cljs.core.constant$keyword$165,cljs.core.constant$keyword$166], 0))));
});
datascript.core.equiv_index = (function equiv_index(x,y){var and__4263__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y));if(and__4263__auto__)
{var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__21687 = cljs.core.next(xs);
var G__21688 = cljs.core.next(ys);
xs = G__21687;
ys = G__21688;
continue;
}
} else
{return false;

}
}
break;
}
} else
{return and__4263__auto__;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return ((other instanceof datascript.core.DB)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.schema,other.schema)) && (datascript.core.equiv_index(this$__$1.eavt,other.eavt));
});
datascript.core.DB.prototype.cljs$core$IHash$ = true;
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;var or__4275__auto__ = this$__$1.__hash;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return this$__$1.__hash = cljs.core.hash_coll(this$__$1.eavt);
}
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4870__auto__,k__4871__auto__){var self__ = this;
var this__4870__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4870__auto____$1,k__4871__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4872__auto__,k21690,else__4873__auto__){var self__ = this;
var this__4872__auto____$1 = this;var G__21692 = (((k21690 instanceof cljs.core.Keyword))?k21690.fqn:null);switch (G__21692) {
case "tempids":
return self__.tempids;

break;
case "tx-data":
return self__.tx_data;

break;
case "db-after":
return self__.db_after;

break;
case "db-before":
return self__.db_before;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21690,else__4873__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4884__auto__,writer__4885__auto__,opts__4886__auto__){var self__ = this;
var this__4884__auto____$1 = this;var pr_pair__4887__auto__ = ((function (this__4884__auto____$1){
return (function (keyval__4888__auto__){return cljs.core.pr_sequential_writer(writer__4885__auto__,cljs.core.pr_writer,""," ","",opts__4886__auto__,keyval__4888__auto__);
});})(this__4884__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4885__auto__,pr_pair__4887__auto__,"#datascript.core.TxReport{",", ","}",opts__4886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$167,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$168,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$169,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$170,self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4868__auto__){var self__ = this;
var this__4868__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4864__auto__){var self__ = this;
var this__4864__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4874__auto__){var self__ = this;
var this__4874__auto____$1 = this;return (4 + cljs.core.count(self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4865__auto__){var self__ = this;
var this__4865__auto____$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_imap(this__4865__auto____$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4866__auto__,other__4867__auto__){var self__ = this;
var this__4866__auto____$1 = this;if(cljs.core.truth_((function (){var and__4263__auto__ = other__4867__auto__;if(cljs.core.truth_(and__4263__auto__))
{return ((this__4866__auto____$1.constructor === other__4867__auto__.constructor)) && (cljs.core.equiv_map(this__4866__auto____$1,other__4867__auto__));
} else
{return and__4263__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4879__auto__,k__4880__auto__){var self__ = this;
var this__4879__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$170,null,cljs.core.constant$keyword$168,null,cljs.core.constant$keyword$167,null,cljs.core.constant$keyword$169,null], null), null),k__4880__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4879__auto____$1),self__.__meta),k__4880__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4880__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4877__auto__,k__4878__auto__,G__21689){var self__ = this;
var this__4877__auto____$1 = this;var pred__21693 = cljs.core.keyword_identical_QMARK_;var expr__21694 = k__4878__auto__;if(cljs.core.truth_((function (){var G__21696 = cljs.core.constant$keyword$167;var G__21697 = expr__21694;return (pred__21693.cljs$core$IFn$_invoke$arity$2 ? pred__21693.cljs$core$IFn$_invoke$arity$2(G__21696,G__21697) : pred__21693.call(null,G__21696,G__21697));
})()))
{return (new datascript.core.TxReport(G__21689,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21698 = cljs.core.constant$keyword$168;var G__21699 = expr__21694;return (pred__21693.cljs$core$IFn$_invoke$arity$2 ? pred__21693.cljs$core$IFn$_invoke$arity$2(G__21698,G__21699) : pred__21693.call(null,G__21698,G__21699));
})()))
{return (new datascript.core.TxReport(self__.db_before,G__21689,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21700 = cljs.core.constant$keyword$169;var G__21701 = expr__21694;return (pred__21693.cljs$core$IFn$_invoke$arity$2 ? pred__21693.cljs$core$IFn$_invoke$arity$2(G__21700,G__21701) : pred__21693.call(null,G__21700,G__21701));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__21689,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21702 = cljs.core.constant$keyword$170;var G__21703 = expr__21694;return (pred__21693.cljs$core$IFn$_invoke$arity$2 ? pred__21693.cljs$core$IFn$_invoke$arity$2(G__21702,G__21703) : pred__21693.call(null,G__21702,G__21703));
})()))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__21689,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4878__auto__,G__21689),null));
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4882__auto__){var self__ = this;
var this__4882__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$167,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$168,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$169,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$170,self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4869__auto__,G__21689){var self__ = this;
var this__4869__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__21689,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4875__auto__,entry__4876__auto__){var self__ = this;
var this__4875__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4876__auto__))
{return cljs.core._assoc(this__4875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4875__auto____$1,entry__4876__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__4904__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__4904__auto__,writer__4905__auto__){return cljs.core._write(writer__4905__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__21691){return (new datascript.core.TxReport(cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(G__21691),cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(G__21691),cljs.core.constant$keyword$169.cljs$core$IFn$_invoke$arity$1(G__21691),cljs.core.constant$keyword$170.cljs$core$IFn$_invoke$arity$1(G__21691),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21691,cljs.core.constant$keyword$167,cljs.core.array_seq([cljs.core.constant$keyword$168,cljs.core.constant$keyword$169,cljs.core.constant$keyword$170], 0))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,attr,cljs.core.constant$keyword$171], null)),cljs.core.constant$keyword$172);
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,attr,cljs.core.constant$keyword$173], null)),cljs.core.constant$keyword$174);
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$165], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__21706 = db;var G__21706__$1 = (((eid > cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(db)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21706,cljs.core.constant$keyword$164,eid):G__21706);return G__21706__$1;
});
datascript.core.allocate_eid = (function() {
var allocate_eid = null;
var allocate_eid__2 = (function (report,eid){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168], null),datascript.core.advance_max_eid,eid);
});
var allocate_eid__3 = (function (report,e,eid){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168], null),datascript.core.advance_max_eid,eid);
});
allocate_eid = function(report,e,eid){
switch(arguments.length){
case 2:
return allocate_eid__2.call(this,report,e);
case 3:
return allocate_eid__3.call(this,report,e,eid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
allocate_eid.cljs$core$IFn$_invoke$arity$2 = allocate_eid__2;
allocate_eid.cljs$core$IFn$_invoke$arity$3 = allocate_eid__3;
return allocate_eid;
})()
;
datascript.core.with_datom = (function with_datom(db,datom){if(cljs.core.truth_(datom.added))
{return datascript.core.advance_max_eid(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$162], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163], null),cljs.core.conj,datom),datom.e);
} else
{var removing = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$162], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163], null),cljs.core.disj,removing);
}
});
datascript.core.transact_report = (function transact_report(report,datom){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$169], null),cljs.core.conj,datom);
});
datascript.core.reverse_ref = (function reverse_ref(attr){var name = cljs.core.name(attr);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0))))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
} else
{return null;
}
});
datascript.core.explode = (function explode(db,entity){var eid = cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(entity);var iter__5013__auto__ = ((function (eid){
return (function iter__21720(s__21721){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__21721__$1 = s__21721;while(true){
var temp__4126__auto__ = cljs.core.seq(s__21721__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__21730 = cljs.core.first(xs__4624__auto__);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21730,(0),null);var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21730,(1),null);var reverse_a = datascript.core.reverse_ref(a);var iterys__5009__auto__ = ((function (s__21721__$1,reverse_a,vec__21730,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__21722(s__21723){return (new cljs.core.LazySeq(null,((function (s__21721__$1,reverse_a,vec__21730,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__21723__$1 = s__21723;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21723__$1);if(temp__4126__auto____$1)
{var s__21723__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__21723__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__21723__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__21725 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__21724 = (0);while(true){
if((i__21724 < size__5012__auto__))
{var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__21724);cljs.core.chunk_append(b__21725,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,eid,a,v], null)));
{
var G__21733 = (i__21724 + (1));
i__21724 = G__21733;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21725),iter__21722(cljs.core.chunk_rest(s__21723__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21725),null);
}
} else
{var v = cljs.core.first(s__21723__$2);return cljs.core.cons((cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,eid,a,v], null)),iter__21722(cljs.core.rest(s__21723__$2)));
}
} else
{return null;
}
break;
}
});})(s__21721__$1,reverse_a,vec__21730,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__21721__$1,reverse_a,vec__21730,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__5010__auto__ = cljs.core.seq(iterys__5009__auto__(((((vs instanceof Array) || (cljs.core.coll_QMARK_(vs))) && (!(cljs.core.map_QMARK_(vs))) && (datascript.core.multival_QMARK_(db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__5010__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5010__auto__,iter__21720(cljs.core.rest(s__21721__$1)));
} else
{{
var G__21734 = cljs.core.rest(s__21721__$1);
s__21721__$1 = G__21734;
continue;
}
}
} else
{return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;return iter__5013__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,cljs.core.constant$keyword$175));
});
datascript.core.transact_add = (function transact_add(report,p__21735){var vec__21737 = p__21735;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(3),null);var tx = datascript.core.current_tx(report);var db = cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_(db,a))
{if(cljs.core.empty_QMARK_(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null))))
{return datascript.core.transact_report(report,datom);
} else
{return report;
}
} else
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v))
{return report;
} else
{return datascript.core.transact_report(datascript.core.transact_report(report,(new datascript.core.Datom(e,a,old_datom.v,tx,false))),datom);
}
} else
{return datascript.core.transact_report(report,datom);
}
}
});
datascript.core.transact_retract_datom = (function transact_retract_datom(report,d){var tx = datascript.core.current_tx(report);return datascript.core.transact_report(report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.core.transact_tx_data = (function transact_tx_data(report,p__21739){while(true){
var vec__21744 = p__21739;var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21744,(0),null);var entities = cljs.core.nthnext(vec__21744,(1));var es = vec__21744;var db = cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$165], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_(entity))
{if(cljs.core.truth_(cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(entity)))
{{
var G__21748 = report;
var G__21749 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.explode(db,entity),entities);
report = G__21748;
p__21739 = G__21749;
continue;
}
} else
{var eid = datascript.core.next_eid(db);var entity__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.constant$keyword$175,eid);{
var G__21750 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2(report,eid);
var G__21751 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__21750;
p__21739 = G__21751;
continue;
}
}
} else
{var vec__21745 = entity;var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(0),null);var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(1),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(2),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(3),null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$177))
{var vec__21746 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(1),null);var args = cljs.core.nthnext(vec__21746,(2));{
var G__21752 = report;
var G__21753 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__21752;
p__21739 = G__21753;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$178))
{var vec__21747 = entity;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,(0),null);var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,(1),null);var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,(2),null);var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,(3),null);var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21747,(4),null);var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a__$1], null));if(datascript.core.multival_QMARK_(db,a__$1))
{if(cljs.core.truth_(cljs.core.some(((function (report,p__21739,vec__21747,_,e__$1,a__$1,ov,nv,datoms,vec__21745,op,e,a,v,db,vec__21744,entity,entities,es){
return (function (p1__21738_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21738_SHARP_.v,ov);
});})(report,p__21739,vec__21747,_,e__$1,a__$1,ov,nv,datoms,vec__21745,op,e,a,v,db,vec__21744,entity,entities,es))
,datoms)))
{{
var G__21754 = datascript.core.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,e__$1,a__$1,nv], null));
var G__21755 = entities;
report = G__21754;
p__21739 = G__21755;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$157,datoms))+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
} else
{var v__$1 = cljs.core.first(datoms).v;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov))
{{
var G__21756 = datascript.core.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,e__$1,a__$1,nv], null));
var G__21757 = entities;
report = G__21756;
p__21739 = G__21757;
continue;
}
} else
{throw (new Error((":db.fn/cas failed on datom ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)+"], expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ov))));
}
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__21758 = report;
var G__21759 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__21758;
p__21739 = G__21759;
continue;
}
} else
{{
var G__21760 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.core.next_eid(db));
var G__21761 = es;
report = G__21760;
p__21739 = G__21761;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_(db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__21762 = report;
var G__21763 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__21762;
p__21739 = G__21763;
continue;
}
} else
{{
var G__21764 = datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.core.next_eid(db));
var G__21765 = es;
report = G__21764;
p__21739 = G__21765;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$176))
{{
var G__21766 = datascript.core.transact_add(report,entity);
var G__21767 = entities;
report = G__21766;
p__21739 = G__21767;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$179))
{var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__21768 = datascript.core.transact_retract_datom(report,old_datom);
var G__21769 = entities;
report = G__21768;
p__21739 = G__21769;
continue;
}
} else
{{
var G__21770 = report;
var G__21771 = entities;
report = G__21770;
p__21739 = G__21771;
continue;
}
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$180))
{var datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__21772 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,datoms);
var G__21773 = entities;
report = G__21772;
p__21739 = G__21773;
continue;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$181))
{var e_datoms = datascript.core._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));var v_datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,p__21739,e_datoms,vec__21745,op,e,a,v,db,vec__21744,entity,entities,es){
return (function (a__$1){return datascript.core._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e], null));
});})(report,p__21739,e_datoms,vec__21745,op,e,a,v,db,vec__21744,entity,entities,es))
,cljs.core.array_seq([db.refs], 0));{
var G__21774 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.core.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__21775 = entities;
report = G__21774;
p__21739 = G__21775;
continue;
}
} else
{return null;
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
break;
}
});
