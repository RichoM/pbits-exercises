goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18806 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18806(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18807 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18807(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17545 = coll;
var G__17546 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17545,G__17546) : shadow.dom.lazy_native_coll_seq.call(null,G__17545,G__17546));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17574 = arguments.length;
switch (G__17574) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17591 = arguments.length;
switch (G__17591) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17602 = arguments.length;
switch (G__17602) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17628 = arguments.length;
switch (G__17628) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17661 = arguments.length;
switch (G__17661) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17672 = arguments.length;
switch (G__17672) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17711){if((e17711 instanceof Object)){
var e = e17711;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17711;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17716 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17717 = null;
var count__17719 = (0);
var i__17720 = (0);
while(true){
if((i__17720 < count__17719)){
var el = chunk__17717.cljs$core$IIndexed$_nth$arity$2(null,i__17720);
var handler_18816__$1 = ((function (seq__17716,chunk__17717,count__17719,i__17720,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17716,chunk__17717,count__17719,i__17720,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18816__$1);


var G__18817 = seq__17716;
var G__18818 = chunk__17717;
var G__18819 = count__17719;
var G__18820 = (i__17720 + (1));
seq__17716 = G__18817;
chunk__17717 = G__18818;
count__17719 = G__18819;
i__17720 = G__18820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17716);
if(temp__5804__auto__){
var seq__17716__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17716__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17716__$1);
var G__18821 = cljs.core.chunk_rest(seq__17716__$1);
var G__18822 = c__5568__auto__;
var G__18823 = cljs.core.count(c__5568__auto__);
var G__18824 = (0);
seq__17716 = G__18821;
chunk__17717 = G__18822;
count__17719 = G__18823;
i__17720 = G__18824;
continue;
} else {
var el = cljs.core.first(seq__17716__$1);
var handler_18825__$1 = ((function (seq__17716,chunk__17717,count__17719,i__17720,el,seq__17716__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17716,chunk__17717,count__17719,i__17720,el,seq__17716__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18825__$1);


var G__18826 = cljs.core.next(seq__17716__$1);
var G__18827 = null;
var G__18828 = (0);
var G__18829 = (0);
seq__17716 = G__18826;
chunk__17717 = G__18827;
count__17719 = G__18828;
i__17720 = G__18829;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17742 = arguments.length;
switch (G__17742) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17749 = cljs.core.seq(events);
var chunk__17750 = null;
var count__17751 = (0);
var i__17752 = (0);
while(true){
if((i__17752 < count__17751)){
var vec__17780 = chunk__17750.cljs$core$IIndexed$_nth$arity$2(null,i__17752);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17780,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18831 = seq__17749;
var G__18832 = chunk__17750;
var G__18833 = count__17751;
var G__18834 = (i__17752 + (1));
seq__17749 = G__18831;
chunk__17750 = G__18832;
count__17751 = G__18833;
i__17752 = G__18834;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17749);
if(temp__5804__auto__){
var seq__17749__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17749__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17749__$1);
var G__18835 = cljs.core.chunk_rest(seq__17749__$1);
var G__18836 = c__5568__auto__;
var G__18837 = cljs.core.count(c__5568__auto__);
var G__18838 = (0);
seq__17749 = G__18835;
chunk__17750 = G__18836;
count__17751 = G__18837;
i__17752 = G__18838;
continue;
} else {
var vec__17788 = cljs.core.first(seq__17749__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17788,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17788,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18839 = cljs.core.next(seq__17749__$1);
var G__18840 = null;
var G__18841 = (0);
var G__18842 = (0);
seq__17749 = G__18839;
chunk__17750 = G__18840;
count__17751 = G__18841;
i__17752 = G__18842;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17796 = cljs.core.seq(styles);
var chunk__17797 = null;
var count__17798 = (0);
var i__17799 = (0);
while(true){
if((i__17799 < count__17798)){
var vec__17815 = chunk__17797.cljs$core$IIndexed$_nth$arity$2(null,i__17799);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17815,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18843 = seq__17796;
var G__18844 = chunk__17797;
var G__18845 = count__17798;
var G__18846 = (i__17799 + (1));
seq__17796 = G__18843;
chunk__17797 = G__18844;
count__17798 = G__18845;
i__17799 = G__18846;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17796);
if(temp__5804__auto__){
var seq__17796__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17796__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17796__$1);
var G__18847 = cljs.core.chunk_rest(seq__17796__$1);
var G__18848 = c__5568__auto__;
var G__18849 = cljs.core.count(c__5568__auto__);
var G__18850 = (0);
seq__17796 = G__18847;
chunk__17797 = G__18848;
count__17798 = G__18849;
i__17799 = G__18850;
continue;
} else {
var vec__17819 = cljs.core.first(seq__17796__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17819,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17819,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18851 = cljs.core.next(seq__17796__$1);
var G__18852 = null;
var G__18853 = (0);
var G__18854 = (0);
seq__17796 = G__18851;
chunk__17797 = G__18852;
count__17798 = G__18853;
i__17799 = G__18854;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17826_18855 = key;
var G__17826_18856__$1 = (((G__17826_18855 instanceof cljs.core.Keyword))?G__17826_18855.fqn:null);
switch (G__17826_18856__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18858 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18858,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18858,"aria-");
}
})())){
el.setAttribute(ks_18858,value);
} else {
(el[ks_18858] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17864){
var map__17865 = p__17864;
var map__17865__$1 = cljs.core.__destructure_map(map__17865);
var props = map__17865__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17865__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17866 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17866,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17866,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17866,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17869 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17869,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17869;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17872 = arguments.length;
switch (G__17872) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17883){
var vec__17885 = p__17883;
var seq__17886 = cljs.core.seq(vec__17885);
var first__17887 = cljs.core.first(seq__17886);
var seq__17886__$1 = cljs.core.next(seq__17886);
var nn = first__17887;
var first__17887__$1 = cljs.core.first(seq__17886__$1);
var seq__17886__$2 = cljs.core.next(seq__17886__$1);
var np = first__17887__$1;
var nc = seq__17886__$2;
var node = vec__17885;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17893 = nn;
var G__17894 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17893,G__17894) : create_fn.call(null,G__17893,G__17894));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17896 = nn;
var G__17897 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17896,G__17897) : create_fn.call(null,G__17896,G__17897));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17907 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17907,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17907,(1),null);
var seq__17913_18860 = cljs.core.seq(node_children);
var chunk__17914_18861 = null;
var count__17915_18862 = (0);
var i__17916_18863 = (0);
while(true){
if((i__17916_18863 < count__17915_18862)){
var child_struct_18864 = chunk__17914_18861.cljs$core$IIndexed$_nth$arity$2(null,i__17916_18863);
var children_18865 = shadow.dom.dom_node(child_struct_18864);
if(cljs.core.seq_QMARK_(children_18865)){
var seq__17979_18866 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18865));
var chunk__17981_18867 = null;
var count__17982_18868 = (0);
var i__17983_18869 = (0);
while(true){
if((i__17983_18869 < count__17982_18868)){
var child_18870 = chunk__17981_18867.cljs$core$IIndexed$_nth$arity$2(null,i__17983_18869);
if(cljs.core.truth_(child_18870)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18870);


var G__18871 = seq__17979_18866;
var G__18872 = chunk__17981_18867;
var G__18873 = count__17982_18868;
var G__18874 = (i__17983_18869 + (1));
seq__17979_18866 = G__18871;
chunk__17981_18867 = G__18872;
count__17982_18868 = G__18873;
i__17983_18869 = G__18874;
continue;
} else {
var G__18875 = seq__17979_18866;
var G__18876 = chunk__17981_18867;
var G__18877 = count__17982_18868;
var G__18878 = (i__17983_18869 + (1));
seq__17979_18866 = G__18875;
chunk__17981_18867 = G__18876;
count__17982_18868 = G__18877;
i__17983_18869 = G__18878;
continue;
}
} else {
var temp__5804__auto___18879 = cljs.core.seq(seq__17979_18866);
if(temp__5804__auto___18879){
var seq__17979_18880__$1 = temp__5804__auto___18879;
if(cljs.core.chunked_seq_QMARK_(seq__17979_18880__$1)){
var c__5568__auto___18881 = cljs.core.chunk_first(seq__17979_18880__$1);
var G__18882 = cljs.core.chunk_rest(seq__17979_18880__$1);
var G__18883 = c__5568__auto___18881;
var G__18884 = cljs.core.count(c__5568__auto___18881);
var G__18885 = (0);
seq__17979_18866 = G__18882;
chunk__17981_18867 = G__18883;
count__17982_18868 = G__18884;
i__17983_18869 = G__18885;
continue;
} else {
var child_18886 = cljs.core.first(seq__17979_18880__$1);
if(cljs.core.truth_(child_18886)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18886);


var G__18887 = cljs.core.next(seq__17979_18880__$1);
var G__18888 = null;
var G__18889 = (0);
var G__18890 = (0);
seq__17979_18866 = G__18887;
chunk__17981_18867 = G__18888;
count__17982_18868 = G__18889;
i__17983_18869 = G__18890;
continue;
} else {
var G__18891 = cljs.core.next(seq__17979_18880__$1);
var G__18892 = null;
var G__18893 = (0);
var G__18894 = (0);
seq__17979_18866 = G__18891;
chunk__17981_18867 = G__18892;
count__17982_18868 = G__18893;
i__17983_18869 = G__18894;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18865);
}


var G__18895 = seq__17913_18860;
var G__18896 = chunk__17914_18861;
var G__18897 = count__17915_18862;
var G__18898 = (i__17916_18863 + (1));
seq__17913_18860 = G__18895;
chunk__17914_18861 = G__18896;
count__17915_18862 = G__18897;
i__17916_18863 = G__18898;
continue;
} else {
var temp__5804__auto___18899 = cljs.core.seq(seq__17913_18860);
if(temp__5804__auto___18899){
var seq__17913_18900__$1 = temp__5804__auto___18899;
if(cljs.core.chunked_seq_QMARK_(seq__17913_18900__$1)){
var c__5568__auto___18901 = cljs.core.chunk_first(seq__17913_18900__$1);
var G__18902 = cljs.core.chunk_rest(seq__17913_18900__$1);
var G__18903 = c__5568__auto___18901;
var G__18904 = cljs.core.count(c__5568__auto___18901);
var G__18905 = (0);
seq__17913_18860 = G__18902;
chunk__17914_18861 = G__18903;
count__17915_18862 = G__18904;
i__17916_18863 = G__18905;
continue;
} else {
var child_struct_18906 = cljs.core.first(seq__17913_18900__$1);
var children_18907 = shadow.dom.dom_node(child_struct_18906);
if(cljs.core.seq_QMARK_(children_18907)){
var seq__18012_18908 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18907));
var chunk__18015_18909 = null;
var count__18016_18910 = (0);
var i__18017_18911 = (0);
while(true){
if((i__18017_18911 < count__18016_18910)){
var child_18912 = chunk__18015_18909.cljs$core$IIndexed$_nth$arity$2(null,i__18017_18911);
if(cljs.core.truth_(child_18912)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18912);


var G__18913 = seq__18012_18908;
var G__18914 = chunk__18015_18909;
var G__18915 = count__18016_18910;
var G__18916 = (i__18017_18911 + (1));
seq__18012_18908 = G__18913;
chunk__18015_18909 = G__18914;
count__18016_18910 = G__18915;
i__18017_18911 = G__18916;
continue;
} else {
var G__18917 = seq__18012_18908;
var G__18918 = chunk__18015_18909;
var G__18919 = count__18016_18910;
var G__18920 = (i__18017_18911 + (1));
seq__18012_18908 = G__18917;
chunk__18015_18909 = G__18918;
count__18016_18910 = G__18919;
i__18017_18911 = G__18920;
continue;
}
} else {
var temp__5804__auto___18921__$1 = cljs.core.seq(seq__18012_18908);
if(temp__5804__auto___18921__$1){
var seq__18012_18922__$1 = temp__5804__auto___18921__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18012_18922__$1)){
var c__5568__auto___18923 = cljs.core.chunk_first(seq__18012_18922__$1);
var G__18924 = cljs.core.chunk_rest(seq__18012_18922__$1);
var G__18925 = c__5568__auto___18923;
var G__18926 = cljs.core.count(c__5568__auto___18923);
var G__18927 = (0);
seq__18012_18908 = G__18924;
chunk__18015_18909 = G__18925;
count__18016_18910 = G__18926;
i__18017_18911 = G__18927;
continue;
} else {
var child_18928 = cljs.core.first(seq__18012_18922__$1);
if(cljs.core.truth_(child_18928)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18928);


var G__18929 = cljs.core.next(seq__18012_18922__$1);
var G__18930 = null;
var G__18931 = (0);
var G__18932 = (0);
seq__18012_18908 = G__18929;
chunk__18015_18909 = G__18930;
count__18016_18910 = G__18931;
i__18017_18911 = G__18932;
continue;
} else {
var G__18933 = cljs.core.next(seq__18012_18922__$1);
var G__18934 = null;
var G__18935 = (0);
var G__18936 = (0);
seq__18012_18908 = G__18933;
chunk__18015_18909 = G__18934;
count__18016_18910 = G__18935;
i__18017_18911 = G__18936;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18907);
}


var G__18937 = cljs.core.next(seq__17913_18900__$1);
var G__18938 = null;
var G__18939 = (0);
var G__18940 = (0);
seq__17913_18860 = G__18937;
chunk__17914_18861 = G__18938;
count__17915_18862 = G__18939;
i__17916_18863 = G__18940;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18154 = cljs.core.seq(node);
var chunk__18155 = null;
var count__18156 = (0);
var i__18157 = (0);
while(true){
if((i__18157 < count__18156)){
var n = chunk__18155.cljs$core$IIndexed$_nth$arity$2(null,i__18157);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18941 = seq__18154;
var G__18942 = chunk__18155;
var G__18943 = count__18156;
var G__18944 = (i__18157 + (1));
seq__18154 = G__18941;
chunk__18155 = G__18942;
count__18156 = G__18943;
i__18157 = G__18944;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18154);
if(temp__5804__auto__){
var seq__18154__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18154__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18154__$1);
var G__18945 = cljs.core.chunk_rest(seq__18154__$1);
var G__18946 = c__5568__auto__;
var G__18947 = cljs.core.count(c__5568__auto__);
var G__18948 = (0);
seq__18154 = G__18945;
chunk__18155 = G__18946;
count__18156 = G__18947;
i__18157 = G__18948;
continue;
} else {
var n = cljs.core.first(seq__18154__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18949 = cljs.core.next(seq__18154__$1);
var G__18950 = null;
var G__18951 = (0);
var G__18952 = (0);
seq__18154 = G__18949;
chunk__18155 = G__18950;
count__18156 = G__18951;
i__18157 = G__18952;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18218 = arguments.length;
switch (G__18218) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18242 = arguments.length;
switch (G__18242) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18290 = arguments.length;
switch (G__18290) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18956 = arguments.length;
var i__5770__auto___18957 = (0);
while(true){
if((i__5770__auto___18957 < len__5769__auto___18956)){
args__5775__auto__.push((arguments[i__5770__auto___18957]));

var G__18958 = (i__5770__auto___18957 + (1));
i__5770__auto___18957 = G__18958;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18323_18959 = cljs.core.seq(nodes);
var chunk__18324_18960 = null;
var count__18325_18961 = (0);
var i__18326_18962 = (0);
while(true){
if((i__18326_18962 < count__18325_18961)){
var node_18963 = chunk__18324_18960.cljs$core$IIndexed$_nth$arity$2(null,i__18326_18962);
fragment.appendChild(shadow.dom._to_dom(node_18963));


var G__18964 = seq__18323_18959;
var G__18965 = chunk__18324_18960;
var G__18966 = count__18325_18961;
var G__18967 = (i__18326_18962 + (1));
seq__18323_18959 = G__18964;
chunk__18324_18960 = G__18965;
count__18325_18961 = G__18966;
i__18326_18962 = G__18967;
continue;
} else {
var temp__5804__auto___18968 = cljs.core.seq(seq__18323_18959);
if(temp__5804__auto___18968){
var seq__18323_18969__$1 = temp__5804__auto___18968;
if(cljs.core.chunked_seq_QMARK_(seq__18323_18969__$1)){
var c__5568__auto___18970 = cljs.core.chunk_first(seq__18323_18969__$1);
var G__18971 = cljs.core.chunk_rest(seq__18323_18969__$1);
var G__18972 = c__5568__auto___18970;
var G__18973 = cljs.core.count(c__5568__auto___18970);
var G__18974 = (0);
seq__18323_18959 = G__18971;
chunk__18324_18960 = G__18972;
count__18325_18961 = G__18973;
i__18326_18962 = G__18974;
continue;
} else {
var node_18975 = cljs.core.first(seq__18323_18969__$1);
fragment.appendChild(shadow.dom._to_dom(node_18975));


var G__18976 = cljs.core.next(seq__18323_18969__$1);
var G__18977 = null;
var G__18978 = (0);
var G__18979 = (0);
seq__18323_18959 = G__18976;
chunk__18324_18960 = G__18977;
count__18325_18961 = G__18978;
i__18326_18962 = G__18979;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18318){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18318));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18344_18980 = cljs.core.seq(scripts);
var chunk__18345_18981 = null;
var count__18346_18982 = (0);
var i__18347_18983 = (0);
while(true){
if((i__18347_18983 < count__18346_18982)){
var vec__18355_18984 = chunk__18345_18981.cljs$core$IIndexed$_nth$arity$2(null,i__18347_18983);
var script_tag_18985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18355_18984,(0),null);
var script_body_18986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18355_18984,(1),null);
eval(script_body_18986);


var G__18987 = seq__18344_18980;
var G__18988 = chunk__18345_18981;
var G__18989 = count__18346_18982;
var G__18990 = (i__18347_18983 + (1));
seq__18344_18980 = G__18987;
chunk__18345_18981 = G__18988;
count__18346_18982 = G__18989;
i__18347_18983 = G__18990;
continue;
} else {
var temp__5804__auto___18991 = cljs.core.seq(seq__18344_18980);
if(temp__5804__auto___18991){
var seq__18344_18992__$1 = temp__5804__auto___18991;
if(cljs.core.chunked_seq_QMARK_(seq__18344_18992__$1)){
var c__5568__auto___18993 = cljs.core.chunk_first(seq__18344_18992__$1);
var G__18994 = cljs.core.chunk_rest(seq__18344_18992__$1);
var G__18995 = c__5568__auto___18993;
var G__18996 = cljs.core.count(c__5568__auto___18993);
var G__18997 = (0);
seq__18344_18980 = G__18994;
chunk__18345_18981 = G__18995;
count__18346_18982 = G__18996;
i__18347_18983 = G__18997;
continue;
} else {
var vec__18362_18998 = cljs.core.first(seq__18344_18992__$1);
var script_tag_18999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18362_18998,(0),null);
var script_body_19000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18362_18998,(1),null);
eval(script_body_19000);


var G__19001 = cljs.core.next(seq__18344_18992__$1);
var G__19002 = null;
var G__19003 = (0);
var G__19004 = (0);
seq__18344_18980 = G__19001;
chunk__18345_18981 = G__19002;
count__18346_18982 = G__19003;
i__18347_18983 = G__19004;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18371){
var vec__18374 = p__18371;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18374,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18374,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18404 = arguments.length;
switch (G__18404) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18407 = cljs.core.seq(style_keys);
var chunk__18408 = null;
var count__18409 = (0);
var i__18410 = (0);
while(true){
if((i__18410 < count__18409)){
var it = chunk__18408.cljs$core$IIndexed$_nth$arity$2(null,i__18410);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19006 = seq__18407;
var G__19007 = chunk__18408;
var G__19008 = count__18409;
var G__19009 = (i__18410 + (1));
seq__18407 = G__19006;
chunk__18408 = G__19007;
count__18409 = G__19008;
i__18410 = G__19009;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18407);
if(temp__5804__auto__){
var seq__18407__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18407__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18407__$1);
var G__19010 = cljs.core.chunk_rest(seq__18407__$1);
var G__19011 = c__5568__auto__;
var G__19012 = cljs.core.count(c__5568__auto__);
var G__19013 = (0);
seq__18407 = G__19010;
chunk__18408 = G__19011;
count__18409 = G__19012;
i__18410 = G__19013;
continue;
} else {
var it = cljs.core.first(seq__18407__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19014 = cljs.core.next(seq__18407__$1);
var G__19015 = null;
var G__19016 = (0);
var G__19017 = (0);
seq__18407 = G__19014;
chunk__18408 = G__19015;
count__18409 = G__19016;
i__18410 = G__19017;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18412,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18416 = k18412;
var G__18416__$1 = (((G__18416 instanceof cljs.core.Keyword))?G__18416.fqn:null);
switch (G__18416__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18412,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18420){
var vec__18421 = p__18420;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18421,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18421,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18411){
var self__ = this;
var G__18411__$1 = this;
return (new cljs.core.RecordIter((0),G__18411__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18413,other18414){
var self__ = this;
var this18413__$1 = this;
return (((!((other18414 == null)))) && ((((this18413__$1.constructor === other18414.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18413__$1.x,other18414.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18413__$1.y,other18414.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18413__$1.__extmap,other18414.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18412){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18459 = k18412;
var G__18459__$1 = (((G__18459 instanceof cljs.core.Keyword))?G__18459.fqn:null);
switch (G__18459__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18412);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18411){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18463 = cljs.core.keyword_identical_QMARK_;
var expr__18464 = k__5352__auto__;
if(cljs.core.truth_((pred__18463.cljs$core$IFn$_invoke$arity$2 ? pred__18463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18464) : pred__18463.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18464)))){
return (new shadow.dom.Coordinate(G__18411,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18463.cljs$core$IFn$_invoke$arity$2 ? pred__18463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18464) : pred__18463.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18464)))){
return (new shadow.dom.Coordinate(self__.x,G__18411,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18411),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18411){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18411,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18415){
var extmap__5385__auto__ = (function (){var G__18508 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18415,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18415)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18508);
} else {
return G__18508;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18415),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18415),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18531,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18548 = k18531;
var G__18548__$1 = (((G__18548 instanceof cljs.core.Keyword))?G__18548.fqn:null);
switch (G__18548__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18531,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18559){
var vec__18562 = p__18559;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18562,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18530){
var self__ = this;
var G__18530__$1 = this;
return (new cljs.core.RecordIter((0),G__18530__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18532,other18533){
var self__ = this;
var this18532__$1 = this;
return (((!((other18533 == null)))) && ((((this18532__$1.constructor === other18533.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18532__$1.w,other18533.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18532__$1.h,other18533.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18532__$1.__extmap,other18533.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18531){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18621 = k18531;
var G__18621__$1 = (((G__18621 instanceof cljs.core.Keyword))?G__18621.fqn:null);
switch (G__18621__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18531);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18530){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18622 = cljs.core.keyword_identical_QMARK_;
var expr__18623 = k__5352__auto__;
if(cljs.core.truth_((pred__18622.cljs$core$IFn$_invoke$arity$2 ? pred__18622.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18623) : pred__18622.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18623)))){
return (new shadow.dom.Size(G__18530,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18622.cljs$core$IFn$_invoke$arity$2 ? pred__18622.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18623) : pred__18622.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18623)))){
return (new shadow.dom.Size(self__.w,G__18530,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18530),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18530){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18530,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18534){
var extmap__5385__auto__ = (function (){var G__18625 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18534,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18534)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18625);
} else {
return G__18625;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18534),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18534),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19031 = (i + (1));
var G__19032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19031;
ret = G__19032;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18632){
var vec__18633 = p__18632;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18633,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18637 = arguments.length;
switch (G__18637) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19036 = ps;
var G__19037 = (i + (1));
el__$1 = G__19036;
i = G__19037;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18638 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18638,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18638,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18638,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18641_19040 = cljs.core.seq(props);
var chunk__18642_19041 = null;
var count__18643_19042 = (0);
var i__18644_19043 = (0);
while(true){
if((i__18644_19043 < count__18643_19042)){
var vec__18662_19044 = chunk__18642_19041.cljs$core$IIndexed$_nth$arity$2(null,i__18644_19043);
var k_19045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18662_19044,(0),null);
var v_19046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18662_19044,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19045);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19045),v_19046);


var G__19047 = seq__18641_19040;
var G__19048 = chunk__18642_19041;
var G__19049 = count__18643_19042;
var G__19050 = (i__18644_19043 + (1));
seq__18641_19040 = G__19047;
chunk__18642_19041 = G__19048;
count__18643_19042 = G__19049;
i__18644_19043 = G__19050;
continue;
} else {
var temp__5804__auto___19051 = cljs.core.seq(seq__18641_19040);
if(temp__5804__auto___19051){
var seq__18641_19052__$1 = temp__5804__auto___19051;
if(cljs.core.chunked_seq_QMARK_(seq__18641_19052__$1)){
var c__5568__auto___19053 = cljs.core.chunk_first(seq__18641_19052__$1);
var G__19054 = cljs.core.chunk_rest(seq__18641_19052__$1);
var G__19055 = c__5568__auto___19053;
var G__19056 = cljs.core.count(c__5568__auto___19053);
var G__19057 = (0);
seq__18641_19040 = G__19054;
chunk__18642_19041 = G__19055;
count__18643_19042 = G__19056;
i__18644_19043 = G__19057;
continue;
} else {
var vec__18669_19058 = cljs.core.first(seq__18641_19052__$1);
var k_19059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18669_19058,(0),null);
var v_19060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18669_19058,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19059);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19059),v_19060);


var G__19061 = cljs.core.next(seq__18641_19052__$1);
var G__19062 = null;
var G__19063 = (0);
var G__19064 = (0);
seq__18641_19040 = G__19061;
chunk__18642_19041 = G__19062;
count__18643_19042 = G__19063;
i__18644_19043 = G__19064;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18685 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18685,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18685,(1),null);
var seq__18688_19065 = cljs.core.seq(node_children);
var chunk__18690_19066 = null;
var count__18691_19067 = (0);
var i__18692_19068 = (0);
while(true){
if((i__18692_19068 < count__18691_19067)){
var child_struct_19069 = chunk__18690_19066.cljs$core$IIndexed$_nth$arity$2(null,i__18692_19068);
if((!((child_struct_19069 == null)))){
if(typeof child_struct_19069 === 'string'){
var text_19071 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19071),child_struct_19069].join(''));
} else {
var children_19072 = shadow.dom.svg_node(child_struct_19069);
if(cljs.core.seq_QMARK_(children_19072)){
var seq__18723_19076 = cljs.core.seq(children_19072);
var chunk__18725_19077 = null;
var count__18726_19078 = (0);
var i__18727_19079 = (0);
while(true){
if((i__18727_19079 < count__18726_19078)){
var child_19080 = chunk__18725_19077.cljs$core$IIndexed$_nth$arity$2(null,i__18727_19079);
if(cljs.core.truth_(child_19080)){
node.appendChild(child_19080);


var G__19081 = seq__18723_19076;
var G__19082 = chunk__18725_19077;
var G__19083 = count__18726_19078;
var G__19084 = (i__18727_19079 + (1));
seq__18723_19076 = G__19081;
chunk__18725_19077 = G__19082;
count__18726_19078 = G__19083;
i__18727_19079 = G__19084;
continue;
} else {
var G__19086 = seq__18723_19076;
var G__19087 = chunk__18725_19077;
var G__19088 = count__18726_19078;
var G__19089 = (i__18727_19079 + (1));
seq__18723_19076 = G__19086;
chunk__18725_19077 = G__19087;
count__18726_19078 = G__19088;
i__18727_19079 = G__19089;
continue;
}
} else {
var temp__5804__auto___19090 = cljs.core.seq(seq__18723_19076);
if(temp__5804__auto___19090){
var seq__18723_19091__$1 = temp__5804__auto___19090;
if(cljs.core.chunked_seq_QMARK_(seq__18723_19091__$1)){
var c__5568__auto___19092 = cljs.core.chunk_first(seq__18723_19091__$1);
var G__19093 = cljs.core.chunk_rest(seq__18723_19091__$1);
var G__19094 = c__5568__auto___19092;
var G__19095 = cljs.core.count(c__5568__auto___19092);
var G__19096 = (0);
seq__18723_19076 = G__19093;
chunk__18725_19077 = G__19094;
count__18726_19078 = G__19095;
i__18727_19079 = G__19096;
continue;
} else {
var child_19097 = cljs.core.first(seq__18723_19091__$1);
if(cljs.core.truth_(child_19097)){
node.appendChild(child_19097);


var G__19098 = cljs.core.next(seq__18723_19091__$1);
var G__19099 = null;
var G__19100 = (0);
var G__19101 = (0);
seq__18723_19076 = G__19098;
chunk__18725_19077 = G__19099;
count__18726_19078 = G__19100;
i__18727_19079 = G__19101;
continue;
} else {
var G__19102 = cljs.core.next(seq__18723_19091__$1);
var G__19103 = null;
var G__19104 = (0);
var G__19105 = (0);
seq__18723_19076 = G__19102;
chunk__18725_19077 = G__19103;
count__18726_19078 = G__19104;
i__18727_19079 = G__19105;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19072);
}
}


var G__19106 = seq__18688_19065;
var G__19107 = chunk__18690_19066;
var G__19108 = count__18691_19067;
var G__19109 = (i__18692_19068 + (1));
seq__18688_19065 = G__19106;
chunk__18690_19066 = G__19107;
count__18691_19067 = G__19108;
i__18692_19068 = G__19109;
continue;
} else {
var G__19110 = seq__18688_19065;
var G__19111 = chunk__18690_19066;
var G__19112 = count__18691_19067;
var G__19113 = (i__18692_19068 + (1));
seq__18688_19065 = G__19110;
chunk__18690_19066 = G__19111;
count__18691_19067 = G__19112;
i__18692_19068 = G__19113;
continue;
}
} else {
var temp__5804__auto___19114 = cljs.core.seq(seq__18688_19065);
if(temp__5804__auto___19114){
var seq__18688_19115__$1 = temp__5804__auto___19114;
if(cljs.core.chunked_seq_QMARK_(seq__18688_19115__$1)){
var c__5568__auto___19116 = cljs.core.chunk_first(seq__18688_19115__$1);
var G__19117 = cljs.core.chunk_rest(seq__18688_19115__$1);
var G__19118 = c__5568__auto___19116;
var G__19119 = cljs.core.count(c__5568__auto___19116);
var G__19120 = (0);
seq__18688_19065 = G__19117;
chunk__18690_19066 = G__19118;
count__18691_19067 = G__19119;
i__18692_19068 = G__19120;
continue;
} else {
var child_struct_19121 = cljs.core.first(seq__18688_19115__$1);
if((!((child_struct_19121 == null)))){
if(typeof child_struct_19121 === 'string'){
var text_19122 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19122),child_struct_19121].join(''));
} else {
var children_19123 = shadow.dom.svg_node(child_struct_19121);
if(cljs.core.seq_QMARK_(children_19123)){
var seq__18742_19124 = cljs.core.seq(children_19123);
var chunk__18744_19125 = null;
var count__18745_19126 = (0);
var i__18746_19127 = (0);
while(true){
if((i__18746_19127 < count__18745_19126)){
var child_19128 = chunk__18744_19125.cljs$core$IIndexed$_nth$arity$2(null,i__18746_19127);
if(cljs.core.truth_(child_19128)){
node.appendChild(child_19128);


var G__19129 = seq__18742_19124;
var G__19130 = chunk__18744_19125;
var G__19131 = count__18745_19126;
var G__19132 = (i__18746_19127 + (1));
seq__18742_19124 = G__19129;
chunk__18744_19125 = G__19130;
count__18745_19126 = G__19131;
i__18746_19127 = G__19132;
continue;
} else {
var G__19133 = seq__18742_19124;
var G__19134 = chunk__18744_19125;
var G__19135 = count__18745_19126;
var G__19136 = (i__18746_19127 + (1));
seq__18742_19124 = G__19133;
chunk__18744_19125 = G__19134;
count__18745_19126 = G__19135;
i__18746_19127 = G__19136;
continue;
}
} else {
var temp__5804__auto___19138__$1 = cljs.core.seq(seq__18742_19124);
if(temp__5804__auto___19138__$1){
var seq__18742_19139__$1 = temp__5804__auto___19138__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18742_19139__$1)){
var c__5568__auto___19140 = cljs.core.chunk_first(seq__18742_19139__$1);
var G__19141 = cljs.core.chunk_rest(seq__18742_19139__$1);
var G__19142 = c__5568__auto___19140;
var G__19143 = cljs.core.count(c__5568__auto___19140);
var G__19144 = (0);
seq__18742_19124 = G__19141;
chunk__18744_19125 = G__19142;
count__18745_19126 = G__19143;
i__18746_19127 = G__19144;
continue;
} else {
var child_19145 = cljs.core.first(seq__18742_19139__$1);
if(cljs.core.truth_(child_19145)){
node.appendChild(child_19145);


var G__19146 = cljs.core.next(seq__18742_19139__$1);
var G__19147 = null;
var G__19148 = (0);
var G__19149 = (0);
seq__18742_19124 = G__19146;
chunk__18744_19125 = G__19147;
count__18745_19126 = G__19148;
i__18746_19127 = G__19149;
continue;
} else {
var G__19150 = cljs.core.next(seq__18742_19139__$1);
var G__19151 = null;
var G__19152 = (0);
var G__19153 = (0);
seq__18742_19124 = G__19150;
chunk__18744_19125 = G__19151;
count__18745_19126 = G__19152;
i__18746_19127 = G__19153;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19123);
}
}


var G__19154 = cljs.core.next(seq__18688_19115__$1);
var G__19155 = null;
var G__19156 = (0);
var G__19157 = (0);
seq__18688_19065 = G__19154;
chunk__18690_19066 = G__19155;
count__18691_19067 = G__19156;
i__18692_19068 = G__19157;
continue;
} else {
var G__19158 = cljs.core.next(seq__18688_19115__$1);
var G__19159 = null;
var G__19160 = (0);
var G__19161 = (0);
seq__18688_19065 = G__19158;
chunk__18690_19066 = G__19159;
count__18691_19067 = G__19160;
i__18692_19068 = G__19161;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19166 = arguments.length;
var i__5770__auto___19167 = (0);
while(true){
if((i__5770__auto___19167 < len__5769__auto___19166)){
args__5775__auto__.push((arguments[i__5770__auto___19167]));

var G__19169 = (i__5770__auto___19167 + (1));
i__5770__auto___19167 = G__19169;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18764){
var G__18765 = cljs.core.first(seq18764);
var seq18764__$1 = cljs.core.next(seq18764);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18765,seq18764__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18776 = arguments.length;
switch (G__18776) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14437__auto___19173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14438__auto__ = (function (){var switch__14193__auto__ = (function (state_18793){
var state_val_18794 = (state_18793[(1)]);
if((state_val_18794 === (1))){
var state_18793__$1 = state_18793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18793__$1,(2),once_or_cleanup);
} else {
if((state_val_18794 === (2))){
var inst_18790 = (state_18793[(2)]);
var inst_18791 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18793__$1 = (function (){var statearr_18795 = state_18793;
(statearr_18795[(7)] = inst_18790);

return statearr_18795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18793__$1,inst_18791);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14194__auto__ = null;
var shadow$dom$state_machine__14194__auto____0 = (function (){
var statearr_18796 = [null,null,null,null,null,null,null,null];
(statearr_18796[(0)] = shadow$dom$state_machine__14194__auto__);

(statearr_18796[(1)] = (1));

return statearr_18796;
});
var shadow$dom$state_machine__14194__auto____1 = (function (state_18793){
while(true){
var ret_value__14195__auto__ = (function (){try{while(true){
var result__14196__auto__ = switch__14193__auto__(state_18793);
if(cljs.core.keyword_identical_QMARK_(result__14196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14196__auto__;
}
break;
}
}catch (e18797){var ex__14197__auto__ = e18797;
var statearr_18802_19177 = state_18793;
(statearr_18802_19177[(2)] = ex__14197__auto__);


if(cljs.core.seq((state_18793[(4)]))){
var statearr_18803_19178 = state_18793;
(statearr_18803_19178[(1)] = cljs.core.first((state_18793[(4)])));

} else {
throw ex__14197__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19179 = state_18793;
state_18793 = G__19179;
continue;
} else {
return ret_value__14195__auto__;
}
break;
}
});
shadow$dom$state_machine__14194__auto__ = function(state_18793){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14194__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14194__auto____1.call(this,state_18793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14194__auto____0;
shadow$dom$state_machine__14194__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14194__auto____1;
return shadow$dom$state_machine__14194__auto__;
})()
})();
var state__14439__auto__ = (function (){var statearr_18804 = f__14438__auto__();
(statearr_18804[(6)] = c__14437__auto___19173);

return statearr_18804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14439__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
