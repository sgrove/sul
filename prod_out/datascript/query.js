// Compiled by ClojureScript 0.0-2356
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('cljs.reader');

/**
* @constructor
* @param {*} rels
* @param {*} sources
* @param {*} rules
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4870__auto__,k__4871__auto__){var self__ = this;
var this__4870__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4870__auto____$1,k__4871__auto__,null);
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4872__auto__,k21777,else__4873__auto__){var self__ = this;
var this__4872__auto____$1 = this;var G__21779 = (((k21777 instanceof cljs.core.Keyword))?k21777.fqn:null);switch (G__21779) {
case "rules":
return self__.rules;

break;
case "sources":
return self__.sources;

break;
case "rels":
return self__.rels;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21777,else__4873__auto__);

}
});
datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4884__auto__,writer__4885__auto__,opts__4886__auto__){var self__ = this;
var this__4884__auto____$1 = this;var pr_pair__4887__auto__ = ((function (this__4884__auto____$1){
return (function (keyval__4888__auto__){return cljs.core.pr_sequential_writer(writer__4885__auto__,cljs.core.pr_writer,""," ","",opts__4886__auto__,keyval__4888__auto__);
});})(this__4884__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4885__auto__,pr_pair__4887__auto__,"#datascript.query.Context{",", ","}",opts__4886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$183,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$184,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$185,self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4868__auto__){var self__ = this;
var this__4868__auto____$1 = this;return self__.__meta;
});
datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4864__auto__){var self__ = this;
var this__4864__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4874__auto__){var self__ = this;
var this__4874__auto____$1 = this;return (3 + cljs.core.count(self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4865__auto__){var self__ = this;
var this__4865__auto____$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_imap(this__4865__auto____$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4866__auto__,other__4867__auto__){var self__ = this;
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
datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4879__auto__,k__4880__auto__){var self__ = this;
var this__4879__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$184,null,cljs.core.constant$keyword$185,null,cljs.core.constant$keyword$183,null], null), null),k__4880__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4879__auto____$1),self__.__meta),k__4880__auto__);
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4880__auto__)),null));
}
});
datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4877__auto__,k__4878__auto__,G__21776){var self__ = this;
var this__4877__auto____$1 = this;var pred__21780 = cljs.core.keyword_identical_QMARK_;var expr__21781 = k__4878__auto__;if(cljs.core.truth_((function (){var G__21783 = cljs.core.constant$keyword$183;var G__21784 = expr__21781;return (pred__21780.cljs$core$IFn$_invoke$arity$2 ? pred__21780.cljs$core$IFn$_invoke$arity$2(G__21783,G__21784) : pred__21780.call(null,G__21783,G__21784));
})()))
{return (new datascript.query.Context(G__21776,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21785 = cljs.core.constant$keyword$184;var G__21786 = expr__21781;return (pred__21780.cljs$core$IFn$_invoke$arity$2 ? pred__21780.cljs$core$IFn$_invoke$arity$2(G__21785,G__21786) : pred__21780.call(null,G__21785,G__21786));
})()))
{return (new datascript.query.Context(self__.rels,G__21776,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21787 = cljs.core.constant$keyword$185;var G__21788 = expr__21781;return (pred__21780.cljs$core$IFn$_invoke$arity$2 ? pred__21780.cljs$core$IFn$_invoke$arity$2(G__21787,G__21788) : pred__21780.call(null,G__21787,G__21788));
})()))
{return (new datascript.query.Context(self__.rels,self__.sources,G__21776,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4878__auto__,G__21776),null));
}
}
}
});
datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4882__auto__){var self__ = this;
var this__4882__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$183,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$184,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$185,self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4869__auto__,G__21776){var self__ = this;
var this__4869__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__21776,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4875__auto__,entry__4876__auto__){var self__ = this;
var this__4875__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4876__auto__))
{return cljs.core._assoc(this__4875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4875__auto____$1,entry__4876__auto__);
}
});
datascript.query.Context.cljs$lang$type = true;
datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4904__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});
datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4904__auto__,writer__4905__auto__){return cljs.core._write(writer__4905__auto__,"datascript.query/Context");
});
datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){return (new datascript.query.Context(rels,sources,rules));
});
datascript.query.map__GT_Context = (function map__GT_Context(G__21778){return (new datascript.query.Context(cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(G__21778),cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(G__21778),cljs.core.constant$keyword$185.cljs$core$IFn$_invoke$arity$1(G__21778),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21778,cljs.core.constant$keyword$183,cljs.core.array_seq([cljs.core.constant$keyword$184,cljs.core.constant$keyword$185], 0))));
});

/**
* @constructor
* @param {*} attrs
* @param {*} tuples
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4870__auto__,k__4871__auto__){var self__ = this;
var this__4870__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4870__auto____$1,k__4871__auto__,null);
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4872__auto__,k21791,else__4873__auto__){var self__ = this;
var this__4872__auto____$1 = this;var G__21793 = (((k21791 instanceof cljs.core.Keyword))?k21791.fqn:null);switch (G__21793) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21791,else__4873__auto__);

}
});
datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4884__auto__,writer__4885__auto__,opts__4886__auto__){var self__ = this;
var this__4884__auto____$1 = this;var pr_pair__4887__auto__ = ((function (this__4884__auto____$1){
return (function (keyval__4888__auto__){return cljs.core.pr_sequential_writer(writer__4885__auto__,cljs.core.pr_writer,""," ","",opts__4886__auto__,keyval__4888__auto__);
});})(this__4884__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4885__auto__,pr_pair__4887__auto__,"#datascript.query.Relation{",", ","}",opts__4886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$186,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$187,self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4868__auto__){var self__ = this;
var this__4868__auto____$1 = this;return self__.__meta;
});
datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4864__auto__){var self__ = this;
var this__4864__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4874__auto__){var self__ = this;
var this__4874__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4865__auto__){var self__ = this;
var this__4865__auto____$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_imap(this__4865__auto____$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4866__auto__,other__4867__auto__){var self__ = this;
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
datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4879__auto__,k__4880__auto__){var self__ = this;
var this__4879__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$187,null,cljs.core.constant$keyword$186,null], null), null),k__4880__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4879__auto____$1),self__.__meta),k__4880__auto__);
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4880__auto__)),null));
}
});
datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4877__auto__,k__4878__auto__,G__21790){var self__ = this;
var this__4877__auto____$1 = this;var pred__21794 = cljs.core.keyword_identical_QMARK_;var expr__21795 = k__4878__auto__;if(cljs.core.truth_((function (){var G__21797 = cljs.core.constant$keyword$186;var G__21798 = expr__21795;return (pred__21794.cljs$core$IFn$_invoke$arity$2 ? pred__21794.cljs$core$IFn$_invoke$arity$2(G__21797,G__21798) : pred__21794.call(null,G__21797,G__21798));
})()))
{return (new datascript.query.Relation(G__21790,self__.tuples,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((function (){var G__21799 = cljs.core.constant$keyword$187;var G__21800 = expr__21795;return (pred__21794.cljs$core$IFn$_invoke$arity$2 ? pred__21794.cljs$core$IFn$_invoke$arity$2(G__21799,G__21800) : pred__21794.call(null,G__21799,G__21800));
})()))
{return (new datascript.query.Relation(self__.attrs,G__21790,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4878__auto__,G__21790),null));
}
}
});
datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4882__auto__){var self__ = this;
var this__4882__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$186,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$187,self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4869__auto__,G__21790){var self__ = this;
var this__4869__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,G__21790,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4875__auto__,entry__4876__auto__){var self__ = this;
var this__4875__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4876__auto__))
{return cljs.core._assoc(this__4875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4876__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4875__auto____$1,entry__4876__auto__);
}
});
datascript.query.Relation.cljs$lang$type = true;
datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4904__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});
datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4904__auto__,writer__4905__auto__){return cljs.core._write(writer__4905__auto__,"datascript.query/Relation");
});
datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){return (new datascript.query.Relation(attrs,tuples));
});
datascript.query.map__GT_Relation = (function map__GT_Relation(G__21792){return (new datascript.query.Relation(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(G__21792),cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(G__21792),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21792,cljs.core.constant$keyword$186,cljs.core.array_seq([cljs.core.constant$keyword$187], 0))));
});
datascript.query.intersect_keys = (function intersect_keys(attrs1,attrs2){return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
/**
* @param {...*} var_args
*/
datascript.query.concatv = (function() { 
var concatv__delegate = function (xs){return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,xs));
};
var concatv = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concatv__delegate.call(this,xs);};
concatv.cljs$lang$maxFixedArity = 0;
concatv.cljs$lang$applyTo = (function (arglist__21802){
var xs = cljs.core.seq(arglist__21802);
return concatv__delegate(xs);
});
concatv.cljs$core$IFn$_invoke$arity$variadic = concatv__delegate;
return concatv;
})()
;
datascript.query.source_QMARK_ = (function source_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.free_var_QMARK_ = (function free_var_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),sym));
});
datascript.query.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern))
{return true;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern))
{return cljs.core.sequential_QMARK_(form);
} else
{if(cljs.core.sequential_QMARK_(pattern))
{return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__21814){var vec__21815 = p__21814;var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21815,(0),null);var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21815,(1),null);return looks_like_QMARK_(pattern_el,form_el);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else
{var G__21816 = form;return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(G__21816) : pattern.call(null,G__21816));

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){var l1 = idxs1.length;var l2 = idxs2.length;var res = (new Array((l1 + l2)));var n__5144__auto___21817 = l1;var i_21818 = (0);while(true){
if((i_21818 < n__5144__auto___21817))
{(res[i_21818] = (t1[(idxs1[i_21818])]));
{
var G__21819 = (i_21818 + (1));
i_21818 = G__21819;
continue;
}
} else
{}
break;
}
var n__5144__auto___21820 = l2;var i_21821 = (0);while(true){
if((i_21821 < n__5144__auto___21820))
{(res[(l1 + i_21821)] = (t2[(idxs2[i_21821])]));
{
var G__21822 = (i_21821 + (1));
i_21821 = G__21822;
continue;
}
} else
{}
break;
}
return res;
});
datascript.query.sum_rel = (function sum_rel(a,b){return (new datascript.query.Relation(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(a),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(a),cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(b))));
});
datascript.query.prod_rel = (function() {
var prod_rel = null;
var prod_rel__0 = (function (){return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[]], null)));
});
var prod_rel__2 = (function (rel1,rel2){var attrs1 = cljs.core.keys(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel1));var attrs2 = cljs.core.keys(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel2));var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel1),attrs1));var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel2),attrs2));return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),(function (){var iter__5013__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__21834(s__21835){return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){var s__21835__$1 = s__21835;while(true){
var temp__4126__auto__ = cljs.core.seq(s__21835__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__5009__auto__ = ((function (s__21835__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__21836(s__21837){return (new cljs.core.LazySeq(null,((function (s__21835__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){var s__21837__$1 = s__21837;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__21837__$1);if(temp__4126__auto____$1)
{var s__21837__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__21837__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__21837__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__21839 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__21838 = (0);while(true){
if((i__21838 < size__5012__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__21838);cljs.core.chunk_append(b__21839,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
{
var G__21845 = (i__21838 + (1));
i__21838 = G__21845;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21839),iter__21836(cljs.core.chunk_rest(s__21837__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21839),null);
}
} else
{var t2 = cljs.core.first(s__21837__$2);return cljs.core.cons(datascript.query.join_tuples(t1,idxs1,t2,idxs2),iter__21836(cljs.core.rest(s__21837__$2)));
}
} else
{return null;
}
break;
}
});})(s__21835__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__21835__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;var fs__5010__auto__ = cljs.core.seq(iterys__5009__auto__(cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(rel2)));if(fs__5010__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5010__auto__,iter__21834(cljs.core.rest(s__21835__$1)));
} else
{{
var G__21846 = cljs.core.rest(s__21835__$1);
s__21835__$1 = G__21846;
continue;
}
}
} else
{return null;
}
break;
}
});})(attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(attrs1,attrs2,idxs1,idxs2))
;return iter__5013__auto__(cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(rel1));
})()));
});
prod_rel = function(rel1,rel2){
switch(arguments.length){
case 0:
return prod_rel__0.call(this);
case 2:
return prod_rel__2.call(this,rel1,rel2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prod_rel.cljs$core$IFn$_invoke$arity$0 = prod_rel__0;
prod_rel.cljs$core$IFn$_invoke$arity$2 = prod_rel__2;
return prod_rel;
})()
;
/**
* @param {...*} var_args
*/
datascript.query._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){var l = cljs.core.count(xs);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__21847){
var xs = cljs.core.seq(arglist__21847);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.query._get_else = (function _get_else(db,e,a,else_val){var temp__4124__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datom = temp__4124__auto__;return datom.v;
} else
{return else_val;
}
});
/**
* @param {...*} var_args
*/
datascript.query._get_some = (function() { 
var _get_some__delegate = function (db,e,as){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){var temp__4126__auto__ = cljs.core.first(datascript.core._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4126__auto__))
{var datom = temp__4126__auto__;return cljs.core.reduced(datom.v);
} else
{return null;
}
}),null,as);
};
var _get_some = function (db,e,var_args){
var as = null;if (arguments.length > 2) {
  as = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return _get_some__delegate.call(this,db,e,as);};
_get_some.cljs$lang$maxFixedArity = 2;
_get_some.cljs$lang$applyTo = (function (arglist__21848){
var db = cljs.core.first(arglist__21848);
arglist__21848 = cljs.core.next(arglist__21848);
var e = cljs.core.first(arglist__21848);
var as = cljs.core.rest(arglist__21848);
return _get_some__delegate(db,e,as);
});
_get_some.cljs$core$IFn$_invoke$arity$variadic = _get_some__delegate;
return _get_some;
})()
;
datascript.query._missing_QMARK_ = (function _missing_QMARK_(db,e,a){return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core._GT_,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",2085523049,null),(function() {
var G__21850 = null;
var G__21850__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,coll);
});
var G__21850__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else
{if((x < cljs.core.last(acc)))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__21850 = function(n,coll){
switch(arguments.length){
case 1:
return G__21850__1.call(this,n);
case 2:
return G__21850__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21850.cljs$core$IFn$_invoke$arity$1 = G__21850__1;
G__21850.cljs$core$IFn$_invoke$arity$2 = G__21850__2;
return G__21850;
})()
,new cljs.core.Symbol(null,"max","max",1701898075,null),(function() {
var G__21851 = null;
var G__21851__1 = (function (coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,coll);
});
var G__21851__2 = (function (n,coll){return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){if((cljs.core.count(acc) < n))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else
{if((x > cljs.core.first(acc)))
{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__21851 = function(n,coll){
switch(arguments.length){
case 1:
return G__21851__1.call(this,n);
case 2:
return G__21851__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21851.cljs$core$IFn$_invoke$arity$1 = G__21851__1;
G__21851.cljs$core$IFn$_invoke$arity$2 = G__21851__2;
return G__21851;
})()
,new cljs.core.Symbol(null,"sum","sum",1777518341,null),(function (p1__21849_SHARP_){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),p1__21849_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),(function() {
var G__21852 = null;
var G__21852__1 = (function (coll){return cljs.core.rand_nth(coll);
});
var G__21852__2 = (function (n,coll){return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){return cljs.core.rand_nth(coll);
})));
});
G__21852 = function(n,coll){
switch(arguments.length){
case 1:
return G__21852__1.call(this,n);
case 2:
return G__21852__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21852.cljs$core$IFn$_invoke$arity$1 = G__21852__1;
G__21852.cljs$core$IFn$_invoke$arity$2 = G__21852__2;
return G__21852;
})()
,new cljs.core.Symbol(null,"sample","sample",1719555128,null),(function (n,coll){return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
}),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.count], null);
datascript.query.in__GT_rel = (function in__GT_rel(form,value){var pred__21874 = datascript.query.looks_like_QMARK_;var expr__21875 = form;if(cljs.core.truth_((function (){var G__21877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null);var G__21878 = expr__21875;return (pred__21874.cljs$core$IFn$_invoke$arity$2 ? pred__21874.cljs$core$IFn$_invoke$arity$2(G__21877,G__21878) : pred__21874.call(null,G__21877,G__21878));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__21874,expr__21875){
return (function (p1__21853_SHARP_){return in__GT_rel(cljs.core.first(form),p1__21853_SHARP_);
});})(pred__21874,expr__21875))
,value));
} else
{if(cljs.core.truth_((function (){var G__21879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__21880 = expr__21875;return (pred__21874.cljs$core$IFn$_invoke$arity$2 ? pred__21874.cljs$core$IFn$_invoke$arity$2(G__21879,G__21880) : pred__21874.call(null,G__21879,G__21880));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__21874,expr__21875){
return (function (p1__21854_SHARP_){return in__GT_rel(cljs.core.first(form),p1__21854_SHARP_);
});})(pred__21874,expr__21875))
,value));
} else
{if(cljs.core.truth_((function (){var G__21881 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__21882 = expr__21875;return (pred__21874.cljs$core$IFn$_invoke$arity$2 ? pred__21874.cljs$core$IFn$_invoke$arity$2(G__21881,G__21882) : pred__21874.call(null,G__21881,G__21882));
})()))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (pred__21874,expr__21875){
return (function (p1__21855_SHARP_,p2__21856_SHARP_){return in__GT_rel(p1__21855_SHARP_,p2__21856_SHARP_);
});})(pred__21874,expr__21875))
,form,value));
} else
{if(cljs.core.truth_((function (){var G__21883 = new cljs.core.Symbol(null,"_","_",-1201019570,null);var G__21884 = expr__21875;return (pred__21874.cljs$core$IFn$_invoke$arity$2 ? pred__21874.cljs$core$IFn$_invoke$arity$2(G__21883,G__21884) : pred__21874.call(null,G__21883,G__21884));
})()))
{return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21875))));
}
}
}
}
});
datascript.query.parse_rules = (function parse_rules(rules){var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__21885){var vec__21887 = p__21885;var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21887,(0),null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21887,(1),null);if(datascript.query.source_QMARK_(in$))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184], null),cljs.core.assoc,in$,value);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"%","%",-950237169,null),in$))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.constant$keyword$185,datascript.query.parse_rules(value));
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183], null),cljs.core.conj,datascript.query.in__GT_rel(in$,value));

}
}
});
datascript.query.parse_ins = (function parse_ins(context,ins,values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.parse_in,context,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ins,values));
});
datascript.query.tuple_key_fn = (function tuple_key_fn(idxs){if((cljs.core.count(idxs) === (1)))
{var idx = cljs.core.first(idxs);return ((function (idx){
return (function (tuple){return (tuple[idx]);
});
;})(idx))
} else
{var idxs__$1 = cljs.core.to_array(idxs);return ((function (idxs__$1){
return (function (tuple){return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(idxs__$1.map(((function (idxs__$1){
return (function (p1__21888_SHARP_){return (tuple[p1__21888_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){var key_fn = datascript.query.tuple_key_fn(idxs);var tuples__$1 = tuples;var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
var temp__4124__auto__ = cljs.core.first(tuples__$1);if(cljs.core.truth_(temp__4124__auto__))
{var tuple = temp__4124__auto__;var key = (function (){var G__21890 = tuple;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__21890) : key_fn.call(null,G__21890));
})();{
var G__21891 = cljs.core.next(tuples__$1);
var G__21892 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__21891;
hash_table = G__21892;
continue;
}
} else
{return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){var tuples1 = cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(rel1);var tuples2 = cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(rel2);var attrs1 = cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel1);var attrs2 = cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel2);var common_attrs = cljs.core.vec(datascript.query.intersect_keys(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel1),cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel2)));var common_idxs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,common_attrs);var common_idxs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,common_attrs);var keep_attrs1 = cljs.core.keys(attrs1);var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));var hash = datascript.query.hash_attrs(common_idxs1,tuples1);var key_fn = datascript.query.tuple_key_fn(common_idxs2);var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){var key = (function (){var G__21894 = tuple2;return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__21894) : key_fn.call(null,G__21894));
})();var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);if(cljs.core.truth_(temp__4124__auto__))
{var tuples1__$1 = temp__4124__auto__;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc__$1,tuple1){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,acc,tuples1__$1);
} else
{return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples));
});
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21895_SHARP_){if((p1__21895_SHARP_ instanceof cljs.core.Symbol))
{return null;
} else
{return p1__21895_SHARP_;
}
}),pattern);var datoms = datascript.core._search(db,search_pattern);var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__21898){var vec__21899 = p__21898;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(1),null);return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));return (new datascript.query.Relation(attr__GT_prop,datoms));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){var tuple__$1 = tuple;var pattern__$1 = pattern;while(true){
if(cljs.core.truth_((function (){var and__4263__auto__ = tuple__$1;if(cljs.core.truth_(and__4263__auto__))
{return pattern__$1;
} else
{return and__4263__auto__;
}
})()))
{var t = cljs.core.first(tuple__$1);var p = cljs.core.first(pattern__$1);if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))
{{
var G__21900 = cljs.core.next(tuple__$1);
var G__21901 = cljs.core.next(pattern__$1);
tuple__$1 = G__21900;
pattern__$1 = G__21901;
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21902_SHARP_){return datascript.query.matches_pattern_QMARK_(pattern,p1__21902_SHARP_);
}),coll);var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__21905){var vec__21906 = p__21905;var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21906,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21906,(1),null);return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data)));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){var vec__21908 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21908,(0),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21908,(1),null);var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(context),source_sym);if((source instanceof datascript.core.DB))
{return datascript.query.lookup_pattern_db(source,pattern);
} else
{return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){var rels__$1 = rels;var new_rel__$1 = new_rel;var acc = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first(rels__$1);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(new_rel__$1),cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel)))))
{{
var G__21909 = cljs.core.next(rels__$1);
var G__21910 = datascript.query.hash_join(rel,new_rel__$1);
var G__21911 = acc;
rels__$1 = G__21909;
new_rel__$1 = G__21910;
acc = G__21911;
continue;
}
} else
{{
var G__21912 = cljs.core.next(rels__$1);
var G__21913 = new_rel__$1;
var G__21914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__21912;
new_rel__$1 = G__21913;
acc = G__21914;
continue;
}
}
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21915_SHARP_){return cljs.core.contains_QMARK_(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(p1__21915_SHARP_),sym);
}),cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return (cljs.core.first(cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(rel))[cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else
{return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21916_SHARP_){return datascript.query.rel_contains_attrs_QMARK_(p1__21916_SHARP_,attrs);
}),cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(context));var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183], null),((function (rels,production){
return (function (p1__21917_SHARP_){return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__21917_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(context,rel,f,args){return (function (tuple){var resolved_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21918_SHARP_){if((p1__21918_SHARP_ instanceof cljs.core.Symbol))
{var or__4275__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$184.cljs$core$IFn$_invoke$arity$1(context),p1__21918_SHARP_);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return (tuple[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel),p1__21918_SHARP_)]);
}
} else
{return p1__21918_SHARP_;
}
}),args);return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){var vec__21923 = clause;var vec__21924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21923,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(0),null);var args = cljs.core.nthnext(vec__21924,(1));var pred = (function (){var or__4275__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__21925 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,(1),null);var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);var new_rel = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187], null),((function (vec__21923,vec__21924,f,args,pred,vec__21925,context__$1,production,tuple_pred){
return (function (p1__21919_SHARP_){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__21919_SHARP_);
});})(vec__21923,vec__21924,f,args,pred,vec__21925,context__$1,production,tuple_pred))
);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){var vec__21931 = clause;var vec__21932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21931,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(0),null);var args = cljs.core.nthnext(vec__21932,(1));var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21931,(1),null);var fun = (function (){var or__4275__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();var vec__21933 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933,(0),null);var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933,(1),null);var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);var new_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__21931,vec__21932,f,args,out,fun,vec__21933,context__$1,production,tuple_fn){
return (function (p1__21926_SHARP_){var val = (function (){var G__21934 = p1__21926_SHARP_;return (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(G__21934) : tuple_fn.call(null,G__21934));
})();var rel = datascript.query.in__GT_rel(out,val);return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21926_SHARP_], null))),rel);
});})(vec__21931,vec__21932,f,args,out,fun,vec__21933,context__$1,production,tuple_fn))
,cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(production)));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(cljs.core.constant$keyword$185.cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (function (){var G__21935 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21935) : cljs.core.atom.call(null,G__21935));
})();
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){var vec__21960 = clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(0),null);var call_args = cljs.core.nthnext(vec__21960,(1));var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$185.cljs$core$IFn$_invoke$arity$1(context),rule);var iter__5013__auto__ = ((function (vec__21960,rule,call_args,seqid,branches){
return (function iter__21961(s__21962){return (new cljs.core.LazySeq(null,((function (vec__21960,rule,call_args,seqid,branches){
return (function (){var s__21962__$1 = s__21962;while(true){
var temp__4126__auto__ = cljs.core.seq(s__21962__$1);if(temp__4126__auto__)
{var s__21962__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__21962__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__21962__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__21964 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__21963 = (0);while(true){
if((i__21963 < size__5012__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__21963);var vec__21975 = branch;var vec__21976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21975,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21976,(0),null);var rule_args = cljs.core.nthnext(vec__21976,(1));var clauses = cljs.core.nthnext(vec__21975,(1));var replacements = cljs.core.zipmap(rule_args,call_args);cljs.core.chunk_append(b__21964,clojure.walk.postwalk(((function (i__21963,vec__21975,vec__21976,_,rule_args,clauses,replacements,branch,c__5011__auto__,size__5012__auto__,b__21964,s__21962__$2,temp__4126__auto__,vec__21960,rule,call_args,seqid,branches){
return (function (p1__21936_SHARP_){if(datascript.query.free_var_QMARK_(p1__21936_SHARP_))
{var or__4275__auto__ = (function (){var G__21978 = p1__21936_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__21978) : replacements.call(null,G__21978));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__21936_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__21936_SHARP_;
}
});})(i__21963,vec__21975,vec__21976,_,rule_args,clauses,replacements,branch,c__5011__auto__,size__5012__auto__,b__21964,s__21962__$2,temp__4126__auto__,vec__21960,rule,call_args,seqid,branches))
,clauses));
{
var G__21983 = (i__21963 + (1));
i__21963 = G__21983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21964),iter__21961(cljs.core.chunk_rest(s__21962__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21964),null);
}
} else
{var branch = cljs.core.first(s__21962__$2);var vec__21979 = branch;var vec__21980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21979,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21980,(0),null);var rule_args = cljs.core.nthnext(vec__21980,(1));var clauses = cljs.core.nthnext(vec__21979,(1));var replacements = cljs.core.zipmap(rule_args,call_args);return cljs.core.cons(clojure.walk.postwalk(((function (vec__21979,vec__21980,_,rule_args,clauses,replacements,branch,s__21962__$2,temp__4126__auto__,vec__21960,rule,call_args,seqid,branches){
return (function (p1__21936_SHARP_){if(datascript.query.free_var_QMARK_(p1__21936_SHARP_))
{var or__4275__auto__ = (function (){var G__21982 = p1__21936_SHARP_;return (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(G__21982) : replacements.call(null,G__21982));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__21936_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__21936_SHARP_;
}
});})(vec__21979,vec__21980,_,rule_args,clauses,replacements,branch,s__21962__$2,temp__4126__auto__,vec__21960,rule,call_args,seqid,branches))
,clauses),iter__21961(cljs.core.rest(s__21962__$2)));
}
} else
{return null;
}
break;
}
});})(vec__21960,rule,call_args,seqid,branches))
,null,null));
});})(vec__21960,rule,call_args,seqid,branches))
;return iter__5013__auto__(branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21986){var vec__21987 = p__21986;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(0),null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){var vec__21999 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21999,(0),null);var call_args = cljs.core.nthnext(vec__21999,(1));var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);var iter__5013__auto__ = ((function (vec__21999,rule,call_args,prev_call_args){
return (function iter__22000(s__22001){return (new cljs.core.LazySeq(null,((function (vec__21999,rule,call_args,prev_call_args){
return (function (){var s__22001__$1 = s__22001;while(true){
var temp__4126__auto__ = cljs.core.seq(s__22001__$1);if(temp__4126__auto__)
{var s__22001__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__22001__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__22001__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__22003 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__22002 = (0);while(true){
if((i__22002 < size__5012__auto__))
{var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__22002);var vec__22008 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22008,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22008,(1),null);cljs.core.chunk_append(b__22003,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));
{
var G__22010 = (i__22002 + (1));
i__22002 = G__22010;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22003),iter__22000(cljs.core.chunk_rest(s__22001__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22003),null);
}
} else
{var prev_args = cljs.core.first(s__22001__$2);var vec__22009 = datascript.query.remove_pairs(call_args,prev_args);var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(0),null);var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(1),null);return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),iter__22000(cljs.core.rest(s__22001__$2)));
}
} else
{return null;
}
break;
}
});})(vec__21999,rule,call_args,prev_call_args))
,null,null));
});})(vec__21999,rule,call_args,prev_call_args))
;return iter__5013__auto__(prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){var res = (function (){var G__22015 = cljs.core.PersistentVector.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22015) : cljs.core.atom.call(null,G__22015));
})();clojure.walk.postwalk(((function (res){
return (function (p1__22011_SHARP_){if(cljs.core.truth_((function (){var G__22016 = p1__22011_SHARP_;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22016) : pred.call(null,G__22016));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__22011_SHARP_);
} else
{}
return p1__22011_SHARP_;
});})(res))
,form);
var G__22017 = res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22017) : cljs.core.deref.call(null,G__22017));
});
datascript.query.split_guards = (function split_guards(clauses,guards){var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));var pred = ((function (bound_vars){
return (function (p__22021){var vec__22022 = p__22021;var vec__22023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22022,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023,(0),null);var vars = cljs.core.nthnext(vec__22023,(1));return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__22024_SHARP_){return cljs.core.empty_QMARK_(cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(p1__22024_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$188,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$189,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.constant$keyword$183,cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$190,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.constant$keyword$191,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$192,cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));while(true){
var temp__4124__auto__ = cljs.core.first(stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__22039 = cljs.core.split_with(((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__22025_SHARP_){return !(datascript.query.rule_QMARK_(context,p1__22025_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,(0),null);var vec__22040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,(1),null);var rule_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22040,(0),null);var next_clauses = cljs.core.nthnext(vec__22040,(1));if((rule_clause == null))
{var context__$1 = solve(cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = (function (){var G__22041 = context__$1;var G__22042 = final_attrs;return (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(G__22041,G__22042) : datascript.query._collect.call(null,G__22041,G__22042));
})();var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__22051 = cljs.core.next(stack);
var G__22052 = datascript.query.sum_rel(rel,new_rel);
stack = G__22051;
rel = G__22052;
continue;
}
} else
{var vec__22043 = rule_clause;var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22043,(0),null);var call_args = cljs.core.nthnext(vec__22043,(1));var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(frame));var vec__22044 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$188.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.constant$keyword$192.cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22044,(0),null);var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22044,(1),null);if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__22043,rule,call_args,guards,vec__22044,active_gs,pending_gs,vec__22039,clauses,vec__22040,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__22026_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__22026_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__22043,rule,call_args,guards,vec__22044,active_gs,pending_gs,vec__22039,clauses,vec__22040,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__22053 = cljs.core.next(stack);
var G__22054 = rel;
stack = G__22053;
rel = G__22054;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);var prefix_context = solve(cljs.core.constant$keyword$189.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_(prefix_context)))
{{
var G__22055 = cljs.core.next(stack);
var G__22056 = rel;
stack = G__22055;
rel = G__22056;
continue;
}
} else
{var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$191.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule(rule_clause,context,used_args);{
var G__22057 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5013__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22043,rule,call_args,guards,vec__22044,active_gs,pending_gs,vec__22039,clauses,vec__22040,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__22045(s__22046){return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22043,rule,call_args,guards,vec__22044,active_gs,pending_gs,vec__22039,clauses,vec__22040,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__22046__$1 = s__22046;while(true){
var temp__4126__auto__ = cljs.core.seq(s__22046__$1);if(temp__4126__auto__)
{var s__22046__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__22046__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__22046__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__22048 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__22047 = (0);while(true){
if((i__22047 < size__5012__auto__))
{var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__22047);cljs.core.chunk_append(b__22048,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$188,prefix_clauses,cljs.core.constant$keyword$189,prefix_context,cljs.core.constant$keyword$190,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.constant$keyword$191,used_args,cljs.core.constant$keyword$192,pending_gs], null));
{
var G__22059 = (i__22047 + (1));
i__22047 = G__22059;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22048),iter__22045(cljs.core.chunk_rest(s__22046__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22048),null);
}
} else
{var branch = cljs.core.first(s__22046__$2);return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$188,prefix_clauses,cljs.core.constant$keyword$189,prefix_context,cljs.core.constant$keyword$190,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.constant$keyword$191,used_args,cljs.core.constant$keyword$192,pending_gs], null),iter__22045(cljs.core.rest(s__22046__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22043,rule,call_args,guards,vec__22044,active_gs,pending_gs,vec__22039,clauses,vec__22040,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__22043,rule,call_args,guards,vec__22044,active_gs,pending_gs,vec__22039,clauses,vec__22040,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__5013__auto__(branches);
})(),cljs.core.next(stack));
var G__22058 = rel;
stack = G__22057;
rel = G__22058;
continue;
}
}
}
}
} else
{return rel;
}
break;
}
});
datascript.query._resolve_clause = (function _resolve_clause(context,clause){var pred__22069 = datascript.query.looks_like_QMARK_;var expr__22070 = clause;if(cljs.core.truth_((function (){var G__22072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);var G__22073 = expr__22070;return (pred__22069.cljs$core$IFn$_invoke$arity$2 ? pred__22069.cljs$core$IFn$_invoke$arity$2(G__22072,G__22073) : pred__22069.call(null,G__22072,G__22073));
})()))
{return datascript.query.filter_by_pred(context,clause);
} else
{if(cljs.core.truth_((function (){var G__22074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);var G__22075 = expr__22070;return (pred__22069.cljs$core$IFn$_invoke$arity$2 ? pred__22069.cljs$core$IFn$_invoke$arity$2(G__22074,G__22075) : pred__22069.call(null,G__22074,G__22075));
})()))
{return datascript.query.bind_by_fn(context,clause);
} else
{if(cljs.core.truth_((function (){var G__22076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);var G__22077 = expr__22070;return (pred__22069.cljs$core$IFn$_invoke$arity$2 ? pred__22069.cljs$core$IFn$_invoke$arity$2(G__22076,G__22077) : pred__22069.call(null,G__22076,G__22077));
})()))
{var relation = datascript.query.lookup_pattern(context,clause);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183], null),datascript.query.collapse_rels,relation);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22070))));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_(context,clause))
{var vec__22079 = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,(0),null);var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,(1),null);var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184,source], null));var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.constant$keyword$184,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183], null),datascript.query.collapse_rels,rel);
} else
{return datascript.query._resolve_clause(context,clause);
}
});
datascript.query._q = (function _q(context,clauses){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function() {
var _collect = null;
var _collect__2 = (function (context,symbols){var rels = cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(context);return _collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Array(cljs.core.count(symbols)))], null),rels,symbols);
});
var _collect__3 = (function (acc,rels,symbols){while(true){
var temp__4124__auto__ = cljs.core.first(rels);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;var keep_attrs = cljs.core.select_keys(cljs.core.constant$keyword$186.cljs$core$IFn$_invoke$arity$1(rel),symbols);if(cljs.core.empty_QMARK_(keep_attrs))
{{
var G__22106 = acc;
var G__22107 = cljs.core.next(rels);
var G__22108 = symbols;
acc = G__22106;
rels = G__22107;
symbols = G__22108;
continue;
}
} else
{var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__22080_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__22080_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));var len = cljs.core.count(symbols);{
var G__22109 = (function (){var iter__5013__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__22095(s__22096){return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__22096__$1 = s__22096;while(true){
var temp__4126__auto__ = cljs.core.seq(s__22096__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first(xs__4624__auto__);var iterys__5009__auto__ = ((function (s__22096__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__22097(s__22098){return (new cljs.core.LazySeq(null,((function (s__22096__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__22098__$1 = s__22098;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__22098__$1);if(temp__4126__auto____$1)
{var s__22098__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__22098__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__22098__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__22100 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__22099 = (0);while(true){
if((i__22099 < size__5012__auto__))
{var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__22099);cljs.core.chunk_append(b__22100,(function (){var res = cljs.core.aclone(t1);var n__5144__auto___22112 = len;var i_22113 = (0);while(true){
if((i_22113 < n__5144__auto___22112))
{var temp__4126__auto___22114__$2 = (copy_map[i_22113]);if(cljs.core.truth_(temp__4126__auto___22114__$2))
{var idx_22115 = temp__4126__auto___22114__$2;(res[i_22113] = (t2[idx_22115]));
} else
{}
{
var G__22116 = (i_22113 + (1));
i_22113 = G__22116;
continue;
}
} else
{}
break;
}
return res;
})());
{
var G__22117 = (i__22099 + (1));
i__22099 = G__22117;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22100),iter__22097(cljs.core.chunk_rest(s__22098__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22100),null);
}
} else
{var t2 = cljs.core.first(s__22098__$2);return cljs.core.cons((function (){var res = cljs.core.aclone(t1);var n__5144__auto___22118 = len;var i_22119 = (0);while(true){
if((i_22119 < n__5144__auto___22118))
{var temp__4126__auto___22120__$2 = (copy_map[i_22119]);if(cljs.core.truth_(temp__4126__auto___22120__$2))
{var idx_22121 = temp__4126__auto___22120__$2;(res[i_22119] = (t2[idx_22121]));
} else
{}
{
var G__22122 = (i_22119 + (1));
i_22119 = G__22122;
continue;
}
} else
{}
break;
}
return res;
})(),iter__22097(cljs.core.rest(s__22098__$2)));
}
} else
{return null;
}
break;
}
});})(s__22096__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__22096__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;var fs__5010__auto__ = cljs.core.seq(iterys__5009__auto__(cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(rel)));if(fs__5010__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5010__auto__,iter__22095(cljs.core.rest(s__22096__$1)));
} else
{{
var G__22123 = cljs.core.rest(s__22096__$1);
s__22096__$1 = G__22123;
continue;
}
}
} else
{return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;return iter__5013__auto__(acc);
})();
var G__22110 = cljs.core.next(rels);
var G__22111 = symbols;
acc = G__22109;
rels = G__22110;
symbols = G__22111;
continue;
}
}
} else
{return acc;
}
break;
}
});
_collect = function(acc,rels,symbols){
switch(arguments.length){
case 2:
return _collect__2.call(this,acc,rels);
case 3:
return _collect__3.call(this,acc,rels,symbols);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_collect.cljs$core$IFn$_invoke$arity$2 = _collect__2;
_collect.cljs$core$IFn$_invoke$arity$3 = _collect__3;
return _collect;
})()
;
datascript.query.collect = (function collect(context,symbols){return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});
datascript.query.find_attrs = (function find_attrs(q){return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22124_SHARP_){if(cljs.core.sequential_QMARK_(p1__22124_SHARP_))
{return cljs.core.last(p1__22124_SHARP_);
} else
{return p1__22124_SHARP_;
}
}),cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(q)),cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (form,fixed_value,i){if(cljs.core.sequential_QMARK_(form))
{var vec__22130 = form;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22130,(0),null);var args = cljs.core.nthnext(vec__22130,(1));var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22130,f,args){
return (function (p1__22125_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22125_SHARP_,i);
});})(vec__22130,f,args))
,tuples);var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22130,f,args,vals){
return (function (p1__22126_SHARP_){if((p1__22126_SHARP_ instanceof cljs.core.Symbol))
{return datascript.query.context_resolve_val(context,p1__22126_SHARP_);
} else
{return p1__22126_SHARP_;
}
});})(vec__22130,f,args,vals))
,cljs.core.butlast(args));var f__$1 = (function (){var or__4275__auto__ = (function (){var G__22132 = f;return (datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1 ? datascript.query.built_in_aggregates.cljs$core$IFn$_invoke$arity$1(G__22132) : datascript.query.built_in_aggregates.call(null,G__22132));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return datascript.query.context_resolve_val(context,f);
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else
{return fixed_value;
}
}),cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(q),cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.aggregate = (function aggregate(q,context,resultset){var group_idxs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__22133_SHARP_,p2__22134_SHARP_){if(cljs.core.sequential_QMARK_(p1__22133_SHARP_))
{return null;
} else
{return p2__22134_SHARP_;
}
}),cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));var group_fn = ((function (group_idxs){
return (function (tuple){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__22135_SHARP_){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__22135_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;var grouped = cljs.core.group_by(group_fn,resultset);var iter__5013__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__22146(s__22147){return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){var s__22147__$1 = s__22147;while(true){
var temp__4126__auto__ = cljs.core.seq(s__22147__$1);if(temp__4126__auto__)
{var s__22147__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__22147__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__22147__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__22149 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__22148 = (0);while(true){
if((i__22148 < size__5012__auto__))
{var vec__22154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__22148);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22154,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22154,(1),null);cljs.core.chunk_append(b__22149,datascript.query._aggregate(q,context,tuples));
{
var G__22156 = (i__22148 + (1));
i__22148 = G__22156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22149),iter__22146(cljs.core.chunk_rest(s__22147__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22149),null);
}
} else
{var vec__22155 = cljs.core.first(s__22147__$2);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,(0),null);var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,(1),null);return cljs.core.cons(datascript.query._aggregate(q,context,tuples),iter__22146(cljs.core.rest(s__22147__$2)));
}
} else
{return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;return iter__5013__auto__(grouped);
});
datascript.query.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first(qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__22157 = parsed;
var G__22158 = q;
var G__22159 = cljs.core.next(qs);
parsed = G__22157;
key = G__22158;
qs = G__22159;
continue;
}
} else
{{
var G__22160 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__22161 = key;
var G__22162 = cljs.core.next(qs);
parsed = G__22160;
key = G__22161;
qs = G__22162;
continue;
}
}
} else
{return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.query.q = (function() { 
var q__delegate = function (q__$1,inputs){var q__$2 = ((cljs.core.sequential_QMARK_(q__$1))?datascript.query.parse_query(q__$1):q__$1);var find = datascript.query.find_attrs(q__$2);var ins = cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = cljs.core.constant$keyword$196.cljs$core$IFn$_invoke$arity$1(q__$2);var context = datascript.query.parse_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var resultset = datascript.query.collect(datascript.query._q(context,wheres),find);var G__22165 = resultset;var G__22165__$1 = (cljs.core.truth_(cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__22165,q__$2,find,ins,wheres,context,resultset){
return (function (p1__22163_SHARP_){return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__22163_SHARP_,(0),cljs.core.count(cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__22165,q__$2,find,ins,wheres,context,resultset))
,G__22165):G__22165);var G__22165__$2 = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.constant$keyword$193.cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate(q__$2,context,G__22165__$1):G__22165__$1);return G__22165__$2;
};
var q = function (q__$1,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__22166){
var q__$1 = cljs.core.first(arglist__22166);
var inputs = cljs.core.rest(arglist__22166);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
