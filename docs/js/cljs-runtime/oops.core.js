goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__22651 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__22651)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__22651)){
var G__22653 = (console["error"]);
var G__22654 = msg;
var G__22655 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__22652 = oops.state.get_console_reporter();
return (fexpr__22652.cljs$core$IFn$_invoke$arity$3 ? fexpr__22652.cljs$core$IFn$_invoke$arity$3(G__22653,G__22654,G__22655) : fexpr__22652.call(null,G__22653,G__22654,G__22655));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22651)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22651)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__22656 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__22656)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__22656)){
var G__22658 = (console["warn"]);
var G__22659 = msg;
var G__22660 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__22657 = oops.state.get_console_reporter();
return (fexpr__22657.cljs$core$IFn$_invoke$arity$3 ? fexpr__22657.cljs$core$IFn$_invoke$arity$3(G__22658,G__22659,G__22660) : fexpr__22657.call(null,G__22658,G__22659,G__22660));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22656)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22656)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22733 = arguments.length;
var i__5770__auto___22734 = (0);
while(true){
if((i__5770__auto___22734 < len__5769__auto___22733)){
args__5775__auto__.push((arguments[i__5770__auto___22734]));

var G__22735 = (i__5770__auto___22734 + (1));
i__5770__auto___22734 = G__22735;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__22663){
var vec__22664 = p__22663;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22664,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__22667_22736 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__22667_22736)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__22667_22736)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22667_22736)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22667_22736)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22667_22736)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq22661){
var G__22662 = cljs.core.first(seq22661);
var seq22661__$1 = cljs.core.next(seq22661);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22662,seq22661__$1);
}));

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__5043__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(oops.core.goog$module$goog$object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)):true):true);
if(cljs.core.truth_(and__5043__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5806__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5806__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
} else {
return true;

}
}
} else {
var descriptor_22668 = temp__5806__auto__;
var temp__5806__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_22668);
if((temp__5806__auto____$1 == null)){
return true;
} else {
var reason_22669 = temp__5806__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_22669,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));
}
}
} else {
return true;
}
} else {
return and__5043__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_22671 = oops.config.get_child_factory();
var child_factory_22671__$1 = (function (){var G__22672 = child_factory_22671;
var G__22672__$1 = (((G__22672 instanceof cljs.core.Keyword))?G__22672.fqn:null);
switch (G__22672__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_22671;

}
})();

var child_obj_22670 = (child_factory_22671__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_22671__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_22671__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_22670);
} else {
}

return child_obj_22670;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_22675 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_22675);

return selector_path_22675;
} else {
var selector_path_22676 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_22676);

return selector_path_22676;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5808__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5808__auto__ == null)){
return null;
} else {
var issue_22677 = temp__5808__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_22677);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_22686 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22686,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_22679 = (function (){var path_22678 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_22678,(0));

return path_22678;
})();
var len_22680 = path_22679.length;
var i_22681 = (0);
var obj_22682 = obj;
while(true){
if((i_22681 < len_22680)){
var mode_22683 = (path_22679[i_22681]);
var key_22684 = (path_22679[(i_22681 + (1))]);
var next_obj_22685 = oops.core.get_key_dynamically(obj_22682,key_22684,mode_22683);
var G__22687 = mode_22683;
switch (G__22687) {
case (0):
var G__22739 = (i_22681 + (2));
var G__22740 = next_obj_22685;
i_22681 = G__22739;
obj_22682 = G__22740;
continue;

break;
case (1):
if((!((next_obj_22685 == null)))){
var G__22741 = (i_22681 + (2));
var G__22742 = next_obj_22685;
i_22681 = G__22741;
obj_22682 = G__22742;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_22685 == null)))){
var G__22743 = (i_22681 + (2));
var G__22744 = next_obj_22685;
i_22681 = G__22743;
obj_22682 = G__22744;
continue;
} else {
var G__22745 = (i_22681 + (2));
var G__22746 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22682,key_22684);
i_22681 = G__22745;
obj_22682 = G__22746;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22687)].join('')));

}
} else {
return obj_22682;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_22713 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22713,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_22689 = (function (){var path_22688 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_22688,(0));

return path_22688;
})();
var len_22690 = path_22689.length;
if((len_22690 < (4))){
return [obj,(function (){var path_22692 = path_22689;
var len_22693 = path_22692.length;
var i_22694 = (0);
var obj_22695 = obj;
while(true){
if((i_22694 < len_22693)){
var mode_22696 = (path_22692[i_22694]);
var key_22697 = (path_22692[(i_22694 + (1))]);
var next_obj_22698 = oops.core.get_key_dynamically(obj_22695,key_22697,mode_22696);
var G__22714 = mode_22696;
switch (G__22714) {
case (0):
var G__22748 = (i_22694 + (2));
var G__22749 = next_obj_22698;
i_22694 = G__22748;
obj_22695 = G__22749;
continue;

break;
case (1):
if((!((next_obj_22698 == null)))){
var G__22750 = (i_22694 + (2));
var G__22751 = next_obj_22698;
i_22694 = G__22750;
obj_22695 = G__22751;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_22698 == null)))){
var G__22752 = (i_22694 + (2));
var G__22753 = next_obj_22698;
i_22694 = G__22752;
obj_22695 = G__22753;
continue;
} else {
var G__22754 = (i_22694 + (2));
var G__22755 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22695,key_22697);
i_22694 = G__22754;
obj_22695 = G__22755;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22714)].join('')));

}
} else {
return obj_22695;
}
break;
}
})()];
} else {
var target_obj_22691 = (function (){var path_22699 = path_22689.slice((0),(len_22690 - (2)));
var len_22700 = path_22699.length;
var i_22701 = (0);
var obj_22702 = obj;
while(true){
if((i_22701 < len_22700)){
var mode_22703 = (path_22699[i_22701]);
var key_22704 = (path_22699[(i_22701 + (1))]);
var next_obj_22705 = oops.core.get_key_dynamically(obj_22702,key_22704,mode_22703);
var G__22715 = mode_22703;
switch (G__22715) {
case (0):
var G__22757 = (i_22701 + (2));
var G__22758 = next_obj_22705;
i_22701 = G__22757;
obj_22702 = G__22758;
continue;

break;
case (1):
if((!((next_obj_22705 == null)))){
var G__22759 = (i_22701 + (2));
var G__22760 = next_obj_22705;
i_22701 = G__22759;
obj_22702 = G__22760;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_22705 == null)))){
var G__22761 = (i_22701 + (2));
var G__22762 = next_obj_22705;
i_22701 = G__22761;
obj_22702 = G__22762;
continue;
} else {
var G__22763 = (i_22701 + (2));
var G__22764 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22702,key_22704);
i_22701 = G__22763;
obj_22702 = G__22764;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22715)].join('')));

}
} else {
return obj_22702;
}
break;
}
})();
return [target_obj_22691,(function (){var path_22706 = [(path_22689[(len_22690 - (2))]),(path_22689[(len_22690 - (1))])];
var len_22707 = path_22706.length;
var i_22708 = (0);
var obj_22709 = target_obj_22691;
while(true){
if((i_22708 < len_22707)){
var mode_22710 = (path_22706[i_22708]);
var key_22711 = (path_22706[(i_22708 + (1))]);
var next_obj_22712 = oops.core.get_key_dynamically(obj_22709,key_22711,mode_22710);
var G__22716 = mode_22710;
switch (G__22716) {
case (0):
var G__22766 = (i_22708 + (2));
var G__22767 = next_obj_22712;
i_22708 = G__22766;
obj_22709 = G__22767;
continue;

break;
case (1):
if((!((next_obj_22712 == null)))){
var G__22768 = (i_22708 + (2));
var G__22769 = next_obj_22712;
i_22708 = G__22768;
obj_22709 = G__22769;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_22712 == null)))){
var G__22770 = (i_22708 + (2));
var G__22771 = next_obj_22712;
i_22708 = G__22770;
obj_22709 = G__22771;
continue;
} else {
var G__22772 = (i_22708 + (2));
var G__22773 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22709,key_22711);
i_22708 = G__22772;
obj_22709 = G__22773;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22716)].join('')));

}
} else {
return obj_22709;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_22731 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22731,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_22718 = (function (){var path_22717 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_22717,(1));

return path_22717;
})();
var len_22721 = path_22718.length;
var parent_obj_path_22722 = path_22718.slice((0),(len_22721 - (2)));
var key_22719 = (path_22718[(len_22721 - (1))]);
var mode_22720 = (path_22718[(len_22721 - (2))]);
var parent_obj_22723 = (function (){var path_22724 = parent_obj_path_22722;
var len_22725 = path_22724.length;
var i_22726 = (0);
var obj_22727 = obj;
while(true){
if((i_22726 < len_22725)){
var mode_22728 = (path_22724[i_22726]);
var key_22729 = (path_22724[(i_22726 + (1))]);
var next_obj_22730 = oops.core.get_key_dynamically(obj_22727,key_22729,mode_22728);
var G__22732 = mode_22728;
switch (G__22732) {
case (0):
var G__22775 = (i_22726 + (2));
var G__22776 = next_obj_22730;
i_22726 = G__22775;
obj_22727 = G__22776;
continue;

break;
case (1):
if((!((next_obj_22730 == null)))){
var G__22777 = (i_22726 + (2));
var G__22778 = next_obj_22730;
i_22726 = G__22777;
obj_22727 = G__22778;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_22730 == null)))){
var G__22779 = (i_22726 + (2));
var G__22780 = next_obj_22730;
i_22726 = G__22779;
obj_22727 = G__22780;
continue;
} else {
var G__22781 = (i_22726 + (2));
var G__22782 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22727,key_22729);
i_22726 = G__22781;
obj_22727 = G__22782;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22732)].join('')));

}
} else {
return obj_22727;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_22723,key_22719,val,mode_22720);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
