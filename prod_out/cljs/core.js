// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2356";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$111,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$112,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$113,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$114,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$115,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15627__delegate = function (args){return console.log.apply(console,(function (){var G__15626 = args;return (cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(G__15626) : cljs.core.into_array.call(null,G__15626));
})());
};
var G__15627 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15627__delegate.call(this,args);};
G__15627.cljs$lang$maxFixedArity = 0;
G__15627.cljs$lang$applyTo = (function (arglist__15628){
var args = cljs.core.seq(arglist__15628);
return G__15627__delegate(args);
});
G__15627.cljs$core$IFn$_invoke$arity$variadic = G__15627__delegate;
return G__15627;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Returns true if x is not nil, false otherwise.
*/
cljs.core.some_QMARK_ = (function some_QMARK_(x){return !((x == null));
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){var G__15630 = x;return goog.isString(G__15630);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[(function (){var G__15632 = x__$1;return goog.typeOf(G__15632);
})()]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{return false;

}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__4263__auto__ = ty;if(cljs.core.truth_(and__4263__auto__))
{return ty.cljs$lang$type;
} else
{return and__4263__auto__;
}
})())?ty.cljs$lang$ctorStr:(function (){var G__15634 = obj;return goog.typeOf(G__15634);
})());return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4124__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4124__auto__))
{var s = temp__4124__auto__;return s;
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty));
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.cljs$core$IFn$_invoke$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__5144__auto___15636 = len;var i_15637 = (0);while(true){
if((i_15637 < n__5144__auto___15636))
{(new_arr[i_15637] = (arr[i_15637]));
{
var G__15638 = (i_15637 + (1));
i_15637 = G__15638;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__15647__delegate = function (array,i,idxs){var G__15644 = aget;var G__15645 = aget.cljs$core$IFn$_invoke$arity$2(array,i);var G__15646 = idxs;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__15644,G__15645,G__15646) : cljs.core.apply.call(null,G__15644,G__15645,G__15646));
};
var G__15647 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15647__delegate.call(this,array,i,idxs);};
G__15647.cljs$lang$maxFixedArity = 2;
G__15647.cljs$lang$applyTo = (function (arglist__15648){
var array = cljs.core.first(arglist__15648);
arglist__15648 = cljs.core.next(arglist__15648);
var i = cljs.core.first(arglist__15648);
var idxs = cljs.core.rest(arglist__15648);
return G__15647__delegate(array,i,idxs);
});
G__15647.cljs$core$IFn$_invoke$arity$variadic = G__15647__delegate;
return G__15647;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__15657__delegate = function (array,idx,idx2,idxv){var G__15653 = aset;var G__15654 = (array[idx]);var G__15655 = idx2;var G__15656 = idxv;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__15653,G__15654,G__15655,G__15656) : cljs.core.apply.call(null,G__15653,G__15654,G__15655,G__15656));
};
var G__15657 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15657__delegate.call(this,array,idx,idx2,idxv);};
G__15657.cljs$lang$maxFixedArity = 3;
G__15657.cljs$lang$applyTo = (function (arglist__15658){
var array = cljs.core.first(arglist__15658);
arglist__15658 = cljs.core.next(arglist__15658);
var idx = cljs.core.first(arglist__15658);
arglist__15658 = cljs.core.next(arglist__15658);
var idx2 = cljs.core.first(arglist__15658);
var idxv = cljs.core.rest(arglist__15658);
return G__15657__delegate(array,idx,idx2,idxv);
});
G__15657.cljs$core$IFn$_invoke$arity$variadic = G__15657__delegate;
return G__15657;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){var G__15664 = (function (a,x){a.push(x);
return a;
});var G__15665 = [];var G__15666 = aseq;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__15664,G__15665,G__15666) : cljs.core.reduce.call(null,G__15664,G__15665,G__15666));
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj15668 = {};return obj15668;
})();
cljs.core.IFn = (function (){var obj15670 = {};return obj15670;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15716 = x__4911__auto__;return goog.typeOf(G__15716);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15718 = x__4911__auto__;return goog.typeOf(G__15718);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15720 = x__4911__auto__;return goog.typeOf(G__15720);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15722 = x__4911__auto__;return goog.typeOf(G__15722);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15724 = x__4911__auto__;return goog.typeOf(G__15724);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15726 = x__4911__auto__;return goog.typeOf(G__15726);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15728 = x__4911__auto__;return goog.typeOf(G__15728);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15730 = x__4911__auto__;return goog.typeOf(G__15730);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15732 = x__4911__auto__;return goog.typeOf(G__15732);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15734 = x__4911__auto__;return goog.typeOf(G__15734);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15736 = x__4911__auto__;return goog.typeOf(G__15736);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15738 = x__4911__auto__;return goog.typeOf(G__15738);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15740 = x__4911__auto__;return goog.typeOf(G__15740);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15742 = x__4911__auto__;return goog.typeOf(G__15742);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15744 = x__4911__auto__;return goog.typeOf(G__15744);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15746 = x__4911__auto__;return goog.typeOf(G__15746);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15748 = x__4911__auto__;return goog.typeOf(G__15748);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15750 = x__4911__auto__;return goog.typeOf(G__15750);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15752 = x__4911__auto__;return goog.typeOf(G__15752);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15754 = x__4911__auto__;return goog.typeOf(G__15754);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15756 = x__4911__auto__;return goog.typeOf(G__15756);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var _invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IFn$_invoke$arity$22;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._invoke[(function (){var G__15758 = x__4911__auto__;return goog.typeOf(G__15758);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._invoke["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return _invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
_invoke.cljs$core$IFn$_invoke$arity$22 = _invoke__22;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj15760 = {};return obj15760;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__4263__auto__ = value;if(and__4263__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__4263__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__4911__auto__ = (((value == null))?null:value);return (function (){var or__4275__auto__ = (cljs.core._clone[(function (){var G__15764 = x__4911__auto__;return goog.typeOf(G__15764);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._clone["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj15766 = {};return obj15766;
})();
cljs.core._count = (function _count(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._count[(function (){var G__15770 = x__4911__auto__;return goog.typeOf(G__15770);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._count["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj15772 = {};return obj15772;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._empty[(function (){var G__15776 = x__4911__auto__;return goog.typeOf(G__15776);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._empty["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj15778 = {};return obj15778;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._conj[(function (){var G__15782 = x__4911__auto__;return goog.typeOf(G__15782);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._conj["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj15784 = {};return obj15784;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._nth[(function (){var G__15790 = x__4911__auto__;return goog.typeOf(G__15790);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._nth["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._nth[(function (){var G__15792 = x__4911__auto__;return goog.typeOf(G__15792);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._nth["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj15794 = {};return obj15794;
})();
cljs.core.ISeq = (function (){var obj15796 = {};return obj15796;
})();
cljs.core._first = (function _first(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._first[(function (){var G__15800 = x__4911__auto__;return goog.typeOf(G__15800);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._first["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._rest[(function (){var G__15804 = x__4911__auto__;return goog.typeOf(G__15804);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._rest["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj15806 = {};return obj15806;
})();
cljs.core._next = (function _next(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._next[(function (){var G__15810 = x__4911__auto__;return goog.typeOf(G__15810);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._next["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj15812 = {};return obj15812;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._lookup[(function (){var G__15818 = x__4911__auto__;return goog.typeOf(G__15818);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._lookup["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._lookup[(function (){var G__15820 = x__4911__auto__;return goog.typeOf(G__15820);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._lookup["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj15822 = {};return obj15822;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._contains_key_QMARK_[(function (){var G__15826 = x__4911__auto__;return goog.typeOf(G__15826);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._assoc[(function (){var G__15830 = x__4911__auto__;return goog.typeOf(G__15830);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._assoc["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj15832 = {};return obj15832;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._dissoc[(function (){var G__15836 = x__4911__auto__;return goog.typeOf(G__15836);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._dissoc["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj15838 = {};return obj15838;
})();
cljs.core._key = (function _key(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._key[(function (){var G__15842 = x__4911__auto__;return goog.typeOf(G__15842);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._key["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._val[(function (){var G__15846 = x__4911__auto__;return goog.typeOf(G__15846);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._val["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj15848 = {};return obj15848;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._disjoin[(function (){var G__15852 = x__4911__auto__;return goog.typeOf(G__15852);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._disjoin["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj15854 = {};return obj15854;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._peek[(function (){var G__15858 = x__4911__auto__;return goog.typeOf(G__15858);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._peek["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._pop[(function (){var G__15862 = x__4911__auto__;return goog.typeOf(G__15862);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._pop["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj15864 = {};return obj15864;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._assoc_n[(function (){var G__15868 = x__4911__auto__;return goog.typeOf(G__15868);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._assoc_n["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj15870 = {};return obj15870;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._deref[(function (){var G__15874 = x__4911__auto__;return goog.typeOf(G__15874);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._deref["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj15876 = {};return obj15876;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._deref_with_timeout[(function (){var G__15880 = x__4911__auto__;return goog.typeOf(G__15880);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj15882 = {};return obj15882;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._meta[(function (){var G__15886 = x__4911__auto__;return goog.typeOf(G__15886);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._meta["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj15888 = {};return obj15888;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._with_meta[(function (){var G__15892 = x__4911__auto__;return goog.typeOf(G__15892);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._with_meta["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj15894 = {};return obj15894;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._reduce[(function (){var G__15900 = x__4911__auto__;return goog.typeOf(G__15900);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._reduce["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._reduce[(function (){var G__15902 = x__4911__auto__;return goog.typeOf(G__15902);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._reduce["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj15904 = {};return obj15904;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._kv_reduce[(function (){var G__15908 = x__4911__auto__;return goog.typeOf(G__15908);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj15910 = {};return obj15910;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._equiv[(function (){var G__15914 = x__4911__auto__;return goog.typeOf(G__15914);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._equiv["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj15916 = {};return obj15916;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._hash[(function (){var G__15920 = x__4911__auto__;return goog.typeOf(G__15920);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._hash["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj15922 = {};return obj15922;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._seq[(function (){var G__15926 = x__4911__auto__;return goog.typeOf(G__15926);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._seq["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj15928 = {};return obj15928;
})();
cljs.core.IList = (function (){var obj15930 = {};return obj15930;
})();
cljs.core.IRecord = (function (){var obj15932 = {};return obj15932;
})();
cljs.core.IReversible = (function (){var obj15934 = {};return obj15934;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._rseq[(function (){var G__15938 = x__4911__auto__;return goog.typeOf(G__15938);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._rseq["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj15940 = {};return obj15940;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._sorted_seq[(function (){var G__15944 = x__4911__auto__;return goog.typeOf(G__15944);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._sorted_seq_from[(function (){var G__15948 = x__4911__auto__;return goog.typeOf(G__15948);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._entry_key[(function (){var G__15952 = x__4911__auto__;return goog.typeOf(G__15952);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._entry_key["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._comparator[(function (){var G__15956 = x__4911__auto__;return goog.typeOf(G__15956);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._comparator["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj15958 = {};return obj15958;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__4263__auto__ = writer;if(and__4263__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__4263__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__4911__auto__ = (((writer == null))?null:writer);return (function (){var or__4275__auto__ = (cljs.core._write[(function (){var G__15962 = x__4911__auto__;return goog.typeOf(G__15962);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._write["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__4263__auto__ = writer;if(and__4263__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__4263__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__4911__auto__ = (((writer == null))?null:writer);return (function (){var or__4275__auto__ = (cljs.core._flush[(function (){var G__15966 = x__4911__auto__;return goog.typeOf(G__15966);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._flush["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj15968 = {};return obj15968;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._pr_writer[(function (){var G__15972 = x__4911__auto__;return goog.typeOf(G__15972);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._pr_writer["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj15974 = {};return obj15974;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__4263__auto__ = d;if(and__4263__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__4263__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__4911__auto__ = (((d == null))?null:d);return (function (){var or__4275__auto__ = (cljs.core._realized_QMARK_[(function (){var G__15978 = x__4911__auto__;return goog.typeOf(G__15978);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj15980 = {};return obj15980;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._notify_watches[(function (){var G__15984 = x__4911__auto__;return goog.typeOf(G__15984);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._notify_watches["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._add_watch[(function (){var G__15988 = x__4911__auto__;return goog.typeOf(G__15988);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._add_watch["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__4263__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (cljs.core._remove_watch[(function (){var G__15992 = x__4911__auto__;return goog.typeOf(G__15992);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._remove_watch["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj15994 = {};return obj15994;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._as_transient[(function (){var G__15998 = x__4911__auto__;return goog.typeOf(G__15998);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._as_transient["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj16000 = {};return obj16000;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__4263__auto__ = tcoll;if(and__4263__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__4263__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__4911__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__4275__auto__ = (cljs.core._conj_BANG_[(function (){var G__16004 = x__4911__auto__;return goog.typeOf(G__16004);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__4263__auto__ = tcoll;if(and__4263__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__4263__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__4911__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__4275__auto__ = (cljs.core._persistent_BANG_[(function (){var G__16008 = x__4911__auto__;return goog.typeOf(G__16008);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj16010 = {};return obj16010;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__4263__auto__ = tcoll;if(and__4263__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__4263__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__4911__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__4275__auto__ = (cljs.core._assoc_BANG_[(function (){var G__16014 = x__4911__auto__;return goog.typeOf(G__16014);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj16016 = {};return obj16016;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__4263__auto__ = tcoll;if(and__4263__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__4263__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__4911__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__4275__auto__ = (cljs.core._dissoc_BANG_[(function (){var G__16020 = x__4911__auto__;return goog.typeOf(G__16020);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj16022 = {};return obj16022;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__4263__auto__ = tcoll;if(and__4263__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__4263__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__4911__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__4275__auto__ = (cljs.core._assoc_n_BANG_[(function (){var G__16026 = x__4911__auto__;return goog.typeOf(G__16026);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__4263__auto__ = tcoll;if(and__4263__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__4263__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__4911__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__4275__auto__ = (cljs.core._pop_BANG_[(function (){var G__16030 = x__4911__auto__;return goog.typeOf(G__16030);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj16032 = {};return obj16032;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__4263__auto__ = tcoll;if(and__4263__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__4263__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__4911__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__4275__auto__ = (cljs.core._disjoin_BANG_[(function (){var G__16036 = x__4911__auto__;return goog.typeOf(G__16036);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj16038 = {};return obj16038;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__4263__auto__ = x;if(and__4263__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__4263__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__4911__auto__ = (((x == null))?null:x);return (function (){var or__4275__auto__ = (cljs.core._compare[(function (){var G__16042 = x__4911__auto__;return goog.typeOf(G__16042);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._compare["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj16044 = {};return obj16044;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._drop_first[(function (){var G__16048 = x__4911__auto__;return goog.typeOf(G__16048);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._drop_first["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj16050 = {};return obj16050;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._chunked_first[(function (){var G__16054 = x__4911__auto__;return goog.typeOf(G__16054);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._chunked_first["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._chunked_rest[(function (){var G__16058 = x__4911__auto__;return goog.typeOf(G__16058);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj16060 = {};return obj16060;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._chunked_next[(function (){var G__16064 = x__4911__auto__;return goog.typeOf(G__16064);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._chunked_next["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj16066 = {};return obj16066;
})();
cljs.core._name = (function _name(x){if((function (){var and__4263__auto__ = x;if(and__4263__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__4263__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__4911__auto__ = (((x == null))?null:x);return (function (){var or__4275__auto__ = (cljs.core._name[(function (){var G__16070 = x__4911__auto__;return goog.typeOf(G__16070);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._name["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__4263__auto__ = x;if(and__4263__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__4263__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__4911__auto__ = (((x == null))?null:x);return (function (){var or__4275__auto__ = (cljs.core._namespace[(function (){var G__16074 = x__4911__auto__;return goog.typeOf(G__16074);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._namespace["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});
cljs.core.IAtom = (function (){var obj16076 = {};return obj16076;
})();
cljs.core.IReset = (function (){var obj16078 = {};return obj16078;
})();
cljs.core._reset_BANG_ = (function _reset_BANG_(o,new_value){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._reset_BANG_[(function (){var G__16082 = x__4911__auto__;return goog.typeOf(G__16082);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._reset_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});
cljs.core.ISwap = (function (){var obj16084 = {};return obj16084;
})();
cljs.core._swap_BANG_ = (function() {
var _swap_BANG_ = null;
var _swap_BANG___2 = (function (o,f){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._swap_BANG_[(function (){var G__16094 = x__4911__auto__;return goog.typeOf(G__16094);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var _swap_BANG___3 = (function (o,f,a){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._swap_BANG_[(function (){var G__16096 = x__4911__auto__;return goog.typeOf(G__16096);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var _swap_BANG___4 = (function (o,f,a,b){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._swap_BANG_[(function (){var G__16098 = x__4911__auto__;return goog.typeOf(G__16098);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var _swap_BANG___5 = (function (o,f,a,b,xs){if((function (){var and__4263__auto__ = o;if(and__4263__auto__)
{return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else
{return and__4263__auto__;
}
})())
{return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else
{var x__4911__auto__ = (((o == null))?null:o);return (function (){var or__4275__auto__ = (cljs.core._swap_BANG_[(function (){var G__16100 = x__4911__auto__;return goog.typeOf(G__16100);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._swap_BANG_["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return _swap_BANG___2.call(this,o,f);
case 3:
return _swap_BANG___3.call(this,o,f,a);
case 4:
return _swap_BANG___4.call(this,o,f,a,b);
case 5:
return _swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = _swap_BANG___2;
_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = _swap_BANG___3;
_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = _swap_BANG___4;
_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = _swap_BANG___5;
return _swap_BANG_;
})()
;
cljs.core.IIterable = (function (){var obj16102 = {};return obj16102;
})();
cljs.core._iterator = (function _iterator(coll){if((function (){var and__4263__auto__ = coll;if(and__4263__auto__)
{return coll.cljs$core$IIterable$_iterator$arity$1;
} else
{return and__4263__auto__;
}
})())
{return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else
{var x__4911__auto__ = (((coll == null))?null:coll);return (function (){var or__4275__auto__ = (cljs.core._iterator[(function (){var G__16106 = x__4911__auto__;return goog.typeOf(G__16106);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._iterator["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());
writer.cljs$core$IWriter$_flush$arity$1(null);
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
});
cljs.core.int_rotate_left = (function int_rotate_left(x,n){return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!(((function (){var G__16109 = (4294967295);var G__16110 = (5);return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__16109,G__16110) : Math.imul.call(null,G__16109,G__16110));
})() === (0)))))
{cljs.core.imul = (function imul(a,b){var G__16113 = a;var G__16114 = b;return (Math.imul.cljs$core$IFn$_invoke$arity$2 ? Math.imul.cljs$core$IFn$_invoke$arity$2(G__16113,G__16114) : Math.imul.call(null,G__16113,G__16114));
});
} else
{cljs.core.imul = (function imul(a,b){var ah = ((a >>> (16)) & (65535));var al = (a & (65535));var bh = ((b >>> (16)) & (65535));var bl = (b & (65535));return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function m3_mix_K1(k1){return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function m3_mix_H1(h1,k1){return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function m3_fmix(h1,len){var h1__$1 = h1;var h1__$2 = (h1__$1 ^ len);var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));var h1__$4 = cljs.core.imul(h1__$3,(2246822507));var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));var h1__$6 = cljs.core.imul(h1__$5,(3266489909));var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));return h1__$7;
});
cljs.core.m3_hash_int = (function m3_hash_int(in$){if((in$ === (0)))
{return in$;
} else
{var k1 = cljs.core.m3_mix_K1(in$);var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function m3_hash_unencoded_chars(in$){var h1 = (function (){var i = (1);var h1 = cljs.core.m3_seed;while(true){
if((i < in$.length))
{{
var G__16115 = (i + (2));
var G__16116 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__16115;
h1 = G__16116;
continue;
}
} else
{return h1;
}
break;
}
})();var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});
cljs.core.string_hash_cache = (function (){var obj16118 = {};return obj16118;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function hash_string_STAR_(s){if(!((s == null)))
{var len = s.length;if((len > (0)))
{var i = (0);var hash = (0);while(true){
if((i < len))
{{
var G__16119 = (i + (1));
var G__16120 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__16119;
hash = G__16120;
continue;
}
} else
{return hash;
}
break;
}
} else
{return (0);
}
} else
{return (0);
}
});
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = cljs.core.hash_string_STAR_(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));
return h;
});
cljs.core.hash_string = (function hash_string(k){if((cljs.core.string_hash_cache_count > (255)))
{cljs.core.string_hash_cache = (function (){var obj16124 = {};return obj16124;
})();
cljs.core.string_hash_cache_count = (0);
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__16127 = o;if(G__16127)
{var bit__4931__auto__ = (G__16127.cljs$lang$protocol_mask$partition0$ & (4194304));if((bit__4931__auto__) || (G__16127.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(null);
} else
{if(typeof o === 'number')
{return ((function (){var G__16128 = o;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__16128) : Math.floor.call(null,G__16128));
})() % (2147483647));
} else
{if(o === true)
{return (1);
} else
{if(o === false)
{return (0);
} else
{if(typeof o === 'string')
{return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else
{if((o == null))
{return (0);
} else
{return cljs.core._hash(o);

}
}
}
}
}
}
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((function (){var G__16137 = a;var G__16138 = b;return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__16137,G__16138) : cljs.core._EQ_.call(null,G__16137,G__16138));
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__4263__auto__ = cljs.core.not(a.ns);if(and__4263__auto__)
{return b.ns;
} else
{return and__4263__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return (1);
} else
{var nsc = (function (){var G__16139 = a.ns;var G__16140 = b.ns;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__16139,G__16140) : cljs.core.compare.call(null,G__16139,G__16140));
})();if((nsc === (0)))
{var G__16141 = a.name;var G__16142 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__16141,G__16142) : cljs.core.compare.call(null,G__16141,G__16142));
} else
{return nsc;
}
}
} else
{var G__16143 = a.name;var G__16144 = b.name;return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__16143,G__16144) : cljs.core.compare.call(null,G__16143,G__16144));

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__4686__auto__ = self__._hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__16146 = null;
var G__16146__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__16146__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__16146 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__16146__2.call(this,self__,coll);
case 3:
return G__16146__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16146.cljs$core$IFn$_invoke$arity$2 = G__16146__2;
G__16146.cljs$core$IFn$_invoke$arity$3 = G__16146__3;
return G__16146;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args16145){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16145)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.Symbol.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.iterable_QMARK_ = (function iterable_QMARK_(x){var G__16150 = x;if(G__16150)
{var bit__4938__auto__ = null;if(cljs.core.truth_((function (){var or__4275__auto__ = bit__4938__auto__;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return G__16150.cljs$core$IIterable$;
}
})()))
{return true;
} else
{if((!G__16150.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__16150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__16150);
}
});
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__16152 = value;if(G__16152)
{var bit__4938__auto__ = (G__16152.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4938__auto__) || (G__16152.cljs$core$ICloneable$))
{return true;
} else
{if((!G__16152.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__16152);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__16152);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__16154 = coll;if(G__16154)
{var bit__4931__auto__ = (G__16154.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4931__auto__) || (G__16154.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else
{if(coll instanceof Array)
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(typeof coll === 'string')
{if((coll.length === (0)))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,(0)));
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll))
{return cljs.core._seq(coll);
} else
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll)+" is not ISeqable")));

}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__16156 = coll;if(G__16156)
{var bit__4931__auto__ = (G__16156.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4931__auto__) || (G__16156.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(null);
} else
{var s = cljs.core.seq(coll);if((s == null))
{return null;
} else
{return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__16158 = coll;if(G__16158)
{var bit__4931__auto__ = (G__16158.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4931__auto__) || (G__16158.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(null);
} else
{var s = cljs.core.seq(coll);if(s)
{return cljs.core._rest(s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__16160 = coll;if(G__16160)
{var bit__4931__auto__ = (G__16160.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4931__auto__) || (G__16160.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$INext$_next$arity$1(null);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__16165__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__16166 = y;
var G__16167 = cljs.core.first(more);
var G__16168 = cljs.core.next(more);
x = G__16166;
y = G__16167;
more = G__16168;
continue;
}
} else
{return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__16165 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16165__delegate.call(this,x,y,more);};
G__16165.cljs$lang$maxFixedArity = 2;
G__16165.cljs$lang$applyTo = (function (arglist__16169){
var x = cljs.core.first(arglist__16169);
arglist__16169 = cljs.core.next(arglist__16169);
var y = cljs.core.first(arglist__16169);
var more = cljs.core.rest(arglist__16169);
return G__16165__delegate(x,y,more);
});
G__16165.cljs$core$IFn$_invoke$arity$variadic = G__16165__delegate;
return G__16165;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
/**
* Mix final collection hash for ordered or unordered collections.
* hash-basis is the combined collection hash, count is the number
* of elements included in the basis. Note this is the hash code
* consistent with =, different from .hashCode.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.mix_collection_hash = (function mix_collection_hash(hash_basis,count){var h1 = cljs.core.m3_seed;var k1 = cljs.core.m3_mix_K1(hash_basis);var h1__$1 = cljs.core.m3_mix_H1(h1,k1);return cljs.core.m3_fmix(h1__$1,count);
});
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_ordered_coll = (function hash_ordered_coll(coll){var n = (0);var hash_code = (1);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__16170 = (n + (1));
var G__16171 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__16172 = cljs.core.next(coll__$1);
n = G__16170;
hash_code = G__16171;
coll__$1 = G__16172;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
* Returns the hash code, consistent with =, for an external unordered
* collection implementing Iterable. For maps, the iterator should
* return map entries whose hash is computed as
* (hash-ordered-coll [k v]).
* See http://clojure.org/data_structures#hash for full algorithms.
*/
cljs.core.hash_unordered_coll = (function hash_unordered_coll(coll){var n = (0);var hash_code = (0);var coll__$1 = cljs.core.seq(coll);while(true){
if(!((coll__$1 == null)))
{{
var G__16173 = (n + (1));
var G__16174 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__16175 = cljs.core.next(coll__$1);
n = G__16173;
hash_code = G__16174;
coll__$1 = G__16175;
continue;
}
} else
{return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){var G__16176 = o;return goog.getUid(G__16176);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
cljs.core.deref = (function deref(o){return cljs.core._deref(o);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count(cicoll);if((cnt === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__16183 = val;var G__16184 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16183,G__16184) : f.call(null,G__16183,G__16184));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__16189 = nval;
var G__16190 = (n + (1));
val = G__16189;
n = G__16190;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__16185 = val__$1;var G__16186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16185,G__16186) : f.call(null,G__16185,G__16186));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__16191 = nval;
var G__16192 = (n + (1));
val__$1 = G__16191;
n = G__16192;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__16187 = val__$1;var G__16188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16187,G__16188) : f.call(null,G__16187,G__16188));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__16193 = nval;
var G__16194 = (n + (1));
val__$1 = G__16193;
n = G__16194;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = (arr[(0)]);var n = (1);while(true){
if((n < cnt))
{var nval = (function (){var G__16201 = val;var G__16202 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16201,G__16202) : f.call(null,G__16201,G__16202));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__16207 = nval;
var G__16208 = (n + (1));
val = G__16207;
n = G__16208;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = (0);while(true){
if((n < cnt))
{var nval = (function (){var G__16203 = val__$1;var G__16204 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16203,G__16204) : f.call(null,G__16203,G__16204));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__16209 = nval;
var G__16210 = (n + (1));
val__$1 = G__16209;
n = G__16210;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (function (){var G__16205 = val__$1;var G__16206 = (arr[n]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16205,G__16206) : f.call(null,G__16205,G__16206));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__16211 = nval;
var G__16212 = (n + (1));
val__$1 = G__16211;
n = G__16212;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__16214 = x;if(G__16214)
{var bit__4938__auto__ = (G__16214.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4938__auto__) || (G__16214.cljs$core$ICounted$))
{return true;
} else
{if((!G__16214.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__16214);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__16214);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__16216 = x;if(G__16216)
{var bit__4938__auto__ = (G__16216.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4938__auto__) || (G__16216.cljs$core$IIndexed$))
{return true;
} else
{if((!G__16216.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__16216);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__16216);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.IndexedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count(coll__$1);if((c > (0)))
{return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__16217 = coll__$1;var G__16218 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__16217,G__16218) : cljs.core.equiv_sequential.call(null,G__16217,G__16218));
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + (1)) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__16219 = o;var G__16220 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__16219,G__16220) : cljs.core.cons.call(null,G__16219,G__16220));
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.RSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + (1));
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;var G__16223 = coll__$1;var G__16224 = other;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(G__16223,G__16224) : cljs.core.equiv_sequential.call(null,G__16223,G__16224));
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__16225 = cljs.core.List.EMPTY;var G__16226 = self__.meta;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__16225,G__16226) : cljs.core.with_meta.call(null,G__16225,G__16226));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;var G__16227 = f;var G__16228 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(G__16227,G__16228) : cljs.core.seq_reduce.call(null,G__16227,G__16228));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;var G__16229 = f;var G__16230 = start;var G__16231 = col__$1;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(G__16229,G__16230,G__16231) : cljs.core.seq_reduce.call(null,G__16229,G__16230,G__16231));
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > (0)))
{return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__16232 = o;var G__16233 = coll__$1;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(G__16232,G__16233) : cljs.core.cons.call(null,G__16232,G__16233));
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next(s);if(!((sn == null)))
{{
var G__16234 = sn;
s = G__16234;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__0 = (function (){return cljs.core.PersistentVector.EMPTY;
});
var conj__1 = (function (coll){return coll;
});
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj(coll,x);
} else
{return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__16239__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__16240 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__16241 = cljs.core.first(xs);
var G__16242 = cljs.core.next(xs);
coll = G__16240;
x = G__16241;
xs = G__16242;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__16239 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16239__delegate.call(this,coll,x,xs);};
G__16239.cljs$lang$maxFixedArity = 2;
G__16239.cljs$lang$applyTo = (function (arglist__16243){
var coll = cljs.core.first(arglist__16243);
arglist__16243 = cljs.core.next(arglist__16243);
var x = cljs.core.first(arglist__16243);
var xs = cljs.core.rest(arglist__16243);
return G__16239__delegate(coll,x,xs);
});
G__16239.cljs$core$IFn$_invoke$arity$variadic = G__16239__delegate;
return G__16239;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return conj__0.call(this);
case 1:
return conj__1.call(this,coll);
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$0 = conj__0;
conj.cljs$core$IFn$_invoke$arity$1 = conj__1;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq(coll);var acc = (0);while(true){
if(cljs.core.counted_QMARK_(s))
{return (acc + cljs.core._count(s));
} else
{{
var G__16244 = cljs.core.next(s);
var G__16245 = (acc + (1));
s = G__16244;
acc = G__16245;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__16247 = coll;if(G__16247)
{var bit__4931__auto__ = (G__16247.cljs$lang$protocol_mask$partition0$ & (2));if((bit__4931__auto__) || (G__16247.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(null);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else
{return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{{
var G__16248 = cljs.core.next(coll);
var G__16249 = (n - (1));
coll = G__16248;
n = G__16249;
continue;
}
} else
{throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === (0)))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{{
var G__16250 = cljs.core.next(coll);
var G__16251 = (n - (1));
var G__16252 = not_found;
coll = G__16250;
n = G__16251;
not_found = G__16252;
continue;
}
} else
{return not_found;

}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number"));
} else
{if((coll == null))
{return coll;
} else
{if((function (){var G__16257 = coll;if(G__16257)
{var bit__4931__auto__ = (G__16257.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4931__auto__) || (G__16257.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__16258 = coll;if(G__16258)
{var bit__4938__auto__ = (G__16258.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4938__auto__) || (G__16258.cljs$core$ISeq$))
{return true;
} else
{if((!G__16258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16258);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16258);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!(typeof n === 'number'))
{throw (new Error("index argument to nth must be a number."));
} else
{if((coll == null))
{return not_found;
} else
{if((function (){var G__16259 = coll;if(G__16259)
{var bit__4931__auto__ = (G__16259.cljs$lang$protocol_mask$partition0$ & (16));if((bit__4931__auto__) || (G__16259.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if((function (){var G__16260 = coll;if(G__16260)
{var bit__4938__auto__ = (G__16260.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4938__auto__) || (G__16260.cljs$core$ISeq$))
{return true;
} else
{if((!G__16260.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16260);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16260);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{throw (new Error(("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str(cljs.core.type(coll))))));

}
}
}
}
}
}
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__16263 = o;if(G__16263)
{var bit__4931__auto__ = (G__16263.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4931__auto__) || (G__16263.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else
{return null;

}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__16264 = o;if(G__16264)
{var bit__4931__auto__ = (G__16264.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4931__auto__) || (G__16264.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else
{return not_found;

}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc(coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var assoc__4 = (function() { 
var G__16268__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__16269 = ret;
var G__16270 = cljs.core.first(kvs);
var G__16271 = cljs.core.second(kvs);
var G__16272 = cljs.core.nnext(kvs);
coll = G__16269;
k = G__16270;
v = G__16271;
kvs = G__16272;
continue;
}
} else
{return ret;
}
break;
}
};
var G__16268 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16268__delegate.call(this,coll,k,v,kvs);};
G__16268.cljs$lang$maxFixedArity = 3;
G__16268.cljs$lang$applyTo = (function (arglist__16273){
var coll = cljs.core.first(arglist__16273);
arglist__16273 = cljs.core.next(arglist__16273);
var k = cljs.core.first(arglist__16273);
arglist__16273 = cljs.core.next(arglist__16273);
var v = cljs.core.first(arglist__16273);
var kvs = cljs.core.rest(arglist__16273);
return G__16268__delegate(coll,k,v,kvs);
});
G__16268.cljs$core$IFn$_invoke$arity$variadic = G__16268__delegate;
return G__16268;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__16276__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__16277 = ret;
var G__16278 = cljs.core.first(ks);
var G__16279 = cljs.core.next(ks);
coll = G__16277;
k = G__16278;
ks = G__16279;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__16276 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16276__delegate.call(this,coll,k,ks);};
G__16276.cljs$lang$maxFixedArity = 2;
G__16276.cljs$lang$applyTo = (function (arglist__16280){
var coll = cljs.core.first(arglist__16280);
arglist__16280 = cljs.core.next(arglist__16280);
var k = cljs.core.first(arglist__16280);
var ks = cljs.core.rest(arglist__16280);
return G__16276__delegate(coll,k,ks);
});
G__16276.cljs$core$IFn$_invoke$arity$variadic = G__16276__delegate;
return G__16276;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__4275__auto__ = (function (){var G__16285 = f;return goog.isFunction(G__16285);
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var G__16286 = f;if(G__16286)
{var bit__4938__auto__ = null;if(cljs.core.truth_((function (){var or__4275__auto____$1 = bit__4938__auto__;if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{return G__16286.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__16286.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__16286);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__16286);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.MetaFn.cljs$lang$type = true;
cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";
cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/MetaFn");
});
cljs.core.MetaFn.prototype.call = (function() {
var G__16752 = null;
var G__16752__1 = (function (self__){var self__ = this;
var self____$1 = this;var _ = self____$1;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__16752__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16288 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__16288) : self__.afn.call(null,G__16288));
});
var G__16752__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16289 = a;var G__16290 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__16289,G__16290) : self__.afn.call(null,G__16289,G__16290));
});
var G__16752__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16291 = a;var G__16292 = b;var G__16293 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__16291,G__16292,G__16293) : self__.afn.call(null,G__16291,G__16292,G__16293));
});
var G__16752__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16294 = a;var G__16295 = b;var G__16296 = c;var G__16297 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__16294,G__16295,G__16296,G__16297) : self__.afn.call(null,G__16294,G__16295,G__16296,G__16297));
});
var G__16752__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16298 = a;var G__16299 = b;var G__16300 = c;var G__16301 = d;var G__16302 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__16298,G__16299,G__16300,G__16301,G__16302) : self__.afn.call(null,G__16298,G__16299,G__16300,G__16301,G__16302));
});
var G__16752__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16303 = a;var G__16304 = b;var G__16305 = c;var G__16306 = d;var G__16307 = e;var G__16308 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__16303,G__16304,G__16305,G__16306,G__16307,G__16308) : self__.afn.call(null,G__16303,G__16304,G__16305,G__16306,G__16307,G__16308));
});
var G__16752__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16309 = a;var G__16310 = b;var G__16311 = c;var G__16312 = d;var G__16313 = e;var G__16314 = f;var G__16315 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__16309,G__16310,G__16311,G__16312,G__16313,G__16314,G__16315) : self__.afn.call(null,G__16309,G__16310,G__16311,G__16312,G__16313,G__16314,G__16315));
});
var G__16752__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16316 = a;var G__16317 = b;var G__16318 = c;var G__16319 = d;var G__16320 = e;var G__16321 = f;var G__16322 = g;var G__16323 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__16316,G__16317,G__16318,G__16319,G__16320,G__16321,G__16322,G__16323) : self__.afn.call(null,G__16316,G__16317,G__16318,G__16319,G__16320,G__16321,G__16322,G__16323));
});
var G__16752__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16324 = a;var G__16325 = b;var G__16326 = c;var G__16327 = d;var G__16328 = e;var G__16329 = f;var G__16330 = g;var G__16331 = h;var G__16332 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__16324,G__16325,G__16326,G__16327,G__16328,G__16329,G__16330,G__16331,G__16332) : self__.afn.call(null,G__16324,G__16325,G__16326,G__16327,G__16328,G__16329,G__16330,G__16331,G__16332));
});
var G__16752__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16333 = a;var G__16334 = b;var G__16335 = c;var G__16336 = d;var G__16337 = e;var G__16338 = f;var G__16339 = g;var G__16340 = h;var G__16341 = i;var G__16342 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__16333,G__16334,G__16335,G__16336,G__16337,G__16338,G__16339,G__16340,G__16341,G__16342) : self__.afn.call(null,G__16333,G__16334,G__16335,G__16336,G__16337,G__16338,G__16339,G__16340,G__16341,G__16342));
});
var G__16752__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16343 = a;var G__16344 = b;var G__16345 = c;var G__16346 = d;var G__16347 = e;var G__16348 = f;var G__16349 = g;var G__16350 = h;var G__16351 = i;var G__16352 = j;var G__16353 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__16343,G__16344,G__16345,G__16346,G__16347,G__16348,G__16349,G__16350,G__16351,G__16352,G__16353) : self__.afn.call(null,G__16343,G__16344,G__16345,G__16346,G__16347,G__16348,G__16349,G__16350,G__16351,G__16352,G__16353));
});
var G__16752__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16354 = a;var G__16355 = b;var G__16356 = c;var G__16357 = d;var G__16358 = e;var G__16359 = f;var G__16360 = g;var G__16361 = h;var G__16362 = i;var G__16363 = j;var G__16364 = k;var G__16365 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__16354,G__16355,G__16356,G__16357,G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365) : self__.afn.call(null,G__16354,G__16355,G__16356,G__16357,G__16358,G__16359,G__16360,G__16361,G__16362,G__16363,G__16364,G__16365));
});
var G__16752__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16366 = a;var G__16367 = b;var G__16368 = c;var G__16369 = d;var G__16370 = e;var G__16371 = f;var G__16372 = g;var G__16373 = h;var G__16374 = i;var G__16375 = j;var G__16376 = k;var G__16377 = l;var G__16378 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__16366,G__16367,G__16368,G__16369,G__16370,G__16371,G__16372,G__16373,G__16374,G__16375,G__16376,G__16377,G__16378) : self__.afn.call(null,G__16366,G__16367,G__16368,G__16369,G__16370,G__16371,G__16372,G__16373,G__16374,G__16375,G__16376,G__16377,G__16378));
});
var G__16752__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16379 = a;var G__16380 = b;var G__16381 = c;var G__16382 = d;var G__16383 = e;var G__16384 = f;var G__16385 = g;var G__16386 = h;var G__16387 = i;var G__16388 = j;var G__16389 = k;var G__16390 = l;var G__16391 = m;var G__16392 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__16379,G__16380,G__16381,G__16382,G__16383,G__16384,G__16385,G__16386,G__16387,G__16388,G__16389,G__16390,G__16391,G__16392) : self__.afn.call(null,G__16379,G__16380,G__16381,G__16382,G__16383,G__16384,G__16385,G__16386,G__16387,G__16388,G__16389,G__16390,G__16391,G__16392));
});
var G__16752__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16393 = a;var G__16394 = b;var G__16395 = c;var G__16396 = d;var G__16397 = e;var G__16398 = f;var G__16399 = g;var G__16400 = h;var G__16401 = i;var G__16402 = j;var G__16403 = k;var G__16404 = l;var G__16405 = m;var G__16406 = n;var G__16407 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__16393,G__16394,G__16395,G__16396,G__16397,G__16398,G__16399,G__16400,G__16401,G__16402,G__16403,G__16404,G__16405,G__16406,G__16407) : self__.afn.call(null,G__16393,G__16394,G__16395,G__16396,G__16397,G__16398,G__16399,G__16400,G__16401,G__16402,G__16403,G__16404,G__16405,G__16406,G__16407));
});
var G__16752__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16408 = a;var G__16409 = b;var G__16410 = c;var G__16411 = d;var G__16412 = e;var G__16413 = f;var G__16414 = g;var G__16415 = h;var G__16416 = i;var G__16417 = j;var G__16418 = k;var G__16419 = l;var G__16420 = m;var G__16421 = n;var G__16422 = o;var G__16423 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__16408,G__16409,G__16410,G__16411,G__16412,G__16413,G__16414,G__16415,G__16416,G__16417,G__16418,G__16419,G__16420,G__16421,G__16422,G__16423) : self__.afn.call(null,G__16408,G__16409,G__16410,G__16411,G__16412,G__16413,G__16414,G__16415,G__16416,G__16417,G__16418,G__16419,G__16420,G__16421,G__16422,G__16423));
});
var G__16752__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16424 = a;var G__16425 = b;var G__16426 = c;var G__16427 = d;var G__16428 = e;var G__16429 = f;var G__16430 = g;var G__16431 = h;var G__16432 = i;var G__16433 = j;var G__16434 = k;var G__16435 = l;var G__16436 = m;var G__16437 = n;var G__16438 = o;var G__16439 = p;var G__16440 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432,G__16433,G__16434,G__16435,G__16436,G__16437,G__16438,G__16439,G__16440) : self__.afn.call(null,G__16424,G__16425,G__16426,G__16427,G__16428,G__16429,G__16430,G__16431,G__16432,G__16433,G__16434,G__16435,G__16436,G__16437,G__16438,G__16439,G__16440));
});
var G__16752__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16441 = a;var G__16442 = b;var G__16443 = c;var G__16444 = d;var G__16445 = e;var G__16446 = f;var G__16447 = g;var G__16448 = h;var G__16449 = i;var G__16450 = j;var G__16451 = k;var G__16452 = l;var G__16453 = m;var G__16454 = n;var G__16455 = o;var G__16456 = p;var G__16457 = q;var G__16458 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__16441,G__16442,G__16443,G__16444,G__16445,G__16446,G__16447,G__16448,G__16449,G__16450,G__16451,G__16452,G__16453,G__16454,G__16455,G__16456,G__16457,G__16458) : self__.afn.call(null,G__16441,G__16442,G__16443,G__16444,G__16445,G__16446,G__16447,G__16448,G__16449,G__16450,G__16451,G__16452,G__16453,G__16454,G__16455,G__16456,G__16457,G__16458));
});
var G__16752__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16459 = a;var G__16460 = b;var G__16461 = c;var G__16462 = d;var G__16463 = e;var G__16464 = f;var G__16465 = g;var G__16466 = h;var G__16467 = i;var G__16468 = j;var G__16469 = k;var G__16470 = l;var G__16471 = m;var G__16472 = n;var G__16473 = o;var G__16474 = p;var G__16475 = q;var G__16476 = r;var G__16477 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__16459,G__16460,G__16461,G__16462,G__16463,G__16464,G__16465,G__16466,G__16467,G__16468,G__16469,G__16470,G__16471,G__16472,G__16473,G__16474,G__16475,G__16476,G__16477) : self__.afn.call(null,G__16459,G__16460,G__16461,G__16462,G__16463,G__16464,G__16465,G__16466,G__16467,G__16468,G__16469,G__16470,G__16471,G__16472,G__16473,G__16474,G__16475,G__16476,G__16477));
});
var G__16752__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16478 = a;var G__16479 = b;var G__16480 = c;var G__16481 = d;var G__16482 = e;var G__16483 = f;var G__16484 = g;var G__16485 = h;var G__16486 = i;var G__16487 = j;var G__16488 = k;var G__16489 = l;var G__16490 = m;var G__16491 = n;var G__16492 = o;var G__16493 = p;var G__16494 = q;var G__16495 = r;var G__16496 = s;var G__16497 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__16478,G__16479,G__16480,G__16481,G__16482,G__16483,G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497) : self__.afn.call(null,G__16478,G__16479,G__16480,G__16481,G__16482,G__16483,G__16484,G__16485,G__16486,G__16487,G__16488,G__16489,G__16490,G__16491,G__16492,G__16493,G__16494,G__16495,G__16496,G__16497));
});
var G__16752__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var _ = self____$1;var G__16498 = self__.afn;var G__16499 = a;var G__16500 = b;var G__16501 = c;var G__16502 = d;var G__16503 = e;var G__16504 = f;var G__16505 = g;var G__16506 = h;var G__16507 = i;var G__16508 = j;var G__16509 = k;var G__16510 = l;var G__16511 = m;var G__16512 = n;var G__16513 = o;var G__16514 = p;var G__16515 = q;var G__16516 = r;var G__16517 = s;var G__16518 = t;var G__16519 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__16498,G__16499,G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507,G__16508,G__16509,G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516,G__16517,G__16518,G__16519) : cljs.core.apply.call(null,G__16498,G__16499,G__16500,G__16501,G__16502,G__16503,G__16504,G__16505,G__16506,G__16507,G__16508,G__16509,G__16510,G__16511,G__16512,G__16513,G__16514,G__16515,G__16516,G__16517,G__16518,G__16519));
});
G__16752 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__16752__1.call(this,self__);
case 2:
return G__16752__2.call(this,self__,a);
case 3:
return G__16752__3.call(this,self__,a,b);
case 4:
return G__16752__4.call(this,self__,a,b,c);
case 5:
return G__16752__5.call(this,self__,a,b,c,d);
case 6:
return G__16752__6.call(this,self__,a,b,c,d,e);
case 7:
return G__16752__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__16752__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__16752__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__16752__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__16752__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__16752__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__16752__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__16752__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__16752__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__16752__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__16752__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__16752__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__16752__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__16752__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__16752__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__16752__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16752.cljs$core$IFn$_invoke$arity$1 = G__16752__1;
G__16752.cljs$core$IFn$_invoke$arity$2 = G__16752__2;
G__16752.cljs$core$IFn$_invoke$arity$3 = G__16752__3;
G__16752.cljs$core$IFn$_invoke$arity$4 = G__16752__4;
G__16752.cljs$core$IFn$_invoke$arity$5 = G__16752__5;
G__16752.cljs$core$IFn$_invoke$arity$6 = G__16752__6;
G__16752.cljs$core$IFn$_invoke$arity$7 = G__16752__7;
G__16752.cljs$core$IFn$_invoke$arity$8 = G__16752__8;
G__16752.cljs$core$IFn$_invoke$arity$9 = G__16752__9;
G__16752.cljs$core$IFn$_invoke$arity$10 = G__16752__10;
G__16752.cljs$core$IFn$_invoke$arity$11 = G__16752__11;
G__16752.cljs$core$IFn$_invoke$arity$12 = G__16752__12;
G__16752.cljs$core$IFn$_invoke$arity$13 = G__16752__13;
G__16752.cljs$core$IFn$_invoke$arity$14 = G__16752__14;
G__16752.cljs$core$IFn$_invoke$arity$15 = G__16752__15;
G__16752.cljs$core$IFn$_invoke$arity$16 = G__16752__16;
G__16752.cljs$core$IFn$_invoke$arity$17 = G__16752__17;
G__16752.cljs$core$IFn$_invoke$arity$18 = G__16752__18;
G__16752.cljs$core$IFn$_invoke$arity$19 = G__16752__19;
G__16752.cljs$core$IFn$_invoke$arity$20 = G__16752__20;
G__16752.cljs$core$IFn$_invoke$arity$21 = G__16752__21;
G__16752.cljs$core$IFn$_invoke$arity$22 = G__16752__22;
return G__16752;
})()
;
cljs.core.MetaFn.prototype.apply = (function (self__,args16287){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16287)));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){var self__ = this;
var _ = this;return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var G__16520 = a;return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(G__16520) : self__.afn.call(null,G__16520));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var _ = this;var G__16521 = a;var G__16522 = b;return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(G__16521,G__16522) : self__.afn.call(null,G__16521,G__16522));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var _ = this;var G__16523 = a;var G__16524 = b;var G__16525 = c;return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(G__16523,G__16524,G__16525) : self__.afn.call(null,G__16523,G__16524,G__16525));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var _ = this;var G__16526 = a;var G__16527 = b;var G__16528 = c;var G__16529 = d;return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(G__16526,G__16527,G__16528,G__16529) : self__.afn.call(null,G__16526,G__16527,G__16528,G__16529));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var _ = this;var G__16530 = a;var G__16531 = b;var G__16532 = c;var G__16533 = d;var G__16534 = e;return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(G__16530,G__16531,G__16532,G__16533,G__16534) : self__.afn.call(null,G__16530,G__16531,G__16532,G__16533,G__16534));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var _ = this;var G__16535 = a;var G__16536 = b;var G__16537 = c;var G__16538 = d;var G__16539 = e;var G__16540 = f;return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(G__16535,G__16536,G__16537,G__16538,G__16539,G__16540) : self__.afn.call(null,G__16535,G__16536,G__16537,G__16538,G__16539,G__16540));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var _ = this;var G__16541 = a;var G__16542 = b;var G__16543 = c;var G__16544 = d;var G__16545 = e;var G__16546 = f;var G__16547 = g;return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(G__16541,G__16542,G__16543,G__16544,G__16545,G__16546,G__16547) : self__.afn.call(null,G__16541,G__16542,G__16543,G__16544,G__16545,G__16546,G__16547));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var _ = this;var G__16548 = a;var G__16549 = b;var G__16550 = c;var G__16551 = d;var G__16552 = e;var G__16553 = f;var G__16554 = g;var G__16555 = h;return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555) : self__.afn.call(null,G__16548,G__16549,G__16550,G__16551,G__16552,G__16553,G__16554,G__16555));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var _ = this;var G__16556 = a;var G__16557 = b;var G__16558 = c;var G__16559 = d;var G__16560 = e;var G__16561 = f;var G__16562 = g;var G__16563 = h;var G__16564 = i;return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(G__16556,G__16557,G__16558,G__16559,G__16560,G__16561,G__16562,G__16563,G__16564) : self__.afn.call(null,G__16556,G__16557,G__16558,G__16559,G__16560,G__16561,G__16562,G__16563,G__16564));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var _ = this;var G__16565 = a;var G__16566 = b;var G__16567 = c;var G__16568 = d;var G__16569 = e;var G__16570 = f;var G__16571 = g;var G__16572 = h;var G__16573 = i;var G__16574 = j;return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(G__16565,G__16566,G__16567,G__16568,G__16569,G__16570,G__16571,G__16572,G__16573,G__16574) : self__.afn.call(null,G__16565,G__16566,G__16567,G__16568,G__16569,G__16570,G__16571,G__16572,G__16573,G__16574));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var _ = this;var G__16575 = a;var G__16576 = b;var G__16577 = c;var G__16578 = d;var G__16579 = e;var G__16580 = f;var G__16581 = g;var G__16582 = h;var G__16583 = i;var G__16584 = j;var G__16585 = k;return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(G__16575,G__16576,G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585) : self__.afn.call(null,G__16575,G__16576,G__16577,G__16578,G__16579,G__16580,G__16581,G__16582,G__16583,G__16584,G__16585));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var _ = this;var G__16586 = a;var G__16587 = b;var G__16588 = c;var G__16589 = d;var G__16590 = e;var G__16591 = f;var G__16592 = g;var G__16593 = h;var G__16594 = i;var G__16595 = j;var G__16596 = k;var G__16597 = l;return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(G__16586,G__16587,G__16588,G__16589,G__16590,G__16591,G__16592,G__16593,G__16594,G__16595,G__16596,G__16597) : self__.afn.call(null,G__16586,G__16587,G__16588,G__16589,G__16590,G__16591,G__16592,G__16593,G__16594,G__16595,G__16596,G__16597));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var _ = this;var G__16598 = a;var G__16599 = b;var G__16600 = c;var G__16601 = d;var G__16602 = e;var G__16603 = f;var G__16604 = g;var G__16605 = h;var G__16606 = i;var G__16607 = j;var G__16608 = k;var G__16609 = l;var G__16610 = m;return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(G__16598,G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607,G__16608,G__16609,G__16610) : self__.afn.call(null,G__16598,G__16599,G__16600,G__16601,G__16602,G__16603,G__16604,G__16605,G__16606,G__16607,G__16608,G__16609,G__16610));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var _ = this;var G__16611 = a;var G__16612 = b;var G__16613 = c;var G__16614 = d;var G__16615 = e;var G__16616 = f;var G__16617 = g;var G__16618 = h;var G__16619 = i;var G__16620 = j;var G__16621 = k;var G__16622 = l;var G__16623 = m;var G__16624 = n;return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(G__16611,G__16612,G__16613,G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624) : self__.afn.call(null,G__16611,G__16612,G__16613,G__16614,G__16615,G__16616,G__16617,G__16618,G__16619,G__16620,G__16621,G__16622,G__16623,G__16624));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var _ = this;var G__16625 = a;var G__16626 = b;var G__16627 = c;var G__16628 = d;var G__16629 = e;var G__16630 = f;var G__16631 = g;var G__16632 = h;var G__16633 = i;var G__16634 = j;var G__16635 = k;var G__16636 = l;var G__16637 = m;var G__16638 = n;var G__16639 = o;return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(G__16625,G__16626,G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633,G__16634,G__16635,G__16636,G__16637,G__16638,G__16639) : self__.afn.call(null,G__16625,G__16626,G__16627,G__16628,G__16629,G__16630,G__16631,G__16632,G__16633,G__16634,G__16635,G__16636,G__16637,G__16638,G__16639));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var _ = this;var G__16640 = a;var G__16641 = b;var G__16642 = c;var G__16643 = d;var G__16644 = e;var G__16645 = f;var G__16646 = g;var G__16647 = h;var G__16648 = i;var G__16649 = j;var G__16650 = k;var G__16651 = l;var G__16652 = m;var G__16653 = n;var G__16654 = o;var G__16655 = p;return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(G__16640,G__16641,G__16642,G__16643,G__16644,G__16645,G__16646,G__16647,G__16648,G__16649,G__16650,G__16651,G__16652,G__16653,G__16654,G__16655) : self__.afn.call(null,G__16640,G__16641,G__16642,G__16643,G__16644,G__16645,G__16646,G__16647,G__16648,G__16649,G__16650,G__16651,G__16652,G__16653,G__16654,G__16655));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var _ = this;var G__16656 = a;var G__16657 = b;var G__16658 = c;var G__16659 = d;var G__16660 = e;var G__16661 = f;var G__16662 = g;var G__16663 = h;var G__16664 = i;var G__16665 = j;var G__16666 = k;var G__16667 = l;var G__16668 = m;var G__16669 = n;var G__16670 = o;var G__16671 = p;var G__16672 = q;return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(G__16656,G__16657,G__16658,G__16659,G__16660,G__16661,G__16662,G__16663,G__16664,G__16665,G__16666,G__16667,G__16668,G__16669,G__16670,G__16671,G__16672) : self__.afn.call(null,G__16656,G__16657,G__16658,G__16659,G__16660,G__16661,G__16662,G__16663,G__16664,G__16665,G__16666,G__16667,G__16668,G__16669,G__16670,G__16671,G__16672));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var _ = this;var G__16673 = a;var G__16674 = b;var G__16675 = c;var G__16676 = d;var G__16677 = e;var G__16678 = f;var G__16679 = g;var G__16680 = h;var G__16681 = i;var G__16682 = j;var G__16683 = k;var G__16684 = l;var G__16685 = m;var G__16686 = n;var G__16687 = o;var G__16688 = p;var G__16689 = q;var G__16690 = r;return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(G__16673,G__16674,G__16675,G__16676,G__16677,G__16678,G__16679,G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686,G__16687,G__16688,G__16689,G__16690) : self__.afn.call(null,G__16673,G__16674,G__16675,G__16676,G__16677,G__16678,G__16679,G__16680,G__16681,G__16682,G__16683,G__16684,G__16685,G__16686,G__16687,G__16688,G__16689,G__16690));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var _ = this;var G__16691 = a;var G__16692 = b;var G__16693 = c;var G__16694 = d;var G__16695 = e;var G__16696 = f;var G__16697 = g;var G__16698 = h;var G__16699 = i;var G__16700 = j;var G__16701 = k;var G__16702 = l;var G__16703 = m;var G__16704 = n;var G__16705 = o;var G__16706 = p;var G__16707 = q;var G__16708 = r;var G__16709 = s;return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(G__16691,G__16692,G__16693,G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709) : self__.afn.call(null,G__16691,G__16692,G__16693,G__16694,G__16695,G__16696,G__16697,G__16698,G__16699,G__16700,G__16701,G__16702,G__16703,G__16704,G__16705,G__16706,G__16707,G__16708,G__16709));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var _ = this;var G__16710 = a;var G__16711 = b;var G__16712 = c;var G__16713 = d;var G__16714 = e;var G__16715 = f;var G__16716 = g;var G__16717 = h;var G__16718 = i;var G__16719 = j;var G__16720 = k;var G__16721 = l;var G__16722 = m;var G__16723 = n;var G__16724 = o;var G__16725 = p;var G__16726 = q;var G__16727 = r;var G__16728 = s;var G__16729 = t;return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(G__16710,G__16711,G__16712,G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729) : self__.afn.call(null,G__16710,G__16711,G__16712,G__16713,G__16714,G__16715,G__16716,G__16717,G__16718,G__16719,G__16720,G__16721,G__16722,G__16723,G__16724,G__16725,G__16726,G__16727,G__16728,G__16729));
});
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var _ = this;var G__16730 = self__.afn;var G__16731 = a;var G__16732 = b;var G__16733 = c;var G__16734 = d;var G__16735 = e;var G__16736 = f;var G__16737 = g;var G__16738 = h;var G__16739 = i;var G__16740 = j;var G__16741 = k;var G__16742 = l;var G__16743 = m;var G__16744 = n;var G__16745 = o;var G__16746 = p;var G__16747 = q;var G__16748 = r;var G__16749 = s;var G__16750 = t;var G__16751 = rest;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(G__16730,G__16731,G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740,G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749,G__16750,G__16751) : cljs.core.apply.call(null,G__16730,G__16731,G__16732,G__16733,G__16734,G__16735,G__16736,G__16737,G__16738,G__16739,G__16740,G__16741,G__16742,G__16743,G__16744,G__16745,G__16746,G__16747,G__16748,G__16749,G__16750,G__16751));
});
cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.MetaFn(self__.afn,new_meta));
});
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.__GT_MetaFn = (function __GT_MetaFn(afn,meta){return (new cljs.core.MetaFn(afn,meta));
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__16756 = o;if(G__16756)
{var bit__4938__auto__ = (G__16756.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4938__auto__) || (G__16756.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__16756.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__16756);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__16756);
}
})())))
{return (new cljs.core.MetaFn(o,meta));
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__4263__auto__ = !((o == null));if(and__4263__auto__)
{var G__16760 = o;if(G__16760)
{var bit__4938__auto__ = (G__16760.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4938__auto__) || (G__16760.cljs$core$IMeta$))
{return true;
} else
{if((!G__16760.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__16760);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__16760);
}
} else
{return and__4263__auto__;
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop(coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__16763__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__16764 = ret;
var G__16765 = cljs.core.first(ks);
var G__16766 = cljs.core.next(ks);
coll = G__16764;
k = G__16765;
ks = G__16766;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__16763 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16763__delegate.call(this,coll,k,ks);};
G__16763.cljs$lang$maxFixedArity = 2;
G__16763.cljs$lang$applyTo = (function (arglist__16767){
var coll = cljs.core.first(arglist__16767);
arglist__16767 = cljs.core.next(arglist__16767);
var k = cljs.core.first(arglist__16767);
var ks = cljs.core.rest(arglist__16767);
return G__16763__delegate(coll,k,ks);
});
G__16763.cljs$core$IFn$_invoke$arity$variadic = G__16763__delegate;
return G__16763;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__16769 = x;if(G__16769)
{var bit__4938__auto__ = (G__16769.cljs$lang$protocol_mask$partition0$ & (8));if((bit__4938__auto__) || (G__16769.cljs$core$ICollection$))
{return true;
} else
{if((!G__16769.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__16769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__16769);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__16771 = x;if(G__16771)
{var bit__4938__auto__ = (G__16771.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__4938__auto__) || (G__16771.cljs$core$ISet$))
{return true;
} else
{if((!G__16771.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__16771);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__16771);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__16773 = x;if(G__16773)
{var bit__4938__auto__ = (G__16773.cljs$lang$protocol_mask$partition0$ & (512));if((bit__4938__auto__) || (G__16773.cljs$core$IAssociative$))
{return true;
} else
{if((!G__16773.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__16773);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__16773);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__16775 = x;if(G__16775)
{var bit__4938__auto__ = (G__16775.cljs$lang$protocol_mask$partition0$ & (16777216));if((bit__4938__auto__) || (G__16775.cljs$core$ISequential$))
{return true;
} else
{if((!G__16775.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__16775);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__16775);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__16777 = x;if(G__16777)
{var bit__4938__auto__ = (G__16777.cljs$lang$protocol_mask$partition0$ & (268435456));if((bit__4938__auto__) || (G__16777.cljs$core$ISorted$))
{return true;
} else
{if((!G__16777.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__16777);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__16777);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__16779 = x;if(G__16779)
{var bit__4938__auto__ = (G__16779.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4938__auto__) || (G__16779.cljs$core$IReduce$))
{return true;
} else
{if((!G__16779.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__16779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__16779);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__16781 = x;if(G__16781)
{var bit__4938__auto__ = (G__16781.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__4938__auto__) || (G__16781.cljs$core$IMap$))
{return true;
} else
{if((!G__16781.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__16781);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__16781);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__16783 = x;if(G__16783)
{var bit__4938__auto__ = (G__16783.cljs$lang$protocol_mask$partition0$ & (16384));if((bit__4938__auto__) || (G__16783.cljs$core$IVector$))
{return true;
} else
{if((!G__16783.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__16783);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__16783);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__16785 = x;if(G__16785)
{var bit__4931__auto__ = (G__16785.cljs$lang$protocol_mask$partition1$ & (512));if((bit__4931__auto__) || (G__16785.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj16791 = {};return obj16791;
});
var js_obj__1 = (function() { 
var G__16794__delegate = function (keyvals){var G__16792 = goog.object.create;var G__16793 = keyvals;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__16792,G__16793) : cljs.core.apply.call(null,G__16792,G__16793));
};
var G__16794 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16794__delegate.call(this,keyvals);};
G__16794.cljs$lang$maxFixedArity = 0;
G__16794.cljs$lang$applyTo = (function (arglist__16795){
var keyvals = cljs.core.seq(arglist__16795);
return G__16794__delegate(keyvals);
});
G__16794.cljs$core$IFn$_invoke$arity$variadic = G__16794__delegate;
return G__16794;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];var G__16798_16800 = obj;var G__16799_16801 = ((function (G__16798_16800,keys){
return (function (val,key,obj__$1){return keys.push(key);
});})(G__16798_16800,keys))
;goog.object.forEach(G__16798_16800,G__16799_16801);
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__16802 = (i__$1 + (1));
var G__16803 = (j__$1 + (1));
var G__16804 = (len__$1 - (1));
i__$1 = G__16802;
j__$1 = G__16803;
len__$1 = G__16804;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - (1)));var j__$1 = (j + (len - (1)));var len__$1 = len;while(true){
if((len__$1 === (0)))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__16805 = (i__$1 - (1));
var G__16806 = (j__$1 - (1));
var G__16807 = (len__$1 - (1));
i__$1 = G__16805;
j__$1 = G__16806;
len__$1 = G__16807;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj16809 = {};return obj16809;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__16811 = s;if(G__16811)
{var bit__4938__auto__ = (G__16811.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4938__auto__) || (G__16811.cljs$core$ISeq$))
{return true;
} else
{if((!G__16811.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16811);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__16811);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__16813 = s;if(G__16813)
{var bit__4938__auto__ = (G__16813.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4938__auto__) || (G__16813.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16813.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16813);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__16813);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__4275__auto__ = cljs.core.fn_QMARK_(f);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var G__16817 = f;if(G__16817)
{var bit__4938__auto__ = (G__16817.cljs$lang$protocol_mask$partition0$ & (1));if((bit__4938__auto__) || (G__16817.cljs$core$IFn$))
{return true;
} else
{if((!G__16817.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__16817);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__16817);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (cljs.core.not((function (){var G__16830 = n;return isNaN(G__16830);
})())) && (!((n === Infinity))) && (((function (){var G__16831 = n;return parseFloat(G__16831);
})() === (function (){var G__16832 = n;var G__16833 = (10);return parseInt(G__16832,G__16833);
})()));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__16834__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([x,y], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__16835 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__16836 = etc;
s = G__16835;
xs = G__16836;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__16834 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16834__delegate.call(this,x,y,more);};
G__16834.cljs$lang$maxFixedArity = 2;
G__16834.cljs$lang$applyTo = (function (arglist__16837){
var x = cljs.core.first(arglist__16837);
arglist__16837 = cljs.core.next(arglist__16837);
var y = cljs.core.first(arglist__16837);
var more = cljs.core.rest(arglist__16837);
return G__16834__delegate(x,y,more);
});
G__16834.cljs$core$IFn$_invoke$arity$variadic = G__16834__delegate;
return G__16834;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__4275__auto__ = cljs.core.seq(coll);if(or__4275__auto__)
{return or__4275__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return (0);
} else
{if((x == null))
{return (-1);
} else
{if((y == null))
{return (1);
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__16841 = x;if(G__16841)
{var bit__4931__auto__ = (G__16841.cljs$lang$protocol_mask$partition1$ & (2048));if((bit__4931__auto__) || (G__16841.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else
{var G__16842 = x;var G__16843 = y;return goog.array.defaultCompare(G__16842,G__16843);
}
} else
{throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count(xs);var yl = cljs.core.count(ys);if((xl < yl))
{return (-1);
} else
{if((xl > yl))
{return (1);
} else
{return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));if(((d === (0))) && (((n + (1)) < len)))
{{
var G__16848 = xs;
var G__16849 = ys;
var G__16850 = len;
var G__16851 = (n + (1));
xs = G__16848;
ys = G__16849;
len = G__16850;
n = G__16851;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = (function (){var G__16856 = x;var G__16857 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16856,G__16857) : f.call(null,G__16856,G__16857));
})();if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__16858 = y;var G__16859 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16858,G__16859) : f.call(null,G__16858,G__16859));
})()))
{return (1);
} else
{return (0);
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq(coll))
{var a = (function (){var G__16865 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__16865) : cljs.core.to_array.call(null,G__16865));
})();var G__16866_16868 = a;var G__16867_16869 = cljs.core.fn__GT_comparator(comp);goog.array.stableSort(G__16866_16868,G__16867_16869);
return cljs.core.seq(a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(function (){var G__16875 = x;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__16875) : keyfn.call(null,G__16875));
})(),(function (){var G__16876 = y;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__16876) : keyfn.call(null,G__16876));
})());
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;var G__16882 = f;var G__16883 = cljs.core.first(s);var G__16884 = cljs.core.next(s);return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__16882,G__16883,G__16884) : cljs.core.reduce.call(null,G__16882,G__16883,G__16884));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (function (){var G__16885 = val__$1;var G__16886 = cljs.core.first(coll__$1);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16885,G__16886) : f.call(null,G__16885,G__16886));
})();if(cljs.core.reduced_QMARK_(nval))
{return cljs.core.deref(nval);
} else
{{
var G__16887 = nval;
var G__16888 = cljs.core.next(coll__$1);
val__$1 = G__16887;
coll__$1 = G__16888;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = (function (){var G__16892 = coll;return (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(G__16892) : cljs.core.to_array.call(null,G__16892));
})();var G__16893_16895 = a;goog.array.shuffle(G__16893_16895);
var G__16894 = a;return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(G__16894) : cljs.core.vec.call(null,G__16894));
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__16898 = coll;if(G__16898)
{var bit__4931__auto__ = (G__16898.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4931__auto__) || (G__16898.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__16899 = coll;if(G__16899)
{var bit__4931__auto__ = (G__16899.cljs$lang$protocol_mask$partition0$ & (524288));if((bit__4931__auto__) || (G__16899.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce(coll,f,init);
} else
{return init;
}
});
cljs.core.identity = (function identity(x){return x;
});
cljs.core.completing = (function() {
var completing = null;
var completing__1 = (function (f){return completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var completing__2 = (function (f,cf){return (function() {
var G__16908 = null;
var G__16908__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__16908__1 = (function (x){var G__16905 = x;return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(G__16905) : cf.call(null,G__16905));
});
var G__16908__2 = (function (x,y){var G__16906 = x;var G__16907 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16906,G__16907) : f.call(null,G__16906,G__16907));
});
G__16908 = function(x,y){
switch(arguments.length){
case 0:
return G__16908__0.call(this);
case 1:
return G__16908__1.call(this,x);
case 2:
return G__16908__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16908.cljs$core$IFn$_invoke$arity$0 = G__16908__0;
G__16908.cljs$core$IFn$_invoke$arity$1 = G__16908__1;
G__16908.cljs$core$IFn$_invoke$arity$2 = G__16908__2;
return G__16908;
})()
});
completing = function(f,cf){
switch(arguments.length){
case 1:
return completing__1.call(this,f);
case 2:
return completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
completing.cljs$core$IFn$_invoke$arity$1 = completing__1;
completing.cljs$core$IFn$_invoke$arity$2 = completing__2;
return completing;
})()
;
/**
* reduce with a transformation of f (xf). If init is not
* supplied, (f) will be called to produce it. f should be a reducing
* step function that accepts both 1 and 2 arguments, if it accepts
* only 2 you can add the arity-1 with 'completing'. Returns the result
* of applying (the transformed) xf to init and the first item in coll,
* then applying xf to that result and the 2nd item, etc. If coll
* contains no items, returns init and f is not called. Note that
* certain transforms may inject or skip items.
*/
cljs.core.transduce = (function() {
var transduce = null;
var transduce__3 = (function (xform,f,coll){return transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),coll);
});
var transduce__4 = (function (xform,f,init,coll){var f__$1 = (function (){var G__16915 = f;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__16915) : xform.call(null,G__16915));
})();var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);var G__16916 = ret;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__16916) : f__$1.call(null,G__16916));
});
transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return transduce__3.call(this,xform,f,init);
case 4:
return transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transduce.cljs$core$IFn$_invoke$arity$3 = transduce__3;
transduce.cljs$core$IFn$_invoke$arity$4 = transduce__4;
return transduce;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return (0);
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__16917__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__16917 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16917__delegate.call(this,x,y,more);};
G__16917.cljs$lang$maxFixedArity = 2;
G__16917.cljs$lang$applyTo = (function (arglist__16918){
var x = cljs.core.first(arglist__16918);
arglist__16918 = cljs.core.next(arglist__16918);
var y = cljs.core.first(arglist__16918);
var more = cljs.core.rest(arglist__16918);
return G__16917__delegate(x,y,more);
});
G__16917.cljs$core$IFn$_invoke$arity$variadic = G__16917__delegate;
return G__16917;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__16919__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__16919 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16919__delegate.call(this,x,y,more);};
G__16919.cljs$lang$maxFixedArity = 2;
G__16919.cljs$lang$applyTo = (function (arglist__16920){
var x = cljs.core.first(arglist__16920);
arglist__16920 = cljs.core.next(arglist__16920);
var y = cljs.core.first(arglist__16920);
var more = cljs.core.rest(arglist__16920);
return G__16919__delegate(x,y,more);
});
G__16919.cljs$core$IFn$_invoke$arity$variadic = G__16919__delegate;
return G__16919;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return (1);
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__16921__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__16921 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16921__delegate.call(this,x,y,more);};
G__16921.cljs$lang$maxFixedArity = 2;
G__16921.cljs$lang$applyTo = (function (arglist__16922){
var x = cljs.core.first(arglist__16922);
arglist__16922 = cljs.core.next(arglist__16922);
var y = cljs.core.first(arglist__16922);
var more = cljs.core.rest(arglist__16922);
return G__16921__delegate(x,y,more);
});
G__16921.cljs$core$IFn$_invoke$arity$variadic = G__16921__delegate;
return G__16921;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__16927__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__16927 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16927__delegate.call(this,x,y,more);};
G__16927.cljs$lang$maxFixedArity = 2;
G__16927.cljs$lang$applyTo = (function (arglist__16928){
var x = cljs.core.first(arglist__16928);
arglist__16928 = cljs.core.next(arglist__16928);
var y = cljs.core.first(arglist__16928);
var more = cljs.core.rest(arglist__16928);
return G__16927__delegate(x,y,more);
});
G__16927.cljs$core$IFn$_invoke$arity$variadic = G__16927__delegate;
return G__16927;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__16929__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__16930 = y;
var G__16931 = cljs.core.first(more);
var G__16932 = cljs.core.next(more);
x = G__16930;
y = G__16931;
more = G__16932;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__16929 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16929__delegate.call(this,x,y,more);};
G__16929.cljs$lang$maxFixedArity = 2;
G__16929.cljs$lang$applyTo = (function (arglist__16933){
var x = cljs.core.first(arglist__16933);
arglist__16933 = cljs.core.next(arglist__16933);
var y = cljs.core.first(arglist__16933);
var more = cljs.core.rest(arglist__16933);
return G__16929__delegate(x,y,more);
});
G__16929.cljs$core$IFn$_invoke$arity$variadic = G__16929__delegate;
return G__16929;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__16934__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__16935 = y;
var G__16936 = cljs.core.first(more);
var G__16937 = cljs.core.next(more);
x = G__16935;
y = G__16936;
more = G__16937;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__16934 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16934__delegate.call(this,x,y,more);};
G__16934.cljs$lang$maxFixedArity = 2;
G__16934.cljs$lang$applyTo = (function (arglist__16938){
var x = cljs.core.first(arglist__16938);
arglist__16938 = cljs.core.next(arglist__16938);
var y = cljs.core.first(arglist__16938);
var more = cljs.core.rest(arglist__16938);
return G__16934__delegate(x,y,more);
});
G__16934.cljs$core$IFn$_invoke$arity$variadic = G__16934__delegate;
return G__16934;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__16939__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__16940 = y;
var G__16941 = cljs.core.first(more);
var G__16942 = cljs.core.next(more);
x = G__16940;
y = G__16941;
more = G__16942;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__16939 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16939__delegate.call(this,x,y,more);};
G__16939.cljs$lang$maxFixedArity = 2;
G__16939.cljs$lang$applyTo = (function (arglist__16943){
var x = cljs.core.first(arglist__16943);
arglist__16943 = cljs.core.next(arglist__16943);
var y = cljs.core.first(arglist__16943);
var more = cljs.core.rest(arglist__16943);
return G__16939__delegate(x,y,more);
});
G__16939.cljs$core$IFn$_invoke$arity$variadic = G__16939__delegate;
return G__16939;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__16944__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__16945 = y;
var G__16946 = cljs.core.first(more);
var G__16947 = cljs.core.next(more);
x = G__16945;
y = G__16946;
more = G__16947;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__16944 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16944__delegate.call(this,x,y,more);};
G__16944.cljs$lang$maxFixedArity = 2;
G__16944.cljs$lang$applyTo = (function (arglist__16948){
var x = cljs.core.first(arglist__16948);
arglist__16948 = cljs.core.next(arglist__16948);
var y = cljs.core.first(arglist__16948);
var more = cljs.core.rest(arglist__16948);
return G__16944__delegate(x,y,more);
});
G__16944.cljs$core$IFn$_invoke$arity$variadic = G__16944__delegate;
return G__16944;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - (1));
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__4582__auto__ = x;var y__4583__auto__ = y;return ((x__4582__auto__ > y__4583__auto__) ? x__4582__auto__ : y__4583__auto__);
});
var max__3 = (function() { 
var G__16949__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__4582__auto__ = x;var y__4583__auto__ = y;return ((x__4582__auto__ > y__4583__auto__) ? x__4582__auto__ : y__4583__auto__);
})(),more);
};
var G__16949 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16949__delegate.call(this,x,y,more);};
G__16949.cljs$lang$maxFixedArity = 2;
G__16949.cljs$lang$applyTo = (function (arglist__16950){
var x = cljs.core.first(arglist__16950);
arglist__16950 = cljs.core.next(arglist__16950);
var y = cljs.core.first(arglist__16950);
var more = cljs.core.rest(arglist__16950);
return G__16949__delegate(x,y,more);
});
G__16949.cljs$core$IFn$_invoke$arity$variadic = G__16949__delegate;
return G__16949;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__4589__auto__ = x;var y__4590__auto__ = y;return ((x__4589__auto__ < y__4590__auto__) ? x__4589__auto__ : y__4590__auto__);
});
var min__3 = (function() { 
var G__16951__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__4589__auto__ = x;var y__4590__auto__ = y;return ((x__4589__auto__ < y__4590__auto__) ? x__4589__auto__ : y__4590__auto__);
})(),more);
};
var G__16951 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16951__delegate.call(this,x,y,more);};
G__16951.cljs$lang$maxFixedArity = 2;
G__16951.cljs$lang$applyTo = (function (arglist__16952){
var x = cljs.core.first(arglist__16952);
arglist__16952 = cljs.core.next(arglist__16952);
var y = cljs.core.first(arglist__16952);
var more = cljs.core.rest(arglist__16952);
return G__16951__delegate(x,y,more);
});
G__16951.cljs$core$IFn$_invoke$arity$variadic = G__16951__delegate;
return G__16951;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === (1))))
{return x;
} else
{throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return (0);
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__16953__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__16953 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16953__delegate.call(this,x,y,more);};
G__16953.cljs$lang$maxFixedArity = 2;
G__16953.cljs$lang$applyTo = (function (arglist__16954){
var x = cljs.core.first(arglist__16954);
arglist__16954 = cljs.core.next(arglist__16954);
var y = cljs.core.first(arglist__16954);
var more = cljs.core.rest(arglist__16954);
return G__16953__delegate(x,y,more);
});
G__16953.cljs$core$IFn$_invoke$arity$variadic = G__16953__delegate;
return G__16953;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return (0);
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__16955__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__16955 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16955__delegate.call(this,x,y,more);};
G__16955.cljs$lang$maxFixedArity = 2;
G__16955.cljs$lang$applyTo = (function (arglist__16956){
var x = cljs.core.first(arglist__16956);
arglist__16956 = cljs.core.next(arglist__16956);
var y = cljs.core.first(arglist__16956);
var more = cljs.core.rest(arglist__16956);
return G__16955__delegate(x,y,more);
});
G__16955.cljs$core$IFn$_invoke$arity$variadic = G__16955__delegate;
return G__16955;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - (1));
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - (1));
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__16961__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__16961 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16961__delegate.call(this,x,y,more);};
G__16961.cljs$lang$maxFixedArity = 2;
G__16961.cljs$lang$applyTo = (function (arglist__16962){
var x = cljs.core.first(arglist__16962);
arglist__16962 = cljs.core.next(arglist__16962);
var y = cljs.core.first(arglist__16962);
var more = cljs.core.rest(arglist__16962);
return G__16961__delegate(x,y,more);
});
G__16961.cljs$core$IFn$_invoke$arity$variadic = G__16961__delegate;
return G__16961;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + (1));
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + (1));
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return (1);
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__16963__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__16963 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16963__delegate.call(this,x,y,more);};
G__16963.cljs$lang$maxFixedArity = 2;
G__16963.cljs$lang$applyTo = (function (arglist__16964){
var x = cljs.core.first(arglist__16964);
arglist__16964 = cljs.core.next(arglist__16964);
var y = cljs.core.first(arglist__16964);
var more = cljs.core.rest(arglist__16964);
return G__16963__delegate(x,y,more);
});
G__16963.cljs$core$IFn$_invoke$arity$variadic = G__16963__delegate;
return G__16963;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return (1);
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__16965__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__16965 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16965__delegate.call(this,x,y,more);};
G__16965.cljs$lang$maxFixedArity = 2;
G__16965.cljs$lang$applyTo = (function (arglist__16966){
var x = cljs.core.first(arglist__16966);
arglist__16966 = cljs.core.next(arglist__16966);
var y = cljs.core.first(arglist__16966);
var more = cljs.core.rest(arglist__16966);
return G__16965__delegate(x,y,more);
});
G__16965.cljs$core$IFn$_invoke$arity$variadic = G__16965__delegate;
return G__16965;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){var G__16969 = x;var G__16970 = n;return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(G__16969,G__16970) : cljs.core.mod.call(null,G__16969,G__16970));
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract = (function() {
var unchecked_subtract = null;
var unchecked_subtract__1 = (function (x){return (- x);
});
var unchecked_subtract__2 = (function (x,y){return (x - y);
});
var unchecked_subtract__3 = (function() { 
var G__16971__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract,(x - y),more);
};
var G__16971 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16971__delegate.call(this,x,y,more);};
G__16971.cljs$lang$maxFixedArity = 2;
G__16971.cljs$lang$applyTo = (function (arglist__16972){
var x = cljs.core.first(arglist__16972);
arglist__16972 = cljs.core.next(arglist__16972);
var y = cljs.core.first(arglist__16972);
var more = cljs.core.rest(arglist__16972);
return G__16971__delegate(x,y,more);
});
G__16971.cljs$core$IFn$_invoke$arity$variadic = G__16971__delegate;
return G__16971;
})()
;
unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract__1.call(this,x);
case 2:
return unchecked_subtract__2.call(this,x,y);
default:
return unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract.cljs$lang$maxFixedArity = 2;
unchecked_subtract.cljs$lang$applyTo = unchecked_subtract__3.cljs$lang$applyTo;
unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract__1;
unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract__2;
unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_subtract_int = (function() {
var unchecked_subtract_int = null;
var unchecked_subtract_int__1 = (function (x){return (- x);
});
var unchecked_subtract_int__2 = (function (x,y){return (x - y);
});
var unchecked_subtract_int__3 = (function() { 
var G__16973__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_subtract_int,(x - y),more);
};
var G__16973 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16973__delegate.call(this,x,y,more);};
G__16973.cljs$lang$maxFixedArity = 2;
G__16973.cljs$lang$applyTo = (function (arglist__16974){
var x = cljs.core.first(arglist__16974);
arglist__16974 = cljs.core.next(arglist__16974);
var y = cljs.core.first(arglist__16974);
var more = cljs.core.rest(arglist__16974);
return G__16973__delegate(x,y,more);
});
G__16973.cljs$core$IFn$_invoke$arity$variadic = G__16973__delegate;
return G__16973;
})()
;
unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_subtract_int__1.call(this,x);
case 2:
return unchecked_subtract_int__2.call(this,x,y);
default:
return unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
unchecked_subtract_int.cljs$lang$applyTo = unchecked_subtract_int__3.cljs$lang$applyTo;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_subtract_int__1;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_subtract_int__2;
unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_subtract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= (0)))
{var G__16977 = q;return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__16977) : Math.floor.call(null,G__16977));
} else
{var G__16978 = q;return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__16978) : Math.ceil.call(null,G__16978));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | (0));
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix(x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot(n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){return (n * rand.cljs$core$IFn$_invoke$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> (1)) & (1431655765)));var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__16983__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__16984 = y;
var G__16985 = cljs.core.first(more);
var G__16986 = cljs.core.next(more);
x = G__16984;
y = G__16985;
more = G__16986;
continue;
}
} else
{return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__16983 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16983__delegate.call(this,x,y,more);};
G__16983.cljs$lang$maxFixedArity = 2;
G__16983.cljs$lang$applyTo = (function (arglist__16987){
var x = cljs.core.first(arglist__16987);
arglist__16987 = cljs.core.next(arglist__16987);
var y = cljs.core.first(arglist__16987);
var more = cljs.core.rest(arglist__16987);
return G__16983__delegate(x,y,more);
});
G__16983.cljs$core$IFn$_invoke$arity$variadic = G__16983__delegate;
return G__16983;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > (0));
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === (0));
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < (0));
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq(coll);while(true){
if((xs) && ((n__$1 > (0))))
{{
var G__16988 = (n__$1 - (1));
var G__16989 = cljs.core.next(xs);
n__$1 = G__16988;
xs = G__16989;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return ''+x;
}
});
var str__2 = (function() { 
var G__16992__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__16993 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__16994 = cljs.core.next(more);
sb = G__16993;
more = G__16994;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__16992 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__16992__delegate.call(this,x,ys);};
G__16992.cljs$lang$maxFixedArity = 1;
G__16992.cljs$lang$applyTo = (function (arglist__16995){
var x = cljs.core.first(arglist__16995);
var ys = cljs.core.rest(arglist__16995);
return G__16992__delegate(x,ys);
});
G__16992.cljs$core$IFn$_invoke$arity$variadic = G__16992__delegate;
return G__16992;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__16996 = cljs.core.next(xs);
var G__16997 = cljs.core.next(ys);
xs = G__16996;
ys = G__16997;
continue;
}
} else
{return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq(coll))
{var res = cljs.core.hash(cljs.core.first(coll));var s = cljs.core.next(coll);while(true){
if((s == null))
{return res;
} else
{{
var G__16998 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__16999 = cljs.core.next(s);
res = G__16998;
s = G__16999;
continue;
}
}
break;
}
} else
{return (0);
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = (0);var s = cljs.core.seq(m);while(true){
if(s)
{var e = cljs.core.first(s);{
var G__17004 = ((h + (cljs.core.hash((function (){var G__17002 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__17002) : cljs.core.key.call(null,G__17002));
})()) ^ cljs.core.hash((function (){var G__17003 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__17003) : cljs.core.val.call(null,G__17003));
})()))) % (4503599627370496));
var G__17005 = cljs.core.next(s);
h = G__17004;
s = G__17005;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = (0);var s__$1 = cljs.core.seq(s);while(true){
if(s__$1)
{var e = cljs.core.first(s__$1);{
var G__17006 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__17007 = cljs.core.next(s__$1);
h = G__17006;
s__$1 = G__17007;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__17018_17028 = cljs.core.seq(fn_map);var chunk__17019_17029 = null;var count__17020_17030 = (0);var i__17021_17031 = (0);while(true){
if((i__17021_17031 < count__17020_17030))
{var vec__17022_17032 = chunk__17019_17029.cljs$core$IIndexed$_nth$arity$2(null,i__17021_17031);var key_name_17033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17022_17032,(0),null);var f_17034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17022_17032,(1),null);var str_name_17035 = (function (){var G__17023 = key_name_17033;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__17023) : cljs.core.name.call(null,G__17023));
})();(obj[str_name_17035] = f_17034);
{
var G__17036 = seq__17018_17028;
var G__17037 = chunk__17019_17029;
var G__17038 = count__17020_17030;
var G__17039 = (i__17021_17031 + (1));
seq__17018_17028 = G__17036;
chunk__17019_17029 = G__17037;
count__17020_17030 = G__17038;
i__17021_17031 = G__17039;
continue;
}
} else
{var temp__4126__auto___17040 = cljs.core.seq(seq__17018_17028);if(temp__4126__auto___17040)
{var seq__17018_17041__$1 = temp__4126__auto___17040;if(cljs.core.chunked_seq_QMARK_(seq__17018_17041__$1))
{var c__5044__auto___17042 = (function (){var G__17024 = seq__17018_17041__$1;return (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(G__17024) : cljs.core.chunk_first.call(null,G__17024));
})();{
var G__17043 = (function (){var G__17025 = seq__17018_17041__$1;return (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(G__17025) : cljs.core.chunk_rest.call(null,G__17025));
})();
var G__17044 = c__5044__auto___17042;
var G__17045 = cljs.core.count(c__5044__auto___17042);
var G__17046 = (0);
seq__17018_17028 = G__17043;
chunk__17019_17029 = G__17044;
count__17020_17030 = G__17045;
i__17021_17031 = G__17046;
continue;
}
} else
{var vec__17026_17047 = cljs.core.first(seq__17018_17041__$1);var key_name_17048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17026_17047,(0),null);var f_17049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17026_17047,(1),null);var str_name_17050 = (function (){var G__17027 = key_name_17048;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__17027) : cljs.core.name.call(null,G__17027));
})();(obj[str_name_17050] = f_17049);
{
var G__17051 = cljs.core.next(seq__17018_17041__$1);
var G__17052 = null;
var G__17053 = (0);
var G__17054 = (0);
seq__17018_17028 = G__17051;
chunk__17019_17029 = G__17052;
count__17020_17030 = G__17053;
i__17021_17031 = G__17054;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.List.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest(coll__$1);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === (1)))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.EmptyList.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (0);
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,(1),null));
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__17056 = coll;if(G__17056)
{var bit__4938__auto__ = (G__17056.cljs$lang$protocol_mask$partition0$ & (134217728));if((bit__4938__auto__) || (G__17056.cljs$core$IReversible$))
{return true;
} else
{if((!G__17056.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__17056);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__17056);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));
{
var G__17057 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__17057;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > (0)))
{{
var G__17058 = (i - (1));
var G__17059 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__17058;
r = G__17059;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__17060){
var xs = cljs.core.seq(arglist__17060);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Cons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq(self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__4275__auto__ = (coll == null);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var G__17064 = coll;if(G__17064)
{var bit__4931__auto__ = (G__17064.cljs$lang$protocol_mask$partition0$ & (64));if((bit__4931__auto__) || (G__17064.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__17066 = x;if(G__17066)
{var bit__4938__auto__ = (G__17066.cljs$lang$protocol_mask$partition0$ & (33554432));if((bit__4938__auto__) || (G__17066.cljs$core$IList$))
{return true;
} else
{if((!G__17066.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__17066);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__17066);
}
});
cljs.core.hash_keyword = (function hash_keyword(k){return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn)));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__4686__auto__ = self__._hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_keyword(this$__$1);self__._hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__17068 = null;
var G__17068__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__17068__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__17068 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__17068__2.call(this,self__,coll);
case 3:
return G__17068__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17068.cljs$core$IFn$_invoke$arity$2 = G__17068__2;
G__17068.cljs$core$IFn$_invoke$arity$3 = G__17068__3;
return G__17068;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args17067){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17067)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fqn));
});
cljs.core.Keyword.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__17070 = x;if(G__17070)
{var bit__4931__auto__ = (G__17070.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4931__auto__) || (G__17070.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(null);
} else
{throw (new Error(("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace(name),(function (){var G__17072 = name;return (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(G__17072) : cljs.core.name.call(null,G__17072));
})(),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === (2)))
{return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.LazySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = (function (){return (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
})();
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest(self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__17073 = ls.sval();
ls = G__17073;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq(self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + (1));
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= (0))) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedCons.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq(self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > (1)))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,this$__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count(chunk) === (0)))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__17075 = s;if(G__17075)
{var bit__4931__auto__ = (G__17075.cljs$lang$protocol_mask$partition1$ & (1024));if((bit__4931__auto__) || (G__17075.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq(s__$1))
{ary.push(cljs.core.first(s__$1));
{
var G__17076 = cljs.core.next(s__$1);
s__$1 = G__17076;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_17077 = (0);var xs_17078 = cljs.core.seq(coll);while(true){
if(xs_17078)
{(ret[i_17077] = cljs.core.to_array(cljs.core.first(xs_17078)));
{
var G__17079 = (i_17077 + (1));
var G__17080 = cljs.core.next(xs_17078);
i_17077 = G__17079;
xs_17078 = G__17080;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__17083 = (i + (1));
var G__17084 = cljs.core.next(s__$1);
i = G__17083;
s__$1 = G__17084;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__5144__auto___17085 = size;var i_17086 = (0);while(true){
if((i_17086 < n__5144__auto___17085))
{(a[i_17086] = init_val_or_seq);
{
var G__17087 = (i_17086 + (1));
i_17086 = G__17087;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__17090 = (i + (1));
var G__17091 = cljs.core.next(s__$1);
i = G__17090;
s__$1 = G__17091;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__5144__auto___17092 = size;var i_17093 = (0);while(true){
if((i_17093 < n__5144__auto___17092))
{(a[i_17093] = init_val_or_seq);
{
var G__17094 = (i_17093 + (1));
i_17093 = G__17094;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__17097 = (i + (1));
var G__17098 = cljs.core.next(s__$1);
i = G__17097;
s__$1 = G__17098;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__5144__auto___17099 = size;var i_17100 = (0);while(true){
if((i_17100 < n__5144__auto___17099))
{(a[i_17100] = init_val_or_seq);
{
var G__17101 = (i_17100 + (1));
i_17100 = G__17101;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = (0);var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__17104 = (i + (1));
var G__17105 = cljs.core.next(s__$1);
i = G__17104;
s__$1 = G__17105;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__5144__auto___17106 = size;var i_17107 = (0);while(true){
if((i_17107 < n__5144__auto___17106))
{(a[i_17107] = init_val_or_seq);
{
var G__17108 = (i_17107 + (1));
i_17107 = G__17108;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__$1 = s;var i = n;var sum = (0);while(true){
if(((i > (0))) && (cljs.core.seq(s__$1)))
{{
var G__17109 = cljs.core.next(s__$1);
var G__17110 = (i - (1));
var G__17111 = (sum + (1));
s__$1 = G__17109;
i = G__17110;
sum = G__17111;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));

}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq(x);if(s)
{if(cljs.core.chunked_seq_QMARK_(s))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else
{return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__17131__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_(xys__$1))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else
{return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__17131 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17131__delegate.call(this,x,y,zs);};
G__17131.cljs$lang$maxFixedArity = 2;
G__17131.cljs$lang$applyTo = (function (arglist__17132){
var x = cljs.core.first(arglist__17132);
arglist__17132 = cljs.core.next(arglist__17132);
var y = cljs.core.first(arglist__17132);
var zs = cljs.core.rest(arglist__17132);
return G__17131__delegate(x,y,zs);
});
G__17131.cljs$core$IFn$_invoke$arity$variadic = G__17131__delegate;
return G__17131;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__17133__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__17133 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__17133__delegate.call(this,a,b,c,d,more);};
G__17133.cljs$lang$maxFixedArity = 4;
G__17133.cljs$lang$applyTo = (function (arglist__17134){
var a = cljs.core.first(arglist__17134);
arglist__17134 = cljs.core.next(arglist__17134);
var b = cljs.core.first(arglist__17134);
arglist__17134 = cljs.core.next(arglist__17134);
var c = cljs.core.first(arglist__17134);
arglist__17134 = cljs.core.next(arglist__17134);
var d = cljs.core.first(arglist__17134);
var more = cljs.core.rest(arglist__17134);
return G__17133__delegate(a,b,c,d,more);
});
G__17133.cljs$core$IFn$_invoke$arity$variadic = G__17133__delegate;
return G__17133;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
/**
* Returns a new, transient version of the collection, in constant time.
*/
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient(coll);
});
/**
* Returns a new, persistent version of the transient collection, in
* constant time. The transient collection cannot be used after this
* call, any such use will throw an exception.
*/
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_(tcoll);
});
/**
* Adds x to the transient collection, and return coll. The 'addition'
* may happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj_BANG_ = (function() {
var conj_BANG_ = null;
var conj_BANG___0 = (function (){return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var conj_BANG___1 = (function (coll){return coll;
});
var conj_BANG___2 = (function (tcoll,val){return cljs.core._conj_BANG_(tcoll,val);
});
var conj_BANG___3 = (function() { 
var G__17135__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__17136 = ntcoll;
var G__17137 = cljs.core.first(vals);
var G__17138 = cljs.core.next(vals);
tcoll = G__17136;
val = G__17137;
vals = G__17138;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__17135 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17135__delegate.call(this,tcoll,val,vals);};
G__17135.cljs$lang$maxFixedArity = 2;
G__17135.cljs$lang$applyTo = (function (arglist__17139){
var tcoll = cljs.core.first(arglist__17139);
arglist__17139 = cljs.core.next(arglist__17139);
var val = cljs.core.first(arglist__17139);
var vals = cljs.core.rest(arglist__17139);
return G__17135__delegate(tcoll,val,vals);
});
G__17135.cljs$core$IFn$_invoke$arity$variadic = G__17135__delegate;
return G__17135;
})()
;
conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return conj_BANG___0.call(this);
case 1:
return conj_BANG___1.call(this,tcoll);
case 2:
return conj_BANG___2.call(this,tcoll,val);
default:
return conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_BANG_.cljs$lang$maxFixedArity = 2;
conj_BANG_.cljs$lang$applyTo = conj_BANG___3.cljs$lang$applyTo;
conj_BANG_.cljs$core$IFn$_invoke$arity$0 = conj_BANG___0;
conj_BANG_.cljs$core$IFn$_invoke$arity$1 = conj_BANG___1;
conj_BANG_.cljs$core$IFn$_invoke$arity$2 = conj_BANG___2;
conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return conj_BANG_;
})()
;
/**
* When applied to a transient map, adds mapping of key(s) to
* val(s). When applied to a transient vector, sets the val at index.
* Note - index must be <= (count vector). Returns coll.
* @param {...*} var_args
*/
cljs.core.assoc_BANG_ = (function() {
var assoc_BANG_ = null;
var assoc_BANG___3 = (function (tcoll,key,val){return cljs.core._assoc_BANG_(tcoll,key,val);
});
var assoc_BANG___4 = (function() { 
var G__17140__delegate = function (tcoll,key,val,kvs){while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);if(cljs.core.truth_(kvs))
{{
var G__17141 = ntcoll;
var G__17142 = cljs.core.first(kvs);
var G__17143 = cljs.core.second(kvs);
var G__17144 = cljs.core.nnext(kvs);
tcoll = G__17141;
key = G__17142;
val = G__17143;
kvs = G__17144;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__17140 = function (tcoll,key,val,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17140__delegate.call(this,tcoll,key,val,kvs);};
G__17140.cljs$lang$maxFixedArity = 3;
G__17140.cljs$lang$applyTo = (function (arglist__17145){
var tcoll = cljs.core.first(arglist__17145);
arglist__17145 = cljs.core.next(arglist__17145);
var key = cljs.core.first(arglist__17145);
arglist__17145 = cljs.core.next(arglist__17145);
var val = cljs.core.first(arglist__17145);
var kvs = cljs.core.rest(arglist__17145);
return G__17140__delegate(tcoll,key,val,kvs);
});
G__17140.cljs$core$IFn$_invoke$arity$variadic = G__17140__delegate;
return G__17140;
})()
;
assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc_BANG___3.call(this,tcoll,key,val);
default:
return assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc_BANG_.cljs$lang$maxFixedArity = 3;
assoc_BANG_.cljs$lang$applyTo = assoc_BANG___4.cljs$lang$applyTo;
assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = assoc_BANG___3;
assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return assoc_BANG_;
})()
;
/**
* Returns a transient map that doesn't contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc_BANG_ = (function() {
var dissoc_BANG_ = null;
var dissoc_BANG___2 = (function (tcoll,key){return cljs.core._dissoc_BANG_(tcoll,key);
});
var dissoc_BANG___3 = (function() { 
var G__17146__delegate = function (tcoll,key,ks){while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);if(cljs.core.truth_(ks))
{{
var G__17147 = ntcoll;
var G__17148 = cljs.core.first(ks);
var G__17149 = cljs.core.next(ks);
tcoll = G__17147;
key = G__17148;
ks = G__17149;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__17146 = function (tcoll,key,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17146__delegate.call(this,tcoll,key,ks);};
G__17146.cljs$lang$maxFixedArity = 2;
G__17146.cljs$lang$applyTo = (function (arglist__17150){
var tcoll = cljs.core.first(arglist__17150);
arglist__17150 = cljs.core.next(arglist__17150);
var key = cljs.core.first(arglist__17150);
var ks = cljs.core.rest(arglist__17150);
return G__17146__delegate(tcoll,key,ks);
});
G__17146.cljs$core$IFn$_invoke$arity$variadic = G__17146__delegate;
return G__17146;
})()
;
dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return dissoc_BANG___2.call(this,tcoll,key);
default:
return dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc_BANG_.cljs$lang$maxFixedArity = 2;
dissoc_BANG_.cljs$lang$applyTo = dissoc_BANG___3.cljs$lang$applyTo;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = dissoc_BANG___2;
dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc_BANG_;
})()
;
/**
* Removes the last item from a transient vector. If
* the collection is empty, throws an exception. Returns coll
*/
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_(tcoll);
});
/**
* disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj_BANG_ = (function() {
var disj_BANG_ = null;
var disj_BANG___2 = (function (tcoll,val){return cljs.core._disjoin_BANG_(tcoll,val);
});
var disj_BANG___3 = (function() { 
var G__17151__delegate = function (tcoll,val,vals){while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);if(cljs.core.truth_(vals))
{{
var G__17152 = ntcoll;
var G__17153 = cljs.core.first(vals);
var G__17154 = cljs.core.next(vals);
tcoll = G__17152;
val = G__17153;
vals = G__17154;
continue;
}
} else
{return ntcoll;
}
break;
}
};
var G__17151 = function (tcoll,val,var_args){
var vals = null;if (arguments.length > 2) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17151__delegate.call(this,tcoll,val,vals);};
G__17151.cljs$lang$maxFixedArity = 2;
G__17151.cljs$lang$applyTo = (function (arglist__17155){
var tcoll = cljs.core.first(arglist__17155);
arglist__17155 = cljs.core.next(arglist__17155);
var val = cljs.core.first(arglist__17155);
var vals = cljs.core.rest(arglist__17155);
return G__17151__delegate(tcoll,val,vals);
});
G__17151.cljs$core$IFn$_invoke$arity$variadic = G__17151__delegate;
return G__17151;
})()
;
disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return disj_BANG___2.call(this,tcoll,val);
default:
return disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj_BANG_.cljs$lang$maxFixedArity = 2;
disj_BANG_.cljs$lang$applyTo = disj_BANG___3.cljs$lang$applyTo;
disj_BANG_.cljs$core$IFn$_invoke$arity$2 = disj_BANG___2;
disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return disj_BANG_;
})()
;
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq(args);if((argc === (0)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var a5188 = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === (1)))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a5188);
} else
{var G__17366 = a5188;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17366) : f.call(null,G__17366));
}
} else
{var b5189 = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === (2)))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a5188,b5189);
} else
{var G__17367 = a5188;var G__17368 = b5189;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17367,G__17368) : f.call(null,G__17367,G__17368));
}
} else
{var c5190 = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === (3)))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a5188,b5189,c5190);
} else
{var G__17369 = a5188;var G__17370 = b5189;var G__17371 = c5190;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17369,G__17370,G__17371) : f.call(null,G__17369,G__17370,G__17371));
}
} else
{var d5191 = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === (4)))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a5188,b5189,c5190,d5191);
} else
{var G__17372 = a5188;var G__17373 = b5189;var G__17374 = c5190;var G__17375 = d5191;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17372,G__17373,G__17374,G__17375) : f.call(null,G__17372,G__17373,G__17374,G__17375));
}
} else
{var e5192 = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === (5)))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a5188,b5189,c5190,d5191,e5192);
} else
{var G__17376 = a5188;var G__17377 = b5189;var G__17378 = c5190;var G__17379 = d5191;var G__17380 = e5192;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__17376,G__17377,G__17378,G__17379,G__17380) : f.call(null,G__17376,G__17377,G__17378,G__17379,G__17380));
}
} else
{var f5193 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === (6)))
{if(f.cljs$core$IFn$_invoke$arity$6)
{return f.cljs$core$IFn$_invoke$arity$6(a5188,b5189,c5190,d5191,e5192,f5193);
} else
{var G__17381 = a5188;var G__17382 = b5189;var G__17383 = c5190;var G__17384 = d5191;var G__17385 = e5192;var G__17386 = f5193;return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__17381,G__17382,G__17383,G__17384,G__17385,G__17386) : f.call(null,G__17381,G__17382,G__17383,G__17384,G__17385,G__17386));
}
} else
{var g5194 = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === (7)))
{if(f.cljs$core$IFn$_invoke$arity$7)
{return f.cljs$core$IFn$_invoke$arity$7(a5188,b5189,c5190,d5191,e5192,f5193,g5194);
} else
{var G__17387 = a5188;var G__17388 = b5189;var G__17389 = c5190;var G__17390 = d5191;var G__17391 = e5192;var G__17392 = f5193;var G__17393 = g5194;return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__17387,G__17388,G__17389,G__17390,G__17391,G__17392,G__17393) : f.call(null,G__17387,G__17388,G__17389,G__17390,G__17391,G__17392,G__17393));
}
} else
{var h5195 = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === (8)))
{if(f.cljs$core$IFn$_invoke$arity$8)
{return f.cljs$core$IFn$_invoke$arity$8(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195);
} else
{var G__17394 = a5188;var G__17395 = b5189;var G__17396 = c5190;var G__17397 = d5191;var G__17398 = e5192;var G__17399 = f5193;var G__17400 = g5194;var G__17401 = h5195;return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__17394,G__17395,G__17396,G__17397,G__17398,G__17399,G__17400,G__17401) : f.call(null,G__17394,G__17395,G__17396,G__17397,G__17398,G__17399,G__17400,G__17401));
}
} else
{var i5196 = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === (9)))
{if(f.cljs$core$IFn$_invoke$arity$9)
{return f.cljs$core$IFn$_invoke$arity$9(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196);
} else
{var G__17402 = a5188;var G__17403 = b5189;var G__17404 = c5190;var G__17405 = d5191;var G__17406 = e5192;var G__17407 = f5193;var G__17408 = g5194;var G__17409 = h5195;var G__17410 = i5196;return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__17402,G__17403,G__17404,G__17405,G__17406,G__17407,G__17408,G__17409,G__17410) : f.call(null,G__17402,G__17403,G__17404,G__17405,G__17406,G__17407,G__17408,G__17409,G__17410));
}
} else
{var j5197 = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === (10)))
{if(f.cljs$core$IFn$_invoke$arity$10)
{return f.cljs$core$IFn$_invoke$arity$10(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197);
} else
{var G__17411 = a5188;var G__17412 = b5189;var G__17413 = c5190;var G__17414 = d5191;var G__17415 = e5192;var G__17416 = f5193;var G__17417 = g5194;var G__17418 = h5195;var G__17419 = i5196;var G__17420 = j5197;return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__17411,G__17412,G__17413,G__17414,G__17415,G__17416,G__17417,G__17418,G__17419,G__17420) : f.call(null,G__17411,G__17412,G__17413,G__17414,G__17415,G__17416,G__17417,G__17418,G__17419,G__17420));
}
} else
{var k5198 = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === (11)))
{if(f.cljs$core$IFn$_invoke$arity$11)
{return f.cljs$core$IFn$_invoke$arity$11(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198);
} else
{var G__17421 = a5188;var G__17422 = b5189;var G__17423 = c5190;var G__17424 = d5191;var G__17425 = e5192;var G__17426 = f5193;var G__17427 = g5194;var G__17428 = h5195;var G__17429 = i5196;var G__17430 = j5197;var G__17431 = k5198;return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__17421,G__17422,G__17423,G__17424,G__17425,G__17426,G__17427,G__17428,G__17429,G__17430,G__17431) : f.call(null,G__17421,G__17422,G__17423,G__17424,G__17425,G__17426,G__17427,G__17428,G__17429,G__17430,G__17431));
}
} else
{var l5199 = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === (12)))
{if(f.cljs$core$IFn$_invoke$arity$12)
{return f.cljs$core$IFn$_invoke$arity$12(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199);
} else
{var G__17432 = a5188;var G__17433 = b5189;var G__17434 = c5190;var G__17435 = d5191;var G__17436 = e5192;var G__17437 = f5193;var G__17438 = g5194;var G__17439 = h5195;var G__17440 = i5196;var G__17441 = j5197;var G__17442 = k5198;var G__17443 = l5199;return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,G__17443) : f.call(null,G__17432,G__17433,G__17434,G__17435,G__17436,G__17437,G__17438,G__17439,G__17440,G__17441,G__17442,G__17443));
}
} else
{var m5200 = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === (13)))
{if(f.cljs$core$IFn$_invoke$arity$13)
{return f.cljs$core$IFn$_invoke$arity$13(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200);
} else
{var G__17444 = a5188;var G__17445 = b5189;var G__17446 = c5190;var G__17447 = d5191;var G__17448 = e5192;var G__17449 = f5193;var G__17450 = g5194;var G__17451 = h5195;var G__17452 = i5196;var G__17453 = j5197;var G__17454 = k5198;var G__17455 = l5199;var G__17456 = m5200;return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__17444,G__17445,G__17446,G__17447,G__17448,G__17449,G__17450,G__17451,G__17452,G__17453,G__17454,G__17455,G__17456) : f.call(null,G__17444,G__17445,G__17446,G__17447,G__17448,G__17449,G__17450,G__17451,G__17452,G__17453,G__17454,G__17455,G__17456));
}
} else
{var n5201 = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === (14)))
{if(f.cljs$core$IFn$_invoke$arity$14)
{return f.cljs$core$IFn$_invoke$arity$14(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200,n5201);
} else
{var G__17457 = a5188;var G__17458 = b5189;var G__17459 = c5190;var G__17460 = d5191;var G__17461 = e5192;var G__17462 = f5193;var G__17463 = g5194;var G__17464 = h5195;var G__17465 = i5196;var G__17466 = j5197;var G__17467 = k5198;var G__17468 = l5199;var G__17469 = m5200;var G__17470 = n5201;return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__17457,G__17458,G__17459,G__17460,G__17461,G__17462,G__17463,G__17464,G__17465,G__17466,G__17467,G__17468,G__17469,G__17470) : f.call(null,G__17457,G__17458,G__17459,G__17460,G__17461,G__17462,G__17463,G__17464,G__17465,G__17466,G__17467,G__17468,G__17469,G__17470));
}
} else
{var o5202 = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === (15)))
{if(f.cljs$core$IFn$_invoke$arity$15)
{return f.cljs$core$IFn$_invoke$arity$15(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200,n5201,o5202);
} else
{var G__17471 = a5188;var G__17472 = b5189;var G__17473 = c5190;var G__17474 = d5191;var G__17475 = e5192;var G__17476 = f5193;var G__17477 = g5194;var G__17478 = h5195;var G__17479 = i5196;var G__17480 = j5197;var G__17481 = k5198;var G__17482 = l5199;var G__17483 = m5200;var G__17484 = n5201;var G__17485 = o5202;return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__17471,G__17472,G__17473,G__17474,G__17475,G__17476,G__17477,G__17478,G__17479,G__17480,G__17481,G__17482,G__17483,G__17484,G__17485) : f.call(null,G__17471,G__17472,G__17473,G__17474,G__17475,G__17476,G__17477,G__17478,G__17479,G__17480,G__17481,G__17482,G__17483,G__17484,G__17485));
}
} else
{var p5203 = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === (16)))
{if(f.cljs$core$IFn$_invoke$arity$16)
{return f.cljs$core$IFn$_invoke$arity$16(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200,n5201,o5202,p5203);
} else
{var G__17486 = a5188;var G__17487 = b5189;var G__17488 = c5190;var G__17489 = d5191;var G__17490 = e5192;var G__17491 = f5193;var G__17492 = g5194;var G__17493 = h5195;var G__17494 = i5196;var G__17495 = j5197;var G__17496 = k5198;var G__17497 = l5199;var G__17498 = m5200;var G__17499 = n5201;var G__17500 = o5202;var G__17501 = p5203;return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__17486,G__17487,G__17488,G__17489,G__17490,G__17491,G__17492,G__17493,G__17494,G__17495,G__17496,G__17497,G__17498,G__17499,G__17500,G__17501) : f.call(null,G__17486,G__17487,G__17488,G__17489,G__17490,G__17491,G__17492,G__17493,G__17494,G__17495,G__17496,G__17497,G__17498,G__17499,G__17500,G__17501));
}
} else
{var q5204 = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === (17)))
{if(f.cljs$core$IFn$_invoke$arity$17)
{return f.cljs$core$IFn$_invoke$arity$17(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200,n5201,o5202,p5203,q5204);
} else
{var G__17502 = a5188;var G__17503 = b5189;var G__17504 = c5190;var G__17505 = d5191;var G__17506 = e5192;var G__17507 = f5193;var G__17508 = g5194;var G__17509 = h5195;var G__17510 = i5196;var G__17511 = j5197;var G__17512 = k5198;var G__17513 = l5199;var G__17514 = m5200;var G__17515 = n5201;var G__17516 = o5202;var G__17517 = p5203;var G__17518 = q5204;return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__17502,G__17503,G__17504,G__17505,G__17506,G__17507,G__17508,G__17509,G__17510,G__17511,G__17512,G__17513,G__17514,G__17515,G__17516,G__17517,G__17518) : f.call(null,G__17502,G__17503,G__17504,G__17505,G__17506,G__17507,G__17508,G__17509,G__17510,G__17511,G__17512,G__17513,G__17514,G__17515,G__17516,G__17517,G__17518));
}
} else
{var r5205 = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === (18)))
{if(f.cljs$core$IFn$_invoke$arity$18)
{return f.cljs$core$IFn$_invoke$arity$18(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200,n5201,o5202,p5203,q5204,r5205);
} else
{var G__17519 = a5188;var G__17520 = b5189;var G__17521 = c5190;var G__17522 = d5191;var G__17523 = e5192;var G__17524 = f5193;var G__17525 = g5194;var G__17526 = h5195;var G__17527 = i5196;var G__17528 = j5197;var G__17529 = k5198;var G__17530 = l5199;var G__17531 = m5200;var G__17532 = n5201;var G__17533 = o5202;var G__17534 = p5203;var G__17535 = q5204;var G__17536 = r5205;return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__17519,G__17520,G__17521,G__17522,G__17523,G__17524,G__17525,G__17526,G__17527,G__17528,G__17529,G__17530,G__17531,G__17532,G__17533,G__17534,G__17535,G__17536) : f.call(null,G__17519,G__17520,G__17521,G__17522,G__17523,G__17524,G__17525,G__17526,G__17527,G__17528,G__17529,G__17530,G__17531,G__17532,G__17533,G__17534,G__17535,G__17536));
}
} else
{var s5206 = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === (19)))
{if(f.cljs$core$IFn$_invoke$arity$19)
{return f.cljs$core$IFn$_invoke$arity$19(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200,n5201,o5202,p5203,q5204,r5205,s5206);
} else
{var G__17537 = a5188;var G__17538 = b5189;var G__17539 = c5190;var G__17540 = d5191;var G__17541 = e5192;var G__17542 = f5193;var G__17543 = g5194;var G__17544 = h5195;var G__17545 = i5196;var G__17546 = j5197;var G__17547 = k5198;var G__17548 = l5199;var G__17549 = m5200;var G__17550 = n5201;var G__17551 = o5202;var G__17552 = p5203;var G__17553 = q5204;var G__17554 = r5205;var G__17555 = s5206;return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__17537,G__17538,G__17539,G__17540,G__17541,G__17542,G__17543,G__17544,G__17545,G__17546,G__17547,G__17548,G__17549,G__17550,G__17551,G__17552,G__17553,G__17554,G__17555) : f.call(null,G__17537,G__17538,G__17539,G__17540,G__17541,G__17542,G__17543,G__17544,G__17545,G__17546,G__17547,G__17548,G__17549,G__17550,G__17551,G__17552,G__17553,G__17554,G__17555));
}
} else
{var t5207 = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === (20)))
{if(f.cljs$core$IFn$_invoke$arity$20)
{return f.cljs$core$IFn$_invoke$arity$20(a5188,b5189,c5190,d5191,e5192,f5193,g5194,h5195,i5196,j5197,k5198,l5199,m5200,n5201,o5202,p5203,q5204,r5205,s5206,t5207);
} else
{var G__17556 = a5188;var G__17557 = b5189;var G__17558 = c5190;var G__17559 = d5191;var G__17560 = e5192;var G__17561 = f5193;var G__17562 = g5194;var G__17563 = h5195;var G__17564 = i5196;var G__17565 = j5197;var G__17566 = k5198;var G__17567 = l5199;var G__17568 = m5200;var G__17569 = n5201;var G__17570 = o5202;var G__17571 = p5203;var G__17572 = q5204;var G__17573 = r5205;var G__17574 = s5206;var G__17575 = t5207;return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__17556,G__17557,G__17558,G__17559,G__17560,G__17561,G__17562,G__17563,G__17564,G__17565,G__17566,G__17567,G__17568,G__17569,G__17570,G__17571,G__17572,G__17573,G__17574,G__17575) : f.call(null,G__17556,G__17557,G__17558,G__17559,G__17560,G__17561,G__17562,G__17563,G__17564,G__17565,G__17566,G__17567,G__17568,G__17569,G__17570,G__17571,G__17572,G__17573,G__17574,G__17575));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__17576__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__17576 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__17576__delegate.call(this,f,a,b,c,d,args);};
G__17576.cljs$lang$maxFixedArity = 5;
G__17576.cljs$lang$applyTo = (function (arglist__17577){
var f = cljs.core.first(arglist__17577);
arglist__17577 = cljs.core.next(arglist__17577);
var a = cljs.core.first(arglist__17577);
arglist__17577 = cljs.core.next(arglist__17577);
var b = cljs.core.first(arglist__17577);
arglist__17577 = cljs.core.next(arglist__17577);
var c = cljs.core.first(arglist__17577);
arglist__17577 = cljs.core.next(arglist__17577);
var d = cljs.core.first(arglist__17577);
var args = cljs.core.rest(arglist__17577);
return G__17576__delegate(f,a,b,c,d,args);
});
G__17576.cljs$core$IFn$_invoke$arity$variadic = G__17576__delegate;
return G__17576;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() {
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(function (){var G__17593 = cljs.core.meta(obj);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17593) : f.call(null,G__17593));
})());
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(function (){var G__17594 = cljs.core.meta(obj);var G__17595 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17594,G__17595) : f.call(null,G__17594,G__17595));
})());
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(function (){var G__17596 = cljs.core.meta(obj);var G__17597 = a;var G__17598 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17596,G__17597,G__17598) : f.call(null,G__17596,G__17597,G__17598));
})());
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(function (){var G__17599 = cljs.core.meta(obj);var G__17600 = a;var G__17601 = b;var G__17602 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17599,G__17600,G__17601,G__17602) : f.call(null,G__17599,G__17600,G__17601,G__17602));
})());
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(function (){var G__17603 = cljs.core.meta(obj);var G__17604 = a;var G__17605 = b;var G__17606 = c;var G__17607 = d;return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__17603,G__17604,G__17605,G__17606,G__17607) : f.call(null,G__17603,G__17604,G__17605,G__17606,G__17607));
})());
});
var vary_meta__7 = (function() { 
var G__17608__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__17608 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__17608__delegate.call(this,obj,f,a,b,c,d,args);};
G__17608.cljs$lang$maxFixedArity = 6;
G__17608.cljs$lang$applyTo = (function (arglist__17609){
var obj = cljs.core.first(arglist__17609);
arglist__17609 = cljs.core.next(arglist__17609);
var f = cljs.core.first(arglist__17609);
arglist__17609 = cljs.core.next(arglist__17609);
var a = cljs.core.first(arglist__17609);
arglist__17609 = cljs.core.next(arglist__17609);
var b = cljs.core.first(arglist__17609);
arglist__17609 = cljs.core.next(arglist__17609);
var c = cljs.core.first(arglist__17609);
arglist__17609 = cljs.core.next(arglist__17609);
var d = cljs.core.first(arglist__17609);
var args = cljs.core.rest(arglist__17609);
return G__17608__delegate(obj,f,a,b,c,d,args);
});
G__17608.cljs$core$IFn$_invoke$arity$variadic = G__17608__delegate;
return G__17608;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__17610__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__17610 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17610__delegate.call(this,x,y,more);};
G__17610.cljs$lang$maxFixedArity = 2;
G__17610.cljs$lang$applyTo = (function (arglist__17611){
var x = cljs.core.first(arglist__17611);
arglist__17611 = cljs.core.next(arglist__17611);
var y = cljs.core.first(arglist__17611);
var more = cljs.core.rest(arglist__17611);
return G__17610__delegate(x,y,more);
});
G__17610.cljs$core$IFn$_invoke$arity$variadic = G__17610__delegate;
return G__17610;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
cljs.core.nil_iter = (function nil_iter(){if(typeof cljs.core.t17615 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t17615 = (function (nil_iter,meta17616){
this.nil_iter = nil_iter;
this.meta17616 = meta17616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.t17615.cljs$lang$type = true;
cljs.core.t17615.cljs$lang$ctorStr = "cljs.core/t17615";
cljs.core.t17615.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/t17615");
});
cljs.core.t17615.prototype.hasNext = (function (){var self__ = this;
var _ = this;return false;
});
cljs.core.t17615.prototype.next = (function (){var self__ = this;
var _ = this;return (new Error("No such element"));
});
cljs.core.t17615.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.t17615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17617){var self__ = this;
var _17617__$1 = this;return self__.meta17616;
});
cljs.core.t17615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17617,meta17616__$1){var self__ = this;
var _17617__$1 = this;return (new cljs.core.t17615(self__.nil_iter,meta17616__$1));
});
cljs.core.__GT_t17615 = (function __GT_t17615(nil_iter__$1,meta17616){return (new cljs.core.t17615(nil_iter__$1,meta17616));
});
}
return (new cljs.core.t17615(nil_iter,null));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.cljs$lang$type = true;
cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";
cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/StringIter");
});
cljs.core.StringIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.s.length);
});
cljs.core.StringIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = self__.s.charAt(self__.i);self__.i = (self__.i + (1));
return ret;
});
cljs.core.StringIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_StringIter = (function __GT_StringIter(s,i){return (new cljs.core.StringIter(s,i));
});
cljs.core.string_iter = (function string_iter(x){return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.cljs$lang$type = true;
cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";
cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ArrayIter");
});
cljs.core.ArrayIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;return (self__.i < self__.arr.length);
});
cljs.core.ArrayIter.prototype.next = (function (){var self__ = this;
var _ = this;var ret = (self__.arr[self__.i]);self__.i = (self__.i + (1));
return ret;
});
cljs.core.ArrayIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_ArrayIter = (function __GT_ArrayIter(arr,i){return (new cljs.core.ArrayIter(arr,i));
});
cljs.core.array_iter = (function array_iter(x){return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.cljs$lang$type = true;
cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";
cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/SeqIter");
});
cljs.core.SeqIter.prototype.hasNext = (function (){var self__ = this;
var _ = this;if((self__._seq === cljs.core.INIT))
{self__._seq = cljs.core.START;
self__._next = cljs.core.seq(self__._next);
} else
{if((self__._seq === self__._next))
{self__._next = cljs.core.next(self__._seq);
} else
{}
}
return !((self__._next == null));
});
cljs.core.SeqIter.prototype.next = (function (){var self__ = this;
var this$ = this;if(cljs.core.not(this$.hasNext()))
{throw (new Error("No such element"));
} else
{self__._seq = self__._next;
return cljs.core.first(self__._next);
}
});
cljs.core.SeqIter.prototype.remove = (function (){var self__ = this;
var _ = this;return (new Error("Unsupported operation"));
});
cljs.core.__GT_SeqIter = (function __GT_SeqIter(_seq,_next){return (new cljs.core.SeqIter(_seq,_next));
});
cljs.core.seq_iter = (function seq_iter(coll){return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function iter(coll){if((coll == null))
{return cljs.core.nil_iter();
} else
{if(typeof coll === 'string')
{return cljs.core.string_iter(coll);
} else
{if(coll instanceof Array)
{return cljs.core.array_iter(coll);
} else
{if(cljs.core.iterable_QMARK_(coll))
{return cljs.core._iterator(coll);
} else
{if(cljs.core.seqable_QMARK_(coll))
{return cljs.core.seq_iter(coll);
} else
{throw (new Error(("Cannot create iterator from "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(coll))));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function lazy_transformer(stepper){return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.cljs$lang$type = true;
cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";
cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Stepper");
});
cljs.core.Stepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__4263__auto__ = !((lt.stepper == null));if(and__4263__auto__)
{return self__.iter.hasNext();
} else
{return and__4263__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_((function (){var G__17618 = lt;var G__17619 = self__.iter.next();return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__17618,G__17619) : self__.xform.call(null,G__17618,G__17619));
})()))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__17620 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__17620) : self__.xform.call(null,G__17620));
}
});
cljs.core.__GT_Stepper = (function __GT_Stepper(xform,iter){return (new cljs.core.Stepper(xform,iter));
});
cljs.core.stepper = (function stepper(xform,iter){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return result;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.Stepper((function (){var G__17622 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__17622) : xform.call(null,G__17622));
})(),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.cljs$lang$type = true;
cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";
cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/MultiStepper");
});
cljs.core.MultiStepper.prototype.hasNext = (function (){var self__ = this;
var _ = this;var iters__$1 = cljs.core.seq(self__.iters);while(true){
if(!((iters__$1 == null)))
{var iter = cljs.core.first(iters__$1);if(cljs.core.not(iter.hasNext()))
{return false;
} else
{{
var G__17624 = cljs.core.next(iters__$1);
iters__$1 = G__17624;
continue;
}
}
} else
{return true;
}
break;
}
});
cljs.core.MultiStepper.prototype.next = (function (){var self__ = this;
var _ = this;var n__5144__auto___17625 = self__.iters.length;var i_17626 = (0);while(true){
if((i_17626 < n__5144__auto___17625))
{(self__.nexts[i_17626] = (self__.iters[i_17626]).next());
{
var G__17627 = (i_17626 + (1));
i_17626 = G__17627;
continue;
}
} else
{}
break;
}
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});
cljs.core.MultiStepper.prototype.step = (function (lt){var self__ = this;
var this$ = this;while(true){
if(cljs.core.truth_((function (){var and__4263__auto__ = !((lt.stepper == null));if(and__4263__auto__)
{return this$.hasNext();
} else
{return and__4263__auto__;
}
})()))
{if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next()))))
{if((lt.rest == null))
{} else
{lt.rest.stepper = null;
}
} else
{{
continue;
}
}
} else
{}
break;
}
if((lt.stepper == null))
{return null;
} else
{var G__17623 = lt;return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__17623) : self__.xform.call(null,G__17623));
}
});
cljs.core.__GT_MultiStepper = (function __GT_MultiStepper(xform,iters,nexts){return (new cljs.core.MultiStepper(xform,iters,nexts));
});
cljs.core.multi_stepper = (function() {
var multi_stepper = null;
var multi_stepper__2 = (function (xform,iters){return multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var multi_stepper__3 = (function (xform,iters,nexts){var stepfn = (function() {
var stepfn = null;
var stepfn__1 = (function (result){var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);lt.stepper = null;
return lt;
});
var stepfn__2 = (function (result,input){var lt = result;lt.first = input;
lt.rest = cljs.core.lazy_transformer(lt.stepper);
lt.stepper = null;
return lt.rest;
});
stepfn = function(result,input){
switch(arguments.length){
case 1:
return stepfn__1.call(this,result);
case 2:
return stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stepfn.cljs$core$IFn$_invoke$arity$1 = stepfn__1;
stepfn.cljs$core$IFn$_invoke$arity$2 = stepfn__2;
return stepfn;
})()
;
return (new cljs.core.MultiStepper((function (){var G__17632 = stepfn;return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__17632) : xform.call(null,G__17632));
})(),iters,nexts));
});
multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return multi_stepper__2.call(this,xform,iters);
case 3:
return multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_stepper.cljs$core$IFn$_invoke$arity$2 = multi_stepper__2;
multi_stepper.cljs$core$IFn$_invoke$arity$3 = multi_stepper__3;
return multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
})
cljs.core.LazyTransformer.cljs$lang$type = true;
cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";
cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/LazyTransformer");
});
cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq(self__.rest);
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return self__.first;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{cljs.core._seq(this$__$1);
}
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.stepper == null))
{} else
{self__.stepper.step(this$__$1);
}
if((self__.rest == null))
{return null;
} else
{return this$__$1;
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.hash_ordered_coll(this$__$1);
});
cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;var s = cljs.core._seq(this$__$1);if(!((s == null)))
{return cljs.core.equiv_sequential(this$__$1,other);
} else
{return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});
cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,cljs.core._seq(this$__$1));
});
cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});
cljs.core.__GT_LazyTransformer = (function __GT_LazyTransformer(stepper,first,rest,meta){return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});
cljs.core.LazyTransformer.create = (function (xform,coll){return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){var iters = [];var seq__17633_17637 = cljs.core.seq(colls);var chunk__17634_17638 = null;var count__17635_17639 = (0);var i__17636_17640 = (0);while(true){
if((i__17636_17640 < count__17635_17639))
{var coll_17641 = chunk__17634_17638.cljs$core$IIndexed$_nth$arity$2(null,i__17636_17640);iters.push(cljs.core.iter(coll_17641));
{
var G__17642 = seq__17633_17637;
var G__17643 = chunk__17634_17638;
var G__17644 = count__17635_17639;
var G__17645 = (i__17636_17640 + (1));
seq__17633_17637 = G__17642;
chunk__17634_17638 = G__17643;
count__17635_17639 = G__17644;
i__17636_17640 = G__17645;
continue;
}
} else
{var temp__4126__auto___17646 = cljs.core.seq(seq__17633_17637);if(temp__4126__auto___17646)
{var seq__17633_17647__$1 = temp__4126__auto___17646;if(cljs.core.chunked_seq_QMARK_(seq__17633_17647__$1))
{var c__5044__auto___17648 = cljs.core.chunk_first(seq__17633_17647__$1);{
var G__17649 = cljs.core.chunk_rest(seq__17633_17647__$1);
var G__17650 = c__5044__auto___17648;
var G__17651 = cljs.core.count(c__5044__auto___17648);
var G__17652 = (0);
seq__17633_17637 = G__17649;
chunk__17634_17638 = G__17650;
count__17635_17639 = G__17651;
i__17636_17640 = G__17652;
continue;
}
} else
{var coll_17653 = cljs.core.first(seq__17633_17647__$1);iters.push(cljs.core.iter(coll_17653));
{
var G__17654 = cljs.core.next(seq__17633_17647__$1);
var G__17655 = null;
var G__17656 = (0);
var G__17657 = (0);
seq__17633_17637 = G__17654;
chunk__17634_17638 = G__17655;
count__17635_17639 = G__17656;
i__17636_17640 = G__17657;
continue;
}
}
} else
{}
}
break;
}
return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields (), When a
* transducer is supplied, returns a lazy sequence of applications of
* the transform to the items in coll(s), i.e. to the set of first
* items of each coll, followed by the set of second
* items in each coll, until any one of the colls is exhausted.  Any
* remaining items in other colls are ignored. The transform should accept
* number-of-colls arguments
* @param {...*} var_args
*/
cljs.core.sequence = (function() {
var sequence = null;
var sequence__1 = (function (coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__4275__auto__ = cljs.core.seq(coll);if(or__4275__auto__)
{return or__4275__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
var sequence__2 = (function (xform,coll){return cljs.core.LazyTransformer.create(xform,coll);
});
var sequence__3 = (function() { 
var G__17658__delegate = function (xform,coll,colls){return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__17658 = function (xform,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17658__delegate.call(this,xform,coll,colls);};
G__17658.cljs$lang$maxFixedArity = 2;
G__17658.cljs$lang$applyTo = (function (arglist__17659){
var xform = cljs.core.first(arglist__17659);
arglist__17659 = cljs.core.next(arglist__17659);
var coll = cljs.core.first(arglist__17659);
var colls = cljs.core.rest(arglist__17659);
return G__17658__delegate(xform,coll,colls);
});
G__17658.cljs$core$IFn$_invoke$arity$variadic = G__17658__delegate;
return G__17658;
})()
;
sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return sequence__1.call(this,xform);
case 2:
return sequence__2.call(this,xform,coll);
default:
return sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sequence.cljs$lang$maxFixedArity = 2;
sequence.cljs$lang$applyTo = sequence__3.cljs$lang$applyTo;
sequence.cljs$core$IFn$_invoke$arity$1 = sequence__1;
sequence.cljs$core$IFn$_invoke$arity$2 = sequence__2;
sequence.cljs$core$IFn$_invoke$arity$variadic = sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return sequence;
})()
;
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((function (){var G__17661 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__17661) : pred.call(null,G__17661));
})()))
{{
var G__17662 = pred;
var G__17663 = cljs.core.next(coll);
pred = G__17662;
coll = G__17663;
continue;
}
} else
{return false;

}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq(coll))
{var or__4275__auto__ = (function (){var G__17667 = cljs.core.first(coll);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__17667) : pred.call(null,G__17667));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{{
var G__17668 = pred;
var G__17669 = cljs.core.next(coll);
pred = G__17668;
coll = G__17669;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_(n))
{return ((n & (1)) === (0));
} else
{throw (new Error(("Argument must be an integer: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_(n));
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__17676 = null;
var G__17676__0 = (function (){return cljs.core.not((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
});
var G__17676__1 = (function (x){return cljs.core.not((function (){var G__17673 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17673) : f.call(null,G__17673));
})());
});
var G__17676__2 = (function (x,y){return cljs.core.not((function (){var G__17674 = x;var G__17675 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17674,G__17675) : f.call(null,G__17674,G__17675));
})());
});
var G__17676__3 = (function() { 
var G__17677__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__17677 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17677__delegate.call(this,x,y,zs);};
G__17677.cljs$lang$maxFixedArity = 2;
G__17677.cljs$lang$applyTo = (function (arglist__17678){
var x = cljs.core.first(arglist__17678);
arglist__17678 = cljs.core.next(arglist__17678);
var y = cljs.core.first(arglist__17678);
var zs = cljs.core.rest(arglist__17678);
return G__17677__delegate(x,y,zs);
});
G__17677.cljs$core$IFn$_invoke$arity$variadic = G__17677__delegate;
return G__17677;
})()
;
G__17676 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__17676__0.call(this);
case 1:
return G__17676__1.call(this,x);
case 2:
return G__17676__2.call(this,x,y);
default:
return G__17676__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17676.cljs$lang$maxFixedArity = 2;
G__17676.cljs$lang$applyTo = G__17676__3.cljs$lang$applyTo;
G__17676.cljs$core$IFn$_invoke$arity$0 = G__17676__0;
G__17676.cljs$core$IFn$_invoke$arity$1 = G__17676__1;
G__17676.cljs$core$IFn$_invoke$arity$2 = G__17676__2;
G__17676.cljs$core$IFn$_invoke$arity$variadic = G__17676__3.cljs$core$IFn$_invoke$arity$variadic;
return G__17676;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__17679__delegate = function (args){return x;
};
var G__17679 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17679__delegate.call(this,args);};
G__17679.cljs$lang$maxFixedArity = 0;
G__17679.cljs$lang$applyTo = (function (arglist__17680){
var args = cljs.core.seq(arglist__17680);
return G__17679__delegate(args);
});
G__17679.cljs$core$IFn$_invoke$arity$variadic = G__17679__delegate;
return G__17679;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){return cljs.core.identity;
});
var comp__1 = (function (f){return f;
});
var comp__2 = (function (f,g){return (function() {
var G__17735 = null;
var G__17735__0 = (function (){var G__17708 = (function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17708) : f.call(null,G__17708));
});
var G__17735__1 = (function (x){var G__17709 = (function (){var G__17710 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__17710) : g.call(null,G__17710));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17709) : f.call(null,G__17709));
});
var G__17735__2 = (function (x,y){var G__17711 = (function (){var G__17712 = x;var G__17713 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__17712,G__17713) : g.call(null,G__17712,G__17713));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17711) : f.call(null,G__17711));
});
var G__17735__3 = (function (x,y,z){var G__17714 = (function (){var G__17715 = x;var G__17716 = y;var G__17717 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__17715,G__17716,G__17717) : g.call(null,G__17715,G__17716,G__17717));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17714) : f.call(null,G__17714));
});
var G__17735__4 = (function() { 
var G__17736__delegate = function (x,y,z,args){var G__17718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17718) : f.call(null,G__17718));
};
var G__17736 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17736__delegate.call(this,x,y,z,args);};
G__17736.cljs$lang$maxFixedArity = 3;
G__17736.cljs$lang$applyTo = (function (arglist__17737){
var x = cljs.core.first(arglist__17737);
arglist__17737 = cljs.core.next(arglist__17737);
var y = cljs.core.first(arglist__17737);
arglist__17737 = cljs.core.next(arglist__17737);
var z = cljs.core.first(arglist__17737);
var args = cljs.core.rest(arglist__17737);
return G__17736__delegate(x,y,z,args);
});
G__17736.cljs$core$IFn$_invoke$arity$variadic = G__17736__delegate;
return G__17736;
})()
;
G__17735 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17735__0.call(this);
case 1:
return G__17735__1.call(this,x);
case 2:
return G__17735__2.call(this,x,y);
case 3:
return G__17735__3.call(this,x,y,z);
default:
return G__17735__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17735.cljs$lang$maxFixedArity = 3;
G__17735.cljs$lang$applyTo = G__17735__4.cljs$lang$applyTo;
G__17735.cljs$core$IFn$_invoke$arity$0 = G__17735__0;
G__17735.cljs$core$IFn$_invoke$arity$1 = G__17735__1;
G__17735.cljs$core$IFn$_invoke$arity$2 = G__17735__2;
G__17735.cljs$core$IFn$_invoke$arity$3 = G__17735__3;
G__17735.cljs$core$IFn$_invoke$arity$variadic = G__17735__4.cljs$core$IFn$_invoke$arity$variadic;
return G__17735;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__17738 = null;
var G__17738__0 = (function (){var G__17719 = (function (){var G__17720 = (function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__17720) : g.call(null,G__17720));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17719) : f.call(null,G__17719));
});
var G__17738__1 = (function (x){var G__17721 = (function (){var G__17722 = (function (){var G__17723 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__17723) : h.call(null,G__17723));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__17722) : g.call(null,G__17722));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17721) : f.call(null,G__17721));
});
var G__17738__2 = (function (x,y){var G__17724 = (function (){var G__17725 = (function (){var G__17726 = x;var G__17727 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__17726,G__17727) : h.call(null,G__17726,G__17727));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__17725) : g.call(null,G__17725));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17724) : f.call(null,G__17724));
});
var G__17738__3 = (function (x,y,z){var G__17728 = (function (){var G__17729 = (function (){var G__17730 = x;var G__17731 = y;var G__17732 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__17730,G__17731,G__17732) : h.call(null,G__17730,G__17731,G__17732));
})();return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__17729) : g.call(null,G__17729));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17728) : f.call(null,G__17728));
});
var G__17738__4 = (function() { 
var G__17739__delegate = function (x,y,z,args){var G__17733 = (function (){var G__17734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__17734) : g.call(null,G__17734));
})();return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17733) : f.call(null,G__17733));
};
var G__17739 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17739__delegate.call(this,x,y,z,args);};
G__17739.cljs$lang$maxFixedArity = 3;
G__17739.cljs$lang$applyTo = (function (arglist__17740){
var x = cljs.core.first(arglist__17740);
arglist__17740 = cljs.core.next(arglist__17740);
var y = cljs.core.first(arglist__17740);
arglist__17740 = cljs.core.next(arglist__17740);
var z = cljs.core.first(arglist__17740);
var args = cljs.core.rest(arglist__17740);
return G__17739__delegate(x,y,z,args);
});
G__17739.cljs$core$IFn$_invoke$arity$variadic = G__17739__delegate;
return G__17739;
})()
;
G__17738 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__17738__0.call(this);
case 1:
return G__17738__1.call(this,x);
case 2:
return G__17738__2.call(this,x,y);
case 3:
return G__17738__3.call(this,x,y,z);
default:
return G__17738__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17738.cljs$lang$maxFixedArity = 3;
G__17738.cljs$lang$applyTo = G__17738__4.cljs$lang$applyTo;
G__17738.cljs$core$IFn$_invoke$arity$0 = G__17738__0;
G__17738.cljs$core$IFn$_invoke$arity$1 = G__17738__1;
G__17738.cljs$core$IFn$_invoke$arity$2 = G__17738__2;
G__17738.cljs$core$IFn$_invoke$arity$3 = G__17738__3;
G__17738.cljs$core$IFn$_invoke$arity$variadic = G__17738__4.cljs$core$IFn$_invoke$arity$variadic;
return G__17738;
})()
});
var comp__4 = (function() { 
var G__17741__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return ((function (fs__$1){
return (function() { 
var G__17742__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__17743 = cljs.core.first(fs__$2).call(null,ret);
var G__17744 = cljs.core.next(fs__$2);
ret = G__17743;
fs__$2 = G__17744;
continue;
}
} else
{return ret;
}
break;
}
};
var G__17742 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17742__delegate.call(this,args);};
G__17742.cljs$lang$maxFixedArity = 0;
G__17742.cljs$lang$applyTo = (function (arglist__17745){
var args = cljs.core.seq(arglist__17745);
return G__17742__delegate(args);
});
G__17742.cljs$core$IFn$_invoke$arity$variadic = G__17742__delegate;
return G__17742;
})()
;
;})(fs__$1))
};
var G__17741 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17741__delegate.call(this,f1,f2,f3,fs);};
G__17741.cljs$lang$maxFixedArity = 3;
G__17741.cljs$lang$applyTo = (function (arglist__17746){
var f1 = cljs.core.first(arglist__17746);
arglist__17746 = cljs.core.next(arglist__17746);
var f2 = cljs.core.first(arglist__17746);
arglist__17746 = cljs.core.next(arglist__17746);
var f3 = cljs.core.first(arglist__17746);
var fs = cljs.core.rest(arglist__17746);
return G__17741__delegate(f1,f2,f3,fs);
});
G__17741.cljs$core$IFn$_invoke$arity$variadic = G__17741__delegate;
return G__17741;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){return f;
});
var partial__2 = (function (f,arg1){return (function() { 
var G__17747__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__17747 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17747__delegate.call(this,args);};
G__17747.cljs$lang$maxFixedArity = 0;
G__17747.cljs$lang$applyTo = (function (arglist__17748){
var args = cljs.core.seq(arglist__17748);
return G__17747__delegate(args);
});
G__17747.cljs$core$IFn$_invoke$arity$variadic = G__17747__delegate;
return G__17747;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__17749__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__17749 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17749__delegate.call(this,args);};
G__17749.cljs$lang$maxFixedArity = 0;
G__17749.cljs$lang$applyTo = (function (arglist__17750){
var args = cljs.core.seq(arglist__17750);
return G__17749__delegate(args);
});
G__17749.cljs$core$IFn$_invoke$arity$variadic = G__17749__delegate;
return G__17749;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__17751__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__17751 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17751__delegate.call(this,args);};
G__17751.cljs$lang$maxFixedArity = 0;
G__17751.cljs$lang$applyTo = (function (arglist__17752){
var args = cljs.core.seq(arglist__17752);
return G__17751__delegate(args);
});
G__17751.cljs$core$IFn$_invoke$arity$variadic = G__17751__delegate;
return G__17751;
})()
;
});
var partial__5 = (function() { 
var G__17753__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__17754__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__17754 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17754__delegate.call(this,args);};
G__17754.cljs$lang$maxFixedArity = 0;
G__17754.cljs$lang$applyTo = (function (arglist__17755){
var args = cljs.core.seq(arglist__17755);
return G__17754__delegate(args);
});
G__17754.cljs$core$IFn$_invoke$arity$variadic = G__17754__delegate;
return G__17754;
})()
;
};
var G__17753 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__17753__delegate.call(this,f,arg1,arg2,arg3,more);};
G__17753.cljs$lang$maxFixedArity = 4;
G__17753.cljs$lang$applyTo = (function (arglist__17756){
var f = cljs.core.first(arglist__17756);
arglist__17756 = cljs.core.next(arglist__17756);
var arg1 = cljs.core.first(arglist__17756);
arglist__17756 = cljs.core.next(arglist__17756);
var arg2 = cljs.core.first(arglist__17756);
arglist__17756 = cljs.core.next(arglist__17756);
var arg3 = cljs.core.first(arglist__17756);
var more = cljs.core.rest(arglist__17756);
return G__17753__delegate(f,arg1,arg2,arg3,more);
});
G__17753.cljs$core$IFn$_invoke$arity$variadic = G__17753__delegate;
return G__17753;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){return (function() {
var G__17789 = null;
var G__17789__1 = (function (a){var G__17773 = (((a == null))?x:a);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17773) : f.call(null,G__17773));
});
var G__17789__2 = (function (a,b){var G__17774 = (((a == null))?x:a);var G__17775 = b;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17774,G__17775) : f.call(null,G__17774,G__17775));
});
var G__17789__3 = (function (a,b,c){var G__17776 = (((a == null))?x:a);var G__17777 = b;var G__17778 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17776,G__17777,G__17778) : f.call(null,G__17776,G__17777,G__17778));
});
var G__17789__4 = (function() { 
var G__17790__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__17790 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17790__delegate.call(this,a,b,c,ds);};
G__17790.cljs$lang$maxFixedArity = 3;
G__17790.cljs$lang$applyTo = (function (arglist__17791){
var a = cljs.core.first(arglist__17791);
arglist__17791 = cljs.core.next(arglist__17791);
var b = cljs.core.first(arglist__17791);
arglist__17791 = cljs.core.next(arglist__17791);
var c = cljs.core.first(arglist__17791);
var ds = cljs.core.rest(arglist__17791);
return G__17790__delegate(a,b,c,ds);
});
G__17790.cljs$core$IFn$_invoke$arity$variadic = G__17790__delegate;
return G__17790;
})()
;
G__17789 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__17789__1.call(this,a);
case 2:
return G__17789__2.call(this,a,b);
case 3:
return G__17789__3.call(this,a,b,c);
default:
return G__17789__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17789.cljs$lang$maxFixedArity = 3;
G__17789.cljs$lang$applyTo = G__17789__4.cljs$lang$applyTo;
G__17789.cljs$core$IFn$_invoke$arity$1 = G__17789__1;
G__17789.cljs$core$IFn$_invoke$arity$2 = G__17789__2;
G__17789.cljs$core$IFn$_invoke$arity$3 = G__17789__3;
G__17789.cljs$core$IFn$_invoke$arity$variadic = G__17789__4.cljs$core$IFn$_invoke$arity$variadic;
return G__17789;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__17792 = null;
var G__17792__2 = (function (a,b){var G__17779 = (((a == null))?x:a);var G__17780 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17779,G__17780) : f.call(null,G__17779,G__17780));
});
var G__17792__3 = (function (a,b,c){var G__17781 = (((a == null))?x:a);var G__17782 = (((b == null))?y:b);var G__17783 = c;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17781,G__17782,G__17783) : f.call(null,G__17781,G__17782,G__17783));
});
var G__17792__4 = (function() { 
var G__17793__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__17793 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17793__delegate.call(this,a,b,c,ds);};
G__17793.cljs$lang$maxFixedArity = 3;
G__17793.cljs$lang$applyTo = (function (arglist__17794){
var a = cljs.core.first(arglist__17794);
arglist__17794 = cljs.core.next(arglist__17794);
var b = cljs.core.first(arglist__17794);
arglist__17794 = cljs.core.next(arglist__17794);
var c = cljs.core.first(arglist__17794);
var ds = cljs.core.rest(arglist__17794);
return G__17793__delegate(a,b,c,ds);
});
G__17793.cljs$core$IFn$_invoke$arity$variadic = G__17793__delegate;
return G__17793;
})()
;
G__17792 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__17792__2.call(this,a,b);
case 3:
return G__17792__3.call(this,a,b,c);
default:
return G__17792__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17792.cljs$lang$maxFixedArity = 3;
G__17792.cljs$lang$applyTo = G__17792__4.cljs$lang$applyTo;
G__17792.cljs$core$IFn$_invoke$arity$2 = G__17792__2;
G__17792.cljs$core$IFn$_invoke$arity$3 = G__17792__3;
G__17792.cljs$core$IFn$_invoke$arity$variadic = G__17792__4.cljs$core$IFn$_invoke$arity$variadic;
return G__17792;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__17795 = null;
var G__17795__2 = (function (a,b){var G__17784 = (((a == null))?x:a);var G__17785 = (((b == null))?y:b);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17784,G__17785) : f.call(null,G__17784,G__17785));
});
var G__17795__3 = (function (a,b,c){var G__17786 = (((a == null))?x:a);var G__17787 = (((b == null))?y:b);var G__17788 = (((c == null))?z:c);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17786,G__17787,G__17788) : f.call(null,G__17786,G__17787,G__17788));
});
var G__17795__4 = (function() { 
var G__17796__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__17796 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17796__delegate.call(this,a,b,c,ds);};
G__17796.cljs$lang$maxFixedArity = 3;
G__17796.cljs$lang$applyTo = (function (arglist__17797){
var a = cljs.core.first(arglist__17797);
arglist__17797 = cljs.core.next(arglist__17797);
var b = cljs.core.first(arglist__17797);
arglist__17797 = cljs.core.next(arglist__17797);
var c = cljs.core.first(arglist__17797);
var ds = cljs.core.rest(arglist__17797);
return G__17796__delegate(a,b,c,ds);
});
G__17796.cljs$core$IFn$_invoke$arity$variadic = G__17796__delegate;
return G__17796;
})()
;
G__17795 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__17795__2.call(this,a,b);
case 3:
return G__17795__3.call(this,a,b,c);
default:
return G__17795__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17795.cljs$lang$maxFixedArity = 3;
G__17795.cljs$lang$applyTo = G__17795__4.cljs$lang$applyTo;
G__17795.cljs$core$IFn$_invoke$arity$2 = G__17795__2;
G__17795.cljs$core$IFn$_invoke$arity$3 = G__17795__3;
G__17795.cljs$core$IFn$_invoke$arity$variadic = G__17795__4.cljs$core$IFn$_invoke$arity$variadic;
return G__17795;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__5144__auto___17846 = size;var i_17847 = (0);while(true){
if((i_17847 < n__5144__auto___17846))
{cljs.core.chunk_append(b,(function (){var G__17842 = (idx + i_17847);var G__17843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_17847);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17842,G__17843) : f.call(null,G__17842,G__17843));
})());
{
var G__17848 = (i_17847 + (1));
i_17847 = G__17848;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__17844 = idx;var G__17845 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17844,G__17845) : f.call(null,G__17844,G__17845));
})(),mapi((idx + (1)),cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a transducer when no collection is provided.
*/
cljs.core.keep = (function() {
var keep = null;
var keep__1 = (function (f){return (function (f1){return (function() {
var G__17867 = null;
var G__17867__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__17867__1 = (function (result){var G__17861 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17861) : f1.call(null,G__17861));
});
var G__17867__2 = (function (result,input){var v = (function (){var G__17862 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17862) : f.call(null,G__17862));
})();if((v == null))
{return result;
} else
{var G__17863 = result;var G__17864 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__17863,G__17864) : f1.call(null,G__17863,G__17864));
}
});
G__17867 = function(result,input){
switch(arguments.length){
case 0:
return G__17867__0.call(this);
case 1:
return G__17867__1.call(this,result);
case 2:
return G__17867__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17867.cljs$core$IFn$_invoke$arity$0 = G__17867__0;
G__17867.cljs$core$IFn$_invoke$arity$1 = G__17867__1;
G__17867.cljs$core$IFn$_invoke$arity$2 = G__17867__2;
return G__17867;
})()
});
});
var keep__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__5144__auto___17868 = size;var i_17869 = (0);while(true){
if((i_17869 < n__5144__auto___17868))
{var x_17870 = (function (){var G__17865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_17869);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17865) : f.call(null,G__17865));
})();if((x_17870 == null))
{} else
{cljs.core.chunk_append(b,x_17870);
}
{
var G__17871 = (i_17869 + (1));
i_17869 = G__17871;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__17866 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17866) : f.call(null,G__17866));
})();if((x == null))
{return keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else
{return cljs.core.cons(x,keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
keep = function(f,coll){
switch(arguments.length){
case 1:
return keep__1.call(this,f);
case 2:
return keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep.cljs$core$IFn$_invoke$arity$1 = keep__1;
keep.cljs$core$IFn$_invoke$arity$2 = keep__2;
return keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
this.cljs$lang$protocol_mask$partition1$ = 16386;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__17872 = this$__$1;return goog.getUid(G__17872);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__17873 = cljs.core.seq(self__.watches);var chunk__17874 = null;var count__17875 = (0);var i__17876 = (0);while(true){
if((i__17876 < count__17875))
{var vec__17877 = chunk__17874.cljs$core$IIndexed$_nth$arity$2(null,i__17876);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(1),null);var G__17878_17887 = key;var G__17879_17888 = this$__$1;var G__17880_17889 = oldval;var G__17881_17890 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17878_17887,G__17879_17888,G__17880_17889,G__17881_17890) : f.call(null,G__17878_17887,G__17879_17888,G__17880_17889,G__17881_17890));
{
var G__17891 = seq__17873;
var G__17892 = chunk__17874;
var G__17893 = count__17875;
var G__17894 = (i__17876 + (1));
seq__17873 = G__17891;
chunk__17874 = G__17892;
count__17875 = G__17893;
i__17876 = G__17894;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__17873);if(temp__4126__auto__)
{var seq__17873__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__17873__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__17873__$1);{
var G__17895 = cljs.core.chunk_rest(seq__17873__$1);
var G__17896 = c__5044__auto__;
var G__17897 = cljs.core.count(c__5044__auto__);
var G__17898 = (0);
seq__17873 = G__17895;
chunk__17874 = G__17896;
count__17875 = G__17897;
i__17876 = G__17898;
continue;
}
} else
{var vec__17882 = cljs.core.first(seq__17873__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17882,(0),null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17882,(1),null);var G__17883_17899 = key;var G__17884_17900 = this$__$1;var G__17885_17901 = oldval;var G__17886_17902 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17883_17899,G__17884_17900,G__17885_17901,G__17886_17902) : f.call(null,G__17883_17899,G__17884_17900,G__17885_17901,G__17886_17902));
{
var G__17903 = cljs.core.next(seq__17873__$1);
var G__17904 = null;
var G__17905 = (0);
var G__17906 = (0);
seq__17873 = G__17903;
chunk__17874 = G__17904;
count__17875 = G__17905;
i__17876 = G__17906;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
return this$__$1;
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cljs.core.Atom.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){return (new cljs.core.Atom(state,meta,validator,watches));
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__17910__delegate = function (x,p__17907){var map__17909 = p__17907;var map__17909__$1 = ((cljs.core.seq_QMARK_(map__17909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17909):map__17909);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17909__$1,cljs.core.constant$keyword$118);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17909__$1,cljs.core.constant$keyword$113);return (new cljs.core.Atom(x,meta,validator,null));
};
var G__17910 = function (x,var_args){
var p__17907 = null;if (arguments.length > 1) {
  p__17907 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__17910__delegate.call(this,x,p__17907);};
G__17910.cljs$lang$maxFixedArity = 1;
G__17910.cljs$lang$applyTo = (function (arglist__17911){
var x = cljs.core.first(arglist__17911);
var p__17907 = cljs.core.rest(arglist__17911);
return G__17910__delegate(x,p__17907);
});
G__17910.cljs$core$IFn$_invoke$arity$variadic = G__17910__delegate;
return G__17910;
})()
;
atom = function(x,var_args){
var p__17907 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){if((a instanceof cljs.core.Atom))
{var validate = a.validator;if((validate == null))
{} else
{if(cljs.core.truth_((function (){var G__17914 = new_value;return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(G__17914) : validate.call(null,G__17914));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17915 = cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1439230700,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null));return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__17915) : cljs.core.pr_str.call(null,G__17915));
})()))));
}
}
var old_value = a.state;a.state = new_value;
if((a.watches == null))
{} else
{cljs.core._notify_watches(a,old_value,new_value);
}
return new_value;
} else
{return cljs.core._reset_BANG_(a,new_value);
}
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__17922 = a.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17922) : f.call(null,G__17922));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var swap_BANG___3 = (function (a,f,x){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__17923 = a.state;var G__17924 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17923,G__17924) : f.call(null,G__17923,G__17924));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var swap_BANG___4 = (function (a,f,x,y){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,(function (){var G__17925 = a.state;var G__17926 = x;var G__17927 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17925,G__17926,G__17927) : f.call(null,G__17925,G__17926,G__17927));
})());
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var swap_BANG___5 = (function() { 
var G__17928__delegate = function (a,f,x,y,more){if((a instanceof cljs.core.Atom))
{return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else
{return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__17928 = function (a,f,x,y,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__17928__delegate.call(this,a,f,x,y,more);};
G__17928.cljs$lang$maxFixedArity = 4;
G__17928.cljs$lang$applyTo = (function (arglist__17929){
var a = cljs.core.first(arglist__17929);
arglist__17929 = cljs.core.next(arglist__17929);
var f = cljs.core.first(arglist__17929);
arglist__17929 = cljs.core.next(arglist__17929);
var x = cljs.core.first(arglist__17929);
arglist__17929 = cljs.core.next(arglist__17929);
var y = cljs.core.first(arglist__17929);
var more = cljs.core.rest(arglist__17929);
return G__17928__delegate(a,f,x,y,more);
});
G__17928.cljs$core$IFn$_invoke$arity$variadic = G__17928__delegate;
return G__17928;
})()
;
swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
default:
return swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 4;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){return iref.validator;
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.  Returns a stateful transducer when no collection is
* provided.
*/
cljs.core.keep_indexed = (function() {
var keep_indexed = null;
var keep_indexed__1 = (function (f){return (function (f1){var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));return ((function (ia){
return (function() {
var G__17996 = null;
var G__17996__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__17996__1 = (function (result){var G__17963 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17963) : f1.call(null,G__17963));
});
var G__17996__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);var v = (function (){var G__17964 = i;var G__17965 = input;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17964,G__17965) : f.call(null,G__17964,G__17965));
})();if((v == null))
{return result;
} else
{var G__17966 = result;var G__17967 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__17966,G__17967) : f1.call(null,G__17966,G__17967));
}
});
G__17996 = function(result,input){
switch(arguments.length){
case 0:
return G__17996__0.call(this);
case 1:
return G__17996__1.call(this,result);
case 2:
return G__17996__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17996.cljs$core$IFn$_invoke$arity$0 = G__17996__0;
G__17996.cljs$core$IFn$_invoke$arity$1 = G__17996__1;
G__17996.cljs$core$IFn$_invoke$arity$2 = G__17996__2;
return G__17996;
})()
;})(ia))
});
});
var keep_indexed__2 = (function (f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__5144__auto___17997 = size;var i_17998 = (0);while(true){
if((i_17998 < n__5144__auto___17997))
{var x_17999 = (function (){var G__17992 = (idx + i_17998);var G__17993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_17998);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17992,G__17993) : f.call(null,G__17992,G__17993));
})();if((x_17999 == null))
{} else
{cljs.core.chunk_append(b,x_17999);
}
{
var G__18000 = (i_17998 + (1));
i_17998 = G__18000;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (function (){var G__17994 = idx;var G__17995 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17994,G__17995) : f.call(null,G__17994,G__17995));
})();if((x == null))
{return keepi((idx + (1)),cljs.core.rest(s));
} else
{return cljs.core.cons(x,keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi((0),coll);
});
keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return keep_indexed__1.call(this,f);
case 2:
return keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keep_indexed.cljs$core$IFn$_invoke$arity$1 = keep_indexed__1;
keep_indexed.cljs$core$IFn$_invoke$arity$2 = keep_indexed__2;
return keep_indexed;
})()
;
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){return (function() {
var ep1 = null;
var ep1__0 = (function (){return true;
});
var ep1__1 = (function (x){return cljs.core.boolean$((function (){var G__18214 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18214) : p.call(null,G__18214));
})());
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18216 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18216) : p.call(null,G__18216));
})();if(cljs.core.truth_(and__4263__auto__))
{var G__18217 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18217) : p.call(null,G__18217));
} else
{return and__4263__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18219 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18219) : p.call(null,G__18219));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18221 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18221) : p.call(null,G__18221));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var G__18222 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18222) : p.call(null,G__18222));
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__18391__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__18391 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18391__delegate.call(this,x,y,z,args);};
G__18391.cljs$lang$maxFixedArity = 3;
G__18391.cljs$lang$applyTo = (function (arglist__18392){
var x = cljs.core.first(arglist__18392);
arglist__18392 = cljs.core.next(arglist__18392);
var y = cljs.core.first(arglist__18392);
arglist__18392 = cljs.core.next(arglist__18392);
var z = cljs.core.first(arglist__18392);
var args = cljs.core.rest(arglist__18392);
return G__18391__delegate(x,y,z,args);
});
G__18391.cljs$core$IFn$_invoke$arity$variadic = G__18391__delegate;
return G__18391;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){return (function() {
var ep2 = null;
var ep2__0 = (function (){return true;
});
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18254 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18254) : p1.call(null,G__18254));
})();if(cljs.core.truth_(and__4263__auto__))
{var G__18255 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18255) : p2.call(null,G__18255));
} else
{return and__4263__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18257 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18257) : p1.call(null,G__18257));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18259 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18259) : p1.call(null,G__18259));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var and__4263__auto____$2 = (function (){var G__18261 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18261) : p2.call(null,G__18261));
})();if(cljs.core.truth_(and__4263__auto____$2))
{var G__18262 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18262) : p2.call(null,G__18262));
} else
{return and__4263__auto____$2;
}
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18264 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18264) : p1.call(null,G__18264));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18266 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18266) : p1.call(null,G__18266));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var and__4263__auto____$2 = (function (){var G__18268 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18268) : p1.call(null,G__18268));
})();if(cljs.core.truth_(and__4263__auto____$2))
{var and__4263__auto____$3 = (function (){var G__18270 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18270) : p2.call(null,G__18270));
})();if(cljs.core.truth_(and__4263__auto____$3))
{var and__4263__auto____$4 = (function (){var G__18272 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18272) : p2.call(null,G__18272));
})();if(cljs.core.truth_(and__4263__auto____$4))
{var G__18273 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18273) : p2.call(null,G__18273));
} else
{return and__4263__auto____$4;
}
} else
{return and__4263__auto____$3;
}
} else
{return and__4263__auto____$2;
}
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__18393__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__18001_SHARP_){var and__4263__auto__ = (function (){var G__18278 = p1__18001_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18278) : p1.call(null,G__18278));
})();if(cljs.core.truth_(and__4263__auto__))
{var G__18279 = p1__18001_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18279) : p2.call(null,G__18279));
} else
{return and__4263__auto__;
}
}),args)));
};
var G__18393 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18393__delegate.call(this,x,y,z,args);};
G__18393.cljs$lang$maxFixedArity = 3;
G__18393.cljs$lang$applyTo = (function (arglist__18394){
var x = cljs.core.first(arglist__18394);
arglist__18394 = cljs.core.next(arglist__18394);
var y = cljs.core.first(arglist__18394);
arglist__18394 = cljs.core.next(arglist__18394);
var z = cljs.core.first(arglist__18394);
var args = cljs.core.rest(arglist__18394);
return G__18393__delegate(x,y,z,args);
});
G__18393.cljs$core$IFn$_invoke$arity$variadic = G__18393__delegate;
return G__18393;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){return (function() {
var ep3 = null;
var ep3__0 = (function (){return true;
});
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18325 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18325) : p1.call(null,G__18325));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18327 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18327) : p2.call(null,G__18327));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var G__18328 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18328) : p3.call(null,G__18328));
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18330 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18330) : p1.call(null,G__18330));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18332 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18332) : p2.call(null,G__18332));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var and__4263__auto____$2 = (function (){var G__18334 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18334) : p3.call(null,G__18334));
})();if(cljs.core.truth_(and__4263__auto____$2))
{var and__4263__auto____$3 = (function (){var G__18336 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18336) : p1.call(null,G__18336));
})();if(cljs.core.truth_(and__4263__auto____$3))
{var and__4263__auto____$4 = (function (){var G__18338 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18338) : p2.call(null,G__18338));
})();if(cljs.core.truth_(and__4263__auto____$4))
{var G__18339 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18339) : p3.call(null,G__18339));
} else
{return and__4263__auto____$4;
}
} else
{return and__4263__auto____$3;
}
} else
{return and__4263__auto____$2;
}
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__4263__auto__ = (function (){var G__18341 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18341) : p1.call(null,G__18341));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18343 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18343) : p2.call(null,G__18343));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var and__4263__auto____$2 = (function (){var G__18345 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18345) : p3.call(null,G__18345));
})();if(cljs.core.truth_(and__4263__auto____$2))
{var and__4263__auto____$3 = (function (){var G__18347 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18347) : p1.call(null,G__18347));
})();if(cljs.core.truth_(and__4263__auto____$3))
{var and__4263__auto____$4 = (function (){var G__18349 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18349) : p2.call(null,G__18349));
})();if(cljs.core.truth_(and__4263__auto____$4))
{var and__4263__auto____$5 = (function (){var G__18351 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18351) : p3.call(null,G__18351));
})();if(cljs.core.truth_(and__4263__auto____$5))
{var and__4263__auto____$6 = (function (){var G__18353 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18353) : p1.call(null,G__18353));
})();if(cljs.core.truth_(and__4263__auto____$6))
{var and__4263__auto____$7 = (function (){var G__18355 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18355) : p2.call(null,G__18355));
})();if(cljs.core.truth_(and__4263__auto____$7))
{var G__18356 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18356) : p3.call(null,G__18356));
} else
{return and__4263__auto____$7;
}
} else
{return and__4263__auto____$6;
}
} else
{return and__4263__auto____$5;
}
} else
{return and__4263__auto____$4;
}
} else
{return and__4263__auto____$3;
}
} else
{return and__4263__auto____$2;
}
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__18395__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__18002_SHARP_){var and__4263__auto__ = (function (){var G__18363 = p1__18002_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18363) : p1.call(null,G__18363));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18365 = p1__18002_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18365) : p2.call(null,G__18365));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var G__18366 = p1__18002_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18366) : p3.call(null,G__18366));
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
}),args)));
};
var G__18395 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18395__delegate.call(this,x,y,z,args);};
G__18395.cljs$lang$maxFixedArity = 3;
G__18395.cljs$lang$applyTo = (function (arglist__18396){
var x = cljs.core.first(arglist__18396);
arglist__18396 = cljs.core.next(arglist__18396);
var y = cljs.core.first(arglist__18396);
arglist__18396 = cljs.core.next(arglist__18396);
var z = cljs.core.first(arglist__18396);
var args = cljs.core.rest(arglist__18396);
return G__18395__delegate(x,y,z,args);
});
G__18395.cljs$core$IFn$_invoke$arity$variadic = G__18395__delegate;
return G__18395;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__18397__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18003_SHARP_){var G__18382 = x;return (p1__18003_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18003_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18382) : p1__18003_SHARP_.call(null,G__18382));
});})(ps__$1))
,ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18004_SHARP_){var and__4263__auto__ = (function (){var G__18384 = x;return (p1__18004_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18004_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18384) : p1__18004_SHARP_.call(null,G__18384));
})();if(cljs.core.truth_(and__4263__auto__))
{var G__18385 = y;return (p1__18004_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18004_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18385) : p1__18004_SHARP_.call(null,G__18385));
} else
{return and__4263__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18005_SHARP_){var and__4263__auto__ = (function (){var G__18387 = x;return (p1__18005_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18005_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18387) : p1__18005_SHARP_.call(null,G__18387));
})();if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__18389 = y;return (p1__18005_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18005_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18389) : p1__18005_SHARP_.call(null,G__18389));
})();if(cljs.core.truth_(and__4263__auto____$1))
{var G__18390 = z;return (p1__18005_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18005_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18390) : p1__18005_SHARP_.call(null,G__18390));
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
});})(ps__$1))
,ps__$1);
});
var epn__4 = (function() { 
var G__18398__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__18006_SHARP_){return cljs.core.every_QMARK_(p1__18006_SHARP_,args);
});})(ps__$1))
,ps__$1)));
};
var G__18398 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18398__delegate.call(this,x,y,z,args);};
G__18398.cljs$lang$maxFixedArity = 3;
G__18398.cljs$lang$applyTo = (function (arglist__18399){
var x = cljs.core.first(arglist__18399);
arglist__18399 = cljs.core.next(arglist__18399);
var y = cljs.core.first(arglist__18399);
arglist__18399 = cljs.core.next(arglist__18399);
var z = cljs.core.first(arglist__18399);
var args = cljs.core.rest(arglist__18399);
return G__18398__delegate(x,y,z,args);
});
G__18398.cljs$core$IFn$_invoke$arity$variadic = G__18398__delegate;
return G__18398;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
;})(ps__$1))
};
var G__18397 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18397__delegate.call(this,p1,p2,p3,ps);};
G__18397.cljs$lang$maxFixedArity = 3;
G__18397.cljs$lang$applyTo = (function (arglist__18400){
var p1 = cljs.core.first(arglist__18400);
arglist__18400 = cljs.core.next(arglist__18400);
var p2 = cljs.core.first(arglist__18400);
arglist__18400 = cljs.core.next(arglist__18400);
var p3 = cljs.core.first(arglist__18400);
var ps = cljs.core.rest(arglist__18400);
return G__18397__delegate(p1,p2,p3,ps);
});
G__18397.cljs$core$IFn$_invoke$arity$variadic = G__18397__delegate;
return G__18397;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){return (function() {
var sp1 = null;
var sp1__0 = (function (){return null;
});
var sp1__1 = (function (x){var G__18606 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18606) : p.call(null,G__18606));
});
var sp1__2 = (function (x,y){var or__4275__auto__ = (function (){var G__18608 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18608) : p.call(null,G__18608));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var G__18609 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18609) : p.call(null,G__18609));
}
});
var sp1__3 = (function (x,y,z){var or__4275__auto__ = (function (){var G__18611 = x;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18611) : p.call(null,G__18611));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var G__18613 = y;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18613) : p.call(null,G__18613));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var G__18614 = z;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18614) : p.call(null,G__18614));
}
}
});
var sp1__4 = (function() { 
var G__18775__delegate = function (x,y,z,args){var or__4275__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__18775 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18775__delegate.call(this,x,y,z,args);};
G__18775.cljs$lang$maxFixedArity = 3;
G__18775.cljs$lang$applyTo = (function (arglist__18776){
var x = cljs.core.first(arglist__18776);
arglist__18776 = cljs.core.next(arglist__18776);
var y = cljs.core.first(arglist__18776);
arglist__18776 = cljs.core.next(arglist__18776);
var z = cljs.core.first(arglist__18776);
var args = cljs.core.rest(arglist__18776);
return G__18775__delegate(x,y,z,args);
});
G__18775.cljs$core$IFn$_invoke$arity$variadic = G__18775__delegate;
return G__18775;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){return (function() {
var sp2 = null;
var sp2__0 = (function (){return null;
});
var sp2__1 = (function (x){var or__4275__auto__ = (function (){var G__18646 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18646) : p1.call(null,G__18646));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var G__18647 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18647) : p2.call(null,G__18647));
}
});
var sp2__2 = (function (x,y){var or__4275__auto__ = (function (){var G__18649 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18649) : p1.call(null,G__18649));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var G__18651 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18651) : p1.call(null,G__18651));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var or__4275__auto____$2 = (function (){var G__18653 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18653) : p2.call(null,G__18653));
})();if(cljs.core.truth_(or__4275__auto____$2))
{return or__4275__auto____$2;
} else
{var G__18654 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18654) : p2.call(null,G__18654));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__4275__auto__ = (function (){var G__18656 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18656) : p1.call(null,G__18656));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var G__18658 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18658) : p1.call(null,G__18658));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var or__4275__auto____$2 = (function (){var G__18660 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18660) : p1.call(null,G__18660));
})();if(cljs.core.truth_(or__4275__auto____$2))
{return or__4275__auto____$2;
} else
{var or__4275__auto____$3 = (function (){var G__18662 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18662) : p2.call(null,G__18662));
})();if(cljs.core.truth_(or__4275__auto____$3))
{return or__4275__auto____$3;
} else
{var or__4275__auto____$4 = (function (){var G__18664 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18664) : p2.call(null,G__18664));
})();if(cljs.core.truth_(or__4275__auto____$4))
{return or__4275__auto____$4;
} else
{var G__18665 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18665) : p2.call(null,G__18665));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__18777__delegate = function (x,y,z,args){var or__4275__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.some(((function (or__4275__auto__){
return (function (p1__18401_SHARP_){var or__4275__auto____$1 = (function (){var G__18667 = p1__18401_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18667) : p1.call(null,G__18667));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var G__18668 = p1__18401_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18668) : p2.call(null,G__18668));
}
});})(or__4275__auto__))
,args);
}
};
var G__18777 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18777__delegate.call(this,x,y,z,args);};
G__18777.cljs$lang$maxFixedArity = 3;
G__18777.cljs$lang$applyTo = (function (arglist__18778){
var x = cljs.core.first(arglist__18778);
arglist__18778 = cljs.core.next(arglist__18778);
var y = cljs.core.first(arglist__18778);
arglist__18778 = cljs.core.next(arglist__18778);
var z = cljs.core.first(arglist__18778);
var args = cljs.core.rest(arglist__18778);
return G__18777__delegate(x,y,z,args);
});
G__18777.cljs$core$IFn$_invoke$arity$variadic = G__18777__delegate;
return G__18777;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){return (function() {
var sp3 = null;
var sp3__0 = (function (){return null;
});
var sp3__1 = (function (x){var or__4275__auto__ = (function (){var G__18714 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18714) : p1.call(null,G__18714));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var G__18716 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18716) : p2.call(null,G__18716));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var G__18717 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18717) : p3.call(null,G__18717));
}
}
});
var sp3__2 = (function (x,y){var or__4275__auto__ = (function (){var G__18719 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18719) : p1.call(null,G__18719));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var G__18721 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18721) : p2.call(null,G__18721));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var or__4275__auto____$2 = (function (){var G__18723 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18723) : p3.call(null,G__18723));
})();if(cljs.core.truth_(or__4275__auto____$2))
{return or__4275__auto____$2;
} else
{var or__4275__auto____$3 = (function (){var G__18725 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18725) : p1.call(null,G__18725));
})();if(cljs.core.truth_(or__4275__auto____$3))
{return or__4275__auto____$3;
} else
{var or__4275__auto____$4 = (function (){var G__18727 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18727) : p2.call(null,G__18727));
})();if(cljs.core.truth_(or__4275__auto____$4))
{return or__4275__auto____$4;
} else
{var G__18728 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18728) : p3.call(null,G__18728));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__4275__auto__ = (function (){var G__18730 = x;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18730) : p1.call(null,G__18730));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var G__18732 = x;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18732) : p2.call(null,G__18732));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var or__4275__auto____$2 = (function (){var G__18734 = x;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18734) : p3.call(null,G__18734));
})();if(cljs.core.truth_(or__4275__auto____$2))
{return or__4275__auto____$2;
} else
{var or__4275__auto____$3 = (function (){var G__18736 = y;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18736) : p1.call(null,G__18736));
})();if(cljs.core.truth_(or__4275__auto____$3))
{return or__4275__auto____$3;
} else
{var or__4275__auto____$4 = (function (){var G__18738 = y;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18738) : p2.call(null,G__18738));
})();if(cljs.core.truth_(or__4275__auto____$4))
{return or__4275__auto____$4;
} else
{var or__4275__auto____$5 = (function (){var G__18740 = y;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18740) : p3.call(null,G__18740));
})();if(cljs.core.truth_(or__4275__auto____$5))
{return or__4275__auto____$5;
} else
{var or__4275__auto____$6 = (function (){var G__18742 = z;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18742) : p1.call(null,G__18742));
})();if(cljs.core.truth_(or__4275__auto____$6))
{return or__4275__auto____$6;
} else
{var or__4275__auto____$7 = (function (){var G__18744 = z;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18744) : p2.call(null,G__18744));
})();if(cljs.core.truth_(or__4275__auto____$7))
{return or__4275__auto____$7;
} else
{var G__18745 = z;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18745) : p3.call(null,G__18745));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__18779__delegate = function (x,y,z,args){var or__4275__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.some(((function (or__4275__auto__){
return (function (p1__18402_SHARP_){var or__4275__auto____$1 = (function (){var G__18747 = p1__18402_SHARP_;return (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(G__18747) : p1.call(null,G__18747));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var or__4275__auto____$2 = (function (){var G__18749 = p1__18402_SHARP_;return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(G__18749) : p2.call(null,G__18749));
})();if(cljs.core.truth_(or__4275__auto____$2))
{return or__4275__auto____$2;
} else
{var G__18750 = p1__18402_SHARP_;return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(G__18750) : p3.call(null,G__18750));
}
}
});})(or__4275__auto__))
,args);
}
};
var G__18779 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18779__delegate.call(this,x,y,z,args);};
G__18779.cljs$lang$maxFixedArity = 3;
G__18779.cljs$lang$applyTo = (function (arglist__18780){
var x = cljs.core.first(arglist__18780);
arglist__18780 = cljs.core.next(arglist__18780);
var y = cljs.core.first(arglist__18780);
arglist__18780 = cljs.core.next(arglist__18780);
var z = cljs.core.first(arglist__18780);
var args = cljs.core.rest(arglist__18780);
return G__18779__delegate(x,y,z,args);
});
G__18779.cljs$core$IFn$_invoke$arity$variadic = G__18779__delegate;
return G__18779;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__18781__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return ((function (ps__$1){
return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some(((function (ps__$1){
return (function (p1__18403_SHARP_){var G__18766 = x;return (p1__18403_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18403_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18766) : p1__18403_SHARP_.call(null,G__18766));
});})(ps__$1))
,ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some(((function (ps__$1){
return (function (p1__18404_SHARP_){var or__4275__auto__ = (function (){var G__18768 = x;return (p1__18404_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18404_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18768) : p1__18404_SHARP_.call(null,G__18768));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var G__18769 = y;return (p1__18404_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18404_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18769) : p1__18404_SHARP_.call(null,G__18769));
}
});})(ps__$1))
,ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some(((function (ps__$1){
return (function (p1__18405_SHARP_){var or__4275__auto__ = (function (){var G__18771 = x;return (p1__18405_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18405_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18771) : p1__18405_SHARP_.call(null,G__18771));
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var G__18773 = y;return (p1__18405_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18405_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18773) : p1__18405_SHARP_.call(null,G__18773));
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var G__18774 = z;return (p1__18405_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18405_SHARP_.cljs$core$IFn$_invoke$arity$1(G__18774) : p1__18405_SHARP_.call(null,G__18774));
}
}
});})(ps__$1))
,ps__$1);
});
var spn__4 = (function() { 
var G__18782__delegate = function (x,y,z,args){var or__4275__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.some(((function (or__4275__auto__,ps__$1){
return (function (p1__18406_SHARP_){return cljs.core.some(p1__18406_SHARP_,args);
});})(or__4275__auto__,ps__$1))
,ps__$1);
}
};
var G__18782 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18782__delegate.call(this,x,y,z,args);};
G__18782.cljs$lang$maxFixedArity = 3;
G__18782.cljs$lang$applyTo = (function (arglist__18783){
var x = cljs.core.first(arglist__18783);
arglist__18783 = cljs.core.next(arglist__18783);
var y = cljs.core.first(arglist__18783);
arglist__18783 = cljs.core.next(arglist__18783);
var z = cljs.core.first(arglist__18783);
var args = cljs.core.rest(arglist__18783);
return G__18782__delegate(x,y,z,args);
});
G__18782.cljs$core$IFn$_invoke$arity$variadic = G__18782__delegate;
return G__18782;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
;})(ps__$1))
};
var G__18781 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__18781__delegate.call(this,p1,p2,p3,ps);};
G__18781.cljs$lang$maxFixedArity = 3;
G__18781.cljs$lang$applyTo = (function (arglist__18784){
var p1 = cljs.core.first(arglist__18784);
arglist__18784 = cljs.core.next(arglist__18784);
var p2 = cljs.core.first(arglist__18784);
arglist__18784 = cljs.core.next(arglist__18784);
var p3 = cljs.core.first(arglist__18784);
var ps = cljs.core.rest(arglist__18784);
return G__18781__delegate(p1,p2,p3,ps);
});
G__18781.cljs$core$IFn$_invoke$arity$variadic = G__18781__delegate;
return G__18781;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to
* the set of first items of each coll, followed by applying f to the
* set of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments. Returns a transducer when
* no collection is provided.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__1 = (function (f){return (function (f1){return (function() {
var G__18839 = null;
var G__18839__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__18839__1 = (function (result){var G__18825 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18825) : f1.call(null,G__18825));
});
var G__18839__2 = (function (result,input){var G__18826 = result;var G__18827 = (function (){var G__18828 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18828) : f.call(null,G__18828));
})();return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__18826,G__18827) : f1.call(null,G__18826,G__18827));
});
var G__18839__3 = (function() { 
var G__18840__delegate = function (result,input,inputs){var G__18829 = result;var G__18830 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__18829,G__18830) : f1.call(null,G__18829,G__18830));
};
var G__18840 = function (result,input,var_args){
var inputs = null;if (arguments.length > 2) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18840__delegate.call(this,result,input,inputs);};
G__18840.cljs$lang$maxFixedArity = 2;
G__18840.cljs$lang$applyTo = (function (arglist__18841){
var result = cljs.core.first(arglist__18841);
arglist__18841 = cljs.core.next(arglist__18841);
var input = cljs.core.first(arglist__18841);
var inputs = cljs.core.rest(arglist__18841);
return G__18840__delegate(result,input,inputs);
});
G__18840.cljs$core$IFn$_invoke$arity$variadic = G__18840__delegate;
return G__18840;
})()
;
G__18839 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__18839__0.call(this);
case 1:
return G__18839__1.call(this,result);
case 2:
return G__18839__2.call(this,result,input);
default:
return G__18839__3.cljs$core$IFn$_invoke$arity$variadic(result,input, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18839.cljs$lang$maxFixedArity = 2;
G__18839.cljs$lang$applyTo = G__18839__3.cljs$lang$applyTo;
G__18839.cljs$core$IFn$_invoke$arity$0 = G__18839__0;
G__18839.cljs$core$IFn$_invoke$arity$1 = G__18839__1;
G__18839.cljs$core$IFn$_invoke$arity$2 = G__18839__2;
G__18839.cljs$core$IFn$_invoke$arity$variadic = G__18839__3.cljs$core$IFn$_invoke$arity$variadic;
return G__18839;
})()
});
});
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__5144__auto___18842 = size;var i_18843 = (0);while(true){
if((i_18843 < n__5144__auto___18842))
{cljs.core.chunk_append(b,(function (){var G__18831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_18843);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18831) : f.call(null,G__18831));
})());
{
var G__18844 = (i_18843 + (1));
i_18843 = G__18844;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((function (){var G__18832 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18832) : f.call(null,G__18832));
})(),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((function (){var G__18833 = cljs.core.first(s1);var G__18834 = cljs.core.first(s2);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18833,G__18834) : f.call(null,G__18833,G__18834));
})(),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((function (){var G__18835 = cljs.core.first(s1);var G__18836 = cljs.core.first(s2);var G__18837 = cljs.core.first(s3);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__18835,G__18836,G__18837) : f.call(null,G__18835,G__18836,G__18837));
})(),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__18845__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__18785_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__18785_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__18845 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__18845__delegate.call(this,f,c1,c2,c3,colls);};
G__18845.cljs$lang$maxFixedArity = 4;
G__18845.cljs$lang$applyTo = (function (arglist__18846){
var f = cljs.core.first(arglist__18846);
arglist__18846 = cljs.core.next(arglist__18846);
var c1 = cljs.core.first(arglist__18846);
arglist__18846 = cljs.core.next(arglist__18846);
var c2 = cljs.core.first(arglist__18846);
arglist__18846 = cljs.core.next(arglist__18846);
var c3 = cljs.core.first(arglist__18846);
var colls = cljs.core.rest(arglist__18846);
return G__18845__delegate(f,c1,c2,c3,colls);
});
G__18845.cljs$core$IFn$_invoke$arity$variadic = G__18845__delegate;
return G__18845;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return map__1.call(this,f);
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$1 = map__1;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.  Returns a stateful transducer when
* no collection is provided.
*/
cljs.core.take = (function() {
var take = null;
var take__1 = (function (n){return (function (f1){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__18855 = null;
var G__18855__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__18855__1 = (function (result){var G__18852 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18852) : f1.call(null,G__18852));
});
var G__18855__2 = (function (result,input){var n__$1 = cljs.core.deref(na);var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);var result__$1 = (((n__$1 > (0)))?(function (){var G__18853 = result;var G__18854 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__18853,G__18854) : f1.call(null,G__18853,G__18854));
})():result);if(!((nn > (0))))
{return cljs.core.reduced(result__$1);
} else
{return result__$1;
}
});
G__18855 = function(result,input){
switch(arguments.length){
case 0:
return G__18855__0.call(this);
case 1:
return G__18855__1.call(this,result);
case 2:
return G__18855__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18855.cljs$core$IFn$_invoke$arity$0 = G__18855__0;
G__18855.cljs$core$IFn$_invoke$arity$1 = G__18855__1;
G__18855.cljs$core$IFn$_invoke$arity$2 = G__18855__2;
return G__18855;
})()
;})(na))
});
});
var take__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){if((n > (0)))
{var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take = function(n,coll){
switch(arguments.length){
case 1:
return take__1.call(this,n);
case 2:
return take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$1 = take__1;
take.cljs$core$IFn$_invoke$arity$2 = take__2;
return take;
})()
;
/**
* Returns a lazy sequence of all but the first n items in coll.
* Returns a stateful transducer when no collection is provided.
*/
cljs.core.drop = (function() {
var drop = null;
var drop__1 = (function (n){return (function (f1){var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);return ((function (na){
return (function() {
var G__18862 = null;
var G__18862__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__18862__1 = (function (result){var G__18859 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18859) : f1.call(null,G__18859));
});
var G__18862__2 = (function (result,input){var n__$1 = cljs.core.deref(na);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
if((n__$1 > (0)))
{return result;
} else
{var G__18860 = result;var G__18861 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__18860,G__18861) : f1.call(null,G__18860,G__18861));
}
});
G__18862 = function(result,input){
switch(arguments.length){
case 0:
return G__18862__0.call(this);
case 1:
return G__18862__1.call(this,result);
case 2:
return G__18862__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18862.cljs$core$IFn$_invoke$arity$0 = G__18862__0;
G__18862.cljs$core$IFn$_invoke$arity$1 = G__18862__1;
G__18862.cljs$core$IFn$_invoke$arity$2 = G__18862__2;
return G__18862;
})()
;})(na))
});
});
var drop__2 = (function (n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(((n__$1 > (0))) && (s))
{{
var G__18863 = (n__$1 - (1));
var G__18864 = cljs.core.rest(s);
n__$1 = G__18863;
coll__$1 = G__18864;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(n,coll);
});})(step))
,null,null));
});
drop = function(n,coll){
switch(arguments.length){
case 1:
return drop__1.call(this,n);
case 2:
return drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop.cljs$core$IFn$_invoke$arity$1 = drop__1;
drop.cljs$core$IFn$_invoke$arity$2 = drop__2;
return drop;
})()
;
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq(coll);var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));while(true){
if(lead)
{{
var G__18867 = cljs.core.next(s);
var G__18868 = cljs.core.next(lead);
s = G__18867;
lead = G__18868;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the
* first item for which (pred item) returns logical false.  Returns a
* stateful transducer when no collection is provided.
*/
cljs.core.drop_while = (function() {
var drop_while = null;
var drop_while__1 = (function (pred){return (function (f1){var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);return ((function (da){
return (function() {
var G__18881 = null;
var G__18881__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__18881__1 = (function (result){var G__18875 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18875) : f1.call(null,G__18875));
});
var G__18881__2 = (function (result,input){var drop_QMARK_ = cljs.core.deref(da);if(cljs.core.truth_((function (){var and__4263__auto__ = drop_QMARK_;if(cljs.core.truth_(and__4263__auto__))
{var G__18876 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18876) : pred.call(null,G__18876));
} else
{return and__4263__auto__;
}
})()))
{return result;
} else
{cljs.core.reset_BANG_(da,null);
var G__18877 = result;var G__18878 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__18877,G__18878) : f1.call(null,G__18877,G__18878));
}
});
G__18881 = function(result,input){
switch(arguments.length){
case 0:
return G__18881__0.call(this);
case 1:
return G__18881__1.call(this,result);
case 2:
return G__18881__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18881.cljs$core$IFn$_invoke$arity$0 = G__18881__0;
G__18881.cljs$core$IFn$_invoke$arity$1 = G__18881__1;
G__18881.cljs$core$IFn$_invoke$arity$2 = G__18881__2;
return G__18881;
})()
;})(da))
});
});
var drop_while__2 = (function (pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__4263__auto__ = s;if(and__4263__auto__)
{var G__18880 = cljs.core.first(s);return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__18880) : pred__$1.call(null,G__18880));
} else
{return and__4263__auto__;
}
})()))
{{
var G__18882 = pred__$1;
var G__18883 = cljs.core.rest(s);
pred__$1 = G__18882;
coll__$1 = G__18883;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,((function (step){
return (function (){return step(pred,coll);
});})(step))
,null,null));
});
drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return drop_while__1.call(this,pred);
case 2:
return drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_while.cljs$core$IFn$_invoke$arity$1 = drop_while__1;
drop_while.cljs$core$IFn$_invoke$arity$2 = drop_while__2;
return drop_while;
})()
;
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(function (){var G__18892 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18892) : f.call(null,G__18892));
})());
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__18895__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__18895 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__18895__delegate.call(this,c1,c2,colls);};
G__18895.cljs$lang$maxFixedArity = 2;
G__18895.cljs$lang$applyTo = (function (arglist__18896){
var c1 = cljs.core.first(arglist__18896);
arglist__18896 = cljs.core.next(arglist__18896);
var c2 = cljs.core.first(arglist__18896);
var colls = cljs.core.rest(arglist__18896);
return G__18895__delegate(c1,c2,colls);
});
G__18895.cljs$core$IFn$_invoke$arity$variadic = G__18895__delegate;
return G__18895;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var coll__$1 = temp__4124__auto__;return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else
{if(cljs.core.seq(colls__$1))
{return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection. Returns
* a transducer when no collections are provided
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__1 = (function (f){return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var mapcat__2 = (function() { 
var G__18905__delegate = function (f,colls){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__18905 = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__18905__delegate.call(this,f,colls);};
G__18905.cljs$lang$maxFixedArity = 1;
G__18905.cljs$lang$applyTo = (function (arglist__18906){
var f = cljs.core.first(arglist__18906);
var colls = cljs.core.rest(arglist__18906);
return G__18905__delegate(f,colls);
});
G__18905.cljs$core$IFn$_invoke$arity$variadic = G__18905__delegate;
return G__18905;
})()
;
mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return mapcat__1.call(this,f);
default:
return mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 1;
mapcat.cljs$lang$applyTo = mapcat__2.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$1 = mapcat__1;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.filter = (function() {
var filter = null;
var filter__1 = (function (pred){return (function (f1){return (function() {
var G__18925 = null;
var G__18925__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__18925__1 = (function (result){var G__18919 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18919) : f1.call(null,G__18919));
});
var G__18925__2 = (function (result,input){if(cljs.core.truth_((function (){var G__18920 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18920) : pred.call(null,G__18920));
})()))
{var G__18921 = result;var G__18922 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__18921,G__18922) : f1.call(null,G__18921,G__18922));
} else
{return result;
}
});
G__18925 = function(result,input){
switch(arguments.length){
case 0:
return G__18925__0.call(this);
case 1:
return G__18925__1.call(this,result);
case 2:
return G__18925__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18925.cljs$core$IFn$_invoke$arity$0 = G__18925__0;
G__18925.cljs$core$IFn$_invoke$arity$1 = G__18925__1;
G__18925.cljs$core$IFn$_invoke$arity$2 = G__18925__2;
return G__18925;
})()
});
});
var filter__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__5144__auto___18926 = size;var i_18927 = (0);while(true){
if((i_18927 < n__5144__auto___18926))
{if(cljs.core.truth_((function (){var G__18923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_18927);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18923) : pred.call(null,G__18923));
})()))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_18927));
} else
{}
{
var G__18928 = (i_18927 + (1));
i_18927 = G__18928;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((function (){var G__18924 = f;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18924) : pred.call(null,G__18924));
})()))
{return cljs.core.cons(f,filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else
{return filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else
{return null;
}
}),null,null));
});
filter = function(pred,coll){
switch(arguments.length){
case 1:
return filter__1.call(this,pred);
case 2:
return filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter.cljs$core$IFn$_invoke$arity$1 = filter__1;
filter.cljs$core$IFn$_invoke$arity$2 = filter__2;
return filter;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.remove = (function() {
var remove = null;
var remove__1 = (function (pred){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var remove__2 = (function (pred,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
remove = function(pred,coll){
switch(arguments.length){
case 1:
return remove__1.call(this,pred);
case 2:
return remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove.cljs$core$IFn$_invoke$arity$1 = remove__1;
remove.cljs$core$IFn$_invoke$arity$2 = remove__2;
return remove;
})()
;
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((function (){var G__18935 = node;return (branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__18935) : branch_QMARK_.call(null,G__18935));
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(walk,cljs.core.array_seq([(function (){var G__18936 = node;return (children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(G__18936) : children.call(null,G__18936));
})()], 0)):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18937_SHARP_){return !(cljs.core.sequential_QMARK_(p1__18937_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined. A transducer may be supplied.
*/
cljs.core.into = (function() {
var into = null;
var into__2 = (function (to,from){if(!((to == null)))
{if((function (){var G__18940 = to;if(G__18940)
{var bit__4931__auto__ = (G__18940.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4931__auto__) || (G__18940.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var into__3 = (function (to,xform,from){if((function (){var G__18941 = to;if(G__18941)
{var bit__4931__auto__ = (G__18941.cljs$lang$protocol_mask$partition1$ & (4));if((bit__4931__auto__) || (G__18941.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else
{return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
into = function(to,xform,from){
switch(arguments.length){
case 2:
return into__2.call(this,to,xform);
case 3:
return into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into.cljs$core$IFn$_invoke$arity$2 = into__2;
into.cljs$core$IFn$_invoke$arity$3 = into__3;
return into;
})()
;
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(function (){var G__18943 = o;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18943) : f.call(null,G__18943));
})());
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__18944__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__18944 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__18944__delegate.call(this,f,c1,c2,c3,colls);};
G__18944.cljs$lang$maxFixedArity = 4;
G__18944.cljs$lang$applyTo = (function (arglist__18945){
var f = cljs.core.first(arglist__18945);
arglist__18945 = cljs.core.next(arglist__18945);
var c1 = cljs.core.first(arglist__18945);
arglist__18945 = cljs.core.next(arglist__18945);
var c2 = cljs.core.first(arglist__18945);
arglist__18945 = cljs.core.next(arglist__18945);
var c3 = cljs.core.first(arglist__18945);
var colls = cljs.core.rest(arglist__18945);
return G__18944__delegate(f,c1,c2,c3,colls);
});
G__18944.cljs$core$IFn$_invoke$arity$variadic = G__18944__delegate;
return G__18944;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((function (){var G__18947 = o;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__18947) : pred.call(null,G__18947));
})()))
{return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else
{return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq(ks);while(true){
if(ks__$1)
{if(!((function (){var G__18962 = m__$1;if(G__18962)
{var bit__4938__auto__ = (G__18962.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4938__auto__) || (G__18962.cljs$core$ILookup$))
{return true;
} else
{if((!G__18962.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__18962);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__18962);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__18963 = sentinel;
var G__18964 = m__$2;
var G__18965 = cljs.core.next(ks__$1);
sentinel = G__18963;
m__$1 = G__18964;
ks__$1 = G__18965;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__18966,v){var vec__18971 = p__18966;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18971,(0),null);var ks = cljs.core.nthnext(vec__18971,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__18972,f){var vec__19010 = p__18972;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19010,(0),null);var ks = cljs.core.nthnext(vec__19010,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19011) : f.call(null,G__19011));
})());
}
});
var update_in__4 = (function (m,p__18973,f,a){var vec__19012 = p__18973;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19012,(0),null);var ks = cljs.core.nthnext(vec__19012,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__19014 = a;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19013,G__19014) : f.call(null,G__19013,G__19014));
})());
}
});
var update_in__5 = (function (m,p__18974,f,a,b){var vec__19015 = p__18974;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(0),null);var ks = cljs.core.nthnext(vec__19015,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__19017 = a;var G__19018 = b;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19016,G__19017,G__19018) : f.call(null,G__19016,G__19017,G__19018));
})());
}
});
var update_in__6 = (function (m,p__18975,f,a,b,c){var vec__19019 = p__18975;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19019,(0),null);var ks = cljs.core.nthnext(vec__19019,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__19021 = a;var G__19022 = b;var G__19023 = c;return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__19020,G__19021,G__19022,G__19023) : f.call(null,G__19020,G__19021,G__19022,G__19023));
})());
}
});
var update_in__7 = (function() { 
var G__19025__delegate = function (m,p__18976,f,a,b,c,args){var vec__19024 = p__18976;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(0),null);var ks = cljs.core.nthnext(vec__19024,(1));if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__19025 = function (m,p__18976,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__19025__delegate.call(this,m,p__18976,f,a,b,c,args);};
G__19025.cljs$lang$maxFixedArity = 6;
G__19025.cljs$lang$applyTo = (function (arglist__19026){
var m = cljs.core.first(arglist__19026);
arglist__19026 = cljs.core.next(arglist__19026);
var p__18976 = cljs.core.first(arglist__19026);
arglist__19026 = cljs.core.next(arglist__19026);
var f = cljs.core.first(arglist__19026);
arglist__19026 = cljs.core.next(arglist__19026);
var a = cljs.core.first(arglist__19026);
arglist__19026 = cljs.core.next(arglist__19026);
var b = cljs.core.first(arglist__19026);
arglist__19026 = cljs.core.next(arglist__19026);
var c = cljs.core.first(arglist__19026);
var args = cljs.core.rest(arglist__19026);
return G__19025__delegate(m,p__18976,f,a,b,c,args);
});
G__19025.cljs$core$IFn$_invoke$arity$variadic = G__19025__delegate;
return G__19025;
})()
;
update_in = function(m,p__18976,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__18976,f);
case 4:
return update_in__4.call(this,m,p__18976,f,a);
case 5:
return update_in__5.call(this,m,p__18976,f,a,b);
case 6:
return update_in__6.call(this,m,p__18976,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__18976,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__4854__auto__,writer__4855__auto__,opts__4856__auto__){return cljs.core._write(writer__4855__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){var cnt = pv.cnt;if((cnt < (32)))
{return (0);
} else
{return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function new_path(edit,level,node){var ll = level;var ret = node;while(true){
if((ll === (0)))
{return ret;
} else
{var embed = ret;var r = cljs.core.pv_fresh_node(edit);var _ = cljs.core.pv_aset(r,(0),embed);{
var G__19027 = (ll - (5));
var G__19028 = r;
ll = G__19027;
ret = G__19028;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node(parent);var subidx = (((pv.cnt - (1)) >>> level) & (31));if(((5) === level))
{cljs.core.pv_aset(ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget(parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail(pv,(level - (5)),child,tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error(("No item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" in vector of length "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt))));
});
cljs.core.first_array_for_longvec = (function first_array_for_longvec(pv){var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__19033 = cljs.core.pv_aget(node,(0));
var G__19034 = (level - (5));
node = G__19033;
level = G__19034;
continue;
}
} else
{return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function unchecked_array_for(pv,i){if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > (0)))
{{
var G__19035 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__19036 = (level - (5));
node = G__19035;
level = G__19036;
continue;
}
} else
{return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function array_for(pv,i){if((((0) <= i)) && ((i < pv.cnt)))
{return cljs.core.unchecked_array_for(pv,i);
} else
{return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node(node);if((level === (0)))
{cljs.core.pv_aset(ret,(i & (31)),val);
return ret;
} else
{var subidx = ((i >>> level) & (31));cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,new_child);
return ret;
}
} else
{if((subidx === (0)))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,null);
return ret;

}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentVector.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__19046 = init__$2;var G__19047 = (j + i);var G__19048 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19046,G__19047,G__19048) : f.call(null,G__19046,G__19047,G__19048));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__19059 = (j + (1));
var G__19060 = init__$3;
j = G__19059;
init__$2 = G__19060;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__19049 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19049) : cljs.core.deref.call(null,G__19049));
} else
{{
var G__19061 = (i + len);
var G__19062 = init__$2;
i = G__19061;
init__$1 = G__19062;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(coll__$1) <= n))
{var new_tail = cljs.core.aclone(self__.tail);(new_tail[(n & (31))] = val);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else
{if((n === self__.cnt))
{return cljs.core._conj(coll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds  [0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt)+"]")));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else
{var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - (1));if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(function (){var G__19050 = self__.root;return (cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(G__19050) : cljs.core.tv_editable_root.call(null,G__19050));
})(),(function (){var G__19051 = self__.tail;return (cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(G__19051) : cljs.core.tv_editable_tail.call(null,G__19051));
})()));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var i = (0);var init__$1 = init;while(true){
if((i < self__.cnt))
{var arr = cljs.core.unchecked_array_for(v__$1,i);var len = arr.length;var init__$2 = (function (){var j = (0);var init__$2 = init__$1;while(true){
if((j < len))
{var init__$3 = (function (){var G__19052 = init__$2;var G__19053 = (arr[j]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19052,G__19053) : f.call(null,G__19052,G__19053));
})();if(cljs.core.reduced_QMARK_(init__$3))
{return init__$3;
} else
{{
var G__19063 = (j + (1));
var G__19064 = init__$3;
j = G__19063;
init__$2 = G__19064;
continue;
}
}
} else
{return init__$2;
}
break;
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__19054 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19054) : cljs.core.deref.call(null,G__19054));
} else
{{
var G__19065 = (i + len);
var G__19066 = init__$2;
i = G__19065;
init__$1 = G__19066;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._assoc_n(coll__$1,k,v);
} else
{throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === (0)))
{return null;
} else
{if((self__.cnt <= (32)))
{return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else
{var G__19055 = coll__$1;var G__19056 = cljs.core.first_array_for_longvec(coll__$1);var G__19057 = (0);var G__19058 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19055,G__19056,G__19057,G__19058) : cljs.core.chunked_seq.call(null,G__19055,G__19056,G__19057,G__19058));

}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32)))
{var len = self__.tail.length;var new_tail = (new Array((len + (1))));var n__5144__auto___19067 = len;var i_19068 = (0);while(true){
if((i_19068 < n__5144__auto___19067))
{(new_tail[i_19068] = (self__.tail[i_19068]));
{
var G__19069 = (i_19068 + (1));
i_19068 = G__19069;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);cljs.core.pv_aset(n_r,(0),self__.root);
cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__19070 = null;
var G__19070__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__19070__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__19070 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19070__2.call(this,self__,k);
case 3:
return G__19070__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19070.cljs$core$IFn$_invoke$arity$2 = G__19070__2;
G__19070.cljs$core$IFn$_invoke$arity$3 = G__19070__3;
return G__19070;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args19045){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19045)));
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));if((l < (32)))
{return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice((0),(32));var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = (32);var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);while(true){
if((i < l))
{{
var G__19071 = (i + (1));
var G__19072 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__19071;
out = G__19072;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0))))
{return cljs.core.PersistentVector.fromArray(args.arr,true);
} else
{return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__19073){
var args = cljs.core.seq(arglist__19073);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__19074 = self__.vec;var G__19075 = self__.node;var G__19076 = self__.i;var G__19077 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19074,G__19075,G__19076,G__19077) : cljs.core.chunked_seq.call(null,G__19074,G__19075,G__19076,G__19077));
})();if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__19078 = self__.vec;var G__19079 = (self__.i + self__.off);var G__19080 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__19078,G__19079,G__19080) : cljs.core.subvec.call(null,G__19078,G__19079,G__19080));
})(),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__19081 = self__.vec;var G__19082 = (self__.i + self__.off);var G__19083 = cljs.core.count(self__.vec);return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__19081,G__19082,G__19083) : cljs.core.subvec.call(null,G__19081,G__19082,G__19083));
})(),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + (1)) < self__.node.length))
{var s = (function (){var G__19084 = self__.vec;var G__19085 = self__.node;var G__19086 = self__.i;var G__19087 = (self__.off + (1));return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19084,G__19085,G__19086,G__19087) : cljs.core.chunked_seq.call(null,G__19084,G__19085,G__19086,G__19087));
})();if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__19088 = self__.vec;var G__19089 = cljs.core.unchecked_array_for(self__.vec,end);var G__19090 = end;var G__19091 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19088,G__19089,G__19090,G__19091) : cljs.core.chunked_seq.call(null,G__19088,G__19089,G__19090,G__19091));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;var G__19092 = self__.vec;var G__19093 = self__.node;var G__19094 = self__.i;var G__19095 = self__.off;var G__19096 = m;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(G__19092,G__19093,G__19094,G__19095,G__19096) : cljs.core.chunked_seq.call(null,G__19092,G__19093,G__19094,G__19095,G__19096));
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var end = (self__.i + self__.node.length);if((end < cljs.core._count(self__.vec)))
{var G__19097 = self__.vec;var G__19098 = cljs.core.unchecked_array_for(self__.vec,end);var G__19099 = end;var G__19100 = (0);return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__19097,G__19098,G__19099,G__19100) : cljs.core.chunked_seq.call(null,G__19097,G__19098,G__19099,G__19100));
} else
{return null;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Subvec.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < (0))) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + n);var G__19102 = self__.meta;var G__19103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);var G__19104 = self__.start;var G__19105 = (function (){var x__4582__auto__ = self__.end;var y__4583__auto__ = (v_pos + (1));return ((x__4582__auto__ > y__4583__auto__) ? x__4582__auto__ : y__4583__auto__);
})();var G__19106 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19102,G__19103,G__19104,G__19105,G__19106) : cljs.core.build_subvec.call(null,G__19102,G__19103,G__19104,G__19105,G__19106));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{var G__19107 = self__.meta;var G__19108 = self__.v;var G__19109 = self__.start;var G__19110 = (self__.end - (1));var G__19111 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19107,G__19108,G__19109,G__19110,G__19111) : cljs.core.build_subvec.call(null,G__19107,G__19108,G__19109,G__19110,G__19111));
}
});
cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(!((self__.start === self__.end)))
{return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else
{return null;
}
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n(coll__$1,key,val);
} else
{throw (new Error("Subvec's key for assoc must be a number."));
}
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = ((function (coll__$1){
return (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){return subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;return subvec_seq(self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;var G__19113 = meta__$1;var G__19114 = self__.v;var G__19115 = self__.start;var G__19116 = self__.end;var G__19117 = self__.__hash;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19113,G__19114,G__19115,G__19116,G__19117) : cljs.core.build_subvec.call(null,G__19113,G__19114,G__19115,G__19116,G__19117));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;var G__19118 = self__.meta;var G__19119 = cljs.core._assoc_n(self__.v,self__.end,o);var G__19120 = self__.start;var G__19121 = (self__.end + (1));var G__19122 = null;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__19118,G__19119,G__19120,G__19121,G__19122) : cljs.core.build_subvec.call(null,G__19118,G__19119,G__19120,G__19121,G__19122));
});
cljs.core.Subvec.prototype.call = (function() {
var G__19123 = null;
var G__19123__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__19123__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__19123 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19123__2.call(this,self__,k);
case 3:
return G__19123__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19123.cljs$core$IFn$_invoke$arity$2 = G__19123__2;
G__19123.cljs$core$IFn$_invoke$arity$3 = G__19123__3;
return G__19123;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args19101){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19101)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__19124 = meta;
var G__19125 = v.v;
var G__19126 = (v.start + start);
var G__19127 = (v.start + end);
var G__19128 = __hash;
meta = G__19124;
v = G__19125;
start = G__19126;
end = G__19127;
__hash = G__19128;
continue;
}
} else
{var c = cljs.core.count(v);if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c)))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec(null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj19135 = {};return obj19135;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy(tl,(0),ret,(0),tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);var subidx = (((tv.cnt - (1)) >>> level) & (31));cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);if(!((child == null)))
{return tv_push_tail(tv,(level - (5)),child,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);var subidx = (((tv.cnt - (2)) >>> level) & (31));if((level > (5)))
{var new_child = tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));if(((new_child == null)) && ((subidx === (0))))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === (0)))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,null);
return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function unchecked_editable_array_for(tv,i){if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > (0)))
{{
var G__19143 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__19144 = (level - (5));
node = G__19143;
level = G__19144;
continue;
}
} else
{return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__19148 = null;
var G__19148__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19148__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19148 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19148__2.call(this,self__,k);
case 3:
return G__19148__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19148.cljs$core$IFn$_invoke$arity$2 = G__19148__2;
G__19148.cljs$core$IFn$_invoke$arity$3 = G__19148__3;
return G__19148;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args19145){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19145)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(typeof k === 'number')
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if((((0) <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((((0) <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off(tcoll__$1) <= n))
{(self__.tail[(n & (31))] = val);
return tcoll__$1;
} else
{var new_root = ((function (tcoll__$1){
return (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);if((level === (0)))
{cljs.core.pv_aset(node__$1,(n & (31)),val);
return node__$1;
} else
{var subidx = ((n >>> level) & (31));cljs.core.pv_aset(node__$1,subidx,go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));
return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_(tcoll__$1,val);
} else
{throw (new Error(("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)+" out of bounds for TransientVector of length"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cnt))));

}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((self__.cnt === (0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1) === self__.cnt))
{self__.cnt = (0);
return tcoll__$1;
} else
{if((((self__.cnt - (1)) & (31)) > (0)))
{self__.cnt = (self__.cnt - (1));
return tcoll__$1;
} else
{var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));self__.root = new_root__$1;
self__.shift = (self__.shift - (5));
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - (1));
self__.tail = new_tail;
return tcoll__$1;
}

}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(typeof key === 'number')
{return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else
{throw (new Error("TransientVector's key for assoc! must be a number."));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32)))
{(self__.tail[(self__.cnt & (31))] = o);
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[(0)] = o);
self__.tail = new_tail;
if(((self__.cnt >>> (5)) > ((1) << self__.shift)))
{var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift = (self__.shift + (5));(new_root_array[(0)] = self__.root);
(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + (1));
return tcoll__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){return (new cljs.core.TransientVector(cnt,shift,root,tail));
});

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty(coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueue.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4124__auto__ = cljs.core.next(self__.front);if(temp__4124__auto__)
{var f1 = temp__4124__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest(cljs.core.seq(coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__4275__auto__ = self__.front;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4275__auto__ = self__.rear;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return false;
});
cljs.core.NeverEquiv.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){return (new cljs.core.NeverEquiv());
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = (0);while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__19149 = (i + incr);
i = G__19149;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash(a);var b__$1 = cljs.core.hash(b);if((a__$1 < b__$1))
{return (-1);
} else
{if((a__$1 > b__$1))
{return (1);
} else
{return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta(m);var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__19150 = (i + (1));
var G__19151 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__19150;
out = G__19151;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj19155 = {};return obj19155;
})();var l = ks.length;var i_19156 = (0);while(true){
if((i_19156 < l))
{var k_19157 = (ks[i_19156]);(new_obj[k_19157] = (obj[k_19157]));
{
var G__19158 = (i_19156 + (1));
i_19156 = G__19158;
continue;
}
} else
{}
break;
}
return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ObjMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__4263__auto__ = (function (){var G__19162 = k;return goog.isString(G__19162);
})();if(cljs.core.truth_(and__4263__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__4263__auto__;
}
})()))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq(keys__$1))
{var k = cljs.core.first(keys__$1);var init__$2 = (function (){var G__19163 = init__$1;var G__19164 = k;var G__19165 = (self__.strobj[k]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19163,G__19164,G__19165) : f.call(null,G__19163,G__19164,G__19165));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__19166 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19166) : cljs.core.deref.call(null,G__19166));
} else
{{
var G__19172 = cljs.core.rest(keys__$1);
var G__19173 = init__$2;
keys__$1 = G__19172;
init__$1 = G__19173;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__4263__auto__ = (function (){var G__19168 = k;return goog.isString(G__19168);
})();if(cljs.core.truth_(and__4263__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__4263__auto__;
}
})()))
{var new_keys = cljs.core.aclone(self__.keys);var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else
{return coll__$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var G__19169 = k;return goog.isString(G__19169);
})()))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else
{if(!((cljs.core.scan_array((1),k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);var new_keys = cljs.core.aclone(self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_((function (){var and__4263__auto__ = (function (){var G__19171 = k;return goog.isString(G__19171);
})();if(cljs.core.truth_(and__4263__auto__))
{return !((cljs.core.scan_array((1),k,self__.keys) == null));
} else
{return and__4263__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__19159_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19159_SHARP_,(self__.strobj[p1__19159_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__19174 = null;
var G__19174__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19174__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19174 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19174__2.call(this,self__,k);
case 3:
return G__19174__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19174.cljs$core$IFn$_invoke$arity$2 = G__19174__2;
G__19174.cljs$core$IFn$_invoke$arity$3 = G__19174__3;
return G__19174;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args19160){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19160)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj19176 = {};return obj19176;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.Iterator = (function (s){
this.s = s;
})
cljs.core.Iterator.cljs$lang$type = true;
cljs.core.Iterator.cljs$lang$ctorStr = "cljs.core/Iterator";
cljs.core.Iterator.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Iterator");
});
cljs.core.Iterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": x};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_Iterator = (function __GT_Iterator(s){return (new cljs.core.Iterator(s));
});
cljs.core.iterator = (function iterator(coll){return (new cljs.core.Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.EntriesIterator = (function (s){
this.s = s;
})
cljs.core.EntriesIterator.cljs$lang$type = true;
cljs.core.EntriesIterator.cljs$lang$ctorStr = "cljs.core/EntriesIterator";
cljs.core.EntriesIterator.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/EntriesIterator");
});
cljs.core.EntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var vec__19177 = cljs.core.first(self__.s);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19177,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19177,(1),null);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [k,v]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_EntriesIterator = (function __GT_EntriesIterator(s){return (new cljs.core.EntriesIterator(s));
});
cljs.core.entries_iterator = (function entries_iterator(coll){return (new cljs.core.EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.SetEntriesIterator.cljs$lang$type = true;
cljs.core.SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/SetEntriesIterator";
cljs.core.SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/SetEntriesIterator");
});
cljs.core.SetEntriesIterator.prototype.next = (function (){var self__ = this;
var _ = this;if(!((self__.s == null)))
{var x = cljs.core.first(self__.s);self__.s = cljs.core.next(self__.s);
return {"done": false, "value": [x,x]};
} else
{return {"done": true, "value": null};
}
});
cljs.core.__GT_SetEntriesIterator = (function __GT_SetEntriesIterator(s){return (new cljs.core.SetEntriesIterator(s));
});
cljs.core.set_entries_iterator = (function set_entries_iterator(coll){return (new cljs.core.SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(((arr[i]) == null))
{return i;
} else
{{
var G__19178 = (i + (2));
i = G__19178;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){var len = arr.length;var kstr = k.fqn;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})())
{return i;
} else
{{
var G__19179 = (i + (2));
i = G__19179;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){var len = arr.length;var kstr = k.str;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})())
{return i;
} else
{{
var G__19180 = (i + (2));
i = G__19180;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if((k === (arr[i])))
{return i;
} else
{{
var G__19181 = (i + (2));
i = G__19181;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){var len = arr.length;var i = (0);while(true){
if((len <= i))
{return (-1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i])))
{return i;
} else
{{
var G__19182 = (i + (2));
i = G__19182;
continue;
}

}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){var arr = m.arr;if((k instanceof cljs.core.Keyword))
{return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else
{if(cljs.core.truth_((function (){var or__4275__auto__ = (function (){var G__19186 = k;return goog.isString(G__19186);
})();if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return typeof k === 'number';
}
})()))
{return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else
{return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + (2))));var i_19187 = (0);while(true){
if((i_19187 < l))
{(narr[i_19187] = (arr[i_19187]));
{
var G__19188 = (i_19187 + (1));
i_19187 = G__19188;
continue;
}
} else
{}
break;
}
(narr[l] = k);
(narr[(l + (1))] = v);
return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return ((self__.arr.length - self__.i) / (2));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){if((i <= (arr.length - (2))))
{return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentArrayMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__19190 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__19190) : cljs.core.keys.call(null,G__19190));
})());
});
cljs.core.PersistentArrayMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentArrayMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__19191 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__19191) : cljs.core.vals.call(null,G__19191));
})());
});
cljs.core.PersistentArrayMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentArrayMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__19192 = cljs.core.seq(coll);var chunk__19193 = null;var count__19194 = (0);var i__19195 = (0);while(true){
if((i__19195 < count__19194))
{var vec__19196 = chunk__19193.cljs$core$IIndexed$_nth$arity$2(null,i__19195);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19196,(1),null);var G__19197_19209 = v;var G__19198_19210 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19197_19209,G__19198_19210) : f.call(null,G__19197_19209,G__19198_19210));
{
var G__19211 = seq__19192;
var G__19212 = chunk__19193;
var G__19213 = count__19194;
var G__19214 = (i__19195 + (1));
seq__19192 = G__19211;
chunk__19193 = G__19212;
count__19194 = G__19213;
i__19195 = G__19214;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__19192);if(temp__4126__auto__)
{var seq__19192__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19192__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__19192__$1);{
var G__19215 = cljs.core.chunk_rest(seq__19192__$1);
var G__19216 = c__5044__auto__;
var G__19217 = cljs.core.count(c__5044__auto__);
var G__19218 = (0);
seq__19192 = G__19215;
chunk__19193 = G__19216;
count__19194 = G__19217;
i__19195 = G__19218;
continue;
}
} else
{var vec__19199 = cljs.core.first(seq__19192__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19199,(1),null);var G__19200_19219 = v;var G__19201_19220 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19200_19219,G__19201_19220) : f.call(null,G__19200_19219,G__19201_19220));
{
var G__19221 = cljs.core.next(seq__19192__$1);
var G__19222 = null;
var G__19223 = (0);
var G__19224 = (0);
seq__19192 = G__19221;
chunk__19193 = G__19222;
count__19194 = G__19223;
i__19195 = G__19224;
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
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var G__19202 = init__$1;var G__19203 = (self__.arr[i]);var G__19204 = (self__.arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19202,G__19203,G__19204) : f.call(null,G__19202,G__19203,G__19204));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__19205 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19205) : cljs.core.deref.call(null,G__19205));
} else
{{
var G__19225 = (i + (2));
var G__19226 = init__$2;
i = G__19225;
init__$1 = G__19226;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj19207 = {};return obj19207;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx >= (0)))
{var len = self__.arr.length;var new_len = (len - (2));if((new_len === (0)))
{return cljs.core._empty(coll__$1);
} else
{var new_arr = (new Array(new_len));var s = (0);var d = (0);while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s])))
{{
var G__19227 = (s + (2));
var G__19228 = d;
s = G__19227;
d = G__19228;
continue;
}
} else
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + (1))] = (self__.arr[(s + (1))]));
{
var G__19229 = (s + (2));
var G__19230 = (d + (2));
s = G__19229;
d = G__19230;
continue;
}

}
}
break;
}
}
} else
{return coll__$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === (-1)))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else
{return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + (1))])))
{return coll__$1;
} else
{var arr__$1 = (function (){var G__19208 = cljs.core.aclone(self__.arr);(G__19208[(idx + (1))] = v);
return G__19208;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__19231 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__19232 = cljs.core.next(es);
ret = G__19231;
es = G__19232;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__19233 = null;
var G__19233__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19233__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19233 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19233__2.call(this,self__,k);
case 3:
return G__19233__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19233.cljs$core$IFn$_invoke$arity$2 = G__19233__2;
G__19233.cljs$core$IFn$_invoke$arity$3 = G__19233__3;
return G__19233;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args19189){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19189)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));if(no_check)
{var cnt = (arr__$1.length / (2));return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = (0);var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__19234 = (i + (2));
var G__19235 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__19234;
ret = G__19235;
continue;
}
} else
{return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= (0)))
{(self__.arr[idx] = (self__.arr[(self__.len - (2))]));
(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));
var G__19236_19244 = self__.arr;G__19236_19244.pop();
G__19236_19244.pop();
self__.len = (self__.len - (2));
} else
{}
return tcoll__$1;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx === (-1)))
{if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + (2));
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__19237 = self__.len;var G__19238 = self__.arr;return (cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(G__19237,G__19238) : cljs.core.array__GT_transient_hash_map.call(null,G__19237,G__19238));
})(),key,val);
}
} else
{if((val === (self__.arr[(idx + (1))])))
{return tcoll__$1;
} else
{(self__.arr[(idx + (1))] = val);
return tcoll__$1;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__19239 = o;if(G__19239)
{var bit__4938__auto__ = (G__19239.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4938__auto__) || (G__19239.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__19239.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__19239);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__19239);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(function (){var G__19240 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__19240) : cljs.core.key.call(null,G__19240));
})(),(function (){var G__19241 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__19241) : cljs.core.val.call(null,G__19241));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__19245 = cljs.core.next(es);
var G__19246 = cljs.core._assoc_BANG_(tcoll__$2,(function (){var G__19242 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__19242) : cljs.core.key.call(null,G__19242));
})(),(function (){var G__19243 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__19243) : cljs.core.val.call(null,G__19243));
})());
es = G__19245;
tcoll__$2 = G__19246;
continue;
}
} else
{return tcoll__$2;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,k);if((idx === (-1)))
{return not_found;
} else
{return (self__.arr[(idx + (1))]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot(self__.len,(2));
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);var i = (0);while(true){
if((i < len))
{{
var G__19247 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__19248 = (i + (2));
out = G__19247;
i = G__19248;
continue;
}
} else
{return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__4854__auto__,writer__4855__auto__,opts__4856__auto__){return cljs.core._write(writer__4855__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_(key,other))
{return true;
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function mask(hash,shift){return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){var G__19251 = cljs.core.aclone(arr);(G__19251[i] = a);
return G__19251;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__19252 = cljs.core.aclone(arr);(G__19252[i] = a);
(G__19252[j] = b);
return G__19252;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - (2))));cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));
cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function bitpos(hash,shift){return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){var len = arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);if(!((k == null)))
{var G__19257 = init__$1;var G__19258 = k;var G__19259 = (arr[(i + (1))]);return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19257,G__19258,G__19259) : f.call(null,G__19257,G__19258,G__19259));
} else
{var node = (arr[(i + (1))]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__19260 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19260) : cljs.core.deref.call(null,G__19260));
} else
{{
var G__19261 = (i + (2));
var G__19262 = init__$2;
i = G__19261;
init__$1 = G__19262;
continue;
}
}
} else
{return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count(self__.bitmap);var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{(removed_leaf_QMARK_[(0)] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return inode;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));
(earr[(len - (2))] = null);
(earr[(len - (1))] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__19263 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__19263) : cljs.core.create_inode_seq.call(null,G__19263));
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return val_or_node;
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((((2) * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));
(earr[((2) * idx)] = key);
(earr[(((2) * idx) + (1))] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_19277 = (0);var j_19278 = (0);while(true){
if((i_19277 < (32)))
{if((((self__.bitmap >>> i_19277) & (1)) === (0)))
{{
var G__19279 = (i_19277 + (1));
var G__19280 = j_19278;
i_19277 = G__19279;
j_19278 = G__19280;
continue;
}
} else
{(nodes[i_19277] = ((!(((self__.arr[j_19278]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_19278])),(self__.arr[j_19278]),(self__.arr[(j_19278 + (1))]),added_leaf_QMARK_):(self__.arr[(j_19278 + (1))])));
{
var G__19281 = (i_19277 + (1));
var G__19282 = (j_19278 + (2));
i_19277 = G__19281;
j_19278 = G__19282;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (4)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;

}
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__19264 = edit__$1;var G__19265 = (shift + (5));var G__19266 = key_or_nil;var G__19267 = val_or_node;var G__19268 = hash;var G__19269 = key;var G__19270 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__19264,G__19265,G__19266,G__19267,G__19268,G__19269,G__19270) : cljs.core.create_node.call(null,G__19264,G__19265,G__19266,G__19267,G__19268,G__19269,G__19270));
})());

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === (0)))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= (16)))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));
var i_19283 = (0);var j_19284 = (0);while(true){
if((i_19283 < (32)))
{if((((self__.bitmap >>> i_19283) & (1)) === (0)))
{{
var G__19285 = (i_19283 + (1));
var G__19286 = j_19284;
i_19283 = G__19285;
j_19284 = G__19286;
continue;
}
} else
{(nodes[i_19283] = ((!(((self__.arr[j_19284]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_19284])),(self__.arr[j_19284]),(self__.arr[(j_19284 + (1))]),added_leaf_QMARK_):(self__.arr[(j_19284 + (1))])));
{
var G__19287 = (i_19283 + (1));
var G__19288 = (j_19284 + (2));
i_19283 = G__19287;
j_19284 = G__19288;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else
{var new_arr = (new Array(((2) * (n + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));
(new_arr[((2) * idx)] = key);
(new_arr[(((2) * idx) + (1))] = val);
cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__19271 = (shift + (5));var G__19272 = key_or_nil;var G__19273 = val_or_node;var G__19274 = hash;var G__19275 = key;var G__19276 = val;return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__19271,G__19272,G__19273,G__19274,G__19275,G__19276) : cljs.core.create_node.call(null,G__19271,G__19272,G__19273,G__19274,G__19275,G__19276));
})())));

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{return not_found;

}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === (0)))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[((2) * idx)]);var val_or_node = (self__.arr[(((2) * idx) + (1))]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + (5)),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{return inode;

}
}
}
});
cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = arr.length;var new_arr = (new Array(((2) * (array_node.cnt - (1)))));var i = (0);var j = (1);var bitmap = (0);while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__19289 = (i + (1));
var G__19290 = (j + (2));
var G__19291 = (bitmap | ((1) << i));
i = G__19289;
j = G__19290;
bitmap = G__19291;
continue;
}
} else
{{
var G__19292 = (i + (1));
var G__19293 = j;
var G__19294 = bitmap;
i = G__19292;
j = G__19293;
bitmap = G__19294;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);editable.cnt = (editable.cnt - (1));
return editable;
}
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__19295 = self__.arr;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(G__19295) : cljs.core.create_array_node_seq.call(null,G__19295));
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = (0);var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{var G__19296 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19296) : cljs.core.deref.call(null,G__19296));
} else
{{
var G__19297 = (i + (1));
var G__19298 = init__$2;
i = G__19297;
init__$1 = G__19298;
continue;
}
}
} else
{{
var G__19299 = (i + (1));
var G__19300 = init__$1;
i = G__19299;
init__$1 = G__19300;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_lookup((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + (1));
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_find((shift + (5)),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{var n = node.inode_without((shift + (5)),hash,key);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= (8)))
{return cljs.core.pack_array_node(inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else
{return inode;
}
});
cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){return (new cljs.core.ArrayNode(edit,cnt,arr));
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){var lim = ((2) * cnt);var i = (0);while(true){
if((i < lim))
{if(cljs.core.key_test(key,(arr[i])))
{return i;
} else
{{
var G__19301 = (i + (2));
i = G__19301;
continue;
}
}
} else
{return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var new_arr = (new Array(((2) * (self__.cnt + (1)))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{(removed_leaf_QMARK_[(0)] = true);
if((self__.cnt === (1)))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));
(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));
(earr[(((2) * self__.cnt) - (1))] = null);
(earr[(((2) * self__.cnt) - (2))] = null);
editable.cnt = (editable.cnt - (1));
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;var G__19302 = self__.arr;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(G__19302) : cljs.core.create_inode_seq.call(null,G__19302));
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return (self__.arr[(idx + (1))]);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{if((self__.arr.length > ((2) * self__.cnt)))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + (1));
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else
{if(((self__.arr[(idx + (1))]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{var len = ((2) * self__.cnt);var new_arr = (new Array((len + (2))));cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);
(new_arr[len] = key);
(new_arr[(len + (1))] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){var self__ = this;
var inode = this;if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < (0)))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else
{return not_found;

}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === (-1)))
{return inode;
} else
{if((self__.cnt === (1)))
{return null;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});
cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.NodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{var G__19303 = self__.nodes;var G__19304 = (self__.i + (2));var G__19305 = null;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__19303,G__19304,G__19305) : cljs.core.create_inode_seq.call(null,G__19303,G__19304,G__19305));
} else
{var G__19306 = self__.nodes;var G__19307 = self__.i;var G__19308 = cljs.core.next(self__.s);return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__19306,G__19307,G__19308) : cljs.core.create_inode_seq.call(null,G__19306,G__19307,G__19308));
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var create_inode_seq__3 = (function (nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4124__auto__ = (nodes[(j + (1))]);if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;var temp__4124__auto____$1 = node.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var node_seq = temp__4124__auto____$1;return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else
{{
var G__19312 = (j + (2));
j = G__19312;
continue;
}
}
} else
{{
var G__19313 = (j + (2));
j = G__19313;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var G__19314 = null;var G__19315 = self__.nodes;var G__19316 = self__.i;var G__19317 = cljs.core.next(self__.s);return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__19314,G__19315,G__19316,G__19317) : cljs.core.create_array_node_seq.call(null,G__19314,G__19315,G__19316,G__19317));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4124__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4124__auto__))
{var nj = temp__4124__auto__;var temp__4124__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4124__auto____$1))
{var ns = temp__4124__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else
{{
var G__19322 = (j + (1));
j = G__19322;
continue;
}
}
} else
{{
var G__19323 = (j + (1));
j = G__19323;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__19325 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__19325) : cljs.core.keys.call(null,G__19325));
})());
});
cljs.core.PersistentHashMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__19326 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__19326) : cljs.core.vals.call(null,G__19326));
})());
});
cljs.core.PersistentHashMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__19327 = cljs.core.seq(coll);var chunk__19328 = null;var count__19329 = (0);var i__19330 = (0);while(true){
if((i__19330 < count__19329))
{var vec__19331 = chunk__19328.cljs$core$IIndexed$_nth$arity$2(null,i__19330);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19331,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19331,(1),null);var G__19332_19343 = v;var G__19333_19344 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19332_19343,G__19333_19344) : f.call(null,G__19332_19343,G__19333_19344));
{
var G__19345 = seq__19327;
var G__19346 = chunk__19328;
var G__19347 = count__19329;
var G__19348 = (i__19330 + (1));
seq__19327 = G__19345;
chunk__19328 = G__19346;
count__19329 = G__19347;
i__19330 = G__19348;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__19327);if(temp__4126__auto__)
{var seq__19327__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19327__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__19327__$1);{
var G__19349 = cljs.core.chunk_rest(seq__19327__$1);
var G__19350 = c__5044__auto__;
var G__19351 = cljs.core.count(c__5044__auto__);
var G__19352 = (0);
seq__19327 = G__19349;
chunk__19328 = G__19350;
count__19329 = G__19351;
i__19330 = G__19352;
continue;
}
} else
{var vec__19334 = cljs.core.first(seq__19327__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19334,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19334,(1),null);var G__19335_19353 = v;var G__19336_19354 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19335_19353,G__19336_19354) : f.call(null,G__19335_19353,G__19336_19354));
{
var G__19355 = cljs.core.next(seq__19327__$1);
var G__19356 = null;
var G__19357 = (0);
var G__19358 = (0);
seq__19327 = G__19355;
chunk__19328 = G__19356;
count__19329 = G__19357;
i__19330 = G__19358;
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
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(function (){var G__19337 = init;var G__19338 = null;var G__19339 = self__.nil_val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19337,G__19338,G__19339) : f.call(null,G__19337,G__19338,G__19339));
})():init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__19340 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19340) : cljs.core.deref.call(null,G__19340));
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{return init__$1;

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj19342 = {};return obj19342;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else
{return coll__$1;
}
} else
{if((self__.root == null))
{return coll__$1;
} else
{var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if((k == null))
{if((self__.has_nil_QMARK_) && ((v === self__.nil_val)))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__19359 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__19360 = cljs.core.next(es);
ret = G__19359;
es = G__19360;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__19361 = null;
var G__19361__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19361__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19361 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19361__2.call(this,self__,k);
case 3:
return G__19361__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19361.cljs$core$IFn$_invoke$arity$2 = G__19361__2;
G__19361.cljs$core$IFn$_invoke$arity$3 = G__19361__3;
return G__19361;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args19324){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19324)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__19362 = (i + (1));
var G__19363 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__19362;
out = G__19363;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){var self__ = this;
var tcoll = this;if(self__.edit)
{if((function (){var G__19364 = o;if(G__19364)
{var bit__4938__auto__ = (G__19364.cljs$lang$protocol_mask$partition0$ & (2048));if((bit__4938__auto__) || (G__19364.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__19364.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__19364);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__19364);
}
})())
{return tcoll.assoc_BANG_((function (){var G__19365 = o;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__19365) : cljs.core.key.call(null,G__19365));
})(),(function (){var G__19366 = o;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__19366) : cljs.core.val.call(null,G__19366));
})());
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4124__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;{
var G__19369 = cljs.core.next(es);
var G__19370 = tcoll__$1.assoc_BANG_((function (){var G__19367 = e;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__19367) : cljs.core.key.call(null,G__19367));
})(),(function (){var G__19368 = e;return (cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(G__19368) : cljs.core.val.call(null,G__19368));
})());
es = G__19369;
tcoll__$1 = G__19370;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + (1));
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + (1));
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - (1));
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[(0)])))
{self__.count = (self__.count - (1));
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){var self__ = this;
var tcoll = this;if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){var t = node;var stack__$1 = stack;while(true){
if(!((t == null)))
{{
var G__19371 = ((ascending_QMARK_)?t.left:t.right);
var G__19372 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__19371;
stack__$1 = G__19372;
continue;
}
} else
{return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < (0)))
{return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek(self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first(self__.stack);var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){if((ins instanceof cljs.core.RedNode))
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if((right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if((left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);if(cljs.core.reduced_QMARK_(init__$1))
{var G__19385 = init__$1;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19385) : cljs.core.deref.call(null,G__19385));
} else
{var init__$2 = (function (){var G__19386 = init__$1;var G__19387 = node.key;var G__19388 = node.val;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19386,G__19387,G__19388) : f.call(null,G__19386,G__19387,G__19388));
})();if(cljs.core.reduced_QMARK_(init__$2))
{var G__19389 = init__$2;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19389) : cljs.core.deref.call(null,G__19389));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{var G__19390 = init__$3;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19390) : cljs.core.deref.call(null,G__19390));
} else
{return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){var self__ = this;
var node = this;return node;
});
cljs.core.BlackNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.BlackNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__19392 = null;
var G__19392__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19392__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19392 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19392__2.call(this,self__,k);
case 3:
return G__19392__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19392.cljs$core$IFn$_invoke$arity$2 = G__19392__2;
G__19392.cljs$core$IFn$_invoke$arity$3 = G__19392__3;
return G__19392;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args19391){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19391)));
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){var self__ = this;
var node = this;throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.blacken = (function (){var self__ = this;
var node = this;return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});
cljs.core.RedNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.RedNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return null;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === (0)))
{return self__.key;
} else
{if((n === (1)))
{return self__.val;
} else
{return not_found;

}
}
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return (2);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.RedNode.prototype.call = (function() {
var G__19394 = null;
var G__19394__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19394__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19394 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19394__2.call(this,self__,k);
case 3:
return G__19394__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19394.cljs$core$IFn$_invoke$arity$2 = G__19394__2;
G__19394.cljs$core$IFn$_invoke$arity$3 = G__19394__3;
return G__19394;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args19393){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19393)));
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){return (new cljs.core.RedNode(key,val,left,right,__hash));
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = (function (){var G__19407 = k;var G__19408 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__19407,G__19408) : comp.call(null,G__19407,G__19408));
})();if((c === (0)))
{(found[(0)] = tree);
return null;
} else
{if((c < (0)))
{var ins = tree_map_add(comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{var ins = tree_map_add(comp,tree.right,k,v,found);if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}

}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if((left instanceof cljs.core.RedNode))
{if((right instanceof cljs.core.RedNode))
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){if(!((tree == null)))
{var c = (function (){var G__19427 = k;var G__19428 = tree.key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__19427,G__19428) : comp.call(null,G__19427,G__19428));
})();if((c === (0)))
{(found[(0)] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c < (0)))
{var del = tree_map_remove(comp,tree.left,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{var del = tree_map_remove(comp,tree.right,k,found);if((!((del == null))) || (!(((found[(0)]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}

}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (function (){var G__19439 = k;var G__19440 = tk;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__19439,G__19440) : comp.call(null,G__19439,G__19440));
})();if((c === (0)))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < (0)))
{return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__19442 = cljs.core.seq(coll);var chunk__19443 = null;var count__19444 = (0);var i__19445 = (0);while(true){
if((i__19445 < count__19444))
{var vec__19446 = chunk__19443.cljs$core$IIndexed$_nth$arity$2(null,i__19445);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(1),null);var G__19447_19459 = v;var G__19448_19460 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19447_19459,G__19448_19460) : f.call(null,G__19447_19459,G__19448_19460));
{
var G__19461 = seq__19442;
var G__19462 = chunk__19443;
var G__19463 = count__19444;
var G__19464 = (i__19445 + (1));
seq__19442 = G__19461;
chunk__19443 = G__19462;
count__19444 = G__19463;
i__19445 = G__19464;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__19442);if(temp__4126__auto__)
{var seq__19442__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19442__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__19442__$1);{
var G__19465 = cljs.core.chunk_rest(seq__19442__$1);
var G__19466 = c__5044__auto__;
var G__19467 = cljs.core.count(c__5044__auto__);
var G__19468 = (0);
seq__19442 = G__19465;
chunk__19443 = G__19466;
count__19444 = G__19467;
i__19445 = G__19468;
continue;
}
} else
{var vec__19449 = cljs.core.first(seq__19442__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19449,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19449,(1),null);var G__19450_19469 = v;var G__19451_19470 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19450_19469,G__19451_19470) : f.call(null,G__19450_19469,G__19451_19470));
{
var G__19471 = cljs.core.next(seq__19442__$1);
var G__19472 = null;
var G__19473 = (0);
var G__19474 = (0);
seq__19442 = G__19471;
chunk__19443 = G__19472;
count__19444 = G__19473;
i__19445 = G__19474;
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
cljs.core.PersistentTreeMap.prototype.get = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMap.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__19452 = coll;return (cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(G__19452) : cljs.core.keys.call(null,G__19452));
})());
});
cljs.core.PersistentTreeMap.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator((function (){var G__19453 = coll;return (cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(G__19453) : cljs.core.vals.call(null,G__19453));
})());
});
cljs.core.PersistentTreeMap.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__19454 = k;var G__19455 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__19454,G__19455) : self__.comp.call(null,G__19454,G__19455));
})();if((c === (0)))
{return t;
} else
{if((c < (0)))
{{
var G__19475 = t.left;
t = G__19475;
continue;
}
} else
{{
var G__19476 = t.right;
t = G__19476;
continue;
}

}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else
{var ret = coll__$1;var es = cljs.core.seq(entry);while(true){
if((es == null))
{return ret;
} else
{var e = cljs.core.first(es);if(cljs.core.vector_QMARK_(e))
{{
var G__19477 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__19478 = cljs.core.next(es);
ret = G__19477;
es = G__19478;
continue;
}
} else
{throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__19479 = null;
var G__19479__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19479__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19479 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19479__2.call(this,self__,k);
case 3:
return G__19479__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19479.cljs$core$IFn$_invoke$arity$2 = G__19479__2;
G__19479.cljs$core$IFn$_invoke$arity$3 = G__19479__3;
return G__19479;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args19441){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19441)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > (0)))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (function (){var G__19456 = k;var G__19457 = t.key;return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__19456,G__19457) : self__.comp.call(null,G__19456,G__19457));
})();if((c === (0)))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < (0)))
{{
var G__19480 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__19481 = t.left;
stack = G__19480;
t = G__19481;
continue;
}
} else
{{
var G__19482 = stack;
var G__19483 = t.right;
stack = G__19482;
t = G__19483;
continue;
}
}
} else
{if((c > (0)))
{{
var G__19484 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__19485 = t.right;
stack = G__19484;
t = G__19485;
continue;
}
} else
{{
var G__19486 = stack;
var G__19487 = t.left;
stack = G__19486;
t = G__19487;
continue;
}
}

}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;var G__19458 = entry;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(G__19458) : cljs.core.key.call(null,G__19458));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__19488 = cljs.core.nnext(in$);
var G__19489 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__19488;
out = G__19489;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__19490){
var keyvals = cljs.core.seq(arglist__19490);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),(2)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__19491){
var keyvals = cljs.core.seq(arglist__19491);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj19495 = {};return obj19495;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__19496 = cljs.core.nnext(kvs);
kvs = G__19496;
continue;
}
} else
{return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__19497){
var keyvals = cljs.core.seq(arglist__19497);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__19498 = cljs.core.nnext(in$);
var G__19499 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__19498;
out = G__19499;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__19500){
var keyvals = cljs.core.seq(arglist__19500);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq(keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));while(true){
if(in$)
{{
var G__19501 = cljs.core.nnext(in$);
var G__19502 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__19501;
out = G__19502;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__19503){
var comparator = cljs.core.first(arglist__19503);
var keyvals = cljs.core.rest(arglist__19503);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.cljs$lang$type = true;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.KeySeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__19504 = self__.mseq;if(G__19504)
{var bit__4938__auto__ = (G__19504.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4938__auto__) || (G__19504.cljs$core$INext$))
{return true;
} else
{if((!G__19504.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19504);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_key$arity$1(null);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__19505 = self__.mseq;if(G__19505)
{var bit__4938__auto__ = (G__19505.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4938__auto__) || (G__19505.cljs$core$INext$))
{return true;
} else
{if((!G__19505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19505);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19505);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.cljs$lang$type = true;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ValSeq.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__19506 = self__.mseq;if(G__19506)
{var bit__4938__auto__ = (G__19506.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4938__auto__) || (G__19506.cljs$core$INext$))
{return true;
} else
{if((!G__19506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19506);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_ordered_coll(coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_val$arity$1(null);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__19507 = self__.mseq;if(G__19507)
{var bit__4938__auto__ = (G__19507.cljs$lang$protocol_mask$partition0$ & (128));if((bit__4938__auto__) || (G__19507.cljs$core$INext$))
{return true;
} else
{if((!G__19507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19507);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__19507);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4126__auto__ = cljs.core.seq(hash_map);if(temp__4126__auto__)
{var mseq = temp__4126__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19508_SHARP_,p2__19509_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4275__auto__ = p1__19508_SHARP_;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__19509_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__19510){
var maps = cljs.core.seq(arglist__19510);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first(e);var v = cljs.core.second(e);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);var G__19514 = v;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19513,G__19514) : f.call(null,G__19513,G__19514));
})());
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__4275__auto__ = m1;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__19515){
var f = cljs.core.first(arglist__19515);
var maps = cljs.core.rest(arglist__19515);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq(keyseq);while(true){
if(keys)
{var key = cljs.core.first(keys);var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$119);{
var G__19516 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$119))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__19517 = cljs.core.next(keys);
ret = G__19516;
keys = G__19517;
continue;
}
} else
{return ret;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentHashSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentHashSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__19520 = cljs.core.seq(coll);var chunk__19521 = null;var count__19522 = (0);var i__19523 = (0);while(true){
if((i__19523 < count__19522))
{var vec__19524 = chunk__19521.cljs$core$IIndexed$_nth$arity$2(null,i__19523);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(1),null);var G__19525_19530 = v;var G__19526_19531 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19525_19530,G__19526_19531) : f.call(null,G__19525_19530,G__19526_19531));
{
var G__19532 = seq__19520;
var G__19533 = chunk__19521;
var G__19534 = count__19522;
var G__19535 = (i__19523 + (1));
seq__19520 = G__19532;
chunk__19521 = G__19533;
count__19522 = G__19534;
i__19523 = G__19535;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__19520);if(temp__4126__auto__)
{var seq__19520__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19520__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__19520__$1);{
var G__19536 = cljs.core.chunk_rest(seq__19520__$1);
var G__19537 = c__5044__auto__;
var G__19538 = cljs.core.count(c__5044__auto__);
var G__19539 = (0);
seq__19520 = G__19536;
chunk__19521 = G__19537;
count__19522 = G__19538;
i__19523 = G__19539;
continue;
}
} else
{var vec__19527 = cljs.core.first(seq__19520__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19527,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19527,(1),null);var G__19528_19540 = v;var G__19529_19541 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19528_19540,G__19529_19541) : f.call(null,G__19528_19540,G__19529_19541));
{
var G__19542 = cljs.core.next(seq__19520__$1);
var G__19543 = null;
var G__19544 = (0);
var G__19545 = (0);
seq__19520 = G__19542;
chunk__19521 = G__19543;
count__19522 = G__19544;
i__19523 = G__19545;
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
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_(self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__19518_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__19518_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__19546 = null;
var G__19546__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19546__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19546 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19546__2.call(this,self__,k);
case 3:
return G__19546__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19546.cljs$core$IFn$_invoke$arity$2 = G__19546__2;
G__19546.cljs$core$IFn$_invoke$arity$3 = G__19546__3;
return G__19546;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args19519){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19519)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone(items));var i = (0);var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__19547 = (i + (1));
var G__19548 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__19547;
out = G__19548;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else
{var i = (0);var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__19549 = (i + (1));
var G__19550 = cljs.core._conj_BANG_(out,(items[i]));
i = G__19549;
out = G__19550;
continue;
}
} else
{return cljs.core._persistent_BANG_(out);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__19552 = null;
var G__19552__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__19552__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__19552 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19552__2.call(this,self__,k);
case 3:
return G__19552__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19552.cljs$core$IFn$_invoke$arity$2 = G__19552__2;
G__19552.cljs$core$IFn$_invoke$arity$3 = G__19552__3;
return G__19552;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args19551){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19551)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count(self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});
cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){return (new cljs.core.TransientHashSet(transient_map));
});

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeSet.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.PersistentTreeSet.prototype.keys = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.entries = (function (){var self__ = this;
var coll = this;return cljs.core.set_entries_iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.values = (function (){var self__ = this;
var coll = this;return cljs.core.iterator(cljs.core.seq(coll));
});
cljs.core.PersistentTreeSet.prototype.has = (function (k){var self__ = this;
var coll = this;return cljs.core.contains_QMARK_(coll,k);
});
cljs.core.PersistentTreeSet.prototype.forEach = (function (f){var self__ = this;
var coll = this;var seq__19555 = cljs.core.seq(coll);var chunk__19556 = null;var count__19557 = (0);var i__19558 = (0);while(true){
if((i__19558 < count__19557))
{var vec__19559 = chunk__19556.cljs$core$IIndexed$_nth$arity$2(null,i__19558);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19559,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19559,(1),null);var G__19560_19565 = v;var G__19561_19566 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19560_19565,G__19561_19566) : f.call(null,G__19560_19565,G__19561_19566));
{
var G__19567 = seq__19555;
var G__19568 = chunk__19556;
var G__19569 = count__19557;
var G__19570 = (i__19558 + (1));
seq__19555 = G__19567;
chunk__19556 = G__19568;
count__19557 = G__19569;
i__19558 = G__19570;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__19555);if(temp__4126__auto__)
{var seq__19555__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19555__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__19555__$1);{
var G__19571 = cljs.core.chunk_rest(seq__19555__$1);
var G__19572 = c__5044__auto__;
var G__19573 = cljs.core.count(c__5044__auto__);
var G__19574 = (0);
seq__19555 = G__19571;
chunk__19556 = G__19572;
count__19557 = G__19573;
i__19558 = G__19574;
continue;
}
} else
{var vec__19562 = cljs.core.first(seq__19555__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19562,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19562,(1),null);var G__19563_19575 = v;var G__19564_19576 = k;(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19563_19575,G__19564_19576) : f.call(null,G__19563_19575,G__19564_19576));
{
var G__19577 = cljs.core.next(seq__19555__$1);
var G__19578 = null;
var G__19579 = (0);
var G__19580 = (0);
seq__19555 = G__19577;
chunk__19556 = G__19578;
count__19557 = G__19579;
i__19558 = G__19580;
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
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count(self__.tree_map) > (0)))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__19553_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__19553_SHARP_);
});})(coll__$1))
,other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__19581 = null;
var G__19581__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19581__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19581 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19581__2.call(this,self__,k);
case 3:
return G__19581__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19581.cljs$core$IFn$_invoke$arity$2 = G__19581__2;
G__19581.cljs$core$IFn$_invoke$arity$3 = G__19581__3;
return G__19581;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args19554){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19554)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator(self__.tree_map);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__5138__auto__ = arr;var i = (0);var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__5138__auto__.length))
{{
var G__19582 = (i + (1));
var G__19583 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__19582;
res = G__19583;
continue;
}
} else
{return res;
}
break;
}
})();return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq(coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0))))
{return cljs.core.set_from_indexed_seq(in$);
} else
{var in$__$1 = in$;var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__19584 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__19585 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__19584;
out = G__19585;
continue;
}
} else
{return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__19586__delegate = function (keys){return cljs.core.set(keys);
};
var G__19586 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__19586__delegate.call(this,keys);};
G__19586.cljs$lang$maxFixedArity = 0;
G__19586.cljs$lang$applyTo = (function (arglist__19587){
var keys = cljs.core.seq(arglist__19587);
return G__19586__delegate(keys);
});
G__19586.cljs$core$IFn$_invoke$arity$variadic = G__19586__delegate;
return G__19586;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__19588){
var keys = cljs.core.seq(arglist__19588);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__19589){
var comparator = cljs.core.first(arglist__19589);
var keys = cljs.core.rest(arglist__19589);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap.  Returns a transducer when no collection
* is provided.
*/
cljs.core.replace = (function() {
var replace = null;
var replace__1 = (function (smap){return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__19590_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__19590_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.val(e);
} else
{return p1__19590_SHARP_;
}
}));
});
var replace__2 = (function (smap,coll){if(cljs.core.vector_QMARK_(coll))
{var n = cljs.core.count(coll);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){var temp__4124__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else
{return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19591_SHARP_){var temp__4124__auto__ = cljs.core.find(smap,p1__19591_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return cljs.core.second(e);
} else
{return p1__19591_SHARP_;
}
}),coll);
}
});
replace = function(smap,coll){
switch(arguments.length){
case 1:
return replace__1.call(this,smap);
case 2:
return replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace.cljs$core$IFn$_invoke$arity$1 = replace__1;
replace.cljs$core$IFn$_invoke$arity$2 = replace__2;
return replace;
})()
;
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__19602,seen__$1){while(true){
var vec__19603 = p__19602;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19603,(0),null);var xs__$1 = vec__19603;var temp__4126__auto__ = cljs.core.seq(xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__19604 = cljs.core.rest(s);
var G__19605 = seen__$1;
p__19602 = G__19604;
seen__$1 = G__19605;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next(s__$1))
{{
var G__19606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__19607 = cljs.core.next(s__$1);
ret = G__19606;
s__$1 = G__19607;
continue;
}
} else
{return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__19609 = x;if(G__19609)
{var bit__4931__auto__ = (G__19609.cljs$lang$protocol_mask$partition1$ & (4096));if((bit__4931__auto__) || (G__19609.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_name$arity$1(null);
} else
{if(typeof x === 'string')
{return x;
} else
{throw (new Error(("Doesn't support name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq(keys);var vs = cljs.core.seq(vals);while(true){
if((ks) && (vs))
{{
var G__19610 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__19611 = cljs.core.next(ks);
var G__19612 = cljs.core.next(vs);
map = G__19610;
ks = G__19611;
vs = G__19612;
continue;
}
} else
{return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){return x;
});
var max_key__3 = (function (k,x,y){if(((function (){var G__19623 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__19623) : k.call(null,G__19623));
})() > (function (){var G__19624 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__19624) : k.call(null,G__19624));
})()))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__19625__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19613_SHARP_,p2__19614_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__19613_SHARP_,p2__19614_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__19625 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19625__delegate.call(this,k,x,y,more);};
G__19625.cljs$lang$maxFixedArity = 3;
G__19625.cljs$lang$applyTo = (function (arglist__19626){
var k = cljs.core.first(arglist__19626);
arglist__19626 = cljs.core.next(arglist__19626);
var x = cljs.core.first(arglist__19626);
arglist__19626 = cljs.core.next(arglist__19626);
var y = cljs.core.first(arglist__19626);
var more = cljs.core.rest(arglist__19626);
return G__19625__delegate(k,x,y,more);
});
G__19625.cljs$core$IFn$_invoke$arity$variadic = G__19625__delegate;
return G__19625;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){return x;
});
var min_key__3 = (function (k,x,y){if(((function (){var G__19637 = x;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__19637) : k.call(null,G__19637));
})() < (function (){var G__19638 = y;return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__19638) : k.call(null,G__19638));
})()))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__19639__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19627_SHARP_,p2__19628_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__19627_SHARP_,p2__19628_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__19639 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19639__delegate.call(this,k,x,y,more);};
G__19639.cljs$lang$maxFixedArity = 3;
G__19639.cljs$lang$applyTo = (function (arglist__19640){
var k = cljs.core.first(arglist__19640);
arglist__19640 = cljs.core.next(arglist__19640);
var x = cljs.core.first(arglist__19640);
arglist__19640 = cljs.core.next(arglist__19640);
var y = cljs.core.first(arglist__19640);
var more = cljs.core.rest(arglist__19640);
return G__19639__delegate(k,x,y,more);
});
G__19639.cljs$core$IFn$_invoke$arity$variadic = G__19639__delegate;
return G__19639;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.cljs$lang$type = true;
cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";
cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/ArrayList");
});
cljs.core.ArrayList.prototype.add = (function (x){var self__ = this;
var _ = this;return self__.arr.push(x);
});
cljs.core.ArrayList.prototype.size = (function (){var self__ = this;
var _ = this;return self__.arr.length;
});
cljs.core.ArrayList.prototype.clear = (function (){var self__ = this;
var _ = this;return self__.arr = [];
});
cljs.core.ArrayList.prototype.isEmpty = (function (){var self__ = this;
var _ = this;return (self__.arr.length === (0));
});
cljs.core.ArrayList.prototype.toArray = (function (){var self__ = this;
var _ = this;return self__.arr;
});
cljs.core.__GT_ArrayList = (function __GT_ArrayList(arr){return (new cljs.core.ArrayList(arr));
});
cljs.core.array_list = (function array_list(){return (new cljs.core.ArrayList([]));
});
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__1 = (function (n){return (function (f1){var a = cljs.core.array_list();return ((function (a){
return (function() {
var G__19657 = null;
var G__19657__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__19657__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__19652 = result;var G__19653 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__19652,G__19653) : f1.call(null,G__19652,G__19653));
})());var G__19654 = result__$1;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19654) : f1.call(null,G__19654));
});
var G__19657__2 = (function (result,input){a.add(input);
if((n === a.size()))
{var v = cljs.core.vec(a.toArray());a.clear();
var G__19655 = result;var G__19656 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__19655,G__19656) : f1.call(null,G__19655,G__19656));
} else
{return result;
}
});
G__19657 = function(result,input){
switch(arguments.length){
case 0:
return G__19657__0.call(this);
case 1:
return G__19657__1.call(this,result);
case 2:
return G__19657__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19657.cljs$core$IFn$_invoke$arity$0 = G__19657__0;
G__19657.cljs$core$IFn$_invoke$arity$1 = G__19657__1;
G__19657.cljs$core$IFn$_invoke$arity$2 = G__19657__2;
return G__19657;
})()
;})(a))
});
});
var partition_all__2 = (function (n,coll){return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else
{return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return partition_all__1.call(this,n);
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$1 = partition_all__1;
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
* Returns a transducer when no collection is provided.
*/
cljs.core.take_while = (function() {
var take_while = null;
var take_while__1 = (function (pred){return (function (f1){return (function() {
var G__19670 = null;
var G__19670__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__19670__1 = (function (result){var G__19665 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19665) : f1.call(null,G__19665));
});
var G__19670__2 = (function (result,input){if(cljs.core.truth_((function (){var G__19666 = input;return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19666) : pred.call(null,G__19666));
})()))
{var G__19667 = result;var G__19668 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__19667,G__19668) : f1.call(null,G__19667,G__19668));
} else
{return cljs.core.reduced(result);
}
});
G__19670 = function(result,input){
switch(arguments.length){
case 0:
return G__19670__0.call(this);
case 1:
return G__19670__1.call(this,result);
case 2:
return G__19670__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19670.cljs$core$IFn$_invoke$arity$0 = G__19670__0;
G__19670.cljs$core$IFn$_invoke$arity$1 = G__19670__1;
G__19670.cljs$core$IFn$_invoke$arity$2 = G__19670__2;
return G__19670;
})()
});
});
var take_while__2 = (function (pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;if(cljs.core.truth_((function (){var G__19669 = cljs.core.first(s);return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19669) : pred.call(null,G__19669));
})()))
{return cljs.core.cons(cljs.core.first(s),take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
take_while = function(pred,coll){
switch(arguments.length){
case 1:
return take_while__1.call(this,pred);
case 2:
return take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_while.cljs$core$IFn$_invoke$arity$1 = take_while__1;
take_while.cljs$core$IFn$_invoke$arity$2 = take_while__2;
return take_while;
})()
;
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);var G__19675 = (function (){var G__19677 = cljs.core._entry_key(sc,e);var G__19678 = key;return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__19677,G__19678) : comp.call(null,G__19677,G__19678));
})();var G__19676 = (0);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__19675,G__19676) : test.call(null,G__19675,G__19676));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__19682 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19682,(0),null);var s = vec__19682;if(cljs.core.truth_((function (){var G__19683 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__19683) : include.call(null,G__19683));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);if(cljs.core.truth_(temp__4126__auto__))
{var vec__19684 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19684,(0),null);var s = vec__19684;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__19688 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19688,(0),null);var s = vec__19688;if(cljs.core.truth_((function (){var G__19689 = e;return (include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(G__19689) : include.call(null,G__19689));
})()))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4126__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);if(cljs.core.truth_(temp__4126__auto__))
{var vec__19690 = temp__4126__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19690,(0),null);var s = vec__19690;return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Range.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === (0))))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(cljs.core.not(cljs.core._seq(rng__$1)))
{return (0);
} else
{var G__19691 = ((self__.end - self__.start) / self__.step);return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(G__19691) : Math.ceil.call(null,G__19691));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__4686__auto__ = self__.__hash;if(!((h__4686__auto__ == null)))
{return h__4686__auto__;
} else
{var h__4686__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);self__.__hash = h__4686__auto____$1;
return h__4686__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential(rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(rng__$1,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((cljs.core._seq(rng__$1) == null))
{return null;
} else
{return self__.start;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq(rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > (0)))
{if((self__.start < self__.end))
{return rng__$1;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng__$1;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){var self__ = this;
var rng__$1 = this;return cljs.core.cons(o,rng__$1);
});
cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){return (new cljs.core.Range(meta,start,end,step,__hash));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){return range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var range__1 = (function (end){return range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var range__2 = (function (start,end){return range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var range__3 = (function (start,end,step){return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.take_nth = (function() {
var take_nth = null;
var take_nth__1 = (function (n){return (function (f1){var ia = (function (){var G__19707 = (-1);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19707) : cljs.core.atom.call(null,G__19707));
})();return ((function (ia){
return (function() {
var G__19711 = null;
var G__19711__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__19711__1 = (function (result){var G__19708 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19708) : f1.call(null,G__19708));
});
var G__19711__2 = (function (result,input){var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);if((cljs.core.rem(i,n) === (0)))
{var G__19709 = result;var G__19710 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__19709,G__19710) : f1.call(null,G__19709,G__19710));
} else
{return result;
}
});
G__19711 = function(result,input){
switch(arguments.length){
case 0:
return G__19711__0.call(this);
case 1:
return G__19711__1.call(this,result);
case 2:
return G__19711__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19711.cljs$core$IFn$_invoke$arity$0 = G__19711__0;
G__19711.cljs$core$IFn$_invoke$arity$1 = G__19711__1;
G__19711.cljs$core$IFn$_invoke$arity$2 = G__19711__2;
return G__19711;
})()
;})(ia))
});
});
var take_nth__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return cljs.core.cons(cljs.core.first(s),take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else
{return null;
}
}),null,null));
});
take_nth = function(n,coll){
switch(arguments.length){
case 1:
return take_nth__1.call(this,n);
case 2:
return take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_nth.cljs$core$IFn$_invoke$arity$1 = take_nth__1;
take_nth.cljs$core$IFn$_invoke$arity$2 = take_nth__2;
return take_nth;
})()
;
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns a
* new value.  Returns a lazy seq of partitions.  Returns a stateful
* transducer when no collection is provided.
*/
cljs.core.partition_by = (function() {
var partition_by = null;
var partition_by__1 = (function (f){return (function (f1){var a = cljs.core.array_list();var pa = (function (){var G__19727 = cljs.core.constant$keyword$120;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19727) : cljs.core.atom.call(null,G__19727));
})();return ((function (a,pa){
return (function() {
var G__19739 = null;
var G__19739__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__19739__1 = (function (result){var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());a.clear();
var G__19728 = result;var G__19729 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__19728,G__19729) : f1.call(null,G__19728,G__19729));
})());var G__19730 = result__$1;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19730) : f1.call(null,G__19730));
});
var G__19739__2 = (function (result,input){var pval = (function (){var G__19731 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19731) : cljs.core.deref.call(null,G__19731));
})();var val = (function (){var G__19732 = input;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19732) : f.call(null,G__19732));
})();var G__19733_19740 = pa;var G__19734_19741 = val;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19733_19740,G__19734_19741) : cljs.core.reset_BANG_.call(null,G__19733_19740,G__19734_19741));
if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.constant$keyword$120)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval)))
{a.add(input);
return result;
} else
{var v = cljs.core.vec(a.toArray());a.clear();
var ret = (function (){var G__19735 = result;var G__19736 = v;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__19735,G__19736) : f1.call(null,G__19735,G__19736));
})();if(cljs.core.reduced_QMARK_(ret))
{} else
{a.add(input);
}
return ret;
}
});
G__19739 = function(result,input){
switch(arguments.length){
case 0:
return G__19739__0.call(this);
case 1:
return G__19739__1.call(this,result);
case 2:
return G__19739__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19739.cljs$core$IFn$_invoke$arity$0 = G__19739__0;
G__19739.cljs$core$IFn$_invoke$arity$1 = G__19739__1;
G__19739.cljs$core$IFn$_invoke$arity$2 = G__19739__2;
return G__19739;
})()
;})(a,pa))
});
});
var partition_by__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;var fst = cljs.core.first(s);var fv = (function (){var G__19737 = fst;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19737) : f.call(null,G__19737));
})();var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4126__auto__){
return (function (p1__19712_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(function (){var G__19738 = p1__19712_SHARP_;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19738) : f.call(null,G__19738));
})());
});})(fst,fv,s,temp__4126__auto__))
,cljs.core.next(s)));return cljs.core.cons(run,partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else
{return null;
}
}),null,null));
});
partition_by = function(f,coll){
switch(arguments.length){
case 1:
return partition_by__1.call(this,f);
case 2:
return partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$1 = partition_by__1;
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
return partition_by;
})()
;
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4124__auto__ = cljs.core.seq(coll);if(temp__4124__auto__)
{var s = temp__4124__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.seq(coll);if(temp__4126__auto__)
{var s = temp__4126__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__19750 = init;var G__19751 = cljs.core.first(s);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19750,G__19751) : f.call(null,G__19750,G__19751));
})(),cljs.core.rest(s));
} else
{return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){return (function() {
var G__19846 = null;
var G__19846__0 = (function (){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})()],null));
});
var G__19846__1 = (function (x){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19804 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19804) : f.call(null,G__19804));
})()],null));
});
var G__19846__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19805 = x;var G__19806 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19805,G__19806) : f.call(null,G__19805,G__19806));
})()],null));
});
var G__19846__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19807 = x;var G__19808 = y;var G__19809 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19807,G__19808,G__19809) : f.call(null,G__19807,G__19808,G__19809));
})()],null));
});
var G__19846__4 = (function() { 
var G__19847__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__19847 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19847__delegate.call(this,x,y,z,args);};
G__19847.cljs$lang$maxFixedArity = 3;
G__19847.cljs$lang$applyTo = (function (arglist__19848){
var x = cljs.core.first(arglist__19848);
arglist__19848 = cljs.core.next(arglist__19848);
var y = cljs.core.first(arglist__19848);
arglist__19848 = cljs.core.next(arglist__19848);
var z = cljs.core.first(arglist__19848);
var args = cljs.core.rest(arglist__19848);
return G__19847__delegate(x,y,z,args);
});
G__19847.cljs$core$IFn$_invoke$arity$variadic = G__19847__delegate;
return G__19847;
})()
;
G__19846 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19846__0.call(this);
case 1:
return G__19846__1.call(this,x);
case 2:
return G__19846__2.call(this,x,y);
case 3:
return G__19846__3.call(this,x,y,z);
default:
return G__19846__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19846.cljs$lang$maxFixedArity = 3;
G__19846.cljs$lang$applyTo = G__19846__4.cljs$lang$applyTo;
G__19846.cljs$core$IFn$_invoke$arity$0 = G__19846__0;
G__19846.cljs$core$IFn$_invoke$arity$1 = G__19846__1;
G__19846.cljs$core$IFn$_invoke$arity$2 = G__19846__2;
G__19846.cljs$core$IFn$_invoke$arity$3 = G__19846__3;
G__19846.cljs$core$IFn$_invoke$arity$variadic = G__19846__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19846;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__19849 = null;
var G__19849__0 = (function (){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})()],null));
});
var G__19849__1 = (function (x){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19810 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19810) : f.call(null,G__19810));
})(),(function (){var G__19811 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19811) : g.call(null,G__19811));
})()],null));
});
var G__19849__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19812 = x;var G__19813 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19812,G__19813) : f.call(null,G__19812,G__19813));
})(),(function (){var G__19814 = x;var G__19815 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__19814,G__19815) : g.call(null,G__19814,G__19815));
})()],null));
});
var G__19849__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19816 = x;var G__19817 = y;var G__19818 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19816,G__19817,G__19818) : f.call(null,G__19816,G__19817,G__19818));
})(),(function (){var G__19819 = x;var G__19820 = y;var G__19821 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__19819,G__19820,G__19821) : g.call(null,G__19819,G__19820,G__19821));
})()],null));
});
var G__19849__4 = (function() { 
var G__19850__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__19850 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19850__delegate.call(this,x,y,z,args);};
G__19850.cljs$lang$maxFixedArity = 3;
G__19850.cljs$lang$applyTo = (function (arglist__19851){
var x = cljs.core.first(arglist__19851);
arglist__19851 = cljs.core.next(arglist__19851);
var y = cljs.core.first(arglist__19851);
arglist__19851 = cljs.core.next(arglist__19851);
var z = cljs.core.first(arglist__19851);
var args = cljs.core.rest(arglist__19851);
return G__19850__delegate(x,y,z,args);
});
G__19850.cljs$core$IFn$_invoke$arity$variadic = G__19850__delegate;
return G__19850;
})()
;
G__19849 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19849__0.call(this);
case 1:
return G__19849__1.call(this,x);
case 2:
return G__19849__2.call(this,x,y);
case 3:
return G__19849__3.call(this,x,y,z);
default:
return G__19849__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19849.cljs$lang$maxFixedArity = 3;
G__19849.cljs$lang$applyTo = G__19849__4.cljs$lang$applyTo;
G__19849.cljs$core$IFn$_invoke$arity$0 = G__19849__0;
G__19849.cljs$core$IFn$_invoke$arity$1 = G__19849__1;
G__19849.cljs$core$IFn$_invoke$arity$2 = G__19849__2;
G__19849.cljs$core$IFn$_invoke$arity$3 = G__19849__3;
G__19849.cljs$core$IFn$_invoke$arity$variadic = G__19849__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19849;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__19852 = null;
var G__19852__0 = (function (){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),(function (){return (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
})(),(function (){return (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
})()],null));
});
var G__19852__1 = (function (x){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19822 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19822) : f.call(null,G__19822));
})(),(function (){var G__19823 = x;return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__19823) : g.call(null,G__19823));
})(),(function (){var G__19824 = x;return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__19824) : h.call(null,G__19824));
})()],null));
});
var G__19852__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19825 = x;var G__19826 = y;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19825,G__19826) : f.call(null,G__19825,G__19826));
})(),(function (){var G__19827 = x;var G__19828 = y;return (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(G__19827,G__19828) : g.call(null,G__19827,G__19828));
})(),(function (){var G__19829 = x;var G__19830 = y;return (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(G__19829,G__19830) : h.call(null,G__19829,G__19830));
})()],null));
});
var G__19852__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var G__19831 = x;var G__19832 = y;var G__19833 = z;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19831,G__19832,G__19833) : f.call(null,G__19831,G__19832,G__19833));
})(),(function (){var G__19834 = x;var G__19835 = y;var G__19836 = z;return (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(G__19834,G__19835,G__19836) : g.call(null,G__19834,G__19835,G__19836));
})(),(function (){var G__19837 = x;var G__19838 = y;var G__19839 = z;return (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(G__19837,G__19838,G__19839) : h.call(null,G__19837,G__19838,G__19839));
})()],null));
});
var G__19852__4 = (function() { 
var G__19853__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__19853 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19853__delegate.call(this,x,y,z,args);};
G__19853.cljs$lang$maxFixedArity = 3;
G__19853.cljs$lang$applyTo = (function (arglist__19854){
var x = cljs.core.first(arglist__19854);
arglist__19854 = cljs.core.next(arglist__19854);
var y = cljs.core.first(arglist__19854);
arglist__19854 = cljs.core.next(arglist__19854);
var z = cljs.core.first(arglist__19854);
var args = cljs.core.rest(arglist__19854);
return G__19853__delegate(x,y,z,args);
});
G__19853.cljs$core$IFn$_invoke$arity$variadic = G__19853__delegate;
return G__19853;
})()
;
G__19852 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19852__0.call(this);
case 1:
return G__19852__1.call(this,x);
case 2:
return G__19852__2.call(this,x,y);
case 3:
return G__19852__3.call(this,x,y,z);
default:
return G__19852__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19852.cljs$lang$maxFixedArity = 3;
G__19852.cljs$lang$applyTo = G__19852__4.cljs$lang$applyTo;
G__19852.cljs$core$IFn$_invoke$arity$0 = G__19852__0;
G__19852.cljs$core$IFn$_invoke$arity$1 = G__19852__1;
G__19852.cljs$core$IFn$_invoke$arity$2 = G__19852__2;
G__19852.cljs$core$IFn$_invoke$arity$3 = G__19852__3;
G__19852.cljs$core$IFn$_invoke$arity$variadic = G__19852__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19852;
})()
});
var juxt__4 = (function() { 
var G__19855__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return ((function (fs__$1){
return (function() {
var G__19856 = null;
var G__19856__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__19752_SHARP_,p2__19753_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19752_SHARP_,(function (){return (p2__19753_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__19753_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__19753_SHARP_.call(null));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__19856__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__19754_SHARP_,p2__19755_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19754_SHARP_,(function (){var G__19840 = x;return (p2__19755_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__19755_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19840) : p2__19755_SHARP_.call(null,G__19840));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__19856__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__19756_SHARP_,p2__19757_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19756_SHARP_,(function (){var G__19841 = x;var G__19842 = y;return (p2__19757_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__19757_SHARP_.cljs$core$IFn$_invoke$arity$2(G__19841,G__19842) : p2__19757_SHARP_.call(null,G__19841,G__19842));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__19856__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__19758_SHARP_,p2__19759_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19758_SHARP_,(function (){var G__19843 = x;var G__19844 = y;var G__19845 = z;return (p2__19759_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__19759_SHARP_.cljs$core$IFn$_invoke$arity$3(G__19843,G__19844,G__19845) : p2__19759_SHARP_.call(null,G__19843,G__19844,G__19845));
})());
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__19856__4 = (function() { 
var G__19857__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__19760_SHARP_,p2__19761_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19760_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__19761_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__19857 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19857__delegate.call(this,x,y,z,args);};
G__19857.cljs$lang$maxFixedArity = 3;
G__19857.cljs$lang$applyTo = (function (arglist__19858){
var x = cljs.core.first(arglist__19858);
arglist__19858 = cljs.core.next(arglist__19858);
var y = cljs.core.first(arglist__19858);
arglist__19858 = cljs.core.next(arglist__19858);
var z = cljs.core.first(arglist__19858);
var args = cljs.core.rest(arglist__19858);
return G__19857__delegate(x,y,z,args);
});
G__19857.cljs$core$IFn$_invoke$arity$variadic = G__19857__delegate;
return G__19857;
})()
;
G__19856 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__19856__0.call(this);
case 1:
return G__19856__1.call(this,x);
case 2:
return G__19856__2.call(this,x,y);
case 3:
return G__19856__3.call(this,x,y,z);
default:
return G__19856__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19856.cljs$lang$maxFixedArity = 3;
G__19856.cljs$lang$applyTo = G__19856__4.cljs$lang$applyTo;
G__19856.cljs$core$IFn$_invoke$arity$0 = G__19856__0;
G__19856.cljs$core$IFn$_invoke$arity$1 = G__19856__1;
G__19856.cljs$core$IFn$_invoke$arity$2 = G__19856__2;
G__19856.cljs$core$IFn$_invoke$arity$3 = G__19856__3;
G__19856.cljs$core$IFn$_invoke$arity$variadic = G__19856__4.cljs$core$IFn$_invoke$arity$variadic;
return G__19856;
})()
;})(fs__$1))
};
var G__19855 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19855__delegate.call(this,f,g,h,fs);};
G__19855.cljs$lang$maxFixedArity = 3;
G__19855.cljs$lang$applyTo = (function (arglist__19859){
var f = cljs.core.first(arglist__19859);
arglist__19859 = cljs.core.next(arglist__19859);
var g = cljs.core.first(arglist__19859);
arglist__19859 = cljs.core.next(arglist__19859);
var h = cljs.core.first(arglist__19859);
var fs = cljs.core.rest(arglist__19859);
return G__19855__delegate(f,g,h,fs);
});
G__19855.cljs$core$IFn$_invoke$arity$variadic = G__19855__delegate;
return G__19855;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){while(true){
if(cljs.core.seq(coll))
{{
var G__19860 = cljs.core.next(coll);
coll = G__19860;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq(coll)) && ((n > (0))))
{{
var G__19861 = (n - (1));
var G__19862 = cljs.core.next(coll);
n = G__19861;
coll = G__19862;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s))
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
} else
{return null;
}
} else
{throw (new TypeError("re-matches must match against a string."));
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){if(typeof s === 'string')
{var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((cljs.core.count(matches) === (1)))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
}
} else
{throw (new TypeError("re-find must match against a string."));
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find(re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){var vec__19866 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19866,(0),null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19866,(1),null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19866,(2),null);return (new RegExp(pattern,flags));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_19874 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0))))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{var G__19875_19881 = cljs.core.first(coll);var G__19876_19882 = writer;var G__19877_19883 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__19875_19881,G__19876_19882,G__19877_19883) : print_one.call(null,G__19875_19881,G__19876_19882,G__19877_19883));
} else
{}
var coll_19884__$1 = cljs.core.next(coll);var n_19885 = (cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(opts) - (1));while(true){
if((coll_19884__$1) && (((n_19885 == null)) || (!((n_19885 === (0))))))
{cljs.core._write(writer,sep);
var G__19878_19886 = cljs.core.first(coll_19884__$1);var G__19879_19887 = writer;var G__19880_19888 = opts;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__19878_19886,G__19879_19887,G__19880_19888) : print_one.call(null,G__19878_19886,G__19879_19887,G__19880_19888));
{
var G__19889 = cljs.core.next(coll_19884__$1);
var G__19890 = (n_19885 - (1));
coll_19884__$1 = G__19889;
n_19885 = G__19890;
continue;
}
} else
{if((cljs.core.seq(coll_19884__$1)) && ((n_19885 === (0))))
{cljs.core._write(writer,sep);
cljs.core._write(writer,"...");
} else
{}
}
break;
}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_19874;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__19895 = cljs.core.seq(ss);var chunk__19896 = null;var count__19897 = (0);var i__19898 = (0);while(true){
if((i__19898 < count__19897))
{var s = chunk__19896.cljs$core$IIndexed$_nth$arity$2(null,i__19898);cljs.core._write(writer,s);
{
var G__19899 = seq__19895;
var G__19900 = chunk__19896;
var G__19901 = count__19897;
var G__19902 = (i__19898 + (1));
seq__19895 = G__19899;
chunk__19896 = G__19900;
count__19897 = G__19901;
i__19898 = G__19902;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__19895);if(temp__4126__auto__)
{var seq__19895__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19895__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__19895__$1);{
var G__19903 = cljs.core.chunk_rest(seq__19895__$1);
var G__19904 = c__5044__auto__;
var G__19905 = cljs.core.count(c__5044__auto__);
var G__19906 = (0);
seq__19895 = G__19903;
chunk__19896 = G__19904;
count__19897 = G__19905;
i__19898 = G__19906;
continue;
}
} else
{var s = cljs.core.first(seq__19895__$1);cljs.core._write(writer,s);
{
var G__19907 = cljs.core.next(seq__19895__$1);
var G__19908 = null;
var G__19909 = (0);
var G__19910 = (0);
seq__19895 = G__19907;
chunk__19896 = G__19908;
count__19897 = G__19909;
i__19898 = G__19910;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__19911){
var writer = cljs.core.first(arglist__19911);
var ss = cljs.core.rest(arglist__19911);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj19913 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj19913;
})();
cljs.core.quote_string = (function quote_string(s){return ("\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.replace((function (){var G__19916 = "[\\\\\"\b\f\n\r\t]";var G__19917 = "g";return RegExp(G__19916,G__19917);
})(),(function (match){return (cljs.core.char_escapes[match]);
})))+"\"");
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write(writer,"#<undefined>");
} else
{if(cljs.core.truth_((function (){var and__4263__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$113);if(cljs.core.truth_(and__4263__auto__))
{var and__4263__auto____$1 = (function (){var G__19931 = obj;if(G__19931)
{var bit__4938__auto__ = (G__19931.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4938__auto__) || (G__19931.cljs$core$IMeta$))
{return true;
} else
{if((!G__19931.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__19931);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__19931);
}
})();if(and__4263__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
})()))
{cljs.core._write(writer,"^");
pr_writer(cljs.core.meta(obj),writer,opts);
cljs.core._write(writer," ");
} else
{}
if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__19932 = obj;if(G__19932)
{var bit__4931__auto__ = (G__19932.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4931__auto__) || (G__19932.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else
{if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write(writer,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)));
} else
{if(cljs.core.object_QMARK_(obj))
{cljs.core._write(writer,"#js ");
var G__19933 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));var G__19934 = pr_writer;var G__19935 = writer;var G__19936 = opts;return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__19933,G__19934,G__19935,G__19936) : cljs.core.print_map.call(null,G__19933,G__19934,G__19935,G__19936));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(cljs.core.truth_((function (){var G__19937 = obj;return goog.isString(G__19937);
})()))
{if(cljs.core.truth_(cljs.core.constant$keyword$112.cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write(writer,cljs.core.quote_string(obj));
} else
{return cljs.core._write(writer,obj);
}
} else
{if(cljs.core.fn_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));while(true){
if((cljs.core.count(ns) < len))
{{
var G__19939 = ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
ns = G__19939;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj.getUTCFullYear())),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else
{if(cljs.core.regexp_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else
{if((function (){var G__19938 = obj;if(G__19938)
{var bit__4938__auto__ = (G__19938.cljs$lang$protocol_mask$partition0$ & (2147483648));if((bit__4938__auto__) || (G__19938.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__19938.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__19938);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__19938);
}
})())
{return cljs.core._pr_writer(obj,writer,opts);
} else
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj)),">"], 0));

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
}

}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer(cljs.core.first(objs),writer,opts);
var seq__19944 = cljs.core.seq(cljs.core.next(objs));var chunk__19945 = null;var count__19946 = (0);var i__19947 = (0);while(true){
if((i__19947 < count__19946))
{var obj = chunk__19945.cljs$core$IIndexed$_nth$arity$2(null,i__19947);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__19948 = seq__19944;
var G__19949 = chunk__19945;
var G__19950 = count__19946;
var G__19951 = (i__19947 + (1));
seq__19944 = G__19948;
chunk__19945 = G__19949;
count__19946 = G__19950;
i__19947 = G__19951;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__19944);if(temp__4126__auto__)
{var seq__19944__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__19944__$1))
{var c__5044__auto__ = cljs.core.chunk_first(seq__19944__$1);{
var G__19952 = cljs.core.chunk_rest(seq__19944__$1);
var G__19953 = c__5044__auto__;
var G__19954 = cljs.core.count(c__5044__auto__);
var G__19955 = (0);
seq__19944 = G__19952;
chunk__19945 = G__19953;
count__19946 = G__19954;
i__19947 = G__19955;
continue;
}
} else
{var obj = cljs.core.first(seq__19944__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__19956 = cljs.core.next(seq__19944__$1);
var G__19957 = null;
var G__19958 = (0);
var G__19959 = (0);
seq__19944 = G__19956;
chunk__19945 = G__19957;
count__19946 = G__19958;
i__19947 = G__19959;
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
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer(objs,writer,opts);
writer.cljs$core$IWriter$_flush$arity$1(null);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "";
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts(objs,opts)));
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts(objs,opts);sb.append("\n");
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$111)))
{return cljs.core.flush();
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__19960){
var objs = cljs.core.seq(arglist__19960);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__19961){
var objs = cljs.core.seq(arglist__19961);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__19962){
var objs = cljs.core.seq(arglist__19962);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$112,false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__19963){
var objs = cljs.core.seq(arglist__19963);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$112,false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__19964){
var objs = cljs.core.seq(arglist__19964);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$112,false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__19965){
var objs = cljs.core.seq(arglist__19965);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$112,false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__19966){
var objs = cljs.core.seq(arglist__19966);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__19967){
var objs = cljs.core.seq(arglist__19967);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){var G__19974_19980 = cljs.core.key(e);var G__19975_19981 = w;var G__19976_19982 = opts__$1;(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__19974_19980,G__19975_19981,G__19976_19982) : print_one.call(null,G__19974_19980,G__19975_19981,G__19976_19982));
cljs.core._write(w," ");
var G__19977 = cljs.core.val(e);var G__19978 = w;var G__19979 = opts__$1;return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__19977,G__19978,G__19979) : print_one.call(null,G__19977,G__19978,G__19979));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(a__$1.state,writer,opts);
return cljs.core._write(writer,">");
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write(writer,"()");
});
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__19983){
var iref = cljs.core.first(arglist__19983);
arglist__19983 = cljs.core.next(arglist__19983);
var f = cljs.core.first(arglist__19983);
var args = cljs.core.rest(arglist__19983);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = (function (){var G__19986 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19986) : cljs.core.atom.call(null,G__19986));
})();
} else
{}
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return cljs.core.not(self__.f);
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.f))
{self__.value = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();
self__.f = null;
} else
{}
return self__.value;
});
cljs.core.__GT_Delay = (function __GT_Delay(f,value){return (new cljs.core.Delay(f,value));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_(x))
{var G__19988 = x;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19988) : cljs.core.deref.call(null,G__19988));
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function preserving_reduced(f1){return (function (p1__19989_SHARP_,p2__19990_SHARP_){var ret = (function (){var G__19993 = p1__19989_SHARP_;var G__19994 = p2__19990_SHARP_;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__19993,G__19994) : f1.call(null,G__19993,G__19994));
})();if(cljs.core.reduced_QMARK_(ret))
{return cljs.core.reduced(ret);
} else
{return ret;
}
});
});
/**
* A transducer which concatenates the contents of each input, which must be a
* collection, into the reduction.
*/
cljs.core.cat = (function cat(f1){var rf1 = cljs.core.preserving_reduced(f1);return ((function (rf1){
return (function() {
var G__19997 = null;
var G__19997__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__19997__1 = (function (result){var G__19996 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19996) : f1.call(null,G__19996));
});
var G__19997__2 = (function (result,input){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__19997 = function(result,input){
switch(arguments.length){
case 0:
return G__19997__0.call(this);
case 1:
return G__19997__1.call(this,result);
case 2:
return G__19997__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19997.cljs$core$IFn$_invoke$arity$0 = G__19997__0;
G__19997.cljs$core$IFn$_invoke$arity$1 = G__19997__1;
G__19997.cljs$core$IFn$_invoke$arity$2 = G__19997__2;
return G__19997;
})()
;})(rf1))
});
/**
* Returns a lazy sequence removing consecutive duplicates in coll.
* Returns a transducer when no collection is provided.
*/
cljs.core.dedupe = (function() {
var dedupe = null;
var dedupe__0 = (function (){return (function (f1){var pa = (function (){var G__20005 = cljs.core.constant$keyword$120;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20005) : cljs.core.atom.call(null,G__20005));
})();return ((function (pa){
return (function() {
var G__20012 = null;
var G__20012__0 = (function (){return (f1.cljs$core$IFn$_invoke$arity$0 ? f1.cljs$core$IFn$_invoke$arity$0() : f1.call(null));
});
var G__20012__1 = (function (result){var G__20006 = result;return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20006) : f1.call(null,G__20006));
});
var G__20012__2 = (function (result,input){var prior = (function (){var G__20007 = pa;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20007) : cljs.core.deref.call(null,G__20007));
})();var G__20008_20013 = pa;var G__20009_20014 = input;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20008_20013,G__20009_20014) : cljs.core.reset_BANG_.call(null,G__20008_20013,G__20009_20014));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input))
{return result;
} else
{var G__20010 = result;var G__20011 = input;return (f1.cljs$core$IFn$_invoke$arity$2 ? f1.cljs$core$IFn$_invoke$arity$2(G__20010,G__20011) : f1.call(null,G__20010,G__20011));
}
});
G__20012 = function(result,input){
switch(arguments.length){
case 0:
return G__20012__0.call(this);
case 1:
return G__20012__1.call(this,result);
case 2:
return G__20012__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20012.cljs$core$IFn$_invoke$arity$0 = G__20012__0;
G__20012.cljs$core$IFn$_invoke$arity$1 = G__20012__1;
G__20012.cljs$core$IFn$_invoke$arity$2 = G__20012__2;
return G__20012;
})()
;})(pa))
});
});
var dedupe__1 = (function (coll){return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
dedupe = function(coll){
switch(arguments.length){
case 0:
return dedupe__0.call(this);
case 1:
return dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dedupe.cljs$core$IFn$_invoke$arity$0 = dedupe__0;
dedupe.cljs$core$IFn$_invoke$arity$1 = dedupe__1;
return dedupe;
})()
;
/**
* Returns items from coll with random probability of prob (0.0 -
* 1.0).  Returns a transducer when no collection is provided.
*/
cljs.core.random_sample = (function() {
var random_sample = null;
var random_sample__1 = (function (prob){return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var random_sample__2 = (function (prob,coll){return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return random_sample__1.call(this,prob);
case 2:
return random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_sample.cljs$core$IFn$_invoke$arity$1 = random_sample__1;
random_sample.cljs$core$IFn$_invoke$arity$2 = random_sample__2;
return random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Iteration = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
})
cljs.core.Iteration.cljs$lang$type = true;
cljs.core.Iteration.cljs$lang$ctorStr = "cljs.core/Iteration";
cljs.core.Iteration.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/Iteration");
});
cljs.core.Iteration.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){var self__ = this;
var coll__$2 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});
cljs.core.Iteration.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});
cljs.core.Iteration.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});
cljs.core.__GT_Iteration = (function __GT_Iteration(xform,coll){return (new cljs.core.Iteration(xform,coll));
});
/**
* Returns an iterable/seqable/reducible sequence of applications of
* the transducer to the items in coll. Note that these applications
* will be performed every time iterator/seq/reduce is called.
*/
cljs.core.iteration = (function iteration(xform,coll){return (new cljs.core.Iteration(xform,coll));
});
/**
* Runs the supplied procedure (via reduce), for purposes of side
* effects, on successive items in the collection. Returns nil
*/
cljs.core.run_BANG_ = (function run_BANG_(proc,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20016_SHARP_,p2__20015_SHARP_){var G__20018 = p2__20015_SHARP_;return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(G__20018) : proc.call(null,G__20018));
}),null,coll);
});
cljs.core.IEncodeJS = (function (){var obj20020 = {};return obj20020;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__4263__auto__ = x;if(and__4263__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__4263__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__4911__auto__ = (((x == null))?null:x);return (function (){var or__4275__auto__ = (cljs.core._clj__GT_js[(function (){var G__20024 = x__4911__auto__;return goog.typeOf(G__20024);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__4263__auto__ = x;if(and__4263__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__4263__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__4911__auto__ = (((x == null))?null:x);return (function (){var or__4275__auto__ = (cljs.core._key__GT_js[(function (){var G__20028 = x__4911__auto__;return goog.typeOf(G__20028);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__20031 = k;if(G__20031)
{var bit__4938__auto__ = null;if(cljs.core.truth_((function (){var or__4275__auto__ = bit__4938__auto__;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return G__20031.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__20031.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20031);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20031);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{var G__20032 = k;return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(G__20032) : cljs.core.clj__GT_js.call(null,G__20032));
} else
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){if((x == null))
{return null;
} else
{if((function (){var G__20048 = x;if(G__20048)
{var bit__4938__auto__ = null;if(cljs.core.truth_((function (){var or__4275__auto__ = bit__4938__auto__;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return G__20048.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__20048.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20048);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__20048);
}
})())
{return cljs.core._clj__GT_js(x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name(x);
} else
{if((x instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
} else
{if(cljs.core.map_QMARK_(x))
{var m = (function (){var obj20050 = {};return obj20050;
})();var seq__20051_20061 = cljs.core.seq(x);var chunk__20052_20062 = null;var count__20053_20063 = (0);var i__20054_20064 = (0);while(true){
if((i__20054_20064 < count__20053_20063))
{var vec__20055_20065 = chunk__20052_20062.cljs$core$IIndexed$_nth$arity$2(null,i__20054_20064);var k_20066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20065,(0),null);var v_20067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20065,(1),null);(m[cljs.core.key__GT_js(k_20066)] = clj__GT_js(v_20067));
{
var G__20068 = seq__20051_20061;
var G__20069 = chunk__20052_20062;
var G__20070 = count__20053_20063;
var G__20071 = (i__20054_20064 + (1));
seq__20051_20061 = G__20068;
chunk__20052_20062 = G__20069;
count__20053_20063 = G__20070;
i__20054_20064 = G__20071;
continue;
}
} else
{var temp__4126__auto___20072 = cljs.core.seq(seq__20051_20061);if(temp__4126__auto___20072)
{var seq__20051_20073__$1 = temp__4126__auto___20072;if(cljs.core.chunked_seq_QMARK_(seq__20051_20073__$1))
{var c__5044__auto___20074 = cljs.core.chunk_first(seq__20051_20073__$1);{
var G__20075 = cljs.core.chunk_rest(seq__20051_20073__$1);
var G__20076 = c__5044__auto___20074;
var G__20077 = cljs.core.count(c__5044__auto___20074);
var G__20078 = (0);
seq__20051_20061 = G__20075;
chunk__20052_20062 = G__20076;
count__20053_20063 = G__20077;
i__20054_20064 = G__20078;
continue;
}
} else
{var vec__20056_20079 = cljs.core.first(seq__20051_20073__$1);var k_20080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20056_20079,(0),null);var v_20081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20056_20079,(1),null);(m[cljs.core.key__GT_js(k_20080)] = clj__GT_js(v_20081));
{
var G__20082 = cljs.core.next(seq__20051_20073__$1);
var G__20083 = null;
var G__20084 = (0);
var G__20085 = (0);
seq__20051_20061 = G__20082;
chunk__20052_20062 = G__20083;
count__20053_20063 = G__20084;
i__20054_20064 = G__20085;
continue;
}
}
} else
{}
}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_(x))
{var arr = [];var seq__20057_20086 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__20058_20087 = null;var count__20059_20088 = (0);var i__20060_20089 = (0);while(true){
if((i__20060_20089 < count__20059_20088))
{var x_20090__$1 = chunk__20058_20087.cljs$core$IIndexed$_nth$arity$2(null,i__20060_20089);arr.push(x_20090__$1);
{
var G__20091 = seq__20057_20086;
var G__20092 = chunk__20058_20087;
var G__20093 = count__20059_20088;
var G__20094 = (i__20060_20089 + (1));
seq__20057_20086 = G__20091;
chunk__20058_20087 = G__20092;
count__20059_20088 = G__20093;
i__20060_20089 = G__20094;
continue;
}
} else
{var temp__4126__auto___20095 = cljs.core.seq(seq__20057_20086);if(temp__4126__auto___20095)
{var seq__20057_20096__$1 = temp__4126__auto___20095;if(cljs.core.chunked_seq_QMARK_(seq__20057_20096__$1))
{var c__5044__auto___20097 = cljs.core.chunk_first(seq__20057_20096__$1);{
var G__20098 = cljs.core.chunk_rest(seq__20057_20096__$1);
var G__20099 = c__5044__auto___20097;
var G__20100 = cljs.core.count(c__5044__auto___20097);
var G__20101 = (0);
seq__20057_20086 = G__20098;
chunk__20058_20087 = G__20099;
count__20059_20088 = G__20100;
i__20060_20089 = G__20101;
continue;
}
} else
{var x_20102__$1 = cljs.core.first(seq__20057_20096__$1);arr.push(x_20102__$1);
{
var G__20103 = cljs.core.next(seq__20057_20096__$1);
var G__20104 = null;
var G__20105 = (0);
var G__20106 = (0);
seq__20057_20086 = G__20103;
chunk__20058_20087 = G__20104;
count__20059_20088 = G__20105;
i__20060_20089 = G__20106;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{return x;

}
}
}
}
}
}
});
cljs.core.IEncodeClojure = (function (){var obj20108 = {};return obj20108;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__4263__auto__ = x;if(and__4263__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__4263__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__4911__auto__ = (((x == null))?null:x);return (function (){var or__4275__auto__ = (cljs.core._js__GT_clj[(function (){var G__20112 = x__4911__auto__;return goog.typeOf(G__20112);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__20167__delegate = function (x,opts){if((function (){var G__20141 = x;if(G__20141)
{var bit__4938__auto__ = null;if(cljs.core.truth_((function (){var or__4275__auto__ = bit__4938__auto__;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return G__20141.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__20141.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__20141);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__20141);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__20142 = opts;var map__20142__$1 = ((cljs.core.seq_QMARK_(map__20142))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20142):map__20142);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20142__$1,cljs.core.constant$keyword$121);var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__20142,map__20142__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_(x__$1))
{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_(x__$1))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if((cljs.core.type(x__$1) === Object))
{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5013__auto__ = ((function (map__20142,map__20142__$1,keywordize_keys,keyfn){
return (function iter__20157(s__20158){return (new cljs.core.LazySeq(null,((function (map__20142,map__20142__$1,keywordize_keys,keyfn){
return (function (){var s__20158__$1 = s__20158;while(true){
var temp__4126__auto__ = cljs.core.seq(s__20158__$1);if(temp__4126__auto__)
{var s__20158__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__20158__$2))
{var c__5011__auto__ = cljs.core.chunk_first(s__20158__$2);var size__5012__auto__ = cljs.core.count(c__5011__auto__);var b__20160 = cljs.core.chunk_buffer(size__5012__auto__);if((function (){var i__20159 = (0);while(true){
if((i__20159 < size__5012__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5011__auto__,i__20159);cljs.core.chunk_append(b__20160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20165 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__20165) : keyfn.call(null,G__20165));
})(),thisfn((x__$1[k]))], null));
{
var G__20168 = (i__20159 + (1));
i__20159 = G__20168;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__20160),iter__20157(cljs.core.chunk_rest(s__20158__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__20160),null);
}
} else
{var k = cljs.core.first(s__20158__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20166 = k;return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__20166) : keyfn.call(null,G__20166));
})(),thisfn((x__$1[k]))], null),iter__20157(cljs.core.rest(s__20158__$2)));
}
} else
{return null;
}
break;
}
});})(map__20142,map__20142__$1,keywordize_keys,keyfn))
,null,null));
});})(map__20142,map__20142__$1,keywordize_keys,keyfn))
;return iter__5013__auto__(cljs.core.js_keys(x__$1));
})());
} else
{return x__$1;

}
}
}
}
});})(map__20142,map__20142__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__20167 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__20167__delegate.call(this,x,opts);};
G__20167.cljs$lang$maxFixedArity = 1;
G__20167.cljs$lang$applyTo = (function (arglist__20169){
var x = cljs.core.first(arglist__20169);
var opts = cljs.core.rest(arglist__20169);
return G__20167__delegate(x,opts);
});
G__20167.cljs$core$IFn$_invoke$arity$variadic = G__20167__delegate;
return G__20167;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){var mem = (function (){var G__20172 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20172) : cljs.core.atom.call(null,G__20172));
})();return ((function (mem){
return (function() { 
var G__20174__delegate = function (args){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__20173 = mem;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20173) : cljs.core.deref.call(null,G__20173));
})(),args,cljs.core.lookup_sentinel);if((v === cljs.core.lookup_sentinel))
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
} else
{return v;
}
};
var G__20174 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20174__delegate.call(this,args);};
G__20174.cljs$lang$maxFixedArity = 0;
G__20174.cljs$lang$applyTo = (function (arglist__20175){
var args = cljs.core.seq(arglist__20175);
return G__20174__delegate(args);
});
G__20174.cljs$core$IFn$_invoke$arity$variadic = G__20174__delegate;
return G__20174;
})()
;
;})(mem))
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){while(true){
var ret = (function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})();if(cljs.core.fn_QMARK_(ret))
{{
var G__20177 = ret;
f = G__20177;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__20178__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__20178 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__20178__delegate.call(this,f,args);};
G__20178.cljs$lang$maxFixedArity = 1;
G__20178.cljs$lang$applyTo = (function (arglist__20179){
var f = cljs.core.first(arglist__20179);
var args = cljs.core.rest(arglist__20179);
return G__20178__delegate(f,args);
});
G__20178.cljs$core$IFn$_invoke$arity$variadic = G__20178__delegate;
return G__20178;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return rand.cljs$core$IFn$_invoke$arity$1((1));
});
var rand__1 = (function (n){return ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){var G__20182 = ((function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
})() * n);return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(G__20182) : Math.floor.call(null,G__20182));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (function (){var G__20184 = x;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20184) : f.call(null,G__20184));
})();return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$123,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$124,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = (function (){var G__20186 = cljs.core.make_hierarchy();return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20186) : cljs.core.atom.call(null,G__20186));
})();
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__20187){
var f = cljs.core.first(arglist__20187);
var args = cljs.core.rest(arglist__20187);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__20252 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20252) : cljs.core.deref.call(null,G__20252));
})(),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__4275__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{var and__4263__auto__ = cljs.core.vector_QMARK_(parent);if(and__4263__auto__)
{var and__4263__auto____$1 = cljs.core.vector_QMARK_(child);if(and__4263__auto____$1)
{var and__4263__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__4263__auto____$2)
{var ret = true;var i = (0);while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__20277 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(function (){var G__20275 = i;return (child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(G__20275) : child.call(null,G__20275));
})(),(function (){var G__20276 = i;return (parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(G__20276) : parent.call(null,G__20276));
})());
var G__20278 = (i + (1));
ret = G__20277;
i = G__20278;
continue;
}
}
break;
}
} else
{return and__4263__auto____$2;
}
} else
{return and__4263__auto____$1;
}
} else
{return and__4263__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2((function (){var G__20282 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20282) : cljs.core.deref.call(null,G__20282));
})(),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__20286 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20286) : cljs.core.deref.call(null,G__20286));
})(),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__20290 = cljs.core.get_global_hierarchy();return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20290) : cljs.core.deref.call(null,G__20290));
})(),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"parent","parent",761652748,null))], 0))))));
}
var tp = cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(h);var td = cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(h);var ta = cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(function (){var G__20299 = target;return (targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(G__20299) : targets.call(null,G__20299));
})())));
});})(tp,td,ta))
,m,cljs.core.cons(source,(function (){var G__20300 = source;return (sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(G__20300) : sources.call(null,G__20300));
})()));
});})(tp,td,ta))
;var or__4275__auto__ = ((cljs.core.contains_QMARK_((function (){var G__20304 = tag;return (tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(G__20304) : tp.call(null,G__20304));
})(),parent))?null:(function (){if(cljs.core.contains_QMARK_((function (){var G__20305 = tag;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__20305) : ta.call(null,G__20305));
})(),parent))
{throw (new Error((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"as ancestor")));
} else
{}
if(cljs.core.contains_QMARK_((function (){var G__20306 = parent;return (ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(G__20306) : ta.call(null,G__20306));
})(),tag))
{throw (new Error(("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"as ancestor")));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$122,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$124,tf(cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$123,tf(cljs.core.constant$keyword$123.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((function (){var G__20313 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__20313) : parentMap.call(null,G__20313));
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var G__20314 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__20314) : parentMap.call(null,G__20314));
})(),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__20307_SHARP_){return cljs.core.cons(cljs.core.first(p1__20307_SHARP_),cljs.core.interpose(cljs.core.first(p1__20307_SHARP_),cljs.core.second(p1__20307_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((function (){var G__20315 = tag;return (parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(G__20315) : parentMap.call(null,G__20315));
})(),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__20308_SHARP_,p2__20309_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__20308_SHARP_,p2__20309_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){var G__20318 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20318) : cljs.core.deref.call(null,G__20318));
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){var G__20319 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20319) : cljs.core.deref.call(null,G__20319));
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = (function (){var G__20335 = prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20335) : cljs.core.deref.call(null,G__20335));
})().call(null,x);var or__4275__auto__ = (cljs.core.truth_((function (){var and__4263__auto__ = xprefs;if(cljs.core.truth_(and__4263__auto__))
{var G__20337 = y;return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(G__20337) : xprefs.call(null,G__20337));
} else
{return and__4263__auto__;
}
})())?true:null);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__20338 = cljs.core.rest(ps);
ps = G__20338;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__4275__auto____$1))
{return or__4275__auto____$1;
} else
{var or__4275__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > (0)))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__20339 = cljs.core.rest(ps);
ps = G__20339;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__4275__auto____$2))
{return or__4275__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__4275__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__20353){var vec__20354 = p__20353;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20354,(0),null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20354,(1),null);var e = vec__20354;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__20355 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20355) : cljs.core.deref.call(null,G__20355));
})(),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__4275__auto__ = (be == null);if(or__4275__auto__)
{return or__4275__auto__;
} else
{return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table)))
{} else
{throw (new Error(("Multiple methods in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' match dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val)+" -> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(be2))+", and neither is preferred")));
}
return be2;
} else
{return be;
}
}),null,(function (){var G__20356 = method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20356) : cljs.core.deref.call(null,G__20356));
})());if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__20357 = cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20357) : cljs.core.deref.call(null,G__20357));
})(),(function (){var G__20358 = hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20358) : cljs.core.deref.call(null,G__20358));
})()))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));
return cljs.core.second(best_entry);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj20360 = {};return obj20360;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__4263__auto__ = mf;if(and__4263__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__4263__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__4911__auto__ = (((mf == null))?null:mf);return (function (){var or__4275__auto__ = (cljs.core._reset[(function (){var G__20364 = x__4911__auto__;return goog.typeOf(G__20364);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._reset["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__4263__auto__ = mf;if(and__4263__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__4263__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__4911__auto__ = (((mf == null))?null:mf);return (function (){var or__4275__auto__ = (cljs.core._add_method[(function (){var G__20368 = x__4911__auto__;return goog.typeOf(G__20368);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._add_method["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__4263__auto__ = mf;if(and__4263__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__4263__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__4911__auto__ = (((mf == null))?null:mf);return (function (){var or__4275__auto__ = (cljs.core._remove_method[(function (){var G__20372 = x__4911__auto__;return goog.typeOf(G__20372);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._remove_method["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__4263__auto__ = mf;if(and__4263__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__4263__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__4911__auto__ = (((mf == null))?null:mf);return (function (){var or__4275__auto__ = (cljs.core._prefer_method[(function (){var G__20376 = x__4911__auto__;return goog.typeOf(G__20376);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._prefer_method["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__4263__auto__ = mf;if(and__4263__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__4263__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__4911__auto__ = (((mf == null))?null:mf);return (function (){var or__4275__auto__ = (cljs.core._get_method[(function (){var G__20380 = x__4911__auto__;return goog.typeOf(G__20380);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._get_method["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__4263__auto__ = mf;if(and__4263__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__4263__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__4911__auto__ = (((mf == null))?null:mf);return (function (){var or__4275__auto__ = (cljs.core._methods[(function (){var G__20384 = x__4911__auto__;return goog.typeOf(G__20384);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._methods["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__4263__auto__ = mf;if(and__4263__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__4263__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__4911__auto__ = (((mf == null))?null:mf);return (function (){var or__4275__auto__ = (cljs.core._prefers[(function (){var G__20388 = x__4911__auto__;return goog.typeOf(G__20388);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (cljs.core._prefers["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core.throw_no_method_error = (function throw_no_method_error(name,dispatch_val){throw (new Error(("No method in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' for dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val))));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__20390 = this$__$1;return goog.getUid(G__20390);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){return null;
});})(mf__$1))
);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__20391 = self__.cached_hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20391) : cljs.core.deref.call(null,G__20391));
})(),(function (){var G__20392 = self__.hierarchy;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20392) : cljs.core.deref.call(null,G__20392));
})()))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4124__auto__ = (function (){var G__20393 = self__.method_cache;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20393) : cljs.core.deref.call(null,G__20393));
})().call(null,dispatch_val);if(cljs.core.truth_(temp__4124__auto__))
{var target_fn = temp__4124__auto__;return target_fn;
} else
{var temp__4124__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4124__auto____$1))
{var target_fn = temp__4124__auto____$1;return target_fn;
} else
{return (function (){var G__20394 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20394) : cljs.core.deref.call(null,G__20394));
})().call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error(("Preference conflict in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_y)+" is already preferred to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_val_x))));
} else
{}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);
return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__20395 = self__.method_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20395) : cljs.core.deref.call(null,G__20395));
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;var G__20396 = self__.prefer_table;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20396) : cljs.core.deref.call(null,G__20396));
});
cljs.core.MultiFn.prototype.call = (function() {
var G__21237 = null;
var G__21237__2 = (function (self__,a){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20397 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__20397) : self__.dispatch_fn.call(null,G__20397));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20398 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__20398) : target_fn.call(null,G__20398));
});
var G__21237__3 = (function (self__,a,b){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20399 = a;var G__20400 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__20399,G__20400) : self__.dispatch_fn.call(null,G__20399,G__20400));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20401 = a;var G__20402 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__20401,G__20402) : target_fn.call(null,G__20401,G__20402));
});
var G__21237__4 = (function (self__,a,b,c){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20403 = a;var G__20404 = b;var G__20405 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__20403,G__20404,G__20405) : self__.dispatch_fn.call(null,G__20403,G__20404,G__20405));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20406 = a;var G__20407 = b;var G__20408 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__20406,G__20407,G__20408) : target_fn.call(null,G__20406,G__20407,G__20408));
});
var G__21237__5 = (function (self__,a,b,c,d){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20409 = a;var G__20410 = b;var G__20411 = c;var G__20412 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__20409,G__20410,G__20411,G__20412) : self__.dispatch_fn.call(null,G__20409,G__20410,G__20411,G__20412));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20413 = a;var G__20414 = b;var G__20415 = c;var G__20416 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__20413,G__20414,G__20415,G__20416) : target_fn.call(null,G__20413,G__20414,G__20415,G__20416));
});
var G__21237__6 = (function (self__,a,b,c,d,e){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20417 = a;var G__20418 = b;var G__20419 = c;var G__20420 = d;var G__20421 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__20417,G__20418,G__20419,G__20420,G__20421) : self__.dispatch_fn.call(null,G__20417,G__20418,G__20419,G__20420,G__20421));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20422 = a;var G__20423 = b;var G__20424 = c;var G__20425 = d;var G__20426 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__20422,G__20423,G__20424,G__20425,G__20426) : target_fn.call(null,G__20422,G__20423,G__20424,G__20425,G__20426));
});
var G__21237__7 = (function (self__,a,b,c,d,e,f){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20427 = a;var G__20428 = b;var G__20429 = c;var G__20430 = d;var G__20431 = e;var G__20432 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__20427,G__20428,G__20429,G__20430,G__20431,G__20432) : self__.dispatch_fn.call(null,G__20427,G__20428,G__20429,G__20430,G__20431,G__20432));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20433 = a;var G__20434 = b;var G__20435 = c;var G__20436 = d;var G__20437 = e;var G__20438 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__20433,G__20434,G__20435,G__20436,G__20437,G__20438) : target_fn.call(null,G__20433,G__20434,G__20435,G__20436,G__20437,G__20438));
});
var G__21237__8 = (function (self__,a,b,c,d,e,f,g){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20439 = a;var G__20440 = b;var G__20441 = c;var G__20442 = d;var G__20443 = e;var G__20444 = f;var G__20445 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__20439,G__20440,G__20441,G__20442,G__20443,G__20444,G__20445) : self__.dispatch_fn.call(null,G__20439,G__20440,G__20441,G__20442,G__20443,G__20444,G__20445));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20446 = a;var G__20447 = b;var G__20448 = c;var G__20449 = d;var G__20450 = e;var G__20451 = f;var G__20452 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__20446,G__20447,G__20448,G__20449,G__20450,G__20451,G__20452) : target_fn.call(null,G__20446,G__20447,G__20448,G__20449,G__20450,G__20451,G__20452));
});
var G__21237__9 = (function (self__,a,b,c,d,e,f,g,h){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20453 = a;var G__20454 = b;var G__20455 = c;var G__20456 = d;var G__20457 = e;var G__20458 = f;var G__20459 = g;var G__20460 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__20453,G__20454,G__20455,G__20456,G__20457,G__20458,G__20459,G__20460) : self__.dispatch_fn.call(null,G__20453,G__20454,G__20455,G__20456,G__20457,G__20458,G__20459,G__20460));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20461 = a;var G__20462 = b;var G__20463 = c;var G__20464 = d;var G__20465 = e;var G__20466 = f;var G__20467 = g;var G__20468 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__20461,G__20462,G__20463,G__20464,G__20465,G__20466,G__20467,G__20468) : target_fn.call(null,G__20461,G__20462,G__20463,G__20464,G__20465,G__20466,G__20467,G__20468));
});
var G__21237__10 = (function (self__,a,b,c,d,e,f,g,h,i){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20469 = a;var G__20470 = b;var G__20471 = c;var G__20472 = d;var G__20473 = e;var G__20474 = f;var G__20475 = g;var G__20476 = h;var G__20477 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__20469,G__20470,G__20471,G__20472,G__20473,G__20474,G__20475,G__20476,G__20477) : self__.dispatch_fn.call(null,G__20469,G__20470,G__20471,G__20472,G__20473,G__20474,G__20475,G__20476,G__20477));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20478 = a;var G__20479 = b;var G__20480 = c;var G__20481 = d;var G__20482 = e;var G__20483 = f;var G__20484 = g;var G__20485 = h;var G__20486 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__20478,G__20479,G__20480,G__20481,G__20482,G__20483,G__20484,G__20485,G__20486) : target_fn.call(null,G__20478,G__20479,G__20480,G__20481,G__20482,G__20483,G__20484,G__20485,G__20486));
});
var G__21237__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20487 = a;var G__20488 = b;var G__20489 = c;var G__20490 = d;var G__20491 = e;var G__20492 = f;var G__20493 = g;var G__20494 = h;var G__20495 = i;var G__20496 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__20487,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496) : self__.dispatch_fn.call(null,G__20487,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20497 = a;var G__20498 = b;var G__20499 = c;var G__20500 = d;var G__20501 = e;var G__20502 = f;var G__20503 = g;var G__20504 = h;var G__20505 = i;var G__20506 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__20497,G__20498,G__20499,G__20500,G__20501,G__20502,G__20503,G__20504,G__20505,G__20506) : target_fn.call(null,G__20497,G__20498,G__20499,G__20500,G__20501,G__20502,G__20503,G__20504,G__20505,G__20506));
});
var G__21237__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20507 = a;var G__20508 = b;var G__20509 = c;var G__20510 = d;var G__20511 = e;var G__20512 = f;var G__20513 = g;var G__20514 = h;var G__20515 = i;var G__20516 = j;var G__20517 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__20507,G__20508,G__20509,G__20510,G__20511,G__20512,G__20513,G__20514,G__20515,G__20516,G__20517) : self__.dispatch_fn.call(null,G__20507,G__20508,G__20509,G__20510,G__20511,G__20512,G__20513,G__20514,G__20515,G__20516,G__20517));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20518 = a;var G__20519 = b;var G__20520 = c;var G__20521 = d;var G__20522 = e;var G__20523 = f;var G__20524 = g;var G__20525 = h;var G__20526 = i;var G__20527 = j;var G__20528 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__20518,G__20519,G__20520,G__20521,G__20522,G__20523,G__20524,G__20525,G__20526,G__20527,G__20528) : target_fn.call(null,G__20518,G__20519,G__20520,G__20521,G__20522,G__20523,G__20524,G__20525,G__20526,G__20527,G__20528));
});
var G__21237__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20529 = a;var G__20530 = b;var G__20531 = c;var G__20532 = d;var G__20533 = e;var G__20534 = f;var G__20535 = g;var G__20536 = h;var G__20537 = i;var G__20538 = j;var G__20539 = k;var G__20540 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__20529,G__20530,G__20531,G__20532,G__20533,G__20534,G__20535,G__20536,G__20537,G__20538,G__20539,G__20540) : self__.dispatch_fn.call(null,G__20529,G__20530,G__20531,G__20532,G__20533,G__20534,G__20535,G__20536,G__20537,G__20538,G__20539,G__20540));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20541 = a;var G__20542 = b;var G__20543 = c;var G__20544 = d;var G__20545 = e;var G__20546 = f;var G__20547 = g;var G__20548 = h;var G__20549 = i;var G__20550 = j;var G__20551 = k;var G__20552 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__20541,G__20542,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552) : target_fn.call(null,G__20541,G__20542,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552));
});
var G__21237__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20553 = a;var G__20554 = b;var G__20555 = c;var G__20556 = d;var G__20557 = e;var G__20558 = f;var G__20559 = g;var G__20560 = h;var G__20561 = i;var G__20562 = j;var G__20563 = k;var G__20564 = l;var G__20565 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__20553,G__20554,G__20555,G__20556,G__20557,G__20558,G__20559,G__20560,G__20561,G__20562,G__20563,G__20564,G__20565) : self__.dispatch_fn.call(null,G__20553,G__20554,G__20555,G__20556,G__20557,G__20558,G__20559,G__20560,G__20561,G__20562,G__20563,G__20564,G__20565));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20566 = a;var G__20567 = b;var G__20568 = c;var G__20569 = d;var G__20570 = e;var G__20571 = f;var G__20572 = g;var G__20573 = h;var G__20574 = i;var G__20575 = j;var G__20576 = k;var G__20577 = l;var G__20578 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__20566,G__20567,G__20568,G__20569,G__20570,G__20571,G__20572,G__20573,G__20574,G__20575,G__20576,G__20577,G__20578) : target_fn.call(null,G__20566,G__20567,G__20568,G__20569,G__20570,G__20571,G__20572,G__20573,G__20574,G__20575,G__20576,G__20577,G__20578));
});
var G__21237__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20579 = a;var G__20580 = b;var G__20581 = c;var G__20582 = d;var G__20583 = e;var G__20584 = f;var G__20585 = g;var G__20586 = h;var G__20587 = i;var G__20588 = j;var G__20589 = k;var G__20590 = l;var G__20591 = m;var G__20592 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586,G__20587,G__20588,G__20589,G__20590,G__20591,G__20592) : self__.dispatch_fn.call(null,G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586,G__20587,G__20588,G__20589,G__20590,G__20591,G__20592));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20593 = a;var G__20594 = b;var G__20595 = c;var G__20596 = d;var G__20597 = e;var G__20598 = f;var G__20599 = g;var G__20600 = h;var G__20601 = i;var G__20602 = j;var G__20603 = k;var G__20604 = l;var G__20605 = m;var G__20606 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__20593,G__20594,G__20595,G__20596,G__20597,G__20598,G__20599,G__20600,G__20601,G__20602,G__20603,G__20604,G__20605,G__20606) : target_fn.call(null,G__20593,G__20594,G__20595,G__20596,G__20597,G__20598,G__20599,G__20600,G__20601,G__20602,G__20603,G__20604,G__20605,G__20606));
});
var G__21237__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20607 = a;var G__20608 = b;var G__20609 = c;var G__20610 = d;var G__20611 = e;var G__20612 = f;var G__20613 = g;var G__20614 = h;var G__20615 = i;var G__20616 = j;var G__20617 = k;var G__20618 = l;var G__20619 = m;var G__20620 = n;var G__20621 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__20607,G__20608,G__20609,G__20610,G__20611,G__20612,G__20613,G__20614,G__20615,G__20616,G__20617,G__20618,G__20619,G__20620,G__20621) : self__.dispatch_fn.call(null,G__20607,G__20608,G__20609,G__20610,G__20611,G__20612,G__20613,G__20614,G__20615,G__20616,G__20617,G__20618,G__20619,G__20620,G__20621));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20622 = a;var G__20623 = b;var G__20624 = c;var G__20625 = d;var G__20626 = e;var G__20627 = f;var G__20628 = g;var G__20629 = h;var G__20630 = i;var G__20631 = j;var G__20632 = k;var G__20633 = l;var G__20634 = m;var G__20635 = n;var G__20636 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__20622,G__20623,G__20624,G__20625,G__20626,G__20627,G__20628,G__20629,G__20630,G__20631,G__20632,G__20633,G__20634,G__20635,G__20636) : target_fn.call(null,G__20622,G__20623,G__20624,G__20625,G__20626,G__20627,G__20628,G__20629,G__20630,G__20631,G__20632,G__20633,G__20634,G__20635,G__20636));
});
var G__21237__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20637 = a;var G__20638 = b;var G__20639 = c;var G__20640 = d;var G__20641 = e;var G__20642 = f;var G__20643 = g;var G__20644 = h;var G__20645 = i;var G__20646 = j;var G__20647 = k;var G__20648 = l;var G__20649 = m;var G__20650 = n;var G__20651 = o;var G__20652 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__20637,G__20638,G__20639,G__20640,G__20641,G__20642,G__20643,G__20644,G__20645,G__20646,G__20647,G__20648,G__20649,G__20650,G__20651,G__20652) : self__.dispatch_fn.call(null,G__20637,G__20638,G__20639,G__20640,G__20641,G__20642,G__20643,G__20644,G__20645,G__20646,G__20647,G__20648,G__20649,G__20650,G__20651,G__20652));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20653 = a;var G__20654 = b;var G__20655 = c;var G__20656 = d;var G__20657 = e;var G__20658 = f;var G__20659 = g;var G__20660 = h;var G__20661 = i;var G__20662 = j;var G__20663 = k;var G__20664 = l;var G__20665 = m;var G__20666 = n;var G__20667 = o;var G__20668 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__20653,G__20654,G__20655,G__20656,G__20657,G__20658,G__20659,G__20660,G__20661,G__20662,G__20663,G__20664,G__20665,G__20666,G__20667,G__20668) : target_fn.call(null,G__20653,G__20654,G__20655,G__20656,G__20657,G__20658,G__20659,G__20660,G__20661,G__20662,G__20663,G__20664,G__20665,G__20666,G__20667,G__20668));
});
var G__21237__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20669 = a;var G__20670 = b;var G__20671 = c;var G__20672 = d;var G__20673 = e;var G__20674 = f;var G__20675 = g;var G__20676 = h;var G__20677 = i;var G__20678 = j;var G__20679 = k;var G__20680 = l;var G__20681 = m;var G__20682 = n;var G__20683 = o;var G__20684 = p;var G__20685 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__20669,G__20670,G__20671,G__20672,G__20673,G__20674,G__20675,G__20676,G__20677,G__20678,G__20679,G__20680,G__20681,G__20682,G__20683,G__20684,G__20685) : self__.dispatch_fn.call(null,G__20669,G__20670,G__20671,G__20672,G__20673,G__20674,G__20675,G__20676,G__20677,G__20678,G__20679,G__20680,G__20681,G__20682,G__20683,G__20684,G__20685));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20686 = a;var G__20687 = b;var G__20688 = c;var G__20689 = d;var G__20690 = e;var G__20691 = f;var G__20692 = g;var G__20693 = h;var G__20694 = i;var G__20695 = j;var G__20696 = k;var G__20697 = l;var G__20698 = m;var G__20699 = n;var G__20700 = o;var G__20701 = p;var G__20702 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__20686,G__20687,G__20688,G__20689,G__20690,G__20691,G__20692,G__20693,G__20694,G__20695,G__20696,G__20697,G__20698,G__20699,G__20700,G__20701,G__20702) : target_fn.call(null,G__20686,G__20687,G__20688,G__20689,G__20690,G__20691,G__20692,G__20693,G__20694,G__20695,G__20696,G__20697,G__20698,G__20699,G__20700,G__20701,G__20702));
});
var G__21237__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20703 = a;var G__20704 = b;var G__20705 = c;var G__20706 = d;var G__20707 = e;var G__20708 = f;var G__20709 = g;var G__20710 = h;var G__20711 = i;var G__20712 = j;var G__20713 = k;var G__20714 = l;var G__20715 = m;var G__20716 = n;var G__20717 = o;var G__20718 = p;var G__20719 = q;var G__20720 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__20703,G__20704,G__20705,G__20706,G__20707,G__20708,G__20709,G__20710,G__20711,G__20712,G__20713,G__20714,G__20715,G__20716,G__20717,G__20718,G__20719,G__20720) : self__.dispatch_fn.call(null,G__20703,G__20704,G__20705,G__20706,G__20707,G__20708,G__20709,G__20710,G__20711,G__20712,G__20713,G__20714,G__20715,G__20716,G__20717,G__20718,G__20719,G__20720));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20721 = a;var G__20722 = b;var G__20723 = c;var G__20724 = d;var G__20725 = e;var G__20726 = f;var G__20727 = g;var G__20728 = h;var G__20729 = i;var G__20730 = j;var G__20731 = k;var G__20732 = l;var G__20733 = m;var G__20734 = n;var G__20735 = o;var G__20736 = p;var G__20737 = q;var G__20738 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__20721,G__20722,G__20723,G__20724,G__20725,G__20726,G__20727,G__20728,G__20729,G__20730,G__20731,G__20732,G__20733,G__20734,G__20735,G__20736,G__20737,G__20738) : target_fn.call(null,G__20721,G__20722,G__20723,G__20724,G__20725,G__20726,G__20727,G__20728,G__20729,G__20730,G__20731,G__20732,G__20733,G__20734,G__20735,G__20736,G__20737,G__20738));
});
var G__21237__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20739 = a;var G__20740 = b;var G__20741 = c;var G__20742 = d;var G__20743 = e;var G__20744 = f;var G__20745 = g;var G__20746 = h;var G__20747 = i;var G__20748 = j;var G__20749 = k;var G__20750 = l;var G__20751 = m;var G__20752 = n;var G__20753 = o;var G__20754 = p;var G__20755 = q;var G__20756 = r;var G__20757 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__20739,G__20740,G__20741,G__20742,G__20743,G__20744,G__20745,G__20746,G__20747,G__20748,G__20749,G__20750,G__20751,G__20752,G__20753,G__20754,G__20755,G__20756,G__20757) : self__.dispatch_fn.call(null,G__20739,G__20740,G__20741,G__20742,G__20743,G__20744,G__20745,G__20746,G__20747,G__20748,G__20749,G__20750,G__20751,G__20752,G__20753,G__20754,G__20755,G__20756,G__20757));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20758 = a;var G__20759 = b;var G__20760 = c;var G__20761 = d;var G__20762 = e;var G__20763 = f;var G__20764 = g;var G__20765 = h;var G__20766 = i;var G__20767 = j;var G__20768 = k;var G__20769 = l;var G__20770 = m;var G__20771 = n;var G__20772 = o;var G__20773 = p;var G__20774 = q;var G__20775 = r;var G__20776 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__20758,G__20759,G__20760,G__20761,G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20768,G__20769,G__20770,G__20771,G__20772,G__20773,G__20774,G__20775,G__20776) : target_fn.call(null,G__20758,G__20759,G__20760,G__20761,G__20762,G__20763,G__20764,G__20765,G__20766,G__20767,G__20768,G__20769,G__20770,G__20771,G__20772,G__20773,G__20774,G__20775,G__20776));
});
var G__21237__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = (function (){var G__20777 = a;var G__20778 = b;var G__20779 = c;var G__20780 = d;var G__20781 = e;var G__20782 = f;var G__20783 = g;var G__20784 = h;var G__20785 = i;var G__20786 = j;var G__20787 = k;var G__20788 = l;var G__20789 = m;var G__20790 = n;var G__20791 = o;var G__20792 = p;var G__20793 = q;var G__20794 = r;var G__20795 = s;var G__20796 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20783,G__20784,G__20785,G__20786,G__20787,G__20788,G__20789,G__20790,G__20791,G__20792,G__20793,G__20794,G__20795,G__20796) : self__.dispatch_fn.call(null,G__20777,G__20778,G__20779,G__20780,G__20781,G__20782,G__20783,G__20784,G__20785,G__20786,G__20787,G__20788,G__20789,G__20790,G__20791,G__20792,G__20793,G__20794,G__20795,G__20796));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20797 = a;var G__20798 = b;var G__20799 = c;var G__20800 = d;var G__20801 = e;var G__20802 = f;var G__20803 = g;var G__20804 = h;var G__20805 = i;var G__20806 = j;var G__20807 = k;var G__20808 = l;var G__20809 = m;var G__20810 = n;var G__20811 = o;var G__20812 = p;var G__20813 = q;var G__20814 = r;var G__20815 = s;var G__20816 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__20797,G__20798,G__20799,G__20800,G__20801,G__20802,G__20803,G__20804,G__20805,G__20806,G__20807,G__20808,G__20809,G__20810,G__20811,G__20812,G__20813,G__20814,G__20815,G__20816) : target_fn.call(null,G__20797,G__20798,G__20799,G__20800,G__20801,G__20802,G__20803,G__20804,G__20805,G__20806,G__20807,G__20808,G__20809,G__20810,G__20811,G__20812,G__20813,G__20814,G__20815,G__20816));
});
var G__21237__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var self____$1 = this;var mf = self____$1;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__21237 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 2:
return G__21237__2.call(this,self__,a);
case 3:
return G__21237__3.call(this,self__,a,b);
case 4:
return G__21237__4.call(this,self__,a,b,c);
case 5:
return G__21237__5.call(this,self__,a,b,c,d);
case 6:
return G__21237__6.call(this,self__,a,b,c,d,e);
case 7:
return G__21237__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__21237__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__21237__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__21237__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__21237__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__21237__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__21237__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__21237__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__21237__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__21237__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__21237__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__21237__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__21237__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__21237__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__21237__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__21237__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21237.cljs$core$IFn$_invoke$arity$2 = G__21237__2;
G__21237.cljs$core$IFn$_invoke$arity$3 = G__21237__3;
G__21237.cljs$core$IFn$_invoke$arity$4 = G__21237__4;
G__21237.cljs$core$IFn$_invoke$arity$5 = G__21237__5;
G__21237.cljs$core$IFn$_invoke$arity$6 = G__21237__6;
G__21237.cljs$core$IFn$_invoke$arity$7 = G__21237__7;
G__21237.cljs$core$IFn$_invoke$arity$8 = G__21237__8;
G__21237.cljs$core$IFn$_invoke$arity$9 = G__21237__9;
G__21237.cljs$core$IFn$_invoke$arity$10 = G__21237__10;
G__21237.cljs$core$IFn$_invoke$arity$11 = G__21237__11;
G__21237.cljs$core$IFn$_invoke$arity$12 = G__21237__12;
G__21237.cljs$core$IFn$_invoke$arity$13 = G__21237__13;
G__21237.cljs$core$IFn$_invoke$arity$14 = G__21237__14;
G__21237.cljs$core$IFn$_invoke$arity$15 = G__21237__15;
G__21237.cljs$core$IFn$_invoke$arity$16 = G__21237__16;
G__21237.cljs$core$IFn$_invoke$arity$17 = G__21237__17;
G__21237.cljs$core$IFn$_invoke$arity$18 = G__21237__18;
G__21237.cljs$core$IFn$_invoke$arity$19 = G__21237__19;
G__21237.cljs$core$IFn$_invoke$arity$20 = G__21237__20;
G__21237.cljs$core$IFn$_invoke$arity$21 = G__21237__21;
G__21237.cljs$core$IFn$_invoke$arity$22 = G__21237__22;
return G__21237;
})()
;
cljs.core.MultiFn.prototype.apply = (function (self__,args20389){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20389)));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20817 = a;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(G__20817) : self__.dispatch_fn.call(null,G__20817));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20818 = a;return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(G__20818) : target_fn.call(null,G__20818));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20819 = a;var G__20820 = b;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(G__20819,G__20820) : self__.dispatch_fn.call(null,G__20819,G__20820));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20821 = a;var G__20822 = b;return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(G__20821,G__20822) : target_fn.call(null,G__20821,G__20822));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20823 = a;var G__20824 = b;var G__20825 = c;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(G__20823,G__20824,G__20825) : self__.dispatch_fn.call(null,G__20823,G__20824,G__20825));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20826 = a;var G__20827 = b;var G__20828 = c;return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(G__20826,G__20827,G__20828) : target_fn.call(null,G__20826,G__20827,G__20828));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20829 = a;var G__20830 = b;var G__20831 = c;var G__20832 = d;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(G__20829,G__20830,G__20831,G__20832) : self__.dispatch_fn.call(null,G__20829,G__20830,G__20831,G__20832));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20833 = a;var G__20834 = b;var G__20835 = c;var G__20836 = d;return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(G__20833,G__20834,G__20835,G__20836) : target_fn.call(null,G__20833,G__20834,G__20835,G__20836));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20837 = a;var G__20838 = b;var G__20839 = c;var G__20840 = d;var G__20841 = e;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(G__20837,G__20838,G__20839,G__20840,G__20841) : self__.dispatch_fn.call(null,G__20837,G__20838,G__20839,G__20840,G__20841));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20842 = a;var G__20843 = b;var G__20844 = c;var G__20845 = d;var G__20846 = e;return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(G__20842,G__20843,G__20844,G__20845,G__20846) : target_fn.call(null,G__20842,G__20843,G__20844,G__20845,G__20846));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20847 = a;var G__20848 = b;var G__20849 = c;var G__20850 = d;var G__20851 = e;var G__20852 = f;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(G__20847,G__20848,G__20849,G__20850,G__20851,G__20852) : self__.dispatch_fn.call(null,G__20847,G__20848,G__20849,G__20850,G__20851,G__20852));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20853 = a;var G__20854 = b;var G__20855 = c;var G__20856 = d;var G__20857 = e;var G__20858 = f;return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(G__20853,G__20854,G__20855,G__20856,G__20857,G__20858) : target_fn.call(null,G__20853,G__20854,G__20855,G__20856,G__20857,G__20858));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20859 = a;var G__20860 = b;var G__20861 = c;var G__20862 = d;var G__20863 = e;var G__20864 = f;var G__20865 = g;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(G__20859,G__20860,G__20861,G__20862,G__20863,G__20864,G__20865) : self__.dispatch_fn.call(null,G__20859,G__20860,G__20861,G__20862,G__20863,G__20864,G__20865));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20866 = a;var G__20867 = b;var G__20868 = c;var G__20869 = d;var G__20870 = e;var G__20871 = f;var G__20872 = g;return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(G__20866,G__20867,G__20868,G__20869,G__20870,G__20871,G__20872) : target_fn.call(null,G__20866,G__20867,G__20868,G__20869,G__20870,G__20871,G__20872));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20873 = a;var G__20874 = b;var G__20875 = c;var G__20876 = d;var G__20877 = e;var G__20878 = f;var G__20879 = g;var G__20880 = h;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(G__20873,G__20874,G__20875,G__20876,G__20877,G__20878,G__20879,G__20880) : self__.dispatch_fn.call(null,G__20873,G__20874,G__20875,G__20876,G__20877,G__20878,G__20879,G__20880));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20881 = a;var G__20882 = b;var G__20883 = c;var G__20884 = d;var G__20885 = e;var G__20886 = f;var G__20887 = g;var G__20888 = h;return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(G__20881,G__20882,G__20883,G__20884,G__20885,G__20886,G__20887,G__20888) : target_fn.call(null,G__20881,G__20882,G__20883,G__20884,G__20885,G__20886,G__20887,G__20888));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20889 = a;var G__20890 = b;var G__20891 = c;var G__20892 = d;var G__20893 = e;var G__20894 = f;var G__20895 = g;var G__20896 = h;var G__20897 = i;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(G__20889,G__20890,G__20891,G__20892,G__20893,G__20894,G__20895,G__20896,G__20897) : self__.dispatch_fn.call(null,G__20889,G__20890,G__20891,G__20892,G__20893,G__20894,G__20895,G__20896,G__20897));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20898 = a;var G__20899 = b;var G__20900 = c;var G__20901 = d;var G__20902 = e;var G__20903 = f;var G__20904 = g;var G__20905 = h;var G__20906 = i;return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(G__20898,G__20899,G__20900,G__20901,G__20902,G__20903,G__20904,G__20905,G__20906) : target_fn.call(null,G__20898,G__20899,G__20900,G__20901,G__20902,G__20903,G__20904,G__20905,G__20906));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20907 = a;var G__20908 = b;var G__20909 = c;var G__20910 = d;var G__20911 = e;var G__20912 = f;var G__20913 = g;var G__20914 = h;var G__20915 = i;var G__20916 = j;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(G__20907,G__20908,G__20909,G__20910,G__20911,G__20912,G__20913,G__20914,G__20915,G__20916) : self__.dispatch_fn.call(null,G__20907,G__20908,G__20909,G__20910,G__20911,G__20912,G__20913,G__20914,G__20915,G__20916));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20917 = a;var G__20918 = b;var G__20919 = c;var G__20920 = d;var G__20921 = e;var G__20922 = f;var G__20923 = g;var G__20924 = h;var G__20925 = i;var G__20926 = j;return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(G__20917,G__20918,G__20919,G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926) : target_fn.call(null,G__20917,G__20918,G__20919,G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20927 = a;var G__20928 = b;var G__20929 = c;var G__20930 = d;var G__20931 = e;var G__20932 = f;var G__20933 = g;var G__20934 = h;var G__20935 = i;var G__20936 = j;var G__20937 = k;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(G__20927,G__20928,G__20929,G__20930,G__20931,G__20932,G__20933,G__20934,G__20935,G__20936,G__20937) : self__.dispatch_fn.call(null,G__20927,G__20928,G__20929,G__20930,G__20931,G__20932,G__20933,G__20934,G__20935,G__20936,G__20937));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20938 = a;var G__20939 = b;var G__20940 = c;var G__20941 = d;var G__20942 = e;var G__20943 = f;var G__20944 = g;var G__20945 = h;var G__20946 = i;var G__20947 = j;var G__20948 = k;return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(G__20938,G__20939,G__20940,G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948) : target_fn.call(null,G__20938,G__20939,G__20940,G__20941,G__20942,G__20943,G__20944,G__20945,G__20946,G__20947,G__20948));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20949 = a;var G__20950 = b;var G__20951 = c;var G__20952 = d;var G__20953 = e;var G__20954 = f;var G__20955 = g;var G__20956 = h;var G__20957 = i;var G__20958 = j;var G__20959 = k;var G__20960 = l;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(G__20949,G__20950,G__20951,G__20952,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960) : self__.dispatch_fn.call(null,G__20949,G__20950,G__20951,G__20952,G__20953,G__20954,G__20955,G__20956,G__20957,G__20958,G__20959,G__20960));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20961 = a;var G__20962 = b;var G__20963 = c;var G__20964 = d;var G__20965 = e;var G__20966 = f;var G__20967 = g;var G__20968 = h;var G__20969 = i;var G__20970 = j;var G__20971 = k;var G__20972 = l;return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(G__20961,G__20962,G__20963,G__20964,G__20965,G__20966,G__20967,G__20968,G__20969,G__20970,G__20971,G__20972) : target_fn.call(null,G__20961,G__20962,G__20963,G__20964,G__20965,G__20966,G__20967,G__20968,G__20969,G__20970,G__20971,G__20972));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20973 = a;var G__20974 = b;var G__20975 = c;var G__20976 = d;var G__20977 = e;var G__20978 = f;var G__20979 = g;var G__20980 = h;var G__20981 = i;var G__20982 = j;var G__20983 = k;var G__20984 = l;var G__20985 = m;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(G__20973,G__20974,G__20975,G__20976,G__20977,G__20978,G__20979,G__20980,G__20981,G__20982,G__20983,G__20984,G__20985) : self__.dispatch_fn.call(null,G__20973,G__20974,G__20975,G__20976,G__20977,G__20978,G__20979,G__20980,G__20981,G__20982,G__20983,G__20984,G__20985));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__20986 = a;var G__20987 = b;var G__20988 = c;var G__20989 = d;var G__20990 = e;var G__20991 = f;var G__20992 = g;var G__20993 = h;var G__20994 = i;var G__20995 = j;var G__20996 = k;var G__20997 = l;var G__20998 = m;return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(G__20986,G__20987,G__20988,G__20989,G__20990,G__20991,G__20992,G__20993,G__20994,G__20995,G__20996,G__20997,G__20998) : target_fn.call(null,G__20986,G__20987,G__20988,G__20989,G__20990,G__20991,G__20992,G__20993,G__20994,G__20995,G__20996,G__20997,G__20998));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__20999 = a;var G__21000 = b;var G__21001 = c;var G__21002 = d;var G__21003 = e;var G__21004 = f;var G__21005 = g;var G__21006 = h;var G__21007 = i;var G__21008 = j;var G__21009 = k;var G__21010 = l;var G__21011 = m;var G__21012 = n;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(G__20999,G__21000,G__21001,G__21002,G__21003,G__21004,G__21005,G__21006,G__21007,G__21008,G__21009,G__21010,G__21011,G__21012) : self__.dispatch_fn.call(null,G__20999,G__21000,G__21001,G__21002,G__21003,G__21004,G__21005,G__21006,G__21007,G__21008,G__21009,G__21010,G__21011,G__21012));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__21013 = a;var G__21014 = b;var G__21015 = c;var G__21016 = d;var G__21017 = e;var G__21018 = f;var G__21019 = g;var G__21020 = h;var G__21021 = i;var G__21022 = j;var G__21023 = k;var G__21024 = l;var G__21025 = m;var G__21026 = n;return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(G__21013,G__21014,G__21015,G__21016,G__21017,G__21018,G__21019,G__21020,G__21021,G__21022,G__21023,G__21024,G__21025,G__21026) : target_fn.call(null,G__21013,G__21014,G__21015,G__21016,G__21017,G__21018,G__21019,G__21020,G__21021,G__21022,G__21023,G__21024,G__21025,G__21026));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__21027 = a;var G__21028 = b;var G__21029 = c;var G__21030 = d;var G__21031 = e;var G__21032 = f;var G__21033 = g;var G__21034 = h;var G__21035 = i;var G__21036 = j;var G__21037 = k;var G__21038 = l;var G__21039 = m;var G__21040 = n;var G__21041 = o;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(G__21027,G__21028,G__21029,G__21030,G__21031,G__21032,G__21033,G__21034,G__21035,G__21036,G__21037,G__21038,G__21039,G__21040,G__21041) : self__.dispatch_fn.call(null,G__21027,G__21028,G__21029,G__21030,G__21031,G__21032,G__21033,G__21034,G__21035,G__21036,G__21037,G__21038,G__21039,G__21040,G__21041));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__21042 = a;var G__21043 = b;var G__21044 = c;var G__21045 = d;var G__21046 = e;var G__21047 = f;var G__21048 = g;var G__21049 = h;var G__21050 = i;var G__21051 = j;var G__21052 = k;var G__21053 = l;var G__21054 = m;var G__21055 = n;var G__21056 = o;return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(G__21042,G__21043,G__21044,G__21045,G__21046,G__21047,G__21048,G__21049,G__21050,G__21051,G__21052,G__21053,G__21054,G__21055,G__21056) : target_fn.call(null,G__21042,G__21043,G__21044,G__21045,G__21046,G__21047,G__21048,G__21049,G__21050,G__21051,G__21052,G__21053,G__21054,G__21055,G__21056));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__21057 = a;var G__21058 = b;var G__21059 = c;var G__21060 = d;var G__21061 = e;var G__21062 = f;var G__21063 = g;var G__21064 = h;var G__21065 = i;var G__21066 = j;var G__21067 = k;var G__21068 = l;var G__21069 = m;var G__21070 = n;var G__21071 = o;var G__21072 = p;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(G__21057,G__21058,G__21059,G__21060,G__21061,G__21062,G__21063,G__21064,G__21065,G__21066,G__21067,G__21068,G__21069,G__21070,G__21071,G__21072) : self__.dispatch_fn.call(null,G__21057,G__21058,G__21059,G__21060,G__21061,G__21062,G__21063,G__21064,G__21065,G__21066,G__21067,G__21068,G__21069,G__21070,G__21071,G__21072));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__21073 = a;var G__21074 = b;var G__21075 = c;var G__21076 = d;var G__21077 = e;var G__21078 = f;var G__21079 = g;var G__21080 = h;var G__21081 = i;var G__21082 = j;var G__21083 = k;var G__21084 = l;var G__21085 = m;var G__21086 = n;var G__21087 = o;var G__21088 = p;return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(G__21073,G__21074,G__21075,G__21076,G__21077,G__21078,G__21079,G__21080,G__21081,G__21082,G__21083,G__21084,G__21085,G__21086,G__21087,G__21088) : target_fn.call(null,G__21073,G__21074,G__21075,G__21076,G__21077,G__21078,G__21079,G__21080,G__21081,G__21082,G__21083,G__21084,G__21085,G__21086,G__21087,G__21088));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__21089 = a;var G__21090 = b;var G__21091 = c;var G__21092 = d;var G__21093 = e;var G__21094 = f;var G__21095 = g;var G__21096 = h;var G__21097 = i;var G__21098 = j;var G__21099 = k;var G__21100 = l;var G__21101 = m;var G__21102 = n;var G__21103 = o;var G__21104 = p;var G__21105 = q;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(G__21089,G__21090,G__21091,G__21092,G__21093,G__21094,G__21095,G__21096,G__21097,G__21098,G__21099,G__21100,G__21101,G__21102,G__21103,G__21104,G__21105) : self__.dispatch_fn.call(null,G__21089,G__21090,G__21091,G__21092,G__21093,G__21094,G__21095,G__21096,G__21097,G__21098,G__21099,G__21100,G__21101,G__21102,G__21103,G__21104,G__21105));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__21106 = a;var G__21107 = b;var G__21108 = c;var G__21109 = d;var G__21110 = e;var G__21111 = f;var G__21112 = g;var G__21113 = h;var G__21114 = i;var G__21115 = j;var G__21116 = k;var G__21117 = l;var G__21118 = m;var G__21119 = n;var G__21120 = o;var G__21121 = p;var G__21122 = q;return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(G__21106,G__21107,G__21108,G__21109,G__21110,G__21111,G__21112,G__21113,G__21114,G__21115,G__21116,G__21117,G__21118,G__21119,G__21120,G__21121,G__21122) : target_fn.call(null,G__21106,G__21107,G__21108,G__21109,G__21110,G__21111,G__21112,G__21113,G__21114,G__21115,G__21116,G__21117,G__21118,G__21119,G__21120,G__21121,G__21122));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__21123 = a;var G__21124 = b;var G__21125 = c;var G__21126 = d;var G__21127 = e;var G__21128 = f;var G__21129 = g;var G__21130 = h;var G__21131 = i;var G__21132 = j;var G__21133 = k;var G__21134 = l;var G__21135 = m;var G__21136 = n;var G__21137 = o;var G__21138 = p;var G__21139 = q;var G__21140 = r;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(G__21123,G__21124,G__21125,G__21126,G__21127,G__21128,G__21129,G__21130,G__21131,G__21132,G__21133,G__21134,G__21135,G__21136,G__21137,G__21138,G__21139,G__21140) : self__.dispatch_fn.call(null,G__21123,G__21124,G__21125,G__21126,G__21127,G__21128,G__21129,G__21130,G__21131,G__21132,G__21133,G__21134,G__21135,G__21136,G__21137,G__21138,G__21139,G__21140));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__21141 = a;var G__21142 = b;var G__21143 = c;var G__21144 = d;var G__21145 = e;var G__21146 = f;var G__21147 = g;var G__21148 = h;var G__21149 = i;var G__21150 = j;var G__21151 = k;var G__21152 = l;var G__21153 = m;var G__21154 = n;var G__21155 = o;var G__21156 = p;var G__21157 = q;var G__21158 = r;return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(G__21141,G__21142,G__21143,G__21144,G__21145,G__21146,G__21147,G__21148,G__21149,G__21150,G__21151,G__21152,G__21153,G__21154,G__21155,G__21156,G__21157,G__21158) : target_fn.call(null,G__21141,G__21142,G__21143,G__21144,G__21145,G__21146,G__21147,G__21148,G__21149,G__21150,G__21151,G__21152,G__21153,G__21154,G__21155,G__21156,G__21157,G__21158));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__21159 = a;var G__21160 = b;var G__21161 = c;var G__21162 = d;var G__21163 = e;var G__21164 = f;var G__21165 = g;var G__21166 = h;var G__21167 = i;var G__21168 = j;var G__21169 = k;var G__21170 = l;var G__21171 = m;var G__21172 = n;var G__21173 = o;var G__21174 = p;var G__21175 = q;var G__21176 = r;var G__21177 = s;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(G__21159,G__21160,G__21161,G__21162,G__21163,G__21164,G__21165,G__21166,G__21167,G__21168,G__21169,G__21170,G__21171,G__21172,G__21173,G__21174,G__21175,G__21176,G__21177) : self__.dispatch_fn.call(null,G__21159,G__21160,G__21161,G__21162,G__21163,G__21164,G__21165,G__21166,G__21167,G__21168,G__21169,G__21170,G__21171,G__21172,G__21173,G__21174,G__21175,G__21176,G__21177));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__21178 = a;var G__21179 = b;var G__21180 = c;var G__21181 = d;var G__21182 = e;var G__21183 = f;var G__21184 = g;var G__21185 = h;var G__21186 = i;var G__21187 = j;var G__21188 = k;var G__21189 = l;var G__21190 = m;var G__21191 = n;var G__21192 = o;var G__21193 = p;var G__21194 = q;var G__21195 = r;var G__21196 = s;return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(G__21178,G__21179,G__21180,G__21181,G__21182,G__21183,G__21184,G__21185,G__21186,G__21187,G__21188,G__21189,G__21190,G__21191,G__21192,G__21193,G__21194,G__21195,G__21196) : target_fn.call(null,G__21178,G__21179,G__21180,G__21181,G__21182,G__21183,G__21184,G__21185,G__21186,G__21187,G__21188,G__21189,G__21190,G__21191,G__21192,G__21193,G__21194,G__21195,G__21196));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var self__ = this;
var mf = this;var dispatch_val = (function (){var G__21197 = a;var G__21198 = b;var G__21199 = c;var G__21200 = d;var G__21201 = e;var G__21202 = f;var G__21203 = g;var G__21204 = h;var G__21205 = i;var G__21206 = j;var G__21207 = k;var G__21208 = l;var G__21209 = m;var G__21210 = n;var G__21211 = o;var G__21212 = p;var G__21213 = q;var G__21214 = r;var G__21215 = s;var G__21216 = t;return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(G__21197,G__21198,G__21199,G__21200,G__21201,G__21202,G__21203,G__21204,G__21205,G__21206,G__21207,G__21208,G__21209,G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216) : self__.dispatch_fn.call(null,G__21197,G__21198,G__21199,G__21200,G__21201,G__21202,G__21203,G__21204,G__21205,G__21206,G__21207,G__21208,G__21209,G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216));
})();var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
var G__21217 = a;var G__21218 = b;var G__21219 = c;var G__21220 = d;var G__21221 = e;var G__21222 = f;var G__21223 = g;var G__21224 = h;var G__21225 = i;var G__21226 = j;var G__21227 = k;var G__21228 = l;var G__21229 = m;var G__21230 = n;var G__21231 = o;var G__21232 = p;var G__21233 = q;var G__21234 = r;var G__21235 = s;var G__21236 = t;return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(G__21217,G__21218,G__21219,G__21220,G__21221,G__21222,G__21223,G__21224,G__21225,G__21226,G__21227,G__21228,G__21229,G__21230,G__21231,G__21232,G__21233,G__21234,G__21235,G__21236) : target_fn.call(null,G__21217,G__21218,G__21219,G__21220,G__21221,G__21222,G__21223,G__21224,G__21225,G__21226,G__21227,G__21228,G__21229,G__21230,G__21231,G__21232,G__21233,G__21234,G__21235,G__21236));
});
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){var self__ = this;
var mf = this;var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{cljs.core.throw_no_method_error(self__.name,dispatch_val);
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__4851__auto__,writer__4852__auto__,opt__4853__auto__){return cljs.core._write(writer__4852__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__21238 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));return goog.string.hashCode(G__21238);
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write(writer,("#uuid \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.uuid)+"\""));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.UUID.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.uuid;
});
cljs.core.UUID.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
cljs.core.__GT_UUID = (function __GT_UUID(uuid){return (new cljs.core.UUID(uuid));
});

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__4854__auto__,writer__4855__auto__,opts__4856__auto__){return cljs.core._write(writer__4855__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){return (new cljs.core.ExceptionInfo(message,data,cause));
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){if((ex instanceof Error))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((function (){var G__21243 = x;var G__21244 = y;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__21243,G__21244) : pred.call(null,G__21243,G__21244));
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var G__21245 = y;var G__21246 = x;return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(G__21245,G__21246) : pred.call(null,G__21245,G__21246));
})()))
{return (1);
} else
{return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null),x);
});
