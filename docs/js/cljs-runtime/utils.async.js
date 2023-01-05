goog.provide('utils.async');
utils.async.chan__GT_promise = (function utils$async$chan__GT_promise(ch){

return (new Promise((function (res,rej){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(ch,(function (p1__80023_SHARP_){
if((p1__80023_SHARP_ instanceof Error)){
return (rej.cljs$core$IFn$_invoke$arity$1 ? rej.cljs$core$IFn$_invoke$arity$1(p1__80023_SHARP_) : rej.call(null,p1__80023_SHARP_));
} else {
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(p1__80023_SHARP_) : res.call(null,p1__80023_SHARP_));
}
}));
})));
});
/**
 * Take from channel ch while data is available (without blocking/parking) until
 * the timeout is closed or no more data is immediately available.
 * Results are accumulated using the reducer function f and the initial value init.
 */
utils.async.reduce_until_timeout_BANG_ = (function utils$async$reduce_until_timeout_BANG_(f,init,ch,t){
var c__11263__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11264__auto__ = (function (){var switch__11178__auto__ = (function (state_80053){
var state_val_80054 = (state_80053[(1)]);
if((state_val_80054 === (1))){
var inst_80024 = init;
var inst_80025 = inst_80024;
var state_80053__$1 = (function (){var statearr_80055 = state_80053;
(statearr_80055[(7)] = inst_80025);

return statearr_80055;
})();
var statearr_80056_80077 = state_80053__$1;
(statearr_80056_80077[(2)] = null);

(statearr_80056_80077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80054 === (2))){
var inst_80025 = (state_80053[(7)]);
var inst_80030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_80035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_80036 = (function (){var ret = inst_80025;
var c__11263__auto____$1 = inst_80035;
return (function (){
var f__11264__auto__ = (function (){var switch__11178__auto__ = (function (state_80033){
var state_val_80034 = (state_80033[(1)]);
if((state_val_80034 === (1))){
var inst_80031 = cljs.core.async.poll_BANG_(ch);
var state_80033__$1 = state_80033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80033__$1,inst_80031);
} else {
return null;
}
});
return (function() {
var utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__ = null;
var utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____0 = (function (){
var statearr_80057 = [null,null,null,null,null,null,null];
(statearr_80057[(0)] = utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__);

(statearr_80057[(1)] = (1));

return statearr_80057;
});
var utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____1 = (function (state_80033){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_80033);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e80058){var ex__11182__auto__ = e80058;
var statearr_80059_80078 = state_80033;
(statearr_80059_80078[(2)] = ex__11182__auto__);


if(cljs.core.seq((state_80033[(4)]))){
var statearr_80060_80079 = state_80033;
(statearr_80060_80079[(1)] = cljs.core.first((state_80033[(4)])));

} else {
throw ex__11182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80080 = state_80033;
state_80033 = G__80080;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__ = function(state_80033){
switch(arguments.length){
case 0:
return utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____0.call(this);
case 1:
return utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____1.call(this,state_80033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____0;
utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____1;
return utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__;
})()
})();
var state__11265__auto__ = (function (){var statearr_80061 = f__11264__auto__();
(statearr_80061[(6)] = c__11263__auto____$1);

return statearr_80061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11265__auto__);
});
})();
var inst_80037 = cljs.core.async.impl.dispatch.run(inst_80036);
var inst_80038 = [t,inst_80035];
var inst_80039 = (new cljs.core.PersistentVector(null,2,(5),inst_80030,inst_80038,null));
var state_80053__$1 = (function (){var statearr_80062 = state_80053;
(statearr_80062[(8)] = inst_80037);

return statearr_80062;
})();
return cljs.core.async.ioc_alts_BANG_(state_80053__$1,(4),inst_80039);
} else {
if((state_val_80054 === (3))){
var inst_80051 = (state_80053[(2)]);
var state_80053__$1 = state_80053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80053__$1,inst_80051);
} else {
if((state_val_80054 === (4))){
var inst_80042 = (state_80053[(9)]);
var inst_80041 = (state_80053[(2)]);
var inst_80042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80041,(0),null);
var inst_80043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_80041,(1),null);
var state_80053__$1 = (function (){var statearr_80063 = state_80053;
(statearr_80063[(9)] = inst_80042__$1);

(statearr_80063[(10)] = inst_80043);

return statearr_80063;
})();
if(cljs.core.truth_(inst_80042__$1)){
var statearr_80064_80081 = state_80053__$1;
(statearr_80064_80081[(1)] = (5));

} else {
var statearr_80065_80082 = state_80053__$1;
(statearr_80065_80082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80054 === (5))){
var inst_80042 = (state_80053[(9)]);
var inst_80025 = (state_80053[(7)]);
var inst_80045 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_80025,inst_80042) : f.call(null,inst_80025,inst_80042));
var inst_80025__$1 = inst_80045;
var state_80053__$1 = (function (){var statearr_80066 = state_80053;
(statearr_80066[(7)] = inst_80025__$1);

return statearr_80066;
})();
var statearr_80067_80083 = state_80053__$1;
(statearr_80067_80083[(2)] = null);

(statearr_80067_80083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80054 === (6))){
var inst_80025 = (state_80053[(7)]);
var state_80053__$1 = state_80053;
var statearr_80068_80084 = state_80053__$1;
(statearr_80068_80084[(2)] = inst_80025);

(statearr_80068_80084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80054 === (7))){
var inst_80049 = (state_80053[(2)]);
var state_80053__$1 = state_80053;
var statearr_80069_80085 = state_80053__$1;
(statearr_80069_80085[(2)] = inst_80049);

(statearr_80069_80085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__ = null;
var utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____0 = (function (){
var statearr_80070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80070[(0)] = utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__);

(statearr_80070[(1)] = (1));

return statearr_80070;
});
var utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____1 = (function (state_80053){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_80053);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e80071){var ex__11182__auto__ = e80071;
var statearr_80072_80086 = state_80053;
(statearr_80072_80086[(2)] = ex__11182__auto__);


if(cljs.core.seq((state_80053[(4)]))){
var statearr_80073_80087 = state_80053;
(statearr_80073_80087[(1)] = cljs.core.first((state_80053[(4)])));

} else {
throw ex__11182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80088 = state_80053;
state_80053 = G__80088;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__ = function(state_80053){
switch(arguments.length){
case 0:
return utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____0.call(this);
case 1:
return utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____1.call(this,state_80053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____0;
utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto____1;
return utils$async$reduce_until_timeout_BANG__$_state_machine__11179__auto__;
})()
})();
var state__11265__auto__ = (function (){var statearr_80074 = f__11264__auto__();
(statearr_80074[(6)] = c__11263__auto__);

return statearr_80074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11265__auto__);
}));

return c__11263__auto__;
});
utils.async.throw_err = (function utils$async$throw_err(e){
if((e instanceof Error)){
throw e;
} else {
}

return e;
});

//# sourceMappingURL=utils.async.js.map
