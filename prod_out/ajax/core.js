// Compiled by ClojureScript 0.0-2356
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
ajax.core.AjaxImpl = (function (){var obj15475 = {};return obj15475;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__4263__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (ajax.core._js_ajax_request[(function (){var G__15479 = x__4911__auto__;return goog.typeOf(G__15479);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj15481 = {};return obj15481;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__4263__auto__ = this$;if(and__4263__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__4263__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__4911__auto__ = (((this$ == null))?null:this$);return (function (){var or__4275__auto__ = (ajax.core._abort[(function (){var G__15485 = x__4911__auto__;return goog.typeOf(G__15485);
})()]);if(or__4275__auto__)
{return or__4275__auto__;
} else
{var or__4275__auto____$1 = (ajax.core._abort["_"]);if(or__4275__auto____$1)
{return or__4275__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__15486){var map__15487 = p__15486;var map__15487__$1 = ((cljs.core.seq_QMARK_(map__15487))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15487):map__15487);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15487__$1,cljs.core.constant$keyword$126);var G__15488 = (new goog.net.XhrIo());var G__15489_15492 = G__15488;var G__15490_15493 = goog.net.EventType.COMPLETE;var G__15491_15494 = handler;goog.events.listen(G__15489_15492,G__15490_15493,G__15491_15494);
G__15488.setTimeoutInterval((function (){var or__4275__auto__ = timeout;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return (0);
}
})());
G__15488.send(uri,method,body,headers);
return G__15488;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__15495){var map__15496 = p__15495;var map__15496__$1 = ((cljs.core.seq_QMARK_(map__15496))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15496):map__15496);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15496__$1,cljs.core.constant$keyword$127);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15496__$1,cljs.core.constant$keyword$128);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15496__$1,cljs.core.constant$keyword$126);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15496__$1,cljs.core.constant$keyword$129);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort(this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,ajax.core.read_edn,cljs.core.constant$keyword$131,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$132,cljs.core.pr_str,cljs.core.constant$keyword$133,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return (function (){var G__15498 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));return goog.Uri.QueryData.createFromMap(G__15498);
})().toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$132,ajax.core.params_to_str,cljs.core.constant$keyword$133,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,ajax.core.read_text,cljs.core.constant$keyword$131,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$132,ajax.core.write_json,cljs.core.constant$keyword$133,"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__15499){var map__15501 = p__15499;var map__15501__$1 = ((cljs.core.seq_QMARK_(map__15501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15501):map__15501);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15501__$1,cljs.core.constant$keyword$134);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15501__$1,cljs.core.constant$keyword$135);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,((function (map__15501,map__15501__$1,keywords_QMARK_,prefix){
return (function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$121,keywords_QMARK_], 0));
});})(map__15501,map__15501__$1,keywords_QMARK_,prefix))
,cljs.core.constant$keyword$131,("JSON"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?(" prefix '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+"'"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null)))], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = (function (){var or__4275__auto__ = xhrio.getResponseHeader("Content-Type");if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return "";
}
})();var detect = ((function (ct){
return (function detect(s){return (ct.indexOf(s) >= (0));
});})(ct))
;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(((detect("application/json"))?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):((detect("application/edn"))?ajax.core.edn_response_format():((detect("text/plain"))?ajax.core.raw_response_format():((detect("text/html"))?ajax.core.raw_response_format():ajax.core.edn_response_format()
)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131], null),((function (ct){
return (function (p1__15502_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15502_SHARP_)+" (default)");
});})(ct))
);
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$132);
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,format,cljs.core.constant$keyword$131,"custom"], null)], 0));
} else
{throw (new Error(("unrecognized format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));

}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__15503,xhrio){var map__15505 = p__15503;var map__15505__$1 = ((cljs.core.seq_QMARK_(map__15505))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15505):map__15505);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15505__$1,cljs.core.constant$keyword$131);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$136,status,cljs.core.constant$keyword$137,null], null);var status_text = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)+"  Format should have been "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(description));var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$138,status_text,cljs.core.array_seq([cljs.core.constant$keyword$139,true,cljs.core.constant$keyword$140,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$138,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$141,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$136,(-1),cljs.core.constant$keyword$138,"Request aborted by client.",cljs.core.constant$keyword$142,true], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$136,(-1),cljs.core.constant$keyword$138,"Request timed out.",cljs.core.constant$keyword$143,true], null)], null);
}
} else
{var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(format))?format:(function (){var G__15511 = xhrio;return (get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(G__15511) : get_default_format.call(null,G__15511));
})());var parse = cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (function (){var G__15513 = xhrio;return (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(G__15513) : parse.call(null,G__15513));
})();if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$136,status,cljs.core.constant$keyword$138,xhrio.getStatusText(),cljs.core.constant$keyword$137,response__$1], null)], null);
}
}catch (e15512){if((e15512 instanceof Object))
{var e = e15512;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{throw e15512;

}
}}
}catch (e15510){if((e15510 instanceof Object))
{var e = e15510;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$136,(0),cljs.core.constant$keyword$138,e.message,cljs.core.constant$keyword$137,null], null)], null);
} else
{throw e15510;

}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.core.params_to_str(params)));
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__15514,p__15515){var map__15520 = p__15514;var map__15520__$1 = ((cljs.core.seq_QMARK_(map__15520))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15520):map__15520);var format = map__15520__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15520__$1,cljs.core.constant$keyword$133);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15520__$1,cljs.core.constant$keyword$132);var map__15521 = p__15515;var map__15521__$1 = ((cljs.core.seq_QMARK_(map__15521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15521):map__15521);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15521__$1,cljs.core.constant$keyword$144);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15521__$1,cljs.core.constant$keyword$145);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__15522 = format;var map__15522__$1 = ((cljs.core.seq_QMARK_(map__15522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15522):map__15522);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15522__$1,cljs.core.constant$keyword$133);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15522__$1,cljs.core.constant$keyword$132);var body = (function (){var G__15523 = params;return (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(G__15523) : write__$1.call(null,G__15523));
})();var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__4275__auto__ = headers;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2], 0));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case(cljs.core.name(method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__15524){var map__15527 = p__15524;var map__15527__$1 = ((cljs.core.seq_QMARK_(map__15527))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15527):map__15527);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15527__$1,cljs.core.constant$keyword$146);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15527__$1,cljs.core.constant$keyword$147);if(cljs.core.truth_(handler))
{return ((function (map__15527,map__15527__$1,get_default_format,handler){
return (function (xhrio){var G__15528 = ajax.core.interpret_response(format,xhrio,(function (){var or__4275__auto__ = get_default_format;if(cljs.core.truth_(or__4275__auto__))
{return or__4275__auto__;
} else
{return ajax.core.no_format;
}
})());return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__15528) : handler.call(null,G__15528));
});
;})(map__15527,map__15527__$1,get_default_format,handler))
} else
{throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__15529){var map__15533 = p__15529;var map__15533__$1 = ((cljs.core.seq_QMARK_(map__15533))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15533):map__15533);var opts = map__15533__$1;var manager = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$148);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$149);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$150);var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15533__$1,cljs.core.constant$keyword$151);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__15534 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(0),null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(1),null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15534,(2),null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(manager,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__15535__delegate = function (uri,method,args){var f = cljs.core.first(args);var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args):f);return ajax_request.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$151,uri,cljs.core.array_seq([cljs.core.constant$keyword$150,method], 0)));
};
var G__15535 = function (uri,method,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15535__delegate.call(this,uri,method,args);};
G__15535.cljs$lang$maxFixedArity = 2;
G__15535.cljs$lang$applyTo = (function (arglist__15536){
var uri = cljs.core.first(arglist__15536);
arglist__15536 = cljs.core.next(arglist__15536);
var method = cljs.core.first(arglist__15536);
var args = cljs.core.rest(arglist__15536);
return G__15535__delegate(uri,method,args);
});
G__15535.cljs$core$IFn$_invoke$arity$variadic = G__15535__delegate;
return G__15535;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.json_request_format(),ajax.core.json_response_format(format_params)], 0));
});
ajax.core.edn_format = (function edn_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),ajax.core.edn_response_format()], 0));
});
ajax.core.raw_format = (function raw_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),ajax.core.raw_response_format()], 0));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__15538 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__15538) {
case "url":
return ajax.core.url_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "json":
return ajax.core.json_request_format();

break;
default:
throw (new Error(("unrecognized request format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format))));

}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,format,cljs.core.constant$keyword$131,"custom"], null);
} else
{var G__15541 = (((format instanceof cljs.core.Keyword))?format.fqn:null);switch (G__15541) {
case "raw":
return ajax.core.raw_response_format();

break;
case "edn":
return ajax.core.edn_response_format();

break;
case "json":
return ajax.core.json_response_format(format_params);

break;
default:
return null;

}

}
}
});
ajax.core.transform_handler = (function transform_handler(p__15543){var map__15550 = p__15543;var map__15550__$1 = ((cljs.core.seq_QMARK_(map__15550))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15550):map__15550);var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15550__$1,cljs.core.constant$keyword$152);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15550__$1,cljs.core.constant$keyword$153);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15550__$1,cljs.core.constant$keyword$147);return ((function (map__15550,map__15550__$1,finally$,error_handler,handler){
return (function easy_handler(p__15551){var vec__15554 = p__15551;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(0),null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(1),null);var temp__4124__auto___15556 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4124__auto___15556))
{var h_15557 = temp__4124__auto___15556;var G__15555_15558 = result;(h_15557.cljs$core$IFn$_invoke$arity$1 ? h_15557.cljs$core$IFn$_invoke$arity$1(G__15555_15558) : h_15557.call(null,G__15555_15558));
} else
{}
if(cljs.core.fn_QMARK_(finally$))
{return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else
{return null;
}
});
;})(map__15550,map__15550__$1,finally$,error_handler,handler))
});
ajax.core.transform_format = (function transform_format(p__15559){var map__15561 = p__15559;var map__15561__$1 = ((cljs.core.seq_QMARK_(map__15561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15561):map__15561);var opts = map__15561__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15561__$1,cljs.core.constant$keyword$154);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15561__$1,cljs.core.constant$keyword$149);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),rf], 0));
} else
{if((format instanceof cljs.core.Keyword))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.keyword_request_format(format,opts),rf], 0));
} else
{return format;

}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$147,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$149,ajax.core.transform_format(opts),cljs.core.constant$keyword$146,ajax.core.get_default_format], 0));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__15562){var vec__15564 = p__15562;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15564,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"GET",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var GET = function (uri,var_args){
var p__15562 = null;if (arguments.length > 1) {
  p__15562 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__15562);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__15565){
var uri = cljs.core.first(arglist__15565);
var p__15562 = cljs.core.rest(arglist__15565);
return GET__delegate(uri,p__15562);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__15566){var vec__15568 = p__15566;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15568,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"HEAD",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var HEAD = function (uri,var_args){
var p__15566 = null;if (arguments.length > 1) {
  p__15566 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,p__15566);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__15569){
var uri = cljs.core.first(arglist__15569);
var p__15566 = cljs.core.rest(arglist__15569);
return HEAD__delegate(uri,p__15566);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__15570){var vec__15572 = p__15570;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15572,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"POST",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var POST = function (uri,var_args){
var p__15570 = null;if (arguments.length > 1) {
  p__15570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__15570);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__15573){
var uri = cljs.core.first(arglist__15573);
var p__15570 = cljs.core.rest(arglist__15573);
return POST__delegate(uri,p__15570);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__15574){var vec__15576 = p__15574;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15576,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"PUT",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var PUT = function (uri,var_args){
var p__15574 = null;if (arguments.length > 1) {
  p__15574 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__15574);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__15577){
var uri = cljs.core.first(arglist__15577);
var p__15574 = cljs.core.rest(arglist__15577);
return PUT__delegate(uri,p__15574);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__15578){var vec__15580 = p__15578;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15580,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"DELETE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var DELETE = function (uri,var_args){
var p__15578 = null;if (arguments.length > 1) {
  p__15578 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__15578);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__15581){
var uri = cljs.core.first(arglist__15581);
var p__15578 = cljs.core.rest(arglist__15581);
return DELETE__delegate(uri,p__15578);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__15582){var vec__15584 = p__15582;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15584,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"OPTIONS",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var OPTIONS = function (uri,var_args){
var p__15582 = null;if (arguments.length > 1) {
  p__15582 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,p__15582);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__15585){
var uri = cljs.core.first(arglist__15585);
var p__15582 = cljs.core.rest(arglist__15585);
return OPTIONS__delegate(uri,p__15582);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__15586){var vec__15588 = p__15586;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15588,(0),null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"TRACE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var TRACE = function (uri,var_args){
var p__15586 = null;if (arguments.length > 1) {
  p__15586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,p__15586);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__15589){
var uri = cljs.core.first(arglist__15589);
var p__15586 = cljs.core.rest(arglist__15589);
return TRACE__delegate(uri,p__15586);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
