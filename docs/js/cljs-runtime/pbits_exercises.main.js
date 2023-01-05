goog.provide('pbits_exercises.main');
pbits_exercises.main.electron_remote = require("@electron/remote");
pbits_exercises.main.dialog = (function (){var target_obj_33853 = pbits_exercises.main.electron_remote;
var _STAR_runtime_state_STAR__orig_val__33855 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33856 = oops.state.prepare_state(target_obj_33853,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33856);

try{var next_obj_33854 = ((oops.core.validate_object_access_dynamically(target_obj_33853,(0),"dialog",true,true,false))?(target_obj_33853["dialog"]):null);
return next_obj_33854;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33855);
}})();
pbits_exercises.main.fs = (function (){var target_obj_33857 = require("fs");
var _STAR_runtime_state_STAR__orig_val__33859 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33860 = oops.state.prepare_state(target_obj_33857,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33860);

try{var next_obj_33858 = ((oops.core.validate_object_access_dynamically(target_obj_33857,(0),"promises",true,true,false))?(target_obj_33857["promises"]):null);
return next_obj_33858;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33859);
}})();
pbits_exercises.main.path = require("path");
pbits_exercises.main.app = (function (){var target_obj_33861 = pbits_exercises.main.electron_remote;
var _STAR_runtime_state_STAR__orig_val__33863 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33864 = oops.state.prepare_state(target_obj_33861,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33864);

try{var next_obj_33862 = ((oops.core.validate_object_access_dynamically(target_obj_33861,(0),"app",true,true,false))?(target_obj_33861["app"]):null);
return next_obj_33862;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33863);
}})();
cljs.core.enable_console_print_BANG_();
pbits_exercises.main.join_path = (function pbits_exercises$main$join_path(parent,child){
var target_obj_33865 = pbits_exercises.main.path;
var _STAR_runtime_state_STAR__orig_val__33869 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33870 = oops.state.prepare_state(target_obj_33865,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33870);

try{var call_info_33867 = [target_obj_33865,(function (){var next_obj_33868 = ((oops.core.validate_object_access_dynamically(target_obj_33865,(0),"resolve",true,true,false))?(target_obj_33865["resolve"]):null);
return next_obj_33868;
})()];
var fn_33866 = (call_info_33867[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33866,oops.state.get_last_access_modifier())){
if((!((fn_33866 == null)))){
return fn_33866.call((call_info_33867[(0)]),parent,child);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33869);
}});
pbits_exercises.main.EXERCISES_PATH = pbits_exercises.main.join_path((function (){var target_obj_33871 = pbits_exercises.main.app;
var _STAR_runtime_state_STAR__orig_val__33875 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33876 = oops.state.prepare_state(target_obj_33871,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33876);

try{var call_info_33873 = [target_obj_33871,(function (){var next_obj_33874 = ((oops.core.validate_object_access_dynamically(target_obj_33871,(0),"getAppPath",true,true,false))?(target_obj_33871["getAppPath"]):null);
return next_obj_33874;
})()];
var fn_33872 = (call_info_33873[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33872,oops.state.get_last_access_modifier())){
if((!((fn_33872 == null)))){
return fn_33872.call((call_info_33873[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33875);
}})(),"public/main/exercises");
pbits_exercises.main.SOLUTIONS_PATH = pbits_exercises.main.join_path((function (){var target_obj_33877 = pbits_exercises.main.app;
var _STAR_runtime_state_STAR__orig_val__33881 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33882 = oops.state.prepare_state(target_obj_33877,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33882);

try{var call_info_33879 = [target_obj_33877,(function (){var next_obj_33880 = ((oops.core.validate_object_access_dynamically(target_obj_33877,(0),"getAppPath",true,true,false))?(target_obj_33877["getAppPath"]):null);
return next_obj_33880;
})()];
var fn_33878 = (call_info_33879[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33878,oops.state.get_last_access_modifier())){
if((!((fn_33878 == null)))){
return fn_33878.call((call_info_33879[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33881);
}})(),"solutions");
if((typeof pbits_exercises !== 'undefined') && (typeof pbits_exercises.main !== 'undefined') && (typeof pbits_exercises.main.state !== 'undefined')){
} else {
pbits_exercises.main.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
pbits_exercises.main.get_element_by_id = (function pbits_exercises$main$get_element_by_id(id){
return document.getElementById(id);
});
pbits_exercises.main.show_open_dialog_BANG_ = (function pbits_exercises$main$show_open_dialog_BANG_(options){
return cljs.core.async.interop.p__GT_c((function (){var target_obj_33883 = pbits_exercises.main.dialog;
var _STAR_runtime_state_STAR__orig_val__33887 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33888 = oops.state.prepare_state(target_obj_33883,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33888);

try{var call_info_33885 = [target_obj_33883,(function (){var next_obj_33886 = ((oops.core.validate_object_access_dynamically(target_obj_33883,(0),"showOpenDialog",true,true,false))?(target_obj_33883["showOpenDialog"]):null);
return next_obj_33886;
})()];
var fn_33884 = (call_info_33885[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33884,oops.state.get_last_access_modifier())){
if((!((fn_33884 == null)))){
return fn_33884.call((call_info_33885[(0)]),cljs.core.clj__GT_js(options));
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33887);
}})());
});
pbits_exercises.main.write_file_BANG_ = (function pbits_exercises$main$write_file_BANG_(file_path,data){
return cljs.core.async.interop.p__GT_c((function (){var target_obj_33889 = pbits_exercises.main.fs;
var _STAR_runtime_state_STAR__orig_val__33893 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33894 = oops.state.prepare_state(target_obj_33889,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33894);

try{var call_info_33891 = [target_obj_33889,(function (){var next_obj_33892 = ((oops.core.validate_object_access_dynamically(target_obj_33889,(0),"writeFile",true,true,false))?(target_obj_33889["writeFile"]):null);
return next_obj_33892;
})()];
var fn_33890 = (call_info_33891[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33890,oops.state.get_last_access_modifier())){
if((!((fn_33890 == null)))){
return fn_33890.call((call_info_33891[(0)]),file_path,data);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33893);
}})());
});
pbits_exercises.main.read_file_BANG_ = (function pbits_exercises$main$read_file_BANG_(file_path){
return cljs.core.async.interop.p__GT_c((function (){var target_obj_33895 = pbits_exercises.main.fs;
var _STAR_runtime_state_STAR__orig_val__33899 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33900 = oops.state.prepare_state(target_obj_33895,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33900);

try{var call_info_33897 = [target_obj_33895,(function (){var next_obj_33898 = ((oops.core.validate_object_access_dynamically(target_obj_33895,(0),"readFile",true,true,false))?(target_obj_33895["readFile"]):null);
return next_obj_33898;
})()];
var fn_33896 = (call_info_33897[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33896,oops.state.get_last_access_modifier())){
if((!((fn_33896 == null)))){
return fn_33896.call((call_info_33897[(0)]),file_path,"utf-8");
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33899);
}})());
});
pbits_exercises.main.try_read_file_BANG_ = (function pbits_exercises$main$try_read_file_BANG_(file_path){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_33915){
var state_val_33916 = (state_33915[(1)]);
if((state_val_33916 === (1))){
var state_33915__$1 = state_33915;
var statearr_33917_35964 = state_33915__$1;
(statearr_33917_35964[(2)] = null);

(statearr_33917_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (2))){
var _ = (function (){var statearr_33918 = state_33915;
(statearr_33918[(4)] = cljs.core.cons((5),(state_33915[(4)])));

return statearr_33918;
})();
var inst_33907 = pbits_exercises.main.read_file_BANG_(file_path);
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33915__$1,(6),inst_33907);
} else {
if((state_val_33916 === (3))){
var inst_33913 = (state_33915[(2)]);
var state_33915__$1 = state_33915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33915__$1,inst_33913);
} else {
if((state_val_33916 === (4))){
var inst_33901 = (state_33915[(2)]);
var state_33915__$1 = (function (){var statearr_33920 = state_33915;
(statearr_33920[(7)] = inst_33901);

return statearr_33920;
})();
var statearr_33921_35965 = state_33915__$1;
(statearr_33921_35965[(2)] = null);

(statearr_33921_35965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (5))){
var _ = (function (){var statearr_33922 = state_33915;
(statearr_33922[(4)] = cljs.core.rest((state_33915[(4)])));

return statearr_33922;
})();
var state_33915__$1 = state_33915;
var ex33919 = (state_33915__$1[(2)]);
var statearr_33923_35966 = state_33915__$1;
(statearr_33923_35966[(5)] = ex33919);


var statearr_33924_35967 = state_33915__$1;
(statearr_33924_35967[(1)] = (4));

(statearr_33924_35967[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33916 === (6))){
var inst_33909 = (state_33915[(2)]);
var inst_33910 = utils.async.throw_err(inst_33909);
var _ = (function (){var statearr_33925 = state_33915;
(statearr_33925[(4)] = cljs.core.rest((state_33915[(4)])));

return statearr_33925;
})();
var state_33915__$1 = state_33915;
var statearr_33926_35968 = state_33915__$1;
(statearr_33926_35968[(2)] = inst_33910);

(statearr_33926_35968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_33927 = [null,null,null,null,null,null,null,null];
(statearr_33927[(0)] = pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto__);

(statearr_33927[(1)] = (1));

return statearr_33927;
});
var pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto____1 = (function (state_33915){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_33915);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e33928){var ex__14606__auto__ = e33928;
var statearr_33929_35969 = state_33915;
(statearr_33929_35969[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_33915[(4)]))){
var statearr_33930_35970 = state_33915;
(statearr_33930_35970[(1)] = cljs.core.first((state_33915[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35971 = state_33915;
state_33915 = G__35971;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto__ = function(state_33915){
switch(arguments.length){
case 0:
return pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto____1.call(this,state_33915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$try_read_file_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_33931 = f__14688__auto__();
(statearr_33931[(6)] = c__14687__auto__);

return statearr_33931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.copy_file_BANG_ = (function pbits_exercises$main$copy_file_BANG_(src_path,dest_path){
return cljs.core.async.interop.p__GT_c((function (){var target_obj_33932 = pbits_exercises.main.fs;
var _STAR_runtime_state_STAR__orig_val__33936 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33937 = oops.state.prepare_state(target_obj_33932,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33937);

try{var call_info_33934 = [target_obj_33932,(function (){var next_obj_33935 = ((oops.core.validate_object_access_dynamically(target_obj_33932,(0),"copyFile",true,true,false))?(target_obj_33932["copyFile"]):null);
return next_obj_33935;
})()];
var fn_33933 = (call_info_33934[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33933,oops.state.get_last_access_modifier())){
if((!((fn_33933 == null)))){
return fn_33933.call((call_info_33934[(0)]),src_path,dest_path);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33936);
}})());
});
pbits_exercises.main.read_dir_BANG_ = (function pbits_exercises$main$read_dir_BANG_(dir_path){
return cljs.core.async.interop.p__GT_c((function (){var target_obj_33938 = pbits_exercises.main.fs;
var _STAR_runtime_state_STAR__orig_val__33942 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33943 = oops.state.prepare_state(target_obj_33938,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33943);

try{var call_info_33940 = [target_obj_33938,(function (){var next_obj_33941 = ((oops.core.validate_object_access_dynamically(target_obj_33938,(0),"readdir",true,true,false))?(target_obj_33938["readdir"]):null);
return next_obj_33941;
})()];
var fn_33939 = (call_info_33940[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33939,oops.state.get_last_access_modifier())){
if((!((fn_33939 == null)))){
return fn_33939.call((call_info_33940[(0)]),dir_path);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33942);
}})());
});
pbits_exercises.main.make_dir_BANG_ = (function pbits_exercises$main$make_dir_BANG_(dir_path){
return cljs.core.async.interop.p__GT_c((function (){var target_obj_33944 = pbits_exercises.main.fs;
var _STAR_runtime_state_STAR__orig_val__33948 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33949 = oops.state.prepare_state(target_obj_33944,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33949);

try{var call_info_33946 = [target_obj_33944,(function (){var next_obj_33947 = ((oops.core.validate_object_access_dynamically(target_obj_33944,(0),"mkdir",true,true,false))?(target_obj_33944["mkdir"]):null);
return next_obj_33947;
})()];
var fn_33945 = (call_info_33946[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33945,oops.state.get_last_access_modifier())){
if((!((fn_33945 == null)))){
return fn_33945.call((call_info_33946[(0)]),dir_path);
} else {
return null;
}
} else {
return null;
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33948);
}})());
});
pbits_exercises.main.try_make_dir_BANG_ = (function pbits_exercises$main$try_make_dir_BANG_(dir_path){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_33964){
var state_val_33965 = (state_33964[(1)]);
if((state_val_33965 === (1))){
var state_33964__$1 = state_33964;
var statearr_33966_35972 = state_33964__$1;
(statearr_33966_35972[(2)] = null);

(statearr_33966_35972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (2))){
var _ = (function (){var statearr_33967 = state_33964;
(statearr_33967[(4)] = cljs.core.cons((5),(state_33964[(4)])));

return statearr_33967;
})();
var inst_33956 = pbits_exercises.main.make_dir_BANG_(dir_path);
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33964__$1,(6),inst_33956);
} else {
if((state_val_33965 === (3))){
var inst_33962 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33964__$1,inst_33962);
} else {
if((state_val_33965 === (4))){
var inst_33950 = (state_33964[(2)]);
var state_33964__$1 = (function (){var statearr_33969 = state_33964;
(statearr_33969[(7)] = inst_33950);

return statearr_33969;
})();
var statearr_33970_35973 = state_33964__$1;
(statearr_33970_35973[(2)] = null);

(statearr_33970_35973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (5))){
var _ = (function (){var statearr_33971 = state_33964;
(statearr_33971[(4)] = cljs.core.rest((state_33964[(4)])));

return statearr_33971;
})();
var state_33964__$1 = state_33964;
var ex33968 = (state_33964__$1[(2)]);
var statearr_33972_35974 = state_33964__$1;
(statearr_33972_35974[(5)] = ex33968);


var statearr_33973_35975 = state_33964__$1;
(statearr_33973_35975[(1)] = (4));

(statearr_33973_35975[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (6))){
var inst_33958 = (state_33964[(2)]);
var inst_33959 = utils.async.throw_err(inst_33958);
var _ = (function (){var statearr_33974 = state_33964;
(statearr_33974[(4)] = cljs.core.rest((state_33964[(4)])));

return statearr_33974;
})();
var state_33964__$1 = state_33964;
var statearr_33975_35976 = state_33964__$1;
(statearr_33975_35976[(2)] = inst_33959);

(statearr_33975_35976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_33976 = [null,null,null,null,null,null,null,null];
(statearr_33976[(0)] = pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto__);

(statearr_33976[(1)] = (1));

return statearr_33976;
});
var pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto____1 = (function (state_33964){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_33964);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e33977){var ex__14606__auto__ = e33977;
var statearr_33978_35977 = state_33964;
(statearr_33978_35977[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_33964[(4)]))){
var statearr_33979_35978 = state_33964;
(statearr_33979_35978[(1)] = cljs.core.first((state_33964[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35979 = state_33964;
state_33964 = G__35979;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto__ = function(state_33964){
switch(arguments.length){
case 0:
return pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto____1.call(this,state_33964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$try_make_dir_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_33980 = f__14688__auto__();
(statearr_33980[(6)] = c__14687__auto__);

return statearr_33980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.show_overlay_BANG_ = (function pbits_exercises$main$show_overlay_BANG_(){
var G__33981 = pbits_exercises.main.get_element_by_id("overlay");
var target_obj_33982_35980 = G__33981;
var _STAR_runtime_state_STAR__orig_val__33988_35981 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33989_35982 = oops.state.prepare_state(target_obj_33982_35980,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33989_35982);

try{var call_info_33984_35983 = (function (){var target_obj_33985 = (function (){var next_obj_33986 = ((oops.core.validate_object_access_dynamically(target_obj_33982_35980,(0),"classList",true,true,false))?(target_obj_33982_35980["classList"]):null);
return next_obj_33986;
})();
return [target_obj_33985,(function (){var next_obj_33987 = ((oops.core.validate_object_access_dynamically(target_obj_33985,(0),"remove",true,true,false))?(target_obj_33985["remove"]):null);
return next_obj_33987;
})()];
})();
var fn_33983_35984 = (call_info_33984_35983[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33983_35984,oops.state.get_last_access_modifier())){
if((!((fn_33983_35984 == null)))){
fn_33983_35984.call((call_info_33984_35983[(0)]),"hidden");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33988_35981);
}
var target_obj_33990_35985 = G__33981;
var _STAR_runtime_state_STAR__orig_val__33996_35986 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__33997_35987 = oops.state.prepare_state(target_obj_33990_35985,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__33997_35987);

try{var call_info_33992_35988 = (function (){var target_obj_33993 = (function (){var next_obj_33994 = ((oops.core.validate_object_access_dynamically(target_obj_33990_35985,(0),"classList",true,true,false))?(target_obj_33990_35985["classList"]):null);
return next_obj_33994;
})();
return [target_obj_33993,(function (){var next_obj_33995 = ((oops.core.validate_object_access_dynamically(target_obj_33993,(0),"add",true,true,false))?(target_obj_33993["add"]):null);
return next_obj_33995;
})()];
})();
var fn_33991_35989 = (call_info_33992_35988[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_33991_35989,oops.state.get_last_access_modifier())){
if((!((fn_33991_35989 == null)))){
fn_33991_35989.call((call_info_33992_35988[(0)]),"visible");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__33996_35986);
}
return G__33981;
});
pbits_exercises.main.hide_overlay_BANG_ = (function pbits_exercises$main$hide_overlay_BANG_(){
var G__33998 = pbits_exercises.main.get_element_by_id("overlay");
var target_obj_33999_35990 = G__33998;
var _STAR_runtime_state_STAR__orig_val__34005_35991 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34006_35992 = oops.state.prepare_state(target_obj_33999_35990,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34006_35992);

try{var call_info_34001_35993 = (function (){var target_obj_34002 = (function (){var next_obj_34003 = ((oops.core.validate_object_access_dynamically(target_obj_33999_35990,(0),"classList",true,true,false))?(target_obj_33999_35990["classList"]):null);
return next_obj_34003;
})();
return [target_obj_34002,(function (){var next_obj_34004 = ((oops.core.validate_object_access_dynamically(target_obj_34002,(0),"remove",true,true,false))?(target_obj_34002["remove"]):null);
return next_obj_34004;
})()];
})();
var fn_34000_35994 = (call_info_34001_35993[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34000_35994,oops.state.get_last_access_modifier())){
if((!((fn_34000_35994 == null)))){
fn_34000_35994.call((call_info_34001_35993[(0)]),"visible");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34005_35991);
}
var target_obj_34007_35995 = G__33998;
var _STAR_runtime_state_STAR__orig_val__34013_35996 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34014_35997 = oops.state.prepare_state(target_obj_34007_35995,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34014_35997);

try{var call_info_34009_35998 = (function (){var target_obj_34010 = (function (){var next_obj_34011 = ((oops.core.validate_object_access_dynamically(target_obj_34007_35995,(0),"classList",true,true,false))?(target_obj_34007_35995["classList"]):null);
return next_obj_34011;
})();
return [target_obj_34010,(function (){var next_obj_34012 = ((oops.core.validate_object_access_dynamically(target_obj_34010,(0),"add",true,true,false))?(target_obj_34010["add"]):null);
return next_obj_34012;
})()];
})();
var fn_34008_35999 = (call_info_34009_35998[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_34008_35999,oops.state.get_last_access_modifier())){
if((!((fn_34008_35999 == null)))){
fn_34008_35999.call((call_info_34009_35998[(0)]),"hidden");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34013_35996);
}
return G__33998;
});
pbits_exercises.main.read_solutions_file_BANG_ = (function pbits_exercises$main$read_solutions_file_BANG_(p__34015){
var map__34016 = p__34015;
var map__34016__$1 = cljs.core.__destructure_map(map__34016);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_34043){
var state_val_34044 = (state_34043[(1)]);
if((state_val_34044 === (7))){
var inst_34032 = (state_34043[(7)]);
var inst_34034 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(inst_34032);
var state_34043__$1 = state_34043;
var statearr_34045_36000 = state_34043__$1;
(statearr_34045_36000[(2)] = inst_34034);

(statearr_34045_36000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34044 === (1))){
var state_34043__$1 = state_34043;
var statearr_34046_36001 = state_34043__$1;
(statearr_34046_36001[(2)] = null);

(statearr_34046_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34044 === (4))){
var inst_34017 = (state_34043[(2)]);
var inst_34018 = [new cljs.core.Keyword(null,"attempts","attempts",1024246729)];
var inst_34019 = cljs.core.PersistentVector.EMPTY;
var inst_34020 = [inst_34019];
var inst_34021 = cljs.core.PersistentHashMap.fromArrays(inst_34018,inst_34020);
var state_34043__$1 = (function (){var statearr_34047 = state_34043;
(statearr_34047[(8)] = inst_34017);

return statearr_34047;
})();
var statearr_34048_36002 = state_34043__$1;
(statearr_34048_36002[(2)] = inst_34021);

(statearr_34048_36002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34044 === (6))){
var inst_34032 = (state_34043[(7)]);
var inst_34031 = (state_34043[(2)]);
var inst_34032__$1 = utils.async.throw_err(inst_34031);
var state_34043__$1 = (function (){var statearr_34049 = state_34043;
(statearr_34049[(7)] = inst_34032__$1);

return statearr_34049;
})();
if(cljs.core.truth_(inst_34032__$1)){
var statearr_34050_36003 = state_34043__$1;
(statearr_34050_36003[(1)] = (7));

} else {
var statearr_34051_36004 = state_34043__$1;
(statearr_34051_36004[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34044 === (3))){
var inst_34041 = (state_34043[(2)]);
var state_34043__$1 = state_34043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34043__$1,inst_34041);
} else {
if((state_val_34044 === (2))){
var _ = (function (){var statearr_34053 = state_34043;
(statearr_34053[(4)] = cljs.core.cons((5),(state_34043[(4)])));

return statearr_34053;
})();
var inst_34027 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".edn"].join('');
var inst_34028 = pbits_exercises.main.join_path(pbits_exercises.main.SOLUTIONS_PATH,inst_34027);
var inst_34029 = pbits_exercises.main.read_file_BANG_(inst_34028);
var state_34043__$1 = state_34043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34043__$1,(6),inst_34029);
} else {
if((state_val_34044 === (9))){
var inst_34038 = (state_34043[(2)]);
var _ = (function (){var statearr_34054 = state_34043;
(statearr_34054[(4)] = cljs.core.rest((state_34043[(4)])));

return statearr_34054;
})();
var state_34043__$1 = state_34043;
var statearr_34055_36005 = state_34043__$1;
(statearr_34055_36005[(2)] = inst_34038);

(statearr_34055_36005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34044 === (5))){
var _ = (function (){var statearr_34056 = state_34043;
(statearr_34056[(4)] = cljs.core.rest((state_34043[(4)])));

return statearr_34056;
})();
var state_34043__$1 = state_34043;
var ex34052 = (state_34043__$1[(2)]);
var statearr_34057_36006 = state_34043__$1;
(statearr_34057_36006[(5)] = ex34052);


var statearr_34058_36007 = state_34043__$1;
(statearr_34058_36007[(1)] = (4));

(statearr_34058_36007[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34044 === (8))){
var inst_34036 = (function(){throw "ERROR!"})();
var state_34043__$1 = state_34043;
var statearr_34059_36008 = state_34043__$1;
(statearr_34059_36008[(2)] = inst_34036);

(statearr_34059_36008[(1)] = (9));


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
}
}
});
return (function() {
var pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_34060 = [null,null,null,null,null,null,null,null,null];
(statearr_34060[(0)] = pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto__);

(statearr_34060[(1)] = (1));

return statearr_34060;
});
var pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto____1 = (function (state_34043){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_34043);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e34061){var ex__14606__auto__ = e34061;
var statearr_34062_36009 = state_34043;
(statearr_34062_36009[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_34043[(4)]))){
var statearr_34063_36010 = state_34043;
(statearr_34063_36010[(1)] = cljs.core.first((state_34043[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36011 = state_34043;
state_34043 = G__36011;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto__ = function(state_34043){
switch(arguments.length){
case 0:
return pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto____1.call(this,state_34043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$read_solutions_file_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_34064 = f__14688__auto__();
(statearr_34064[(6)] = c__14687__auto__);

return statearr_34064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.write_solutions_file_BANG_ = (function pbits_exercises$main$write_solutions_file_BANG_(p__34065,solutions){
var map__34066 = p__34065;
var map__34066__$1 = cljs.core.__destructure_map(map__34066);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34066__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_34093){
var state_val_34094 = (state_34093[(1)]);
if((state_val_34094 === (7))){
var inst_34076 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
var statearr_34095_36012 = state_34093__$1;
(statearr_34095_36012[(2)] = inst_34076);

(statearr_34095_36012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (1))){
var state_34093__$1 = state_34093;
var statearr_34096_36013 = state_34093__$1;
(statearr_34096_36013[(2)] = null);

(statearr_34096_36013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (4))){
var inst_34067 = (state_34093[(7)]);
var inst_34067__$1 = (state_34093[(2)]);
var inst_34068 = (inst_34067__$1 instanceof Error);
var state_34093__$1 = (function (){var statearr_34097 = state_34093;
(statearr_34097[(7)] = inst_34067__$1);

return statearr_34097;
})();
if(cljs.core.truth_(inst_34068)){
var statearr_34098_36014 = state_34093__$1;
(statearr_34098_36014[(1)] = (5));

} else {
var statearr_34099_36015 = state_34093__$1;
(statearr_34099_36015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (6))){
var inst_34067 = (state_34093[(7)]);
var inst_34073 = ({"cause":inst_34067});
var inst_34074 = (new Error("ERROR",inst_34073));
var state_34093__$1 = state_34093;
var statearr_34100_36016 = state_34093__$1;
(statearr_34100_36016[(2)] = inst_34074);

(statearr_34100_36016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (3))){
var inst_34091 = (state_34093[(2)]);
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34093__$1,inst_34091);
} else {
if((state_val_34094 === (2))){
var _ = (function (){var statearr_34101 = state_34093;
(statearr_34101[(4)] = cljs.core.cons((8),(state_34093[(4)])));

return statearr_34101;
})();
var inst_34082 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".edn"].join('');
var inst_34083 = pbits_exercises.main.join_path(pbits_exercises.main.SOLUTIONS_PATH,inst_34082);
var inst_34084 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([solutions], 0));
var inst_34085 = pbits_exercises.main.write_file_BANG_(inst_34083,inst_34084);
var state_34093__$1 = state_34093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34093__$1,(9),inst_34085);
} else {
if((state_val_34094 === (9))){
var inst_34087 = (state_34093[(2)]);
var inst_34088 = utils.async.throw_err(inst_34087);
var _ = (function (){var statearr_34103 = state_34093;
(statearr_34103[(4)] = cljs.core.rest((state_34093[(4)])));

return statearr_34103;
})();
var state_34093__$1 = state_34093;
var statearr_34104_36017 = state_34093__$1;
(statearr_34104_36017[(2)] = inst_34088);

(statearr_34104_36017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (5))){
var inst_34067 = (state_34093[(7)]);
var state_34093__$1 = state_34093;
var statearr_34105_36018 = state_34093__$1;
(statearr_34105_36018[(2)] = inst_34067);

(statearr_34105_36018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34094 === (8))){
var _ = (function (){var statearr_34106 = state_34093;
(statearr_34106[(4)] = cljs.core.rest((state_34093[(4)])));

return statearr_34106;
})();
var state_34093__$1 = state_34093;
var ex34102 = (state_34093__$1[(2)]);
var statearr_34107_36019 = state_34093__$1;
(statearr_34107_36019[(5)] = ex34102);


var statearr_34108_36020 = state_34093__$1;
(statearr_34108_36020[(1)] = (4));

(statearr_34108_36020[(5)] = null);



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
}
}
});
return (function() {
var pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_34109 = [null,null,null,null,null,null,null,null];
(statearr_34109[(0)] = pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto__);

(statearr_34109[(1)] = (1));

return statearr_34109;
});
var pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto____1 = (function (state_34093){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_34093);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e34110){var ex__14606__auto__ = e34110;
var statearr_34111_36021 = state_34093;
(statearr_34111_36021[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_34093[(4)]))){
var statearr_34112_36022 = state_34093;
(statearr_34112_36022[(1)] = cljs.core.first((state_34093[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36023 = state_34093;
state_34093 = G__36023;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto__ = function(state_34093){
switch(arguments.length){
case 0:
return pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto____1.call(this,state_34093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$write_solutions_file_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_34113 = f__14688__auto__();
(statearr_34113[(6)] = c__14687__auto__);

return statearr_34113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.validate_phb_BANG_ = (function pbits_exercises$main$validate_phb_BANG_(file_path){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_34138){
var state_val_34139 = (state_34138[(1)]);
if((state_val_34139 === (7))){
var inst_34129 = (state_34138[(7)]);
var state_34138__$1 = state_34138;
var statearr_34140_36024 = state_34138__$1;
(statearr_34140_36024[(2)] = inst_34129);

(statearr_34140_36024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (1))){
var state_34138__$1 = state_34138;
var statearr_34141_36025 = state_34138__$1;
(statearr_34141_36025[(2)] = null);

(statearr_34141_36025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (4))){
var inst_34114 = (state_34138[(2)]);
var state_34138__$1 = (function (){var statearr_34142 = state_34138;
(statearr_34142[(8)] = inst_34114);

return statearr_34142;
})();
var statearr_34143_36026 = state_34138__$1;
(statearr_34143_36026[(2)] = false);

(statearr_34143_36026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (6))){
var inst_34128 = (state_34138[(9)]);
var inst_34123 = (state_34138[(2)]);
var inst_34124 = utils.async.throw_err(inst_34123);
var inst_34125 = JSON.parse(inst_34124);
var inst_34126 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34125);
var inst_34127 = cljs.core.__destructure_map(inst_34126);
var inst_34128__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34127,"blockly");
var inst_34129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34127,"code");
var state_34138__$1 = (function (){var statearr_34144 = state_34138;
(statearr_34144[(9)] = inst_34128__$1);

(statearr_34144[(7)] = inst_34129);

return statearr_34144;
})();
if(cljs.core.truth_(inst_34128__$1)){
var statearr_34145_36027 = state_34138__$1;
(statearr_34145_36027[(1)] = (7));

} else {
var statearr_34146_36028 = state_34138__$1;
(statearr_34146_36028[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (3))){
var inst_34136 = (state_34138[(2)]);
var state_34138__$1 = state_34138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34138__$1,inst_34136);
} else {
if((state_val_34139 === (2))){
var _ = (function (){var statearr_34148 = state_34138;
(statearr_34148[(4)] = cljs.core.cons((5),(state_34138[(4)])));

return statearr_34148;
})();
var inst_34121 = pbits_exercises.main.read_file_BANG_(file_path);
var state_34138__$1 = state_34138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34138__$1,(6),inst_34121);
} else {
if((state_val_34139 === (9))){
var inst_34133 = (state_34138[(2)]);
var _ = (function (){var statearr_34149 = state_34138;
(statearr_34149[(4)] = cljs.core.rest((state_34138[(4)])));

return statearr_34149;
})();
var state_34138__$1 = state_34138;
var statearr_34150_36029 = state_34138__$1;
(statearr_34150_36029[(2)] = inst_34133);

(statearr_34150_36029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (5))){
var _ = (function (){var statearr_34151 = state_34138;
(statearr_34151[(4)] = cljs.core.rest((state_34138[(4)])));

return statearr_34151;
})();
var state_34138__$1 = state_34138;
var ex34147 = (state_34138__$1[(2)]);
var statearr_34152_36030 = state_34138__$1;
(statearr_34152_36030[(5)] = ex34147);


var statearr_34153_36031 = state_34138__$1;
(statearr_34153_36031[(1)] = (4));

(statearr_34153_36031[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34139 === (8))){
var inst_34128 = (state_34138[(9)]);
var state_34138__$1 = state_34138;
var statearr_34154_36032 = state_34138__$1;
(statearr_34154_36032[(2)] = inst_34128);

(statearr_34154_36032[(1)] = (9));


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
}
}
});
return (function() {
var pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_34155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34155[(0)] = pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto__);

(statearr_34155[(1)] = (1));

return statearr_34155;
});
var pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto____1 = (function (state_34138){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_34138);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e34156){var ex__14606__auto__ = e34156;
var statearr_34157_36033 = state_34138;
(statearr_34157_36033[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_34138[(4)]))){
var statearr_34158_36034 = state_34138;
(statearr_34158_36034[(1)] = cljs.core.first((state_34138[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36035 = state_34138;
state_34138 = G__36035;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto__ = function(state_34138){
switch(arguments.length){
case 0:
return pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto____1.call(this,state_34138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$validate_phb_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_34159 = f__14688__auto__();
(statearr_34159[(6)] = c__14687__auto__);

return statearr_34159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.check_for_duplicates_BANG_ = (function pbits_exercises$main$check_for_duplicates_BANG_(file_path){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_34258){
var state_val_34259 = (state_34258[(1)]);
if((state_val_34259 === (7))){
var inst_34170 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34260_36036 = state_34258__$1;
(statearr_34260_36036[(2)] = inst_34170);

(statearr_34260_36036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (20))){
var inst_34176 = (state_34258[(7)]);
var inst_34209 = cljs.core.reset_BANG_(inst_34176,true);
var state_34258__$1 = state_34258;
var statearr_34261_36037 = state_34258__$1;
(statearr_34261_36037[(2)] = inst_34209);

(statearr_34261_36037[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (27))){
var inst_34219 = (state_34258[(8)]);
var inst_34228 = cljs.core.first(inst_34219);
var inst_34229 = pbits_exercises.main.try_read_file_BANG_(inst_34228);
var state_34258__$1 = state_34258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34258__$1,(29),inst_34229);
} else {
if((state_val_34259 === (1))){
var state_34258__$1 = state_34258;
var statearr_34262_36038 = state_34258__$1;
(statearr_34262_36038[(2)] = null);

(statearr_34262_36038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (24))){
var state_34258__$1 = state_34258;
var statearr_34263_36039 = state_34258__$1;
(statearr_34263_36039[(2)] = null);

(statearr_34263_36039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (4))){
var inst_34161 = (state_34258[(9)]);
var inst_34161__$1 = (state_34258[(2)]);
var inst_34162 = (inst_34161__$1 instanceof Error);
var state_34258__$1 = (function (){var statearr_34264 = state_34258;
(statearr_34264[(9)] = inst_34161__$1);

return statearr_34264;
})();
if(cljs.core.truth_(inst_34162)){
var statearr_34265_36040 = state_34258__$1;
(statearr_34265_36040[(1)] = (5));

} else {
var statearr_34266_36041 = state_34258__$1;
(statearr_34266_36041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (15))){
var inst_34250 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34267_36042 = state_34258__$1;
(statearr_34267_36042[(2)] = inst_34250);

(statearr_34267_36042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (21))){
var state_34258__$1 = state_34258;
var statearr_34268_36043 = state_34258__$1;
(statearr_34268_36043[(2)] = null);

(statearr_34268_36043[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (31))){
var state_34258__$1 = state_34258;
var statearr_34269_36044 = state_34258__$1;
(statearr_34269_36044[(2)] = null);

(statearr_34269_36044[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (32))){
var inst_34219 = (state_34258[(8)]);
var inst_34241 = (state_34258[(2)]);
var inst_34242 = cljs.core.next(inst_34219);
var inst_34194 = inst_34242;
var inst_34195 = null;
var inst_34196 = (0);
var inst_34197 = (0);
var state_34258__$1 = (function (){var statearr_34270 = state_34258;
(statearr_34270[(10)] = inst_34241);

(statearr_34270[(11)] = inst_34196);

(statearr_34270[(12)] = inst_34194);

(statearr_34270[(13)] = inst_34195);

(statearr_34270[(14)] = inst_34197);

return statearr_34270;
})();
var statearr_34271_36045 = state_34258__$1;
(statearr_34271_36045[(2)] = null);

(statearr_34271_36045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (33))){
var inst_34176 = (state_34258[(7)]);
var inst_34235 = cljs.core.reset_BANG_(inst_34176,true);
var state_34258__$1 = state_34258;
var statearr_34272_36046 = state_34258__$1;
(statearr_34272_36046[(2)] = inst_34235);

(statearr_34272_36046[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (13))){
var inst_34195 = (state_34258[(13)]);
var inst_34197 = (state_34258[(14)]);
var inst_34202 = cljs.core._nth(inst_34195,inst_34197);
var inst_34203 = pbits_exercises.main.try_read_file_BANG_(inst_34202);
var state_34258__$1 = state_34258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34258__$1,(16),inst_34203);
} else {
if((state_val_34259 === (22))){
var inst_34212 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34273_36047 = state_34258__$1;
(statearr_34273_36047[(2)] = inst_34212);

(statearr_34273_36047[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (29))){
var inst_34231 = (state_34258[(15)]);
var inst_34231__$1 = (state_34258[(2)]);
var state_34258__$1 = (function (){var statearr_34274 = state_34258;
(statearr_34274[(15)] = inst_34231__$1);

return statearr_34274;
})();
if(cljs.core.truth_(inst_34231__$1)){
var statearr_34275_36048 = state_34258__$1;
(statearr_34275_36048[(1)] = (30));

} else {
var statearr_34276_36049 = state_34258__$1;
(statearr_34276_36049[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (6))){
var inst_34161 = (state_34258[(9)]);
var inst_34167 = ({"cause":inst_34161});
var inst_34168 = (new Error("ERROR",inst_34167));
var state_34258__$1 = state_34258;
var statearr_34277_36050 = state_34258__$1;
(statearr_34277_36050[(2)] = inst_34168);

(statearr_34277_36050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (28))){
var inst_34245 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34278_36051 = state_34258__$1;
(statearr_34278_36051[(2)] = inst_34245);

(statearr_34278_36051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (25))){
var inst_34248 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34279_36052 = state_34258__$1;
(statearr_34279_36052[(2)] = inst_34248);

(statearr_34279_36052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (34))){
var state_34258__$1 = state_34258;
var statearr_34280_36053 = state_34258__$1;
(statearr_34280_36053[(2)] = null);

(statearr_34280_36053[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (17))){
var inst_34180 = (state_34258[(16)]);
var inst_34205 = (state_34258[(17)]);
var inst_34207 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34180,inst_34205);
var state_34258__$1 = state_34258;
if(inst_34207){
var statearr_34281_36054 = state_34258__$1;
(statearr_34281_36054[(1)] = (20));

} else {
var statearr_34282_36055 = state_34258__$1;
(statearr_34282_36055[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (3))){
var inst_34256 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34258__$1,inst_34256);
} else {
if((state_val_34259 === (12))){
var inst_34176 = (state_34258[(7)]);
var inst_34252 = (state_34258[(2)]);
var inst_34253 = cljs.core.deref(inst_34176);
var _ = (function (){var statearr_34283 = state_34258;
(statearr_34283[(4)] = cljs.core.rest((state_34258[(4)])));

return statearr_34283;
})();
var state_34258__$1 = (function (){var statearr_34284 = state_34258;
(statearr_34284[(18)] = inst_34252);

return statearr_34284;
})();
var statearr_34285_36056 = state_34258__$1;
(statearr_34285_36056[(2)] = inst_34253);

(statearr_34285_36056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (2))){
var _ = (function (){var statearr_34286 = state_34258;
(statearr_34286[(4)] = cljs.core.cons((8),(state_34258[(4)])));

return statearr_34286;
})();
var inst_34176 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var inst_34177 = pbits_exercises.main.read_file_BANG_(file_path);
var state_34258__$1 = (function (){var statearr_34287 = state_34258;
(statearr_34287[(7)] = inst_34176);

return statearr_34287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34258__$1,(9),inst_34177);
} else {
if((state_val_34259 === (23))){
var inst_34219 = (state_34258[(8)]);
var inst_34221 = cljs.core.chunked_seq_QMARK_(inst_34219);
var state_34258__$1 = state_34258;
if(inst_34221){
var statearr_34291_36057 = state_34258__$1;
(statearr_34291_36057[(1)] = (26));

} else {
var statearr_34292_36058 = state_34258__$1;
(statearr_34292_36058[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (35))){
var inst_34238 = (state_34258[(2)]);
var state_34258__$1 = state_34258;
var statearr_34293_36059 = state_34258__$1;
(statearr_34293_36059[(2)] = inst_34238);

(statearr_34293_36059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (19))){
var inst_34196 = (state_34258[(11)]);
var inst_34194 = (state_34258[(12)]);
var inst_34195 = (state_34258[(13)]);
var inst_34197 = (state_34258[(14)]);
var inst_34215 = (state_34258[(2)]);
var inst_34216 = (inst_34197 + (1));
var tmp34288 = inst_34196;
var tmp34289 = inst_34194;
var tmp34290 = inst_34195;
var inst_34194__$1 = tmp34289;
var inst_34195__$1 = tmp34290;
var inst_34196__$1 = tmp34288;
var inst_34197__$1 = inst_34216;
var state_34258__$1 = (function (){var statearr_34294 = state_34258;
(statearr_34294[(11)] = inst_34196__$1);

(statearr_34294[(12)] = inst_34194__$1);

(statearr_34294[(13)] = inst_34195__$1);

(statearr_34294[(14)] = inst_34197__$1);

(statearr_34294[(19)] = inst_34215);

return statearr_34294;
})();
var statearr_34295_36060 = state_34258__$1;
(statearr_34295_36060[(2)] = null);

(statearr_34295_36060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (11))){
var inst_34196 = (state_34258[(11)]);
var inst_34197 = (state_34258[(14)]);
var inst_34199 = (inst_34197 < inst_34196);
var inst_34200 = inst_34199;
var state_34258__$1 = state_34258;
if(cljs.core.truth_(inst_34200)){
var statearr_34296_36061 = state_34258__$1;
(statearr_34296_36061[(1)] = (13));

} else {
var statearr_34297_36062 = state_34258__$1;
(statearr_34297_36062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (9))){
var inst_34180 = (state_34258[(16)]);
var inst_34176 = (state_34258[(7)]);
var inst_34179 = (state_34258[(2)]);
var inst_34180__$1 = utils.async.throw_err(inst_34179);
var inst_34185 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(pbits_exercises.main.join_path,pbits_exercises.main.SOLUTIONS_PATH);
var inst_34186 = (function (){var result = inst_34176;
var contents_1 = inst_34180__$1;
return (function (p1__34160_SHARP_){
return clojure.string.ends_with_QMARK_(p1__34160_SHARP_,".phb");
});
})();
var inst_34187 = pbits_exercises.main.read_dir_BANG_(pbits_exercises.main.SOLUTIONS_PATH);
var state_34258__$1 = (function (){var statearr_34298 = state_34258;
(statearr_34298[(16)] = inst_34180__$1);

(statearr_34298[(20)] = inst_34186);

(statearr_34298[(21)] = inst_34185);

return statearr_34298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34258__$1,(10),inst_34187);
} else {
if((state_val_34259 === (5))){
var inst_34161 = (state_34258[(9)]);
var state_34258__$1 = state_34258;
var statearr_34299_36063 = state_34258__$1;
(statearr_34299_36063[(2)] = inst_34161);

(statearr_34299_36063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (14))){
var inst_34194 = (state_34258[(12)]);
var inst_34219 = (state_34258[(8)]);
var inst_34219__$1 = cljs.core.seq(inst_34194);
var state_34258__$1 = (function (){var statearr_34300 = state_34258;
(statearr_34300[(8)] = inst_34219__$1);

return statearr_34300;
})();
if(inst_34219__$1){
var statearr_34301_36064 = state_34258__$1;
(statearr_34301_36064[(1)] = (23));

} else {
var statearr_34302_36065 = state_34258__$1;
(statearr_34302_36065[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (26))){
var inst_34219 = (state_34258[(8)]);
var inst_34223 = cljs.core.chunk_first(inst_34219);
var inst_34224 = cljs.core.chunk_rest(inst_34219);
var inst_34225 = cljs.core.count(inst_34223);
var inst_34194 = inst_34224;
var inst_34195 = inst_34223;
var inst_34196 = inst_34225;
var inst_34197 = (0);
var state_34258__$1 = (function (){var statearr_34303 = state_34258;
(statearr_34303[(11)] = inst_34196);

(statearr_34303[(12)] = inst_34194);

(statearr_34303[(13)] = inst_34195);

(statearr_34303[(14)] = inst_34197);

return statearr_34303;
})();
var statearr_34304_36066 = state_34258__$1;
(statearr_34304_36066[(2)] = null);

(statearr_34304_36066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (16))){
var inst_34205 = (state_34258[(17)]);
var inst_34205__$1 = (state_34258[(2)]);
var state_34258__$1 = (function (){var statearr_34305 = state_34258;
(statearr_34305[(17)] = inst_34205__$1);

return statearr_34305;
})();
if(cljs.core.truth_(inst_34205__$1)){
var statearr_34306_36067 = state_34258__$1;
(statearr_34306_36067[(1)] = (17));

} else {
var statearr_34307_36068 = state_34258__$1;
(statearr_34307_36068[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (30))){
var inst_34180 = (state_34258[(16)]);
var inst_34231 = (state_34258[(15)]);
var inst_34233 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34180,inst_34231);
var state_34258__$1 = state_34258;
if(inst_34233){
var statearr_34308_36069 = state_34258__$1;
(statearr_34308_36069[(1)] = (33));

} else {
var statearr_34309_36070 = state_34258__$1;
(statearr_34309_36070[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (10))){
var inst_34186 = (state_34258[(20)]);
var inst_34185 = (state_34258[(21)]);
var inst_34189 = (state_34258[(2)]);
var inst_34190 = utils.async.throw_err(inst_34189);
var inst_34191 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_34186,inst_34190);
var inst_34192 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34185,inst_34191);
var inst_34193 = cljs.core.seq(inst_34192);
var inst_34194 = inst_34193;
var inst_34195 = null;
var inst_34196 = (0);
var inst_34197 = (0);
var state_34258__$1 = (function (){var statearr_34311 = state_34258;
(statearr_34311[(11)] = inst_34196);

(statearr_34311[(12)] = inst_34194);

(statearr_34311[(13)] = inst_34195);

(statearr_34311[(14)] = inst_34197);

return statearr_34311;
})();
var statearr_34312_36071 = state_34258__$1;
(statearr_34312_36071[(2)] = null);

(statearr_34312_36071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (18))){
var state_34258__$1 = state_34258;
var statearr_34313_36072 = state_34258__$1;
(statearr_34313_36072[(2)] = null);

(statearr_34313_36072[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34259 === (8))){
var _ = (function (){var statearr_34314 = state_34258;
(statearr_34314[(4)] = cljs.core.rest((state_34258[(4)])));

return statearr_34314;
})();
var state_34258__$1 = state_34258;
var ex34310 = (state_34258__$1[(2)]);
var statearr_34315_36073 = state_34258__$1;
(statearr_34315_36073[(5)] = ex34310);


var statearr_34316_36074 = state_34258__$1;
(statearr_34316_36074[(1)] = (4));

(statearr_34316_36074[(5)] = null);



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
}
}
}
}
}
}
}
});
return (function() {
var pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_34317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34317[(0)] = pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto__);

(statearr_34317[(1)] = (1));

return statearr_34317;
});
var pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto____1 = (function (state_34258){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_34258);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e34318){var ex__14606__auto__ = e34318;
var statearr_34319_36075 = state_34258;
(statearr_34319_36075[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_34258[(4)]))){
var statearr_34320_36076 = state_34258;
(statearr_34320_36076[(1)] = cljs.core.first((state_34258[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36077 = state_34258;
state_34258 = G__36077;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto__ = function(state_34258){
switch(arguments.length){
case 0:
return pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto____1.call(this,state_34258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$check_for_duplicates_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_34321 = f__14688__auto__();
(statearr_34321[(6)] = c__14687__auto__);

return statearr_34321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.show_spinner_dialog_BANG_ = (function pbits_exercises$main$show_spinner_dialog_BANG_(){
return utils.bootstrap.show_modal.cljs$core$IFn$_invoke$arity$2(utils.bootstrap.make_modal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.overflow-hidden","div.container.overflow-hidden",690631468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.text-center","div.row.text-center",-1851285567),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Validando soluci\u00F3n..."], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.m-1","div.row.m-1",-801341908)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.text-center","div.row.text-center",-1851285567),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle-notch.fa-spin.fa-4x","i.fas.fa-circle-notch.fa-spin.fa-4x",-1698400907)], null)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),"static",new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),false], null));
});
pbits_exercises.main.load_solution_attempt_BANG_ = (function pbits_exercises$main$load_solution_attempt_BANG_(p__34322){
var map__34323 = p__34322;
var map__34323__$1 = cljs.core.__destructure_map(map__34323);
var exercise = map__34323__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34323__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_34467){
var state_val_34468 = (state_34467[(1)]);
if((state_val_34468 === (7))){
var inst_34350 = (state_34467[(7)]);
var _ = (function (){var statearr_34470 = state_34467;
(statearr_34470[(4)] = cljs.core.cons((9),(state_34467[(4)])));

return statearr_34470;
})();
var ___$1 = (function (){var statearr_34471 = state_34467;
(statearr_34471[(4)] = cljs.core.cons((10),(state_34467[(4)])));

return statearr_34471;
})();
var inst_34371 = oops.core.validate_object_access_dynamically(inst_34350,(0),"canceled",true,true,false);
var state_34467__$1 = state_34467;
if(inst_34371){
var statearr_34472_36078 = state_34467__$1;
(statearr_34472_36078[(1)] = (11));

} else {
var statearr_34473_36079 = state_34467__$1;
(statearr_34473_36079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (20))){
var _ = (function (){var statearr_34474 = state_34467;
(statearr_34474[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34474;
})();
var state_34467__$1 = state_34467;
var ex34469 = (state_34467__$1[(2)]);
var statearr_34475_36080 = state_34467__$1;
(statearr_34475_36080[(5)] = ex34469);


throw ex34469;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (27))){
var inst_34460 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34476_36081 = state_34467__$1;
(statearr_34476_36081[(2)] = inst_34460);

(statearr_34476_36081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (1))){
var state_34467__$1 = state_34467;
var statearr_34477_36082 = state_34467__$1;
(statearr_34477_36082[(2)] = null);

(statearr_34477_36082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (24))){
var inst_34417 = (state_34467[(2)]);
var inst_34418 = cljs.core.not(inst_34417);
var state_34467__$1 = state_34467;
if(inst_34418){
var statearr_34478_36083 = state_34467__$1;
(statearr_34478_36083[(1)] = (25));

} else {
var statearr_34479_36084 = state_34467__$1;
(statearr_34479_36084[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (4))){
var inst_34324 = (state_34467[(2)]);
var inst_34325 = console.error(inst_34324);
var inst_34326 = utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("ERROR",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ocurri\u00F3 un error al tratar de cargar la soluci\u00F3n. Intente nuevamente."], 0));
var state_34467__$1 = (function (){var statearr_34480 = state_34467;
(statearr_34480[(8)] = inst_34325);

return statearr_34480;
})();
var statearr_34481_36085 = state_34467__$1;
(statearr_34481_36085[(2)] = inst_34326);

(statearr_34481_36085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (15))){
var inst_34350 = (state_34467[(7)]);
var inst_34382 = pbits_exercises.main.show_spinner_dialog_BANG_();
var inst_34390 = oops.state._STAR_runtime_state_STAR_;
var inst_34391 = (new Error());
var inst_34392 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34393 = oops.state.prepare_state(inst_34350,inst_34391,inst_34392);
var inst_34394 = (oops.state._STAR_runtime_state_STAR_ = inst_34393);
var state_34467__$1 = (function (){var statearr_34482 = state_34467;
(statearr_34482[(9)] = inst_34390);

(statearr_34482[(10)] = inst_34394);

(statearr_34482[(11)] = inst_34382);

return statearr_34482;
})();
var statearr_34483_36086 = state_34467__$1;
(statearr_34483_36086[(2)] = null);

(statearr_34483_36086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (21))){
var inst_34350 = (state_34467[(7)]);
var inst_34407 = (inst_34350["filePaths"]);
var state_34467__$1 = state_34467;
var statearr_34484_36087 = state_34467__$1;
(statearr_34484_36087[(2)] = inst_34407);

(statearr_34484_36087[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (31))){
var inst_34432 = pbits_exercises.main.read_solutions_file_BANG_(exercise);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(34),inst_34432);
} else {
if((state_val_34468 === (32))){
var inst_34458 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34485_36088 = state_34467__$1;
(statearr_34485_36088[(2)] = inst_34458);

(statearr_34485_36088[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (33))){
var inst_34430 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34486_36089 = state_34467__$1;
(statearr_34486_36089[(2)] = inst_34430);

(statearr_34486_36089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (13))){
var inst_34376 = (state_34467[(2)]);
var _ = (function (){var statearr_34487 = state_34467;
(statearr_34487[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34487;
})();
var state_34467__$1 = state_34467;
var statearr_34488_36090 = state_34467__$1;
(statearr_34488_36090[(2)] = inst_34376);

(statearr_34488_36090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (22))){
var state_34467__$1 = state_34467;
var statearr_34489_36091 = state_34467__$1;
(statearr_34489_36091[(2)] = null);

(statearr_34489_36091[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (36))){
var inst_34451 = (state_34467[(2)]);
var inst_34452 = utils.async.throw_err(inst_34451);
var inst_34453 = utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("\u00C9xito",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["La soluci\u00F3n se guard\u00F3 correctamente."], 0));
var state_34467__$1 = (function (){var statearr_34490 = state_34467;
(statearr_34490[(12)] = inst_34452);

return statearr_34490;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(37),inst_34453);
} else {
if((state_val_34468 === (29))){
var inst_34426 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34426)){
var statearr_34491_36092 = state_34467__$1;
(statearr_34491_36092[(1)] = (30));

} else {
var statearr_34492_36093 = state_34467__$1;
(statearr_34492_36093[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (6))){
var inst_34350 = (state_34467[(7)]);
var inst_34350__$1 = (state_34467[(2)]);
var inst_34351 = pbits_exercises.main.hide_overlay_BANG_();
var inst_34356 = oops.state._STAR_runtime_state_STAR_;
var inst_34357 = (new Error());
var inst_34358 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34359 = oops.state.prepare_state(inst_34350__$1,inst_34357,inst_34358);
var inst_34360 = (oops.state._STAR_runtime_state_STAR_ = inst_34359);
var state_34467__$1 = (function (){var statearr_34493 = state_34467;
(statearr_34493[(13)] = inst_34356);

(statearr_34493[(14)] = inst_34360);

(statearr_34493[(15)] = inst_34351);

(statearr_34493[(7)] = inst_34350__$1);

return statearr_34493;
})();
var statearr_34494_36094 = state_34467__$1;
(statearr_34494_36094[(2)] = null);

(statearr_34494_36094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (28))){
var inst_34422 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34495_36095 = state_34467__$1;
(statearr_34495_36095[(2)] = inst_34422);

(statearr_34495_36095[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (25))){
var inst_34420 = utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("ERROR",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["El archivo seleccionado NO es un proyecto de Physical Bits v\u00E1lido."], 0));
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(28),inst_34420);
} else {
if((state_val_34468 === (34))){
var inst_34439 = (state_34467[(16)]);
var inst_34435 = (state_34467[(17)]);
var inst_34414 = (state_34467[(18)]);
var inst_34434 = (state_34467[(2)]);
var inst_34435__$1 = utils.async.throw_err(inst_34434);
var inst_34436 = new cljs.core.Keyword(null,"attempts","attempts",1024246729).cljs$core$IFn$_invoke$arity$1(inst_34435__$1);
var inst_34437 = cljs.core.count(inst_34436);
var inst_34438 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34437),".phb"].join('');
var inst_34439__$1 = pbits_exercises.main.join_path(pbits_exercises.main.SOLUTIONS_PATH,inst_34438);
var inst_34440 = pbits_exercises.main.copy_file_BANG_(inst_34414,inst_34439__$1);
var state_34467__$1 = (function (){var statearr_34496 = state_34467;
(statearr_34496[(16)] = inst_34439__$1);

(statearr_34496[(17)] = inst_34435__$1);

return statearr_34496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(35),inst_34440);
} else {
if((state_val_34468 === (17))){
var inst_34350 = (state_34467[(7)]);
var _ = (function (){var statearr_34497 = state_34467;
(statearr_34497[(4)] = cljs.core.cons((19),(state_34467[(4)])));

return statearr_34497;
})();
var ___$1 = (function (){var statearr_34498 = state_34467;
(statearr_34498[(4)] = cljs.core.cons((20),(state_34467[(4)])));

return statearr_34498;
})();
var inst_34405 = oops.core.validate_object_access_dynamically(inst_34350,(0),"filePaths",true,true,false);
var state_34467__$1 = state_34467;
if(inst_34405){
var statearr_34499_36096 = state_34467__$1;
(statearr_34499_36096[(1)] = (21));

} else {
var statearr_34500_36097 = state_34467__$1;
(statearr_34500_36097[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (3))){
var inst_34465 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34467__$1,inst_34465);
} else {
if((state_val_34468 === (12))){
var state_34467__$1 = state_34467;
var statearr_34501_36098 = state_34467__$1;
(statearr_34501_36098[(2)] = null);

(statearr_34501_36098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (2))){
var _ = (function (){var statearr_34502 = state_34467;
(statearr_34502[(4)] = cljs.core.cons((5),(state_34467[(4)])));

return statearr_34502;
})();
var inst_34332 = pbits_exercises.main.show_overlay_BANG_();
var inst_34333 = [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_34334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34335 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"extensions","extensions",-1103629196)];
var inst_34336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34337 = ["phb"];
var inst_34338 = (new cljs.core.PersistentVector(null,1,(5),inst_34336,inst_34337,null));
var inst_34339 = ["Physical Bits project",inst_34338];
var inst_34340 = cljs.core.PersistentHashMap.fromArrays(inst_34335,inst_34339);
var inst_34341 = [inst_34340];
var inst_34342 = (new cljs.core.PersistentVector(null,1,(5),inst_34334,inst_34341,null));
var inst_34343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34344 = ["openFile"];
var inst_34345 = (new cljs.core.PersistentVector(null,1,(5),inst_34343,inst_34344,null));
var inst_34346 = [inst_34342,inst_34345];
var inst_34347 = cljs.core.PersistentHashMap.fromArrays(inst_34333,inst_34346);
var inst_34348 = pbits_exercises.main.show_open_dialog_BANG_(inst_34347);
var state_34467__$1 = (function (){var statearr_34503 = state_34467;
(statearr_34503[(19)] = inst_34332);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(6),inst_34348);
} else {
if((state_val_34468 === (23))){
var inst_34410 = (state_34467[(2)]);
var _ = (function (){var statearr_34504 = state_34467;
(statearr_34504[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34504;
})();
var state_34467__$1 = state_34467;
var statearr_34505_36099 = state_34467__$1;
(statearr_34505_36099[(2)] = inst_34410);

(statearr_34505_36099[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (35))){
var inst_34439 = (state_34467[(16)]);
var inst_34435 = (state_34467[(17)]);
var inst_34442 = (state_34467[(2)]);
var inst_34443 = utils.async.throw_err(inst_34442);
var inst_34444 = [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_34445 = (new Date());
var inst_34446 = [inst_34445,inst_34439];
var inst_34447 = cljs.core.PersistentHashMap.fromArrays(inst_34444,inst_34446);
var inst_34448 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_34435,new cljs.core.Keyword(null,"attempts","attempts",1024246729),cljs.core.conj,inst_34447);
var inst_34449 = pbits_exercises.main.write_solutions_file_BANG_(exercise,inst_34448);
var state_34467__$1 = (function (){var statearr_34506 = state_34467;
(statearr_34506[(20)] = inst_34443);

return statearr_34506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(36),inst_34449);
} else {
if((state_val_34468 === (19))){
var inst_34390 = (state_34467[(9)]);
var _ = (function (){var statearr_34507 = state_34467;
(statearr_34507[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34507;
})();
var inst_34396 = (state_34467[(2)]);
var inst_34397 = (oops.state._STAR_runtime_state_STAR_ = inst_34390);
var ___$1 = (function (){var temp__5804__auto__ = (state_34467[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_34467__$1 = (function (){var statearr_34508 = state_34467;
(statearr_34508[(21)] = inst_34397);

return statearr_34508;
})();
var statearr_34509_36100 = state_34467__$1;
(statearr_34509_36100[(2)] = inst_34396);

(statearr_34509_36100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (11))){
var inst_34350 = (state_34467[(7)]);
var inst_34373 = (inst_34350["canceled"]);
var state_34467__$1 = state_34467;
var statearr_34511_36101 = state_34467__$1;
(statearr_34511_36101[(2)] = inst_34373);

(statearr_34511_36101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (9))){
var inst_34356 = (state_34467[(13)]);
var _ = (function (){var statearr_34512 = state_34467;
(statearr_34512[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34512;
})();
var inst_34362 = (state_34467[(2)]);
var inst_34363 = (oops.state._STAR_runtime_state_STAR_ = inst_34356);
var ___$1 = (function (){var temp__5804__auto__ = (state_34467[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_34467__$1 = (function (){var statearr_34513 = state_34467;
(statearr_34513[(22)] = inst_34363);

return statearr_34513;
})();
var statearr_34514_36102 = state_34467__$1;
(statearr_34514_36102[(2)] = inst_34362);

(statearr_34514_36102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (5))){
var _ = (function (){var statearr_34515 = state_34467;
(statearr_34515[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34515;
})();
var state_34467__$1 = state_34467;
var ex34510 = (state_34467__$1[(2)]);
var statearr_34516_36103 = state_34467__$1;
(statearr_34516_36103[(5)] = ex34510);


var statearr_34517_36104 = state_34467__$1;
(statearr_34517_36104[(1)] = (4));

(statearr_34517_36104[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (14))){
var state_34467__$1 = state_34467;
var statearr_34518_36105 = state_34467__$1;
(statearr_34518_36105[(2)] = null);

(statearr_34518_36105[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (26))){
var inst_34414 = (state_34467[(18)]);
var inst_34424 = pbits_exercises.main.check_for_duplicates_BANG_(inst_34414);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(29),inst_34424);
} else {
if((state_val_34468 === (16))){
var inst_34462 = (state_34467[(2)]);
var _ = (function (){var statearr_34520 = state_34467;
(statearr_34520[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34520;
})();
var state_34467__$1 = state_34467;
var statearr_34521_36106 = state_34467__$1;
(statearr_34521_36106[(2)] = inst_34462);

(statearr_34521_36106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (30))){
var inst_34428 = utils.bootstrap.alert.cljs$core$IFn$_invoke$arity$variadic("ERROR",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["El archivo seleccionado ya fue cargado como soluci\u00F3n a un ejercicio. Intente nuevamente."], 0));
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(33),inst_34428);
} else {
if((state_val_34468 === (10))){
var _ = (function (){var statearr_34522 = state_34467;
(statearr_34522[(4)] = cljs.core.rest((state_34467[(4)])));

return statearr_34522;
})();
var state_34467__$1 = state_34467;
var ex34519 = (state_34467__$1[(2)]);
var statearr_34523_36107 = state_34467__$1;
(statearr_34523_36107[(5)] = ex34519);


throw ex34519;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (18))){
var inst_34414 = (state_34467[(18)]);
var inst_34413 = (state_34467[(2)]);
var inst_34414__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34413,(0),null);
var inst_34415 = pbits_exercises.main.validate_phb_BANG_(inst_34414__$1);
var state_34467__$1 = (function (){var statearr_34524 = state_34467;
(statearr_34524[(18)] = inst_34414__$1);

return statearr_34524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34467__$1,(24),inst_34415);
} else {
if((state_val_34468 === (37))){
var inst_34455 = (state_34467[(2)]);
var inst_34456 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pbits_exercises.main.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-exercise","current-exercise",-2089454447),idx);
var state_34467__$1 = (function (){var statearr_34525 = state_34467;
(statearr_34525[(23)] = inst_34455);

return statearr_34525;
})();
var statearr_34526_36108 = state_34467__$1;
(statearr_34526_36108[(2)] = inst_34456);

(statearr_34526_36108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (8))){
var inst_34379 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34379)){
var statearr_34527_36109 = state_34467__$1;
(statearr_34527_36109[(1)] = (14));

} else {
var statearr_34528_36110 = state_34467__$1;
(statearr_34528_36110[(1)] = (15));

}

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
return (function() {
var pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_34529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34529[(0)] = pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto__);

(statearr_34529[(1)] = (1));

return statearr_34529;
});
var pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto____1 = (function (state_34467){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_34467);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e34530){var ex__14606__auto__ = e34530;
var statearr_34531_36111 = state_34467;
(statearr_34531_36111[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_34467[(4)]))){
var statearr_34532_36112 = state_34467;
(statearr_34532_36112[(1)] = cljs.core.first((state_34467[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36113 = state_34467;
state_34467 = G__36113;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto__ = function(state_34467){
switch(arguments.length){
case 0:
return pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto____1.call(this,state_34467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$load_solution_attempt_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_34533 = f__14688__auto__();
(statearr_34533[(6)] = c__14687__auto__);

return statearr_34533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.load_exercises_BANG_ = (function pbits_exercises$main$load_exercises_BANG_(){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_34543){
var state_val_34544 = (state_34543[(1)]);
if((state_val_34544 === (1))){
var inst_34537 = (function (){return (function (idx,ex){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex,new cljs.core.Keyword(null,"idx","idx",1053688473),idx);
});
})();
var inst_34538 = pbits_exercises.exercises.read_all_exercises();
var inst_34539 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),inst_34538);
var inst_34540 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(inst_34537,inst_34539);
var inst_34541 = cljs.core.vec(inst_34540);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34543__$1,inst_34541);
} else {
return null;
}
});
return (function() {
var pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_34545 = [null,null,null,null,null,null,null];
(statearr_34545[(0)] = pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto__);

(statearr_34545[(1)] = (1));

return statearr_34545;
});
var pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto____1 = (function (state_34543){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_34543);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e34546){var ex__14606__auto__ = e34546;
var statearr_34547_36114 = state_34543;
(statearr_34547_36114[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_34543[(4)]))){
var statearr_34548_36115 = state_34543;
(statearr_34548_36115[(1)] = cljs.core.first((state_34543[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36116 = state_34543;
state_34543 = G__36116;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto__ = function(state_34543){
switch(arguments.length){
case 0:
return pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto____1.call(this,state_34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$load_exercises_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_34549 = f__14688__auto__();
(statearr_34549[(6)] = c__14687__auto__);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.read_exercise_BANG_ = (function pbits_exercises$main$read_exercise_BANG_(exercise){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_34551){
var state_val_34552 = (state_34551[(1)]);
if((state_val_34552 === (1))){
var state_34551__$1 = state_34551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34551__$1,exercise);
} else {
return null;
}
});
return (function() {
var pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_34553 = [null,null,null,null,null,null,null];
(statearr_34553[(0)] = pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto__);

(statearr_34553[(1)] = (1));

return statearr_34553;
});
var pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto____1 = (function (state_34551){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_34551);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e34554){var ex__14606__auto__ = e34554;
var statearr_34555_36117 = state_34551;
(statearr_34555_36117[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_34551[(4)]))){
var statearr_34556_36118 = state_34551;
(statearr_34556_36118[(1)] = cljs.core.first((state_34551[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36119 = state_34551;
state_34551 = G__36119;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto__ = function(state_34551){
switch(arguments.length){
case 0:
return pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto____1.call(this,state_34551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$read_exercise_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_34557 = f__14688__auto__();
(statearr_34557[(6)] = c__14687__auto__);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.main_container = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.fullheight","div.row.fullheight",-88722945),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#side-bar-container.col-2.scrollable.fullheight","div#side-bar-container.col-2.scrollable.fullheight",2015660276),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#exercises-bar.list-group.py-2","ul#exercises-bar.list-group.py-2",-107304200)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#current-exercise-container.col.p-3.scrollable.fullheight","div#current-exercise-container.col.p-3.scrollable.fullheight",-1784144693),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#current-exercise-solved-mark.col","div#current-exercise-solved-mark.col",613482242)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#current-exercise-name.text-center","h1#current-exercise-name.text-center",11639657)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#current-exercise-contents","div#current-exercise-contents",1130334604)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.g-1","div.row.g-1",-1914629088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#load-solution-btn.btn.btn-lg.btn-primary.disabled","button#load-solution-btn.btn.btn-lg.btn-primary.disabled",-1892514396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-toggle","data-bs-toggle",-1489706489),"button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-solid.fa-upload.me-2","i.fa-solid.fa-upload.me-2",601505138)], null),"Cargar soluci\u00F3n"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-auto","div.col-auto",-872131075),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#next-exercise-btn.btn.btn-lg.btn-success","button#next-exercise-btn.btn.btn-lg.btn-success",347148785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-bs-toggle","data-bs-toggle",-1489706489),"button"], null),"Siguiente",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-solid.fa-arrow-right.ms-2","i.fa-solid.fa-arrow-right.ms-2",516029625)], null)], null)], null)], null)], null)], null)], 0));
pbits_exercises.main.force_order = cljs.core.PersistentVector.fromArray([(14),(15),(1),(2),(16),(3),(61),(6),(7),(17),(21),(22),(23),(10),(4),(5),(18),(41),(19),(24),(42),(43),(28),(55),(13),(63),(25),(8),(9),(62),(44),(37),(64),(29),(11),(12),(20),(66),(35),(30),(36),(26),(32),(33),(27),(49),(40),(59),(56),(65),(38),(34),(51),(50),(48),(60),(53),(68),(67),(31),(46),(69),(45),(39),(54),(47),(52),(70),(57),(58)], true);
pbits_exercises.main.force_sort = (function pbits_exercises$main$force_sort(exercises){
var grouped_exercises = cljs.core.group_by(new cljs.core.Keyword(null,"idx","idx",1053688473),exercises);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(grouped_exercises,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,pbits_exercises.main.force_order)], 0));
});
pbits_exercises.main.force_exclusions = cljs.core.set(cljs.core.PersistentVector.fromArray([(55),(56),(57),(58),(59),(60),(61),(62),(63),(64),(65),(66),(67),(68),(69),(70),(61),(64),(1),(2),(14),(15),(16),(41),(66),(27),(28),(29),(30),(31),(32),(33),(34),(35),(36),(37),(38),(39),(40),(41),(42),(43),(44),(45),(46),(47),(48),(49),(50),(51),(52),(53),(54),(55),(56),(57),(58),(59),(60)], true));
clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(13),null,(11),null,(16),null,(8),null], null), null),pbits_exercises.main.force_exclusions);
clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [(20),null,(24),null,(21),null,(22),null,(19),null,(9),null,(26),null,(18),null], null), null),pbits_exercises.main.force_exclusions);
pbits_exercises.main.force_exclude = (function pbits_exercises$main$force_exclude(exercises){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34558){
var map__34559 = p__34558;
var map__34559__$1 = cljs.core.__destructure_map(map__34559);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34559__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return cljs.core.contains_QMARK_(pbits_exercises.main.force_exclusions,(idx + (1)));
}),exercises);
});
pbits_exercises.main.update_ui_BANG_ = (function pbits_exercises$main$update_ui_BANG_(dirty_contents_QMARK_){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_35308){
var state_val_35309 = (state_35308[(1)]);
if((state_val_35309 === (121))){
var inst_34878 = (state_35308[(7)]);
var _ = (function (){var statearr_35311 = state_35308;
(statearr_35311[(4)] = cljs.core.cons((123),(state_35308[(4)])));

return statearr_35311;
})();
var ___$1 = (function (){var statearr_35312 = state_35308;
(statearr_35312[(4)] = cljs.core.cons((124),(state_35308[(4)])));

return statearr_35312;
})();
var inst_35049 = oops.core.validate_object_access_dynamically(inst_34878,(0),"querySelector",true,true,false);
var state_35308__$1 = state_35308;
if(inst_35049){
var statearr_35313_36120 = state_35308__$1;
(statearr_35313_36120[(1)] = (125));

} else {
var statearr_35314_36121 = state_35308__$1;
(statearr_35314_36121[(1)] = (126));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (65))){
var state_35308__$1 = state_35308;
var statearr_35315_36122 = state_35308__$1;
(statearr_35315_36122[(2)] = null);

(statearr_35315_36122[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (70))){
var _ = (function (){var statearr_35316 = state_35308;
(statearr_35316[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35316;
})();
var state_35308__$1 = state_35308;
var ex35310 = (state_35308__$1[(2)]);
var statearr_35317_36123 = state_35308__$1;
(statearr_35317_36123[(5)] = ex35310);


throw ex35310;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (62))){
var state_35308__$1 = state_35308;
var statearr_35318_36124 = state_35308__$1;
(statearr_35318_36124[(2)] = null);

(statearr_35318_36124[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (74))){
var inst_34813 = (state_35308[(8)]);
var _ = (function (){var statearr_35319 = state_35308;
(statearr_35319[(4)] = cljs.core.cons((76),(state_35308[(4)])));

return statearr_35319;
})();
var ___$1 = (function (){var statearr_35320 = state_35308;
(statearr_35320[(4)] = cljs.core.cons((77),(state_35308[(4)])));

return statearr_35320;
})();
var inst_34865 = oops.core.validate_object_access_dynamically(inst_34813,(0),"disabled",true,true,true);
var state_35308__$1 = state_35308;
if(inst_34865){
var statearr_35321_36125 = state_35308__$1;
(statearr_35321_36125[(1)] = (78));

} else {
var statearr_35322_36126 = state_35308__$1;
(statearr_35322_36126[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (164))){
var inst_35197 = (state_35308[(9)]);
var _ = (function (){var statearr_35323 = state_35308;
(statearr_35323[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35323;
})();
var inst_35203 = (state_35308[(2)]);
var inst_35204 = (oops.state._STAR_runtime_state_STAR_ = inst_35197);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35324 = state_35308;
(statearr_35324[(10)] = inst_35204);

return statearr_35324;
})();
var statearr_35325_36127 = state_35308__$1;
(statearr_35325_36127[(2)] = inst_35203);

(statearr_35325_36127[(1)] = (163));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (186))){
var state_35308__$1 = state_35308;
var statearr_35326_36128 = state_35308__$1;
(statearr_35326_36128[(2)] = null);

(statearr_35326_36128[(1)] = (187));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (188))){
var inst_35278 = (state_35308[(11)]);
var inst_35282 = (inst_35278 == null);
var inst_35283 = cljs.core.not(inst_35282);
var state_35308__$1 = state_35308;
if(inst_35283){
var statearr_35327_36129 = state_35308__$1;
(statearr_35327_36129[(1)] = (191));

} else {
var statearr_35328_36130 = state_35308__$1;
(statearr_35328_36130[(1)] = (192));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (110))){
var state_35308__$1 = state_35308;
var statearr_35329_36131 = state_35308__$1;
(statearr_35329_36131[(2)] = null);

(statearr_35329_36131[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (130))){
var inst_35071 = (state_35308[(2)]);
var _ = (function (){var statearr_35331 = state_35308;
(statearr_35331[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35331;
})();
var state_35308__$1 = state_35308;
var statearr_35332_36132 = state_35308__$1;
(statearr_35332_36132[(2)] = inst_35071);

(statearr_35332_36132[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (128))){
var inst_35056 = (state_35308[(12)]);
var inst_35060 = (inst_35056 == null);
var inst_35061 = cljs.core.not(inst_35060);
var state_35308__$1 = state_35308;
if(inst_35061){
var statearr_35333_36133 = state_35308__$1;
(statearr_35333_36133[(1)] = (131));

} else {
var statearr_35334_36134 = state_35308__$1;
(statearr_35334_36134[(1)] = (132));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (153))){
var _ = (function (){var statearr_35335 = state_35308;
(statearr_35335[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35335;
})();
var state_35308__$1 = state_35308;
var ex35330 = (state_35308__$1[(2)]);
var statearr_35336_36135 = state_35308__$1;
(statearr_35336_36135[(5)] = ex35330);


throw ex35330;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (7))){
var inst_34578 = (state_35308[(13)]);
var _ = (function (){var statearr_35337 = state_35308;
(statearr_35337[(4)] = cljs.core.cons((9),(state_35308[(4)])));

return statearr_35337;
})();
var ___$1 = (function (){var statearr_35338 = state_35308;
(statearr_35338[(4)] = cljs.core.cons((10),(state_35308[(4)])));

return statearr_35338;
})();
var inst_34598 = oops.core.validate_object_access_dynamically(inst_34578,(0),"innerHTML",true,true,true);
var state_35308__$1 = state_35308;
if(inst_34598){
var statearr_35339_36136 = state_35308__$1;
(statearr_35339_36136[(1)] = (11));

} else {
var statearr_35340_36137 = state_35308__$1;
(statearr_35340_36137[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (59))){
var state_35308__$1 = state_35308;
var statearr_35341_36138 = state_35308__$1;
(statearr_35341_36138[(2)] = null);

(statearr_35341_36138[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (86))){
var inst_34878 = (state_35308[(7)]);
var _ = (function (){var statearr_35342 = state_35308;
(statearr_35342[(4)] = cljs.core.cons((88),(state_35308[(4)])));

return statearr_35342;
})();
var ___$1 = (function (){var statearr_35343 = state_35308;
(statearr_35343[(4)] = cljs.core.cons((89),(state_35308[(4)])));

return statearr_35343;
})();
var inst_34921 = oops.core.validate_object_access_dynamically(inst_34878,(0),"querySelector",true,true,false);
var state_35308__$1 = state_35308;
if(inst_34921){
var statearr_35344_36139 = state_35308__$1;
(statearr_35344_36139[(1)] = (90));

} else {
var statearr_35345_36140 = state_35308__$1;
(statearr_35345_36140[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (154))){
var inst_34878 = (state_35308[(7)]);
var inst_35173 = (inst_34878["childNodes"]);
var state_35308__$1 = state_35308;
var statearr_35346_36141 = state_35308__$1;
(statearr_35346_36141[(2)] = inst_35173);

(statearr_35346_36141[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (20))){
var inst_34635 = (state_35308[(14)]);
var inst_34578 = (state_35308[(13)]);
var inst_34634 = (state_35308[(15)]);
var inst_34633 = (state_35308[(2)]);
var inst_34634__$1 = [inst_34578,inst_34633];
var inst_34635__$1 = (inst_34634__$1[(1)]);
var inst_34636 = oops.state.get_last_access_modifier();
var inst_34637 = oops.core.validate_fn_call_dynamically(inst_34635__$1,inst_34636);
var state_35308__$1 = (function (){var statearr_35347 = state_35308;
(statearr_35347[(14)] = inst_34635__$1);

(statearr_35347[(15)] = inst_34634__$1);

return statearr_35347;
})();
if(inst_34637){
var statearr_35348_36142 = state_35308__$1;
(statearr_35348_36142[(1)] = (21));

} else {
var statearr_35349_36143 = state_35308__$1;
(statearr_35349_36143[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (72))){
var state_35308__$1 = state_35308;
var statearr_35350_36144 = state_35308__$1;
(statearr_35350_36144[(2)] = null);

(statearr_35350_36144[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (58))){
var inst_34726 = (state_35308[(16)]);
var inst_34778 = (inst_34726["appendChild"]);
var state_35308__$1 = state_35308;
var statearr_35351_36145 = state_35308__$1;
(statearr_35351_36145[(2)] = inst_34778);

(statearr_35351_36145[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (60))){
var inst_34782 = (state_35308[(17)]);
var inst_34726 = (state_35308[(16)]);
var inst_34783 = (state_35308[(18)]);
var inst_34781 = (state_35308[(2)]);
var inst_34782__$1 = [inst_34726,inst_34781];
var inst_34783__$1 = (inst_34782__$1[(1)]);
var inst_34784 = oops.state.get_last_access_modifier();
var inst_34785 = oops.core.validate_fn_call_dynamically(inst_34783__$1,inst_34784);
var state_35308__$1 = (function (){var statearr_35352 = state_35308;
(statearr_35352[(17)] = inst_34782__$1);

(statearr_35352[(18)] = inst_34783__$1);

return statearr_35352;
})();
if(inst_34785){
var statearr_35353_36146 = state_35308__$1;
(statearr_35353_36146[(1)] = (61));

} else {
var statearr_35354_36147 = state_35308__$1;
(statearr_35354_36147[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (175))){
var inst_35240 = (state_35308[(19)]);
var inst_35242 = cljs.core.chunked_seq_QMARK_(inst_35240);
var state_35308__$1 = state_35308;
if(inst_35242){
var statearr_35355_36148 = state_35308__$1;
(statearr_35355_36148[(1)] = (178));

} else {
var statearr_35356_36149 = state_35308__$1;
(statearr_35356_36149[(1)] = (179));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (27))){
var inst_34645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34646 = [new cljs.core.Keyword(null,"i.fs-1.text-success.fa-solid.fa-circle-check","i.fs-1.text-success.fa-solid.fa-circle-check",248056952)];
var inst_34647 = (new cljs.core.PersistentVector(null,1,(5),inst_34645,inst_34646,null));
var state_35308__$1 = state_35308;
var statearr_35357_36150 = state_35308__$1;
(statearr_35357_36150[(2)] = inst_34647);

(statearr_35357_36150[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (1))){
var inst_34561 = pbits_exercises.main.load_exercises_BANG_();
var state_35308__$1 = state_35308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35308__$1,(2),inst_34561);
} else {
if((state_val_35309 === (69))){
var inst_34818 = (state_35308[(20)]);
var _ = (function (){var statearr_35361 = state_35308;
(statearr_35361[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35361;
})();
var inst_34824 = (state_35308[(2)]);
var inst_34825 = (oops.state._STAR_runtime_state_STAR_ = inst_34818);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35362 = state_35308;
(statearr_35362[(21)] = inst_34825);

return statearr_35362;
})();
var statearr_35363_36151 = state_35308__$1;
(statearr_35363_36151[(2)] = inst_34824);

(statearr_35363_36151[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (101))){
var inst_34885 = (state_35308[(22)]);
var inst_34886 = (state_35308[(23)]);
var inst_34887 = (state_35308[(24)]);
var inst_34884 = (state_35308[(25)]);
var inst_35007 = (state_35308[(2)]);
var inst_35008 = (inst_34887 + (1));
var tmp35358 = inst_34885;
var tmp35359 = inst_34886;
var tmp35360 = inst_34884;
var inst_34884__$1 = tmp35360;
var inst_34885__$1 = tmp35358;
var inst_34886__$1 = tmp35359;
var inst_34887__$1 = inst_35008;
var state_35308__$1 = (function (){var statearr_35364 = state_35308;
(statearr_35364[(22)] = inst_34885__$1);

(statearr_35364[(23)] = inst_34886__$1);

(statearr_35364[(26)] = inst_35007);

(statearr_35364[(24)] = inst_34887__$1);

(statearr_35364[(25)] = inst_34884__$1);

return statearr_35364;
})();
var statearr_35365_36152 = state_35308__$1;
(statearr_35365_36152[(2)] = null);

(statearr_35365_36152[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (24))){
var inst_34576 = (state_35308[(27)]);
var inst_34634 = (state_35308[(15)]);
var inst_34642 = (inst_34634[(0)]);
var inst_34643 = new cljs.core.Keyword(null,"solved?","solved?",-246730001).cljs$core$IFn$_invoke$arity$1(inst_34576);
var state_35308__$1 = (function (){var statearr_35366 = state_35308;
(statearr_35366[(28)] = inst_34642);

return statearr_35366;
})();
if(cljs.core.truth_(inst_34643)){
var statearr_35367_36153 = state_35308__$1;
(statearr_35367_36153[(1)] = (27));

} else {
var statearr_35368_36154 = state_35308__$1;
(statearr_35368_36154[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (102))){
var inst_34878 = (state_35308[(7)]);
var _ = (function (){var statearr_35369 = state_35308;
(statearr_35369[(4)] = cljs.core.cons((104),(state_35308[(4)])));

return statearr_35369;
})();
var ___$1 = (function (){var statearr_35370 = state_35308;
(statearr_35370[(4)] = cljs.core.cons((105),(state_35308[(4)])));

return statearr_35370;
})();
var inst_34978 = oops.core.validate_object_access_dynamically(inst_34878,(0),"appendChild",true,true,false);
var state_35308__$1 = state_35308;
if(inst_34978){
var statearr_35371_36155 = state_35308__$1;
(statearr_35371_36155[(1)] = (106));

} else {
var statearr_35372_36156 = state_35308__$1;
(statearr_35372_36156[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (135))){
var inst_35026 = (state_35308[(29)]);
var inst_35024 = (state_35308[(30)]);
var inst_34878 = (state_35308[(7)]);
var inst_35078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35079 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_35080 = [inst_35026,"button"];
var inst_35081 = cljs.core.PersistentHashMap.fromArrays(inst_35079,inst_35080);
var inst_35082 = [new cljs.core.Keyword(null,"button.list-group-item.list-group-item-action","button.list-group-item.list-group-item-action",-1711772481),inst_35081,inst_35024];
var inst_35083 = (new cljs.core.PersistentVector(null,3,(5),inst_35078,inst_35082,null));
var inst_35084 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35083], 0));
var inst_35091 = oops.state._STAR_runtime_state_STAR_;
var inst_35092 = (new Error());
var inst_35093 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35094 = oops.state.prepare_state(inst_34878,inst_35092,inst_35093);
var inst_35095 = (oops.state._STAR_runtime_state_STAR_ = inst_35094);
var state_35308__$1 = (function (){var statearr_35374 = state_35308;
(statearr_35374[(31)] = inst_35095);

(statearr_35374[(32)] = inst_35084);

(statearr_35374[(33)] = inst_35091);

return statearr_35374;
})();
var statearr_35375_36157 = state_35308__$1;
(statearr_35375_36157[(2)] = null);

(statearr_35375_36157[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (55))){
var inst_34726 = (state_35308[(16)]);
var inst_34802 = (state_35308[(2)]);
var state_35308__$1 = (function (){var statearr_35376 = state_35308;
(statearr_35376[(34)] = inst_34802);

return statearr_35376;
})();
var statearr_35377_36158 = state_35308__$1;
(statearr_35377_36158[(2)] = inst_34726);

(statearr_35377_36158[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (165))){
var _ = (function (){var statearr_35378 = state_35308;
(statearr_35378[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35378;
})();
var state_35308__$1 = state_35308;
var ex35373 = (state_35308__$1[(2)]);
var statearr_35379_36159 = state_35308__$1;
(statearr_35379_36159[(5)] = ex35373);


throw ex35373;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (85))){
var inst_35144 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35380_36160 = state_35308__$1;
(statearr_35380_36160[(2)] = inst_35144);

(statearr_35380_36160[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (39))){
var inst_34576 = (state_35308[(27)]);
var inst_34565 = (state_35308[(35)]);
var inst_34813 = (state_35308[(8)]);
var inst_34563 = (state_35308[(36)]);
var inst_34805 = (state_35308[(2)]);
var inst_34807 = pbits_exercises.main.get_element_by_id("load-solution-btn");
var inst_34808 = utils.bootstrap.replace_with_clone_BANG_(inst_34807);
var inst_34809 = (function (){var exercises = inst_34563;
var first_unsolved = inst_34565;
var current_exercise = inst_34576;
var G__34806 = inst_34808;
return (function (){
return pbits_exercises.main.load_solution_attempt_BANG_(current_exercise);
});
})();
var inst_34810 = utils.bootstrap.on_click(inst_34808,inst_34809);
var inst_34812 = pbits_exercises.main.get_element_by_id("next-exercise-btn");
var inst_34813__$1 = utils.bootstrap.replace_with_clone_BANG_(inst_34812);
var inst_34818 = oops.state._STAR_runtime_state_STAR_;
var inst_34819 = (new Error());
var inst_34820 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34821 = oops.state.prepare_state(inst_34813__$1,inst_34819,inst_34820);
var inst_34822 = (oops.state._STAR_runtime_state_STAR_ = inst_34821);
var state_35308__$1 = (function (){var statearr_35381 = state_35308;
(statearr_35381[(37)] = inst_34810);

(statearr_35381[(8)] = inst_34813__$1);

(statearr_35381[(20)] = inst_34818);

(statearr_35381[(38)] = inst_34822);

(statearr_35381[(39)] = inst_34805);

return statearr_35381;
})();
var statearr_35382_36161 = state_35308__$1;
(statearr_35382_36161[(2)] = null);

(statearr_35382_36161[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (88))){
var inst_34906 = (state_35308[(40)]);
var _ = (function (){var statearr_35383 = state_35308;
(statearr_35383[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35383;
})();
var inst_34912 = (state_35308[(2)]);
var inst_34913 = (oops.state._STAR_runtime_state_STAR_ = inst_34906);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35384 = state_35308;
(statearr_35384[(41)] = inst_34913);

return statearr_35384;
})();
var statearr_35385_36162 = state_35308__$1;
(statearr_35385_36162[(2)] = inst_34912);

(statearr_35385_36162[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (46))){
var inst_34698 = (state_35308[(42)]);
var inst_34721 = (state_35308[(2)]);
var _ = (function (){var statearr_35386 = state_35308;
(statearr_35386[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35386;
})();
var state_35308__$1 = (function (){var statearr_35387 = state_35308;
(statearr_35387[(43)] = inst_34721);

return statearr_35387;
})();
var statearr_35388_36163 = state_35308__$1;
(statearr_35388_36163[(2)] = inst_34698);

(statearr_35388_36163[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (149))){
var inst_35124 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35389_36164 = state_35308__$1;
(statearr_35389_36164[(2)] = inst_35124);

(statearr_35389_36164[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (157))){
var inst_35185 = (state_35308[(44)]);
var inst_35184 = (state_35308[(45)]);
var inst_35187 = (inst_35185 < inst_35184);
var inst_35188 = inst_35187;
var state_35308__$1 = state_35308;
if(cljs.core.truth_(inst_35188)){
var statearr_35391_36165 = state_35308__$1;
(statearr_35391_36165[(1)] = (159));

} else {
var statearr_35392_36166 = state_35308__$1;
(statearr_35392_36166[(1)] = (160));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (4))){
var inst_34565 = (state_35308[(35)]);
var state_35308__$1 = state_35308;
var statearr_35393_36167 = state_35308__$1;
(statearr_35393_36167[(2)] = inst_34565);

(statearr_35393_36167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (77))){
var _ = (function (){var statearr_35394 = state_35308;
(statearr_35394[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35394;
})();
var state_35308__$1 = state_35308;
var ex35390 = (state_35308__$1[(2)]);
var statearr_35395_36168 = state_35308__$1;
(statearr_35395_36168[(5)] = ex35390);


throw ex35390;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (106))){
var inst_34878 = (state_35308[(7)]);
var inst_34980 = (inst_34878["appendChild"]);
var state_35308__$1 = state_35308;
var statearr_35396_36169 = state_35308__$1;
(statearr_35396_36169[(2)] = inst_34980);

(statearr_35396_36169[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (119))){
var inst_35026 = (state_35308[(29)]);
var inst_34885 = (state_35308[(22)]);
var inst_34576 = (state_35308[(27)]);
var inst_35023 = (state_35308[(46)]);
var inst_34886 = (state_35308[(23)]);
var inst_35024 = (state_35308[(30)]);
var inst_34565 = (state_35308[(35)]);
var inst_35011 = (state_35308[(47)]);
var inst_34878 = (state_35308[(7)]);
var inst_35022 = (state_35308[(48)]);
var inst_34887 = (state_35308[(24)]);
var inst_34563 = (state_35308[(36)]);
var inst_35025 = (state_35308[(49)]);
var inst_35021 = cljs.core.first(inst_35011);
var inst_35022__$1 = cljs.core.__destructure_map(inst_35021);
var inst_35023__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35022__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var inst_35024__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_35025__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35022__$1,new cljs.core.Keyword(null,"solved?","solved?",-246730001));
var inst_35026__$1 = ["exercise-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35023__$1),"-btn"].join('');
var inst_35027 = (function (){var idx = inst_35023__$1;
var first_unsolved = inst_34565;
var exercises = inst_34563;
var i__34882 = inst_34887;
var name = inst_35024__$1;
var exercises_bar = inst_34878;
var temp__5804__auto__ = inst_35011;
var count__34881 = inst_34886;
var solved_QMARK_ = inst_35025__$1;
var current_exercise = inst_34576;
var chunk__34880 = inst_34885;
var element_id = inst_35026__$1;
var seq__34879 = inst_35011;
var map__35020 = inst_35022__$1;
return (function (btn){
var target_obj_35397_36170 = btn;
var _STAR_runtime_state_STAR__orig_val__35399_36171 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35400_36172 = oops.state.prepare_state(target_obj_35397_36170,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35400_36172);

try{var parent_obj_35398_36173 = target_obj_35397_36170;
if(oops.core.validate_object_access_dynamically(parent_obj_35398_36173,(0),"disabled",true,true,true)){
(parent_obj_35398_36173["disabled"] = (idx > cljs.core.get.cljs$core$IFn$_invoke$arity$3(first_unsolved,new cljs.core.Keyword(null,"idx","idx",1053688473),Infinity)));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35399_36171);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(current_exercise))){
var G__35401 = btn;
var target_obj_35402_36174 = G__35401;
var _STAR_runtime_state_STAR__orig_val__35408_36175 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35409_36176 = oops.state.prepare_state(target_obj_35402_36174,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35409_36176);

try{var call_info_35404_36177 = (function (){var target_obj_35405 = (function (){var next_obj_35406 = ((oops.core.validate_object_access_dynamically(target_obj_35402_36174,(0),"classList",true,true,false))?(target_obj_35402_36174["classList"]):null);
return next_obj_35406;
})();
return [target_obj_35405,(function (){var next_obj_35407 = ((oops.core.validate_object_access_dynamically(target_obj_35405,(0),"add",true,true,false))?(target_obj_35405["add"]):null);
return next_obj_35407;
})()];
})();
var fn_35403_36178 = (call_info_35404_36177[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35403_36178,oops.state.get_last_access_modifier())){
if((!((fn_35403_36178 == null)))){
fn_35403_36178.call((call_info_35404_36177[(0)]),"active");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35408_36175);
}
var target_obj_35410_36179 = G__35401;
var _STAR_runtime_state_STAR__orig_val__35416_36180 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35417_36181 = oops.state.prepare_state(target_obj_35410_36179,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35417_36181);

try{var call_info_35412_36182 = (function (){var target_obj_35413 = (function (){var next_obj_35414 = ((oops.core.validate_object_access_dynamically(target_obj_35410_36179,(0),"classList",true,true,false))?(target_obj_35410_36179["classList"]):null);
return next_obj_35414;
})();
return [target_obj_35413,(function (){var next_obj_35415 = ((oops.core.validate_object_access_dynamically(target_obj_35413,(0),"remove",true,true,false))?(target_obj_35413["remove"]):null);
return next_obj_35415;
})()];
})();
var fn_35411_36183 = (call_info_35412_36182[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35411_36183,oops.state.get_last_access_modifier())){
if((!((fn_35411_36183 == null)))){
fn_35411_36183.call((call_info_35412_36182[(0)]),"list-group-item-success");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35416_36180);
}
var target_obj_35418_36184 = G__35401;
var _STAR_runtime_state_STAR__orig_val__35424_36185 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35425_36186 = oops.state.prepare_state(target_obj_35418_36184,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35425_36186);

try{var call_info_35420_36187 = (function (){var target_obj_35421 = (function (){var next_obj_35422 = ((oops.core.validate_object_access_dynamically(target_obj_35418_36184,(0),"classList",true,true,false))?(target_obj_35418_36184["classList"]):null);
return next_obj_35422;
})();
return [target_obj_35421,(function (){var next_obj_35423 = ((oops.core.validate_object_access_dynamically(target_obj_35421,(0),"remove",true,true,false))?(target_obj_35421["remove"]):null);
return next_obj_35423;
})()];
})();
var fn_35419_36188 = (call_info_35420_36187[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35419_36188,oops.state.get_last_access_modifier())){
if((!((fn_35419_36188 == null)))){
fn_35419_36188.call((call_info_35420_36187[(0)]),"list-group-item-primary");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35424_36185);
}
return G__35401;
} else {
var G__35426 = btn;
var target_obj_35427_36189 = G__35426;
var _STAR_runtime_state_STAR__orig_val__35433_36190 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35434_36191 = oops.state.prepare_state(target_obj_35427_36189,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35434_36191);

try{var call_info_35429_36192 = (function (){var target_obj_35430 = (function (){var next_obj_35431 = ((oops.core.validate_object_access_dynamically(target_obj_35427_36189,(0),"classList",true,true,false))?(target_obj_35427_36189["classList"]):null);
return next_obj_35431;
})();
return [target_obj_35430,(function (){var next_obj_35432 = ((oops.core.validate_object_access_dynamically(target_obj_35430,(0),"remove",true,true,false))?(target_obj_35430["remove"]):null);
return next_obj_35432;
})()];
})();
var fn_35428_36193 = (call_info_35429_36192[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35428_36193,oops.state.get_last_access_modifier())){
if((!((fn_35428_36193 == null)))){
fn_35428_36193.call((call_info_35429_36192[(0)]),"active");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35433_36190);
}
var target_obj_35435_36194 = G__35426;
var _STAR_runtime_state_STAR__orig_val__35438_36195 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35439_36196 = oops.state.prepare_state(target_obj_35435_36194,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35439_36196);

try{var call_info_35437_36197 = oops.core.get_selector_call_info_dynamically(target_obj_35435_36194,(cljs.core.truth_(solved_QMARK_)?new cljs.core.Keyword(null,"classList.add","classList.add",-1511518896):new cljs.core.Keyword(null,"classList.remove","classList.remove",-847813241)));
var fn_35436_36198 = (call_info_35437_36197[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35436_36198,oops.state.get_last_access_modifier())){
if((!((fn_35436_36198 == null)))){
fn_35436_36198.call((call_info_35437_36197[(0)]),"list-group-item-success");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35438_36195);
}
var target_obj_35440_36199 = G__35426;
var _STAR_runtime_state_STAR__orig_val__35443_36200 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35444_36201 = oops.state.prepare_state(target_obj_35440_36199,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35444_36201);

try{var call_info_35442_36202 = oops.core.get_selector_call_info_dynamically(target_obj_35440_36199,(cljs.core.truth_(solved_QMARK_)?new cljs.core.Keyword(null,"classList.remove","classList.remove",-847813241):new cljs.core.Keyword(null,"classList.add","classList.add",-1511518896)));
var fn_35441_36203 = (call_info_35442_36202[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35441_36203,oops.state.get_last_access_modifier())){
if((!((fn_35441_36203 == null)))){
fn_35441_36203.call((call_info_35442_36202[(0)]),"list-group-item-primary");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35443_36200);
}
return G__35426;
}
});
})();
var inst_35034 = oops.state._STAR_runtime_state_STAR_;
var inst_35035 = (new Error());
var inst_35036 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35037 = oops.state.prepare_state(inst_34878,inst_35035,inst_35036);
var inst_35038 = (oops.state._STAR_runtime_state_STAR_ = inst_35037);
var state_35308__$1 = (function (){var statearr_35445 = state_35308;
(statearr_35445[(29)] = inst_35026__$1);

(statearr_35445[(50)] = inst_35027);

(statearr_35445[(46)] = inst_35023__$1);

(statearr_35445[(30)] = inst_35024__$1);

(statearr_35445[(51)] = inst_35038);

(statearr_35445[(52)] = inst_35034);

(statearr_35445[(48)] = inst_35022__$1);

(statearr_35445[(49)] = inst_35025__$1);

return statearr_35445;
})();
var statearr_35446_36204 = state_35308__$1;
(statearr_35446_36204[(2)] = null);

(statearr_35446_36204[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (95))){
var inst_34943 = (state_35308[(2)]);
var _ = (function (){var statearr_35447 = state_35308;
(statearr_35447[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35447;
})();
var state_35308__$1 = state_35308;
var statearr_35448_36205 = state_35308__$1;
(statearr_35448_36205[(2)] = inst_34943);

(statearr_35448_36205[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (144))){
var inst_35113 = (state_35308[(53)]);
var inst_35117 = (inst_35113 == null);
var inst_35118 = cljs.core.not(inst_35117);
var state_35308__$1 = state_35308;
if(inst_35118){
var statearr_35449_36206 = state_35308__$1;
(statearr_35449_36206[(1)] = (147));

} else {
var statearr_35450_36207 = state_35308__$1;
(statearr_35450_36207[(1)] = (148));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (176))){
var state_35308__$1 = state_35308;
var statearr_35451_36208 = state_35308__$1;
(statearr_35451_36208[(2)] = null);

(statearr_35451_36208[(1)] = (177));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (192))){
var state_35308__$1 = state_35308;
var statearr_35452_36209 = state_35308__$1;
(statearr_35452_36209[(2)] = null);

(statearr_35452_36209[(1)] = (193));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (54))){
var inst_34726 = (state_35308[(16)]);
var _ = (function (){var statearr_35453 = state_35308;
(statearr_35453[(4)] = cljs.core.cons((56),(state_35308[(4)])));

return statearr_35453;
})();
var ___$1 = (function (){var statearr_35454 = state_35308;
(statearr_35454[(4)] = cljs.core.cons((57),(state_35308[(4)])));

return statearr_35454;
})();
var inst_34776 = oops.core.validate_object_access_dynamically(inst_34726,(0),"appendChild",true,true,false);
var state_35308__$1 = state_35308;
if(inst_34776){
var statearr_35455_36210 = state_35308__$1;
(statearr_35455_36210[(1)] = (58));

} else {
var statearr_35456_36211 = state_35308__$1;
(statearr_35456_36211[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (92))){
var inst_34927 = (state_35308[(54)]);
var inst_34928 = (state_35308[(55)]);
var inst_34878 = (state_35308[(7)]);
var inst_34926 = (state_35308[(2)]);
var inst_34927__$1 = [inst_34878,inst_34926];
var inst_34928__$1 = (inst_34927__$1[(1)]);
var inst_34929 = oops.state.get_last_access_modifier();
var inst_34930 = oops.core.validate_fn_call_dynamically(inst_34928__$1,inst_34929);
var state_35308__$1 = (function (){var statearr_35457 = state_35308;
(statearr_35457[(54)] = inst_34927__$1);

(statearr_35457[(55)] = inst_34928__$1);

return statearr_35457;
})();
if(inst_34930){
var statearr_35458_36212 = state_35308__$1;
(statearr_35458_36212[(1)] = (93));

} else {
var statearr_35459_36213 = state_35308__$1;
(statearr_35459_36213[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (141))){
var inst_34878 = (state_35308[(7)]);
var inst_35108 = (inst_34878["appendChild"]);
var state_35308__$1 = state_35308;
var statearr_35460_36214 = state_35308__$1;
(statearr_35460_36214[(2)] = inst_35108);

(statearr_35460_36214[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (137))){
var inst_34878 = (state_35308[(7)]);
var _ = (function (){var statearr_35461 = state_35308;
(statearr_35461[(4)] = cljs.core.cons((139),(state_35308[(4)])));

return statearr_35461;
})();
var ___$1 = (function (){var statearr_35462 = state_35308;
(statearr_35462[(4)] = cljs.core.cons((140),(state_35308[(4)])));

return statearr_35462;
})();
var inst_35106 = oops.core.validate_object_access_dynamically(inst_34878,(0),"appendChild",true,true,false);
var state_35308__$1 = state_35308;
if(inst_35106){
var statearr_35463_36215 = state_35308__$1;
(statearr_35463_36215[(1)] = (141));

} else {
var statearr_35464_36216 = state_35308__$1;
(statearr_35464_36216[(1)] = (142));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (104))){
var inst_34963 = (state_35308[(56)]);
var _ = (function (){var statearr_35465 = state_35308;
(statearr_35465[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35465;
})();
var inst_34969 = (state_35308[(2)]);
var inst_34970 = (oops.state._STAR_runtime_state_STAR_ = inst_34963);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35466 = state_35308;
(statearr_35466[(57)] = inst_34970);

return statearr_35466;
})();
var statearr_35467_36217 = state_35308__$1;
(statearr_35467_36217[(2)] = inst_34969);

(statearr_35467_36217[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (15))){
var inst_34667 = (state_35308[(58)]);
var inst_34664 = (state_35308[(2)]);
var inst_34667__$1 = pbits_exercises.main.get_element_by_id("current-exercise-name");
var inst_34670 = oops.state._STAR_runtime_state_STAR_;
var inst_34671 = (new Error());
var inst_34672 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34673 = oops.state.prepare_state(inst_34667__$1,inst_34671,inst_34672);
var inst_34674 = (oops.state._STAR_runtime_state_STAR_ = inst_34673);
var state_35308__$1 = (function (){var statearr_35469 = state_35308;
(statearr_35469[(59)] = inst_34674);

(statearr_35469[(60)] = inst_34664);

(statearr_35469[(58)] = inst_34667__$1);

(statearr_35469[(61)] = inst_34670);

return statearr_35469;
})();
var statearr_35470_36218 = state_35308__$1;
(statearr_35470_36218[(2)] = null);

(statearr_35470_36218[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (48))){
var inst_34726 = (state_35308[(16)]);
var inst_34754 = (state_35308[(2)]);
var inst_34761 = oops.state._STAR_runtime_state_STAR_;
var inst_34762 = (new Error());
var inst_34763 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34764 = oops.state.prepare_state(inst_34726,inst_34762,inst_34763);
var inst_34765 = (oops.state._STAR_runtime_state_STAR_ = inst_34764);
var state_35308__$1 = (function (){var statearr_35471 = state_35308;
(statearr_35471[(62)] = inst_34761);

(statearr_35471[(63)] = inst_34765);

(statearr_35471[(64)] = inst_34754);

return statearr_35471;
})();
var statearr_35472_36219 = state_35308__$1;
(statearr_35472_36219[(2)] = null);

(statearr_35472_36219[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (50))){
var _ = (function (){var statearr_35473 = state_35308;
(statearr_35473[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35473;
})();
var state_35308__$1 = state_35308;
var ex35468 = (state_35308__$1[(2)]);
var statearr_35474_36220 = state_35308__$1;
(statearr_35474_36220[(5)] = ex35468);


throw ex35468;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (116))){
var state_35308__$1 = state_35308;
var statearr_35475_36221 = state_35308__$1;
(statearr_35475_36221[(2)] = null);

(statearr_35475_36221[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (75))){
var inst_34576 = (state_35308[(27)]);
var inst_34565 = (state_35308[(35)]);
var inst_34813 = (state_35308[(8)]);
var inst_34563 = (state_35308[(36)]);
var inst_34875 = (state_35308[(2)]);
var inst_34876 = (function (){var exercises = inst_34563;
var first_unsolved = inst_34565;
var current_exercise = inst_34576;
var G__34811 = inst_34813;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pbits_exercises.main.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-exercise","current-exercise",-2089454447),(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(current_exercise) + (1)));
});
})();
var inst_34877 = utils.bootstrap.on_click(inst_34813,inst_34876);
var inst_34878 = pbits_exercises.main.get_element_by_id("exercises-bar");
var inst_34883 = cljs.core.seq(inst_34563);
var inst_34884 = inst_34883;
var inst_34885 = null;
var inst_34886 = (0);
var inst_34887 = (0);
var state_35308__$1 = (function (){var statearr_35476 = state_35308;
(statearr_35476[(22)] = inst_34885);

(statearr_35476[(23)] = inst_34886);

(statearr_35476[(65)] = inst_34875);

(statearr_35476[(66)] = inst_34877);

(statearr_35476[(7)] = inst_34878);

(statearr_35476[(24)] = inst_34887);

(statearr_35476[(25)] = inst_34884);

return statearr_35476;
})();
var statearr_35477_36222 = state_35308__$1;
(statearr_35477_36222[(2)] = null);

(statearr_35477_36222[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (159))){
var inst_35190 = (state_35308[(67)]);
var inst_35185 = (state_35308[(44)]);
var inst_35183 = (state_35308[(68)]);
var inst_35190__$1 = cljs.core._nth(inst_35183,inst_35185);
var inst_35197 = oops.state._STAR_runtime_state_STAR_;
var inst_35198 = (new Error());
var inst_35199 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35200 = oops.state.prepare_state(inst_35190__$1,inst_35198,inst_35199);
var inst_35201 = (oops.state._STAR_runtime_state_STAR_ = inst_35200);
var state_35308__$1 = (function (){var statearr_35478 = state_35308;
(statearr_35478[(67)] = inst_35190__$1);

(statearr_35478[(69)] = inst_35201);

(statearr_35478[(9)] = inst_35197);

return statearr_35478;
})();
var statearr_35479_36223 = state_35308__$1;
(statearr_35479_36223[(2)] = null);

(statearr_35479_36223[(1)] = (162));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (99))){
var inst_34946 = (state_35308[(70)]);
var inst_34899 = (state_35308[(71)]);
var inst_34948 = (inst_34899.cljs$core$IFn$_invoke$arity$1 ? inst_34899.cljs$core$IFn$_invoke$arity$1(inst_34946) : inst_34899.call(null,inst_34946));
var state_35308__$1 = state_35308;
var statearr_35480_36224 = state_35308__$1;
(statearr_35480_36224[(2)] = inst_34948);

(statearr_35480_36224[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (21))){
var inst_34635 = (state_35308[(14)]);
var inst_34639 = (inst_34635 == null);
var inst_34640 = cljs.core.not(inst_34639);
var state_35308__$1 = state_35308;
if(inst_34640){
var statearr_35481_36225 = state_35308__$1;
(statearr_35481_36225[(1)] = (24));

} else {
var statearr_35482_36226 = state_35308__$1;
(statearr_35482_36226[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (31))){
var inst_34694 = (state_35308[(2)]);
var state_35308__$1 = (function (){var statearr_35483 = state_35308;
(statearr_35483[(72)] = inst_34694);

return statearr_35483;
})();
if(cljs.core.truth_(dirty_contents_QMARK_)){
var statearr_35484_36227 = state_35308__$1;
(statearr_35484_36227[(1)] = (37));

} else {
var statearr_35485_36228 = state_35308__$1;
(statearr_35485_36228[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (113))){
var state_35308__$1 = state_35308;
var statearr_35486_36229 = state_35308__$1;
(statearr_35486_36229[(2)] = null);

(statearr_35486_36229[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (32))){
var inst_34670 = (state_35308[(61)]);
var _ = (function (){var statearr_35487 = state_35308;
(statearr_35487[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35487;
})();
var inst_34676 = (state_35308[(2)]);
var inst_34677 = (oops.state._STAR_runtime_state_STAR_ = inst_34670);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35488 = state_35308;
(statearr_35488[(73)] = inst_34677);

return statearr_35488;
})();
var statearr_35489_36230 = state_35308__$1;
(statearr_35489_36230[(2)] = inst_34676);

(statearr_35489_36230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (136))){
var inst_35011 = (state_35308[(47)]);
var inst_35135 = (state_35308[(2)]);
var inst_35136 = cljs.core.next(inst_35011);
var inst_34884 = inst_35136;
var inst_34885 = null;
var inst_34886 = (0);
var inst_34887 = (0);
var state_35308__$1 = (function (){var statearr_35490 = state_35308;
(statearr_35490[(22)] = inst_34885);

(statearr_35490[(74)] = inst_35135);

(statearr_35490[(23)] = inst_34886);

(statearr_35490[(24)] = inst_34887);

(statearr_35490[(25)] = inst_34884);

return statearr_35490;
})();
var statearr_35491_36231 = state_35308__$1;
(statearr_35491_36231[(2)] = null);

(statearr_35491_36231[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (139))){
var inst_35091 = (state_35308[(33)]);
var _ = (function (){var statearr_35492 = state_35308;
(statearr_35492[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35492;
})();
var inst_35097 = (state_35308[(2)]);
var inst_35098 = (oops.state._STAR_runtime_state_STAR_ = inst_35091);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35493 = state_35308;
(statearr_35493[(75)] = inst_35098);

return statearr_35493;
})();
var statearr_35494_36232 = state_35308__$1;
(statearr_35494_36232[(2)] = inst_35097);

(statearr_35494_36232[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (174))){
var inst_35230 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35495_36233 = state_35308__$1;
(statearr_35495_36233[(2)] = inst_35230);

(statearr_35495_36233[(1)] = (171));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (182))){
var inst_35240 = (state_35308[(19)]);
var inst_35295 = (state_35308[(2)]);
var inst_35296 = cljs.core.next(inst_35240);
var inst_35182 = inst_35296;
var inst_35183 = null;
var inst_35184 = (0);
var inst_35185 = (0);
var state_35308__$1 = (function (){var statearr_35496 = state_35308;
(statearr_35496[(76)] = inst_35295);

(statearr_35496[(44)] = inst_35185);

(statearr_35496[(77)] = inst_35182);

(statearr_35496[(68)] = inst_35183);

(statearr_35496[(45)] = inst_35184);

return statearr_35496;
})();
var statearr_35497_36234 = state_35308__$1;
(statearr_35497_36234[(2)] = null);

(statearr_35497_36234[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (193))){
var inst_35289 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35498_36235 = state_35308__$1;
(statearr_35498_36235[(2)] = inst_35289);

(statearr_35498_36235[(1)] = (190));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (40))){
var inst_34698 = (state_35308[(42)]);
var _ = (function (){var statearr_35499 = state_35308;
(statearr_35499[(4)] = cljs.core.cons((42),(state_35308[(4)])));

return statearr_35499;
})();
var ___$1 = (function (){var statearr_35500 = state_35308;
(statearr_35500[(4)] = cljs.core.cons((43),(state_35308[(4)])));

return statearr_35500;
})();
var inst_34716 = oops.core.validate_object_access_dynamically(inst_34698,(0),"scrollTop",true,true,true);
var state_35308__$1 = state_35308;
if(inst_34716){
var statearr_35501_36236 = state_35308__$1;
(statearr_35501_36236[(1)] = (44));

} else {
var statearr_35502_36237 = state_35308__$1;
(statearr_35502_36237[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (129))){
var state_35308__$1 = state_35308;
var statearr_35503_36238 = state_35308__$1;
(statearr_35503_36238[(2)] = null);

(statearr_35503_36238[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (91))){
var state_35308__$1 = state_35308;
var statearr_35504_36239 = state_35308__$1;
(statearr_35504_36239[(2)] = null);

(statearr_35504_36239[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (117))){
var inst_35142 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35505_36240 = state_35308__$1;
(statearr_35505_36240[(2)] = inst_35142);

(statearr_35505_36240[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (172))){
var inst_35219 = (state_35308[(78)]);
var inst_35218 = (state_35308[(79)]);
var inst_35226 = (inst_35218[(0)]);
var inst_35227 = inst_35219.call(inst_35226);
var state_35308__$1 = state_35308;
var statearr_35506_36241 = state_35308__$1;
(statearr_35506_36241[(2)] = inst_35227);

(statearr_35506_36241[(1)] = (174));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (108))){
var inst_34985 = (state_35308[(80)]);
var inst_34878 = (state_35308[(7)]);
var inst_34984 = (state_35308[(81)]);
var inst_34983 = (state_35308[(2)]);
var inst_34984__$1 = [inst_34878,inst_34983];
var inst_34985__$1 = (inst_34984__$1[(1)]);
var inst_34986 = oops.state.get_last_access_modifier();
var inst_34987 = oops.core.validate_fn_call_dynamically(inst_34985__$1,inst_34986);
var state_35308__$1 = (function (){var statearr_35507 = state_35308;
(statearr_35507[(80)] = inst_34985__$1);

(statearr_35507[(81)] = inst_34984__$1);

return statearr_35507;
})();
if(inst_34987){
var statearr_35508_36242 = state_35308__$1;
(statearr_35508_36242[(1)] = (109));

} else {
var statearr_35509_36243 = state_35308__$1;
(statearr_35509_36243[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (156))){
var inst_35176 = (state_35308[(2)]);
var _ = (function (){var statearr_35510 = state_35308;
(statearr_35510[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35510;
})();
var state_35308__$1 = state_35308;
var statearr_35511_36244 = state_35308__$1;
(statearr_35511_36244[(2)] = inst_35176);

(statearr_35511_36244[(1)] = (152));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (181))){
var inst_35249 = (state_35308[(82)]);
var _ = (function (){var statearr_35513 = state_35308;
(statearr_35513[(4)] = cljs.core.cons((183),(state_35308[(4)])));

return statearr_35513;
})();
var ___$1 = (function (){var statearr_35514 = state_35308;
(statearr_35514[(4)] = cljs.core.cons((184),(state_35308[(4)])));

return statearr_35514;
})();
var inst_35271 = oops.core.validate_object_access_dynamically(inst_35249,(0),"remove",true,true,false);
var state_35308__$1 = state_35308;
if(inst_35271){
var statearr_35515_36245 = state_35308__$1;
(statearr_35515_36245[(1)] = (185));

} else {
var statearr_35516_36246 = state_35308__$1;
(statearr_35516_36246[(1)] = (186));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (56))){
var inst_34761 = (state_35308[(62)]);
var _ = (function (){var statearr_35517 = state_35308;
(statearr_35517[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35517;
})();
var inst_34767 = (state_35308[(2)]);
var inst_34768 = (oops.state._STAR_runtime_state_STAR_ = inst_34761);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35518 = state_35308;
(statearr_35518[(83)] = inst_34768);

return statearr_35518;
})();
var statearr_35519_36247 = state_35308__$1;
(statearr_35519_36247[(2)] = inst_34767);

(statearr_35519_36247[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (33))){
var _ = (function (){var statearr_35520 = state_35308;
(statearr_35520[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35520;
})();
var state_35308__$1 = state_35308;
var ex35512 = (state_35308__$1[(2)]);
var statearr_35521_36248 = state_35308__$1;
(statearr_35521_36248[(5)] = ex35512);


throw ex35512;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (13))){
var inst_34578 = (state_35308[(13)]);
var inst_34603 = (state_35308[(2)]);
var _ = (function (){var statearr_35522 = state_35308;
(statearr_35522[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35522;
})();
var state_35308__$1 = (function (){var statearr_35523 = state_35308;
(statearr_35523[(84)] = inst_34603);

return statearr_35523;
})();
var statearr_35524_36249 = state_35308__$1;
(statearr_35524_36249[(2)] = inst_34578);

(statearr_35524_36249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (22))){
var state_35308__$1 = state_35308;
var statearr_35525_36250 = state_35308__$1;
(statearr_35525_36250[(2)] = null);

(statearr_35525_36250[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (168))){
var inst_35219 = (state_35308[(78)]);
var inst_35190 = (state_35308[(67)]);
var inst_35218 = (state_35308[(79)]);
var inst_35217 = (state_35308[(2)]);
var inst_35218__$1 = [inst_35190,inst_35217];
var inst_35219__$1 = (inst_35218__$1[(1)]);
var inst_35220 = oops.state.get_last_access_modifier();
var inst_35221 = oops.core.validate_fn_call_dynamically(inst_35219__$1,inst_35220);
var state_35308__$1 = (function (){var statearr_35526 = state_35308;
(statearr_35526[(78)] = inst_35219__$1);

(statearr_35526[(79)] = inst_35218__$1);

return statearr_35526;
})();
if(inst_35221){
var statearr_35527_36251 = state_35308__$1;
(statearr_35527_36251[(1)] = (169));

} else {
var statearr_35528_36252 = state_35308__$1;
(statearr_35528_36252[(1)] = (170));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (90))){
var inst_34878 = (state_35308[(7)]);
var inst_34923 = (inst_34878["querySelector"]);
var state_35308__$1 = state_35308;
var statearr_35529_36253 = state_35308__$1;
(statearr_35529_36253[(2)] = inst_34923);

(statearr_35529_36253[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (109))){
var inst_34985 = (state_35308[(80)]);
var inst_34989 = (inst_34985 == null);
var inst_34990 = cljs.core.not(inst_34989);
var state_35308__$1 = state_35308;
if(inst_34990){
var statearr_35530_36254 = state_35308__$1;
(statearr_35530_36254[(1)] = (112));

} else {
var statearr_35531_36255 = state_35308__$1;
(statearr_35531_36255[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (191))){
var inst_35278 = (state_35308[(11)]);
var inst_35277 = (state_35308[(85)]);
var inst_35285 = (inst_35277[(0)]);
var inst_35286 = inst_35278.call(inst_35285);
var state_35308__$1 = state_35308;
var statearr_35532_36256 = state_35308__$1;
(statearr_35532_36256[(2)] = inst_35286);

(statearr_35532_36256[(1)] = (193));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (143))){
var inst_35113 = (state_35308[(53)]);
var inst_34878 = (state_35308[(7)]);
var inst_35112 = (state_35308[(86)]);
var inst_35111 = (state_35308[(2)]);
var inst_35112__$1 = [inst_34878,inst_35111];
var inst_35113__$1 = (inst_35112__$1[(1)]);
var inst_35114 = oops.state.get_last_access_modifier();
var inst_35115 = oops.core.validate_fn_call_dynamically(inst_35113__$1,inst_35114);
var state_35308__$1 = (function (){var statearr_35533 = state_35308;
(statearr_35533[(53)] = inst_35113__$1);

(statearr_35533[(86)] = inst_35112__$1);

return statearr_35533;
})();
if(inst_35115){
var statearr_35534_36257 = state_35308__$1;
(statearr_35534_36257[(1)] = (144));

} else {
var statearr_35535_36258 = state_35308__$1;
(statearr_35535_36258[(1)] = (145));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (178))){
var inst_35240 = (state_35308[(19)]);
var inst_35244 = cljs.core.chunk_first(inst_35240);
var inst_35245 = cljs.core.chunk_rest(inst_35240);
var inst_35246 = cljs.core.count(inst_35244);
var inst_35182 = inst_35245;
var inst_35183 = inst_35244;
var inst_35184 = inst_35246;
var inst_35185 = (0);
var state_35308__$1 = (function (){var statearr_35536 = state_35308;
(statearr_35536[(44)] = inst_35185);

(statearr_35536[(77)] = inst_35182);

(statearr_35536[(68)] = inst_35183);

(statearr_35536[(45)] = inst_35184);

return statearr_35536;
})();
var statearr_35537_36259 = state_35308__$1;
(statearr_35537_36259[(2)] = null);

(statearr_35537_36259[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (167))){
var state_35308__$1 = state_35308;
var statearr_35538_36260 = state_35308__$1;
(statearr_35538_36260[(2)] = null);

(statearr_35538_36260[(1)] = (168));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (36))){
var inst_34667 = (state_35308[(58)]);
var inst_34691 = (state_35308[(2)]);
var _ = (function (){var statearr_35539 = state_35308;
(statearr_35539[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35539;
})();
var state_35308__$1 = (function (){var statearr_35540 = state_35308;
(statearr_35540[(87)] = inst_34691);

return statearr_35540;
})();
var statearr_35541_36261 = state_35308__$1;
(statearr_35541_36261[(2)] = inst_34667);

(statearr_35541_36261[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (41))){
var inst_34726 = (state_35308[(16)]);
var inst_34724 = (state_35308[(2)]);
var inst_34726__$1 = pbits_exercises.main.get_element_by_id("current-exercise-contents");
var inst_34731 = oops.state._STAR_runtime_state_STAR_;
var inst_34732 = (new Error());
var inst_34733 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34734 = oops.state.prepare_state(inst_34726__$1,inst_34732,inst_34733);
var inst_34735 = (oops.state._STAR_runtime_state_STAR_ = inst_34734);
var state_35308__$1 = (function (){var statearr_35542 = state_35308;
(statearr_35542[(88)] = inst_34724);

(statearr_35542[(16)] = inst_34726__$1);

(statearr_35542[(89)] = inst_34731);

(statearr_35542[(90)] = inst_34735);

return statearr_35542;
})();
var statearr_35543_36262 = state_35308__$1;
(statearr_35543_36262[(2)] = null);

(statearr_35543_36262[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (187))){
var inst_35278 = (state_35308[(11)]);
var inst_35249 = (state_35308[(82)]);
var inst_35277 = (state_35308[(85)]);
var inst_35276 = (state_35308[(2)]);
var inst_35277__$1 = [inst_35249,inst_35276];
var inst_35278__$1 = (inst_35277__$1[(1)]);
var inst_35279 = oops.state.get_last_access_modifier();
var inst_35280 = oops.core.validate_fn_call_dynamically(inst_35278__$1,inst_35279);
var state_35308__$1 = (function (){var statearr_35544 = state_35308;
(statearr_35544[(11)] = inst_35278__$1);

(statearr_35544[(85)] = inst_35277__$1);

return statearr_35544;
})();
if(inst_35280){
var statearr_35545_36263 = state_35308__$1;
(statearr_35545_36263[(1)] = (188));

} else {
var statearr_35546_36264 = state_35308__$1;
(statearr_35546_36264[(1)] = (189));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (118))){
var inst_35011 = (state_35308[(47)]);
var inst_35015 = cljs.core.chunk_first(inst_35011);
var inst_35016 = cljs.core.chunk_rest(inst_35011);
var inst_35017 = cljs.core.count(inst_35015);
var inst_34884 = inst_35016;
var inst_34885 = inst_35015;
var inst_34886 = inst_35017;
var inst_34887 = (0);
var state_35308__$1 = (function (){var statearr_35547 = state_35308;
(statearr_35547[(22)] = inst_34885);

(statearr_35547[(23)] = inst_34886);

(statearr_35547[(24)] = inst_34887);

(statearr_35547[(25)] = inst_34884);

return statearr_35547;
})();
var statearr_35548_36265 = state_35308__$1;
(statearr_35548_36265[(2)] = null);

(statearr_35548_36265[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (150))){
var inst_34878 = (state_35308[(7)]);
var _ = (function (){var statearr_35550 = state_35308;
(statearr_35550[(4)] = cljs.core.cons((152),(state_35308[(4)])));

return statearr_35550;
})();
var ___$1 = (function (){var statearr_35551 = state_35308;
(statearr_35551[(4)] = cljs.core.cons((153),(state_35308[(4)])));

return statearr_35551;
})();
var inst_35171 = oops.core.validate_object_access_dynamically(inst_34878,(0),"childNodes",true,true,false);
var state_35308__$1 = state_35308;
if(inst_35171){
var statearr_35552_36266 = state_35308__$1;
(statearr_35552_36266[(1)] = (154));

} else {
var statearr_35553_36267 = state_35308__$1;
(statearr_35553_36267[(1)] = (155));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (162))){
var inst_35190 = (state_35308[(67)]);
var _ = (function (){var statearr_35555 = state_35308;
(statearr_35555[(4)] = cljs.core.cons((164),(state_35308[(4)])));

return statearr_35555;
})();
var ___$1 = (function (){var statearr_35556 = state_35308;
(statearr_35556[(4)] = cljs.core.cons((165),(state_35308[(4)])));

return statearr_35556;
})();
var inst_35212 = oops.core.validate_object_access_dynamically(inst_35190,(0),"remove",true,true,false);
var state_35308__$1 = state_35308;
if(inst_35212){
var statearr_35557_36268 = state_35308__$1;
(statearr_35557_36268[(1)] = (166));

} else {
var statearr_35558_36269 = state_35308__$1;
(statearr_35558_36269[(1)] = (167));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (184))){
var _ = (function (){var statearr_35559 = state_35308;
(statearr_35559[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35559;
})();
var state_35308__$1 = state_35308;
var ex35549 = (state_35308__$1[(2)]);
var statearr_35560_36270 = state_35308__$1;
(statearr_35560_36270[(5)] = ex35549);


throw ex35549;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (89))){
var _ = (function (){var statearr_35561 = state_35308;
(statearr_35561[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35561;
})();
var state_35308__$1 = state_35308;
var ex35554 = (state_35308__$1[(2)]);
var statearr_35562_36271 = state_35308__$1;
(statearr_35562_36271[(5)] = ex35554);


throw ex35554;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (100))){
var inst_34898 = (state_35308[(91)]);
var inst_34896 = (state_35308[(92)]);
var inst_34878 = (state_35308[(7)]);
var inst_34950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34951 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_34952 = [inst_34898,"button"];
var inst_34953 = cljs.core.PersistentHashMap.fromArrays(inst_34951,inst_34952);
var inst_34954 = [new cljs.core.Keyword(null,"button.list-group-item.list-group-item-action","button.list-group-item.list-group-item-action",-1711772481),inst_34953,inst_34896];
var inst_34955 = (new cljs.core.PersistentVector(null,3,(5),inst_34950,inst_34954,null));
var inst_34956 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34955], 0));
var inst_34963 = oops.state._STAR_runtime_state_STAR_;
var inst_34964 = (new Error());
var inst_34965 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34966 = oops.state.prepare_state(inst_34878,inst_34964,inst_34965);
var inst_34967 = (oops.state._STAR_runtime_state_STAR_ = inst_34966);
var state_35308__$1 = (function (){var statearr_35563 = state_35308;
(statearr_35563[(93)] = inst_34956);

(statearr_35563[(94)] = inst_34967);

(statearr_35563[(56)] = inst_34963);

return statearr_35563;
})();
var statearr_35564_36272 = state_35308__$1;
(statearr_35564_36272[(2)] = null);

(statearr_35564_36272[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (131))){
var inst_35026 = (state_35308[(29)]);
var inst_35055 = (state_35308[(95)]);
var inst_35056 = (state_35308[(12)]);
var inst_35063 = (inst_35055[(0)]);
var inst_35064 = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35026)].join('');
var inst_35065 = inst_35056.call(inst_35063,inst_35064);
var state_35308__$1 = state_35308;
var statearr_35566_36273 = state_35308__$1;
(statearr_35566_36273[(2)] = inst_35065);

(statearr_35566_36273[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (122))){
var inst_35074 = (state_35308[(96)]);
var inst_35074__$1 = (state_35308[(2)]);
var state_35308__$1 = (function (){var statearr_35567 = state_35308;
(statearr_35567[(96)] = inst_35074__$1);

return statearr_35567;
})();
if(cljs.core.truth_(inst_35074__$1)){
var statearr_35568_36274 = state_35308__$1;
(statearr_35568_36274[(1)] = (134));

} else {
var statearr_35569_36275 = state_35308__$1;
(statearr_35569_36275[(1)] = (135));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (43))){
var _ = (function (){var statearr_35570 = state_35308;
(statearr_35570[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35570;
})();
var state_35308__$1 = state_35308;
var ex35565 = (state_35308__$1[(2)]);
var statearr_35571_36276 = state_35308__$1;
(statearr_35571_36276[(5)] = ex35565);


throw ex35565;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (61))){
var inst_34783 = (state_35308[(18)]);
var inst_34787 = (inst_34783 == null);
var inst_34788 = cljs.core.not(inst_34787);
var state_35308__$1 = state_35308;
if(inst_34788){
var statearr_35572_36277 = state_35308__$1;
(statearr_35572_36277[(1)] = (64));

} else {
var statearr_35573_36278 = state_35308__$1;
(statearr_35573_36278[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (29))){
var inst_34635 = (state_35308[(14)]);
var inst_34642 = (state_35308[(28)]);
var inst_34653 = (state_35308[(2)]);
var inst_34654 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34653], 0));
var inst_34655 = inst_34635.call(inst_34642,inst_34654);
var state_35308__$1 = state_35308;
var statearr_35574_36279 = state_35308__$1;
(statearr_35574_36279[(2)] = inst_34655);

(statearr_35574_36279[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (151))){
var inst_35151 = (state_35308[(97)]);
var inst_35179 = (state_35308[(2)]);
var inst_35180 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_35151,inst_35179);
var inst_35181 = cljs.core.seq(inst_35180);
var inst_35182 = inst_35181;
var inst_35183 = null;
var inst_35184 = (0);
var inst_35185 = (0);
var state_35308__$1 = (function (){var statearr_35575 = state_35308;
(statearr_35575[(44)] = inst_35185);

(statearr_35575[(77)] = inst_35182);

(statearr_35575[(68)] = inst_35183);

(statearr_35575[(45)] = inst_35184);

return statearr_35575;
})();
var statearr_35576_36280 = state_35308__$1;
(statearr_35576_36280[(2)] = null);

(statearr_35576_36280[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (44))){
var inst_34698 = (state_35308[(42)]);
var inst_34718 = (inst_34698["scrollTop"] = (0));
var state_35308__$1 = state_35308;
var statearr_35577_36281 = state_35308__$1;
(statearr_35577_36281[(2)] = inst_34718);

(statearr_35577_36281[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (93))){
var inst_34928 = (state_35308[(55)]);
var inst_34932 = (inst_34928 == null);
var inst_34933 = cljs.core.not(inst_34932);
var state_35308__$1 = state_35308;
if(inst_34933){
var statearr_35578_36282 = state_35308__$1;
(statearr_35578_36282[(1)] = (96));

} else {
var statearr_35579_36283 = state_35308__$1;
(statearr_35579_36283[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (6))){
var inst_34567 = (state_35308[(98)]);
var inst_34563 = (state_35308[(36)]);
var inst_34572 = (state_35308[(2)]);
var inst_34573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34563,inst_34567,inst_34572);
var inst_34574 = pbits_exercises.main.read_exercise_BANG_(inst_34573);
var state_35308__$1 = state_35308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35308__$1,(3),inst_34574);
} else {
if((state_val_35309 === (111))){
var inst_34999 = (state_35308[(2)]);
var _ = (function (){var statearr_35580 = state_35308;
(statearr_35580[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35580;
})();
var state_35308__$1 = state_35308;
var statearr_35581_36284 = state_35308__$1;
(statearr_35581_36284[(2)] = inst_34999);

(statearr_35581_36284[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (28))){
var inst_34649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34650 = [new cljs.core.Keyword(null,"i.fs-1.text-danger.fa-solid.fa-circle-xmark","i.fs-1.text-danger.fa-solid.fa-circle-xmark",-1205233948)];
var inst_34651 = (new cljs.core.PersistentVector(null,1,(5),inst_34649,inst_34650,null));
var state_35308__$1 = state_35308;
var statearr_35582_36285 = state_35308__$1;
(statearr_35582_36285[(2)] = inst_34651);

(statearr_35582_36285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (134))){
var inst_35027 = (state_35308[(50)]);
var inst_35074 = (state_35308[(96)]);
var inst_35076 = (inst_35027.cljs$core$IFn$_invoke$arity$1 ? inst_35027.cljs$core$IFn$_invoke$arity$1(inst_35074) : inst_35027.call(null,inst_35074));
var state_35308__$1 = state_35308;
var statearr_35583_36286 = state_35308__$1;
(statearr_35583_36286[(2)] = inst_35076);

(statearr_35583_36286[(1)] = (136));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (64))){
var inst_34576 = (state_35308[(27)]);
var inst_34782 = (state_35308[(17)]);
var inst_34783 = (state_35308[(18)]);
var inst_34790 = (inst_34782[(0)]);
var inst_34791 = new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(inst_34576);
var inst_34792 = crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_34791], 0));
var inst_34793 = inst_34783.call(inst_34790,inst_34792);
var state_35308__$1 = state_35308;
var statearr_35584_36287 = state_35308__$1;
(statearr_35584_36287[(2)] = inst_34793);

(statearr_35584_36287[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (189))){
var state_35308__$1 = state_35308;
var statearr_35585_36288 = state_35308__$1;
(statearr_35585_36288[(2)] = null);

(statearr_35585_36288[(1)] = (190));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (155))){
var state_35308__$1 = state_35308;
var statearr_35586_36289 = state_35308__$1;
(statearr_35586_36289[(2)] = null);

(statearr_35586_36289[(1)] = (156));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (103))){
var inst_34946 = (state_35308[(70)]);
var inst_34885 = (state_35308[(22)]);
var inst_34895 = (state_35308[(99)]);
var inst_34898 = (state_35308[(91)]);
var inst_34899 = (state_35308[(71)]);
var inst_34576 = (state_35308[(27)]);
var inst_34897 = (state_35308[(100)]);
var inst_34886 = (state_35308[(23)]);
var inst_34896 = (state_35308[(92)]);
var inst_34956 = (state_35308[(93)]);
var inst_34565 = (state_35308[(35)]);
var inst_34878 = (state_35308[(7)]);
var inst_34887 = (state_35308[(24)]);
var inst_34884 = (state_35308[(25)]);
var inst_34563 = (state_35308[(36)]);
var inst_34894 = (state_35308[(101)]);
var inst_35002 = (state_35308[(2)]);
var inst_35003 = (function (){var idx = inst_34895;
var temp__5802__auto__ = inst_34946;
var first_unsolved = inst_34565;
var btn = inst_34956;
var exercises = inst_34563;
var map__34892 = inst_34894;
var i__34882 = inst_34887;
var name = inst_34896;
var exercises_bar = inst_34878;
var count__34881 = inst_34886;
var solved_QMARK_ = inst_34897;
var current_exercise = inst_34576;
var chunk__34880 = inst_34885;
var element_id = inst_34898;
var seq__34879 = inst_34884;
var update_btn_BANG_ = inst_34899;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pbits_exercises.main.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-exercise","current-exercise",-2089454447),idx);
});
})();
var inst_35004 = utils.bootstrap.on_click(inst_34956,inst_35003);
var inst_35005 = (inst_34899.cljs$core$IFn$_invoke$arity$1 ? inst_34899.cljs$core$IFn$_invoke$arity$1(inst_34956) : inst_34899.call(null,inst_34956));
var state_35308__$1 = (function (){var statearr_35587 = state_35308;
(statearr_35587[(102)] = inst_35004);

(statearr_35587[(103)] = inst_35002);

return statearr_35587;
})();
var statearr_35588_36290 = state_35308__$1;
(statearr_35588_36290[(2)] = inst_35005);

(statearr_35588_36290[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (170))){
var state_35308__$1 = state_35308;
var statearr_35589_36291 = state_35308__$1;
(statearr_35589_36291[(2)] = null);

(statearr_35589_36291[(1)] = (171));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (51))){
var inst_34726 = (state_35308[(16)]);
var inst_34748 = (inst_34726["innerHTML"] = "");
var state_35308__$1 = state_35308;
var statearr_35590_36292 = state_35308__$1;
(statearr_35590_36292[(2)] = inst_34748);

(statearr_35590_36292[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (25))){
var state_35308__$1 = state_35308;
var statearr_35591_36293 = state_35308__$1;
(statearr_35591_36293[(2)] = null);

(statearr_35591_36293[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (166))){
var inst_35190 = (state_35308[(67)]);
var inst_35214 = (inst_35190["remove"]);
var state_35308__$1 = state_35308;
var statearr_35592_36294 = state_35308__$1;
(statearr_35592_36294[(2)] = inst_35214);

(statearr_35592_36294[(1)] = (168));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (34))){
var inst_34576 = (state_35308[(27)]);
var inst_34667 = (state_35308[(58)]);
var inst_34687 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_34576);
var inst_34688 = (inst_34667["innerText"] = inst_34687);
var state_35308__$1 = state_35308;
var statearr_35593_36295 = state_35308__$1;
(statearr_35593_36295[(2)] = inst_34688);

(statearr_35593_36295[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (146))){
var inst_35127 = (state_35308[(2)]);
var _ = (function (){var statearr_35594 = state_35308;
(statearr_35594[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35594;
})();
var state_35308__$1 = state_35308;
var statearr_35595_36296 = state_35308__$1;
(statearr_35595_36296[(2)] = inst_35127);

(statearr_35595_36296[(1)] = (139));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (125))){
var inst_34878 = (state_35308[(7)]);
var inst_35051 = (inst_34878["querySelector"]);
var state_35308__$1 = state_35308;
var statearr_35597_36297 = state_35308__$1;
(statearr_35597_36297[(2)] = inst_35051);

(statearr_35597_36297[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (148))){
var state_35308__$1 = state_35308;
var statearr_35598_36298 = state_35308__$1;
(statearr_35598_36298[(2)] = null);

(statearr_35598_36298[(1)] = (149));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (17))){
var _ = (function (){var statearr_35599 = state_35308;
(statearr_35599[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35599;
})();
var state_35308__$1 = state_35308;
var ex35596 = (state_35308__$1[(2)]);
var statearr_35600_36299 = state_35308__$1;
(statearr_35600_36299[(5)] = ex35596);


throw ex35596;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (3))){
var inst_34578 = (state_35308[(13)]);
var inst_34576 = (state_35308[(2)]);
var inst_34578__$1 = pbits_exercises.main.get_element_by_id("current-exercise-solved-mark");
var inst_34583 = oops.state._STAR_runtime_state_STAR_;
var inst_34584 = (new Error());
var inst_34585 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34586 = oops.state.prepare_state(inst_34578__$1,inst_34584,inst_34585);
var inst_34587 = (oops.state._STAR_runtime_state_STAR_ = inst_34586);
var state_35308__$1 = (function (){var statearr_35601 = state_35308;
(statearr_35601[(27)] = inst_34576);

(statearr_35601[(13)] = inst_34578__$1);

(statearr_35601[(104)] = inst_34583);

(statearr_35601[(105)] = inst_34587);

return statearr_35601;
})();
var statearr_35602_36300 = state_35308__$1;
(statearr_35602_36300[(2)] = null);

(statearr_35602_36300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (12))){
var state_35308__$1 = state_35308;
var statearr_35603_36301 = state_35308__$1;
(statearr_35603_36301[(2)] = null);

(statearr_35603_36301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (152))){
var inst_35156 = (state_35308[(106)]);
var _ = (function (){var statearr_35604 = state_35308;
(statearr_35604[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35604;
})();
var inst_35162 = (state_35308[(2)]);
var inst_35163 = (oops.state._STAR_runtime_state_STAR_ = inst_35156);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35605 = state_35308;
(statearr_35605[(107)] = inst_35163);

return statearr_35605;
})();
var statearr_35606_36302 = state_35308__$1;
(statearr_35606_36302[(2)] = inst_35162);

(statearr_35606_36302[(1)] = (151));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (2))){
var inst_34565 = (state_35308[(35)]);
var inst_34563 = (state_35308[(36)]);
var inst_34563__$1 = (state_35308[(2)]);
var inst_34564 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"solved?","solved?",-246730001),inst_34563__$1);
var inst_34565__$1 = cljs.core.first(inst_34564);
var inst_34566 = cljs.core.deref(pbits_exercises.main.state);
var inst_34567 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_34566,new cljs.core.Keyword(null,"current-exercise","current-exercise",-2089454447),(-1));
var state_35308__$1 = (function (){var statearr_35607 = state_35308;
(statearr_35607[(98)] = inst_34567);

(statearr_35607[(35)] = inst_34565__$1);

(statearr_35607[(36)] = inst_34563__$1);

return statearr_35607;
})();
if(cljs.core.truth_(inst_34565__$1)){
var statearr_35608_36303 = state_35308__$1;
(statearr_35608_36303[(1)] = (4));

} else {
var statearr_35609_36304 = state_35308__$1;
(statearr_35609_36304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (66))){
var inst_34796 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35610_36305 = state_35308__$1;
(statearr_35610_36305[(2)] = inst_34796);

(statearr_35610_36305[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (142))){
var state_35308__$1 = state_35308;
var statearr_35611_36306 = state_35308__$1;
(statearr_35611_36306[(2)] = null);

(statearr_35611_36306[(1)] = (143));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (107))){
var state_35308__$1 = state_35308;
var statearr_35612_36307 = state_35308__$1;
(statearr_35612_36307[(2)] = null);

(statearr_35612_36307[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (23))){
var inst_34661 = (state_35308[(2)]);
var _ = (function (){var statearr_35613 = state_35308;
(statearr_35613[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35613;
})();
var state_35308__$1 = state_35308;
var statearr_35614_36308 = state_35308__$1;
(statearr_35614_36308[(2)] = inst_34661);

(statearr_35614_36308[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (47))){
var inst_34726 = (state_35308[(16)]);
var _ = (function (){var statearr_35615 = state_35308;
(statearr_35615[(4)] = cljs.core.cons((49),(state_35308[(4)])));

return statearr_35615;
})();
var ___$1 = (function (){var statearr_35616 = state_35308;
(statearr_35616[(4)] = cljs.core.cons((50),(state_35308[(4)])));

return statearr_35616;
})();
var inst_34746 = oops.core.validate_object_access_dynamically(inst_34726,(0),"innerHTML",true,true,true);
var state_35308__$1 = state_35308;
if(inst_34746){
var statearr_35617_36309 = state_35308__$1;
(statearr_35617_36309[(1)] = (51));

} else {
var statearr_35618_36310 = state_35308__$1;
(statearr_35618_36310[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (180))){
var inst_35299 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35619_36311 = state_35308__$1;
(statearr_35619_36311[(2)] = inst_35299);

(statearr_35619_36311[(1)] = (177));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (158))){
var inst_35306 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35308__$1,inst_35306);
} else {
if((state_val_35309 === (35))){
var state_35308__$1 = state_35308;
var statearr_35620_36312 = state_35308__$1;
(statearr_35620_36312[(2)] = null);

(statearr_35620_36312[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (127))){
var inst_35055 = (state_35308[(95)]);
var inst_35056 = (state_35308[(12)]);
var inst_34878 = (state_35308[(7)]);
var inst_35054 = (state_35308[(2)]);
var inst_35055__$1 = [inst_34878,inst_35054];
var inst_35056__$1 = (inst_35055__$1[(1)]);
var inst_35057 = oops.state.get_last_access_modifier();
var inst_35058 = oops.core.validate_fn_call_dynamically(inst_35056__$1,inst_35057);
var state_35308__$1 = (function (){var statearr_35621 = state_35308;
(statearr_35621[(95)] = inst_35055__$1);

(statearr_35621[(12)] = inst_35056__$1);

return statearr_35621;
})();
if(inst_35058){
var statearr_35622_36313 = state_35308__$1;
(statearr_35622_36313[(1)] = (128));

} else {
var statearr_35623_36314 = state_35308__$1;
(statearr_35623_36314[(1)] = (129));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (82))){
var inst_34576 = (state_35308[(27)]);
var inst_34565 = (state_35308[(35)]);
var inst_34878 = (state_35308[(7)]);
var inst_34563 = (state_35308[(36)]);
var inst_35146 = (state_35308[(2)]);
var inst_35151 = (function (){var exercises = inst_34563;
var first_unsolved = inst_34565;
var current_exercise = inst_34576;
var exercises_bar = inst_34878;
return (function (p1__34560_SHARP_){
var idx = parseInt(cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var target_obj_35624 = p1__34560_SHARP_;
var _STAR_runtime_state_STAR__orig_val__35626 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35627 = oops.state.prepare_state(target_obj_35624,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35627);

try{var next_obj_35625 = ((oops.core.validate_object_access_dynamically(target_obj_35624,(0),"id",true,true,false))?(target_obj_35624["id"]):null);
return next_obj_35625;
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35626);
}})(),"-")));
return (idx >= cljs.core.count(exercises));
});
})();
var inst_35156 = oops.state._STAR_runtime_state_STAR_;
var inst_35157 = (new Error());
var inst_35158 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35159 = oops.state.prepare_state(inst_34878,inst_35157,inst_35158);
var inst_35160 = (oops.state._STAR_runtime_state_STAR_ = inst_35159);
var state_35308__$1 = (function (){var statearr_35628 = state_35308;
(statearr_35628[(108)] = inst_35146);

(statearr_35628[(97)] = inst_35151);

(statearr_35628[(109)] = inst_35160);

(statearr_35628[(106)] = inst_35156);

return statearr_35628;
})();
var statearr_35629_36315 = state_35308__$1;
(statearr_35629_36315[(2)] = null);

(statearr_35629_36315[(1)] = (150));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (76))){
var inst_34850 = (state_35308[(110)]);
var _ = (function (){var statearr_35630 = state_35308;
(statearr_35630[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35630;
})();
var inst_34856 = (state_35308[(2)]);
var inst_34857 = (oops.state._STAR_runtime_state_STAR_ = inst_34850);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35631 = state_35308;
(statearr_35631[(111)] = inst_34857);

return statearr_35631;
})();
var statearr_35632_36316 = state_35308__$1;
(statearr_35632_36316[(2)] = inst_34856);

(statearr_35632_36316[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (97))){
var state_35308__$1 = state_35308;
var statearr_35634_36317 = state_35308__$1;
(statearr_35634_36317[(2)] = null);

(statearr_35634_36317[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (19))){
var state_35308__$1 = state_35308;
var statearr_35635_36318 = state_35308__$1;
(statearr_35635_36318[(2)] = null);

(statearr_35635_36318[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (57))){
var _ = (function (){var statearr_35636 = state_35308;
(statearr_35636[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35636;
})();
var state_35308__$1 = state_35308;
var ex35633 = (state_35308__$1[(2)]);
var statearr_35637_36319 = state_35308__$1;
(statearr_35637_36319[(5)] = ex35633);


throw ex35633;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (68))){
var inst_34813 = (state_35308[(8)]);
var inst_34845 = (state_35308[(2)]);
var inst_34850 = oops.state._STAR_runtime_state_STAR_;
var inst_34851 = (new Error());
var inst_34852 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34853 = oops.state.prepare_state(inst_34813,inst_34851,inst_34852);
var inst_34854 = (oops.state._STAR_runtime_state_STAR_ = inst_34853);
var state_35308__$1 = (function (){var statearr_35638 = state_35308;
(statearr_35638[(112)] = inst_34845);

(statearr_35638[(110)] = inst_34850);

(statearr_35638[(113)] = inst_34854);

return statearr_35638;
})();
var statearr_35639_36320 = state_35308__$1;
(statearr_35639_36320[(2)] = null);

(statearr_35639_36320[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (11))){
var inst_34578 = (state_35308[(13)]);
var inst_34600 = (inst_34578["innerHTML"] = "");
var state_35308__$1 = state_35308;
var statearr_35640_36321 = state_35308__$1;
(statearr_35640_36321[(2)] = inst_34600);

(statearr_35640_36321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (115))){
var inst_35011 = (state_35308[(47)]);
var inst_35013 = cljs.core.chunked_seq_QMARK_(inst_35011);
var state_35308__$1 = state_35308;
if(inst_35013){
var statearr_35641_36322 = state_35308__$1;
(statearr_35641_36322[(1)] = (118));

} else {
var statearr_35642_36323 = state_35308__$1;
(statearr_35642_36323[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (9))){
var inst_34583 = (state_35308[(104)]);
var _ = (function (){var statearr_35643 = state_35308;
(statearr_35643[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35643;
})();
var inst_34589 = (state_35308[(2)]);
var inst_34590 = (oops.state._STAR_runtime_state_STAR_ = inst_34583);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35644 = state_35308;
(statearr_35644[(114)] = inst_34590);

return statearr_35644;
})();
var statearr_35645_36324 = state_35308__$1;
(statearr_35645_36324[(2)] = inst_34589);

(statearr_35645_36324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (145))){
var state_35308__$1 = state_35308;
var statearr_35646_36325 = state_35308__$1;
(statearr_35646_36325[(2)] = null);

(statearr_35646_36325[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (5))){
var inst_34563 = (state_35308[(36)]);
var inst_34570 = cljs.core.first(inst_34563);
var state_35308__$1 = state_35308;
var statearr_35647_36326 = state_35308__$1;
(statearr_35647_36326[(2)] = inst_34570);

(statearr_35647_36326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (112))){
var inst_34985 = (state_35308[(80)]);
var inst_34956 = (state_35308[(93)]);
var inst_34984 = (state_35308[(81)]);
var inst_34992 = (inst_34984[(0)]);
var inst_34993 = inst_34985.call(inst_34992,inst_34956);
var state_35308__$1 = state_35308;
var statearr_35648_36327 = state_35308__$1;
(statearr_35648_36327[(2)] = inst_34993);

(statearr_35648_36327[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (179))){
var inst_35249 = (state_35308[(82)]);
var inst_35240 = (state_35308[(19)]);
var inst_35249__$1 = cljs.core.first(inst_35240);
var inst_35256 = oops.state._STAR_runtime_state_STAR_;
var inst_35257 = (new Error());
var inst_35258 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35259 = oops.state.prepare_state(inst_35249__$1,inst_35257,inst_35258);
var inst_35260 = (oops.state._STAR_runtime_state_STAR_ = inst_35259);
var state_35308__$1 = (function (){var statearr_35649 = state_35308;
(statearr_35649[(82)] = inst_35249__$1);

(statearr_35649[(115)] = inst_35256);

(statearr_35649[(116)] = inst_35260);

return statearr_35649;
})();
var statearr_35650_36328 = state_35308__$1;
(statearr_35650_36328[(2)] = null);

(statearr_35650_36328[(1)] = (181));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (83))){
var inst_34885 = (state_35308[(22)]);
var inst_34895 = (state_35308[(99)]);
var inst_34898 = (state_35308[(91)]);
var inst_34576 = (state_35308[(27)]);
var inst_34897 = (state_35308[(100)]);
var inst_34886 = (state_35308[(23)]);
var inst_34896 = (state_35308[(92)]);
var inst_34565 = (state_35308[(35)]);
var inst_34878 = (state_35308[(7)]);
var inst_34887 = (state_35308[(24)]);
var inst_34884 = (state_35308[(25)]);
var inst_34563 = (state_35308[(36)]);
var inst_34894 = (state_35308[(101)]);
var inst_34893 = cljs.core._nth(inst_34885,inst_34887);
var inst_34894__$1 = cljs.core.__destructure_map(inst_34893);
var inst_34895__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34894__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var inst_34896__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34894__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_34897__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34894__$1,new cljs.core.Keyword(null,"solved?","solved?",-246730001));
var inst_34898__$1 = ["exercise-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34895__$1),"-btn"].join('');
var inst_34899 = (function (){var idx = inst_34895__$1;
var first_unsolved = inst_34565;
var exercises = inst_34563;
var map__34892 = inst_34894__$1;
var i__34882 = inst_34887;
var name = inst_34896__$1;
var exercises_bar = inst_34878;
var count__34881 = inst_34886;
var solved_QMARK_ = inst_34897__$1;
var current_exercise = inst_34576;
var chunk__34880 = inst_34885;
var element_id = inst_34898__$1;
var seq__34879 = inst_34884;
return (function (btn){
var target_obj_35651_36329 = btn;
var _STAR_runtime_state_STAR__orig_val__35653_36330 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35654_36331 = oops.state.prepare_state(target_obj_35651_36329,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35654_36331);

try{var parent_obj_35652_36332 = target_obj_35651_36329;
if(oops.core.validate_object_access_dynamically(parent_obj_35652_36332,(0),"disabled",true,true,true)){
(parent_obj_35652_36332["disabled"] = (idx > cljs.core.get.cljs$core$IFn$_invoke$arity$3(first_unsolved,new cljs.core.Keyword(null,"idx","idx",1053688473),Infinity)));
} else {
}

}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35653_36330);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(current_exercise))){
var G__35655 = btn;
var target_obj_35656_36333 = G__35655;
var _STAR_runtime_state_STAR__orig_val__35662_36334 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35663_36335 = oops.state.prepare_state(target_obj_35656_36333,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35663_36335);

try{var call_info_35658_36336 = (function (){var target_obj_35659 = (function (){var next_obj_35660 = ((oops.core.validate_object_access_dynamically(target_obj_35656_36333,(0),"classList",true,true,false))?(target_obj_35656_36333["classList"]):null);
return next_obj_35660;
})();
return [target_obj_35659,(function (){var next_obj_35661 = ((oops.core.validate_object_access_dynamically(target_obj_35659,(0),"add",true,true,false))?(target_obj_35659["add"]):null);
return next_obj_35661;
})()];
})();
var fn_35657_36337 = (call_info_35658_36336[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35657_36337,oops.state.get_last_access_modifier())){
if((!((fn_35657_36337 == null)))){
fn_35657_36337.call((call_info_35658_36336[(0)]),"active");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35662_36334);
}
var target_obj_35664_36338 = G__35655;
var _STAR_runtime_state_STAR__orig_val__35670_36339 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35671_36340 = oops.state.prepare_state(target_obj_35664_36338,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35671_36340);

try{var call_info_35666_36341 = (function (){var target_obj_35667 = (function (){var next_obj_35668 = ((oops.core.validate_object_access_dynamically(target_obj_35664_36338,(0),"classList",true,true,false))?(target_obj_35664_36338["classList"]):null);
return next_obj_35668;
})();
return [target_obj_35667,(function (){var next_obj_35669 = ((oops.core.validate_object_access_dynamically(target_obj_35667,(0),"remove",true,true,false))?(target_obj_35667["remove"]):null);
return next_obj_35669;
})()];
})();
var fn_35665_36342 = (call_info_35666_36341[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35665_36342,oops.state.get_last_access_modifier())){
if((!((fn_35665_36342 == null)))){
fn_35665_36342.call((call_info_35666_36341[(0)]),"list-group-item-success");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35670_36339);
}
var target_obj_35672_36343 = G__35655;
var _STAR_runtime_state_STAR__orig_val__35678_36344 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35679_36345 = oops.state.prepare_state(target_obj_35672_36343,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35679_36345);

try{var call_info_35674_36346 = (function (){var target_obj_35675 = (function (){var next_obj_35676 = ((oops.core.validate_object_access_dynamically(target_obj_35672_36343,(0),"classList",true,true,false))?(target_obj_35672_36343["classList"]):null);
return next_obj_35676;
})();
return [target_obj_35675,(function (){var next_obj_35677 = ((oops.core.validate_object_access_dynamically(target_obj_35675,(0),"remove",true,true,false))?(target_obj_35675["remove"]):null);
return next_obj_35677;
})()];
})();
var fn_35673_36347 = (call_info_35674_36346[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35673_36347,oops.state.get_last_access_modifier())){
if((!((fn_35673_36347 == null)))){
fn_35673_36347.call((call_info_35674_36346[(0)]),"list-group-item-primary");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35678_36344);
}
return G__35655;
} else {
var G__35680 = btn;
var target_obj_35681_36348 = G__35680;
var _STAR_runtime_state_STAR__orig_val__35687_36349 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35688_36350 = oops.state.prepare_state(target_obj_35681_36348,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35688_36350);

try{var call_info_35683_36351 = (function (){var target_obj_35684 = (function (){var next_obj_35685 = ((oops.core.validate_object_access_dynamically(target_obj_35681_36348,(0),"classList",true,true,false))?(target_obj_35681_36348["classList"]):null);
return next_obj_35685;
})();
return [target_obj_35684,(function (){var next_obj_35686 = ((oops.core.validate_object_access_dynamically(target_obj_35684,(0),"remove",true,true,false))?(target_obj_35684["remove"]):null);
return next_obj_35686;
})()];
})();
var fn_35682_36352 = (call_info_35683_36351[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35682_36352,oops.state.get_last_access_modifier())){
if((!((fn_35682_36352 == null)))){
fn_35682_36352.call((call_info_35683_36351[(0)]),"active");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35687_36349);
}
var target_obj_35689_36353 = G__35680;
var _STAR_runtime_state_STAR__orig_val__35692_36354 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35693_36355 = oops.state.prepare_state(target_obj_35689_36353,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35693_36355);

try{var call_info_35691_36356 = oops.core.get_selector_call_info_dynamically(target_obj_35689_36353,(cljs.core.truth_(solved_QMARK_)?new cljs.core.Keyword(null,"classList.add","classList.add",-1511518896):new cljs.core.Keyword(null,"classList.remove","classList.remove",-847813241)));
var fn_35690_36357 = (call_info_35691_36356[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35690_36357,oops.state.get_last_access_modifier())){
if((!((fn_35690_36357 == null)))){
fn_35690_36357.call((call_info_35691_36356[(0)]),"list-group-item-success");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35692_36354);
}
var target_obj_35694_36358 = G__35680;
var _STAR_runtime_state_STAR__orig_val__35697_36359 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35698_36360 = oops.state.prepare_state(target_obj_35694_36358,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35698_36360);

try{var call_info_35696_36361 = oops.core.get_selector_call_info_dynamically(target_obj_35694_36358,(cljs.core.truth_(solved_QMARK_)?new cljs.core.Keyword(null,"classList.remove","classList.remove",-847813241):new cljs.core.Keyword(null,"classList.add","classList.add",-1511518896)));
var fn_35695_36362 = (call_info_35696_36361[(1)]);
if(oops.core.validate_fn_call_dynamically(fn_35695_36362,oops.state.get_last_access_modifier())){
if((!((fn_35695_36362 == null)))){
fn_35695_36362.call((call_info_35696_36361[(0)]),"list-group-item-primary");
} else {
}
} else {
}
}finally {(oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35697_36359);
}
return G__35680;
}
});
})();
var inst_34906 = oops.state._STAR_runtime_state_STAR_;
var inst_34907 = (new Error());
var inst_34908 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34909 = oops.state.prepare_state(inst_34878,inst_34907,inst_34908);
var inst_34910 = (oops.state._STAR_runtime_state_STAR_ = inst_34909);
var state_35308__$1 = (function (){var statearr_35699 = state_35308;
(statearr_35699[(99)] = inst_34895__$1);

(statearr_35699[(91)] = inst_34898__$1);

(statearr_35699[(71)] = inst_34899);

(statearr_35699[(100)] = inst_34897__$1);

(statearr_35699[(92)] = inst_34896__$1);

(statearr_35699[(117)] = inst_34910);

(statearr_35699[(40)] = inst_34906);

(statearr_35699[(101)] = inst_34894__$1);

return statearr_35699;
})();
var statearr_35700_36363 = state_35308__$1;
(statearr_35700_36363[(2)] = null);

(statearr_35700_36363[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (138))){
var inst_35026 = (state_35308[(29)]);
var inst_34885 = (state_35308[(22)]);
var inst_35027 = (state_35308[(50)]);
var inst_34576 = (state_35308[(27)]);
var inst_35023 = (state_35308[(46)]);
var inst_34886 = (state_35308[(23)]);
var inst_35074 = (state_35308[(96)]);
var inst_35024 = (state_35308[(30)]);
var inst_34565 = (state_35308[(35)]);
var inst_35084 = (state_35308[(32)]);
var inst_35011 = (state_35308[(47)]);
var inst_34878 = (state_35308[(7)]);
var inst_35022 = (state_35308[(48)]);
var inst_34887 = (state_35308[(24)]);
var inst_34563 = (state_35308[(36)]);
var inst_35025 = (state_35308[(49)]);
var inst_35130 = (state_35308[(2)]);
var inst_35131 = (function (){var idx = inst_35023;
var temp__5802__auto__ = inst_35074;
var first_unsolved = inst_34565;
var btn = inst_35084;
var exercises = inst_34563;
var i__34882 = inst_34887;
var name = inst_35024;
var exercises_bar = inst_34878;
var temp__5804__auto__ = inst_35011;
var count__34881 = inst_34886;
var solved_QMARK_ = inst_35025;
var current_exercise = inst_34576;
var chunk__34880 = inst_34885;
var element_id = inst_35026;
var seq__34879 = inst_35011;
var update_btn_BANG_ = inst_35027;
var map__35020 = inst_35022;
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pbits_exercises.main.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-exercise","current-exercise",-2089454447),idx);
});
})();
var inst_35132 = utils.bootstrap.on_click(inst_35084,inst_35131);
var inst_35133 = (inst_35027.cljs$core$IFn$_invoke$arity$1 ? inst_35027.cljs$core$IFn$_invoke$arity$1(inst_35084) : inst_35027.call(null,inst_35084));
var state_35308__$1 = (function (){var statearr_35701 = state_35308;
(statearr_35701[(118)] = inst_35130);

(statearr_35701[(119)] = inst_35132);

return statearr_35701;
})();
var statearr_35702_36364 = state_35308__$1;
(statearr_35702_36364[(2)] = inst_35133);

(statearr_35702_36364[(1)] = (136));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (14))){
var inst_34578 = (state_35308[(13)]);
var _ = (function (){var statearr_35703 = state_35308;
(statearr_35703[(4)] = cljs.core.cons((16),(state_35308[(4)])));

return statearr_35703;
})();
var ___$1 = (function (){var statearr_35704 = state_35308;
(statearr_35704[(4)] = cljs.core.cons((17),(state_35308[(4)])));

return statearr_35704;
})();
var inst_34628 = oops.core.validate_object_access_dynamically(inst_34578,(0),"appendChild",true,true,false);
var state_35308__$1 = state_35308;
if(inst_34628){
var statearr_35705_36365 = state_35308__$1;
(statearr_35705_36365[(1)] = (18));

} else {
var statearr_35706_36366 = state_35308__$1;
(statearr_35706_36366[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (45))){
var state_35308__$1 = state_35308;
var statearr_35707_36367 = state_35308__$1;
(statearr_35707_36367[(2)] = null);

(statearr_35707_36367[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (53))){
var inst_34726 = (state_35308[(16)]);
var inst_34751 = (state_35308[(2)]);
var _ = (function (){var statearr_35708 = state_35308;
(statearr_35708[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35708;
})();
var state_35308__$1 = (function (){var statearr_35709 = state_35308;
(statearr_35709[(120)] = inst_34751);

return statearr_35709;
})();
var statearr_35710_36368 = state_35308__$1;
(statearr_35710_36368[(2)] = inst_34726);

(statearr_35710_36368[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (78))){
var inst_34576 = (state_35308[(27)]);
var inst_34813 = (state_35308[(8)]);
var inst_34867 = new cljs.core.Keyword(null,"solved?","solved?",-246730001).cljs$core$IFn$_invoke$arity$1(inst_34576);
var inst_34868 = cljs.core.not(inst_34867);
var inst_34869 = (inst_34813["disabled"] = inst_34868);
var state_35308__$1 = state_35308;
var statearr_35711_36369 = state_35308__$1;
(statearr_35711_36369[(2)] = inst_34869);

(statearr_35711_36369[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (132))){
var state_35308__$1 = state_35308;
var statearr_35712_36370 = state_35308__$1;
(statearr_35712_36370[(2)] = null);

(statearr_35712_36370[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (26))){
var inst_34658 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35714_36371 = state_35308__$1;
(statearr_35714_36371[(2)] = inst_34658);

(statearr_35714_36371[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (123))){
var inst_35034 = (state_35308[(52)]);
var _ = (function (){var statearr_35715 = state_35308;
(statearr_35715[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35715;
})();
var inst_35040 = (state_35308[(2)]);
var inst_35041 = (oops.state._STAR_runtime_state_STAR_ = inst_35034);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35716 = state_35308;
(statearr_35716[(121)] = inst_35041);

return statearr_35716;
})();
var statearr_35717_36372 = state_35308__$1;
(statearr_35717_36372[(2)] = inst_35040);

(statearr_35717_36372[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (140))){
var _ = (function (){var statearr_35718 = state_35308;
(statearr_35718[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35718;
})();
var state_35308__$1 = state_35308;
var ex35713 = (state_35308__$1[(2)]);
var statearr_35719_36373 = state_35308__$1;
(statearr_35719_36373[(5)] = ex35713);


throw ex35713;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (16))){
var inst_34613 = (state_35308[(122)]);
var _ = (function (){var statearr_35723 = state_35308;
(statearr_35723[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35723;
})();
var inst_34619 = (state_35308[(2)]);
var inst_34620 = (oops.state._STAR_runtime_state_STAR_ = inst_34613);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35724 = state_35308;
(statearr_35724[(123)] = inst_34620);

return statearr_35724;
})();
var statearr_35725_36374 = state_35308__$1;
(statearr_35725_36374[(2)] = inst_34619);

(statearr_35725_36374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (133))){
var inst_35068 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35726_36375 = state_35308__$1;
(statearr_35726_36375[(2)] = inst_35068);

(statearr_35726_36375[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (163))){
var inst_35185 = (state_35308[(44)]);
var inst_35182 = (state_35308[(77)]);
var inst_35183 = (state_35308[(68)]);
var inst_35184 = (state_35308[(45)]);
var inst_35236 = (state_35308[(2)]);
var inst_35237 = (inst_35185 + (1));
var tmp35720 = inst_35182;
var tmp35721 = inst_35183;
var tmp35722 = inst_35184;
var inst_35182__$1 = tmp35720;
var inst_35183__$1 = tmp35721;
var inst_35184__$1 = tmp35722;
var inst_35185__$1 = inst_35237;
var state_35308__$1 = (function (){var statearr_35727 = state_35308;
(statearr_35727[(44)] = inst_35185__$1);

(statearr_35727[(77)] = inst_35182__$1);

(statearr_35727[(68)] = inst_35183__$1);

(statearr_35727[(45)] = inst_35184__$1);

(statearr_35727[(124)] = inst_35236);

return statearr_35727;
})();
var statearr_35728_36376 = state_35308__$1;
(statearr_35728_36376[(2)] = null);

(statearr_35728_36376[(1)] = (157));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (81))){
var inst_34886 = (state_35308[(23)]);
var inst_34887 = (state_35308[(24)]);
var inst_34889 = (inst_34887 < inst_34886);
var inst_34890 = inst_34889;
var state_35308__$1 = state_35308;
if(cljs.core.truth_(inst_34890)){
var statearr_35729_36377 = state_35308__$1;
(statearr_35729_36377[(1)] = (83));

} else {
var statearr_35730_36378 = state_35308__$1;
(statearr_35730_36378[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (120))){
var inst_35139 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35731_36379 = state_35308__$1;
(statearr_35731_36379[(2)] = inst_35139);

(statearr_35731_36379[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (79))){
var state_35308__$1 = state_35308;
var statearr_35732_36380 = state_35308__$1;
(statearr_35732_36380[(2)] = null);

(statearr_35732_36380[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (38))){
var state_35308__$1 = state_35308;
var statearr_35733_36381 = state_35308__$1;
(statearr_35733_36381[(2)] = null);

(statearr_35733_36381[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (173))){
var state_35308__$1 = state_35308;
var statearr_35734_36382 = state_35308__$1;
(statearr_35734_36382[(2)] = null);

(statearr_35734_36382[(1)] = (174));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (126))){
var state_35308__$1 = state_35308;
var statearr_35736_36383 = state_35308__$1;
(statearr_35736_36383[(2)] = null);

(statearr_35736_36383[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (98))){
var inst_34940 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35737_36384 = state_35308__$1;
(statearr_35737_36384[(2)] = inst_34940);

(statearr_35737_36384[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (124))){
var _ = (function (){var statearr_35738 = state_35308;
(statearr_35738[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35738;
})();
var state_35308__$1 = state_35308;
var ex35735 = (state_35308__$1[(2)]);
var statearr_35739_36385 = state_35308__$1;
(statearr_35739_36385[(5)] = ex35735);


throw ex35735;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (171))){
var inst_35233 = (state_35308[(2)]);
var _ = (function (){var statearr_35740 = state_35308;
(statearr_35740[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35740;
})();
var state_35308__$1 = state_35308;
var statearr_35741_36386 = state_35308__$1;
(statearr_35741_36386[(2)] = inst_35233);

(statearr_35741_36386[(1)] = (164));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (87))){
var inst_34946 = (state_35308[(70)]);
var inst_34946__$1 = (state_35308[(2)]);
var state_35308__$1 = (function (){var statearr_35742 = state_35308;
(statearr_35742[(70)] = inst_34946__$1);

return statearr_35742;
})();
if(cljs.core.truth_(inst_34946__$1)){
var statearr_35743_36387 = state_35308__$1;
(statearr_35743_36387[(1)] = (99));

} else {
var statearr_35744_36388 = state_35308__$1;
(statearr_35744_36388[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (169))){
var inst_35219 = (state_35308[(78)]);
var inst_35223 = (inst_35219 == null);
var inst_35224 = cljs.core.not(inst_35223);
var state_35308__$1 = state_35308;
if(inst_35224){
var statearr_35745_36389 = state_35308__$1;
(statearr_35745_36389[(1)] = (172));

} else {
var statearr_35746_36390 = state_35308__$1;
(statearr_35746_36390[(1)] = (173));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (160))){
var inst_35182 = (state_35308[(77)]);
var inst_35240 = (state_35308[(19)]);
var inst_35240__$1 = cljs.core.seq(inst_35182);
var state_35308__$1 = (function (){var statearr_35747 = state_35308;
(statearr_35747[(19)] = inst_35240__$1);

return statearr_35747;
})();
if(inst_35240__$1){
var statearr_35748_36391 = state_35308__$1;
(statearr_35748_36391[(1)] = (175));

} else {
var statearr_35749_36392 = state_35308__$1;
(statearr_35749_36392[(1)] = (176));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (30))){
var inst_34667 = (state_35308[(58)]);
var _ = (function (){var statearr_35750 = state_35308;
(statearr_35750[(4)] = cljs.core.cons((32),(state_35308[(4)])));

return statearr_35750;
})();
var ___$1 = (function (){var statearr_35751 = state_35308;
(statearr_35751[(4)] = cljs.core.cons((33),(state_35308[(4)])));

return statearr_35751;
})();
var inst_34685 = oops.core.validate_object_access_dynamically(inst_34667,(0),"innerText",true,true,true);
var state_35308__$1 = state_35308;
if(inst_34685){
var statearr_35752_36393 = state_35308__$1;
(statearr_35752_36393[(1)] = (34));

} else {
var statearr_35753_36394 = state_35308__$1;
(statearr_35753_36394[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (73))){
var inst_34813 = (state_35308[(8)]);
var inst_34842 = (state_35308[(2)]);
var _ = (function (){var statearr_35755 = state_35308;
(statearr_35755[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35755;
})();
var state_35308__$1 = (function (){var statearr_35756 = state_35308;
(statearr_35756[(125)] = inst_34842);

return statearr_35756;
})();
var statearr_35757_36395 = state_35308__$1;
(statearr_35757_36395[(2)] = inst_34813);

(statearr_35757_36395[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (96))){
var inst_34927 = (state_35308[(54)]);
var inst_34898 = (state_35308[(91)]);
var inst_34928 = (state_35308[(55)]);
var inst_34935 = (inst_34927[(0)]);
var inst_34936 = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34898)].join('');
var inst_34937 = inst_34928.call(inst_34935,inst_34936);
var state_35308__$1 = state_35308;
var statearr_35758_36396 = state_35308__$1;
(statearr_35758_36396[(2)] = inst_34937);

(statearr_35758_36396[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (10))){
var _ = (function (){var statearr_35760 = state_35308;
(statearr_35760[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35760;
})();
var state_35308__$1 = state_35308;
var ex35754 = (state_35308__$1[(2)]);
var statearr_35761_36397 = state_35308__$1;
(statearr_35761_36397[(5)] = ex35754);


throw ex35754;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (18))){
var inst_34578 = (state_35308[(13)]);
var inst_34630 = (inst_34578["appendChild"]);
var state_35308__$1 = state_35308;
var statearr_35762_36398 = state_35308__$1;
(statearr_35762_36398[(2)] = inst_34630);

(statearr_35762_36398[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (105))){
var _ = (function (){var statearr_35763 = state_35308;
(statearr_35763[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35763;
})();
var state_35308__$1 = state_35308;
var ex35759 = (state_35308__$1[(2)]);
var statearr_35764_36399 = state_35308__$1;
(statearr_35764_36399[(5)] = ex35759);


throw ex35759;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (185))){
var inst_35249 = (state_35308[(82)]);
var inst_35273 = (inst_35249["remove"]);
var state_35308__$1 = state_35308;
var statearr_35765_36400 = state_35308__$1;
(statearr_35765_36400[(2)] = inst_35273);

(statearr_35765_36400[(1)] = (187));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (52))){
var state_35308__$1 = state_35308;
var statearr_35766_36401 = state_35308__$1;
(statearr_35766_36401[(2)] = null);

(statearr_35766_36401[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (114))){
var inst_34996 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35767_36402 = state_35308__$1;
(statearr_35767_36402[(2)] = inst_34996);

(statearr_35767_36402[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (147))){
var inst_35113 = (state_35308[(53)]);
var inst_35084 = (state_35308[(32)]);
var inst_35112 = (state_35308[(86)]);
var inst_35120 = (inst_35112[(0)]);
var inst_35121 = inst_35113.call(inst_35120,inst_35084);
var state_35308__$1 = state_35308;
var statearr_35768_36403 = state_35308__$1;
(statearr_35768_36403[(2)] = inst_35121);

(statearr_35768_36403[(1)] = (149));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (67))){
var inst_34813 = (state_35308[(8)]);
var _ = (function (){var statearr_35769 = state_35308;
(statearr_35769[(4)] = cljs.core.cons((69),(state_35308[(4)])));

return statearr_35769;
})();
var ___$1 = (function (){var statearr_35770 = state_35308;
(statearr_35770[(4)] = cljs.core.cons((70),(state_35308[(4)])));

return statearr_35770;
})();
var inst_34833 = oops.core.validate_object_access_dynamically(inst_34813,(0),"hidden",true,true,true);
var state_35308__$1 = state_35308;
if(inst_34833){
var statearr_35771_36404 = state_35308__$1;
(statearr_35771_36404[(1)] = (71));

} else {
var statearr_35772_36405 = state_35308__$1;
(statearr_35772_36405[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (161))){
var inst_35304 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35773_36406 = state_35308__$1;
(statearr_35773_36406[(2)] = inst_35304);

(statearr_35773_36406[(1)] = (158));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (71))){
var inst_34576 = (state_35308[(27)]);
var inst_34813 = (state_35308[(8)]);
var inst_34563 = (state_35308[(36)]);
var inst_34835 = new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(inst_34576);
var inst_34836 = cljs.core.count(inst_34563);
var inst_34837 = (inst_34836 - (1));
var inst_34838 = (inst_34835 >= inst_34837);
var inst_34839 = (inst_34813["hidden"] = inst_34838);
var state_35308__$1 = state_35308;
var statearr_35774_36407 = state_35308__$1;
(statearr_35774_36407[(2)] = inst_34839);

(statearr_35774_36407[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (42))){
var inst_34701 = (state_35308[(126)]);
var _ = (function (){var statearr_35775 = state_35308;
(statearr_35775[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35775;
})();
var inst_34707 = (state_35308[(2)]);
var inst_34708 = (oops.state._STAR_runtime_state_STAR_ = inst_34701);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35776 = state_35308;
(statearr_35776[(127)] = inst_34708);

return statearr_35776;
})();
var statearr_35777_36408 = state_35308__$1;
(statearr_35777_36408[(2)] = inst_34707);

(statearr_35777_36408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (80))){
var inst_34813 = (state_35308[(8)]);
var inst_34872 = (state_35308[(2)]);
var _ = (function (){var statearr_35778 = state_35308;
(statearr_35778[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35778;
})();
var state_35308__$1 = (function (){var statearr_35779 = state_35308;
(statearr_35779[(128)] = inst_34872);

return statearr_35779;
})();
var statearr_35780_36409 = state_35308__$1;
(statearr_35780_36409[(2)] = inst_34813);

(statearr_35780_36409[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (37))){
var inst_34698 = (state_35308[(42)]);
var inst_34698__$1 = pbits_exercises.main.get_element_by_id("current-exercise-container");
var inst_34701 = oops.state._STAR_runtime_state_STAR_;
var inst_34702 = (new Error());
var inst_34703 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34704 = oops.state.prepare_state(inst_34698__$1,inst_34702,inst_34703);
var inst_34705 = (oops.state._STAR_runtime_state_STAR_ = inst_34704);
var state_35308__$1 = (function (){var statearr_35781 = state_35308;
(statearr_35781[(42)] = inst_34698__$1);

(statearr_35781[(126)] = inst_34701);

(statearr_35781[(129)] = inst_34705);

return statearr_35781;
})();
var statearr_35782_36410 = state_35308__$1;
(statearr_35782_36410[(2)] = null);

(statearr_35782_36410[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (183))){
var inst_35256 = (state_35308[(115)]);
var _ = (function (){var statearr_35783 = state_35308;
(statearr_35783[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35783;
})();
var inst_35262 = (state_35308[(2)]);
var inst_35263 = (oops.state._STAR_runtime_state_STAR_ = inst_35256);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35784 = state_35308;
(statearr_35784[(130)] = inst_35263);

return statearr_35784;
})();
var statearr_35785_36411 = state_35308__$1;
(statearr_35785_36411[(2)] = inst_35262);

(statearr_35785_36411[(1)] = (182));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (63))){
var inst_34799 = (state_35308[(2)]);
var _ = (function (){var statearr_35786 = state_35308;
(statearr_35786[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35786;
})();
var state_35308__$1 = state_35308;
var statearr_35787_36412 = state_35308__$1;
(statearr_35787_36412[(2)] = inst_34799);

(statearr_35787_36412[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (94))){
var state_35308__$1 = state_35308;
var statearr_35788_36413 = state_35308__$1;
(statearr_35788_36413[(2)] = null);

(statearr_35788_36413[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (8))){
var inst_34578 = (state_35308[(13)]);
var inst_34606 = (state_35308[(2)]);
var inst_34613 = oops.state._STAR_runtime_state_STAR_;
var inst_34614 = (new Error());
var inst_34615 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34616 = oops.state.prepare_state(inst_34578,inst_34614,inst_34615);
var inst_34617 = (oops.state._STAR_runtime_state_STAR_ = inst_34616);
var state_35308__$1 = (function (){var statearr_35789 = state_35308;
(statearr_35789[(131)] = inst_34617);

(statearr_35789[(122)] = inst_34613);

(statearr_35789[(132)] = inst_34606);

return statearr_35789;
})();
var statearr_35790_36414 = state_35308__$1;
(statearr_35790_36414[(2)] = null);

(statearr_35790_36414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (190))){
var inst_35292 = (state_35308[(2)]);
var _ = (function (){var statearr_35791 = state_35308;
(statearr_35791[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35791;
})();
var state_35308__$1 = state_35308;
var statearr_35792_36415 = state_35308__$1;
(statearr_35792_36415[(2)] = inst_35292);

(statearr_35792_36415[(1)] = (183));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (177))){
var inst_35302 = (state_35308[(2)]);
var state_35308__$1 = state_35308;
var statearr_35793_36416 = state_35308__$1;
(statearr_35793_36416[(2)] = inst_35302);

(statearr_35793_36416[(1)] = (161));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (49))){
var inst_34731 = (state_35308[(89)]);
var _ = (function (){var statearr_35794 = state_35308;
(statearr_35794[(4)] = cljs.core.rest((state_35308[(4)])));

return statearr_35794;
})();
var inst_34737 = (state_35308[(2)]);
var inst_34738 = (oops.state._STAR_runtime_state_STAR_ = inst_34731);
var ___$1 = (function (){var temp__5804__auto__ = (state_35308[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35308__$1 = (function (){var statearr_35795 = state_35308;
(statearr_35795[(133)] = inst_34738);

return statearr_35795;
})();
var statearr_35796_36417 = state_35308__$1;
(statearr_35796_36417[(2)] = inst_34737);

(statearr_35796_36417[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35309 === (84))){
var inst_35011 = (state_35308[(47)]);
var inst_34884 = (state_35308[(25)]);
var inst_35011__$1 = cljs.core.seq(inst_34884);
var state_35308__$1 = (function (){var statearr_35797 = state_35308;
(statearr_35797[(47)] = inst_35011__$1);

return statearr_35797;
})();
if(inst_35011__$1){
var statearr_35798_36418 = state_35308__$1;
(statearr_35798_36418[(1)] = (115));

} else {
var statearr_35799_36419 = state_35308__$1;
(statearr_35799_36419[(1)] = (116));

}

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
return (function() {
var pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto____0 = (function (){
var statearr_35800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35800[(0)] = pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto__);

(statearr_35800[(1)] = (1));

return statearr_35800;
});
var pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto____1 = (function (state_35308){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_35308);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e35801){var ex__14606__auto__ = e35801;
var statearr_35802_36420 = state_35308;
(statearr_35802_36420[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_35308[(4)]))){
var statearr_35803_36421 = state_35308;
(statearr_35803_36421[(1)] = cljs.core.first((state_35308[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36422 = state_35308;
state_35308 = G__36422;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto__ = function(state_35308){
switch(arguments.length){
case 0:
return pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto____1.call(this,state_35308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto____0;
pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto____1;
return pbits_exercises$main$update_ui_BANG__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_35804 = f__14688__auto__();
(statearr_35804[(6)] = c__14687__auto__);

return statearr_35804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.init = (function pbits_exercises$main$init(){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_35888){
var state_val_35889 = (state_35888[(1)]);
if((state_val_35889 === (7))){
var state_35888__$1 = state_35888;
var statearr_35890_36423 = state_35888__$1;
(statearr_35890_36423[(2)] = null);

(statearr_35890_36423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (20))){
var state_35888__$1 = state_35888;
var statearr_35891_36424 = state_35888__$1;
(statearr_35891_36424[(2)] = null);

(statearr_35891_36424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (1))){
var inst_35806 = (state_35888[(7)]);
var inst_35806__$1 = pbits_exercises.main.get_element_by_id("main-container");
var inst_35811 = oops.state._STAR_runtime_state_STAR_;
var inst_35812 = (new Error());
var inst_35813 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35814 = oops.state.prepare_state(inst_35806__$1,inst_35812,inst_35813);
var inst_35815 = (oops.state._STAR_runtime_state_STAR_ = inst_35814);
var state_35888__$1 = (function (){var statearr_35892 = state_35888;
(statearr_35892[(8)] = inst_35815);

(statearr_35892[(9)] = inst_35811);

(statearr_35892[(7)] = inst_35806__$1);

return statearr_35892;
})();
var statearr_35893_36425 = state_35888__$1;
(statearr_35893_36425[(2)] = null);

(statearr_35893_36425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (4))){
var inst_35811 = (state_35888[(9)]);
var _ = (function (){var statearr_35894 = state_35888;
(statearr_35894[(4)] = cljs.core.rest((state_35888[(4)])));

return statearr_35894;
})();
var inst_35817 = (state_35888[(2)]);
var inst_35818 = (oops.state._STAR_runtime_state_STAR_ = inst_35811);
var ___$1 = (function (){var temp__5804__auto__ = (state_35888[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35888__$1 = (function (){var statearr_35895 = state_35888;
(statearr_35895[(10)] = inst_35818);

return statearr_35895;
})();
var statearr_35896_36426 = state_35888__$1;
(statearr_35896_36426[(2)] = inst_35817);

(statearr_35896_36426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (15))){
var inst_35862 = (state_35888[(11)]);
var inst_35863 = (state_35888[(12)]);
var inst_35806 = (state_35888[(7)]);
var inst_35861 = (state_35888[(2)]);
var inst_35862__$1 = [inst_35806,inst_35861];
var inst_35863__$1 = (inst_35862__$1[(1)]);
var inst_35864 = oops.state.get_last_access_modifier();
var inst_35865 = oops.core.validate_fn_call_dynamically(inst_35863__$1,inst_35864);
var state_35888__$1 = (function (){var statearr_35897 = state_35888;
(statearr_35897[(11)] = inst_35862__$1);

(statearr_35897[(12)] = inst_35863__$1);

return statearr_35897;
})();
if(inst_35865){
var statearr_35898_36427 = state_35888__$1;
(statearr_35898_36427[(1)] = (16));

} else {
var statearr_35899_36428 = state_35888__$1;
(statearr_35899_36428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (21))){
var inst_35874 = (state_35888[(2)]);
var state_35888__$1 = state_35888;
var statearr_35900_36429 = state_35888__$1;
(statearr_35900_36429[(2)] = inst_35874);

(statearr_35900_36429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (13))){
var inst_35806 = (state_35888[(7)]);
var inst_35858 = (inst_35806["appendChild"]);
var state_35888__$1 = state_35888;
var statearr_35901_36430 = state_35888__$1;
(statearr_35901_36430[(2)] = inst_35858);

(statearr_35901_36430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (22))){
var inst_35885 = (state_35888[(2)]);
var inst_35886 = pbits_exercises.main.hide_overlay_BANG_();
var state_35888__$1 = (function (){var statearr_35902 = state_35888;
(statearr_35902[(13)] = inst_35885);

return statearr_35902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35888__$1,inst_35886);
} else {
if((state_val_35889 === (6))){
var inst_35806 = (state_35888[(7)]);
var inst_35828 = (inst_35806["innerHTML"] = "");
var state_35888__$1 = state_35888;
var statearr_35903_36431 = state_35888__$1;
(statearr_35903_36431[(2)] = inst_35828);

(statearr_35903_36431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (17))){
var state_35888__$1 = state_35888;
var statearr_35905_36432 = state_35888__$1;
(statearr_35905_36432[(2)] = null);

(statearr_35905_36432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (3))){
var inst_35806 = (state_35888[(7)]);
var inst_35834 = (state_35888[(2)]);
var inst_35841 = oops.state._STAR_runtime_state_STAR_;
var inst_35842 = (new Error());
var inst_35843 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35844 = oops.state.prepare_state(inst_35806,inst_35842,inst_35843);
var inst_35845 = (oops.state._STAR_runtime_state_STAR_ = inst_35844);
var state_35888__$1 = (function (){var statearr_35906 = state_35888;
(statearr_35906[(14)] = inst_35845);

(statearr_35906[(15)] = inst_35834);

(statearr_35906[(16)] = inst_35841);

return statearr_35906;
})();
var statearr_35907_36433 = state_35888__$1;
(statearr_35907_36433[(2)] = null);

(statearr_35907_36433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (12))){
var _ = (function (){var statearr_35908 = state_35888;
(statearr_35908[(4)] = cljs.core.rest((state_35888[(4)])));

return statearr_35908;
})();
var state_35888__$1 = state_35888;
var ex35904 = (state_35888__$1[(2)]);
var statearr_35909_36434 = state_35888__$1;
(statearr_35909_36434[(5)] = ex35904);


throw ex35904;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (2))){
var inst_35806 = (state_35888[(7)]);
var _ = (function (){var statearr_35910 = state_35888;
(statearr_35910[(4)] = cljs.core.cons((4),(state_35888[(4)])));

return statearr_35910;
})();
var ___$1 = (function (){var statearr_35911 = state_35888;
(statearr_35911[(4)] = cljs.core.cons((5),(state_35888[(4)])));

return statearr_35911;
})();
var inst_35826 = oops.core.validate_object_access_dynamically(inst_35806,(0),"innerHTML",true,true,true);
var state_35888__$1 = state_35888;
if(inst_35826){
var statearr_35912_36435 = state_35888__$1;
(statearr_35912_36435[(1)] = (6));

} else {
var statearr_35913_36436 = state_35888__$1;
(statearr_35913_36436[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (19))){
var inst_35862 = (state_35888[(11)]);
var inst_35863 = (state_35888[(12)]);
var inst_35870 = (inst_35862[(0)]);
var inst_35871 = inst_35863.call(inst_35870,pbits_exercises.main.main_container);
var state_35888__$1 = state_35888;
var statearr_35914_36437 = state_35888__$1;
(statearr_35914_36437[(2)] = inst_35871);

(statearr_35914_36437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (11))){
var inst_35841 = (state_35888[(16)]);
var _ = (function (){var statearr_35916 = state_35888;
(statearr_35916[(4)] = cljs.core.rest((state_35888[(4)])));

return statearr_35916;
})();
var inst_35847 = (state_35888[(2)]);
var inst_35848 = (oops.state._STAR_runtime_state_STAR_ = inst_35841);
var ___$1 = (function (){var temp__5804__auto__ = (state_35888[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__13837__auto__ = temp__5804__auto__;
throw e__13837__auto__;
} else {
return null;
}
})();
var state_35888__$1 = (function (){var statearr_35917 = state_35888;
(statearr_35917[(17)] = inst_35848);

return statearr_35917;
})();
var statearr_35918_36438 = state_35888__$1;
(statearr_35918_36438[(2)] = inst_35847);

(statearr_35918_36438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (9))){
var inst_35806 = (state_35888[(7)]);
var _ = (function (){var statearr_35919 = state_35888;
(statearr_35919[(4)] = cljs.core.cons((11),(state_35888[(4)])));

return statearr_35919;
})();
var ___$1 = (function (){var statearr_35920 = state_35888;
(statearr_35920[(4)] = cljs.core.cons((12),(state_35888[(4)])));

return statearr_35920;
})();
var inst_35856 = oops.core.validate_object_access_dynamically(inst_35806,(0),"appendChild",true,true,false);
var state_35888__$1 = state_35888;
if(inst_35856){
var statearr_35921_36439 = state_35888__$1;
(statearr_35921_36439[(1)] = (13));

} else {
var statearr_35922_36440 = state_35888__$1;
(statearr_35922_36440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (5))){
var _ = (function (){var statearr_35923 = state_35888;
(statearr_35923[(4)] = cljs.core.rest((state_35888[(4)])));

return statearr_35923;
})();
var state_35888__$1 = state_35888;
var ex35915 = (state_35888__$1[(2)]);
var statearr_35924_36441 = state_35888__$1;
(statearr_35924_36441[(5)] = ex35915);


throw ex35915;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (14))){
var state_35888__$1 = state_35888;
var statearr_35925_36442 = state_35888__$1;
(statearr_35925_36442[(2)] = null);

(statearr_35925_36442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (16))){
var inst_35863 = (state_35888[(12)]);
var inst_35867 = (inst_35863 == null);
var inst_35868 = cljs.core.not(inst_35867);
var state_35888__$1 = state_35888;
if(inst_35868){
var statearr_35926_36443 = state_35888__$1;
(statearr_35926_36443[(1)] = (19));

} else {
var statearr_35927_36444 = state_35888__$1;
(statearr_35927_36444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (10))){
var inst_35880 = (state_35888[(2)]);
var inst_35881 = (function (){return (function (_,___$1,prev,curr){
return pbits_exercises.main.update_ui_BANG_(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-exercise","current-exercise",-2089454447).cljs$core$IFn$_invoke$arity$1(prev),new cljs.core.Keyword(null,"current-exercise","current-exercise",-2089454447).cljs$core$IFn$_invoke$arity$1(curr)));
});
})();
var inst_35882 = cljs.core.add_watch(pbits_exercises.main.state,new cljs.core.Keyword("pbits-exercises.main","ui-update","pbits-exercises.main/ui-update",2086537743),inst_35881);
var inst_35883 = pbits_exercises.main.update_ui_BANG_(true);
var state_35888__$1 = (function (){var statearr_35928 = state_35888;
(statearr_35928[(18)] = inst_35882);

(statearr_35928[(19)] = inst_35880);

return statearr_35928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35888__$1,(22),inst_35883);
} else {
if((state_val_35889 === (18))){
var inst_35877 = (state_35888[(2)]);
var _ = (function (){var statearr_35929 = state_35888;
(statearr_35929[(4)] = cljs.core.rest((state_35888[(4)])));

return statearr_35929;
})();
var state_35888__$1 = state_35888;
var statearr_35930_36445 = state_35888__$1;
(statearr_35930_36445[(2)] = inst_35877);

(statearr_35930_36445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35889 === (8))){
var inst_35806 = (state_35888[(7)]);
var inst_35831 = (state_35888[(2)]);
var _ = (function (){var statearr_35931 = state_35888;
(statearr_35931[(4)] = cljs.core.rest((state_35888[(4)])));

return statearr_35931;
})();
var state_35888__$1 = (function (){var statearr_35932 = state_35888;
(statearr_35932[(20)] = inst_35831);

return statearr_35932;
})();
var statearr_35933_36446 = state_35888__$1;
(statearr_35933_36446[(2)] = inst_35806);

(statearr_35933_36446[(1)] = (4));


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
return (function() {
var pbits_exercises$main$init_$_state_machine__14603__auto__ = null;
var pbits_exercises$main$init_$_state_machine__14603__auto____0 = (function (){
var statearr_35934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35934[(0)] = pbits_exercises$main$init_$_state_machine__14603__auto__);

(statearr_35934[(1)] = (1));

return statearr_35934;
});
var pbits_exercises$main$init_$_state_machine__14603__auto____1 = (function (state_35888){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_35888);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e35935){var ex__14606__auto__ = e35935;
var statearr_35936_36447 = state_35888;
(statearr_35936_36447[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_35888[(4)]))){
var statearr_35937_36448 = state_35888;
(statearr_35937_36448[(1)] = cljs.core.first((state_35888[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36449 = state_35888;
state_35888 = G__36449;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$init_$_state_machine__14603__auto__ = function(state_35888){
switch(arguments.length){
case 0:
return pbits_exercises$main$init_$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$init_$_state_machine__14603__auto____1.call(this,state_35888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$init_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$init_$_state_machine__14603__auto____0;
pbits_exercises$main$init_$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$init_$_state_machine__14603__auto____1;
return pbits_exercises$main$init_$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_35938 = f__14688__auto__();
(statearr_35938[(6)] = c__14687__auto__);

return statearr_35938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.reload_begin_STAR_ = (function pbits_exercises$main$reload_begin_STAR_(done){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_35943){
var state_val_35944 = (state_35943[(1)]);
if((state_val_35944 === (1))){
var inst_35939 = cljs.core.remove_watch(pbits_exercises.main.state,new cljs.core.Keyword("pbits-exercises.main","ui-update","pbits-exercises.main/ui-update",2086537743));
var inst_35940 = utils.bootstrap.hide_modals();
var inst_35941 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_35943__$1 = (function (){var statearr_35945 = state_35943;
(statearr_35945[(7)] = inst_35940);

(statearr_35945[(8)] = inst_35939);

return statearr_35945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35943__$1,inst_35941);
} else {
return null;
}
});
return (function() {
var pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_35946 = [null,null,null,null,null,null,null,null,null];
(statearr_35946[(0)] = pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto__);

(statearr_35946[(1)] = (1));

return statearr_35946;
});
var pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto____1 = (function (state_35943){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_35943);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e35947){var ex__14606__auto__ = e35947;
var statearr_35948_36450 = state_35943;
(statearr_35948_36450[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_35943[(4)]))){
var statearr_35949_36451 = state_35943;
(statearr_35949_36451[(1)] = cljs.core.first((state_35943[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36452 = state_35943;
state_35943 = G__36452;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto__ = function(state_35943){
switch(arguments.length){
case 0:
return pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto____1.call(this,state_35943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto____0;
pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto____1;
return pbits_exercises$main$reload_begin_STAR__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_35950 = f__14688__auto__();
(statearr_35950[(6)] = c__14687__auto__);

return statearr_35950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});
pbits_exercises.main.reload_end_STAR_ = (function pbits_exercises$main$reload_end_STAR_(done){
var c__14687__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14688__auto__ = (function (){var switch__14602__auto__ = (function (state_35956){
var state_val_35957 = (state_35956[(1)]);
if((state_val_35957 === (1))){
var inst_35951 = pbits_exercises.main.init();
var state_35956__$1 = state_35956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35956__$1,(2),inst_35951);
} else {
if((state_val_35957 === (2))){
var inst_35953 = (state_35956[(2)]);
var inst_35954 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_35956__$1 = (function (){var statearr_35958 = state_35956;
(statearr_35958[(7)] = inst_35953);

return statearr_35958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35956__$1,inst_35954);
} else {
return null;
}
}
});
return (function() {
var pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto__ = null;
var pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto____0 = (function (){
var statearr_35959 = [null,null,null,null,null,null,null,null];
(statearr_35959[(0)] = pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto__);

(statearr_35959[(1)] = (1));

return statearr_35959;
});
var pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto____1 = (function (state_35956){
while(true){
var ret_value__14604__auto__ = (function (){try{while(true){
var result__14605__auto__ = switch__14602__auto__(state_35956);
if(cljs.core.keyword_identical_QMARK_(result__14605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14605__auto__;
}
break;
}
}catch (e35960){var ex__14606__auto__ = e35960;
var statearr_35961_36453 = state_35956;
(statearr_35961_36453[(2)] = ex__14606__auto__);


if(cljs.core.seq((state_35956[(4)]))){
var statearr_35962_36454 = state_35956;
(statearr_35962_36454[(1)] = cljs.core.first((state_35956[(4)])));

} else {
throw ex__14606__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36455 = state_35956;
state_35956 = G__36455;
continue;
} else {
return ret_value__14604__auto__;
}
break;
}
});
pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto__ = function(state_35956){
switch(arguments.length){
case 0:
return pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto____0.call(this);
case 1:
return pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto____1.call(this,state_35956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$0 = pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto____0;
pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto__.cljs$core$IFn$_invoke$arity$1 = pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto____1;
return pbits_exercises$main$reload_end_STAR__$_state_machine__14603__auto__;
})()
})();
var state__14689__auto__ = (function (){var statearr_35963 = f__14688__auto__();
(statearr_35963[(6)] = c__14687__auto__);

return statearr_35963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14689__auto__);
}));

return c__14687__auto__;
});

//# sourceMappingURL=pbits_exercises.main.js.map
