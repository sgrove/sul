// Compiled by ClojureScript 0.0-2356
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.query');
goog.require('datascript.query');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function entity_db(entity){return entity.db;
});
datascript.touch = datascript.impl.entity.touch;
datascript.tx0 = (536870912);
datascript.refs = (function refs(schema){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__21249){var vec__21250 = p__21249;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21250,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21250,(1),null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$173.cljs$core$IFn$_invoke$arity$1(v),cljs.core.constant$keyword$174);
}),schema));
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__21251){var vec__21253 = p__21251;var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21253,(0),null);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$160,schema,cljs.core.constant$keyword$161,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_eavt),cljs.core.constant$keyword$162,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_aevt),cljs.core.constant$keyword$163,datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1(datascript.core.cmp_datoms_avet),cljs.core.constant$keyword$164,(0),cljs.core.constant$keyword$165,datascript.tx0,cljs.core.constant$keyword$166,datascript.refs(schema)], null));
};
var empty_db = function (var_args){
var p__21251 = null;if (arguments.length > 0) {
  p__21251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__21251);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__21254){
var p__21251 = cljs.core.seq(arglist__21254);
return empty_db__delegate(p__21251);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__21255){var vec__21261 = p__21255;var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21261,(0),null);var G__21262 = datascript.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema], 0));var G__21263 = cljs.core.constant$keyword$113;var G__21264 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$197,(function (){var G__21265 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21265) : cljs.core.atom.call(null,G__21265));
})()], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__21262,G__21263,G__21264) : cljs.core.atom.call(null,G__21262,G__21263,G__21264));
};
var create_conn = function (var_args){
var p__21255 = null;if (arguments.length > 0) {
  p__21255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__21255);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__21266){
var p__21255 = cljs.core.seq(arglist__21266);
return create_conn__delegate(p__21255);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.with$ = (function with$(db,tx_data){return datascript.core.transact_tx_data((new datascript.core.TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),tx_data);
});
datascript.db_with = (function db_with(db,tx_data){return cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(datascript.with$(db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data){var report = (function (){var G__21271 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21271) : cljs.core.atom.call(null,G__21271));
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){var r = datascript.with$(db,tx_data);var G__21272_21275 = report;var G__21273_21276 = r;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21272_21275,G__21273_21276) : cljs.core.reset_BANG_.call(null,G__21272_21275,G__21273_21276));
return cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
var G__21274 = report;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21274) : cljs.core.deref.call(null,G__21274));
});
datascript.transact_BANG_ = (function transact_BANG_(conn,tx_data){var report = datascript._transact_BANG_(conn,tx_data);var seq__21286_21295 = cljs.core.seq((function (){var G__21290 = cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21290) : cljs.core.deref.call(null,G__21290));
})());var chunk__21287_21296 = null;var count__21288_21297 = (0);var i__21289_21298 = (0);while(true){
if((i__21289_21298 < count__21288_21297))
{var vec__21291_21299 = chunk__21287_21296.cljs$core$IIndexed$_nth$arity$2(null,i__21289_21298);var __21300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21291_21299,(0),null);var callback_21301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21291_21299,(1),null);var G__21292_21302 = report;(callback_21301.cljs$core$IFn$_invoke$arity$1 ? callback_21301.cljs$core$IFn$_invoke$arity$1(G__21292_21302) : callback_21301.call(null,G__21292_21302));
{
var G__21303 = seq__21286_21295;
var G__21304 = chunk__21287_21296;
var G__21305 = count__21288_21297;
var G__21306 = (i__21289_21298 + (1));
seq__21286_21295 = G__21303;
chunk__21287_21296 = G__21304;
count__21288_21297 = G__21305;
i__21289_21298 = G__21306;
continue;
}
} else
{var temp__4126__auto___21307 = cljs.core.seq(seq__21286_21295);if(temp__4126__auto___21307)
{var seq__21286_21308__$1 = temp__4126__auto___21307;if(cljs.core.chunked_seq_QMARK_(seq__21286_21308__$1))
{var c__5044__auto___21309 = cljs.core.chunk_first(seq__21286_21308__$1);{
var G__21310 = cljs.core.chunk_rest(seq__21286_21308__$1);
var G__21311 = c__5044__auto___21309;
var G__21312 = cljs.core.count(c__5044__auto___21309);
var G__21313 = (0);
seq__21286_21295 = G__21310;
chunk__21287_21296 = G__21311;
count__21288_21297 = G__21312;
i__21289_21298 = G__21313;
continue;
}
} else
{var vec__21293_21314 = cljs.core.first(seq__21286_21308__$1);var __21315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21293_21314,(0),null);var callback_21316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21293_21314,(1),null);var G__21294_21317 = report;(callback_21316.cljs$core$IFn$_invoke$arity$1 ? callback_21316.cljs$core$IFn$_invoke$arity$1(G__21294_21317) : callback_21316.call(null,G__21294_21317));
{
var G__21318 = cljs.core.next(seq__21286_21308__$1);
var G__21319 = null;
var G__21320 = (0);
var G__21321 = (0);
seq__21286_21295 = G__21318;
chunk__21287_21296 = G__21319;
count__21288_21297 = G__21320;
i__21289_21298 = G__21321;
continue;
}
}
} else
{}
}
break;
}
return report;
});
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){return listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
});
var listen_BANG___3 = (function (conn,key,callback){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.assoc,key,callback);
return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$197.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.dissoc,key);
});
datascript.components__GT_pattern = (function components__GT_pattern(index,p__21325){var vec__21328 = p__21325;var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(0),null);var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(1),null);var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(2),null);var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(3),null);var G__21329 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__21329) {
case "avet":
return (new datascript.core.Datom(c2,c0,c1,c3,null));

break;
case "aevt":
return (new datascript.core.Datom(c1,c0,c2,c3,null));

break;
case "eavt":
return (new datascript.core.Datom(c0,c1,c2,c3,null));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,index),datascript.components__GT_pattern(index,cs));
};
var datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__21331){
var db = cljs.core.first(arglist__21331);
arglist__21331 = cljs.core.next(arglist__21331);
var index = cljs.core.first(arglist__21331);
var cs = cljs.core.rest(arglist__21331);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,index),datascript.components__GT_pattern(index,cs),(new datascript.core.Datom(null,null,null,null,null)));
};
var seek_datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__21332){
var db = cljs.core.first(arglist__21332);
arglist__21332 = cljs.core.next(arglist__21332);
var index = cljs.core.first(arglist__21332);
var cs = cljs.core.rest(arglist__21332);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.index_range = (function index_range(db,attr,start,end){return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(db),(new datascript.core.Datom(null,attr,start,null,null)),(new datascript.core.Datom(null,attr,end,null,null)));
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){var d__$1 = this;return cljs.core.pr_sequential_writer(w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
datascript.datom_from_reader = (function datom_from_reader(p__21333){var vec__21335 = p__21333;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21335,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21335,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21335,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21335,(3),null);var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21335,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){var db__$1 = this;cljs.core._write(w,"#datascript/DB {");
cljs.core._write(w,":schema ");
cljs.core.pr_writer(db__$1.schema,w,opts);
cljs.core._write(w,", :datoms ");
cljs.core.pr_sequential_writer(w,((function (db__$1){
return (function (d,w__$1,opts__$1){return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
});})(db__$1))
,"["," ","]",opts,db__$1.eavt);
return cljs.core._write(w,"}");
});
datascript.db_from_reader = (function db_from_reader(p__21336){var map__21340 = p__21336;var map__21340__$1 = ((cljs.core.seq_QMARK_(map__21340))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21340):map__21340);var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,cljs.core.constant$keyword$198);var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21340__$1,cljs.core.constant$keyword$160);var datoms__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21340,map__21340__$1,datoms,schema){
return (function (p__21341){var vec__21342 = p__21341;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21342,(0),null);var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21342,(1),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21342,(2),null);var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21342,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__21340,map__21340__$1,datoms,schema))
,datoms);return datascript.core.map__GT_DB(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$160,schema,cljs.core.constant$keyword$161,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),cljs.core.constant$keyword$162,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),cljs.core.constant$keyword$163,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),cljs.core.constant$keyword$164,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$155,datoms__$1)),cljs.core.constant$keyword$165,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,datascript.tx0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$158,datoms__$1)),cljs.core.constant$keyword$166,datascript.refs(schema)], null));
});
datascript.last_tempid = (function (){var G__21343 = (-1000000);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21343) : cljs.core.atom.call(null,G__21343));
})();
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (_part){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.last_tempid,cljs.core.dec);
});
var tempid__2 = (function (_part,x){return x;
});
tempid = function(_part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,_part);
case 2:
return tempid__2.call(this,_part,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;
datascript.resolve_tempid = (function resolve_tempid(_db,tempids,tempid){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,tempid);
});
datascript.db = cljs.core.deref;
datascript.transact = (function transact(conn,tx_data){var res = datascript.transact_BANG_(conn,tx_data);if(typeof datascript.t21347 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t21347 = (function (res,tx_data,conn,transact,meta21348){
this.res = res;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta21348 = meta21348;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t21347.cljs$lang$type = true;
datascript.t21347.cljs$lang$ctorStr = "datascript/t21347";
datascript.t21347.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"datascript/t21347");
});})(res))
;
datascript.t21347.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res))
;
datascript.t21347.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res))
;
datascript.t21347.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res))
;
datascript.t21347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_21349){var self__ = this;
var _21349__$1 = this;return self__.meta21348;
});})(res))
;
datascript.t21347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_21349,meta21348__$1){var self__ = this;
var _21349__$1 = this;return (new datascript.t21347(self__.res,self__.tx_data,self__.conn,self__.transact,meta21348__$1));
});})(res))
;
datascript.__GT_t21347 = ((function (res){
return (function __GT_t21347(res__$1,tx_data__$1,conn__$1,transact__$1,meta21348){return (new datascript.t21347(res__$1,tx_data__$1,conn__$1,transact__$1,meta21348));
});})(res))
;
}
return (new datascript.t21347(res,tx_data,conn,transact,null));
});
datascript.future_call = (function future_call(f){var res = (function (){var G__21365 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21365) : cljs.core.atom.call(null,G__21365));
})();var realized = (function (){var G__21366 = false;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21366) : cljs.core.atom.call(null,G__21366));
})();var G__21367_21380 = ((function (res,realized){
return (function (){var G__21369_21382 = res;var G__21370_21383 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21369_21382,G__21370_21383) : cljs.core.reset_BANG_.call(null,G__21369_21382,G__21370_21383));
var G__21371 = realized;var G__21372 = true;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21371,G__21372) : cljs.core.reset_BANG_.call(null,G__21371,G__21372));
});})(res,realized))
;var G__21368_21381 = (0);setTimeout(G__21367_21380,G__21368_21381);
if(typeof datascript.t21373 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t21373 = (function (realized,res,f,future_call,meta21374){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta21374 = meta21374;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t21373.cljs$lang$type = true;
datascript.t21373.cljs$lang$ctorStr = "datascript/t21373";
datascript.t21373.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"datascript/t21373");
});})(res,realized))
;
datascript.t21373.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__21376 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21376) : cljs.core.deref.call(null,G__21376));
});})(res,realized))
;
datascript.t21373.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_((function (){var G__21377 = self__.realized;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21377) : cljs.core.deref.call(null,G__21377));
})()))
{var G__21378 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21378) : cljs.core.deref.call(null,G__21378));
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t21373.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;var G__21379 = self__.res;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21379) : cljs.core.deref.call(null,G__21379));
});})(res,realized))
;
datascript.t21373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_21375){var self__ = this;
var _21375__$1 = this;return self__.meta21374;
});})(res,realized))
;
datascript.t21373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_21375,meta21374__$1){var self__ = this;
var _21375__$1 = this;return (new datascript.t21373(self__.realized,self__.res,self__.f,self__.future_call,meta21374__$1));
});})(res,realized))
;
datascript.__GT_t21373 = ((function (res,realized){
return (function __GT_t21373(realized__$1,res__$1,f__$1,future_call__$1,meta21374){return (new datascript.t21373(realized__$1,res__$1,f__$1,future_call__$1,meta21374));
});})(res,realized))
;
}
return (new datascript.t21373(realized,res,f,future_call,null));
});
datascript.transact_async = (function transact_async(conn,tx_data){return datascript.future_call((function (){return datascript.transact_BANG_(conn,tx_data);
}));
});
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int(((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21385 = ((new Date()).getTime() / (1000));return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__21385) : Math.round.call(null,G__21385));
})().toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits((16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits((16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return ((function (){var G__21388 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(uuid.uuid,(0),(8));var G__21389 = (16);return parseInt(G__21388,G__21389);
})() * (1000));
});
