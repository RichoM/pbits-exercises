goog.provide('crate.compiler');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);


crate.compiler.group_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
crate.compiler.bindings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function crate$compiler$capture_binding(tag,b){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});

/**
 * @interface
 */
crate.compiler.Element = function(){};

var crate$compiler$Element$_elem$dyn_24287 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (crate.compiler._elem[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (crate.compiler._elem["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Element.-elem",this$);
}
}
});
crate.compiler._elem = (function crate$compiler$_elem(this$){
if((((!((this$ == null)))) && ((!((this$.crate$compiler$Element$_elem$arity$1 == null)))))){
return this$.crate$compiler$Element$_elem$arity$1(this$);
} else {
return crate$compiler$Element$_elem$dyn_24287(this$);
}
});

crate.compiler.as_content = (function crate$compiler$as_content(parent,content){
var seq__24079 = cljs.core.seq(content);
var chunk__24080 = null;
var count__24081 = (0);
var i__24082 = (0);
while(true){
if((i__24082 < count__24081)){
var c = chunk__24080.cljs$core$IIndexed$_nth$arity$2(null,i__24082);
var child_24288 = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.crate$compiler$Element$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c):false)):cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c)))?crate.compiler._elem(c):(((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?(crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(parent,c) : crate.compiler.as_content.call(null,parent,c)):((crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"coll","coll",1647737163),c);

var G__24142 = parent;
var G__24143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__24142,G__24143) : crate.compiler.as_content.call(null,G__24142,G__24143));
})()
:((crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"text","text",-1790561697),c);

var G__24144 = parent;
var G__24145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__24144,G__24145) : crate.compiler.as_content.call(null,G__24144,G__24145));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))
))))))))));
if(cljs.core.truth_(child_24288)){
goog.dom.appendChild(parent,child_24288);
} else {
}


var G__24290 = seq__24079;
var G__24291 = chunk__24080;
var G__24292 = count__24081;
var G__24293 = (i__24082 + (1));
seq__24079 = G__24290;
chunk__24080 = G__24291;
count__24081 = G__24292;
i__24082 = G__24293;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24079);
if(temp__5804__auto__){
var seq__24079__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24079__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24079__$1);
var G__24294 = cljs.core.chunk_rest(seq__24079__$1);
var G__24295 = c__5568__auto__;
var G__24296 = cljs.core.count(c__5568__auto__);
var G__24297 = (0);
seq__24079 = G__24294;
chunk__24080 = G__24295;
count__24081 = G__24296;
i__24082 = G__24297;
continue;
} else {
var c = cljs.core.first(seq__24079__$1);
var child_24298 = (((((!((c == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === c.crate$compiler$Element$))))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c):false)):cljs.core.native_satisfies_QMARK_(crate.compiler.Element,c)))?crate.compiler._elem(c):(((c == null))?null:((cljs.core.map_QMARK_(c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_(c))?(crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.elem_factory.cljs$core$IFn$_invoke$arity$1(c) : crate.compiler.elem_factory.call(null,c)):((cljs.core.seq_QMARK_(c))?(crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(parent,c) : crate.compiler.as_content.call(null,parent,c)):((crate.binding.binding_coll_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"coll","coll",1647737163),c);

var G__24147 = parent;
var G__24148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__24147,G__24148) : crate.compiler.as_content.call(null,G__24147,G__24148));
})()
:((crate.binding.binding_QMARK_(c))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"text","text",-1790561697),c);

var G__24149 = parent;
var G__24150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value(c)], null);
return (crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.as_content.cljs$core$IFn$_invoke$arity$2(G__24149,G__24150) : crate.compiler.as_content.call(null,G__24149,G__24150));
})()
:(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get((0)):goog.dom.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))
))))))))));
if(cljs.core.truth_(child_24298)){
goog.dom.appendChild(parent,child_24298);
} else {
}


var G__24299 = cljs.core.next(seq__24079__$1);
var G__24300 = null;
var G__24301 = (0);
var G__24302 = (0);
seq__24079 = G__24299;
chunk__24080 = G__24300;
count__24081 = G__24301;
i__24082 = G__24302;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof crate !== 'undefined') && (typeof crate.compiler !== 'undefined') && (typeof crate.compiler.dom_binding !== 'undefined')){
} else {
crate.compiler.dom_binding = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24154 = cljs.core.get_global_hierarchy;
return (fexpr__24154.cljs$core$IFn$_invoke$arity$0 ? fexpr__24154.cljs$core$IFn$_invoke$arity$0() : fexpr__24154.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("crate.compiler","dom-binding"),(function (type,_,___$1){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_,b,elem){
return crate.binding.on_change(b,(function (v){
goog.dom.removeChildren(elem);

return crate.compiler.as_content(elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_,p__24180,elem){
var vec__24181 = p__24180;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24181,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24181,(1),null);
return crate.binding.on_change(b,(function (v){
return (crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_attr.call(null,elem,k,v));
}));
}));
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"style","style",-496642736),(function (_,p__24195,elem){
var vec__24196 = p__24195;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24196,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24196,(1),null);
return crate.binding.on_change(b,(function (v){
if(cljs.core.truth_(k)){
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k,v) : crate.compiler.dom_style.call(null,elem,k,v));
} else {
return (crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 ? crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v) : crate.compiler.dom_style.call(null,elem,v));
}
}));
}));
crate.compiler.dom_add = (function crate$compiler$dom_add(bc,parent,elem,v){
var temp__5802__auto__ = crate.binding.opt(bc,new cljs.core.Keyword(null,"add","add",235287739));
if(cljs.core.truth_(temp__5802__auto__)){
var adder = temp__5802__auto__;
return (adder.cljs$core$IFn$_invoke$arity$3 ? adder.cljs$core$IFn$_invoke$arity$3(parent,elem,v) : adder.call(null,parent,elem,v));
} else {
return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function crate$compiler$dom_remove(bc,elem){
var temp__5802__auto__ = crate.binding.opt(bc,new cljs.core.Keyword(null,"remove","remove",-131428414));
if(cljs.core.truth_(temp__5802__auto__)){
var remover = temp__5802__auto__;
return (remover.cljs$core$IFn$_invoke$arity$1 ? remover.cljs$core$IFn$_invoke$arity$1(elem) : remover.call(null,elem));
} else {
return goog.dom.removeNode(elem);
}
});
crate.compiler.dom_binding.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"coll","coll",1647737163),(function (_,bc,parent){
return crate.binding.on_change(bc,(function (type,elem,v){
var pred__24205 = cljs.core._EQ_;
var expr__24206 = type;
if(cljs.core.truth_((pred__24205.cljs$core$IFn$_invoke$arity$2 ? pred__24205.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),expr__24206) : pred__24205.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__24206)))){
return crate.compiler.dom_add(bc,parent,elem,v);
} else {
if(cljs.core.truth_((pred__24205.cljs$core$IFn$_invoke$arity$2 ? pred__24205.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove","remove",-131428414),expr__24206) : pred__24205.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),expr__24206)))){
return crate.compiler.dom_remove(bc,elem);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24206)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function crate$compiler$handle_bindings(bs,elem){
var seq__24208 = cljs.core.seq(bs);
var chunk__24209 = null;
var count__24210 = (0);
var i__24211 = (0);
while(true){
if((i__24211 < count__24210)){
var vec__24218 = chunk__24209.cljs$core$IIndexed$_nth$arity$2(null,i__24211);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24218,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24218,(1),null);
crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem);


var G__24306 = seq__24208;
var G__24307 = chunk__24209;
var G__24308 = count__24210;
var G__24309 = (i__24211 + (1));
seq__24208 = G__24306;
chunk__24209 = G__24307;
count__24210 = G__24308;
i__24211 = G__24309;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24208);
if(temp__5804__auto__){
var seq__24208__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24208__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24208__$1);
var G__24311 = cljs.core.chunk_rest(seq__24208__$1);
var G__24312 = c__5568__auto__;
var G__24313 = cljs.core.count(c__5568__auto__);
var G__24314 = (0);
seq__24208 = G__24311;
chunk__24209 = G__24312;
count__24210 = G__24313;
i__24211 = G__24314;
continue;
} else {
var vec__24221 = cljs.core.first(seq__24208__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24221,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24221,(1),null);
crate.compiler.dom_binding.cljs$core$IFn$_invoke$arity$3(type,b,elem);


var G__24315 = cljs.core.next(seq__24208__$1);
var G__24316 = null;
var G__24317 = (0);
var G__24318 = (0);
seq__24208 = G__24315;
chunk__24209 = G__24316;
count__24210 = G__24317;
i__24211 = G__24318;
continue;
}
} else {
return null;
}
}
break;
}
});
crate.compiler.dom_style = (function crate$compiler$dom_style(var_args){
var G__24225 = arguments.length;
switch (G__24225) {
case 2:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2 = (function (elem,v){
if(typeof v === 'string'){
elem.setAttribute("style",v);
} else {
if(cljs.core.map_QMARK_(v)){
var seq__24226_24321 = cljs.core.seq(v);
var chunk__24227_24322 = null;
var count__24228_24323 = (0);
var i__24229_24324 = (0);
while(true){
if((i__24229_24324 < count__24228_24323)){
var vec__24236_24325 = chunk__24227_24322.cljs$core$IIndexed$_nth$arity$2(null,i__24229_24324);
var k_24326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24236_24325,(0),null);
var v_24327__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24236_24325,(1),null);
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_24326,v_24327__$1);


var G__24328 = seq__24226_24321;
var G__24329 = chunk__24227_24322;
var G__24330 = count__24228_24323;
var G__24331 = (i__24229_24324 + (1));
seq__24226_24321 = G__24328;
chunk__24227_24322 = G__24329;
count__24228_24323 = G__24330;
i__24229_24324 = G__24331;
continue;
} else {
var temp__5804__auto___24332 = cljs.core.seq(seq__24226_24321);
if(temp__5804__auto___24332){
var seq__24226_24333__$1 = temp__5804__auto___24332;
if(cljs.core.chunked_seq_QMARK_(seq__24226_24333__$1)){
var c__5568__auto___24334 = cljs.core.chunk_first(seq__24226_24333__$1);
var G__24335 = cljs.core.chunk_rest(seq__24226_24333__$1);
var G__24336 = c__5568__auto___24334;
var G__24337 = cljs.core.count(c__5568__auto___24334);
var G__24338 = (0);
seq__24226_24321 = G__24335;
chunk__24227_24322 = G__24336;
count__24228_24323 = G__24337;
i__24229_24324 = G__24338;
continue;
} else {
var vec__24239_24340 = cljs.core.first(seq__24226_24333__$1);
var k_24341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24239_24340,(0),null);
var v_24342__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24239_24340,(1),null);
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3(elem,k_24341,v_24342__$1);


var G__24343 = cljs.core.next(seq__24226_24333__$1);
var G__24344 = null;
var G__24345 = (0);
var G__24346 = (0);
seq__24226_24321 = G__24343;
chunk__24227_24322 = G__24344;
count__24228_24323 = G__24345;
i__24229_24324 = G__24346;
continue;
}
} else {
}
}
break;
}
} else {
if(crate.binding.binding_QMARK_(v)){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));

crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,crate.binding.value(v));
} else {
}
}
}

return elem;
}));

(crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var v__$1 = ((crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
return goog.style.setStyle(elem,cljs.core.name(k),v__$1);
}));

(crate.compiler.dom_style.cljs$lang$maxFixedArity = 3);

crate.compiler.dom_attr = (function crate$compiler$dom_attr(var_args){
var G__24243 = arguments.length;
switch (G__24243) {
case 2:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if((!(cljs.core.map_QMARK_(attrs)))){
return elem.getAttribute(cljs.core.name(attrs));
} else {
var seq__24244_24348 = cljs.core.seq(attrs);
var chunk__24245_24349 = null;
var count__24246_24350 = (0);
var i__24247_24351 = (0);
while(true){
if((i__24247_24351 < count__24246_24350)){
var vec__24254_24352 = chunk__24245_24349.cljs$core$IIndexed$_nth$arity$2(null,i__24247_24351);
var k_24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24254_24352,(0),null);
var v_24354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24254_24352,(1),null);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_24353,v_24354);


var G__24355 = seq__24244_24348;
var G__24356 = chunk__24245_24349;
var G__24357 = count__24246_24350;
var G__24358 = (i__24247_24351 + (1));
seq__24244_24348 = G__24355;
chunk__24245_24349 = G__24356;
count__24246_24350 = G__24357;
i__24247_24351 = G__24358;
continue;
} else {
var temp__5804__auto___24359 = cljs.core.seq(seq__24244_24348);
if(temp__5804__auto___24359){
var seq__24244_24360__$1 = temp__5804__auto___24359;
if(cljs.core.chunked_seq_QMARK_(seq__24244_24360__$1)){
var c__5568__auto___24362 = cljs.core.chunk_first(seq__24244_24360__$1);
var G__24363 = cljs.core.chunk_rest(seq__24244_24360__$1);
var G__24364 = c__5568__auto___24362;
var G__24365 = cljs.core.count(c__5568__auto___24362);
var G__24366 = (0);
seq__24244_24348 = G__24363;
chunk__24245_24349 = G__24364;
count__24246_24350 = G__24365;
i__24247_24351 = G__24366;
continue;
} else {
var vec__24257_24367 = cljs.core.first(seq__24244_24360__$1);
var k_24368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24257_24367,(0),null);
var v_24369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24257_24367,(1),null);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3(elem,k_24368,v_24369);


var G__24370 = cljs.core.next(seq__24244_24360__$1);
var G__24371 = null;
var G__24372 = (0);
var G__24373 = (0);
seq__24244_24348 = G__24370;
chunk__24245_24349 = G__24371;
count__24246_24350 = G__24372;
i__24247_24351 = G__24373;
continue;
}
} else {
}
}
break;
}

return elem;
}
} else {
return null;
}
}));

(crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"style","style",-496642736))){
crate.compiler.dom_style.cljs$core$IFn$_invoke$arity$2(elem,v);
} else {
var v_24374__$1 = ((crate.binding.binding_QMARK_(v))?(function (){
crate.compiler.capture_binding(new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

return crate.binding.value(v);
})()
:v);
elem.setAttribute(cljs.core.name(k),v_24374__$1);
}

return elem;
}));

(crate.compiler.dom_attr.cljs$lang$maxFixedArity = 3);

/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function crate$compiler$normalize_map_attrs(map_attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24260){
var vec__24261 = p__24260;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24261,(1),null);
if(v === true){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name(n)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
crate.compiler.normalize_element = (function crate$compiler$normalize_element(p__24265){
var vec__24266 = p__24265;
var seq__24267 = cljs.core.seq(vec__24266);
var first__24268 = cljs.core.first(seq__24267);
var seq__24267__$1 = cljs.core.next(seq__24267);
var tag = first__24268;
var content = seq__24267__$1;
if((!((((tag instanceof cljs.core.Keyword)) || ((((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))))))){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid tag name."].join('');
} else {
}

var vec__24269 = cljs.core.re_matches(crate.compiler.re_tag,cljs.core.name(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(3),null);
var vec__24272 = (function (){var vec__24275 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(tag__$1,/:/);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24275,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24275,(1),null);
var ns_xmlns = (function (){var G__24278 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(nsp);
return (crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1 ? crate.compiler.xmlns.cljs$core$IFn$_invoke$arity$1(G__24278) : crate.compiler.xmlns.call(null,G__24278));
})();
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5045__auto__ = ns_xmlns;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24272,(0),null);
var tag__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24272,(1),null);
var tag_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24264_SHARP_){
return (!((cljs.core.second(p1__24264_SHARP_) == null)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,crate.compiler.normalize_map_attrs(map_attrs)], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function crate$compiler$parse_content(elem,content){
var attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(attrs)){
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

return cljs.core.rest(content);
} else {
return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){
return document.createElementNS(nsp,tag);
}):(function (_,tag){
return document.createElement(tag);
}));
crate.compiler.elem_factory = (function crate$compiler$elem_factory(tag_def){
var bindings_orig_val__24279 = crate.compiler.bindings;
var bindings_temp_val__24280 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
(crate.compiler.bindings = bindings_temp_val__24280);

try{var vec__24281 = crate.compiler.normalize_element(tag_def);
var nsp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24281,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24281,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24281,(2),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24281,(3),null);
var elem = crate.compiler.create_elem(nsp,tag);
crate.compiler.dom_attr.cljs$core$IFn$_invoke$arity$2(elem,attrs);

crate.compiler.as_content(elem,content);

crate.compiler.handle_bindings(cljs.core.deref(crate.compiler.bindings),elem);

return elem;
}finally {(crate.compiler.bindings = bindings_orig_val__24279);
}});
/**
 * Add an optional attribute argument to a function that returns a vector tag.
 */
crate.compiler.add_optional_attrs = (function crate$compiler$add_optional_attrs(func){
return (function() { 
var G__24377__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__24284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__24285 = cljs.core.seq(vec__24284);
var first__24286 = cljs.core.first(seq__24285);
var seq__24285__$1 = cljs.core.next(seq__24285);
var tag = first__24286;
var body = seq__24285__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24379__i = 0, G__24379__a = new Array(arguments.length -  0);
while (G__24379__i < G__24379__a.length) {G__24379__a[G__24379__i] = arguments[G__24379__i + 0]; ++G__24379__i;}
  args = new cljs.core.IndexedSeq(G__24379__a,0,null);
} 
return G__24377__delegate.call(this,args);};
G__24377.cljs$lang$maxFixedArity = 0;
G__24377.cljs$lang$applyTo = (function (arglist__24380){
var args = cljs.core.seq(arglist__24380);
return G__24377__delegate(args);
});
G__24377.cljs$core$IFn$_invoke$arity$variadic = G__24377__delegate;
return G__24377;
})()
;
});

//# sourceMappingURL=crate.compiler.js.map
