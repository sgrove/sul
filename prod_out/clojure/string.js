// Compiled by ClojureScript 0.0-2356
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){if(typeof match === 'string')
{return s.replace((new RegExp((function (){var G__15591 = match;return goog.string.regExpEscape(G__15591);
})(),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{throw ("Invalid match arg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(match));

}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,coll);
});
var join__2 = (function (separator,coll){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$1 = join__1;
join.cljs$core$IFn$_invoke$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){if((cljs.core.count(s) < (2)))
{return clojure.string.upper_case(s);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))));
}
});
clojure.string.pop_last_while_empty = (function pop_last_while_empty(v){var v__$1 = v;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.peek(v__$1)))
{{
var G__15592 = cljs.core.pop(v__$1);
v__$1 = G__15592;
continue;
}
} else
{return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function discard_trailing_if_needed(limit,v){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit))
{return clojure.string.pop_last_while_empty(v);
} else
{return v;
}
});
clojure.string.split_with_empty_regex = (function split_with_empty_regex(s,limit){if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count(s)))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s)))),"");
} else
{var pred__15600 = cljs.core._EQ_;var expr__15601 = limit;if(cljs.core.truth_((function (){var G__15603 = (1);var G__15604 = expr__15601;return (pred__15600.cljs$core$IFn$_invoke$arity$2 ? pred__15600.cljs$core$IFn$_invoke$arity$2(G__15603,G__15604) : pred__15600.call(null,G__15603,G__15604));
})()))
{return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else
{if(cljs.core.truth_((function (){var G__15605 = (2);var G__15606 = expr__15601;return (pred__15600.cljs$core$IFn$_invoke$arity$2 ? pred__15600.cljs$core$IFn$_invoke$arity$2(G__15605,G__15606) : pred__15600.call(null,G__15605,G__15606));
})()))
{return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else
{var c = (limit - (2));return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s))),(0),c))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,c));
}
}
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){return split.cljs$core$IFn$_invoke$arity$3(s,re,(0));
});
var split__3 = (function (s,re,limit){return clojure.string.discard_trailing_if_needed(limit,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re)),"/(?:)/"))?clojure.string.split_with_empty_regex(s,limit):(((limit < (1)))?cljs.core.vec((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)).split(re)):(function (){var s__$1 = s;var limit__$1 = limit;var parts = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limit__$1,(1)))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
} else
{var temp__4124__auto__ = cljs.core.re_find(re,s__$1);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;var index = s__$1.indexOf(m);{
var G__15610 = s__$1.substring((index + cljs.core.count(m)));
var G__15611 = (limit__$1 - (1));
var G__15612 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1.substring((0),index));
s__$1 = G__15610;
limit__$1 = G__15611;
parts = G__15612;
continue;
}
} else
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
}
}
break;
}
})())));
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){var G__15614 = s;return goog.string.trim(G__15614);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){var G__15616 = s;return goog.string.trimLeft(G__15616);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){var G__15618 = s;return goog.string.trimRight(G__15618);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){var index = s.length;while(true){
if((index === (0)))
{return "";
} else
{var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(index - (1)));if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\r")))
{{
var G__15619 = (index - (1));
index = G__15619;
continue;
}
} else
{return s.substring((0),index);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){var G__15621 = s;return goog.string.isEmptySafe(G__15621);
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape__$1(s,cmap){var buffer = (new goog.string.StringBuffer());var length = s.length;var index = (0);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,index))
{return buffer.toString();
} else
{var ch = s.charAt(index);var temp__4124__auto___15622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cmap,ch);if(cljs.core.truth_(temp__4124__auto___15622))
{var replacement_15623 = temp__4124__auto___15622;buffer.append((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(replacement_15623)));
} else
{buffer.append(ch);
}
{
var G__15624 = (index + (1));
index = G__15624;
continue;
}
}
break;
}
});
