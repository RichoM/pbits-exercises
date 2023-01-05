goog.provide('utils.bootstrap');
utils.bootstrap.find_container = (function utils$bootstrap$find_container(selector){
var or__5045__auto__ = document.querySelector(selector);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document.body;
}
});
utils.bootstrap.on_click = (function utils$bootstrap$on_click(element,callback){
var G__104740 = element;
G__104740.addEventListener("click",callback);

return G__104740;
});
utils.bootstrap.on_input = (function utils$bootstrap$on_input(element,callback){
var G__104741 = element;
G__104741.addEventListener("input",callback);

return G__104741;
});
utils.bootstrap.on_keypress = (function utils$bootstrap$on_keypress(element,keycode,callback){
var G__104742 = element;
G__104742.addEventListener("keypress",(function (evt){
var kc = (function (){var or__5045__auto__ = evt.keyCode;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return evt.which;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kc,keycode)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}));

return G__104742;
});
utils.bootstrap.replace_with_clone_BANG_ = (function utils$bootstrap$replace_with_clone_BANG_(element){
var clone = element.cloneNode(true);
var temp__5804__auto___104881 = element.parentNode;
if(cljs.core.truth_(temp__5804__auto___104881)){
var parent_104882 = temp__5804__auto___104881;
parent_104882.replaceChild(clone,element);
} else {
}

return clone;
});
if((typeof utils !== 'undefined') && (typeof utils.bootstrap !== 'undefined') && (typeof utils.bootstrap.current_modal !== 'undefined')){
} else {
utils.bootstrap.current_modal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
utils.bootstrap.make_modal = (function utils$bootstrap$make_modal(var_args){
var args__5775__auto__ = [];
var len__5769__auto___104883 = arguments.length;
var i__5770__auto___104884 = (0);
while(true){
if((i__5770__auto___104884 < len__5769__auto___104883)){
args__5775__auto__.push((arguments[i__5770__auto___104884]));

var G__104885 = (i__5770__auto___104884 + (1));
i__5770__auto___104884 = G__104885;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic = (function (p__104744){
var map__104745 = p__104744;
var map__104745__$1 = cljs.core.__destructure_map(map__104745);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104745__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104745__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104745__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabindex","tabindex",338877510),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog.modal-dialog-centered.modal-lg.modal-dialog-scrollable","div.modal-dialog.modal-dialog-centered.modal-lg.modal-dialog-scrollable",393759248),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"document"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),(cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),header], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),body], null):null),(cljs.core.truth_(footer)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),footer], null):null)], null)], null)], null)], 0));
}));

(utils.bootstrap.make_modal.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.bootstrap.make_modal.cljs$lang$applyTo = (function (seq104743){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq104743));
}));

utils.bootstrap.close_modal_btn = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-close","button.btn-close",-594363279),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"modal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null)], null);
utils.bootstrap.accept_modal_btn = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-lg","button.btn.btn-primary.btn-lg",613853517),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"modal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Accept"], null),"Aceptar"], null);
utils.bootstrap.cancel_modal_btn = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary.btn-lg","button.btn.btn-secondary.btn-lg",-1973099630),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"modal",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Cancel"], null),"Cancelar"], null);
utils.bootstrap.hide_modals = (function utils$bootstrap$hide_modals(){
var temp__5804__auto__ = cljs.core.deref(utils.bootstrap.current_modal);
if(cljs.core.truth_(temp__5804__auto__)){
var map__104746 = temp__5804__auto__;
var map__104746__$1 = cljs.core.__destructure_map(map__104746);
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104746__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104746__$1,new cljs.core.Keyword(null,"ready","ready",1086465795));
cljs.core.reset_BANG_(utils.bootstrap.current_modal,null);

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(ready,(function (){
return modal.hide();
}),true);
} else {
return null;
}
});
utils.bootstrap.hide_modal = (function utils$bootstrap$hide_modal(modal){
var temp__5804__auto__ = bootstrap.Modal.getInstance(modal);
if(cljs.core.truth_(temp__5804__auto__)){
var bs_modal = temp__5804__auto__;
return bs_modal.hide();
} else {
return null;
}
});
utils.bootstrap.on_modal_keypress_enter = (function utils$bootstrap$on_modal_keypress_enter(modal,callback){
return utils.bootstrap.on_keypress(modal,(13),(function (){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(modal) : callback.call(null,modal));

return utils.bootstrap.hide_modal(modal);
}));
});
utils.bootstrap.on_modal_shown = (function utils$bootstrap$on_modal_shown(modal,callback){
var G__104747 = modal;
G__104747.addEventListener("shown.bs.modal",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,modal));

return G__104747;
});
utils.bootstrap.on_modal_hidden = (function utils$bootstrap$on_modal_hidden(modal,callback){
var G__104748 = modal;
G__104748.addEventListener("hidden.bs.modal",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,modal));

return G__104748;
});
utils.bootstrap.show_modal = (function utils$bootstrap$show_modal(var_args){
var G__104750 = arguments.length;
switch (G__104750) {
case 1:
return utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1 = (function (modal){
return utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(modal,cljs.core.PersistentArrayMap.EMPTY);
}));

(utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2 = (function (modal,options){
utils.bootstrap.hide_modals();

var result = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var container = utils.bootstrap.find_container("#modal-dialogs");
var html_modal = modal;
var bs_modal = (new bootstrap.Modal(html_modal,cljs.core.clj__GT_js(options)));
var ready_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var current = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal","modal",-1031880850),bs_modal,new cljs.core.Keyword(null,"ready","ready",1086465795),ready_chan], null);
cljs.core.reset_BANG_(utils.bootstrap.current_modal,current);

container.appendChild(html_modal);

bs_modal.show();

var G__104751_104891 = html_modal;
utils.bootstrap.on_modal_shown(G__104751_104891,(function (){
return cljs.core.async.close_BANG_(ready_chan);
}));

utils.bootstrap.on_modal_hidden(G__104751_104891,(function (){
html_modal.remove();

cljs.core.compare_and_set_BANG_(utils.bootstrap.current_modal,current,null);

return cljs.core.async.close_BANG_(result);
}));


return result;
}));

(utils.bootstrap.show_modal.cljs$lang$maxFixedArity = 2);

utils.bootstrap.alert = (function utils$bootstrap$alert(var_args){
var args__5775__auto__ = [];
var len__5769__auto___104892 = arguments.length;
var i__5770__auto___104893 = (0);
while(true){
if((i__5770__auto___104893 < len__5769__auto___104892)){
args__5775__auto__.push((arguments[i__5770__auto___104893]));

var G__104894 = (i__5770__auto___104893 + (1));
i__5770__auto___104893 = G__104894;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic = (function (title,message){
return utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(utils.bootstrap.on_modal_keypress_enter(utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-exclamation-circle","i.fas.fa-exclamation-circle",645323953)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ms-2","span.ms-2",-2096588323),title], null)], null),(new cljs.core.List(null,utils.bootstrap.close_modal_btn,null,(1),null)),(2),null)),new cljs.core.Keyword(null,"body","body",-2049205669),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),message], null):null),new cljs.core.Keyword(null,"footer","footer",1606445390),utils.bootstrap.accept_modal_btn], 0)),utils.bootstrap.hide_modal));
}));

(utils.bootstrap.alert.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.bootstrap.alert.cljs$lang$applyTo = (function (seq104752){
var G__104753 = cljs.core.first(seq104752);
var seq104752__$1 = cljs.core.next(seq104752);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104753,seq104752__$1);
}));

utils.bootstrap.confirm = (function utils$bootstrap$confirm(var_args){
var args__5775__auto__ = [];
var len__5769__auto___104897 = arguments.length;
var i__5770__auto___104898 = (0);
while(true){
if((i__5770__auto___104898 < len__5769__auto___104897)){
args__5775__auto__.push((arguments[i__5770__auto___104898]));

var G__104899 = (i__5770__auto___104898 + (1));
i__5770__auto___104898 = G__104899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(utils.bootstrap.confirm.cljs$core$IFn$_invoke$arity$variadic = (function (title,message){
var c__11263__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11264__auto__ = (function (){var switch__11178__auto__ = (function (state_104791){
var state_val_104792 = (state_104791[(1)]);
if((state_val_104792 === (1))){
var inst_104759 = (state_104791[(7)]);
var inst_104756 = (state_104791[(8)]);
var inst_104756__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var inst_104757 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([utils.bootstrap.accept_modal_btn], 0));
var inst_104758 = (function (){var result = inst_104756__$1;
return (function (){
return cljs.core.reset_BANG_(result,true);
});
})();
var inst_104759__$1 = utils.bootstrap.on_click(inst_104757,inst_104758);
var inst_104760 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([utils.bootstrap.cancel_modal_btn], 0));
var inst_104761 = (function (){var result = inst_104756__$1;
var yes_btn = inst_104759__$1;
return (function (){
return cljs.core.reset_BANG_(result,false);
});
})();
var inst_104762 = utils.bootstrap.on_click(inst_104760,inst_104761);
var inst_104763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104764 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104765 = [new cljs.core.Keyword(null,"i.fas.fa-question-circle","i.fas.fa-question-circle",-954596902)];
var inst_104766 = (new cljs.core.PersistentVector(null,1,(5),inst_104764,inst_104765,null));
var inst_104767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104768 = [new cljs.core.Keyword(null,"span.ms-2","span.ms-2",-2096588323),title];
var inst_104769 = (new cljs.core.PersistentVector(null,2,(5),inst_104767,inst_104768,null));
var inst_104770 = [new cljs.core.Keyword(null,"h2","h2",-372662728),inst_104766,inst_104769];
var inst_104771 = (new cljs.core.PersistentVector(null,3,(5),inst_104763,inst_104770,null));
var inst_104772 = (new cljs.core.List(null,utils.bootstrap.close_modal_btn,null,(1),null));
var inst_104773 = (new cljs.core.List(null,inst_104771,inst_104772,(2),null));
var state_104791__$1 = (function (){var statearr_104793 = state_104791;
(statearr_104793[(9)] = inst_104762);

(statearr_104793[(7)] = inst_104759__$1);

(statearr_104793[(8)] = inst_104756__$1);

(statearr_104793[(10)] = inst_104773);

return statearr_104793;
})();
if(cljs.core.truth_(message)){
var statearr_104794_104903 = state_104791__$1;
(statearr_104794_104903[(1)] = (3));

} else {
var statearr_104795_104904 = state_104791__$1;
(statearr_104795_104904[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104792 === (2))){
var inst_104756 = (state_104791[(8)]);
var inst_104788 = (state_104791[(2)]);
var inst_104789 = cljs.core.deref(inst_104756);
var state_104791__$1 = (function (){var statearr_104796 = state_104791;
(statearr_104796[(11)] = inst_104788);

return statearr_104796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_104791__$1,inst_104789);
} else {
if((state_val_104792 === (3))){
var inst_104775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104776 = [new cljs.core.Keyword(null,"h3","h3",2067611163),message];
var inst_104777 = (new cljs.core.PersistentVector(null,2,(5),inst_104775,inst_104776,null));
var state_104791__$1 = state_104791;
var statearr_104797_104908 = state_104791__$1;
(statearr_104797_104908[(2)] = inst_104777);

(statearr_104797_104908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104792 === (4))){
var state_104791__$1 = state_104791;
var statearr_104798_104909 = state_104791__$1;
(statearr_104798_104909[(2)] = null);

(statearr_104798_104909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104792 === (5))){
var inst_104762 = (state_104791[(9)]);
var inst_104759 = (state_104791[(7)]);
var inst_104756 = (state_104791[(8)]);
var inst_104773 = (state_104791[(10)]);
var inst_104780 = (state_104791[(2)]);
var inst_104781 = (new cljs.core.List(null,inst_104762,null,(1),null));
var inst_104782 = (new cljs.core.List(null,inst_104759,inst_104781,(2),null));
var inst_104783 = utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_104773,new cljs.core.Keyword(null,"body","body",-2049205669),inst_104780,new cljs.core.Keyword(null,"footer","footer",1606445390),inst_104782], 0));
var inst_104784 = (function (){var result = inst_104756;
var yes_btn = inst_104759;
var no_btn = inst_104762;
return (function (modal){
cljs.core.reset_BANG_(result,true);

return utils.bootstrap.hide_modal(modal);
});
})();
var inst_104785 = utils.bootstrap.on_modal_keypress_enter(inst_104783,inst_104784);
var inst_104786 = utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_104785);
var state_104791__$1 = state_104791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_104791__$1,(2),inst_104786);
} else {
return null;
}
}
}
}
}
});
return (function() {
var utils$bootstrap$state_machine__11179__auto__ = null;
var utils$bootstrap$state_machine__11179__auto____0 = (function (){
var statearr_104799 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104799[(0)] = utils$bootstrap$state_machine__11179__auto__);

(statearr_104799[(1)] = (1));

return statearr_104799;
});
var utils$bootstrap$state_machine__11179__auto____1 = (function (state_104791){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_104791);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e104800){var ex__11182__auto__ = e104800;
var statearr_104801_104910 = state_104791;
(statearr_104801_104910[(2)] = ex__11182__auto__);


if(cljs.core.seq((state_104791[(4)]))){
var statearr_104802_104911 = state_104791;
(statearr_104802_104911[(1)] = cljs.core.first((state_104791[(4)])));

} else {
throw ex__11182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104912 = state_104791;
state_104791 = G__104912;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
utils$bootstrap$state_machine__11179__auto__ = function(state_104791){
switch(arguments.length){
case 0:
return utils$bootstrap$state_machine__11179__auto____0.call(this);
case 1:
return utils$bootstrap$state_machine__11179__auto____1.call(this,state_104791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$bootstrap$state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = utils$bootstrap$state_machine__11179__auto____0;
utils$bootstrap$state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = utils$bootstrap$state_machine__11179__auto____1;
return utils$bootstrap$state_machine__11179__auto__;
})()
})();
var state__11265__auto__ = (function (){var statearr_104803 = f__11264__auto__();
(statearr_104803[(6)] = c__11263__auto__);

return statearr_104803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11265__auto__);
}));

return c__11263__auto__;
}));

(utils.bootstrap.confirm.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.bootstrap.confirm.cljs$lang$applyTo = (function (seq104754){
var G__104755 = cljs.core.first(seq104754);
var seq104754__$1 = cljs.core.next(seq104754);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104755,seq104754__$1);
}));

utils.bootstrap.prompt = (function utils$bootstrap$prompt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___104917 = arguments.length;
var i__5770__auto___104918 = (0);
while(true){
if((i__5770__auto___104918 < len__5769__auto___104917)){
args__5775__auto__.push((arguments[i__5770__auto___104918]));

var G__104921 = (i__5770__auto___104918 + (1));
i__5770__auto___104918 = G__104921;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return utils.bootstrap.prompt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(utils.bootstrap.prompt.cljs$core$IFn$_invoke$arity$variadic = (function (title,message,p__104807){
var vec__104808 = p__104807;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104808,(0),null);
var c__11263__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11264__auto__ = (function (){var switch__11178__auto__ = (function (state_104858){
var state_val_104859 = (state_104858[(1)]);
if((state_val_104859 === (1))){
var inst_104811 = (state_104858[(7)]);
var inst_104811__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var inst_104812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104813 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217)];
var inst_104814 = ["text",default$];
var inst_104815 = cljs.core.PersistentHashMap.fromArrays(inst_104813,inst_104814);
var inst_104816 = [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),inst_104815];
var inst_104817 = (new cljs.core.PersistentVector(null,2,(5),inst_104812,inst_104816,null));
var inst_104818 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_104817], 0));
var inst_104819 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([utils.bootstrap.accept_modal_btn], 0));
var inst_104820 = (function (){var result = inst_104811__$1;
var input = inst_104818;
return (function (){
return cljs.core.reset_BANG_(result,input.value);
});
})();
var inst_104821 = utils.bootstrap.on_click(inst_104819,inst_104820);
var inst_104822 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([utils.bootstrap.cancel_modal_btn], 0));
var inst_104823 = (function (){var result = inst_104811__$1;
var input = inst_104818;
var yes_btn = inst_104821;
return (function (){
return cljs.core.reset_BANG_(result,null);
});
})();
var inst_104824 = utils.bootstrap.on_click(inst_104822,inst_104823);
var inst_104825 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104827 = [new cljs.core.Keyword(null,"i.fas.fa-question-circle","i.fas.fa-question-circle",-954596902)];
var inst_104828 = (new cljs.core.PersistentVector(null,1,(5),inst_104826,inst_104827,null));
var inst_104829 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104830 = [new cljs.core.Keyword(null,"span.ms-2","span.ms-2",-2096588323),title];
var inst_104831 = (new cljs.core.PersistentVector(null,2,(5),inst_104829,inst_104830,null));
var inst_104832 = [new cljs.core.Keyword(null,"h2","h2",-372662728),inst_104828,inst_104831];
var inst_104833 = (new cljs.core.PersistentVector(null,3,(5),inst_104825,inst_104832,null));
var inst_104834 = (new cljs.core.List(null,utils.bootstrap.close_modal_btn,null,(1),null));
var inst_104835 = (new cljs.core.List(null,inst_104833,inst_104834,(2),null));
var inst_104836 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104839 = [new cljs.core.Keyword(null,"h3","h3",2067611163),message];
var inst_104840 = (new cljs.core.PersistentVector(null,2,(5),inst_104838,inst_104839,null));
var inst_104841 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_104840];
var inst_104842 = (new cljs.core.PersistentVector(null,2,(5),inst_104837,inst_104841,null));
var inst_104843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_104844 = [new cljs.core.Keyword(null,"div.row","div.row",133678515),inst_104818];
var inst_104845 = (new cljs.core.PersistentVector(null,2,(5),inst_104843,inst_104844,null));
var inst_104846 = [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),inst_104842,inst_104845];
var inst_104847 = (new cljs.core.PersistentVector(null,3,(5),inst_104836,inst_104846,null));
var inst_104848 = (new cljs.core.List(null,inst_104824,null,(1),null));
var inst_104849 = (new cljs.core.List(null,inst_104821,inst_104848,(2),null));
var inst_104850 = utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),inst_104835,new cljs.core.Keyword(null,"body","body",-2049205669),inst_104847,new cljs.core.Keyword(null,"footer","footer",1606445390),inst_104849], 0));
var inst_104851 = (function (){var result = inst_104811__$1;
var input = inst_104818;
var yes_btn = inst_104821;
var no_btn = inst_104824;
return (function (modal){
cljs.core.reset_BANG_(result,input.value);

return utils.bootstrap.hide_modal(modal);
});
})();
var inst_104852 = utils.bootstrap.on_modal_keypress_enter(inst_104850,inst_104851);
var inst_104853 = utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$1(inst_104852);
var state_104858__$1 = (function (){var statearr_104860 = state_104858;
(statearr_104860[(7)] = inst_104811__$1);

return statearr_104860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_104858__$1,(2),inst_104853);
} else {
if((state_val_104859 === (2))){
var inst_104811 = (state_104858[(7)]);
var inst_104855 = (state_104858[(2)]);
var inst_104856 = cljs.core.deref(inst_104811);
var state_104858__$1 = (function (){var statearr_104861 = state_104858;
(statearr_104861[(8)] = inst_104855);

return statearr_104861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_104858__$1,inst_104856);
} else {
return null;
}
}
});
return (function() {
var utils$bootstrap$state_machine__11179__auto__ = null;
var utils$bootstrap$state_machine__11179__auto____0 = (function (){
var statearr_104862 = [null,null,null,null,null,null,null,null,null];
(statearr_104862[(0)] = utils$bootstrap$state_machine__11179__auto__);

(statearr_104862[(1)] = (1));

return statearr_104862;
});
var utils$bootstrap$state_machine__11179__auto____1 = (function (state_104858){
while(true){
var ret_value__11180__auto__ = (function (){try{while(true){
var result__11181__auto__ = switch__11178__auto__(state_104858);
if(cljs.core.keyword_identical_QMARK_(result__11181__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11181__auto__;
}
break;
}
}catch (e104863){var ex__11182__auto__ = e104863;
var statearr_104864_104928 = state_104858;
(statearr_104864_104928[(2)] = ex__11182__auto__);


if(cljs.core.seq((state_104858[(4)]))){
var statearr_104865_104929 = state_104858;
(statearr_104865_104929[(1)] = cljs.core.first((state_104858[(4)])));

} else {
throw ex__11182__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104930 = state_104858;
state_104858 = G__104930;
continue;
} else {
return ret_value__11180__auto__;
}
break;
}
});
utils$bootstrap$state_machine__11179__auto__ = function(state_104858){
switch(arguments.length){
case 0:
return utils$bootstrap$state_machine__11179__auto____0.call(this);
case 1:
return utils$bootstrap$state_machine__11179__auto____1.call(this,state_104858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$bootstrap$state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$0 = utils$bootstrap$state_machine__11179__auto____0;
utils$bootstrap$state_machine__11179__auto__.cljs$core$IFn$_invoke$arity$1 = utils$bootstrap$state_machine__11179__auto____1;
return utils$bootstrap$state_machine__11179__auto__;
})()
})();
var state__11265__auto__ = (function (){var statearr_104866 = f__11264__auto__();
(statearr_104866[(6)] = c__11263__auto__);

return statearr_104866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11265__auto__);
}));

return c__11263__auto__;
}));

(utils.bootstrap.prompt.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(utils.bootstrap.prompt.cljs$lang$applyTo = (function (seq104804){
var G__104805 = cljs.core.first(seq104804);
var seq104804__$1 = cljs.core.next(seq104804);
var G__104806 = cljs.core.first(seq104804__$1);
var seq104804__$2 = cljs.core.next(seq104804__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104805,G__104806,seq104804__$2);
}));

utils.bootstrap.make_toast = (function utils$bootstrap$make_toast(var_args){
var args__5775__auto__ = [];
var len__5769__auto___104935 = arguments.length;
var i__5770__auto___104938 = (0);
while(true){
if((i__5770__auto___104938 < len__5769__auto___104935)){
args__5775__auto__.push((arguments[i__5770__auto___104938]));

var G__104939 = (i__5770__auto___104938 + (1));
i__5770__auto___104938 = G__104939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return utils.bootstrap.make_toast.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(utils.bootstrap.make_toast.cljs$core$IFn$_invoke$arity$variadic = (function (p__104868){
var map__104869 = p__104868;
var map__104869__$1 = cljs.core.__destructure_map(map__104869);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104869__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104869__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toast","div.toast",-70813866),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"alert",new cljs.core.Keyword(null,"aria-live","aria-live",-467182502),"assertive",new cljs.core.Keyword(null,"aria-atomic","aria-atomic",1666973952),"true"], null),(cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toast-header","div.toast-header",-2066642663),header], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toast-body","div.toast-body",-326997608),body], null):null)], null)], 0));
}));

(utils.bootstrap.make_toast.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.bootstrap.make_toast.cljs$lang$applyTo = (function (seq104867){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq104867));
}));

utils.bootstrap.close_toast_btn = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-close","button.btn-close",-594363279),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-dismiss","data-bs-dismiss",-572315973),"toast",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close"], null)], null);
utils.bootstrap.on_toast_shown = (function utils$bootstrap$on_toast_shown(toast,callback){
var G__104870 = toast;
G__104870.addEventListener("shown.bs.toast",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,toast));

return G__104870;
});
utils.bootstrap.on_toast_hidden = (function utils$bootstrap$on_toast_hidden(toast,callback){
var G__104871 = toast;
G__104871.addEventListener("hidden.bs.toast",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,toast));

return G__104871;
});
utils.bootstrap.show_toast = (function utils$bootstrap$show_toast(var_args){
var G__104873 = arguments.length;
switch (G__104873) {
case 1:
return utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$1 = (function (toast){
return utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$2(toast,cljs.core.PersistentArrayMap.EMPTY);
}));

(utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$2 = (function (toast,options){
var result = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var container = utils.bootstrap.find_container("#toast-container");
var html_toast = toast;
var bs_toast = (new bootstrap.Toast(toast,cljs.core.clj__GT_js(options)));
container.appendChild(html_toast);

bs_toast.show();

var G__104874_104941 = html_toast;
utils.bootstrap.on_toast_shown(G__104874_104941,(function (){
return cljs.core.async.close_BANG_(result);
}));

utils.bootstrap.on_toast_hidden(G__104874_104941,(function (){
return html_toast.remove();
}));


return result;
}));

(utils.bootstrap.show_toast.cljs$lang$maxFixedArity = 2);

utils.bootstrap.show_toast_msg = (function utils$bootstrap$show_toast_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___104943 = arguments.length;
var i__5770__auto___104946 = (0);
while(true){
if((i__5770__auto___104946 < len__5769__auto___104943)){
args__5775__auto__.push((arguments[i__5770__auto___104946]));

var G__104948 = (i__5770__auto___104946 + (1));
i__5770__auto___104946 = G__104948;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return utils.bootstrap.show_toast_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(utils.bootstrap.show_toast_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,p__104877){
var vec__104878 = p__104877;
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104878,(0),null);
return utils.bootstrap.show_toast.cljs$core$IFn$_invoke$arity$1(utils.bootstrap.make_toast.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"header","header",119441134),(new cljs.core.List(null,(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.me-3","span.me-3",-1781943083),icon], null):null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.me-auto","strong.me-auto",1754009893),msg], null),(new cljs.core.List(null,utils.bootstrap.close_toast_btn,null,(1),null)),(2),null)),(3),null))], 0)));
}));

(utils.bootstrap.show_toast_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.bootstrap.show_toast_msg.cljs$lang$applyTo = (function (seq104875){
var G__104876 = cljs.core.first(seq104875);
var seq104875__$1 = cljs.core.next(seq104875);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104876,seq104875__$1);
}));


//# sourceMappingURL=utils.bootstrap.js.map
